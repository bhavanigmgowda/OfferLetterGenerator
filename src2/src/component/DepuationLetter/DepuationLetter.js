import React, { Component } from 'react'
import '../HRLetter.css'



export class DepuationLetter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      employee: {
        employeeName: 'wer',
        clientName: 'robert bosch testyantra',
        clientLocation: 'weqwe wer qwertyuio wertyui wertyu wertyr asfdg',
        reportingDate: 'qwer',
        reportingTime: 'wdgfhg',
        date: 'assdfg',
        CIN: 'afsgd234',
      }
    }
  }



  render() {
    return (
      <div>
        <div className="card" id="pageA4">
          <div className="card-body">
            <div>
              <p style={{ float: 'right' }}>CIN:  {this.state.employee.CIN}</p>
              <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
              <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
              <p style={{ textAlign: 'justify', paddingLeft: 30 }}><strong>Date:&nbsp; {this.state.employee.date}</strong></p>
              <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
              <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
              <p style={{ textAlign: 'justify', paddingLeft: 30 }}>To, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
              <p style={{ textAlign: 'justify', paddingLeft: 30 }}><strong> {this.state.employee.employeeName},</strong></p>
              <p style={{ textAlign: 'justify', paddingLeft: 30 }}><strong>&nbsp;</strong></p>
              <p style={{ textAlign: 'justify', paddingLeft: 30 }}>Dear <strong>{this.state.employee.employeeName}</strong><strong>,</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
              <p style={{ textAlign: 'justify', paddingLeft: 30 }}>As a part of our services to client, please be informed that you are deputed to work at <strong>{this.state.employee.clientName} ,</strong>
                {this.state.employee.clientLocation}.We have decided on this owing to your performance at the client interview. You accept this deputation and agree to abide by the policies and procedures of <strong>{this.state.employee.employeeName}</strong>. The date you have to report at <strong>{this.state.employee.clientName}</strong><strong>, </strong>would be <strong>{this.state.employee.reportingDate}</strong>.</p>

              <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
              <p style={{ textAlign: 'justify', paddingLeft: 30 }}>Contact Person: Sudhir</p>
              <p style={{ textAlign: 'justify', paddingLeft: 30 }}>Reporting Time: {this.state.employee.reportingTime}</p>
              <p style={{ textAlign: 'justify', paddingLeft: 30 }}>Other terms and conditions remain the same as per the appointment letter.</p>
              <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
              <p style={{ textAlign: 'justify', paddingLeft: 30 }}>Kindly sign and return the duplicate of this letter as a token of your acceptance of the above terms and conditions.</p>
              <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
              <p style={{ textAlign: 'justify', paddingLeft: 30 }}>Best Wishes,</p>
              <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
              <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
              <p style={{ textAlign: 'justify', paddingLeft: 30 }}><strong>Authorized Signatory</strong></p>
            </div>

          </div>
        </div>
      </div>

    )
  }
}

export default DepuationLetter
