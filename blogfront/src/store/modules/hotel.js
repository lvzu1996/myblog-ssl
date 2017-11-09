
const hotel = {
    state: {
        count: 0
    },
    mutations: {
        addCount: (state) => {state.count++},
        minusCount: (state) => { state.count--; console.log("mutation minus!") }
    },
    actions: {
        addCountAction: ({ commit }) => { setTimeout(() => {commit('addCount')},1000); console.log('action add!'); }
    },
    getters: {
        count: state => state.count+10
    }
}

export default hotel