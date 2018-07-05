<template>
    <div class="container">
        <div  v-for="city in cities">
            <weather :city="city"></weather>
        </div>
    </div>
</template>

<script>

  export default {
    data() {
      return {
        cities: ["Istanbul", "Berlin", "London", "Helsinki", "Dublin", "Vancouver"]
      };
    },
  }
</script>