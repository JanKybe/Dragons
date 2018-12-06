<template>
    <div class="quest-content animated fadeIn" v-if="currentPage">
        <QuestItem v-for="item in questData"
               v-bind:quest-data="item"
               v-bind:key="item.adId">
        </QuestItem>
    </div>
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
            ...mapGetters({
                questData: 'questData',
                currentPage: 'currentPage'
            })
        }
    }
</script>

<style scoped>

    .quest-content {
        display: grid;
        grid-template-columns: repeat(5, auto);
        grid-template-rows: repeat(2, auto);
        grid-row-gap: 0.6em;
        grid-column-gap: 0.6em;
    }
</style>