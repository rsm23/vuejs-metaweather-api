<template>
    <div>
        <h1 v-text="woeid"></h1>
    </div>
</template>

<script>
  export default {
    data(){
      return{
        woeid : this.$route.params.woeid
      }
    }
  }
</script>