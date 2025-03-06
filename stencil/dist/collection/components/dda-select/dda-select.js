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
        return (h(Host, { key: '3250c35fb091fe6cbbaa2a81c6ccdd19b198be8f' }, h("div", { key: 'df6f4b6dbd92f9828887378eca2bd88fff1db51f', class: `dda-input-container ${this.custom_class} ${this.component_mode} ${this.disabled ? 'dda-input-disabled' : ''} ${this.is_open ? 'show' : 'hide'} dda-input-size-${this.size} dda-validation-${this.error} ` }, this.label && h("label", { key: '90d4c7fdd044519c95e682a9031b0ed53d390e6b', htmlFor: this.button_id, class: "dda-input-label" }, this.label), h("div", { key: '162f80b38495f428b7dfb768f1f3133b9193574b', class: "dda-dropdown-container" }, h("button", { key: 'df828eeba1b9e3a9389c4846e5339365d4ace996', "aria-label": this.aria_label, id: this.button_id, type: "button", class: "dda-input-field dda-select-header", onClick: () => { this.toggleSelect(); } }, this.selected || 'Select an option', h("i", { key: '9b8d41746403f6d009ef9e1ab0f727069a921ed3', class: `material-icons` }, this.is_open ? 'keyboard_arrow_up' : 'keyboard_arrow_down')), this.is_open && (h("div", { key: 'e0bf05527681b9258a7845dfe1916a439ec1e3ca', class: "dda-input-dropdown-list dda-select-list" }, this.parsedOptions.length > 0 ? (this.parsedOptions.map(option => (h("button", { type: "button", class: `dda-input-dropdown-item ${this.selected === option ? 'selected' : ''}`, onClick: () => this.selectOption(option) }, option)))) : (h("div", { class: "dda-input-dropdown-item" }, "No options available"))))), this.helper_text && h("span", { key: 'fd67917e5c548e9880269319d2f7ac207a589fec', class: "dda-helper-text" }, this.helper_text), this.error_message && h("span", { key: '24738386464ee9318e58bbe23bea3ff3e62d276b', class: "dda-error-message" }, this.error_message))));
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
