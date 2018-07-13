<template>
    <div class="container">
        <h1 v-if="city_details && consolidated" v-text="city_details.title" class="text-center"></h1>
        <div class="card mb-5" v-if="city_details" :style="icon" @click="redirectCity(city_details.woeid)"
             :class="{'text-white bg-primary mb-5':consolidated}" style="cursor: pointer;">
            <div class="card-body">
                <h5 class="card-title" v-text="city_details.title" v-if="!consolidated"></h5>
                <h3 class="card-title text-center" v-if="consolidated">Today</h3>
                <div class="card_subtitle">
                    <h6 v-text="`Temperature : ${Math.round(city_details.consolidated_weather[0].the_temp)} °C`"></h6>
                    <span v-text="city_details.consolidated_weather[0].weather_state_name"></span>
                </div>
                <div class="card-text">
                    <div class="row">
                        <div class="col-md-6">
                                <span class="lead"
                                      v-text="`Max : ${Math.round(city_details.consolidated_weather[0].max_temp)} °C - Min : ${Math.round(city_details.consolidated_weather[0].min_temp)} °C`"></span>

                        </div>
                        <div class="col-md-6">
                            <h3 class="text-danger text-center" v-if="!consolidated">Today</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--Consolidated Weather-->
        <div v-if="consolidated" v-for="day in consolidatedWeather">
            <div class="card mb-2" :style="getIcon(day.weather_state_abbr)">
                <div class="card-body">
                    <h5 class="card-title" v-text="getDate(day.applicable_date)"></h5>
                    <div class="card_subtitle">
                        <h6 class="text-muted"
                            v-text="`Temperature : ${Math.round(day.the_temp)} °C`"></h6>
                        <span v-text="day.weather_state_name" class="text-info"></span>
                    </div>
                    <div class="card-text">
                        <div class="row">
                            <div class="col-md-6">
                                <span class="lead"
                                      v-text="`Max : ${Math.round(day.max_temp)} °C`"></span>
                                -
                                <span class="lead"
                                      v-text="`Max : ${Math.round(day.min_temp)} °C`"> </span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--Not Found Exception-->
        <h2 v-if="notFound" class="text-center mt-3"
            v-text="`No results were found for : (${city}). Try changing the keyword!`"></h2>
    </div>
</template>

<script>
    import Router from 'vue-router';
  export default {
    props: ['city', 'woeid', 'consolidated'],
    data() {
      return {
        city_details: false,
        icon_name: null,
        loading: true,
        consolidatedWeather: false,
        notFound: false
      };
    },
    computed: {
      icon() {
        return `background: url("https://www.metaweather.com/static/img/weather/png/${this.icon_name}.png") no-repeat;background-position-x: 100%;background-position-y: 40%;background-size: 14%;`;
      }
    },
    watch: {
      city_details: function (val){
        if (val) {
          this.$emit('notLoading');
        }
      }
    },
    created() {
      if (this.city) this.getWoeid(this.city);
      else if (this.woeid) this.getCityDetails(this.woeid);
      
      document.body.addEventListener('keyup', (e) => {
        (e.keyCode === 72 ) ? this.$router.push({ name: 'Home' }) : ''
      });
    },
    methods: {
      getCityDetails(woeid) {
        const self = this;
        axios.get(`/weather.php?command=location&woeid=${woeid}`)
            .then((response) => {
              let arr = response.data.consolidated_weather;
              self.consolidatedWeather = arr.splice(1, arr.length);
              self.city_details = response.data;
              self.icon_name = response.data.consolidated_weather[0].weather_state_abbr;
            });
      },
      getWoeid(city) {
        const self = this;
        axios.get(`/weather.php?command=search&keyword=${city}`)
            .then((response) => {
              if (response.data.length > 0) {
                self.getCityDetails(response.data[0]['woeid']);
              }
              else {
                self.notFound = true;
              }
            });
      },
      redirectCity(woeid) {
        this.$router.push(`/weather/${woeid}`)
      },
      getIcon(iconName) {
        return `background: url(https://www.metaweather.com/static/img/weather/png/${iconName}.png) no-repeat;background-position-x:100%;background-position-y: 40%;background-size: 14%;`
      },
      getDate(date) {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let d = new Date(date);
        let year = date.slice(0, 4);
        let currentDate = date.slice(8, 10);
        return `${days[d.getDay()]} ${currentDate} ${months[d.getMonth()]} ${year}`;
      }
    },
  }
</script>