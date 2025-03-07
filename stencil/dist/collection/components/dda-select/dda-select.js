import { h, Host } from "@stencil/core";
export class Ddaselect {
    constructor() {
        this.disabled = false;
        this.is_open = false;
        //@Prop() validationtype?: string;
        this.custom_class = '';
    }
    get parsedOptions() {
        try {
            return JSON.parse(this.options);
        }
        catch (_a) {
            return [];
        }
    }
    toggleSelect() {
        if (!this.disabled) {
            this.is_open = !this.is_open;
        }
    }
    selectOption(option) {
        if (!this.disabled) {
            this.selected = option;
            this.is_open = false;
        }
    }
    render() {
        return (h(Host, { key: '0a3bbfe42b03b8055f91a8e0c92d06b178a81841' }, h("div", { key: '9bd793d5e5a71f223dd7aa79771cb7dbfac34d3c', class: `dda-input-container ${this.custom_class} ${this.component_mode} ${this.disabled ? 'dda-input-disabled' : ''} ${this.is_open ? 'show' : 'hide'} dda-input-size-${this.size} dda-validation-${this.error} ` }, this.label && h("label", { key: '7bd9db5fd47adf7477264b52bc84de568590a48a', htmlFor: this.button_id, class: "dda-input-label" }, this.label), h("div", { key: '10fd555f639b7d8bbc51083a2abf4b654fc17606', class: "dda-dropdown-container" }, h("button", { key: 'fca305cfc632073e82d7b2a6798a94eace6d2dbc', "aria-label": this.aria_label, id: this.button_id, type: "button", class: "dda-input-field dda-select-header", onClick: () => { this.toggleSelect(); } }, this.selected || 'Select an option', h("i", { key: 'c5768c32f78b9a54416a007afc7dbbdc5cea9749', class: `material-icons` }, this.is_open ? 'keyboard_arrow_up' : 'keyboard_arrow_down')), this.is_open && (h("div", { key: 'a34169e5bc5b13ae32ce22d63ed528ec2ce56802', class: "dda-input-dropdown-list dda-select-list" }, this.parsedOptions.length > 0 ? (this.parsedOptions.map(option => (h("button", { type: "button", class: `dda-input-dropdown-item ${this.selected === option ? 'selected' : ''}`, onClick: () => this.selectOption(option) }, option)))) : (h("div", { class: "dda-input-dropdown-item" }, "No options available"))))), this.helper_text && h("span", { key: '36e6c22d1796f9727d094a0fd2b5c83bd7d2ec57', class: "dda-helper-text" }, this.helper_text), this.error_message && h("span", { key: '5a71cfa9aa7bc911dd28f2085b356b3f7463710d', class: "dda-error-message" }, this.error_message))));
    }
    static get is() { return "dda-select"; }
    static get originalStyleUrls() {
        return {
            "$": ["../../global/input.css", "../../global/global.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["../../global/input.css", "../../global/global.css"]
        };
    }
    static get properties() {
        return {
            "label": {
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
                "attribute": "label",
                "reflect": false
            },
            "options": {
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
                "attribute": "options",
                "reflect": false
            },
            "selected": {
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
                "attribute": "selected",
                "reflect": false
            },
            "disabled": {
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
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "error": {
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
                "attribute": "error",
                "reflect": false
            },
            "error_message": {
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
                "attribute": "error_message",
                "reflect": false
            },
            "helper_text": {
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
                "attribute": "helper_text",
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
            },
            "button_id": {
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
                "attribute": "button_id",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "is_open": {}
        };
    }
}
//# sourceMappingURL=dda-select.js.map
