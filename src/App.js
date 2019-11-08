import React from 'react';
import './App.css';
import Page1 from './Component/Page1';
import HtmlToPdf from './genrate';
import Example from './example';
import InputForm from './Component/InputForm';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import Preview from './Component/Preview';

function App() {
  return (
   
    <div >

        <Route exact path='/' component={InputForm}></Route>
        <Route exact path='/offerLetterPage' component={Page1}></Route>
        <Route exact path='/PreviewPage' component={Preview}></Route>
        
    </div>
 
    
  );
}

export default App;
