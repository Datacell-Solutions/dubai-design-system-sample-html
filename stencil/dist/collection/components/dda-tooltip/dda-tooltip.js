import { h, Host } from "@stencil/core";
export class DdaTooltip {
    constructor() {
        this.position = 'top'; // Default to top position
        this.custom_class = '';
    }
    render() {
        return (h(Host, { key: 'bc7f5aabee92b53bcb5b9bdfa367e1f2f9b769ef' }, h("div", { key: 'ddccac03212eab627ee15eb47e749ab13e46cf8b', class: `dda-tooltip-container ${this.custom_class} ${this.component_mode}` }, h("slot", { key: '92598467ff3992d790f7a34217f0184bd5996a58' }), h("div", { key: '00887d5c9fac11a600c46cd334cf9f6a62a2a81d', class: `dda-tooltip-box ${this.position}` }, h("strong", { key: '5b03c58d01e5641f9fb3f7f7f6ae621248866a1d' }, this.title_text), h("p", { key: 'aee954d4991d02d21142b7145607e1c4811c30d2' }, this.description)))));
    }
    static get is() { return "dda-tooltip"; }
    static get originalStyleUrls() {
        return {
            "$": ["../../global/global.css", "dda-tooltip.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["../../global/global.css", "dda-tooltip.css"]
        };
    }
    static get properties() {
        return {
            "title_text": {
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
                "attribute": "title_text",
                "reflect": false
            },
            "description": {
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
                "attribute": "description",
                "reflect": false
            },
            "position": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'top' | 'bottom' | 'left' | 'right'",
                    "resolved": "\"bottom\" | \"left\" | \"right\" | \"top\"",
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
                "attribute": "position",
                "reflect": false,
                "defaultValue": "'top'"
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
            }
        };
    }
}
//# sourceMappingURL=dda-tooltip.js.map
