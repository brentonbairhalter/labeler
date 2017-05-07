import React from "react";
import _ from "lodash";

import BaseRow from "../baseRow.jsx";
import PGRow from "../pgRow.jsx";
import VGRow from "../vgRow.jsx";
import NicRow from "../nicRow.jsx";
import FlavorRows from "../flavorRows.jsx";


//@TODO: build up a cart and render labels for multiple labels

export default class extends React.Component {
    showOrHide(match) {
        //eventually filter these out of the obj
        return _.includes(this.props.selections.selectedFields, match) ? 'show' : 'hide';
    }

    render() {
        let labelCount =  3,
            labelBoxes = [];

        if (_.has(this.props, 'selections.selectedFields') && _.has(this.props, 'available')) {
            let labelCount = this.props.selections.numberSelection;
            for (let i = 1; i <= labelCount; i++) {
                labelBoxes.push(
                    <div className={'label-wrapper template-' + this.props.selections.templateSelection} key={i + 'label'}>
                        <div className={'meta prev-title ' + this.showOrHide('title')}>{this.props.available.title}</div>
                        <div className={'meta prev-date ' + this.showOrHide('date')}>{this.props.available.date}</div>
                        <div className={'meta prev-user ' +  this.showOrHide('user')}>{this.props.available.user}</div>
                        <NicRow nic={this.props.available.nic} show={this.showOrHide('nic')} selections={this.props.selections.nicSelection}/>
                        <BaseRow base={this.props.available.base} show={this.showOrHide('base')} selections={this.props.selections.baseSelection}/>
                        <PGRow pg={this.props.available.pg} show={this.showOrHide('pg')} selections={this.props.selections.pgSelection}/>
                        <VGRow vg={this.props.available.vg} show={this.showOrHide('vg')} selections={this.props.selections.vgSelection}/>
                        <FlavorRows flavors={this.props.available.flavors} show={this.showOrHide('flavors')} selections={this.props.selections.flavorSelection}/>
                    </div>
                );
            };
        }

        return (
            <div id="elr_labels" className={'selected-template'}>
                {labelBoxes}
            </div>
        );
    }
};
