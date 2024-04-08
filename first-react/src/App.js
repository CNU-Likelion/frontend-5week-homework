
import { Component, useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (<div className="App">
    <div id='Container'>
      <div id='SubContainer'>
        <div id='TopContainer'>
          <Top title="D A Y" name="DD"></Top>
          <Top title="M O N T H" name="MM"></Top>
          <Top title="Y E A R" name="YYYY"></Top>
        </div>
        <hr></hr>
        <div id='MiddleContainer'>
          <Middle name="years"></Middle>
          <Middle name="months"></Middle>
          <Middle name="days"></Middle>
        </div>
      </div>
    </div>
  </div>);
}

export default App;

class Top extends Component {
  render() {
    return (
      // 최상위 태그 무조건 있어야 함.
      <div class="top"> 
        <p>{this.props.title}</p>
        <input type="text"></input>
      </div>
    );
    
  }
}

class Middle extends Component {
  render() {
    return (
      <div>
        <p class="Text">{this.props.name}</p>
      </div>
    );
  }
}

