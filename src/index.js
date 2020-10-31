// import default from 'symbol-observable';

// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import './index.css';

// // ReactDOM.render(

// //   <h1>
// //     Hello Word !!
// //   </h1>,


// const redux = require('redux');
// const createStore = redux.createStore;
// const Buy_Book = "Buy_Book";

// const initialState = {
//     numbersOfBlocks: 10,
// }

// function Buy_Book() {
//     // const action = { 
//     return {
//         type: Buy_Book,
//         info: " my first Redux Code"
//     }
// }
// // (prevState, action)=> newState

// const Reducer = (state = initialState, action) => {

//     switch (action.type) {
//         case "Buy_Book": return {
//             ...state,
//             numbersOfBlocks: state.numbersOfBlocks - 1
//         }
//         default: return state;
//     }
// }

// const store = createStore(Reducer);
// console.log("Initial Store", store.getState());
// const unsubscribe = store.subscribe(() => { console.log('updated State value', store.getState()) });
// store.subscribe(() => {
//     console.log('updatedstate value', store.getState())
// });
// store.dispatch(buyBook());
// unsubscribe();


// //   document.getElementById('root')
// // );

//  var React = require('react'); 
// var ReactDOM =require('react-dom');
// import React from 'react'
// import ReactDOM from 'react-dom';


// const fName = "Amol-Pawar"
// const currDate = new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();
// const img = "https://picsum.photos/200/300";
// const links = "https://picsum.photos/";

// ReactDOM.render(

//     <div>
//         <h1>my name is {fName} </h1>
//         <h1>todys current Date  {currDate}  </h1>
//         <h1>todys current time  {currTime}  </h1>

//         <h1 contentEditable="true">My name is  {fName}  </h1>
//         <img src="https://picsum.photos/200/300" alt="randomImg" />

//         <img src={img} alt="randomImg" />

//         <a href={links} target="_blank">
//             <img src={img} alt="randomImg" />
//         </a>
//     </div>

//     , document.getElementById("root")


// );
// import React from 'react';
// import ReactDOM from 'react-dom';


// class Car extends React.Component {
//     render() {
//       return <h2>I am a {this.props.s}!</h2>;
//     }
//   }

//   class Garage extends React.Component {
//     render() {
//       const carname = "Ford";
//       return (
//         <div>
//         <h1>Who lives in my Garage?</h1>
//         <Car s={carname} />
//         </div>
//       );
//     }
//   }
// class Car extends React.Component {
//     render() {
//         return <h2>I am a {this.props.brand}!</h2>;
//     }
// }
// class CarModelNo extends React.Component {
//     render() {
//         return <h3> My Car Model No {this.props.brand.modelNo}</h3>
//     }
// }

// class Garage extends React.Component {
//     render() {
//         const carModel = { no: "Fo5rdn57484", modelNo: "-123456" };
//         const carinfo = 'Mustang';
//         return (
//             <div>
//                 <h1>Who lives in my garage?</h1>
//                 <Car brand={carinfo} />

//                 <CarModelNo brand={carModel} />
//             </div>
//         );
//     }
// }


// ReactDOM.render(<Garage />, document.getElementById('root'));



// // const Fname = "Dr.Amol";
// // const Lname ="Pawar";
// // ReactDOM.render(
// //     <div>
// //         <h1>my name is {Fname} {Lname} </h1>
// //         <h1>my name is {Fname + " " + Lname} </h1>
// //         <p> my luky numbers is { 2001 + 2001 }</p>

// //         <p> my luky numbers is {Math.random() }</p>
// //     </div>, document.getElementById("root")
// // );


// // ReactDOM.render(
// //     <div>
// //         <h1> this is the thapa teqnical </h1>
// //         <p> Here the list of my five  netflix series</p>
// //         <ol>
// //             <li>Dark</li>
// //             <li>Extra Circular</li>
// //             <li>My Holo love</li>
// //             <li>My first-2 love</li>
// //             <li>My Robot</li>
// //         </ol>
// //     </div>
// //     , document.getElementById("root")
// // );

// // ReactDOM.render(
// // <React.Fragment>
// //     <h1>This is thapa teqnical</h1>
// //     <p> plz like and share to all</p>
// //     <h2>plz subscribe my chnnel</h2>
// // </React.Fragment>,

// //     document.getElementById("root"));


// // ReactDOM.render(React.createElement("h1", null,
// //     " This is the Pure React code  "),
// //     document.getElementById("root"));



// // var h1 = document.createElement("h1");
// // h1.innerHTML = " this is the java script code ";
// // document.getElementById("root").appendChild(h1);


// normal web page design 20/10/2020

// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css";

// let currDate = new Date(2020, 5, 5, 13);
// currDate = currDate.getHours();
// let greeting = '';

// const cssStyle = {

// };

// if (currDate >= 1 && currDate < 12) {
//     greeting = 'Good Morning';
//     cssStyle.color = 'green';
// } else if (currDate >= 12 && currDate < 19) {
//     greeting = 'Good Afternoon';
//     cssStyle.color = 'Orange';
// } else {
//     greeting = 'Good Night';
//     cssStyle.color = 'black';
// }
// ReactDOM.render(
//     <div>
//         <h1>
//             {/* {currDate} */}
//             Hello Sir ,  <span style={cssStyle}>{greeting}</span>
//         </h1>
//     </div>
//     , document.getElementById("root")
// );



// create the normal component 20/10/2020


// import React from 'react';
// import ReactDOM from 'react-dom';
// // import "./index.css";
// import App from './App'

// ReactDOM.render(
//     <App />
//     , document.getElementById("root")
// );



// import and export modules 20/10/2020 

// import React from 'react';
// import ReactDOM from 'react-dom';
// import youtuber,{faveProgram , myNams} from './App';
// ReactDOM.render(
//     <div>
//         <ol>
//             <li>Amol</li>
//             <li>{youtuber}</li>
//             <li>{faveProgram}</li>
//             <li>{myNams()}</li>
//         </ol>
//     </div>
//     , document.getElementById("root")
// )


// created the calculator 20/10/2020

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';


// ReactDOM.render(
//     <App />
//     , document.getElementById("root")
// );


// props function 
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Card from "./Cards";
// import './index.css';
// import Sdata from "./Sdata";

// function ncard(val) {
//     return (
//         <Card
//             key={val.id}
//             imgsrc={val.imgsrc}
//             name={val.name}
//             title={val.title}
//         />
//     );
// }

// function Card(props) {
//     return (
//         <div>
//             <div className="cards">
//                 <div className="card">
//                     <img src={props.imgsrc} alt="myPic" className="card_img" />
//                 </div>
//                 <div className="card_info">
//                     <span className="card_category"> A netflix Origenal  Series</span>
//                     <h3 className="card_title">DARK</h3>
//                     <a href="https://www.youtube.com/watch?v=yAoLSRbwxL8" target="_blank">
//                         <button>Watch Now</button>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     )
// }
// ReactDOM.render(
//     <div>
//         <h1 className="heading_Style"> List Of Top 5 Seres</h1>
//         {/* <Card
//             imgsrc={Sdata[0].imgsrc}
//             name={Sdata[0].name}
//             title={Sdata[0].title}
//         /> */}

//         {Sdata.map(ncard)}
//     </div>

//     , document.getElementById('root')
// );








import React from 'react';
import ReactDOM from 'react-dom';
import QuizesList from './QuizesList';
ReactDOM.render(
        <QuizesList/>
    , document.getElementById("root")
)


