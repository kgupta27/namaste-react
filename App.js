import React from 'react'
import ReactDOM from 'react-dom/client'

// const heading = React.createElement("h1", { class: "test"}, "Hello World from React!")

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading);



{/* 
    create nested structure

    <div id="parent">
        <div id="child">
            <h1>This is heading 1</h1>
            <h2>This is heading 2</h2>
        </div>
        <div id="child2">
            <h1>This is heading 1</h1>
            <h2>This is heading 2</h2>
        </div>
    </div> 
*/}

// const parent = React.createElement("div", {id: "parent"}, 
//     [React.createElement("div", {id:"child"}, 
//            [React.createElement("h1", {}, "This is heading 1 bgchggh"), 
//             React.createElement("h2", {}, "This is heading 2")  
//            ]
//     ),
//     React.createElement("div", {id:"child2"}, 
//            [React.createElement("h1", {}, "This is heading 1"), 
//             React.createElement("h2", {}, "This is heading 2")  
//            ]
//     ),
// ]
// ) 

const Title = () => (
     <h1 className='head'>Namaste React by JSX</h1>
)

// JSX
const HeadingComponent = () => (
     <div id="container">
        <Title />
        <h1 id='heading'>Namaste React using functional component! </h1>
     </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);

