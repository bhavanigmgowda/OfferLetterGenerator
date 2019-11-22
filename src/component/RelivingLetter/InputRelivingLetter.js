import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import { withRouter } from 'react-router-dom';
import $ from 'jquery'
export class InputRelivingLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeName: '',
            employeeId:'',
            designation: '',
            joiningDate: '',
            relievingDate: '',
            date: '',
            CIN: '',
            // validation variable
            showEmployeeName: '',
            showEmployeeId:'',
            showDesignation: '',
            showJoiningDate: '',
            showRelievingDate: '',
            showCIN: '',

        }
    }

    componentDidMount() {

        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];


      const nth = (d)=> {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
          case 1:  return "st";
          case 2:  return "nd";
          case 3:  return "rd";
          default: return "th";
        }
      }

        let today = new Date();
        let currentdate = today.getDate()+nth(today.getDate()) + '-' + monthNames[today.getMonth()] + '-' + today.getFullYear();
        this.setState({
            date:  currentdate
        })

  
        var that = this;
        $(document).ready(function () {
            $('#genrate').click(function (e) {
                let employeeName = document.getElementById("employeeName").value;
                let employeeId = document.getElementById("employeeId").value;
                let designation = document.getElementById("designation").value;
                let CIN = document.getElementById("CIN").value;
                let joiningDate = document.getElementById("joiningDate").value;
                let relievingDate = document.getElementById("relievingDate").value;

                if (CIN === "") {
                    that.setState({ showCIN: true })
                }
                if (employeeId === "") {
                    that.setState({ showEmployeeId: true })
                }
                if (designation === "") {
                    that.setState({ showDesignation: true })
                }
                if (employeeName === "") {
                    that.setState({ showEmployeeName: true })
                }

                if (joiningDate === "") {
                    that.setState({ showJoiningDate: true })
                }
                if (relievingDate === "") {
                    that.setState({ showRelievingDate: true })
                }
               

                if (CIN != "" && employeeId != "" && designation != "" && employeeName != "" && joiningDate !== "" &&  relievingDate!="" ) {
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
    hideEmployeeId = () => {
        this.setState({
            showEmployeeId: false
        })
    }
    hideDesignation = () => {
        this.setState({
            showDesignation: false
        })
    }
    hideCIN = () => {
        this.setState({
            showCIN: false
        })
    }
    hideJoiningDate = () => {
        this.setState({
            showJoiningDate: false
        })
    }
    hideRelievingDate = () => {
        this.setState({
            showRelievingDate: false
        })
    }

    pass = (event) => {
        event.preventDefault();
        console.log("data========", this.state)

        this.props.clicked(this.state)
        this.props.history.push('/RelivingLetter')

    }

    render() {
        return (
            <div>
                <Home buttonShow={false}/>
                <div >
                    <div className="container-fluid mt-5">
                        <div className="row">
                            <div className="col-auto container mt-5 pb-5">
                                <div style={{ width: '500px' }} className="card m-auto shadow-lg mt-5">
                                    <div class="card-header" style={{ borderRadius: '0px !important', background: 'white' }} >
                                        <h3 className="text-center blue-text font-bold ">Relieving Letter</h3>
                                    </div>
                                    <div className="card-body ">
                                        <form onSubmit={this.pass}>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideEmployeeName}  label="Employee Name" className="w-100" name="employeeName" title="Employee Name" id="employeeName" onChange={(event) => {
                                                        this.setState({
                                                            employeeName: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div class="col-md-6">
                                                <MDBInput autocomplete="off" onKeyPress={this.hideEmployeeId} label="Employee Id" className="w-100" name="employeeId" title="Employe Id" id="employeeId" onChange={(event) => {
                                                        this.setState({
                                                            employeeId: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="row" style={{padding:0}}>
                                               <div className="col-6 p-0" >
                                               {this.state.showEmployeeName ? <div id="errordiv" className="container-fluid">Please fill out Name field * </div> : null}
                                           
                                           
                                               </div>
                                               <div className="col-6 p-0" style={{width:0}}>
                                               {this.state.showEmployeeId ? <div id="errordiv" className="container-fluid">Please fill out Id field * </div> : null}
                                               </div>
                                           </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" onClick={this.hideJoiningDate} onKeyPress={this.hideJoiningDate}  type="date" label="Joining Date" title="Joining Date" name="JoiningDate" id="joiningDate" onChange={(event) => {
                                                        this.setState({
                                                            joiningDate: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div class="col-md-6">
                                                    <MDBInput autocomplete="off" onClick={this.hideRelievingDate} onKeyPress={this.hideRelievingDate} type="date" label="Relieving Date" title="relievingDate" name="relievingDate" id="relievingDate" onChange={(event) => {
                                                        this.setState({
                                                            relievingDate: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="row" style={{padding:0}}>
                                               <div className="col-6 p-0" >
                                               {this.state.showJoiningDate ? <div id="errordiv" className="container-fluid">Please fill out Joining Date field * </div> : null}
                                           
                                           
                                               </div>
                                               <div className="col-6 p-0" style={{width:0}}>
                                               {this.state.showRelievingDate ? <div id="errordiv" className="container-fluid">Please fill out Relieving Date field * </div> : null}
                                               </div>
                                           </div>

                                            <div class="row">
                                                <div class="col-md-12">
                                                <MDBInput autocomplete="off"  onKeyPress={this.hideDesignation} label="Designation" type="text" name="designation" id="designation" title="designation" onChange={(event) => {
                                                        this.setState({
                                                            designation: event.target.value
                                                        })
                                                    }} />

                                                </div>
                                            </div>
                                            {this.state.showDesignation ? <div id="errordiv" className="container-fluid">Please fill out  designation field * </div> : null}

                                            <div className="row">
                                                <div className="col-12">

                                                    <MDBInput autocomplete="off" onKeyPress={this.hideCIN}  type="text" label="CIN" title="CIN" name="CIN" id="CIN" onChange={(event) => {
                                                        this.setState({
                                                            CIN: event.target.value
                                                        })
                                                    }} />

                                                </div>
                                            </div>
                                            {this.state.showCIN ? <div id="errordiv" className="container-fluid">Please fill out  CIN field * </div> : null}
                                            <div className=" input-group w-50 container-fluid">
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
export default withRouter(InputRelivingLetter)