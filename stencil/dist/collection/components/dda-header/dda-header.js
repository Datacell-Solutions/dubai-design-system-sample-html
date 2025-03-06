import { h } from "@stencil/core";
export class DdaHeader {
    constructor() {
        this.isMenuOpen = false;
        this.isSubMenuOpen = false;
        this.isSideSubMenuOpen = false;
        this.isAccessibiltyOpen = false;
        this.lastScrollTop = 0;
        this.handleScroll = () => {
            const scrollTop = window.scrollY;
            const menuContainer = document.querySelector('.dda-menu-container');
            if (scrollTop > this.lastScrollTop && scrollTop > 50) {
                if (menuContainer)
                    menuContainer.style.display = 'none';
            }
            else {
                if (menuContainer)
                    menuContainer.style.display = 'flex';
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
        return (h("header", { key: '971fbafa9009095a522f999f1173ea50cd175c80', class: "dda-header" }, h("div", { key: '7d97158385c2f934bd6ff6d3bb620ec99c24ae35', class: "dda-head-logo" }, h("a", { key: '4447070ff3d9753bce55a98dc5b533579b4f0512', href: "#", class: "govt-logo" }, h("img", { key: '47f0bf037e6390ee8b6208ac8d746ba94d5c3e2b', class: "logo-colored", src: this.firstLogoSrc, alt: this.firstLogoAlt }), h("img", { key: '011e30837ebcdf5675b7c73553619f17cfc32aa2', class: "logo-white", src: this.firstLogoWhiteSrc, alt: this.firstLogoAlt })), h("a", { key: '6ab866c319013a935e0da27469b96f5e53f4983e', href: "#", class: "entt-logo" }, h("img", { key: '6418a249d86fa698192767c90ed022b795c455ee', class: "logo-colored", src: this.secondLogoSrc, alt: this.secondLogoAlt }), h("img", { key: '09911760fbd3c94530a0ce17803fe90c93d645e0', class: "logo-white", src: this.secondLogoWhiteSrc, alt: this.secondLogoAlt }))), h("div", { key: 'a927e585d312e86672085814a162e84ce01cd638', class: "dda-menu-container" }, h("div", { key: 'a1966c1b85255e48c61889d22a580c28ee88b615', class: "dda-main-navigation" }, h("div", { key: '2b493ab712d818c0108b38a66b3bcb5df8f174a7', class: `dda-menu-overley ${this.isMenuOpen ? 'show-overley' : ''}`, onClick: this.toggleMenu }), h("div", { key: '1f166420c5209f21bde9ce4c5584214524da5bf8', class: "hamburger-menu", onClick: this.toggleMenu }, h("dda-tooltip", { key: '7d138a2598537334da2baa7edaec71137ac988fc', title_text: "Menu", position: "top", class: "d-block" }, h("button", { key: '381d66accf322e57113fdd1fb19a17826b9db8a6', type: "button", class: "hamburger-menu-btn" }, h("span", { key: '4120752b1544065a0ce6008e1b317460ca34c133', class: "hamburger-line" }), h("span", { key: 'af1a7e4c5807bbf8aab61ec3b6aba3561959229a', class: "hamburger-menu-text" }, "hamburger menu text")))), h("div", { key: 'b3db71cd8e6aa20a450b6134d1719198ebfc78fe', class: "dda-sidemenu", style: { display: this.isMenuOpen ? 'block' : '', insetInlineStart: this.isMenuOpen ? '0px' : '' } }, h("div", { key: 'e7cfd5f9882520ed9c2185a39ec5a5db06f0b4ff', class: "dda-sidemenu-content" }, h("p", { key: '520e49a6eda6fae7e2d3c463734d779d3a1dd8de', class: "dda-side-nav-title" }, "Quick Links"), h("ul", { key: 'b303268e41b5a5df1e23c64684cadae44f51b3fd', class: "main_side_menu" }, sideMenuItems.map(item => (h("li", null, h("a", { href: item.subMenu && item.subMenu.length > 0 ? 'javascript:void(0)' : item.href, class: "dda-flex dda-justify-space dda-items-center", onClick: item.subMenu && item.subMenu.length && this.toggleSideSubMenu }, h("span", null, item.label), item.subMenu && item.subMenu.length > 0 && h("i", { class: "material-icons  material-symbols-outlined" }, "chevron_right")), item.subMenu && item.subMenu.length > 0 && (h("div", { class: `main_sub_menu  ${this.isSideSubMenuOpen ? 'showSubMenu' : ''}` }, h("ol", null, item.subMenu.map(sub => (h("li", null, h("a", { href: 'javascript:void(0)', onClick: this.toggleSideSubMenu }, h("span", null, sub.label), item.subMenu && item.subMenu.length > 0 && h("i", { class: "material-icons  material-symbols-outlined" }, "chevron_right")), h("div", { class: `main_sub_menu ${this.isSideSubMenuOpen ? 'showSubMenu' : ''}` }, h("p", { class: "dda-side-nav__title" }, "Initiatives"), h("ol", null, h("li", null, h("a", { href: "#" }, sub.label))))))))))))))), h("div", { key: 'd29528313ce3b677c32e577b4951870ea3a4a0a5', class: "dda-sidemenu-bottom" }, h("div", { key: 'b3a5e27aa63e04c746e9c113d2418cc58c34abe4', class: "dda-sidemenu-gov-logo" }, h("a", { key: '43fcda9d85dd2d73a666550061a5efbb2cfae85c', href: "#", class: "govt-logo mb-2" }, h("img", { key: 'ff555692a3a2f354344c021663d4e405af0198b2', class: "", src: this.firstLogoSrc, alt: this.firstLogoAlt }))), h("div", { key: 'bbbbeb21063fa694ee946902a47a3d4a654f6f47', class: "dda-toolbar-menu-sidemenu" }, h("ul", { key: '80f3e35db911c7e45da13cec8ac54ccaf3938711' }, h("li", { key: 'be6067aec20e20b07c79b970cf71a45742d432cc' }, h("button", { key: '09aaa5a425f09c5ae1481589d48ef56a2ee4b23e', class: "tool-btn accessibility-btn", type: "button", onClick: this.toggleAccessibilty }, h("i", { key: 'dc6484981c01e37022a5b110ff5afcecc984f095', class: "material-icons  material-symbols-outlined" }, "accessible_forward"), h("span", { key: 'e8bc56e4c6c720128b2690c98bb8c926a215e69b', class: "visually-hidden" }, "Accessibility"))), h("li", { key: 'bba0d62f3d889f31071ae83c4b86a1ac76f6b1b9' }, h("button", { key: '18bbb2b8fb080807f277670efccfbc620f94d4e5', class: "tool-btn", type: "button" }, "\u0627\u0644\u0639\u0631\u0628\u064A\u0629")), h("li", { key: 'bd89d5db3824571abf6ee089517bfb3889e65605' }, h("dda-link-button", { key: '1da74677e1e1a01006cb0bbc324fbefde42deb03', button_color: "onsurface-secondary", start_icon: "sentiment_satisfied", custom_class: "tool-btn", href: this.loginLink, button_shape: "circle", size: "sm" }, "Login"))))), h("button", { key: '1787a253dabd7aff8bd4665f399ff366ad7d0226', class: "close-btn side-nav-close-btn", "aria-label": "Close Sidebar", onClick: this.toggleMenu }, h("i", { key: '96af903730dc5bb643964b6d13998d41c8960665', class: "material-icons  material-symbols-outlined" }, "close")), h("div", { key: 'a44064983678552137363e9d9a420f4b7d848268', class: "dda-accessibility hide-accessibility mobile-accessibility", style: { display: this.isAccessibiltyOpen ? 'block' : 'none' } }, h("div", { key: '2b51349f72bc5918da61a323d307427fcfb493b6', class: "dda-row" }, h("div", { key: '71a872b38147fa6aa2e1e2a6939926465d148a21', class: "dda-col-md-4 dda-accessibility-item" }, h("h2", { key: 'a7415acff8d3d9a2a364660cc7ce7e9c06ea13d6', class: "dda-fs-body-lg dda-fw-700 mb-1" }, "Contrast"), h("form", { key: '6dd6a57521a17f8fd8524fda756045a7806bf4c5' }, h("fieldset", { key: '187399d9565eaaf73693ef8f927968778382e8c9', class: "dda-theme-list" }, h("legend", { key: '6db96ab235b212d48ddd719ce7c75ad917b3f0f4' }, h("p", { key: '384f005ae51790c0a4a3973655183fa98b3c1eb0', class: "mb-3" }, "Select your preferred contrast setting ")), h("dda-radiobutton", { key: '0d006745b6cee42a0546d00bf9649f06f6b0f772', title_text: "Normal", checked: true, size: "sm", variants: "normal", supporting: "", group_name: "themeselectionmobile", input_id: "NormalMobile", custom_class: "", component_mode: "", aria_label: "radio-button", onClick: this.normalContrasthandler }), h("dda-radiobutton", { key: '675c8c8c039d71c37ee36fa5baa1ea7a1477c946', title_text: "Colours Blind", checked: false, size: "sm", variants: "normal", supporting: "", group_name: "themeselectionmobile", input_id: "ColoursBlindMobile", custom_class: "", component_mode: "", aria_label: "radio-button", onClick: this.blindContrasthandler }), h("dda-radiobutton", { key: 'dfcc5ea3195aa78fccad8f2d0c19fc60e7ef8c61', title_text: "Red Weakness", checked: false, size: "sm", variants: "normal", supporting: "", group_name: "themeselectionmobile", input_id: "RedWeaknessMobile", custom_class: "", component_mode: "", aria_label: "radio-button", onClick: this.redContrasthandler }), h("dda-radiobutton", { key: '4e6bae14e5c576fe7792e4c71af127e84bc102b1', title_text: "Green Weakness", checked: false, size: "sm", variants: "normal", supporting: "", group_name: "themeselectionmobile", input_id: "GreenWeaknessMobile", custom_class: "", component_mode: "", aria_label: "radio-button", onClick: this.greenContrasthandler })))), h("div", { key: 'eb784d101d3c6c900fec7aed40a7994197fe29ef', class: "dda-col-md-4 dda-accessibility-item" }, h("h2", { key: 'c7d7acf9fcf48c410820a2815d32ed54b5532e05', class: "dda-fs-body-lg dda-fw-700 mb-1" }, "Screen Reader"), h("p", { key: '5e7f2f8a9e45c936acabbe40fb83080d08a52698', class: "mb-3" }, "Listen to the content of the page by clicking play or listen"), h("div", { key: '4db1e9ab3e9f9e3730db1e41d24c0bc07bd14cda', class: "rs_skip rsbtn rs_preserve", id: "readspeaker_button1" }, h("a", { key: 'f39efe5cf640f384007b0d879f1c4286070f0130', href: this.readSpeakerLink, rel: "nofollow", class: "rsbtn_play circle readspeaker", accessKey: "L", "aria-label": "Listen to this page using ReadSpeaker" }, h("i", { key: '2cd744c88302f96fc268eada054091b64e0f65ff', class: "material-icons  material-symbols-outlined" }, "volume_up")))), h("div", { key: '483940791482995f5221ef5a529e23293ec52d39', class: "dda-col-md-4 dda-accessibility-item" }, h("h2", { key: '057e1b836579499d5bddd4d1b9a4b99d1a6e2152', class: "dda-fs-body-lg dda-fw-700 mb-1" }, "Text Size"), h("p", { key: '19bc7c633f241243b337365fc2c3a0ff74912018', class: "mb-3" }, "Use the buttons below to increase or decrease the text size"), h("div", { key: '7e2643797da5da4e77b6f453f8fe97010fd7baf8', class: "d-flex dda-gap-4" }, h("dda-button", { key: '455c54bf001604de1052f777ab973437e008efcf', button_color: "default-secondary", icon_button_shape: "circle", custom_class: "", size: "lg", onClick: this.baseTexthandler }, "A"), h("dda-button", { key: '67096ec29c6a8838d02ba1333cfba85c5a874e67', button_color: "default-secondary", icon_button_shape: "circle", custom_class: "", size: "lg", onClick: this.lgTexthandler }, "A+"), h("dda-button", { key: '402404595fd81658c40acf66c00e439cf1dc24e1', button_color: "default-secondary", icon_button_shape: "circle", custom_class: "", size: "lg", onClick: this.smTexthandler }, "A-")))), h("button", { key: '05eb5f26494f6fd7d43b81d86fadcffff0eddb6b', class: "close-btn close_accessibility", "aria-label": "Close Sidebar", onClick: this.toggleAccessibilty }, h("i", { key: '7742fa97b93079a15ab620e9de96bbf06c8d8cec', class: "fa-solid fa-close" })))), h("div", { key: '6f3c8343dcf86c22899d73edd2e69bf3e99b08c2' }, h("ul", { key: '5a8680a237b38e1bc3b68572e647974e41001594', class: "dda-mega-menu" }, quickLinks.map(link => (h("li", null, h("a", { href: link.subMenu && link.subMenu.length > 0 ? 'javascript:void(0)' : link.href, onClick: link.subMenu && link.subMenu.length && this.toggleSubMenu }, link.label), link.subMenu && link.subMenu.length > 0 && (h("div", { class: "megamenu-content", style: { display: this.isSubMenuOpen ? 'block' : 'none' } }, h("div", { class: "megamenu-item dda-container" }, h("div", { class: "dda-row" }, h("div", { class: "dda-col-md-3" }, h("h3", { class: "mega-menu-title" }, "QUICK LINKS"), h("ul", null, link.subMenu.map(subItem => (h("li", null, h("a", { class: "megamenu-link", href: subItem.href }, h("span", { class: "dda-btn btn-color-onsurface-secondary btn-size-sm icon-btn-default" }, h("i", { class: "material-icons  material-symbols-outlined" }, subItem.icon)), h("span", { class: "text-wrap" }, h("span", { class: "title-text dda-fs-body-lg dda-fw-700" }, subItem.title), h("span", { class: "dda-fs-tagline-lg dda-fw-400" }, subItem.description))))))))), h("button", { class: "close-btn close_mega-menu", "aria-label": "Close Sidebar", onClick: this.toggleSubMenu }, h("i", { class: "material-icons  material-symbols-outlined" }, "close"))))))))))), h("div", { key: '188e924a5cc9c204c7d6c3025ac571e60769da23', class: "dda-mobile-entt-logo" }, h("a", { key: '92a2df84d1818295355db8c89f438b0311d1b00a', href: "#", class: "entt-logo" }, h("img", { key: 'dc27c3962a1f0d2cc5c6452c8ec322e8b69ecaa5', class: "logo-colored", src: this.secondLogoSrc, alt: this.secondLogoSrc }), h("img", { key: 'cdebcda54b54ab5c60a09d37f74d446768792ddf', class: "logo-white", src: this.secondLogoWhiteSrc, alt: this.secondLogoAlt }))), h("div", { key: '76f30d00b7f264605030a358d65a51e04ae75491', class: "dda-mobile-search" }, h("button", { key: '546943223ba3c0cf9bea536decc9976d56fefee4', class: "tool-btn", type: "button" }, h("span", { key: 'd51874edaddd558a8d4a489565aa18aaaadfe4b9', class: "visualy-hidden" }, "Search"), h("i", { key: 'e8e6fb387153a900386d3b6c2d5e4d51c461f301', class: "fa-solid fa-magnifying-glass" }))), h("div", { key: '5c43e71a01294902ae8c90a766b208c4ca69f60a', class: "dda-toolbar-menu" }, h("ul", { key: 'f3475f3dc20216f189cebebbc0226ac68c958a6d' }, h("li", { key: '5f25d258b1c9f3c6a67659777d2f9b59afc6739d' }, h("dda-tooltip", { key: 'bae529c9bce86cd767d993807e2e012628c0cfd1', title_text: "Search", description: "", position: "top" }, h("div", { key: 'ef9c362869ea1d1b4ab0cef9b10fcd63e59b6e01', class: "dda-search dda-btn btn-color-onsurface-secondary btn-size-sm btn-shape-circle tool-btn" }, h("label", { key: '9c83c70936d4ae2e5a24218ff1c0ac6f7e65f033', htmlFor: "ddaSearch", class: "visualy-hidden" }, "Search"), h("i", { key: '9d9f14e2b7dfa41fdb9228b773a1fd6cc714cf6d', class: "material-icons  material-symbols-outlined" }, "search"), h("input", { key: 'a257938ec045c4b6a0548955d288a4c5e1ab9eb5', type: "text", id: 'ddaSearch', class: "", placeholder: "Search" })))), h("li", { key: 'efc6b745cd9405744a1ff77f8606371a8fce5b9f' }, h("dda-tooltip", { key: '5fe670ccba6faf1f647d55add4b8dc6a07c27743', title_text: "Accessibility", position: "top" }, h("button", { key: 'b0ecb7dd3c454fdad7ce244f27c33d98523fd3bd', class: "tool-btn dda-btn btn-color-onsurface-secondary btn-size-sm btn-shape-circle accessibility-btn", type: "button", onClick: this.toggleAccessibilty }, h("i", { key: '6e6a1878dc39c4fc95a75b3327b59096df1ade90', class: "material-icons  material-symbols-outlined" }, "accessible_forward"), h("span", { key: 'f6223d02a05214f708451f1b012d54ace96c83e3', class: "visually-hidden" }, "Accessibility"))), h("div", { key: '2bbd2c36918ebadf272dded6b28c187009adfa97', class: "dda-accessibility-wrap" }, h("div", { key: '43014b83083f14b90fc3d2a6921f4159e67c02c1', class: "dda-accessibility hide-accessibility", style: { display: this.isAccessibiltyOpen ? 'block' : 'none' } }, h("div", { key: 'c0b9e35f3be0f210701e6e36e267457937401c27', class: "dda-row" }, h("div", { key: '2c8ba36d3100465ab554be4f0b2e85c501355000', class: "dda-col-md-4 dda-accessibility-item" }, h("h2", { key: '4e3cf087b459e7c6d800b25b5db0c63753c98edc', class: "dda-fs-body-lg dda-fw-700 mb-1" }, "Contrast"), h("form", { key: '3ac7c64f364230a258e12ec2b5da352d4641263b' }, h("fieldset", { key: 'ce902ff2ebb83886a142481d6dbf966a51191b17', class: "dda-theme-list" }, h("legend", { key: '0c075bc4ee8b83ac28058e84de2a78bb1ce97929' }, h("p", { key: '234f1b7a8b5ac0e1beeb16d2f6c437900fb99ef6', class: "mb-3" }, "Select your preferred contrast setting ")), h("dda-radiobutton", { key: '0b13e1734926e1d491c162d160db7366c918c949', title_text: "Normal", checked: true, size: "sm", variants: "normal", supporting: "", group_name: "themeselection", input_id: "Normal", custom_class: "", component_mode: "", aria_label: "radio-button", onClick: this.normalContrasthandler }), h("dda-radiobutton", { key: 'f67575aeae85477107d7036a7bcc2ff50a543049', title_text: "Colours Blind", checked: false, size: "sm", variants: "normal", supporting: "", group_name: "themeselection", input_id: "ColoursBlind", custom_class: "", component_mode: "", aria_label: "radio-button", onClick: this.blindContrasthandler }), h("dda-radiobutton", { key: 'cf62d2c964ec38e69a6296cb18293e112482f814', title_text: "Red Weakness", checked: false, size: "sm", variants: "normal", supporting: "", group_name: "themeselection", input_id: "RedWeakness", custom_class: "", component_mode: "", aria_label: "radio-button", onClick: this.redContrasthandler }), h("dda-radiobutton", { key: 'beee8fc8dbbc5fdb7bd0d220a17f911f2a48d0cb', title_text: "Green Weakness", checked: false, size: "sm", variants: "normal", supporting: "", group_name: "themeselection", input_id: "GreenWeakness", custom_class: "", component_mode: "", aria_label: "radio-button", onClick: this.greenContrasthandler })))), h("div", { key: '955d76582b71f9166683fec66d6f1e34a097169e', class: "dda-col-md-4 dda-accessibility-item" }, h("h2", { key: '8ac2a90cf334d3d7087b31ca2954d39b251750af', class: "dda-fs-body-lg dda-fw-700 mb-1" }, "Screen Reader"), h("p", { key: '4124c9b1013b378ecc73c3bfbed24fe24f100331', class: "mb-3" }, "Listen to the content of the page by clicking play or listen"), h("div", { key: 'af3430746255330b148e420ab53fad7b99df794c', class: "rs_skip rsbtn rs_preserve", id: "readspeaker_button1" }, h("a", { key: '67c77e1dd720732b579a4387735c5a6fb63c5ed6', href: this.readSpeakerLink, rel: "nofollow", class: "rsbtn_play circle readspeaker", accessKey: "L", "aria-label": "Listen to this page using ReadSpeaker" }, h("i", { key: '426e27ce6a9a18691b2fa3129f2574334d0b0655', class: "material-icons  material-symbols-outlined" }, "volume_up")))), h("div", { key: 'e8e283e0edb275f891c1b781ed110b52626af30f', class: "dda-col-md-4 dda-accessibility-item" }, h("h2", { key: 'eba92c522906528fb98156c32a3c6eda533c3ddf', class: "dda-fs-body-lg dda-fw-700 mb-1" }, "Text Size"), h("p", { key: '7f53dda1b6d6b56a576c7a44d6fe058f80c85dc3', class: "mb-3" }, "Use the buttons below to increase or decrease the text size"), h("div", { key: '67ad886cf6a0ec362350c536fc8897a0660d45f4', class: "d-flex dda-gap-4" }, h("dda-button", { key: 'c65225e3d82407f9102eeb845f8692d691180dee', button_color: "default-secondary", icon_button_shape: "circle", custom_class: "", size: "lg", onClick: this.baseTexthandler }, "A"), h("dda-button", { key: 'db66f7fd833b93dc6fa9061d366ec3acddda6102', button_color: "default-secondary", icon_button_shape: "circle", custom_class: "", size: "lg", onClick: this.lgTexthandler }, "A+"), h("dda-button", { key: '7b8a1de7600b6232d8fee7b7ca44bfd8442e6bfa', button_color: "default-secondary", icon_button_shape: "circle", custom_class: "", size: "lg", onClick: this.smTexthandler }, "A-")))), h("button", { key: '42b6421b5a02d66947c924634f55c8c8dae09cbc', class: "close-btn close_accessibility", "aria-label": "Close Sidebar", onClick: this.toggleAccessibilty }, h("i", { key: 'ea1203d2d8fe8a3902dba2de3df51adc7d069ffd', class: "fa-solid fa-close" }))))), h("li", { key: '83304f82c0ce8edb750fab134545fc39cc26770f' }, h("dda-tooltip", { key: '6f8ba0a73bae70bf9e2f45e8f87d6343fb0eac77', title_text: "Language", position: "top" }, h("dda-button", { key: '4f8d9e3f216277a04354a1643185e8cecdd10032', button_color: "onsurface-secondary", custom_class: "tool-btn", button_shape: "circle", size: "sm", onClick: this.languagehandler }, "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"))), h("li", { key: 'ff9621cee83bea0a881132555a5f803c2da5481d' }, h("dda-tooltip", { key: 'b0b9aac34e39eb5b34cf58b38207d9647e574fa6', title_text: "Login", position: "top" }, h("dda-link-button", { key: 'b93eaa53e90d4d5f6f31a03072a14036c9e99f81', button_color: "onsurface-secondary", start_icon: "sentiment_satisfied", custom_class: "tool-btn", href: this.loginLink, button_shape: "circle", size: "sm" }, "Login"))))))));
    }
    static get is() { return "dda-header"; }
    static get originalStyleUrls() {
        return {
            "$": ["dda-header.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dda-header.css"]
        };
    }
    static get properties() {
        return {
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
            "firstLogoWhiteSrc": {
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
                "attribute": "first-logo-white-src",
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
            "secondLogoWhiteSrc": {
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
                "attribute": "second-logo-white-src",
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
            "loginLink": {
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
                "attribute": "login-link",
                "reflect": false
            },
            "sideMenuItems": {
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
                "attribute": "side-menu-items",
                "reflect": false
            },
            "quickLinks": {
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
                "attribute": "quick-links",
                "reflect": false
            },
            "readSpeakerLink": {
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
                "attribute": "read-speaker-link",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isMenuOpen": {},
            "isSubMenuOpen": {},
            "isSideSubMenuOpen": {},
            "isAccessibiltyOpen": {}
        };
    }
    static get events() {
        return [{
                "method": "languageSwitch",
                "name": "languageSwitch",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "smTextSize",
                "name": "smTextSize",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "baseTextSize",
                "name": "baseTextSize",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "lgTextSize",
                "name": "lgTextSize",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "normalContrast",
                "name": "normalContrast",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "blindContrast",
                "name": "blindContrast",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "redContrast",
                "name": "redContrast",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "greenContrast",
                "name": "greenContrast",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=dda-header.js.map
