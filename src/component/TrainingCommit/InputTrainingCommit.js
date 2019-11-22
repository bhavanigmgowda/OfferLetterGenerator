import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import { withRouter } from 'react-router-dom';
import '../CommonStyle.css'
import $ from 'jquery'

export class InputTrainingCommitLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeName: '',
            designation: '',
            joiningDate: '',
            courseName: '',
            trainingStartDate: '',
            trainingEndDate: '',
            branchName: '',
            branchLocation: '',
            date: '',
            CIN: '',


              // validation variable
              showEmployeeName: '',
              showdDesignation: '',
              showJoiningDate: '',
              showCourseName: '',
              showTrainingStartDate: '',
              showTrainingEndDate: '',
              showBranchName: '',
              showBranchLocation: '',
              showCIN: '',
  

        }
    }

    


    componentDidMount() {
        $(document).ready( ()=> {
            $('#generate').click( (e) =>{
                debugger
                let today = new Date();
                let currentdate = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
                this.setState({
                    date: currentdate
                })
                console.log("dattetaetaetaet ",this.state)

                let employeeName = (document.getElementById("employeeName").value).trim();
                let designation = (document.getElementById("designation").value).trim();
                let CIN = (document.getElementById("CIN").value).trim();
                let joiningDate = (document.getElementById("joiningDate").value).trim();
                let courseName = (document.getElementById("courseName").value).trim();
                let branchName = (document.getElementById("branchName").value).trim();
                let branchLocation=(document.getElementById("branchLocation").value).trim();
                let trainingStartDate= (document.getElementById("trainingStartDate").value).trim();
                let trainingEndDate= (document.getElementById("trainingEndDate").value).trim();

                if (CIN === "") {
                    this.setState({ showCIN: true })
                }
                if (designation === "") {
                    this.setState({ showDesignation: true })
                }
                if (employeeName === "") {
                    this.setState({ showEmployeeName: true })
                }

                if (joiningDate === "") {
                    this.setState({ showJoiningDate: true })
                }
                if (courseName === "") {
                    this.setState({ showCourseName: true })
                }
                if (branchName === "") {
                    this.setState({ showBranchName: true })
                }
                if (branchLocation === "") {
                    this.setState({ showBranchLocation: true })
                }
                if (trainingStartDate === "") {
                    this.setState({ showTrainingStartDate: true })
                }
                if (trainingEndDate === "") {
                    this.setState({ showTrainingEndDate: true })
                }


                if (CIN != "" && designation != "" && employeeName != "" &&  joiningDate!="" && branchName!='' && branchLocation!="" && courseName!="" && trainingStartDate!="" && trainingEndDate!="" ) {
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
    hideTrainingStartDate = () => {
        this.setState({
            showTrainingStartDate: false
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
    hideTrainingEndDate = () => {
        this.setState({
            showTrainingEndDate: false
        })
    }





    pass = (event) => {
        event.preventDefault();
        console.log("data========", this.state)

        this.props.clicked(this.state)
        this.props.history.push('/TrainingCommit')

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
                                        <h3 className="text-center blue-text font-bold ">Training Commitment Letter</h3>
                                    </div>
                                    <div className="card-body ">
                                        <form onSubmit={this.pass}>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideEmployeeName} label="Employee Name" className="w-100" name="employeeName" title="Employee Name" id="employeeName" onChange={(event) => {
                                                        this.setState({
                                                            employeeName: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" onClick={this.hideJoiningDate} onKeyPress={this.hideJoiningDate} type="date" label="Joining Date" title="Joining Date" name="JoiningDate" id="joiningDate" onChange={(event) => {
                                                        this.setState({
                                                            joiningDate: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>

                                            <div className="row" style={{padding:0}}>
                                               <div className="col-6 p-0" >
                                               {this.state.showEmployeeName ? <div id="errordiv" className="container-fluid">Please fill out Name field * </div> : null}
                                           
                                           
                                               </div>
                                               <div className="col-6 p-0" style={{width:0}}>
                                               {this.state.showJoiningDate ? <div id="errordiv" className="container-fluid">Please fill out Joining Date field * </div> : null}
                                               </div>
                                           </div>





                                            <div class="row">
                                                <div class="col-md-12">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideDesignation} label="Designation" type="text" name="designation" id="designation" title="designation" onChange={(event) => {
                                                        this.setState({
                                                            designation: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                               
                                            </div>

                                            <div className="row p-0" >
                                               {this.state.showDesignation ? <div id="errordiv" className="container-fluid">Please fill out Name field * </div> : null}
                                               </div>



                                            <div class="row">
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" onClick={this.hideTrainingStartDate} onKeyPress={this.hideTrainingStartDate} type="date" label="Traininng Start Date" title="Training Start Date" name="trainingStartDate" id="trainingStartDate" onChange={(event) => {
                                                        this.setState({
                                                            trainingStartDate: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" onClick={this.hideTrainingEndDate} onKeyPress={this.hideTrainingEndDate} type="date" label="Training End Date" title="Training End Date" name="trainingStartDate" id="trainingEndDate" onChange={(event) => {
                                                        this.setState({
                                                            trainingEndDate: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>

                                            <div className="row" style={{padding:0}}>
                                               <div className="col-6 p-0" >
                                               {this.state.showTrainingStartDate ? <div id="errordiv" className="container-fluid">Please fill out Training Start Date field * </div> : null}
                                           
                                           
                                               </div>
                                               <div className="col-6 p-0" style={{width:0}}>
                                               {this.state.showTrainingEndDate ? <div id="errordiv" className="container-fluid">Please fill out Training End Date field * </div> : null}
                                               </div>
                                           </div>


                                            <div class="row">
                                            <div class="col-md-4">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideCourseName} label="Course Name" name="courseName" id="courseName" title="Course Name" onChange={(event) => {
                                                        this.setState({
                                                            courseName: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div class="col-md-4">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideBranchName} label="Branch Name" name="branchName" id="branchName" title="Branch Name" onChange={(event) => {
                                                        this.setState({
                                                            branchName: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div class="col-md-4">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideBranchLocation} type="text" label="Branch Location" title="Branch Location" name="branchLocation" id="branchLocation" onChange={(event) => {
                                                        this.setState({
                                                            branchLocation: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="row" style={{padding:0}}>
                                            <div className="col-4 p-0" style={{width:0}}>
                                               {this.state.showCourseName ? <div id="errordiv" className="container-fluid">Enter Course Name * </div> : null}
                                               </div>


                                               <div className="col-4 p-0" >
                                               {this.state.showBranchName ? <div id="errordiv" className="container-fluid">Enter Branch Name * </div> : null}
                                           
                                           
                                               </div>
                                               <div className="col-4 p-0" style={{width:0}}>
                                               {this.state.showBranchLocation? <div id="errordiv" className="container-fluid">Enter Branch Location * </div> : null}
                                               </div>
                                           </div>

                                            <div className="row">
                                                <div className="col-12">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideCIN}  type="text" label="CIN" title="CIN" name="CIN" id="CIN" onChange={(event) => {
                                                        this.setState({
                                                            CIN: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                            {this.state.showCIN ? <div id="errordiv" className="container-fluid p-0">Please fill out CIN field * </div> : null}
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
export default withRouter(InputTrainingCommitLetter)