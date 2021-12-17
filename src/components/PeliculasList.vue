<template>
    <div class="col-md-6">
      <h4>Películas Table</h4>
      <table class="table table-striped table-dark">
        <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Director</th>
            <th scope="col">Clasificacion</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="pelicula in peliculas" :key="pelicula.id">
                    <td>{{pelicula.id}}</td>
                    <td>{{pelicula.nombre}}</td>
                    <td>{{pelicula.director}}</td>
                    <td>{{pelicula.clasificacion}}</td>
                    <td><router-link :to="'/Update/' + pelicula.id" class="badge badge-warning">Update</router-link></td>
                    <td><a href="/Delete">Delete</a></td>
            </tr>
        </tbody>
        </table>
    </div>
</template>

<script>
import PeliculasDataService from "../services/PeliculasDataService";
export default {
  name: "PeliculasList",
  data() {
    return {
      peliculas: [],
      currentPelicula: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrievePeliculas() {
      //eslint-disable-next-line no-debugger 
      debugger
      PeliculasDataService.getAll()
        .then(response => {
          this.peliculas = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrievePeliculas();
      this.currentTutorial = null;
      this.currentIndex = -1;
    },
  },
  mounted() {
    this.retrievePeliculas();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>