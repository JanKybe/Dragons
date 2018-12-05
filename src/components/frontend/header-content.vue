<template>
    <div class="header-content" v-if="currentGame">
        <b-img
            src="assets/f_logo.png" fluid alt="Logo" />
        <a href="/"> Dragons of Mugloar </a>

        <div class="notification">
            Welcome to Dragons of Mugloar Game!
        </div>
    </div>

    <div class="header-content" v-else>
        <b-img
            src="assets/b_logo.png" fluid alt="Logo" />
        <a href="/"> Dragons of Mugloar </a>
    </div>

</template>

<script>

    import { mapGetters } from 'vuex'

    export default {

        name: 'header-content',

        computed: {
            ...mapGetters({
                currentGame: 'currentGame'
            })
        }
    }

</script>

<style scoped>
    .header-content {
        display: flex;
        background-color: #2b2b2b;
        color: white;
        align-items: center;
        font-size: 1.5em;
        text-transform: uppercase;
    }

    a {
        text-decoration: none;
        color: white;
    }

    a:hover {
        text-decoration: none;
        color: purple;
    }

    .notification {
        margin-left: 2em;
        border: 1px solid black;
        width: 50%;
        text-align: left;
        font-size: 0.7em !important;
        padding: 0.2em;
        border-radius: 0.25rem;
        background-color: #444444;
        text-transform: none;
    }
</style>