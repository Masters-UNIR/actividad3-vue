<template>
  <div className="container2 mx-auto">
    <h1 class="px-4">Sobre Nosotros</h1>
    <div>
      <InstalacionesRes />
      <NuestraHistoria />
      <!-- {/* TODO: Agregar más secciones */}
        {/* <div>Nuestro Equipo</div>
        <div>Perfil de la Cocinera</div> */} -->
    </div>
  </div>
</template>

<script>
import InstalacionesRes from '@/components/InstalacionesRes.vue'
import NuestraHistoria from '@/components/NuestraHistoria.vue'

export default {
  name: 'AboutView',
  components: {
    InstalacionesRes,
    NuestraHistoria
  }
}
</script>

<style scoped></style>
