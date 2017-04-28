import React, {Component} from 'react';
import NavBar from 'components/NavBar/NavBar'
export default class App extends Component{
    render() {
        <NavBar/>
        <div> {this.props.children}</div>
    }
}