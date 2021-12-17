import http from "../http-common";

class PeliculasDataService {
  getAll() {
    return http.get("/peliculas");
  }

  get(id) {
    return http.get(`/peliculas/${id}`);
  }

  create(data) {
    return http.post("/peliculas", data);
  }

  update(id, pelicula) {
    return http.put(`/peliculas/${id}`, pelicula);
  }

  delete(id) {
    return http.delete(`/peliculas/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new PeliculasDataService();
