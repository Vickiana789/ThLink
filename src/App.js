import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from "./Pages/Home";
import FAQ from "./Pages/FAQ";
import Map from "./Pages/Map";
import Areas from "./Pages/Areas";
import Provisions from "./Pages/Provisions";
import TeacherApp from "./Pages/TeacherApp";
import TeacherRequirments from "./Pages/TeacherRequirments";

import NavBar from "./NavBar";


const pages = [
    { name: "Home", component: Home },
    { name: "Areas In Need", component: Areas },
    { name: "FAQ", component: FAQ },
    { name: "Map", component: Map },
    { name: "Provisions", component: Provisions },
    { name: "Teacher Application", component: TeacherApp },
    { name: "Teacher Requirments", component: TeacherRequirments },
];

class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            page: Home
        };

        this.navigate = this.navigate.bind(this);
    }

    navigate(page) {
        this.setState({ page });
    }

    render() {
        const Page = this.state.page;
        return (
            <div className="app">
                <NavBar pages={pages} onChange={this.navigate} />
                <Page />
            </div>
        );
    }
}


export default App;
