<template>
  <div class="container2 mx-auto text-center">
    <h1>Contactanos</h1>
    <div class="row">
      <div class="col-12">
        <!-- <img src="" alt="" /> -->
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h2>Dirección</h2>
        <p>Av. de Riells, 114B 17130 L&apos;Escala</p>
      </div>
      <div class="col-12">
        <h2>Coordenadas GPS</h2>
        <p>Latitud 42.114800 Longitud 3.144766</p>
      </div>
      <div class="col-12">
        <h2>Teléfonos</h2>
        <p>972 793 235 &nbsp;&nbsp;&nbsp; 607 951 936</p>
      </div>
      <div class="col-12">
        <h2>Abrimos</h2>
        <h3>Durante el año</h3>
        <p>Mie - Dom 1pm - 17pm (comidas)</p>
        <p>Vie - Sat 8pm - 1am (cenas)</p>
        <h3>En Verano Julio - Agosto</h3>
        <p>Mie - Dom 1pm - 17pm (comidas)</p>
        <p>Mie - Dom 8pm - 2am (cenas)</p>
      </div>
    </div>
    <div class="row">
      <GoogleMap />
    </div>
  </div>
</template>
<script>
import GoogleMap from '@/components/GoogleMap.vue'
export default {
  name: 'ContactoView',
  components: {
    GoogleMap
  }
}
</script>
<styles scoped>

</styles>
