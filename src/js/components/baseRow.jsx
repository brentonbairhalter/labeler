import React from "react";
import _ from "lodash";

export default class extends React.Component {
    render() {
        let baseRow = [],
            sels = this.props.selections;

        _.each(this.props.base, function(n, i) {
            const show = _.includes(sels, i) ? 'show' : 'hide';
            baseRow.push(
                <span key={i} className={i + ' ' + show}>{n}</span>
                )
        });

            return (
                <div className={'prev-row-base ' + this.props.show}>{baseRow}</div>
            );
        }
};
