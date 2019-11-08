import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        const style={
            
        }
        return (
            <div style={{display:"inline"}}>
                <div style={{background: '#494d51ba'}} class="container-fluid">
                    <nav   class="navbar navbar-expand-lg">
                        <button style={{marginLeft: '97%'}} type="button" class="btn btn-success"><i class="fas fa-print"></i></button>
                    </nav>
                </div>
            </div>
        )
    }
}
