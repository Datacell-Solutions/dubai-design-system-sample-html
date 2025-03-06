import { h, Host } from "@stencil/core";
export class DdaToggle {
    constructor() {
        this.custom_class = '';
    }
    render() {
        const toggleClass = [
            'dda-toggle-btn',
            this.size ? `dda-toggle-${this.size}` : '',
            this.custom_class ? `${this.custom_class}` : '',
            this.component_mode,
        ].filter(Boolean).join(' ');
        return (h(Host, { key: '1b4234b9a46329a309417c6665b94f2df2461fdc' }, h("label", { key: 'c9f3195e07abad38dfd8efef64ad74f96d136a9b', class: toggleClass, htmlFor: this.input_id }, h("input", { key: '1a27fb3d76761862c541f41395c249bfab4b9a3d', "aria-label": this.aria_label, type: "checkbox", id: this.input_id, name: this.group_name, checked: this.checked }), h("span", { key: '9ecefc14845f2843bb51703df4cb6babc07458b3', class: "toggle" }), h("p", { key: '1999434f0eb4450813aeef0c7de95ced4345894e' }, h("span", { key: '7d27b036fcd72d3af9fe1f4ea2212686561d3820', class: "toggle-title" }, "Radio Button Title"), h("span", { key: '19d2e7d6a429ae902594b815cfca4664a580fe0b', class: "toggle-supporting" }, "Supporting Text")))));
    }
    static get is() { return "dda-toggle"; }
    static get originalStyleUrls() {
        return {
            "$": ["../../global/global.css", "dda-toggle.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["../../global/global.css", "dda-toggle.css"]
        };
    }
    static get properties() {
        return {
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
                "optional": false,
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
//# sourceMappingURL=dda-toggle.js.map
