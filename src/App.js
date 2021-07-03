
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
import React from 'react';
import axios from "axios"; 
import Movie from "./Movie";
import "./App.css"

// 설치한 것들 : 'npm i axos', 'npm i gh-pages', 'npm i prop-types'

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");  // sort_by=rating
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({isLoading: false});  // setState 에서 state에 있는 항목을 호출할 필요는 없다, 새로 생성해도 됨.
    // },6000);
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
    <section className="container">
      {isLoading
        ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
        ) : (
          <div className="movies">
            {
              movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              ))   //map을 사용하면 return이 있어야함
            }
          </div>
        )}
    </section>
    );
  }
}



export default App;

