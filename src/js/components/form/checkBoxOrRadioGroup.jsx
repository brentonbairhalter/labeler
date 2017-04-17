import React from 'react';
import PropTypes from 'prop-types';

export default class checkBoxOrRadioGroup extends React.Component {
    constructor() {
        super();
        checkBoxOrRadioGroup.propTypes = {
            title: PropTypes.string,
            type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
            setName: PropTypes.string.isRequired,
            options: PropTypes.array.isRequired,
            selectedOptions: PropTypes.array,
            controlFunc: PropTypes.func.isRequired
        };
    }

    render() {
        return (
            <div>
                <label className="form-label">{this.props.title}</label>
                <div className="checkbox-group">
                    {this.props.options.map(opt => {
                        return (
                            <label key={opt} className="form-label">
                                <input
                                    className="form-checkbox"
                                    name={this.props.setName}
                                    onChange={this.props.controlFunc}
                                    value={opt}
                                    checked={ this.props.selectedOptions.indexOf(opt) > -1 }
                                    type={this.props.type} /> {opt}
                            </label>
                        );
                    })}
                </div>
            </div>
        )
    }


};
