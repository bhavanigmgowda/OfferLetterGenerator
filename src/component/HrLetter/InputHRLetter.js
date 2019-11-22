import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import { withRouter } from 'react-router-dom';
import '../HrLetter/InputHRLetter.css'
import $ from 'jquery'

export class InputHRLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeName: '',
            employeeId: '',
            joiningDate: '',
            date: '',
            CIN: '',
            designation: '',
            // valiadation state variables
            showEmployeeName: '',
            showEmployeeId: '',
            showJoiningDate: '',
            showDate: '',
            showCIN: '',
            showDesignation: '',
            validDate:''


        }
    }

    Demo = () => {

        /*     return <div><NewWindow>
            <h1>Hi</h1>
          </NewWindow></div>; */
    }




    componentDidMount() {
        console.log("inside CDM")
        debugger;

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
        // validation code 
        var that = this;
        $(document).ready(function () {
            $('#genrate').click(function (e) {
                let CIN = (document.getElementById("CIN").value).trim();
                let joiningDate = (document.getElementById("joiningDate").value).trim();
                let designation = (document.getElementById("designation").value).trim();
                let employeeId = (document.getElementById("employeeId").value).trim();
                let employeeName = (document.getElementById("employeeName").value).trim();
                let selectedDate = new Date(joiningDate);
                let now = new Date();
                console.log("Inside Validation", CIN, joiningDate, employeeName,designation,employeeId);

                if (CIN === "") {
                    that.setState({ showCIN: true })
                }
                if (joiningDate === "") {
                    that.setState({ showJoiningDate: true })
                }
                if (designation === "") {
                    that.setState({ showDesignation: true })
                }
                if (employeeId === "") {
                    that.setState({ showEmployeeId: true })
                }
                if (employeeName === "") {
                    that.setState({ showEmployeeName: true })
                }
                  
                if (CIN != "" && joiningDate != "" && designation != "" && employeeId != "" && employeeName !== "") {
                    
                     if(selectedDate<now){
                         that.setState({
                            validDate:"true"
                         })

                        return false;
                   } 
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
        debugger;
        event.preventDefault();
        console.log("data========", this.state)
        
        //set form data in local Storage

         
        this.props.clicked(this.state)
        this.props.history.push('/hrLetter')

        // this.props.history.push({
        //     pathname: '/hrLetter',
        //     state: { employee: this.state}
        // })

        //window.open('http://localhost:3000/hrLetter')




    }

    addtion = () => {
        alert("Yellow");
    }



    requiredField() {
        // document.getElementsByClassName("employeeName").style.color = "red";
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
    hideJoiningDate = () => {
        this.setState({
            showJoiningDate: false
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
                                        <h3 className="text-center blue-text font-bold ">HR Letter</h3>
                                    </div>
                                    <div className="card-body ">
                                       <form onSubmit={this.pass}>

                                            <div className="row">
                                                <div className="col-6">
                                                    <MDBInput autocomplete="off" label="Employee Name" className="w-100" name="employeeName" title="Employee Name" id="employeeName"
                                                     onChange={(event) =>{
                                                        this.setState({
                                                            employeeName: event.target.value
                                                        })
                                                     this.hideEmployeeName()}} />
                                                </div>
                                                <div className="col-6">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideEmployeeId} label="Employee Id" name="employeeId" id="employeeId" title="Employee Id" onChange={(event) => {
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
                                               {this.state.showEmployeeId ? <div id="errordiv" className="container-fluid">Please fill out ID field * </div> : null}
                                               </div>
                                           </div>
                                            <div className="row">

                                                <div className="col-12">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideDesignation} label="Designation" name="designation" id="designation" title="Employee Id" onChange={(event) => {
                                                        this.setState({
                                                            designation: event.target.value
                                                        })
                                                    }} />

                                                </div>
                                            </div>
                                            {this.state.showDesignation ? <div id="errordiv" className="container-fluid">Please fill out Designation field * </div> : null}
                                            <div className="row">
                                                <div className="col-12">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideJoiningDate} onClick={this.hideJoiningDate} type="date" label="Joining Date" title="Joining Date" name="Joining Date" id="joiningDate" 
                                                       onChange={(event) =>{{this.setState({
                                                            joiningDate: event.target.value
                                                        });this.hideJoiningDate()}
                                                        
                                                    }} />
                                                </div>
                                            </div>
                                            {this.state.showJoiningDate ? <div id="errordiv" className="container-fluid">Please fill out JoiningDate field * </div> : null}
                                            {this.state.validDate ? <div id="errordiv" className="container-fluid">Joining Date must be greater or equal to today's date* </div> : null}
                                            <div className="row">
                                                <div className="col-12">

                                                    <MDBInput autocomplete="off" onKeyPress={this.hideCIN} type="text" label="CIN" title="CIN" name="CIN" id="CIN" onChange={(event) => {
                                                        this.setState({
                                                            CIN: event.target.value
                                                        })
                                                    }} />

                                                </div>
                                            </div>
                                            {this.state.showCIN ? <div id="errordiv" className="container-fluid">Please fill out CIN field * </div> : null}
                                          
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

export default withRouter(InputHRLetter)