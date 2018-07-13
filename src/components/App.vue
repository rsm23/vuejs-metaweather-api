<template>
    <div class="container">
        <search></search>
        <h2 class="text-success text-center" v-if="loading">Loading Data</h2>
        <div  v-for="city in cities">
            <weather :city="city" @notLoading="removeLoading"></weather>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        cities: ["Istanbul", "Berlin", "London", "Helsinki", "Dublin", "Vancouver"],
        loading : true
      };
    },
    methods:{
      removeLoading(){
        const self = this;
        self.loading = false
      }
    }
  }
</script>