<script>
import InfoBarVue from '@/components/InfoBar.vue'
import FooterPage from '@/components/FooterPage.vue'

export default {
  name: 'App',
  components: {
    InfoBarVue,
    FooterPage
  }
}
</script>

<template>
  <InfoBarVue />
  <nav class="navbar navbar-expand-lg bg-success-subtle container2 mx-auto">
    <div class="container-fluid">
      <router-link to="/home" class="navbar-brand logo titulo">
        Mery-Lou <br />
        Bar-Restaurant
      </router-link>

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
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 menu-principal">
          <li class="nav-item">
            <router-link to="/home" class="nav-link active" aria-current="page"
              ><span data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                >Home</span
              ></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link"
              ><span data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                >Sobre Nosotros</span
              ></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/environment" class="nav-link"
              ><span data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                >Entorno, Cultura y Ocio</span
              ></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link"
              ><span data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                >Contacto</span
              ></router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />
  <FooterPage />
</template>

<style scoped>
.titulo {
  color: white;
  font-size: 1.6rem;
  font-weight: bold;
  padding-top: 1rem;
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

.menu-principal a:hover span {
  color: #f26822;
}
</style>
