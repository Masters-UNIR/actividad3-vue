<template>
  <div class="container-fluid bg-dark text-secondary sticky-top">
    <div class="container2 mx-auto">
      <div class="d-flex justify-content-between align-items-center p-2 info-container">
        <div><i class="fa-solid fa-location-dot"></i> AV. DE RIELLS, 114B 17130 L'ESCALA</div>
        <div class="d-flex">
          <div class="me-5"><i class="fa-solid fa-phone"></i> 972793235</div>
          <div><i class="fa-solid fa-mobile-screen"></i> 607951936</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .info-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>
