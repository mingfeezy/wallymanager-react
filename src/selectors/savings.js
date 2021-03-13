export default (savings, {sortBy}) => {
    return savings.sort((a,b)=>{
        if(sortBy === 'savings-amount-descending') {
            return b.amount - a.amount;
        }
        else if(sortBy === 'savings-amount-ascending') {
           return a.amount - b.amount;
        }
        else if(sortBy === 'savings-description-ascending') {
            return a.description.localeCompare(b.description);
         }
        else if(sortBy === 'savings-description-descending') {
            return b.description.localeCompare(a.description);
         }
         else {
             return 0;
         }
    });
}