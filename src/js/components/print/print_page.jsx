import React from "react";
import _ from "lodash";

import Labels from './labels.jsx'

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
            flavors: {}
        }}
    }

    componentDidMount() {
        let that = this;
        chrome.tabs.getSelected(null, function (tab) {
            let port = chrome.runtime.connect({
                name: "Print Labels"
            });
            port.postMessage("printLabels");
            port.onMessage.addListener(function (data) {
                console.log('DATA!!! ', data);
                that.setState({data})
            });
        });
    }

    render() {
        return (
            <div>
                <Labels selections="{}"/>
            </div>
        );
    }
};
