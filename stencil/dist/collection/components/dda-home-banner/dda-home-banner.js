import { Host, h } from "@stencil/core";
export class DdaHomeBanner {
    constructor() {
        this.images = [];
        this.autoplay = true;
        this.interval = 3000;
        this.currentSlide = 0;
    }
    componentDidLoad() {
        if (this.autoplay) {
            this.startAutoplay();
        }
    }
    disconnectedCallback() {
        this.stopAutoplay();
    }
    startAutoplay() {
        this.slideInterval = setInterval(() => {
            this.nextSlide();
        }, this.interval);
    }
    stopAutoplay() {
        clearInterval(this.slideInterval);
    }
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.images.length;
    }
    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
    }
    setSlide(index) {
        this.currentSlide = index;
    }
    render() {
        return (h(Host, { key: '9ab79705ebc4f9f08ced6f35d1608a1d51f3bef7' }, h("div", { key: 'ebb08c21620dcbd2407bbfac2f5f5e9ff15f78c4', class: "home-slider" }, this.images.map((image, index) => (h("div", { class: { 'slider-item': true, 'active': index === this.currentSlide } }, h("img", { src: image.src, alt: `banner-${index}` }), h("div", { class: "slider-content" }, h("h2", null, image.title), h("p", null, image.subtitle), h("a", { href: image.link, class: "slider-button" }, "Learn More"))))), h("div", { key: '58c0262377fb6ddf9fc067b34fac8b783f3871f6', class: "slider-nav" }, h("button", { key: 'a39dd68758fe2a48424f2c7852b78910ba16e1d1', class: "prev", onClick: () => this.prevSlide() }, "\u276E"), h("div", { key: '56e7e3b2839584800ac53849766d1824c620972a', class: "slider-dots" }, this.images.map((_, index) => (h("span", { class: { 'dot': true, 'active-dot': index === this.currentSlide }, onClick: () => this.setSlide(index) })))), h("button", { key: '072c59ccc7b931de0d916cb12dc8244deebd869c', class: "next", onClick: () => this.nextSlide() }, "\u276F")))));
    }
    static get is() { return "dda-home-banner"; }
    static get originalStyleUrls() {
        return {
            "$": ["home-banner.css", "../../global/global.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["home-banner.css", "../../global/global.css"]
        };
    }
    static get properties() {
        return {
            "images": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ src: string; title: string; subtitle: string; link: string }[]",
                    "resolved": "{ src: string; title: string; subtitle: string; link: string; }[]",
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
                "defaultValue": "[]"
            },
            "autoplay": {
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
                "attribute": "autoplay",
                "reflect": false,
                "defaultValue": "true"
            },
            "interval": {
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
                "attribute": "interval",
                "reflect": false,
                "defaultValue": "3000"
            }
        };
    }
    static get states() {
        return {
            "currentSlide": {}
        };
    }
}
//# sourceMappingURL=dda-home-banner.js.map
