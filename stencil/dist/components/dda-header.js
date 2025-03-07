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
        return (h("header", { key: '074d2689214605dc50652a40dddef388636dc47d', class: "dda-header" }, h("div", { key: 'bbb2b96e514c1bdd48807e65d01efa7c20b320ef', class: "dda-head-logo" }, h("a", { key: 'b81f167ee66859a94604001c325fb0eca46b3534', href: "#", class: "govt-logo" }, h("img", { key: '2d4abc6ebda0d00f002465daba6be61c3ed87397', class: "logo-colored", src: this.firstLogoSrc, alt: this.firstLogoAlt }), h("img", { key: 'c0bf42a4e2fc681d4a0bc9f4bd0ba8e3f65b7654', class: "logo-white", src: this.firstLogoWhiteSrc, alt: this.firstLogoAlt })), h("a", { key: '762e82b55515af2780b842d4fbd105c815bfae29', href: "#", class: "entt-logo" }, h("img", { key: '70c6978fb12dbe2499f7eb09e11c15b0a5be9617', class: "logo-colored", src: this.secondLogoSrc, alt: this.secondLogoAlt }), h("img", { key: '3f1f655e077e4a428db4a570f6256bbd17a4fd24', class: "logo-white", src: this.secondLogoWhiteSrc, alt: this.secondLogoAlt }))), h("div", { key: '1abee122ffc6664baae447c4567df607b50928f4', class: "dda-menu-container" }, h("div", { key: '49dd1f158c68bd1b7362e1d5237b945443a31bed', class: "dda-main-navigation" }, h("div", { key: '143b8182ab59e47523dc8fd18581740e638499d7', class: `dda-menu-overley ${this.isMenuOpen ? 'show-overley' : ''}`, onClick: this.toggleMenu }), h("div", { key: '71491ba413a60979de53d2c2e1a9231585b47961', class: "hamburger-menu", onClick: this.toggleMenu }, h("dda-tooltip", { key: '020e2ca6b49760e8033830efb6b1ec0303108d55', title_text: "Menu", position: "top", class: "d-block" }, h("button", { key: '78fb72bfd54d9712332b0d464a5bc87ac890f8f8', type: "button", class: "hamburger-menu-btn" }, h("span", { key: '6b5c16180c3b9aa3cc71895ad573b8878aa5d617', class: "hamburger-line" }), h("span", { key: '1b707bf303bf777b3e5fb691ba7b39f28641c517', class: "hamburger-menu-text" }, "hamburger menu text")))), h("div", { key: '9c0079cf11f7468fb417c0b05313a6ad8b7c2b31', class: "dda-sidemenu", style: { display: this.isMenuOpen ? 'block' : '', insetInlineStart: this.isMenuOpen ? '0px' : '' } }, h("div", { key: '16b0131aa2bb2d90bc8bdee25c091f52a3883bd4', class: "dda-sidemenu-content" }, h("p", { key: '0052e85a83b81e58f7848d2cfa5190423d8f04db', class: "dda-side-nav-title" }, "Quick Links"), h("ul", { key: 'c49100b0d76261c3708eb807d3601212f8425167', class: "main_side_menu" }, sideMenuItems.map(item => (h("li", null, h("a", { href: item.subMenu && item.subMenu.length > 0 ? 'javascript:void(0)' : item.href, class: "dda-flex dda-justify-space dda-items-center", onClick: item.subMenu && item.subMenu.length && this.toggleSideSubMenu }, h("span", null, item.label), item.subMenu && item.subMenu.length > 0 && h("i", { class: "material-icons  material-symbols-outlined" }, "chevron_right")), item.subMenu && item.subMenu.length > 0 && (h("div", { class: `main_sub_menu  ${this.isSideSubMenuOpen ? 'showSubMenu' : ''}` }, h("ol", null, item.subMenu.map(sub => (h("li", null, h("a", { href: 'javascript:void(0)', onClick: this.toggleSideSubMenu }, h("span", null, sub.label), item.subMenu && item.subMenu.length > 0 && h("i", { class: "material-icons  material-symbols-outlined" }, "chevron_right")), h("div", { class: `main_sub_menu ${this.isSideSubMenuOpen ? 'showSubMenu' : ''}` }, h("p", { class: "dda-side-nav__title" }, "Initiatives"), h("ol", null, h("li", null, h("a", { href: "#" }, sub.label))))))))))))))), h("div", { key: '3ced01a1db756e2d02a337c6de6e50a247257196', class: "dda-sidemenu-bottom" }, h("div", { key: '01f53f8ef2420856260060b69017357369b924c8', class: "dda-sidemenu-gov-logo" }, h("a", { key: '476cde71cd8b4ea0c21b8f84abd152e223bc658d', href: "#", class: "govt-logo mb-2" }, h("img", { key: 'c3c83aa9ce9017331746670e0714e05127308b8a', class: "", src: this.firstLogoSrc, alt: this.firstLogoAlt }))), h("div", { key: 'eded887dffebd9e47500f62693af951ca45bcd78', class: "dda-toolbar-menu-sidemenu" }, h("ul", { key: 'c796b41cf50d10d12d81c8041a54459a0e4b890a' }, h("li", { key: 'c451d0a9fd616e8165f8cc691e5315ba4d3ab347' }, h("button", { key: '4d9eb9fe3ba0a29fab49a92f09795466ab7fe116', class: "tool-btn accessibility-btn", type: "button", onClick: this.toggleAccessibilty }, h("i", { key: '8a9769531708bbbefba377df1910068b44df70a3', class: "material-icons  material-symbols-outlined" }, "accessible_forward"), h("span", { key: '2046dc515a4c82cf345f42800a9fdf727f870a28', class: "visually-hidden" }, "Accessibility"))), h("li", { key: 'ced8d0042a6b28b52d901eb62d8127f9f0f4fc98' }, h("button", { key: '4a47401eb426da8a79d3498ae919b183074ced74', class: "tool-btn", type: "button", onClick: this.languagehandler }, "\u0627\u0644\u0639\u0631\u0628\u064A\u0629")), h("li", { key: '053448eb391bdaef328f31146710fe2f822a941c' }, h("dda-link-button", { key: '92be66bde9360951ed5c367a9e185fe34707204b', button_color: "onsurface-secondary", start_icon: "sentiment_satisfied", custom_class: "tool-btn", href: this.loginLink, button_shape: "circle", size: "sm" }, "Login"))))), h("button", { key: 'c716904af896b90ce49ece2fa8c05eb335eb0de5', class: "close-btn side-nav-close-btn", "aria-label": "Close Sidebar", onClick: this.toggleMenu }, h("i", { key: '92e95e24a64d0cbec19f710242c496d66a714ec1', class: "material-icons  material-symbols-outlined" }, "close")), h("div", { key: 'b0712859e22960d5dab72f89f37ef36800b0d433', class: "dda-accessibility hide-accessibility mobile-accessibility", style: { display: this.isAccessibiltyOpen ? 'block' : 'none' } }, h("div", { key: 'c94b473bca1567e86364f9194ee416de0f746526', class: "dda-row" }, h("div", { key: 'b776b16db9776ed6fc880bc6762e3b38232ca816', class: "dda-col-md-4 dda-accessibility-item" }, h("h2", { key: 'faa551e3935e691c09623ad0f54a59ac2c33abcf', class: "dda-fs-body-lg dda-fw-700 mb-1" }, "Contrast"), h("form", { key: '4683ac130d47681768f838ded0651a2acf60836f' }, h("fieldset", { key: 'fcfde677555b0f0ca198dcd16f3c0d2dacd42156', class: "dda-theme-list" }, h("legend", { key: '8fc3544c3317188b73cb461b87843dd3525416a0' }, h("p", { key: '94c545102ee27d748d1f7d96dd04fdcda367660a', class: "mb-3" }, "Select your preferred contrast setting ")), h("dda-radiobutton", { key: '216c6b3901bfba412b4c410ddd75a7fd2294b448', title_text: "Normal", checked: true, size: "sm", variants: "normal", supporting: "", group_name: "themeselectionmobile", input_id: "NormalMobile", custom_class: "", component_mode: "", aria_label: "radio-button", onClick: this.normalContrasthandler }), h("dda-radiobutton", { key: 'd8b2200583cb77297e2a806d2e7793baf2e2224a', title_text: "Colours Blind", checked: false, size: "sm", variants: "normal", supporting: "", group_name: "themeselectionmobile", input_id: "ColoursBlindMobile", custom_class: "", component_mode: "", aria_label: "radio-button", onClick: this.blindContrasthandler }), h("dda-radiobutton", { key: '0908b59e0a8af9ea120b242060f38da4acc2d782', title_text: "Red Weakness", checked: false, size: "sm", variants: "normal", supporting: "", group_name: "themeselectionmobile", input_id: "RedWeaknessMobile", custom_class: "", component_mode: "", aria_label: "radio-button", onClick: this.redContrasthandler }), h("dda-radiobutton", { key: 'b93a10147ff9a6a2b2334b3d194ab846425aa280', title_text: "Green Weakness", checked: false, size: "sm", variants: "normal", supporting: "", group_name: "themeselectionmobile", input_id: "GreenWeaknessMobile", custom_class: "", component_mode: "", aria_label: "radio-button", onClick: this.greenContrasthandler })))), h("div", { key: '45d121dbd1981c434fbb0429460d90482035e093', class: "dda-col-md-4 dda-accessibility-item" }, h("h2", { key: '82d561334480b68dee995cc6450525195cf86562', class: "dda-fs-body-lg dda-fw-700 mb-1" }, "Screen Reader"), h("p", { key: 'e59fe16268e54d122479a67567d5c1b57143f5bb', class: "mb-3" }, "Listen to the content of the page by clicking play or listen"), h("div", { key: '0bdcbedac77e5fff00d9be2e0b2e725edf2ec07f', class: "rs_skip rsbtn rs_preserve", id: "readspeaker_button1" }, h("a", { key: 'e5ca6df0634ccc15c5f79f4f3e16f325a458e527', href: this.readSpeakerLink, rel: "nofollow", class: "rsbtn_play circle readspeaker", accessKey: "L", "aria-label": "Listen to this page using ReadSpeaker" }, h("i", { key: '0315f72fdb1f9311dc2376dc8979a6f131f04a3e', class: "material-icons  material-symbols-outlined" }, "volume_up")))), h("div", { key: '315d375bb49c5f3782ef142e42c845ac5739be23', class: "dda-col-md-4 dda-accessibility-item" }, h("h2", { key: 'd75f9847aa3260abda5af9806b95508a42be7e74', class: "dda-fs-body-lg dda-fw-700 mb-1" }, "Text Size"), h("p", { key: 'a3d5e8d5e60074d02d78f50984bc9421fa643274', class: "mb-3" }, "Use the buttons below to increase or decrease the text size"), h("div", { key: 'e91d6106751235c2ad1bec0651a8c4da18680ee1', class: "d-flex dda-gap-4" }, h("dda-button", { key: '96fa585a15230ac2d6bd3c35bbaa4f6d1d428125', button_color: "default-secondary", icon_button_shape: "circle", custom_class: "", size: "lg", onClick: this.baseTexthandler }, "A"), h("dda-button", { key: 'a8c29d72d533c5cf9d3b8285bb0afde258f0ece2', button_color: "default-secondary", icon_button_shape: "circle", custom_class: "", size: "lg", onClick: this.lgTexthandler }, "A+"), h("dda-button", { key: '38bf142e81cc33b72d2220df76dc60db9ef56b4d', button_color: "default-secondary", icon_button_shape: "circle", custom_class: "", size: "lg", onClick: this.smTexthandler }, "A-")))), h("button", { key: '2252b459bf9981dbcc94dacd9080b2ecd390ac62', class: "close-btn close_accessibility", "aria-label": "Close Sidebar", onClick: this.toggleAccessibilty }, h("i", { key: '2a36d6ebdc2d7489bf2a6e1033739bbd40d97dd1', class: "fa-solid fa-close" })))), h("div", { key: '6c994ca9f35ef996a5508aa3673bc38811ce3ccd' }, h("ul", { key: 'ab3e5c8bb6eaf703928af7314a60c38e784a92cc', class: "dda-mega-menu" }, quickLinks.map(link => (h("li", null, h("a", { href: link.subMenu && link.subMenu.length > 0 ? 'javascript:void(0)' : link.href, onClick: link.subMenu && link.subMenu.length && this.toggleSubMenu }, link.label), link.subMenu && link.subMenu.length > 0 && (h("div", { class: "megamenu-content", style: { display: this.isSubMenuOpen ? 'block' : 'none' } }, h("div", { class: "megamenu-item dda-container" }, h("div", { class: "dda-row" }, h("div", { class: "dda-col-md-3" }, h("h3", { class: "mega-menu-title" }, "QUICK LINKS"), h("ul", null, link.subMenu.map(subItem => (h("li", null, h("a", { class: "megamenu-link", href: subItem.href }, h("span", { class: "dda-btn btn-color-onsurface-secondary btn-size-sm icon-btn-default" }, h("i", { class: "material-icons  material-symbols-outlined" }, subItem.icon)), h("span", { class: "text-wrap" }, h("span", { class: "title-text dda-fs-body-lg dda-fw-700" }, subItem.title), h("span", { class: "dda-fs-tagline-lg dda-fw-400" }, subItem.description))))))))), h("button", { class: "close-btn close_mega-menu", "aria-label": "Close Sidebar", onClick: this.toggleSubMenu }, h("i", { class: "material-icons  material-symbols-outlined" }, "close"))))))))))), h("div", { key: '4de6e4647fa39663a9eaf9891a124f7009c59487', class: "dda-mobile-entt-logo" }, h("a", { key: 'db25bd13ba97dab2fc4109ef21ef5d027a62ee11', href: "#", class: "entt-logo" }, h("img", { key: '36d4b5ca7d3ddb436c6e0bc018912fa6f7303c88', class: "logo-colored", src: this.secondLogoSrc, alt: this.secondLogoAlt }), h("img", { key: 'd5cd2af6bde9fa37c3d4920215c52aebff465454', class: "logo-white", src: this.secondLogoWhiteSrc, alt: this.secondLogoAlt }))), h("div", { key: 'bff0c84aa987906e9d89b017dd6b321c37cf45ae', class: "dda-mobile-search" }, h("button", { key: '8eafa1f2ced3c21e61a11a3ce1a261b68955d795', class: "tool-btn", type: "button" }, h("span", { key: 'd3f2ac16b3659dd3a146fb72537e4eccdbaf1e79', class: "visualy-hidden" }, "Search"), h("i", { key: '5499ee13b6ee68e7791df814d5597762078619dd', class: "fa-solid fa-magnifying-glass" }))), h("div", { key: '4ed740cc5a352552bcd85662da440076c10fb309', class: "dda-toolbar-menu" }, h("ul", { key: 'e9eb7a4a5b286d0c92108ef824088969ca236603' }, h("li", { key: 'dad29de6d1aa565f63937fab9fded0179d97d3a7' }, h("dda-tooltip", { key: '174979e5defde8e01d86b0760498cbbf8d047ede', title_text: "Search", description: "", position: "top" }, h("div", { key: 'ccf9555cc63fd43455a971d8a8178aadd6157d06', class: "dda-search dda-btn btn-color-onsurface-secondary btn-size-sm btn-shape-circle tool-btn" }, h("label", { key: 'f957eeba46abc0c3886ee963979effbd7c4bd16d', htmlFor: "ddaSearch", class: "visualy-hidden" }, "Search"), h("i", { key: 'eace4316a4931399b237a5d766d851f5140ed116', class: "material-icons  material-symbols-outlined" }, "search"), h("input", { key: 'a477d72831e145560eb4cb9b87208da51c667171', type: "text", id: 'ddaSearch', class: "", placeholder: "Search" })))), h("li", { key: 'ae797d1829f061214e9ea9d1ba64966fdadb3145' }, h("dda-tooltip", { key: '5e9af5032dcbc14ff0b868d1cd254f6c98f4983a', title_text: "Accessibility", position: "top" }, h("button", { key: '0cfd2181795a09915f43b3e90799257cfb0adf26', class: "tool-btn dda-btn btn-color-onsurface-secondary btn-size-sm btn-shape-circle accessibility-btn", type: "button", onClick: this.toggleAccessibilty }, h("i", { key: '120c87ad4bc032d7c5362a3a755abff9752b16f9', class: "material-icons  material-symbols-outlined" }, "accessible_forward"), h("span", { key: 'd1599c71f9b28b31b9171b160935871d30f27126', class: "visually-hidden" }, "Accessibility"))), h("div", { key: 'bdf66e2d8345498a5580278cb796c21ce195723b', class: "dda-accessibility-wrap" }, h("div", { key: '60da1c662ca68fba7f4fa8b9825c1b749d54615c', class: "dda-accessibility hide-accessibility", style: { display: this.isAccessibiltyOpen ? 'block' : 'none' } }, h("div", { key: '35946394323844948f2b40b23ed9f32b3070a9ce', class: "dda-row" }, h("div", { key: '857f15b928228413a0041916f558c35afe9b0d57', class: "dda-col-md-4 dda-accessibility-item" }, h("h2", { key: '58832e7d319e6be3b18a1c62db79a629864968c8', class: "dda-fs-body-lg dda-fw-700 mb-1" }, "Contrast"), h("form", { key: 'c938c54b8c4f486e2871a95e28a429d816594351' }, h("fieldset", { key: 'a4e72a81892c65225669f9656875730d5bdcb17f', class: "dda-theme-list" }, h("legend", { key: '209ffad97ad31154dcb26bb6839be4fb45ecb4a5' }, h("p", { key: 'cee01b20a6ee011093f5969d71d6deefee7e512a', class: "mb-3" }, "Select your preferred contrast setting ")), h("dda-radiobutton", { key: 'a4888cd0fee10aac9cf433926abae8f533d5b9d4', title_text: "Normal", checked: true, size: "sm", variants: "normal", supporting: "", group_name: "themeselection", input_id: "Normal", custom_class: "", component_mode: "", aria_label: "radio-button", onClick: this.normalContrasthandler }), h("dda-radiobutton", { key: 'a826fc494ce416127d99c44e19d62bd1cf395b00', title_text: "Colours Blind", checked: false, size: "sm", variants: "normal", supporting: "", group_name: "themeselection", input_id: "ColoursBlind", custom_class: "", component_mode: "", aria_label: "radio-button", onClick: this.blindContrasthandler }), h("dda-radiobutton", { key: '447e27f65f57281452cf398f378bd874c09d5b11', title_text: "Red Weakness", checked: false, size: "sm", variants: "normal", supporting: "", group_name: "themeselection", input_id: "RedWeakness", custom_class: "", component_mode: "", aria_label: "radio-button", onClick: this.redContrasthandler }), h("dda-radiobutton", { key: '4fb6e9200c940c92e670dcb43dca16c601d796ac', title_text: "Green Weakness", checked: false, size: "sm", variants: "normal", supporting: "", group_name: "themeselection", input_id: "GreenWeakness", custom_class: "", component_mode: "", aria_label: "radio-button", onClick: this.greenContrasthandler })))), h("div", { key: 'd230adca6e5719802b3f3e51f92c8ed9e43f61ea', class: "dda-col-md-4 dda-accessibility-item" }, h("h2", { key: 'fa4796dc41bd108098f14daceaa5f8d3c730f772', class: "dda-fs-body-lg dda-fw-700 mb-1" }, "Screen Reader"), h("p", { key: '51cf664e2106c82a027af0be7e7d7d4265c4325e', class: "mb-3" }, "Listen to the content of the page by clicking play or listen"), h("div", { key: '053e534f51175d0db68aeabc642104cf9c6f3bd2', class: "rs_skip rsbtn rs_preserve", id: "readspeaker_button1" }, h("a", { key: '50968873222a1c401f2691ca5ef0bac9a0844a0a', href: this.readSpeakerLink, rel: "nofollow", class: "rsbtn_play circle readspeaker", accessKey: "L", "aria-label": "Listen to this page using ReadSpeaker" }, h("i", { key: 'd010b734cedc30657d6f851e5cdfa2b8ab3ca4ad', class: "material-icons  material-symbols-outlined" }, "volume_up")))), h("div", { key: 'b51c314320a07b9a41e7bdf4e00caf60aa77ceeb', class: "dda-col-md-4 dda-accessibility-item" }, h("h2", { key: 'e37a2f07ac58be2d3c08523fb6f40b7ed6682d1e', class: "dda-fs-body-lg dda-fw-700 mb-1" }, "Text Size"), h("p", { key: '68ac675dbfd925d119a612883d0d61a6799bc2a7', class: "mb-3" }, "Use the buttons below to increase or decrease the text size"), h("div", { key: '8ecfd1752e8cc1be27fa32b90af7df37a19b44f3', class: "d-flex dda-gap-4" }, h("dda-button", { key: 'ad0d0274b94e94c240dbdecba6b6622d228f9f31', button_color: "default-secondary", icon_button_shape: "circle", custom_class: "", size: "lg", onClick: this.baseTexthandler }, "A"), h("dda-button", { key: '6db25ed419bbe904bb6c2dd2cc8159a77d7b6dec', button_color: "default-secondary", icon_button_shape: "circle", custom_class: "", size: "lg", onClick: this.lgTexthandler }, "A+"), h("dda-button", { key: '0486e9924cd26efbfe1ed0e7a841985a635fb1f7', button_color: "default-secondary", icon_button_shape: "circle", custom_class: "", size: "lg", onClick: this.smTexthandler }, "A-")))), h("button", { key: 'c5129182ed5f131b8a0614f8cc6e138e38bd4a88', class: "close-btn close_accessibility", "aria-label": "Close Sidebar", onClick: this.toggleAccessibilty }, h("i", { key: 'f72417058d92bb61482819498a48a9392506fd49', class: "fa-solid fa-close" }))))), h("li", { key: 'c9b362831ece1c6bab4f99a796157f51f19f32b6' }, h("dda-tooltip", { key: 'c82167d77e043daab2b7e27ce0548a9b34d551bd', title_text: "Language", position: "top" }, h("dda-button", { key: 'e67dce4dad8fdbeacfa0f1daf1f416549c37d76d', button_color: "onsurface-secondary", custom_class: "tool-btn", button_shape: "circle", size: "sm", onClick: this.languagehandler }, "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"))), h("li", { key: 'a1600165d0a5c66a360156616538952c66b04031' }, h("dda-tooltip", { key: '3b1f8880ef5471419b22732d9bc41719abe73280', title_text: "Login", position: "top" }, h("dda-link-button", { key: '529e8f733d0a28cfe1b79563454f0a7045c34cb6', button_color: "onsurface-secondary", start_icon: "sentiment_satisfied", custom_class: "tool-btn", href: this.loginLink, button_shape: "circle", size: "sm" }, "Login"))))))));
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