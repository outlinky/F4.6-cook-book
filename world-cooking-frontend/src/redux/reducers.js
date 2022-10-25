const defaultState = {
    categories: {},
    dishes: {}
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'FETCH_CATEGORIES_SUCCESS':
            return {...state, categories: action.payload}
        case 'FETCH_DISHES_SUCCESS':
            return {...state, dishes: action.payload}
        default:
            return state
    }

}

export default reducer;