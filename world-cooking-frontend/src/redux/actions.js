import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000';


const fetchCategoriesSuccess = categories => ({
    type: 'FETCH_CATEGORIES_SUCCESS',
    payload: categories
})

const fetchDishesSuccess = dishes => ({
    type: 'FETCH_DISHES_SUCCESS',
    payload: dishes
})

export const fetchCategories = () => {
    return async dispatch => {
        try {
            let categories = await axios.get('/api/v1/categories/')
            dispatch(fetchCategoriesSuccess(categories))
        } catch (e) {
        }
    }
}

export const fetchDishes = () => {
    return async dispatch => {
        try {
            let dishes = await axios.get('/api/v1/dishes/')
            dispatch(fetchDishesSuccess(dishes))
        } catch (e) {
        }
    }
}