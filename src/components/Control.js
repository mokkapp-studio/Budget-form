import React, {Fragment } from 'react';
import { reviewBudget } from '../helpers'; 

const Control = ({budget, rest}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: {budget}€        
            </div>
            <div className={reviewBudget(budget, rest)}>
                Restante: {rest}€
            </div>
        </Fragment>
       
     );
}
 
export default Control;

 