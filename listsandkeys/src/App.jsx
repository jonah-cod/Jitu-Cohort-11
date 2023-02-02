import './App.css'
import List from './list'

function App() {
  const movie_genres = [{
    "id": 1,
    "genres": "Comedy"
  }, {
    "id": 2,
    "genres": "Adventure|Drama"
  }, {
    "id": 3,
    "genres": "Drama"
  }, {
    "id": 4,
    "genres": "Comedy"
  }, {
    "id": 5,
    "genres": "Animation|Children|Comedy"
  }, {
    "id": 6,
    "genres": "Comedy|Drama|Romance"
  }, {
    "id": 7,
    "genres": "Action|Drama"
  }, {
    "id": 8,
    "genres": "Drama"
  }, {
    "id": 9,
    "genres": "Drama|Romance"
  }, {
    "id": 10,
    "genres": "Fantasy|Horror"
  }]

  //1. styling method

  const styles ={
    color: "blue",
    backgroundColor: "tomato"
  }

  console.log({...styles})


  return (
    <div className="App" style={styles}>
      {/* //2. inline styling */}
      <h4 style={{color:"seagreen", fontSize:"3rem"}}>Movie Genres</h4>
      <ul>
        {movie_genres.map((genre)=><List key={genre.id} genre={genre}/>)}
      </ul>
    </div>
  )
}

export default App
