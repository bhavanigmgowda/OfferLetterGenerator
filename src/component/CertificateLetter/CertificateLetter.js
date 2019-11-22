import React, { Component } from 'react'
import Home from '../home';
import '../CommonStyle.css'


export class CertificateLetter extends Component {

  constructor(props) {
    super(props);

      
    this.state={
      employee:[ ]
   }
  }

   componentDidMount() {

        this.setState({
            employee: this.props.empData,
        })
         
        
    }



  render() {
    return (
      <div>
        <Home buttonShow={true}/>
        <div className="card" id="AFourPage">
          <div className="card-body">
           
          <div>
            <p style={{float:'right'}}>CIN: {this.state.employee.CIN}</p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}><strong>&nbsp;</strong></p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}><strong>&nbsp;</strong></p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}><strong>Date: {this.state.employee.date}</strong></p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}><strong>&nbsp;</strong></p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}><strong>&nbsp;</strong></p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}><strong>To,</strong></p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}><strong>&nbsp;</strong></p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}><strong>{this.state.employee.employeeName},</strong></p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}><strong>{this.state.employee.location}</strong></p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}><strong>&nbsp;</strong></p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}><strong>Dear {this.state.employee.employeeName},</strong></p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}><strong>&nbsp;</strong></p>
  <p style={{textAlign: 'justify', paddingLeft: 30}}>This is to confirm that we have collected your<strong> {this.state.employee.certificateType} certificate</strong> for the background verification at Test Yantra. We would return the document once the verification process is done.</p>
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
