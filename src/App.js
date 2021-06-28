import React from 'react';
import PropTypes from "prop-types";


const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image:
    "https://kelliesfoodtoglow.com/wp-content/uploads/2016/10/kimchi1.jpg"
    ,rating: 5
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F7%2F77%2FSamgyeopsal-gui.jpg%2F1200px-Samgyeopsal-gui.jpg&f=1&nofb=1"
    ,rating: 4.9

  }
]

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

function Food({ name,picture, rating }){
  return (
  <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src ={picture} alt={name}/>

  </div>
  );
}

function App() {
  return (
    <div>
      {foodILike.map(dish=>(
        <Food key={dish.id} name ={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

Food.propTypes = {
  //isRequired -> 필수를 의미
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default App;

