import React, { Component } from 'react'
import '../Component/Page1.css'
export default class Page1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employee: ''
        }
    }

    componentDidMount() {
      this.setState({
            employee: this.props.history.location.state.employee
        })  

        console.log("Emp Details =====", this.state.employee.Name)
        console.log("Emp Details =====", this.date1)
    }

    convertpdf(e) {
        var pdf = document.getElementById("card-body");
        //  window.print(pdf)
        //  window.open('pdf', 'PRINT', 'height=400,width=600');
        //var a=window.open(file);
       // window.open(e.name, '_blank')

       this.props.history.push({
        pathname: '/PreviewPage',
        state: { employee: this.state}
    })

        return false;
    }

    convertHtmlToPdf(e) {
        var pdf = document.getElementById("outter");
        console.log("store data", pdf)
        fetch('https://v2018.api2pdf.com/chrome/html', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': '23c472f1-3414-4414-a85b-e8affd47bee3' //Get your API key from https://portal.api2pdf.com
            },
            body: JSON.stringify({ html: pdf.innerHTML, inlinePdf: true, fileName: 'test.pdf' })
        }).then(res => res.json())
            .then(res => {
                window.open(res.pdf);
                console.log(res.pdf)
            });
    }

    render() {
        return (
            <div id="outter">
                <div class="card" id="pageA4">
                    <div class="card-body">

                        <div>

                            <div>
                                <p className="western" style={{ textAlign: 'right' }} align="RIGHT"><span><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>CIN:U72200KA2007PTC044701</span></span></span>&nbsp;</p>
                                <p className="western" style={{ textAlign: 'justify' }} align="LEFT"><span><span style={{ fontSize: 'large' }}><span style={{ color: '#000009' }}><span style={{ fontSize: 'large' }}>Date: </span></span><span style={{ color: '#000009' }}><span style={{ fontFamily: '"Trebuchet MS", serif' }}><span style={{ fontSize: 'large' }}><strong>{this.state.employee.Date}</strong></span></span></span></span></span></p>
                                <p className="western" style={{ textAlign: 'justify' }}>To,</p>
                                <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                                <strong><span style={{ color: '#000009', fontSize: 'large' }}>{this.state.employee.Name},</span><br /></strong>
                                <large className="western" style={{ textAlign: 'justify' }}>&nbsp;</large>
                                <div className="western"><strong style={{ fontSize: 'large' }}> {this.state.employee.Address}</strong><br /></div>
                                <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                                <p className="western" align="LEFT"><span style={{ fontFamily: 'Tinos, serif' }}><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>Dear </span><span style={{ color: '#000009' }}><span style={{ fontFamily: '"Trebuchet MS", serif' }}><span style={{ fontSize: 'large' }}><strong>{this.state.employee.Name},</strong></span></span></span></span></span></p>
                                <p className="western" style={{ textAlign: 'justify' }} align="LEFT"><span><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}><u>Sub</u></span><span style={{ fontSize: 'large' }}>j</span><span style={{ fontSize: 'large' }}><u>ect: Oﬀer of emplo</u></span><span style={{ fontSize: 'large' }}>y</span><span style={{ fontSize: 'large' }}><u>ment – </u></span><span style={{ fontFamily: '"Trebuchet MS", serif' }}><span style={{ fontSize: 'large' }}><u><strong>‘{this.state.employee.Designation}’</strong></u></span></span></span></span></p>
                                <ol style={{ textAlign: 'justify' }}>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>In</span> <span style={{ fontSize: 'large' }}>response</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>your</span> <span style={{ fontSize: 'large' }}>interview</span> <span style={{ fontSize: 'large' }}>with</span> <span style={{ fontSize: 'large' }}>us,</span> <span style={{ fontSize: 'large' }}>we</span> <span style={{ fontSize: 'large' }}>are</span> <span style={{ fontSize: 'large' }}>pleased</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>oﬀer</span> <span style={{ fontSize: 'large' }}>you</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>position</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontFamily: '"Trebuchet MS", serif' }}><span style={{ fontSize: 'large' }}><u><strong>‘{this.state.employee.Designation}’</strong></u></span></span> <span style={{ fontSize: 'large' }}>‘in </span><span style={{ fontSize: 'large' }}>M/s</span> <span style={{ fontSize: 'large' }}>Test</span> <span style={{ fontSize: 'large' }}>Yantra</span> <span style={{ fontSize: 'large' }}>SoGware</span> <span style={{ fontSize: 'large' }}>Solutions</span> <span style={{ fontSize: 'large' }}>(India)</span> <span style={{ fontSize: 'large' }}>Pvt.</span> <span style={{ fontSize: 'large' }}>Ltd.</span> <span style={{ fontSize: 'large' }}>(“Company”).</span> <span style={{ fontSize: 'large' }}>This</span> <span style={{ fontSize: 'large' }}>oﬀer</span> <span style={{ fontSize: 'large' }}>is</span> <span style={{ fontSize: 'large' }}>subject</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>satisfactory </span><span style={{ fontSize: 'large' }}>background</span> <span style={{ fontSize: 'large' }}>veriﬁcation</span> <span style={{ fontSize: 'large' }}>check</span> <span style={{ fontSize: 'large' }}>that</span> <span style={{ fontSize: 'large' }}>will</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>completed</span> <span style={{ fontSize: 'large' }}>by</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>prior</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>your</span> <span style={{ fontSize: 'large' }}>joining</span> <span style={{ fontSize: 'large' }}>date.</span></span>&nbsp;</p>
                                    </li>
                                </ol>
                                <ol style={{ textAlign: 'justify' }} start={2}>
                                    <li>
                                        <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>Your</span> <span style={{ fontSize: 'large' }}>cost</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>company</span> <span style={{ fontSize: 'large' }}>(CTC)</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>as</span> <span style={{ fontSize: 'large' }}>per</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>below</span> <span style={{ fontSize: 'large' }}>Schedule.</span></span></p>
                                    </li>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>terms</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>conditions</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>your</span> <span style={{ fontSize: 'large' }}>employment</span> <span style={{ fontSize: 'large' }}>will</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>governed</span> <span style={{ fontSize: 'large' }}>as</span> <span style={{ fontSize: 'large' }}>per</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>employment</span> <span style={{ fontSize: 'large' }}>agreement </span><span style={{ fontSize: 'large' }}>(Agreement)</span> <span style={{ fontSize: 'large' }}>annexed</span> <span style={{ fontSize: 'large' }}>as</span> <span style={{ fontSize: 'large' }}>Annexure.</span></span>&nbsp;</p>
                                    </li>
                                </ol>
                                <ol style={{ textAlign: 'justify' }} start={4}>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>You</span> <span style={{ fontSize: 'large' }}>are</span> <span style={{ fontSize: 'large' }}>required</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>carefully</span> <span style={{ fontSize: 'large' }}>go</span> <span style={{ fontSize: 'large' }}>through</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>terms</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>conditions</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>this</span> <span style={{ fontSize: 'large' }}>oﬀer</span> <span style={{ fontSize: 'large' }}>letter</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>Annexure</span> <span style={{ fontSize: 'large' }}>1</span> <span style={{ fontSize: 'large' }}>as </span><span style={{ fontSize: 'large' }}>your</span> <span style={{ fontSize: 'large' }}>employment</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>strictly</span> <span style={{ fontSize: 'large' }}>governed</span> <span style={{ fontSize: 'large' }}>by</span> <span style={{ fontSize: 'large' }}>these</span> <span style={{ fontSize: 'large' }}>documents.</span></span>&nbsp;</p>
                                    </li>
                                </ol>
                                <ol style={{ textAlign: 'justify' }} start={5}>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>If</span> <span style={{ fontSize: 'large' }}>you</span> <span style={{ fontSize: 'large' }}>agree</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>terms</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>conditions</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>employment,</span> <span style={{ fontSize: 'large' }}>please</span> <span style={{ fontSize: 'large' }}>sign</span> <span style={{ fontSize: 'large' }}>a</span> <span style={{ fontSize: 'large' }}>copy</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>this</span> <span style={{ fontSize: 'large' }}>letter</span> <span style={{ fontSize: 'large' }}>as</span> <span style={{ fontSize: 'large' }}>a</span> <span style={{ fontSize: 'large' }}>token</span> <span style={{ fontSize: 'large' }}>of your</span> <span style={{ fontSize: 'large' }}>acceptance</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>return</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>signed</span> <span style={{ fontSize: 'large' }}>copy</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>on</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>before</span> <span style={{ fontFamily: '"Trebuchet MS", serif' }}><span style={{ fontSize: 'large' }}><strong>{this.state.OfferValidity}</strong></span></span><span style={{ fontSize: 'large' }}>.</span> <span style={{ fontSize: 'large' }}>Please</span> <span style={{ fontSize: 'large' }}>sign</span> <span style={{ fontSize: 'large' }}>on</span> <span style={{ fontSize: 'large' }}>all </span><span style={{ fontSize: 'large' }}>pages.</span> <span style={{ fontSize: 'large' }}>Upon</span> <span style={{ fontSize: 'large' }}>signing,</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>terms</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>conditions</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>employment</span> <span style={{ fontSize: 'large' }}>agreement</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>become</span> <span style={{ fontSize: 'large' }}>binding</span> <span style={{ fontSize: 'large' }}>on </span><span style={{ fontSize: 'large' }}>you.</span></span></p>
                                    </li>
                                </ol>
                                <ol style={{ textAlign: 'justify' }} start={6}>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>Company’s</span> <span style={{ fontSize: 'large' }}>obligations</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>commence</span> <span style={{ fontSize: 'large' }}>on</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>date</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>your</span> <span style={{ fontSize: 'large' }}>joining</span> <span style={{ fontSize: 'large' }}>which</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>on</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>before</span> <span style={{ fontFamily: '"Trebuchet MS", serif' }}><span style={{ fontSize: 'large' }}><strong>{this.state.employee.Date}</strong></span></span><span style={{ fontSize: 'large' }}>.</span></span></p>
                                    </li>
                                </ol>
                                <ol style={{ textAlign: 'justify' }} start={7}>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>This</span> <span style={{ fontSize: 'large' }}>oﬀer</span> <span style={{ fontSize: 'large' }}>is</span> <span style={{ fontSize: 'large' }}>valid</span> <span style={{ fontSize: 'large' }}>till</span> <span style={{ fontFamily: '"Trebuchet MS", serif' }}><span style={{ fontSize: 'large' }}><strong>{this.state.OfferValidity}</strong></span></span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>if</span> <span style={{ fontSize: 'large' }}>you</span> <span style={{ fontSize: 'large' }}>fail</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>accept</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>terms</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>oﬀer,</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>have </span><span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>right</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>withdraw</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>oﬀer</span> <span style={{ fontSize: 'large' }}>without</span> <span style={{ fontSize: 'large' }}>giving</span> <span style={{ fontSize: 'large' }}>you</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>further</span> <span style={{ fontSize: 'large' }}>notice.</span></span></p>
                                    </li>
                                </ol>
                                <ol style={{ textAlign: 'justify' }} start={8}>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>We</span> <span style={{ fontSize: 'large' }}>are</span> <span style={{ fontSize: 'large' }}>conﬁdent</span> <span style={{ fontSize: 'large' }}>that</span> <span style={{ fontSize: 'large' }}>you</span> <span style={{ fontSize: 'large' }}>will</span> <span style={{ fontSize: 'large' }}>enjoy</span> <span style={{ fontSize: 'large' }}>being</span> <span style={{ fontSize: 'large' }}>a</span> <span style={{ fontSize: 'large' }}>part</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>as</span> <span style={{ fontSize: 'large' }}>much</span> <span style={{ fontSize: 'large' }}>as</span> <span style={{ fontSize: 'large' }}>we</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>cherish</span> <span style={{ fontSize: 'large' }}>our association with</span> <span style={{ fontSize: 'large' }}>you.</span></span></p>
                                    </li>
                                </ol>
                                <ol style={{ textAlign: 'justify' }} start={9}>
                                    <li>
                                        <p style={{ textAlign: 'justify' }} align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>You</span> <span style={{ fontSize: 'large' }}>are</span> <span style={{ fontSize: 'large' }}>also</span> <span style={{ fontSize: 'large' }}>requested</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>submit</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>following</span> <span style={{ fontSize: 'large' }}>documents</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>us</span> <span style={{ fontSize: 'large' }}>on</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>date</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>submitting</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>duly </span><span style={{ fontSize: 'large' }}>signed</span> <span style={{ fontSize: 'large' }}>Agreement,</span> <span style={{ fontSize: 'large' }}>which</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>not</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>later</span> <span style={{ fontSize: 'large' }}>than</span> <span style={{ fontFamily: '"Trebuchet MS", serif' }}><span style={{ fontSize: 'large' }}><strong>{this.state.OfferValidity}</strong></span></span><span style={{ fontSize: 'large' }}>.&nbsp; &nbsp; &nbsp; </span></span></p>
                                    </li>
                                </ol>
                                <table style={{ width: 600, fontSize: '20px', marginLeft: 'auto', marginRight: 'auto' }} border="{1}">
                                    <tbody>
                                        <tr>
                                            <td style={{ width: 300, textAlign: 'justify', paddingLeft: 30, paddingRight: 10 }}>
                                                <p>a. Photocopies of your educational qualifications</p>
                                                <p>b. 2 passport size photographs of yourself</p>
                                                <p>c. Offer Letter, Relieving letter from previous employer/s, if applicable</p>
                                                <p>d. 3 months’ Payslips of previous employer, if applicable</p>
                                            </td>
                                            <td style={{ paddingLeft: 30, paddingRight: 10, width: 300, textAlign: 'justify' }}>
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
                </div>

                <div className="card" id="pageA4">

                    <div className="card-body">
                        <div><p />
                            <h4 className="western" align="CENTER"><strong>Schedule</strong></h4>
                            <p className="western" align="CENTER">Cost to Company details</p>
                        </div>


                        <div><table style={{ width: 800, marginLeft: 'auto', marginRight: 'auto', height: 250 }} border="1px">
                            <tbody>
                                <tr style={{ height: 32 }}>
                                    <td style={{ textAlign: 'center', width: '423.5px' }} colSpan={2}>
                                        <p><strong>SALARY BREAK UP (ANNEXURE A)</strong></p>
                                    </td>
                                </tr>
                                <tr style={{}}>
                                    <td style={{ width: '300px', }}>&nbsp;<strong style={{ fontSize: 'large' }}>NAME:</strong></td>
                                    <td style={{ width: '300px', wordBreak: 'break-all' }}>&nbsp;{this.state.employee.Name}</td>
                                </tr>
                                <tr style={{}}>
                                    <td style={{ width: '300px', }}>&nbsp;<strong style={{ fontSize: 'large' }}>DESIGNATION:</strong></td>
                                    <td style={{ width: '300px', wordBreak: 'break-all' }}>&nbsp;{this.state.employee.Designation}</td>
                                </tr>
                                <tr style={{}}>
                                    <td style={{ width: '300px', }}>&nbsp;<strong style={{ fontSize: 'large' }}>LOCATION:</strong></td>
                                    <td style={{ width: '300px', wordBreak: 'break-all' }}>&nbsp;{this.state.employee.Location}</td>
                                </tr>
                                <tr style={{}}>
                                    <td style={{ width: '300px', }}>&nbsp;<strong style={{ fontSize: 'large' }}>COMPANY/BUSINESS UNIT:</strong></td>
                                    <td style={{ width: '300px', wordBreak: 'break-all' }}>&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                            <table style={{ width: 800, height: 450, marginLeft: 'auto', marginRight: 'auto' }} border="1px">
                                <tbody>
                                    <tr style={{}}>
                                        <th style={{ textAlign: 'center' }} colSpan={3}>
                                            <p><strong>Basic and Other Allowances Details</strong></p>
                                        </th>
                                    </tr>
                                    <tr style={{}}>
                                        <td style={{ width: 300, }}><strong>Cash Flow Head</strong></td>
                                        <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }}><strong>Monthly&nbsp;&nbsp;</strong></td>
                                        <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }}><strong>&nbsp;Yearly&nbsp;&nbsp;</strong></td>
                                    </tr>
                                    <tr style={{}}>
                                        <td style={{ width: 300, }}>Basic Salary ( Basic + DA )</td>
                                        <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;</td>
                                        <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;</td>
                                    </tr>
                                    <tr style={{}}>
                                        <td style={{ width: 300, }}>House Rent Allowance</td>
                                        <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;</td>
                                        <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;</td>
                                    </tr>
                                    <tr style={{}}>Other
                                    <td style={{ width: 300, }}>Conveyance Allowance</td>
                                        <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;</td>
                                        <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;</td>
                                    </tr>
                                    <tr style={{}}>
                                        <td style={{ width: 300, }}>&nbsp;LTA</td>
                                        <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;</td>
                                        <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;</td>
                                    </tr>
                                    <tr style={{}}>
                                        <td style={{ width: 300, }}>&nbsp;Food&nbsp;Allowance</td>
                                        <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;</td>
                                        <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;</td>
                                    </tr>
                                    <tr style={{}}>
                                        <td style={{ width: 300, }}>Other&nbsp;Allowance</td>
                                        <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;</td>
                                        <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;</td>
                                    </tr>
                                    <tr style={{}}>
                                        <td style={{ width: 300, }}><strong>&nbsp;Monthly / Yearly Gross</strong></td>
                                        <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;</td>
                                        <td style={{ width: '150px', wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;</td>
                                    </tr>
                                </tbody>
                            </table>

                            <table style={{ width: 800, height: 250, marginLeft: 'auto', marginRight: 'auto' }} border="1px">
                                <tbody>
                                    <tr style={{ height: 32 }}>
                                        <td style={{ textAlign: 'center' }} colSpan={3}><strong>Deductions</strong></td>
                                    </tr>
                                    <tr style={{}}>
                                        <td style={{ width: 300, }}>EPF Employee</td>
                                        <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }}><strong>&nbsp;</strong></td>
                                        <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }}><strong>&nbsp;&nbsp;</strong></td>
                                    </tr>
                                    <tr style={{}}>
                                        <td style={{ width: 300, }}>Professional Tax</td>
                                        <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }}>&nbsp;</td>
                                        <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }}>&nbsp;</td>
                                    </tr>
                                    <tr style={{}}>
                                        <td style={{ width: 300, }}>Medical Insurance</td>
                                        <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }}>&nbsp;</td>
                                        <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }}>&nbsp;</td>
                                    </tr>
                                    <tr style={{}}>
                                        <td style={{ width: 300, }}><strong>Total</strong></td>
                                        <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }}>&nbsp;</td>
                                        <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }}>&nbsp;</td>
                                    </tr>
                                    <tr style={{}}>
                                        <td style={{ width: 300, }}><strong> Net Pay</strong></td>
                                        <td style={{ width: '150px', textAlign: 'right', wordBreak: 'break-all' }} colSpan={3}>&nbsp;</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table style={{ width: 800, height: 250, marginLeft: 'auto', marginRight: 'auto' }} border={1}>
                                <tbody>
                                    <tr>
                                        <td style={{ textAlign: 'center' }} colSpan={3}><strong>Benefits&nbsp;</strong></td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: 300 }}>&nbsp;EPF Employer</td>
                                        <td style={{ width: 150, wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;</td>
                                        <td style={{ width: 125, wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: 300 }}>&nbsp;Gratuity</td>
                                        <td style={{ width: 150, wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;</td>
                                        <td style={{ width: 150, wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: 300 }}>&nbsp;Group Medical Insurance and Personal<br />Accident Cover Policy - Premium</td>
                                        <td style={{ width: 150, wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;</td>
                                        <td style={{ width: 150, wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: 300 }}>&nbsp;<strong>Total</strong></td>
                                        <td style={{ width: 150, wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;</td>
                                        <td style={{ width: 150, wordBreak: 'break-all', textAlign: 'right' }}>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: 300 }}>&nbsp;<strong>CTC</strong></td>
                                        <td style={{ width: 300, wordBreak: 'break-all', textAlign: 'right' }} colSpan={2}>&nbsp;</td>
                                    </tr>
                                </tbody>
                            </table>




                        </div>


                    </div>
                </div>




                <div className="card" id="pageA4">
                    <div className="card-body">
                        <div>
                            <p className="western" style={{ textAlign: 'justify' }} align="JUSTIFY">Note: Take home Salary is subject to Income Tax deduction as per Section 192B of Income tax act, 1961.You can avail tax reduction, by declaring your Investments to HR team at the time of Joining the Company.</p>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <h4 className="western" style={{ textAlign: 'justify' }}><strong>SALARY COMPENSATION AND BENEFITS</strong></h4>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <p className="western" style={{ textAlign: 'justify' }} align="JUSTIFY">An employee of Test Yantra is eligible for all statutory compensation and beneﬁts. This is as per the <span style={{ fontFamily: '"Trebuchet MS", serif' }}><strong>COMPENSATION</strong></span> <span style={{ fontFamily: '"Trebuchet MS", serif' }}><strong>AND</strong></span> <span style={{ fontFamily: '"Trebuchet MS", serif' }}><strong>BENEFIT</strong></span> Policy of Test Yantra SoGware Solutions. Employee is requested to follow the guidelines and process as per the Policy, which will be shared at the time of Joining.</p>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <p className="western" style={{ textAlign: 'justify' }} align="JUSTIFY">At the discretion of the management, the non-statutory beneﬁts may be extended to an employee based on the market situations.</p>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <h4 className="western" style={{ textAlign: 'justify' }} align="JUSTIFY"><strong>STATUTORY BENEFITS</strong></h4>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <p className="western" style={{ textAlign: 'justify' }} align="JUSTIFY">The following Compensation and Beneﬁts are statutory in nature and are available to all eligible employees</p>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <li>
                                    <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>Salary</span></span></p>
                                </li>
                                <li>
                                    <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>Provident</span> <span style={{ fontSize: 'large' }}>Fund</span></span></p>
                                </li>
                                <li>
                                    <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>Gratuity</span></span></p>
                                </li>
                                <li>
                                    <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>ESI Medical</span> <span style={{ fontSize: 'large' }}>beneﬁt</span></span></p>
                                </li>
                                <li>
                                    <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>Maternity</span> <span style={{ fontSize: 'large' }}>beneﬁt</span> <span style={{ fontSize: 'large' }}>&amp;</span> <span style={{ fontSize: 'large' }}>Paternity</span> <span style={{ fontSize: 'large' }}>beneﬁt</span></span></p>
                                </li>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <h4 className="western" style={{ textAlign: 'justify' }} align="JUSTIFY"><strong>NON - STATUTORY BENEFITS</strong></h4>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <p className="western" style={{ textAlign: 'justify' }} align="JUSTIFY">The company provides the following beneﬁts to all or sections of employees based on certain employment, performance criteria and career bands. They are meant to provide additional beneﬁts to employees, act as a motivator in their career and to take care of their life style requirements. The award of these beneﬁts are solely under the discretion of the management.</p>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <p className="western" style={{ textAlign: 'justify' }} align="JUSTIFY">The following is the list of Non Statutory Beneﬁts:</p>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <li>
                                    <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>Group</span> <span style={{ fontSize: 'large' }}>Insurance</span> <span style={{ fontSize: 'large' }}>Scheme</span> <span style={{ fontSize: 'large' }}>(Accident</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>Death)</span></span></p>
                                </li>
                                <li>
                                    <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>Group</span> <span style={{ fontSize: 'large' }}>Health</span> <span style={{ fontSize: 'large' }}>Insurance</span> <span style={{ fontSize: 'large' }}>Scheme</span> <span style={{ fontSize: 'large' }}>(Hospitalization)</span></span></p>
                                </li>
                                <li>
                                    <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>Sabbatical</span> <span style={{ fontSize: 'large' }}>Leave</span></span></p>
                                </li>
                                <li>
                                    <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>Extended Maternity</span> <span style={{ fontSize: 'large' }}>Leave</span></span></p>
                                </li>
                                <li>
                                    <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>Food</span> <span style={{ fontSize: 'large' }}>Allowance</span></span></p>
                                </li>
                                <li>
                                    <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>Leave </span><span style={{ fontSize: 'large' }}>Travel</span> <span style={{ fontSize: 'large' }}>Concession</span></span></p>
                                </li>
                            </ol>
                        </div>



                    </div>
                </div>


                <div className="card" id="pageA4">
                    <div className="card-body">
                        <div>
                            <div>
                                <p className="western" style={{ textAlign: 'Center' }} align="CENTER"><u>Annexure 1</u></p>
                                <large className="western" style={{ textAlign: 'center', fontSize: 'small' }}>&nbsp;</large>
                                <p className="western" style={{ textAlign: 'center' }} align="CENTER"><u>EMPLOYMENT AGREEMENT</u></p>
                                <large className="western" style={{ textAlign: 'justify', fontSize: 'small' }}>&nbsp;</large>
                                <p className="western" style={{ textAlign: 'justify' }}>This Employment Acreement (the “Agreement”) is made and executed on this <span style={{ fontFamily: '"Trebuchet MS", serif' }}><strong>{this.state.OfferValidity}</strong></span> at Bengaluru.</p>
                                <large className="western" style={{ textAlign: 'justify', fontSize: 'small' }}>&nbsp;</large>
                                <p className="western" style={{ textAlign: 'justify' }}><u>BY:</u></p>
                                <p className="western" style={{ textAlign: 'justify', fontSize: 'small' }}>&nbsp;</p>
                                <p className="western" style={{ textAlign: 'justify' }} align="JUSTIFY"><span style={{ fontFamily: '"Trebuchet MS", serif' }}><strong>M/S TEST </strong></span><span style={{ fontFamily: '"Trebuchet MS", serif' }}><strong>YANTRA </strong></span><span style={{ fontFamily: '"Trebuchet MS", serif' }}><strong>SOFTWARE SOLUTIONS (INDIA) </strong></span><span style={{ fontFamily: '"Trebuchet MS", serif' }}><strong>PVT. </strong></span><span style={{ fontFamily: '"Trebuchet MS", serif' }}><strong>LTD</strong></span>., a company incorporated under the Companies Act, 1956, having its registered oﬃce at # 50, Brigade MLR, 2<sup>nd</sup> ﬂoor, Vani Vilas Road, Basavanagudi Bangalore 560004 represented by its Human Resource (hereinaGer may be referred to as the “Company”, which expression shall, unless repugnant to the context or meaning thereof, be deemed to include its successors and permitted assigns) of the ONE PART;</p>
                                <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                                <p className="western" style={{ textAlign: 'justify' }}>AND:</p>
                                <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                                <p className="western" style={{ textAlign: 'justify' }} align="LEFT"><span style={{ fontFamily: 'Tinos, serif' }}><span style={{ fontSize: 'large' }}><span style={{ color: '#000009' }}><span style={{ fontFamily: '"Trebuchet MS", serif' }}><span style={{ fontSize: 'large' }}><strong>{this.state.employee.Name}, </strong></span></span></span><span style={{ fontSize: 'large' }}>aged about {this.state.employee.Age} years, S/O </span><span style={{ fontFamily: '"Trebuchet MS", serif' }}><span style={{ fontSize: 'large' }}><strong>{this.state.employee.FatherName}</strong></span></span><span style={{ fontSize: 'large' }}>, Residing at </span><span style={{ fontFamily: '"Trebuchet MS", serif' }}><span style={{ fontSize: 'large' }}><strong>{this.state.employee.Location}</strong></span></span><span style={{ fontSize: 'large' }}>,</span></span></span></p>
                                <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                                <p className="western" style={{ textAlign: 'justify' }}>17Here in aGer referred to as the “Employee” or the “Second Party”, of the OTHER PART.</p>
                                <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                                <p className="western" style={{ textAlign: 'justify' }}>The Company and the Employee shall hereinaGer, wherever the context may so require, be individually referred to as ‘Party’ or collectively as ‘Parties’, as the case may be.</p>
                                <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                                <p className="western" style={{ textAlign: 'justify' }}><u>WHEREAS</u>;</p>
                                <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                                <ol style={{ textAlign: 'justify' }}>
                                    <li>
                                        <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>is</span> <span style={{ fontSize: 'large' }}>engaged</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>business</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>providing</span> <span style={{ fontSize: 'large' }}>soGware</span> <span style={{ fontSize: 'large' }}>services</span> <span style={{ fontSize: 'large' }}>(the</span> <span style={{ fontSize: 'large' }}>“Business”);</span></span></p>
                                    </li>
                                </ol>
                                <ol style={{ textAlign: 'justify' }} start={2}>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>was</span> <span style={{ fontSize: 'large' }}>looking</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>hire</span> <span style={{ fontSize: 'large' }}>an</span> <span style={{ fontSize: 'large' }}>employee</span> <span style={{ fontSize: 'large' }}>for</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>post</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontFamily: '"Trebuchet MS", serif' }}><span style={{ fontSize: 'large' }}><u><strong>{this.state.employee.Designation}</strong></u></span></span> <span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>had </span><span style={{ fontSize: 'large' }}>applied</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>for</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>said</span> <span style={{ fontSize: 'large' }}>post</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>made</span> <span style={{ fontSize: 'large' }}>several</span> <span style={{ fontSize: 'large' }}>representations</span> <span style={{ fontSize: 'large' }}>regarding</span> <span style={{ fontSize: 'large' }}>his/her </span><span style={{ fontSize: 'large' }}>qualiﬁcation</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>abilities</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>produced</span> <span style={{ fontSize: 'large' }}>certiﬁcates</span> <span style={{ fontSize: 'large' }}>thereof.</span> <span style={{ fontSize: 'large' }}>Based</span> <span style={{ fontSize: 'large' }}>on</span> <span style={{ fontSize: 'large' }}>an</span> <span style={{ fontSize: 'large' }}>interview</span> <span style={{ fontSize: 'large' }}>conducted</span> <span style={{ fontSize: 'large' }}>by</span> <span style={{ fontSize: 'large' }}>the </span><span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>based</span> <span style={{ fontSize: 'large' }}>on</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>representations</span> <span style={{ fontSize: 'large' }}>made</span> <span style={{ fontSize: 'large' }}>by</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee,</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>has</span> <span style={{ fontSize: 'large' }}>agreed</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>appoint </span><span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>for</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>said</span> <span style={{ fontSize: 'large' }}>post,</span> <span style={{ fontSize: 'large' }}>on</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>terms</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>conditions</span> <span style={{ fontSize: 'large' }}>set</span> <span style={{ fontSize: 'large' }}>forth</span> <span style={{ fontSize: 'large' }}>herein</span> <span style={{ fontSize: 'large' }}>below.</span></span></p>
                                    </li>
                                </ol>
                                <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                                <p className="western" style={{ textAlign: 'justify' }}>NOW THIS EMPLOYMENT AGREEMENT SHALL WITNESSETH AS FOLLOWS;</p>
                                <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                                <ol style={{ textAlign: 'justify' }}>
                                    <li>
                                        <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}><u>APPOINTMENT:</u></span></span></p>
                                    </li>
                                </ol>
                                <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                                <ol style={{ textAlign: 'justify' }}>
                                    <ol>
                                        <li>
                                            <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>The Company hereby appoints the Employee as </span><span style={{ fontFamily: '"Trebuchet MS", serif' }}><span style={{ fontSize: 'large' }}><u><strong>‘{this.state.employee.Designation}’.</strong></u></span></span> <span style={{ fontSize: 'large' }}>The Employee hereby accepts</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>said</span> <span style={{ fontSize: 'large' }}>appointment</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>agrees</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>work</span> <span style={{ fontSize: 'large' }}>diligently</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>serve</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>said </span><span style={{ fontSize: 'large' }}>capacity</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>such</span> <span style={{ fontSize: 'large' }}>other</span> <span style={{ fontSize: 'large' }}>posts/</span> <span style={{ fontSize: 'large' }}>designations</span> <span style={{ fontSize: 'large' }}>as</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>may</span> <span style={{ fontSize: 'large' }}>prescribe</span> <span style={{ fontSize: 'large' }}>and/or</span> <span style={{ fontSize: 'large' }}>promote</span> <span style={{ fontSize: 'large' }}>from</span></span></p>
                                        </li>
                                    </ol>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="card" id="pageA4">
                    <div className="card-body">
                        <div>
                            <p style={{ textAlign: 'justify' }} />
                            <p className="western" style={{ textAlign: 'justify' }} align="CENTER" />
                            <ol style={{ listStyleType: "none" }}><li><p className="western" style={{ textAlign: 'justify', paddingLeft: "10mm" }}>time to time. The Employee shall be responsible to perform duties more fully described in Schedule A hereto.</p></li></ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol start={2}>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>report</span> <span style={{ fontSize: 'large' }}>on</span> <span style={{ fontFamily: '"Trebuchet MS", serif' }}><span style={{ fontSize: 'large' }}><strong>{this.state.OfferValidity}</strong></span></span><span style={{ fontSize: 'large' }}>.</span> <span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>obligations</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>towards</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee shall</span> <span style={{ fontSize: 'large' }}>commence</span> <span style={{ fontSize: 'large' }}>only</span> <span style={{ fontSize: 'large' }}>on</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>aGer</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>date</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>joining.</span> <span style={{ fontSize: 'large' }}>However,</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee’s</span> <span style={{ fontSize: 'large' }}>obligations</span> <span style={{ fontSize: 'large' }}>under </span><span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Agreement</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>commence</span> <span style={{ fontSize: 'large' }}>on</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>date</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>execution</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Agreement.</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol start={3}>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>report</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>Test</span> <span style={{ fontSize: 'large' }}>Yantra</span> <span style={{ fontSize: 'large' }}>and/or</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>such</span> <span style={{ fontSize: 'large' }}>other</span> <span style={{ fontSize: 'large' }}>person</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>persons</span> <span style={{ fontSize: 'large' }}>as</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company deems</span> <span style={{ fontSize: 'large' }}>ﬁt</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>his/her</span> <span style={{ fontSize: 'large' }}>supervisor</span> <span style={{ fontSize: 'large' }}>from</span> <span style={{ fontSize: 'large' }}>time</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>time.</span> <span style={{ fontSize: 'large' }}>In</span> <span style={{ fontSize: 'large' }}>addition,</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>carry</span> <span style={{ fontSize: 'large' }}>out such</span> <span style={{ fontSize: 'large' }}>other</span> <span style={{ fontSize: 'large' }}>duties</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>functions</span> <span style={{ fontSize: 'large' }}>as</span> <span style={{ fontSize: 'large' }}>may</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>assigned</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>him/her</span> <span style={{ fontSize: 'large' }}>by</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>from</span> <span style={{ fontSize: 'large' }}>time</span> <span style={{ fontSize: 'large' }}>to </span><span style={{ fontSize: 'large' }}>time.</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol start={4}>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>Employee’s</span> <span style={{ fontSize: 'large' }}>place</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>work,</span> <span style={{ fontSize: 'large' }}>for</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>time</span> <span style={{ fontSize: 'large' }}>being,</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>at</span> <span style={{ fontSize: 'large' }}>Bengaluru.</span> <span style={{ fontSize: 'large' }}>However,</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company may</span> <span style={{ fontSize: 'large' }}>relocate/</span> <span style={{ fontSize: 'large' }}>transfer/</span> <span style={{ fontSize: 'large' }}>depute</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>its</span> <span style={{ fontSize: 'large' }}>branches</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>client’s</span> <span style={{ fontSize: 'large' }}>place</span> <span style={{ fontSize: 'large' }}>as</span> <span style={{ fontSize: 'large' }}>part</span> <span style={{ fontSize: 'large' }}>of their</span> <span style={{ fontSize: 'large' }}>work,</span> <span style={{ fontSize: 'large' }}>within</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>outside</span> <span style={{ fontSize: 'large' }}>India</span> <span style={{ fontSize: 'large' }}>where</span> <span style={{ fontSize: 'large' }}>business</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>subsidiary/</span> <span style={{ fontSize: 'large' }}>branch/ outlet/</span> <span style={{ fontSize: 'large' }}>unit</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>is</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>may</span> <span style={{ fontSize: 'large' }}>come</span> <span style={{ fontSize: 'large' }}>into</span> <span style={{ fontSize: 'large' }}>existence</span> <span style={{ fontSize: 'large' }}>if</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>so</span> <span style={{ fontSize: 'large' }}>directs</span> <span style={{ fontSize: 'large' }}>based</span> <span style={{ fontSize: 'large' }}>on the</span> <span style={{ fontSize: 'large' }}>exigencies</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>work.</span> <span style={{ fontSize: 'large' }}>Upon</span> <span style={{ fontSize: 'large' }}>such</span> <span style={{ fontSize: 'large' }}>relocation/</span> <span style={{ fontSize: 'large' }}>transfer,</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>agrees</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>bound</span> <span style={{ fontSize: 'large' }}>by</span> <span style={{ fontSize: 'large' }}>the rules</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>regulations</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>respective</span> <span style={{ fontSize: 'large' }}>working</span> <span style={{ fontSize: 'large' }}>place,</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>otherwise</span> <span style={{ fontSize: 'large' }}>as</span> <span style={{ fontSize: 'large' }}>speciﬁed</span> <span style={{ fontSize: 'large' }}>by</span> <span style={{ fontSize: 'large' }}>Company.</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol start={5}>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>on</span> <span style={{ fontSize: 'large' }}>probation</span> <span style={{ fontSize: 'large' }}>for</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>ﬁrst</span> <span style={{ fontSize: 'large' }}>six</span> <span style={{ fontSize: 'large' }}>months</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>only</span> <span style={{ fontSize: 'large' }}>aGer</span> <span style={{ fontSize: 'large' }}>his/her</span> <span style={{ fontSize: 'large' }}>successful </span><span style={{ fontSize: 'large' }}>completion of probationary period, the Company will issue a letter of conﬁrmation of </span><span style={{ fontSize: 'large' }}>employment.</span> <span style={{ fontSize: 'large' }}>In</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>event,</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>is</span> <span style={{ fontSize: 'large' }}>not</span> <span style={{ fontSize: 'large' }}>satisﬁed</span> <span style={{ fontSize: 'large' }}>with</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>performance</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee during the probationary period, the Company is entitled to terminate this agreement with immediate eﬀect and the Employee agrees and undertakes to not make any claim on the </span><span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>whatsoever.</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol start={6}>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>terms</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>this</span> <span style={{ fontSize: 'large' }}>Agreement</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>continue</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>bind</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>until</span> <span style={{ fontSize: 'large' }}>it</span> <span style={{ fontSize: 'large' }}>is</span> <span style={{ fontSize: 'large' }}>terminated</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>accordance </span><span style={{ fontSize: 'large' }}>with</span> <span style={{ fontSize: 'large' }}>this</span> <span style={{ fontSize: 'large' }}>Agreement,</span> <span style={{ fontSize: 'large' }}>irrespective</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>fact</span> <span style={{ fontSize: 'large' }}>that</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>may</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>promoted,</span> <span style={{ fontSize: 'large' }}>transferred</span> <span style={{ fontSize: 'large' }}>or </span><span style={{ fontSize: 'large' }}>seconded</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>other</span> <span style={{ fontSize: 'large' }}>place.</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol start={7}>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>working</span> <span style={{ fontSize: 'large' }}>hours</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>follow</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>operating</span> <span style={{ fontSize: 'large' }}>hours</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company.</span> <span style={{ fontSize: 'large' }}>When </span><span style={{ fontSize: 'large' }}>working</span> <span style={{ fontSize: 'large' }}>on</span> <span style={{ fontSize: 'large' }}>relocation/</span> <span style={{ fontSize: 'large' }}>transfer/</span> <span style={{ fontSize: 'large' }}>deputation,</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>working</span> <span style={{ fontSize: 'large' }}>hours</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>follow</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>operating</span> <span style={{ fontSize: 'large' }}>hours</span> <span style={{ fontSize: 'large' }}>of </span><span style={{ fontSize: 'large' }}>such</span> <span style={{ fontSize: 'large' }}>place</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>work.</span> <span style={{ fontSize: 'large' }}>But</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>understands</span> <span style={{ fontSize: 'large' }}>that</span> <span style={{ fontSize: 'large' }}>from</span> <span style={{ fontSize: 'large' }}>time</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>time</span> <span style={{ fontSize: 'large' }}>he/she</span> <span style={{ fontSize: 'large' }}>is</span> <span style={{ fontSize: 'large' }}>required</span> <span style={{ fontSize: 'large' }}>to </span><span style={{ fontSize: 'large' }}>work</span> <span style={{ fontSize: 'large' }}>additional</span> <span style={{ fontSize: 'large' }}>unpaid</span> <span style={{ fontSize: 'large' }}>hours</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>order</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>carry</span> <span style={{ fontSize: 'large' }}>out</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>duties</span> <span style={{ fontSize: 'large' }}>promptly</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>eﬃciently.</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol start={8}>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>provide</span> <span style={{ fontSize: 'large' }}>training</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>for</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>ﬁrst</span> <span style={{ fontSize: 'large' }}>month</span> <span style={{ fontSize: 'large' }}>for</span> <span style={{ fontSize: 'large' }}>better</span> <span style={{ fontSize: 'large' }}>discharge</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the </span><span style={{ fontSize: 'large' }}>roles</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>responsibility</span> <span style={{ fontSize: 'large' }}>by</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee.</span> <span style={{ fontSize: 'large' }}>However,</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>may</span> <span style={{ fontSize: 'large' }}>choose</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>seek</span> <span style={{ fontSize: 'large' }}>special </span><span style={{ fontSize: 'large' }}>training</span> <span style={{ fontSize: 'large' }}>on</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>speciﬁc</span> <span style={{ fontSize: 'large' }}>area</span> <span style={{ fontSize: 'large' }}>from</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>such</span> <span style={{ fontSize: 'large' }}>an</span> <span style={{ fontSize: 'large' }}>event,</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>will</span> <span style={{ fontSize: 'large' }}>at</span> <span style={{ fontSize: 'large' }}>its</span> <span style={{ fontSize: 'large' }}>cost </span><span style={{ fontSize: 'large' }}>provide the special training to the Employee. </span><span style={{ fontSize: 'large' }}>However, </span><span style={{ fontSize: 'large' }}>post completion of the training the Employee</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>compulsorily</span> <span style={{ fontSize: 'large' }}>work</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>provide</span> <span style={{ fontSize: 'large' }}>his/her</span> <span style={{ fontSize: 'large' }}>services</span> <span style={{ fontSize: 'large' }}>for</span> <span style={{ fontSize: 'large' }}>a</span> <span style={{ fontSize: 'large' }}>minimum period</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>one</span> <span style={{ fontSize: 'large' }}>year</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>on</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>terms</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>conditions</span> <span style={{ fontSize: 'large' }}>as</span> <span style={{ fontSize: 'large' }}>may</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>agreed</span> <span style={{ fontSize: 'large' }}>between</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Parties</span> <span style={{ fontSize: 'large' }}>under a</span> <span style={{ fontSize: 'large' }}>separate</span> <span style={{ fontSize: 'large' }}>agreement</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>executed</span> <span style={{ fontSize: 'large' }}>by</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Parties</span> <span style={{ fontSize: 'large' }}>prior</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>commencement</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>special </span><span style={{ fontSize: 'large' }}>training.</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                        </div>



                    </div>
                </div>



                <div class="card" id="pageA4">
                    <div class="card-body">


                        <div>
                            <ol start={2} style={{ textAlign: 'justify' }}>
                                <li>
                                    <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}><u>EMOLUMENTS:</u></span></span></p>
                                </li>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>Employee’s</span> <span style={{ fontSize: 'large' }}>total</span> <span style={{ fontSize: 'large' }}>compensation</span> <span style={{ fontSize: 'large' }}>(Cost</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company)</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>as</span> <span style={{ fontSize: 'large' }}>per</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>above-mentioned schedule,</span> <span style={{ fontSize: 'large' }}>payable</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>periodic</span> <span style={{ fontSize: 'large' }}>installments</span> <span style={{ fontSize: 'large' }}>according</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company’s</span> <span style={{ fontSize: 'large' }}>normal</span> <span style={{ fontSize: 'large' }}>payroll</span> <span style={{ fontSize: 'large' }}>practices, </span><span style={{ fontSize: 'large' }}>subject</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>standard</span> <span style={{ fontSize: 'large' }}>deductions</span> <span style={{ fontSize: 'large' }}>towards</span> <span style={{ fontSize: 'large' }}>tax</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>other</span> <span style={{ fontSize: 'large' }}>deductions</span> <span style={{ fontSize: 'large' }}>as</span> <span style={{ fontSize: 'large' }}>per</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>policy.</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol start={3}>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>Performance</span> <span style={{ fontSize: 'large' }}>reviews</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>done</span> <span style={{ fontSize: 'large' }}>on</span> <span style={{ fontSize: 'large' }}>a</span> <span style={{ fontSize: 'large' }}>yearly</span> <span style={{ fontSize: 'large' }}>basis</span> <span style={{ fontSize: 'large' }}>with</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>ﬁrst</span> <span style={{ fontSize: 'large' }}>performance</span> <span style={{ fontSize: 'large' }}>review</span> <span style={{ fontSize: 'large' }}>at</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>end of</span> <span style={{ fontSize: 'large' }}>twelve</span> <span style={{ fontSize: 'large' }}>months.</span> <span style={{ fontSize: 'large' }}>Salary</span> <span style={{ fontSize: 'large' }}>increments</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>done</span> <span style={{ fontSize: 'large' }}>on</span> <span style={{ fontSize: 'large' }}>a</span> <span style={{ fontSize: 'large' }}>yearly</span> <span style={{ fontSize: 'large' }}>basis</span> <span style={{ fontSize: 'large' }}>based</span> <span style={{ fontSize: 'large' }}>on</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>performance</span> <span style={{ fontSize: 'large' }}>of </span><span style={{ fontSize: 'large' }}>the Employee in that year which shall include professional eﬃciency, integrity, discipline, punctuality, professional grooming, Employee’s contribution towards proﬁtability of the Company’s</span> <span style={{ fontSize: 'large' }}>income,</span> <span style={{ fontSize: 'large' }}>etc.</span> <span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>Employee’s</span> <span style={{ fontSize: 'large' }}>increments</span> <span style={{ fontSize: 'large' }}>are</span> <span style={{ fontSize: 'large' }}>completely</span> <span style={{ fontSize: 'large' }}>discretionary</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>will</span> <span style={{ fontSize: 'large' }}>be subject</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>on</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>basis</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>his</span> <span style={{ fontSize: 'large' }}>eﬀective</span> <span style={{ fontSize: 'large' }}>performance</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>results</span> <span style={{ fontSize: 'large' }}>during</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>period</span> <span style={{ fontSize: 'large' }}>as</span> <span style={{ fontSize: 'large' }}>also</span> <span style={{ fontSize: 'large' }}>the performance</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>results</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company.</span> <span style={{ fontSize: 'large' }}>All</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>such</span> <span style={{ fontSize: 'large' }}>increment</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>bonus</span> <span style={{ fontSize: 'large' }}>may</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>paid</span> <span style={{ fontSize: 'large' }}>by</span> <span style={{ fontSize: 'large' }}>the </span><span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>at</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>end</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>completion</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>every</span> <span style={{ fontSize: 'large' }}>twelve</span> <span style={{ fontSize: 'large' }}>months</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>employment.</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol start={3}>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>All</span> <span style={{ fontSize: 'large' }}>statutory</span> <span style={{ fontSize: 'large' }}>requirements</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>tax,</span> <span style={{ fontSize: 'large' }}>including</span> <span style={{ fontSize: 'large' }}>tax</span> <span style={{ fontSize: 'large' }}>deductible</span> <span style={{ fontSize: 'large' }}>at</span> <span style={{ fontSize: 'large' }}>source,</span> <span style={{ fontSize: 'large' }}>professional</span> <span style={{ fontSize: 'large' }}>tax,</span> <span style={{ fontSize: 'large' }}>etc,</span> <span style={{ fontSize: 'large' }}>will</span> <span style={{ fontSize: 'large' }}>be paid</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>complied</span> <span style={{ fontSize: 'large' }}>by</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>all/</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>funds/</span> <span style={{ fontSize: 'large' }}>salary/</span> <span style={{ fontSize: 'large' }}>remuneration</span> <span style={{ fontSize: 'large' }}>paid</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee </span><span style={{ fontSize: 'large' }}>will</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>aGer</span> <span style={{ fontSize: 'large' }}>such</span> <span style={{ fontSize: 'large' }}>appropriate</span> <span style={{ fontSize: 'large' }}>deductions.</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }} start={3}>
                                <li>
                                    <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}><u>TERM AND</u></span><u> </u><span style={{ fontSize: 'large' }}><u>TERMINATION:</u></span></span></p>
                                </li>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>parties</span> <span style={{ fontSize: 'large' }}>agree</span> <span style={{ fontSize: 'large' }}>that</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee’s</span> <span style={{ fontSize: 'large' }}>employment</span> <span style={{ fontSize: 'large' }}>with</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>commence</span> <span style={{ fontSize: 'large' }}>on</span> <span style={{ fontSize: 'large' }}>the date</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>joining</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>subject</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>clause</span> <span style={{ fontSize: 'large' }}>1.5</span> <span style={{ fontSize: 'large' }}>above,</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>continue</span> <span style={{ fontSize: 'large' }}>till</span> <span style={{ fontSize: 'large' }}>such</span> <span style={{ fontSize: 'large' }}>time</span> <span style={{ fontSize: 'large' }}>that</span> <span style={{ fontSize: 'large' }}>either</span> <span style={{ fontSize: 'large' }}>party </span><span style={{ fontSize: 'large' }}>terminates</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>employment</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>accordance</span> <span style={{ fontSize: 'large' }}>with</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>clauses</span> <span style={{ fontSize: 'large' }}>below.</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol start={2}>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>Either</span> <span style={{ fontSize: 'large' }}>party</span> <span style={{ fontSize: 'large' }}>may</span> <span style={{ fontSize: 'large' }}>terminate</span> <span style={{ fontSize: 'large' }}>this</span> <span style={{ fontSize: 'large' }}>agreement</span> <span style={{ fontSize: 'large' }}>by</span> <span style={{ fontSize: 'large' }}>giving</span> <span style={{ fontFamily: '"Trebuchet MS", serif' }}><span style={{ fontSize: 'large' }}><strong>Three</strong></span></span> <span style={{ fontFamily: '"Trebuchet MS", serif' }}><span style={{ fontSize: 'large' }}><strong>(3)</strong></span></span> <span style={{ fontFamily: '"Trebuchet MS", serif' }}><span style={{ fontSize: 'large' }}><strong>months</strong></span></span> <span style={{ fontSize: 'large' }}>prior</span> <span style={{ fontSize: 'large' }}>notice</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>other </span><span style={{ fontSize: 'large' }}>party.</span> <span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>said</span> <span style={{ fontSize: 'large' }}>notice</span> <span style={{ fontSize: 'large' }}>period</span> <span style={{ fontSize: 'large' }}>for</span> <span style={{ fontSize: 'large' }}>termination</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>this</span> <span style={{ fontSize: 'large' }}>Agreement</span> <span style={{ fontSize: 'large' }}>by</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>neither</span> <span style={{ fontSize: 'large' }}>be </span><span style={{ fontSize: 'large' }}>adjustable</span> <span style={{ fontSize: 'large' }}>against</span> <span style={{ fontSize: 'large' }}>privileged</span> <span style={{ fontSize: 'large' }}>leave</span> <span style={{ fontSize: 'large' }}>nor</span> <span style={{ fontSize: 'large' }}>forfeiture</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>salary</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>such</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>same</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>be </span><span style={{ fontSize: 'large' }}>subject</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>discretion</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company.</span> <span style={{ fontSize: 'large' }}>However,</span> <span style={{ fontSize: 'large' }}>nothing</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>this</span> <span style={{ fontSize: 'large' }}>Agreement</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>prevent</span> <span style={{ fontSize: 'large' }}>the </span><span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>from</span> <span style={{ fontSize: 'large' }}>terminating</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee’s</span> <span style={{ fontSize: 'large' }}>employment</span> <span style={{ fontSize: 'large' }}>forthwith</span> <span style={{ fontSize: 'large' }}>for</span> <span style={{ fontSize: 'large' }}>proved</span> <span style={{ fontSize: 'large' }}>breach</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>duties and responsibilities/ gross default/ misconduct contravening the express or implied terms and conditions</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>this</span> <span style={{ fontSize: 'large' }}>Agreement.</span> <span style={{ fontSize: 'large' }}>Where</span> <span style={{ fontSize: 'large' }}>this</span> <span style={{ fontSize: 'large' }}>Agreement</span> <span style={{ fontSize: 'large' }}>is</span> <span style={{ fontSize: 'large' }}>terminated</span> <span style={{ fontSize: 'large' }}>by</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>on</span> <span style={{ fontSize: 'large' }}>account</span> <span style={{ fontSize: 'large' }}>of the Employee’s proved breach of any duties and responsibilities/ gross default/ misconduct, no </span><span style={{ fontSize: 'large' }}>prior</span> <span style={{ fontSize: 'large' }}>notice</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>thereby</span> <span style={{ fontSize: 'large' }}>no</span> <span style={{ fontSize: 'large' }}>salary</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>lieu</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>such</span> <span style={{ fontSize: 'large' }}>notice</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>necessary.</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol start={3}>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>Further,</span> <span style={{ fontSize: 'large' }}>it</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>at</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>sole</span> <span style={{ fontSize: 'large' }}>discretion</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>suspend</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>requirement</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>notice </span><span style={{ fontSize: 'large' }}>period</span> <span style={{ fontSize: 'large' }}>as</span> <span style={{ fontSize: 'large' }}>stipulated</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>clause</span> <span style={{ fontSize: 'large' }}>3.2</span> <span style={{ fontSize: 'large' }}>above.</span> <span style={{ fontSize: 'large' }}>However,</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>such</span> <span style={{ fontSize: 'large' }}>cases,</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>may</span> <span style={{ fontSize: 'large' }}>direct</span> <span style={{ fontSize: 'large' }}>the Employee</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>buy</span> <span style={{ fontSize: 'large' }}>out</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>notice</span> <span style={{ fontSize: 'large' }}>period</span> <span style={{ fontSize: 'large' }}>by</span> <span style={{ fontSize: 'large' }}>paying</span> <span style={{ fontSize: 'large' }}>amount</span> <span style={{ fontSize: 'large' }}>equivalent</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Salary</span> <span style={{ fontSize: 'large' }}>+GST</span> <span style={{ fontSize: 'large' }}>(18%) payable</span> <span style={{ fontSize: 'large' }}>during</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>notice</span> <span style={{ fontSize: 'large' }}>period</span> <span style={{ fontSize: 'large' }}>plus</span> <span style={{ fontSize: 'large' }}>such</span> <span style={{ fontSize: 'large' }}>other</span> <span style={{ fontSize: 'large' }}>amounts</span> <span style={{ fontSize: 'large' }}>as</span> <span style={{ fontSize: 'large' }}>may</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>sought</span> <span style={{ fontSize: 'large' }}>by</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company.</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol start={4}>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>In</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>event</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>terminating</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Agreement</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>otherwise</span> <span style={{ fontSize: 'large' }}>leaving</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>services</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the </span><span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>manner,</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>not</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>liable</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>pay</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>amounts</span> <span style={{ fontSize: 'large' }}>towards</span> <span style={{ fontSize: 'large' }}>bonus, </span><span style={{ fontSize: 'large' }}>increment,</span> <span style={{ fontSize: 'large' }}>etc.</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>may</span> <span style={{ fontSize: 'large' }}>recover</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>losses</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>has</span> <span style={{ fontSize: 'large' }}>suﬀered</span> <span style={{ fontSize: 'large' }}>on</span> <span style={{ fontSize: 'large' }}>account </span><span style={{ fontSize: 'large' }}>termination</span> <span style={{ fontSize: 'large' }}>by</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>except</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>accordance</span> <span style={{ fontSize: 'large' }}>with</span> <span style={{ fontSize: 'large' }}>clause</span> <span style={{ fontSize: 'large' }}>3.2</span> <span style={{ fontSize: 'large' }}>above.</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <p style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify' }}>&nbsp;</p>
                        </div>




                    </div>
                </div>


                <div className="card" id="pageA4">
                    <div className="card-body">
                        <div>
                            <p style={{ textAlign: 'justify' }} />
                            <p className="western" style={{ textAlign: 'justify' }} align="CENTER" />
                            <p className="western" style={{ textAlign: 'justify' }} />
                            <ol style={{ textAlign: 'justify', listStyleType: 'none' }}>
                                <li>
                                    <p style={{ textAlign: 'justify' }} align="LEFT" />
                                    <ol start={5}>
                                        <li>
                                            <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>In</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>event</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>being</span> <span style={{ fontSize: 'large' }}>liable</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>pay</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>amounts</span> <span style={{ fontSize: 'large' }}>as</span> <span style={{ fontSize: 'large' }}>mentioned</span> <span style={{ fontSize: 'large' }}>hereinabove,</span> <span style={{ fontSize: 'large' }}>the Company</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>have</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>ﬁrst</span> <span style={{ fontSize: 'large' }}>charge</span> <span style={{ fontSize: 'large' }}>over</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>salary,</span> <span style={{ fontSize: 'large' }}>bonus</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>other</span> <span style={{ fontSize: 'large' }}>dues</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>paid</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>the </span><span style={{ fontSize: 'large' }}>Employee from the Company and the Employee hereby agrees and authorizes the Company to </span><span style={{ fontSize: 'large' }}>deduct</span> <span style={{ fontSize: 'large' }}>from</span> <span style={{ fontSize: 'large' }}>them,</span> <span style={{ fontSize: 'large' }}>all</span> <span style={{ fontSize: 'large' }}>such</span> <span style={{ fontSize: 'large' }}>amounts</span> <span style={{ fontSize: 'large' }}>payable</span> <span style={{ fontSize: 'large' }}>by</span> <span style={{ fontSize: 'large' }}>him.</span></span></p>
                                        </li>
                                    </ol>
                                    <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>

                                    <ol start={6}>
                                        <li>
                                            <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}><u>Summary</u></span><span style={{ fontSize: 'large' }}><u>dismissal</u></span><span style={{ fontSize: 'large' }}>:-</span> <span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>may</span> <span style={{ fontSize: 'large' }}>dismiss</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>immediately</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>without</span> <span style={{ fontSize: 'large' }}>notice</span> <span style={{ fontSize: 'large' }}>if, </span><span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>employee:</span></span></p>
                                        </li>

                                    </ol>
                                    <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                                    <ol style={{ textAlign: 'justify' }} type="a">
                                        <li>
                                            <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>Does</span> <span style={{ fontSize: 'large' }}>not</span> <span style={{ fontSize: 'large' }}>perform</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>duties</span> <span style={{ fontSize: 'large' }}>assigned</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>him/her</span> <span style={{ fontSize: 'large' }}>under</span> <span style={{ fontSize: 'large' }}>this</span> <span style={{ fontSize: 'large' }}>Agreement</span> <span style={{ fontSize: 'large' }}>satisfactorily;</span></span></p>
                                        </li>
                                        <li>
                                            <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>Is</span> <span style={{ fontSize: 'large' }}>guilty</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>dishonesty,</span> <span style={{ fontSize: 'large' }}>serious</span> <span style={{ fontSize: 'large' }}>neglect</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>gross</span> <span style={{ fontSize: 'large' }}>misconduct</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>course</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>employment;</span></span></p>
                                        </li>
                                        <li>
                                            <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>Becomes</span> <span style={{ fontSize: 'large' }}>unable,</span> <span style={{ fontSize: 'large' }}>due</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>illness</span> <span style={{ fontSize: 'large' }}>(whether</span> <span style={{ fontSize: 'large' }}>physical</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>mental),</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>properly</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>eﬀectively</span> <span style={{ fontSize: 'large' }}>perform</span> <span style={{ fontSize: 'large' }}>duties </span><span style={{ fontSize: 'large' }}>as</span> <span style={{ fontSize: 'large' }}>provided</span> <span style={{ fontSize: 'large' }}>hereunder</span> <span style={{ fontSize: 'large' }}>for</span> <span style={{ fontSize: 'large' }}>a</span> <span style={{ fontSize: 'large' }}>period</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>periods</span> <span style={{ fontSize: 'large' }}>totalling</span> <span style={{ fontSize: 'large' }}>20</span> <span style={{ fontSize: 'large' }}>working</span> <span style={{ fontSize: 'large' }}>days</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>consecutive</span> <span style={{ fontSize: 'large' }}>period</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>3 </span><span style={{ fontSize: 'large' }}>months;</span></span></p>
                                        </li>
                                    </ol>
                                    <ol style={{ textAlign: 'justify' }} start={4} type="a">
                                        <li>
                                            <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>Expressly</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>by</span> <span style={{ fontSize: 'large' }}>implication</span> <span style={{ fontSize: 'large' }}>repudiates</span> <span style={{ fontSize: 'large' }}>this</span> <span style={{ fontSize: 'large' }}>Agreement;</span></span></p>
                                        </li>
                                        <li>
                                            <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>Acts</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>such</span> <span style={{ fontSize: 'large' }}>a</span> <span style={{ fontSize: 'large' }}>way</span> <span style={{ fontSize: 'large' }}>(whether</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>not</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>course</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>employment)</span> <span style={{ fontSize: 'large' }}>as</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>bring</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>its subsidiaries into</span> <span style={{ fontSize: 'large' }}>disrepute;</span></span></p>
                                        </li>
                                    </ol>
                                    <ol style={{ textAlign: 'justify' }} start={6} type="a">
                                        <li>
                                            <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>Is</span> <span style={{ fontSize: 'large' }}>convicted</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>criminal</span> <span style={{ fontSize: 'large' }}>oﬀence,</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>under</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>law;</span></span></p>
                                        </li>
                                        <li>
                                            <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>Is</span> <span style={{ fontSize: 'large' }}>accused</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>oﬀence</span> <span style={{ fontSize: 'large' }}>involving</span> <span style={{ fontSize: 'large' }}>moral</span> <span style={{ fontSize: 'large' }}>turpitude;</span></span></p>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }} start={4}>
                                <li>
                                    <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}><u>LEAVES:</u></span></span></p>
                                </li>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>The Employee will be entitled to avail holidays/ leaves as per the Company policies in force from time to time.</p>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }} start={5}>
                                <li>
                                    <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}><u>NON</u></span><u> </u><span style={{ fontSize: 'large' }}><u>–</u></span><u> </u><span style={{ fontSize: 'large' }}><u>DISCLOSURE</u></span><u> </u><span style={{ fontSize: 'large' }}><u>OF</u></span><u> </u><span style={{ fontSize: 'large' }}><u>CONFIDENTIAL</u></span><u> </u><span style={{ fontSize: 'large' }}><u>INFORMATION</u></span><u> </u><span style={{ fontSize: 'large' }}><u>&amp;</u></span><u> </u><span style={{ fontSize: 'large' }}><u>NON-COMPETE:</u></span></span></p>
                                </li>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>agrees</span> <span style={{ fontSize: 'large' }}>that</span> <span style={{ fontSize: 'large' }}>information</span> <span style={{ fontSize: 'large' }}>concerning</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>working</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company,</span> <span style={{ fontSize: 'large' }}>including</span> <span style={{ fontSize: 'large' }}>all</span> <span style={{ fontSize: 'large' }}>the information concerning the Company’s business transactions, ﬁnancial arrangements, business partners,</span> <span style={{ fontSize: 'large' }}>clientele,</span> <span style={{ fontSize: 'large' }}>trade</span> <span style={{ fontSize: 'large' }}>secrets,</span> <span style={{ fontSize: 'large' }}>marketing</span> <span style={{ fontSize: 'large' }}>strategies</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>other</span> <span style={{ fontSize: 'large' }}>information</span> <span style={{ fontSize: 'large' }}>concerning</span> <span style={{ fontSize: 'large' }}>the Company</span> <span style={{ fontSize: 'large' }}>which</span> <span style={{ fontSize: 'large' }}>is</span> <span style={{ fontSize: 'large' }}>not</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>public</span> <span style={{ fontSize: 'large' }}>domain</span> <span style={{ fontSize: 'large' }}>constitutes</span> <span style={{ fontSize: 'large' }}>‘Conﬁdential</span> <span style={{ fontSize: 'large' }}>Information’</span> <span style={{ fontSize: 'large' }}>belonging</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>the Company</span> <span style={{ fontSize: 'large' }}>under</span> <span style={{ fontSize: 'large' }}>this</span> <span style={{ fontSize: 'large' }}>Agreement</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>he</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>not,</span> <span style={{ fontSize: 'large' }}>during</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>continuance</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>this</span> <span style={{ fontSize: 'large' }}>Agreement</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>for a</span> <span style={{ fontSize: 'large' }}>period</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>two</span> <span style={{ fontSize: 'large' }}>(2)</span> <span style={{ fontSize: 'large' }}>years</span> <span style={{ fontSize: 'large' }}>after</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>termination</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>this</span> <span style={{ fontSize: 'large' }}>Agreement,</span> <span style={{ fontSize: 'large' }}>reveal</span> <span style={{ fontSize: 'large' }}>Conﬁdential</span> <span style={{ fontSize: 'large' }}>Information to</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>person,</span> <span style={{ fontSize: 'large' }}>ﬁrm,</span> <span style={{ fontSize: 'large' }}>corporation,</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>entity.</span> <span style={{ fontSize: 'large' }}>Should</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>reveal</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>threaten</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>reveal</span> <span style={{ fontSize: 'large' }}>such </span><span style={{ fontSize: 'large' }}>Conﬁdential</span> <span style={{ fontSize: 'large' }}>Information</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>person,</span> <span style={{ fontSize: 'large' }}>ﬁrm,</span> <span style={{ fontSize: 'large' }}>corporation,</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>entity</span> <span style={{ fontSize: 'large' }}>contrary</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>provisions</span> <span style={{ fontSize: 'large' }}>of </span><span style={{ fontSize: 'large' }}>this</span> <span style={{ fontSize: 'large' }}>Agreement</span> <span style={{ fontSize: 'large' }}>during</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>subsistence</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>this</span> <span style={{ fontSize: 'large' }}>Agreement,</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>entitled</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>take </span><span style={{ fontSize: 'large' }}>disciplinary action against the Employee including dismissal of the Employee and the Company </span><span style={{ fontSize: 'large' }}>may</span> <span style={{ fontSize: 'large' }}>ﬁle</span> <span style={{ fontSize: 'large' }}>suit</span> <span style={{ fontSize: 'large' }}>for</span> <span style={{ fontSize: 'large' }}>damages.</span> <span style={{ fontSize: 'large' }}>Should</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>reveal</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>threaten</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>reveal</span> <span style={{ fontSize: 'large' }}>such</span> <span style={{ fontSize: 'large' }}>Conﬁdential </span><span style={{ fontSize: 'large' }}>Information</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>person,</span> <span style={{ fontSize: 'large' }}>ﬁrm,</span> <span style={{ fontSize: 'large' }}>corporation,</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>entity</span> <span style={{ fontSize: 'large' }}>contrary</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>provisions</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>this </span><span style={{ fontSize: 'large' }}>Agreement</span> <span style={{ fontSize: 'large' }}>after</span> <span style={{ fontSize: 'large' }}>termination</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>this</span> <span style={{ fontSize: 'large' }}>Agreement</span> <span style={{ fontSize: 'large' }}>but</span> <span style={{ fontSize: 'large' }}>within</span> <span style={{ fontSize: 'large' }}>2</span> <span style={{ fontSize: 'large' }}>year</span> <span style={{ fontSize: 'large' }}>from</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>date</span> <span style={{ fontSize: 'large' }}>termination</span> <span style={{ fontSize: 'large' }}>of </span><span style={{ fontSize: 'large' }}>this</span> <span style={{ fontSize: 'large' }}>Agreement,</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>entitled</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>claim</span> <span style={{ fontSize: 'large' }}>damages</span> <span style={{ fontSize: 'large' }}>from</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee.</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol start={2}>
                                    <li>
                                        <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>Nothing</span> <span style={{ fontSize: 'large' }}>contained</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>previous/</span> <span style={{ fontSize: 'large' }}>above</span> <span style={{ fontSize: 'large' }}>clause</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>apply</span> <span style={{ fontSize: 'large' }}>to:</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }} type="a">
                                <li>
                                    <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>information</span> <span style={{ fontSize: 'large' }}>that</span> <span style={{ fontSize: 'large' }}>is</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>public</span> <span style={{ fontSize: 'large' }}>domain;</span> <span style={{ fontSize: 'large' }}>and</span></span></p>
                                </li>
                                <br />
                            </ol>
                        </div>



                    </div>
                </div>


                <div class="card" id="pageA4">
                    <div class="card-body">
                        <div>
                            <p style={{ textAlign: 'justify' }} />
                            <ol style={{ textAlign: 'justify' }} type="a" start={"b"}>
                                <li value={2}>
                                    <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>information</span> <span style={{ fontSize: 'large' }}>which</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Parties</span> <span style={{ fontSize: 'large' }}>are</span> <span style={{ fontSize: 'large' }}>under</span> <span style={{ fontSize: 'large' }}>a</span> <span style={{ fontSize: 'large' }}>legal</span> <span style={{ fontSize: 'large' }}>obligation</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>disclose</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>a</span> <span style={{ fontSize: 'large' }}>court</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>law</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>other statutory/regulatory</span> <span style={{ fontSize: 'large' }}>authority;</span></span></p>
                                </li>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>also</span> <span style={{ fontSize: 'large' }}>agrees</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>promptly</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>without</span> <span style={{ fontSize: 'large' }}>necessity</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>demand,</span> <span style={{ fontSize: 'large' }}>return</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>the </span><span style={{ fontSize: 'large' }}>Company,</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>all</span> <span style={{ fontSize: 'large' }}>documents,</span> <span style={{ fontSize: 'large' }}>records,</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>writings</span> <span style={{ fontSize: 'large' }}>made</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>obtained</span> <span style={{ fontSize: 'large' }}>by</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>the course</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>his/her</span> <span style={{ fontSize: 'large' }}>employment</span> <span style={{ fontSize: 'large' }}>with</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company,</span> <span style={{ fontSize: 'large' }}>on</span> <span style={{ fontSize: 'large' }}>expiry</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>termination</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>this</span> <span style={{ fontSize: 'large' }}>Agreement</span> <span style={{ fontSize: 'large' }}>for </span><span style={{ fontSize: 'large' }}>any reason</span> <span style={{ fontSize: 'large' }}>whatsoever.</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol start={2}>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>also</span> <span style={{ fontSize: 'large' }}>agrees</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>sign</span> <span style={{ fontSize: 'large' }}>on</span> <span style={{ fontSize: 'large' }}>similar</span> <span style={{ fontSize: 'large' }}>non-</span> <span style={{ fontSize: 'large' }}>disclosure/</span> <span style={{ fontSize: 'large' }}>conﬁdential</span> <span style={{ fontSize: 'large' }}>agreement</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the </span><span style={{ fontSize: 'large' }}>clients</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>as</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>when</span> <span style={{ fontSize: 'large' }}>required/</span> <span style={{ fontSize: 'large' }}>requested</span> <span style={{ fontSize: 'large' }}>by</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company.</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol start={3}>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>agrees</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>undertakes</span> <span style={{ fontSize: 'large' }}>not</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>take</span> <span style={{ fontSize: 'large' }}>up</span> <span style={{ fontSize: 'large' }}>employment</span> <span style={{ fontSize: 'large' }}>with</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>existing</span> <span style={{ fontSize: 'large' }}>clients</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the Company</span> <span style={{ fontSize: 'large' }}>during</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>subsistence</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Agreement</span> <span style={{ fontSize: 'large' }}>without</span> <span style={{ fontSize: 'large' }}>prior</span> <span style={{ fontSize: 'large' }}>written</span> <span style={{ fontSize: 'large' }}>consent</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company.</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol start={4}>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>agrees</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>conﬁrms</span> <span style={{ fontSize: 'large' }}>that</span> <span style={{ fontSize: 'large' }}>he/she</span> <span style={{ fontSize: 'large' }}>will</span> <span style={{ fontSize: 'large' }}>not</span> <span style={{ fontSize: 'large' }}>accept</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>oﬀer</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>employment</span> <span style={{ fontSize: 'large' }}>from</span> <span style={{ fontSize: 'large' }}>any </span><span style={{ fontSize: 'large' }}>customer,</span> <span style={{ fontSize: 'large' }}>where</span> <span style={{ fontSize: 'large' }}>he/she</span> <span style={{ fontSize: 'large' }}>had</span> <span style={{ fontSize: 'large' }}>worked</span> <span style={{ fontSize: 'large' }}>during</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>course</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>employment</span> <span style={{ fontSize: 'large' }}>with</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>for</span> <span style={{ fontSize: 'large' }}>a </span><span style={{ fontSize: 'large' }}>continuous</span> <span style={{ fontSize: 'large' }}>period</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>6</span> <span style={{ fontSize: 'large' }}>months</span> <span style={{ fontSize: 'large' }}>immediately</span> <span style={{ fontSize: 'large' }}>preceding</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>termination</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>his/her</span> <span style={{ fontSize: 'large' }}>employment</span> <span style={{ fontSize: 'large' }}>in </span><span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company.</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol start={5}>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>agrees</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>undertakes</span> <span style={{ fontSize: 'large' }}>not</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>either</span> <span style={{ fontSize: 'large' }}>directly</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>indirectly</span> <span style={{ fontSize: 'large' }}>solicit</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>employees, </span><span style={{ fontSize: 'large' }}>customers,</span> <span style={{ fontSize: 'large' }}>clients</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>post</span> <span style={{ fontSize: 'large' }}>termination</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>his/her</span> <span style={{ fontSize: 'large' }}>employment</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company.</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }} start={6}>
                                <li>
                                    <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}><u>SIMULTANEOUS </u></span><span style={{ fontSize: 'large' }}><u>EMPLOYMENT/</u></span><u> </u><span style={{ fontSize: 'large' }}><u>EDUCATION:</u></span></span></p>
                                </li>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>Parties</span> <span style={{ fontSize: 'large' }}>agree</span> <span style={{ fontSize: 'large' }}>that</span> <span style={{ fontSize: 'large' }}>during</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>term</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>this</span> <span style={{ fontSize: 'large' }}>Agreement,</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>not,</span> <span style={{ fontSize: 'large' }}>under</span> <span style={{ fontSize: 'large' }}>any circumstances,</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>permitted</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>work</span> <span style={{ fontSize: 'large' }}>for</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>other</span> <span style={{ fontSize: 'large' }}>company</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>ﬁrm</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>person,</span> <span style={{ fontSize: 'large' }}>either</span> <span style={{ fontSize: 'large' }}>whole</span> <span style={{ fontSize: 'large' }}>time or</span> <span style={{ fontSize: 'large' }}>part</span> <span style={{ fontSize: 'large' }}>time,</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>own,</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>way</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>associated</span> <span style={{ fontSize: 'large' }}>with</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>company</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>ﬁrm</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>proprietorship </span><span style={{ fontSize: 'large' }}>concern</span> <span style={{ fontSize: 'large' }}>as</span> <span style={{ fontSize: 'large' }}>advisor,</span> <span style={{ fontSize: 'large' }}>director</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>partner,</span> <span style={{ fontSize: 'large' }}>whether</span> <span style={{ fontSize: 'large' }}>paid</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>not,</span> <span style={{ fontSize: 'large' }}>for</span> <span style={{ fontSize: 'large' }}>his</span> <span style={{ fontSize: 'large' }}>services,</span> <span style={{ fontSize: 'large' }}>without</span> <span style={{ fontSize: 'large' }}>prior</span> <span style={{ fontSize: 'large' }}>written </span><span style={{ fontSize: 'large' }}>permission</span> <span style={{ fontSize: 'large' }}>from</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company.</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol start={2}>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>may</span> <span style={{ fontSize: 'large' }}>pursue</span> <span style={{ fontSize: 'large' }}>further</span> <span style={{ fontSize: 'large' }}>education</span> <span style={{ fontSize: 'large' }}>with</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>prior</span> <span style={{ fontSize: 'large' }}>written</span> <span style={{ fontSize: 'large' }}>consent</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company. </span><span style={{ fontSize: 'large' }}>However,</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>such</span> <span style={{ fontSize: 'large' }}>further</span> <span style={{ fontSize: 'large' }}>education</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>not</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>way</span> <span style={{ fontSize: 'large' }}>aﬀect</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>work/</span> <span style={{ fontSize: 'large' }}>business</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the </span><span style={{ fontSize: 'large' }}>Company.</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }} start={7}>
                                <li>
                                    <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}><u>EMPLOYEE’S</u></span><u> </u><span style={{ fontSize: 'large' }}><u>OBLIGATIONS:</u></span></span></p>
                                </li>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>agrees</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>carry</span> <span style={{ fontSize: 'large' }}>out</span> <span style={{ fontSize: 'large' }}>all</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>duties</span> <span style={{ fontSize: 'large' }}>assigned</span> <span style={{ fontSize: 'large' }}>by</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>with</span> <span style={{ fontSize: 'large' }}>all</span> <span style={{ fontSize: 'large' }}>due</span> <span style={{ fontSize: 'large' }}>diligence </span><span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>loyalty</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>keeping</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company’s</span> <span style={{ fontSize: 'large' }}>interest</span> <span style={{ fontSize: 'large' }}>paramount.</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol start={2}>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>agrees</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>not</span> <span style={{ fontSize: 'large' }}>directly/</span> <span style={{ fontSize: 'large' }}>indirectly</span> <span style={{ fontSize: 'large' }}>receive</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>accept</span> <span style={{ fontSize: 'large' }}>for</span> <span style={{ fontSize: 'large' }}>Employee’s</span> <span style={{ fontSize: 'large' }}>own</span> <span style={{ fontSize: 'large' }}>beneﬁt</span> <span style={{ fontSize: 'large' }}>any </span><span style={{ fontSize: 'large' }}>commission, rebate, discount or proﬁt from any person/ ﬁrm/ company having business </span><span style={{ fontSize: 'large' }}>transactions</span> <span style={{ fontSize: 'large' }}>with</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company.</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <p style={{ textAlign: 'justify' }}>&nbsp;</p>
                        </div>


                    </div>
                </div>


                <div class="card" id="pageA4">
                    <div class="card-body">

                        <div>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol start={3}>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>agrees</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>supervise</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>work</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>Employee’s</span> <span style={{ fontSize: 'large' }}>subordinates</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>always</span> <span style={{ fontSize: 'large' }}>ensure proper</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>eﬀective</span> <span style={{ fontSize: 'large' }}>implementation</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>compliance</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>all</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>rules</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>regulations</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the </span><span style={{ fontSize: 'large' }}>Company.</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol start={4}>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>not</span> <span style={{ fontSize: 'large' }}>commit</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>illegal</span> <span style={{ fontSize: 'large' }}>act/</span> <span style={{ fontSize: 'large' }}>breach</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>trust</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>bring</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>civil/</span> <span style={{ fontSize: 'large' }}>criminal</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>any such</span> <span style={{ fontSize: 'large' }}>other</span> <span style={{ fontSize: 'large' }}>liability</span> <span style={{ fontSize: 'large' }}>on</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company.</span> <span style={{ fontSize: 'large' }}>In</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>such</span> <span style={{ fontSize: 'large' }}>event,</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>alone</span> <span style={{ fontSize: 'large' }}>will</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>liable</span> <span style={{ fontSize: 'large' }}>for</span> <span style={{ fontSize: 'large' }}>all </span><span style={{ fontSize: 'large' }}>such</span> <span style={{ fontSize: 'large' }}>liabilities/</span> <span style={{ fontSize: 'large' }}>wrongs</span> <span style={{ fontSize: 'large' }}>done.</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol start={5}>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>During</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>term</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>this</span> <span style={{ fontSize: 'large' }}>Agreement,</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>agrees</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>bound</span> <span style={{ fontSize: 'large' }}>by</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>policies</span> <span style={{ fontSize: 'large' }}>framed</span> <span style={{ fontSize: 'large' }}>and </span><span style={{ fontSize: 'large' }}>enforced</span> <span style={{ fontSize: 'large' }}>by</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>from</span> <span style={{ fontSize: 'large' }}>time</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>time.</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }} start={8}>
                                <li>
                                    <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}><u>DOCUMENTS</u></span><u> </u><span style={{ fontSize: 'large' }}><u>PROVIDED</u></span><u> </u><span style={{ fontSize: 'large' }}><u>TO</u></span><u> </u><span style={{ fontSize: 'large' }}><u>THE</u></span><u> </u><span style={{ fontSize: 'large' }}><u>COMPANY:</u></span></span></p>
                                </li>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>for</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>purpose</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>employment</span> <span style={{ fontSize: 'large' }}>has</span> <span style={{ fontSize: 'large' }}>provided</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>with</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>following documents</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>upload</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Documents</span> <span style={{ fontSize: 'large' }}>on</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>HR</span> <span style={{ fontSize: 'large' }}>portal.</span> <span style={{ fontSize: 'large' }}>This</span> <span style={{ fontSize: 'large' }}>Is</span> <span style={{ fontSize: 'large' }}>mandatory,</span> <span style={{ fontSize: 'large' }}>contact</span> <span style={{ fontSize: 'large' }}>HR</span> <span style={{ fontSize: 'large' }}>team</span> <span style={{ fontSize: 'large' }}>for </span><span style={{ fontSize: 'large' }}>further</span> <span style={{ fontSize: 'large' }}>information</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol start={2}>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>Parties</span> <span style={{ fontSize: 'large' }}>agree</span> <span style={{ fontSize: 'large' }}>that</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>has</span> <span style={{ fontSize: 'large' }}>oﬀered</span> <span style={{ fontSize: 'large' }}>employment</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>on</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>basis</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the </span><span style={{ fontSize: 'large' }}>above mentioned documents and information provided by the Employee and on the </span><span style={{ fontSize: 'large' }}>understanding</span> <span style={{ fontSize: 'large' }}>that</span> <span style={{ fontSize: 'large' }}>there</span> <span style={{ fontSize: 'large' }}>is</span> <span style={{ fontSize: 'large' }}>nothing</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee’s</span> <span style={{ fontSize: 'large' }}>past</span> <span style={{ fontSize: 'large' }}>record</span> <span style={{ fontSize: 'large' }}>which</span> <span style={{ fontSize: 'large' }}>should</span> <span style={{ fontSize: 'large' }}>have</span> <span style={{ fontSize: 'large' }}>prevented</span> <span style={{ fontSize: 'large' }}>in </span><span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>from</span> <span style={{ fontSize: 'large' }}>oﬀering</span> <span style={{ fontSize: 'large' }}>employment</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>under</span> <span style={{ fontSize: 'large' }}>this</span> <span style={{ fontSize: 'large' }}>Agreement.</span> <span style={{ fontSize: 'large' }}>If</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the above</span> <span style={{ fontSize: 'large' }}>documents/</span> <span style={{ fontSize: 'large' }}>information</span> <span style={{ fontSize: 'large' }}>is</span> <span style={{ fontSize: 'large' }}>found</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>incorrect</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>false</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>opinion</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company </span><span style={{ fontSize: 'large' }}>is</span> <span style={{ fontSize: 'large' }}>incorrect/</span> <span style={{ fontSize: 'large' }}>false,</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>if</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee</span> <span style={{ fontSize: 'large' }}>has</span> <span style={{ fontSize: 'large' }}>suppressed</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>material</span> <span style={{ fontSize: 'large' }}>information,</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>shall </span><span style={{ fontSize: 'large' }}>have</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>option</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>terminating</span> <span style={{ fontSize: 'large' }}>this</span> <span style={{ fontSize: 'large' }}>Agreement</span> <span style={{ fontSize: 'large' }}>forthwith</span> <span style={{ fontSize: 'large' }}>without</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>prior</span> <span style={{ fontSize: 'large' }}>notice</span> <span style={{ fontSize: 'large' }}>or</span> <span style={{ fontSize: 'large' }}>salary</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>lieu </span><span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>such</span> <span style={{ fontSize: 'large' }}>notice</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee.</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol start={3}>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>This</span> <span style={{ fontSize: 'large' }}>Agreement</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>supersede</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>prior</span> <span style={{ fontSize: 'large' }}>agreements/</span> <span style={{ fontSize: 'large' }}>understandings</span> <span style={{ fontSize: 'large' }}>between</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company</span> <span style={{ fontSize: 'large' }}>and </span><span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee.</span> <span style={{ fontSize: 'large' }}>Any</span> <span style={{ fontSize: 'large' }}>amendment/</span> <span style={{ fontSize: 'large' }}>alteration</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>this</span> <span style={{ fontSize: 'large' }}>Agreement</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>writing</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>be </span><span style={{ fontSize: 'large' }}>signed</span> <span style={{ fontSize: 'large' }}>by</span> <span style={{ fontSize: 'large' }}>both</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>parties.</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol start={4}>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>If,</span> <span style={{ fontSize: 'large' }}>for</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>reason,</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>provision</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>this</span> <span style={{ fontSize: 'large' }}>Agreement</span> <span style={{ fontSize: 'large' }}>is</span> <span style={{ fontSize: 'large' }}>held</span> <span style={{ fontSize: 'large' }}>invalid,</span> <span style={{ fontSize: 'large' }}>all</span> <span style={{ fontSize: 'large' }}>other</span> <span style={{ fontSize: 'large' }}>provisions</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>this </span><span style={{ fontSize: 'large' }}>Agreement</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>remain</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>full</span> <span style={{ fontSize: 'large' }}>force</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>eﬀect.</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }} start={9}>
                                <li> <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}><u>DISPUTE</u></span><u> </u><span style={{ fontSize: 'large' }}><u>RESOLUTION</u></span><u> </u><span style={{ fontSize: 'large' }}><u>AND</u></span><u> </u><span style={{ fontSize: 'large' }}><u>GOVERNING</u></span><u> </u><span style={{ fontSize: 'large' }}><u>LAW:</u></span></span></p> </li>
                            </ol>

                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>In</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>event</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>any</span> <span style={{ fontSize: 'large' }}>dispute</span> <span style={{ fontSize: 'large' }}>between</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>parties,</span> <span style={{ fontSize: 'large' }}>such</span> <span style={{ fontSize: 'large' }}>dispute</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>referred</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>sole </span><span style={{ fontSize: 'large' }}>arbitrator</span> <span style={{ fontSize: 'large' }}>appointed</span> <span style={{ fontSize: 'large' }}>by</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company.</span> <span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>place</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>arbitration</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>Bengaluru.</span> <span style={{ fontSize: 'large' }}>The</span> <span style={{ fontSize: 'large' }}>award </span><span style={{ fontSize: 'large' }}>passed</span> <span style={{ fontSize: 'large' }}>by</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Arbitrator</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>ﬁnal</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>binding</span> <span style={{ fontSize: 'large' }}>on</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>parties.</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <p className="western" style={{ textAlign: 'justify' }}>&nbsp;</p>
                            <ol style={{ textAlign: 'justify' }}>
                                <ol start={2}>
                                    <li>
                                        <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>Subject</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>Clause</span> <span style={{ fontSize: 'large' }}>9.1,</span> <span style={{ fontSize: 'large' }}>this</span> <span style={{ fontSize: 'large' }}>Agreement</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>governed</span> <span style={{ fontSize: 'large' }}>by</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>laws</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>India</span> <span style={{ fontSize: 'large' }}>irrespective</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>conﬂict of</span> <span style={{ fontSize: 'large' }}>law</span> <span style={{ fontSize: 'large' }}>provisions</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Courts</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>Bengaluru</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>have</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>exclusive</span> <span style={{ fontSize: 'large' }}>jurisdiction</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>deal</span> <span style={{ fontSize: 'large' }}>with</span> <span style={{ fontSize: 'large' }}>the </span><span style={{ fontSize: 'large' }}>disputes</span> <span style={{ fontSize: 'large' }}>arising</span> <span style={{ fontSize: 'large' }}>out</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>this</span> <span style={{ fontSize: 'large' }}>Agreement.</span></span></p>
                                    </li>
                                </ol>
                            </ol>
                            <br />
                            <p>&nbsp;</p>

                        </div>



                    </div>
                </div >


                <div class="card" id="pageA4">
                    <div class="card-body">

                        <div>
                            <ol start={10}>
                                <li>
                                    <p align="JUSTIFY"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>Notice:</span> <span style={{ fontSize: 'large' }}>Any</span> <span style={{ fontSize: 'large' }}>notice</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>other</span> <span style={{ fontSize: 'large' }}>communications</span> <span style={{ fontSize: 'large' }}>provided</span> <span style={{ fontSize: 'large' }}>for</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>this</span> <span style={{ fontSize: 'large' }}>Agreement</span> <span style={{ fontSize: 'large' }}>shall</span> <span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>writing</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>shall </span><span style={{ fontSize: 'large' }}>be</span> <span style={{ fontSize: 'large' }}>ﬁrst</span> <span style={{ fontSize: 'large' }}>transmitted</span> <span style={{ fontSize: 'large' }}>by</span> <span style={{ fontSize: 'large' }}>email</span> <span style={{ fontSize: 'large' }}>and</span> <span style={{ fontSize: 'large' }}>then</span> <span style={{ fontSize: 'large' }}>conﬁrmed</span> <span style={{ fontSize: 'large' }}>by</span> <span style={{ fontSize: 'large' }}>Speed</span> <span style={{ fontSize: 'large' }}>Post,</span> <span style={{ fontSize: 'large' }}>in</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>manner</span> <span style={{ fontSize: 'large' }}>as</span> <span style={{ fontSize: 'large' }}>elected</span> <span style={{ fontSize: 'large' }}>by</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Party </span><span style={{ fontSize: 'large' }}>giving</span> <span style={{ fontSize: 'large' }}>such</span> <span style={{ fontSize: 'large' }}>notice</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>following</span> <span style={{ fontSize: 'large' }}>addresses:</span></span></p>
                                </li>
                            </ol>
                            <ol type="a">
                                <li>
                                    <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>In</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>case</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>notices</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Company:</span></span></p>
                                </li>
                            </ol>
                            <p className="western" style={{ paddingLeft: 60 }}>Address: 50, Brigade MLR, Vani Vilas Road, Basavanagudi, Bangalore 560004</p>
                            <p className="western" style={{ paddingLeft: 60 }}>Attention : HR Department</p>
                            <p className="western" style={{ paddingLeft: 60 }}>E-mail : <a href="mailto:hr@testyantra.com">hr@testyantra.com</a></p>
                            <p className="western">&nbsp;</p>
                            <ol start={2} type="a">
                                <li>
                                    <p align="LEFT"><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'large' }}>In</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>case</span> <span style={{ fontSize: 'large' }}>of</span> <span style={{ fontSize: 'large' }}>notices</span> <span style={{ fontSize: 'large' }}>to</span> <span style={{ fontSize: 'large' }}>the</span> <span style={{ fontSize: 'large' }}>Employee</span></span></p>
                                </li>
                            </ol>
                            <p className="western" style={{ paddingLeft: 60 }}>Address :</p>
                            <p className="western" style={{ paddingLeft: 60 }}>Telephone :</p>
                            <p className="western" style={{ paddingLeft: 60 }}>E-mail :</p>
                            <p className="western">&nbsp;</p>
                            <p className="western" align="JUSTIFY">All notices shall be deemed to have been validly given on (a) the Business Day immediately after the date of transmission with conﬁrmed answer back, if transmitted by facsimile/electronic transmission, or (b) the Business Day of receipt, if transmitted by courier or registered airmail.</p>
                            <p className="western">&nbsp;</p>
                            <p className="western" align="JUSTIFY">Any Party may, from time to time, change its address or representative for receipt of notices provided for in this Agreement by giving to the other Party not less than 30 days prior written notice.</p>
                            <p className="western">&nbsp;</p>
                            <p className="western" align="JUSTIFY">IN WITNESS THEREOF the parties hereto have set and subscribed their respective signatures and seal on the day, month and year ﬁrst written herein above:</p>
                            <p className="western">&nbsp;</p>
                            <div>
                                <p className="western" style={{ float: 'left', width: 500 }} >M/s Test Yantra Software Solutions (India) Pvt. Ltd, represented by its authorised signatory</p>
                                <p className="western" style={{ float: 'left', width: 300 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Employee</p></div>
                            <p className="western">&nbsp;</p>
                            <p className="western">&nbsp;</p>
                            <p className="western">&nbsp;</p>
                            <p className="western">&nbsp;</p>
                            <p className="western">&nbsp;</p>
                            <div><strong className="western" style={{ float: 'left', width: 400, fontSize: 'medium' }}>---------------------------------</strong><strong style={{ float: 'right', width: 300, fontSize: 'medium' }}>---------------------------</strong></div>
                            <p className="western">&nbsp;</p>
                            <div>
                                <p className="western" style={{ float: 'left', width: 400 }}>&nbsp;Authorised Signatory</p > <p style={{ float: 'right', width: 300 }}> Name:</p>
                            </div>
                            <p className="western" style={{ textAlign: 'right' }}>&nbsp;</p>
                            <p className="western">&nbsp;</p>
                            <p className="western">&nbsp;</p>
                            <p className="western">&nbsp;</p>
                            <p className="western" align="LEFT"><span style={{ fontFamily: 'Tinos, serif' }}><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'small' }}>&nbsp;</span></span></span></p>
                            <p className="western" align="CENTER"><span style={{ fontFamily: 'Tinos, serif' }}><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'small' }}>50,</span> <span style={{ fontSize: 'small' }}>2<sup>nd</sup> </span><span style={{ fontSize: 'small' }}>Floor,</span> <span style={{ fontSize: 'small' }}>Brigade</span> <span style={{ fontSize: 'small' }}>MLR</span> <span style={{ fontSize: 'small' }}>Centre,</span> <span style={{ fontSize: 'small' }}>Vani</span> <span style={{ fontSize: 'small' }}>Vilas</span> <span style={{ fontSize: 'small' }}>Road,</span> <span style={{ fontSize: 'small' }}>Basavanagudi</span> <span style={{ fontSize: 'small' }}>Bangalore</span> <span style={{ fontSize: 'small' }}>560004</span> <a href="http://www.testyantra.com/"><span style={{ color: '#0462c1' }}><span style={{ fontSize: 'small' }}><u>www.testyantra.com</u></span></span></a></span></span></p>
                            <p className="western" align="CENTER"><span style={{ fontFamily: 'Tinos, serif' }}><span style={{ fontSize: 'large' }}><span style={{ fontSize: 'small' }}>Phone: 91-(080)-41204235</span></span></span></p>
                        </div>

                    </div>
                </div >

                <div>

                    <a style={{ float: "right", marginRight: "340px", marginTop: "20px" }} class="btn btn-primary" onClick={this.convertpdf.bind(this)}>Generate Pdf</a>
                </div>
            </div>


        )
    }
}
