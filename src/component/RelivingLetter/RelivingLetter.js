import React, { Component } from 'react'
import '../HrLetter/HRLetter.css'
import Home from '../home';
import moment from 'moment';
import '../CommonStyle.css'
import { thisExpression } from '@babel/types';
import { withRouter } from 'react-router-dom';

export class RelivingLetter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employee: [],

        }
    }

    componentDidMount() {
        debugger;
        this.setState({
            employee: this.props.empData,
        })
        console.log("DDDDDDDDDDDDDDDDDDd", this.props.empData)
        console.log("data hr form  state ", this.state.employee);

    }


    render() {
        if (this.props.empData == 0) {
            this.props.history.push("/cards")
        }
        if (this.props.empData) {
            return (
                <div>
                    <Home buttonShow={true} />
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
                                <p style={{ textAlign: 'justify', paddingLeft: 30 }}>This is to inform that <strong>{this.state.employee.salute}</strong> <strong> {this.state.employee.employeeName}, </strong>was working with us from <strong> {moment(this.state.employee.joiningDate).format('DD-MM-YYYY')} </strong> to <strong> {moment(this.state.employee.relievingDate).format('DD-MM-YYYY')}.</strong> {this.props.empData.gender.gender1} was relieved from {this.props.empData.gender.gender2} responsibilities on <strong> {moment(this.state.employee.relievingDate).format('DD-MM-YYYY')}</strong> as <strong>  {this.state.employee.designation} </strong>During {this.props.empData.gender.gender2} stay, {this.props.empData.gender.gender2} character and conduct was good. During {this.props.empData.gender.gender3} tenure, {this.props.empData.gender.gender1} was hardworking and a good team member. We wish {this.props.empData.gender.gender3} success in all {this.props.empData.gender.gender2} future endeavors.</p>
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
                                <p style={{ textAlign: 'justify', paddingLeft: 30 }}>As per your resignation letter, we would like to inform you that, you are relieved from the roles and responsibilities of the company from <strong> {moment(this.state.employee.relievingDate).format('DD-MM-YYYY')}.</strong> In this regard, we also wish to inform you that there are no commitments outstanding from either of us. We wish you success in all your future endeavors.</p>
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
        } else {
            return (
                <h1></h1>)
        }
    }
}

export default withRouter(RelivingLetter)
