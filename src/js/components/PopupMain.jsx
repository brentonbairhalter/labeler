import React from "react";
import _ from "lodash";

// Form Components
import FormContainer from "./form/formContainer.jsx";

export default class extends React.Component {
    constructor() {
        super();
        this.state = {data: {
            user: 'Hello',
            title: 'E-L-L',
            nic: {},
            base: {},
            pg: {},
            vg: {},
            flavors: {},
            date: ''
        }}
    }

    componentDidMount() {
        let that = this;
        chrome.tabs.getSelected(null, function (tab) {
            let port = chrome.runtime.connect({
                name: "Get Recipes"
            });
            port.postMessage("getRecipe");
            port.onMessage.addListener(function (data) {
                that.setState({data})
            });
        });
    }

    render() {
        return (
            <div>
                <h1>E-Liquid Labeler</h1>
                <div className="logo">
                    <img src="images/icon.png"/>
                </div>
                <FormContainer title={this.state.data.title} user={this.state.data.user} nic={this.state.data.nic} base={this.state.data.base} pg={this.state.data.pg} vg={this.state.data.vg} flavors={this.state.data.flavors} date={this.state.data.date}/>
            </div>
        );
    }
};
