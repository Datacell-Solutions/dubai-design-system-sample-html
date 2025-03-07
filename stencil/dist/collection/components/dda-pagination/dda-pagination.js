import { h, Host } from "@stencil/core";
export class DdaPagination {
    constructor() {
        this.total_pages = 8;
        this.current_page = 1;
        this.type = 'simple-slider';
        this.custom_class = '';
    }
    validateTotalPages(newValue) {
        if (newValue < 1) {
            this.total_pages = 1;
        }
    }
    validateCurrentPage(newValue) {
        if (newValue < 1) {
            this.current_page = 1;
        }
        else if (newValue > this.total_pages) {
            this.current_page = this.total_pages;
        }
    }
    componentWillLoad() {
        this.validateTotalPages(this.total_pages);
        this.validateCurrentPage(this.current_page);
    }
    renderPagination() {
        switch (this.type) {
            case 'simple-slider':
                return (h("div", { class: `dda-pagination dda-pagination-simple-slider ${this.custom_class} ${this.component_mode}` }, h("button", { class: "prev", disabled: this.current_page === 1, onClick: () => this.setcurrentpage(this.current_page - 1) }, h("i", { class: "material-icons  material-symbols-outlined" }, "arrow_back"), " Prev"), h("span", null, "Page ", this.current_page, " of ", this.total_pages), h("button", { class: "next", disabled: this.current_page === this.total_pages, onClick: () => this.setcurrentpage(this.current_page + 1) }, "Next ", h("i", { class: "material-icons  material-symbols-outlined" }, "arrow_forward"))));
            case 'buttons':
                return (h("div", { class: `dda-pagination dda-pagination-buttons ${this.custom_class} ${this.component_mode}` }, h("button", { class: "prev", disabled: this.current_page === 1, onClick: () => this.setcurrentpage(this.current_page - 1) }, h("i", { class: "material-icons  material-symbols-outlined" }, "arrow_back"), " Prev"), this.renderPageButtons(), h("button", { class: "next", disabled: this.current_page === this.total_pages, onClick: () => this.setcurrentpage(this.current_page + 1) }, "Next ", h("i", { class: "material-icons  material-symbols-outlined" }, "arrow_forward"))));
            case 'text':
                return (h("div", { class: `dda-pagination dda-pagination-text ${this.custom_class} ${this.component_mode}` }, h("button", { class: "prev", disabled: this.current_page === 1, onClick: () => this.setcurrentpage(this.current_page - 1) }, h("i", { class: "material-icons  material-symbols-outlined" }, "arrow_back")), h("span", null, "Page ", this.current_page, " of ", this.total_pages), h("button", { class: "next", disabled: this.current_page === this.total_pages, onClick: () => this.setcurrentpage(this.current_page + 1) }, h("i", { class: "material-icons  material-symbols-outlined" }, "arrow_forward"))));
            case 'text-pages':
                return (h("div", { class: `dda-pagination dda-pagination-text-pages ${this.custom_class} ${this.component_mode}` }, h("button", { class: "prev", disabled: this.current_page === 1, onClick: () => this.setcurrentpage(this.current_page - 1) }, h("i", { class: "material-icons  material-symbols-outlined" }, "arrow_back")), this.renderPageButtons(), h("button", { class: "next", disabled: this.current_page === this.total_pages, onClick: () => this.setcurrentpage(this.current_page + 1) }, h("i", { class: "material-icons  material-symbols-outlined" }, "arrow_forward"))));
            case 'button-text':
                return (h("div", { class: `dda-pagination dda-pagination-button-text ${this.custom_class} ${this.component_mode}` }, h("button", { class: "prev", disabled: this.current_page === 1, onClick: () => this.setcurrentpage(this.current_page - 1) }, h("i", { class: "material-icons  material-symbols-outlined" }, "arrow_back")), this.renderPageButtons(), h("button", { class: "next", disabled: this.current_page === this.total_pages, onClick: () => this.setcurrentpage(this.current_page + 1) }, h("i", { class: "material-icons  material-symbols-outlined" }, "arrow_forward"))));
            case 'buttons-pages':
                return (h("div", { class: `dda-pagination dda-pagination-buttons-pages ${this.custom_class} ${this.component_mode}` }, h("button", { class: "prev", disabled: this.current_page === 1, onClick: () => this.setcurrentpage(this.current_page - 1) }, h("i", { class: "material-icons  material-symbols-outlined" }, "arrow_back")), h("button", { class: "next", disabled: this.current_page === this.total_pages, onClick: () => this.setcurrentpage(this.current_page + 1) }, h("i", { class: "material-icons  material-symbols-outlined" }, "arrow_forward"))));
            case 'full':
                return (h("div", { class: `dda-pagination dda-pagination-full ${this.custom_class} ${this.component_mode}` }, this.renderPageButtons()));
        }
    }
    renderPageButtons() {
        const buttons = [];
        for (let i = 1; i <= this.total_pages; i++) {
            buttons.push(h("button", { class: i === this.current_page ? 'active' : '', onClick: () => this.setcurrentpage(i) }, i));
        }
        return buttons;
    }
    setcurrentpage(page) {
        if (page >= 1 && page <= this.total_pages) {
            this.current_page = page;
        }
    }
    render() {
        return (h(Host, { key: '92f165f2831f0d9bc6f1eca0b2558cb43908bc99' }, h("div", { key: 'ee1fb7c0f3ce654f01fef086201b0d7c500e86e1', class: `dda-pagination-container` }, this.renderPagination())));
    }
    static get is() { return "dda-pagination"; }
    static get originalStyleUrls() {
        return {
            "$": ["dda-pagination.css", "../../global/global.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dda-pagination.css", "../../global/global.css"]
        };
    }
    static get properties() {
        return {
            "total_pages": {
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
                "attribute": "total_pages",
                "reflect": false,
                "defaultValue": "8"
            },
            "current_page": {
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
                "attribute": "current_page",
                "reflect": false,
                "defaultValue": "1"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'simple-slider' | 'buttons' | 'text' | 'text-pages' | 'button-text' | 'buttons-pages' | 'full'",
                    "resolved": "\"button-text\" | \"buttons\" | \"buttons-pages\" | \"full\" | \"simple-slider\" | \"text\" | \"text-pages\"",
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
                "defaultValue": "'simple-slider'"
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
    static get watchers() {
        return [{
                "propName": "total_pages",
                "methodName": "validateTotalPages"
            }, {
                "propName": "current_page",
                "methodName": "validateCurrentPage"
            }];
    }
}
//# sourceMappingURL=dda-pagination.js.map
