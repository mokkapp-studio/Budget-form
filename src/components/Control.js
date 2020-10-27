import React, {Fragment } from 'react';
import { reviewBudget } from '../helpers'; 

const Control = ({budget, rest}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                My Budget: {budget}€        
            </div>
            <div className={reviewBudget(budget, rest)}>
                Rest: {rest}€
            </div>
        </Fragment>
       
     );
}
 
export default Control;

 