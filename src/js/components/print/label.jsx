import React from "react";
import _ from "lodash";


export default class extends React.Component {
    render() {
        let sels = this.props.selections;

        _.each(this.props.flavors, function(n, i) {
            labels.push(
                <div key={i} className={'col ' + i + ' ' + show}><span className="heading">{i}</span><br/><FlavorItem item={n}/></div>
            )
        });

        return (
            <div id="elr_labels" className={this.state.templateSelection}>
                <div className={'-title ' + this.showSelectedField('title')}><span>Title</span> {this.props.title}</div>
                {/*<div className={'prev-date ' + this.showSelectedField('date')}><span>Date</span> {this.getDate()}</div>*/}
                {/*<div className={'prev-user ' +  this.showSelectedField('user')}><span>User</span> {this.props.user}</div>*/}
                {/*<NicRow nic={this.props.nic} show={this.showSelectedField('nic')} selections={this.state.nicSelection}/>*/}
                {/*<BaseRow base={this.props.base} show={this.showSelectedField('base')} selections={this.state.baseSelection}/>*/}
                {/*<PGRow pg={this.props.pg} show={this.showSelectedField('pg')} selections={this.state.pgSelection}/>*/}
                {/*<VGRow vg={this.props.vg} show={this.showSelectedField('vg')} selections={this.state.vgSelection}/>*/}
                {/*<FlavorRows flavors={this.props.flavors} show={this.showSelectedField('flavors')} selections={this.state.flavorSelection}/>*/}
            </div>        );
    }
};
