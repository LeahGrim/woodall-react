import logo from './logo.svg';
import './App.css';

//we need to import our space jams from the spacejams.js file
import SpaceJams from './SpaceJams';
//now in order to see it, we need to use it in the app.js file (see note down below in the return)

function render(state){
  $('#app').append(`
    <div class = "App"> 
    <img src= "${logoSrc}"/>
    </div>
  `)
}

function App() {
  let eagleCamName = 'Dick Pritchett Real Estate';

  //JSX
  //Javascript eXtended
  // JSX code is "compiled" into JS code by React
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        {/* render the SpaceJams component */}
        <SpaceJams />
       
        <p> 
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://dickpritchettrealestate.com/"
          target="_blank" /* Open the link in a new window */
          rel="noopener noreferrer"
        >
          {/* Variable interpolation */} 
         Monitor some amazing bald eagles and their little stinking eaglets at {eagleCamName}
        </a>
      </header>
    </div>
  );
}



export default App;
