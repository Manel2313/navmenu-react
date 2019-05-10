import React, { Component } from 'react';
import './navmenu.css'
class Navmenu extends Component {
    constructor (props){
        super(props)
        this.state=({
            test:true,
            style:'droppy'

        })
    }
    click=()=>{
        if (this.state.test===false)
            this.setState ({
                style: 'droppy',
                test:true
            })
            else {
                this.setState({style:'drop-menu',
                test:false
            })
            }
    }
    render() { 
        return ( 
            <div className="menu">
                <ul className="navbar">
                    <li className="nav-item">Home</li>
                    <li className="nav-item item-drop" onClick={this.click}>Services
                        <ul id={this.state.style}>
                            <li className="dropped">For entrepreneurs</li>
                            <li className="dropped">For students</li>
                            <li className="dropped">For hobbyists</li>
                        </ul>
                    </li>
                    <li className="nav-item">Contact</li>
                </ul>
            </div>
        );
    }
}
 
export default Navmenu;