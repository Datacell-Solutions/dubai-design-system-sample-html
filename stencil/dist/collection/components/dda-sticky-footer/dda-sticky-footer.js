import { h } from "@stencil/core";
export class DdaStickyFooter {
    constructor() {
        this.isHidden = false;
        this.lastScrollY = 0;
    }
    componentWillLoad() {
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidLoad() {
        window.addEventListener('scroll', this.handleScroll);
    }
    disconnectedCallback() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll() {
        const currentScrollY = window.scrollY;
        this.isHidden = currentScrollY > this.lastScrollY;
        this.lastScrollY = currentScrollY;
    }
    render() {
        return (h("footer", { key: 'a9e137042eff688b38333db663ce3960a27c3ddd', class: { 'dda-footer': true, 'hidden': this.isHidden } }, h("div", { key: 'bec62408335e5348d0adffb07c4bd5b16e59ec68', class: "footer-content" }, h("div", { key: 'a04fe50220416f99bb5e1f3390afee8a2d2d1648', class: "dda-footer-item dda-footer-left" }, h("ul", { key: '1e2fd534c3766243c9a5141680bd7b00c8c2f6d2' }, h("li", { key: 'c9956cdd4d39954c0823f51ecf71fcefe175f30a', class: "foot-icon-btn" }, h("dda-tooltip", { key: '9530f2edfd96fffa9e300118dbefc5c321d899e2', title_text: this.happinessIconTooltip, description: "", position: "top" }, h("a", { key: '2023735aafff965b82180e2332dd5f010d5a12c5', href: this.happinessIconHref }, h("img", { key: '03f3d5ac39f61dacaea9acee92aaa8fee029adc0', src: this.happinessIconSrc, alt: this.happinessIconAlt })))), h("li", { key: '8fc12b8950826ecfc00233ab3b17ccc1bed9bc80', class: "foot-icon-btn" }, h("dda-tooltip", { key: '8f7fbdae0fce3ac96b6415e52ba2eed9b5433c8b', title_text: this.accessibilityIconTooltip, description: "", position: "top" }, h("a", { key: '7854ccf8c1976ae43054f1f2e315b7485e77fda9', href: this.accessibilityIconHref }, h("img", { key: 'c69b6da8e1f1246210ad9f09fd54a5a0808e532c', src: this.accessibilityIconSrc, alt: this.accessibilityIconAlt })))), h("li", { key: '2741b289ab525f01d2c1843cb87f0e24c8dfdad8', class: "foot-icon-btn" }, h("dda-tooltip", { key: '6c26c15765615834ad7b76c997c88c2e4c377f34', title_text: this.servicesIconTooltip, description: "", position: "top" }, h("a", { key: 'b80d32bdf2e71ce9519571cfb53f0aae721f5a8b', href: this.servicesIconHref }, h("img", { key: '0becb4bbda185ba2eb865345a5d473c62287f544', src: this.servicesIconSrc, alt: this.servicesIconAlt }), this.servicesIconText && h("span", { key: 'd37cad421830b0ac37acbd038e15ee10f3f063ce' }, this.servicesIconText)))))), h("div", { key: '99b5ab4109daec422656d6370b9da96947a9c7fd', class: "dda-footer-item dda-footer-middle" }, h("ul", { key: '99641d8a12465ecc45c30cbdc91b2d44c72b722f', class: "foot-logo" }, h("li", { key: 'a8ff40112fd3c185275747588f7bcd18ea972de9' }, h("dda-tooltip", { key: 'b9918d757f1baca5b4595ec62f47557bfad49688', title_text: this.firstLogoTooltip, description: "", position: "top" }, h("a", { key: 'c01d841feaddc638d473e1c8ee3d8f2b49fa698e', href: this.firstLogoHref }, h("img", { key: '0b9fa6a513d2a3d45c08db2155c482290c3f566b', src: this.firstLogoSrc, alt: this.firstLogoAlt })))), h("li", { key: 'd71db73edb0338faf3c42f5b432da1d4f9cc0285' }, h("dda-tooltip", { key: '1be0ef323a20fd0ef5420563a1f7cede043101c2', title_text: this.secondLogoTooltip, description: "", position: "top" }, h("a", { key: '13985f47560875402c5f4a64797e2c1de9abacd0', href: this.secondLogoHref }, h("img", { key: '17af38b3c7de88598a078d0028e2a3be3d85b88e', src: this.secondLogoSrc, alt: this.secondLogoAlt })))), h("li", { key: 'e0f5763b09279b11b01b3a70fb74a54c317f0036' }, h("dda-tooltip", { key: '1cd542b49eaa52e5083fb8ceded908c162d0d51c', title_text: this.thirdLogoTooltip, description: "", position: "top" }, h("a", { key: '507dcbb4ce43265bf954ee49428e2d400647fe1c', href: this.thirdLogoHref }, h("img", { key: '5c56f2df2b39b9266aac1558db13b634ccd3f226', src: this.thirdLogoSrc, alt: this.thirdLogoAlt })))))), h("div", { key: '60c8c80fee37d7e88fd1fa76e13593f6fbc5c8f8', class: "dda-footer-item dda-footer-right" }, h("ul", { key: '6a913590557fde30d4b0cba4956fa7b9433926d3' }, h("li", { key: '0ae525076178645b2727370d99b36ccc44f8c36d', class: "foot-menu" }, h("dda-link-button", { key: 'c8e8ffb608147dab9eca4ee4348f37e48650cd4b', button_color: "onsurface-link", start_icon: this.newsButtonIcon, href: this.newsButtonHref, size: "sm" }, this.locationButtonText)), h("li", { key: 'ee7ba8710b9dffd60415a8754fc458a81f533b5a', class: "foot-menu" }, h("dda-link-button", { key: '2a3d103fc8bf508553b48e45d2a9a05d20cb3e22', button_color: "onsurface-link", start_icon: this.newsButtonIcon, href: this.newsButtonHref, size: "sm" }, this.newsButtonText)), h("li", { key: '2ef8dd544a3e95ea022ac378dfcd2a7dcacbaf12', class: "foot-icon-btn" }, h("dda-tooltip", { key: '3561ef6b495da1ef404cf1b1857bc9dd34b4fd4a', title_text: this.aiIconTooltip, description: "", position: "top" }, h("a", { key: 'd582c50220756605ea864d464c1b4af0a63ebe23', href: this.aiIconHref }, h("img", { key: 'f713a884046ff93ab84854093b796e3dc4a6a321', src: this.aiIconSrc, alt: this.aiIconAlt })))), h("li", { key: 'd609425bf44d81f2368d7d103c7cbb673ba8a4de', class: "foot-icon-btn" }, h("dda-tooltip", { key: '93c5fb27028373f6de6fed1dce4181bea6bef00e', title_text: this.chatIconTooltip, description: "", position: "top" }, h("a", { key: 'e598ec6a6644025cdac6b833676f1c67f2a0d53c', href: this.chatIconHref }, h("img", { key: 'b147ef7453351b43a128dbaa282d734f3e1eb37d', src: this.chatIconSrc, alt: this.chatIconAlt })))))))));
    }
    static get is() { return "dda-sticky-footer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dda-sticky-footer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dda-sticky-footer.css"]
        };
    }
    static get properties() {
        return {
            "happinessIconHref": {
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
                    "text": "Left Section Props"
                },
                "getter": false,
                "setter": false,
                "attribute": "happiness-icon-href",
                "reflect": false
            },
            "happinessIconSrc": {
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
                "attribute": "happiness-icon-src",
                "reflect": false
            },
            "happinessIconAlt": {
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
                "attribute": "happiness-icon-alt",
                "reflect": false
            },
            "happinessIconTooltip": {
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
                "attribute": "happiness-icon-tooltip",
                "reflect": false
            },
            "accessibilityIconHref": {
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
                "attribute": "accessibility-icon-href",
                "reflect": false
            },
            "accessibilityIconSrc": {
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
                "attribute": "accessibility-icon-src",
                "reflect": false
            },
            "accessibilityIconAlt": {
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
                "attribute": "accessibility-icon-alt",
                "reflect": false
            },
            "accessibilityIconTooltip": {
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
                "attribute": "accessibility-icon-tooltip",
                "reflect": false
            },
            "servicesIconHref": {
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
                "attribute": "services-icon-href",
                "reflect": false
            },
            "servicesIconSrc": {
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
                "attribute": "services-icon-src",
                "reflect": false
            },
            "servicesIconAlt": {
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
                "attribute": "services-icon-alt",
                "reflect": false
            },
            "servicesIconTooltip": {
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
                "attribute": "services-icon-tooltip",
                "reflect": false
            },
            "servicesIconText": {
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
                "attribute": "services-icon-text",
                "reflect": false
            },
            "firstLogoHref": {
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
                    "text": "Middle Section Props"
                },
                "getter": false,
                "setter": false,
                "attribute": "first-logo-href",
                "reflect": false
            },
            "firstLogoSrc": {
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
                "attribute": "first-logo-src",
                "reflect": false
            },
            "firstLogoAlt": {
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
                "attribute": "first-logo-alt",
                "reflect": false
            },
            "firstLogoTooltip": {
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
                "attribute": "first-logo-tooltip",
                "reflect": false
            },
            "secondLogoHref": {
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
                "attribute": "second-logo-href",
                "reflect": false
            },
            "secondLogoSrc": {
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
                "attribute": "second-logo-src",
                "reflect": false
            },
            "secondLogoAlt": {
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
                "attribute": "second-logo-alt",
                "reflect": false
            },
            "secondLogoTooltip": {
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
                "attribute": "second-logo-tooltip",
                "reflect": false
            },
            "thirdLogoHref": {
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
                "attribute": "third-logo-href",
                "reflect": false
            },
            "thirdLogoSrc": {
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
                "attribute": "third-logo-src",
                "reflect": false
            },
            "thirdLogoAlt": {
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
                "attribute": "third-logo-alt",
                "reflect": false
            },
            "thirdLogoTooltip": {
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
                "attribute": "third-logo-tooltip",
                "reflect": false
            },
            "locationButtonHref": {
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
                    "text": "Right Section Props"
                },
                "getter": false,
                "setter": false,
                "attribute": "location-button-href",
                "reflect": false
            },
            "locationButtonText": {
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
                "attribute": "location-button-text",
                "reflect": false
            },
            "locationButtonIcon": {
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
                "attribute": "location-button-icon",
                "reflect": false
            },
            "newsButtonHref": {
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
                "attribute": "news-button-href",
                "reflect": false
            },
            "newsButtonText": {
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
                "attribute": "news-button-text",
                "reflect": false
            },
            "newsButtonIcon": {
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
                "attribute": "news-button-icon",
                "reflect": false
            },
            "aiIconHref": {
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
                "attribute": "ai-icon-href",
                "reflect": false
            },
            "aiIconSrc": {
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
                "attribute": "ai-icon-src",
                "reflect": false
            },
            "aiIconAlt": {
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
                "attribute": "ai-icon-alt",
                "reflect": false
            },
            "aiIconTooltip": {
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
                "attribute": "ai-icon-tooltip",
                "reflect": false
            },
            "chatIconHref": {
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
                "attribute": "chat-icon-href",
                "reflect": false
            },
            "chatIconSrc": {
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
                "attribute": "chat-icon-src",
                "reflect": false
            },
            "chatIconAlt": {
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
                "attribute": "chat-icon-alt",
                "reflect": false
            },
            "chatIconTooltip": {
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
                "attribute": "chat-icon-tooltip",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isHidden": {}
        };
    }
}
//# sourceMappingURL=dda-sticky-footer.js.map
