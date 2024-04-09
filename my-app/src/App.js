import React, { Component } from'react';
import Input from "./components/Input";
import Output from "./components/Output"
import styles from "./App.css";

function App() {

  return (
    <div className='container'>
      <Input></Input>
      <br />
      <Output></Output>
    </div>
  );
}

export default App;
