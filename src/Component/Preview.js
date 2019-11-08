import React, { Component } from 'react'

import Page1 from './Page1';
export default class Preview extends Component {
    
    printPdf=()=>{
        // var pdfData=document.getElementById("outter");
         window.print();
         
     }
      
    render() {
        return (
            <div style={{background:'#7a7777'}}>
              <div style={{display:"inline"}}>
            <div style={{background: '#494d51ba',position:"fixed",zIndex:'1000'}} class="container-fluid">
                <nav class="navbar navbar-expand-lg">
                    <div style={{marginLeft: '95%'}}>
                  {/* <a style={{marginRight: "25px"}}><i class="fas fa-download"></i></a>*/}
                    <a  onClick={()=>{this.printPdf()}} type="button"><i class="fas fa-print"></i></a>
                    </div>
                </nav>
            </div>
        </div> 
              {<Page1 />} 

            </div>
        )
    }
}
