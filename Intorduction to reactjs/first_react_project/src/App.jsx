import './App.css';
import Hobbies from './hobbies';
import Likes from './likes';

function App() {
  let full_name =["Jane Doe", "John Doe"]

  return (
    <div className="App">
      <h2>Introduction to React</h2>
      <Hobbies names={full_name} tel={+254789879898}/>
      <Likes/>
    
    </div>
  );
}

export default App;
