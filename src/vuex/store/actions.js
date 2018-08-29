export default { //在action中可以进行异步操作。
    add_book({ commit, state }, book) {
        commit('ADD_BOOK', book);
    },
    assignment({ commit, state }, list) {
        commit('assignment_list', list);
    }
}