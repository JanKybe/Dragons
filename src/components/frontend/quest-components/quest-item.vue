<template>
        <div class="quest-item">

            <b-card no-body class="quest-card text-center">

                <QuestStats
                        v-bind:probability="questData.probability"
                        v-bind:reward="questData.reward">

                </QuestStats>

                <div class="quest-message">
                    {{ questData.message }}
                </div>
                <div class="quest-start" v-on:click="startQuest(questData.adId)">
                    Start Quest >
                </div>

            </b-card>
        </div>
</template>

<script>

    import QuestStats from '@/components/frontend/quest-components/quest-item-stats'

    import {mapActions} from 'vuex'

    export default {
        name: 'quest-item',
        props: ['questData'],

        components: {
            QuestStats
        },

        methods: {
            ...mapActions([
                'startQuest'
            ]),


            startQuest: function (adId) {
                this.$store.dispatch('startQuest', adId);
            },
        }
    }
</script>

<style scoped>

    .quest-card {
        background-color: #f8f9fa;
        color: black;
    }

    .quest-message {
        height: 5em;
        margin: 1em;
        font-size: 0.95em;
    }

    .quest-start {
        height: 2.5em;
        background-color: white;
        line-height: 2.5em;
        border-bottom-left-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
        border-top: 1px solid rgba(0, 0, 0, 0.125);
        cursor: pointer;
    }

    .quest-start:hover {
        background-color: #2c2c2c;
        color: whitesmoke;
    }
</style>