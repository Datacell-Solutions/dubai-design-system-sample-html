import { h, Host } from "@stencil/core";
export class DdaProgressBar {
    constructor() {
        this.progress = 0;
        this.tooltip = false;
        this.tooltip_position = 'top';
        this.show_percentage_text = false;
    }
    render() {
        const progressStyle = {
            width: `${this.progress}%`,
        };
        return (h(Host, { key: '1c36714216df20d9654d17a5774b24bf9bb78b36' }, h("div", { key: 'fd1828338c0f1438df1f71bd834a4b61c113a1db', class: `dda-progress-bar-container ${this.custom_class} ${this.component_mode}` }, h("div", { key: '651e8f37688d2e2452ead82d1c88203143175193', class: "dda-progress-bar" }, h("div", { key: 'b7c71a480f6ca5a691965f44a4f960b8ef546fe7', class: "dda-progress-value", style: progressStyle }, this.tooltip && (h("div", { key: 'fd8c4d05c8d915580550e75a874e57d369dbf0f9', class: `dda-tooltip tooltip-${this.tooltip_position}` }, this.progress, "%")))), this.show_percentage_text && (h("span", { key: '399744b56c44625523eb0f5623693667b907eb14', class: "dda-percentage-text" }, this.progress, "%")))));
    }
    static get is() { return "dda-progressbar"; }
    static get originalStyleUrls() {
        return {
            "$": ["dda-progressbar.css", "../../global/global.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dda-progressbar.css", "../../global/global.css"]
        };
    }
    static get properties() {
        return {
            "progress": {
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
                "attribute": "progress",
                "reflect": false,
                "defaultValue": "0"
            },
            "tooltip": {
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
                "attribute": "tooltip",
                "reflect": false,
                "defaultValue": "false"
            },
            "tooltip_position": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'top' | 'bottom'",
                    "resolved": "\"bottom\" | \"top\"",
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
                "attribute": "tooltip_position",
                "reflect": false,
                "defaultValue": "'top'"
            },
            "show_percentage_text": {
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
                "attribute": "show_percentage_text",
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
            }
        };
    }
}
//# sourceMappingURL=dda-progressbar.js.map
