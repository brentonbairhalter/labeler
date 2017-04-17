import React from "react";
import _ from "lodash";

import Label from './label.jsx'

//@TODO: build up a cart and render labels for multiple labels

export default class extends React.Component {
    render() {
        let labelCount = 10;

        return (
            <div id="elr_labels" className={'selected-template'}>
                <div className={'-title ' + this.showSelectedField('title')}><span>Title</span> {this.props.title}</div>
            </div>
        );

        _.each(labelCount, function(n, i) {
            labels.push(
                <Label/>
            )
        });
    }
};
