import React, { useState} from 'react';
import Questions from './components/questions';
import Myform from './components/Form'
import List from './components/List';
import Control from './components/Control';

const App = () => {

  const [budget, setBudget] = useState(0);
  const [rest, setRest] = useState(0);
  const [showquestion, setShowquestion] = useState(true);
  const [budges, setBudges] = useState([])


  const updateNewBadge = budget =>{
    setBudges([
      ...budges,
      budget
    ])
  }

  return ( 
    <div className="container">
      <header>
        <h1>My Budget</h1>
        <div className="contenido-principal contenido">
          { showquestion === true ? 
          (
            <Questions
              setBudget={setBudget}
              setRest={setRest}
              setShowquestion={setShowquestion}
            />
          ) : 
          (
            <div className="row">
              <div className="one-half column">
                <Myform
                  updateNewBadge={updateNewBadge}
                />
              </div>
              <div className="one-half column">
                <List
                  budges={budges}
                />
                <Control
                  budget={budget}
                  rest={rest}
                />
              </div>
            </div>
          )
          }
        </div>
      </header>
  
    </div>
   );
}
 
export default App;
