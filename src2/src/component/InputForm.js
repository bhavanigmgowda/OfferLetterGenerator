import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

export class InputForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            FatherName: '',
            Age: '',
            Address: '',
            Designation: '',
            OfferValidity: '',
            Location: '',
            Salary: '',
            Date: ''
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


/*             console.log("props" + this.props.history.location.state)
 */        }

    render() {
        return (
            <div>
              
                    <div className="container-fluid">
                        <div className="row">
                            <div id="container" className="col-auto container mt-5 pb-5">
                                <div id="create" className="card shadow-lg mt-5">
                                    <div className="card-body">
                                        <form onSubmit={this.pass}>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend ">
                                                    <label className="input-group-text">Name</label>
                                                </div>
                                                <input autoComplete="off" className="form-control" type="text" name="Name" title="Name" id="Name" placeholder="Enter Name" onChange={(event) => {
                                                    this.setState({
                                                        Name: event.target.value
                                                    })
                                                }} />
                                            </div>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <label className="input-group-text">Father Name</label>
                                                </div>
                                                <input autoComplete="off" className="form-control" type="FatherName" name="FatherName" id="FatherName" title="Father Name" placeholder="Enter Father Name" onChange={(event) => {
                                                    this.setState({
                                                        FatherName: event.target.value
                                                    })
                                                }} />
                                            </div>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <label className="input-group-text">Age</label>
                                                </div>
                                                <input autoComplete="off" className="form-control" type="text" maxlength="2" name="Age" title="Age" id="Age" pattern="^0[1-9]|[1-9]\d$" required placeholder="Enter Age" onChange={(event) => {
                                                    this.setState({
                                                        Age: event.target.value
                                                    })
                                                }} />
                                            </div>

                                            <div className="input-group  mb-3">
                                                <div className="input-group-prepend ">
                                                    <label className="input-group-text">Address</label>
                                                </div>
                                                <input className="form-control border" type="Address" name="Address" title="Enter Address" id="Address" placeholder="Enter Address" onChange={(event) => {
                                                    this.setState({
                                                        Address: event.target.value
                                                    })
                                                }} />
                                            </div>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <label className="form-control-plaintext input-group-text">State</label>
                                                </div>
                                                <input className="form-control border" type="State" title="State" name="State" id="State" placeholder="Enter State" onChange={(event) => {
                                                    this.setState({
                                                        Location: event.target.value
                                                    })
                                                }} />
                                            </div>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <label className="form-control-plaintext input-group-text">Salary</label>
                                                </div>
                                                <input className="form-control border" type="number" title="Salary" name="Salary" id="Salary" placeholder="Enter Salary" onChange={(event) => {
                                                    this.setState({
                                                        Salary: event.target.value
                                                    })
                                                }} />
                                            </div>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <label className="input-group-text">Designation</label>
                                                </div>
                                                <input autoComplete="off" className="form-control" type="text" name="Designation" title="Designation" id="Designation" placeholder="Enter Designation" onChange={(event) => {
                                                    this.setState({
                                                        Designation: event.target.value
                                                    })
                                                }} />
                                            </div>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <label className="input-group-text">Offer Validity</label>
                                                </div>
                                                <input autoComplete="off" className="form-control" type="text" maxlength="2" name="OfferValidity" title="Offer Validity" id="OfferValidity" placeholder="Enter Offer Validity" onChange={(event) => {
                                                    this.setState({
                                                        OfferValidity: event.target.value
                                                    })
                                                }} />
                                            </div>
                                            <div className="input-group mb-3 container-fluid">
                                                <input type="reset" id="reset" title="reset" className="form-control-plaintext btn btn-outline-primary btn-sm" />
                                                <input type="submit" onSubmit={this.validate} id="submit" title="submit" className="form-control-plaintext btn btn-outline-success btn-sm" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>

        )
    }
}

export default InputForm