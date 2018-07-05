<template>
    <div class="container">
        <div class="card" v-if="city_details" :style="icon">
            <div class="card-body">
                <h5 class="card-title" v-text="city_details.title"></h5>
                <div class="card_subtitle">
                    <h6 class="text-muted"
                        v-text="'Temperature : ' + Math.round(city_details.consolidated_weather[0].the_temp)"></h6>
                    <span v-text="city_details.consolidated_weather[0].weather_state_name" class="text-info"></span>
                </div>
                <div class="card-text">
                        <span class="lead"
                              v-text="'Max : '+Math.round(city_details.consolidated_weather[0].max_temp)"></span> -
                    <span class="lead"
                          v-text="'Min : '+Math.round(city_details.consolidated_weather[0].min_temp)"> </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: ['city'],
    data() {
      return {
        city_details: false,
        icon_name: null
      };
    },
    computed: {
      icon() {
        return 'background: url("https://www.metaweather.com/static/img/weather/png/' + this.icon_name + '.png") no-repeat;background-position-x: 100%;background-position-y: 40%;background-size: 14%;';
      }
    },
    mounted() {
      let self = this;
      axios.get('/weather.php?command=search&keyword=' + self.city)
          .then(function (response) {
            axios.get('weather.php?command=location&woeid=' + response.data[0]['woeid'])
                .then(function (response) {
                  console.log(response.data);
                  self.city_details = response.data;
                  self.icon_name = response.data.consolidated_weather[0].weather_state_abbr;
                });
          });
    },
  }
</script>