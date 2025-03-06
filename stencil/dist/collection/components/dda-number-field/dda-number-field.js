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
        return (h(Host, { key: 'c5e96b9e9ef5e0c6f42b2f03e06aac8d668e69a3' }, h("div", { key: '91913127b6e50172d057834ad931cd807baa4549', class: containerClass }, this.label && h("label", { key: 'e2dc91f122399a849faa2e1ee34a510f0a5c2046', htmlFor: this.input_id, class: "dda-input-label" }, this.label), h("div", { key: '99e78cc293e216645b867c3717757b56c31382c7', class: "dda-input-field-group dda-number-field" }, h("input", { key: '8fce26555fc24ae09c457212f86c59e5c79c2f98', id: this.input_id, "aria-label": this.aria_label, type: "text", placeholder: this.placeholder, value: this.value, pattern: "[0-9]*", onInput: event => this.handleInput(event), onFocus: this.handleFocus.bind(this), onBlur: this.handleBlur.bind(this), class: "dda-field-group-input" }), h("div", { key: '45d681467efd6de910411e38f1e7ac35869fc49b', class: "dda-input-dropdown-btn" }, h("button", { key: '2c9fe1f7194ca3f7ffe2e1745bf24799ad9faf0b', type: "button", class: "dda-dropdown-select", onClick: () => this.toggleCurrencyDropdown() }, this.selected_currency, " ", h("i", { key: 'f2776256ed93bdbf43d40d096e9f1adecb46b017', class: `material-icons` }, this.isCurrencyDropdownOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down')), this.isCurrencyDropdownOpen && (h("div", { key: '4ebfb115811870d2da582e5e11f74093691c9946', class: "dda-input-dropdown-list" }, this.parsedCurrencies.length > 0 ? (this.parsedCurrencies.map(option => (h("button", { type: "button", class: `dda-input-dropdown-item ${this.selected_currency === option ? 'selected' : ''}`, onClick: () => this.selectCurrency(option) }, option)))) : (h("div", { class: "dda-input-dropdown-item" }, "No options available")))))), this.helper_text && h("span", { key: 'e7f22e62c8f848975ba3c9b06553d880ea72bca8', class: "dda-helper-text" }, this.helper_text), this.error_message && h("span", { key: 'f0a356e05d8bab0a59864aaa42706a5d387d8237', class: "dda-error-message" }, this.error_message))));
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
