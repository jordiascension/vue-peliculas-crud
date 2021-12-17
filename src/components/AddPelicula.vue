<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="nombre"
          required
          v-model="pelicula.nombre"
          name="nombre"
        />
      </div>

      <div class="form-group">
        <label for="director">Director</label>
        <input
          class="form-control"
          id="director"
          required
          v-model="pelicula.director"
          name="director"
        />
      </div>

      <div class="form-group">
        <label for="clasificacion">Clasificacion</label>
        <input
          class="form-control"
          id="clasificacion"
          required
          v-model="pelicula.clasificacion"
          name="clasificacion"
        />
      </div>

      <button @click="savePelicula" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newPelicula">Add</button>
    </div>
  </div>
</template>

<script>
import PeliculasDataService from "../services/PeliculasDataService";
export default {
  name: "AddPelicula",
  data() {
    return {
      pelicula: {
        id: null,
        nombre: "",
        director: "",
        clasificacion: ""
      },
      submitted: false
    };
  },
  methods: {
    savePelicula() {
      var peliculaData = {
        nombre: this.pelicula.nombre,
        director: this.pelicula.director,
        clasificacion: this.pelicula.clasificacion
      };
      PeliculasDataService.create(peliculaData)
        .then(response => {
          this.pelicula.id = response.data.id;
          console.log(JSON.stringify(response.data));
          alert('Película Creada')
          this.submitted = true;
        })
        .catch(e => {
          alert('Error al crear Película')
          console.log(e);
        });
    },
    
    newPelicula() {
      this.submitted = false;
      this.pelicula = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>