import React from "react";
import _ from "lodash";

export default class extends React.Component {
    render() {
        let flavorItems = [];
        let idx = 0;
        _.each(this.props.item, function(n, i) {
            flavorItems.push(
                <span className="item" key={idx}>{n}</span>
            );
            idx += 1;
        });

        return (
            <span className="items">{flavorItems}</span>
        );
    }
};
