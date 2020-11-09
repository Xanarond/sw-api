<template>
  <div>
    <div class="row mb-5"></div>
    <div v-if="loading === true">
      <div class="container">
        <div class="d-flex justify-content-center" style="position: absolute;top: 45%;left: 45%;">
          <div class="spinner-border text-primary" style="width: 5rem; height: 5rem;" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="container">
      <div class="row">
        <div v-for="(character, index) in characters" class="col-6 about d-flex justify-content-center"
             v-bind:key="character">
          <div class="alert alert-info mt-5 about" role="alert">
            <h4>{{ character.name }}</h4>
            <div class="row justify-content-center">
              <div class="col-8">
                <div>
                  Пол: <strong>{{ character.gender }}</strong>
                </div>
                <div>
                  Рост: <strong>{{ character.height }}</strong>
                </div>
                <div>
                  Вес: <strong>{{ character.mass }}</strong>
                </div>
              </div>
            </div>
            <hr>
            <router-link :to="'/character/' + (index + 1)">
              <button type="button" class="btn btn-info">Подробная информация о персонаже</button>
            </router-link>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <b-pagination
            v-model="page"
            :total-rows="count"
            :per-page="pageSize"
            prev-text="Prev"
            next-text="Next"
            @change="handlePageChange"
        ></b-pagination>
      </div>
    </div>
    <div v-if="loading === true"></div>
    <div v-else>
      <footer class="m-auto">
        <div class="container">
          <div class="row">
            <h5 class="m-auto">SWAPI | Костюхин Влад | Подробная информация | Страница {{ page }}</h5>
          </div>
        </div>
      </footer>
    </div>
    <div class="modal" id="ModalBack" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
      <div class="d-flex justify-content-center" style="position: absolute;top: 45%;left: 45%;">
        <div class="spinner-border text-primary" style="width: 5rem; height: 5rem;" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from '../axios';
import $ from 'jquery';

export default {
  name: "Main",
  components: {},
  data() {
    return {
      loading: true,
      currentIndex: -1,
      page: 1,
      count: 90,
      pageSize: 10,
      id: this.$route.params['id'],
      characters: [],
      starships: [],
    }
  },
  created: function () {
    $('#ModalBack').modal('show');

    console.log(this.$route.params)
    http.get('/people/?page=' + this.$data.page)
        .then(response => {
          // this.$data.people = response.data.results;
          let people = response.data.results;
          people.forEach(item => {
            this.$data.characters.push(item)
            // this.$data.starships.push(item.starships)
          });
          /* console.log(response.status);
           console.log(response.statusText);
           console.log(response.headers);*/
          // console.log(response.config);
          this.$data.loading = false
        }).catch(error => {
      console.log(error);
    })
    http.get('/starships')
        .then(response => {
          console.log(response.config)
          let starships = response.data.results
          console.log(starships)
          starships.map(item => {
            this.$data.starships.push(item.name)
          })
          // console.log(starship)
          console.log(this.$data.starships)
        }).catch(error => {
      console.log(error);
    })
  },
  methods: {
    getData() {
      $('#ModalBack').modal('show');
      http.get('/people/?page=' + this.$data.page)
          .then(response => {
            // this.$data.people = response.data.results;
            let people = response.data.results;
            this.$data.characters.splice(0, 10)
            people.forEach(item => {
              this.$data.characters.push(item)
              // this.$data.starships.push(item.starships)
            });
            // console.log(this.$data.starships.map(name => name))
            // this.$data.starships.map(name => name);
            // console.log(response.data.results);
            /* console.log(response.status);
             console.log(response.statusText);
             console.log(response.headers);*/
            // console.log(response.config);
            $('#ModalBack').modal('hide');
          }).catch(error => {
        console.log(error);
      })
      http.get('/starships')
          .then(response => {
            console.log(response.config)
            let starships = response.data.results
            this.$data.starships.splice(0, 10)
            starships.map(item => {
              this.$data.starships.push(item.name)
            })
            // console.log(starship)
            console.log(this.$data.starships)
          }).catch(error => {
        console.log(error);
      })
    },

    handlePageChange(value) {
      this.page = value;
      this.getData();
    },


  }
}
</script>

<style scoped>
#ModalBack {
  background-color: #2c3e50;
  opacity: 90%;
}

footer {
  background-color: #000;
  color: #fff;
  padding: 0;
  margin: 0;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
