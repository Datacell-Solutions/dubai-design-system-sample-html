import { h, Host } from "@stencil/core";
import Quill from "quill";
import "quill/dist/quill.snow.css";
export class DdaTextarea {
    constructor() {
        this.value = '';
        this.characterCount = 0; // State to track the character count
    }
    componentDidLoad() {
        if (this.enable_rich_editor) {
            const editor = this.el.querySelector('#editor');
            this.quill = new Quill(editor, {
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
                        ['blockquote', 'code-block'],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        [{ 'script': 'sub' }, { 'script': 'super' }], // superscript/subscript
                        [{ 'indent': '-1' }, { 'indent': '+1' }], // outdent/indent
                        [{ 'direction': 'rtl' }], // text direction
                        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                        [{ 'color': [] }, { 'background': [] }], // dropdown with defaults from theme
                        [{ 'font': [] }],
                        [{ 'align': [] }],
                        ['clean'], // remove formatting button
                        ['link', 'image', 'video'] // link and image, video
                    ],
                },
                theme: 'snow',
                placeholder: this.placeholder,
            });
            this.quill.on('text-change', () => {
                this.value = this.quill.root.innerHTML;
                this.characterCount = this.quill.getText().length - 1; // Update character count
            });
        }
    }
    handleInput(event) {
        if (!this.enable_rich_editor) {
            this.value = event.target.value;
            this.characterCount = event.target.value.length; // Update character count
        }
    }
    render() {
        const textareaClass = [
            'dda-input-container dda-richtext-editor',
            this.validation_type ? `dda-validation-${this.validation_type}` : '',
            this.input_status ? `dda-input-${this.input_status}` : '',
            this.custom_class, this.component_mode,
        ].filter(Boolean).join(' ');
        return (h(Host, { key: '6bcc22efc8a962cc0a517c0d0dcc860d618e71db' }, h("div", { key: 'f793c0e0782db60da1e03d2cba935a6fcff86350', class: textareaClass }, this.label && h("label", { key: '880e81c260f59c31fc958b0b6fbd7b3e5c0f6028', htmlFor: this.input_id, class: "dda-input-label" }, this.label), this.enable_rich_editor ? (h("div", { id: "editor", class: "dda-richeditor-field" })) : (h("textarea", { id: this.input_id, "aria-label": this.aria_label, placeholder: this.placeholder, value: this.value, onInput: (event) => this.handleInput(event), class: "dda-input-field dda-input-textarea", maxLength: this.max_characters })), this.helper_text && (h("div", { key: 'a0c0c6d48b982a4aba3bbe28b4f7fbc1a0d7314a', class: "dda-helper-text" }, h("span", { key: '51c0e3bfcd476be52cb3970b06455c337439f48b', class: "dda-flex dda-align-center dda-gap-2" }, h("i", { key: '2a81691db941652b03c1d9134d5cf749f1af2e8e', class: "material-icons  material-symbols-outlined" }, "info"), " ", this.helper_text), h("span", { key: '14b26a00e2bf6be61005f54bab42426f38c1641c', class: "dda-letter-count" }, this.characterCount, " / ", this.max_characters))), this.error_message && (h("div", { key: '83b513dcbc0e3e75f4afdb82c028238ef643e3c6', class: "dda-error-message" }, h("span", { key: '9da79b7ea9e43c96615c81f9e04485a8c591dac3', class: "dda-flex dda-align-center dda-gap-2" }, h("i", { key: 'c93ca46b7d2482770a6980c1c553c81758b29078', class: "material-icons  material-symbols-outlined" }, "info"), " ", this.error_message), h("span", { key: 'cca9ba80e06e0f05711cab16dc1e1996ef00cd64', class: "dda-letter-count" }, this.characterCount, " / ", this.max_characters))))));
    }
    static get is() { return "dda-textarea"; }
    static get originalStyleUrls() {
        return {
            "$": ["../../global/global.css", "../../global/input.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["../../global/global.css", "../../global/input.css"]
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
                "reflect": false
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
            "value": {
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
                "attribute": "value",
                "reflect": false,
                "defaultValue": "''"
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
            "helper_text": {
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
                "attribute": "helper_text",
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
                "reflect": false
            },
            "enable_rich_editor": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "attribute": "enable_rich_editor",
                "reflect": false
            },
            "max_characters": {
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
                "attribute": "max_characters",
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
                "optional": false,
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
            "characterCount": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=dda-textarea.js.map
