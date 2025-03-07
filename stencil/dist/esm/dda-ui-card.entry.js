import { r as registerInstance, c as createEvent, h, H as Host } from './index-ec5a309d.js';

const ddaUiCardCss = ":host{display:block}";
const DdaUiCardStyle0 = ddaUiCardCss;

const DdaUiCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.linkClick = createEvent(this, "linkClick", 7);
        this.type = 'default';
        this.icon = '';
        this.image = '';
        this.maintitle = '';
        this.subtitle = '';
        this.link = '';
        this.linktext = '';
    }
    render() {
        return (h(Host, { key: '2932c13967dac20f9a0001ac1f5f8ffcd27b09d0' }, h("div", { key: 'ff7eab2e6f911cf66f7f9f09bf7bb9e6d511411f', class: 'dda-card' }, h("div", { key: '9e4a4578216eb264a224e05fece2fdd6e5a52909', class: 'dda-card-body' }, this.type !== 'custom' && (h("div", { key: '42fa14e2fd310fc8313f204fb6ad46c00c0c31de' }, !!this.icon && (h("span", { key: '3c636ec782af60907705129f8643b50be30892dd', class: 'dda-card-icon' }, h("i", { key: 'ba5c2dddc88509aed4b84b16775ab317cd6c9bc0', class: 'material-icons' }, this.icon))), !!this.image && (h("span", { key: '4606c593ea071f97dcd3dbebc98c312c3dd5bedb', class: 'dda-card-icon' }, h("img", { key: '86f5b141f801f7c60a5981eb1373426ac52a7a03', src: this.image, alt: this.maintitle }))), !!this.maintitle && h("h1", { key: '95ba5ba1e3b8c0f96d4b680136a44b5de2549a89', class: 'dda-card-title' }, this.maintitle), !!this.subtitle && h("p", { key: '4f7c90cb2e7c9dc5b08de43b827189a0acccaa3b', class: 'dda-card-text-muted' }, this.subtitle), !!this.link && (h("a", { key: '9ffedc214f59c665273df525a3c7ebf6b700741a', href: this.link, class: 'dda-card-link' }, this.linktext, ' ', h("span", { key: 'bce956e8d68a85f57f75a9a66ed27986bfeb2fac' }, h("i", { key: 'b30e5b5ebf021f356b92934329da809e8cca9796', class: 'material-icons' }, "arrow_forward")))))), h("slot", { key: '182ac2f7016c5283d5c90a180079a572a9f2ff14' })))));
    }
};
DdaUiCard.style = DdaUiCardStyle0;

export { DdaUiCard as dda_ui_card };

//# sourceMappingURL=dda-ui-card.entry.js.map