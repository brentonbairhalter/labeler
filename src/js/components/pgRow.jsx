import React from "react";
import _ from "lodash";

export default class extends React.Component {
    render() {
        let pgRow = [],
            sels = this.props.selections;

        _.each(this.props.pg, function(n, i) {
            const show = _.includes(sels, i) ? 'show' : 'hide';
            pgRow.push(
                <span key={i} className={i + ' ' + show}>{n}</span>
                )
        });

        return (
            <div className={'prev-row-pg ' + this.props.show}>{pgRow}</div>
        );
    }
};
