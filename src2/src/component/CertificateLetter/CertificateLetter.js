import React, { Component } from 'react'
import '../HRLetter.css'



export class CertificateLetter extends Component {

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
  <p style={{textAlign: 'justify', paddingLeft: 30}}><strong>&nbsp;</strong></p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}><strong>&nbsp;</strong></p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}><strong>Date: 17th June 2019</strong></p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}><strong>&nbsp;</strong></p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}><strong>&nbsp;</strong></p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}><strong>To,</strong></p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}><strong>&nbsp;</strong></p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}><strong>&nbsp;</strong></p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}><strong>Aragonda Nagarjuna,</strong></p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}><strong>Bangalore</strong></p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}><strong>&nbsp;</strong></p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}><strong>Dear Aragonda Nagarjuna,</strong></p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}><strong>&nbsp;</strong></p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}>This is to confirm that we have collected your<strong> Secondary certificate</strong> for the background verification at Test Yantra. We would return the document once the verification process is done.</p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}>&nbsp;</p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}>&nbsp;</p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}>With best wishes,</p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}>Very truly yours,</p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}>&nbsp;</p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}>&nbsp;</p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}><strong><br /> Corporate HR</strong></p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}>&nbsp;</p>
</div>


          </div>
        </div>
      </div>

    )
  }
}

export default CertificateLetter
