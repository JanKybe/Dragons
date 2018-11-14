<template>
  <div class="home">
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
import CardBackend from '@/components/home/card_backend'
import CardFrontend from '@/components/home/card_frontend'

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

  .home-content {
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 25px;
  }

</style>
