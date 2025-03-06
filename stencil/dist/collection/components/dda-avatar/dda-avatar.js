import { h } from "@stencil/core";
export class DdaAvatar {
    constructor() {
        this.type = 'photo';
        this.size = 'md';
        this.design = 'default';
        this.rounded = 'circle';
        this.src = ''; // For photo type
        this.icon = 'material-icons'; // For icon type
        this.text = 'AB'; // For text type
        this.notification_number = 0; // For notification design
        this.custom_class = '';
        this.isOpen = false;
    }
    toggleDropdown() {
        this.isOpen = !this.isOpen;
    }
    selectOption(option) {
        this.selected = option;
        this.isOpen = false;
    }
    get parsedOptions() {
        try {
            return JSON.parse(this.options);
        }
        catch (_a) {
            return [];
        }
    }
    render() {
        return (h("div", { key: '2ed3ae1aa94563d258aa8c70ae2a90b1e3af86af', onClick: () => this.toggleDropdown(), class: {
                'dda-avatar': true,
                [`avatar-type-${this.type}`]: true,
                [`avatar-size-${this.size}`]: true,
                [`avatar-design-${this.design}`]: true,
                [`avatar-shape-${this.rounded}`]: true,
                [`${this.custom_class}`]: true,
                [`${this.component_mode}`]: true
            } }, this.isOpen && (h("div", { key: '6335c636ce1297b0ee02db71cd628c0ebcd522eb', class: "dda-input-dropdown-list" }, this.parsedOptions.length > 0 ? (this.parsedOptions.map(option => (h("button", { id: this.button_id, "aria-label": this.aria_label, type: "button", class: `dda-input-dropdown-item ${this.selected === option ? 'selected' : ''}`, onClick: () => { this.selectOption(option); } }, option)))) : (h("div", { class: "dda-input-dropdown-item" }, "No options available")))), this.type === 'photo' && h("img", { key: 'eace7490d62d61b66a2b5f79094bb54294a2048b', src: this.src, alt: "Avatar" }), this.type === 'icon' && h("i", { key: 'a1b6b825b0cc8ac2e6ea9d5c46b2c263d8a7710c', class: `${this.icon} dda-smile` }, "sentiment_satisfied"), this.type === 'text' && h("span", { key: 'c96dac1f4c0736d773191afd989a6b4e7d6c3a3b', class: 'avatar-main-text' }, this.text), this.design === 'status' && h("div", { key: '5225f3819339bc2fb091cd2c5356807aae4446b5', class: "status-circle" }), this.design === 'verified' && h("div", { key: '134e0db9328c74fee0d5c858ef44a3515e732ceb', class: "verified-icon" }, h("span", { key: '99d3da8134ee26749e684e6aa061501b3d69b286', class: "material-icons  material-symbols-outlined" }, "verified")), this.design === 'notification' && h("div", { key: '6096b03e75c52fc6d33d2072d02b52f75c8bb29c', class: "notification-circle" }, this.notification_number)));
    }
    static get is() { return "dda-avatar"; }
    static get originalStyleUrls() {
        return {
            "$": ["dda-avatar.css", "../../global/input.css", "../../global/global.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dda-avatar.css", "../../global/input.css", "../../global/global.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'photo' | 'icon' | 'text'",
                    "resolved": "\"icon\" | \"photo\" | \"text\"",
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
                "defaultValue": "'photo'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",
                    "resolved": "\"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\" | \"xxl\"",
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
                "defaultValue": "'md'"
            },
            "design": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'default' | 'status' | 'verified' | 'story' | 'notification'",
                    "resolved": "\"default\" | \"notification\" | \"status\" | \"story\" | \"verified\"",
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
                "attribute": "design",
                "reflect": false,
                "defaultValue": "'default'"
            },
            "rounded": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'square' | 'circle'",
                    "resolved": "\"circle\" | \"square\"",
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
                "attribute": "rounded",
                "reflect": false,
                "defaultValue": "'circle'"
            },
            "src": {
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
                "attribute": "src",
                "reflect": false,
                "defaultValue": "''"
            },
            "icon": {
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
                "attribute": "icon",
                "reflect": false,
                "defaultValue": "'material-icons'"
            },
            "text": {
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
                "attribute": "text",
                "reflect": false,
                "defaultValue": "'AB'"
            },
            "notification_number": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "attribute": "notification_number",
                "reflect": false,
                "defaultValue": "0"
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
            }
        };
    }
    static get states() {
        return {
            "isOpen": {}
        };
    }
}
//# sourceMappingURL=dda-avatar.js.map
