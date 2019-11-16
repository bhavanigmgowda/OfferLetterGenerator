import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";

export class InputIncrementLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeName: '',
            employeeId: '',
            annualCompensationYear: '',
            salaryIncremented: '',
            incrementInEffectDate: '',
            companyLocation:'',
            designation:'',
            date: '',
            CIN: '',

        }
    }

    componentDidMount() {

        var today = new Date();
        var currentdate = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        this.setState({
            date: currentdate
        })
    }
    pass = (event) => {
        event.preventDefault();
        console.log("data========", this.state)

        this.props.clicked(this.state)
        this.props.history.push('/offerLetterPage')

    }

    render() {
        return (
            <div>
                <div >
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-auto container mt-5 pb-5">
                                <div style={{ width: '600px' }} className="card m-auto shadow-lg mt-5">
                                    <div class="card-header" style={{ borderRadius: '0px !important', background: 'white' }} >
                                        <h3 className="text-center blue-text font-bold ">Increment Letter</h3>
                                    </div>
                                    <div className="card-body ">
                                        <form onSubmit={this.pass}>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" required label="Employee Name" className="w-100" name="employeeName" title="Employee Name" id="employeeName" onChange={(event) => {
                                                        this.setState({
                                                            employeeName: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" required label="Employee Id" className="w-100" name="employeeId" title="Employe Id" id="employeeId" onChange={(event) => {
                                                        this.setState({
                                                            employeeId: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" required label="Designation" type="text" name="designation" id="designation" title="Designation" onChange={(event) => {
                                                        this.setState({
                                                            designation: event.target.value
                                                        })
                                                    }} />

                                                </div>
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" required label="Company Location" type="text" name="companyLocation" id="companyLocation" title="Company Location" onChange={(event) => {
                                                        this.setState({
                                                            companyLocation: event.target.value
                                                        })
                                                    }} />

                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-6">
                                                <MDBInput autocomplete="off" type="number" required label="Salary Incremented" className="w-100" name="salaryIncremented" title="Salary Increment" id="salaryIncrement" onChange={(event) => {
                                                        this.setState({
                                                            salaryIncremented: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div class="col-6">
                                                <MDBInput autocomplete="off" required type="date" label="Increment In Effect Date" title="Increment In Effect Date" name="incrementInEffectDate" id="incrementInEffectDate" onChange={(event) => {
                                                        this.setState({
                                                            incrementInEffectDate: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                               
                                            </div>
                                            <div className="row">
                                            <div class="col-6">
                                                <MDBInput autocomplete="off" required  type="number" label="Annual Compensation Year" title="Annual Compensation Year" name="annualCompensationYear" id="annualCompensationYear" onChange={(event) => {
                                                        this.setState({
                                                            annualCompensationYear: event.target.value
                                                        })
                                                    }} />

                                                </div>
                                                <div className="col-6">

                                                    <MDBInput autocomplete="off" required type="text" label="CIN" title="CIN" name="CIN" id="CIN" onChange={(event) => {
                                                        this.setState({
                                                            CIN: event.target.value
                                                        })
                                                    }} />

                                                </div>
                                               
                                            </div>
                                            <div className=" input-group w-50 container-fluid">
                                                <MDBBtn type="submit" className=" form-control-plaintext  justify-content-center text-center" color="primary">Generate</MDBBtn>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InputIncrementLetter