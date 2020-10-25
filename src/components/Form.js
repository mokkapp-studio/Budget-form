import React, { useState} from 'react';
import Error from './error';
import shortid from 'shortid';

const Myform = ({updateNewBadge}) => {


    const [name, setName] = useState('');
    const [quantity, setQuantity ] = useState(0);
    const [error, setError] = useState(false)


    const updateBudget = e => {
        e.preventDefault();

        if(quantity < 1 || isNaN(quantity) || name.trim() === ''){
            setError(true);
            return;
        }
        setError(false);

        // build budget
        const budget = {
            name,
            quantity,
            id: shortid.generate()
        }

        //console.log(budget)
        updateNewBadge(budget)
        
        setName('');
        setQuantity (0);



    }


    return ( 
        <form
            onSubmit={updateBudget}
        >
            <h2>Introduce your expenses</h2>
            {error === true ?
            (
                <Error mensaje="All fields are mandatory or the budget entered is incorrect"/>
            )
                :
            (
                null
            )
            }
            <div className="campo">
                <label>Name</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ex: Music"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Quantity</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ex: 200€"
                    value={quantity}
                    onChange={e => setQuantity(parseInt(e.target.value, 10))}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Send"
            />
        </form>
     );
}
 
export default Myform;