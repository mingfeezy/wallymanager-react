import React from 'react';
import { connect } from 'react-redux';
import { sortByIncomeAscending, sortByIncomeDescending, sortByDateAscending, sortByDateDescending} from '../actions/ActionCreators';


const AMOUNT_ASCENDING = "0";
const AMOUNT_DESCENDING = "1";
const DATE_ASCENDING = "2";
const DATE_DESCENDING = "3";

const IncomeListFilters = (props) => {
    const sortOnChange = (e) => {
        switch(e.target.value) {
            case AMOUNT_ASCENDING:
                return props.dispatch(sortByIncomeAscending());
            case AMOUNT_DESCENDING:
                return props.dispatch(sortByIncomeDescending());
            case DATE_ASCENDING:
                return props.dispatch(sortByDateAscending());
            case DATE_DESCENDING:
                return props.dispatch(sortByDateDescending());
            default:
                props.dispatch(sortByIncomeAscending());
        }
    }

    return (
        <div>
            <select onChange={sortOnChange}>
                <option value="0">Amount Ascending</option>
                <option value="1">Amount Descending</option>
                <option value="2">Date Ascending</option>
                <option value="3">Date Descending</option>
            </select>
        </div>
    )
}

const mapStateToProps = state => (
    {
        filters: state.filters
    }
)

export default connect(mapStateToProps)(IncomeListFilters);