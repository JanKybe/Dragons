<template>
    <div class="actionbar-content" v-if="currentGame">
        {{ playerAction.message }}
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'actionbar-content',

        computed: {
            ...mapGetters({
                currentGame: 'currentGame',
                playerAction: 'playerAction'
            })
        }
    }
</script>

<style scoped>

    @media (max-width: 767px) {
        .actionbar-content {
            border: 1px solid black;
            font-size: 0.7em !important;
            padding: 1em;
            width: 100%;
            background-color: #444444;
            text-transform: none;
        }
    }

    @media screen and (min-width: 768px ) and (max-width: 1100px) {
        .actionbar-content {
            margin-left: 2em;
            border: 1px solid black;
            text-align: left;
            font-size: 0.5em !important;
            padding: 0.5em;
            border-radius: 0.25rem;
            background-color: #444444;
            text-transform: none;
        }
    }

    @media (min-width: 1101px) {
        .actionbar-content {
            margin-left: 2em;
            border: 1px solid black;
            text-align: left;
            font-size: 0.7em !important;
            padding: 0.5em;
            border-radius: 0.25rem;
            background-color: #444444;
            text-transform: none;
        }
    }
</style>