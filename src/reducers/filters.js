
//import moment from 'moment';

const filtersReducerDefaultState = {
    sortBy:'amount-ascending'
};

const FiltersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case "SORT_BY_INCOME_ASCENDING": 
            return {
                ...state,
                sortBy:'amount-ascending'
            }
        case "SORT_BY_INCOME_DESCENDING": 
            return {
                ...state,
                sortBy:'amount-descending'
            }
        case "SORT_BY_DATE_ASCENDING": 
            return {
                ...state,
                sortBy:'date-ascending'
            }
        case "SORT_BY_DATE_DESCENDING": 
            return {
                ...state,
                sortBy:'date-descending'
            }
        case "SORT_BY_SAVINGS_AMOUNT_ASCENDING": 
            return {
                ...state,
                sortBy:'savings-amount-ascending'
            }
        case "SORT_BY_SAVINGS_AMOUNT_DESCENDING": 
            return {
                ...state,
                sortBy:'savings-amount-descending'
            }
        case "SORT_BY_SAVINGS_DESCRIPTION_ASCENDING": 
            return {
                ...state,
                sortBy:'savings-description-ascending'
            }
        case "SORT_BY_SAVINGS_DESCRIPTION_DESCENDING": 
            return {
                ...state,
                sortBy:'savings-description-descending'
            }
        default:
            return state;
    }
}

export default FiltersReducer;