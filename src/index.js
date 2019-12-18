import React, {useState, useContext, useEffect, useReducer, useRef} from 'react';
import ReactDOM from 'react-dom';



function SomeComponent(){


    return (
        <div>
            <h3 style={{color:"red"}}>This is another component</h3>
        </div>
    )
}

function App(){



    return (
        <div>
            <h2>This is my first app</h2>
            <SomeComponent />
        </div>
    )
}



const root = document.getElementById("root");

ReactDOM.render(<App/>, root)