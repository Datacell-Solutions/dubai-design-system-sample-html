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
        return (h(Host, { key: '127bbe4096e3ebf5b96300a61f4d3ab569685eb0' }, h("div", { key: 'b1d6405c7bd40375b20158afcea6c0f5bf929bb3', class: `dda-input-container dda-input-size-${this.size} ${this.component_mode} ${this.custom_class}  ${this.input_status ? `dda-input-${this.input_status}` : ''} ${this.has_error ? 'dda-validation-error' : ''}` }, this.label && h("label", { key: '287e347ab55a387666fb207bbebe8ba54065624b', htmlFor: this.button_id, class: "dda-input-label" }, this.label), h("div", { key: '85c221e20b7f3605534f23c2e5ea01f760b4201b', class: "dda-search-area dda-search-action" }, h("i", { key: '748c594c70202e6daa10523a93905c268f3a933c', class: "material-icons icon-left" }, "search"), h("input", { key: 'c1da4231da4d07cb5cb45d23dc8035d24412ea88', "aria-label": this.aria_label, id: 'search', type: "text", class: "dda-input-field dda-search-field", placeholder: this.placeholder }), h("div", { key: '60d7bdb3ed1cf2eff894fd0587b679d5f377e1b6', class: "dda-search-btngroup" }, h("button", { key: '682c71b6094eacff96e5b4e583e2386c24460418', "aria-label": this.button_aria_label, id: this.button_id, type: "button", class: "icon-close", onClick: () => this.clearInput() }, h("i", { key: 'ba897699682534c97f2c46af36d3303c1f99e7a1', class: "material-icons  material-symbols-outlined" }, "close")), this.show_button && (h("button", { key: '2ad63912ac064654af24704cd2a87c43fdf7d5d6', type: "button", class: "dda-btn btn-color-default-primary dda-btn-sm" }, "Search")))), this.helper_text && h("span", { key: '5a16aa46af8ae0630155b1eeafb586e38b9a749d', class: "dda-helper-text" }, this.helper_text), this.error_message && h("span", { key: '8e403b354e852d0e21c4df43f75dca3726ef3fb8', class: "dda-error-message" }, this.error_message))));
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
