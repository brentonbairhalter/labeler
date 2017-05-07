webpackHotUpdate(0,{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(169);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkBoxOrRadioGroup_jsx__ = __webpack_require__(278);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_RaisedButton__ = __webpack_require__(457);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_RaisedButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_RaisedButton__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_tap_event_plugin__ = __webpack_require__(476);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_tap_event_plugin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_tap_event_plugin__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__baseRow_jsx__ = __webpack_require__(275);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pgRow_jsx__ = __webpack_require__(282);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__vgRow_jsx__ = __webpack_require__(286);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nicRow_jsx__ = __webpack_require__(281);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__flavorRows_jsx__ = __webpack_require__(277);\n\n\n\n\n\n\n\n__WEBPACK_IMPORTED_MODULE_5_react_tap_event_plugin___default()();\n\n// Preview Region Components\n\n\n\n\n\n\n/*\n@TODO: add defaults from options preferences\n@TODO: click items to show hide\n@TODO: move subfields to compontens?\n*/\nconst allDefaults = {\n    fieldOptions: ['title', 'user', 'date', 'nic', 'base', 'pg', 'vg', 'flavors'],\n    nicOptions: ['label', 'mg', 'rat', 'ml', 'drops', 'grams', 'per'],\n    baseOptions: ['label', 'rat', 'ml', 'drops', 'grams', 'per'],\n    pgOptions: ['label', 'ml', 'drops', 'grams', 'per'],\n    vgOptions: ['label', 'ml', 'drops', 'grams', 'per'],\n    flavorOptions: ['flavor', 'ml', 'drops', 'grams', 'per']\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            templateOptions: [],\n            templateSelection: [],\n            fieldOptions: [],\n            selectedFields: [],\n            allFieldsOptions: [],\n            allFields: [],\n            nicOptions: [],\n            nicSelection: [],\n            baseOptions: [],\n            baseSelection: [],\n            pgOptions: [],\n            pgSelection: [],\n            vgOptions: [],\n            vgSelection: [],\n            flavorOptions: [],\n            flavorSelections: [],\n            genDate: ''\n        };\n        this.handleFormSubmit = this.handleFormSubmit.bind(this);\n    }\n\n    componentDidMount() {\n        //@TODO: grab these from options prefs to default\n        this.setState({\n            templateOptions: ['one', 'two', 'three'],\n            templateSelection: ['one'],\n            fieldOptions: allDefaults.fieldOptions,\n            selectedFields: allDefaults.fieldOptions,\n            allFieldsOptions: ['all', 'select'],\n            allFields: ['all'],\n            nicOptions: allDefaults.nicOptions,\n            nicSelection: allDefaults.nicOptions,\n            baseOptions: allDefaults.baseOptions,\n            baseSelection: allDefaults.baseOptions,\n            pgOptions: allDefaults.pgOptions,\n            pgSelection: allDefaults.pgOptions,\n            vgOptions: allDefaults.vgOptions,\n            vgSelection: allDefaults.vgOptions,\n            flavorOptions: allDefaults.flavorOptions,\n            flavorSelection: allDefaults.flavorOptions,\n            genDate: true\n        });\n        this.handleFormSubmit = this.handleFormSubmit.bind(this);\n        this.handleTemplateSelection = this.handleTemplateSelection.bind(this);\n        this.handleFieldSelection = this.handleFieldSelection.bind(this);\n        this.handleAllFields = this.handleAllFields.bind(this);\n        this.handleBaseSelection = this.handleBaseSelection.bind(this);\n        this.handleNicSelection = this.handleNicSelection.bind(this);\n        this.handlePGSelection = this.handlePGSelection.bind(this);\n        this.handleVGSelection = this.handleVGSelection.bind(this);\n        this.handleFlavorSelection = this.handleFlavorSelection.bind(this);\n        this.handleDateSelection = this.handleDateSelection.bind(this);\n    }\n\n    handleTemplateSelection(e) {\n        this.setState({ templateSelection: [e.target.value] });\n    }\n\n    handleFieldSelection(e) {\n        const newSelection = e.target.value;\n        let newSelectionArray;\n        if (this.state.selectedFields.indexOf(newSelection) > -1) {\n            newSelectionArray = this.state.selectedFields.filter(s => s !== newSelection);\n        } else {\n            newSelectionArray = [...this.state.selectedFields, newSelection];\n        }\n        this.setState({ selectedFields: newSelectionArray, allFields: ['select'] });\n    }\n\n    handleAllFields(e) {\n        const allFields = e.target.value;\n        if (allFields === 'all') {\n            this.setState({ allFields: [allFields], selectedFields: allDefaults.fieldOptions });\n        } else {\n            this.setState({ allFields: [allFields] });\n        }\n    }\n\n    handleBaseSelection(e) {\n        const newSelection = e.target.value;\n        let newSelectionArray;\n\n        if (this.state.baseSelection.indexOf(newSelection) > -1) {\n            newSelectionArray = this.state.baseSelection.filter(s => s !== newSelection);\n        } else {\n            newSelectionArray = [...this.state.baseSelection, newSelection];\n        }\n        this.setState({ baseSelection: newSelectionArray });\n    }\n\n    handleNicSelection(e) {\n        const newSelection = e.target.value;\n        let newSelectionArray;\n\n        if (this.state.nicSelection.indexOf(newSelection) > -1) {\n            newSelectionArray = this.state.nicSelection.filter(s => s !== newSelection);\n        } else {\n            newSelectionArray = [...this.state.nicSelection, newSelection];\n        }\n        this.setState({ nicSelection: newSelectionArray });\n    }\n\n    handlePGSelection(e) {\n        const newSelection = e.target.value;\n        let newSelectionArray;\n\n        if (this.state.pgSelection.indexOf(newSelection) > -1) {\n            newSelectionArray = this.state.pgSelection.filter(s => s !== newSelection);\n        } else {\n            newSelectionArray = [...this.state.pgSelection, newSelection];\n        }\n        this.setState({ pgSelection: newSelectionArray });\n    }\n\n    handleVGSelection(e) {\n        const newSelection = e.target.value;\n        let newSelectionArray;\n\n        if (this.state.vgSelection.indexOf(newSelection) > -1) {\n            newSelectionArray = this.state.vgSelection.filter(s => s !== newSelection);\n        } else {\n            newSelectionArray = [...this.state.vgSelection, newSelection];\n        }\n        this.setState({ vgSelection: newSelectionArray });\n    }\n\n    handleFlavorSelection(e) {\n        const newSelection = e.target.value;\n        let newSelectionArray;\n\n        if (this.state.flavorSelection.indexOf(newSelection) > -1) {\n            newSelectionArray = this.state.flavorSelection.filter(s => s !== newSelection);\n        } else {\n            newSelectionArray = [...this.state.flavorSelection, newSelection];\n        }\n        this.setState({ flavorSelection: newSelectionArray });\n    }\n\n    handleDateSelection(e) {\n        this.setState({ genDate: e.target.value });\n    }\n\n    showSelectedField(match) {\n        return __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.includes(this.state.selectedFields, match) ? 'show' : 'hide';\n    }\n\n    handleResetForm(e) {\n        e.preventDefault();\n        // share this default obj\n        this.setState({\n            //restore defaults\n        });\n    }\n\n    handleFormSubmit(e) {\n        e.preventDefault();\n        const formPayload = {\n            selections: {\n                templateSelection: this.state.templateSelection,\n                selectedFields: this.state.selectedFields,\n                templateSelection: this.state.templateSelection,\n                selectedFields: this.state.selectedFields,\n                nicSelection: this.state.nicSelection,\n                baseSelection: this.state.baseSelection,\n                pgSelection: this.state.pgSelection,\n                vgSelection: this.state.vgSelection,\n                flavorSelection: this.state.flavorSelection,\n                dateSelection: this.state.genDate\n            },\n            available: this.props\n        };\n\n        chrome.runtime.sendMessage({ action: 'print', data: formPayload });\n    }\n\n    render() {\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            null,\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                \"form\",\n                { onSubmit: this.handleFormSubmit },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__checkBoxOrRadioGroup_jsx__[\"a\" /* default */], {\n                    title: 'Which layout template?',\n                    setName: 'template',\n                    controlFunc: this.handleTemplateSelection,\n                    type: 'radio',\n                    options: this.state.templateOptions,\n                    selectedOptions: this.state.templateSelection }),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"div\",\n                    { className: \"group fields\" },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"h2\",\n                        null,\n                        \"Fields\"\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__checkBoxOrRadioGroup_jsx__[\"a\" /* default */], {\n                        setName: 'selectAll',\n                        controlFunc: this.handleAllFields,\n                        type: 'radio',\n                        options: this.state.allFieldsOptions,\n                        selectedOptions: this.state.allFields }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__checkBoxOrRadioGroup_jsx__[\"a\" /* default */], {\n                        title: 'Which fields?',\n                        setName: 'fieldItems',\n                        type: 'checkbox',\n                        controlFunc: this.handleFieldSelection,\n                        options: this.state.fieldOptions,\n                        selectedOptions: this.state.selectedFields }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { className: 'sub-fields nic ' + this.showSelectedField('nic') },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__checkBoxOrRadioGroup_jsx__[\"a\" /* default */], {\n                            title: 'Which nic items?',\n                            setName: 'nicItems',\n                            type: 'checkbox',\n                            controlFunc: this.handleNicSelection,\n                            options: this.state.nicOptions,\n                            selectedOptions: this.state.nicSelection })\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { className: 'sub-fields base ' + this.showSelectedField('base') },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__checkBoxOrRadioGroup_jsx__[\"a\" /* default */], {\n                            title: 'Which base items?',\n                            setName: 'baseItems',\n                            type: 'checkbox',\n                            controlFunc: this.handleBaseSelection,\n                            options: this.state.baseOptions,\n                            selectedOptions: this.state.baseSelection })\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { className: 'sub-fields pg ' + this.showSelectedField('pg') },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__checkBoxOrRadioGroup_jsx__[\"a\" /* default */], {\n                            title: 'Which pg items?',\n                            setName: 'pgItems',\n                            type: 'checkbox',\n                            controlFunc: this.handlePGSelection,\n                            options: this.state.pgOptions,\n                            selectedOptions: this.state.pgSelection })\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { className: 'sub-fields vg ' + this.showSelectedField('vg') },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__checkBoxOrRadioGroup_jsx__[\"a\" /* default */], {\n                            title: 'Which vg items?',\n                            setName: 'vgItems',\n                            type: 'checkbox',\n                            controlFunc: this.handleVGSelection,\n                            options: this.state.vgOptions,\n                            selectedOptions: this.state.vgSelection })\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { className: 'sub-fields flavors ' + this.showSelectedField('flavors') },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__checkBoxOrRadioGroup_jsx__[\"a\" /* default */], {\n                            title: 'Which flavor items?',\n                            setName: 'flavorItems',\n                            type: 'checkbox',\n                            controlFunc: this.handleFlavorSelection,\n                            options: this.state.flavorOptions,\n                            selectedOptions: this.state.flavorSelection })\n                    )\n                ),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_RaisedButton___default.a, { type: \"submit\", label: \"Print Labels\", fullWidth: true })\n            ),\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                \"div\",\n                { id: \"elr_preview\" },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"div\",\n                    { id: \"elr_preview_stage\", className: this.state.templateSelection },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { className: 'prev-title ' + this.showSelectedField('title') },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            \"span\",\n                            null,\n                            \"Title\"\n                        ),\n                        \" \",\n                        this.props.title\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { className: 'prev-date ' + this.showSelectedField('date') },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            \"span\",\n                            null,\n                            \"Date\"\n                        ),\n                        \" \",\n                        this.props.date\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { className: 'prev-user ' + this.showSelectedField('user') },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            \"span\",\n                            null,\n                            \"User\"\n                        ),\n                        \" \",\n                        this.props.user\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__nicRow_jsx__[\"a\" /* default */], { nic: this.props.nic, show: this.showSelectedField('nic'), selections: this.state.nicSelection }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__baseRow_jsx__[\"a\" /* default */], { base: this.props.base, show: this.showSelectedField('base'), selections: this.state.baseSelection }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__pgRow_jsx__[\"a\" /* default */], { pg: this.props.pg, show: this.showSelectedField('pg'), selections: this.state.pgSelection }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__vgRow_jsx__[\"a\" /* default */], { vg: this.props.vg, show: this.showSelectedField('vg'), selections: this.state.vgSelection }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__flavorRows_jsx__[\"a\" /* default */], { flavors: this.props.flavors, show: this.showSelectedField('flavors'), selections: this.state.flavorSelection })\n                )\n            )\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjc5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL2Zvcm0vZm9ybUNvbnRhaW5lci5qc3g/MWQ1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBDaGVja0JveE9yUmFkaW9Hcm91cCBmcm9tIFwiLi9jaGVja0JveE9yUmFkaW9Hcm91cC5qc3hcIjtcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcbmltcG9ydCBpbmplY3RUYXBFdmVudFBsdWdpbiBmcm9tICdyZWFjdC10YXAtZXZlbnQtcGx1Z2luJztcbmluamVjdFRhcEV2ZW50UGx1Z2luKCk7XG5cblxuLy8gUHJldmlldyBSZWdpb24gQ29tcG9uZW50c1xuaW1wb3J0IEJhc2VSb3cgZnJvbSBcIi4uL2Jhc2VSb3cuanN4XCI7XG5pbXBvcnQgUEdSb3cgZnJvbSBcIi4uL3BnUm93LmpzeFwiO1xuaW1wb3J0IFZHUm93IGZyb20gXCIuLi92Z1Jvdy5qc3hcIjtcbmltcG9ydCBOaWNSb3cgZnJvbSBcIi4uL25pY1Jvdy5qc3hcIjtcbmltcG9ydCBGbGF2b3JSb3dzIGZyb20gXCIuLi9mbGF2b3JSb3dzLmpzeFwiO1xuXG4vKlxuQFRPRE86IGFkZCBkZWZhdWx0cyBmcm9tIG9wdGlvbnMgcHJlZmVyZW5jZXNcbkBUT0RPOiBjbGljayBpdGVtcyB0byBzaG93IGhpZGVcbkBUT0RPOiBtb3ZlIHN1YmZpZWxkcyB0byBjb21wb250ZW5zP1xuKi9cbmNvbnN0IGFsbERlZmF1bHRzID0ge1xuICAgIGZpZWxkT3B0aW9uczogICBbJ3RpdGxlJywgJ3VzZXInLCAnZGF0ZScsICduaWMnLCAnYmFzZScsICdwZycsICd2ZycsICdmbGF2b3JzJ10sXG4gICAgbmljT3B0aW9uczogICAgIFsnbGFiZWwnLCAnbWcnLCAncmF0JywgJ21sJywgJ2Ryb3BzJywgJ2dyYW1zJywgJ3BlciddLFxuICAgIGJhc2VPcHRpb25zOiAgICBbJ2xhYmVsJywgJ3JhdCcsICdtbCcsICdkcm9wcycsICdncmFtcycsICdwZXInXSxcbiAgICBwZ09wdGlvbnM6ICAgICAgWydsYWJlbCcsICdtbCcsICdkcm9wcycsICdncmFtcycsICdwZXInXSxcbiAgICB2Z09wdGlvbnM6ICAgICAgWydsYWJlbCcsICdtbCcsICdkcm9wcycsICdncmFtcycsICdwZXInXSxcbiAgICBmbGF2b3JPcHRpb25zOiAgWydmbGF2b3InLCAnbWwnLCAnZHJvcHMnLCAnZ3JhbXMnLCAncGVyJ11cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IFtdLFxuICAgICAgICAgICAgdGVtcGxhdGVTZWxlY3Rpb246IFtdLFxuICAgICAgICAgICAgZmllbGRPcHRpb25zOiBbXSxcbiAgICAgICAgICAgIHNlbGVjdGVkRmllbGRzOiBbXSxcbiAgICAgICAgICAgIGFsbEZpZWxkc09wdGlvbnM6IFtdLFxuICAgICAgICAgICAgYWxsRmllbGRzOiBbXSxcbiAgICAgICAgICAgIG5pY09wdGlvbnM6IFtdLFxuICAgICAgICAgICAgbmljU2VsZWN0aW9uOiBbXSxcbiAgICAgICAgICAgIGJhc2VPcHRpb25zOiBbXSxcbiAgICAgICAgICAgIGJhc2VTZWxlY3Rpb246IFtdLFxuICAgICAgICAgICAgcGdPcHRpb25zOiBbXSxcbiAgICAgICAgICAgIHBnU2VsZWN0aW9uOiBbXSxcbiAgICAgICAgICAgIHZnT3B0aW9uczogW10sXG4gICAgICAgICAgICB2Z1NlbGVjdGlvbjogW10sXG4gICAgICAgICAgICBmbGF2b3JPcHRpb25zOiBbXSxcbiAgICAgICAgICAgIGZsYXZvclNlbGVjdGlvbnM6IFtdLFxuICAgICAgICAgICAgZ2VuRGF0ZTogJydcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVGb3JtU3VibWl0ID0gdGhpcy5oYW5kbGVGb3JtU3VibWl0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8vQFRPRE86IGdyYWIgdGhlc2UgZnJvbSBvcHRpb25zIHByZWZzIHRvIGRlZmF1bHRcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IFsnb25lJywgJ3R3bycsICd0aHJlZSddLFxuICAgICAgICAgICAgdGVtcGxhdGVTZWxlY3Rpb246IFsnb25lJ10sXG4gICAgICAgICAgICBmaWVsZE9wdGlvbnM6IGFsbERlZmF1bHRzLmZpZWxkT3B0aW9ucyxcbiAgICAgICAgICAgIHNlbGVjdGVkRmllbGRzOiBhbGxEZWZhdWx0cy5maWVsZE9wdGlvbnMsXG4gICAgICAgICAgICBhbGxGaWVsZHNPcHRpb25zOiBbJ2FsbCcsICdzZWxlY3QnXSxcbiAgICAgICAgICAgIGFsbEZpZWxkczogWydhbGwnXSxcbiAgICAgICAgICAgIG5pY09wdGlvbnM6IGFsbERlZmF1bHRzLm5pY09wdGlvbnMsXG4gICAgICAgICAgICBuaWNTZWxlY3Rpb246IGFsbERlZmF1bHRzLm5pY09wdGlvbnMsXG4gICAgICAgICAgICBiYXNlT3B0aW9uczogYWxsRGVmYXVsdHMuYmFzZU9wdGlvbnMsXG4gICAgICAgICAgICBiYXNlU2VsZWN0aW9uOiBhbGxEZWZhdWx0cy5iYXNlT3B0aW9ucyxcbiAgICAgICAgICAgIHBnT3B0aW9uczogYWxsRGVmYXVsdHMucGdPcHRpb25zLFxuICAgICAgICAgICAgcGdTZWxlY3Rpb246IGFsbERlZmF1bHRzLnBnT3B0aW9ucyxcbiAgICAgICAgICAgIHZnT3B0aW9uczogYWxsRGVmYXVsdHMudmdPcHRpb25zLFxuICAgICAgICAgICAgdmdTZWxlY3Rpb246IGFsbERlZmF1bHRzLnZnT3B0aW9ucyxcbiAgICAgICAgICAgIGZsYXZvck9wdGlvbnM6IGFsbERlZmF1bHRzLmZsYXZvck9wdGlvbnMsXG4gICAgICAgICAgICBmbGF2b3JTZWxlY3Rpb246IGFsbERlZmF1bHRzLmZsYXZvck9wdGlvbnMsXG4gICAgICAgICAgICBnZW5EYXRlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhhbmRsZUZvcm1TdWJtaXQgPSB0aGlzLmhhbmRsZUZvcm1TdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVUZW1wbGF0ZVNlbGVjdGlvbiA9IHRoaXMuaGFuZGxlVGVtcGxhdGVTZWxlY3Rpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVGaWVsZFNlbGVjdGlvbiA9IHRoaXMuaGFuZGxlRmllbGRTZWxlY3Rpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVBbGxGaWVsZHMgPSB0aGlzLmhhbmRsZUFsbEZpZWxkcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUJhc2VTZWxlY3Rpb24gPSB0aGlzLmhhbmRsZUJhc2VTZWxlY3Rpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVOaWNTZWxlY3Rpb24gPSB0aGlzLmhhbmRsZU5pY1NlbGVjdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVBHU2VsZWN0aW9uID0gdGhpcy5oYW5kbGVQR1NlbGVjdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVZHU2VsZWN0aW9uID0gdGhpcy5oYW5kbGVWR1NlbGVjdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUZsYXZvclNlbGVjdGlvbiA9IHRoaXMuaGFuZGxlRmxhdm9yU2VsZWN0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlRGF0ZVNlbGVjdGlvbiA9IHRoaXMuaGFuZGxlRGF0ZVNlbGVjdGlvbi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGhhbmRsZVRlbXBsYXRlU2VsZWN0aW9uKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRlbXBsYXRlU2VsZWN0aW9uOiBbZS50YXJnZXQudmFsdWVdIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZUZpZWxkU2VsZWN0aW9uKGUpIHtcbiAgICAgICAgY29uc3QgbmV3U2VsZWN0aW9uID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIGxldCBuZXdTZWxlY3Rpb25BcnJheTtcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWxlY3RlZEZpZWxkcy5pbmRleE9mKG5ld1NlbGVjdGlvbikgPiAtMSkge1xuICAgICAgICAgICAgbmV3U2VsZWN0aW9uQXJyYXkgPSB0aGlzLnN0YXRlLnNlbGVjdGVkRmllbGRzLmZpbHRlcihzID0+IHMgIT09IG5ld1NlbGVjdGlvbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbkFycmF5ID0gWy4uLnRoaXMuc3RhdGUuc2VsZWN0ZWRGaWVsZHMsIG5ld1NlbGVjdGlvbl07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkRmllbGRzOiBuZXdTZWxlY3Rpb25BcnJheSwgYWxsRmllbGRzOiBbJ3NlbGVjdCddIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZUFsbEZpZWxkcyhlKSB7XG4gICAgICAgIGNvbnN0IGFsbEZpZWxkcyA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBpZiAoYWxsRmllbGRzID09PSAnYWxsJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFsbEZpZWxkczogW2FsbEZpZWxkc10sIHNlbGVjdGVkRmllbGRzOiBhbGxEZWZhdWx0cy5maWVsZE9wdGlvbnMgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWxsRmllbGRzOiBbYWxsRmllbGRzXSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUJhc2VTZWxlY3Rpb24oZSkge1xuICAgICAgICBjb25zdCBuZXdTZWxlY3Rpb24gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgbGV0IG5ld1NlbGVjdGlvbkFycmF5O1xuXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuYmFzZVNlbGVjdGlvbi5pbmRleE9mKG5ld1NlbGVjdGlvbikgPiAtMSkge1xuICAgICAgICAgICAgbmV3U2VsZWN0aW9uQXJyYXkgPSB0aGlzLnN0YXRlLmJhc2VTZWxlY3Rpb24uZmlsdGVyKHMgPT4gcyAhPT0gbmV3U2VsZWN0aW9uKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3U2VsZWN0aW9uQXJyYXkgPSBbLi4udGhpcy5zdGF0ZS5iYXNlU2VsZWN0aW9uLCBuZXdTZWxlY3Rpb25dO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBiYXNlU2VsZWN0aW9uOiBuZXdTZWxlY3Rpb25BcnJheSB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVOaWNTZWxlY3Rpb24oZSkge1xuICAgICAgICBjb25zdCBuZXdTZWxlY3Rpb24gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgbGV0IG5ld1NlbGVjdGlvbkFycmF5O1xuXG4gICAgICAgIGlmKHRoaXMuc3RhdGUubmljU2VsZWN0aW9uLmluZGV4T2YobmV3U2VsZWN0aW9uKSA+IC0xKSB7XG4gICAgICAgICAgICBuZXdTZWxlY3Rpb25BcnJheSA9IHRoaXMuc3RhdGUubmljU2VsZWN0aW9uLmZpbHRlcihzID0+IHMgIT09IG5ld1NlbGVjdGlvbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbkFycmF5ID0gWy4uLnRoaXMuc3RhdGUubmljU2VsZWN0aW9uLCBuZXdTZWxlY3Rpb25dO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBuaWNTZWxlY3Rpb246IG5ld1NlbGVjdGlvbkFycmF5IH0pO1xuICAgIH1cblxuICAgIGhhbmRsZVBHU2VsZWN0aW9uKGUpIHtcbiAgICAgICAgY29uc3QgbmV3U2VsZWN0aW9uID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIGxldCBuZXdTZWxlY3Rpb25BcnJheTtcblxuICAgICAgICBpZih0aGlzLnN0YXRlLnBnU2VsZWN0aW9uLmluZGV4T2YobmV3U2VsZWN0aW9uKSA+IC0xKSB7XG4gICAgICAgICAgICBuZXdTZWxlY3Rpb25BcnJheSA9IHRoaXMuc3RhdGUucGdTZWxlY3Rpb24uZmlsdGVyKHMgPT4gcyAhPT0gbmV3U2VsZWN0aW9uKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3U2VsZWN0aW9uQXJyYXkgPSBbLi4udGhpcy5zdGF0ZS5wZ1NlbGVjdGlvbiwgbmV3U2VsZWN0aW9uXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGdTZWxlY3Rpb246IG5ld1NlbGVjdGlvbkFycmF5IH0pO1xuICAgIH1cblxuICAgIGhhbmRsZVZHU2VsZWN0aW9uKGUpIHtcbiAgICAgICAgY29uc3QgbmV3U2VsZWN0aW9uID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIGxldCBuZXdTZWxlY3Rpb25BcnJheTtcblxuICAgICAgICBpZih0aGlzLnN0YXRlLnZnU2VsZWN0aW9uLmluZGV4T2YobmV3U2VsZWN0aW9uKSA+IC0xKSB7XG4gICAgICAgICAgICBuZXdTZWxlY3Rpb25BcnJheSA9IHRoaXMuc3RhdGUudmdTZWxlY3Rpb24uZmlsdGVyKHMgPT4gcyAhPT0gbmV3U2VsZWN0aW9uKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3U2VsZWN0aW9uQXJyYXkgPSBbLi4udGhpcy5zdGF0ZS52Z1NlbGVjdGlvbiwgbmV3U2VsZWN0aW9uXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmdTZWxlY3Rpb246IG5ld1NlbGVjdGlvbkFycmF5IH0pO1xuICAgIH1cblxuICAgIGhhbmRsZUZsYXZvclNlbGVjdGlvbihlKSB7XG4gICAgICAgIGNvbnN0IG5ld1NlbGVjdGlvbiA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBsZXQgbmV3U2VsZWN0aW9uQXJyYXk7XG5cbiAgICAgICAgaWYodGhpcy5zdGF0ZS5mbGF2b3JTZWxlY3Rpb24uaW5kZXhPZihuZXdTZWxlY3Rpb24pID4gLTEpIHtcbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbkFycmF5ID0gdGhpcy5zdGF0ZS5mbGF2b3JTZWxlY3Rpb24uZmlsdGVyKHMgPT4gcyAhPT0gbmV3U2VsZWN0aW9uKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3U2VsZWN0aW9uQXJyYXkgPSBbLi4udGhpcy5zdGF0ZS5mbGF2b3JTZWxlY3Rpb24sIG5ld1NlbGVjdGlvbl07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZsYXZvclNlbGVjdGlvbjogbmV3U2VsZWN0aW9uQXJyYXkgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlRGF0ZVNlbGVjdGlvbiAoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZ2VuRGF0ZTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgfVxuXG4gICAgc2hvd1NlbGVjdGVkRmllbGQobWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIF8uaW5jbHVkZXModGhpcy5zdGF0ZS5zZWxlY3RlZEZpZWxkcywgbWF0Y2gpID8gJ3Nob3cnIDogJ2hpZGUnO1xuICAgIH1cblxuICAgIGhhbmRsZVJlc2V0Rm9ybShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gc2hhcmUgdGhpcyBkZWZhdWx0IG9ialxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIC8vcmVzdG9yZSBkZWZhdWx0c1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVGb3JtU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmb3JtUGF5bG9hZCA9IHtcbiAgICAgICAgICAgIHNlbGVjdGlvbnM6IHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVNlbGVjdGlvbjogdGhpcy5zdGF0ZS50ZW1wbGF0ZVNlbGVjdGlvbixcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEZpZWxkczogdGhpcy5zdGF0ZS5zZWxlY3RlZEZpZWxkcyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVNlbGVjdGlvbjogdGhpcy5zdGF0ZS50ZW1wbGF0ZVNlbGVjdGlvbixcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEZpZWxkczogdGhpcy5zdGF0ZS5zZWxlY3RlZEZpZWxkcyxcbiAgICAgICAgICAgICAgICBuaWNTZWxlY3Rpb246IHRoaXMuc3RhdGUubmljU2VsZWN0aW9uLFxuICAgICAgICAgICAgICAgIGJhc2VTZWxlY3Rpb246IHRoaXMuc3RhdGUuYmFzZVNlbGVjdGlvbixcbiAgICAgICAgICAgICAgICBwZ1NlbGVjdGlvbjogdGhpcy5zdGF0ZS5wZ1NlbGVjdGlvbixcbiAgICAgICAgICAgICAgICB2Z1NlbGVjdGlvbjogdGhpcy5zdGF0ZS52Z1NlbGVjdGlvbixcbiAgICAgICAgICAgICAgICBmbGF2b3JTZWxlY3Rpb246IHRoaXMuc3RhdGUuZmxhdm9yU2VsZWN0aW9uLFxuICAgICAgICAgICAgICAgIGRhdGVTZWxlY3Rpb246IHRoaXMuc3RhdGUuZ2VuRGF0ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF2YWlsYWJsZTogdGhpcy5wcm9wc1xuICAgICAgICB9O1xuXG4gICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgYWN0aW9uOiAncHJpbnQnLCBkYXRhOiBmb3JtUGF5bG9hZH0pO1xuXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZUZvcm1TdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxDaGVja0JveE9yUmFkaW9Hcm91cFxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17J1doaWNoIGxheW91dCB0ZW1wbGF0ZT8nfVxuICAgICAgICAgICAgICAgICAgICBzZXROYW1lPXsndGVtcGxhdGUnfVxuICAgICAgICAgICAgICAgICAgICBjb250cm9sRnVuYz17dGhpcy5oYW5kbGVUZW1wbGF0ZVNlbGVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT17J3JhZGlvJ31cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS50ZW1wbGF0ZU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9ucz17dGhpcy5zdGF0ZS50ZW1wbGF0ZVNlbGVjdGlvbn0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwIGZpZWxkc1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+RmllbGRzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPENoZWNrQm94T3JSYWRpb0dyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXROYW1lPXsnc2VsZWN0QWxsJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xGdW5jPXt0aGlzLmhhbmRsZUFsbEZpZWxkc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9eydyYWRpbyd9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLmFsbEZpZWxkc09wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbnM9e3RoaXMuc3RhdGUuYWxsRmllbGRzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tCb3hPclJhZGlvR3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnV2hpY2ggZmllbGRzPyd9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXROYW1lPXsnZmllbGRJdGVtcyd9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsnY2hlY2tib3gnfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbEZ1bmM9e3RoaXMuaGFuZGxlRmllbGRTZWxlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLmZpZWxkT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9ucz17dGhpcy5zdGF0ZS5zZWxlY3RlZEZpZWxkc30gLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydzdWItZmllbGRzIG5pYyAnICsgdGhpcy5zaG93U2VsZWN0ZWRGaWVsZCgnbmljJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrQm94T3JSYWRpb0dyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydXaGljaCBuaWMgaXRlbXM/J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXROYW1lPXsnbmljSXRlbXMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9eydjaGVja2JveCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbEZ1bmM9e3RoaXMuaGFuZGxlTmljU2VsZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUubmljT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbnM9e3RoaXMuc3RhdGUubmljU2VsZWN0aW9ufSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydzdWItZmllbGRzIGJhc2UgJyArIHRoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ2Jhc2UnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tCb3hPclJhZGlvR3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J1doaWNoIGJhc2UgaXRlbXM/J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXROYW1lPXsnYmFzZUl0ZW1zJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsnY2hlY2tib3gnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xGdW5jPXt0aGlzLmhhbmRsZUJhc2VTZWxlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5iYXNlT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbnM9e3RoaXMuc3RhdGUuYmFzZVNlbGVjdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc3ViLWZpZWxkcyBwZyAnICsgdGhpcy5zaG93U2VsZWN0ZWRGaWVsZCgncGcnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tCb3hPclJhZGlvR3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J1doaWNoIHBnIGl0ZW1zPyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmFtZT17J3BnSXRlbXMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9eydjaGVja2JveCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbEZ1bmM9e3RoaXMuaGFuZGxlUEdTZWxlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5wZ09wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb25zPXt0aGlzLnN0YXRlLnBnU2VsZWN0aW9ufSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydzdWItZmllbGRzIHZnICcgKyB0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCd2ZycpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0JveE9yUmFkaW9Hcm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnV2hpY2ggdmcgaXRlbXM/J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXROYW1lPXsndmdJdGVtcyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17J2NoZWNrYm94J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sRnVuYz17dGhpcy5oYW5kbGVWR1NlbGVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLnZnT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbnM9e3RoaXMuc3RhdGUudmdTZWxlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3N1Yi1maWVsZHMgZmxhdm9ycyAnICsgdGhpcy5zaG93U2VsZWN0ZWRGaWVsZCgnZmxhdm9ycycpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0JveE9yUmFkaW9Hcm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnV2hpY2ggZmxhdm9yIGl0ZW1zPyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmFtZT17J2ZsYXZvckl0ZW1zJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsnY2hlY2tib3gnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xGdW5jPXt0aGlzLmhhbmRsZUZsYXZvclNlbGVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLmZsYXZvck9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb25zPXt0aGlzLnN0YXRlLmZsYXZvclNlbGVjdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFJhaXNlZEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgbGFiZWw9XCJQcmludCBMYWJlbHNcIiBmdWxsV2lkdGg9e3RydWV9Lz5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJlbHJfcHJldmlld1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJlbHJfcHJldmlld19zdGFnZVwiIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS50ZW1wbGF0ZVNlbGVjdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncHJldi10aXRsZSAnICsgdGhpcy5zaG93U2VsZWN0ZWRGaWVsZCgndGl0bGUnKX0+PHNwYW4+VGl0bGU8L3NwYW4+IHt0aGlzLnByb3BzLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3ByZXYtZGF0ZSAnICsgdGhpcy5zaG93U2VsZWN0ZWRGaWVsZCgnZGF0ZScpfT48c3Bhbj5EYXRlPC9zcGFuPiB7dGhpcy5wcm9wcy5kYXRlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3ByZXYtdXNlciAnICsgIHRoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ3VzZXInKX0+PHNwYW4+VXNlcjwvc3Bhbj4ge3RoaXMucHJvcHMudXNlcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPE5pY1JvdyBuaWM9e3RoaXMucHJvcHMubmljfSBzaG93PXt0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCduaWMnKX0gc2VsZWN0aW9ucz17dGhpcy5zdGF0ZS5uaWNTZWxlY3Rpb259Lz5cbiAgICAgICAgICAgICAgICAgICAgPEJhc2VSb3cgYmFzZT17dGhpcy5wcm9wcy5iYXNlfSBzaG93PXt0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCdiYXNlJyl9IHNlbGVjdGlvbnM9e3RoaXMuc3RhdGUuYmFzZVNlbGVjdGlvbn0vPlxuICAgICAgICAgICAgICAgICAgICA8UEdSb3cgcGc9e3RoaXMucHJvcHMucGd9IHNob3c9e3RoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ3BnJyl9IHNlbGVjdGlvbnM9e3RoaXMuc3RhdGUucGdTZWxlY3Rpb259Lz5cbiAgICAgICAgICAgICAgICAgICAgPFZHUm93IHZnPXt0aGlzLnByb3BzLnZnfSBzaG93PXt0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCd2ZycpfSBzZWxlY3Rpb25zPXt0aGlzLnN0YXRlLnZnU2VsZWN0aW9ufS8+XG4gICAgICAgICAgICAgICAgICAgIDxGbGF2b3JSb3dzIGZsYXZvcnM9e3RoaXMucHJvcHMuZmxhdm9yc30gc2hvdz17dGhpcy5zaG93U2VsZWN0ZWRGaWVsZCgnZmxhdm9ycycpfSBzZWxlY3Rpb25zPXt0aGlzLnN0YXRlLmZsYXZvclNlbGVjdGlvbn0vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL2Zvcm0vZm9ybUNvbnRhaW5lci5qc3giXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakJBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQkE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFZQTtBQWJBO0FBQ0E7QUFlQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFuREE7QUE2REE7QUFyRUE7QUF1RUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBREE7QUF4RUE7QUFzRkE7QUE1UUE7Ozs7Ozs7Ozs7Ozs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})