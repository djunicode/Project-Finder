import React, { Component } from 'react';
import Navbar from '../Navbar';
import Header from '../Header';
import MyProjects from './MyProjects';
class MyCreation extends Component {
    constructor(props){
        super(props);
        this.state = {
            projects: [{id: 1}, {id:2}, {id:3}]
        }
    }
    render() {
        return (
            <div>
                <Navbar />
                <Header title="My Creation" />
                <MyProjects projects={this.state.projects} />
            </div>
        );
    }
}

export default MyCreation;