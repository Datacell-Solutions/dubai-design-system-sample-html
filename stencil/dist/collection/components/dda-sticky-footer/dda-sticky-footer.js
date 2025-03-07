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
        return (h("footer", { key: '5a70837e1184938390d1d6cd9960281fdcb8c5a6', class: { 'dda-footer': true, 'hidden': this.isHidden } }, h("div", { key: 'f0c56a2f26cba669e34d6e9e1d2c9b729de6ba27', class: "footer-content" }, h("div", { key: 'bb1df97be9d893693d8b4c3a69eed16badf62668', class: "dda-footer-item dda-footer-left" }, h("ul", { key: '8cb3cb34a154644c0421b1274a6529662d22e245' }, h("li", { key: 'bdf1dbe544a3b8461da647b5003c79b3654dc21b', class: "foot-icon-btn" }, h("dda-tooltip", { key: '3de6770640ff9b409da55a07cb598609e015762d', title_text: this.happinessIconTooltip, description: "", position: "top" }, h("a", { key: '57b957125f03fce0e243bc2549919d3bdef3f14e', href: this.happinessIconHref }, h("img", { key: '05e60ecab20d1e42dd997a3a6ebc54817fd3516d', src: this.happinessIconSrc, alt: this.happinessIconAlt })))), h("li", { key: '3376501cc88f9cc2a988f1a874b667bd434494e1', class: "foot-icon-btn" }, h("dda-tooltip", { key: 'e83c5312c8429957c3388d2f42d78955d4e99c42', title_text: this.accessibilityIconTooltip, description: "", position: "top" }, h("a", { key: 'bcb67e299754c553f1823c2481c4fd1418cacc82', href: this.accessibilityIconHref }, h("img", { key: '8722bbb615872150e21abd9c53597a8cd86a179f', src: this.accessibilityIconSrc, alt: this.accessibilityIconAlt })))), h("li", { key: '3acf0a8ddae7cde65e57881dbe67fb0cb1c76fb7', class: "foot-icon-btn" }, h("dda-tooltip", { key: '09ed2e0f3973e99f85ecfe8071b7b1cb669ee464', title_text: this.servicesIconTooltip, description: "", position: "top" }, h("a", { key: '45e7d716654f10a09463b927c6d14bf12d2c1d52', href: this.servicesIconHref }, h("img", { key: '9269be96b24072182cd4a9cc5b8714e4bd12d410', src: this.servicesIconSrc, alt: this.servicesIconAlt }), this.servicesIconText && h("span", { key: '36b989d870cb1ce13fa8a4c155db18530901c7b6' }, this.servicesIconText)))))), h("div", { key: '325dccf3fb905039528f3e18691840eb03e977c7', class: "dda-footer-item dda-footer-middle" }, h("ul", { key: '13c47ab6c5bb0b770208d6a9359695bf6c2adf17', class: "foot-logo" }, h("li", { key: 'f2b6fda2e3bc15db9f375115f22e2134c2d2b25a' }, h("dda-tooltip", { key: '3626b00d487e1c584910133b50547363a113b571', title_text: this.firstLogoTooltip, description: "", position: "top" }, h("a", { key: '92622201d398fb8d8aa72f4d766dadb6c87172fe', href: this.firstLogoHref }, h("img", { key: '120a6a751be2994ceac4bd89dfd3f45b4258ac51', src: this.firstLogoSrc, alt: this.firstLogoAlt })))), h("li", { key: '8d0001face3f0c65e5f30478b0dc9341c7fb2f9d' }, h("dda-tooltip", { key: 'f98f6b9174e961a4083d32b110fdf65baeb8d8b6', title_text: this.secondLogoTooltip, description: "", position: "top" }, h("a", { key: 'ac06369f6ea9ec7891fb67e1996e27ebfc1b7aa0', href: this.secondLogoHref }, h("img", { key: '6a5b5f24c2d32dd19ee5c444b8d934688c3ac023', src: this.secondLogoSrc, alt: this.secondLogoAlt })))), h("li", { key: '93491706a7cf0155544148b9077dd6934d5ae91c' }, h("dda-tooltip", { key: 'a823378262b84e18c3d70a3fe2684388e1095a97', title_text: this.thirdLogoTooltip, description: "", position: "top" }, h("a", { key: 'eeb1d736d688aff6ba2f28c582863f504c3dd9cf', href: this.thirdLogoHref }, h("img", { key: 'd83c38b5f13fa90f26b5be05c00ab3617ed7ac28', src: this.thirdLogoSrc, alt: this.thirdLogoAlt })))))), h("div", { key: '38dec0c4e9fb77406fe15b042845c1cc18222042', class: "dda-footer-item dda-footer-right" }, h("ul", { key: '0a0c183e8dc244579d589356d75fc930c3abb395' }, h("li", { key: 'e8458c7a03b5ebbc685fdc4980bd61bba95df19d', class: "foot-menu" }, h("dda-link-button", { key: '4107e7bb6331e79e0e47f76e8f20c50b28b8119d', button_color: "onsurface-link", start_icon: this.newsButtonIcon, href: this.newsButtonHref, size: "sm" }, this.locationButtonText)), h("li", { key: '0c26926f4d1e9cb275e2f9ca2abfaa1b7aa85996', class: "foot-menu" }, h("dda-link-button", { key: '13d8a70d41823e87694e61984a88c4ace60d76b9', button_color: "onsurface-link", start_icon: this.newsButtonIcon, href: this.newsButtonHref, size: "sm" }, this.newsButtonText)), h("li", { key: '3ee0b95e4ac1dde673d37db564e9a9aca77bb80c', class: "foot-icon-btn" }, h("dda-tooltip", { key: '9f3f57c2dfec58044a99ce5696e5b6771b89279f', title_text: this.aiIconTooltip, description: "", position: "top" }, h("a", { key: 'b2b4fade09adbc77f239fcfacfecd125d0ce54e2', href: this.aiIconHref }, h("img", { key: '7db48c933fc59769ecbf5fc5f6a09d89a7f8befd', src: this.aiIconSrc, alt: this.aiIconAlt })))), h("li", { key: '76f1504a54baa7342c1ceb97dd1b5e92e589c9f3', class: "foot-icon-btn" }, h("dda-tooltip", { key: 'e023bb27a6f3c458773798b5e03e8097b095eb43', title_text: this.chatIconTooltip, description: "", position: "top" }, h("a", { key: '70eb23e8954e91f212e7f6f5d3b980e7af320cb2', href: this.chatIconHref }, h("img", { key: 'da7afb47baf95e9201132c961f4e251112b5e98e', src: this.chatIconSrc, alt: this.chatIconAlt })))))))));
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
