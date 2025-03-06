import { h, Host } from "@stencil/core";
export class DdaCreditCardField {
    constructor() {
        this.value = '';
        this.disabled = false;
        this.custom_class = '';
        this.restrict_input = false;
        this.formattedValue = '';
    }
    handleInput(event) {
        const inputElement = event.target;
        const inputValue = inputElement.value.replace(/[^0-9-]/g, '');
        const maxLength = this.restrict_input ? 100 : 25;
        if (inputValue.length <= maxLength) {
            this.value = inputValue;
            this.formatCardNumber(this.value);
            inputElement.value = this.formattedValue;
        }
        else {
            inputElement.value = this.formattedValue;
        }
    }
    formatCardNumber(value) {
        const cleaned = value.replace(/\D/g, '');
        const matched = cleaned.match(/.{1,4}/g);
        if (matched) {
            this.formattedValue = matched.join(' - ');
        }
        else {
            this.formattedValue = cleaned;
        }
    }
    componentWillLoad() {
        this.formatCardNumber(this.value);
    }
    render() {
        const inputClass = [
            'dda-input-container dda-credit-card-field',
            this.validation_type ? `dda-validation-${this.validation_type}` : '',
            this.size ? `dda-input-size-${this.size}` : '',
            this.input_type ? `dda-input-${this.input_type}` : '',
            this.disabled ? 'dda-input-disabled' : '',
            this.error_message ? 'dda-error-message' : '',
            this.custom_class ? `${this.custom_class}` : '',
            this.component_mode,
        ].filter(Boolean).join(' ');
        return (h(Host, { key: '94ba3006aa28a739efa89e8214b173c9385b78cc' }, h("div", { key: '5ef7bbe24a76243ef93886ae4c2979f5c805dbfb', class: inputClass }, this.label && h("label", { key: '833987bd7b212e668c0d283035814d3e76de5d2e', htmlFor: this.input_id, class: "dda-input-label" }, this.label), h("div", { key: '65d2c0a8d4fabc3875ff223d2d381c1ac5982adf', class: "dda-input-field-wrapper" }, this.card_icon && h("img", { key: '7bb7fd2c87f822d721a0a969310655c541a04e58', src: this.card_icon, alt: "Card Icon", class: "dda-creditcard-icon" }), h("input", { key: 'c7d8b80a9772d761696eb0fd243b099452bf599e', "aria-label": this.aria_label, id: this.input_id, type: "text", inputmode: "numeric", placeholder: this.placeholder, value: this.formattedValue, onInput: (event) => this.handleInput(event), class: "dda-input-field", disabled: this.disabled, maxlength: this.restrict_input ? 100 : 25 })), this.helper_text && h("span", { key: '7b13e5a22af266f6e8879a9746b8afea3e1deb8e', class: "dda-helper-text" }, this.helper_text), this.error_message && h("span", { key: '08f97d34e5a25ea00fb185763b721674d1c4359c', class: "dda-error-message" }, this.error_message))));
    }
    static get is() { return "dda-creditcard-field"; }
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
                "reflect": false,
                "defaultValue": "''"
            },
            "card_icon": {
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
                "attribute": "card_icon",
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
            "input_type": {
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
                "attribute": "input_type",
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
            "restrict_input": {
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
                "attribute": "restrict_input",
                "reflect": false,
                "defaultValue": "false"
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
            "formattedValue": {}
        };
    }
}
//# sourceMappingURL=dda-creditcard-field.js.map
