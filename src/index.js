import React from 'react';
import ReactDOM from 'react-dom';

 function luckyNumber () {
    const luckyNum = Math.floor(( Math.random() * 1000 ) + 1 );
    return luckyNum;
};

function greeting ( user ) {
    return  <div className='container'>
                <h1>Hello { user.name }!</h1>
                <h2 className='text-muted'>The lucky number is: { user.luckyNumber }</h2>
            </div>
};

 const user = {
    name: 'Bobby',
    luckyNumber: luckyNumber(),
};

 // this suppose to stay at the bottom of the page
ReactDOM.render (
    <h1 className = "container">React Prototypes!</h1>,
    greeting( user ),
    document.getElementById( 'root' )
);
