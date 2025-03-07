import { p as proxyCustomElement, H, h } from './p-4928c8aa.js';
import { d as defineCustomElement$3 } from './p-0aaba43b.js';
import { d as defineCustomElement$2 } from './p-8432b994.js';

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
        return (h("footer", { key: '5a70837e1184938390d1d6cd9960281fdcb8c5a6', class: { 'dda-footer': true, 'hidden': this.isHidden } }, h("div", { key: 'f0c56a2f26cba669e34d6e9e1d2c9b729de6ba27', class: "footer-content" }, h("div", { key: 'bb1df97be9d893693d8b4c3a69eed16badf62668', class: "dda-footer-item dda-footer-left" }, h("ul", { key: '8cb3cb34a154644c0421b1274a6529662d22e245' }, h("li", { key: 'bdf1dbe544a3b8461da647b5003c79b3654dc21b', class: "foot-icon-btn" }, h("dda-tooltip", { key: '3de6770640ff9b409da55a07cb598609e015762d', title_text: this.happinessIconTooltip, description: "", position: "top" }, h("a", { key: '57b957125f03fce0e243bc2549919d3bdef3f14e', href: this.happinessIconHref }, h("img", { key: '05e60ecab20d1e42dd997a3a6ebc54817fd3516d', src: this.happinessIconSrc, alt: this.happinessIconAlt })))), h("li", { key: '3376501cc88f9cc2a988f1a874b667bd434494e1', class: "foot-icon-btn" }, h("dda-tooltip", { key: 'e83c5312c8429957c3388d2f42d78955d4e99c42', title_text: this.accessibilityIconTooltip, description: "", position: "top" }, h("a", { key: 'bcb67e299754c553f1823c2481c4fd1418cacc82', href: this.accessibilityIconHref }, h("img", { key: '8722bbb615872150e21abd9c53597a8cd86a179f', src: this.accessibilityIconSrc, alt: this.accessibilityIconAlt })))), h("li", { key: '3acf0a8ddae7cde65e57881dbe67fb0cb1c76fb7', class: "foot-icon-btn" }, h("dda-tooltip", { key: '09ed2e0f3973e99f85ecfe8071b7b1cb669ee464', title_text: this.servicesIconTooltip, description: "", position: "top" }, h("a", { key: '45e7d716654f10a09463b927c6d14bf12d2c1d52', href: this.servicesIconHref }, h("img", { key: '9269be96b24072182cd4a9cc5b8714e4bd12d410', src: this.servicesIconSrc, alt: this.servicesIconAlt }), this.servicesIconText && h("span", { key: '36b989d870cb1ce13fa8a4c155db18530901c7b6' }, this.servicesIconText)))))), h("div", { key: '325dccf3fb905039528f3e18691840eb03e977c7', class: "dda-footer-item dda-footer-middle" }, h("ul", { key: '13c47ab6c5bb0b770208d6a9359695bf6c2adf17', class: "foot-logo" }, h("li", { key: 'f2b6fda2e3bc15db9f375115f22e2134c2d2b25a' }, h("dda-tooltip", { key: '3626b00d487e1c584910133b50547363a113b571', title_text: this.firstLogoTooltip, description: "", position: "top" }, h("a", { key: '92622201d398fb8d8aa72f4d766dadb6c87172fe', href: this.firstLogoHref }, h("img", { key: '120a6a751be2994ceac4bd89dfd3f45b4258ac51', src: this.firstLogoSrc, alt: this.firstLogoAlt })))), h("li", { key: '8d0001face3f0c65e5f30478b0dc9341c7fb2f9d' }, h("dda-tooltip", { key: 'f98f6b9174e961a4083d32b110fdf65baeb8d8b6', title_text: this.secondLogoTooltip, description: "", position: "top" }, h("a", { key: 'ac06369f6ea9ec7891fb67e1996e27ebfc1b7aa0', href: this.secondLogoHref }, h("img", { key: '6a5b5f24c2d32dd19ee5c444b8d934688c3ac023', src: this.secondLogoSrc, alt: this.secondLogoAlt })))), h("li", { key: '93491706a7cf0155544148b9077dd6934d5ae91c' }, h("dda-tooltip", { key: 'a823378262b84e18c3d70a3fe2684388e1095a97', title_text: this.thirdLogoTooltip, description: "", position: "top" }, h("a", { key: 'eeb1d736d688aff6ba2f28c582863f504c3dd9cf', href: this.thirdLogoHref }, h("img", { key: 'd83c38b5f13fa90f26b5be05c00ab3617ed7ac28', src: this.thirdLogoSrc, alt: this.thirdLogoAlt })))))), h("div", { key: '38dec0c4e9fb77406fe15b042845c1cc18222042', class: "dda-footer-item dda-footer-right" }, h("ul", { key: '0a0c183e8dc244579d589356d75fc930c3abb395' }, h("li", { key: 'e8458c7a03b5ebbc685fdc4980bd61bba95df19d', class: "foot-menu" }, h("dda-link-button", { key: '4107e7bb6331e79e0e47f76e8f20c50b28b8119d', button_color: "onsurface-link", start_icon: this.newsButtonIcon, href: this.newsButtonHref, size: "sm" }, this.locationButtonText)), h("li", { key: '0c26926f4d1e9cb275e2f9ca2abfaa1b7aa85996', class: "foot-menu" }, h("dda-link-button", { key: '13d8a70d41823e87694e61984a88c4ace60d76b9', button_color: "onsurface-link", start_icon: this.newsButtonIcon, href: this.newsButtonHref, size: "sm" }, this.newsButtonText)), h("li", { key: '3ee0b95e4ac1dde673d37db564e9a9aca77bb80c', class: "foot-icon-btn" }, h("dda-tooltip", { key: '9f3f57c2dfec58044a99ce5696e5b6771b89279f', title_text: this.aiIconTooltip, description: "", position: "top" }, h("a", { key: 'b2b4fade09adbc77f239fcfacfecd125d0ce54e2', href: this.aiIconHref }, h("img", { key: '7db48c933fc59769ecbf5fc5f6a09d89a7f8befd', src: this.aiIconSrc, alt: this.aiIconAlt })))), h("li", { key: '76f1504a54baa7342c1ceb97dd1b5e92e589c9f3', class: "foot-icon-btn" }, h("dda-tooltip", { key: 'e023bb27a6f3c458773798b5e03e8097b095eb43', title_text: this.chatIconTooltip, description: "", position: "top" }, h("a", { key: '70eb23e8954e91f212e7f6f5d3b980e7af320cb2', href: this.chatIconHref }, h("img", { key: 'da7afb47baf95e9201132c961f4e251112b5e98e', src: this.chatIconSrc, alt: this.chatIconAlt })))))))));
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