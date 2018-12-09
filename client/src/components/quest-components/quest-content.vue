<template>
    <div class="quest-content animated fadeIn" v-if="currentPage">
        <quest-item v-for="item in questData"
            :quest-data="item"
            :key="item.adId">
        </quest-item>
    </div>
</template>

<script>

    import QuestItem from '@/components/quest-components/quest-item'
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

    @media (max-width: 845px) {
        .quest-content {
            display: grid;
            grid-template-columns: 1;
            grid-template-rows: auto;
            grid-row-gap: 0.6em;
            grid-column-gap: 0.6em;;
            margin-bottom: 8em;
        }
    }

    @media screen and (min-width: 846px ) and (max-width: 1400px) {
        .quest-content {
            display: grid;
            grid-template-columns: repeat(2, auto);
            grid-template-rows: repeat(5, auto);
            grid-row-gap: 0.6em;
            grid-column-gap: 0.6em;
            margin-bottom: 8em;
        }
    }

    @media (min-width: 1401px) {
        .quest-content {
            display: grid;
            grid-template-columns: repeat(5, auto);
            grid-template-rows: repeat(2, auto);
            grid-row-gap: 0.6em;
            grid-column-gap: 0.6em;
        }
    }
</style>