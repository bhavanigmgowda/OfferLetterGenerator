import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Home from '../home';
import { withRouter } from 'react-router-dom';
import $ from 'jquery'

export class InputCertificateLetter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeName: '',
            companyLocation: '',
            certificateType: '',
            date: '',
            CIN: '',

            //validation variable

            showEmployeeName: '',
            showCompanyLocation: '',
            showCertificateType: '',
            showCIN: '',

        }
    }

    componentDidMount() {
debugger;
        let today = new Date();
        let currentdate = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        this.setState({
            date: currentdate
        })

        let that = this;
        $(document).ready(function () {
            $('#generate').click(function (e) {
                debugger;
                let CIN = (document.getElementById("CIN").value).trim();
                let companyLocation = (document.getElementById("companyLocation").value).trim();
                let employeeName = (document.getElementById("employeeName").value).trim();
                let certificateType = (document.getElementById("certificateType").value).trim();

                console.log('certificateType = ', certificateType)


                if (CIN === "") {
                    that.setState({ showCIN: true })
                }
                if (companyLocation === "") {
                    that.setState({ showCompanyLocation: true })
                }

                if (certificateType === "Select an Option") {
                    that.setState({ showCertificateType: true })
                }

                if (employeeName === "") {
                    that.setState({ showEmployeeName: true })
                }

                if (CIN != "" && companyLocation != "" && certificateType != "Select an Option" && employeeName !== "") {
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
    hideCompanyLocation = () => {
        this.setState({
            showCompanyLocation: false
        })
    }

    hideCertificateType = () => {
        this.setState({
            showCertificateType: false
        })
    }


    pass = (event) => {
        event.preventDefault();
        console.log("data========", this.state)

        this.props.clicked(this.state)
        this.props.history.push('/certificateLetter')

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
                                        <h3 className="text-center blue-text font-bold ">Certificate Letter</h3>
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
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideCompanyLocation}  label="Company Location" className="w-100" name="companyLocation" title="Company Location" id="companyLocation" onChange={(event) => {
                                                        this.setState({
                                                            companyLocation: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="row" style={{padding:0}}>
                                               <div className="col-6 p-0" >
                                               {this.state.showEmployeeName ? <div id="errordiv" className="container-fluid">Please fill out employee Name field * </div> : null}
                                               </div>
                                               <div className="col-6 p-0" style={{width:0}}>
                                               {this.state.showCompanyLocation ? <div id="errordiv" className="container-fluid">Please fill out company Location field * </div> : null}
                                               </div> 
                                           </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <MDBInput autocomplete="off" onKeyPress={this.hideCIN} type="text" label="CIN" title="CIN" name="CIN" id="CIN" onChange={(event) => {
                                                        this.setState({
                                                            CIN: event.target.value
                                                        })
                                                    }} />
                                                </div>
                                                <div class="col-md-6" style={{ paddingTop: '25px' }}>
                                                    <select onClick={this.hideCertificateType} class="browser-default custom-select" autocomplete="off"  label="Certificate Type" name="certificateType" title="Certificate Type" id="certificateType" onChange={(event) => {
                                                        this.setState({
                                                            certificateType: event.target.value
                                                        })
                                                    }}>
                                                        <option selected >Select an Option</option>
                                                        <option value="Primary">Primary Certificate</option>
                                                        <option value="Secondary">Secondary Certificate</option>
                                                    </select>



                                                </div>
                                            </div>
                                            <div className="row" style={{padding:0}}>
                                               <div className="col-6 p-0" >
                                               {this.state.showCIN ? <div id="errordiv" className="container-fluid">Please fill out CIN field * </div> : null}
                                           
                                           
                                               </div>
                                               <div className="col-6 p-0" style={{width:0}}>
                                               {this.state.showCertificateType ? <div id="errordiv" className="container-fluid">Please fill out certificate Type field * </div> : null}
                                               </div>
                                           </div>
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
export default withRouter(InputCertificateLetter)
