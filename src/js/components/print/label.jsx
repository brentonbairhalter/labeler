import React from "react";
import _ from "lodash";

import FlavorRows from "../flavorRows.jsx";


export default class extends React.Component {

    render() {
        let label = [];
        if (this.props.fields) {
            console.log('labelsss: ', typeof this.props.fields);

            _.each(this.props.fields, (n, i)=> {
                let labelRows = [];
                // console.log('making label', n);

                _.each(n, function(k, v) {
                    console.log('in the label: ', k);
                    let labelFields = [];
                    let labelVals = [];

                    _.each(k, (it, vl)=> {
                        console.log('in the field', it.item, it.values.length);

                        if (_.isObject(it.values)) {
                            _.each(it.values, (v, ct)=> {
                                console.log('in the vals', v, ct);

                                labelVals.push(
                                    <span key={v + ct + v}>{v}</span>
                                );
                            });
                        } else {
                            labelVals.push(
                                <span key={v + vl + v}>{it.values}</span>
                            );
                        }

                        labelFields.push(
                            <span key={vl + v + i}>{it.item} {labelVals}</span>
                        );

                    });

                    labelRows.push(
                        <div key={i + v} className={'label-row '}>{k[0].field} {labelFields}</div>
                    );
                });

                label.push(
                    <div key={i} className="label-wrapper">
                        {labelRows}
                    </div>
                )
            });
        }

        return (
            <div>
                {label}
            </div>
        );
    }
};
