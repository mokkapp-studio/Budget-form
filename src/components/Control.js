import React, {Fragment } from 'react';

const Control = ({budget, rest}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: {budget}€        
            </div>
            <div className="alert">
                Restante: {rest} €
            </div>
        </Fragment>
       
     );
}
 
export default Control;

