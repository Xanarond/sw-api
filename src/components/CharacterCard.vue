<template>
  <div id="card">
    <div v-if="loading === true">
      <div class="container">
        <div class="d-flex justify-content-center" style="position: absolute;top: 45%;left: 45%;">
          <div class="spinner-border text-primary" style="width: 5rem; height: 5rem;" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container pt-5">
      <div class="row pb-5"></div>
      <div v-for="(item, index) in character" v-bind:key="index">
        <div class="row">
          <div class="col-6">
            <h2>{{ item.name }}</h2>
          </div>
          <div class="col-6">
            <router-link :to="'/'">
              <button type="button" class="btn btn-success">Назад к списку</button>
            </router-link>
          </div>
          <hr style="">
          <div class="row align-content-center">
            <div class="col-12">
              <div class="alert alert-info mt-5 about traits" role="alert">
                <ul>
                  <li>Дата рождения: <strong>{{ item.birth_year }}</strong></li>
                  <li>Пол: <strong>{{ item.gender }}</strong></li>
                  <li>Рост: <strong>{{ item.height }}</strong></li>
                  <li>Вес: <strong>{{ item.mass }}</strong></li>
                  <li>Цвет волос: <strong>{{ item.hair_color }}</strong></li>
                  <li>Цвет кожи(материала): <strong>{{ item.skin_color }}</strong></li>
                  <li>Цвет радужки глаз: <strong>{{ item.eye_color }}</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <footer class="m-auto">
        <div class="container">
          <div class="row">
            <h5 class="m-auto">SWAPI | Костюхин Влад | Подробная информация</h5>
          </div>
        </div>
      </footer>
  </div>
</template>

<script>
import http from "@/axios";
// import $ from "jquery";

export default {
  name: "CharacterCard",
  data() {
    return {
      loading: true,
      id: this.$route.params['id'],
      character: [],
      films: []
    }
  },
  created() {
    http.get('/people/' + this.$route.params['id'] + '/')
        .then(response => {
          let people = response.data;
          // console.log(people)
          this.$data.character.push(people)
          console.log(this.$data.character.films)
          this.$data.loading = false
        }).catch(error => {
      console.log(error);
    });
  }
}
</script>

<style scoped>
#card {
  color: #fff;
}

li {
  border-bottom: 1px #000000;
  list-style-type: none;
  text-align: start;
}
footer {
  background-color: #000;
  color: #fff;
  padding: 0;
  margin: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
