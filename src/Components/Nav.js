import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';


export default class Nav extends Component {

    onButtonClick = e => {
        this.props.onClick(e.target.innerText);
    }

render() {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/cars" onClick={this.onButtonClick}>Cars</NavLink></li>
                <li><NavLink to="/trucks" onClick={this.onButtonClick}>Trucks</NavLink></li>
                <li><NavLink to="/Mexico" onClick={this.onButtonClick}>Mexico</NavLink></li>
            </ul>
        </nav>
    )
}
}
