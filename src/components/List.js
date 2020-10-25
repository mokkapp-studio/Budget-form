import React from 'react';
import Budge from './Budge';

const List = ({budges}) => {
    return ( 
        <div className="gastos-realizados">
            <h2>My List</h2>
            {budges.map( budge =>(
                <Budge
                    key={budge.id}
                    budge={budge}
                />
            ))}
        </div>
     );
}
 
export default List;