
import './App.css';
import TodoList from './TodoList';
import UserList from './UserList';

function App() {
  return (
    <div>
      <h1>Search</h1>
      <div className='section'>
       <div><UserList /></div> 
       <div><TodoList /></div> 
      </div>
    </div>
  );
}

export default App;
