import React, { Component } from 'react';
import '../IncrementLetter/test.css';
import { BrowserRouter as Router, Route, withRouter,Link } from 'react-router-dom'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
export default class Test1  extends Component {


  // Create styles


  render() {
    const styles = StyleSheet.create({
      page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
      },
      section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
      }
    });
    return (
      <div>

<Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>


       {/*     <div>
  <nav className="navbar navbar-expand navbar-dark bg-primary"> 
 
<div class="btn-group">
  <button style={{    marginTop: '2px',right: '17px',marginBottom:'-11px'}} type="button" class="btn btn-primary" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
  <span class="fas fa-align-justify"></span>
  </button>
  <div style={{marginLeft: '-20px',
    background: 'black',
    width: '260%',
    height: '1800%',
    marginTop: '14px'
}}  class="dropdown-menu">
    <a style={{color:'white'}} class="dropdown-item" href="#">Action</a>
    <a style={{color:'white'}}  class="dropdown-item" href="#">Another action</a>
    <a style={{color:'white'}} class="dropdown-item" href="#">Something else here</a>
   
  </div>
</div>

  
  


    <div className="collapse navbar-collapse" id="navbarsExample02">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active"> <Link className="nav-link" to="/">e-Letter <span className="sr-only">(current)</span></Link> </li>
      </ul>
   
      <form className="form-inline my-2 my-md-0"> </form>
    </div>
  </nav>
     
      </div> */}

     






        
      </div>
    );
  }
}
