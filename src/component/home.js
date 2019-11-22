import React, { Component } from 'react';
import '../component/home.css'
import Cards from './Cards';
import { BrowserRouter as Router, Route, withRouter, Link } from 'react-router-dom'
import { MDBBtn } from "mdbreact";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      print : false
    }
  }

  componentDidMount() {

    var menutoggle = false;
    document.getElementById('menu-toggle').onclick = function () {
      if (!menutoggle) {
        document.getElementById('sidebar-wrapper').classList.remove('hidden');
        menutoggle = !menutoggle;
        document.getElementById('wrapper').classList.remove('hiddens');
      } else if (menutoggle) {
        document.getElementById('sidebar-wrapper').classList.add('hidden');
        document.getElementById('wrapper').classList.add('hiddens');
        menutoggle = !menutoggle;
      }

    }


    var menutoggle = false;
    if(this.props.buttonShow){

      let a = document.getElementById('Print');
      a.addEventListener('click',function(){
        if (menutoggle && menutoggle!==null) {
          document.getElementById('sidebar-wrapper').classList.add('hidden');
          document.getElementById('wrapper').classList.add('hiddens');
          menutoggle = !menutoggle;
        }
      })

    }
    
  
  }

  printPage=()=>{

     window.print();
  }


  render() {
    return (
      <div>

        <div>
          {/* <nav className="navbar navbar-expand navbar-dark bg-primary"> <a href="#menu-toggle" id="menu-toggle" className="navbar-brand"><span className="navbar-toggler-icon" /></a> <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon" /> </button>
    <div className="collapse navbar-collapse" id="navbarsExample02">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active"> <Link className="nav-link" to="/">e-Letter <span className="sr-only">(current)</span></Link> </li>
      </ul>
   
      <form className="form-inline my-2 my-md-0"> </form>
    </div>
  </nav> */}
          <nav class="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar" style={{backgroundColor:'#343A40'}} >
            <a id="menu-toggle" class="navbar-brand" href="#"><i className="navbar-toggler-icon" /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <Link class="nav-link" to="/cards">E-letter <span class="sr-only">(current)</span></Link>
                </li>
                <li style={{  position: 'absolute',right: '10vw'}} >

                  { this.props.buttonShow? <MDBBtn  className="ButtonPrint" onClick={this.printPage} color="info" id="Print">Print</MDBBtn>:null}
             
                </li>
                <li class="nav-item avatar dropdown">
                  <a class="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="https://cdn2.iconfinder.com/data/icons/facebook-51/32/FACEBOOK_LINE-01-512.png" class="rounded-circle z-depth-0" alt="avatar image" />
                  </a>
                  <div class="dropdown-menu dropdown-menu-lg-right dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-5">
                    <a class="dropdown-item waves-effect waves-light" href="#">Profile-Settings</a>
                    <Link class="dropdown-item waves-effect waves-light" to='/'>Logout</Link>

                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <div id="wrapper" className="toggled hiddens">
            {/* Sidebar */}
            <div id="sidebar-wrapper" className="hidden  text-left ">
              <ul className="sidebar-nav">
                <li> <br /> </li>
                <li> <br /> </li>
                <li> <br /> </li>

                <li> <Link to="/hr">HR LETTER</Link> </li>

                <li> <Link to="/InputOfferLetter">OFFER LETTER</Link> </li>
                <li> <Link to="/InputTrainingLetter">TRAINING LETTER</Link> </li>
                {/*   <li> <Link style={{wordBreak:'break-all'}} to="#">TRAINING COMMITMENT <span style={{ padding: '20px' }}>LETTER </span></Link> </li> */}
                <li> <Link to="/InputIncrementLetter">INCREMENT LETTER</Link> </li>
                <li> <Link to="/InputDesignationLetter">DESIGNATION CHANGE <span style={{ padding: '20px' }}>LETTER </span></Link> </li>
                <li> <Link to="/InputDepuationLetter">DEPUTATION LETTER</Link> </li>
                {/*  <li> <a href="#">EMPLOYMENT-CERTIFICATE</a> </li> */}
                <li> <Link to="/inputConfirmation">CONFIRMATION-LETTER</Link> </li>
                <li> <Link to="/InputRelivingLetter">RELIEVING LETTER</Link> </li>
                <li> <Link to="/InputExitLetter">EXIT-LETTER</Link> </li>
                <li> <Link to="/InputcertificateLetter">CERTIFICATION LETTER</Link> </li>


              </ul>
            </div> {/* /#sidebar-wrapper */}
            {/* Page Content */}
            <div id="page-content-wrapper">
              <div className="container-fluid">
              </div>
            </div> {/* /#page-content-wrapper */}
          </div> {/* /#wrapper */}
          {/* Bootstrap core JavaScript */}
        </div>



      </div>
    );
  }
}
