import React, { Component } from 'react'

export default class NewCharacter extends Component {
   constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }

  //findWichInput
  findWichInput = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({[key]: value});
    console.log(`changeInputs(): fired; State:`, this.state);    
    // this.changeInputs(key, value);
    // console.log(`findwichInput(): name`, e.target.name);          
  }

  submitForm(e) {    
    //e.preventDefault(); //prevent Form submit

    const { handleSubmit } = this.props;

    handleSubmit(this.state);   //send to App.js-state
    this.setState(this.initialState); //Reset Form
  }

  render() {

    const {name, job} = this.state;    

    return (
      <div>
        <form>
          <input 
            name="name" 
            type="text" 
            placeholder="Bob" 
            value={name} 
            onChange={this.findWichInput}
          />
          <input 
            name="job" 
            type="text" 
            placeholder="Baumeister" 
            value={job} 
            onChange={this.findWichInput}
            />  
          <input type="button" value="Submit Input" onClick={(e)=>this.submitForm(e)} />
        </form>
        {/* Buttons innerhalb des Formulars lösen auf sehr seltsame art immer ein Submit aus! */}
        {/* <button onClick={(e)=>this.submitForm(e)}>Senden</button>        */}
      </div>
    )
  }
}