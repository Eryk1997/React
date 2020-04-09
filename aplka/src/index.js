import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//Listy klucze
//1
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li>{number}</li>);

ReactDOM.render(<ul>{listItems}</ul>, document.getElementById("listy"));






//2
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => <li key={number.toString()}>{number}</li>);
  return <ul>{listItems}</ul>;
}

const numbers2 = [1,2,3,4,5];
ReactDOM.render(
  <NumberList numbers={numbers2}/>,
  document.getElementById('listy2')
);



//3
function ListItem(props){
return <li>{props.value}</li>;
}

function NumberList2(props){
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
  <ListItem key={number.toString()} value={number} />
  );

  return(
    <ul>
      {listItems}
    </ul>
  )
}

const tablica = [1,2,3,4,5];
ReactDOM.render(
  <NumberList2 numbers={tablica} />,
  document.getElementById('listy3')
)


//4
function Blog(props){
  const sidebar = (
    <ul>
      {props.posts.map((post) => 
      <li key={post.id}>
        {post.title}
      </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
  <div key={post.id}>
    <h3>{post.title}</h3>
      <p>{post.content}</p>
  </div>
  );
  return(
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: "Witaj swiecie",content: "nauka react"},
  {id: 2, title: "Witaj Tutaj", content: "nauka react ciag dalszy"}
];
ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('listy4')
)




//5
function NumberList3(props){
  const numbers = props.numbers;
  return(
    <ul>
      {numbers.map((number) =>
      <ListItem key={number.toString()} value={number} />
      )}
    </ul>
  );
}

const numbers3 = [1,2,3,4,5]
ReactDOM.render(
  <NumberList3 numbers={numbers3} />,
  document.getElementById('listy5')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
