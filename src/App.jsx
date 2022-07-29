import logo from './logo.svg';
import './App.css';
//import { useQuery } from 'react-query'

function App() {
/*
    const { data } = useQuery('hello-world', () => { //hello-world je klíč k requestu (např. kdykoliv ho chci znovu použít)
      return Promise.resolve(10)
    })

    console.log(data, 'test')
*/
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
