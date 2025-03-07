import { h, Host } from "@stencil/core";
import { CountriesList } from "../../assets/countries";
export class DdaPhoneField {
    constructor() {
        this.placeholder = 'Enter phone number';
        this.disabled = false;
        this.country_code = '+971';
        this.country_flag = 'https://flagcdn.com/w320/ae.png'; // Default UAE flag
        this.phone_number = '';
        this.is_focused = false;
        this.dropdown_open = false;
        this.countries = [];
    }
    // componentWillLoad() {
    //   fetch('/path/to/countries.json')
    //     .then(response => response.json())
    //     .then(data => {
    //       this.countries = data;
    //     });
    // }
    componentWillLoad() {
        this.countries = CountriesList;
    }
    toggleDropdown() {
        this.dropdown_open = !this.dropdown_open;
    }
    selectCountry(country) {
        this.country_code = country.code;
        this.country_flag = country.flag;
        this.dropdown_open = false;
    }
    handleFocus() {
        this.is_focused = true;
    }
    handleBlur() {
        this.is_focused = false;
    }
    handlephonenumberChange(event) {
        const target = event.target;
        const targetvalue = target.value.replace(/[^0-9.]/g, '');
        this.phone_number = targetvalue;
    }
    render() {
        const inputClass = `${this.component_mode} ${this.size ? `dda-input-size-${this.size}` : ''} ${this.error_message ? `dda-error-message` : ''}  ${this.validation_type ? `dda-validation-${this.validation_type}` : ''}  ${this.is_focused ? 'dda-input-focus' : ''} ${this.phone_number ? 'dda-input-focus-filled' : ''}`;
        return (h(Host, { key: '94ce94449d75f9bdedc3838a9b0b26e976590164' }, h("div", { key: '54076675041d3dc41886c981da90030bd383a3f8', class: `dda-input-container ${inputClass} ${this.custom_class} ${this.disabled ? 'dda-input-disabled' : ''}` }, this.label && h("label", { key: '74d9b2c94b91c1ea637c40d338a3b3008ae90b4d', htmlFor: this.input_id, class: "dda-input-label" }, this.label), h("div", { key: '8560cd6a6ea575d16a5f807849521874a5b94a23', class: `dda-input-field-group dda-phone-field` }, h("div", { key: '15e0ca25f314fac3ef9bb080f6e5ac478c2cde86', class: "dda-input-dropdown-btn" }, h("button", { key: 'e0c374e1e5de6b50f2f0bb76e53291510c7f7886', type: "button", class: "dda-dropdown-select", onClick: () => this.toggleDropdown() }, h("img", { key: '7c84c8b3003d045878e02dccf0a1a9caa6419854', src: this.country_flag, alt: "", width: "20" }), " ", this.country_code, " ", h("i", { key: '25b54a31121a9452b5333cc03e319a8fe821aaaa', class: `material-icons` }, this.dropdown_open ? 'keyboard_arrow_down' : 'keyboard_arrow_down')), this.dropdown_open && (h("div", { key: '52de1e64e9a94f4d852564229b2215493fbb43bd', class: "dda-input-dropdown-list" }, this.countries.map(country => (h("button", { id: this.button_id, "aria-label": this.button_aria_label, type: "button", class: "dda-input-dropdown-item", onClick: () => this.selectCountry(country) }, h("img", { src: country.flag, alt: "", width: "20" }), " ", country.code)))))), h("input", { key: 'c43110bea9f720cb90fd5a66c779d7f4b20c03bc', id: this.input_id, "aria-label": this.aria_label, type: "number", class: `dda-field-group-input`, placeholder: this.placeholder, inputmode: 'numeric', pattern: "[0-9]*", value: this.phone_number, onInput: this.handlephonenumberChange.bind(this), onFocus: this.handleFocus.bind(this), onBlur: this.handleBlur.bind(this), disabled: this.disabled })), this.helper_text && !this.validation_type && h("span", { key: '4add8ed11d08be1f163bf3305aed2c9e217ff29a', class: "dda-helper-text" }, this.helper_text), this.error_message && h("span", { key: '1605b26eceded40a6c8c27ca9de0212ac9cc5c99', class: "dda-error-message" }, this.error_message))));
    }
    static get is() { return "dda-phonefield"; }
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
                "reflect": false,
                "defaultValue": "'Enter phone number'"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "custom_class",
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "button_id",
                "reflect": false
            },
            "button_aria_label": {
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
                "attribute": "button_aria_label",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "country_code": {},
            "country_flag": {},
            "phone_number": {},
            "is_focused": {},
            "dropdown_open": {},
            "countries": {}
        };
    }
}
//# sourceMappingURL=dda-phonefield.js.map
