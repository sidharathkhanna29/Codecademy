import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component {
  render(){
    let task;
    if (fiftyFifty) {
      task = "out"
    }
    else {
      task = "to bed"
    }
    return (
     <div>
        <h1>Tonight I'm going {task} WOOO</h1>
     </div>
   ); 
  }
}

ReactDOM.render(
	<TonightsPlan />,
	document.getElementById('app')
);