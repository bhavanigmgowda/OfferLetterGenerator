
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/home';

import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import InputHRLetter from './component/HrLetter/InputHRLetter';
import Cards from './component/Cards';
import HRLetter from './component/HrLetter/HRLetter';
import Test from './component/IncrementLetter/test';
import InputConfirmationLetter from './component/ConfirmationLetter/InputConfirmationLetter';
import ConfirmationLetter from './component/ConfirmationLetter/ConfirmationLetter';
import InputCertificateLetter from './component/CertificateLetter/InputCertificateLetter';
import CertificateLetter from './component/CertificateLetter/CertificateLetter';
import InputDepuationLetter from './component/DepuationLetter/InputDepuationLetter';
import DepuationLetter from './component/DepuationLetter/DepuationLetter';
import InputIncrementLetter from './component/IncrementLetter/InputIncrementLetter';
import IncrementLetter from './component/IncrementLetter/IncrementLetter';
import InputDesignationLetter from './component/DesignationLetter/InputDesignationLetter';
import DesignationLetter from './component/DesignationLetter/DesignationLetter';
import InputOfferLetter from './component/OfferLetters/InputOfferLetter';
import OfferLetter from './component/OfferLetters/OfferLetter';
import InputRelivingLetter from './component/RelivingLetter/InputRelivingLetter';
import RelivingLetter from './component/RelivingLetter/RelivingLetter';



import InputExitLetter from './component/ExitLetter/InputExitLetter';
import ExitLetter from './component/ExitLetter/ExitLetter';
import Test1 from './component/IncrementLetter/test';
import Login from './component/Login/Login';

import { TrainingLetter } from './component/TrainingLetter/TrainingLetter';

import TrainingCommit from './component/TrainingCommit/TrainingCommit';
import { InputTrainingCommitLetter } from './component/TrainingCommit/InputTrainingCommit';
import { InputTrainingLetter } from './component/TrainingLetter/InputTrainingLetter';

export class App extends Component{
          constructor(props){
            super(props);
            this.state={
              emp:''
            }

          }

          employee = (data) => {
            console.log("==============",data)
            this.setState({
              emp :data
            })
          }
          
//  emp=(data)=>{
//   console.log("==============",data)
//   this.setState({
//     emp :data
//   },()=>this.props.history.push("/TrainingCommit"))
  
// }

// emp2=(data)=>{
//   console.log("==============",data)
//   this.setState({
//     emp :data
//   },()=>this.props.history.push("/TrainingLetter"))
  
// }
 

    render(){
  return (

    <div className="App">

      <Route exact path='/' component={Login}></Route>

      <Route exact path='/cards' component={Cards}></Route>

     
     
      <Route exact path='/hr'  render={() => { return <InputHRLetter clicked={this.employee.bind()} /> }}></Route>
      <Route exact path='/hrLetter'  render={() => { return <HRLetter empData={this.state.emp} /> }}></Route>

      <Route exact path='/inputConfirmation'  render={() => { return <InputConfirmationLetter clicked={this.employee.bind()} /> }} ></Route>
      <Route exact path='/confirmationLetter'   render={() => { return <ConfirmationLetter empData={this.state.emp} /> }}></Route>

      <Route exact path='/InputcertificateLetter'  render={() => { return <InputCertificateLetter clicked={this.employee.bind()} /> }}></Route>
      <Route exact path='/certificateLetter' render={() => { return <CertificateLetter empData={this.state.emp} /> }}></Route>

      <Route exact path='/InputDepuationLetter'  render={() => { return <InputDepuationLetter clicked={this.employee.bind()} /> }}></Route>
      <Route exact path='/DepuationLetter'  render={() => { return <DepuationLetter empData={this.state.emp} /> }}></Route>

      <Route exact path='/InputDesignationLetter'  render={() => { return <InputDesignationLetter clicked={this.employee.bind()} /> }}></Route>
      <Route exact path='/DesignationLetter' render={() => { return <DesignationLetter empData={this.state.emp} /> }}></Route>

      <Route exact path='/InputIncrementLetter' render={() => { return <InputIncrementLetter clicked={this.employee.bind()} /> }}></Route>
      <Route exact path='/IncrementLetter'  render={() => { return <IncrementLetter empData={this.state.emp} /> }}></Route>

      <Route exact path='/InputOfferLetter'  render={() => { return <InputOfferLetter clicked={this.employee.bind()} /> }} ></Route>
      <Route exact path='/OfferLetter' render={() => { return <OfferLetter empData={this.state.emp} /> }}></Route>
   
      <Route exact path='/InputRelivingLetter'  render={() => { return <InputRelivingLetter clicked={this.employee.bind()} /> }} ></Route>
      <Route exact path='/RelivingLetter' render={() => { return <RelivingLetter empData={this.state.emp} /> }}></Route>

      <Route exact path='/InputTrainingCommitLetter' render={() => { return <InputTrainingCommitLetter history={this.props.history} clicked={this.employee.bind()} /> }} ></Route>
      <Route exact path='/TrainingCommit'  render={() => { return <TrainingCommit history={this.props.history} empData={this.state.emp} /> }} ></Route>

      <Route exact path='/InputTrainingLetter' render={() => { return <InputTrainingLetter history={this.props.history} clicked={this.employee.bind()} /> }} ></Route>
      <Route exact path='/TrainingLetter'  render={() => { return <TrainingLetter history={this.props.history} empData={this.state.emp} /> }} ></Route>

      <Route exact path='/InputExitLetter' render={() => { return <InputExitLetter clicked={this.employee.bind()} /> }} ></Route>
      <Route exact path='/ExitLetter'  render={() => { return <ExitLetter empData={this.state.emp} /> }} ></Route>


      

      <Route exact path='/test' component={Test}></Route>
    </div>
  );
}
}

export default withRouter(App);
