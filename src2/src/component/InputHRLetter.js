import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";

export class InputHRLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            EmployeeName: '',
            EmployeeId: '',
            JoiningDate: '',
            Date: '',
            CIN: '',
            Designation:''

        }
    }

    componentDidMount() {

        var today = new Date();
        var currentdate = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        this.setState({
            Date: currentdate
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
                                <div style={{ width: '500px' }} className="card m-auto shadow-lg mt-5">
                                    <div class="card-header" style={{ borderRadius: '0px !important', background: 'white' }} >
                                        <h3 className="text-center blue-text font-bold ">HR Letter</h3>
                                    </div>
                                    <div className="card-body ">
                                        <form onSubmit={this.pass}>

                                            <div className="row">
                                                <div className="col-12">
                                                    <MDBInput required label="Employee Name" className="w-100" name="EmployeeName" title="Employee Name" id="EmployeeName" onChange={(event) => {
                                                        this.setState({
                                                            EmployeeName: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <MDBInput required label="Employee Id" name="EmployeeId" id="EmployeeId" title="Employee Id" onChange={(event) => {
                                                        this.setState({
                                                            EmployeeId: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>

                                            <div className="row">

                                                    <div className="col-12">
                                                    <MDBInput required label="Designation" name="Designation" id="Designation" title="Employee Id" onChange={(event) => {
                                                        this.setState({
                                                            Designation: event.target.value
                                                        })
                                                    }} />

                                                    </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12">
                                                    <MDBInput required type="date" label="Joining Date" title="Joining Date" name="Joining Date" id="JoiningDate" onChange={(event) => {
                                                        this.setState({
                                                            JoiningDate: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                   
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

export default InputHRLetter