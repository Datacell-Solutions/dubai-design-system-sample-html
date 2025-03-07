import { Host, h } from "@stencil/core";
export class DdaHomeBanner {
    constructor() {
        this.currentSlide = 0;
        this.slides = [];
    }
    componentDidLoad() {
        this.updateSlides();
        // Listen for slot changes
        const slot = this.el.querySelector('slot');
        slot === null || slot === void 0 ? void 0 : slot.addEventListener('slotchange', () => this.updateSlides());
    }
    updateSlides() {
        this.slides = Array.from(this.el.querySelectorAll('slide'));
        if (this.slides.length > 0) {
            this.currentSlide = 0; // Reset slide index if slides are updated
        }
    }
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }
    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    }
    setSlide(index) {
        this.currentSlide = index;
    }
    render() {
        return (h(Host, { key: '8f8cf8a327549be740fa2b6feaa8aa5392a6e891' }, h("div", { key: '684963d8000558061e3b05b5e676be6324898a05', class: "dda-slider-container" }, h("div", { key: '9a01dc06affb462a80e221d0916882f28bd47a29', class: "dda-slides", style: { innerWidth: this.slides.length * 100 + 'vw', left: this.currentSlide * -100 + '%' } }, h("slot", { key: '554d8c6d597bf084309af5f37a44da8b799863a5' })), h("div", { key: 'abbb99a2ad40f0607102ff197564ca2db5a5e091', class: 'slider-nav' }, h("button", { key: 'c7bcd1711059acfd4c78b980463946b8b2fe937b', class: "prev", onClick: () => this.prevSlide() }, h("i", { key: '9da81675a5e2ecbc8343a1bbbe4934b0d1a9647d', class: "material-icons" }, "chevron_left")), h("ul", { key: '42102beb31fc5216d4a943fe0fee1f6ca2c58d7b' }, this.slides.map((_, index) => {
            return h("div", { class: this.currentSlide == index ? 'dots active' : 'dots', onClick: () => this.setSlide(index) });
        })), h("button", { key: '0afdf239a1acc68a41965637f0db95a3fdc5a575', class: "next", onClick: () => this.nextSlide() }, h("i", { key: 'eda35d55b103be49700785ce010168683f55ac47', class: "material-icons" }, "chevron_right"))))));
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
    static get states() {
        return {
            "currentSlide": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=dda-home-banner.js.map
