<template>
  <div class="d-flex flex-column justify-content-center align-items-center gap-5 my-5 p-5">
    <div>
      <img class="w-100" src="../assets/img/giphy.gif" alt="Lost" />
    </div>
    <div>
      <h1 class="text-danger">Oops.</h1>
      <p class="text-danger fs-3">No podemos encontrar la página que estas buscando.</p>
      <p>Puede haber expirado, o puede ser un error de escritura.</p>
      <p>Quiza puedas encontrar lo que necesitas desde nuestra página de Inicio</p>
      <router-link to="/home" class="btn" style="background-color: #f26822; color: white"
        >Volver a Restaurant Mery-Lou</router-link
      >
    </div>
  </div>
</template>
<script>
export default {}
</script>
<styles scoped>

</styles>
