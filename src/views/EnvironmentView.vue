<template>
  <div className="container2 mx-auto p-4">
    <h1>Entorno, Cultura y Ocio</h1>
    <div>
      <EntornoNatural />
      <CulturaOcio />
    </div>
  </div>
</template>
<script>
import EntornoNatural from '@/components/EntornoNatural.vue'
import CulturaOcio from '@/components/CulturaOcio.vue'

export default {
  name: 'EnvironmentView',
  components: {
    EntornoNatural,
    CulturaOcio
  }
}
</script>
<styles scoped>
    
</styles>
