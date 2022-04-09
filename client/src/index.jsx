import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
import Converter from './components/converter.jsx';


function App(){
  return(
    <div className="App">
      <Converter/>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById("app"));