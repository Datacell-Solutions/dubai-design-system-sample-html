import { p as proxyCustomElement, H, h } from './p-4928c8aa.js';
import { d as defineCustomElement$3 } from './p-75b2b77a.js';
import { d as defineCustomElement$2 } from './p-8f1e7cae.js';

const ddaStickyFooterCss = "";
const DdaStickyFooterStyle0 = ddaStickyFooterCss;

const DdaStickyFooter$1 = /*@__PURE__*/ proxyCustomElement(class DdaStickyFooter extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
    static get style() { return DdaStickyFooterStyle0; }
}, [1, "dda-sticky-footer", {
        "happinessIconHref": [1, "happiness-icon-href"],
        "happinessIconSrc": [1, "happiness-icon-src"],
        "happinessIconAlt": [1, "happiness-icon-alt"],
        "happinessIconTooltip": [1, "happiness-icon-tooltip"],
        "accessibilityIconHref": [1, "accessibility-icon-href"],
        "accessibilityIconSrc": [1, "accessibility-icon-src"],
        "accessibilityIconAlt": [1, "accessibility-icon-alt"],
        "accessibilityIconTooltip": [1, "accessibility-icon-tooltip"],
        "servicesIconHref": [1, "services-icon-href"],
        "servicesIconSrc": [1, "services-icon-src"],
        "servicesIconAlt": [1, "services-icon-alt"],
        "servicesIconTooltip": [1, "services-icon-tooltip"],
        "servicesIconText": [1, "services-icon-text"],
        "firstLogoHref": [1, "first-logo-href"],
        "firstLogoSrc": [1, "first-logo-src"],
        "firstLogoAlt": [1, "first-logo-alt"],
        "firstLogoTooltip": [1, "first-logo-tooltip"],
        "secondLogoHref": [1, "second-logo-href"],
        "secondLogoSrc": [1, "second-logo-src"],
        "secondLogoAlt": [1, "second-logo-alt"],
        "secondLogoTooltip": [1, "second-logo-tooltip"],
        "thirdLogoHref": [1, "third-logo-href"],
        "thirdLogoSrc": [1, "third-logo-src"],
        "thirdLogoAlt": [1, "third-logo-alt"],
        "thirdLogoTooltip": [1, "third-logo-tooltip"],
        "locationButtonHref": [1, "location-button-href"],
        "locationButtonText": [1, "location-button-text"],
        "locationButtonIcon": [1, "location-button-icon"],
        "newsButtonHref": [1, "news-button-href"],
        "newsButtonText": [1, "news-button-text"],
        "newsButtonIcon": [1, "news-button-icon"],
        "aiIconHref": [1, "ai-icon-href"],
        "aiIconSrc": [1, "ai-icon-src"],
        "aiIconAlt": [1, "ai-icon-alt"],
        "aiIconTooltip": [1, "ai-icon-tooltip"],
        "chatIconHref": [1, "chat-icon-href"],
        "chatIconSrc": [1, "chat-icon-src"],
        "chatIconAlt": [1, "chat-icon-alt"],
        "chatIconTooltip": [1, "chat-icon-tooltip"],
        "isHidden": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dda-sticky-footer", "dda-link-button", "dda-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "dda-sticky-footer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DdaStickyFooter$1);
            }
            break;
        case "dda-link-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "dda-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}
defineCustomElement$1();

const DdaStickyFooter = DdaStickyFooter$1;
const defineCustomElement = defineCustomElement$1;

export { DdaStickyFooter, defineCustomElement };

//# sourceMappingURL=dda-sticky-footer.js.map