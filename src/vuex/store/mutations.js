export default { //这里要注意不要在mutations里面进行异步操作
    ADD_BOOK(state, book) {
        state.bookList.push(book);
        var list = JSON.stringify(state.bookList)
        localStorage.setItem("bookList", list);
        return true;
    },
    assignment_list(state, list) {
        state.bookList = list;
        return true;
    }
}