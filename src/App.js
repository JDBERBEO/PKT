
import './App.css';
import { PokemonsMain } from './components/PokemonsMain';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { PokemonMain } from './components/PokemonMain';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={PokemonsMain}/>
          <Route exact path='/:id' component={PokemonMain} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
