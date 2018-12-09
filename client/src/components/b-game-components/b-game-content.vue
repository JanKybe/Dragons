<template>
    <div class='b-game-content'>
        <b-welcome/>

        <div v-if="b_playerData.turn > 0 && b_playerData.lives > 0">
            <b-turn/>    
        </div>

        <div v-else-if="b_playerData.lives === 0">
            <b-game-over/>
        </div>
    </div>
</template>

<script>

import bWelcome from '@/components/b-game-components/b-welcome-message'
import bTurn from '@/components/b-game-components/b-game-turn-data'
import bGameOver from '@/components/b-game-components/b-gameover-content'

import { mapGetters } from 'vuex'

export default {

    name: 'b-game-content',

    components: {
        bWelcome,
        bTurn,
        bGameOver
    },

    computed: {
        ...mapGetters({
            b_playerData: 'b_playerData'
        })
    }
}
</script>
