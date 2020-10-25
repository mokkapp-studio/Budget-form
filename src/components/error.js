import React from 'react';

const Error = (props) => {
    return ( 
        <div>
          <p className="alert alert-danger error">{props.mensaje}</p>
        </div>
     );
}
 
export default Error;