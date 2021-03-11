
//import moment from 'moment';

const filtersReducerDefaultState = {
    sortBy:'amount-ascending'
};

const FiltersReducer = (state = filtersReducerDefaultState, action) => {
    console.log('right reducer');
    switch(action.type) {
        case "SORT_BY_INCOME_ASCENDING": 
            return {
                ...state,
                sortBy:'amount-ascending',
            }
        case "SORT_BY_INCOME_DESCENDING": 
            return {
                ...state,
                sortBy:'amount-descending',
            }
        case "SORT_BY_DATE_ASCENDING": 
            return {
                ...state,
                sortBy:'date-ascending',
            }
        case "SORT_BY_DATE_DESCENDING": 
            return {
                ...state,
                sortBy:'date-descending',
            }
       
        default:
            return state;
    }
}

export default FiltersReducer;