import './App.css';
import Cards from './Cards/Cards';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1 className='text-6xl my-8 text-blue-600 font-mono font-bold'>Hello React Tailwind</h1>
      <Cards/>
    </div>
  );
}

export default App;
