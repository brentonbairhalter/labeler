import React from "react";
import _ from "lodash";

import Label from './label.jsx'

import NicRow from "../nicRow.jsx";


//@TODO: build up a cart and render labels for multiple labels

export default class extends React.Component {
    render() {
        let labelCount = this.props.count || 1,
            labelBoxes = {};

        for (let i = 1; i <= labelCount; i++) {
                labelBoxes[i] = {};
            if (_.has(this.props, 'selections.selectedFields') && _.has(this.props, 'available')) {
                // console.log('props.selections.selectedFs: ', this.props.selections.selectedFields);
                _.each(this.props.selections.selectedFields, (field, idx)=> {
                    const selName = field + 'Selection';
                    labelBoxes[i][field] = [];

                    if (_.isObject(this.props.selections[selName])) {
                        _.each(this.props.selections[selName], (item, idx)=> {
                            // console.log('field selected: ', r);
                            // console.log('each selected: ', dpName);
                            // console.log('value from available: ',dpName,  this.props.available[r][dpName]);
                            labelBoxes[i][field].push(
                                {field, item, values: this.props.available[field][item]}
                            );
                        });
                    } else {
                        labelBoxes[i][field].push(
                            {field, item: field, values: this.props.available[field]}
                        );
                    }
                });
            };
        };

        return (
            <div id="elr_labels" className={'selected-template'}>
                {console.log('sending this to Label', labelBoxes)}
                <Label fields={labelBoxes}/>
            </div>
        );
    }
};
