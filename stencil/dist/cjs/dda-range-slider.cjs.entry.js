'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bccc9e2f.js');

const ddaRangeSliderCss = ".dda-range-slider-container{width:100%;margin:20px 0;position:relative}.dda-range-slider{position:relative;width:100%;height:6px;background:var(--dda-neutral-variant-92);border-radius:5px}.dda-range-slider-input{position:absolute;width:100%;height:6px;background:transparent;-webkit-appearance:none;appearance:none;pointer-events:none;border:0;margin:0;padding:0}.dda-range-slider-input::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:22px;height:22px;border-radius:50%;background:var(--dda-neutral-100);border:solid 2px var(--dda-neutral-90);cursor:pointer;pointer-events:all}.dda-range-slider-input::-moz-range-thumb{width:20px;height:20px;border:0;border-radius:50%;background:var(--dda-color-primary-40);cursor:pointer;pointer-events:all;-moz-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out}.dda-range-slider-track{position:absolute;height:100%;background:var(--dda-color-primary-40);border-radius:5px}.light-mode .dda-range-slider-track{background:var(--dda-primary-40)}.dda-range-slider-track span{background:var(--dda-neutral-100);width:55px;height:35px;font-size:16px;color:var(--dda-on-surface-variant-30);font-weight:var(--dda-fw-500);text-align:center;position:absolute;top:13px;display:flex;align-items:center;justify-content:center}.light-mode .dda-range-slider-track span{color:var(--dda-neutral-variant-30)}.dda-tooltip-top .dda-range-slider-track span{top:auto;bottom:24px}.dda-tooltip-bottom .dda-range-slider-track span{top:24px}.dda-range-slider-track .min-label{left:-17px}.dda-range-slider-track .max-label{right:-33px}.dda-tooltip-top .dda-range-slider-track span,.dda-tooltip-bottom .dda-range-slider-track span{border:solid 1px var(--dda-neutral-90);border-radius:4px;-webkit-box-shadow:0px 1px 2px 0px rgba(16, 24, 40, 0.04);-moz-box-shadow:0px 1px 2px 0px rgba(16, 24, 40, 0.04);box-shadow:0px 1px 2px 0px rgba(16, 24, 40, 0.04)}.dda-tooltip-top .dda-range-slider-track span::before,.dda-tooltip-top .dda-range-slider-track span::after,.dda-tooltip-bottom .dda-range-slider-track span::before,.dda-tooltip-bottom .dda-range-slider-track span::after{content:\"\";position:absolute;border-left:10px solid transparent;border-right:10px solid transparent;left:50%;margin-inline-start:-10px}.dda-tooltip-top .dda-range-slider-track span::before{top:100%;border-top:8px solid var(--dda-neutral-90);margin-top:0px}.dda-tooltip-top .dda-range-slider-track span::after{top:100%;border-top:8px solid var(--dda-neutral-100);margin-top:-2px;z-index:1}.dda-tooltip-bottom .dda-range-slider-track span::before{bottom:100%;border-bottom:8px solid var(--dda-neutral-90);margin-bottom:0px}.dda-tooltip-bottom .dda-range-slider-track span::after{bottom:100%;border-bottom:8px solid var(--dda-neutral-100);margin-bottom:-2px;z-index:1}";
const DdaRangeSliderStyle0 = ddaRangeSliderCss;

const DdaRangeSlider = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: 'b5dce63173f9d571fe756fda3a8ceb9bcfa296f3' }, index.h("div", { key: 'e64e453753807ba91770c440bf038f5ed88bd099', class: `dda-range-slider-container dda-tooltip-${this.tooltip_position} ${this.custom_class} ${this.component_mode}` }, index.h("div", { key: '14a758970aa683ae5b353748182ec22de3832380', class: "dda-range-slider" }, index.h("div", { key: '0affe74e8dffcfb570477240fff96d9c54e3d4ba', class: "dda-range-slider-track", style: {
                left: `${this.getPercentage(this.min_value)}%`,
                right: `${100 - this.getPercentage(this.max_value)}%`,
            } }, index.h("span", { key: '056d093b27d750664f80c0f662ff324cdddbc952', class: "min-label" }, this.min_value, "%"), index.h("span", { key: '91f2a6e073ff021c8a82bf013e37191b38dc4fbe', class: "max-label" }, this.max_value, "%")), index.h("label", { key: 'a8127312be4e3df032e98618785868abfec07bb0', htmlFor: this.left_input_id }, index.h("input", { key: 'c18b8a8c6db47eb407bc8e13a6e59b5dede36bc7', id: this.left_input_id, "aria-label": this.left_aria_label, type: "range", min: this.min, max: this.max, step: this.step, value: this.min_value, onInput: (event) => this.handleMinChange(event), class: "dda-range-slider-input", style: { zIndex: `${this.min_value > this.max - this.min_value ? 5 : 3}` } })), index.h("label", { key: '188ae2927e1d4c9126c64c5318b60517a4c7e3f0', htmlFor: this.right_input_id }, index.h("input", { key: '1e6fc72f7950805de21b957a95106b699eeb883d', id: this.right_input_id, "aria-label": this.right_aria_label, type: "range", min: this.min, max: this.max, step: this.step, value: this.max_value, onInput: (event) => this.handleMaxChange(event), class: "dda-range-slider-input", style: { zIndex: `${this.max_value < this.max - this.min_value ? 5 : 3}` } }))))));
    }
};
DdaRangeSlider.style = DdaRangeSliderStyle0;

exports.dda_range_slider = DdaRangeSlider;

//# sourceMappingURL=dda-range-slider.cjs.entry.js.map