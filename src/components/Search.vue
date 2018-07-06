<template>
    <div>
        <div class="container mb-4 mt-4">
            <form class="form-inline col-md-8 m-auto" @submit.prevent="Search">
                <input class="form-control w-75" v-model="keyword" type="search"
                       placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success w-25"
                        type="submit">
                    Search
                </button>
            </form>
        </div>
        <weather v-if="query" :city="query"></weather>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        query: this.$route.params.keyword,
        keyword: ''
      }
    },
    methods: {
      Search() {
        let self = this;
        this.$router.push('/search/' + self.keyword);
      }
    }
  }
</script>