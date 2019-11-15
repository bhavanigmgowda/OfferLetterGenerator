import React, { Component } from 'react'
import './HRLetter.css'



export class HRLetter extends Component {

  constructor(props) {
    super(props);

  }



  render() {
    var employee = {
      Date: 'dadas',
      EmployeeName: 'dda',
      EmployeeId: 'dsadad',
      Designation: 'dasdd',
      CIN: 'saddada'

    }
    return (
      <div>
        <div className="card" id="pageA4">
          <div className="card-body">
            <div>

              <p style={{ textAlign: 'justify' }}>&nbsp;</p>
              <p style={{ textAlign: 'justify' }}>&nbsp;</p>
              <p style={{ textAlign: 'left' }} align="JUSTIFY"><span ><strong>Date: {employee.Date}</strong></span></p>
              <p style={{ textAlign: 'justify' }} align="CENTER">&nbsp;</p>
              <p style={{ textAlign: 'justify' }} align="CENTER">&nbsp;</p>
              <p style={{ textAlign: 'center' }} align="CENTER"><span ><span style={{ fontSize: 'large' }}><strong>TO WHOMSOEVER IT MAY CONCERN</strong></span></span></p>
              <p style={{ textAlign: 'justify' }} align="CENTER">&nbsp;</p>
              <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }} align="JUSTIFY"><span ><strong>Sub: Information as per HR Records</strong></span></p>
              <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }}>&nbsp;</p>
              <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }}>&nbsp;</p>
              <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }} align="JUSTIFY"><span >This is to inform that </span><span ><strong>{employee.EmployeeName} </strong></span><span >(Employee ID: {employee.EmployeeId} ) is an employee of Test Yantra Software Solutions (India) Pvt Ltd from </span><span ><strong>{employee.JoiningDate} </strong></span><span > to till Date. He is designated as {employee.Designation}. </span></p>
              <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }} align="JUSTIFY">&nbsp;</p>
              <p lang="en-IN" style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }}>&nbsp;</p>
              <p style={{ textAlign: 'justify', paddingLeft: 30, paddingRight: 30 }} align="JUSTIFY"><span >For Test Yantra Software Solutions (India) Pvt Ltd</span></p>
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

export default HRLetter
