<template>
    <div>
        <h2 class="text-success text-center" v-if="loading">Loading Data</h2>
        <div class="container mt-5">
            <weather :woeid="this.woeid" :consolidated="true" @notLoading="removeLoading"></weather>
        </div>
    </div>
</template>

<script>
  export default {
    data(){
      return{
        woeid : this.$route.params.woeid,
        loading:true
      }
    },
    methods:{
      removeLoading(){
        self = this;
        self.loading = false
      }
    }
  }
</script>