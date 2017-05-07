import React from "react";
import { render } from "react-dom";
import _ from "lodash";

import CheckBoxOrRadioGroup from "./checkBoxOrRadioGroup.jsx";
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


// Preview Region Components
import BaseRow from "../baseRow.jsx";
import PGRow from "../pgRow.jsx";
import VGRow from "../vgRow.jsx";
import NicRow from "../nicRow.jsx";
import FlavorRows from "../flavorRows.jsx";

/*
@TODO: add defaults from options preferences
@TODO: click items to show hide
@TODO: move subfields to compontens?
*/
const allDefaults = {
    fieldOptions:   ['title', 'user', 'date', 'nic', 'base', 'pg', 'vg', 'flavors'],
    nicOptions:     ['label', 'mg', 'rat', 'ml', 'drops', 'grams', 'per'],
    baseOptions:    ['label', 'rat', 'ml', 'drops', 'grams', 'per'],
    pgOptions:      ['label', 'ml', 'drops', 'grams', 'per'],
    vgOptions:      ['label', 'ml', 'drops', 'grams', 'per'],
    flavorOptions:  ['flavor', 'ml', 'drops', 'grams', 'per']
};

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            templateOptions: [],
            templateSelection: [],
            numberOptions: [],
            numberSelection: [],
            fieldOptions: [],
            selectedFields: [],
            allFieldsOptions: [],
            allFields: [],
            nicOptions: [],
            nicSelection: [],
            baseOptions: [],
            baseSelection: [],
            pgOptions: [],
            pgSelection: [],
            vgOptions: [],
            vgSelection: [],
            flavorOptions: [],
            flavorSelections: [],
            genDate: ''
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount() {
        //@TODO: grab these from options prefs to default
        this.setState({
            templateSelection: [1],
            numberOptions: ['1', '3', '5', '10'],
            numberSelection: ['1'],
            fieldOptions: allDefaults.fieldOptions,
            selectedFields: allDefaults.fieldOptions,
            allFieldsOptions: ['all', 'select'],
            allFields: ['all'],
            nicOptions: allDefaults.nicOptions,
            nicSelection: allDefaults.nicOptions,
            baseOptions: allDefaults.baseOptions,
            baseSelection: allDefaults.baseOptions,
            pgOptions: allDefaults.pgOptions,
            pgSelection: allDefaults.pgOptions,
            vgOptions: allDefaults.vgOptions,
            vgSelection: allDefaults.vgOptions,
            flavorOptions: allDefaults.flavorOptions,
            flavorSelection: ['flavor'],
            genDate: true
        });
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleTemplateSelection = this.handleTemplateSelection.bind(this);
        this.handleNumberSelection = this.handleNumberSelection.bind(this);
        this.handleFieldSelection = this.handleFieldSelection.bind(this);
        this.handleAllFields = this.handleAllFields.bind(this);
        this.handleBaseSelection = this.handleBaseSelection.bind(this);
        this.handleNicSelection = this.handleNicSelection.bind(this);
        this.handlePGSelection = this.handlePGSelection.bind(this);
        this.handleVGSelection = this.handleVGSelection.bind(this);
        this.handleFlavorSelection = this.handleFlavorSelection.bind(this);
        this.handleDateSelection = this.handleDateSelection.bind(this);
    }

    handleTemplateSelection(e, i, v) {
        this.setState({ templateSelection: v });
    }

    handleNumberSelection(e) {
        this.setState({ numberSelection: [e.target.value] });
    }

    handleFieldSelection(e) {
        const newSelection = e.target.value;
        let newSelectionArray;
        if(this.state.selectedFields.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.selectedFields.filter(s => s !== newSelection)
        } else {
            newSelectionArray = [...this.state.selectedFields, newSelection];
        }
        this.setState({ selectedFields: newSelectionArray, allFields: ['select'] });
    }

    handleAllFields(e) {
        const allFields = e.target.value;
        if (allFields === 'all') {
            this.setState({ allFields: [allFields], selectedFields: allDefaults.fieldOptions });
        } else {
            this.setState({ allFields: [allFields] });
        }
    }

    handleBaseSelection(e) {
        const newSelection = e.target.value;
        let newSelectionArray;

        if(this.state.baseSelection.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.baseSelection.filter(s => s !== newSelection)
        } else {
            newSelectionArray = [...this.state.baseSelection, newSelection];
        }
        this.setState({ baseSelection: newSelectionArray });
    }

    handleNicSelection(e) {
        const newSelection = e.target.value;
        let newSelectionArray;

        if(this.state.nicSelection.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.nicSelection.filter(s => s !== newSelection)
        } else {
            newSelectionArray = [...this.state.nicSelection, newSelection];
        }
        this.setState({ nicSelection: newSelectionArray });
    }

    handlePGSelection(e) {
        const newSelection = e.target.value;
        let newSelectionArray;

        if(this.state.pgSelection.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.pgSelection.filter(s => s !== newSelection)
        } else {
            newSelectionArray = [...this.state.pgSelection, newSelection];
        }
        this.setState({ pgSelection: newSelectionArray });
    }

    handleVGSelection(e) {
        const newSelection = e.target.value;
        let newSelectionArray;

        if(this.state.vgSelection.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.vgSelection.filter(s => s !== newSelection)
        } else {
            newSelectionArray = [...this.state.vgSelection, newSelection];
        }
        this.setState({ vgSelection: newSelectionArray });
    }

    handleFlavorSelection(e) {
        const newSelection = e.target.value;
        let newSelectionArray;

        if(this.state.flavorSelection.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.flavorSelection.filter(s => s !== newSelection)
        } else {
            newSelectionArray = [...this.state.flavorSelection, newSelection];
        }
        this.setState({ flavorSelection: newSelectionArray });
    }

    handleDateSelection (e) {
        this.setState({ genDate: e.target.value });
    }

    showSelectedField(match) {
        return _.includes(this.state.selectedFields, match) ? 'show' : 'hide';
    }

    handleResetForm(e) {
        e.preventDefault();
        // share this default obj
        this.setState({
            //restore defaults
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();
        const formPayload = {
            selections: {
                templateSelection: this.state.templateSelection,
                numberSelection: this.state.numberSelection,
                selectedFields: this.state.selectedFields,
                templateSelection: this.state.templateSelection,
                selectedFields: this.state.selectedFields,
                nicSelection: this.state.nicSelection,
                baseSelection: this.state.baseSelection,
                pgSelection: this.state.pgSelection,
                vgSelection: this.state.vgSelection,
                flavorSelection: this.state.flavorSelection,
                dateSelection: this.state.genDate
            },
            available: this.props
        };

        chrome.runtime.sendMessage({ action: 'print', data: formPayload});

    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleFormSubmit}>
                <SelectField
                    labelStyle={{ color: 'gray' }}
                    floatingLabelText={"Which layout template?"}
                    value={this.state.templateSelection}
                    onChange={this.handleTemplateSelection}
                >
                    <MenuItem value={1} primaryText="2.63 x 1 (in)" />
                    <MenuItem value={2} primaryText="3 x 2 (in)" />
                    <MenuItem value={3} primaryText="3.5 x 2.5 (in)" />
                    <MenuItem value={4} primaryText="3 x 3 (in)" />
                </SelectField>
                <CheckBoxOrRadioGroup
                    title={'How many labels?'}
                    setName={'number'}
                    controlFunc={this.handleNumberSelection}
                    type={'radio'}
                    options={this.state.numberOptions}
                    selectedOptions={this.state.numberSelection} />
                <div className="group fields">
                    <h2>Fields</h2>
                    <CheckBoxOrRadioGroup
                        setName={'selectAll'}
                        controlFunc={this.handleAllFields}
                        type={'radio'}
                        options={this.state.allFieldsOptions}
                        selectedOptions={this.state.allFields} />
                    <CheckBoxOrRadioGroup
                        title={'Which fields?'}
                        setName={'fieldItems'}
                        type={'checkbox'}
                        controlFunc={this.handleFieldSelection}
                        options={this.state.fieldOptions}
                        selectedOptions={this.state.selectedFields} />
                    <div className={'sub-fields nic ' + this.showSelectedField('nic')}>
                        <CheckBoxOrRadioGroup
                            title={'Which nic items?'}
                            setName={'nicItems'}
                            type={'checkbox'}
                            controlFunc={this.handleNicSelection}
                            options={this.state.nicOptions}
                            selectedOptions={this.state.nicSelection} />
                    </div>
                    <div className={'sub-fields base ' + this.showSelectedField('base')}>
                        <CheckBoxOrRadioGroup
                            title={'Which base items?'}
                            setName={'baseItems'}
                            type={'checkbox'}
                            controlFunc={this.handleBaseSelection}
                            options={this.state.baseOptions}
                            selectedOptions={this.state.baseSelection} />
                    </div>
                    <div className={'sub-fields pg ' + this.showSelectedField('pg')}>
                        <CheckBoxOrRadioGroup
                            title={'Which pg items?'}
                            setName={'pgItems'}
                            type={'checkbox'}
                            controlFunc={this.handlePGSelection}
                            options={this.state.pgOptions}
                            selectedOptions={this.state.pgSelection} />
                    </div>
                    <div className={'sub-fields vg ' + this.showSelectedField('vg')}>
                        <CheckBoxOrRadioGroup
                            title={'Which vg items?'}
                            setName={'vgItems'}
                            type={'checkbox'}
                            controlFunc={this.handleVGSelection}
                            options={this.state.vgOptions}
                            selectedOptions={this.state.vgSelection} />
                    </div>
                    <div className={'sub-fields flavors ' + this.showSelectedField('flavors')}>
                        <CheckBoxOrRadioGroup
                            title={'Which flavor items?'}
                            setName={'flavorItems'}
                            type={'checkbox'}
                            controlFunc={this.handleFlavorSelection}
                            options={this.state.flavorOptions}
                            selectedOptions={this.state.flavorSelection} />
                    </div>
                </div>
                <RaisedButton type="submit" label="Print Labels" fullWidth={true}/>
            </form>
            <div id="elr_preview">
                <div id="elr_preview_stage" className={this.state.templateSelection}>
                    <div className={'prev-title ' + this.showSelectedField('title')}><span>Title</span> {this.props.title}</div>
                    <div className={'prev-date ' + this.showSelectedField('date')}><span>Date</span> {this.props.date}</div>
                    <div className={'prev-user ' +  this.showSelectedField('user')}><span>User</span> {this.props.user}</div>
                    <NicRow nic={this.props.nic} show={this.showSelectedField('nic')} selections={this.state.nicSelection}/>
                    <BaseRow base={this.props.base} show={this.showSelectedField('base')} selections={this.state.baseSelection}/>
                    <PGRow pg={this.props.pg} show={this.showSelectedField('pg')} selections={this.state.pgSelection}/>
                    <VGRow vg={this.props.vg} show={this.showSelectedField('vg')} selections={this.state.vgSelection}/>
                    <FlavorRows flavors={this.props.flavors} show={this.showSelectedField('flavors')} selections={this.state.flavorSelection}/>
                </div>
            </div>
         </div>
        );
    }
};
