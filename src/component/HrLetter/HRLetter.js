import React, { Component } from 'react'
import Home from '../home';
import Test from '../IncrementLetter/test';
import '../CommonStyle.css'
import { withRouter } from 'react-router-dom';
import moment from 'moment';


export class HRLetter extends Component {

  constructor(props) {
    super(props);
      
    this.state={
       employee:[ ]
    }

  }

  componentDidMount(){

    this.setState({
      employee: this.props.empData,
  })
    
    if(this.props.empData==0)
    {
        this.props.history.push("/cards")
    }
    

  /* this.setState({
    employee:this.props.empData,
},()=>{this.setState({
  Date: moment(this.state.employee.joiningDate).format('DD-MM-YYYY')

})}) */
    
    // console.log("data hr form ",this.props.history.location.state.employee);
     console.log("data hr form  state ",this.state.employee);

  }



  render() {
    
    return (
      <div>
        <Home  buttonShow={true}/>
        <div className="card" id="AFourPage">
          <div className="card-body">
            <div>
            <p style={{float:'right'}}>CIN: {this.state.employee.CIN}</p>
              <p style={{ textAlign: 'justify' }}>&nbsp;</p>
              <p style={{ textAlign: 'justify' }}>&nbsp;</p>
              <p style={{ textAlign: 'left' }} align="JUSTIFY"><span ><strong>Date:{this.state.employee.date}</strong></span></p>
              <p style={{ textAlign: 'justify' }} align="CENTER">&nbsp;</p>
              <p style={{ textAlign: 'justify' }} align="CENTER">&nbsp;</p>
              <p style={{ textAlign: 'center' }} align="CENTER"><span ><span style={{ fontSize: 'large' }}><strong>TO WHOMSOEVER IT MAY CONCERN</strong></span></span></p>
              <p style={{ textAlign: 'justify' }} align="CENTER">&nbsp;</p>
              <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }} align="JUSTIFY"><span ><strong>Sub: Information as per HR Records</strong></span></p>
              <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }}>&nbsp;</p>
              <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }}>&nbsp;</p>
              <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }} align="JUSTIFY"><span >This is to inform that </span><span ><strong>{this.state.employee.employeeName} </strong></span><span >(Employee ID: {this.state.employee.employeeId}) is an employee of Test Yantra Software Solutions (India) Pvt Ltd from </span><span ><strong>{ moment(this.state.employee.joiningDate).format('Do-MMMM-YYYY')} </strong></span><span > to till Date. He is designated as {this.state.employee.designation}. </span></p>
              <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }} align="JUSTIFY">&nbsp;</p>
              <p lang="en-IN" style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }}>&nbsp;</p>
              <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }} align="JUSTIFY"><span >For Test Yantra Software Solutions (India) Pvt Ltd</span></p>
              <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }}>&nbsp;</p>
              <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }}>&nbsp;</p>
              <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }}>&nbsp;</p>
              <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }}>&nbsp;</p>
              <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }}><span ><strong>Authorized Signatory</strong></span></p>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
export default withRouter(HRLetter)
