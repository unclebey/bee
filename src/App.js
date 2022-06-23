
// import './App.css';
import Semilore from './Person/Person';
import { Component } from 'react';

class App extends Component {

state ={
  persons:[
    {name:"Philz", age: 12},
    {name:"Joel", age: 77},
    {name:"Anu", age: 12},
  ],
  showpersons:false
}

switchNameHandler=(newName)=>{
this.setState({
  persons:[
    {name:"Timo", age: 2},
    {name:"Joel", age: 60},
    {name:"newName", age: 12},
  ]
})
}

nameChangedHandler=(event)=>{
  this.setState({
    persons:[
      {name:"event.target.value", age: 2},
      {name:"Joel", age: 60},
      {name:"newName", age: 12},
    ]
  })
}
showpersonsHandler=()=> {
  const doesshow = this.state.showpersons
  this.setState({
    showpersons: !doesshow
  })
}

  render(){
let people = null

if(this.state.showpersons){

    people = <div>
    <Semilore name = {this.state.persons[0].name } age = {this.state.persons[0].age} zeh = {this.nameChangedHandler}></Semilore>
    <Semilore name = {this.state.persons[1].name } age = {this.state.persons[1].age} caleb = {this.switchNameHandler}/>
    <Semilore name = {this.state.persons[2].name } age = {this.state.persons[2].age} />
  </div>
    }




  return(
    <div className="App">
      <h1>REACT DEVELOPER!!!</h1>
      <button onClick={this.showpersonsHandler}>SWITCH</button>
      {people}
  
      </div>
  )
}
}

export default App;
