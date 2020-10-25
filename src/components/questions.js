import React, {Fragment, useState } from 'react';
import Error from './error';

const Questions = ({setRest, setBudget, setShowquestion}) => {

    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState(false)
    // function 
    const defineBudget = e => {
        setQuantity(parseInt(e.target.value))
    }

    // submit
    const updateBudget = e => {
        e.preventDefault();
        if(quantity < 1 || isNaN(quantity)){
            setError(true);
            return;
        }
        setError(false);
        setBudget(quantity);
        setRest(quantity);
        setShowquestion(false);
    }

    return ( 
        <Fragment>
            <h2>Enter your Budget</h2>
            <div>{ error === true 
                ? 
                (<Error mensaje="El presuuesto debe ser positivo"/>) 
                : null}
            </div>
            <form
                onSubmit={updateBudget}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="enter your budget"
                    onChange={defineBudget}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Define budget"
                />
            </form>
        </Fragment>
     );
}
 
export default Questions;
