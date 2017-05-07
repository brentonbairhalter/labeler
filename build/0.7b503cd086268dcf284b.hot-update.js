webpackHotUpdate(0,{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(169);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkBoxOrRadioGroup_jsx__ = __webpack_require__(278);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_RaisedButton__ = __webpack_require__(457);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_RaisedButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_RaisedButton__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__baseRow_jsx__ = __webpack_require__(275);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pgRow_jsx__ = __webpack_require__(282);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vgRow_jsx__ = __webpack_require__(286);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nicRow_jsx__ = __webpack_require__(281);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__flavorRows_jsx__ = __webpack_require__(277);\n\n\n\n\n\n\n\n// Preview Region Components\n\n\n\n\n\n\n/*\n@TODO: add defaults from options preferences\n@TODO: click items to show hide\n@TODO: move subfields to compontens?\n*/\nconst allDefaults = {\n    fieldOptions: ['title', 'user', 'date', 'nic', 'base', 'pg', 'vg', 'flavors'],\n    nicOptions: ['label', 'mg', 'rat', 'ml', 'drops', 'grams', 'per'],\n    baseOptions: ['label', 'rat', 'ml', 'drops', 'grams', 'per'],\n    pgOptions: ['label', 'ml', 'drops', 'grams', 'per'],\n    vgOptions: ['label', 'ml', 'drops', 'grams', 'per'],\n    flavorOptions: ['flavor', 'ml', 'drops', 'grams', 'per']\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            templateOptions: [],\n            templateSelection: [],\n            fieldOptions: [],\n            selectedFields: [],\n            allFieldsOptions: [],\n            allFields: [],\n            nicOptions: [],\n            nicSelection: [],\n            baseOptions: [],\n            baseSelection: [],\n            pgOptions: [],\n            pgSelection: [],\n            vgOptions: [],\n            vgSelection: [],\n            flavorOptions: [],\n            flavorSelections: [],\n            genDate: ''\n        };\n        this.handleFormSubmit = this.handleFormSubmit.bind(this);\n    }\n\n    componentDidMount() {\n        //@TODO: grab these from options prefs to default\n        this.setState({\n            templateOptions: ['one', 'two', 'three'],\n            templateSelection: ['one'],\n            fieldOptions: allDefaults.fieldOptions,\n            selectedFields: allDefaults.fieldOptions,\n            allFieldsOptions: ['all', 'select'],\n            allFields: ['all'],\n            nicOptions: allDefaults.nicOptions,\n            nicSelection: allDefaults.nicOptions,\n            baseOptions: allDefaults.baseOptions,\n            baseSelection: allDefaults.baseOptions,\n            pgOptions: allDefaults.pgOptions,\n            pgSelection: allDefaults.pgOptions,\n            vgOptions: allDefaults.vgOptions,\n            vgSelection: allDefaults.vgOptions,\n            flavorOptions: allDefaults.flavorOptions,\n            flavorSelection: allDefaults.flavorOptions,\n            genDate: true\n        });\n        this.handleFormSubmit = this.handleFormSubmit.bind(this);\n        this.handleTemplateSelection = this.handleTemplateSelection.bind(this);\n        this.handleFieldSelection = this.handleFieldSelection.bind(this);\n        this.handleAllFields = this.handleAllFields.bind(this);\n        this.handleBaseSelection = this.handleBaseSelection.bind(this);\n        this.handleNicSelection = this.handleNicSelection.bind(this);\n        this.handlePGSelection = this.handlePGSelection.bind(this);\n        this.handleVGSelection = this.handleVGSelection.bind(this);\n        this.handleFlavorSelection = this.handleFlavorSelection.bind(this);\n        this.handleDateSelection = this.handleDateSelection.bind(this);\n    }\n\n    handleTemplateSelection(e) {\n        this.setState({ templateSelection: [e.target.value] });\n    }\n\n    handleFieldSelection(e) {\n        const newSelection = e.target.value;\n        let newSelectionArray;\n        if (this.state.selectedFields.indexOf(newSelection) > -1) {\n            newSelectionArray = this.state.selectedFields.filter(s => s !== newSelection);\n        } else {\n            newSelectionArray = [...this.state.selectedFields, newSelection];\n        }\n        this.setState({ selectedFields: newSelectionArray, allFields: ['select'] });\n    }\n\n    handleAllFields(e) {\n        const allFields = e.target.value;\n        if (allFields === 'all') {\n            this.setState({ allFields: [allFields], selectedFields: allDefaults.fieldOptions });\n        } else {\n            this.setState({ allFields: [allFields] });\n        }\n    }\n\n    handleBaseSelection(e) {\n        const newSelection = e.target.value;\n        let newSelectionArray;\n\n        if (this.state.baseSelection.indexOf(newSelection) > -1) {\n            newSelectionArray = this.state.baseSelection.filter(s => s !== newSelection);\n        } else {\n            newSelectionArray = [...this.state.baseSelection, newSelection];\n        }\n        this.setState({ baseSelection: newSelectionArray });\n    }\n\n    handleNicSelection(e) {\n        const newSelection = e.target.value;\n        let newSelectionArray;\n\n        if (this.state.nicSelection.indexOf(newSelection) > -1) {\n            newSelectionArray = this.state.nicSelection.filter(s => s !== newSelection);\n        } else {\n            newSelectionArray = [...this.state.nicSelection, newSelection];\n        }\n        this.setState({ nicSelection: newSelectionArray });\n    }\n\n    handlePGSelection(e) {\n        const newSelection = e.target.value;\n        let newSelectionArray;\n\n        if (this.state.pgSelection.indexOf(newSelection) > -1) {\n            newSelectionArray = this.state.pgSelection.filter(s => s !== newSelection);\n        } else {\n            newSelectionArray = [...this.state.pgSelection, newSelection];\n        }\n        this.setState({ pgSelection: newSelectionArray });\n    }\n\n    handleVGSelection(e) {\n        const newSelection = e.target.value;\n        let newSelectionArray;\n\n        if (this.state.vgSelection.indexOf(newSelection) > -1) {\n            newSelectionArray = this.state.vgSelection.filter(s => s !== newSelection);\n        } else {\n            newSelectionArray = [...this.state.vgSelection, newSelection];\n        }\n        this.setState({ vgSelection: newSelectionArray });\n    }\n\n    handleFlavorSelection(e) {\n        const newSelection = e.target.value;\n        let newSelectionArray;\n\n        if (this.state.flavorSelection.indexOf(newSelection) > -1) {\n            newSelectionArray = this.state.flavorSelection.filter(s => s !== newSelection);\n        } else {\n            newSelectionArray = [...this.state.flavorSelection, newSelection];\n        }\n        this.setState({ flavorSelection: newSelectionArray });\n    }\n\n    handleDateSelection(e) {\n        this.setState({ genDate: e.target.value });\n    }\n\n    showSelectedField(match) {\n        return __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.includes(this.state.selectedFields, match) ? 'show' : 'hide';\n    }\n\n    handleResetForm(e) {\n        e.preventDefault();\n        // share this default obj\n        this.setState({\n            //restore defaults\n        });\n    }\n\n    getDate() {\n        const currentDate = new Date(),\n              day = currentDate.getDate(),\n              month = currentDate.getMonth() + 1,\n              year = currentDate.getFullYear();\n        return month + \"/\" + day + \"/\" + year;\n    }\n\n    handleFormSubmit(e) {\n        e.preventDefault();\n\n        const formPayload = {\n            selections: {\n                templateSelection: this.state.templateSelection,\n                selectedFields: this.state.selectedFields,\n                templateSelection: this.state.templateSelection,\n                selectedFields: this.state.selectedFields,\n                nicSelection: this.state.nicSelection,\n                baseSelection: this.state.baseSelection,\n                pgSelection: this.state.pgSelection,\n                vgSelection: this.state.vgSelection,\n                flavorSelection: this.state.flavorSelection,\n                genDate: this.state.genDate,\n                date: this.getDate()\n            },\n            available: this.props\n        };\n\n        chrome.runtime.sendMessage({ action: 'print', data: formPayload });\n    }\n\n    render() {\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            null,\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                \"form\",\n                { onSubmit: this.handleFormSubmit },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__checkBoxOrRadioGroup_jsx__[\"a\" /* default */], {\n                    title: 'Which layout template?',\n                    setName: 'template',\n                    controlFunc: this.handleTemplateSelection,\n                    type: 'radio',\n                    options: this.state.templateOptions,\n                    selectedOptions: this.state.templateSelection }),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"div\",\n                    { className: \"group fields\" },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"h2\",\n                        null,\n                        \"Fields\"\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__checkBoxOrRadioGroup_jsx__[\"a\" /* default */], {\n                        setName: 'selectAll',\n                        controlFunc: this.handleAllFields,\n                        type: 'radio',\n                        options: this.state.allFieldsOptions,\n                        selectedOptions: this.state.allFields }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__checkBoxOrRadioGroup_jsx__[\"a\" /* default */], {\n                        title: 'Which fields?',\n                        setName: 'fieldItems',\n                        type: 'checkbox',\n                        controlFunc: this.handleFieldSelection,\n                        options: this.state.fieldOptions,\n                        selectedOptions: this.state.selectedFields }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { className: 'sub-fields nic ' + this.showSelectedField('nic') },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__checkBoxOrRadioGroup_jsx__[\"a\" /* default */], {\n                            title: 'Which nic items?',\n                            setName: 'nicItems',\n                            type: 'checkbox',\n                            controlFunc: this.handleNicSelection,\n                            options: this.state.nicOptions,\n                            selectedOptions: this.state.nicSelection })\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { className: 'sub-fields base ' + this.showSelectedField('base') },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__checkBoxOrRadioGroup_jsx__[\"a\" /* default */], {\n                            title: 'Which base items?',\n                            setName: 'baseItems',\n                            type: 'checkbox',\n                            controlFunc: this.handleBaseSelection,\n                            options: this.state.baseOptions,\n                            selectedOptions: this.state.baseSelection })\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { className: 'sub-fields pg ' + this.showSelectedField('pg') },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__checkBoxOrRadioGroup_jsx__[\"a\" /* default */], {\n                            title: 'Which pg items?',\n                            setName: 'pgItems',\n                            type: 'checkbox',\n                            controlFunc: this.handlePGSelection,\n                            options: this.state.pgOptions,\n                            selectedOptions: this.state.pgSelection })\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { className: 'sub-fields vg ' + this.showSelectedField('vg') },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__checkBoxOrRadioGroup_jsx__[\"a\" /* default */], {\n                            title: 'Which vg items?',\n                            setName: 'vgItems',\n                            type: 'checkbox',\n                            controlFunc: this.handleVGSelection,\n                            options: this.state.vgOptions,\n                            selectedOptions: this.state.vgSelection })\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { className: 'sub-fields flavors ' + this.showSelectedField('flavors') },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__checkBoxOrRadioGroup_jsx__[\"a\" /* default */], {\n                            title: 'Which flavor items?',\n                            setName: 'flavorItems',\n                            type: 'checkbox',\n                            controlFunc: this.handleFlavorSelection,\n                            options: this.state.flavorOptions,\n                            selectedOptions: this.state.flavorSelection })\n                    )\n                ),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_RaisedButton___default.a, { type: \"submit\", label: \"Print Labels\", fullWidth: true })\n            ),\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                \"div\",\n                { id: \"elr_preview\" },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"div\",\n                    { id: \"elr_preview_stage\", className: this.state.templateSelection },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { className: 'prev-title ' + this.showSelectedField('title') },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            \"span\",\n                            null,\n                            \"Title\"\n                        ),\n                        \" \",\n                        this.props.title\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { className: 'prev-date ' + this.showSelectedField('date') },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            \"span\",\n                            null,\n                            \"Date\"\n                        ),\n                        \" \",\n                        this.getDate()\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { className: 'prev-user ' + this.showSelectedField('user') },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            \"span\",\n                            null,\n                            \"User\"\n                        ),\n                        \" \",\n                        this.props.user\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__nicRow_jsx__[\"a\" /* default */], { nic: this.props.nic, show: this.showSelectedField('nic'), selections: this.state.nicSelection }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__baseRow_jsx__[\"a\" /* default */], { base: this.props.base, show: this.showSelectedField('base'), selections: this.state.baseSelection }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__pgRow_jsx__[\"a\" /* default */], { pg: this.props.pg, show: this.showSelectedField('pg'), selections: this.state.pgSelection }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__vgRow_jsx__[\"a\" /* default */], { vg: this.props.vg, show: this.showSelectedField('vg'), selections: this.state.vgSelection }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__flavorRows_jsx__[\"a\" /* default */], { flavors: this.props.flavors, show: this.showSelectedField('flavors'), selections: this.state.flavorSelection })\n                )\n            )\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjc5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL2Zvcm0vZm9ybUNvbnRhaW5lci5qc3g/MWQ1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBDaGVja0JveE9yUmFkaW9Hcm91cCBmcm9tIFwiLi9jaGVja0JveE9yUmFkaW9Hcm91cC5qc3hcIjtcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcblxuXG4vLyBQcmV2aWV3IFJlZ2lvbiBDb21wb25lbnRzXG5pbXBvcnQgQmFzZVJvdyBmcm9tIFwiLi4vYmFzZVJvdy5qc3hcIjtcbmltcG9ydCBQR1JvdyBmcm9tIFwiLi4vcGdSb3cuanN4XCI7XG5pbXBvcnQgVkdSb3cgZnJvbSBcIi4uL3ZnUm93LmpzeFwiO1xuaW1wb3J0IE5pY1JvdyBmcm9tIFwiLi4vbmljUm93LmpzeFwiO1xuaW1wb3J0IEZsYXZvclJvd3MgZnJvbSBcIi4uL2ZsYXZvclJvd3MuanN4XCI7XG5cbi8qXG5AVE9ETzogYWRkIGRlZmF1bHRzIGZyb20gb3B0aW9ucyBwcmVmZXJlbmNlc1xuQFRPRE86IGNsaWNrIGl0ZW1zIHRvIHNob3cgaGlkZVxuQFRPRE86IG1vdmUgc3ViZmllbGRzIHRvIGNvbXBvbnRlbnM/XG4qL1xuY29uc3QgYWxsRGVmYXVsdHMgPSB7XG4gICAgZmllbGRPcHRpb25zOiAgIFsndGl0bGUnLCAndXNlcicsICdkYXRlJywgJ25pYycsICdiYXNlJywgJ3BnJywgJ3ZnJywgJ2ZsYXZvcnMnXSxcbiAgICBuaWNPcHRpb25zOiAgICAgWydsYWJlbCcsICdtZycsICdyYXQnLCAnbWwnLCAnZHJvcHMnLCAnZ3JhbXMnLCAncGVyJ10sXG4gICAgYmFzZU9wdGlvbnM6ICAgIFsnbGFiZWwnLCAncmF0JywgJ21sJywgJ2Ryb3BzJywgJ2dyYW1zJywgJ3BlciddLFxuICAgIHBnT3B0aW9uczogICAgICBbJ2xhYmVsJywgJ21sJywgJ2Ryb3BzJywgJ2dyYW1zJywgJ3BlciddLFxuICAgIHZnT3B0aW9uczogICAgICBbJ2xhYmVsJywgJ21sJywgJ2Ryb3BzJywgJ2dyYW1zJywgJ3BlciddLFxuICAgIGZsYXZvck9wdGlvbnM6ICBbJ2ZsYXZvcicsICdtbCcsICdkcm9wcycsICdncmFtcycsICdwZXInXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlT3B0aW9uczogW10sXG4gICAgICAgICAgICB0ZW1wbGF0ZVNlbGVjdGlvbjogW10sXG4gICAgICAgICAgICBmaWVsZE9wdGlvbnM6IFtdLFxuICAgICAgICAgICAgc2VsZWN0ZWRGaWVsZHM6IFtdLFxuICAgICAgICAgICAgYWxsRmllbGRzT3B0aW9uczogW10sXG4gICAgICAgICAgICBhbGxGaWVsZHM6IFtdLFxuICAgICAgICAgICAgbmljT3B0aW9uczogW10sXG4gICAgICAgICAgICBuaWNTZWxlY3Rpb246IFtdLFxuICAgICAgICAgICAgYmFzZU9wdGlvbnM6IFtdLFxuICAgICAgICAgICAgYmFzZVNlbGVjdGlvbjogW10sXG4gICAgICAgICAgICBwZ09wdGlvbnM6IFtdLFxuICAgICAgICAgICAgcGdTZWxlY3Rpb246IFtdLFxuICAgICAgICAgICAgdmdPcHRpb25zOiBbXSxcbiAgICAgICAgICAgIHZnU2VsZWN0aW9uOiBbXSxcbiAgICAgICAgICAgIGZsYXZvck9wdGlvbnM6IFtdLFxuICAgICAgICAgICAgZmxhdm9yU2VsZWN0aW9uczogW10sXG4gICAgICAgICAgICBnZW5EYXRlOiAnJ1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZUZvcm1TdWJtaXQgPSB0aGlzLmhhbmRsZUZvcm1TdWJtaXQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgLy9AVE9ETzogZ3JhYiB0aGVzZSBmcm9tIG9wdGlvbnMgcHJlZnMgdG8gZGVmYXVsdFxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRlbXBsYXRlT3B0aW9uczogWydvbmUnLCAndHdvJywgJ3RocmVlJ10sXG4gICAgICAgICAgICB0ZW1wbGF0ZVNlbGVjdGlvbjogWydvbmUnXSxcbiAgICAgICAgICAgIGZpZWxkT3B0aW9uczogYWxsRGVmYXVsdHMuZmllbGRPcHRpb25zLFxuICAgICAgICAgICAgc2VsZWN0ZWRGaWVsZHM6IGFsbERlZmF1bHRzLmZpZWxkT3B0aW9ucyxcbiAgICAgICAgICAgIGFsbEZpZWxkc09wdGlvbnM6IFsnYWxsJywgJ3NlbGVjdCddLFxuICAgICAgICAgICAgYWxsRmllbGRzOiBbJ2FsbCddLFxuICAgICAgICAgICAgbmljT3B0aW9uczogYWxsRGVmYXVsdHMubmljT3B0aW9ucyxcbiAgICAgICAgICAgIG5pY1NlbGVjdGlvbjogYWxsRGVmYXVsdHMubmljT3B0aW9ucyxcbiAgICAgICAgICAgIGJhc2VPcHRpb25zOiBhbGxEZWZhdWx0cy5iYXNlT3B0aW9ucyxcbiAgICAgICAgICAgIGJhc2VTZWxlY3Rpb246IGFsbERlZmF1bHRzLmJhc2VPcHRpb25zLFxuICAgICAgICAgICAgcGdPcHRpb25zOiBhbGxEZWZhdWx0cy5wZ09wdGlvbnMsXG4gICAgICAgICAgICBwZ1NlbGVjdGlvbjogYWxsRGVmYXVsdHMucGdPcHRpb25zLFxuICAgICAgICAgICAgdmdPcHRpb25zOiBhbGxEZWZhdWx0cy52Z09wdGlvbnMsXG4gICAgICAgICAgICB2Z1NlbGVjdGlvbjogYWxsRGVmYXVsdHMudmdPcHRpb25zLFxuICAgICAgICAgICAgZmxhdm9yT3B0aW9uczogYWxsRGVmYXVsdHMuZmxhdm9yT3B0aW9ucyxcbiAgICAgICAgICAgIGZsYXZvclNlbGVjdGlvbjogYWxsRGVmYXVsdHMuZmxhdm9yT3B0aW9ucyxcbiAgICAgICAgICAgIGdlbkRhdGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaGFuZGxlRm9ybVN1Ym1pdCA9IHRoaXMuaGFuZGxlRm9ybVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVRlbXBsYXRlU2VsZWN0aW9uID0gdGhpcy5oYW5kbGVUZW1wbGF0ZVNlbGVjdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUZpZWxkU2VsZWN0aW9uID0gdGhpcy5oYW5kbGVGaWVsZFNlbGVjdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUFsbEZpZWxkcyA9IHRoaXMuaGFuZGxlQWxsRmllbGRzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQmFzZVNlbGVjdGlvbiA9IHRoaXMuaGFuZGxlQmFzZVNlbGVjdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZU5pY1NlbGVjdGlvbiA9IHRoaXMuaGFuZGxlTmljU2VsZWN0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlUEdTZWxlY3Rpb24gPSB0aGlzLmhhbmRsZVBHU2VsZWN0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlVkdTZWxlY3Rpb24gPSB0aGlzLmhhbmRsZVZHU2VsZWN0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlRmxhdm9yU2VsZWN0aW9uID0gdGhpcy5oYW5kbGVGbGF2b3JTZWxlY3Rpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVEYXRlU2VsZWN0aW9uID0gdGhpcy5oYW5kbGVEYXRlU2VsZWN0aW9uLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgaGFuZGxlVGVtcGxhdGVTZWxlY3Rpb24oZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGVtcGxhdGVTZWxlY3Rpb246IFtlLnRhcmdldC52YWx1ZV0gfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlRmllbGRTZWxlY3Rpb24oZSkge1xuICAgICAgICBjb25zdCBuZXdTZWxlY3Rpb24gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgbGV0IG5ld1NlbGVjdGlvbkFycmF5O1xuICAgICAgICBpZih0aGlzLnN0YXRlLnNlbGVjdGVkRmllbGRzLmluZGV4T2YobmV3U2VsZWN0aW9uKSA+IC0xKSB7XG4gICAgICAgICAgICBuZXdTZWxlY3Rpb25BcnJheSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRGaWVsZHMuZmlsdGVyKHMgPT4gcyAhPT0gbmV3U2VsZWN0aW9uKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3U2VsZWN0aW9uQXJyYXkgPSBbLi4udGhpcy5zdGF0ZS5zZWxlY3RlZEZpZWxkcywgbmV3U2VsZWN0aW9uXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRGaWVsZHM6IG5ld1NlbGVjdGlvbkFycmF5LCBhbGxGaWVsZHM6IFsnc2VsZWN0J10gfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQWxsRmllbGRzKGUpIHtcbiAgICAgICAgY29uc3QgYWxsRmllbGRzID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIGlmIChhbGxGaWVsZHMgPT09ICdhbGwnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWxsRmllbGRzOiBbYWxsRmllbGRzXSwgc2VsZWN0ZWRGaWVsZHM6IGFsbERlZmF1bHRzLmZpZWxkT3B0aW9ucyB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbGxGaWVsZHM6IFthbGxGaWVsZHNdIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQmFzZVNlbGVjdGlvbihlKSB7XG4gICAgICAgIGNvbnN0IG5ld1NlbGVjdGlvbiA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBsZXQgbmV3U2VsZWN0aW9uQXJyYXk7XG5cbiAgICAgICAgaWYodGhpcy5zdGF0ZS5iYXNlU2VsZWN0aW9uLmluZGV4T2YobmV3U2VsZWN0aW9uKSA+IC0xKSB7XG4gICAgICAgICAgICBuZXdTZWxlY3Rpb25BcnJheSA9IHRoaXMuc3RhdGUuYmFzZVNlbGVjdGlvbi5maWx0ZXIocyA9PiBzICE9PSBuZXdTZWxlY3Rpb24pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdTZWxlY3Rpb25BcnJheSA9IFsuLi50aGlzLnN0YXRlLmJhc2VTZWxlY3Rpb24sIG5ld1NlbGVjdGlvbl07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJhc2VTZWxlY3Rpb246IG5ld1NlbGVjdGlvbkFycmF5IH0pO1xuICAgIH1cblxuICAgIGhhbmRsZU5pY1NlbGVjdGlvbihlKSB7XG4gICAgICAgIGNvbnN0IG5ld1NlbGVjdGlvbiA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBsZXQgbmV3U2VsZWN0aW9uQXJyYXk7XG5cbiAgICAgICAgaWYodGhpcy5zdGF0ZS5uaWNTZWxlY3Rpb24uaW5kZXhPZihuZXdTZWxlY3Rpb24pID4gLTEpIHtcbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbkFycmF5ID0gdGhpcy5zdGF0ZS5uaWNTZWxlY3Rpb24uZmlsdGVyKHMgPT4gcyAhPT0gbmV3U2VsZWN0aW9uKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3U2VsZWN0aW9uQXJyYXkgPSBbLi4udGhpcy5zdGF0ZS5uaWNTZWxlY3Rpb24sIG5ld1NlbGVjdGlvbl07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5pY1NlbGVjdGlvbjogbmV3U2VsZWN0aW9uQXJyYXkgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlUEdTZWxlY3Rpb24oZSkge1xuICAgICAgICBjb25zdCBuZXdTZWxlY3Rpb24gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgbGV0IG5ld1NlbGVjdGlvbkFycmF5O1xuXG4gICAgICAgIGlmKHRoaXMuc3RhdGUucGdTZWxlY3Rpb24uaW5kZXhPZihuZXdTZWxlY3Rpb24pID4gLTEpIHtcbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbkFycmF5ID0gdGhpcy5zdGF0ZS5wZ1NlbGVjdGlvbi5maWx0ZXIocyA9PiBzICE9PSBuZXdTZWxlY3Rpb24pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdTZWxlY3Rpb25BcnJheSA9IFsuLi50aGlzLnN0YXRlLnBnU2VsZWN0aW9uLCBuZXdTZWxlY3Rpb25dO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwZ1NlbGVjdGlvbjogbmV3U2VsZWN0aW9uQXJyYXkgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlVkdTZWxlY3Rpb24oZSkge1xuICAgICAgICBjb25zdCBuZXdTZWxlY3Rpb24gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgbGV0IG5ld1NlbGVjdGlvbkFycmF5O1xuXG4gICAgICAgIGlmKHRoaXMuc3RhdGUudmdTZWxlY3Rpb24uaW5kZXhPZihuZXdTZWxlY3Rpb24pID4gLTEpIHtcbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbkFycmF5ID0gdGhpcy5zdGF0ZS52Z1NlbGVjdGlvbi5maWx0ZXIocyA9PiBzICE9PSBuZXdTZWxlY3Rpb24pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdTZWxlY3Rpb25BcnJheSA9IFsuLi50aGlzLnN0YXRlLnZnU2VsZWN0aW9uLCBuZXdTZWxlY3Rpb25dO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2Z1NlbGVjdGlvbjogbmV3U2VsZWN0aW9uQXJyYXkgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlRmxhdm9yU2VsZWN0aW9uKGUpIHtcbiAgICAgICAgY29uc3QgbmV3U2VsZWN0aW9uID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIGxldCBuZXdTZWxlY3Rpb25BcnJheTtcblxuICAgICAgICBpZih0aGlzLnN0YXRlLmZsYXZvclNlbGVjdGlvbi5pbmRleE9mKG5ld1NlbGVjdGlvbikgPiAtMSkge1xuICAgICAgICAgICAgbmV3U2VsZWN0aW9uQXJyYXkgPSB0aGlzLnN0YXRlLmZsYXZvclNlbGVjdGlvbi5maWx0ZXIocyA9PiBzICE9PSBuZXdTZWxlY3Rpb24pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdTZWxlY3Rpb25BcnJheSA9IFsuLi50aGlzLnN0YXRlLmZsYXZvclNlbGVjdGlvbiwgbmV3U2VsZWN0aW9uXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZmxhdm9yU2VsZWN0aW9uOiBuZXdTZWxlY3Rpb25BcnJheSB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVEYXRlU2VsZWN0aW9uIChlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBnZW5EYXRlOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICB9XG5cbiAgICBzaG93U2VsZWN0ZWRGaWVsZChtYXRjaCkge1xuICAgICAgICByZXR1cm4gXy5pbmNsdWRlcyh0aGlzLnN0YXRlLnNlbGVjdGVkRmllbGRzLCBtYXRjaCkgPyAnc2hvdycgOiAnaGlkZSc7XG4gICAgfVxuXG4gICAgaGFuZGxlUmVzZXRGb3JtKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBzaGFyZSB0aGlzIGRlZmF1bHQgb2JqXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgLy9yZXN0b3JlIGRlZmF1bHRzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldERhdGUoKSB7XG4gICAgICAgIGNvbnN0ICAgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAgIGRheSA9IGN1cnJlbnREYXRlLmdldERhdGUoKSxcbiAgICAgICAgICAgICAgICBtb250aCA9IGN1cnJlbnREYXRlLmdldE1vbnRoKCkgKyAxLFxuICAgICAgICAgICAgICAgIHllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICByZXR1cm4gKG1vbnRoICsgXCIvXCIgKyAgZGF5ICsgXCIvXCIgKyB5ZWFyKTtcbiAgICB9XG5cbiAgICBoYW5kbGVGb3JtU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGZvcm1QYXlsb2FkID0ge1xuICAgICAgICAgICAgc2VsZWN0aW9uczoge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlU2VsZWN0aW9uOiB0aGlzLnN0YXRlLnRlbXBsYXRlU2VsZWN0aW9uLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkRmllbGRzOiB0aGlzLnN0YXRlLnNlbGVjdGVkRmllbGRzLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlU2VsZWN0aW9uOiB0aGlzLnN0YXRlLnRlbXBsYXRlU2VsZWN0aW9uLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkRmllbGRzOiB0aGlzLnN0YXRlLnNlbGVjdGVkRmllbGRzLFxuICAgICAgICAgICAgICAgIG5pY1NlbGVjdGlvbjogdGhpcy5zdGF0ZS5uaWNTZWxlY3Rpb24sXG4gICAgICAgICAgICAgICAgYmFzZVNlbGVjdGlvbjogdGhpcy5zdGF0ZS5iYXNlU2VsZWN0aW9uLFxuICAgICAgICAgICAgICAgIHBnU2VsZWN0aW9uOiB0aGlzLnN0YXRlLnBnU2VsZWN0aW9uLFxuICAgICAgICAgICAgICAgIHZnU2VsZWN0aW9uOiB0aGlzLnN0YXRlLnZnU2VsZWN0aW9uLFxuICAgICAgICAgICAgICAgIGZsYXZvclNlbGVjdGlvbjogdGhpcy5zdGF0ZS5mbGF2b3JTZWxlY3Rpb24sXG4gICAgICAgICAgICAgICAgZ2VuRGF0ZTogdGhpcy5zdGF0ZS5nZW5EYXRlLFxuICAgICAgICAgICAgICAgIGRhdGU6IHRoaXMuZ2V0RGF0ZSgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXZhaWxhYmxlOiB0aGlzLnByb3BzXG4gICAgICAgIH07XG5cbiAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBhY3Rpb246ICdwcmludCcsIGRhdGE6IGZvcm1QYXlsb2FkfSk7XG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlRm9ybVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPENoZWNrQm94T3JSYWRpb0dyb3VwXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnV2hpY2ggbGF5b3V0IHRlbXBsYXRlPyd9XG4gICAgICAgICAgICAgICAgICAgIHNldE5hbWU9eyd0ZW1wbGF0ZSd9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xGdW5jPXt0aGlzLmhhbmRsZVRlbXBsYXRlU2VsZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICB0eXBlPXsncmFkaW8nfVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLnRlbXBsYXRlT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb25zPXt0aGlzLnN0YXRlLnRlbXBsYXRlU2VsZWN0aW9ufSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAgZmllbGRzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5GaWVsZHM8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tCb3hPclJhZGlvR3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE5hbWU9eydzZWxlY3RBbGwnfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbEZ1bmM9e3RoaXMuaGFuZGxlQWxsRmllbGRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17J3JhZGlvJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUuYWxsRmllbGRzT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9ucz17dGhpcy5zdGF0ZS5hbGxGaWVsZHN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxDaGVja0JveE9yUmFkaW9Hcm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydXaGljaCBmaWVsZHM/J31cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE5hbWU9eydmaWVsZEl0ZW1zJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9eydjaGVja2JveCd9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sRnVuYz17dGhpcy5oYW5kbGVGaWVsZFNlbGVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUuZmllbGRPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb25zPXt0aGlzLnN0YXRlLnNlbGVjdGVkRmllbGRzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3N1Yi1maWVsZHMgbmljICcgKyB0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCduaWMnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tCb3hPclJhZGlvR3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J1doaWNoIG5pYyBpdGVtcz8nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE5hbWU9eyduaWNJdGVtcyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17J2NoZWNrYm94J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sRnVuYz17dGhpcy5oYW5kbGVOaWNTZWxlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5uaWNPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9ucz17dGhpcy5zdGF0ZS5uaWNTZWxlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3N1Yi1maWVsZHMgYmFzZSAnICsgdGhpcy5zaG93U2VsZWN0ZWRGaWVsZCgnYmFzZScpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0JveE9yUmFkaW9Hcm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnV2hpY2ggYmFzZSBpdGVtcz8nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE5hbWU9eydiYXNlSXRlbXMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9eydjaGVja2JveCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbEZ1bmM9e3RoaXMuaGFuZGxlQmFzZVNlbGVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLmJhc2VPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9ucz17dGhpcy5zdGF0ZS5iYXNlU2VsZWN0aW9ufSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydzdWItZmllbGRzIHBnICcgKyB0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCdwZycpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0JveE9yUmFkaW9Hcm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnV2hpY2ggcGcgaXRlbXM/J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXROYW1lPXsncGdJdGVtcyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17J2NoZWNrYm94J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sRnVuYz17dGhpcy5oYW5kbGVQR1NlbGVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLnBnT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbnM9e3RoaXMuc3RhdGUucGdTZWxlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3N1Yi1maWVsZHMgdmcgJyArIHRoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ3ZnJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrQm94T3JSYWRpb0dyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydXaGljaCB2ZyBpdGVtcz8nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE5hbWU9eyd2Z0l0ZW1zJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsnY2hlY2tib3gnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xGdW5jPXt0aGlzLmhhbmRsZVZHU2VsZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUudmdPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9ucz17dGhpcy5zdGF0ZS52Z1NlbGVjdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc3ViLWZpZWxkcyBmbGF2b3JzICcgKyB0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCdmbGF2b3JzJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrQm94T3JSYWRpb0dyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydXaGljaCBmbGF2b3IgaXRlbXM/J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXROYW1lPXsnZmxhdm9ySXRlbXMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9eydjaGVja2JveCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbEZ1bmM9e3RoaXMuaGFuZGxlRmxhdm9yU2VsZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUuZmxhdm9yT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbnM9e3RoaXMuc3RhdGUuZmxhdm9yU2VsZWN0aW9ufSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8UmFpc2VkQnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBsYWJlbD1cIlByaW50IExhYmVsc1wiIGZ1bGxXaWR0aD17dHJ1ZX0gLz5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJlbHJfcHJldmlld1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJlbHJfcHJldmlld19zdGFnZVwiIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS50ZW1wbGF0ZVNlbGVjdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncHJldi10aXRsZSAnICsgdGhpcy5zaG93U2VsZWN0ZWRGaWVsZCgndGl0bGUnKX0+PHNwYW4+VGl0bGU8L3NwYW4+IHt0aGlzLnByb3BzLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3ByZXYtZGF0ZSAnICsgdGhpcy5zaG93U2VsZWN0ZWRGaWVsZCgnZGF0ZScpfT48c3Bhbj5EYXRlPC9zcGFuPiB7dGhpcy5nZXREYXRlKCl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncHJldi11c2VyICcgKyAgdGhpcy5zaG93U2VsZWN0ZWRGaWVsZCgndXNlcicpfT48c3Bhbj5Vc2VyPC9zcGFuPiB7dGhpcy5wcm9wcy51c2VyfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8TmljUm93IG5pYz17dGhpcy5wcm9wcy5uaWN9IHNob3c9e3RoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ25pYycpfSBzZWxlY3Rpb25zPXt0aGlzLnN0YXRlLm5pY1NlbGVjdGlvbn0vPlxuICAgICAgICAgICAgICAgICAgICA8QmFzZVJvdyBiYXNlPXt0aGlzLnByb3BzLmJhc2V9IHNob3c9e3RoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ2Jhc2UnKX0gc2VsZWN0aW9ucz17dGhpcy5zdGF0ZS5iYXNlU2VsZWN0aW9ufS8+XG4gICAgICAgICAgICAgICAgICAgIDxQR1JvdyBwZz17dGhpcy5wcm9wcy5wZ30gc2hvdz17dGhpcy5zaG93U2VsZWN0ZWRGaWVsZCgncGcnKX0gc2VsZWN0aW9ucz17dGhpcy5zdGF0ZS5wZ1NlbGVjdGlvbn0vPlxuICAgICAgICAgICAgICAgICAgICA8VkdSb3cgdmc9e3RoaXMucHJvcHMudmd9IHNob3c9e3RoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ3ZnJyl9IHNlbGVjdGlvbnM9e3RoaXMuc3RhdGUudmdTZWxlY3Rpb259Lz5cbiAgICAgICAgICAgICAgICAgICAgPEZsYXZvclJvd3MgZmxhdm9ycz17dGhpcy5wcm9wcy5mbGF2b3JzfSBzaG93PXt0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCdmbGF2b3JzJyl9IHNlbGVjdGlvbnM9e3RoaXMuc3RhdGUuZmxhdm9yU2VsZWN0aW9ufS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvZm9ybS9mb3JtQ29udGFpbmVyLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakJBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFhQTtBQWRBO0FBQ0E7QUFnQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBbkRBO0FBNkRBO0FBckVBO0FBdUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQURBO0FBeEVBO0FBc0ZBO0FBdFJBOzs7Ozs7Ozs7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})