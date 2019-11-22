import React, { Component } from 'react'
import '../HrLetter/HRLetter.css'
import Home from '../home';
import moment from 'moment';
import '../CommonStyle.css'

export class RelivingLetter extends Component {

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
        
        // console.log("data hr form ",this.props.history.location.state.employee);
         console.log("data hr form  state ",this.state.employee);
    
      }


    render() {
        return (
            <div>
                <Home buttonShow={true}/>
                <div className="card" id="pageA4">
                    <div className="card-body">
                        <div>
                            <p style={{ float: 'right' }}>CIN:  {this.state.employee.CIN}</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}><strong>&nbsp;</strong></p>
                            <p style={{ textAlign: 'center', paddingLeft: 30 }}><strong>EXPERIENCE CERTIFICATE</strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}><strong>&nbsp;</strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}><strong>&nbsp;</strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}><strong>Date: {this.state.employee.date}</strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}><strong>Emp ID:  {this.state.employee.employeeId}</strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>This is to inform that <strong>Mr.</strong> <strong> {this.state.employee.employeeName}, </strong>was working with us from <strong> {moment(this.state.employee.joiningDate).format('Do-MMMM-YYYY')} </strong> to <strong> {moment(this.state.employee.relievingDate).format('Do-MMMM-YYYY')}. </strong>He was relieved from his responsibilities on <strong> {moment(this.state.employee.relievingDate).format('Do-MMMM-YYYY')}</strong> as <strong>  {this.state.employee.designation}. </strong>During his stay, his character and conduct was good. During his tenure, he was hardworking and a good team member. We wish him success in all his future endeavors.</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>For Test Yantra Software Solutions (India) Pvt Ltd</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}><strong>&nbsp;</strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}><strong>Authorized Signatory</strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                        </div>

                    </div>
                </div>

                <div className="card" id="AFourPage">
                    <div className="card-body">
                        <div>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}><strong>&nbsp;</strong></p>
                            <p style={{ textAlign: 'center', paddingLeft: 30 }}><strong>RELIEVING LETTER</strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}><strong>&nbsp;</strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}><strong>Date:  {this.state.employee.date}</strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}><strong>Emp ID:  {this.state.employee.employeeId}</strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>Dear <strong> {this.state.employee.employeeName}</strong>,</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>As per your resignation letter, we would like to inform you that, you are relieved from the roles and responsibilities of the company from <strong> {moment(this.state.employee.relievingDate).format('Do-MMMM-YYYY')}.</strong> In this regard, we also wish to inform you that there are no commitments outstanding from either of us. We wish you success in all your future endeavors.</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>For Test Yantra Software Solutions (India) Pvt Ltd</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}><strong>&nbsp;</strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30 }}><strong>Authorized Signatory </strong></p>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default RelivingLetter
