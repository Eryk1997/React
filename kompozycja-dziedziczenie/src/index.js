import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import SignupDialog from './SignupDialog';



// function WelcomDialog() {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-time">Witaj</h1>
//       <p className="Dialog-message">Dziękujemy za wizyte</p>
//     </FancyBorder>
//   );
// }

// ReactDOM.render(<WelcomDialog />, document.getElementById("root"));

// //2

// function SplitPane(props) {
//   return (
//     <div className="SplitPane">
//       <div className="SplitPane-left">{props.left}</div>
//       <div className="SplitPane-right">{props.right}</div>
//     </div>
//   );
// }




// //3
// function Dialog(props){
//   return(
//     <FancyBorder color="blue">
//       <h1 className="Dialog-tittle">
//         {props.title}
//       </h1>
//       <p className="Dialog-message">
//         {props.message}
//       </p>
//       {props.children}
//     </FancyBorder>
//   );
// }

// /*
// function WelcomeDialog(){
//   return(
//     <Dialog 
//     title="Witaj"
//     message="tutaj"
//     />
//   )
// }
// */

// ReactDOM.render(
//   <WelcomDialog />,
//   document.getElementById('root3')
// )


ReactDOM.render(
  <SignupDialog />,
  document.getElementById('root4')
); 





























// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
