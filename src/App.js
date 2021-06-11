import Search from './components/searchBar';
import List from './components/list';
import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [films, setFilms] = useState([]);
  return (
    <div>
      <Search
        changeFilms={setFilms}
      />
      <div className="container">
        <List films={films} />
      </div>
    </div>
  );
}

export default App;
