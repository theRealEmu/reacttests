import React, { Component } from 'react';
import Table from './datatable/Table';
import NewCharacter from './NewCharacter';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from './layout/header/Header';

class App extends Component {

  state = {
    characters : [
      // {
      //   name: "Emu",
      //   job: "reactor"
      // },
      // {
      //   name: "Frank",
      //   job: "Workaholic Dad"
      // },
      // {
      //   name: "Thomas",
      //   job: "bmw-enthusiast"
      // },
      // {
      //   name: "Markus",
      //   job: "Kauft ein Haus und feiert Abrissparties"
      // }
    ]   
  };

  //Handler für die Tabelle
  //Entfernen
  removeCharacter = (index) => { 
    const { characters } = this.state;
    
    const newCharacterArray = characters.filter((character, i) => {
      return index !== i;
    });

    this.setState(
      {
        characters: newCharacterArray
      }
    );

  }

  //Hinzufügen
  handleSubmit = (newCharacter) => {
    console.log(`handleSubmit(): fired`);    
    this.setState({characters: [...this.state.characters, newCharacter]});
  }

  componentDidMount() {
      const url = "https://jsonplaceholder.typicode.com/users";

      fetch(url)
          .then(result => result.json())
          .then(result => {
              this.setState({
                  characters: result
              })
          });
  }
  

  render(){

    const { myProp: name} = this.props;
    const { characters } = this.state;    

    return (

      
        <div className="App">
          <h1>Hello from the App Component, {name}</h1>
          <Header />
          <Router>
            <Switch>
              <Route exact path="/" render={(props)=><Table characters={characters} removeCharacter={this.removeCharacter}/> } />
              <Route exact path="/new" render={(props)=><NewCharacter handleSubmit={this.handleSubmit} /> } />
            </Switch>       
          </Router>
        
        </div>
      
    );
  }
}


export default App;