import { p as proxyCustomElement, H, h, c as Host } from './p-4928c8aa.js';

const ddaRangeSliderCss = ".dda-range-slider-container{width:100%;margin:20px 0;position:relative}.dda-range-slider{position:relative;width:100%;height:6px;background:var(--dda-neutral-variant-92);border-radius:5px}.dda-range-slider-input{position:absolute;width:100%;height:6px;background:transparent;-webkit-appearance:none;appearance:none;pointer-events:none;border:0;margin:0;padding:0}.dda-range-slider-input::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:22px;height:22px;border-radius:50%;background:var(--dda-neutral-100);border:solid 2px var(--dda-neutral-90);cursor:pointer;pointer-events:all}.dda-range-slider-input::-moz-range-thumb{width:20px;height:20px;border:0;border-radius:50%;background:var(--dda-color-primary-40);cursor:pointer;pointer-events:all;-moz-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out}.dda-range-slider-track{position:absolute;height:100%;background:var(--dda-color-primary-40);border-radius:5px}.light-mode .dda-range-slider-track{background:var(--dda-primary-40)}.dda-range-slider-track span{background:var(--dda-neutral-100);width:55px;height:35px;font-size:16px;color:var(--dda-on-surface-variant-30);font-weight:var(--dda-fw-500);text-align:center;position:absolute;top:13px;display:flex;align-items:center;justify-content:center}.light-mode .dda-range-slider-track span{color:var(--dda-neutral-variant-30)}.dda-tooltip-top .dda-range-slider-track span{top:auto;bottom:24px}.dda-tooltip-bottom .dda-range-slider-track span{top:24px}.dda-range-slider-track .min-label{left:-17px}.dda-range-slider-track .max-label{right:-33px}.dda-tooltip-top .dda-range-slider-track span,.dda-tooltip-bottom .dda-range-slider-track span{border:solid 1px var(--dda-neutral-90);border-radius:4px;-webkit-box-shadow:0px 1px 2px 0px rgba(16, 24, 40, 0.04);-moz-box-shadow:0px 1px 2px 0px rgba(16, 24, 40, 0.04);box-shadow:0px 1px 2px 0px rgba(16, 24, 40, 0.04)}.dda-tooltip-top .dda-range-slider-track span::before,.dda-tooltip-top .dda-range-slider-track span::after,.dda-tooltip-bottom .dda-range-slider-track span::before,.dda-tooltip-bottom .dda-range-slider-track span::after{content:\"\";position:absolute;border-left:10px solid transparent;border-right:10px solid transparent;left:50%;margin-inline-start:-10px}.dda-tooltip-top .dda-range-slider-track span::before{top:100%;border-top:8px solid var(--dda-neutral-90);margin-top:0px}.dda-tooltip-top .dda-range-slider-track span::after{top:100%;border-top:8px solid var(--dda-neutral-100);margin-top:-2px;z-index:1}.dda-tooltip-bottom .dda-range-slider-track span::before{bottom:100%;border-bottom:8px solid var(--dda-neutral-90);margin-bottom:0px}.dda-tooltip-bottom .dda-range-slider-track span::after{bottom:100%;border-bottom:8px solid var(--dda-neutral-100);margin-bottom:-2px;z-index:1}";
const DdaRangeSliderStyle0 = ddaRangeSliderCss;

const DdaRangeSlider$1 = /*@__PURE__*/ proxyCustomElement(class DdaRangeSlider extends H {
    constructor() {
        super();
        this.__registerHost();
        this.min = 0;
        this.max = 100;
        this.step = 1;
        this.initial_min = 0;
        this.initial_max = 100;
        this.custom_class = '';
    }
    componentWillLoad() {
        this.min_value = this.initial_min;
        this.max_value = this.initial_max;
    }
    handleMinChange(event) {
        const value = Number(event.target.value);
        if (value <= this.max_value - this.step) {
            this.min_value = value;
        }
    }
    handleMaxChange(event) {
        const value = Number(event.target.value);
        if (value >= this.min_value + this.step) {
            this.max_value = value;
        }
    }
    getPercentage(value) {
        return ((value - this.min) / (this.max - this.min)) * 100;
    }
    render() {
        return (h(Host, { key: 'e9afd1fc39873d711a26d1df6cca1295e40b7f4c' }, h("div", { key: '8b637585fa69c15366fd482318941a4565afed13', class: `dda-range-slider-container dda-tooltip-${this.tooltip_position} ${this.custom_class} ${this.component_mode}` }, h("div", { key: '5d99117d34b701f224991c43b4f966aa1f418266', class: "dda-range-slider" }, h("div", { key: 'e404d82a51dded499c072d1001e8e52dffeeb7c7', class: "dda-range-slider-track", style: {
                left: `${this.getPercentage(this.min_value)}%`,
                right: `${100 - this.getPercentage(this.max_value)}%`,
            } }, h("span", { key: '111acb90f4d051488448138031940c90a1a7528a', class: "min-label" }, this.min_value, "%"), h("span", { key: '7ba4418113fa32ae5a099cd0799cc6fd614cf649', class: "max-label" }, this.max_value, "%")), h("label", { key: 'f66dd9d5cc4370e46293015fd10a6aa62650d99e', htmlFor: this.left_input_id }, h("input", { key: 'a263746a9dde346a99a452855be254d74bb8ef20', id: this.left_input_id, "aria-label": this.left_aria_label, type: "range", min: this.min, max: this.max, step: this.step, value: this.min_value, onInput: (event) => this.handleMinChange(event), class: "dda-range-slider-input", style: { zIndex: `${this.min_value > this.max - this.min_value ? 5 : 3}` } })), h("label", { key: '55a0a05a6a98478de47545d9b3c9da363221a6f6', htmlFor: this.right_input_id }, h("input", { key: 'b86ce92eb77fdba473bec04982eff168ff73fa78', id: this.right_input_id, "aria-label": this.right_aria_label, type: "range", min: this.min, max: this.max, step: this.step, value: this.max_value, onInput: (event) => this.handleMaxChange(event), class: "dda-range-slider-input", style: { zIndex: `${this.max_value < this.max - this.min_value ? 5 : 3}` } }))))));
    }
    static get style() { return DdaRangeSliderStyle0; }
}, [0, "dda-range-slider", {
        "min": [2],
        "max": [2],
        "step": [2],
        "initial_min": [2],
        "initial_max": [2],
        "size": [1],
        "tooltip_position": [1],
        "custom_class": [1],
        "component_mode": [1],
        "left_input_id": [1],
        "right_input_id": [1],
        "left_aria_label": [1],
        "right_aria_label": [1],
        "min_value": [32],
        "max_value": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dda-range-slider"];
    components.forEach(tagName => { switch (tagName) {
        case "dda-range-slider":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DdaRangeSlider$1);
            }
            break;
    } });
}
defineCustomElement$1();

const DdaRangeSlider = DdaRangeSlider$1;
const defineCustomElement = defineCustomElement$1;

export { DdaRangeSlider, defineCustomElement };

//# sourceMappingURL=dda-range-slider.js.map