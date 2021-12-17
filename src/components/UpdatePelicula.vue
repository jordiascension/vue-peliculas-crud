<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="id">Id</label>
        <input
          type="text"
          class="form-control"
          id="id"
          required
          v-model="pelicula.id"
          name="id"
        />
      </div>
      
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
    </div>
  </div>
</template>

<script>
import PeliculasDataService from "../services/PeliculasDataService";
export default {
  name: "UpdatePelicula",
  mounted(){
     this.pelicula.id=this.$route.params.id;
  },
  data() {
    return {
      pelicula: {
        id: null,
        nombre: "",
        director: "",
        clasificacion: ""
      },
      submitted: false,
      peliculaId: null
    };
  },
  methods: {
    savePelicula() {
      var peliculaData = {
        id : this.pelicula.id,
        nombre: this.pelicula.nombre,
        director: this.pelicula.director,
        clasificacion: this.pelicula.clasificacion
      };
      PeliculasDataService.update(this.pelicula.id,peliculaData)
        .then(response => {
          console.log(JSON.stringify(response.data))
          alert('Película Modificada')
          this.submitted = true
        })
        .catch(e => {
          alert('Error al crear Película')
          console.log(e)
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