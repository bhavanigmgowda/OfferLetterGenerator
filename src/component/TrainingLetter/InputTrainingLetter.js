import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import moment from 'moment'
import { withRouter } from 'react-router-dom';
import Home from '../home';
import $ from 'jquery'
export class InputTrainingLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            CIN: '',
            employeeName: '',
            companyLocation: '',
            designaton: '',
            joiningDate: '',
            date: '',
            courseName: '',
            branchName: '',
            branchLocation: '',
  
             // variable validation 
             showCIN: '',
             showEmployeeName: '',
             showCompanyLocation: '',
             showDesignation: '',
             showJoiningDate: '',
             showDate: '',
             showCourseName: '',
             showBranchName: '',
             showBranchLocation: '',
      
        }
    }


    componentDidMount() {

        var today = new Date();
        var currentdate = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        this.setState({
            date: currentdate
        })

        var that = this;
        $(document).ready(function () {
            $('#genrate').click(function (e) {
                let employeeName = document.getElementById("employeeName").value;
                let designation = document.getElementById("Designaton").value;
                let companyLocation = document.getElementById("companyLocation").value;
                let CIN = document.getElementById("CIN").value;
                let joiningDate = document.getElementById("JoiningDate").value;
                let courseName = document.getElementById("CourseName").value;
                let branchName = document.getElementById("BranchName").value;
                let branchLocation=document.getElementById("BranchLocation").value;

                if (CIN === "") {
                    that.setState({ showCIN: true })
                }
                if (designation === "") {
                    that.setState({ showDesignation: true })
                }
                if (companyLocation === "") {
                    that.setState({ showCompanyLocation: true })
                }
                if (employeeName === "") {
                    that.setState({ showEmployeeName: true })
                }

                if (joiningDate === "") {
                    that.setState({ showJoiningDate: true })
                }
                if (courseName === "") {
                    that.setState({ showCourseName: true })
                }
                if (branchName === "") {
                    that.setState({ showBranchName: true })
                }
                if (branchLocation === "") {
                    that.setState({ showBranchLocation: true })
                }

                if (CIN != "" && designation != "" && companyLocation != "" && employeeName != "" &&  joiningDate!="" && branchName!='' && branchLocation!="" && courseName!="") {
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

    }



    hideEmployeeName = () => {
        this.setState({
            showEmployeeName: false
        })
    }
    hideCIN = () => {
        this.setState({
            showCIN: false
        })
    }
    hideDesignation = () => {
        this.setState({
            showDesignation: false
        })
    }
    hideCompanyLocation = () => {
        this.setState({
            showCompanyLocation: false
        })
    }
    hideJoiningDate = () => {
        this.setState({
            showJoiningDate: false
        })
    }
    hideCourseName = () => {
        this.setState({
            showCourseName: false
        })
    }
   
    hideBranchName = () => {
        this.setState({
            showBranchName: false
        })
    }

    hideBranchLocation = () => {
        this.setState({
            showBranchLocation: false
        })
    }
    

    render() {
        return (
            <div>
                <div >
                <Home buttonShow={false} />
                    <div className="container-fluid mt-5">
                        <div className="row">
                            <div className="col-auto container mt-5 pb-5">
                                <div style={{ width: '500px' }} className="card m-auto shadow-lg mt-5">
                                    <div class="card-header" style={{ borderRadius: '0px !important', background: 'white' }} >
                                        <h3 className="text-center blue-text font-bold ">Training Letter</h3>
                                    </div>
                                    <div className="card-body ">
                                        <form onSubmit={this.pass}>

                                            <div className="row">
                                                <div className="col-6">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideEmployeeName}  label="Employee Name" className="w-100" name="employeeName" title="Employee Name" id="employeeName" onChange={(event) => {
                                                        this.setState({
                                                            employeeName: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div className="col-6">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideCompanyLocation}  label="Company Location" className="w-100" name="companyLocation" title="Company Location" id="companyLocation" onChange={(event) => {
                                                        this.setState({
                                                            companyLocation: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                               <div className="row" style={{padding:0}}>
                                               <div className="col-6 p-0" >
                                               {this.state.showEmployeeName ? <div id="errordiv" className="container-fluid">Please fill out Name field * </div> : null}
                                           
                                           
                                               </div>
                                               <div className="col-6 p-0" style={{width:0}}>
                                               {this.state.showReportingDate ? <div id="errordiv" className="container-fluid">Please fill out Reporting Date field * </div> : null}
                                               </div>
                                           </div>
                                            <div className="row" style={{padding:0}}>
                                               <div className="col-6 p-0" >
                                               {this.state.showEmployeeName ? <div id="errordiv" className="container-fluid">Please fill out Name field * </div> : null}
                                           
                                           
                                               </div>
                                               <div className="col-6 p-0" style={{width:0}}>
                                               {this.state.showCompanyLocation ? <div id="errordiv" className="container-fluid">Please fill out Company Location field * </div> : null}
                                               </div>
                                           </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideDesignation}  label="Designation" name="Designaton" id="Designaton" title="Employee Id" onChange={(event) => {
                                                        this.setState({
                                                            designaton: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div className="col-6">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideJoiningDate} onClick={this.hideJoiningDate}  type="date" label="Joining Date" title="Joining Date" name="Joining Date" id="JoiningDate" onChange={(event) => {
                                                        this.setState({
                                                            joiningDate: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="row" style={{padding:0}}>
                                               <div className="col-6 p-0" >
                                               {this.state.showDesignation ? <div id="errordiv" className="container-fluid">Please fill out Designation field * </div> : null}
                                           
                                           
                                               </div>
                                               <div className="col-6 p-0" style={{width:0}}>
                                               {this.state.showJoiningDate ? <div id="errordiv" className="container-fluid">Please fill out Joining Date field * </div> : null}
                                               </div>
                                           </div>
                                            <div className="row">
                                                <div className="col-4">
                                                    <MDBInput autocomplete="off"  onKeyPress={this.hideCourseName} type="text" label="Course Name" title="Course Name" name="Course Name" id="CourseName" onChange={(event) => {
                                                        this.setState({
                                                            courseName: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div className="col-4">
                                                    <MDBInput autocomplete="off"  onKeyPress={this.hideBranchName} type="text" label="Branch Name" title="Branch Name" name="Branch Name" id="BranchName" onChange={(event) => {
                                                        this.setState({
                                                            branchName: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div className="col-4">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideBranchLocation}  type="text" label="Branch Location" title="Branch Location" name="Branch Location" id="BranchLocation" onChange={(event) => {
                                                        this.setState({
                                                            branchLocation: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="row" style={{padding:0}}>
                                               <div className="col-4 p-0" >
                                               {this.state.showCourseName ? <div id="errordiv" className="container-fluid">Course Name Required * </div> : null}
                                           
                                           
                                               </div>
                                               <div className="col-4 p-0" style={{width:0}}>
                                               {this.state.showBranchName ? <div id="errordiv" className="container-fluid">Please fill out Branch Name field * </div> : null}
                                               </div>
                                               <div className="col-4 p-0" style={{width:0}}>
                                               {this.state.showBranchLocation ? <div id="errordiv" className="container-fluid">Please fill out Branch Location field * </div> : null}
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
                                            {this.state.showEmployeeName ? <div id="errordiv" className="container-fluid">Please fill out Name field * </div> : null}
                                            <div style={{ width: '50%' }} className=" input-group  container-fluid">
                                                <MDBBtn id="genrate" type="submit" className=" form-control-plaintext  justify-content-center text-center" color="primary">Generate</MDBBtn>
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

export default withRouter(InputTrainingLetter)