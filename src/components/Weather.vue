<template>
    <div class="container mt-5 pt-5">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title" v-text="city_details.title"></h5>
                <h6 class="card-subtitle mb-2 text-muted" v-if="city_details" v-text="Math.round(city_details.consolidated_weather[0].max_temp)"></h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
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
      };
    },
    mounted() {
      let self = this;
      axios.get('/weather.php?command=search&keyword=' + self.city)
          .then(function (response) {
            axios.get('weather.php?command=location&woeid=' + response.data[0]['woeid'])
                .then(function (response) {
                  console.log(response.data);
                  self.city_details = response.data;
                });
          });
    },
  }
</script>