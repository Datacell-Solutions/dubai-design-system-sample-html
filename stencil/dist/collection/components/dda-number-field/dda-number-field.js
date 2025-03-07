import { h, Host } from "@stencil/core";
export class DdaNumberField {
    constructor() {
        this.selected_currency = 'USD';
        this.is_focused = false;
        this.custom_class = '';
        this.isCurrencyDropdownOpen = false;
    }
    handleInput(event) {
        const inputElement = event.target;
        const inputValue = inputElement.value.replace(/[^0-9.]/g, '');
        inputElement.value = inputValue;
    }
    handleFocus() {
        this.is_focused = true;
    }
    handleBlur() {
        this.is_focused = false;
    }
    toggleCurrencyDropdown() {
        this.isCurrencyDropdownOpen = !this.isCurrencyDropdownOpen;
        this.handleFocus();
        this.handleBlur();
    }
    selectCurrency(currency) {
        this.selected_currency = currency;
        this.isCurrencyDropdownOpen = false;
    }
    get parsedCurrencies() {
        try {
            return JSON.parse(this.currencies);
        }
        catch (_a) {
            return [];
        }
    }
    render() {
        const containerClass = [
            'dda-input-container',
            this.validation_type ? `dda-validation-${this.validation_type}` : '',
            this.size ? `dda-input-size-${this.size}` : '',
            this.input_status ? `dda-input-${this.input_status}` : '',
            this.is_focused ? 'dda-input-focus' : '',
            this.error_message ? 'dda-error-message' : '',
            this.custom_class ? `${this.custom_class}` : '',
            this.component_mode,
        ].filter(Boolean).join(' ');
        return (h(Host, { key: 'fe60524778e6855c6a939fb4fe4fa4ff58972cbd' }, h("div", { key: '15e72f86c0308a22b78459238c338b0444ace910', class: containerClass }, this.label && h("label", { key: 'ddff8fdf97d628465bb9e3e01b10b748a745b849', htmlFor: this.input_id, class: "dda-input-label" }, this.label), h("div", { key: '0a6ed617f1fc1653b9b84d17a497cb9af6518d12', class: "dda-input-field-group dda-number-field" }, h("input", { key: '7c59f970cfa65dbdf4ce1df81c51270f93aa131a', id: this.input_id, "aria-label": this.aria_label, type: "text", placeholder: this.placeholder, value: this.value, pattern: "[0-9]*", onInput: event => this.handleInput(event), onFocus: this.handleFocus.bind(this), onBlur: this.handleBlur.bind(this), class: "dda-field-group-input" }), h("div", { key: '5d612312b4abbce01dc42a73dc84d5e0f1604f13', class: "dda-input-dropdown-btn" }, h("button", { key: 'f3bb48761258a518db84224e86a3c386e80fb8dc', type: "button", class: "dda-dropdown-select", onClick: () => this.toggleCurrencyDropdown() }, this.selected_currency, " ", h("i", { key: '58aa3011257f8abcaf5f4a734e9f8b5b6a485302', class: `material-icons` }, this.isCurrencyDropdownOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down')), this.isCurrencyDropdownOpen && (h("div", { key: 'ce4599b799ac5fa1f2b0fbde693c74adf1fec175', class: "dda-input-dropdown-list" }, this.parsedCurrencies.length > 0 ? (this.parsedCurrencies.map(option => (h("button", { type: "button", class: `dda-input-dropdown-item ${this.selected_currency === option ? 'selected' : ''}`, onClick: () => this.selectCurrency(option) }, option)))) : (h("div", { class: "dda-input-dropdown-item" }, "No options available")))))), this.helper_text && h("span", { key: '5a212062fdf5c0a7302e9a53ebaa3d4393081844', class: "dda-helper-text" }, this.helper_text), this.error_message && h("span", { key: '37b70858b09612749cf9a1195e4e34362660b35b', class: "dda-error-message" }, this.error_message))));
    }
    static get is() { return "dda-number-field"; }
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
            "placeholder": {
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
                "attribute": "placeholder",
                "reflect": false
            },
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
            "value": {
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
                "attribute": "value",
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
            "validation_type": {
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
                "attribute": "validation_type",
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
            "input_status": {
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
                "attribute": "input_status",
                "reflect": false
            },
            "currencies": {
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
                "attribute": "currencies",
                "reflect": false
            },
            "selected_currency": {
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
                "attribute": "selected_currency",
                "reflect": false,
                "defaultValue": "'USD'"
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
            "input_id": {
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
                "attribute": "input_id",
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
    static get states() {
        return {
            "is_focused": {},
            "isCurrencyDropdownOpen": {}
        };
    }
}
//# sourceMappingURL=dda-number-field.js.map
