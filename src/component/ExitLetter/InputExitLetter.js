import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import { withRouter } from 'react-router-dom';
import $ from 'jquery'


export class InputExitLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            salute: 'Mr.',
            employeeName: '',
            designation: '',
            joiningDate: '',
            exitDate: '',
            date: '',
            CIN: '',
            gender: {
                gender1: 'He',
                gender2: 'his',
                gender3: 'him',
            },
            // validation variable 
            showEmployeeName: '',
            showDesignation: '',
            showJoiningDate: '',
            showExitDate: '',
            showCIN: '',
            showCompanyLocation: ''
        }
    }

    componentDidMount() {

        $(document).ready(() => {
            $('#generate').click((e) => {
                debugger
                var today = new Date();
                var currentdate = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
                this.setState({
                    date: currentdate
                })
                console.log("dattetaetaetaet ", this.state)
                if (this.state.salute === "Ms." || this.state.salute === "Mrs.") {
                    // let obj = {...this.state };
                    // obj.gender.gender1 = "She";
                    this.setState({
                        ...this.state,
                        gender: {
                            gender1: 'She',
                            gender2: 'her',
                            gender3: 'her'
                        }
                    })
                }

                let employeeName = (document.getElementById("employeeName").value).trim();
                let designation = (document.getElementById("designation").value).trim();
                let companyLocation = (document.getElementById("companyLocation").value).trim();
                let CIN = (document.getElementById("CIN").value).trim();
                let showExitDate = (document.getElementById("exitDate").value).trim();
                let showJoiningDate = (document.getElementById("joiningDate").value).trim();

                if (CIN === "") {
                    this.setState({ showCIN: true })
                }
                if (designation === "") {
                    this.setState({ showDesignation: true })
                }
                if (companyLocation === "") {
                    this.setState({ showCompanyLocation: true })
                }
                if (employeeName === "") {
                    this.setState({ showEmployeeName: true })
                }

                if (showExitDate === "") {
                    this.setState({ showExitDate: true })
                }
                if (showJoiningDate === "") {
                    this.setState({ showJoiningDate: true })
                }

                if (CIN != "" && designation != "" && companyLocation != "" && employeeName != "" && showExitDate != "" && showJoiningDate != '') {
                    console.log("True return")
                    return true;

                }
                else {
                    return false;
                }

            });
        });
    }
    hideEmployeeName = () => {
        this.setState({
            showEmployeeName: false
        })
    }
    hideExitDate = () => {
        this.setState({
            showExitDate: false
        })
    }
    hideCIN = () => {
        this.setState({
            showCIN: false
        })
    }
    hideshowJoiningDate = () => {
        this.setState({
            showJoiningDate: false
        })
    }
    hideCompanyLocation = () => {
        this.setState({
            showCompanyLocation: false
        })
    }
    hideDesignation = () => {
        this.setState({
            showDesignation: false
        })
    }


    pass = (event) => {
        event.preventDefault();
        console.log("data========", this.state)
        this.props.clicked(this.state)
        this.props.history.push('/ExitLetter')

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
                                        <h3 className="text-center blue-text font-bold ">Exit Letter</h3>
                                    </div>
                                    <div className="card-body ">
                                        <form onSubmit={this.pass}>
                                            <div class="row">
                                                <div className="col-md-3" style={{ paddingTop: '25px' }}>
                                                    <select class="browser-default custom-select" autocomplete="off"  name="salutation" title="salutation" id="salutation" onChange={(event) => {
                                                        this.setState({
                                                            salute: event.target.value
                                                        })
                                                    }}>
                                                        <option selected value="Mr.">Mr.</option>
                                                        <option value="Ms.">Ms.</option>
                                                        <option value="Mrs.">Mrs.</option>
                                                    </select>
                                                </div>
                                                <div class="col-9">
                                                    <MDBInput autocomplete="off"  onKeyPress={this.hideEmployeeName} label="Employee Name" className="w-100" name="employeeName" title="Employee Name" id="employeeName" onChange={(event) => {
                                                        this.setState({
                                                            employeeName: event.target.value
                                                        })
                                                    }} />
                                                </div>

                                            </div>
                                            <div className="row" style={{ padding: 0 }}>
                                                <div className="col-3 p-0" >
                                                </div>
                                                <div className="col-9 p-0" style={{ width: 0 }}>
                                                    {this.state.showEmployeeName ? <div id="errordiv" className="container-fluid">Please fill out Name field * </div> : null}
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off"  type="date" onClick={this.hideshowJoiningDate}  onKeyPress={this.hideshowJoiningDate} label="Joining Date" title="Joining Date" name="JoiningDate" id="joiningDate" onChange={(event) => {
                                                        this.setState({
                                                            joiningDate: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off"  type="date"  onClick={this.hideExitDate} onKeyPress={this.hideExitDate} label="Exit Date" title="Exit Date" name="exitDate" id="exitDate" onChange={(event) => {
                                                        this.setState({
                                                            exitDate: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="row" style={{padding:0}}>
                                               <div className="col-6 p-0" >
                                               {this.state.showJoiningDate ? <div id="errordiv" className="container-fluid">Please fill out Joining date field * </div> : null}
                                           
                                           
                                               </div>
                                               <div className="col-6 p-0" style={{width:0}}>
                                               {this.state.showExitDate ? <div id="errordiv" className="container-fluid">Please fill out Exit Date field * </div> : null}
                                               </div>
                                           </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideDesignation}   label="Designation" type="text" name="designation" id="designation" title="designation" onChange={(event) => {
                                                        this.setState({
                                                            designation: event.target.value
                                                        })
                                                    }} />

                                                </div>
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideCompanyLocation} label="Company Location" className="w-100" name="commpanyLocation" title="Company Location" id="companyLocation" onChange={(event) => {
                                                        this.setState({
                                                            location: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="row" style={{padding:0}}>
                                               <div className="col-6 p-0" >
                                               {this.state.showDesignation ? <div id="errordiv" className="container-fluid">Please fill out Designation field * </div> : null}
                                           
                                           
                                               </div>
                                               <div className="col-6 p-0" style={{width:0}}>
                                               {this.state.showCompanyLocation ? <div id="errordiv" className="container-fluid">Please fill out Company Location field * </div> : null}
                                               </div>
                                           </div>
                                            <div className="row">
                                                <div className="col-12">

                                                    <MDBInput autocomplete="off"  onKeyPress={this.hideCIN} type="text" label="CIN" title="CIN" name="CIN" id="CIN" onChange={(event) => {
                                                        this.setState({
                                                            CIN: event.target.value
                                                        })
                                                    }} />

                                                </div>
                                            </div>
                                            {this.state.showCIN ? <div id="errordiv" className="container-fluid">Please fill out CIN field * </div> : null}
                                            <div className=" input-group w-50 container-fluid">
                                                <MDBBtn id="generate" type="submit" className=" form-control-plaintext  justify-content-center text-center" color="primary">Generate</MDBBtn>
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
export default withRouter(InputExitLetter)