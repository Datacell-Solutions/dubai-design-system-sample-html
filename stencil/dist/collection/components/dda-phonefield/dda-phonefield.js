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
        return (h(Host, { key: '3c3e6b2beb9e43d9550a3ff59ce5a2e6961afc23' }, h("div", { key: '14c03dba89c30f31ce27d8aac2b5716f709e1e96', class: `dda-input-container ${inputClass} ${this.custom_class} ${this.disabled ? 'dda-input-disabled' : ''}` }, this.label && h("label", { key: '2cd8f0057e1e4be386686dbc0fe34b73b925c0a3', htmlFor: this.input_id, class: "dda-input-label" }, this.label), h("div", { key: 'ed05bf01cf4e91370356c6019db8ea5d3fcfd3ae', class: `dda-input-field-group dda-phone-field` }, h("div", { key: 'f64b252eac485c72ddbc61ac978d9f69fd294b8e', class: "dda-input-dropdown-btn" }, h("button", { key: '8c25e3c3e5f83e6a26131428f9aa506df35d3e0f', type: "button", class: "dda-dropdown-select", onClick: () => this.toggleDropdown() }, h("img", { key: '6bf47487df20748cb17ead4cfbc21b700e72bd4d', src: this.country_flag, alt: "", width: "20" }), " ", this.country_code, " ", h("i", { key: 'a39dcd804b1ca45ec60c3cad06b236768b52cde0', class: `material-icons` }, this.dropdown_open ? 'keyboard_arrow_down' : 'keyboard_arrow_down')), this.dropdown_open && (h("div", { key: '1824fdbd3e37304797facc77dd9fd060beca0f74', class: "dda-input-dropdown-list" }, this.countries.map(country => (h("button", { id: this.button_id, "aria-label": this.button_aria_label, type: "button", class: "dda-input-dropdown-item", onClick: () => this.selectCountry(country) }, h("img", { src: country.flag, alt: "", width: "20" }), " ", country.code)))))), h("input", { key: '02facd6db5f256f8848ad484fc7cb9334723cd7a', id: this.input_id, "aria-label": this.aria_label, type: "number", class: `dda-field-group-input`, placeholder: this.placeholder, inputmode: 'numeric', pattern: "[0-9]*", value: this.phone_number, onInput: this.handlephonenumberChange.bind(this), onFocus: this.handleFocus.bind(this), onBlur: this.handleBlur.bind(this), disabled: this.disabled })), this.helper_text && !this.validation_type && h("span", { key: 'bfafd3bfe4009d3bfc17783c53831162738aaf3e', class: "dda-helper-text" }, this.helper_text), this.error_message && h("span", { key: 'f7f8c083ca7494d6f3253c23349986f21eccce2c', class: "dda-error-message" }, this.error_message))));
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
