import { h, Host } from "@stencil/core";
export class DdaRadiobutton {
    constructor() {
        this.custom_class = '';
    }
    render() {
        const radiobuttonClass = [
            'dda-radio-container',
            this.size ? `dda-radio-${this.size}` : '',
            this.variants ? `dda-radio-${this.variants}` : '',
            this.custom_class ? `dda-radio-${this.custom_class}` : '',
            this.radio_status ? `dda-radio-${this.radio_status}` : '',
            this.component_mode,
        ].filter(Boolean).join(' ');
        return (h(Host, { key: '61238680b2ca8ddc1fbcf2c39f77641c92255b94' }, h("div", { key: 'aa0b5e3fd7e9aa17078a92716c5c570dd77cdaf5', class: radiobuttonClass }, h("input", { key: '793dab0294c9eb0823516f88780f4e7d1401b367', "aria-label": this.aria_label, type: "radio", id: this.input_id, name: this.group_name, checked: this.checked }), h("label", { key: 'bcdbe2485dc4b77d46d5807439570cd8314ed2d3', htmlFor: this.input_id }, h("span", { key: '94c2d1beeec609211be25e60608b73bfb2480db8', class: "radio-circle" }), h("p", { key: '76fd0d9161336aa4fa1ba4d2e6dfc02c297fc616' }, h("span", { key: '6512ce426758d1d255dfdd3d11ece8751e21124b', class: "radio-title" }, this.title_text), this.supporting && h("span", { key: 'f4cd7d07f2a334bbe72e47b280f76e98885e67e9', class: "radio-supporting" }, this.supporting))))));
    }
    static get is() { return "dda-radiobutton"; }
    static get originalStyleUrls() {
        return {
            "$": ["dda-radiobutton.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dda-radiobutton.css"]
        };
    }
    static get properties() {
        return {
            "title_text": {
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
                "attribute": "title_text",
                "reflect": false
            },
            "supporting": {
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
                "attribute": "supporting",
                "reflect": false
            },
            "group_name": {
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
                "attribute": "group_name",
                "reflect": false
            },
            "input_id": {
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
                "attribute": "input_id",
                "reflect": false
            },
            "checked": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "attribute": "checked",
                "reflect": false
            },
            "radio_status": {
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
                "attribute": "radio_status",
                "reflect": false
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
            "variants": {
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
                "attribute": "variants",
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
            "aria_label": {
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
                "attribute": "aria_label",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=dda-radiobutton.js.map
