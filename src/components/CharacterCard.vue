<template>
  <div>
    <div class="row pb-5"></div>
    <div class="container">
      <div v-for="(character, index) in character" v-bind:key="index"></div>
      <div class="row">
        <h1> {{ character.name }}</h1>
      </div>
    </div>
    <div class="p-5">Character is {{ id }}</div>
  </div>
</template>

<script>
import http from "@/axios";

export default {
  name: "CharacterCard",
  data() {
    return {
      id: this.$route.params['id'],
      character: []
    }
  },
  created() {
    http.get('/people/' + this.$route.params['id'] + '/')
        .then(response => {
          let people = response.data.results;
          console.log(response.data.results)
          people.forEach(item => {
            this.$data.character.push(item)
          });
        }).catch(error => {
      console.log(error);
    });
  }
}
</script>

<style scoped>

</style>
