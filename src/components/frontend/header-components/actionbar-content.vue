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
    .actionbar-content {
        margin-left: 2em;
        border: 1px solid black;
        width: 50%;
        text-align: left;
        font-size: 0.7em !important;
        padding: 0.5em;
        border-radius: 0.25rem;
        background-color: #444444;
        text-transform: none;
    }
</style>