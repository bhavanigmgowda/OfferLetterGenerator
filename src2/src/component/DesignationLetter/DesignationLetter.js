import React, { Component } from 'react'
import '../HRLetter.css'



export class DesignationLetter extends Component {

    constructor(props) {
        super(props);

    }



    render() {
        var employee = {
            Date: 'dadas',
            EmployeeName: 'dda',
            EmployeeId: 'dsadad',
            Designation: 'dasdd',
            CIN: 'saddada'

        }
        return (
            <div>
                <div className="card" id="pageA4">
                    <div className="card-body">
                        <div>
                        <p style={{float:'right'}}>CIN: U72200KA2007PTC044701</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30,paddingRight:30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30,paddingRight:30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30,paddingRight:30 }}><strong>&nbsp;</strong><strong>07<sup>th</sup> May 2019</strong></p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30,paddingRight:30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30,paddingRight:30 }}>To,</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30,paddingRight:30 }}><strong>Abhay Shankar Sonu</strong>,</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30,paddingRight:30 }}>TYP466</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30,paddingRight:30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30,paddingRight:30 }}>Dear <strong>Abhay Shankar Sonu</strong>,</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30,paddingRight:30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30,paddingRight:30 }}>We are pleased to inform; your designation has been changed as <strong>QA Lead - Performance </strong>effective <strong>1<sup>st </sup>April 2019</strong>. Other terms and conditions remain the same as per the appointment letter.</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30,paddingRight:30 }}>Kindly sign and return the duplicate of this letter as a token of your acceptance of the above terms and conditions.</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30,paddingRight:30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30,paddingRight:30 }}>With best wishes,</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30,paddingRight:30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30,paddingRight:30 }}>&nbsp;</p>
                            <p style={{ textAlign: 'justify', paddingLeft: 30,paddingRight:30 }}>Authorized Signatory</p>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default DesignationLetter
