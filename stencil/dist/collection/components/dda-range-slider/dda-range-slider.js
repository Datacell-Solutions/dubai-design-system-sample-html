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
        return (h(Host, { key: 'b5dce63173f9d571fe756fda3a8ceb9bcfa296f3' }, h("div", { key: 'e64e453753807ba91770c440bf038f5ed88bd099', class: `dda-range-slider-container dda-tooltip-${this.tooltip_position} ${this.custom_class} ${this.component_mode}` }, h("div", { key: '14a758970aa683ae5b353748182ec22de3832380', class: "dda-range-slider" }, h("div", { key: '0affe74e8dffcfb570477240fff96d9c54e3d4ba', class: "dda-range-slider-track", style: {
                left: `${this.getPercentage(this.min_value)}%`,
                right: `${100 - this.getPercentage(this.max_value)}%`,
            } }, h("span", { key: '056d093b27d750664f80c0f662ff324cdddbc952', class: "min-label" }, this.min_value, "%"), h("span", { key: '91f2a6e073ff021c8a82bf013e37191b38dc4fbe', class: "max-label" }, this.max_value, "%")), h("label", { key: 'a8127312be4e3df032e98618785868abfec07bb0', htmlFor: this.left_input_id }, h("input", { key: 'c18b8a8c6db47eb407bc8e13a6e59b5dede36bc7', id: this.left_input_id, "aria-label": this.left_aria_label, type: "range", min: this.min, max: this.max, step: this.step, value: this.min_value, onInput: (event) => this.handleMinChange(event), class: "dda-range-slider-input", style: { zIndex: `${this.min_value > this.max - this.min_value ? 5 : 3}` } })), h("label", { key: '188ae2927e1d4c9126c64c5318b60517a4c7e3f0', htmlFor: this.right_input_id }, h("input", { key: '1e6fc72f7950805de21b957a95106b699eeb883d', id: this.right_input_id, "aria-label": this.right_aria_label, type: "range", min: this.min, max: this.max, step: this.step, value: this.max_value, onInput: (event) => this.handleMaxChange(event), class: "dda-range-slider-input", style: { zIndex: `${this.max_value < this.max - this.min_value ? 5 : 3}` } }))))));
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
