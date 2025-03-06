import { h } from "@stencil/core";
export class DdaAlert {
    constructor() {
        this.type = 'primary';
        this.variation = 'info';
        this.title_text = '';
        this.description = '';
        this.button_text = '';
        this.custom_class = '';
        this.firstClickHandler = () => {
            this.firstClick.emit();
        };
        this.secondClickHandler = () => {
            this.secondClick.emit();
        };
    }
    render() {
        return (h("div", { key: '5193eb0202f883af219d9393a6dd53d208458482', class: `dda-alert dda-alert-${this.type} dda-alert-${this.variation} ${this.custom_class} ${this.component_mode}` }, h("i", { key: '65f4f95e8930c94d81d2b21c2d62136fe7718163', class: "material-icons  material-symbols-outlined" }, "info"), h("div", { key: 'e81ae88ec6e8e69de4660c620d1ce8211f29b191', class: "alert-content" }, h("h4", { key: '74edbc78550b5ba9c7d3c9b9dbd9dd8d0057e0e4', class: "alert-title" }, this.title_text), h("p", { key: '0a0c114e6b633b4ff54390f93a72694df7e8b426', class: "alert-description" }, this.description), h("div", { key: '10375644d673913047c66460c2c0395f0110b644', class: "alert-btn-wrap" }, !!this.first_button && (h("a", { key: '05ba79e4979679a749e20e6ef931e0a309959ed9', href: this.first_link, onClick: () => this.firstClickHandler() }, this.first_button)), !!this.second_button && (h("a", { key: 'f6539c498bf0772ae7538cf2e7e700135c48ddba', href: this.second_link, onClick: () => this.secondClickHandler() }, this.second_button)))), h("button", { key: '1ea1f9290641ffda5d8f3e78e4fbac7cd718df32', class: "dda-alert-close", onClick: this.clickHandler }, h("i", { key: '5d916a57971a7ac784557b2bbd61cee68958a9bb', class: "material-icons  material-symbols-outlined" }, "close"))));
    }
    static get is() { return "dda-alert"; }
    static get originalStyleUrls() {
        return {
            "$": ["dda-alert.css", "../../global/global.css", "../../global/dda-button.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dda-alert.css", "../../global/global.css", "../../global/dda-button.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'secondary'",
                    "resolved": "\"primary\" | \"secondary\"",
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
                "defaultValue": "'primary'"
            },
            "variation": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'info' | 'warning' | 'error' | 'success'",
                    "resolved": "\"error\" | \"info\" | \"success\" | \"warning\"",
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
                "attribute": "variation",
                "reflect": false,
                "defaultValue": "'info'"
            },
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
                "reflect": false,
                "defaultValue": "''"
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
                "reflect": false,
                "defaultValue": "''"
            },
            "button_text": {
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
                "attribute": "button_text",
                "reflect": false,
                "defaultValue": "''"
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
            "component_id": {
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
                "attribute": "component_id",
                "reflect": false
            },
            "first_link": {
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
                "attribute": "first_link",
                "reflect": false
            },
            "second_link": {
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
                "attribute": "second_link",
                "reflect": false
            },
            "first_button": {
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
                "attribute": "first_button",
                "reflect": false
            },
            "second_button": {
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
                "attribute": "second_button",
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
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get events() {
        return [{
                "method": "firstClick",
                "name": "firstClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "secondClick",
                "name": "secondClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=dda-alert.js.map
