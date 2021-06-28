import React from 'react';
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

// class App extends React.Component{
//   state = {
//     count: 0
//   };
//   add = () => {
//     //this.setState({count: this.state.count + 1 });  // this.state.count 는 좋지않은 코드
//     this.setState(current => ({ count: this.state.count + 1})); // setState를 호출하면 render를 Refresh 해줌.
//   };
//   minus = () => {
//     this.setState(current => ({ count: this.state.count - 1}));
//   };

//   componentDidMount(){console.log("component rendered");}// Component가 render를 마치고 Mount될 때 호출
//   componentDidUpdate(){console.log("I just Updated");}// Component가 Update될 때 호출 ex) plus/minus 버튼을 누르면 render가 Refresh
//   componentWillUnmount(){console.log("Good Bye");} // Component가 Unmount될 때 호출
//   render(){
//     console.log("I'm rendering");
//     return <div>
//         <h1>The number is: {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//   }
// }

class App extends React.Component{
  render(){
    return <div>
      
      </div>
  }
}



export default App;

