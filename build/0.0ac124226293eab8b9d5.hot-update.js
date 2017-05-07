webpackHotUpdate(0,{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(169);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkBoxOrRadioGroup_jsx__ = __webpack_require__(278);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_RaisedButton__ = __webpack_require__(457);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_RaisedButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_RaisedButton__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_tap_event_plugin__ = __webpack_require__(476);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_tap_event_plugin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_tap_event_plugin__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__baseRow_jsx__ = __webpack_require__(275);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pgRow_jsx__ = __webpack_require__(282);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__vgRow_jsx__ = __webpack_require__(286);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nicRow_jsx__ = __webpack_require__(281);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__flavorRows_jsx__ = __webpack_require__(277);\n\n\n\n\n\n\n\n__WEBPACK_IMPORTED_MODULE_5_react_tap_event_plugin___default()();\n\n// Preview Region Components\n\n\n\n\n\n\n/*\n@TODO: add defaults from options preferences\n@TODO: click items to show hide\n@TODO: move subfields to compontens?\n*/\nconst allDefaults = {\n    fieldOptions: ['title', 'user', 'date', 'nic', 'base', 'pg', 'vg', 'flavors'],\n    nicOptions: ['label', 'mg', 'rat', 'ml', 'drops', 'grams', 'per'],\n    baseOptions: ['label', 'rat', 'ml', 'drops', 'grams', 'per'],\n    pgOptions: ['label', 'ml', 'drops', 'grams', 'per'],\n    vgOptions: ['label', 'ml', 'drops', 'grams', 'per'],\n    flavorOptions: ['flavor', 'ml', 'drops', 'grams', 'per']\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            templateOptions: [],\n            templateSelection: [],\n            fieldOptions: [],\n            selectedFields: [],\n            allFieldsOptions: [],\n            allFields: [],\n            nicOptions: [],\n            nicSelection: [],\n            baseOptions: [],\n            baseSelection: [],\n            pgOptions: [],\n            pgSelection: [],\n            vgOptions: [],\n            vgSelection: [],\n            flavorOptions: [],\n            flavorSelections: [],\n            genDate: ''\n        };\n        this.handleFormSubmit = this.handleFormSubmit.bind(this);\n    }\n\n    componentDidMount() {\n        //@TODO: grab these from options prefs to default\n        this.setState({\n            templateOptions: ['one', 'two', 'three'],\n            templateSelection: ['one'],\n            fieldOptions: allDefaults.fieldOptions,\n            selectedFields: allDefaults.fieldOptions,\n            allFieldsOptions: ['all', 'select'],\n            allFields: ['all'],\n            nicOptions: allDefaults.nicOptions,\n            nicSelection: allDefaults.nicOptions,\n            baseOptions: allDefaults.baseOptions,\n            baseSelection: allDefaults.baseOptions,\n            pgOptions: allDefaults.pgOptions,\n            pgSelection: allDefaults.pgOptions,\n            vgOptions: allDefaults.vgOptions,\n            vgSelection: allDefaults.vgOptions,\n            flavorOptions: allDefaults.flavorOptions,\n            flavorSelection: allDefaults.flavorOptions,\n            genDate: true\n        });\n        this.handleFormSubmit = this.handleFormSubmit.bind(this);\n        this.handleTemplateSelection = this.handleTemplateSelection.bind(this);\n        this.handleFieldSelection = this.handleFieldSelection.bind(this);\n        this.handleAllFields = this.handleAllFields.bind(this);\n        this.handleBaseSelection = this.handleBaseSelection.bind(this);\n        this.handleNicSelection = this.handleNicSelection.bind(this);\n        this.handlePGSelection = this.handlePGSelection.bind(this);\n        this.handleVGSelection = this.handleVGSelection.bind(this);\n        this.handleFlavorSelection = this.handleFlavorSelection.bind(this);\n        this.handleDateSelection = this.handleDateSelection.bind(this);\n    }\n\n    handleTemplateSelection(e) {\n        this.setState({ templateSelection: [e.target.value] });\n    }\n\n    handleFieldSelection(e) {\n        const newSelection = e.target.value;\n        let newSelectionArray;\n        if (this.state.selectedFields.indexOf(newSelection) > -1) {\n            newSelectionArray = this.state.selectedFields.filter(s => s !== newSelection);\n        } else {\n            newSelectionArray = [...this.state.selectedFields, newSelection];\n        }\n        this.setState({ selectedFields: newSelectionArray, allFields: ['select'] });\n    }\n\n    handleAllFields(e) {\n        const allFields = e.target.value;\n        if (allFields === 'all') {\n            this.setState({ allFields: [allFields], selectedFields: allDefaults.fieldOptions });\n        } else {\n            this.setState({ allFields: [allFields] });\n        }\n    }\n\n    handleBaseSelection(e) {\n        const newSelection = e.target.value;\n        let newSelectionArray;\n\n        if (this.state.baseSelection.indexOf(newSelection) > -1) {\n            newSelectionArray = this.state.baseSelection.filter(s => s !== newSelection);\n        } else {\n            newSelectionArray = [...this.state.baseSelection, newSelection];\n        }\n        this.setState({ baseSelection: newSelectionArray });\n    }\n\n    handleNicSelection(e) {\n        const newSelection = e.target.value;\n        let newSelectionArray;\n\n        if (this.state.nicSelection.indexOf(newSelection) > -1) {\n            newSelectionArray = this.state.nicSelection.filter(s => s !== newSelection);\n        } else {\n            newSelectionArray = [...this.state.nicSelection, newSelection];\n        }\n        this.setState({ nicSelection: newSelectionArray });\n    }\n\n    handlePGSelection(e) {\n        const newSelection = e.target.value;\n        let newSelectionArray;\n\n        if (this.state.pgSelection.indexOf(newSelection) > -1) {\n            newSelectionArray = this.state.pgSelection.filter(s => s !== newSelection);\n        } else {\n            newSelectionArray = [...this.state.pgSelection, newSelection];\n        }\n        this.setState({ pgSelection: newSelectionArray });\n    }\n\n    handleVGSelection(e) {\n        const newSelection = e.target.value;\n        let newSelectionArray;\n\n        if (this.state.vgSelection.indexOf(newSelection) > -1) {\n            newSelectionArray = this.state.vgSelection.filter(s => s !== newSelection);\n        } else {\n            newSelectionArray = [...this.state.vgSelection, newSelection];\n        }\n        this.setState({ vgSelection: newSelectionArray });\n    }\n\n    handleFlavorSelection(e) {\n        const newSelection = e.target.value;\n        let newSelectionArray;\n\n        if (this.state.flavorSelection.indexOf(newSelection) > -1) {\n            newSelectionArray = this.state.flavorSelection.filter(s => s !== newSelection);\n        } else {\n            newSelectionArray = [...this.state.flavorSelection, newSelection];\n        }\n        this.setState({ flavorSelection: newSelectionArray });\n    }\n\n    handleDateSelection(e) {\n        this.setState({ genDate: e.target.value });\n    }\n\n    showSelectedField(match) {\n        return __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.includes(this.state.selectedFields, match) ? 'show' : 'hide';\n    }\n\n    handleResetForm(e) {\n        e.preventDefault();\n        // share this default obj\n        this.setState({\n            //restore defaults\n        });\n    }\n\n    applySelections() {\n        __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.each(this.state.selectedFields, (field, idx) => {\n            console.log('submitted: ', field);\n        });\n    }\n\n    handleFormSubmit(e) {\n        e.preventDefault();\n        const formPayload = {\n            selections: {\n                templateSelection: this.state.templateSelection,\n                selectedFields: this.state.selectedFields,\n                templateSelection: this.state.templateSelection,\n                selectedFields: this.state.selectedFields,\n                nicSelection: this.state.nicSelection,\n                baseSelection: this.state.baseSelection,\n                pgSelection: this.state.pgSelection,\n                vgSelection: this.state.vgSelection,\n                flavorSelection: this.state.flavorSelection,\n                dateSelection: this.state.genDate\n            },\n            available: this.applySelections()\n        };\n\n        // chrome.runtime.sendMessage({ action: 'print', data: formPayload});\n    }\n\n    render() {\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            null,\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                \"form\",\n                { onSubmit: this.handleFormSubmit },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__checkBoxOrRadioGroup_jsx__[\"a\" /* default */], {\n                    title: 'Which layout template?',\n                    setName: 'template',\n                    controlFunc: this.handleTemplateSelection,\n                    type: 'radio',\n                    options: this.state.templateOptions,\n                    selectedOptions: this.state.templateSelection }),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"div\",\n                    { className: \"group fields\" },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"h2\",\n                        null,\n                        \"Fields\"\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__checkBoxOrRadioGroup_jsx__[\"a\" /* default */], {\n                        setName: 'selectAll',\n                        controlFunc: this.handleAllFields,\n                        type: 'radio',\n                        options: this.state.allFieldsOptions,\n                        selectedOptions: this.state.allFields }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__checkBoxOrRadioGroup_jsx__[\"a\" /* default */], {\n                        title: 'Which fields?',\n                        setName: 'fieldItems',\n                        type: 'checkbox',\n                        controlFunc: this.handleFieldSelection,\n                        options: this.state.fieldOptions,\n                        selectedOptions: this.state.selectedFields }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { className: 'sub-fields nic ' + this.showSelectedField('nic') },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__checkBoxOrRadioGroup_jsx__[\"a\" /* default */], {\n                            title: 'Which nic items?',\n                            setName: 'nicItems',\n                            type: 'checkbox',\n                            controlFunc: this.handleNicSelection,\n                            options: this.state.nicOptions,\n                            selectedOptions: this.state.nicSelection })\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { className: 'sub-fields base ' + this.showSelectedField('base') },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__checkBoxOrRadioGroup_jsx__[\"a\" /* default */], {\n                            title: 'Which base items?',\n                            setName: 'baseItems',\n                            type: 'checkbox',\n                            controlFunc: this.handleBaseSelection,\n                            options: this.state.baseOptions,\n                            selectedOptions: this.state.baseSelection })\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { className: 'sub-fields pg ' + this.showSelectedField('pg') },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__checkBoxOrRadioGroup_jsx__[\"a\" /* default */], {\n                            title: 'Which pg items?',\n                            setName: 'pgItems',\n                            type: 'checkbox',\n                            controlFunc: this.handlePGSelection,\n                            options: this.state.pgOptions,\n                            selectedOptions: this.state.pgSelection })\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { className: 'sub-fields vg ' + this.showSelectedField('vg') },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__checkBoxOrRadioGroup_jsx__[\"a\" /* default */], {\n                            title: 'Which vg items?',\n                            setName: 'vgItems',\n                            type: 'checkbox',\n                            controlFunc: this.handleVGSelection,\n                            options: this.state.vgOptions,\n                            selectedOptions: this.state.vgSelection })\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { className: 'sub-fields flavors ' + this.showSelectedField('flavors') },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__checkBoxOrRadioGroup_jsx__[\"a\" /* default */], {\n                            title: 'Which flavor items?',\n                            setName: 'flavorItems',\n                            type: 'checkbox',\n                            controlFunc: this.handleFlavorSelection,\n                            options: this.state.flavorOptions,\n                            selectedOptions: this.state.flavorSelection })\n                    )\n                ),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_RaisedButton___default.a, { type: \"submit\", label: \"Print Labels\", fullWidth: true })\n            ),\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                \"div\",\n                { id: \"elr_preview\" },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"div\",\n                    { id: \"elr_preview_stage\", className: this.state.templateSelection },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { className: 'prev-title ' + this.showSelectedField('title') },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            \"span\",\n                            null,\n                            \"Title\"\n                        ),\n                        \" \",\n                        this.props.title\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { className: 'prev-date ' + this.showSelectedField('date') },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            \"span\",\n                            null,\n                            \"Date\"\n                        ),\n                        \" \",\n                        this.props.date\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { className: 'prev-user ' + this.showSelectedField('user') },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            \"span\",\n                            null,\n                            \"User\"\n                        ),\n                        \" \",\n                        this.props.user\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__nicRow_jsx__[\"a\" /* default */], { nic: this.props.nic, show: this.showSelectedField('nic'), selections: this.state.nicSelection }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__baseRow_jsx__[\"a\" /* default */], { base: this.props.base, show: this.showSelectedField('base'), selections: this.state.baseSelection }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__pgRow_jsx__[\"a\" /* default */], { pg: this.props.pg, show: this.showSelectedField('pg'), selections: this.state.pgSelection }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__vgRow_jsx__[\"a\" /* default */], { vg: this.props.vg, show: this.showSelectedField('vg'), selections: this.state.vgSelection }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__flavorRows_jsx__[\"a\" /* default */], { flavors: this.props.flavors, show: this.showSelectedField('flavors'), selections: this.state.flavorSelection })\n                )\n            )\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjc5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL2Zvcm0vZm9ybUNvbnRhaW5lci5qc3g/MWQ1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBDaGVja0JveE9yUmFkaW9Hcm91cCBmcm9tIFwiLi9jaGVja0JveE9yUmFkaW9Hcm91cC5qc3hcIjtcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcbmltcG9ydCBpbmplY3RUYXBFdmVudFBsdWdpbiBmcm9tICdyZWFjdC10YXAtZXZlbnQtcGx1Z2luJztcbmluamVjdFRhcEV2ZW50UGx1Z2luKCk7XG5cblxuLy8gUHJldmlldyBSZWdpb24gQ29tcG9uZW50c1xuaW1wb3J0IEJhc2VSb3cgZnJvbSBcIi4uL2Jhc2VSb3cuanN4XCI7XG5pbXBvcnQgUEdSb3cgZnJvbSBcIi4uL3BnUm93LmpzeFwiO1xuaW1wb3J0IFZHUm93IGZyb20gXCIuLi92Z1Jvdy5qc3hcIjtcbmltcG9ydCBOaWNSb3cgZnJvbSBcIi4uL25pY1Jvdy5qc3hcIjtcbmltcG9ydCBGbGF2b3JSb3dzIGZyb20gXCIuLi9mbGF2b3JSb3dzLmpzeFwiO1xuXG4vKlxuQFRPRE86IGFkZCBkZWZhdWx0cyBmcm9tIG9wdGlvbnMgcHJlZmVyZW5jZXNcbkBUT0RPOiBjbGljayBpdGVtcyB0byBzaG93IGhpZGVcbkBUT0RPOiBtb3ZlIHN1YmZpZWxkcyB0byBjb21wb250ZW5zP1xuKi9cbmNvbnN0IGFsbERlZmF1bHRzID0ge1xuICAgIGZpZWxkT3B0aW9uczogICBbJ3RpdGxlJywgJ3VzZXInLCAnZGF0ZScsICduaWMnLCAnYmFzZScsICdwZycsICd2ZycsICdmbGF2b3JzJ10sXG4gICAgbmljT3B0aW9uczogICAgIFsnbGFiZWwnLCAnbWcnLCAncmF0JywgJ21sJywgJ2Ryb3BzJywgJ2dyYW1zJywgJ3BlciddLFxuICAgIGJhc2VPcHRpb25zOiAgICBbJ2xhYmVsJywgJ3JhdCcsICdtbCcsICdkcm9wcycsICdncmFtcycsICdwZXInXSxcbiAgICBwZ09wdGlvbnM6ICAgICAgWydsYWJlbCcsICdtbCcsICdkcm9wcycsICdncmFtcycsICdwZXInXSxcbiAgICB2Z09wdGlvbnM6ICAgICAgWydsYWJlbCcsICdtbCcsICdkcm9wcycsICdncmFtcycsICdwZXInXSxcbiAgICBmbGF2b3JPcHRpb25zOiAgWydmbGF2b3InLCAnbWwnLCAnZHJvcHMnLCAnZ3JhbXMnLCAncGVyJ11cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IFtdLFxuICAgICAgICAgICAgdGVtcGxhdGVTZWxlY3Rpb246IFtdLFxuICAgICAgICAgICAgZmllbGRPcHRpb25zOiBbXSxcbiAgICAgICAgICAgIHNlbGVjdGVkRmllbGRzOiBbXSxcbiAgICAgICAgICAgIGFsbEZpZWxkc09wdGlvbnM6IFtdLFxuICAgICAgICAgICAgYWxsRmllbGRzOiBbXSxcbiAgICAgICAgICAgIG5pY09wdGlvbnM6IFtdLFxuICAgICAgICAgICAgbmljU2VsZWN0aW9uOiBbXSxcbiAgICAgICAgICAgIGJhc2VPcHRpb25zOiBbXSxcbiAgICAgICAgICAgIGJhc2VTZWxlY3Rpb246IFtdLFxuICAgICAgICAgICAgcGdPcHRpb25zOiBbXSxcbiAgICAgICAgICAgIHBnU2VsZWN0aW9uOiBbXSxcbiAgICAgICAgICAgIHZnT3B0aW9uczogW10sXG4gICAgICAgICAgICB2Z1NlbGVjdGlvbjogW10sXG4gICAgICAgICAgICBmbGF2b3JPcHRpb25zOiBbXSxcbiAgICAgICAgICAgIGZsYXZvclNlbGVjdGlvbnM6IFtdLFxuICAgICAgICAgICAgZ2VuRGF0ZTogJydcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVGb3JtU3VibWl0ID0gdGhpcy5oYW5kbGVGb3JtU3VibWl0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8vQFRPRE86IGdyYWIgdGhlc2UgZnJvbSBvcHRpb25zIHByZWZzIHRvIGRlZmF1bHRcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IFsnb25lJywgJ3R3bycsICd0aHJlZSddLFxuICAgICAgICAgICAgdGVtcGxhdGVTZWxlY3Rpb246IFsnb25lJ10sXG4gICAgICAgICAgICBmaWVsZE9wdGlvbnM6IGFsbERlZmF1bHRzLmZpZWxkT3B0aW9ucyxcbiAgICAgICAgICAgIHNlbGVjdGVkRmllbGRzOiBhbGxEZWZhdWx0cy5maWVsZE9wdGlvbnMsXG4gICAgICAgICAgICBhbGxGaWVsZHNPcHRpb25zOiBbJ2FsbCcsICdzZWxlY3QnXSxcbiAgICAgICAgICAgIGFsbEZpZWxkczogWydhbGwnXSxcbiAgICAgICAgICAgIG5pY09wdGlvbnM6IGFsbERlZmF1bHRzLm5pY09wdGlvbnMsXG4gICAgICAgICAgICBuaWNTZWxlY3Rpb246IGFsbERlZmF1bHRzLm5pY09wdGlvbnMsXG4gICAgICAgICAgICBiYXNlT3B0aW9uczogYWxsRGVmYXVsdHMuYmFzZU9wdGlvbnMsXG4gICAgICAgICAgICBiYXNlU2VsZWN0aW9uOiBhbGxEZWZhdWx0cy5iYXNlT3B0aW9ucyxcbiAgICAgICAgICAgIHBnT3B0aW9uczogYWxsRGVmYXVsdHMucGdPcHRpb25zLFxuICAgICAgICAgICAgcGdTZWxlY3Rpb246IGFsbERlZmF1bHRzLnBnT3B0aW9ucyxcbiAgICAgICAgICAgIHZnT3B0aW9uczogYWxsRGVmYXVsdHMudmdPcHRpb25zLFxuICAgICAgICAgICAgdmdTZWxlY3Rpb246IGFsbERlZmF1bHRzLnZnT3B0aW9ucyxcbiAgICAgICAgICAgIGZsYXZvck9wdGlvbnM6IGFsbERlZmF1bHRzLmZsYXZvck9wdGlvbnMsXG4gICAgICAgICAgICBmbGF2b3JTZWxlY3Rpb246IGFsbERlZmF1bHRzLmZsYXZvck9wdGlvbnMsXG4gICAgICAgICAgICBnZW5EYXRlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhhbmRsZUZvcm1TdWJtaXQgPSB0aGlzLmhhbmRsZUZvcm1TdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVUZW1wbGF0ZVNlbGVjdGlvbiA9IHRoaXMuaGFuZGxlVGVtcGxhdGVTZWxlY3Rpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVGaWVsZFNlbGVjdGlvbiA9IHRoaXMuaGFuZGxlRmllbGRTZWxlY3Rpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVBbGxGaWVsZHMgPSB0aGlzLmhhbmRsZUFsbEZpZWxkcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUJhc2VTZWxlY3Rpb24gPSB0aGlzLmhhbmRsZUJhc2VTZWxlY3Rpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVOaWNTZWxlY3Rpb24gPSB0aGlzLmhhbmRsZU5pY1NlbGVjdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVBHU2VsZWN0aW9uID0gdGhpcy5oYW5kbGVQR1NlbGVjdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVZHU2VsZWN0aW9uID0gdGhpcy5oYW5kbGVWR1NlbGVjdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUZsYXZvclNlbGVjdGlvbiA9IHRoaXMuaGFuZGxlRmxhdm9yU2VsZWN0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlRGF0ZVNlbGVjdGlvbiA9IHRoaXMuaGFuZGxlRGF0ZVNlbGVjdGlvbi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGhhbmRsZVRlbXBsYXRlU2VsZWN0aW9uKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRlbXBsYXRlU2VsZWN0aW9uOiBbZS50YXJnZXQudmFsdWVdIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZUZpZWxkU2VsZWN0aW9uKGUpIHtcbiAgICAgICAgY29uc3QgbmV3U2VsZWN0aW9uID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIGxldCBuZXdTZWxlY3Rpb25BcnJheTtcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWxlY3RlZEZpZWxkcy5pbmRleE9mKG5ld1NlbGVjdGlvbikgPiAtMSkge1xuICAgICAgICAgICAgbmV3U2VsZWN0aW9uQXJyYXkgPSB0aGlzLnN0YXRlLnNlbGVjdGVkRmllbGRzLmZpbHRlcihzID0+IHMgIT09IG5ld1NlbGVjdGlvbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbkFycmF5ID0gWy4uLnRoaXMuc3RhdGUuc2VsZWN0ZWRGaWVsZHMsIG5ld1NlbGVjdGlvbl07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkRmllbGRzOiBuZXdTZWxlY3Rpb25BcnJheSwgYWxsRmllbGRzOiBbJ3NlbGVjdCddIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZUFsbEZpZWxkcyhlKSB7XG4gICAgICAgIGNvbnN0IGFsbEZpZWxkcyA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBpZiAoYWxsRmllbGRzID09PSAnYWxsJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFsbEZpZWxkczogW2FsbEZpZWxkc10sIHNlbGVjdGVkRmllbGRzOiBhbGxEZWZhdWx0cy5maWVsZE9wdGlvbnMgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWxsRmllbGRzOiBbYWxsRmllbGRzXSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUJhc2VTZWxlY3Rpb24oZSkge1xuICAgICAgICBjb25zdCBuZXdTZWxlY3Rpb24gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgbGV0IG5ld1NlbGVjdGlvbkFycmF5O1xuXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuYmFzZVNlbGVjdGlvbi5pbmRleE9mKG5ld1NlbGVjdGlvbikgPiAtMSkge1xuICAgICAgICAgICAgbmV3U2VsZWN0aW9uQXJyYXkgPSB0aGlzLnN0YXRlLmJhc2VTZWxlY3Rpb24uZmlsdGVyKHMgPT4gcyAhPT0gbmV3U2VsZWN0aW9uKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3U2VsZWN0aW9uQXJyYXkgPSBbLi4udGhpcy5zdGF0ZS5iYXNlU2VsZWN0aW9uLCBuZXdTZWxlY3Rpb25dO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBiYXNlU2VsZWN0aW9uOiBuZXdTZWxlY3Rpb25BcnJheSB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVOaWNTZWxlY3Rpb24oZSkge1xuICAgICAgICBjb25zdCBuZXdTZWxlY3Rpb24gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgbGV0IG5ld1NlbGVjdGlvbkFycmF5O1xuXG4gICAgICAgIGlmKHRoaXMuc3RhdGUubmljU2VsZWN0aW9uLmluZGV4T2YobmV3U2VsZWN0aW9uKSA+IC0xKSB7XG4gICAgICAgICAgICBuZXdTZWxlY3Rpb25BcnJheSA9IHRoaXMuc3RhdGUubmljU2VsZWN0aW9uLmZpbHRlcihzID0+IHMgIT09IG5ld1NlbGVjdGlvbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbkFycmF5ID0gWy4uLnRoaXMuc3RhdGUubmljU2VsZWN0aW9uLCBuZXdTZWxlY3Rpb25dO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBuaWNTZWxlY3Rpb246IG5ld1NlbGVjdGlvbkFycmF5IH0pO1xuICAgIH1cblxuICAgIGhhbmRsZVBHU2VsZWN0aW9uKGUpIHtcbiAgICAgICAgY29uc3QgbmV3U2VsZWN0aW9uID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIGxldCBuZXdTZWxlY3Rpb25BcnJheTtcblxuICAgICAgICBpZih0aGlzLnN0YXRlLnBnU2VsZWN0aW9uLmluZGV4T2YobmV3U2VsZWN0aW9uKSA+IC0xKSB7XG4gICAgICAgICAgICBuZXdTZWxlY3Rpb25BcnJheSA9IHRoaXMuc3RhdGUucGdTZWxlY3Rpb24uZmlsdGVyKHMgPT4gcyAhPT0gbmV3U2VsZWN0aW9uKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3U2VsZWN0aW9uQXJyYXkgPSBbLi4udGhpcy5zdGF0ZS5wZ1NlbGVjdGlvbiwgbmV3U2VsZWN0aW9uXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGdTZWxlY3Rpb246IG5ld1NlbGVjdGlvbkFycmF5IH0pO1xuICAgIH1cblxuICAgIGhhbmRsZVZHU2VsZWN0aW9uKGUpIHtcbiAgICAgICAgY29uc3QgbmV3U2VsZWN0aW9uID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIGxldCBuZXdTZWxlY3Rpb25BcnJheTtcblxuICAgICAgICBpZih0aGlzLnN0YXRlLnZnU2VsZWN0aW9uLmluZGV4T2YobmV3U2VsZWN0aW9uKSA+IC0xKSB7XG4gICAgICAgICAgICBuZXdTZWxlY3Rpb25BcnJheSA9IHRoaXMuc3RhdGUudmdTZWxlY3Rpb24uZmlsdGVyKHMgPT4gcyAhPT0gbmV3U2VsZWN0aW9uKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3U2VsZWN0aW9uQXJyYXkgPSBbLi4udGhpcy5zdGF0ZS52Z1NlbGVjdGlvbiwgbmV3U2VsZWN0aW9uXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmdTZWxlY3Rpb246IG5ld1NlbGVjdGlvbkFycmF5IH0pO1xuICAgIH1cblxuICAgIGhhbmRsZUZsYXZvclNlbGVjdGlvbihlKSB7XG4gICAgICAgIGNvbnN0IG5ld1NlbGVjdGlvbiA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBsZXQgbmV3U2VsZWN0aW9uQXJyYXk7XG5cbiAgICAgICAgaWYodGhpcy5zdGF0ZS5mbGF2b3JTZWxlY3Rpb24uaW5kZXhPZihuZXdTZWxlY3Rpb24pID4gLTEpIHtcbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbkFycmF5ID0gdGhpcy5zdGF0ZS5mbGF2b3JTZWxlY3Rpb24uZmlsdGVyKHMgPT4gcyAhPT0gbmV3U2VsZWN0aW9uKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3U2VsZWN0aW9uQXJyYXkgPSBbLi4udGhpcy5zdGF0ZS5mbGF2b3JTZWxlY3Rpb24sIG5ld1NlbGVjdGlvbl07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZsYXZvclNlbGVjdGlvbjogbmV3U2VsZWN0aW9uQXJyYXkgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlRGF0ZVNlbGVjdGlvbiAoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZ2VuRGF0ZTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgfVxuXG4gICAgc2hvd1NlbGVjdGVkRmllbGQobWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIF8uaW5jbHVkZXModGhpcy5zdGF0ZS5zZWxlY3RlZEZpZWxkcywgbWF0Y2gpID8gJ3Nob3cnIDogJ2hpZGUnO1xuICAgIH1cblxuICAgIGhhbmRsZVJlc2V0Rm9ybShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gc2hhcmUgdGhpcyBkZWZhdWx0IG9ialxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIC8vcmVzdG9yZSBkZWZhdWx0c1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhcHBseVNlbGVjdGlvbnMoKSB7XG4gICAgICAgIF8uZWFjaCh0aGlzLnN0YXRlLnNlbGVjdGVkRmllbGRzLCAoZmllbGQsIGlkeCk9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3VibWl0dGVkOiAnLCBmaWVsZClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlRm9ybVN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZm9ybVBheWxvYWQgPSB7XG4gICAgICAgICAgICBzZWxlY3Rpb25zOiB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVTZWxlY3Rpb246IHRoaXMuc3RhdGUudGVtcGxhdGVTZWxlY3Rpb24sXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWVsZHM6IHRoaXMuc3RhdGUuc2VsZWN0ZWRGaWVsZHMsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVTZWxlY3Rpb246IHRoaXMuc3RhdGUudGVtcGxhdGVTZWxlY3Rpb24sXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWVsZHM6IHRoaXMuc3RhdGUuc2VsZWN0ZWRGaWVsZHMsXG4gICAgICAgICAgICAgICAgbmljU2VsZWN0aW9uOiB0aGlzLnN0YXRlLm5pY1NlbGVjdGlvbixcbiAgICAgICAgICAgICAgICBiYXNlU2VsZWN0aW9uOiB0aGlzLnN0YXRlLmJhc2VTZWxlY3Rpb24sXG4gICAgICAgICAgICAgICAgcGdTZWxlY3Rpb246IHRoaXMuc3RhdGUucGdTZWxlY3Rpb24sXG4gICAgICAgICAgICAgICAgdmdTZWxlY3Rpb246IHRoaXMuc3RhdGUudmdTZWxlY3Rpb24sXG4gICAgICAgICAgICAgICAgZmxhdm9yU2VsZWN0aW9uOiB0aGlzLnN0YXRlLmZsYXZvclNlbGVjdGlvbixcbiAgICAgICAgICAgICAgICBkYXRlU2VsZWN0aW9uOiB0aGlzLnN0YXRlLmdlbkRhdGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhdmFpbGFibGU6IHRoaXMuYXBwbHlTZWxlY3Rpb25zKClcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IGFjdGlvbjogJ3ByaW50JywgZGF0YTogZm9ybVBheWxvYWR9KTtcblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVGb3JtU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8Q2hlY2tCb3hPclJhZGlvR3JvdXBcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydXaGljaCBsYXlvdXQgdGVtcGxhdGU/J31cbiAgICAgICAgICAgICAgICAgICAgc2V0TmFtZT17J3RlbXBsYXRlJ31cbiAgICAgICAgICAgICAgICAgICAgY29udHJvbEZ1bmM9e3RoaXMuaGFuZGxlVGVtcGxhdGVTZWxlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9eydyYWRpbyd9XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUudGVtcGxhdGVPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbnM9e3RoaXMuc3RhdGUudGVtcGxhdGVTZWxlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cCBmaWVsZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkZpZWxkczwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxDaGVja0JveE9yUmFkaW9Hcm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmFtZT17J3NlbGVjdEFsbCd9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sRnVuYz17dGhpcy5oYW5kbGVBbGxGaWVsZHN9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsncmFkaW8nfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5hbGxGaWVsZHNPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb25zPXt0aGlzLnN0YXRlLmFsbEZpZWxkc30gLz5cbiAgICAgICAgICAgICAgICAgICAgPENoZWNrQm94T3JSYWRpb0dyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J1doaWNoIGZpZWxkcz8nfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmFtZT17J2ZpZWxkSXRlbXMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17J2NoZWNrYm94J31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xGdW5jPXt0aGlzLmhhbmRsZUZpZWxkU2VsZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5maWVsZE9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbnM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRGaWVsZHN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc3ViLWZpZWxkcyBuaWMgJyArIHRoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ25pYycpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0JveE9yUmFkaW9Hcm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnV2hpY2ggbmljIGl0ZW1zPyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmFtZT17J25pY0l0ZW1zJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsnY2hlY2tib3gnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xGdW5jPXt0aGlzLmhhbmRsZU5pY1NlbGVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLm5pY09wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb25zPXt0aGlzLnN0YXRlLm5pY1NlbGVjdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc3ViLWZpZWxkcyBiYXNlICcgKyB0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCdiYXNlJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrQm94T3JSYWRpb0dyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydXaGljaCBiYXNlIGl0ZW1zPyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmFtZT17J2Jhc2VJdGVtcyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17J2NoZWNrYm94J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sRnVuYz17dGhpcy5oYW5kbGVCYXNlU2VsZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUuYmFzZU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb25zPXt0aGlzLnN0YXRlLmJhc2VTZWxlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3N1Yi1maWVsZHMgcGcgJyArIHRoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ3BnJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrQm94T3JSYWRpb0dyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydXaGljaCBwZyBpdGVtcz8nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE5hbWU9eydwZ0l0ZW1zJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsnY2hlY2tib3gnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xGdW5jPXt0aGlzLmhhbmRsZVBHU2VsZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUucGdPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9ucz17dGhpcy5zdGF0ZS5wZ1NlbGVjdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc3ViLWZpZWxkcyB2ZyAnICsgdGhpcy5zaG93U2VsZWN0ZWRGaWVsZCgndmcnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tCb3hPclJhZGlvR3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J1doaWNoIHZnIGl0ZW1zPyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmFtZT17J3ZnSXRlbXMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9eydjaGVja2JveCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbEZ1bmM9e3RoaXMuaGFuZGxlVkdTZWxlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS52Z09wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb25zPXt0aGlzLnN0YXRlLnZnU2VsZWN0aW9ufSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydzdWItZmllbGRzIGZsYXZvcnMgJyArIHRoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ2ZsYXZvcnMnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tCb3hPclJhZGlvR3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J1doaWNoIGZsYXZvciBpdGVtcz8nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE5hbWU9eydmbGF2b3JJdGVtcyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17J2NoZWNrYm94J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sRnVuYz17dGhpcy5oYW5kbGVGbGF2b3JTZWxlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5mbGF2b3JPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9ucz17dGhpcy5zdGF0ZS5mbGF2b3JTZWxlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxSYWlzZWRCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGxhYmVsPVwiUHJpbnQgTGFiZWxzXCIgZnVsbFdpZHRoPXt0cnVlfS8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZWxyX3ByZXZpZXdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZWxyX3ByZXZpZXdfc3RhZ2VcIiBjbGFzc05hbWU9e3RoaXMuc3RhdGUudGVtcGxhdGVTZWxlY3Rpb259PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3ByZXYtdGl0bGUgJyArIHRoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ3RpdGxlJyl9PjxzcGFuPlRpdGxlPC9zcGFuPiB7dGhpcy5wcm9wcy50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydwcmV2LWRhdGUgJyArIHRoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ2RhdGUnKX0+PHNwYW4+RGF0ZTwvc3Bhbj4ge3RoaXMucHJvcHMuZGF0ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydwcmV2LXVzZXIgJyArICB0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCd1c2VyJyl9PjxzcGFuPlVzZXI8L3NwYW4+IHt0aGlzLnByb3BzLnVzZXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxOaWNSb3cgbmljPXt0aGlzLnByb3BzLm5pY30gc2hvdz17dGhpcy5zaG93U2VsZWN0ZWRGaWVsZCgnbmljJyl9IHNlbGVjdGlvbnM9e3RoaXMuc3RhdGUubmljU2VsZWN0aW9ufS8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXNlUm93IGJhc2U9e3RoaXMucHJvcHMuYmFzZX0gc2hvdz17dGhpcy5zaG93U2VsZWN0ZWRGaWVsZCgnYmFzZScpfSBzZWxlY3Rpb25zPXt0aGlzLnN0YXRlLmJhc2VTZWxlY3Rpb259Lz5cbiAgICAgICAgICAgICAgICAgICAgPFBHUm93IHBnPXt0aGlzLnByb3BzLnBnfSBzaG93PXt0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCdwZycpfSBzZWxlY3Rpb25zPXt0aGlzLnN0YXRlLnBnU2VsZWN0aW9ufS8+XG4gICAgICAgICAgICAgICAgICAgIDxWR1JvdyB2Zz17dGhpcy5wcm9wcy52Z30gc2hvdz17dGhpcy5zaG93U2VsZWN0ZWRGaWVsZCgndmcnKX0gc2VsZWN0aW9ucz17dGhpcy5zdGF0ZS52Z1NlbGVjdGlvbn0vPlxuICAgICAgICAgICAgICAgICAgICA8Rmxhdm9yUm93cyBmbGF2b3JzPXt0aGlzLnByb3BzLmZsYXZvcnN9IHNob3c9e3RoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ2ZsYXZvcnMnKX0gc2VsZWN0aW9ucz17dGhpcy5zdGF0ZS5mbGF2b3JTZWxlY3Rpb259Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9mb3JtL2Zvcm1Db250YWluZXIuanN4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakJBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7QUFiQTtBQUNBO0FBZUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBbkRBO0FBNkRBO0FBckVBO0FBdUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQURBO0FBeEVBO0FBc0ZBO0FBbFJBOzs7Ozs7Ozs7Ozs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})