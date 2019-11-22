import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import { withRouter } from 'react-router-dom';
import $ from 'jquery'
export class InputDepuationLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeName: '',
            clientName: '',
            clientLocation: '',
            contactPerson: '',
            reportingDate: '',
            reportingTime: '',
            date: '',
            CIN: '',

            // validation variable
            showEmployeeName: '',
            showcontactPerson: '',
            showClientName: '',
            showClientLocation: '',
            showReportingDate: '',
            showReportingTime: '',
            showCIN: ''


        }
    }


    hideEmployeeName = () => {
        this.setState({
            showEmployeeName: false
        })
    }
    hideContactPerson = () => {
        this.setState({
            showcontactPerson: false
        })
    }
    hideClientName = () => {
        this.setState({
            showClientName: false
        })
    }
    hideClientLocation = () => {
        this.setState({
            showClientLocation: false
        })
    }
    hideReportingDate = () => {
        this.setState({
            showReportingDate: false
        })
    }
    hideReportingTime = () => {
        this.setState({
            showReportingTime: false
        })
    }
    hideCIN = () => {
        this.setState({
            showCIN: false
        })
    }



    componentDidMount() {

        var today = new Date();
        var currentdate = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        this.setState({
            date: currentdate
        })

        var that = this;
        $(document).ready(function () {
            $('#generate').click(function (e) {
                let employeeName = (document.getElementById("employeeName").value).trim();
                let clientName = (document.getElementById("clientName").value).trim();
                let clientLocation = (document.getElementById("clientLocation").value).trim();
                let contactPerson = (document.getElementById("contactPerson").value).trim();
                let reportingDate = (document.getElementById("reportingDate").value).trim();
                let reportingTime = (document.getElementById("reportingTime").value).trim();
                let CIN = (document.getElementById("CIN").value).trim();



                if (CIN === "") {
                    that.setState({ showCIN: true })
                }
                if (reportingTime === "") {
                    that.setState({ showReportingTime: true })
                }
                if (reportingDate === "") {
                    that.setState({ showReportingDate: true })
                }
                if (contactPerson === "") {
                    that.setState({ showcontactPerson: true })
                }

                if (clientLocation === "") {
                    that.setState({ showClientLocation: true })
                }
                if (clientName === "") {
                    that.setState({ showClientName: true })
                }
                if (employeeName === "") {
                    that.setState({ showEmployeeName: true })
                }

                if (CIN != "" && reportingTime != "" && reportingDate != "" && contactPerson != "" && clientLocation !== "" && clientName != "" && employeeName != '') {
                    console.log("True return")
                    return true;

                }
                else {
                    return false;
                }
            });
        });
    }
    pass = (event) => {
        event.preventDefault();
        console.log("data========", this.state)

        this.props.clicked(this.state)
        this.props.history.push('/DepuationLetter')
    }

    render() {
        return (
            <div>
                <Home buttonShow={false} />
                <div >
                    <div className="container-fluid mt-5">
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
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideEmployeeName} label="Employee Name" className="w-100" name="employeeName" title="Employee Name" id="employeeName" onChange={(event) => {
                                                        this.setState({
                                                            employeeName: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                            {this.state.showEmployeeName ? <div id="errordiv" className="container-fluid">Please fill Employee Name field * </div> : null}
                                            <div class="row">
                                                <div class="col-12">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideClientName} type="text" label="Client Name" title="Client Name" name="clientName" id="clientName" onChange={(event) => {
                                                        this.setState({
                                                            clientName: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                            {this.state.showClientName ? <div id="errordiv" className="container-fluid">Please fill Client Name field * </div> : null}
                                            <div className="row">
                                                <div class="col-6">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideClientLocation} type="text" label="Client Location" title="Client Name" name="clientLocation" id="clientLocation" onChange={(event) => {
                                                        this.setState({
                                                            clientLocation: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div class="col-6">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideContactPerson} type="text" label="Contact Person" title="Contact Person" name="contactPerson" id="contactPerson" onChange={(event) => {
                                                        this.setState({
                                                            contactPerson: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-6">
                                                    {this.state.showClientLocation ? <div id="errordiv" className="container-fluid">Please fill out Client Location field * </div> : null}
                                                </div>
                                                <div className="col-6">
                                                    {this.state.showcontactPerson ? <div id="errordiv" className="container-fluid">Please fill out Contact Person field * </div> : null}
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideReportingDate} onClick={this.hideReportingDate} type="date" label="Reporting Date" title="Reporting Date" name="reportingDate" id="reportingDate" onChange={(event) => {
                                                        this.setState({
                                                            reportingDate: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideReportingTime} onClick={this.hideReportingTime} type="time" label="Reporting Time" title="Reporting Time" name="reportingTime" id="reportingTime" onChange={(event) => {
                                                        this.setState({
                                                            reportingTime: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-6 p-0" >
                                                    {this.state.showReportingDate ? <div id="errordiv" className="container-fluid">Please fill out Reporting Date field * </div> : null}


                                                </div>
                                                <div className="col-6 p-0" style={{ width: 0 }}>
                                                    {this.state.showReportingTime ? <div id="errordiv" className="container-fluid">Please fill out Reporting Time field * </div> : null}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideCIN} type="text" label="CIN" title="CIN" name="CIN" id="CIN" onChange={(event) => {
                                                        this.setState({
                                                            CIN: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                            {this.state.showCIN ? <div id="errordiv" className="container-fluid">Please fill CIN field * </div> : null}
                                            <div className=" input-group w-50 container-fluid">
                                                <MDBBtn id='generate' type="submit" className=" form-control-plaintext  justify-content-center text-center" color="primary">Generate</MDBBtn>
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

export default withRouter(InputDepuationLetter)