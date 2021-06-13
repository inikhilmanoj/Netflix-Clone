import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Rowpost from './Components/Rowpost/Rowpost';
import {originals,action,comedy,horror,romance} from './urls'
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Banner/>
        <Rowpost url={originals} title='Netflix Originals' />
        <Rowpost url={action} title='Action Movies' isSmall />
        <Rowpost url={comedy} title='Comedy Movies' isSmall />
        <Rowpost url={horror} title='Horror Movies' isSmall />
        <Rowpost url={romance} title='Romantic Movies' isSmall />
    </div>
  );
}

export default App;
