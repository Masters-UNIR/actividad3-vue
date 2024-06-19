<script>
import CarrousImagesVue from '@/components/CarrousImages.vue'
import { firstCourse, main } from '../data/db.js'

export default {
  components: {
    CarrousImagesVue
  },
  data() {
    return {
      firstCourse,
      main
    }
  }
}
</script>

<template>
  <div class="container2 mx-auto p-4">
    <CarrousImagesVue />
    <div class="container2 my-5">
      <div class="row">
        <div class="col-12 col-lg-6">
          <h2 class="my-4">Cocina tradicional de mercado con productos frescos</h2>
          <p>
            En nuestro restaurante podrás disfrutar de una cocina tradicional de mercado con
            productos frescos y de calidad. Nuestro equipo de cocina elabora platos de la
            gastronomía mediterránea con un toque de autor. La carta de nuestro restaurante se
            renueva cada temporada para ofrecer a nuestros clientes platos elaborados con los
            mejores productos de cada estación del año.
          </p>
          <p>
            Ven y prueba un mundo de sensaciones que harán disfrutar los paladares más exigentes.
          </p>
          <img
            class="w-100 mt-5"
            src="../assets/img/plato_marisco_1.jpg"
            alt="Bogabante con huevos y patatas"
            title="Bogabante con huevos y patatas"
          />
        </div>
        <div class="col-12 col-lg-6 my-4">
          <img
            class="w-100"
            src="../assets/img/plato_carne_1.jpg"
            alt="Pies de cerdo"
            title="Pies de cerdo"
          />
        </div>
      </div>
    </div>
    <div class="my-5">
      <h2 class="my-4">Carta</h2>
      <div class="row">
        <div class="col-12 col-lg-6">
          <h3>Entrants / Primeros / First Course / Premiere</h3>
          <ul style="list-style-type: none">
            <div v-for="(course, index) in firstCourse" :key="index">
              <li>{{ course.nameCat }}</li>
              <li>{{ course.nameEsp }}</li>
              <li>{{ course.nameEng }}</li>
              <li>{{ course.nameFre }}</li>
            </div>
          </ul>
        </div>
        <div class="col-12 col-lg-6">
          <h3>Segons / Segundos /Main / Principal</h3>
          <ul style="list-style-type: none">
            <div v-for="(item, index) in main" :key="index">
              <li>{{ item.nameCat }}</li>
              <li>{{ item.nameEsp }}</li>
              <li>{{ item.nameEng }}</li>
              <li>{{ item.nameFre }}</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
ul li:nth-child(4n + 1) {
  font-size: 1.3rem;
  margin-top: 1.1rem;
}

.container2 {
  max-width: 1200px;
}
</style>
