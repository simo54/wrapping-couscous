import logo from "./logo.svg";
import Wrapper from "./components/Wrapper";
import "./App.css";

function App() {
  return (
    <Wrapper title="A new Title In Header" anotherTitle="Another Title">
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
    </Wrapper>
  );
}

export default App;
