import { h, Host } from "@stencil/core";
export class DdaRangeSlider {
    constructor() {
        this.min = 0;
        this.max = 100;
        this.step = 1;
        this.initial_min = 0;
        this.initial_max = 100;
        this.custom_class = '';
    }
    componentWillLoad() {
        this.min_value = this.initial_min;
        this.max_value = this.initial_max;
    }
    handleMinChange(event) {
        const value = Number(event.target.value);
        if (value <= this.max_value - this.step) {
            this.min_value = value;
        }
    }
    handleMaxChange(event) {
        const value = Number(event.target.value);
        if (value >= this.min_value + this.step) {
            this.max_value = value;
        }
    }
    getPercentage(value) {
        return ((value - this.min) / (this.max - this.min)) * 100;
    }
    render() {
        return (h(Host, { key: 'e9afd1fc39873d711a26d1df6cca1295e40b7f4c' }, h("div", { key: '8b637585fa69c15366fd482318941a4565afed13', class: `dda-range-slider-container dda-tooltip-${this.tooltip_position} ${this.custom_class} ${this.component_mode}` }, h("div", { key: '5d99117d34b701f224991c43b4f966aa1f418266', class: "dda-range-slider" }, h("div", { key: 'e404d82a51dded499c072d1001e8e52dffeeb7c7', class: "dda-range-slider-track", style: {
                left: `${this.getPercentage(this.min_value)}%`,
                right: `${100 - this.getPercentage(this.max_value)}%`,
            } }, h("span", { key: '111acb90f4d051488448138031940c90a1a7528a', class: "min-label" }, this.min_value, "%"), h("span", { key: '7ba4418113fa32ae5a099cd0799cc6fd614cf649', class: "max-label" }, this.max_value, "%")), h("label", { key: 'f66dd9d5cc4370e46293015fd10a6aa62650d99e', htmlFor: this.left_input_id }, h("input", { key: 'a263746a9dde346a99a452855be254d74bb8ef20', id: this.left_input_id, "aria-label": this.left_aria_label, type: "range", min: this.min, max: this.max, step: this.step, value: this.min_value, onInput: (event) => this.handleMinChange(event), class: "dda-range-slider-input", style: { zIndex: `${this.min_value > this.max - this.min_value ? 5 : 3}` } })), h("label", { key: '55a0a05a6a98478de47545d9b3c9da363221a6f6', htmlFor: this.right_input_id }, h("input", { key: 'b86ce92eb77fdba473bec04982eff168ff73fa78', id: this.right_input_id, "aria-label": this.right_aria_label, type: "range", min: this.min, max: this.max, step: this.step, value: this.max_value, onInput: (event) => this.handleMaxChange(event), class: "dda-range-slider-input", style: { zIndex: `${this.max_value < this.max - this.min_value ? 5 : 3}` } }))))));
    }
    static get is() { return "dda-range-slider"; }
    static get originalStyleUrls() {
        return {
            "$": ["dda-range-slider.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dda-range-slider.css"]
        };
    }
    static get properties() {
        return {
            "min": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "min",
                "reflect": false,
                "defaultValue": "0"
            },
            "max": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "max",
                "reflect": false,
                "defaultValue": "100"
            },
            "step": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "step",
                "reflect": false,
                "defaultValue": "1"
            },
            "initial_min": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "initial_min",
                "reflect": false,
                "defaultValue": "0"
            },
            "initial_max": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "initial_max",
                "reflect": false,
                "defaultValue": "100"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": false
            },
            "tooltip_position": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "tooltip_position",
                "reflect": false
            },
            "custom_class": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "custom_class",
                "reflect": false,
                "defaultValue": "''"
            },
            "component_mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "component_mode",
                "reflect": false
            },
            "left_input_id": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "left_input_id",
                "reflect": false
            },
            "right_input_id": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "right_input_id",
                "reflect": false
            },
            "left_aria_label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "left_aria_label",
                "reflect": false
            },
            "right_aria_label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "right_aria_label",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "min_value": {},
            "max_value": {}
        };
    }
}
//# sourceMappingURL=dda-range-slider.js.map
