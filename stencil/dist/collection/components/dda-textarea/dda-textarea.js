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
        return (h(Host, { key: 'bf4c157e7e6a227fab75363366fc5d7367ed2f80' }, h("div", { key: '59893bdb2954ff8514053f9802efecbce907aab2', class: textareaClass }, this.label && h("label", { key: '641b24b7076833eb663d61eae438da86e3e227dc', htmlFor: this.input_id, class: "dda-input-label" }, this.label), this.enable_rich_editor ? (h("div", { id: "editor", class: "dda-richeditor-field" })) : (h("textarea", { id: this.input_id, "aria-label": this.aria_label, placeholder: this.placeholder, value: this.value, onInput: (event) => this.handleInput(event), class: "dda-input-field dda-input-textarea", maxLength: this.max_characters })), this.helper_text && (h("div", { key: 'c7480b4f9ddb6460dbee660ebd6e59359ab76f15', class: "dda-helper-text" }, h("span", { key: 'a846b464878fad7ab89e0c243d705ee00aef6e41', class: "dda-flex dda-align-center dda-gap-2" }, h("i", { key: '91094485cb81b696a80bd1cff50503c289b5d596', class: "material-icons  material-symbols-outlined" }, "info"), " ", this.helper_text), h("span", { key: 'af69a48f238d1c117dd122d8dfc4c9f20ea357c9', class: "dda-letter-count" }, this.characterCount, " / ", this.max_characters))), this.error_message && (h("div", { key: '035d93670dc4090a3a63ae1b73912a07e3d1605f', class: "dda-error-message" }, h("span", { key: '9de6131e17120cd3901e2f84abf695734ad271a2', class: "dda-flex dda-align-center dda-gap-2" }, h("i", { key: '88dac3aaed0e3118fbce8ae7839377a5cd83c33e', class: "material-icons  material-symbols-outlined" }, "info"), " ", this.error_message), h("span", { key: '8d5f01dbd780804a965f78af9bb77f3feb20f3f3', class: "dda-letter-count" }, this.characterCount, " / ", this.max_characters))))));
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
