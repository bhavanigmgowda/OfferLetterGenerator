import React, { Component } from 'react';
import '../component/Cards.css'

import '../assert/letter.jpg'
import { BrowserRouter as Router, Route, withRouter,Link } from 'react-router-dom'
import Home from './home';
import Test1 from './IncrementLetter/test';
export default class Cards extends Component {

       constructor(props){
           super(props);
           this.state={
               emp:[]
           }
       }

       

    open1 = () => {
       /*  window.open(document.getElementById("newWindow"), 'height=500,width=500') */
    }
    render() {
        return (
            <div>
                <Home/>
            <div className="row" style={{ marginLeft: '255px',marginRight:'20px',marginTop: '40px' }}>

                <Link to='/hr'>

<div className="card" style={{width: '12rem',cursor:"pointer", margin:'20px',height:180}}>
  <img style={{width:'120px',marginLeft:'auto',marginRight:'auto'}} src="https://previews.123rf.com/images/bloomua/bloomua1702/bloomua170200084/72229893-modern-icon-of-confirmation-letter-approved-document-and-e-mail-checklist-premium-quality-illustrati.jpg" className="card-img-top" alt="..." />
   <div style={{color:'#343A40'}}><h6 className="font-weight-bold">HR Letter</h6></div>
</div></Link>

<Link to='/inputConfirmation'>

<div className="card " style={{width: '12rem',cursor:"pointer", margin:'20px',height:180}}>
  <img style={{width:'120px',marginLeft:'auto',marginRight:'auto'}} src="https://previews.123rf.com/images/bloomua/bloomua1702/bloomua170200084/72229893-modern-icon-of-confirmation-letter-approved-document-and-e-mail-checklist-premium-quality-illustrati.jpg" className="card-img-top" alt="..." />
   <div style={{color:'#343A40'}}><h6 className="font-weight-bold">Confirmation Letter</h6></div>
</div></Link>

<Link to='/InputcertificateLetter'>

<div className="card" style={{width: '12rem',cursor:"pointer", margin:'20px',height:180}}>
  <img style={{width:'120px',marginLeft:'auto',marginRight:'auto'}} src="https://previews.123rf.com/images/bloomua/bloomua1702/bloomua170200084/72229893-modern-icon-of-confirmation-letter-approved-document-and-e-mail-checklist-premium-quality-illustrati.jpg" className="card-img-top" alt="..." />
   <div style={{color:'#343A40'}}><h6 className="font-weight-bold">Certificate Letter</h6></div>
</div></Link>
<Link to='/InputDepuationLetter'>

<div className="card" style={{width: '12rem',cursor:"pointer", margin:'20px',height:180}}>
  <img style={{width:'120px',marginLeft:'auto',marginRight:'auto'}} src="https://previews.123rf.com/images/bloomua/bloomua1702/bloomua170200084/72229893-modern-icon-of-confirmation-letter-approved-document-and-e-mail-checklist-premium-quality-illustrati.jpg" className="card-img-top" alt="..." />
   <div style={{color:'#343A40'}}><h6 className="font-weight-bold">Depuatation Letter</h6></div>
</div></Link>
<Link to='/InputDesignationLetter'>

<div className="card" style={{width: '12rem',cursor:"pointer", margin:'20px',height:180}}>
  <img style={{width:'120px',marginLeft:'auto',marginRight:'auto'}} src="https://previews.123rf.com/images/bloomua/bloomua1702/bloomua170200084/72229893-modern-icon-of-confirmation-letter-approved-document-and-e-mail-checklist-premium-quality-illustrati.jpg" className="card-img-top" alt="..." />
   <div style={{color:'#343A40'}}><h6 className="font-weight-bold">Designation <br/> Change Letter</h6></div>
</div></Link>
<Link to='/InputIncrementLetter'>

<div className="card" style={{width: '12rem',cursor:"pointer", margin:'20px',height:180}}>
  <img style={{width:'120px',marginLeft:'auto',marginRight:'auto'}} src="https://previews.123rf.com/images/bloomua/bloomua1702/bloomua170200084/72229893-modern-icon-of-confirmation-letter-approved-document-and-e-mail-checklist-premium-quality-illustrati.jpg" className="card-img-top" alt="..." />
   <div style={{color:'#343A40'}}><h6 className="font-weight-bold">Increment Letter</h6></div>
</div></Link>

<Link to='/InputOfferLetter'>

<div className="card" style={{width: '12rem',cursor:"pointer", margin:'20px',height:180}}>
  <img style={{width:'120px',marginLeft:'auto',marginRight:'auto'}} src="https://previews.123rf.com/images/bloomua/bloomua1702/bloomua170200084/72229893-modern-icon-of-confirmation-letter-approved-document-and-e-mail-checklist-premium-quality-illustrati.jpg" className="card-img-top" alt="..." />
   <div style={{color:'#343A40'}}><h6 className="font-weight-bold">Offer Letter</h6></div>
</div></Link>


<Link to='/InputRelivingLetter'>

<div className="card" style={{width: '12rem',cursor:"pointer", margin:'20px',height:180}}>
  <img style={{width:'120px',marginLeft:'auto',marginRight:'auto'}} src="https://previews.123rf.com/images/bloomua/bloomua1702/bloomua170200084/72229893-modern-icon-of-confirmation-letter-approved-document-and-e-mail-checklist-premium-quality-illustrati.jpg" className="card-img-top" alt="..." />
   <div style={{color:'#343A40'}}><h6 className="font-weight-bold">Reliving Letter</h6></div>
</div></Link>

<Link to='/InputTrainingLetter'>

<div className="card" style={{width: '12rem',cursor:"pointer", margin:'20px',height:180}}>
  <img style={{width:'120px',marginLeft:'auto',marginRight:'auto'}} src="https://previews.123rf.com/images/bloomua/bloomua1702/bloomua170200084/72229893-modern-icon-of-confirmation-letter-approved-document-and-e-mail-checklist-premium-quality-illustrati.jpg" className="card-img-top" alt="..." />
   <div style={{color:'#343A40'}}><h6 className="font-weight-bold">Training Letter</h6></div>
</div></Link>

<Link to='/InputTrainingCommitLetter'>

<div className="card" style={{width: '12rem',cursor:"pointer", margin:'20px',height:180}}>
  <img style={{width:'120px',marginLeft:'auto',marginRight:'auto'}} src="https://previews.123rf.com/images/bloomua/bloomua1702/bloomua170200084/72229893-modern-icon-of-confirmation-letter-approved-document-and-e-mail-checklist-premium-quality-illustrati.jpg" className="card-img-top" alt="..." />
   <div style={{color:'#343A40'}}><h6 className="font-weight-bold">Training Commitment Letter</h6></div>
</div></Link>

<Link to='/InputExitLetter'>

<div className="card" style={{width: '12rem',cursor:"pointer", margin:'20px',height:180}}>
  <img style={{width:'120px',marginLeft:'auto',marginRight:'auto'}} src="https://previews.123rf.com/images/bloomua/bloomua1702/bloomua170200084/72229893-modern-icon-of-confirmation-letter-approved-document-and-e-mail-checklist-premium-quality-illustrati.jpg" className="card-img-top" alt="..." />
   <div style={{color:'#343A40'}}><h6 className="font-weight-bold">Exit Letter</h6></div>
</div></Link>




                {/* <div class="row" style={{margin: "0px 30px 30px 30px"}}>
                    <div onClick={this.open1.bind(this)} class="column">
                        <div class="card">
                            <img src="https://previews.123rf.com/images/bloomua/bloomua1702/bloomua170200084/72229893-modern-icon-of-confirmation-letter-approved-document-and-e-mail-checklist-premium-quality-illustrati.jpg"></img>
                            <p>Some text</p>
                            <p>Some text</p>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <h3>Card 2</h3>
                            <p>Some text</p>
                            <p>Some text</p>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <h3>Card 3</h3>
                            <p>Some text</p>
                            <p>Some text</p>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <h3>Card 4</h3>
                            <p>Some text</p>
                            <p>Some text</p>
                        </div>
                    </div>
                </div>

                <div class="row" style={{margin:'30px'}} >
                    <div class="column">
                        <div class="card">
                            <h3>Card 1</h3>
                            <p>Some text</p>
                            <p>Some text</p>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <h3>Card 2</h3>
                            <p>Some text</p>
                            <p>Some text</p>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <h3>Card 3</h3>
                            <p>Some text</p>
                            <p>Some text</p>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <h3>Card 4</h3>
                            <p>Some text</p>
                            <p>Some text</p>
                        </div>
                    </div>
                </div>


                <div class="row" style={{margin:'30px'}}>
                    <div class="column">
                        <div class="card">
                            <h3>Card 1</h3>
                            <p>Some text</p>
                            <p>Some text</p>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <h3>Card 2</h3>
                            <p>Some text</p>
                            <p>Some text</p>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <h3>Card 3</h3>
                            <p>Some text</p>
                            <p>Some text</p>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <h3>Card 4</h3>
                            <p>Some text</p>
                            <p>Some text</p>
                        </div>
                    </div>
                </div>

 */}


            </div>
            </div>
        );
    }
}
