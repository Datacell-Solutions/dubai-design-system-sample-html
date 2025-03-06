import { h, Host } from "@stencil/core";
export class DdaSearchInput {
    constructor() {
        this.placeholder = 'Search';
        this.size = 'sm'; // default to small size
        this.show_button = false; // control to show/hide search button
        this.has_error = false; // control error state
        this.custom_class = '';
    }
    clearInput() {
        const input = this.el.querySelector('#search');
        if (input) {
            input.value = '';
        }
    }
    render() {
        return (h(Host, { key: 'f861a7242735e9ba7df609956923b9a891e74029' }, h("div", { key: '03454bf6da9641ca0503861e197f96784c86aadf', class: `dda-input-container dda-input-size-${this.size} ${this.component_mode} ${this.custom_class}  ${this.input_status ? `dda-input-${this.input_status}` : ''} ${this.has_error ? 'dda-validation-error' : ''}` }, this.label && h("label", { key: 'ae408a5dd2bf5668257dc01c538586741dc4924f', htmlFor: this.button_id, class: "dda-input-label" }, this.label), h("div", { key: 'f9a55f24518dcc97a38db36861dcaf3aea7e23e1', class: "dda-search-area dda-search-action" }, h("i", { key: 'ac9808d70edafe61494b2e4871d1c6a8b00080fa', class: "material-icons icon-left" }, "search"), h("input", { key: '533f601786a2421a6cdf1f213e605cb3e4c37442', "aria-label": this.aria_label, id: 'search', type: "text", class: "dda-input-field dda-search-field", placeholder: this.placeholder }), h("div", { key: '6413d4b3f5a904732a006910ce6de81f39492d63', class: "dda-search-btngroup" }, h("button", { key: 'a731ffda4a07fa5e18abf5f84127960739a8a860', "aria-label": this.button_aria_label, id: this.button_id, type: "button", class: "icon-close", onClick: () => this.clearInput() }, h("i", { key: '4ca2ef6065d93bda55bd64de2863912dae8d7cc1', class: "material-icons  material-symbols-outlined" }, "close")), this.show_button && (h("button", { key: 'e950b908312714993811772ef80fb494b8fc78c8', type: "button", class: "dda-btn btn-color-default-primary dda-btn-sm" }, "Search")))), this.helper_text && h("span", { key: 'ca5cf8bccd64fb0e18d6f35f37c84968cd890350', class: "dda-helper-text" }, this.helper_text), this.error_message && h("span", { key: 'e806552ddb3c38b0c46730824d44fe776016e7ed', class: "dda-error-message" }, this.error_message))));
    }
    static get is() { return "dda-search-input"; }
    static get originalStyleUrls() {
        return {
            "$": ["../../global/input.css", "../../global/global.css", "../../global/dda-button.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["../../global/input.css", "../../global/global.css", "../../global/dda-button.css"]
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
                "reflect": false,
                "defaultValue": "'Search'"
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
            "size": {
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
                "attribute": "size",
                "reflect": false,
                "defaultValue": "'sm'"
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
            "show_button": {
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
                "attribute": "show_button",
                "reflect": false,
                "defaultValue": "false"
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
            "has_error": {
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
                "attribute": "has_error",
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
            "button_aria_label": {
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
                "attribute": "button_aria_label",
                "reflect": false
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=dda-search-input.js.map
