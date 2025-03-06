import { Host, h } from "@stencil/core";
export class DdaButton {
    constructor() {
        /** Type of button, e.g., "button", "submit" */
        this.type = 'button';
        /** Disable the button */
        this.disabled = false;
        /** Icon class for the starting icon */
        this.start_icon = '';
        this.end_icon = ''; // icon class
        this.aria_label = '';
        this.button_color = 'primary'; // e.g., 'primary', 'error'
        this.button_shape = '';
        this.icon_button_shape = '';
        this.custom_class = ''; // Custom class prop
    }
    render() {
        const buttonClass = [
            'dda-btn',
            `btn-color-${this.button_color}`,
            this.size ? `btn-size-${this.size}` : '',
            this.button_shape ? `btn-shape-${this.button_shape}` : '',
            this.icon_button_shape ? `icon-btn-${this.icon_button_shape}` : '',
            this.gap ? `dda-gap-${this.gap}` : '',
            this.custom_class, // Include custom class
            this.component_mode,
        ].filter(Boolean).join(' ');
        return (h(Host, { key: '25a5fce594aad01cb0da393964decdc01eb1237b' }, h("button", { key: '93d2b8417a2968389b0e254e6cba38be0a36a575', id: this.button_id, type: this.type, class: buttonClass, disabled: this.disabled, "aria-label": this.aria_label, onClick: this.clickHandler }, this.start_icon && h("i", { key: '87e2aa5e0611ab5671128f7b965aed3751c3e6d6', class: "material-icons  material-symbols-outlined" }, this.start_icon), h("slot", { key: '4c8f43dea8fa778e669be870edd52e7f3d19b252' }), this.end_icon && h("i", { key: '0cfeb2dcba122a3467ec357adc4f64b98924ee58', class: "material-icons  material-symbols-outlined" }, this.end_icon))));
    }
    static get is() { return "dda-button"; }
    static get originalStyleUrls() {
        return {
            "$": ["../../global/dda-button.css", "../../global/global.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["../../global/dda-button.css", "../../global/global.css"]
        };
    }
    static get properties() {
        return {
            "type": {
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
                    "text": "Type of button, e.g., \"button\", \"submit\""
                },
                "getter": false,
                "setter": false,
                "attribute": "type",
                "reflect": false,
                "defaultValue": "'button'"
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
                    "text": "Disable the button"
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "start_icon": {
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
                    "text": "Icon class for the starting icon"
                },
                "getter": false,
                "setter": false,
                "attribute": "start_icon",
                "reflect": false,
                "defaultValue": "''"
            },
            "end_icon": {
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
                "attribute": "end_icon",
                "reflect": false,
                "defaultValue": "''"
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
                "reflect": false,
                "defaultValue": "''"
            },
            "button_color": {
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
                "attribute": "button_color",
                "reflect": false,
                "defaultValue": "'primary'"
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
            "button_shape": {
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
                "attribute": "button_shape",
                "reflect": false,
                "defaultValue": "''"
            },
            "icon_button_shape": {
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
                "attribute": "icon_button_shape",
                "reflect": false,
                "defaultValue": "''"
            },
            "gap": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "attribute": "gap",
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
            "clickHandler": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "(event: MouseEvent) => void",
                    "resolved": "(event: MouseEvent) => void",
                    "references": {
                        "MouseEvent": {
                            "location": "global",
                            "id": "global::MouseEvent"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Function to be called on button click"
                },
                "getter": false,
                "setter": false
            }
        };
    }
}
//# sourceMappingURL=dda-button.js.map
