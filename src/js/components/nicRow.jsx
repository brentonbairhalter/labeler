import React from "react";
import _ from "lodash";

export default class extends React.Component {
    render() {
        let nicRow = [],
            sels = this.props.selections;

        _.each(this.props.nic, function(n, i) {
            const show = _.includes(sels, i) ? 'show' : 'hide';
            nicRow.push(
                <span key={i} className={i + ' ' + show}>{n}</span>
                )
        });

        return (
            <div className={'prev-row-nic ' + this.props.show}>{nicRow}</div>
        );
    }
};
