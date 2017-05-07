import React from "react";
import _ from "lodash";

import FlavorItem from "./flavorItem.jsx";


export default class extends React.Component {
    render() {
        let flavorRows = [],
            sels = this.props.selections;

        _.each(this.props.flavors, function(n, i) {
            const show = _.includes(sels, i) ? 'show' : 'hide';
            const layout = sels.length === 1 && show ? 'row' : 'cols';

            flavorRows.push(
                <div key={i} className={'col ' + i + ' ' + show + ' ' + layout}><span className="heading">{i}</span><FlavorItem item={n}/></div>
            )
        });

        return (
            <div className={'prev-row-flavors ' + this.props.show}>{flavorRows}</div>
        );
    }
};
