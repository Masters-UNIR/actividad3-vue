<template>
  <footer class="container-fluid bg-dark text-secondary mt-auto footer">
    <div class="container2 mx-auto py-5">
      <div class="d-flex justify-content-between align-items-center logo-menu">
        <div class="logo">
          <router-link to="/home"
            ><h1 class="titulo">
              Mery-Lou <br />
              Bar-Restaurant
            </h1></router-link
          >
        </div>
        <nav class="menu-principal text-white">
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/about">Sobre Nosotros</router-link></li>
          <li><router-link to="/environment">Entorno, Cultura y Ocio</router-link></li>
          <li><router-link to="/contact">Contacto</router-link></li>
        </nav>
      </div>
      <div class="redes-sociales text-center mt-5">
        <i class="fa-brands fa-facebook fa-2xl p-4"></i>
        <i class="fa-brands fa-instagram fa-2xl p-4"></i>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
.titulo {
  color: white;
  font-size: 1.6rem;
  font-weight: bold;
}

.logo {
  background-image: url('../assets/img/logo.png');
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

.footer .menu-principal {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.footer .menu-principal a {
  color: #ccc;
  text-decoration: none;
}

.footer .menu-principal a:hover {
  color: #f26822;
}

@media screen and (max-width: 768px) {
  .logo-menu {
    flex-direction: column;
    gap: 2rem;
  }
}

.container2 {
  max-width: 1200px;
}
</style>
