<template>
    <div class="header-logo-content" v-if="currentGame">
        <b-img
            src="assets/f_logo.png" fluid alt="Logo" />
        <a class="f-a" href="/"> Dragons of Mugloar </a>
    </div>

    <div class="header-logo-content" v-else>
        <b-img
            src="assets/b_logo.png" fluid alt="Logo" />
        <a class="b-a" href="/"> Dragons of Mugloar </a>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    name: 'header-logo-content',

    computed: {
        ...mapGetters({
            currentGame: 'currentGame'
        })
    }
}

</script>

<style scoped>
    .f-a {
        text-decoration: none;
        color: white;
    }

    .b-a {
        text-decoration: none;
        color: white;
    }

    .f-a:hover {
        text-decoration: none;
        color: purple;
    }

    .b-a:hover {
        text-decoration: none;
        color: orange;
    }

</style>