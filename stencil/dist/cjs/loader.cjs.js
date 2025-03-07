'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bccc9e2f.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["dda-header.cjs",[[0,"dda-header",{"firstLogoSrc":[1,"first-logo-src"],"firstLogoWhiteSrc":[1,"first-logo-white-src"],"firstLogoAlt":[1,"first-logo-alt"],"secondLogoSrc":[1,"second-logo-src"],"secondLogoWhiteSrc":[1,"second-logo-white-src"],"secondLogoAlt":[1,"second-logo-alt"],"loginLink":[1,"login-link"],"sideMenuItems":[1,"side-menu-items"],"quickLinks":[1,"quick-links"],"readSpeakerLink":[1,"read-speaker-link"],"isMenuOpen":[32],"isSubMenuOpen":[32],"isSideSubMenuOpen":[32],"isAccessibiltyOpen":[32]}]]],["dda-sticky-footer.cjs",[[1,"dda-sticky-footer",{"happinessIconHref":[1,"happiness-icon-href"],"happinessIconSrc":[1,"happiness-icon-src"],"happinessIconAlt":[1,"happiness-icon-alt"],"happinessIconTooltip":[1,"happiness-icon-tooltip"],"accessibilityIconHref":[1,"accessibility-icon-href"],"accessibilityIconSrc":[1,"accessibility-icon-src"],"accessibilityIconAlt":[1,"accessibility-icon-alt"],"accessibilityIconTooltip":[1,"accessibility-icon-tooltip"],"servicesIconHref":[1,"services-icon-href"],"servicesIconSrc":[1,"services-icon-src"],"servicesIconAlt":[1,"services-icon-alt"],"servicesIconTooltip":[1,"services-icon-tooltip"],"servicesIconText":[1,"services-icon-text"],"firstLogoHref":[1,"first-logo-href"],"firstLogoSrc":[1,"first-logo-src"],"firstLogoAlt":[1,"first-logo-alt"],"firstLogoTooltip":[1,"first-logo-tooltip"],"secondLogoHref":[1,"second-logo-href"],"secondLogoSrc":[1,"second-logo-src"],"secondLogoAlt":[1,"second-logo-alt"],"secondLogoTooltip":[1,"second-logo-tooltip"],"thirdLogoHref":[1,"third-logo-href"],"thirdLogoSrc":[1,"third-logo-src"],"thirdLogoAlt":[1,"third-logo-alt"],"thirdLogoTooltip":[1,"third-logo-tooltip"],"locationButtonHref":[1,"location-button-href"],"locationButtonText":[1,"location-button-text"],"locationButtonIcon":[1,"location-button-icon"],"newsButtonHref":[1,"news-button-href"],"newsButtonText":[1,"news-button-text"],"newsButtonIcon":[1,"news-button-icon"],"aiIconHref":[1,"ai-icon-href"],"aiIconSrc":[1,"ai-icon-src"],"aiIconAlt":[1,"ai-icon-alt"],"aiIconTooltip":[1,"ai-icon-tooltip"],"chatIconHref":[1,"chat-icon-href"],"chatIconSrc":[1,"chat-icon-src"],"chatIconAlt":[1,"chat-icon-alt"],"chatIconTooltip":[1,"chat-icon-tooltip"],"isHidden":[32]}]]],["dda-footer.cjs",[[1,"dda-footer",{"footerTitle":[1,"footer-title"],"description":[1],"signUpButtonText":[1,"sign-up-button-text"],"loginButtonText":[1,"login-button-text"],"logoSrc":[1,"logo-src"],"logoAlt":[1,"logo-alt"],"copyrightText":[1,"copyright-text"],"footerSections":[1,"footer-sections"],"socialIcons":[1,"social-icons"]}]]],["dda-accordion.cjs",[[4,"dda-accordion",{"design":[1],"header_text":[1],"body_description":[1],"custom_class":[1],"component_mode":[1],"accordion_icon":[1],"isOpen":[32]}]]],["dda-alert.cjs",[[0,"dda-alert",{"type":[1],"variation":[1],"title_text":[1],"description":[1],"button_text":[1],"custom_class":[1],"component_mode":[1],"component_id":[1],"first_link":[1],"second_link":[1],"first_button":[1],"second_button":[1],"clickHandler":[16]}]]],["dda-attach-file.cjs",[[0,"dda-attach-file",{"label":[1],"helper_text":[1],"error_message":[1],"size":[1],"validation_type":[1],"input_type":[1],"custom_class":[1],"component_mode":[1],"aria_label":[1],"button_aria_label":[1],"input_id":[1],"button_id":[1],"file":[32]}]]],["dda-avatar.cjs",[[0,"dda-avatar",{"type":[1],"size":[1],"design":[1],"rounded":[1],"src":[1],"icon":[1],"text":[1],"notification_number":[2],"custom_class":[1],"selected":[1],"options":[1],"component_mode":[1],"aria_label":[1],"button_id":[1],"isOpen":[32]}]]],["dda-banner.cjs",[[1,"dda-banner",{"slides":[1],"slider_width":[1],"slider_height":[1],"parsedSlides":[32]}]]],["dda-breadcrumb.cjs",[[0,"dda-breadcrumb",{"design":[1],"separator":[1],"custom_class":[1],"component_mode":[1]}]]],["dda-checkbox.cjs",[[0,"dda-checkbox",{"title_text":[1],"supporting":[1],"group_name":[1],"input_id":[1],"checked":[4],"checkbox_status":[1],"size":[1],"style_type":[1],"custom_class":[1],"component_mode":[1],"aria_label":[1]}]]],["dda-chip.cjs",[[4,"dda-chip",{"bg_color":[1],"rounded":[1],"icon":[1],"show_close_icon":[4],"size":[1],"custom_class":[1],"component_mode":[1],"clickHandler":[16]}]]],["dda-credit-card.cjs",[[0,"dda-credit-card",{"balance":[1],"name":[1],"card_number":[1],"card_type":[1],"design":[1],"custom_class":[1],"component_mode":[1]}]]],["dda-creditcard-field.cjs",[[0,"dda-creditcard-field",{"placeholder":[1],"label":[1],"value":[1],"card_icon":[1],"error_message":[1],"validation_type":[1],"size":[1],"input_type":[1],"helper_text":[1],"disabled":[4],"custom_class":[1],"restrict_input":[4],"component_mode":[1],"input_id":[1],"aria_label":[1],"formattedValue":[32]}]]],["dda-dropdown.cjs",[[0,"dda-dropdown",{"label":[1],"options":[1],"selected":[1],"disabled":[4],"error":[1],"helper_text":[1],"type":[1],"size":[1],"icon_mode":[4],"custom_class":[1],"component_mode":[1],"button_id":[1],"aria_label":[1],"isopen":[32]}]]],["dda-home-banner.cjs",[[4,"dda-home-banner",{"currentSlide":[32]}]]],["dda-horizontal-stepper.cjs",[[0,"dda-horizontal-stepper",{"steps":[1],"current_step":[2],"custom_class":[1],"component_mode":[1],"parsedSteps":[32]}]]],["dda-input.cjs",[[0,"dda-input",{"label":[1],"placeholder":[1],"value":[1],"type":[1],"helper_text":[1],"error_message":[1],"validation_type":[1],"size":[1],"input_status":[1],"custom_class":[1],"component_mode":[1],"input_id":[1],"aria_label":[1]}]]],["dda-number-field.cjs",[[0,"dda-number-field",{"placeholder":[1],"label":[1],"value":[1],"helper_text":[1],"error_message":[1],"validation_type":[1],"size":[1],"input_status":[1],"currencies":[1],"selected_currency":[1],"custom_class":[1],"component_mode":[1],"input_id":[1],"aria_label":[1],"is_focused":[32],"isCurrencyDropdownOpen":[32]}]]],["dda-pagination.cjs",[[0,"dda-pagination",{"total_pages":[2],"current_page":[2],"type":[1],"custom_class":[1],"component_mode":[1]},null,{"total_pages":["validateTotalPages"],"current_page":["validateCurrentPage"]}]]],["dda-phonefield.cjs",[[0,"dda-phonefield",{"label":[1],"placeholder":[1],"helper_text":[1],"validation_type":[1],"error_message":[1],"disabled":[4],"size":[1],"custom_class":[1],"component_mode":[1],"input_id":[1],"aria_label":[1],"button_id":[1],"button_aria_label":[1],"country_code":[32],"country_flag":[32],"phone_number":[32],"is_focused":[32],"dropdown_open":[32],"countries":[32]}]]],["dda-progressbar.cjs",[[0,"dda-progressbar",{"progress":[2],"tooltip":[4],"tooltip_position":[1],"show_percentage_text":[4],"custom_class":[1],"component_mode":[1]}]]],["dda-range-slider.cjs",[[0,"dda-range-slider",{"min":[2],"max":[2],"step":[2],"initial_min":[2],"initial_max":[2],"size":[1],"tooltip_position":[1],"custom_class":[1],"component_mode":[1],"left_input_id":[1],"right_input_id":[1],"left_aria_label":[1],"right_aria_label":[1],"min_value":[32],"max_value":[32]}]]],["dda-search-input.cjs",[[0,"dda-search-input",{"placeholder":[1],"label":[1],"size":[1],"error_message":[1],"show_button":[4],"helper_text":[1],"input_status":[1],"has_error":[4],"custom_class":[1],"component_mode":[1],"button_id":[1],"aria_label":[1],"button_aria_label":[1]}]]],["dda-segmented-tabs.cjs",[[0,"dda-segmented-tabs",{"items":[1],"radius_type":[1],"custom_class":[1],"component_mode":[1]}]]],["dda-select.cjs",[[0,"dda-select",{"label":[1],"options":[1],"selected":[1],"disabled":[4],"error":[1],"error_message":[1],"helper_text":[1],"size":[1],"custom_class":[1],"component_mode":[1],"aria_label":[1],"button_id":[1],"is_open":[32]}]]],["dda-tabs.cjs",[[0,"dda-tabs",{"type":[1],"hover_style":[1],"border_bottom":[4],"custom_class":[1],"component_mode":[1],"button_id":[1],"aria_label":[1],"tab_texts":[1],"tab_icons":[1],"active_tab":[32]}]]],["dda-textarea.cjs",[[0,"dda-textarea",{"placeholder":[1],"label":[1],"value":[1],"error_message":[1],"validation_type":[1],"input_status":[1],"helper_text":[1],"custom_class":[1],"enable_rich_editor":[4],"max_characters":[2],"component_mode":[1],"input_id":[1],"aria_label":[1],"characterCount":[32]}]]],["dda-toggle.cjs",[[0,"dda-toggle",{"checked":[4],"size":[1],"custom_class":[1],"group_name":[1],"input_id":[1],"component_mode":[1],"aria_label":[1]}]]],["dda-ui-card.cjs",[[4,"dda-ui-card",{"type":[1],"icon":[1],"image":[1],"maintitle":[1],"subtitle":[1],"link":[1],"linktext":[1]}]]],["dda-vertical-stepper.cjs",[[0,"dda-vertical-stepper",{"steps":[1],"current_Step":[2,"current_-step"],"custom_class":[1],"component_mode":[1],"parsedSteps":[32]}]]],["dda-radiobutton.cjs",[[0,"dda-radiobutton",{"title_text":[1],"supporting":[1],"group_name":[1],"input_id":[1],"checked":[4],"radio_status":[1],"size":[1],"variants":[1],"custom_class":[1],"component_mode":[1],"aria_label":[1]}]]],["dda-button.cjs",[[4,"dda-button",{"type":[1],"disabled":[4],"start_icon":[1],"end_icon":[1],"aria_label":[1],"button_color":[1],"size":[1],"button_shape":[1],"icon_button_shape":[1],"gap":[2],"custom_class":[1],"component_mode":[1],"button_id":[1],"clickHandler":[16]}]]],["dda-link-button_2.cjs",[[4,"dda-link-button",{"type":[1],"disabled":[4],"start_icon":[1],"end_icon":[1],"aria_label":[1],"button_color":[1],"size":[1],"button_shape":[1],"icon_button_shape":[1],"gap":[2],"custom_class":[1],"href":[1],"component_mode":[1],"button_id":[1]}],[4,"dda-tooltip",{"title_text":[1],"description":[1],"position":[1],"custom_class":[1],"component_mode":[1]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map