
//import PropTypes from "prop-types";


// const foodILike = [
//   {
//     id: 1,
//     name: "kimchi",
//     image:
//     "https://kelliesfoodtoglow.com/wp-content/uploads/2016/10/kimchi1.jpg"
//     ,rating: 5
//   },
//   {
//     id: 2,
//     name: "Samgyeopsal",
//     image:
//     "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F7%2F77%2FSamgyeopsal-gui.jpg%2F1200px-Samgyeopsal-gui.jpg&f=1&nofb=1"
//     ,rating: 4.9
//   }
// ]

/* Function 을 이용해 구현하는 방법 */
// function renderFood(dish){
//   console.log(dish)
//   return <Food key={dish.id} name={dish.name} picture={dish.image} />
// }

// function App() {
//   return (
//     <div>
//       {foodILike.map(renderFood)}
//     </div>
//   );
// }
/***********************************/
// function Food({ name,picture, rating }){
//   return (
//   <div>
//     <h2>I like {name}</h2>
//     <h4>{rating}/5.0</h4>
//     <img src ={picture} alt={name}/>
//   </div>
//   );
// }

// Food.propTypes = {
//   //isRequired -> 필수를 의미
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// };

// function App() {
//   return (
//     <div>
//       {foodILike.map(dish=>(
//         <Food key={dish.id} name ={dish.name} picture={dish.image} rating={dish.rating} />
//       ))}
//     </div>
//   );
// }

/*
class App extends React.Component{
  state = {
    count: 0
  };
  add = () => {
    //this.setState({count: this.state.count + 1 });  // this.state.count 는 좋지않은 코드
    this.setState(current => ({ count: this.state.count + 1})); // setState를 호출하면 render를 Refresh 해줌.
  };
  minus = () => {
    this.setState(current => ({ count: this.state.count - 1}));
  };


  componentDidMount(){console.log("component rendered");}// Component가 render를 마치고 Mount될 때 호출
  componentDidUpdate(){console.log("I just Updated");}// Component가 Update될 때 호출 ex) plus/minus 버튼을 누르면 render가 Refresh
  componentWillUnmount(){console.log("Good Bye");} // Component가 Unmount될 때 호출
  render(){
    console.log("I'm rendering");
    return <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
  }
}
*/

import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Details from "./routes/Details";
import "./App.css";
import Navigation from "./components/Navigation";

// 설치한 것들 : 'npm i axos', 'npm i gh-pages', 'npm i prop-types', 'npm i react-router-dom'

function App(){
  return (
    // <BrowserRouter> 를 사용하면 주소에 '#'이 없음. 깃헙페이지에 설정하기가 번거로움
    // Router 안에 있는 모든 Route들은 기본값으로 props를 가진다. 덕분에 클릭 한번으로 정보를 전달 가능.
    <HashRouter>
      <Navigation />
      {/* exact 를 넣어줘야 component가 여러개 로딩되는것을 방지할 수 있음. */}
      <Route path="/" exact={true} component={Home}/> 
      <Route path="/about" component={About}/>
      {/* <Route path="/movie-details" component={Details}/> */}
      <Route path="/movie/:id" component={Details}/>
    </HashRouter>
  )
}

export default App;