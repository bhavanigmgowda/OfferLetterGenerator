import React, { Component } from 'react'
import * as jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import jsPdf from 'jspdf'
export default class Example extends Component {
    constructor(props) {
        super(props);

    }

    convert1 = (e) => {
        e.preventDefault();
        debugger;
        var doc = new jsPDF()
        var data = document.getElementById("print-button");
        // doc.text('', 10, 10)
        doc.fromHTML(data.innerHTML, 15, 15, {
            width: 190
        })
        doc.save('a4.pdf')
        doc.
            doc.output();


        doc.output('Downloads/a4.pdf');
    }


    /*   printPDF= ()=> {
         const domElement = document.getElementById('print-button')
         html2canvas(domElement, { onclone: (document) => {
           document.getElementById('print-button').style.visibility = 'hidden'
     }})
         .then((canvas) => {
             const img = canvas.toDataURL('image/png')
             const pdf = new jsPdf()
             pdf.addImage(img, 'JPEG', 0, 0)
             pdf.save('your-filename.pdf')
     })
  } */


    render() {
        return (
            <div id="print-button">

                <div id="outter">
                    <div class="card" id="pageA4">
                        <div class="card-body">

                            <p className="western" style={{ textAlign: 'right' }} align="RIGHT"><span><span style={{ fontSize: 'x-large' }}><span style={{ fontSize: 'xx-x-large' }}>CIN:U72200KA2007PTC044701</span></span></span>&nbsp;</p>
                            <p className="western" style={{ textAlign: 'justify' }} align="LEFT"><span><span style={{ fontSize: 'x-large' }}><span style={{ color: '#000009' }}><span style={{ fontSize: 'x-large' }}>Date: </span></span><span style={{ color: '#000009' }}><span   ><span style={{ fontSize: 'x-large' }}><strong>12-06-2019</strong></span></span></span></span></span></p>
                            <p className="western" style={{ textAlign: 'justify' }}>To,</p>
                            <strong><span style={{ color: '#000009', fontSize: 'x-large' }}>Dibakar Maji,</span><br /></strong>
                            <div className="western"><strong style={{ fontSize: 'x-large' }}> S/O Surath Maji,</strong><br /></div>
                            <div className="western"><strong style={{ fontSize: 'x-large' }}> bangalore</strong></div>
                            <p className="western" align="LEFT"><span style={{ fontFamily: 'Times New Roman, serif' }}><span style={{ fontSize: 'x-large' }}><span style={{ fontSize: 'x-large' }}>Dear </span><span style={{ color: '#000009' }}><span   ><span style={{ fontSize: 'x-large' }}><strong>Dibakar Maji,</strong></span></span></span></span></span></p>
                            <p className="western" style={{ textAlign: 'justify' }} align="LEFT"><span><span style={{ fontSize: 'x-large' }}><span style={{ fontSize: 'x-large' }}><u>Sub</u></span><span style={{ fontSize: 'x-large' }}>j</span><span style={{ fontSize: 'x-large' }}><u>ect: Oﬀer of emplo</u></span><span style={{ fontSize: 'x-large' }}>y</span><span style={{ fontSize: 'x-large' }}><u>ment – </u></span><span   ><span style={{ fontSize: 'x-large' }}><u><strong>‘Software En</strong></u></span></span><span   ><span style={{ fontSize: 'x-large' }}><strong>gi</strong></span></span><span   ><span style={{ fontSize: 'x-large' }}><u><strong>neer’</strong></u></span></span></span></span></p>
                            <ol style={{ textAlign: 'justify' }}>
                                <li>
                                    <p align="JUSTIFY"><span style={{ fontSize: 'x-large' }}><span style={{ fontSize: 'x-large' }}>In</span> <span style={{ fontSize: 'x-large' }}>response</span> <span style={{ fontSize: 'x-large' }}>to</span> <span style={{ fontSize: 'x-large' }}>your</span> <span style={{ fontSize: 'x-large' }}>interview</span> <span style={{ fontSize: 'x-large' }}>with</span> <span style={{ fontSize: 'x-large' }}>us,</span> <span style={{ fontSize: 'x-large' }}>we</span> <span style={{ fontSize: 'x-large' }}>are</span> <span style={{ fontSize: 'x-large' }}>pleased</span> <span style={{ fontSize: 'x-large' }}>to</span> <span style={{ fontSize: 'x-large' }}>Offer</span> <span style={{ fontSize: 'x-large' }}>you</span> <span style={{ fontSize: 'x-large' }}>the</span> <span style={{ fontSize: 'x-large' }}>position</span> <span style={{ fontSize: 'x-large' }}>of</span> <span   ><span style={{ fontSize: 'x-large' }}><u><strong>‘Software</strong></u></span></span><u> </u><span   ><span style={{ fontSize: 'x-large' }}><u><strong>En</strong></u></span></span><span   ><span style={{ fontSize: 'x-large' }}><strong>gi</strong></span></span><span   ><span style={{ fontSize: 'x-large' }}><u><strong>neer’</strong></u></span></span> <span style={{ fontSize: 'x-large' }}>‘in </span><span style={{ fontSize: 'x-large' }}>M/s</span> <span style={{ fontSize: 'x-large' }}>Test</span> <span style={{ fontSize: 'x-large' }}>Yantra</span> <span style={{ fontSize: 'x-large' }}>SoGware</span> <span style={{ fontSize: 'x-large' }}>Solutions</span> <span style={{ fontSize: 'x-large' }}>(India)</span> <span style={{ fontSize: 'x-large' }}>Pvt.</span> <span style={{ fontSize: 'x-large' }}>Ltd.</span> <span style={{ fontSize: 'x-large' }}>(“Company”).</span> <span style={{ fontSize: 'x-large' }}>This</span> <span style={{ fontSize: 'x-large' }}>oﬀer</span> <span style={{ fontSize: 'x-large' }}>is</span> <span style={{ fontSize: 'x-large' }}>subject</span> <span style={{ fontSize: 'x-large' }}>to</span> <span style={{ fontSize: 'x-large' }}>the</span> <span style={{ fontSize: 'x-large' }}>satisfactory </span><span style={{ fontSize: 'x-large' }}>background</span> <span style={{ fontSize: 'x-large' }}>veriﬁcation</span> <span style={{ fontSize: 'x-large' }}>check</span> <span style={{ fontSize: 'x-large' }}>that</span> <span style={{ fontSize: 'x-large' }}>will</span> <span style={{ fontSize: 'x-large' }}>be</span> <span style={{ fontSize: 'x-large' }}>completed</span> <span style={{ fontSize: 'x-large' }}>by</span> <span style={{ fontSize: 'x-large' }}>the</span> <span style={{ fontSize: 'x-large' }}>Company</span> <span style={{ fontSize: 'x-large' }}>prior</span> <span style={{ fontSize: 'x-large' }}>to</span> <span style={{ fontSize: 'x-large' }}>your</span> <span style={{ fontSize: 'x-large' }}>joining</span> <span style={{ fontSize: 'x-large' }}>date.</span></span>&nbsp;</p>
                                </li>
                            </ol>
                            <ol style={{ textAlign: 'justify' }} start={2}>
                                <li>
                                    <p align="LEFT"><span style={{ fontSize: 'x-large' }}><span style={{ fontSize: 'x-large' }}>Your</span> <span style={{ fontSize: 'x-large' }}>cost</span> <span style={{ fontSize: 'x-large' }}>to</span> <span style={{ fontSize: 'x-large' }}>company</span> <span style={{ fontSize: 'x-large' }}>(CTC)</span> <span style={{ fontSize: 'x-large' }}>shall</span> <span style={{ fontSize: 'x-large' }}>be</span> <span style={{ fontSize: 'x-large' }}>as</span> <span style={{ fontSize: 'x-large' }}>per</span> <span style={{ fontSize: 'x-large' }}>the</span> <span style={{ fontSize: 'x-large' }}>below</span> <span style={{ fontSize: 'x-large' }}>Schedule.</span></span></p>
                                </li>
                                <li>
                                    <p align="JUSTIFY"><span style={{ fontSize: 'x-large' }}><span style={{ fontSize: 'x-large' }}>The</span> <span style={{ fontSize: 'x-large' }}>terms</span> <span style={{ fontSize: 'x-large' }}>and</span> <span style={{ fontSize: 'x-large' }}>conditions</span> <span style={{ fontSize: 'x-large' }}>of</span> <span style={{ fontSize: 'x-large' }}>your</span> <span style={{ fontSize: 'x-large' }}>employment</span> <span style={{ fontSize: 'x-large' }}>will</span> <span style={{ fontSize: 'x-large' }}>be</span> <span style={{ fontSize: 'x-large' }}>governed</span> <span style={{ fontSize: 'x-large' }}>as</span> <span style={{ fontSize: 'x-large' }}>per</span> <span style={{ fontSize: 'x-large' }}>the</span> <span style={{ fontSize: 'x-large' }}>employment</span> <span style={{ fontSize: 'x-large' }}>agreement </span><span style={{ fontSize: 'x-large' }}>(Agreement)</span> <span style={{ fontSize: 'x-large' }}>annexed</span> <span style={{ fontSize: 'x-large' }}>as</span> <span style={{ fontSize: 'x-large' }}>Annexure.</span></span>&nbsp;</p>
                                </li>
                            </ol>
                            <ol style={{ textAlign: 'justify' }} start={4}>
                                <li>
                                    <p align="JUSTIFY"><span style={{ fontSize: 'x-large' }}><span style={{ fontSize: 'x-large' }}>You</span> <span style={{ fontSize: 'x-large' }}>are</span> <span style={{ fontSize: 'x-large' }}>required</span> <span style={{ fontSize: 'x-large' }}>to</span> <span style={{ fontSize: 'x-large' }}>carefully</span> <span style={{ fontSize: 'x-large' }}>go</span> <span style={{ fontSize: 'x-large' }}>through</span> <span style={{ fontSize: 'x-large' }}>the</span> <span style={{ fontSize: 'x-large' }}>terms</span> <span style={{ fontSize: 'x-large' }}>and</span> <span style={{ fontSize: 'x-large' }}>conditions</span> <span style={{ fontSize: 'x-large' }}>of</span> <span style={{ fontSize: 'x-large' }}>this</span> <span style={{ fontSize: 'x-large' }}>Oﬀer</span> <span style={{ fontSize: 'x-large' }}>letter</span> <span style={{ fontSize: 'x-large' }}>and</span> <span style={{ fontSize: 'x-large' }}>Annexure</span> <span style={{ fontSize: 'x-large' }}>1</span> <span style={{ fontSize: 'x-large' }}>as </span><span style={{ fontSize: 'x-large' }}>your</span> <span style={{ fontSize: 'x-large' }}>employment</span> <span style={{ fontSize: 'x-large' }}>in</span> <span style={{ fontSize: 'x-large' }}>the</span> <span style={{ fontSize: 'x-large' }}>Company</span> <span style={{ fontSize: 'x-large' }}>shall</span> <span style={{ fontSize: 'x-large' }}>be</span> <span style={{ fontSize: 'x-large' }}>strictly</span> <span style={{ fontSize: 'x-large' }}>governed</span> <span style={{ fontSize: 'x-large' }}>by</span> <span style={{ fontSize: 'x-large' }}>these</span> <span style={{ fontSize: 'x-large' }}>documents.</span></span>&nbsp;</p>
                                </li>
                            </ol>
                            <ol style={{ textAlign: 'justify' }} start={5}>
                                <li>
                                    <p align="JUSTIFY"><span style={{ fontSize: 'x-large' }}><span style={{ fontSize: 'x-large' }}>If</span> <span style={{ fontSize: 'x-large' }}>you</span> <span style={{ fontSize: 'x-large' }}>agree</span> <span style={{ fontSize: 'x-large' }}>to</span> <span style={{ fontSize: 'x-large' }}>the</span> <span style={{ fontSize: 'x-large' }}>terms</span> <span style={{ fontSize: 'x-large' }}>and</span> <span style={{ fontSize: 'x-large' }}>conditions</span> <span style={{ fontSize: 'x-large' }}>of</span> <span style={{ fontSize: 'x-large' }}>employment,</span> <span style={{ fontSize: 'x-large' }}>please</span> <span style={{ fontSize: 'x-large' }}>sign</span> <span style={{ fontSize: 'x-large' }}>a</span> <span style={{ fontSize: 'x-large' }}>copy</span> <span style={{ fontSize: 'x-large' }}>of</span> <span style={{ fontSize: 'x-large' }}>this</span> <span style={{ fontSize: 'x-large' }}>letter</span> <span style={{ fontSize: 'x-large' }}>as</span> <span style={{ fontSize: 'x-large' }}>a</span> <span style={{ fontSize: 'x-large' }}>token</span> <span style={{ fontSize: 'x-large' }}>of your</span> <span style={{ fontSize: 'x-large' }}>acceptance</span> <span style={{ fontSize: 'x-large' }}>and</span> <span style={{ fontSize: 'x-large' }}>return</span> <span style={{ fontSize: 'x-large' }}>the</span> <span style={{ fontSize: 'x-large' }}>signed</span> <span style={{ fontSize: 'x-large' }}>copy</span> <span style={{ fontSize: 'x-large' }}>to</span> <span style={{ fontSize: 'x-large' }}>the</span> <span style={{ fontSize: 'x-large' }}>Company</span> <span style={{ fontSize: 'x-large' }}>on</span> <span style={{ fontSize: 'x-large' }}>or</span> <span style={{ fontSize: 'x-large' }}>before</span> <span   ><span style={{ fontSize: 'x-large' }}><strong>12-06-2019</strong></span></span><span style={{ fontSize: 'x-large' }}>.</span> <span style={{ fontSize: 'x-large' }}>Please</span> <span style={{ fontSize: 'x-large' }}>sign</span> <span style={{ fontSize: 'x-large' }}>on</span> <span style={{ fontSize: 'x-large' }}>all </span><span style={{ fontSize: 'x-large' }}>pages.</span> <span style={{ fontSize: 'x-large' }}>Upon</span> <span style={{ fontSize: 'x-large' }}>signing,</span> <span style={{ fontSize: 'x-large' }}>the</span> <span style={{ fontSize: 'x-large' }}>terms</span> <span style={{ fontSize: 'x-large' }}>and</span> <span style={{ fontSize: 'x-large' }}>conditions</span> <span style={{ fontSize: 'x-large' }}>of</span> <span style={{ fontSize: 'x-large' }}>the</span> <span style={{ fontSize: 'x-large' }}>employment</span> <span style={{ fontSize: 'x-large' }}>agreement</span> <span style={{ fontSize: 'x-large' }}>shall</span> <span style={{ fontSize: 'x-large' }}>become</span> <span style={{ fontSize: 'x-large' }}>binding</span> <span style={{ fontSize: 'x-large' }}>on </span><span style={{ fontSize: 'x-large' }}>you.</span></span></p>
                                </li>
                            </ol>
                            <ol style={{ textAlign: 'justify' }} start={6}>
                                <li>
                                    <p align="JUSTIFY"><span style={{ fontSize: 'x-large' }}><span style={{ fontSize: 'x-large' }}>The</span> <span style={{ fontSize: 'x-large' }}>Company’s</span> <span style={{ fontSize: 'x-large' }}>obligations</span> <span style={{ fontSize: 'x-large' }}>shall</span> <span style={{ fontSize: 'x-large' }}>commence</span> <span style={{ fontSize: 'x-large' }}>on</span> <span style={{ fontSize: 'x-large' }}>the</span> <span style={{ fontSize: 'x-large' }}>date</span> <span style={{ fontSize: 'x-large' }}>of</span> <span style={{ fontSize: 'x-large' }}>your</span> <span style={{ fontSize: 'x-large' }}>joining</span> <span style={{ fontSize: 'x-large' }}>which</span> <span style={{ fontSize: 'x-large' }}>shall</span> <span style={{ fontSize: 'x-large' }}>be</span> <span style={{ fontSize: 'x-large' }}>on</span> <span style={{ fontSize: 'x-large' }}>or</span> <span style={{ fontSize: 'x-large' }}>before</span> <span   ><span style={{ fontSize: 'x-large' }}><strong>2019- </strong></span></span><span   ><span style={{ fontSize: 'x-large' }}><strong>06-10</strong></span></span><span style={{ fontSize: 'x-large' }}>.</span></span></p>
                                </li>
                            </ol>
                            <ol style={{ textAlign: 'justify' }} start={7}>
                                <li>
                                    <p align="JUSTIFY"><span style={{ fontSize: 'x-large' }}><span style={{ fontSize: 'x-large' }}>This</span> <span style={{ fontSize: 'x-large' }}>oﬀer</span> <span style={{ fontSize: 'x-large' }}>is</span> <span style={{ fontSize: 'x-large' }}>valid</span> <span style={{ fontSize: 'x-large' }}>till</span> <span   ><span style={{ fontSize: 'x-large' }}><strong>2019-06-10</strong></span></span> <span style={{ fontSize: 'x-large' }}>and</span> <span style={{ fontSize: 'x-large' }}>if</span> <span style={{ fontSize: 'x-large' }}>you</span> <span style={{ fontSize: 'x-large' }}>fail</span> <span style={{ fontSize: 'x-large' }}>to</span> <span style={{ fontSize: 'x-large' }}>accept</span> <span style={{ fontSize: 'x-large' }}>the</span> <span style={{ fontSize: 'x-large' }}>terms</span> <span style={{ fontSize: 'x-large' }}>of</span> <span style={{ fontSize: 'x-large' }}>the</span> <span style={{ fontSize: 'x-large' }}>oﬀer,</span> <span style={{ fontSize: 'x-large' }}>the</span> <span style={{ fontSize: 'x-large' }}>Company</span> <span style={{ fontSize: 'x-large' }}>shall</span> <span style={{ fontSize: 'x-large' }}>have </span><span style={{ fontSize: 'x-large' }}>the</span> <span style={{ fontSize: 'x-large' }}>right</span> <span style={{ fontSize: 'x-large' }}>to</span> <span style={{ fontSize: 'x-large' }}>withdraw</span> <span style={{ fontSize: 'x-large' }}>the</span> <span style={{ fontSize: 'x-large' }}>Offer</span> <span style={{ fontSize: 'x-large' }}>without</span> <span style={{ fontSize: 'x-large' }}>giving</span> <span style={{ fontSize: 'x-large' }}>you</span> <span style={{ fontSize: 'x-large' }}>any</span> <span style={{ fontSize: 'x-large' }}>further</span> <span style={{ fontSize: 'x-large' }}>notice.</span></span></p>
                                </li>
                            </ol>
                            <ol style={{ textAlign: 'justify' }} start={8}>
                                <li>
                                    <p align="JUSTIFY"><span style={{ fontSize: 'x-large' }}><span style={{ fontSize: 'x-large' }}>We</span> <span style={{ fontSize: 'x-large' }}>are</span> <span style={{ fontSize: 'x-large' }}>conﬁdent</span> <span style={{ fontSize: 'x-large' }}>that</span> <span style={{ fontSize: 'x-large' }}>you</span> <span style={{ fontSize: 'x-large' }}>will</span> <span style={{ fontSize: 'x-large' }}>enjoy</span> <span style={{ fontSize: 'x-large' }}>being</span> <span style={{ fontSize: 'x-large' }}>a</span> <span style={{ fontSize: 'x-large' }}>part</span> <span style={{ fontSize: 'x-large' }}>of</span> <span style={{ fontSize: 'x-large' }}>the</span> <span style={{ fontSize: 'x-large' }}>Company</span> <span style={{ fontSize: 'x-large' }}>as</span> <span style={{ fontSize: 'x-large' }}>much</span> <span style={{ fontSize: 'x-large' }}>as</span> <span style={{ fontSize: 'x-large' }}>we</span> <span style={{ fontSize: 'x-large' }}>shall</span> <span style={{ fontSize: 'x-large' }}>cherish</span> <span style={{ fontSize: 'x-large' }}>our association with</span> <span style={{ fontSize: 'x-large' }}>you.</span></span></p>
                                </li>
                            </ol>
                            <ol style={{ textAlign: 'justify' }} start={9}>
                                <li>
                                    <p style={{ textAlign: 'justify' }} align="JUSTIFY"><span style={{ fontSize: 'x-large' }}><span style={{ fontSize: 'x-large' }}>You</span> <span style={{ fontSize: 'x-large' }}>are</span> <span style={{ fontSize: 'x-large' }}>also</span> <span style={{ fontSize: 'x-large' }}>requested</span> <span style={{ fontSize: 'x-large' }}>to</span> <span style={{ fontSize: 'x-large' }}>submit</span> <span style={{ fontSize: 'x-large' }}>the</span> <span style={{ fontSize: 'x-large' }}>following</span> <span style={{ fontSize: 'x-large' }}>documents</span> <span style={{ fontSize: 'x-large' }}>to</span> <span style={{ fontSize: 'x-large' }}>us</span> <span style={{ fontSize: 'x-large' }}>on</span> <span style={{ fontSize: 'x-large' }}>the</span> <span style={{ fontSize: 'x-large' }}>date</span> <span style={{ fontSize: 'x-large' }}>of</span> <span style={{ fontSize: 'x-large' }}>submitting</span> <span style={{ fontSize: 'x-large' }}>the</span> <span style={{ fontSize: 'x-large' }}>duly </span><span style={{ fontSize: 'x-large' }}>signed</span> <span style={{ fontSize: 'x-large' }}>Agreement,</span> <span style={{ fontSize: 'x-large' }}>which</span> <span style={{ fontSize: 'x-large' }}>shall</span> <span style={{ fontSize: 'x-large' }}>not</span> <span style={{ fontSize: 'x-large' }}>be</span> <span style={{ fontSize: 'x-large' }}>later</span> <span style={{ fontSize: 'x-large' }}>than</span> <span   ><span style={{ fontSize: 'x-large' }}><strong>2019-06-10</strong></span></span><span style={{ fontSize: 'x-large' }}>.&nbsp; &nbsp; &nbsp; </span></span></p>
                                </li>
                            </ol>
                            <table style={{ width: 1000, fontSize: 'large', marginLeft: 'auto', marginRight: 'auto', borderCollapse: "collapse" }} border="{1}">
                                <tbody>
                                    <tr>
                                        <td style={{ width: 500, textAlign: 'justify', paddingLeft: 30, paddingRight: 10 }}>
                                            <p>a. Photocopies of your educational qualifications</p>
                                            <p>b. 2 passport size photographs of yourself</p>
                                            <p>c. Offer Letter, Relieving letter from previous employer/s, if applicable</p>
                                            <p>d. 3 months’ Payslips of previous employer, if applicable</p>
                                        </td>
                                        <td style={{ paddingLeft: 30, paddingRight: 10, width: 500, textAlign: 'justify' }}>
                                            <p>&nbsp;</p>
                                            <p>e. PF account details</p>
                                            <p>f. Income Tax deduction certificate of previous employer</p>
                                            <p>g. Pan Copy</p>
                                            <p>h. Passport Copy</p>
                                            <p>i. Aadhar Card Copy</p>
                                            <p>j. ID Proof &amp; Address Proof</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                    </div>

                </div>
                <div>

                    <button class="btn btn-primary" onClick={(e) => this.convert1(e)} >Click Here</button>
                </div>

            </div>
        )
    }
}
