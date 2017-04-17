import React from "react";
import _ from "lodash";

export default class extends React.Component {
    render() {
    let vgRow = [],
        sels = this.props.selections;

        _.each(this.props.vg, function(n, i) {
            const show = _.includes(sels, i) ? 'show' : 'hide';
            vgRow.push(
                <span key={i} className={i + ' ' + show}>{n}</span>
                )
        });

        return (
            <div className={'prev-row-vg ' + this.props.show}>{vgRow}</div>
        );
    }
};
