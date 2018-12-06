import Vue from 'vue'
import Vuex from 'vuex'
import gameData from './store/gameData'
import playerData from './store/playerData'
import questData from './store/questData'
import shopData from './store/shopData'
import backendData from './store/backendData'

Vue.use(Vuex)

export const store = new Vuex.Store({

    modules: [
        gameData,
        playerData,
        questData,
        shopData,
        backendData
    ],
})
