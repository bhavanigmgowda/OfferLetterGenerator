import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";

export class InputDepuationLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeName: '',
            clientName: '',
            clientLocation: '',
            reportingDate: '',
            reportingTime: '',
            contactPerson:'',
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
                                <div style={{ width: '500px' }} className="card m-auto shadow-lg mt-5">
                                    <div class="card-header" style={{ borderRadius: '0px !important', background: 'white' }} >
                                        <h3 className="text-center blue-text font-bold ">Depuation Letter</h3>
                                    </div>
                                    <div className="card-body ">
                                        <form onSubmit={this.pass}>
                                            <div class="row">
                                                <div class="col-12">
                                                    <MDBInput autocomplete="off" required label="Employee Name" className="w-100" name="employeeName" title="Employee Name" id="employeeName" onChange={(event) => {
                                                        this.setState({
                                                            employeeName: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12">
                                                    <MDBInput autocomplete="off" required type="text" label="Client Name" title="Client Name" name="clientName" id="clientName" onChange={(event) => {
                                                        this.setState({
                                                            clientName: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div class="col-md-12">
                                                    <MDBInput autocomplete="off" required type="text" label="Client Location" title="Client Name" name="clientLocation" id="clientLocation" onChange={(event) => {
                                                        this.setState({
                                                            clientLocation: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div class="col-md-12">
                                                    <MDBInput autocomplete="off" required type="text" label="Contact Person" title="Contact Person" name="contactPerson" id="contactPerson" onChange={(event) => {
                                                        this.setState({
                                                            contactPerson: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" required type="date" label="Reporting Date" title="Reporting Date" name="reportingDate" id="reportingDate" onChange={(event) => {
                                                        this.setState({
                                                            reportingDate: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" required type="time" label="Reporting Time" title="Reporting Time" name="reportingTime" id="reportingTime" onChange={(event) => {
                                                        this.setState({
                                                            reportingTime: event.target.value
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

export default InputDepuationLetter