import React, { Component } from 'react'

import Page1 from './Page1';
var employee='';

export default class Preview extends Component {

    constructor(props){
        super(props);

        this.state={
           showNav:true
        }
        
    }
    printPdf=()=>{
        // var pdfData=document.getElementById("outter");
         window.print();
         
     }

     /* navBarShow=()=>{
     
        let timeOut=5000;
         this.setState({
            showNav:true
         });

         setTimeout(() => {
            this.setState({
                showNav:false
             }) 
         },timeOut);
     } */

 componentDidMount() {
     
 }
 
    render() {
        return (
            <div/*  onMouseOver={()=>this.navBarShow()} */ >

                {this.state.showNav?   <div style={{display:"inline"}}>
            <div /*  onMouseOver={()=>this.setState({showNav:true})} */ style={{background: '#494d51ba',position:"fixed",zIndex:'1000',paddingBottom:"1%"}} class="container-fluid">
                <nav class="navbar navbar-expand-lg">
                    <div style={{marginLeft: '95%'}}>
                  {/* <a style={{marginRight: "25px"}}><i class="fas fa-download"></i></a>*/}
                    <button style={{height:"50px",width:"50px",marginTop:'10px'}} onClick={()=>{this.printPdf()}} ><strong><i  class="fas fa-print fa-lg"></i></strong></button>
                    </div>
                </nav>
            </div>
        </div> :null}
            <div style={{background:'#7a7777'}} >
           
              {<Page1 empData={this.props.empData} buttonShow={false}  />} 

            </div>
            </div>
        )
    }
}
