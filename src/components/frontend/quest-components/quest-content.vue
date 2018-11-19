<template>
        <transition-group
                class="quest-content"
                mode="out-in"

                appear
                appear-active-class="animated fadeIn"

                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut">

            <QuestItem v-for="item in questData"
                       v-bind:quest-data="item"
                       :key="item.adId">
            </QuestItem>

        </transition-group>
</template>

<script>

    import QuestItem from '@/components/frontend/quest-components/quest-item'
    import {mapGetters} from 'vuex'


    export default {
        name: 'quest-content',
        components: {
            QuestItem
        },

        computed: {
            ...mapGetters([
                'questData'
            ])
        }
    }
</script>

<style scoped>

    .test {
        visibility: hidden;
    }

    .quest-content {
        display: grid;
        grid-template-columns: repeat(5, auto);
        grid-template-rows: repeat(2, auto);
        grid-row-gap: 0.6em;
        grid-column-gap: 0.6em;
    }
</style>