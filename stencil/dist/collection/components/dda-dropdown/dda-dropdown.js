import { h, Host } from "@stencil/core";
export class DdaDropdown {
    constructor() {
        this.disabled = false;
        this.type = 'bg-white';
        this.size = 'medium';
        this.icon_mode = false; // New prop for icon mode
        this.custom_class = '';
        this.isopen = false;
    }
    get parsedOptions() {
        try {
            return JSON.parse(this.options);
        }
        catch (_a) {
            return [];
        }
    }
    toggleDropdown() {
        if (!this.disabled) {
            this.isopen = !this.isopen;
        }
    }
    selectOption(option) {
        if (!this.disabled) {
            this.selected = option;
            this.isopen = false;
        }
    }
    render() {
        const containerClass = [
            'dda-input-container dda-inline-flex',
            this.disabled ? 'dda-input-disabled' : '',
            this.size ? `dda-input-size-${this.size}` : '',
            this.custom_class ? `${this.custom_class}` : '',
            this.component_mode,
        ].filter(Boolean).join(' ');
        return (h(Host, { key: '3dced7d29f1cf5e2ef62a0c59832ba2f90200c73' }, h("div", { key: 'c77445cf2f4b77762a2e52ad6ad88380182db536', class: containerClass }, this.label && h("label", { key: '29043b869f6a28fcc86da6655979c3a7083d0167', htmlFor: this.button_id, class: "dda-input-label" }, this.label), h("div", { key: '23f11a5d34ecd8a2c29b99f733f356c1222c85a0', class: `dda-dropdown-container ${this.type}` }, h("button", { key: 'f75825bf5a6d7b55b313faacf6a4b2030ad0a6dc', id: this.button_id, "aria-label": this.aria_label, type: "button", class: "dda-input-field dda-dropdown-header", onClick: () => this.toggleDropdown() }, h("i", { key: '0d852dab867d31f22ff734fd1e7d92b27216cb3b', class: `three-dots material-icons` }, this.isopen ? 'more_vert' : 'more_vert'), !this.icon_mode && h("span", { key: '4836b50c4184711474c8baef8d70a432962a4f6f', class: "dda-dropdown-text" }, h("span", { key: 'd6b1d89b56a00aa1ed5002bd55e636e1c1d4cb7f' }, this.selected || 'Select an option'), " ", h("i", { key: 'd725e910f1602abd5e2b0cf6b7c0e0e498cef93c', class: `material-icons` }, this.isopen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'))), this.isopen && (h("div", { key: '1072aa7ac6fd498e8d2f0d3a70e8b66c4cba68a3', class: "dda-input-dropdown-list" }, this.parsedOptions.length > 0 ? (this.parsedOptions.map(option => (h("button", { type: "button", class: `dda-input-dropdown-item ${this.selected === option ? 'selected' : ''}`, onClick: () => { this.selectOption(option); } }, option)))) : (h("div", { class: "dda-input-dropdown-item" }, "No options available"))))), this.helper_text && h("span", { key: 'be18b3a8d41e5faec96e60d859e4accec3f3082f', class: "dda-helper-text" }, this.helper_text), this.error && h("span", { key: 'fce09a86ad4fbbd138f2d7432c16aa4d9f6acfca', class: "dda-error-message" }, this.error))));
    }
    static get is() { return "dda-dropdown"; }
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "error",
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
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'bg-transparent' | 'bg-white'",
                    "resolved": "\"bg-transparent\" | \"bg-white\"",
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
                "attribute": "type",
                "reflect": false,
                "defaultValue": "'bg-white'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'small' | 'medium'",
                    "resolved": "\"medium\" | \"small\"",
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
                "defaultValue": "'medium'"
            },
            "icon_mode": {
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
                "attribute": "icon_mode",
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
                "optional": false,
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
            }
        };
    }
    static get states() {
        return {
            "isopen": {}
        };
    }
}
//# sourceMappingURL=dda-dropdown.js.map
