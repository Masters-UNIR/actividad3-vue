<script>
import InfoBarVue from '@/components/InfoBar.vue'

export default {
  name: 'App',
  components: {
    InfoBarVue
  }
}
</script>

<template>
  <InfoBarVue />
  <nav class="navbar navbar-expand-lg bg-success-subtle container2 mx-auto">
    <div class="container-fluid">
      <router-link to="/home" class="navbar-brand logo"
        ><h1 class="titulo">
          Mery-Lou <br />
          Bar-Restaurant
        </h1></router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/home" class="nav-link active" aria-current="page">Home</router-link>
          <router-link to="/about" class="nav-link">Sobre Nosotros</router-link>
          <router-link to="/environment" class="nav-link">Entorno, Cultura y Ocio</router-link>
          <router-link to="/contact" class="nav-link">Contacto</router-link>
        </div>
      </div>
    </div>
  </nav>
  <RouterView />
</template>

<style scoped>
.titulo {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}
.logo {
  background-image: url('./assets/img/logo.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 190px;
  height: 120px;

  text-align: center;
}

.logo a {
  display: inline-block;
  padding-top: 16px;
  text-decoration: none;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
}

@media screen and (min-width: 992px) {
  .menu-principal {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    margin-bottom: 0;
  }
}

.menu-principal li {
  margin: 0 15px;
}

.menu-principal a {
  text-decoration: none;
  color: #333;
}

.menu-principal a:hover {
  color: #f26822;
}

.titulo {
  font-size: 1.6rem;
}
</style>
