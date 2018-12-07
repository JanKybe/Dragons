<template>
  <div class="home animated fadeIn">
    <div class="home-title">
      <h1>Dragons of Mugloar</h1>
    </div>

    <div class="home-content">
      <CardBackend/>
      <CardFrontend/>
    </div>
  </div>
</template>

<script>
import CardBackend from '@/components/frontend/home-components/card_backend'
import CardFrontend from '@/components/frontend/home-components/card_frontend'

export default {
  name: 'home',

  components: {
    CardBackend,
    CardFrontend
  }
}
</script>

<style scoped>
  .home {
    display: grid;
    text-align: center;
  }

  .home-title {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  @media (max-width: 767px) {
    .home-content {
      display: grid;
      grid-template-columns: auto;
      justify-items: center;
    }
  }

  @media screen and (min-width: 768px ) and (max-width: 1100px) {
    .home-content {
      display: grid;
      grid-template-columns: auto auto;
      grid-column-gap: 25px;
    }
  }

  @media (min-width: 1101px) {
    .home-content {
      display: grid;
      grid-template-columns: auto auto;
      grid-column-gap: 25px;
    }
  }

</style>
