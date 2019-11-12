import './App.css';
import Page1 from './Component/Page1';
import HtmlToPdf from './genrate';
import Example from './example';
import InputForm from './Component/InputForm';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import Preview from './Component/Preview';
import React, { Component } from 'react'

let emp = ''


  export class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            emp:''
        }
    }
    employee = (data) => {
      console.log("==============",data)
      this.setState({
        emp :data
      })
    }
    render(){
  return (

    <div >

      <Route exact path='/' render={() => { return <InputForm clicked={this.employee.bind()} /> }}></Route>
      <Route exact path='/offerLetterPage' render={() => { return <Page1 empData={this.state.emp} buttonShow={true} /> }}  ></Route>
      <Route exact path='/PreviewPage'   render={() => { return <Preview empData={this.state.emp} /> }} ></Route>
   
    </div>


  );
    }
}

export default App;
