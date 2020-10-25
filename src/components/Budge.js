import React from 'react';

const Budge = ({budge}) => {
    return ( 
        <li>
            <p> {budge.name}
                <span className="gasto">{`${budge.quantity} €`}</span>
            </p>
        </li>
     );
}
 
export default Budge;