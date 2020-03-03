import React from 'react';
import './App.css';
import PersonCardComponent from './components/PersonCardComponent';

function App() {
  return (
    <div className="App">
      <PersonCardComponent firstname = {"Sasha"} lastname = {"Gri"} age = {17} haircolor = {"Brown"}/>
      <PersonCardComponent firstname = {"Zhenya"} lastname = {"Lollo"} age = {28} haircolor = {"Blond"}/>
      <PersonCardComponent firstname = {"Gera"} lastname = {"Wow"} age = {21} haircolor = {"Red"}/>

    </div>
  );
}

export default App;
