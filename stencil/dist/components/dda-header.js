import { p as proxyCustomElement, H, d as createEvent, h } from './p-4928c8aa.js';
import { d as defineCustomElement$5 } from './p-64e3720e.js';
import { d as defineCustomElement$4 } from './p-0aaba43b.js';
import { d as defineCustomElement$3 } from './p-0b576515.js';
import { d as defineCustomElement$2 } from './p-8432b994.js';

const ddaHeaderCss = "";
const DdaHeaderStyle0 = ddaHeaderCss;

const DdaHeader$1 = /*@__PURE__*/ proxyCustomElement(class DdaHeader extends H {
    constructor() {
        super();
        this.__registerHost();
        this.languageSwitch = createEvent(this, "languageSwitch", 7);
        this.smTextSize = createEvent(this, "smTextSize", 7);
        this.baseTextSize = createEvent(this, "baseTextSize", 7);
        this.lgTextSize = createEvent(this, "lgTextSize", 7);
        this.normalContrast = createEvent(this, "normalContrast", 7);
        this.blindContrast = createEvent(this, "blindContrast", 7);
        this.redContrast = createEvent(this, "redContrast", 7);
        this.greenContrast = createEvent(this, "greenContrast", 7);
        this.isMenuOpen = false;
        this.isSubMenuOpen = false;
        this.isSideSubMenuOpen = false;
        this.isAccessibiltyOpen = false;
        this.lastScrollTop = 0;
        this.handleScroll = () => {
            const scrollTop = window.scrollY;
            const menuContainer = document.querySelector('.dda-menu-container');
            const logoContainer = document.querySelector('.dda-header');
            if (scrollTop > this.lastScrollTop && scrollTop > 50) {
                if (menuContainer)
                    menuContainer.style.display = 'none';
                if (logoContainer)
                    logoContainer.classList.add('white');
            }
            else {
                if (menuContainer)
                    menuContainer.style.display = 'flex';
                if (logoContainer)
                    logoContainer.classList.remove('white');
            }
            this.lastScrollTop = scrollTop;
        };
        this.toggleMenu = () => {
            this.isMenuOpen = !this.isMenuOpen;
        };
        this.toggleSubMenu = () => {
            this.isSubMenuOpen = !this.isSubMenuOpen;
        };
        this.toggleSideSubMenu = () => {
            this.isSideSubMenuOpen = !this.isSideSubMenuOpen;
        };
        this.toggleAccessibilty = () => {
            this.isAccessibiltyOpen = !this.isAccessibiltyOpen;
        };
        this.languagehandler = () => {
            this.languageSwitch.emit();
        };
        this.smTexthandler = () => {
            this.smTextSize.emit();
        };
        this.baseTexthandler = () => {
            this.baseTextSize.emit();
        };
        this.lgTexthandler = () => {
            this.lgTextSize.emit();
        };
        this.normalContrasthandler = () => {
            this.normalContrast.emit();
        };
        this.blindContrasthandler = () => {
            this.blindContrast.emit();
        };
        this.redContrasthandler = () => {
            this.redContrast.emit();
        };
        this.greenContrasthandler = () => {
            this.greenContrast.emit();
        };
    }
    componentDidLoad() {
        window.addEventListener('scroll', this.handleScroll);
    }
    disconnectedCallback() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    parseJsonArray(jsonString) {
        try {
            return JSON.parse(jsonString);
        }
        catch (e) {
            console.error('Failed to parse JSON:', e);
            return [];
        }
    }
    render() {
        const sideMenuItems = this.parseJsonArray(this.sideMenuItems);
        const quickLinks = this.parseJsonArray(this.quickLinks);
        return (h("header", { key: '074d2689214605dc50652a40dddef388636dc47d', class: "dda-header" }, h("div", { key: 'bbb2b96e514c1bdd48807e65d01efa7c20b320ef', class: "dda-head-logo" }, h("a", { key: 'b81f167ee66859a94604001c325fb0eca46b3534', href: "#", class: "govt-logo" }, h("img", { key: '2d4abc6ebda0d00f002465daba6be61c3ed87397', class: "logo-colored", src: this.firstLogoSrc, alt: this.firstLogoAlt }), h("img", { key: 'c0bf42a4e2fc681d4a0bc9f4bd0ba8e3f65b7654', class: "logo-white", src: this.firstLogoWhiteSrc, alt: this.firstLogoAlt })), h("a", { key: '762e82b55515af2780b842d4fbd105c815bfae29', href: "#", class: "entt-logo" }, h("img", { key: '70c6978fb12dbe2499f7eb09e11c15b0a5be9617', class: "logo-colored", src: this.secondLogoSrc, alt: this.secondLogoAlt }), h("img", { key: '3f1f655e077e4a428db4a570f6256bbd17a4fd24', class: "logo-white", src: this.secondLogoWhiteSrc, alt: this.secondLogoAlt }))), h("div", { key: '1abee122ffc6664baae447c4567df607b50928f4', class: "dda-menu-container" }, h("div", { key: '49dd1f158c68bd1b7362e1d5237b945443a31bed', class: "dda-main-navigation" }, h("div", { key: '143b8182ab59e47523dc8fd18581740e638499d7', class: `dda-menu-overley ${this.isMenuOpen ? 'show-overley' : ''}`, onClick: this.toggleMenu }), h("div", { key: '71491ba413a60979de53d2c2e1a9231585b47961', class: "hamburger-menu", onClick: this.toggleMenu }, h("dda-tooltip", { key: '020e2ca6b49760e8033830efb6b1ec0303108d55', title_text: "Menu", position: "top", class: "d-block" }, h("button", { key: '78fb72bfd54d9712332b0d464a5bc87ac890f8f8', type: "button", class: "hamburger-menu-btn" }, h("span", { key: '6b5c16180c3b9aa3cc71895ad573b8878aa5d617', class: "hamburger-line" }), h("span", { key: '1b707bf303bf777b3e5fb691ba7b39f28641c517', class: "hamburger-menu-text" }, "hamburger menu text")))), h("div", { key: '9c0079cf11f7468fb417c0b05313a6ad8b7c2b31', class: "dda-sidemenu", style: { display: this.isMenuOpen ? 'block' : '', insetInlineStart: this.isMenuOpen ? '0px' : '' } }, h("div", { key: '16b0131aa2bb2d90bc8bdee25c091f52a3883bd4', class: "dda-sidemenu-content" }, h("p", { key: '0052e85a83b81e58f7848d2cfa5190423d8f04db', class: "dda-side-nav-title" }, "Quick Links"), h("ul", { key: 'c49100b0d76261c3708eb807d3601212f8425167', class: "main_side_menu" }, sideMenuItems.map(item => (h("li", null, h("a", { href: item.subMenu && item.subMenu.length > 0 ? 'javascript:void(0)' : item.href, class: "dda-flex dda-justify-space dda-items-center", onClick: item.subMenu && item.subMenu.length && this.toggleSideSubMenu }, h("span", null, item.label), item.subMenu && item.subMenu.length > 0 && h("i", { class: "material-icons  material-symbols-outlined" }, "chevron_right")), item.subMenu && item.subMenu.length > 0 && (h("div", { class: `main_sub_menu  ${this.isSideSubMenuOpen ? 'showSubMenu' : ''}` }, h("ol", null, item.subMenu.map(sub => (h("li", null, h("a", { href: 'javascript:void(0)', onClick: this.toggleSideSubMenu }, h("span", null, sub.label), item.subMenu && item.subMenu.length > 0 && h("i", { class: "material-icons  material-symbols-outlined" }, "chevron_right")), h("div", { class: `main_sub_menu ${this.isSideSubMenuOpen ? 'showSubMenu' : ''}` }, h("p", { class: "dda-side-nav__title" }, "Initiatives"), h("ol", null, h("li", null, h("a", { href: "#" }, sub.label))))))))))))))), h("div", { key: '3ced01a1db756e2d02a337c6de6e50a247257196', class: "dda-sidemenu-bottom" }, h("div", { key: '01f53f8ef2420856260060b69017357369b924c8', class: "dda-sidemenu-gov-logo" }, h("a", { key: '476cde71cd8b4ea0c21b8f84abd152e223bc658d', href: "#", class: "govt-logo mb-2" }, h("img", { key: 'c3c83aa9ce9017331746670e0714e05127308b8a', class: "", src: this.firstLogoSrc, alt: this.firstLogoAlt }))), h("div", { key: 'eded887dffebd9e47500f62693af951ca45bcd78', class: "dda-toolbar-menu-sidemenu" }, h("ul", { key: 'c796b41cf50d10d12d81c8041a54459a0e4b890a' }, h("li", { key: 'c451d0a9fd616e8165f8cc691e5315ba4d3ab347' }, h("button", { key: '4d9eb9fe3ba0a29fab49a92f09795466ab7fe116', class: "tool-btn accessibility-btn", type: "button", onClick: this.toggleAccessibilty }, h("i", { key: '8a9769531708bbbefba377df1910068b44df70a3', class: "material-icons  material-symbols-outlined" }, "accessible_forward"), h("span", { key: '2046dc515a4c82cf345f42800a9fdf727f870a28', class: "visually-hidden" }, "Accessibility"))), h("li", { key: 'ced8d0042a6b28b52d901eb62d8127f9f0f4fc98' }, h("button", { key: '6cbeba28db8156f1df506a5968c58fd2eab6f956', class: "tool-btn", type: "button" }, "\u0627\u0644\u0639\u0631\u0628\u064A\u0629")), h("li", { key: '50d70e344168c4ab105e3ae5a739f617e4bfa6ee' }, h("dda-link-button", { key: '6e6be4a22335c0e8ca6b8960c869e277e57f7678', button_color: "onsurface-secondary", start_icon: "sentiment_satisfied", custom_class: "tool-btn", href: this.loginLink, button_shape: "circle", size: "sm" }, "Login"))))), h("button", { key: '99d1dfb198dc8a763235c992c78dcbaac4160b67', class: "close-btn side-nav-close-btn", "aria-label": "Close Sidebar", onClick: this.toggleMenu }, h("i", { key: '7dc71db3233cefdbdc3e6662004083b8faa5fc54', class: "material-icons  material-symbols-outlined" }, "close")), h("div", { key: '92620243462d5b24f66006ab21f9eaf4e0feffb8', class: "dda-accessibility hide-accessibility mobile-accessibility", style: { display: this.isAccessibiltyOpen ? 'block' : 'none' } }, h("div", { key: 'df705385e21b049d13f3643c2bebd2e5078136fc', class: "dda-row" }, h("div", { key: '48cccff1bd8e751c02e4db4cdd69df534f4744d3', class: "dda-col-md-4 dda-accessibility-item" }, h("h2", { key: 'fb3bc63b9d05e0b07032fb468c1b0516e6dbb40a', class: "dda-fs-body-lg dda-fw-700 mb-1" }, "Contrast"), h("form", { key: '99212c8598c6287ea3aeebde66d0d0d7e911cfa1' }, h("fieldset", { key: 'f08b2539e2ca4a6d11c543f7310aeb4f9b63fe10', class: "dda-theme-list" }, h("legend", { key: '66a736a7b4851f0138f7925deb44243b18dd861f' }, h("p", { key: '03657898856241078c0a964f091c9054a1056b1c', class: "mb-3" }, "Select your preferred contrast setting ")), h("dda-radiobutton", { key: 'b21d4c791a6af84b81c0736a9c72bd2beb0bdbd3', title_text: "Normal", checked: true, size: "sm", variants: "normal", supporting: "", group_name: "themeselectionmobile", input_id: "NormalMobile", custom_class: "", component_mode: "", aria_label: "radio-button", onClick: this.normalContrasthandler }), h("dda-radiobutton", { key: '93ba34f4087ec78e2993b3ccb84bca763bd46a65', title_text: "Colours Blind", checked: false, size: "sm", variants: "normal", supporting: "", group_name: "themeselectionmobile", input_id: "ColoursBlindMobile", custom_class: "", component_mode: "", aria_label: "radio-button", onClick: this.blindContrasthandler }), h("dda-radiobutton", { key: 'de37c21f31f4314819b41b4377ebc9cfb6733d8e', title_text: "Red Weakness", checked: false, size: "sm", variants: "normal", supporting: "", group_name: "themeselectionmobile", input_id: "RedWeaknessMobile", custom_class: "", component_mode: "", aria_label: "radio-button", onClick: this.redContrasthandler }), h("dda-radiobutton", { key: '7ff869f2c69fc1accee67cafd550ed1edcaf17f1', title_text: "Green Weakness", checked: false, size: "sm", variants: "normal", supporting: "", group_name: "themeselectionmobile", input_id: "GreenWeaknessMobile", custom_class: "", component_mode: "", aria_label: "radio-button", onClick: this.greenContrasthandler })))), h("div", { key: 'e9af796ab95c690dbdfdf6aef2a37aa0f7a5c3b2', class: "dda-col-md-4 dda-accessibility-item" }, h("h2", { key: '8c42af5c3c65e50c648319d273fa1b9912e0bfad', class: "dda-fs-body-lg dda-fw-700 mb-1" }, "Screen Reader"), h("p", { key: '512360fea13e99d6890b9e8d486fe0923cbb769b', class: "mb-3" }, "Listen to the content of the page by clicking play or listen"), h("div", { key: '56d432f3cb7a6cfce81128a1ae986dacdad007ed', class: "rs_skip rsbtn rs_preserve", id: "readspeaker_button1" }, h("a", { key: 'c219ffc1f7344e5f38dc49fe09d27230b0f37041', href: this.readSpeakerLink, rel: "nofollow", class: "rsbtn_play circle readspeaker", accessKey: "L", "aria-label": "Listen to this page using ReadSpeaker" }, h("i", { key: 'b871d84b0c7a6f4caa4b07479a834afcaf303811', class: "material-icons  material-symbols-outlined" }, "volume_up")))), h("div", { key: 'b56b27483caf1d60b614a4f887aac4310d335802', class: "dda-col-md-4 dda-accessibility-item" }, h("h2", { key: '1e12dcce3979e50558e33cf9cf4925bba1cf38cd', class: "dda-fs-body-lg dda-fw-700 mb-1" }, "Text Size"), h("p", { key: 'a5fb39e0a37ac26734d25a35b40735d35f284a3d', class: "mb-3" }, "Use the buttons below to increase or decrease the text size"), h("div", { key: 'dabccff2566e6c623bedf93e68d3bd57ece747e3', class: "d-flex dda-gap-4" }, h("dda-button", { key: '664ade92eb51b2ed123a7ebe7ca979ff47fa930c', button_color: "default-secondary", icon_button_shape: "circle", custom_class: "", size: "lg", onClick: this.baseTexthandler }, "A"), h("dda-button", { key: 'd2b57fdd7c272e85f33b219fdd7b2548aa9b781e', button_color: "default-secondary", icon_button_shape: "circle", custom_class: "", size: "lg", onClick: this.lgTexthandler }, "A+"), h("dda-button", { key: '36d4482e3eb2213f04803d8fef29f992897e6b90', button_color: "default-secondary", icon_button_shape: "circle", custom_class: "", size: "lg", onClick: this.smTexthandler }, "A-")))), h("button", { key: 'fa53a28bf3d0862c2ab576eef0dd32161802599b', class: "close-btn close_accessibility", "aria-label": "Close Sidebar", onClick: this.toggleAccessibilty }, h("i", { key: 'fc850e88c3d8c55c66231da8fad25a341f4eaa5c', class: "fa-solid fa-close" })))), h("div", { key: 'a05f8c8211aea55705802f0a7428b0a61bba7585' }, h("ul", { key: '75cfccfe0962476caf729e3db0e373bb68e7aa68', class: "dda-mega-menu" }, quickLinks.map(link => (h("li", null, h("a", { href: link.subMenu && link.subMenu.length > 0 ? 'javascript:void(0)' : link.href, onClick: link.subMenu && link.subMenu.length && this.toggleSubMenu }, link.label), link.subMenu && link.subMenu.length > 0 && (h("div", { class: "megamenu-content", style: { display: this.isSubMenuOpen ? 'block' : 'none' } }, h("div", { class: "megamenu-item dda-container" }, h("div", { class: "dda-row" }, h("div", { class: "dda-col-md-3" }, h("h3", { class: "mega-menu-title" }, "QUICK LINKS"), h("ul", null, link.subMenu.map(subItem => (h("li", null, h("a", { class: "megamenu-link", href: subItem.href }, h("span", { class: "dda-btn btn-color-onsurface-secondary btn-size-sm icon-btn-default" }, h("i", { class: "material-icons  material-symbols-outlined" }, subItem.icon)), h("span", { class: "text-wrap" }, h("span", { class: "title-text dda-fs-body-lg dda-fw-700" }, subItem.title), h("span", { class: "dda-fs-tagline-lg dda-fw-400" }, subItem.description))))))))), h("button", { class: "close-btn close_mega-menu", "aria-label": "Close Sidebar", onClick: this.toggleSubMenu }, h("i", { class: "material-icons  material-symbols-outlined" }, "close"))))))))))), h("div", { key: '202a24c20c484c3905283b346db16fe08945b20a', class: "dda-mobile-entt-logo" }, h("a", { key: '5bdc6ed597fe0a402836748622b5a95461ab7431', href: "#", class: "entt-logo" }, h("img", { key: 'abec27de88dc86b9d39bbd956adbf6179d6650e6', class: "logo-colored", src: this.secondLogoSrc, alt: this.secondLogoAlt }), h("img", { key: '9152653534bfde27463bf65dda26e7addf1afa7b', class: "logo-white", src: this.secondLogoWhiteSrc, alt: this.secondLogoAlt }))), h("div", { key: '9e885dd901c6529108a5008e334c96b78a160787', class: "dda-mobile-search" }, h("button", { key: '460b8f5c8338d52385968aaed5ef5823041cecec', class: "tool-btn", type: "button" }, h("span", { key: '62af7206e9dfc0e2f41e049b35a94a36ba7d6d5d', class: "visualy-hidden" }, "Search"), h("i", { key: '1b6a4167f9cf550a362ad1ebc882ef3691a8f030', class: "fa-solid fa-magnifying-glass" }))), h("div", { key: 'a56a2b9cbbeeca506aed4545369b24936cb995b5', class: "dda-toolbar-menu" }, h("ul", { key: '398fa0968809d169440add29700abfd6250611e8' }, h("li", { key: '3e40d9fdcfcbe88b1b3451d4154958d5285c67ea' }, h("dda-tooltip", { key: 'c3987d0bd1d4169f143b75ff33e7ad0ca4bcd6f8', title_text: "Search", description: "", position: "top" }, h("div", { key: '24875aa4f0c14c2bb73059665c7ff3c1d402f8f4', class: "dda-search dda-btn btn-color-onsurface-secondary btn-size-sm btn-shape-circle tool-btn" }, h("label", { key: '64af8759fe2d31ca575567472c1e51686eea4a9a', htmlFor: "ddaSearch", class: "visualy-hidden" }, "Search"), h("i", { key: '465fcfaa3bf4f3dd7a2e7327016625070c5f506c', class: "material-icons  material-symbols-outlined" }, "search"), h("input", { key: '8b49b2f260e9b5854f2b8820fdd5d75ceb5682e1', type: "text", id: 'ddaSearch', class: "", placeholder: "Search" })))), h("li", { key: 'd4e15784f0c76afa8d9749090778be31b90301b0' }, h("dda-tooltip", { key: 'abb18910a5101fdee89d571caf913937466f98d7', title_text: "Accessibility", position: "top" }, h("button", { key: '4245f325ef65fae8481cbd749d0552d9e1ae4521', class: "tool-btn dda-btn btn-color-onsurface-secondary btn-size-sm btn-shape-circle accessibility-btn", type: "button", onClick: this.toggleAccessibilty }, h("i", { key: '07770d618d04a0e74aeeaa1228aac902b7f21208', class: "material-icons  material-symbols-outlined" }, "accessible_forward"), h("span", { key: '116058c5ceb814c4fe19786c4a54878df8ed5100', class: "visually-hidden" }, "Accessibility"))), h("div", { key: '8e24eb47ab6af83f94c4ea9c9926e1da25e1ed9c', class: "dda-accessibility-wrap" }, h("div", { key: '60303e797bef1898c3ac3aeae7dac7c9d4d2b3fc', class: "dda-accessibility hide-accessibility", style: { display: this.isAccessibiltyOpen ? 'block' : 'none' } }, h("div", { key: 'eb1b1887200e1706bffae20e4d6a0b6fde7f2be8', class: "dda-row" }, h("div", { key: 'cdac436d4aee8ccd200143b7f66f223164ebf82c', class: "dda-col-md-4 dda-accessibility-item" }, h("h2", { key: '9dd98688bbc5d062f865e70792acb4d3c9c9f421', class: "dda-fs-body-lg dda-fw-700 mb-1" }, "Contrast"), h("form", { key: '5df3db21e0e88e36a66f40053e5b90a89ea4b4cb' }, h("fieldset", { key: 'f4a7bb5bff905c779fd52095dae37b950be55744', class: "dda-theme-list" }, h("legend", { key: '6f1da994b958928f4cbacd34be6fcac0245edc3e' }, h("p", { key: '27f32da2756131ce24672f6f0494db5b5be856aa', class: "mb-3" }, "Select your preferred contrast setting ")), h("dda-radiobutton", { key: '78de881ec7cb0448246f7b375b4ec4a6f0d22452', title_text: "Normal", checked: true, size: "sm", variants: "normal", supporting: "", group_name: "themeselection", input_id: "Normal", custom_class: "", component_mode: "", aria_label: "radio-button", onClick: this.normalContrasthandler }), h("dda-radiobutton", { key: '5c572480f0e3e97a2c90bd140dde8f3c0c14c59a', title_text: "Colours Blind", checked: false, size: "sm", variants: "normal", supporting: "", group_name: "themeselection", input_id: "ColoursBlind", custom_class: "", component_mode: "", aria_label: "radio-button", onClick: this.blindContrasthandler }), h("dda-radiobutton", { key: 'a42b4f6fadd85f060039964ca0169724fc5e5622', title_text: "Red Weakness", checked: false, size: "sm", variants: "normal", supporting: "", group_name: "themeselection", input_id: "RedWeakness", custom_class: "", component_mode: "", aria_label: "radio-button", onClick: this.redContrasthandler }), h("dda-radiobutton", { key: 'b173bd30d50cbe4d64ba4cb624fa2f59a81d3ceb', title_text: "Green Weakness", checked: false, size: "sm", variants: "normal", supporting: "", group_name: "themeselection", input_id: "GreenWeakness", custom_class: "", component_mode: "", aria_label: "radio-button", onClick: this.greenContrasthandler })))), h("div", { key: '9e7251e735245e69e2b3e55a37309f00a1e603f3', class: "dda-col-md-4 dda-accessibility-item" }, h("h2", { key: '0e8758022a6a1e4a079ba9422c15d74cfdc6d2df', class: "dda-fs-body-lg dda-fw-700 mb-1" }, "Screen Reader"), h("p", { key: '69ec27e81c695136c48a2238bd79f8141b2388ea', class: "mb-3" }, "Listen to the content of the page by clicking play or listen"), h("div", { key: 'ea9814ef384c8f72785f9dd1acb85f3a8404f6c0', class: "rs_skip rsbtn rs_preserve", id: "readspeaker_button1" }, h("a", { key: '436013839195130b7656ce1978a242280bb1d2ed', href: this.readSpeakerLink, rel: "nofollow", class: "rsbtn_play circle readspeaker", accessKey: "L", "aria-label": "Listen to this page using ReadSpeaker" }, h("i", { key: 'c2b9ccd95e6bba1de836879f8f069837e8d9ff6a', class: "material-icons  material-symbols-outlined" }, "volume_up")))), h("div", { key: 'd71c98e0d6e3d786a0d0a83532bf0a817edc3619', class: "dda-col-md-4 dda-accessibility-item" }, h("h2", { key: '6489a34b966f6b2d2efddaff4b07649d9638b7ca', class: "dda-fs-body-lg dda-fw-700 mb-1" }, "Text Size"), h("p", { key: 'f592bc248769e94b8f5e2c954f24c022413205f0', class: "mb-3" }, "Use the buttons below to increase or decrease the text size"), h("div", { key: 'f86b97f46da5afea88cda16cfd45a319c01afb23', class: "d-flex dda-gap-4" }, h("dda-button", { key: '3a72c636736d360dfb182e689a09c13956f819f4', button_color: "default-secondary", icon_button_shape: "circle", custom_class: "", size: "lg", onClick: this.baseTexthandler }, "A"), h("dda-button", { key: '9f8c8e6f76f409ab38cc01694997c54b75dd80f1', button_color: "default-secondary", icon_button_shape: "circle", custom_class: "", size: "lg", onClick: this.lgTexthandler }, "A+"), h("dda-button", { key: 'a94760bb23de581425b5490e07a183be9656adf0', button_color: "default-secondary", icon_button_shape: "circle", custom_class: "", size: "lg", onClick: this.smTexthandler }, "A-")))), h("button", { key: '337a257e1c8392ed8d5272f399e097d4ab7670d0', class: "close-btn close_accessibility", "aria-label": "Close Sidebar", onClick: this.toggleAccessibilty }, h("i", { key: '19a328059234eb65ca28b50876a749602cabc162', class: "fa-solid fa-close" }))))), h("li", { key: '87b0e0dbaa4d032831d8f331e4d887e01fff7e8b' }, h("dda-tooltip", { key: '0462f965ee0e1ec2296d63b8120335b004303516', title_text: "Language", position: "top" }, h("dda-button", { key: '21e6282656ad4ed38966bf4f992c4c8a3b1693a8', button_color: "onsurface-secondary", custom_class: "tool-btn", button_shape: "circle", size: "sm", onClick: this.languagehandler }, "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"))), h("li", { key: '3c0f6d011b8586b43faf9b2499fb76f7d5fe0ca7' }, h("dda-tooltip", { key: '68bb2636186cabd679f8c87dc2119e5f0170f04c', title_text: "Login", position: "top" }, h("dda-link-button", { key: 'c30458996c21167e82f94b680b4fd81edfb238c4', button_color: "onsurface-secondary", start_icon: "sentiment_satisfied", custom_class: "tool-btn", href: this.loginLink, button_shape: "circle", size: "sm" }, "Login"))))))));
    }
    static get style() { return DdaHeaderStyle0; }
}, [0, "dda-header", {
        "firstLogoSrc": [1, "first-logo-src"],
        "firstLogoWhiteSrc": [1, "first-logo-white-src"],
        "firstLogoAlt": [1, "first-logo-alt"],
        "secondLogoSrc": [1, "second-logo-src"],
        "secondLogoWhiteSrc": [1, "second-logo-white-src"],
        "secondLogoAlt": [1, "second-logo-alt"],
        "loginLink": [1, "login-link"],
        "sideMenuItems": [1, "side-menu-items"],
        "quickLinks": [1, "quick-links"],
        "readSpeakerLink": [1, "read-speaker-link"],
        "isMenuOpen": [32],
        "isSubMenuOpen": [32],
        "isSideSubMenuOpen": [32],
        "isAccessibiltyOpen": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["dda-header", "dda-button", "dda-link-button", "dda-radiobutton", "dda-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "dda-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DdaHeader$1);
            }
            break;
        case "dda-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "dda-link-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "dda-radiobutton":
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

const DdaHeader = DdaHeader$1;
const defineCustomElement = defineCustomElement$1;

export { DdaHeader, defineCustomElement };

//# sourceMappingURL=dda-header.js.map