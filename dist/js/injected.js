/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   base_url: () => (/* binding */ base_url),
/* harmony export */   check_user_id_url: () => (/* binding */ check_user_id_url),
/* harmony export */   data_collector_secret_id: () => (/* binding */ data_collector_secret_id),
/* harmony export */   filter_url: () => (/* binding */ filter_url),
/* harmony export */   folder_name: () => (/* binding */ folder_name),
/* harmony export */   interaction_status_url: () => (/* binding */ interaction_status_url),
/* harmony export */   popup_click_probability: () => (/* binding */ popup_click_probability),
/* harmony export */   popup_navigation_probability: () => (/* binding */ popup_navigation_probability),
/* harmony export */   popup_probability: () => (/* binding */ popup_probability),
/* harmony export */   popup_scroll_probability: () => (/* binding */ popup_scroll_probability),
/* harmony export */   popup_tabActivate_probability: () => (/* binding */ popup_tabActivate_probability),
/* harmony export */   purchase_status_url: () => (/* binding */ purchase_status_url),
/* harmony export */   rationale_status_url: () => (/* binding */ rationale_status_url),
/* harmony export */   scroll_threshold: () => (/* binding */ scroll_threshold),
/* harmony export */   upload_url: () => (/* binding */ upload_url),
/* harmony export */   url_includes: () => (/* binding */ url_includes),
/* harmony export */   zip: () => (/* binding */ zip)
/* harmony export */ });
const popup_probability = 0.15;
const popup_scroll_probability = 0.05;
const popup_click_probability = 0.2;
const popup_navigation_probability = 0.15;
const popup_tabActivate_probability = 0.15;
const folder_name = `user_interaction_data`; // the folder name to save the data
const zip = true; // whether to zip the data when downloading
const upload_url = 'http://userdatacollect.hailab.io/api/upload';
const base_url = 'http://userdatacollect.hailab.io/api';
const data_collector_secret_id = 'hailab';
const url_includes = ['www.amazon.com'];
const interaction_status_url = `${base_url}/interactions_record_status`;
const rationale_status_url = `${base_url}/rationale_status`;
const purchase_status_url = `${base_url}/order_status`;
const check_user_id_url = `${base_url}/check_user_id`;
const filter_url = [
    'https://www.amazon.com/checkout/',
    'https://www.amazon.com/gp/buy/',
    'https://www.amazon.com/a/addresses',
    'https://www.amazon.com/cpe/yourpayments/',
    'https://www.amazon.com/ap/signin',
    'https://www.amazon.com/ap/cvf/',
    'https://www.amazon.com/ap/profile/',
    'https://www.amazon.com/ax/account/',
    'https://www.amazon.com/gp/product/handle-buy-box/',
    'https://www.amazon.com/gp/checkoutportal/',
    'https://www.amazon.com/gp/cart/desktop/',
    'https://www.amazon.com/gp/primecentral/editPaymentPreference'
];
const scroll_threshold = 300;


/***/ }),

/***/ "./src/recipe_new.ts":
/*!***************************!*\
  !*** ./src/recipe_new.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add_to_cart_button: () => (/* binding */ add_to_cart_button),
/* harmony export */   buy_again: () => (/* binding */ buy_again),
/* harmony export */   buy_box_with_accordion: () => (/* binding */ buy_box_with_accordion),
/* harmony export */   buy_box_without_accordion_delivery: () => (/* binding */ buy_box_without_accordion_delivery),
/* harmony export */   buy_box_without_accordion_pick_up: () => (/* binding */ buy_box_without_accordion_pick_up),
/* harmony export */   buy_now_button: () => (/* binding */ buy_now_button),
/* harmony export */   carousel_card: () => (/* binding */ carousel_card),
/* harmony export */   cart: () => (/* binding */ cart),
/* harmony export */   cart_side_bar: () => (/* binding */ cart_side_bar),
/* harmony export */   delivery_frequency_selector: () => (/* binding */ delivery_frequency_selector),
/* harmony export */   fresh_carousel_card: () => (/* binding */ fresh_carousel_card),
/* harmony export */   fresh_cart: () => (/* binding */ fresh_cart),
/* harmony export */   fresh_substitution_card: () => (/* binding */ fresh_substitution_card),
/* harmony export */   go_to_cart_button_for_flash_sales: () => (/* binding */ go_to_cart_button_for_flash_sales),
/* harmony export */   luxury_carousel_card: () => (/* binding */ luxury_carousel_card),
/* harmony export */   luxury_cart: () => (/* binding */ luxury_cart),
/* harmony export */   nav: () => (/* binding */ nav),
/* harmony export */   popular_products: () => (/* binding */ popular_products),
/* harmony export */   product_delivery: () => (/* binding */ product_delivery),
/* harmony export */   product_facts: () => (/* binding */ product_facts),
/* harmony export */   quantity_selector: () => (/* binding */ quantity_selector),
/* harmony export */   recipes: () => (/* binding */ recipes),
/* harmony export */   refinement_option: () => (/* binding */ refinement_option),
/* harmony export */   set_up_now_button: () => (/* binding */ set_up_now_button)
/* harmony export */ });
const nav = {
    selector: '#navbar-main',
    name: 'nav_bar',
    children: [
        {
            selector: '#nav-logo',
            add_text: true,
            text_format: 'Homepage',
            clickable: true,
            name: 'from_text'
        },
        {
            selector: '#nav-search-bar-form',
            children: [
                {
                    selector: 'input#twotabsearchtextbox',
                    name: 'search_input',
                    clickable: true,
                    generate_metadata: (em) => {
                        const term = em === null || em === void 0 ? void 0 : em.value;
                        return { name: 'search_term', data: { term } };
                    }
                },
                {
                    selector: '#nav-search-submit-button',
                    clickable: true,
                    name: 'search_button'
                }
            ]
        },
        {
            selector: '#nav-link-accountList',
            text_selector: '#nav-link-accountList span.nav-line-2',
            add_text: true,
            clickable: true,
            name: 'account_and_list_button'
        },
        {
            selector: '#nav-orders',
            add_text: true,
            clickable: true,
            name: 'order_button'
        },
        {
            selector: '#nav-cart',
            text_selector: '#nav-cart .nav-line-2',
            add_text: true,
            clickable: true,
            name: 'cart_button'
        },
        {
            selector: '#nav-flyout-searchAjax',
            name: 'suggested_terms',
            children: [
                {
                    selector: 'div.cards_carousel_widget-sug-column',
                    name: 'from_text',
                    clickable: true,
                    add_text: true,
                    text_selector: 'div.cards_carousel_text_left_widget-sug-text'
                },
                {
                    selector: 'div.s-suggestion-container',
                    name: 'from_text',
                    add_text: true,
                    clickable: true
                }
            ]
        },
        {
            selector: '#nav-hamburger-menu',
            name: 'from_text',
            add_text: true,
            clickable: true,
            text_format: 'Menu'
        },
        {
            selector: '#nav-xshop',
            name: 'stores',
            children: [
                {
                    selector: 'li',
                    clickable: true,
                    add_text: true,
                    name: 'from_text'
                }
            ]
        }
    ]
};
const cart_side_bar = {
    selector: '#nav-flyout-ewc',
    name: 'cart_side_bar',
    children: [
        {
            selector: 'div.ewc-multi-cart-dropdown',
            name: 'cart_selector',
            children: [
                {
                    selector: 'div.ewc-cart-header',
                    add_text: true,
                    clickable: true,
                    name: 'from_text',
                    text_js: (em) => {
                        var _a;
                        return ((_a = em.querySelector('img')) === null || _a === void 0 ? void 0 : _a.alt) || '';
                    }
                }
            ]
        },
        {
            selector: 'div.ewc-compact-view-cart-header div.ewc-cart-header-logo',
            name: 'open_cart_selector',
            clickable: true,
            add_text: true,
            text_format: 'Open Cart Selector'
        },
        {
            selector: 'div.ewc-compact-actions a',
            add_text: true,
            clickable: true,
            name: 'go_to_cart'
        },
        {
            selector: '#ewc-compact-body ul',
            name: 'product_list',
            children: [
                {
                    selector: "li div[id^='sc-item']",
                    name: 'from_text',
                    text_js: (em) => {
                        const titleEm = em.querySelector('div.ewc-item-image a.sc-product-link img:not(.ewc-sfl-image-small)');
                        return (titleEm === null || titleEm === void 0 ? void 0 : titleEm.alt) || '';
                    },
                    children: [
                        {
                            selector: 'div.ewc-item-image a.sc-product-link img:not(.ewc-sfl-image-small)',
                            name: 'product_image',
                            clickable: true,
                            add_text: true,
                            text_format: 'Product Image'
                        },
                        {
                            selector: 'span.ewc-unit-price',
                            add_text: true
                        },
                        {
                            selector: 'select',
                            name: 'drop_down_list'
                        },
                        {
                            selector: 'div[data-action="a-dropdown-button"], span[data-action="a-dropdown-button"]',
                            name: 'drop_down_list',
                            clickable: true,
                            add_text: true
                        },
                        {
                            selector: 'div[id^="qs-widget-button-container-"]',
                            name: 'drop_down_list',
                            clickable: true,
                            add_text: true,
                            children: [
                                {
                                    selector: 'div[id^="qs-widget-dropdown-container-"]',
                                    match_id_with_parent: true,
                                    use_root: true,
                                    children: [
                                        {
                                            selector: 'li',
                                            add_text: true,
                                            name: 'from_text',
                                            clickable: true
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            selector: 'div.ewc-delete-icon-container button',
                            name: 'delete',
                            add_text: true,
                            text_format: 'delete',
                            clickable: true
                        },
                        {
                            selector: 'span.sc-quantity-stepper',
                            children: [
                                {
                                    selector: 'button[data-a-selector="decrement"]',
                                    add_text: true,
                                    text_js: function (element) {
                                        if (element.hasAttribute('aria-label')) {
                                            return element.getAttribute('aria-label');
                                        }
                                        return '';
                                    },
                                    clickable: true,
                                    name: 'decrease_quantity_by_one'
                                },
                                {
                                    selector: "div[role='spinbutton']",
                                    add_text: true,
                                    text_format: 'Current Quantity: {}'
                                },
                                {
                                    selector: 'button[data-a-selector="increment"]',
                                    add_text: true,
                                    text_js: function (element) {
                                        if (element.hasAttribute('aria-label')) {
                                            return element.getAttribute('aria-label');
                                        }
                                        return '';
                                    },
                                    clickable: true,
                                    name: 'increase_quantity_by_one'
                                }
                            ]
                        }
                    ],
                    generate_metadata: (em) => {
                        var _a;
                        const asin = em.getAttribute('data-asin');
                        const priceEm = em.querySelector('span.ewc-unit-price');
                        const price = (_a = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _a === void 0 ? void 0 : _a.replace(/[\n]/g, '').trim();
                        const titleEm = em.querySelector('div.ewc-item-image a.sc-product-link img:not(.ewc-sfl-image-small)');
                        const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.alt;
                        const urlEm = titleEm === null || titleEm === void 0 ? void 0 : titleEm.parentElement;
                        const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
                        const quantityEm = em.querySelector('div[data-action="a-dropdown-button"], span[data-action="a-dropdown-button"], span.sc-quantity-stepper div[role="spinbutton"]');
                        const quantity = quantityEm === null || quantityEm === void 0 ? void 0 : quantityEm.innerText;
                        return {
                            name: 'cart_items',
                            data: { title, asin, price, url, quantity }
                        };
                    }
                }
            ]
        }
    ]
};
const refinement_option = [
    {
        selector: 'span.a-size-base.a-color-base.puis-bold-weight-text',
        add_text: true,
        class: 'refinement-title'
    },
    {
        selector: 'a.s-navigation-clear-link',
        add_text: true,
        name: 'clear_selection',
        clickable: true
    },
    {
        selector: 'ul > span.a-declarative > span > li:has(a.a-link-normal.s-navigation-item)',
        add_text: true,
        name: 'from_text',
        clickable: true,
        // click_selector: "a",
        direct_child: true,
        text_js: function (element) {
            try {
                let text = '';
                if (!element) {
                    return text;
                }
                const aChild = element.querySelector('a.a-link-normal.s-navigation-item');
                if (element.innerText && element.innerText.trim()) {
                    text += element.innerText.trim();
                    if (aChild && aChild.hasAttribute('title')) {
                        text += ' ';
                        text += aChild.getAttribute('title');
                    }
                }
                else {
                    const aChild = element.querySelector('a.a-link-normal.s-navigation-item');
                    if (aChild && aChild.hasAttribute('title')) {
                        text += aChild.getAttribute('title');
                    }
                }
                if (aChild && aChild.getAttribute('aria-current') === 'true') {
                    // text = 'Clear Option ' + text
                }
                return text;
            }
            catch (e) {
                console.log(e);
                return '';
            }
        },
        generate_metadata: (element) => {
            var _a, _b, _c;
            let text = '';
            const aChild = element.querySelector('a.a-link-normal.s-navigation-item');
            if (element.innerText && element.innerText.trim()) {
                text += element.innerText.trim();
                if (aChild && aChild.hasAttribute('title')) {
                    text += '_';
                    text += aChild.getAttribute('title');
                }
            }
            else {
                const aChild = element.querySelector('a.a-link-normal.s-navigation-item');
                if (aChild && aChild.hasAttribute('title')) {
                    text += aChild.getAttribute('title');
                }
            }
            const nameEm = (_b = (_a = element.closest('ul')) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.firstElementChild;
            const name = (_c = nameEm === null || nameEm === void 0 ? void 0 : nameEm.innerText) === null || _c === void 0 ? void 0 : _c.trim().replace(/[ ]/g, '_').toLowerCase().trim().replace(/^_+|_+$/g, '').replace(/[_\d]+$/, '');
            let url = '';
            if (aChild && aChild.hasAttribute('href')) {
                url = aChild.getAttribute('href');
            }
            if (aChild && aChild.getAttribute('aria-current') === 'true') {
                return {
                    name: 'refinements.' + name,
                    data: { title: (text === null || text === void 0 ? void 0 : text.trim()) || '', selected: true, url }
                };
            }
            return {
                name: 'refinements.' + name,
                data: { title: (text === null || text === void 0 ? void 0 : text.trim()) || '', selected: false, url }
            };
        },
        children: [
            {
                selector: "input[type='checkbox']"
            }
        ]
    },
    {
        selector: "ul > span.a-declarative > li > span > div[data-a-expander-name='filter-content-expander']",
        name: 'more_options',
        children: [
            {
                selector: "a[data-csa-c-func-deps='aui-da-a-expander-toggle']",
                name: 'toggle_expansion',
                add_text: true
            },
            {
                selector: 'li',
                add_text: true,
                name: 'from_text',
                clickable: true,
                // click_selector: "a",
                text_js: function (element) {
                    try {
                        let text = '';
                        if (!element) {
                            return text;
                        }
                        const aChild = element.querySelector('a.a-link-normal.s-navigation-item');
                        if (element.innerText && element.innerText.trim()) {
                            text += element.innerText.trim();
                            if (aChild && aChild.hasAttribute('title')) {
                                text += ' ';
                                text += aChild.getAttribute('title');
                            }
                        }
                        else {
                            const aChild = element.querySelector('a.a-link-normal.s-navigation-item');
                            if (aChild && aChild.hasAttribute('title')) {
                                text += aChild.getAttribute('title');
                            }
                        }
                        if (aChild && aChild.getAttribute('aria-current') === 'true') {
                            // text = 'Clear Option ' + text
                        }
                        return text;
                    }
                    catch (e) {
                        console.log(e);
                        return '';
                    }
                },
                generate_metadata: (element) => {
                    var _a, _b, _c, _d, _e;
                    let text = '';
                    const aChild = element.querySelector('a.a-link-normal.s-navigation-item');
                    if (element.innerText && element.innerText.trim()) {
                        text += element.innerText.trim();
                        if (aChild && aChild.hasAttribute('title')) {
                            text += '_';
                            text += aChild.getAttribute('title');
                        }
                    }
                    else {
                        const aChild = element.querySelector('a.a-link-normal.s-navigation-item');
                        if (aChild && aChild.hasAttribute('title')) {
                            text += aChild.getAttribute('title');
                        }
                    }
                    const nameEm = (_d = (_c = (_b = (_a = element.closest('ul')) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.closest('ul')) === null || _c === void 0 ? void 0 : _c.parentElement) === null || _d === void 0 ? void 0 : _d.firstElementChild;
                    const name = (_e = nameEm === null || nameEm === void 0 ? void 0 : nameEm.innerText) === null || _e === void 0 ? void 0 : _e.trim().replace(/[ ]/g, '_').toLowerCase().trim().replace(/^_+|_+$/g, '').replace(/[_\d]+$/, '');
                    let url = '';
                    if (aChild && aChild.hasAttribute('href')) {
                        url = aChild.getAttribute('href');
                    }
                    if (aChild && aChild.getAttribute('aria-current') === 'true') {
                        return {
                            name: 'refinements.' + name,
                            data: { title: (text === null || text === void 0 ? void 0 : text.trim()) || '', selected: true, url }
                        };
                    }
                    return {
                        name: 'refinements.' + name,
                        data: { title: (text === null || text === void 0 ? void 0 : text.trim()) || '', selected: false, url }
                    };
                },
                children: [
                    {
                        selector: "input[type='checkbox']"
                    }
                ]
            }
        ]
    }
];
const product_facts = {
    selector: '#productFactsDesktopExpander',
    add_text: true,
    class: 'product-facts'
};
const product_delivery = {
    selector: 'div.mir-layout-DELIVERY_BLOCK-slot-PRIMARY_DELIVERY_MESSAGE_LARGE',
    add_text: true,
    class: 'product-delivery'
};
const quantity_selector = {
    selector: '#selectQuantity, div[id^="qs-widget-button-container-atfc"]',
    name: 'quantity_selector',
    children: [
        {
            selector: 'label',
            add_text: true
        },
        {
            selector: 'span.a-dropdown-prompt',
            add_text: true,
            generate_metadata: (em) => {
                return { name: 'product_quantity', data: { quantity: em.innerText } };
            }
        },
        {
            selector: 'select',
            // clickable: true,
            name: 'drop_down_list'
        },
        {
            selector: 'button',
            name: 'drop_down_list',
            clickable: true,
            add_text: true
        },
        {
            selector: 'div.qs-widget-dropdown-wrapper span[data-action="qs-widget-dropdown-decl"]',
            add_text: true,
            clickable: true,
            use_root: true,
            name: 'from_text',
            text_format: 'Drop Down Option {}'
        }
    ]
};
const delivery_frequency_selector = {
    selector: '#replenishmentFrequency_feature_div',
    name: 'delivery_frequency_selector',
    text_selector: 'div.a-section.a-spacing-micro > span',
    add_text: true,
    children: [
        {
            selector: '#rcxOrdFreqOnmlWrapper span.a-dropdown-prompt',
            add_text: true
        },
        {
            selector: '#rcxOrdFreqOnmlWrapper select',
            // clickable: true,
            name: 'drop_down_list'
        }
    ]
};
const set_up_now_button = {
    selector: '#rcx-subscribe-submit-button-announce',
    add_text: true,
    clickable: true,
    name: 'set_up_now',
    class: 'product-set-up-now'
};
const add_to_cart_button = {
    selector: "input[name='submit.add-to-cart'], input[name='submit.add-to-cart-ubb'], #freshAddToCartButton input, #dealsx_atc_btn",
    add_text: true,
    clickable: true,
    name: 'add_to_cart',
    class: 'product-add-to-cart'
};
const buy_now_button = {
    selector: "input[name='submit.buy-now']",
    add_text: true,
    clickable: true,
    name: 'buy_now',
    class: 'product-buy-now'
};
const go_to_cart_button_for_flash_sales = {
    selector: '#dealsx_incart span.a-button',
    add_text: true,
    clickable: true,
    name: 'from_text'
};
const buy_box_with_accordion = {
    selector: '#buyBoxAccordion > div.a-box.celwidget',
    name: 'from_text',
    text_selector: 'div.accordion-caption > span',
    children: [
        {
            selector: "div[data-csa-c-content-id='offer_display_desktop_accordion_header'], div[data-csa-c-content-id='offer_display_mobile_accordion_header']",
            name: 'accordion_selector',
            add_text: true,
            clickable: true,
            text_selector: 'h5 span.a-text-bold'
        },
        {
            selector: 'div.a-accordion-inner.accordion-row-content',
            name: 'purchase_form',
            children: [
                product_facts,
                product_delivery,
                quantity_selector,
                delivery_frequency_selector,
                set_up_now_button,
                add_to_cart_button,
                go_to_cart_button_for_flash_sales,
                buy_now_button
            ]
        }
    ]
};
const buy_box_without_accordion_delivery = {
    selector: '#gsod_singleOfferDisplay_Desktop',
    children: [
        {
            selector: '#addToCart',
            name: 'purchase_form',
            children: [
                product_facts,
                product_delivery,
                quantity_selector,
                add_to_cart_button,
                buy_now_button
            ]
        }
    ]
};
const buy_box_without_accordion_pick_up = {
    selector: '#gsod_singleOfferDisplay_group_2_Desktop',
    children: [
        {
            selector: '#pickUpOfferDisplay',
            name: 'purchase_form',
            children: [
                product_facts,
                product_delivery,
                quantity_selector,
                add_to_cart_button,
                buy_now_button
            ]
        }
    ]
};
const carousel_card = {
    selector: 'li.a-carousel-card:not(.a-carousel-card-empty), #gridItemRoot',
    name: 'from_text',
    text_js: (em) => {
        const titleEm = em.querySelector('a div[class*="sc-truncate-desktop"], a span.title, a div[class*="sc-css-line-clamp"], a span[class*="titleR3"], div[data-cy="title-recipe"], a[id*="title"], a.sw-product-title');
        const title = (titleEm === null || titleEm === void 0 ? void 0 : titleEm.title) || (titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText) || '';
        const imgEm = em.querySelector('img[class*="product-image"], img.a-dynamic-image, img[class*="carousel-image"] img.s-image');
        const imgAlt = imgEm === null || imgEm === void 0 ? void 0 : imgEm.alt;
        return title || imgAlt || '';
    },
    children: [
        {
            selector: 'a:has(img[class*="product-image"], img.a-dynamic-image, img[class*="carousel-image"]), img.s-image, a[target="_top"]:has(img):not(:has(div, span)), a.sw-product-image-link',
            name: 'product_image',
            add_text: true,
            text_format: 'Product Image',
            clickable: true
        },
        {
            selector: 'a div[class*="sc-truncate-desktop"], a div:has(> span.title), a div[class*="sc-css-line-clamp"], a:has(span[class*="titleR3"]), div[data-cy="title-recipe"], a[id*="title"], a.sw-product-title',
            add_text: true,
            name: 'product_title',
            clickable: true
        },
        {
            selector: 'div[class*="singleSwatchesContainer"]',
            name: 'options',
            children: [
                {
                    selector: 'li a',
                    add_text: true,
                    name: 'from_text',
                    clickable: true,
                    text_js: (em) => {
                        return em.getAttribute('aria-label') || em.innerText || '';
                    }
                },
                {
                    selector: 'a[class*="_link_"]',
                    add_text: true,
                    name: 'from_text',
                    clickable: true
                }
            ]
        },
        {
            selector: 'div[class*="variationLink"] a',
            clickable: true,
            add_text: true,
            name: 'from_text'
        },
        {
            selector: 'a:has(i[class*="star"]), a:has(i[data-cy="reviews-ratings-slot"]), a.adReviewLink',
            name: 'product_rating',
            clickable: true,
            add_text: true,
            text_js: (em) => {
                return em.title || em.getAttribute('aria-label') || '';
            }
        },
        {
            selector: 'span.a-size-base.s-underline-text',
            add_text: true,
            text_format: '{} reviews',
            class: 'product-rating-count',
            name: 'product_rating_count',
            clickable: true
        },
        {
            selector: 'a[aria-describedby*="sp_detail_thematic-deals"]:not(:has(span.a-price)), a[aria-describedby*="sp_detail_thematic-recent_history"]:not(:has(span.a-price))',
            add_text: true,
            name: 'from_text',
            clickable: true
        },
        {
            selector: 'div[class*="sc-price"]',
            add_text: true,
            text_selector: 'span[class*="sc-price"]',
            name: 'product_price',
            clickable: true
        },
        {
            selector: 'div.a-section.aok-relative:has(span.a-price span.a-offscreen), div.a-color-price:has(span.a-price span.a-offscreen), a[aria-describedby="price-link"]:has(span.a-price span.a-offscreen)',
            add_text: true,
            clickable: true,
            text_selector: 'span.a-price span.a-offscreen',
            name: 'product_price'
        },
        {
            selector: 'span.a-price span.a-offscreen',
            add_text: true
        },
        {
            selector: 'a.pBooks-sf-points-component',
            add_text: true,
            clickable: true,
            name: 'product_points'
        },
        {
            selector: 'input[name="submit.addToCart"], span[class*="actionButton"]:has(i.a-icon-cart)',
            name: 'add_to_cart',
            add_text: true,
            text_format: 'Add To Cart',
            clickable: true
        },
        {
            selector: 'div[name="ax-qs"], div[id^="atcStepperSection"]',
            children: [
                {
                    selector: "button[aria-label='Decrease quantity by one'], button[data-action='remove']",
                    add_text: true,
                    text_format: 'Decrease quantity by one',
                    clickable: true,
                    name: 'from_text'
                },
                {
                    selector: "div[role='spinbutton'], span.atcStepperQuantity",
                    add_text: true,
                    text_format: 'Current Quantity: {}'
                },
                {
                    selector: "button[aria-label='Increase quantity by one'], button[data-action='add']",
                    add_text: true,
                    text_format: 'Increase quantity by one',
                    clickable: true,
                    name: 'from_text'
                }
            ]
        },
        {
            selector: 'span.a-button a, div[data-component-id="seeAllBuyingOptionsButton"] span.a-button',
            add_text: true,
            clickable: true,
            name: 'from_text'
        }
    ],
    generate_metadata: (em) => {
        var _a, _b, _c;
        const asinJSONString = (_a = em
            .querySelector('div[data-adfeedbackdetails]')) === null || _a === void 0 ? void 0 : _a.getAttribute('data-adfeedbackdetails');
        let asinJSON;
        if (asinJSONString !== undefined) {
            asinJSON = JSON.parse(asinJSONString);
        }
        const asinEm = em.querySelector('div[id*="sc-turbo-container"], div[data-asin], input[data-asin]');
        const asin = (asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin')) ||
            ((_b = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('id')) === null || _b === void 0 ? void 0 : _b.split('-').pop()) ||
            (asinJSON === null || asinJSON === void 0 ? void 0 : asinJSON.asinId) ||
            '';
        const priceEm = em.querySelector('a span[class*="sc-price"], span.a-price span.a-offscreen');
        const price = (_c = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _c === void 0 ? void 0 : _c.replace(/[\n]/g, '');
        const titleEm = em.querySelector('a div[class*="sc-truncate-desktop"], a span.title, a div[class*="sc-css-line-clamp"], a span[class*="titleR3"], div[data-cy="title-recipe"], a[id*="title"], a.sw-product-title');
        const title = (titleEm === null || titleEm === void 0 ? void 0 : titleEm.title) || (titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText) || '';
        const imgEm = em.querySelector('img[class*="product-image"], img.a-dynamic-image, img[class*="carousel-image"] img.s-image');
        const imgAlt = imgEm === null || imgEm === void 0 ? void 0 : imgEm.alt;
        const urlEm = em.querySelector('a:has(div[class*="sc-truncate-desktop"]), a:has(span.title), a:has(span[class*="title"])');
        const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
        const quantityEm = em.querySelector('div[name="ax-qs"] div[role="spinbutton"], div[id^="atcStepperSection"] span.atcStepperQuantity');
        const quantity = (quantityEm === null || quantityEm === void 0 ? void 0 : quantityEm.innerText) || '';
        return {
            name: 'promotion_items',
            data: { title: title || imgAlt || '', asin, price, url, quantity }
        };
    }
};
const cart = [
    nav,
    {
        selector: '#sc-collapsed-carts-container',
        name: 'carts',
        children: [
            {
                selector: 'div.sc-collapsed-cart-container',
                name: 'from_text',
                text_js: (em) => {
                    var _a;
                    const titleEm = em.querySelector('div.sc-cart-header');
                    const title = ((_a = titleEm === null || titleEm === void 0 ? void 0 : titleEm.querySelector('h2[aria-label]')) === null || _a === void 0 ? void 0 : _a.getAttribute('aria-label')) ||
                        (titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText) ||
                        'cart';
                    return title;
                },
                children: [
                    {
                        selector: 'div.sc-cart-header:has(a h2 img)',
                        clickable: true,
                        name: 'from_text',
                        text_js: (em) => {
                            var _a;
                            return ((_a = em.querySelector('a h2 img')) === null || _a === void 0 ? void 0 : _a.alt) || '';
                        }
                    },
                    {
                        selector: 'div[data-name="collapsed_item_list"]',
                        clickable: true,
                        name: 'item_list'
                    },
                    {
                        selector: 'div.sc-buy-box-inner-box input[name^="proceedToALMCheckout"]',
                        clickable: true,
                        name: 'check_out',
                        add_text: true
                    },
                    {
                        selector: 'div.sc-buy-box-inner-box a',
                        clickable: true,
                        name: 'from_text',
                        add_text: true
                    }
                ]
            }
        ]
    },
    {
        selector: "div[data-name='Active Items']",
        name: 'active_item_list',
        children: [
            {
                selector: 'div.sc-list-item-content',
                text_selector: 'div.sc-item-content-group ul > li > span.a-list-item > a.sc-product-title span.a-truncate-full',
                name: 'from_text',
                children: [
                    {
                        selector: 'div.sc-item-check-checkbox-selector label',
                        clickable: true,
                        name: 'checkbox'
                    },
                    {
                        selector: 'div.sc-image-wrapper a',
                        clickable: true,
                        name: 'product_image',
                        add_text: true,
                        text_format: 'Product Image'
                    },
                    {
                        selector: 'div.sc-item-content-group ul > li > span.a-list-item > a.sc-product-title',
                        clickable: true,
                        text_selector: 'span.a-truncate-full',
                        add_text: true,
                        name: 'product_detail'
                    },
                    {
                        selector: 'li.sc-delivery-messaging',
                        add_text: true
                    },
                    {
                        selector: 'div.sc-badge-price-to-pay span.sc-product-price span:not(.a-offscreen)',
                        add_text: true
                    },
                    {
                        selector: 'li.sc-product-variation',
                        add_text: true
                    },
                    {
                        selector: 'a.sns-opt-in-link-desktop',
                        add_text: true,
                        clickable: true,
                        name: 'from_text'
                    },
                    {
                        selector: 'a.sns-recurrence-period-selector',
                        add_text: true,
                        clickable: true,
                        name: 'from_text',
                        text_format: 'Delivery every: {}'
                    },
                    {
                        selector: 'div.sc-item-content-group span.sc-quantity-stepper',
                        children: [
                            {
                                selector: "button[aria-label='Decrease quantity by one'], button[data-action='a-stepper-decrement']",
                                add_text: true,
                                text_js: function (element) {
                                    if (element.hasAttribute('aria-label')) {
                                        return element.getAttribute('aria-label');
                                    }
                                    return '';
                                },
                                clickable: true,
                                name: 'decrease_quantity_by_one'
                            },
                            {
                                selector: "div[role='spinbutton']",
                                add_text: true,
                                text_format: 'Current Quantity: {}'
                            },
                            {
                                selector: "button[aria-label='Increase quantity by one']",
                                add_text: true,
                                text_js: function (element) {
                                    if (element.hasAttribute('aria-label')) {
                                        return element.getAttribute('aria-label');
                                    }
                                    return '';
                                },
                                clickable: true,
                                name: 'increase_quantity_by_one'
                            }
                        ]
                    },
                    {
                        selector: "div.sc-item-content-group input[data-action='delete']",
                        add_text: true,
                        clickable: true,
                        name: 'delete'
                    },
                    {
                        selector: "div.sc-item-content-group input[data-action='save-for-later']",
                        add_text: true,
                        clickable: true,
                        name: 'save_for_later'
                    }
                ],
                generate_metadata: (em) => {
                    var _a, _b;
                    const asin = (_a = em.parentElement) === null || _a === void 0 ? void 0 : _a.getAttribute('data-asin');
                    const priceEm = em.querySelector('div.sc-badge-price-to-pay span.sc-product-price span:not(.a-offscreen)');
                    const price = (_b = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _b === void 0 ? void 0 : _b.replace(/[\n]/g, '');
                    const titleEm = em.querySelector('div.sc-item-content-group ul > li > span.a-list-item > a.sc-product-title span.a-truncate-full');
                    const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
                    const urlEm = em.querySelector('div.sc-item-content-group ul > li > span.a-list-item > a.sc-product-title');
                    const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
                    const deliveryEm = em.querySelector('li.sc-delivery-messaging');
                    const delivery = deliveryEm === null || deliveryEm === void 0 ? void 0 : deliveryEm.innerText.replace(/[\n]/g, ' ');
                    const quantityEm = em.querySelector("div.sc-item-content-group span.sc-quantity-stepper div[role='spinbutton']");
                    const quantity = quantityEm === null || quantityEm === void 0 ? void 0 : quantityEm.innerText;
                    const selectedEm = em.querySelector('div.sc-item-check-checkbox-selector input');
                    const selected = (selectedEm === null || selectedEm === void 0 ? void 0 : selectedEm.getAttribute('checked')) !== null;
                    const optionsEm = em.querySelectorAll('li.sc-product-variation > span');
                    const options = [];
                    for (const optionEm of optionsEm) {
                        const optionKeyEm = optionEm === null || optionEm === void 0 ? void 0 : optionEm.querySelector('span.a-text-bold');
                        const optionValueEm = optionEm === null || optionEm === void 0 ? void 0 : optionEm.querySelector('span:not(.a-text-bold)');
                        const optionKey = optionKeyEm === null || optionKeyEm === void 0 ? void 0 : optionKeyEm.innerText.replace(/[:\n]/g, '').trim();
                        const optionValue = optionValueEm === null || optionValueEm === void 0 ? void 0 : optionValueEm.innerText.replace(/[:\n]/g, '').trim();
                        const option = { [optionKey]: optionValue };
                        options.push(option);
                    }
                    return {
                        name: 'active_items',
                        data: { title, asin, price, url, delivery, quantity, selected, options }
                    };
                }
            }
        ]
    },
    {
        selector: '#sc-buy-box-ptc-button input',
        add_text: true,
        clickable: true,
        name: 'check_out'
    },
    {
        selector: 'div.a-modal-scroller div.a-popover-wrapper',
        use_root: true,
        name: 'subscribe_n_save_popover',
        children: [
            {
                selector: 'button.a-button-close',
                clickable: true,
                name: 'from_text',
                text_format: 'Close',
                add_Text: true
            },
            {
                selector: 'select',
                name: 'drop_down_list'
            },
            {
                selector: 'li',
                clickable: true,
                name: 'from_text',
                add_text: true
            },
            {
                selector: 'div.a-popover-footer span.a-button-inner',
                name: 'from_text',
                clickable: true,
                add_text: true,
                text_selector: 'span.a-button-text'
            }
        ]
    },
    {
        selector: '#sns-accordion',
        use_root: true,
        name: 'subscribe_n_save_frequency_selector_popover',
        children: [
            {
                selector: 'div.a-box',
                add_text: true,
                name: 'from_text',
                clickable: true
            }
        ]
    }
];
const fresh_carousel_card = {
    selector: 'li.a-carousel-card, div[id^="gridElement"]',
    name: 'from_text',
    text_selector: 'span.a-truncate-full',
    children: [
        {
            selector: 'a:has(div.a-image-container)',
            name: 'product_image',
            add_text: true,
            text_format: 'Product Image',
            clickable: true
        },
        {
            selector: "span[id^='qs-widget-atc-button']",
            name: 'add_to_cart',
            add_text: true,
            text_format: 'Add To Cart',
            clickable: true
        },
        {
            selector: 'div[id^="qs-widget-button-container-atfc"]',
            name: 'quantity_selector',
            children: [
                {
                    selector: "input[aria-label^='Remove']",
                    add_text: true,
                    text_format: 'Decrease quantity by 1',
                    name: 'from_text',
                    clickable: true
                },
                {
                    selector: "button[id^='qs-widget-button-atfc']",
                    add_text: true
                },
                {
                    selector: "input[aria-label^='Add']",
                    add_text: true,
                    text_format: 'Increase quantity by 1',
                    name: 'from_text',
                    clickable: true
                }
            ]
        },
        {
            selector: 'a > span > span.a-truncate',
            add_text: true,
            name: 'product_detail',
            clickable: true,
            text_selector: 'span.a-truncate-full'
        },
        {
            selector: 'div > span > span > span.a-truncate-full',
            add_text: true
        },
        {
            selector: 'div[class*="priceToPay"] span.a-offscreen',
            add_text: true
        },
        {
            selector: 'li.a-carousel-card a.a-size-mini',
            name: 'from_text',
            clickable: true,
            add_text: true
        }
    ],
    generate_metadata: (em) => {
        var _a, _b;
        const asinEm = em.querySelector('div[data-csa-c-item-id^="amzn1.asin"]');
        const asin = (_a = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-csa-c-item-id')) === null || _a === void 0 ? void 0 : _a.split(':')[0].split('.').pop();
        const priceEm = em.querySelector('div[class*="priceToPay"] span.a-offscreen');
        const price = (_b = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _b === void 0 ? void 0 : _b.replace(/[\n]/g, '');
        const titleEm = em.querySelector('span.a-truncate-full');
        const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
        const urlEm = em.querySelector('a:has(span.a-truncate-full)');
        const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
        const quantityEm = em.querySelector('div[id^="qs-widget-button-container-atfc"] button[id^="qs-widget-button-atfc"]');
        const quantity = quantityEm === null || quantityEm === void 0 ? void 0 : quantityEm.innerText;
        return {
            name: 'promotion_items',
            data: { title, asin, price, url, quantity }
        };
    }
};
const fresh_substitution_card = {
    selector: 'div.subs-cart-item',
    name: 'from_text',
    text_selector: 'div.a-spacing-top-base span.a-size-base',
    children: [
        {
            selector: 'div.a-spacing-top-base span.a-size-base',
            add_text: true
        },
        {
            selector: 'div.a-spacing-top-mini span.a-color-price',
            add_text: true
        }
    ],
    generate_metadata: (em) => {
        const asinEm = em.querySelector('div[data-cart-item-asin]');
        const asin = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-cart-item-asin');
        const titleEm = em.querySelector('div.a-spacing-top-base span.a-size-base');
        const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
        const priceEm = em.querySelector('div.a-spacing-top-mini span.a-color-price');
        const price = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText;
        return { name: 'active_items', data: { asin, title, price } };
    }
};
const fresh_cart = [
    nav,
    {
        selector: "div[data-name='Active Items']",
        name: 'active_item_list',
        children: [
            {
                selector: 'div.sc-list-item-content',
                text_selector: 'ul > li > span.a-list-item > a.sc-product-title span.a-truncate-full',
                name: 'from_text',
                children: [
                    {
                        selector: 'div.sc-product-image-desktop a img',
                        clickable: true,
                        name: 'product_image',
                        add_text: true,
                        text_format: 'Product Image'
                    },
                    {
                        selector: 'ul > li > span.a-list-item > a.sc-product-title',
                        clickable: true,
                        text_selector: 'span.a-truncate-full',
                        add_text: true,
                        name: 'product_detail'
                    },
                    {
                        selector: 'div.sc-badge-price-to-pay span.sc-price',
                        add_text: true
                    },
                    {
                        selector: 'div.sc-action-links',
                        children: [
                            {
                                selector: 'div.qs-widget-container',
                                children: [
                                    {
                                        selector: "input[aria-label^='Remove']",
                                        add_text: true,
                                        text_js: function (element) {
                                            if (element.hasAttribute('aria-label')) {
                                                return element.getAttribute('aria-label');
                                            }
                                            return '';
                                        },
                                        clickable: true,
                                        name: 'decrease_quantity_by_one'
                                    },
                                    {
                                        selector: 'div.qs-widget-dropdown-flex-wrapper button',
                                        add_text: true,
                                        clickable: true,
                                        name: 'quantity_drop_down_list',
                                        text_format: 'Current Quantity: {}'
                                    },
                                    {
                                        selector: 'div.qs-widget-dropdown-wrapper span[data-action="qs-widget-dropdown-decl"]',
                                        add_text: true,
                                        clickable: true,
                                        use_root: true,
                                        name: 'from_text',
                                        text_format: 'Drop Down Option {}'
                                    },
                                    {
                                        selector: 'div[id^="qs-widget-quantity-container-atfc"] span[data-action="qs-widget-quantity-changelink-decl"]',
                                        add_text: true,
                                        clickable: true,
                                        use_root: true,
                                        name: 'from_text'
                                    },
                                    {
                                        selector: 'div[id^="qs-widget-summary-container-atfc"] span[id^="qs-widget-summary-atc-atfc"]',
                                        add_text: true,
                                        clickable: true,
                                        use_root: true,
                                        name: 'from_text'
                                    },
                                    {
                                        selector: "input[aria-label^='Add']",
                                        add_text: true,
                                        text_js: function (element) {
                                            if (element.hasAttribute('aria-label')) {
                                                return element.getAttribute('aria-label');
                                            }
                                            return '';
                                        },
                                        clickable: true,
                                        name: 'increase_quantity_by_one'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        selector: "input[data-action='delete']",
                        add_text: true,
                        clickable: true,
                        name: 'delete'
                    }
                ],
                generate_metadata: (em) => {
                    var _a, _b;
                    const asin = (_a = em.parentElement) === null || _a === void 0 ? void 0 : _a.getAttribute('data-asin');
                    const priceEm = em.querySelector('div.sc-badge-price-to-pay span.sc-price');
                    const price = (_b = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _b === void 0 ? void 0 : _b.replace(/[\n]/g, '');
                    const titleEm = em.querySelector('ul > li > span.a-list-item > a.sc-product-title span.a-truncate-full');
                    const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
                    const urlEm = em.querySelector('ul > li > span.a-list-item > a.sc-product-title');
                    const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
                    const quantityEm = em.querySelector('div.sc-action-links div.qs-widget-dropdown-flex-wrapper button');
                    const quantity = quantityEm === null || quantityEm === void 0 ? void 0 : quantityEm.innerText;
                    return {
                        name: 'active_items',
                        data: { title, asin, price, url, quantity }
                    };
                }
            }
        ]
    },
    {
        selector: 'div[id^="CardInstance"]',
        text_selector: 'h2.a-carousel-heading',
        name: 'from_text',
        children: [
            {
                selector: 'h2.a-carousel-heading',
                add_text: true
            },
            fresh_carousel_card
        ]
    },
    {
        selector: 'div.sc-buy-box-inner-box input[name^="proceedToALMCheckout"]',
        clickable: true,
        name: 'check_out',
        add_text: true
    },
    {
        selector: 'div.sc-buy-box-inner-box a',
        clickable: true,
        name: 'from_text',
        add_text: true
    },
    {
        selector: '#sc-cart-above-actions span.a-button, #sc-cart-above-actions a',
        clickable: true,
        name: 'from_text',
        add_text: true
    }
];
const luxury_carousel_card = {
    selector: 'li.a-carousel-card, div[id^="gridElement"]',
    name: 'from_text',
    text_selector: 'span.a-truncate-full',
    children: [
        {
            selector: 'a',
            clickable: true,
            add_text: true,
            name: 'from_text',
            text_selector: '#bondWalledCarouselElementDescription'
        }
    ],
    generate_metadata: (em) => {
        var _a, _b;
        const asinEm = em.querySelector('a');
        const asin = (_a = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('href')) === null || _a === void 0 ? void 0 : _a.split('/').at(-2);
        const priceEm = em.querySelector('span.a-price span.a-offscreen');
        const price = (_b = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _b === void 0 ? void 0 : _b.replace(/[\n]/g, '');
        const titleEm = em.querySelector('a #bondWalledCarouselElementDescription');
        const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
        const urlEm = em.querySelector('a');
        const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
        return {
            name: 'promotion_items',
            data: { title, asin, price, url }
        };
    }
};
const luxury_cart = [
    nav,
    {
        selector: "div[data-name='Active Items']",
        name: 'active_item_list',
        children: [
            {
                selector: 'div.sc-list-item-content',
                text_selector: 'ul > li > span.a-list-item > a.sc-product-title span.a-truncate-full',
                name: 'from_text',
                children: [
                    {
                        selector: 'div.sc-product-image-desktop a img',
                        clickable: true,
                        name: 'product_image',
                        add_text: true,
                        text_format: 'Product Image'
                    },
                    {
                        selector: 'ul > li > span.a-list-item > a.sc-product-title',
                        clickable: true,
                        text_selector: 'span.sc-product-title',
                        add_text: true,
                        name: 'product_detail'
                    },
                    {
                        selector: 'div.sc-badge-price-to-pay span.sc-price',
                        add_text: true
                    },
                    {
                        selector: 'div.sc-action-links',
                        children: [
                            {
                                selector: 'span.sc-quantity-stepper',
                                children: [
                                    {
                                        selector: 'button[data-action="a-stepper-decrement"]',
                                        add_text: true,
                                        text_js: function (element) {
                                            if (element.hasAttribute('aria-label')) {
                                                return element.getAttribute('aria-label');
                                            }
                                            return '';
                                        },
                                        clickable: true,
                                        name: 'decrease_quantity_by_one'
                                    },
                                    {
                                        selector: 'div[role="spinbutton"]',
                                        add_text: true,
                                        name: 'quantity_drop_down_list',
                                        text_format: 'Current Quantity: {}'
                                    },
                                    {
                                        selector: 'button[data-action="a-stepper-increment"]',
                                        add_text: true,
                                        text_js: function (element) {
                                            if (element.hasAttribute('aria-label')) {
                                                return element.getAttribute('aria-label');
                                            }
                                            return '';
                                        },
                                        clickable: true,
                                        name: 'increase_quantity_by_one'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        selector: "input[data-action='delete']",
                        add_text: true,
                        clickable: true,
                        name: 'delete'
                    }
                ],
                generate_metadata: (em) => {
                    var _a, _b;
                    const asin = (_a = em.parentElement) === null || _a === void 0 ? void 0 : _a.getAttribute('data-asin');
                    const priceEm = em.querySelector('div.sc-badge-price-to-pay span.sc-price');
                    const price = (_b = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _b === void 0 ? void 0 : _b.replace(/[\n]/g, '');
                    const titleEm = em.querySelector('ul > li > span.a-list-item > a.sc-product-title span.sc-product-title');
                    const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
                    const urlEm = em.querySelector('ul > li > span.a-list-item > a.sc-product-title');
                    const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
                    const quantityEm = em.querySelector('span.sc-quantity-stepper div[role="spinbutton"]');
                    const quantity = quantityEm === null || quantityEm === void 0 ? void 0 : quantityEm.innerText;
                    return {
                        name: 'active_items',
                        data: { title, asin, price, url, quantity }
                    };
                }
            }
        ]
    },
    {
        selector: 'div.sc-buy-box-inner-box input[name^="proceedToLuxuryCheckout"]',
        clickable: true,
        name: 'check_out',
        add_text: true
    }
];
const buy_again = [
    nav,
    cart_side_bar,
    {
        selector: 'div.a-section:has(div.filter-container)',
        name: 'filters',
        children: [
            {
                selector: 'div.filter-container',
                text_selector: 'span#filter-container-header',
                name: 'from_text',
                children: [
                    {
                        selector: 'span#filter-container-header',
                        add_text: true
                    },
                    {
                        selector: 'label',
                        add_text: true,
                        clickable: true,
                        name: 'from_text',
                        generate_metadata: (em) => {
                            var _a, _b;
                            const title = em.innerText;
                            const nameEm = (_a = em
                                .closest('div.filter-container')) === null || _a === void 0 ? void 0 : _a.querySelector('#filter-container-header');
                            const name = (_b = nameEm === null || nameEm === void 0 ? void 0 : nameEm.innerText) === null || _b === void 0 ? void 0 : _b.replace(/[ ]/g, '_').toLowerCase().trim();
                            const input = em.querySelector('input');
                            if (input && input.checked) {
                                return {
                                    name: 'filters.' + name,
                                    data: { title: (title === null || title === void 0 ? void 0 : title.trim()) || '', selected: true }
                                };
                            }
                            return {
                                name: 'filters.' + name,
                                data: { title: (title === null || title === void 0 ? void 0 : title.trim()) || '', selected: false }
                            };
                        }
                    }
                ]
            }
        ]
    },
    {
        selector: 'div.alm-grid-desktop-grid-container',
        name: 'product_list',
        children: [
            {
                selector: 'div[id^="gridCell"]',
                name: 'from_text',
                text_selector: "div[id^='closedCard'] a[id^='title'] span.a-truncate-full",
                children: [
                    {
                        selector: "div[id^='gridElement']",
                        name: 'product_card',
                        children: [
                            {
                                selector: "div[id^='closedCard']",
                                name: 'closed_product_card',
                                children: [
                                    {
                                        selector: "div[id^='info']",
                                        name: 'open_product_card',
                                        clickable: true,
                                        text_format: 'Open Product Card'
                                    },
                                    {
                                        selector: 'form span.a-button-inner',
                                        name: 'add_to_cart',
                                        clickable: true,
                                        add_text: true
                                    },
                                    {
                                        selector: 'div[id^="seeBuyingOptionsWrapper"] a',
                                        name: 'see_buying_options',
                                        clickable: true,
                                        add_text: true
                                    }
                                ]
                            },
                            {
                                selector: 'div[name="ax-qs"]',
                                children: [
                                    {
                                        selector: "button[aria-label='Decrease quantity by one']",
                                        add_text: true,
                                        text_js: function (element) {
                                            if (element.hasAttribute('aria-label')) {
                                                return element.getAttribute('aria-label');
                                            }
                                            return '';
                                        },
                                        clickable: true,
                                        name: 'decrease_quantity_by_one'
                                    },
                                    {
                                        selector: "div[role='spinbutton']",
                                        add_text: true,
                                        text_format: 'Current Quantity: {}'
                                    },
                                    {
                                        selector: "button[aria-label='Increase quantity by one']",
                                        add_text: true,
                                        text_js: function (element) {
                                            if (element.hasAttribute('aria-label')) {
                                                return element.getAttribute('aria-label');
                                            }
                                            return '';
                                        },
                                        clickable: true,
                                        name: 'increase_quantity_by_one'
                                    }
                                ]
                            },
                            {
                                selector: "div[id^='expandedImage']",
                                name: 'close_product_card',
                                clickable: true,
                                add_text: true,
                                text_format: 'Close Product Card'
                            }
                        ]
                    }
                ],
                generate_metadata: (em) => {
                    var _a;
                    const asinEm = em.querySelector("div[id^='closedCard'] div[id^='info']");
                    const asin = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin');
                    const priceEm = em.querySelector('div[id^="closedCard"] div[id^="info"] span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)');
                    const price = (_a = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _a === void 0 ? void 0 : _a.replace(/[\n]/g, '');
                    const titleEm = em.querySelector("div[id^='closedCard'] a[id^='title'] span.a-truncate-full");
                    const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
                    const deliveryEm = em.querySelector('div[id^="closedCard"] div[id^="info"] #udmDeliveryMessageComponent');
                    const delivery = deliveryEm === null || deliveryEm === void 0 ? void 0 : deliveryEm.innerText.replace(/[\n]/g, ' ');
                    return { name: 'active_items_closed', data: { title, asin, price, delivery } };
                }
            },
            {
                selector: 'div[id^="featured"]',
                name: 'from_text',
                text_selector: "a[id^='title'] span.a-truncate-full",
                children: [
                    {
                        selector: 'div[id^="detailContentWrapper"] div[id^="detailContent"]',
                        name: 'detailed_content',
                        children: [
                            {
                                selector: 'div:has(> img)',
                                clickable: true,
                                name: 'product_image',
                                add_text: true,
                                text_format: 'Product Image'
                            },
                            {
                                selector: "a[id^='title']",
                                clickable: true,
                                name: 'product_title',
                                add_text: true,
                                text_selector: 'span.a-truncate-full'
                            },
                            {
                                selector: 'div[class*="asinDetailReviewsRow"] a',
                                clickable: true,
                                add_text: true,
                                text_selector: 'i.a-icon-star-mini',
                                name: 'product_rating'
                            },
                            {
                                selector: "div[class*='multiOfferPillContainer'] a",
                                clickable: true,
                                name: 'from_text',
                                add_text: true
                            },
                            {
                                selector: "div[data-buyingoptiontype='NEW'], div[class*='asinDetailInfoColumns']:has(input[name='submit.addToCart']",
                                name: 'one_time_purchase',
                                children: [
                                    {
                                        selector: 'span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)',
                                        add_text: true,
                                        name: 'price'
                                    },
                                    {
                                        selector: '#udmDeliveryMessageComponent',
                                        add_text: true,
                                        name: 'delivery'
                                    },
                                    {
                                        selector: 'div[class*="actionButtonsRow"], div[class*="asinDetailActionsRow"]',
                                        name: 'buttons',
                                        children: [
                                            {
                                                selector: 'input[name="submit.addToCart"]',
                                                add_text: true,
                                                name: 'add_to_cart',
                                                clickable: true
                                            },
                                            {
                                                selector: 'input[id^="buy-now"]',
                                                add_text: true,
                                                name: 'buy_now',
                                                clickable: true
                                            },
                                            {
                                                selector: 'div[id^="feedbackButtonSection"] input',
                                                add_text: true,
                                                name: 'remove_item',
                                                clickable: true
                                            },
                                            {
                                                selector: 'div[name="ax-qs"]',
                                                children: [
                                                    {
                                                        selector: "button[aria-label='Decrease quantity by one']",
                                                        add_text: true,
                                                        text_js: function (element) {
                                                            if (element.hasAttribute('aria-label')) {
                                                                return element.getAttribute('aria-label');
                                                            }
                                                            return '';
                                                        },
                                                        clickable: true,
                                                        name: 'decrease_quantity_by_one'
                                                    },
                                                    {
                                                        selector: "div[role='spinbutton']",
                                                        add_text: true,
                                                        text_format: 'Current Quantity: {}'
                                                    },
                                                    {
                                                        selector: "button[aria-label='Increase quantity by one']",
                                                        add_text: true,
                                                        text_js: function (element) {
                                                            if (element.hasAttribute('aria-label')) {
                                                                return element.getAttribute('aria-label');
                                                            }
                                                            return '';
                                                        },
                                                        clickable: true,
                                                        name: 'increase_quantity_by_one'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                generate_metadata: (em) => {
                                    var _a, _b, _c, _d, _e;
                                    const asinEm = em.closest('div[data-asin]');
                                    const asin = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin');
                                    const priceEm = em.querySelector('span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)');
                                    const price = (_a = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _a === void 0 ? void 0 : _a.replace(/[\n]/g, '');
                                    const titleEm = (_c = (_b = em.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.querySelector("a[id^='title'] span.a-truncate-full");
                                    const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
                                    const urlEm = (_e = (_d = em.parentElement) === null || _d === void 0 ? void 0 : _d.parentElement) === null || _e === void 0 ? void 0 : _e.querySelector("a[id^='title']");
                                    const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
                                    const deliveryEm = em.querySelector('#udmDeliveryMessageComponent');
                                    const delivery = deliveryEm === null || deliveryEm === void 0 ? void 0 : deliveryEm.innerText.replace(/[\n]/g, ' ');
                                    const quantityEm = em.querySelector('div[name="ax-qs"] div[role="spinbutton"]');
                                    const quantity = (quantityEm === null || quantityEm === void 0 ? void 0 : quantityEm.innerText) || '1';
                                    return {
                                        name: 'active_items_opened_purchase',
                                        data: { title, asin, price, url, delivery, quantity }
                                    };
                                }
                            },
                            {
                                selector: "div[data-buyingoptiontype='SNS'], div[class*='snsUpsellBlockContainer']",
                                name: 'subscribe_and_save',
                                children: [
                                    {
                                        selector: 'span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)',
                                        add_text: true,
                                        name: 'price'
                                    },
                                    {
                                        selector: '#udmDeliveryMessageComponent',
                                        add_text: true,
                                        name: 'delivery'
                                    },
                                    {
                                        selector: 'div[class*="actionButtonsRow"], div[class*="asinDetailPurchaseColumn"]',
                                        name: 'buttons',
                                        children: [
                                            {
                                                selector: 'input[name="submit.addToCart"]',
                                                add_text: true,
                                                name: 'add_to_cart',
                                                clickable: true
                                            },
                                            {
                                                selector: 'span[class*="snsButton"] input',
                                                add_text: true,
                                                name: 'subscribe_and_save',
                                                clickable: true
                                            },
                                            {
                                                selector: 'div[id^="feedbackButtonSection"] input',
                                                add_text: true,
                                                name: 'remove_item',
                                                clickable: true
                                            }
                                        ]
                                    },
                                    {
                                        selector: 'span[class*="subscriptionButton"] input',
                                        add_text: true,
                                        name: 'set_up_subscription',
                                        clickable: true
                                    }
                                ],
                                generate_metadata: (em) => {
                                    var _a, _b, _c, _d, _e;
                                    const asinEm = em.closest('div[data-asin]');
                                    const asin = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin');
                                    const priceEm = em.querySelector('span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)');
                                    const price = (_a = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _a === void 0 ? void 0 : _a.replace(/[\n]/g, '');
                                    const titleEm = (_c = (_b = em.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.querySelector("a[id^='title'] span.a-truncate-full");
                                    const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
                                    const urlEm = (_e = (_d = em.parentElement) === null || _d === void 0 ? void 0 : _d.parentElement) === null || _e === void 0 ? void 0 : _e.querySelector("a[id^='title']");
                                    const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
                                    const deliveryEm = em.querySelector('#udmDeliveryMessageComponent');
                                    const delivery = deliveryEm === null || deliveryEm === void 0 ? void 0 : deliveryEm.innerText.replace(/[\n]/g, ' ');
                                    return {
                                        name: 'active_items_opened_sns',
                                        data: { title, asin, price, url, delivery }
                                    };
                                }
                            }
                        ]
                    },
                    {
                        selector: "div[id^='detail-view-similar-items']",
                        name: 'similar_items',
                        children: [
                            {
                                selector: 'li.a-carousel-card',
                                name: 'from_text',
                                text_selector: "a[id^='title'] span.a-truncate-full",
                                children: [
                                    {
                                        selector: 'div.a-image-container:has(> img)',
                                        clickable: true,
                                        name: 'product_image',
                                        add_text: true,
                                        text_format: 'Product Image'
                                    },
                                    {
                                        selector: "a[id^='title']",
                                        clickable: true,
                                        name: 'product_title',
                                        add_text: true,
                                        text_selector: 'span.a-truncate-full'
                                    },
                                    {
                                        selector: 'div[class*="reviewsRow"] a',
                                        clickable: true,
                                        add_text: true,
                                        text_selector: 'i.a-icon-star-mini',
                                        name: 'product_rating'
                                    },
                                    {
                                        selector: 'span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)',
                                        add_text: true,
                                        name: 'price'
                                    },
                                    {
                                        selector: '#udmDeliveryMessageComponent',
                                        add_text: true,
                                        name: 'delivery'
                                    },
                                    {
                                        selector: 'input[name="submit.addToCart"], input[name^="atfcShim"], button[aria-label="Add to Cart. Click to change quantity"]',
                                        add_text: true,
                                        name: 'add_to_cart',
                                        clickable: true
                                    },
                                    {
                                        selector: 'div[id^="seeBuyingOptionsWrapper"] a',
                                        name: 'see_buying_options',
                                        clickable: true,
                                        add_text: true
                                    },
                                    {
                                        selector: 'div[name="ax-qs"]',
                                        children: [
                                            {
                                                selector: "button[aria-label='Decrease quantity by one']",
                                                add_text: true,
                                                text_js: function (element) {
                                                    if (element.hasAttribute('aria-label')) {
                                                        return element.getAttribute('aria-label');
                                                    }
                                                    return '';
                                                },
                                                clickable: true,
                                                name: 'decrease_quantity_by_one'
                                            },
                                            {
                                                selector: "div[role='spinbutton']",
                                                add_text: true,
                                                text_format: 'Current Quantity: {}'
                                            },
                                            {
                                                selector: "button[aria-label='Increase quantity by one']",
                                                add_text: true,
                                                text_js: function (element) {
                                                    if (element.hasAttribute('aria-label')) {
                                                        return element.getAttribute('aria-label');
                                                    }
                                                    return '';
                                                },
                                                clickable: true,
                                                name: 'increase_quantity_by_one'
                                            }
                                        ]
                                    },
                                    {
                                        selector: 'div.qs-widget-container',
                                        children: [
                                            {
                                                selector: "input[aria-label='Remove']",
                                                add_text: true,
                                                text_js: function (element) {
                                                    if (element.hasAttribute('aria-label')) {
                                                        return element.getAttribute('aria-label');
                                                    }
                                                    return '';
                                                },
                                                clickable: true,
                                                name: 'decrease_quantity_by_one'
                                            },
                                            {
                                                selector: 'div.qs-widget-dropdown-flex-wrapper button',
                                                add_text: true,
                                                clickable: true,
                                                name: 'drop_down_list',
                                                text_format: 'Current Quantity: {}'
                                            },
                                            {
                                                selector: 'div.qs-widget-dropdown-wrapper span[data-action="qs-widget-dropdown-decl"]',
                                                add_text: true,
                                                clickable: true,
                                                use_root: true,
                                                name: 'from_text',
                                                text_format: 'Drop Down Option {}'
                                            },
                                            {
                                                selector: 'div[id^="qs-widget-quantity-container-atfc"] span[data-action="qs-widget-quantity-changelink-decl"]',
                                                add_text: true,
                                                clickable: true,
                                                use_root: true,
                                                name: 'from_text'
                                            },
                                            {
                                                selector: 'div[id^="qs-widget-summary-container-atfc"] span[id^="qs-widget-summary-atc-atfc"]',
                                                add_text: true,
                                                clickable: true,
                                                use_root: true,
                                                name: 'from_text'
                                            },
                                            {
                                                selector: "input[aria-label='Add']",
                                                add_text: true,
                                                text_js: function (element) {
                                                    if (element.hasAttribute('aria-label')) {
                                                        return element.getAttribute('aria-label');
                                                    }
                                                    return '';
                                                },
                                                clickable: true,
                                                name: 'increase_quantity_by_one'
                                            }
                                        ]
                                    }
                                ],
                                generate_metadata: (em) => {
                                    var _a, _b, _c;
                                    const parentTitleEm = (_a = em
                                        .closest('div[id^="featured"]')) === null || _a === void 0 ? void 0 : _a.querySelector('div[id^="detailContentWrapper"] a[id^="title"] span.a-truncate-full');
                                    const parentTitle = (_b = parentTitleEm === null || parentTitleEm === void 0 ? void 0 : parentTitleEm.innerText) === null || _b === void 0 ? void 0 : _b.toLowerCase().replace(/[^\w]+/g, '_');
                                    const asinEm = em.querySelector('div[class*="delightFaceout"]');
                                    const asin = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin');
                                    const priceEm = em.querySelector('span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)');
                                    const price = (_c = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _c === void 0 ? void 0 : _c.replace(/[\n]/g, '');
                                    const titleEm = em.querySelector("a[id^='title'] span.a-truncate-full");
                                    const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
                                    const urlEm = em.querySelector("a[id^='title']");
                                    const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
                                    const deliveryEm = em.querySelector('#udmDeliveryMessageComponent');
                                    const delivery = deliveryEm === null || deliveryEm === void 0 ? void 0 : deliveryEm.innerText.replace(/[\n]/g, ' ');
                                    return {
                                        name: parentTitle + '.similar_items',
                                        data: { title, asin, price, url, delivery }
                                    };
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        selector: '#snsUpsellModal',
        name: 'subscribe_and_save_popover',
        children: [
            {
                selector: 'div[class*="modalHeader"]',
                children: [
                    {
                        selector: 'span[class*="modalHeaderText"]',
                        add_text: true
                    },
                    {
                        selector: 'span[data-action="a-popover-close"]',
                        add_text: true,
                        clickable: true,
                        text_format: 'Close',
                        name: 'from_text'
                    }
                ]
            },
            {
                selector: 'div[class*="modalContent"]',
                direct_child: true,
                children: [
                    {
                        selector: 'div:not([class*="buttonContainer"]):not(:has(select))',
                        add_text: true
                    },
                    {
                        selector: 'select',
                        name: 'drop_down_list'
                    },
                    // {
                    //   selector: 'span.a-dropdown-prompt',
                    //   name: 'open_drop_down_list',
                    //   clickable: true,
                    //   add_text: true,
                    //   text_format: "Delivery every: {}",
                    // },
                    {
                        selector: 'div[class*="buttonContainer"]',
                        children: [
                            {
                                selector: 'div[class*="cancelButtonContainer"] input',
                                add_text: true,
                                text_format: 'Cancel',
                                clickable: true,
                                name: 'from_text'
                            },
                            {
                                selector: 'div[class*="subscriptionButtonContainer"] input[name="submit.addToCart"]',
                                add_text: true,
                                text_format: 'Add Subscription to Cart',
                                clickable: true,
                                name: 'from_text'
                            }
                        ]
                    }
                ]
            }
        ],
        generate_metadata: (em) => {
            var _a, _b;
            const asinEm = em.querySelector('div[class*="modalContent"]');
            const asin = (_b = (_a = asinEm === null || asinEm === void 0 ? void 0 : asinEm.id) === null || _a === void 0 ? void 0 : _a.split('-')[1]) === null || _b === void 0 ? void 0 : _b.trim();
            return { name: 'popover_item', data: { asin } };
        }
    }
];
const popular_products = [
    {
        selector: 'head',
        children: [
            {
                selector: 'title',
                add_text: true
            }
        ]
    },
    {
        selector: 'body',
        children: [
            nav,
            cart_side_bar,
            {
                selector: '#zg_header',
                name: 'categories',
                children: [
                    {
                        selector: 'li a',
                        clickable: true,
                        name: 'from_text',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'div[class*="zg-banner-landing-page-header"]',
                add_text: true
            },
            {
                selector: 'div[class*="g-nav-tree-all_style_zg-browse-root"]',
                name: 'departments',
                children: [
                    {
                        selector: 'div[class*="zg-nav-tree-all_style_zg-root-browse-item"] > a, div[class*="zg-nav-tree-all_style_zg-browse-item"] > a',
                        add_text: true,
                        clickable: true,
                        name: 'from_text'
                    },
                    {
                        selector: 'div[class*="zg-nav-tree-all_style_zg-root-browse-item"] > span, div[class*="zg-nav-tree-all_style_zg-browse-item"] > span',
                        name: 'from_text',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'div[id^="CardInstance"]',
                text_selector: 'h2.a-carousel-heading, h1',
                name: 'from_text',
                children: [
                    {
                        selector: 'h2.a-carousel-heading, h1',
                        add_text: true
                    },
                    {
                        selector: 'div.a-carousel-header-row a',
                        add_text: true,
                        clickable: true,
                        name: 'from_text'
                    },
                    carousel_card
                ]
            }
        ]
    }
];
const recipes = [
    {
        match: '/',
        match_method: 'url',
        match_with_ref: true,
        selector: 'html',
        children: [
            {
                selector: 'head',
                children: [
                    {
                        selector: 'title',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'body',
                children: [
                    nav,
                    cart_side_bar,
                    {
                        selector: 'div.gw-col',
                        text_selector: 'h1 span.a-truncate-full, h2 span.a-truncate-full, h3 span.a-truncate-full, h1:not(:has(span.a-truncate-full)), h2:not(:has(span.a-truncate-full)), h3:not(:has(span.a-truncate-full))',
                        name: 'from_text',
                        children: [
                            {
                                selector: 'h1 span.a-truncate-full, h2 span.a-truncate-full, h3 span.a-truncate-full, h1:not(:has(span.a-truncate-full)), h2:not(:has(span.a-truncate-full)), h3:not(:has(span.a-truncate-full))',
                                add_text: true
                            },
                            {
                                selector: 'a',
                                add_text: true,
                                clickable: true,
                                name: 'from_text',
                                text_js: (em) => {
                                    var _a, _b;
                                    return (em.getAttribute('aria-label') ||
                                        ((_a = em.querySelector('img')) === null || _a === void 0 ? void 0 : _a.alt) ||
                                        ((_b = em.querySelector('span.a-truncate-full')) === null || _b === void 0 ? void 0 : _b.innerText) ||
                                        em.innerText ||
                                        '');
                                }
                            }
                        ]
                    },
                    {
                        selector: 'div[data-card-metrics-id*="rhf"]',
                        text_selector: 'h2.a-carousel-heading',
                        name: 'from_text',
                        children: [
                            {
                                selector: 'h2.a-carousel-heading',
                                add_text: true
                            },
                            carousel_card
                        ]
                    },
                    {
                        selector: 'div[data-card-metrics-id*="rvi"]',
                        text_selector: 'h2.a-carousel-heading',
                        name: 'from_text',
                        children: [
                            {
                                selector: 'h2.a-carousel-heading',
                                add_text: true
                            },
                            {
                                selector: 'a',
                                clickable: true,
                                add_text: true,
                                name: 'from_text',
                                text_js: (em) => {
                                    var _a;
                                    return ((_a = em.querySelector('img')) === null || _a === void 0 ? void 0 : _a.alt) || em.innerText || '';
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        match: '/fmc/storefront',
        match_method: 'url',
        match_with_ref: true,
        selector: 'html',
        children: [
            {
                selector: 'head',
                children: [
                    {
                        selector: 'title',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'body',
                children: [nav, cart_side_bar]
            }
        ]
    },
    {
        match: '/s',
        match_method: 'url',
        selector: 'html',
        children: [
            {
                selector: 'head',
                children: [
                    {
                        selector: 'title',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'body',
                children: [
                    nav,
                    cart_side_bar,
                    {
                        selector: 'div.sf-rib-v1-toolbar',
                        name: 'refinements_toolbar',
                        children: [
                            {
                                selector: 'span[data-csa-c-slot-id="nav-rib"], div[data-csa-c-slot-id="nav-rib"], a.sf-clear-all',
                                add_text: true,
                                clickable: true,
                                name: 'from_text',
                                text_js: (em) => {
                                    if (em.getAttribute('data-csa-c-content-id') == 's-all-filters') {
                                        return 'Show All Filters';
                                    }
                                    return em.getAttribute('aria-label') || em.innerText || '';
                                }
                            },
                            {
                                selector: 'div.sf-rib-v1-dropdown-main-container',
                                name: 'drop_down_lists',
                                children: [
                                    {
                                        selector: 'div.a-section.a-spacing-none',
                                        name: 'from_text',
                                        text_selector: 'div.sf-rib-v1-dropdown-popup-title-container',
                                        direct_child: true,
                                        children: [
                                            {
                                                selector: 'div.sf-rib-v1-dropdown-popup-title-container',
                                                add_text: true
                                            },
                                            {
                                                selector: 'ul span[role="listitem"]',
                                                clickable: true,
                                                add_text: true,
                                                name: 'from_text',
                                                children: [
                                                    {
                                                        selector: 'input[type="checkbox"]'
                                                    }
                                                ]
                                            },
                                            {
                                                selector: 'div.sf-rib-v1-range-slider-label-container',
                                                add_text: true
                                            },
                                            {
                                                selector: 'div.s-slider-container div.s-lower-bound input',
                                                name: 'price_min_value',
                                                add_text: true,
                                                clickable: true,
                                                keep_attr: ['min', 'max', 'step'],
                                                override_attr: {
                                                    step_values: (em) => {
                                                        const formEm = em.closest('form');
                                                        if (formEm) {
                                                            const prop = formEm.getAttribute('data-slider-props');
                                                            if (prop) {
                                                                const steps = JSON.parse(prop).stepLabels;
                                                                return steps;
                                                            }
                                                        }
                                                        return '';
                                                    },
                                                    current_value: (em) => {
                                                        const value = Number.parseInt(em.getAttribute('value'));
                                                        if (value !== null) {
                                                            const formEm = em.closest('form');
                                                            if (formEm) {
                                                                const prop = formEm.getAttribute('data-slider-props');
                                                                if (prop) {
                                                                    const steps = JSON.parse(prop).stepLabels;
                                                                    return steps[value];
                                                                }
                                                            }
                                                        }
                                                        return '';
                                                    }
                                                }
                                            },
                                            {
                                                selector: 'div.s-slider-container div.s-upper-bound input',
                                                name: 'price_min_value',
                                                add_text: true,
                                                clickable: true,
                                                keep_attr: ['min', 'max', 'step'],
                                                override_attr: {
                                                    step_values: (em) => {
                                                        const formEm = em.closest('form');
                                                        if (formEm) {
                                                            const prop = formEm.getAttribute('data-slider-props');
                                                            if (prop) {
                                                                const steps = JSON.parse(prop).stepLabels;
                                                                return steps;
                                                            }
                                                        }
                                                        return '';
                                                    },
                                                    current_value: (em) => {
                                                        const value = Number.parseInt(em.getAttribute('value'));
                                                        if (value !== null) {
                                                            const formEm = em.closest('form');
                                                            if (formEm) {
                                                                const prop = formEm.getAttribute('data-slider-props');
                                                                if (prop) {
                                                                    const steps = JSON.parse(prop).stepLabels;
                                                                    return steps[value];
                                                                }
                                                            }
                                                        }
                                                        return '';
                                                    }
                                                }
                                            },
                                            {
                                                selector: 'div.sf-rib-v1-dropdown-buttons button, div.sf-rib-v1-dropdown-buttons input',
                                                name: 'from_text',
                                                add_text: true,
                                                clickable: true
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        selector: '#s-refinements',
                        name: 'refinements',
                        children: [
                            {
                                selector: '#topRefinements\\/0',
                                name: 'top_refinements',
                                add_text: 'true',
                                text_format: 'Recently used filters',
                                children: [
                                    {
                                        selector: 'li',
                                        add_text: true,
                                        name: 'from_text',
                                        clickable: true,
                                        text_js: function (element) {
                                            try {
                                                let text = '';
                                                if (!element) {
                                                    return text;
                                                }
                                                const aChild = element.querySelector('a.a-link-normal.s-navigation-item');
                                                if (element.innerText && element.innerText.trim()) {
                                                    text += element.innerText.trim();
                                                    if (aChild && aChild.hasAttribute('title')) {
                                                        text += ' ';
                                                        text += aChild.getAttribute('title');
                                                    }
                                                }
                                                else {
                                                    const aChild = element.querySelector('a.a-link-normal.s-navigation-item');
                                                    if (aChild && aChild.hasAttribute('title')) {
                                                        text += aChild.getAttribute('title');
                                                    }
                                                }
                                                return text;
                                            }
                                            catch (e) {
                                                console.log(e);
                                                return '';
                                            }
                                        },
                                        children: [
                                            {
                                                selector: "input[type='checkbox']"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                selector: 'div.a-section.a-spacing-none:not(:has(#n-title)):has(span.a-size-base.a-color-base.puis-bold-weight-text):has(ul span.a-declarative > span > li):not(#reviewsRefinements):not(#departments):not(#priceRefinements):not(#filters)',
                                name: 'from_text',
                                text_selector: 'span.a-size-base.a-color-base.puis-bold-weight-text',
                                children: refinement_option
                            },
                            {
                                selector: '#departments',
                                name: 'departments',
                                add_text: true,
                                text_format: 'Department',
                                children: [
                                    {
                                        selector: 'li a',
                                        add_text: true,
                                        name: 'from_text',
                                        clickable: true,
                                        generate_metadata: (em) => {
                                            var _a;
                                            const selected = em === null || em === void 0 ? void 0 : em.getAttribute('aria-current');
                                            const title = (_a = em === null || em === void 0 ? void 0 : em.innerText) === null || _a === void 0 ? void 0 : _a.trim();
                                            const url = em === null || em === void 0 ? void 0 : em.getAttribute('href');
                                            if (selected && selected == 'true') {
                                                return {
                                                    name: 'refinements.departments',
                                                    data: { title, selected: true, url }
                                                };
                                            }
                                            else {
                                                return {
                                                    name: 'refinements.departments',
                                                    data: { title, selected: false, url }
                                                };
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                selector: '#reviewsRefinements',
                                name: 'reviews_refinements',
                                add_text: true,
                                text_format: 'Customer Reviews',
                                children: [
                                    {
                                        selector: 'a.s-navigation-clear-link',
                                        add_text: true,
                                        name: 'clear_selection',
                                        clickable: true
                                    },
                                    {
                                        selector: "li a[aria-current='true']",
                                        add_text: true,
                                        name: 'from_text',
                                        clickable: true,
                                        // text_format: 'Clear Option {}',
                                        generate_metadata: (em) => {
                                            var _a, _b;
                                            const title = (_b = (_a = em === null || em === void 0 ? void 0 : em.innerText) === null || _a === void 0 ? void 0 : _a.replace(/\n/g, ' ')) === null || _b === void 0 ? void 0 : _b.trim();
                                            const url = em === null || em === void 0 ? void 0 : em.getAttribute('href');
                                            return { name: 'refinements.reviews', data: { title, selected: true, url } };
                                        }
                                    },
                                    {
                                        selector: "li a[aria-current='false']",
                                        add_text: true,
                                        name: 'from_text',
                                        clickable: true,
                                        generate_metadata: (em) => {
                                            var _a, _b;
                                            const title = (_b = (_a = em === null || em === void 0 ? void 0 : em.innerText) === null || _a === void 0 ? void 0 : _a.replace(/\n/g, ' ')) === null || _b === void 0 ? void 0 : _b.trim();
                                            const url = em === null || em === void 0 ? void 0 : em.getAttribute('href');
                                            return { name: 'refinements.reviews', data: { title, selected: false, url } };
                                        }
                                    }
                                ]
                            },
                            {
                                selector: '#priceRefinements',
                                name: 'price_refinements',
                                children: [
                                    // 2 cases: selection / slider
                                    {
                                        selector: '#p_36-title, div.sf-refinement-heading span',
                                        add_text: true,
                                        name: 'price_heading'
                                    },
                                    // case 1: selection
                                    {
                                        selector: "div[aria-labelledby='p_36-title'] > a",
                                        add_text: true,
                                        name: 'clear_price_selection',
                                        clickable: true
                                    },
                                    {
                                        selector: "ul[aria-labelledby='p_36-title'] a[aria-current='true']",
                                        add_text: true,
                                        name: 'from_text',
                                        clickable: true,
                                        // text_format: 'Clear Option {}',
                                        generate_metadata: (em) => {
                                            var _a;
                                            const title = (_a = em === null || em === void 0 ? void 0 : em.innerText) === null || _a === void 0 ? void 0 : _a.trim();
                                            const url = em === null || em === void 0 ? void 0 : em.getAttribute('href');
                                            return { name: 'refinements.price', data: { title, selected: true, url } };
                                        }
                                    },
                                    {
                                        selector: "ul[aria-labelledby='p_36-title'] a[aria-current='false']",
                                        add_text: true,
                                        name: 'from_text',
                                        clickable: true,
                                        generate_metadata: (em) => {
                                            var _a;
                                            const title = (_a = em === null || em === void 0 ? void 0 : em.innerText) === null || _a === void 0 ? void 0 : _a.trim();
                                            const url = em === null || em === void 0 ? void 0 : em.getAttribute('href');
                                            return { name: 'refinements.price', data: { title, selected: false, url } };
                                        }
                                    },
                                    // case 2: slider
                                    {
                                        selector: 'div.sf-range-slider-row:nth-of-type(1)',
                                        add_text: true,
                                        generate_metadata: (em) => {
                                            var _a;
                                            const range = (_a = em === null || em === void 0 ? void 0 : em.innerText) === null || _a === void 0 ? void 0 : _a.replace(/\s+/g, '');
                                            return { name: 'refinements.price', data: { title: 'price_range', range } };
                                        }
                                    },
                                    {
                                        selector: 'div.sf-range-slider-row:nth-of-type(2) div.s-lower-bound input',
                                        name: 'price_min_value',
                                        add_text: true,
                                        // text_js: (element) => {
                                        //   const text = element.getAttribute("aria-valuetext")
                                        //   console.log(text)
                                        //   if (text) {
                                        //     return text;
                                        //   } else {
                                        //     return "";
                                        //   }
                                        // },
                                        clickable: true,
                                        keep_attr: ['min', 'max', 'step'],
                                        override_attr: {
                                            step_values: (em) => {
                                                const formEm = em.closest('form');
                                                if (formEm) {
                                                    const prop = formEm.getAttribute('data-slider-props');
                                                    if (prop) {
                                                        const steps = JSON.parse(prop).stepLabels;
                                                        return steps;
                                                    }
                                                }
                                                return '';
                                            },
                                            current_value: (em) => {
                                                const value = Number.parseInt(em.getAttribute('value'));
                                                if (value !== null) {
                                                    const formEm = em.closest('form');
                                                    if (formEm) {
                                                        const prop = formEm.getAttribute('data-slider-props');
                                                        if (prop) {
                                                            const steps = JSON.parse(prop).stepLabels;
                                                            return steps[value];
                                                        }
                                                    }
                                                }
                                                return '';
                                            }
                                        }
                                    },
                                    {
                                        selector: 'div.sf-range-slider-row:nth-of-type(2) div.s-upper-bound input',
                                        name: 'price_max_value',
                                        add_text: true,
                                        // text_js: (element) => {
                                        //   const text = element.getAttribute("aria-valuetext")
                                        //   if (text) {
                                        //     return text;
                                        //   } else {
                                        //     return "";
                                        //   }
                                        // },
                                        clickable: true,
                                        keep_attr: ['min', 'max', 'step'],
                                        override_attr: {
                                            step_values: (em) => {
                                                const formEm = em.closest('form');
                                                if (formEm) {
                                                    const prop = formEm.getAttribute('data-slider-props');
                                                    if (prop) {
                                                        const steps = JSON.parse(prop).stepLabels;
                                                        return steps;
                                                    }
                                                }
                                                return '';
                                            },
                                            current_value: (em) => {
                                                const value = Number.parseInt(em.getAttribute('value'));
                                                if (value !== null) {
                                                    const formEm = em.closest('form');
                                                    if (formEm) {
                                                        const prop = formEm.getAttribute('data-slider-props');
                                                        if (prop) {
                                                            const steps = JSON.parse(prop).stepLabels;
                                                            return steps[value];
                                                        }
                                                    }
                                                }
                                                return '';
                                            }
                                        }
                                    },
                                    {
                                        selector: 'div.sf-submit-range-button input',
                                        name: 'submit_price_range',
                                        add_text: true,
                                        text_format: 'Go',
                                        clickable: true
                                    },
                                    {
                                        selector: 'div.sf-reset-range-link a',
                                        name: 'reset_price_selection',
                                        add_text: true,
                                        clickable: true
                                    },
                                    {
                                        selector: '#p_n_deal_type-title',
                                        add_text: true,
                                        name: 'deals_discounts_heading'
                                    },
                                    {
                                        selector: "div[aria-labelledby='p_n_deal_type-title'] > a",
                                        add_text: true,
                                        name: 'clear_deals_discount_selection',
                                        clickable: true
                                    },
                                    {
                                        selector: "ul[aria-labelledby='p_n_deal_type-title'] a[aria-current='true']",
                                        add_text: true,
                                        name: 'from_text',
                                        clickable: true,
                                        // text_format: 'Clear Option {}',
                                        generate_metadata: (em) => {
                                            var _a;
                                            const title = (_a = em === null || em === void 0 ? void 0 : em.innerText) === null || _a === void 0 ? void 0 : _a.trim();
                                            const url = em === null || em === void 0 ? void 0 : em.getAttribute('href');
                                            return { name: 'refinements.price', data: { title, selected: true, url } };
                                        }
                                    },
                                    {
                                        selector: "ul[aria-labelledby='p_n_deal_type-title'] a[aria-current='false']",
                                        add_text: true,
                                        name: 'from_text',
                                        clickable: true,
                                        generate_metadata: (em) => {
                                            var _a;
                                            const title = (_a = em === null || em === void 0 ? void 0 : em.innerText) === null || _a === void 0 ? void 0 : _a.trim();
                                            const url = em === null || em === void 0 ? void 0 : em.getAttribute('href');
                                            return { name: 'refinements.price', data: { title, selected: false, url } };
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        selector: 'div:has(> span[data-component-type="s-searchgrid-carousel"])',
                        name: 'from_text',
                        text_selector: 'div.sg-row h2',
                        children: [
                            {
                                selector: 'div.sg-row h2',
                                add_text: true
                            },
                            carousel_card
                        ]
                    },
                    {
                        selector: 'div.s-main-slot.s-result-list.s-search-results',
                        name: 'search_results',
                        children: [
                            {
                                selector: 'div.AdHolder',
                                name: 'ads',
                                children: [
                                    {
                                        selector: 'div[data-asin]',
                                        name: 'from_text',
                                        add_text: true,
                                        clickable: true,
                                        text_js: (em) => {
                                            const titleEm = em.querySelector('img');
                                            const text = titleEm === null || titleEm === void 0 ? void 0 : titleEm.getAttribute('alt');
                                            return text.trim() || '';
                                        },
                                        generate_metadata: (em) => {
                                            const asinEm = em;
                                            const asin = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin');
                                            const titleEm = em.querySelector('img');
                                            const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.getAttribute('alt');
                                            const urlEm = em.querySelector("a[data-type='productTitle']");
                                            const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
                                            return { name: 'ads', data: { title, asin, url } };
                                        }
                                    }
                                ]
                            },
                            {
                                insert_split_marker: true,
                                insert_split_marker_every: 4,
                                selector: 'div[data-component-type="s-search-result"]',
                                text_selector: 'span.a-color-base.a-text-normal, h2.a-color-base.a-text-normal span',
                                name: 'from_text',
                                class: 'search-result',
                                children: [
                                    {
                                        selector: "div[data-cy='title-recipe'] a.a-link-normal.s-link-style.a-text-normal",
                                        add_text: true,
                                        class: 'product-name',
                                        clickable: true,
                                        name: 'product_name'
                                    },
                                    {
                                        selector: 'div.s-product-image-container, div.s-image-overlay-black',
                                        add_text: true,
                                        name: 'product_image',
                                        clickable: true,
                                        text_format: 'Product Image'
                                    },
                                    {
                                        selector: 'div.s-color-swatch-container',
                                        name: 'available_colors',
                                        children: [
                                            {
                                                selector: 'div.s-color-swatch-pad',
                                                name: 'from_text',
                                                clickable: true,
                                                add_text: true,
                                                text_js: (em) => {
                                                    const aChild = em.querySelector('a');
                                                    if (aChild) {
                                                        return aChild.getAttribute('aria-label') || '';
                                                    }
                                                    return '';
                                                }
                                            },
                                            {
                                                selector: "div[data-csa-c-type='link'] a",
                                                direct_child: true,
                                                name: 'from_text',
                                                clickable: true,
                                                add_text: true
                                            }
                                        ]
                                    },
                                    {
                                        selector: 'div.s-variations-options-elevated, div.s-variations-options-justify-content',
                                        name: 'options',
                                        add_text: true,
                                        clickable: true,
                                        click_selector: 'a'
                                    },
                                    {
                                        selector: "div[data-cy='reviews-block']",
                                        class: 'product-review',
                                        children: [
                                            {
                                                selector: 'span.a-icon-alt',
                                                add_text: true,
                                                class: 'product-rating'
                                            },
                                            {
                                                selector: 'a:has(i[data-cy="reviews-ratings-slot"])',
                                                clickable: true,
                                                name: 'product_rating'
                                            },
                                            {
                                                selector: 'span.a-size-base.s-underline-text',
                                                add_text: true,
                                                text_format: '{} reviews',
                                                class: 'product-rating-count',
                                                name: 'product_rating_count',
                                                clickable: true
                                            }
                                        ]
                                    },
                                    {
                                        selector: "div[data-cy='price-recipe']",
                                        class: 'product-price',
                                        children: [
                                            {
                                                selector: 'a.a-link-normal:has(> span.a-price > span.a-offscreen)',
                                                clickable: true,
                                                name: 'product_price',
                                                add_text: true,
                                                text_selector: 'a > span.a-price > span.a-offscreen'
                                            }
                                        ]
                                    },
                                    {
                                        selector: "div[data-cy='delivery-recipe']",
                                        add_text: true,
                                        class: 'product-delivery'
                                    },
                                    {
                                        selector: "div[data-cy='add-to-cart'] span.a-button:has(button), span[id*='add-to-cart'] input",
                                        add_text: true,
                                        clickable: true,
                                        name: 'add_to_cart'
                                    },
                                    {
                                        selector: "div[data-csa-c-content-id='s-search-see-details-button'] a",
                                        add_text: true,
                                        clickable: true,
                                        name: 'see_options'
                                    },
                                    {
                                        selector: 'div[name="ax-qs"]',
                                        children: [
                                            {
                                                selector: "button[aria-label='Decrease quantity by one']",
                                                add_text: true,
                                                text_js: function (element) {
                                                    if (element.hasAttribute('aria-label')) {
                                                        return element.getAttribute('aria-label');
                                                    }
                                                    return '';
                                                },
                                                clickable: true,
                                                name: 'decrease_quantity_by_one'
                                            },
                                            {
                                                selector: "div[role='spinbutton']",
                                                add_text: true,
                                                text_format: 'Current Quantity: {}'
                                            },
                                            {
                                                selector: "button[aria-label='Increase quantity by one']",
                                                add_text: true,
                                                text_js: function (element) {
                                                    if (element.hasAttribute('aria-label')) {
                                                        return element.getAttribute('aria-label');
                                                    }
                                                    return '';
                                                },
                                                clickable: true,
                                                name: 'increase_quantity_by_one'
                                            }
                                        ]
                                    }
                                ],
                                generate_metadata: (em) => {
                                    const asin = em.getAttribute('data-asin');
                                    const priceEm = em.querySelector("div[data-cy='price-recipe'] a.a-link-normal > span.a-price > span.a-offscreen");
                                    const price = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText;
                                    const titleEm = em.querySelector('span.a-color-base.a-text-normal, h2.a-color-base.a-text-normal span');
                                    const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
                                    const urlEm = em.querySelector("div[data-cy='title-recipe'] a.a-link-normal.s-link-style.a-text-normal");
                                    const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
                                    const deliveryEm = em.querySelector("div[data-cy='delivery-recipe']");
                                    const delivery = deliveryEm === null || deliveryEm === void 0 ? void 0 : deliveryEm.innerText.replace(/[\n]/g, ' ');
                                    return { name: 'search_results', data: { title, asin, price, url, delivery } };
                                }
                            }
                        ]
                    },
                    {
                        selector: 'span.s-pagination-strip',
                        name: 'pagination',
                        children: [
                            {
                                selector: '.s-pagination-item',
                                add_text: true,
                                name: 'from_text',
                                clickable: true
                            }
                        ]
                    },
                    {
                        selector: 'div.a-popover-wrapper',
                        name: 'popover',
                        children: [
                            {
                                selector: 'header.a-popover-header button',
                                add_text: true,
                                clickable: true,
                                name: 'close',
                                text_format: 'Close'
                            },
                            {
                                selector: 'div.a-popover-inner div.puis-atc-size-variation',
                                children: [
                                    {
                                        selector: 'div.a-row:nth-of-type(1)',
                                        direct_child: true,
                                        children: [
                                            {
                                                selector: "span[data-component-type='s-product-image'] a",
                                                name: 'product_image',
                                                add_text: true,
                                                clickable: true,
                                                text_format: 'Product Image'
                                            },
                                            {
                                                selector: 'div.puis-size-variation-title a',
                                                name: 'product_title',
                                                add_text: true,
                                                clickable: true
                                            },
                                            {
                                                selector: 'div.puis-size-variation-product-spec',
                                                name: 'product_specification',
                                                add_text: true,
                                                clickable: true,
                                                click_selector: 'a'
                                            }
                                        ]
                                    },
                                    {
                                        selector: 'div.a-row:nth-of-type(2)',
                                        direct_child: true,
                                        children: [
                                            {
                                                selector: 'div.puis-size-variation-product-options',
                                                name: 'from_text',
                                                text_selector: 'span.a-size-base.a-color-secondary',
                                                children: [
                                                    {
                                                        selector: 'span.a-size-base.a-color-secondary',
                                                        add_text: true
                                                    },
                                                    {
                                                        selector: 'span.a-dropdown-prompt',
                                                        add_text: true
                                                    },
                                                    {
                                                        selector: 'select',
                                                        name: 'drop_down_list'
                                                    }
                                                ]
                                            },
                                            {
                                                selector: 'div.puis-size-variation-price a.a-text-normal',
                                                name: 'price',
                                                clickable: true,
                                                add_text: true,
                                                text_selector: "span[aria-hidden='true']"
                                            },
                                            {
                                                selector: 'div.puis-size-variation-delivery',
                                                add_text: true,
                                                name: 'delivery'
                                            }
                                        ]
                                    },
                                    {
                                        selector: 'div.a-row:nth-of-type(3)',
                                        direct_child: true,
                                        children: [
                                            {
                                                selector: 'span.s-no-js-hide input',
                                                name: 'cancel',
                                                clickable: true,
                                                add_text: true,
                                                text_format: 'Cancel'
                                            },
                                            {
                                                selector: 'div.puis-atcb-add-container button',
                                                name: 'add_to_cart',
                                                clickable: true,
                                                add_text: true
                                            }
                                        ]
                                    }
                                ]
                            }
                        ],
                        generate_metadata: (em) => {
                            var _a, _b;
                            const asin = (_a = em.querySelector('div[data-asin]')) === null || _a === void 0 ? void 0 : _a.getAttribute('data-asin');
                            const priceEm = em.querySelector('div.a-popover-inner div.puis-atc-size-variation div.a-row:nth-of-type(2) div.puis-size-variation-price a.a-text-normal span[aria-hidden="true"]');
                            const price = (_b = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _b === void 0 ? void 0 : _b.replace(/[\n]/g, '');
                            const titleEm = em.querySelector('div.a-popover-inner div.puis-atc-size-variation div.a-row:nth-of-type(1) div.puis-size-variation-title a');
                            const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
                            const urlEm = titleEm;
                            const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
                            const quantityEm = em.querySelector('div[data-action="a-dropdown-button"]');
                            const optionsEm = em.querySelectorAll('div.a-popover-inner div.puis-atc-size-variation div.a-row:nth-of-type(1) div.puis-size-variation-product-spec, div.a-popover-inner div.puis-atc-size-variation div.a-row:nth-of-type(2) div.puis-size-variation-product-options');
                            const options = [];
                            for (const optionEm of optionsEm) {
                                const optionKeyEm = optionEm === null || optionEm === void 0 ? void 0 : optionEm.querySelector('span.a-size-base.a-color-secondary');
                                const optionValueEm = optionEm === null || optionEm === void 0 ? void 0 : optionEm.querySelector('span.a-size-base.a-color-base, span.a-dropdown-prompt');
                                const optionKey = optionKeyEm === null || optionKeyEm === void 0 ? void 0 : optionKeyEm.innerText.replace(/[:\n]/g, '').trim();
                                const optionValue = optionValueEm === null || optionValueEm === void 0 ? void 0 : optionValueEm.innerText.replace(/[:\n]/g, '').trim();
                                const option = { [optionKey]: optionValue };
                                options.push(option);
                            }
                            return {
                                name: 'popover_item',
                                data: { title, asin, price, url, options }
                            };
                        }
                    }
                ]
            }
        ]
    },
    {
        match: '#productTitle, #titleBlock',
        match_text: '',
        selector: 'html',
        children: [
            {
                selector: 'head',
                children: [
                    {
                        selector: 'title',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'body',
                children: [
                    nav,
                    cart_side_bar,
                    {
                        selector: '#centerCol',
                        class: 'product-card',
                        children: [
                            {
                                selector: '#title',
                                add_text: true,
                                keep_attr: ['id'],
                                generate_metadata: (em) => {
                                    return {
                                        name: 'product_details',
                                        data: { title: (em === null || em === void 0 ? void 0 : em.innerText) || '' }
                                    };
                                }
                            },
                            {
                                selector: '#bondByLine_feature_div',
                                add_text: true,
                                clickable: true,
                                name: 'product_brand',
                                generate_metadata: (em) => {
                                    return {
                                        name: 'product_details',
                                        data: { brand: (em === null || em === void 0 ? void 0 : em.innerText) || '' }
                                    };
                                }
                            },
                            {
                                selector: '#bondByLine_feature_div',
                                add_text: true,
                                name: 'product_title',
                                generate_metadata: (em) => {
                                    return {
                                        name: 'product_details',
                                        data: { title: (em === null || em === void 0 ? void 0 : em.innerText) || '' }
                                    };
                                }
                            },
                            {
                                selector: '#averageCustomerReviews',
                                class: 'review',
                                children: [
                                    {
                                        selector: 'span.a-icon-alt',
                                        add_text: true
                                    },
                                    {
                                        selector: '#acrCustomerReviewText',
                                        add_text: true
                                    }
                                ]
                            },
                            {
                                selector: '#apex_desktop > div[data-csa-c-slot-id="apex_dp_center_column"]' +
                                    ' > div[class="offersConsistencyEnabled"] > div:not([style="display:none;"]):not([style="display: none;"]) ' +
                                    '#corePriceDisplay_desktop_feature_div:has(#sns-base-price) #sns-base-price span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay, ' +
                                    '#apex_desktop > div[data-csa-c-slot-id="apex_dp_center_column"]' +
                                    ' > div[class="offersConsistencyEnabled"] > div:not([style="display:none;"]):not([style="display: none;"]) ' +
                                    '#corePriceDisplay_desktop_feature_div:not(:has(#sns-base-price)) span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay, ' +
                                    '#apex_desktop > div[data-csa-c-slot-id="apex_dp_center_column"] > div[data-csa-c-content-id="apex_with_rio_cx"] ' +
                                    '#corePriceDisplay_desktop_feature_div span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay',
                                add_text: true,
                                text_format: 'Price: {}',
                                class: 'product-price',
                                generate_metadata: (em) => {
                                    var _a;
                                    return {
                                        name: 'product_details',
                                        data: { price: ((_a = em === null || em === void 0 ? void 0 : em.innerText) === null || _a === void 0 ? void 0 : _a.replace(/\n/g, '')) || '' }
                                    };
                                },
                                text_js: (em) => {
                                    var _a;
                                    return ((_a = em === null || em === void 0 ? void 0 : em.innerText) === null || _a === void 0 ? void 0 : _a.replace(/\n/g, '')) || '';
                                }
                            },
                            {
                                selector: 'span.bondApexPrice span.a-offscreen',
                                add_text: true,
                                text_format: 'Price: {}',
                                class: 'product-price',
                                generate_metadata: (em) => {
                                    var _a;
                                    return {
                                        name: 'product_details',
                                        data: { price: ((_a = em === null || em === void 0 ? void 0 : em.innerText) === null || _a === void 0 ? void 0 : _a.replace(/\n/g, '')) || '' }
                                    };
                                }
                            },
                            {
                                selector: '#twister',
                                class: 'product-options',
                                name: 'product_options',
                                children: [
                                    {
                                        selector: 'div.a-section',
                                        text_selector: 'div.a-row:has(label.a-form-label) > label.a-form-label',
                                        name: 'from_text',
                                        direct_child: true,
                                        generate_metadata: (em) => {
                                            var _a, _b, _c;
                                            const label = (_a = em
                                                .querySelector('div.a-row:has(label.a-form-label) label.a-form-label')) === null || _a === void 0 ? void 0 : _a.innerHTML.replace(/[:\n]/g, '').trim();
                                            let value = (_b = em.querySelector('div.a-row:has(label.a-form-label) span.selection')) === null || _b === void 0 ? void 0 : _b.innerHTML;
                                            if (value === undefined || value === '') {
                                                const options = (_c = em.querySelector('select')) === null || _c === void 0 ? void 0 : _c.querySelectorAll('option');
                                                // console.log(options);
                                                if (options) {
                                                    for (const option of options) {
                                                        // console.log(option);
                                                        if (option && option.getAttribute('selected') !== null) {
                                                            value = option.innerHTML.trim();
                                                        }
                                                    }
                                                }
                                                // console.log(value);
                                            }
                                            return { name: 'product_options', data: { [label]: value.trim() } };
                                        },
                                        children: [
                                            {
                                                selector: 'div.a-row:has(label.a-form-label)',
                                                children: [
                                                    {
                                                        selector: 'label.a-form-label',
                                                        add_text: true
                                                    },
                                                    {
                                                        selector: 'span.selection',
                                                        add_text: true
                                                    }
                                                ]
                                            },
                                            {
                                                selector: 'select',
                                                add_text: true,
                                                // clickable: true,
                                                name: 'drop_down_list'
                                            },
                                            {
                                                selector: 'ul',
                                                name: 'button_list',
                                                children: [
                                                    {
                                                        selector: 'li button',
                                                        add_text: true,
                                                        clickable: true,
                                                        name: 'from_text',
                                                        text_js: function (element) {
                                                            let text = '';
                                                            if (element.innerText.trim()) {
                                                                text += element.innerText.trim();
                                                                const imgChild = element.querySelector('img');
                                                                if (imgChild && imgChild.alt) {
                                                                    text += ' ';
                                                                    text += imgChild.alt;
                                                                }
                                                            }
                                                            else {
                                                                const imgChild = element.querySelector('img');
                                                                if (imgChild && imgChild.alt) {
                                                                    text += imgChild.alt;
                                                                }
                                                            }
                                                            return text.trim();
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            // handle new twisters
                            {
                                selector: '#twister-plus-inline-twister',
                                class: 'product-options',
                                name: 'product_options',
                                children: [
                                    {
                                        selector: 'div.inline-twister-row',
                                        text_selector: 'div.inline-twister-dim-title-value-truncate-expanded span.a-size-base.a-color-secondary',
                                        name: 'from_text',
                                        direct_child: true,
                                        generate_metadata: (em) => {
                                            var _a, _b, _c;
                                            const label = (_a = em
                                                .querySelector('div.inline-twister-dim-title-value-truncate-expanded span.a-size-base.a-color-secondary')) === null || _a === void 0 ? void 0 : _a.innerHTML.replace(/[:\n]/g, '').trim();
                                            let value = (_b = em.querySelector('div.inline-twister-dim-title-value-truncate-expanded span.inline-twister-dim-title-value')) === null || _b === void 0 ? void 0 : _b.innerHTML;
                                            if (value === undefined || value === '') {
                                                const options = (_c = em.querySelector('select')) === null || _c === void 0 ? void 0 : _c.querySelectorAll('option');
                                                // console.log(options);
                                                if (options) {
                                                    for (const option of options) {
                                                        // console.log(option);
                                                        if (option && option.getAttribute('selected') !== null) {
                                                            value = option.innerHTML.trim();
                                                        }
                                                    }
                                                }
                                                // console.log(value);
                                            }
                                            return { name: 'product_options', data: { [label]: value.trim() } };
                                        },
                                        children: [
                                            {
                                                selector: 'div.inline-twister-dim-title-value-truncate-expanded',
                                                children: [
                                                    {
                                                        selector: 'span.a-size-base.a-color-secondary',
                                                        add_text: true
                                                    },
                                                    {
                                                        selector: 'span.inline-twister-dim-title-value',
                                                        add_text: true
                                                    }
                                                ]
                                            },
                                            {
                                                selector: 'select',
                                                add_text: true,
                                                // clickable: true,
                                                name: 'drop_down_list'
                                            },
                                            {
                                                selector: 'ul',
                                                name: 'button_list',
                                                children: [
                                                    {
                                                        selector: 'li:has(span.a-button:not(.aok-hidden) input)',
                                                        add_text: true,
                                                        clickable: true,
                                                        name: 'from_text',
                                                        text_js: function (element) {
                                                            const textEm = element.querySelector('span.a-button-text');
                                                            let text = '';
                                                            if (textEm.innerText.trim()) {
                                                                text += textEm.innerText.trim();
                                                                const imgChild = textEm.querySelector('img');
                                                                if (imgChild && imgChild.alt) {
                                                                    text += ' ';
                                                                    text += imgChild.alt;
                                                                }
                                                            }
                                                            else {
                                                                const imgChild = textEm.querySelector('img');
                                                                if (imgChild && imgChild.alt) {
                                                                    text += imgChild.alt;
                                                                }
                                                            }
                                                            return text.trim();
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        selector: 'div.inline-twister-singleton-header',
                                        text_selector: 'span.a-size-base.a-color-secondary',
                                        name: 'from_text',
                                        children: [
                                            {
                                                selector: 'span.a-size-base.a-color-secondary',
                                                add_text: true
                                            },
                                            {
                                                selector: 'span.inline-twister-dim-title-value-truncate',
                                                add_text: true
                                            }
                                        ],
                                        generate_metadata: (em) => {
                                            var _a, _b;
                                            const label = (_a = em
                                                .querySelector('span.a-size-base.a-color-secondary')) === null || _a === void 0 ? void 0 : _a.innerHTML.replace(/[:\n]/g, '').trim();
                                            const value = (_b = em.querySelector('span.inline-twister-dim-title-value-truncate')) === null || _b === void 0 ? void 0 : _b.innerHTML;
                                            return { name: 'product_options', data: { [label]: value.trim() } };
                                        }
                                    }
                                ]
                            },
                            {
                                selector: '#productFactsDesktopExpander ul.a-unordered-list, #featurebullets_feature_div ul.a-unordered-list, #bond-feature-bullets-desktop ul.a-unordered-list',
                                add_text: true,
                                name: 'about_this_item',
                                text_format: 'About this item: ',
                                children: [
                                    {
                                        selector: 'li',
                                        add_text: true
                                    }
                                ],
                                generate_metadata: (em) => {
                                    var _a;
                                    return {
                                        name: 'product_details',
                                        data: {
                                            bullet_list: ((_a = em === null || em === void 0 ? void 0 : em.innerText) === null || _a === void 0 ? void 0 : _a.replace(/\n/g, ' ')) || ''
                                        }
                                    };
                                }
                            }
                        ]
                    },
                    {
                        selector: '#buybox:has(div.a-tab-container):not(:has(#partialState_buybox_desktop)):not(:has(#luxury_buybox_desktop))',
                        name: 'buybox',
                        children: [
                            {
                                selector: '#tab_heading_desktop_buybox_group_1 a',
                                name: 'deliver_tab',
                                clickable: true,
                                add_text: true
                            },
                            {
                                selector: '#tab_heading_desktop_buybox_group_2 a',
                                name: 'pick_up_tab',
                                clickable: true,
                                add_text: true
                            },
                            {
                                selector: '#tab_desktop_buybox_group_1',
                                name: 'delivery',
                                add_text: true,
                                text_format: 'Delivery',
                                children: [buy_box_with_accordion, buy_box_without_accordion_delivery]
                            },
                            {
                                selector: '#tab_desktop_buybox_group_2',
                                name: 'pick_up',
                                add_text: true,
                                text_format: 'Pick Up',
                                children: [buy_box_without_accordion_pick_up]
                            }
                        ],
                        generate_metadata: (em) => {
                            const asinEm = em.querySelector('input#ASIN');
                            return {
                                name: 'product_details',
                                data: { asin: (asinEm === null || asinEm === void 0 ? void 0 : asinEm.value) || '' }
                            };
                        }
                    },
                    {
                        selector: '#buybox:not(:has(div.a-tab-container)):not(:has(#partialState_buybox_desktop)):not(:has(#luxury_buybox_desktop))',
                        name: 'buybox',
                        children: [buy_box_with_accordion, buy_box_without_accordion_delivery],
                        generate_metadata: (em) => {
                            const asinEm = em.querySelector('input#ASIN');
                            return {
                                name: 'product_details',
                                data: { asin: (asinEm === null || asinEm === void 0 ? void 0 : asinEm.value) || '' }
                            };
                        }
                    },
                    {
                        selector: '#partialState_buybox_desktop',
                        children: [
                            {
                                selector: '#partialStateBuybox div.a-section.a-text-center.a-spacing-small',
                                add_text: true
                            }
                        ],
                        generate_metadata: (em) => {
                            const asinEm = em.querySelector('input#ASIN');
                            return {
                                name: 'product_details',
                                data: { asin: (asinEm === null || asinEm === void 0 ? void 0 : asinEm.value) || '' }
                            };
                        }
                    },
                    {
                        selector: '#buybox:has(#luxury_buybox_desktop)',
                        name: 'buybox',
                        children: [
                            {
                                selector: '#bondApexPrice_feature_div',
                                add_text: true
                            },
                            {
                                selector: '#deliveryBlockMessage',
                                add_text: true
                            },
                            {
                                selector: 'span.a-dropdown-container select',
                                name: 'drop_down_list'
                            },
                            {
                                selector: '#bond-atc-button input',
                                name: 'from_text',
                                text_format: 'Add To Cart',
                                clickable: true,
                                add_text: true
                            }
                        ],
                        generate_metadata: (em) => {
                            const asinEm = em.querySelector('input#ASIN');
                            return {
                                name: 'product_details',
                                data: { asin: (asinEm === null || asinEm === void 0 ? void 0 : asinEm.value) || '' }
                            };
                        }
                    },
                    {
                        selector: '#outOfStock',
                        add_text: true,
                        text_format: 'Currently Unavailable'
                    },
                    {
                        selector: 'div.cardRoot.bucket',
                        name: 'from_text',
                        text_selector: 'h2#similarities-product-bundle-widget-title, h2.a-carousel-heading',
                        children: [
                            {
                                selector: 'h2#similarities-product-bundle-widget-title, h2.a-carousel-heading',
                                add_text: true
                            },
                            {
                                selector: 'div[class*="new-detail-faceout-box"]',
                                name: 'from_text',
                                text_selector: 'div[id^="ProductTitle"], div[class*="title-component"]',
                                children: [
                                    {
                                        selector: 'input[id^="fbtCheck"], div[class*="thematicBundle-checkbox"]',
                                        clickable: true,
                                        add_text: true,
                                        text_format: 'Checkbox',
                                        name: 'from_text'
                                    },
                                    {
                                        selector: 'a[class*="desktop-sims-fbt_fbt-desktop_image-link"], div[class*="image-background"] a',
                                        text_format: 'Product Image',
                                        clickable: true,
                                        add_text: true,
                                        name: 'from_text'
                                    },
                                    {
                                        selector: 'div[id^="ProductTitle"]:has(a), a:has(div[class*="title-component"])',
                                        clickable: true,
                                        add_text: true,
                                        name: 'product_title'
                                    },
                                    {
                                        selector: 'div[id^="ProductTitle"]:not(:has(a)) div > div[class*="title-component"]',
                                        add_text: true
                                    },
                                    {
                                        selector: 'div[class*="reviews-section"] a',
                                        clickable: true,
                                        add_text: true,
                                        text_format: 'Reviewed by {}',
                                        name: 'product_rating_count'
                                    },
                                    {
                                        selector: 'div[class*="desktop-sims-fbt_price_p13n"] span.a-price span.a-offscreen',
                                        add_text: true
                                    }
                                ]
                            },
                            {
                                selector: 'span.add-to-cart-button',
                                clickable: true,
                                add_text: true,
                                name: 'from_text'
                            }
                        ]
                    },
                    {
                        selector: 'div#dp:not(.grocery):not(.luxury) #similarities_feature_div',
                        text_selector: 'h2.a-carousel-heading, h1[class*="carousel-heading"]',
                        name: 'from_text',
                        children: [
                            {
                                selector: 'h2.a-carousel-heading, h1[class*="carousel-heading"]',
                                add_text: true
                            },
                            carousel_card
                        ]
                    },
                    {
                        selector: 'div.grocery #similarities_feature_div',
                        text_selector: 'h2.a-carousel-heading, h1[class*="carousel-heading"]',
                        name: 'from_text',
                        children: [
                            {
                                selector: 'h2.a-carousel-heading, h1[class*="carousel-heading"]',
                                add_text: true
                            },
                            fresh_carousel_card
                        ]
                    },
                    {
                        selector: 'div.luxury #similarities_feature_div',
                        text_selector: 'h2.a-carousel-heading, h1[class*="carousel-heading"]',
                        name: 'from_text',
                        children: [
                            {
                                selector: 'h2.a-carousel-heading, h1[class*="carousel-heading"]',
                                add_text: true
                            },
                            luxury_carousel_card
                        ]
                    },
                    {
                        selector: '#product-comparison_feature_div',
                        name: 'product_comparison',
                        children: [
                            {
                                selector: 'h2',
                                add_text: true
                            },
                            {
                                selector: 'tr:has(div[class^="_product-comparison-desktop_titleStyle"])',
                                children: [
                                    {
                                        selector: 'td[class*="asin"]',
                                        name: 'from_text',
                                        text_selector: 'div[class^="_product-comparison-desktop_titleStyle"]',
                                        children: [
                                            {
                                                selector: 'a > div[id^="imageContainer"]',
                                                name: 'product_image',
                                                clickable: true,
                                                add_text: true,
                                                text_format: 'Product Image'
                                            },
                                            {
                                                selector: 'div > div[id^="imageContainer"]',
                                                name: 'product_image',
                                                add_text: true,
                                                text_format: 'Product Image'
                                            },
                                            {
                                                selector: 'a > div[class^="_product-comparison-desktop_titleStyle"]',
                                                add_text: true,
                                                clickable: true,
                                                name: 'product_title'
                                            },
                                            {
                                                selector: 'div > div[class^="_product-comparison-desktop_titleStyle"]',
                                                add_text: true,
                                                name: 'product_title'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                selector: 'tr:has(input[name="submit.addToCart"])',
                                children: [
                                    {
                                        selector: 'td[class*="asin"]',
                                        name: 'from_text',
                                        text_js: (em) => {
                                            var _a, _b, _c;
                                            const classes = em.classList.value;
                                            const selector = classes
                                                .split(' ')
                                                .map((cls) => `.${cls}`)
                                                .join(', ');
                                            const textEm = (_c = (_b = (_a = em
                                                .closest('tbody')) === null || _a === void 0 ? void 0 : _a.querySelector('tr:has(div[class^="_product-comparison-desktop_titleStyle"])')) === null || _b === void 0 ? void 0 : _b.querySelector(selector)) === null || _c === void 0 ? void 0 : _c.querySelector('div[class^="_product-comparison-desktop_titleStyle"]');
                                            return (textEm === null || textEm === void 0 ? void 0 : textEm.innerText) || '';
                                        },
                                        children: [
                                            {
                                                selector: 'input[name="submit.addToCart"]',
                                                name: 'add_to_cart',
                                                clickable: true,
                                                add_text: true
                                            }
                                        ],
                                        generate_metadata: (em) => {
                                            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
                                            const classes = em.classList.value;
                                            const selector = classes
                                                .split(' ')
                                                .map((cls) => `.${cls}`)
                                                .join(', ');
                                            const titleEm = (_c = (_b = (_a = em
                                                .closest('tbody')) === null || _a === void 0 ? void 0 : _a.querySelector('tr:has(div[class^="_product-comparison-desktop_titleStyle"])')) === null || _b === void 0 ? void 0 : _b.querySelector(selector)) === null || _c === void 0 ? void 0 : _c.querySelector('div[class^="_product-comparison-desktop_titleStyle"]');
                                            const title = (titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText) || '';
                                            const asin = (_e = (_d = em
                                                .querySelector('input[name="submit.addToCart"]')) === null || _d === void 0 ? void 0 : _d.getAttribute('data-asins')) === null || _e === void 0 ? void 0 : _e.replace(/[\[\]"]/g, '');
                                            const priceEm = (_h = (_g = (_f = em
                                                .closest('tbody')) === null || _f === void 0 ? void 0 : _f.querySelector('tr:has(span.a-price)')) === null || _g === void 0 ? void 0 : _g.querySelector(selector)) === null || _h === void 0 ? void 0 : _h.querySelector('span.a-price span.a-offscreen');
                                            const price = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText;
                                            const urlEm = (_l = (_k = (_j = em
                                                .closest('tbody')) === null || _j === void 0 ? void 0 : _j.querySelector('tr:has(div[class^="_product-comparison-desktop_titleStyle"])')) === null || _k === void 0 ? void 0 : _k.querySelector(selector)) === null || _l === void 0 ? void 0 : _l.querySelector('a:has(div[class^="_product-comparison-desktop_titleStyle"])');
                                            const url = (urlEm === null || urlEm === void 0 ? void 0 : urlEm.href) || window.location.href;
                                            return { name: 'comparison_items', data: { title, asin, price, url } };
                                        }
                                    }
                                ]
                            },
                            {
                                selector: 'tr:has(span.a-price)',
                                children: [
                                    {
                                        selector: 'td[class*="asin"]',
                                        name: 'from_text',
                                        text_js: (em) => {
                                            var _a, _b, _c;
                                            const classes = em.classList.value;
                                            const selector = classes
                                                .split(' ')
                                                .map((cls) => `.${cls}`)
                                                .join(', ');
                                            const textEm = (_c = (_b = (_a = em
                                                .closest('tbody')) === null || _a === void 0 ? void 0 : _a.querySelectorAll('tr')[0]) === null || _b === void 0 ? void 0 : _b.querySelector(selector)) === null || _c === void 0 ? void 0 : _c.querySelector('div[class^="_product-comparison-desktop_titleStyle"]');
                                            return (textEm === null || textEm === void 0 ? void 0 : textEm.innerText) || '';
                                        },
                                        children: [
                                            {
                                                selector: 'span.a-price span.a-offscreen',
                                                name: 'product_price',
                                                add_text: true
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                selector: 'tr:has(div[class*="delivery"])',
                                children: [
                                    {
                                        selector: 'td[class*="asin"]',
                                        name: 'from_text',
                                        text_js: (em) => {
                                            var _a, _b, _c;
                                            const classes = em.classList.value;
                                            const selector = classes
                                                .split(' ')
                                                .map((cls) => `.${cls}`)
                                                .join(', ');
                                            const textEm = (_c = (_b = (_a = em
                                                .closest('tbody')) === null || _a === void 0 ? void 0 : _a.querySelectorAll('tr')[0]) === null || _b === void 0 ? void 0 : _b.querySelector(selector)) === null || _c === void 0 ? void 0 : _c.querySelector('div[class^="_product-comparison-desktop_titleStyle"]');
                                            return (textEm === null || textEm === void 0 ? void 0 : textEm.innerText) || '';
                                        },
                                        children: [
                                            {
                                                selector: 'div[class*="delivery"]',
                                                name: 'product_delivery',
                                                add_text: true
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                selector: 'tr:has(div[class*="reviews-rating"])',
                                children: [
                                    {
                                        selector: 'td[class*="asin"]',
                                        name: 'from_text',
                                        text_js: (em) => {
                                            var _a, _b, _c;
                                            const classes = em.classList.value;
                                            const selector = classes
                                                .split(' ')
                                                .map((cls) => `.${cls}`)
                                                .join(', ');
                                            const textEm = (_c = (_b = (_a = em
                                                .closest('tbody')) === null || _a === void 0 ? void 0 : _a.querySelectorAll('tr')[0]) === null || _b === void 0 ? void 0 : _b.querySelector(selector)) === null || _c === void 0 ? void 0 : _c.querySelector('div[class^="_product-comparison-desktop_titleStyle"]');
                                            return (textEm === null || textEm === void 0 ? void 0 : textEm.innerText) || '';
                                        },
                                        children: [
                                            {
                                                selector: 'div[class*="reviews-rating"]',
                                                name: 'product_rating',
                                                add_text: true,
                                                text_js: (em) => {
                                                    const icon = em.querySelector('i');
                                                    const span = em.querySelector('span.a-size-base.a-color-link');
                                                    return (icon === null || icon === void 0 ? void 0 : icon.innerText) + ' Reviewed by ' + (span === null || span === void 0 ? void 0 : span.innerText) || '';
                                                },
                                                clickable: true
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        selector: '#attach-warranty-pane #attach-warranty-display',
                        name: 'warranty-box',
                        children: [
                            {
                                selector: 'div.attach-warranty-box',
                                text_selector: '#attach-warranty-card-display-title',
                                name: 'from_text',
                                children: [
                                    {
                                        selector: 'i.a-icon-checkbox',
                                        name: 'select',
                                        clickable: true
                                    },
                                    {
                                        selector: '#attach-warranty-card-display-title',
                                        add_text: true
                                    },
                                    {
                                        selector: '#attach-warranty-card-price',
                                        add_text: true
                                    }
                                ]
                            },
                            {
                                selector: 'div.a-section.attach-warranty-button-row',
                                children: [
                                    {
                                        selector: "input[aria-labelledby='attachSiAddCoverage-announce']",
                                        name: 'add_protection',
                                        clickable: true,
                                        add_text: true,
                                        text_format: 'Add Protection'
                                    },
                                    {
                                        selector: "input[aria-labelledby='attachSiNoCoverage-announce']",
                                        name: 'no_protection',
                                        clickable: true,
                                        add_text: true,
                                        text_format: 'No Thanks'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        match: '/hz/mobile/mission',
        match_method: 'url',
        selector: 'html',
        children: [
            {
                selector: 'head',
                children: [
                    {
                        selector: 'title',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'body',
                children: [
                    nav,
                    cart_side_bar,
                    {
                        selector: 'div[data-intent="intent-feed-mission-switcher"]',
                        name: 'category_switcher',
                        children: [
                            {
                                selector: 'h4',
                                clickable: true,
                                name: 'from_text',
                                add_text: true
                            },
                            {
                                selector: 'li.a-carousel-card',
                                clickable: true,
                                name: 'from_text',
                                add_text: true,
                                text_js: (em) => {
                                    const imgEm = em.querySelector('img');
                                    return (imgEm === null || imgEm === void 0 ? void 0 : imgEm.alt) || '';
                                }
                            }
                        ]
                    },
                    {
                        selector: 'div[class*="singleProductContainer"]',
                        name: 'from_text',
                        text_selector: 'span[class*="titleR2"]',
                        children: [
                            {
                                selector: 'a:has(img)',
                                add_text: true,
                                text_format: 'Product Image',
                                name: 'from_text',
                                clickable: true
                            },
                            {
                                selector: 'div[class*="singleSwatchesContainer"]',
                                name: 'options',
                                children: [
                                    {
                                        selector: 'li a',
                                        add_text: true,
                                        name: 'from_text',
                                        clickable: true,
                                        text_js: (em) => {
                                            return em.getAttribute('aria-label') || em.innerText || '';
                                        }
                                    },
                                    {
                                        selector: 'a[class*="_link_"]',
                                        add_text: true,
                                        name: 'from_text',
                                        clickable: true
                                    }
                                ]
                            },
                            {
                                selector: 'div[class*="variationLink"] a',
                                clickable: true,
                                add_text: true,
                                name: 'from_text'
                            },
                            {
                                selector: 'a:not(:has(img))',
                                add_text: true,
                                direct_child: true,
                                text_format: 'Product Detail',
                                name: 'from_text',
                                clickable: true
                            },
                            {
                                selector: 'div[class*="singleProductDetails"] a',
                                add_text: true,
                                direct_child: true,
                                text_format: 'Product Detail',
                                name: 'from_text',
                                clickable: true
                            },
                            {
                                selector: 'span.a-button:has(input)',
                                clickable: true,
                                add_text: true,
                                name: 'add_to_cart'
                            },
                            {
                                selector: 'span.a-button a, div[data-component-id="seeAllBuyingOptionsButton"] span.a-button',
                                add_text: true,
                                clickable: true,
                                name: 'from_text'
                            }
                        ],
                        generate_metadata: (em) => {
                            var _a;
                            const asinEm = em.querySelector('div[data-asin]');
                            const asin = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin');
                            const priceEm = em.querySelector('span.a-price span.a-offscreen');
                            const price = (_a = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _a === void 0 ? void 0 : _a.replace(/[\n]/g, '');
                            const titleEm = em.querySelector('span[class*="titleR2"]');
                            const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText.replace('"', '');
                            const urlEm = em.querySelector('a:not(:has(img))');
                            const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
                            return {
                                name: 'promotion_items',
                                data: { title, asin, price, url }
                            };
                        }
                    },
                    {
                        selector: '#intent-tabs',
                        name: 'intent_tabs',
                        children: [
                            {
                                selector: 'li',
                                clickable: true,
                                name: 'from_text',
                                add_text: true,
                                text_js: (em) => {
                                    var _a;
                                    return (((_a = em
                                        .getAttribute('data-intent')) === null || _a === void 0 ? void 0 : _a.replace('intent-feed-', '').replaceAll('-', '_')) || '');
                                }
                            }
                        ]
                    },
                    {
                        selector: 'div[id^="CardInstance"]:has(div[class*="productContainer"])',
                        text_selector: 'h4',
                        name: 'from_text',
                        children: [
                            {
                                selector: 'h4',
                                add_text: true
                            },
                            carousel_card
                        ]
                    },
                    {
                        selector: 'div[id^="CardInstance"]:has(div[class*="twoAsinsProductDetails"])',
                        text_selector: 'h4',
                        name: 'from_text',
                        children: [
                            {
                                selector: 'h4',
                                add_text: true
                            },
                            carousel_card,
                            {
                                selector: 'div[class*="twoAsinsProductContainer"]',
                                text_js: (em) => {
                                    const aEm = em.querySelector('div[class*="twoAsinsProductDetails"] a[aria-label]');
                                    return aEm.getAttribute('aria-label') || '';
                                },
                                name: 'from_text',
                                children: [
                                    {
                                        selector: 'div[class*="imageBlockContainer"] a',
                                        clickable: true,
                                        add_text: true,
                                        text_format: 'Product Image',
                                        name: 'from_text'
                                    },
                                    {
                                        selector: 'div[class*="twoAsinsProductDetails"] a',
                                        clickable: true,
                                        add_text: true,
                                        text_format: 'Product Details',
                                        name: 'from_text'
                                    },
                                    {
                                        selector: 'span[class*="actionButton"]:has(i.a-icon-cart)',
                                        clickable: true,
                                        add_text: true,
                                        name: 'add_to_cart'
                                    }
                                ],
                                generate_metadata: (em) => {
                                    var _a;
                                    const asinEm = em.querySelector('input[data-asin]');
                                    const asin = (asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin')) || '';
                                    const priceEm = em.querySelector('span.a-price span.a-offscreen');
                                    const price = (_a = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _a === void 0 ? void 0 : _a.replace(/[\n]/g, '');
                                    const titleEm = em.querySelector('div[class*="twoAsinsProductDetails"] a');
                                    const title = (titleEm === null || titleEm === void 0 ? void 0 : titleEm.getAttribute('aria-label')) || '';
                                    const urlEm = em.querySelector('div[class*="twoAsinsProductDetails"] a');
                                    const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
                                    return {
                                        name: 'promotion_items',
                                        data: { title, asin, price, url }
                                    };
                                }
                            }
                        ]
                    },
                    {
                        selector: 'div[class*="intuition-sticky-container"]',
                        name: 'refinements',
                        children: [
                            {
                                selector: 'li[class*="intuition-attribute-bar"]',
                                name: 'from_text',
                                text_js: (em) => {
                                    const textEm = em.querySelector('a-cardui-header');
                                    const ariaEm = em.querySelector('button[aria-label]');
                                    return (ariaEm === null || ariaEm === void 0 ? void 0 : ariaEm.getAttribute('aria-label')) || (textEm === null || textEm === void 0 ? void 0 : textEm.innerText) || '';
                                },
                                children: [
                                    {
                                        selector: 'div[class*="intuition-attribute-with-chevron__attributeWithChevronContainer"]',
                                        clickable: true,
                                        name: 'apply_filters',
                                        add_text: true,
                                        text_js: (em) => {
                                            const textEm = em.querySelector('span.a-truncate-full');
                                            const ariaEm = em.querySelector('button[aria-label]');
                                            return (ariaEm === null || ariaEm === void 0 ? void 0 : ariaEm.getAttribute('aria-label')) || (textEm === null || textEm === void 0 ? void 0 : textEm.innerText) || '';
                                        }
                                    },
                                    {
                                        selector: 'div[class*="intuition-attribute-with-chevron__chevronOuterContainer"]',
                                        clickable: true,
                                        name: 'from_text',
                                        add_text: true,
                                        text_format: 'Open Filters'
                                    },
                                    {
                                        selector: 'div[class*="closeModalIconContainer"]',
                                        clickable: true,
                                        add_text: true,
                                        text_format: 'Close Filters',
                                        name: 'from_text'
                                    },
                                    {
                                        selector: 'div.a-cardui-content > div > div',
                                        clickable: true,
                                        name: 'from_text',
                                        add_text: true,
                                        text_js: (em) => {
                                            const button = em.querySelector('button');
                                            return (button === null || button === void 0 ? void 0 : button.getAttribute('aria-label')) || (button === null || button === void 0 ? void 0 : button.innerText) || '';
                                        }
                                    },
                                    {
                                        selector: 'div[class*="actionContainer"]',
                                        clickable: true,
                                        name: 'from_text',
                                        add_text: true
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        selector: '#intent-content-default',
                        name: 'from_text',
                        text_js: (em) => {
                            var _a;
                            return (((_a = em.getAttribute('data-intent')) === null || _a === void 0 ? void 0 : _a.replace('intent-feed-', '').replaceAll('-', '_')) ||
                                '');
                        },
                        children: [
                            {
                                selector: 'li[class*="productContainer"]',
                                name: 'from_text',
                                text_selector: 'span[class*="titleR3"], span[class*="titleR4"]',
                                children: [
                                    {
                                        selector: 'a:has(img)',
                                        add_text: true,
                                        text_format: 'Product Image',
                                        name: 'from_text',
                                        clickable: true
                                    },
                                    {
                                        selector: 'div[class*="swatches"], div[class*="variationContainer"]',
                                        name: 'options',
                                        children: [
                                            {
                                                selector: 'li a',
                                                add_text: true,
                                                name: 'from_text',
                                                clickable: true,
                                                text_js: (em) => {
                                                    return em.getAttribute('aria-label') || em.innerText || '';
                                                }
                                            },
                                            {
                                                selector: 'a[class*="_link_"]',
                                                add_text: true,
                                                name: 'from_text',
                                                clickable: true
                                            }
                                        ]
                                    },
                                    {
                                        selector: 'div[class*="variationLink"] a',
                                        clickable: true,
                                        add_text: true,
                                        name: 'from_text'
                                    },
                                    {
                                        selector: 'a[class*="productLink"]',
                                        clickable: true,
                                        add_text: true,
                                        name: 'product_title'
                                    },
                                    {
                                        selector: 'span.a-button:has(input)',
                                        clickable: true,
                                        add_text: true,
                                        name: 'add_to_cart'
                                    },
                                    {
                                        selector: 'span.a-button a, div[data-component-id="seeAllBuyingOptionsButton"] span.a-button',
                                        add_text: true,
                                        clickable: true,
                                        name: 'from_text'
                                    }
                                ],
                                generate_metadata: (em) => {
                                    var _a, _b;
                                    const asinEm = em.querySelector('div[data-asin]');
                                    const asin = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin');
                                    const priceEm = em.querySelector('span.a-price span.a-offscreen');
                                    const price = (_a = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _a === void 0 ? void 0 : _a.replace(/[\n]/g, '');
                                    const titleEm = em.querySelector('span[class*="titleR3"]');
                                    const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText.replace('"', '');
                                    const urlEm = em.querySelector('a:not(:has(img))');
                                    const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
                                    const nameEm = em.closest('#intent-content-default');
                                    const name = ((_b = nameEm === null || nameEm === void 0 ? void 0 : nameEm.getAttribute('data-intent')) === null || _b === void 0 ? void 0 : _b.replace('intent-feed-', '').replaceAll('-', '_')) || '';
                                    return {
                                        name: name,
                                        data: { title, asin, price, url }
                                    };
                                }
                            },
                            {
                                selector: 'li[class*="intuition-product-grid__faceout"]',
                                name: 'from_text',
                                text_selector: 'span[class*="titleR3"], span[class*="titleR4"]',
                                children: [
                                    {
                                        selector: 'a:has(img)',
                                        add_text: true,
                                        text_format: 'Product Image',
                                        name: 'from_text',
                                        clickable: true
                                    },
                                    {
                                        selector: 'div[class*="swatches"], div[class*="variationContainer"]',
                                        name: 'options',
                                        children: [
                                            {
                                                selector: 'li a',
                                                add_text: true,
                                                name: 'from_text',
                                                clickable: true,
                                                text_js: (em) => {
                                                    return em.getAttribute('aria-label') || em.innerText || '';
                                                }
                                            },
                                            {
                                                selector: 'a[class*="_link_"]',
                                                add_text: true,
                                                name: 'from_text',
                                                clickable: true
                                            }
                                        ]
                                    },
                                    {
                                        selector: 'div[class*="variationLink"] a',
                                        clickable: true,
                                        add_text: true,
                                        name: 'from_text'
                                    },
                                    {
                                        selector: 'a[class*="productLink"]',
                                        clickable: true,
                                        name: 'from_text',
                                        add_text: true,
                                        text_format: 'Product Detail'
                                    },
                                    {
                                        selector: 'span.a-button:has(input)',
                                        clickable: true,
                                        add_text: true,
                                        name: 'add_to_cart'
                                    },
                                    {
                                        selector: 'span.a-button a, div[data-component-id="seeAllBuyingOptionsButton"] span.a-button',
                                        add_text: true,
                                        clickable: true,
                                        name: 'from_text'
                                    }
                                ],
                                generate_metadata: (em) => {
                                    var _a, _b;
                                    const asinEm = em.querySelector('input');
                                    const asin = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin');
                                    const priceEm = em.querySelector('span.a-price span.a-offscreen');
                                    const price = (_a = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _a === void 0 ? void 0 : _a.replace(/[\n]/g, '');
                                    const titleEm = em.querySelector('span[class*="titleR3"]');
                                    const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText.replace('"', '');
                                    const urlEm = em.querySelector('a:not(:has(img))');
                                    const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
                                    const nameEm = em.closest('#intent-content-default');
                                    const name = ((_b = nameEm === null || nameEm === void 0 ? void 0 : nameEm.getAttribute('data-intent')) === null || _b === void 0 ? void 0 : _b.replace('intent-feed-', '').replaceAll('-', '_')) || '';
                                    return {
                                        name: name,
                                        data: { title, asin, price, url }
                                    };
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        match: '/cart/add-to-cart',
        match_method: 'url',
        selector: 'html',
        match_with_ref: true,
        children: [
            {
                selector: 'head',
                children: [
                    {
                        selector: 'title',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'body',
                children: [
                    nav,
                    cart_side_bar,
                    {
                        selector: '#sw-atc-buy-box',
                        children: [
                            {
                                selector: '#sw-subtotal',
                                children: [
                                    {
                                        selector: '#sw-subtotal-item-count',
                                        add_text: true
                                    },
                                    {
                                        selector: "span[aria-hidden='true']",
                                        add_text: true
                                    }
                                ]
                            },
                            {
                                selector: '#sc-buy-box-ptc-button span.a-button-inner input',
                                add_text: true,
                                text_selector: 'div.sc-without-multicart',
                                clickable: true,
                                name: 'check_out',
                                fetch_url: '/cart'
                            },
                            {
                                selector: '#sw-gtc a',
                                add_text: true,
                                clickable: true,
                                name: 'go_to_cart'
                            },
                            {
                                selector: 'div.sw-atf-recommendations-container div[id^="CardInstance"], div#smart-wagon-recommendations-btf div[id^="CardInstance"]',
                                text_selector: 'h1.a-carousel-heading',
                                name: 'from_text',
                                children: [
                                    {
                                        selector: 'h1.a-carousel-heading',
                                        add_text: true
                                    },
                                    carousel_card
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        match: '/cart/smart-wagon',
        match_method: 'url',
        selector: 'html',
        children: [
            {
                selector: 'head',
                children: [
                    {
                        selector: 'title',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'body',
                children: [
                    nav,
                    cart_side_bar,
                    {
                        selector: '#sw-atc-buy-box',
                        children: [
                            {
                                selector: '#sw-subtotal',
                                children: [
                                    {
                                        selector: '#sw-subtotal-item-count',
                                        add_text: true
                                    },
                                    {
                                        selector: "span[aria-hidden='true']",
                                        add_text: true
                                    }
                                ]
                            },
                            {
                                selector: '#sc-buy-box-ptc-button span.a-button-inner input',
                                add_text: true,
                                text_selector: 'div.sc-without-multicart',
                                clickable: true,
                                name: 'check_out',
                                fetch_url: '/cart'
                            },
                            {
                                selector: '#sw-gtc a',
                                add_text: true,
                                clickable: true,
                                name: 'go_to_cart'
                            }
                        ]
                    },
                    {
                        selector: 'div.sw-atf-recommendations-container div[id^="CardInstance"], div#smart-wagon-recommendations-btf div[id^="CardInstance"]',
                        text_selector: 'h1.a-carousel-heading',
                        name: 'from_text',
                        children: [
                            {
                                selector: 'h1.a-carousel-heading',
                                add_text: true
                            },
                            carousel_card
                        ]
                    }
                ]
            }
        ]
    },
    {
        match: '/gp/cart/view.html',
        match_method: 'url',
        selector: 'html',
        children: [
            {
                selector: 'head',
                children: [
                    {
                        selector: 'title',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'body',
                children: cart
            }
        ]
    },
    {
        match: '/cart',
        match_method: 'url',
        match_with_ref: true,
        selector: 'html',
        children: [
            {
                selector: 'head',
                children: [
                    {
                        selector: 'title',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'body',
                children: cart
            }
        ]
    },
    {
        match: '/cart/luxury',
        match_method: 'url',
        selector: 'html',
        children: [
            {
                selector: 'head',
                children: [
                    {
                        selector: 'title',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'body',
                children: luxury_cart
            }
        ]
    },
    {
        match: '/cart/localmarket',
        match_method: 'url',
        match_with_ref: true,
        selector: 'html',
        children: [
            {
                selector: 'head',
                children: [
                    {
                        selector: 'title',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'body',
                children: fresh_cart
            }
        ]
    },
    {
        match: '/alm/byg',
        match_method: 'url',
        selector: 'html',
        children: [
            {
                selector: 'head',
                children: [
                    {
                        selector: 'title',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'body',
                children: [
                    {
                        selector: 'a[name="proceedToCheckout"]',
                        name: 'check_out',
                        add_text: true,
                        clickable: true
                    },
                    {
                        selector: 'div[id^="CardInstance"]',
                        text_selector: 'h2.a-carousel-heading',
                        name: 'from_text',
                        children: [
                            {
                                selector: 'h2.a-carousel-heading',
                                add_text: true
                            },
                            fresh_carousel_card
                        ]
                    }
                ]
            }
        ]
    },
    {
        match: '/alm/substitution',
        match_method: 'url',
        selector: 'html',
        children: [
            {
                selector: 'head',
                children: [
                    {
                        selector: 'title',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'body',
                children: [
                    {
                        selector: '#subsContinueButton input',
                        name: 'check_out',
                        add_text: true,
                        clickable: true,
                        text_format: 'Continue'
                    },
                    fresh_substitution_card
                ]
            }
        ]
    },
    {
        match: '/cart/byc',
        match_method: 'url',
        selector: 'html',
        match_with_ref: true,
        children: [
            {
                selector: 'head',
                children: [
                    {
                        selector: 'title',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'body',
                children: [
                    {
                        selector: 'a[name="sc-byc-ptc-button"]',
                        name: 'check_out',
                        add_text: true,
                        clickable: true
                    },
                    {
                        selector: 'span[cel_widget_id^="byc-back-button"] a',
                        name: 'back_to_cart',
                        add_text: true,
                        clickable: true
                    },
                    {
                        selector: 'div[id^="CardInstance"]',
                        text_selector: 'h2.a-carousel-heading',
                        name: 'from_text',
                        children: [
                            {
                                selector: 'h2.a-carousel-heading',
                                add_text: true
                            },
                            carousel_card
                        ]
                    }
                ]
            }
        ]
    },
    {
        match: '/fmc/ssd-storefront',
        match_method: 'url',
        selector: 'html',
        match_with_ref: true,
        children: [
            {
                selector: 'head',
                children: [
                    {
                        selector: 'title',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'body',
                children: [
                    nav,
                    cart_side_bar,
                    {
                        selector: 'div[class*="store-subnav-desktop_style_subnav-content-container"]',
                        name: 'sub_stores',
                        children: [
                            {
                                selector: 'a[class*="store-subnav-desktop_style"], a[class*="store-subnav-desktop-flyout_style"]',
                                add_text: true,
                                clickable: true,
                                name: 'from_text',
                                text_js: (em) => {
                                    return em.innerText || 'Same Day Store';
                                }
                            }
                        ]
                    },
                    {
                        selector: 'div[id^="CardInstance"]',
                        text_selector: 'h2.seeMoreTitleHeader',
                        name: 'from_text',
                        children: [
                            {
                                selector: 'h2.a-carousel-heading',
                                add_text: true
                            },
                            carousel_card
                        ]
                    }
                ]
            }
        ]
    },
    {
        match: '/fmc/ssd-category',
        match_method: 'url',
        selector: 'html',
        match_with_ref: true,
        children: [
            {
                selector: 'head',
                children: [
                    {
                        selector: 'title',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'body',
                children: [
                    nav,
                    cart_side_bar,
                    {
                        selector: 'div[class*="store-subnav-desktop_style_subnav-content-container"]',
                        name: 'sub_stores',
                        children: [
                            {
                                selector: 'a[class*="store-subnav-desktop_style"]',
                                add_text: true,
                                clickable: true,
                                name: 'from_text',
                                text_js: (em) => {
                                    return em.innerText || 'Same Day Store';
                                }
                            }
                        ]
                    },
                    {
                        selector: 'div.dcl-container',
                        name: 'categories',
                        children: [
                            {
                                selector: 'h2.dcl-header-title',
                                add_text: true
                            },
                            {
                                selector: 'li.a-carousel-card.dcl-carousel-element a',
                                text_selector: 'div.dcl-card-footer',
                                add_text: true,
                                clickable: true,
                                name: 'from_text'
                            }
                        ]
                    },
                    {
                        selector: 'div[id^="CardInstance"]',
                        text_selector: 'h2.seeMoreTitleHeader',
                        name: 'from_text',
                        children: [
                            {
                                selector: 'h2.a-carousel-heading',
                                add_text: true
                            },
                            carousel_card
                        ]
                    }
                ]
            }
        ]
    },
    {
        match: '/gp/bestsellers',
        match_method: 'url',
        selector: 'html',
        match_with_ref: true,
        children: popular_products
    },
    {
        match: '/gp/new-releases/*',
        match_method: 'url',
        selector: 'html',
        match_with_ref: true,
        match_with_wildcard: true,
        children: popular_products
    },
    {
        match: '/gp/movers-and-shakers/*',
        match_method: 'url',
        selector: 'html',
        match_with_ref: true,
        match_with_wildcard: true,
        children: popular_products
    },
    {
        match: '/gp/most-wished-for/*',
        match_method: 'url',
        selector: 'html',
        match_with_ref: true,
        match_with_wildcard: true,
        children: popular_products
    },
    {
        match: '/gp/most-gifted/*',
        match_method: 'url',
        selector: 'html',
        match_with_ref: true,
        match_with_wildcard: true,
        children: popular_products
    },
    {
        match: '/Best-Sellers*/zgbs/*',
        match_method: 'url',
        selector: 'html',
        match_with_ref: true,
        match_with_wildcard: true,
        children: popular_products
    },
    {
        match: '/Best-Sellers*/zgbs/*/*',
        match_method: 'url',
        selector: 'html',
        match_with_ref: true,
        match_with_wildcard: true,
        children: popular_products
    },
    {
        match: '/*/b',
        match_method: 'url',
        selector: 'html',
        match_with_wildcard: true,
        children: [
            {
                selector: 'head',
                children: [
                    {
                        selector: 'title',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'body',
                children: [
                    nav,
                    cart_side_bar,
                    {
                        selector: '#nav-subnav',
                        name: 'sub_stores',
                        children: [
                            {
                                selector: 'a',
                                direct_child: true,
                                clickable: true,
                                name: 'from_text',
                                add_text: true
                            },
                            {
                                selector: 'li.generic-subnav-flyout-item',
                                clickable: true,
                                use_root: true,
                                name: 'from_text',
                                add_text: true
                            }
                        ]
                    },
                    {
                        selector: 'div[class^="DesktopRefinements-module__root"]',
                        name: 'refinements',
                        children: [
                            {
                                selector: 'div',
                                direct_child: true,
                                name: 'from_text',
                                text_selector: 'span.a-size-base.a-color-base.a-text-bold',
                                children: [
                                    {
                                        selector: 'span.a-size-base.a-color-base.a-text-bold',
                                        add_text: true
                                    },
                                    {
                                        selector: 'ul[class^="Breadcrumbs-module"] li:has(a)',
                                        add_text: true,
                                        clickable: true,
                                        name: 'from_text'
                                    },
                                    {
                                        selector: 'ul[class^="Breadcrumbs-module"] li:not(:has(a))',
                                        add_text: true
                                    },
                                    {
                                        selector: 'div[role="radiogroup"] > span, div[role="group"] > span',
                                        clickable: true,
                                        add_text: true,
                                        name: 'from_text',
                                        text_js: (em) => {
                                            var _a;
                                            return (((_a = em.querySelector('div[aria-label]')) === null || _a === void 0 ? void 0 : _a.getAttribute('aria-label')) ||
                                                em.innerText);
                                        },
                                        generate_metadata: (em) => {
                                            var _a, _b, _c, _d;
                                            const nameEm = (_b = (_a = em.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.firstElementChild;
                                            const name = (_c = nameEm === null || nameEm === void 0 ? void 0 : nameEm.innerText) === null || _c === void 0 ? void 0 : _c.trim().replace(/[ ]/g, '_').toLowerCase().trim().replace(/^_+|_+$/g, '');
                                            const text = ((_d = em.querySelector('div[aria-label]')) === null || _d === void 0 ? void 0 : _d.getAttribute('aria-label')) ||
                                                em.innerText;
                                            const selectEm = em.querySelector('input[type="radio"], input[type="checkbox"]');
                                            const selected = selectEm === null || selectEm === void 0 ? void 0 : selectEm.getAttribute('data-processed-input-checked');
                                            return {
                                                name: 'refinements.' + name,
                                                data: { title: (text === null || text === void 0 ? void 0 : text.trim()) || '', selected: false }
                                            };
                                        }
                                    },
                                    {
                                        selector: 'button[class*="SeeMoreButton-module"]',
                                        clickable: true,
                                        add_text: true,
                                        name: 'from_text'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        selector: 'div[class^="ProductCard-module__card"]',
                        name: 'from_text',
                        text_selector: 'p[id^="title"] span.a-truncate-full',
                        children: [
                            {
                                selector: 'div[class*="imageWrapper"] a',
                                clickable: true,
                                text_format: 'Product Image',
                                add_text: true,
                                name: 'from_text'
                            },
                            {
                                selector: 'a[class*="cardContainingLink"]',
                                clickable: true,
                                add_text: true,
                                name: 'product_detail'
                            },
                            {
                                selector: 'div[data-testid="color-swatch"] ul',
                                name: 'colors',
                                children: [
                                    {
                                        selector: 'li',
                                        clickable: true,
                                        add_text: true,
                                        name: 'from_text',
                                        text_js: (em) => {
                                            var _a;
                                            return ((_a = em.querySelector('a')) === null || _a === void 0 ? void 0 : _a.getAttribute('aria-label')) || '';
                                        }
                                    }
                                ]
                            }
                        ],
                        generate_metadata: (em) => {
                            var _a;
                            const asin = em.getAttribute('data-asin');
                            const title = (_a = em.querySelector('p[id^="title"] span.a-truncate-full')) === null || _a === void 0 ? void 0 : _a.innerText;
                            return {
                                name: 'promotion_items',
                                data: { asin, title }
                            };
                        }
                    }
                ]
            }
        ]
    },
    {
        match: '/ap/signin',
        match_method: 'url',
        terminate: function () {
            return !!arguments[0];
        },
        terminate_callback: function () {
            return arguments[0];
        },
        selector: 'html'
    },
    {
        match: '/gp/buy/spc/handlers/display.html',
        match_method: 'url',
        terminate: function () {
            return !!arguments[0];
        },
        terminate_callback: function () {
            return arguments[0];
        },
        selector: 'html'
    },
    {
        match: '/gp/buyagain',
        match_method: 'url',
        match_with_ref: true,
        selector: 'html',
        children: [
            {
                selector: 'head',
                children: [
                    {
                        selector: 'title',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'body',
                children: buy_again
            }
        ]
    }
];


/***/ }),

/***/ "./src/utils/element-processor.ts":
/*!****************************************!*\
  !*** ./src/utils/element-processor.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processElement: () => (/* binding */ processElement)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function processElement(element, recipe, parentName = '', nthChild = 0, document = globalThis.document, window = globalThis.window) {
    var _a;
    // console.log("processing element: ", element, recipe);
    // Create a new element using the DOM API
    let tagName = recipe.tag_name || element.tagName.toLowerCase();
    // Handle underscored tags
    if (tagName.endsWith('_')) {
        tagName = tagName.slice(0, -1);
    }
    const newElement = document.createElement(tagName);
    // Extract text content based on the recipe
    let elementText = '';
    if (recipe.text_selector) {
        const textElement = element.querySelector(recipe.text_selector);
        if (textElement) {
            elementText = textElement.innerText || textElement.textContent || '';
        }
    }
    else if (recipe.text_js) {
        elementText = recipe.text_js(element);
        if (elementText === '' || elementText === undefined) {
            // console.log('text js does not detect text for element ', element)
        }
    }
    else if (recipe.add_text) {
        elementText = element.innerText || element.textContent || '';
    }
    if (elementText == null) {
        console.log(element);
        console.log(elementText);
    }
    elementText = elementText.replace(/\s+/g, ' ').trim();
    if (recipe.text_format) {
        elementText = recipe.text_format.replace('{}', elementText);
    }
    else if (recipe.text_format) {
        elementText = recipe.text_format;
    }
    if (elementText && recipe.add_text) {
        newElement.textContent = elementText;
    }
    // Build the node attributes
    let elementName = '';
    if (recipe.name) {
        if (recipe.name === 'from_text') {
            if (!elementText) {
                // console.log('elementText is empty', recipe, element)
                // debugger
            }
            elementName = parentName ? parentName + '.' : '';
            if (!elementText) {
                // console.log("element text not found");
                elementName = '';
            }
            else {
                elementName += elementText
                    .toLowerCase()
                    .replace(/[^\w]+/g, '_')
                    .replace(/^_+|_+$/g, '');
            }
        }
        else if (recipe.name === 'from_nth_child') {
            elementName = parentName ? parentName + '.' : '';
            elementName += nthChild.toString();
        }
        else {
            elementName = parentName ? parentName + '.' : '';
            elementName += recipe.name;
        }
        newElement.setAttribute('name', elementName);
        parentName = elementName;
    }
    if (recipe.generate_metadata) {
        const metaobj = recipe.generate_metadata(element);
        const metadata = JSON.stringify(metaobj.data);
        const metaname = metaobj.name;
        element.setAttribute('data-element-meta-name', metaname);
        element.setAttribute('data-element-meta-data', metadata);
        // console.log('metadata generated: ', metadata, ' with name: ', metaname)
    }
    // Handle clickables and inputs
    if (recipe.clickable) {
        if (!recipe.name) {
            throw new Error('clickable element must have a name');
        }
        // handle click_selector
        let click_element;
        if (recipe.click_selector) {
            click_element = element.querySelector(recipe.click_selector);
        }
        else {
            click_element = element;
        }
        if (click_element) {
            click_element.setAttribute('data-clickable-id', elementName);
        }
        else {
            // console.log('click-element not found', element, recipe)
        }
        if (!window.clickable_recipes) {
            window.clickable_recipes = {};
        }
        window.clickable_recipes[elementName] = recipe;
    }
    if (recipe.fetch_url) {
        element.setAttribute('data-fetch-url', recipe.fetch_url);
    }
    if (tagName === 'input') {
        const inputType = element.getAttribute('type');
        if (['text', 'number'].includes(inputType)) {
            newElement.setAttribute('value', element.value);
            element.setAttribute('data-input-id', elementName);
        }
        else if (inputType === 'checkbox') {
            newElement.setAttribute('checked', element.checked.toString());
        }
        else if (inputType === 'radio') {
            newElement.setAttribute('checked', element.checked.toString());
            element.setAttribute('data-clickable-id', elementName);
        }
        if (!window.input_recipes) {
            window.input_recipes = {};
        }
        window.input_recipes[elementName] = recipe;
    }
    // **Handle select elements**
    if (tagName === 'select') {
        // Tag the select element with data-select-id
        element.setAttribute('data-select-id', elementName);
        const selectId = element.getAttribute('id');
        const nameId = element.getAttribute('name');
        const tag = (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector('span.a-button-dropdown span.a-button-text');
        const newTag = document.createElement('span');
        newTag.textContent = tag.textContent;
        const tagName = elementName + '.open_drop_down_list';
        newTag.setAttribute('name', tagName);
        tag.setAttribute('data-clickable-id', tagName); // Tag actual DOM option element
        newElement.appendChild(newTag);
        const options = document.querySelectorAll('a[id^="' + selectId + '"]');
        options.forEach((option) => __awaiter(this, void 0, void 0, function* () {
            const optionValue = option.textContent.trim() || option.querySelector('input').value;
            const optionName = elementName + '.' + optionValue;
            const newOption = document.createElement('a');
            newOption.textContent = option.textContent;
            newOption.setAttribute('value', optionValue);
            newOption.setAttribute('name', optionName);
            newOption.setAttribute('selected', option.getAttribute('aria-selected'));
            option.setAttribute('data-clickable-id', optionName); // Tag actual DOM option element
            newElement.appendChild(newOption);
        }));
    }
    // Copy specified attributes
    const attrsToCopy = [
        'alt',
        'title',
        'type',
        'value',
        'role',
        'aria-label',
        'aria-hidden',
        'aria-selected'
    ];
    attrsToCopy.forEach((attr) => {
        const value = element.getAttribute(attr);
        if (value) {
            newElement.setAttribute(attr, value);
        }
    });
    if (recipe.keep_attr) {
        // console.log("attributes to keep: ", recipe.keep_attr);
        for (const key of recipe.keep_attr) {
            const value = element.getAttribute(key);
            // console.log(key, value)
            if (value) {
                newElement.setAttribute(key, value);
            }
        }
    }
    if (recipe['class']) {
        newElement.setAttribute('class', recipe['class']);
    }
    if (recipe['id']) {
        newElement.setAttribute('id', recipe['id']);
    }
    // Override attributes if specified
    if (recipe.override_attr) {
        for (const key in recipe.override_attr) {
            newElement.setAttribute(key, recipe.override_attr[key](element));
        }
    }
    // Process children
    if (recipe.children && recipe.children.length > 0) {
        for (const childRecipe of recipe.children) {
            const selector = childRecipe.direct_child
                ? `:scope > ${childRecipe.selector}`
                : childRecipe.selector;
            let childElements;
            if (childRecipe.use_root) {
                childElements = document.querySelectorAll(selector);
                // console.log('use root for ', childElements)
            }
            else
                childElements = element.querySelectorAll(selector);
            childElements.forEach((childElement, index) => {
                var _a, _b;
                let matched = true;
                if (childRecipe.match_id_with_parent) {
                    const regex = /([a-f0-9-]+-\d+)$/;
                    const match1 = (_a = element.getAttribute('id')) === null || _a === void 0 ? void 0 : _a.match(regex);
                    const match2 = (_b = childElement.getAttribute('id')) === null || _b === void 0 ? void 0 : _b.match(regex);
                    if (!match1 || !match2 || match1[1] !== match2[1]) {
                        matched = false;
                    }
                }
                if (matched) {
                    const childNode = processElement(childElement, childRecipe, parentName, index, document, window);
                    newElement.appendChild(childNode);
                    if (childRecipe.insert_split_marker) {
                        const every = childRecipe.insert_split_marker_every || 1;
                        if (index % every == 0) {
                            const splitMarker = document.createElement('split-marker');
                            newElement.appendChild(splitMarker);
                            // console.log("inserting split marker 1");
                        }
                    }
                    if (childRecipe.insert_split_marker) {
                        // console.log("inserting split marker 2");
                        const splitMarker = document.createElement('split-marker');
                        newElement.appendChild(splitMarker);
                    }
                    else {
                        // console.log('no split marker')
                    }
                }
            });
        }
    }
    // Handle empty messages
    if (recipe.empty_message && newElement.children.length === 0) {
        const emptyTextNode = document.createTextNode(recipe.empty_message);
        newElement.appendChild(emptyTextNode);
    }
    return newElement;
}


/***/ }),

/***/ "./src/utils/util.ts":
/*!***************************!*\
  !*** ./src/utils/util.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkInputStatus: () => (/* binding */ MarkInputStatus),
/* harmony export */   MarkViewableElements: () => (/* binding */ MarkViewableElements),
/* harmony export */   check_user_id: () => (/* binding */ check_user_id),
/* harmony export */   findPageMeta: () => (/* binding */ findPageMeta),
/* harmony export */   generateHtmlSnapshotId: () => (/* binding */ generateHtmlSnapshotId),
/* harmony export */   getClickableElementsInViewport: () => (/* binding */ getClickableElementsInViewport),
/* harmony export */   getCustomQuestion: () => (/* binding */ getCustomQuestion),
/* harmony export */   hashCode: () => (/* binding */ hashCode),
/* harmony export */   isFromPopup: () => (/* binding */ isFromPopup),
/* harmony export */   isValidReason: () => (/* binding */ isValidReason),
/* harmony export */   processRecipe: () => (/* binding */ processRecipe),
/* harmony export */   removeClickableMarkers: () => (/* binding */ removeClickableMarkers),
/* harmony export */   shouldExclude: () => (/* binding */ shouldExclude),
/* harmony export */   update_icon: () => (/* binding */ update_icon)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _recipe_new__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../recipe_new */ "./src/recipe_new.ts");
/* harmony import */ var _element_processor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./element-processor */ "./src/utils/element-processor.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function isFromPopup(element) {
    // return element.closest('#reason-modal') !== null
    const selectors = ['#user-interaction-tracker-app', '.n-modal-container'];
    return selectors.some((selector) => element.closest(selector) !== null);
}
function update_icon(url) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('update_icon', url);
        if (!(yield shouldExclude(url))) {
            console.log('active icon');
            chrome.action.setIcon({
                path: '../icon.png'
            });
        }
        else {
            console.log('inactive icon');
            chrome.action.setIcon({
                path: '../inactive_icon.png'
            });
        }
    });
}
function findPageMeta(root = null, document = globalThis.document) {
    let all_element_with_meta_data;
    if (root) {
        all_element_with_meta_data = root.querySelectorAll('[data-element-meta-name]');
    }
    else {
        all_element_with_meta_data = document.querySelectorAll('[data-element-meta-name]');
    }
    const groupedResult = {};
    all_element_with_meta_data.forEach((element) => {
        const metaName = element.getAttribute('data-element-meta-name');
        const metaData = element.getAttribute('data-element-meta-data');
        if (!groupedResult[metaName]) {
            groupedResult[metaName] = [];
        }
        groupedResult[metaName].push(JSON.parse(metaData));
    });
    return groupedResult;
}
function getClickableElementsInViewport() {
    // Select all potential clickable elements
    const documentCopy = document.cloneNode(true);
    const allElements = documentCopy.querySelectorAll('a, button, [onclick], input[type="button"], input[type="submit"]');
    // Check if each element is in the viewport and add marker
    allElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)) {
            // Add marker attribute to the element
            element.setAttribute('visible-clickable-element-marker', 'true');
        }
    });
    return documentCopy;
}
function MarkViewableElements() {
    MarkInputStatus();
    // Select all elements
    const allElements = document.querySelectorAll('a, button, select, [onclick], input[type="button"], input[type="submit"]');
    // Check if each element is in the viewport and add marker
    allElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const inViewport = rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth);
        // Add marker attribute to the element
        element.setAttribute('data-processed-visible-clickable-marker', inViewport ? 'true' : 'false');
    });
}
function MarkInputStatus() {
    // Exclude hidden inputs by using ':not([type="hidden"])'
    const inputs = document.querySelectorAll('input:not([type="hidden"]), select, textarea');
    inputs.forEach((element) => {
        const input = element;
        if (input.value !== null) {
            input.setAttribute('data-processed-input-value', input.value);
        }
        if (input instanceof HTMLInputElement &&
            (input.type === 'checkbox' || input.type === 'radio')) {
            input.setAttribute('data-processed-input-checked', String(input.checked));
        }
        if (input instanceof HTMLSelectElement) {
            const selectedTexts = Array.from(input.selectedOptions)
                .map((opt) => { var _a, _b; return (_b = (_a = opt.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : ''; })
                .join('||');
            input.setAttribute('data-processed-input-selected-text', selectedTexts);
        }
    });
}
// Add cleanup function to remove markers when needed
function removeClickableMarkers() {
    document.querySelectorAll('[visible-clickable-element-marker]').forEach((element) => {
        element.removeAttribute('visible-clickable-element-marker');
    });
}
function shouldExclude(url, ignoreUserId = false) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!ignoreUserId) {
            if (chrome.storage) {
                const result = yield chrome.storage.local.get('userId');
                if (!result.userId) {
                    console.log('no user id');
                    // if there is no user id, we should not be recording anything
                    return true;
                }
            }
            else {
                const userId = yield new Promise((resolve) => {
                    const handleMessage = (event) => {
                        if (event.data.type === 'GET_USER_ID_RESPONSE') {
                            window.removeEventListener('message', handleMessage);
                            resolve(event.data.userId);
                        }
                    };
                    window.addEventListener('message', handleMessage);
                    window.postMessage({ type: 'GET_USER_ID' }, '*');
                });
                if (!userId) {
                    // if there is no user id, we should not be recording anything
                    return true;
                }
            }
        }
        if (!url) {
            return true;
        }
        return (!_config__WEBPACK_IMPORTED_MODULE_0__.url_includes.some((includeUrl) => url.includes(includeUrl)) ||
            _config__WEBPACK_IMPORTED_MODULE_0__.filter_url.some((excludeUrl) => url.includes(excludeUrl)));
    });
}
function generateHtmlSnapshotId(timestamp, uuid) {
    const url = window.location.href;
    return `html_${hashCode(url)}_${timestamp}_${uuid}`;
}
function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
    }
    console.log('Hash value before return:', hash);
    return hash.toString();
}
function check_user_id(user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${_config__WEBPACK_IMPORTED_MODULE_0__.check_user_id_url}?user_id=${user_id}`, {
                method: 'GET'
            });
            const data = yield response.json();
            if (response.ok) {
                return 'success';
            }
            else {
                return data || 'Unknown error';
            }
        }
        catch (error) {
            console.log(`Error: ${error.message}`);
        }
        return 'Unknown error';
    });
}


function selectRecipe(url = null, document = globalThis.document, window = globalThis.window) {
    var _a, _b;
    let parsedUrl;
    if (url) {
        parsedUrl = new URL(url);
    }
    else {
        parsedUrl = new URL(window.location.href);
    }
    let path = parsedUrl.pathname;
    path = path !== '/' ? path.replace(/\/+/g, '/').replace(/\/$/, '') : path;
    for (const recipe of _recipe_new__WEBPACK_IMPORTED_MODULE_1__.recipes) {
        const matchMethod = recipe.match_method || 'text';
        if (matchMethod === 'text') {
            try {
                // Execute script in tab to check for matching element
                const element = document.querySelector(recipe.match);
                const hasMatch = element &&
                    (!recipe.match_text ||
                        ((_b = (_a = element.textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(recipe.match_text.toLowerCase())) !== null && _b !== void 0 ? _b : false));
                if (hasMatch) {
                    console.log('matched with recipe ', recipe.match);
                    return recipe;
                }
            }
            catch (error) {
                console.error('Error checking text match:', error);
            }
        }
        else if (matchMethod === 'url') {
            const match = recipe.match == '/'
                ? recipe.match
                : recipe.match.replace(/\*/g, '').replace(/\/+/g, '/').replace(/\/$/, '');
            const wildcard_match = '^' + recipe.match.replace(/\*/g, '[^/]*') + '$';
            const wildcard_match_with_ref = '^' + recipe.match.replace(/\*/g, '[^/]+') + '(/ref=.+)$';
            if (match === path) {
                console.log('matched with recipe ', recipe.match);
                return recipe;
            }
            else if (recipe.match_with_ref &&
                (path.startsWith(match + '/ref=') || path.startsWith(match + 'ref='))) {
                console.log('matched with recipe ', recipe.match);
                return recipe;
            }
            else if (recipe.match_with_wildcard) {
                const regExp = new RegExp(wildcard_match);
                const regExpWithRef = new RegExp(wildcard_match_with_ref);
                if (regExp.test(path)) {
                    console.log('matched with recipe ', recipe.match);
                    return recipe;
                }
                else if (recipe.match_with_ref && regExpWithRef.test(path)) {
                    console.log('matched with recipe ', recipe.match);
                    return recipe;
                }
            }
        }
    }
    throw new Error(`No matching recipe found for path: ${path}`);
}
function processRecipe(root = null, url = null, document = globalThis.document, window = globalThis.window) {
    console.log('start process recipe');
    try {
        const recipe = selectRecipe(url, document, window);
        let rootElement;
        if (root) {
            rootElement = root;
        }
        else {
            rootElement = document.querySelector(recipe.selector);
        }
        if (rootElement) {
            // console.log(document)
            const newRoot = (0,_element_processor__WEBPACK_IMPORTED_MODULE_2__.processElement)(rootElement, recipe, '', 0, document, window);
            const simplifiedHTML = newRoot.outerHTML;
            return simplifiedHTML;
        }
    }
    catch (error) {
        console.error('Error processing recipe:', error);
    }
}
// Replace the simple question with a more detailed one based on event type
function getCustomQuestion(eventType, data) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    let question = '';
    let placeholder = 'Enter your reason here...';
    switch (eventType) {
        case 'click_a':
        case 'click_b':
        case 'click_c':
            // Check if it's a specific type of click
            if (data['data-semantic-id'] === 'buybox.delivery.subscribe_save_.purchase_form.set_up_now' ||
                ((_a = data === null || data === void 0 ? void 0 : data.target) === null || _a === void 0 ? void 0 : _a.innerText) === 'Set Up Now') {
                question =
                    'You <span class="highlight-question">clicked</span> on the set up now button. What made you decide to subscribe to this product?';
                placeholder =
                    'I subscribed to this product because (e.g. product feature/advantage over one-time purchase)...';
            }
            else if (data['data-semantic-id'] === 'buybox.delivery.one_time_purchase_.purchase_form.buy_now' ||
                data['data-semantic-id'] === 'buybox.delivery.purchase_form.buy' ||
                data.target.id === 'buy-now-button') {
                question =
                    'You <span class="highlight-question">clicked</span> on the buy now button. What do you like about this particular product?';
                placeholder = 'I am buying this product because...';
            }
            else if (((_b = data['data-semantic-id']) === null || _b === void 0 ? void 0 : _b.endsWith('add_to_cart')) ||
                data.target.id === 'add-to-cart-button' ||
                data.target.name === 'submit.addToCart' ||
                data.target.innerText === 'Add to Cart') {
                question =
                    'You <span class="highlight-question">clicked</span> on the add to cart button. What made you decide to add this item to your cart?';
                placeholder =
                    'I added this item to my cart because (e.g. want to buy/compare/save for future)...';
            }
            else if (data['data-semantic-id'] === 'nav_bar.search_button') {
                question =
                    'You <span class="highlight-question">clicked</span> on the search button. Why/how did you decide to make this search?';
                placeholder =
                    'I decided to search this because (e.g. adjusting previous search/looking for something)';
            }
            else if (((_c = data['data-semantic-id']) === null || _c === void 0 ? void 0 : _c.startsWith('refinements.')) ||
                ((_d = data['data-semantic-id']) === null || _d === void 0 ? void 0 : _d.startsWith('filters.'))) {
                question =
                    'You <span class="highlight-question">clicked</span> on this filter. Why did you use this filter?';
                placeholder = 'I used this filter because (e.g. price/product features)...';
            }
            else if ((_e = data['data-semantic-id']) === null || _e === void 0 ? void 0 : _e.startsWith('product_options.')) {
                question =
                    'You <span class="highlight-question">clicked</span> on this product option. Why did you click this product option?';
                placeholder = 'I clicked this product option because...';
            }
            else if ((_f = data['data-semantic-id']) === null || _f === void 0 ? void 0 : _f.endsWith('check_out')) {
                question =
                    'You <span class="highlight-question">clicked</span> on the checkout button. What made you decide to checkout?';
                placeholder = 'I decided to checkout because...';
            }
            else if (((_g = data['data-semantic-id']) === null || _g === void 0 ? void 0 : _g.startsWith('search_results.')) ||
                ((_h = data['data-semantic-id']) === null || _h === void 0 ? void 0 : _h.startsWith('product_list.')) ||
                (((_j = data['data-semantic-id']) === null || _j === void 0 ? void 0 : _j.startsWith('active_item_list.')) &&
                    ((_k = data['data-semantic-id']) === null || _k === void 0 ? void 0 : _k.endsWith('.product_detail'))) ||
                ((_l = data.target.className) === null || _l === void 0 ? void 0 : _l.includes('sc-product-link'))) {
                question =
                    'You <span class="highlight-question">clicked</span> on this product. Why did you click on this product?';
                placeholder =
                    'I clicked on this product because (e.g. caught my attention/comparing with other options)...';
            }
            else {
                question =
                    'You <span class="highlight-question">clicked</span> on this element. Could you share what you were trying to do or find?';
                placeholder = 'Enter your reason here...';
            }
            break;
        case 'scroll':
            question =
                'You <span class="highlight-question">scrolled</span> on this page. What are you looking for?';
            placeholder = 'I am looking for (e.g. specific products/reviews/information)...';
            break;
        case 'input':
            question =
                'You <span class="highlight-question">typed</span> in this input field. What are you searching for?';
            placeholder = 'I want to find ...';
            break;
        case 'navigation':
            if (data.navigationType === 'back') {
                question =
                    'Why did you decide to <span class="highlight-question">go back</span> to the previous page?';
                placeholder = 'I went back to the previous page because...';
            }
            else if (data.navigationType === 'forward') {
                question =
                    'Why did you decide to <span class="highlight-question">return</span> to this page?';
                placeholder = 'I returned to this page because...';
            }
            else {
                question = `What is the reason for this <span class="highlight-question">${data.navigationType} navigation</span>?`;
                placeholder = 'Enter your reason here...';
            }
            break;
        case 'tabActivate':
            question = `Why did you <span class="highlight-question">switch to this tab</span>?`;
            placeholder = 'I switched to this tab because...';
            break;
        default:
            question = `What is the reason for the ${eventType} action?`;
            placeholder = 'Enter your reason here...';
            break;
    }
    return { question, placeholder };
}
function isValidReason(reason) {
    if (!reason || reason.trim().length === 0) {
        return false; // Empty input
    }
    if (reason.trim().length < 2 || reason.length < 5) {
        return false; // Too short to be meaningful, at least 5 characters and 2 words
    }
    // Check for repetitive or meaningless input (e.g., "aaa","!!!")
    const meaninglessPatterns = [/^(.)\1{3,}$/, /^[^a-zA-Z0-9]+$/];
    for (const pattern of meaninglessPatterns) {
        if (pattern.test(reason.toLowerCase().replace(/\s+/g, ''))) {
            return false;
        }
    }
    return true;
}


/***/ }),

/***/ "./node_modules/@medv/finder/finder.js":
/*!*********************************************!*\
  !*** ./node_modules/@medv/finder/finder.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attr: () => (/* binding */ attr),
/* harmony export */   className: () => (/* binding */ className),
/* harmony export */   finder: () => (/* binding */ finder),
/* harmony export */   idName: () => (/* binding */ idName),
/* harmony export */   tagName: () => (/* binding */ tagName)
/* harmony export */ });
// License: MIT
// Author: Anton Medvedev <anton@medv.io>
// Source: https://github.com/antonmedv/finder
const acceptedAttrNames = new Set(['role', 'name', 'aria-label', 'rel', 'href']);
/** Check if attribute name and value are word-like. */
function attr(name, value) {
    let nameIsOk = acceptedAttrNames.has(name);
    nameIsOk ||= name.startsWith('data-') && wordLike(name);
    let valueIsOk = wordLike(value) && value.length < 100;
    valueIsOk ||= value.startsWith('#') && wordLike(value.slice(1));
    return nameIsOk && valueIsOk;
}
/** Check if id name is word-like. */
function idName(name) {
    return wordLike(name);
}
/** Check if class name is word-like. */
function className(name) {
    return wordLike(name);
}
/** Check if tag name is word-like. */
function tagName(name) {
    return true;
}
/** Finds unique CSS selectors for the given element. */
function finder(input, options) {
    if (input.nodeType !== Node.ELEMENT_NODE) {
        throw new Error(`Can't generate CSS selector for non-element node type.`);
    }
    if (input.tagName.toLowerCase() === 'html') {
        return 'html';
    }
    const defaults = {
        root: document.body,
        idName: idName,
        className: className,
        tagName: tagName,
        attr: attr,
        timeoutMs: 1000,
        seedMinLength: 3,
        optimizedMinLength: 2,
        maxNumberOfPathChecks: Infinity,
    };
    const startTime = new Date();
    const config = { ...defaults, ...options };
    const rootDocument = findRootDocument(config.root, defaults);
    let foundPath;
    let count = 0;
    for (const candidate of search(input, config, rootDocument)) {
        const elapsedTimeMs = new Date().getTime() - startTime.getTime();
        if (elapsedTimeMs > config.timeoutMs ||
            count >= config.maxNumberOfPathChecks) {
            const fPath = fallback(input, rootDocument);
            if (!fPath) {
                throw new Error(`Timeout: Can't find a unique selector after ${config.timeoutMs}ms`);
            }
            return selector(fPath);
        }
        count++;
        if (unique(candidate, rootDocument)) {
            foundPath = candidate;
            break;
        }
    }
    if (!foundPath) {
        throw new Error(`Selector was not found.`);
    }
    const optimized = [
        ...optimize(foundPath, input, config, rootDocument, startTime),
    ];
    optimized.sort(byPenalty);
    if (optimized.length > 0) {
        return selector(optimized[0]);
    }
    return selector(foundPath);
}
function* search(input, config, rootDocument) {
    const stack = [];
    let paths = [];
    let current = input;
    let i = 0;
    while (current && current !== rootDocument) {
        const level = tie(current, config);
        for (const node of level) {
            node.level = i;
        }
        stack.push(level);
        current = current.parentElement;
        i++;
        paths.push(...combinations(stack));
        if (i >= config.seedMinLength) {
            paths.sort(byPenalty);
            for (const candidate of paths) {
                yield candidate;
            }
            paths = [];
        }
    }
    paths.sort(byPenalty);
    for (const candidate of paths) {
        yield candidate;
    }
}
function wordLike(name) {
    if (/^[a-z\-]{3,}$/i.test(name)) {
        const words = name.split(/-|[A-Z]/);
        for (const word of words) {
            if (word.length <= 2) {
                return false;
            }
            if (/[^aeiou]{4,}/i.test(word)) {
                return false;
            }
        }
        return true;
    }
    return false;
}
function tie(element, config) {
    const level = [];
    const elementId = element.getAttribute('id');
    if (elementId && config.idName(elementId)) {
        level.push({
            name: '#' + CSS.escape(elementId),
            penalty: 0,
        });
    }
    for (let i = 0; i < element.classList.length; i++) {
        const name = element.classList[i];
        if (config.className(name)) {
            level.push({
                name: '.' + CSS.escape(name),
                penalty: 1,
            });
        }
    }
    for (let i = 0; i < element.attributes.length; i++) {
        const attr = element.attributes[i];
        if (config.attr(attr.name, attr.value)) {
            level.push({
                name: `[${CSS.escape(attr.name)}="${CSS.escape(attr.value)}"]`,
                penalty: 2,
            });
        }
    }
    const tagName = element.tagName.toLowerCase();
    if (config.tagName(tagName)) {
        level.push({
            name: tagName,
            penalty: 5,
        });
        const index = indexOf(element, tagName);
        if (index !== undefined) {
            level.push({
                name: nthOfType(tagName, index),
                penalty: 10,
            });
        }
    }
    const nth = indexOf(element);
    if (nth !== undefined) {
        level.push({
            name: nthChild(tagName, nth),
            penalty: 50,
        });
    }
    return level;
}
function selector(path) {
    let node = path[0];
    let query = node.name;
    for (let i = 1; i < path.length; i++) {
        const level = path[i].level || 0;
        if (node.level === level - 1) {
            query = `${path[i].name} > ${query}`;
        }
        else {
            query = `${path[i].name} ${query}`;
        }
        node = path[i];
    }
    return query;
}
function penalty(path) {
    return path.map((node) => node.penalty).reduce((acc, i) => acc + i, 0);
}
function byPenalty(a, b) {
    return penalty(a) - penalty(b);
}
function indexOf(input, tagName) {
    const parent = input.parentNode;
    if (!parent) {
        return undefined;
    }
    let child = parent.firstChild;
    if (!child) {
        return undefined;
    }
    let i = 0;
    while (child) {
        if (child.nodeType === Node.ELEMENT_NODE &&
            (tagName === undefined ||
                child.tagName.toLowerCase() === tagName)) {
            i++;
        }
        if (child === input) {
            break;
        }
        child = child.nextSibling;
    }
    return i;
}
function fallback(input, rootDocument) {
    let i = 0;
    let current = input;
    const path = [];
    while (current && current !== rootDocument) {
        const tagName = current.tagName.toLowerCase();
        const index = indexOf(current, tagName);
        if (index === undefined) {
            return;
        }
        path.push({
            name: nthOfType(tagName, index),
            penalty: NaN,
            level: i,
        });
        current = current.parentElement;
        i++;
    }
    if (unique(path, rootDocument)) {
        return path;
    }
}
function nthChild(tagName, index) {
    if (tagName === 'html') {
        return 'html';
    }
    return `${tagName}:nth-child(${index})`;
}
function nthOfType(tagName, index) {
    if (tagName === 'html') {
        return 'html';
    }
    return `${tagName}:nth-of-type(${index})`;
}
function* combinations(stack, path = []) {
    if (stack.length > 0) {
        for (let node of stack[0]) {
            yield* combinations(stack.slice(1, stack.length), path.concat(node));
        }
    }
    else {
        yield path;
    }
}
function findRootDocument(rootNode, defaults) {
    if (rootNode.nodeType === Node.DOCUMENT_NODE) {
        return rootNode;
    }
    if (rootNode === defaults.root) {
        return rootNode.ownerDocument;
    }
    return rootNode;
}
function unique(path, rootDocument) {
    const css = selector(path);
    switch (rootDocument.querySelectorAll(css).length) {
        case 0:
            throw new Error(`Can't select any node with this selector: ${css}`);
        case 1:
            return true;
        default:
            return false;
    }
}
function* optimize(path, input, config, rootDocument, startTime) {
    if (path.length > 2 && path.length > config.optimizedMinLength) {
        for (let i = 1; i < path.length - 1; i++) {
            const elapsedTimeMs = new Date().getTime() - startTime.getTime();
            if (elapsedTimeMs > config.timeoutMs) {
                return;
            }
            const newPath = [...path];
            newPath.splice(i, 1);
            if (unique(newPath, rootDocument) &&
                rootDocument.querySelector(selector(newPath)) === input) {
                yield newPath;
                yield* optimize(newPath, input, config, rootDocument, startTime);
            }
        }
    }
}


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ randomUUID });


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i);


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    if (!getRandomValues) {
        if (typeof crypto === 'undefined' || !crypto.getRandomValues) {
            throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
        }
        getRandomValues = crypto.getRandomValues.bind(crypto);
    }
    return getRandomValues(rnds8);
}


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

const byteToHex = [];
for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] +
        byteToHex[arr[offset + 1]] +
        byteToHex[arr[offset + 2]] +
        byteToHex[arr[offset + 3]] +
        '-' +
        byteToHex[arr[offset + 4]] +
        byteToHex[arr[offset + 5]] +
        '-' +
        byteToHex[arr[offset + 6]] +
        byteToHex[arr[offset + 7]] +
        '-' +
        byteToHex[arr[offset + 8]] +
        byteToHex[arr[offset + 9]] +
        '-' +
        byteToHex[arr[offset + 10]] +
        byteToHex[arr[offset + 11]] +
        byteToHex[arr[offset + 12]] +
        byteToHex[arr[offset + 13]] +
        byteToHex[arr[offset + 14]] +
        byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
    if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
        return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
    }
    options = options || {};
    const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;
    if (buf) {
        offset = offset || 0;
        for (let i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");

function validate(uuid) {
    return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/injected.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/util */ "./src/utils/util.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _medv_finder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @medv/finder */ "./node_modules/@medv/finder/finder.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const work = () => {
    const monkeyPatch = () => {
        window.monkeyPatched = true;
        const originalAddEventListener = EventTarget.prototype.addEventListener;
        // Add this at the top of the file
        const TimeOut = 30000;
        function captureInteraction(eventType, target, timestamp, selector, url, uuid) {
            var _a;
            return __awaiter(this, void 0, void 0, function* () {
                function findClickableParent(element, depth = 0, allAttributes = {}) {
                    // Base case: if element is null or we've reached max depth
                    if (!element || depth >= 20)
                        return allAttributes;
                    // Check and collect all relevant attributes at current level
                    if (element.hasAttribute('data-clickable-id')) {
                        allAttributes['data-clickable-id'] = element.getAttribute('data-clickable-id') || '';
                    }
                    if (element.hasAttribute('data-element-meta-name')) {
                        allAttributes['data-element-meta-name'] =
                            element.getAttribute('data-element-meta-name') || '';
                    }
                    if (element.hasAttribute('data-element-meta-data')) {
                        allAttributes['data-element-meta-data'] =
                            element.getAttribute('data-element-meta-data') || '';
                    }
                    if (element.hasAttribute('data-fetch-url')) {
                        allAttributes['data-fetch-url'] = element.getAttribute('data-fetch-url') || '';
                    }
                    // Continue searching up the tree, passing along collected attributes
                    return findClickableParent(element.parentElement, depth + 1, allAttributes);
                }
                const simplifiedHTML = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.processRecipe)();
                const pageMeta = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.findPageMeta)();
                const allAttributes = findClickableParent(target);
                // Generate new HTML snapshot ID
                const currentSnapshotId = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.generateHtmlSnapshotId)(timestamp, uuid);
                // Create a serializable version of the target
                const serializedTarget = {
                    tagName: target.tagName,
                    className: target.className,
                    id: target.id,
                    innerText: target.innerText || target.value || '',
                    outerHTML: target.outerHTML
                };
                let fetchUrl;
                if (allAttributes.hasOwnProperty('data-fetch-url')) {
                    // cartInfo = await fetchCartInfo(allAttributes['data-fetch-url'])
                    fetchUrl = allAttributes['data-fetch-url'];
                }
                (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.MarkViewableElements)();
                const data = {
                    eventType,
                    timestamp: timestamp,
                    uuid: uuid,
                    target: serializedTarget,
                    htmlSnapshotId: currentSnapshotId,
                    selector: selector || '',
                    'data-semantic-id': allAttributes['data-clickable-id'] || '',
                    'element-meta-name': allAttributes['data-element-meta-name'] || '',
                    'element-meta-data': allAttributes['data-element-meta-data'] || '',
                    pageMeta: pageMeta || '',
                    fetchUrl: fetchUrl || '',
                    url: url || '',
                    windowSize: {
                        width: window.innerWidth,
                        height: window.innerHeight
                    },
                    htmlContent: document.documentElement.outerHTML,
                    simplifiedHTML: simplifiedHTML
                };
                if (target.tagName === 'INPUT' && target.type === 'text') {
                    data['input-terms'] = target.value;
                }
                if (target.id === 'nav-search-submit-button' && target.type === 'submit') {
                    data['input-terms'] = (_a = document.querySelector('input[id="twotabsearchtextbox"]')) === null || _a === void 0 ? void 0 : _a.value;
                }
                return data;
            });
        }
        // todo: patch removeEventListener support wrap
        // const blockSignals = {}
        // const finishSignals = {}
        const wait_for_abort = (signal) => {
            return new Promise((resolve, reject) => {
                if (signal.aborted) {
                    // If already aborted, resolve immediately
                    resolve(void 0);
                }
                else {
                    // Otherwise, listen for the abort event
                    signal.addEventListener('abort', () => resolve(void 0), { once: true });
                }
            });
        };
        const hasDefaultAction = (event) => {
            const element = event.target;
            const anchor = element.closest('a');
            if (anchor) {
                return true;
            }
            // if id is nav-search-submit-button
            // if (element.id === 'nav-search-submit-button') {
            //   return true
            // }
            if (element.tagName.toLowerCase() === 'input') {
                if (element.type === 'submit') {
                    return true;
                }
            }
            // inside a button inside form
            if (element.closest('button') && element.closest('button').closest('form')) {
                // if the button has a type and it's button, return false
                if (element.closest('button').type === 'button') {
                    return false;
                }
                return true;
            }
            return false;
        };
        // Monkey patch addEventListener
        EventTarget.prototype.addEventListener = function (type, listener, options = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                if (options && options.skip_monkey_patch) {
                    return originalAddEventListener.call(this, type, listener, options);
                }
                const callOriginalListener = (event) => {
                    if (typeof listener === 'function') {
                        listener.call(this, event);
                    }
                    else if (listener && typeof listener.handleEvent === 'function') {
                        listener.handleEvent.call(listener, event);
                    }
                };
                if (type === 'click' && listener) {
                    const wrappedListener = function (event) {
                        return __awaiter(this, void 0, void 0, function* () {
                            if (window.shouldExclude) {
                                console.log('should exclude');
                                callOriginalListener(event);
                                return;
                            }
                            const target = event.target;
                            if ((0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.isFromPopup)(target)) {
                                callOriginalListener(event);
                                return;
                            }
                            if (event.just_for_default) {
                                console.log('skip monkey patch');
                                return;
                            }
                            // Add debouncing logic
                            if (event.block_signal) {
                                const controller = new AbortController();
                                event.finish_signals.push(controller);
                                if (event.block_signal) {
                                    const signal = event.block_signal.signal;
                                    yield wait_for_abort(signal);
                                    console.log('[Monkey Patch] Debouncing click event, unblocking');
                                }
                                else {
                                    console.log('[Monkey Patch] Debouncing click event, no block signal');
                                }
                                if (typeof listener === 'function') {
                                    listener.call(this, event);
                                }
                                else if (listener && typeof listener.handleEvent === 'function') {
                                    listener.handleEvent.call(listener, event);
                                }
                                controller.abort();
                                return;
                            }
                            event.block_signal = new AbortController();
                            event.finish_signals = [];
                            console.log('[Monkey Patch] Click detected on:', event.target);
                            console.log(event);
                            const timestamp = new Date().toISOString();
                            // const anchor = target.closest('a')
                            console.log(event.target);
                            if (hasDefaultAction(event)) {
                                // console.log('[Monkey Patch] Click on <a> tag:', anchor.href)
                                console.log('[Monkey Patch] Click on cancelable');
                                event.preventDefault();
                                event.preventDefault = () => {
                                    event.my_default_prevented = true;
                                };
                                event.my_default_prevented = false;
                                console.log('after patch event', event);
                                // const targetHref = anchor.href
                                const uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
                                try {
                                    const screenshotComplete = new Promise((resolve, reject) => {
                                        function handleMessage(event) {
                                            if (event.data.type === 'SCREENSHOT_COMPLETE' &&
                                                event.data.timestamp === timestamp) {
                                                window.removeEventListener('message', handleMessage);
                                                if (event.data.success) {
                                                    resolve(void 0);
                                                }
                                                else {
                                                    reject(new Error(event.data.error || 'Screenshot failed'));
                                                }
                                            }
                                        }
                                        window.addEventListener('message', handleMessage);
                                        // Add timeout
                                        setTimeout(() => {
                                            window.removeEventListener('message', handleMessage);
                                            reject(new Error('Screenshot timeout'));
                                        }, TimeOut);
                                    });
                                    const interactionComplete = new Promise((resolve, reject) => {
                                        function handleMessage1(event) {
                                            if (event.data.type === 'INTERACTION_COMPLETE' &&
                                                event.data.timestamp === timestamp) {
                                                window.removeEventListener('message', handleMessage1);
                                                if (event.data.success) {
                                                    resolve(void 0);
                                                }
                                                else {
                                                    reject(new Error(event.data.error || 'Interaction failed'));
                                                }
                                            }
                                        }
                                        window.addEventListener('message', handleMessage1);
                                        // Add timeout
                                        setTimeout(() => {
                                            window.removeEventListener('message', handleMessage1);
                                            reject(new Error('Interaction timeout'));
                                        }, TimeOut);
                                    });
                                    // log before and after time
                                    const selector = (0,_medv_finder__WEBPACK_IMPORTED_MODULE_1__.finder)(event.target, {
                                        maxNumberOfPathChecks: 0
                                    });
                                    const data = yield captureInteraction('click_a', event.target, timestamp, selector, window.location.href, uuid);
                                    window.postMessage({ type: 'CAPTURE_SCREENSHOT', timestamp: timestamp, uuid: uuid }, '*');
                                    window.postMessage({ type: 'SAVE_INTERACTION_DATA', data: data, uuid: uuid }, '*');
                                    // alert("3")
                                    // Wait for screenshot to complete
                                    console.log('waiting for screenshot and interaction');
                                    yield Promise.all([screenshotComplete, interactionComplete]);
                                    console.log('screenshot and interaction complete');
                                    // console.log("completed")
                                    // debugger
                                    // alert("2")
                                    // window.location.href = targetHref
                                    // re-dispatch the event
                                }
                                catch (error) {
                                    console.error('Error:', error);
                                }
                                finally {
                                    console.log('running original listener');
                                    console.log(listener);
                                    console.log(event);
                                    event.block_signal.abort();
                                    // abort all finishSignals
                                    yield Promise.all(event.finish_signals.map((controller) => wait_for_abort(controller.signal)));
                                    callOriginalListener(event);
                                    console.log('event', event);
                                    console.log('re-dispatch the event if its not prevented, 2');
                                    if (!event.my_default_prevented) {
                                        // debugger
                                        // Clone the original event
                                        const newEvent = new MouseEvent(event.type, {
                                            bubbles: event.bubbles,
                                            cancelable: false,
                                            composed: event.composed,
                                            view: event.view,
                                            detail: event.detail,
                                            screenX: event.screenX,
                                            screenY: event.screenY,
                                            clientX: event.clientX,
                                            clientY: event.clientY,
                                            ctrlKey: event.ctrlKey,
                                            altKey: event.altKey,
                                            shiftKey: event.shiftKey,
                                            metaKey: event.metaKey,
                                            button: event.button,
                                            buttons: event.buttons,
                                            relatedTarget: event.relatedTarget
                                        });
                                        newEvent.just_for_default = true;
                                        // Re-dispatch the new event
                                        target.dispatchEvent(newEvent);
                                    }
                                }
                                return;
                            }
                            const uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
                            try {
                                // Create a promise to wait for screenshot completion
                                const screenshotComplete = new Promise((resolve, reject) => {
                                    function handleMessage(event) {
                                        if (event.data.type === 'SCREENSHOT_COMPLETE' &&
                                            event.data.timestamp === timestamp) {
                                            window.removeEventListener('message', handleMessage);
                                            if (event.data.success) {
                                                resolve(void 0);
                                            }
                                            else {
                                                reject(new Error(event.data.error || 'Screenshot failed'));
                                            }
                                        }
                                    }
                                    window.addEventListener('message', handleMessage);
                                    // Add timeout
                                    setTimeout(() => {
                                        window.removeEventListener('message', handleMessage);
                                        reject(new Error('Screenshot timeout'));
                                    }, TimeOut);
                                });
                                const data = yield captureInteraction('click_b', event.target, timestamp, (0,_medv_finder__WEBPACK_IMPORTED_MODULE_1__.finder)(event.target, {
                                    maxNumberOfPathChecks: 0
                                }), window.location.href, uuid);
                                // Request screenshot
                                window.postMessage({ type: 'CAPTURE_SCREENSHOT', timestamp: timestamp, uuid: uuid }, '*');
                                window.postMessage({ type: 'SAVE_INTERACTION_DATA', data: data, uuid: uuid }, '*');
                                const interactionComplete = new Promise((resolve, reject) => {
                                    function handleMessage1(event) {
                                        if (event.data.type === 'INTERACTION_COMPLETE' &&
                                            event.data.timestamp === timestamp) {
                                            window.removeEventListener('message', handleMessage1);
                                            if (event.data.success) {
                                                resolve(void 0);
                                            }
                                            else {
                                                reject(new Error(event.data.error || 'Interaction failed'));
                                            }
                                        }
                                    }
                                    window.addEventListener('message', handleMessage1);
                                    // Add timeout
                                    setTimeout(() => {
                                        window.removeEventListener('message', handleMessage1);
                                        reject(new Error('Interaction timeout'));
                                    }, TimeOut);
                                });
                                // Wait for screenshot to complete
                                // await ASscreenshotComplete
                                // await interactionComplete
                                console.log('waiting for screenshot and interaction');
                                yield Promise.all([screenshotComplete, interactionComplete]);
                                console.log('screenshot and interaction complete');
                                // Execute original listener after screenshot is captured
                            }
                            catch (error) {
                                console.error('Error capturing screenshot:', error);
                                // Execute original listener even if screenshot fails
                            }
                            finally {
                                console.log('running original listener');
                                event.block_signal.abort();
                                // abort all finishSignals
                                yield Promise.all(event.finish_signals.map((controller) => wait_for_abort(controller.signal)));
                                callOriginalListener(event);
                            }
                        });
                    };
                    // Call the original addEventListener with the wrapped listener
                    if (options) {
                        // if boolean, set passive to true
                        if (typeof options === 'boolean') {
                            options = {
                                useCapture: false,
                                passive: false
                            };
                        }
                        else if (typeof options === 'object') {
                            options.passive = false;
                        }
                    }
                    return originalAddEventListener.call(this, type, wrappedListener, options);
                }
                else {
                    // Call the original addEventListener for non-click events
                    return originalAddEventListener.call(this, type, listener, options);
                }
            });
        };
        console.log('[Monkey Patch] addEventListener successfully patched.');
        // Function to handle clicks on <a> tags
        function handleAnchorClicks() {
            document.addEventListener('click', function (event) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (window.shouldExclude) {
                        console.log('should exclude');
                        return;
                    }
                    if ((0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.isFromPopup)(event.target)) {
                        return;
                    }
                    if (event.just_for_default) {
                        console.log('skip monkey patch b');
                        return;
                    }
                    // Find the closest <a> tag in case of nested elements inside the <a>
                    // const anchor = target.closest('a')
                    if (hasDefaultAction(event)) {
                        // Add debouncing logic
                        const now = Date.now();
                        if (event.block_signal) {
                            console.log('[Monkey Patch] Anchor click event hander from our own listener');
                            console.log('should already be logged in other event listeners');
                            return;
                        }
                        event.block_signal = new AbortController();
                        event.finish_signals = [];
                        const target = event.target;
                        // console.log('[Intercepted] Click on <a> tag:', anchor.href)
                        console.log('[Intercepted] Click on cancelable');
                        // if (!anchor.href.startsWith('javascript:')) {
                        event.preventDefault();
                        event.stopPropagation();
                        const timestamp = new Date().toISOString();
                        // const targetHref = anchor.hrstartPeriodicUploadef
                        const uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
                        try {
                            // 监听截图完成的消息
                            const screenshotComplete = new Promise((resolve, reject) => {
                                function handleMessage(event) {
                                    if (event.data.type === 'SCREENSHOT_COMPLETE' &&
                                        event.data.timestamp === timestamp) {
                                        window.removeEventListener('message', handleMessage);
                                        if (event.data.success) {
                                            resolve(void 0);
                                        }
                                        else {
                                            reject(new Error(event.data.error || 'Screenshot failed'));
                                        }
                                    }
                                }
                                window.addEventListener('message', handleMessage, {
                                    capture: true
                                });
                                // 添加超时处理
                                setTimeout(() => {
                                    window.removeEventListener('message', handleMessage);
                                    reject(new Error('Screenshot timeout'));
                                }, TimeOut); // 3秒超时
                            });
                            // 发送截图请求
                            window.postMessage({ type: 'CAPTURE_SCREENSHOT', timestamp: timestamp, uuid: uuid }, '*');
                            const data = yield captureInteraction('click_c', event.target, timestamp, (0,_medv_finder__WEBPACK_IMPORTED_MODULE_1__.finder)(target, {
                                maxNumberOfPathChecks: 0
                            }), window.location.href, uuid);
                            window.postMessage({ type: 'SAVE_INTERACTION_DATA', data: data, uuid: uuid }, '*');
                            const interactionComplete = new Promise((resolve, reject) => {
                                function handleMessage1(event) {
                                    if (event.data.type === 'INTERACTION_COMPLETE' &&
                                        event.data.timestamp === timestamp) {
                                        window.removeEventListener('message', handleMessage1);
                                        if (event.data.success) {
                                            resolve(void 0);
                                        }
                                        else {
                                            reject(new Error(event.data.error || 'Interaction failed'));
                                        }
                                    }
                                }
                                window.addEventListener('message', handleMessage1);
                                // Add timeout
                                setTimeout(() => {
                                    window.removeEventListener('message', handleMessage1);
                                    reject(new Error('Interaction timeout'));
                                }, TimeOut);
                            });
                            // 等待截图完成
                            yield screenshotComplete;
                            yield interactionComplete;
                            // 截图确认完成后再跳转
                            // window.location.href = targetHref
                        }
                        catch (error) {
                            console.error('Error capturing screenshot:', error);
                            // window.location.href = targetHref
                        }
                        finally {
                            event.block_signal.abort();
                            yield Promise.all(event.finish_signals.map((controller) => wait_for_abort(controller.signal)));
                            console.log('re-dispatch the event if its not prevented, 1');
                            if (!event.my_default_prevented) {
                                // Clone the original event
                                const newEvent = new MouseEvent(event.type, {
                                    bubbles: event.bubbles,
                                    cancelable: false,
                                    composed: event.composed,
                                    view: event.view,
                                    detail: event.detail,
                                    screenX: event.screenX,
                                    screenY: event.screenY,
                                    clientX: event.clientX,
                                    clientY: event.clientY,
                                    ctrlKey: event.ctrlKey,
                                    altKey: event.altKey,
                                    shiftKey: event.shiftKey,
                                    metaKey: event.metaKey,
                                    button: event.button,
                                    buttons: event.buttons,
                                    relatedTarget: event.relatedTarget
                                });
                                newEvent.just_for_default = true;
                                // Re-dispatch the new event
                                target.dispatchEvent(newEvent);
                            }
                        }
                    }
                });
            }, {
                capture: true,
                skip_monkey_patch: true,
                passive: false
            }); // Use capture phase to intercept the event earlier
        }
        // Call the function to handle <a> tag clicks
        handleAnchorClicks();
    };
    if (!window.monkeyPatched) {
        monkeyPatch();
    }
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOMContentLoaded');
        (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.shouldExclude)(window.location.href).then((result) => {
            console.log('shouldExclude', result);
            window.shouldExclude = result;
        });
    }, {
        once: true
    });
};
// ignore user id for now, because full check would be async.
(0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.shouldExclude)(window.location.href, true).then((result) => {
    if (!result) {
        work();
    }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7SUFDeEQsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNYLElBQUksRUFBRTtLQUNQO0FBQ0gsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL3JlY2lwZV9uZXcudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvdXRpbHMvZWxlbWVudC1wcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvdXRpbHMvdXRpbC50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AbWVkdi9maW5kZXIvZmluZGVyLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvaW5qZWN0ZWQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHBvcHVwX3Byb2JhYmlsaXR5ID0gMC4xNVxuZXhwb3J0IGNvbnN0IHBvcHVwX3Njcm9sbF9wcm9iYWJpbGl0eSA9IDAuMDVcbmV4cG9ydCBjb25zdCBwb3B1cF9jbGlja19wcm9iYWJpbGl0eSA9IDAuMlxuZXhwb3J0IGNvbnN0IHBvcHVwX25hdmlnYXRpb25fcHJvYmFiaWxpdHkgPSAwLjE1XG5leHBvcnQgY29uc3QgcG9wdXBfdGFiQWN0aXZhdGVfcHJvYmFiaWxpdHkgPSAwLjE1XG5leHBvcnQgY29uc3QgZm9sZGVyX25hbWUgPSBgdXNlcl9pbnRlcmFjdGlvbl9kYXRhYCAvLyB0aGUgZm9sZGVyIG5hbWUgdG8gc2F2ZSB0aGUgZGF0YVxuZXhwb3J0IGNvbnN0IHppcCA9IHRydWUgLy8gd2hldGhlciB0byB6aXAgdGhlIGRhdGEgd2hlbiBkb3dubG9hZGluZ1xuZXhwb3J0IGNvbnN0IHVwbG9hZF91cmwgPSAnaHR0cDovL3VzZXJkYXRhY29sbGVjdC5oYWlsYWIuaW8vYXBpL3VwbG9hZCdcbmV4cG9ydCBjb25zdCBiYXNlX3VybCA9ICdodHRwOi8vdXNlcmRhdGFjb2xsZWN0LmhhaWxhYi5pby9hcGknXG5leHBvcnQgY29uc3QgZGF0YV9jb2xsZWN0b3Jfc2VjcmV0X2lkID0gJ2hhaWxhYidcbmV4cG9ydCBjb25zdCB1cmxfaW5jbHVkZXMgPSBbJ3d3dy5hbWF6b24uY29tJ11cbmV4cG9ydCBjb25zdCBpbnRlcmFjdGlvbl9zdGF0dXNfdXJsID0gYCR7YmFzZV91cmx9L2ludGVyYWN0aW9uc19yZWNvcmRfc3RhdHVzYFxuZXhwb3J0IGNvbnN0IHJhdGlvbmFsZV9zdGF0dXNfdXJsID0gYCR7YmFzZV91cmx9L3JhdGlvbmFsZV9zdGF0dXNgXG5leHBvcnQgY29uc3QgcHVyY2hhc2Vfc3RhdHVzX3VybCA9IGAke2Jhc2VfdXJsfS9vcmRlcl9zdGF0dXNgXG5leHBvcnQgY29uc3QgY2hlY2tfdXNlcl9pZF91cmwgPSBgJHtiYXNlX3VybH0vY2hlY2tfdXNlcl9pZGBcbmV4cG9ydCBjb25zdCBmaWx0ZXJfdXJsID0gW1xuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9jaGVja291dC8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9idXkvJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vYS9hZGRyZXNzZXMnLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9jcGUveW91cnBheW1lbnRzLycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2FwL3NpZ25pbicsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2FwL2N2Zi8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9hcC9wcm9maWxlLycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2F4L2FjY291bnQvJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vZ3AvcHJvZHVjdC9oYW5kbGUtYnV5LWJveC8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9jaGVja291dHBvcnRhbC8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9jYXJ0L2Rlc2t0b3AvJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vZ3AvcHJpbWVjZW50cmFsL2VkaXRQYXltZW50UHJlZmVyZW5jZSdcbl1cbmV4cG9ydCBjb25zdCBzY3JvbGxfdGhyZXNob2xkID0gMzAwXG4iLCJleHBvcnQgY29uc3QgbmF2ID0ge1xuICBzZWxlY3RvcjogJyNuYXZiYXItbWFpbicsXG4gIG5hbWU6ICduYXZfYmFyJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYtbG9nbycsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIHRleHRfZm9ybWF0OiAnSG9tZXBhZ2UnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI25hdi1zZWFyY2gtYmFyLWZvcm0nLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXQjdHdvdGFic2VhcmNodGV4dGJveCcsXG4gICAgICAgICAgbmFtZTogJ3NlYXJjaF9pbnB1dCcsXG4gICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm0gPSBlbT8udmFsdWVcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdzZWFyY2hfdGVybScsIGRhdGE6IHsgdGVybSB9IH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogJyNuYXYtc2VhcmNoLXN1Ym1pdC1idXR0b24nLFxuICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICBuYW1lOiAnc2VhcmNoX2J1dHRvbidcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LWxpbmstYWNjb3VudExpc3QnLFxuICAgICAgdGV4dF9zZWxlY3RvcjogJyNuYXYtbGluay1hY2NvdW50TGlzdCBzcGFuLm5hdi1saW5lLTInLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnYWNjb3VudF9hbmRfbGlzdF9idXR0b24nXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYtb3JkZXJzJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ29yZGVyX2J1dHRvbidcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI25hdi1jYXJ0JyxcbiAgICAgIHRleHRfc2VsZWN0b3I6ICcjbmF2LWNhcnQgLm5hdi1saW5lLTInLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnY2FydF9idXR0b24nXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYtZmx5b3V0LXNlYXJjaEFqYXgnLFxuICAgICAgbmFtZTogJ3N1Z2dlc3RlZF90ZXJtcycsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdkaXYuY2FyZHNfY2Fyb3VzZWxfd2lkZ2V0LXN1Zy1jb2x1bW4nLFxuICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnZGl2LmNhcmRzX2Nhcm91c2VsX3RleHRfbGVmdF93aWRnZXQtc3VnLXRleHQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zLXN1Z2dlc3Rpb24tY29udGFpbmVyJyxcbiAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LWhhbWJ1cmdlci1tZW51JyxcbiAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICB0ZXh0X2Zvcm1hdDogJ01lbnUnXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYteHNob3AnLFxuICAgICAgbmFtZTogJ3N0b3JlcycsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdsaScsXG4gICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGNhcnRfc2lkZV9iYXIgPSB7XG4gIHNlbGVjdG9yOiAnI25hdi1mbHlvdXQtZXdjJyxcbiAgbmFtZTogJ2NhcnRfc2lkZV9iYXInLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnZGl2LmV3Yy1tdWx0aS1jYXJ0LWRyb3Bkb3duJyxcbiAgICAgIG5hbWU6ICdjYXJ0X3NlbGVjdG9yJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5ld2MtY2FydC1oZWFkZXInLFxuICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlbS5xdWVyeVNlbGVjdG9yKCdpbWcnKT8uYWx0IHx8ICcnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2Rpdi5ld2MtY29tcGFjdC12aWV3LWNhcnQtaGVhZGVyIGRpdi5ld2MtY2FydC1oZWFkZXItbG9nbycsXG4gICAgICBuYW1lOiAnb3Blbl9jYXJ0X3NlbGVjdG9yJyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgdGV4dF9mb3JtYXQ6ICdPcGVuIENhcnQgU2VsZWN0b3InXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2Rpdi5ld2MtY29tcGFjdC1hY3Rpb25zIGEnLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnZ29fdG9fY2FydCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI2V3Yy1jb21wYWN0LWJvZHkgdWwnLFxuICAgICAgbmFtZTogJ3Byb2R1Y3RfbGlzdCcsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6IFwibGkgZGl2W2lkXj0nc2MtaXRlbSddXCIsXG4gICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgJ2Rpdi5ld2MtaXRlbS1pbWFnZSBhLnNjLXByb2R1Y3QtbGluayBpbWc6bm90KC5ld2Mtc2ZsLWltYWdlLXNtYWxsKSdcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiB0aXRsZUVtPy5hbHQgfHwgJydcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmV3Yy1pdGVtLWltYWdlIGEuc2MtcHJvZHVjdC1saW5rIGltZzpub3QoLmV3Yy1zZmwtaW1hZ2Utc21hbGwpJyxcbiAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfaW1hZ2UnLFxuICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uZXdjLXVuaXQtcHJpY2UnLFxuICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAnZGl2W2RhdGEtYWN0aW9uPVwiYS1kcm9wZG93bi1idXR0b25cIl0sIHNwYW5bZGF0YS1hY3Rpb249XCJhLWRyb3Bkb3duLWJ1dHRvblwiXScsXG4gICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCcsXG4gICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cInFzLXdpZGdldC1idXR0b24tY29udGFpbmVyLVwiXScsXG4gICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCcsXG4gICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwicXMtd2lkZ2V0LWRyb3Bkb3duLWNvbnRhaW5lci1cIl0nLFxuICAgICAgICAgICAgICAgICAgbWF0Y2hfaWRfd2l0aF9wYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICB1c2Vfcm9vdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuZXdjLWRlbGV0ZS1pY29uLWNvbnRhaW5lciBidXR0b24nLFxuICAgICAgICAgICAgICBuYW1lOiAnZGVsZXRlJyxcbiAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnZGVsZXRlJyxcbiAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uc2MtcXVhbnRpdHktc3RlcHBlcicsXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdidXR0b25bZGF0YS1hLXNlbGVjdG9yPVwiZGVjcmVtZW50XCJdJyxcbiAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbcm9sZT0nc3BpbmJ1dHRvbiddXCIsXG4gICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VycmVudCBRdWFudGl0eToge30nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2J1dHRvbltkYXRhLWEtc2VsZWN0b3I9XCJpbmNyZW1lbnRcIl0nLFxuICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFzaW4gPSBlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3Rvcignc3Bhbi5ld2MtdW5pdC1wcmljZScpXG4gICAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpLnRyaW0oKVxuICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICdkaXYuZXdjLWl0ZW0taW1hZ2UgYS5zYy1wcm9kdWN0LWxpbmsgaW1nOm5vdCguZXdjLXNmbC1pbWFnZS1zbWFsbCknXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmFsdFxuICAgICAgICAgICAgY29uc3QgdXJsRW0gPSB0aXRsZUVtPy5wYXJlbnRFbGVtZW50XG4gICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAnZGl2W2RhdGEtYWN0aW9uPVwiYS1kcm9wZG93bi1idXR0b25cIl0sIHNwYW5bZGF0YS1hY3Rpb249XCJhLWRyb3Bkb3duLWJ1dHRvblwiXSwgc3Bhbi5zYy1xdWFudGl0eS1zdGVwcGVyIGRpdltyb2xlPVwic3BpbmJ1dHRvblwiXSdcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gcXVhbnRpdHlFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBuYW1lOiAnY2FydF9pdGVtcycsXG4gICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIHF1YW50aXR5IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IHJlZmluZW1lbnRfb3B0aW9uID0gW1xuICB7XG4gICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5wdWlzLWJvbGQtd2VpZ2h0LXRleHQnLFxuICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgIGNsYXNzOiAncmVmaW5lbWVudC10aXRsZSdcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnYS5zLW5hdmlnYXRpb24tY2xlYXItbGluaycsXG4gICAgYWRkX3RleHQ6IHRydWUsXG4gICAgbmFtZTogJ2NsZWFyX3NlbGVjdGlvbicsXG4gICAgY2xpY2thYmxlOiB0cnVlXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJ3VsID4gc3Bhbi5hLWRlY2xhcmF0aXZlID4gc3BhbiA+IGxpOmhhcyhhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0pJyxcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgLy8gY2xpY2tfc2VsZWN0b3I6IFwiYVwiLFxuICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAvLyB0ZXh0ID0gJ0NsZWFyIE9wdGlvbiAnICsgdGV4dFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXh0XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgIHRleHQgKz0gJ18nXG4gICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IG5hbWVFbSA9IGVsZW1lbnQuY2xvc2VzdCgndWwnKT8ucGFyZW50RWxlbWVudD8uZmlyc3RFbGVtZW50Q2hpbGRcbiAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRW0/LmlubmVyVGV4dFxuICAgICAgICA/LnRyaW0oKVxuICAgICAgICAucmVwbGFjZSgvWyBdL2csICdfJylcbiAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgLnRyaW0oKVxuICAgICAgICAucmVwbGFjZSgvXl8rfF8rJC9nLCAnJylcbiAgICAgICAgLnJlcGxhY2UoL1tfXFxkXSskLywgJycpXG5cbiAgICAgIGxldCB1cmwgPSAnJ1xuXG4gICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSkge1xuICAgICAgICB1cmwgPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgIH1cblxuICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLFxuICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IHRleHQ/LnRyaW0oKSB8fCAnJywgc2VsZWN0ZWQ6IHRydWUsIHVybCB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSxcbiAgICAgICAgZGF0YTogeyB0aXRsZTogdGV4dD8udHJpbSgpIHx8ICcnLCBzZWxlY3RlZDogZmFsc2UsIHVybCB9XG4gICAgICB9XG4gICAgfSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjpcbiAgICAgIFwidWwgPiBzcGFuLmEtZGVjbGFyYXRpdmUgPiBsaSA+IHNwYW4gPiBkaXZbZGF0YS1hLWV4cGFuZGVyLW5hbWU9J2ZpbHRlci1jb250ZW50LWV4cGFuZGVyJ11cIixcbiAgICBuYW1lOiAnbW9yZV9vcHRpb25zJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogXCJhW2RhdGEtY3NhLWMtZnVuYy1kZXBzPSdhdWktZGEtYS1leHBhbmRlci10b2dnbGUnXVwiLFxuICAgICAgICBuYW1lOiAndG9nZ2xlX2V4cGFuc2lvbicsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2xpJyxcbiAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIC8vIGNsaWNrX3NlbGVjdG9yOiBcImFcIixcbiAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JykgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgICAvLyB0ZXh0ID0gJ0NsZWFyIE9wdGlvbiAnICsgdGV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgdGV4dCArPSAnXydcbiAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgbmFtZUVtID0gZWxlbWVudC5jbG9zZXN0KCd1bCcpPy5wYXJlbnRFbGVtZW50Py5jbG9zZXN0KCd1bCcpXG4gICAgICAgICAgICA/LnBhcmVudEVsZW1lbnQ/LmZpcnN0RWxlbWVudENoaWxkXG4gICAgICAgICAgY29uc3QgbmFtZSA9IG5hbWVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICA/LnRyaW0oKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1sgXS9nLCAnXycpXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgLnJlcGxhY2UoL15fK3xfKyQvZywgJycpXG4gICAgICAgICAgICAucmVwbGFjZSgvW19cXGRdKyQvLCAnJylcblxuICAgICAgICAgIGxldCB1cmwgPSAnJ1xuXG4gICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCdocmVmJykpIHtcbiAgICAgICAgICAgIHVybCA9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JykgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLFxuICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlOiB0ZXh0Py50cmltKCkgfHwgJycsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLFxuICAgICAgICAgICAgZGF0YTogeyB0aXRsZTogdGV4dD8udHJpbSgpIHx8ICcnLCBzZWxlY3RlZDogZmFsc2UsIHVybCB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfVxuXVxuXG5leHBvcnQgY29uc3QgcHJvZHVjdF9mYWN0cyA9IHtcbiAgc2VsZWN0b3I6ICcjcHJvZHVjdEZhY3RzRGVza3RvcEV4cGFuZGVyJyxcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsYXNzOiAncHJvZHVjdC1mYWN0cydcbn1cblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RfZGVsaXZlcnkgPSB7XG4gIHNlbGVjdG9yOiAnZGl2Lm1pci1sYXlvdXQtREVMSVZFUllfQkxPQ0stc2xvdC1QUklNQVJZX0RFTElWRVJZX01FU1NBR0VfTEFSR0UnLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2xhc3M6ICdwcm9kdWN0LWRlbGl2ZXJ5J1xufVxuXG5leHBvcnQgY29uc3QgcXVhbnRpdHlfc2VsZWN0b3IgPSB7XG4gIHNlbGVjdG9yOiAnI3NlbGVjdFF1YW50aXR5LCBkaXZbaWRePVwicXMtd2lkZ2V0LWJ1dHRvbi1jb250YWluZXItYXRmY1wiXScsXG4gIG5hbWU6ICdxdWFudGl0eV9zZWxlY3RvcicsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdsYWJlbCcsXG4gICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtZHJvcGRvd24tcHJvbXB0JyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICByZXR1cm4geyBuYW1lOiAncHJvZHVjdF9xdWFudGl0eScsIGRhdGE6IHsgcXVhbnRpdHk6IGVtLmlubmVyVGV4dCB9IH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnc2VsZWN0JyxcbiAgICAgIC8vIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnYnV0dG9uJyxcbiAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCcsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdkaXYucXMtd2lkZ2V0LWRyb3Bkb3duLXdyYXBwZXIgc3BhbltkYXRhLWFjdGlvbj1cInFzLXdpZGdldC1kcm9wZG93bi1kZWNsXCJdJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgdXNlX3Jvb3Q6IHRydWUsXG4gICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgIHRleHRfZm9ybWF0OiAnRHJvcCBEb3duIE9wdGlvbiB7fSdcbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGl2ZXJ5X2ZyZXF1ZW5jeV9zZWxlY3RvciA9IHtcbiAgc2VsZWN0b3I6ICcjcmVwbGVuaXNobWVudEZyZXF1ZW5jeV9mZWF0dXJlX2RpdicsXG4gIG5hbWU6ICdkZWxpdmVyeV9mcmVxdWVuY3lfc2VsZWN0b3InLFxuICB0ZXh0X3NlbGVjdG9yOiAnZGl2LmEtc2VjdGlvbi5hLXNwYWNpbmctbWljcm8gPiBzcGFuJyxcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjcmN4T3JkRnJlcU9ubWxXcmFwcGVyIHNwYW4uYS1kcm9wZG93bi1wcm9tcHQnLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI3JjeE9yZEZyZXFPbm1sV3JhcHBlciBzZWxlY3QnLFxuICAgICAgLy8gY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3Qgc2V0X3VwX25vd19idXR0b24gPSB7XG4gIHNlbGVjdG9yOiAnI3JjeC1zdWJzY3JpYmUtc3VibWl0LWJ1dHRvbi1hbm5vdW5jZScsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGlja2FibGU6IHRydWUsXG4gIG5hbWU6ICdzZXRfdXBfbm93JyxcbiAgY2xhc3M6ICdwcm9kdWN0LXNldC11cC1ub3cnXG59XG5cbmV4cG9ydCBjb25zdCBhZGRfdG9fY2FydF9idXR0b24gPSB7XG4gIHNlbGVjdG9yOlxuICAgIFwiaW5wdXRbbmFtZT0nc3VibWl0LmFkZC10by1jYXJ0J10sIGlucHV0W25hbWU9J3N1Ym1pdC5hZGQtdG8tY2FydC11YmInXSwgI2ZyZXNoQWRkVG9DYXJ0QnV0dG9uIGlucHV0LCAjZGVhbHN4X2F0Y19idG5cIixcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsaWNrYWJsZTogdHJ1ZSxcbiAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgY2xhc3M6ICdwcm9kdWN0LWFkZC10by1jYXJ0J1xufVxuXG5leHBvcnQgY29uc3QgYnV5X25vd19idXR0b24gPSB7XG4gIHNlbGVjdG9yOiBcImlucHV0W25hbWU9J3N1Ym1pdC5idXktbm93J11cIixcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsaWNrYWJsZTogdHJ1ZSxcbiAgbmFtZTogJ2J1eV9ub3cnLFxuICBjbGFzczogJ3Byb2R1Y3QtYnV5LW5vdydcbn1cblxuZXhwb3J0IGNvbnN0IGdvX3RvX2NhcnRfYnV0dG9uX2Zvcl9mbGFzaF9zYWxlcyA9IHtcbiAgc2VsZWN0b3I6ICcjZGVhbHN4X2luY2FydCBzcGFuLmEtYnV0dG9uJyxcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsaWNrYWJsZTogdHJ1ZSxcbiAgbmFtZTogJ2Zyb21fdGV4dCdcbn1cblxuZXhwb3J0IGNvbnN0IGJ1eV9ib3hfd2l0aF9hY2NvcmRpb24gPSB7XG4gIHNlbGVjdG9yOiAnI2J1eUJveEFjY29yZGlvbiA+IGRpdi5hLWJveC5jZWx3aWRnZXQnLFxuICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5hY2NvcmRpb24tY2FwdGlvbiA+IHNwYW4nLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOlxuICAgICAgICBcImRpdltkYXRhLWNzYS1jLWNvbnRlbnQtaWQ9J29mZmVyX2Rpc3BsYXlfZGVza3RvcF9hY2NvcmRpb25faGVhZGVyJ10sIGRpdltkYXRhLWNzYS1jLWNvbnRlbnQtaWQ9J29mZmVyX2Rpc3BsYXlfbW9iaWxlX2FjY29yZGlvbl9oZWFkZXInXVwiLFxuICAgICAgbmFtZTogJ2FjY29yZGlvbl9zZWxlY3RvcicsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIHRleHRfc2VsZWN0b3I6ICdoNSBzcGFuLmEtdGV4dC1ib2xkJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdkaXYuYS1hY2NvcmRpb24taW5uZXIuYWNjb3JkaW9uLXJvdy1jb250ZW50JyxcbiAgICAgIG5hbWU6ICdwdXJjaGFzZV9mb3JtJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHByb2R1Y3RfZmFjdHMsXG4gICAgICAgIHByb2R1Y3RfZGVsaXZlcnksXG4gICAgICAgIHF1YW50aXR5X3NlbGVjdG9yLFxuICAgICAgICBkZWxpdmVyeV9mcmVxdWVuY3lfc2VsZWN0b3IsXG4gICAgICAgIHNldF91cF9ub3dfYnV0dG9uLFxuICAgICAgICBhZGRfdG9fY2FydF9idXR0b24sXG4gICAgICAgIGdvX3RvX2NhcnRfYnV0dG9uX2Zvcl9mbGFzaF9zYWxlcyxcbiAgICAgICAgYnV5X25vd19idXR0b25cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fZGVsaXZlcnkgPSB7XG4gIHNlbGVjdG9yOiAnI2dzb2Rfc2luZ2xlT2ZmZXJEaXNwbGF5X0Rlc2t0b3AnLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI2FkZFRvQ2FydCcsXG4gICAgICBuYW1lOiAncHVyY2hhc2VfZm9ybScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICBwcm9kdWN0X2ZhY3RzLFxuICAgICAgICBwcm9kdWN0X2RlbGl2ZXJ5LFxuICAgICAgICBxdWFudGl0eV9zZWxlY3RvcixcbiAgICAgICAgYWRkX3RvX2NhcnRfYnV0dG9uLFxuICAgICAgICBidXlfbm93X2J1dHRvblxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9waWNrX3VwID0ge1xuICBzZWxlY3RvcjogJyNnc29kX3NpbmdsZU9mZmVyRGlzcGxheV9ncm91cF8yX0Rlc2t0b3AnLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI3BpY2tVcE9mZmVyRGlzcGxheScsXG4gICAgICBuYW1lOiAncHVyY2hhc2VfZm9ybScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICBwcm9kdWN0X2ZhY3RzLFxuICAgICAgICBwcm9kdWN0X2RlbGl2ZXJ5LFxuICAgICAgICBxdWFudGl0eV9zZWxlY3RvcixcbiAgICAgICAgYWRkX3RvX2NhcnRfYnV0dG9uLFxuICAgICAgICBidXlfbm93X2J1dHRvblxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgY2Fyb3VzZWxfY2FyZCA9IHtcbiAgc2VsZWN0b3I6ICdsaS5hLWNhcm91c2VsLWNhcmQ6bm90KC5hLWNhcm91c2VsLWNhcmQtZW1wdHkpLCAjZ3JpZEl0ZW1Sb290JyxcbiAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gIHRleHRfanM6IChlbSkgPT4ge1xuICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ2EgZGl2W2NsYXNzKj1cInNjLXRydW5jYXRlLWRlc2t0b3BcIl0sIGEgc3Bhbi50aXRsZSwgYSBkaXZbY2xhc3MqPVwic2MtY3NzLWxpbmUtY2xhbXBcIl0sIGEgc3BhbltjbGFzcyo9XCJ0aXRsZVIzXCJdLCBkaXZbZGF0YS1jeT1cInRpdGxlLXJlY2lwZVwiXSwgYVtpZCo9XCJ0aXRsZVwiXSwgYS5zdy1wcm9kdWN0LXRpdGxlJ1xuICAgIClcbiAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LnRpdGxlIHx8IHRpdGxlRW0/LmlubmVyVGV4dCB8fCAnJ1xuICAgIGNvbnN0IGltZ0VtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICdpbWdbY2xhc3MqPVwicHJvZHVjdC1pbWFnZVwiXSwgaW1nLmEtZHluYW1pYy1pbWFnZSwgaW1nW2NsYXNzKj1cImNhcm91c2VsLWltYWdlXCJdIGltZy5zLWltYWdlJ1xuICAgIClcbiAgICBjb25zdCBpbWdBbHQgPSBpbWdFbT8uYWx0XG4gICAgcmV0dXJuIHRpdGxlIHx8IGltZ0FsdCB8fCAnJ1xuICB9LFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOlxuICAgICAgICAnYTpoYXMoaW1nW2NsYXNzKj1cInByb2R1Y3QtaW1hZ2VcIl0sIGltZy5hLWR5bmFtaWMtaW1hZ2UsIGltZ1tjbGFzcyo9XCJjYXJvdXNlbC1pbWFnZVwiXSksIGltZy5zLWltYWdlLCBhW3RhcmdldD1cIl90b3BcIl06aGFzKGltZyk6bm90KDpoYXMoZGl2LCBzcGFuKSksIGEuc3ctcHJvZHVjdC1pbWFnZS1saW5rJyxcbiAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6XG4gICAgICAgICdhIGRpdltjbGFzcyo9XCJzYy10cnVuY2F0ZS1kZXNrdG9wXCJdLCBhIGRpdjpoYXMoPiBzcGFuLnRpdGxlKSwgYSBkaXZbY2xhc3MqPVwic2MtY3NzLWxpbmUtY2xhbXBcIl0sIGE6aGFzKHNwYW5bY2xhc3MqPVwidGl0bGVSM1wiXSksIGRpdltkYXRhLWN5PVwidGl0bGUtcmVjaXBlXCJdLCBhW2lkKj1cInRpdGxlXCJdLCBhLnN3LXByb2R1Y3QtdGl0bGUnLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBuYW1lOiAncHJvZHVjdF90aXRsZScsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cInNpbmdsZVN3YXRjaGVzQ29udGFpbmVyXCJdJyxcbiAgICAgIG5hbWU6ICdvcHRpb25zJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2xpIGEnLFxuICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlbS5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fCBlbS5pbm5lclRleHQgfHwgJydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2FbY2xhc3MqPVwiX2xpbmtfXCJdJyxcbiAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwidmFyaWF0aW9uTGlua1wiXSBhJyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnYTpoYXMoaVtjbGFzcyo9XCJzdGFyXCJdKSwgYTpoYXMoaVtkYXRhLWN5PVwicmV2aWV3cy1yYXRpbmdzLXNsb3RcIl0pLCBhLmFkUmV2aWV3TGluaycsXG4gICAgICBuYW1lOiAncHJvZHVjdF9yYXRpbmcnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIGVtLnRpdGxlIHx8IGVtLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8ICcnXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2Uucy11bmRlcmxpbmUtdGV4dCcsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIHRleHRfZm9ybWF0OiAne30gcmV2aWV3cycsXG4gICAgICBjbGFzczogJ3Byb2R1Y3QtcmF0aW5nLWNvdW50JyxcbiAgICAgIG5hbWU6ICdwcm9kdWN0X3JhdGluZ19jb3VudCcsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOlxuICAgICAgICAnYVthcmlhLWRlc2NyaWJlZGJ5Kj1cInNwX2RldGFpbF90aGVtYXRpYy1kZWFsc1wiXTpub3QoOmhhcyhzcGFuLmEtcHJpY2UpKSwgYVthcmlhLWRlc2NyaWJlZGJ5Kj1cInNwX2RldGFpbF90aGVtYXRpYy1yZWNlbnRfaGlzdG9yeVwiXTpub3QoOmhhcyhzcGFuLmEtcHJpY2UpKScsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJzYy1wcmljZVwiXScsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuW2NsYXNzKj1cInNjLXByaWNlXCJdJyxcbiAgICAgIG5hbWU6ICdwcm9kdWN0X3ByaWNlJyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6XG4gICAgICAgICdkaXYuYS1zZWN0aW9uLmFvay1yZWxhdGl2ZTpoYXMoc3Bhbi5hLXByaWNlIHNwYW4uYS1vZmZzY3JlZW4pLCBkaXYuYS1jb2xvci1wcmljZTpoYXMoc3Bhbi5hLXByaWNlIHNwYW4uYS1vZmZzY3JlZW4pLCBhW2FyaWEtZGVzY3JpYmVkYnk9XCJwcmljZS1saW5rXCJdOmhhcyhzcGFuLmEtcHJpY2Ugc3Bhbi5hLW9mZnNjcmVlbiknLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXByaWNlIHNwYW4uYS1vZmZzY3JlZW4nLFxuICAgICAgbmFtZTogJ3Byb2R1Y3RfcHJpY2UnXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ3NwYW4uYS1wcmljZSBzcGFuLmEtb2Zmc2NyZWVuJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2EucEJvb2tzLXNmLXBvaW50cy1jb21wb25lbnQnLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAncHJvZHVjdF9wb2ludHMnXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2lucHV0W25hbWU9XCJzdWJtaXQuYWRkVG9DYXJ0XCJdLCBzcGFuW2NsYXNzKj1cImFjdGlvbkJ1dHRvblwiXTpoYXMoaS5hLWljb24tY2FydCknLFxuICAgICAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgdGV4dF9mb3JtYXQ6ICdBZGQgVG8gQ2FydCcsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnZGl2W25hbWU9XCJheC1xc1wiXSwgZGl2W2lkXj1cImF0Y1N0ZXBwZXJTZWN0aW9uXCJdJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJ10sIGJ1dHRvbltkYXRhLWFjdGlvbj0ncmVtb3ZlJ11cIixcbiAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0RlY3JlYXNlIHF1YW50aXR5IGJ5IG9uZScsXG4gICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbcm9sZT0nc3BpbmJ1dHRvbiddLCBzcGFuLmF0Y1N0ZXBwZXJRdWFudGl0eVwiLFxuICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VycmVudCBRdWFudGl0eToge30nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nSW5jcmVhc2UgcXVhbnRpdHkgYnkgb25lJ10sIGJ1dHRvbltkYXRhLWFjdGlvbj0nYWRkJ11cIixcbiAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0luY3JlYXNlIHF1YW50aXR5IGJ5IG9uZScsXG4gICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLWJ1dHRvbiBhLCBkaXZbZGF0YS1jb21wb25lbnQtaWQ9XCJzZWVBbGxCdXlpbmdPcHRpb25zQnV0dG9uXCJdIHNwYW4uYS1idXR0b24nLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgIH1cbiAgXSxcbiAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgIGNvbnN0IGFzaW5KU09OU3RyaW5nID0gZW1cbiAgICAgIC5xdWVyeVNlbGVjdG9yKCdkaXZbZGF0YS1hZGZlZWRiYWNrZGV0YWlsc10nKVxuICAgICAgPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWRmZWVkYmFja2RldGFpbHMnKVxuICAgIGxldCBhc2luSlNPTlxuICAgIGlmIChhc2luSlNPTlN0cmluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhc2luSlNPTiA9IEpTT04ucGFyc2UoYXNpbkpTT05TdHJpbmcpXG4gICAgfVxuICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnZGl2W2lkKj1cInNjLXR1cmJvLWNvbnRhaW5lclwiXSwgZGl2W2RhdGEtYXNpbl0sIGlucHV0W2RhdGEtYXNpbl0nXG4gICAgKVxuICAgIGNvbnN0IGFzaW4gPVxuICAgICAgYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpIHx8XG4gICAgICBhc2luRW0/LmdldEF0dHJpYnV0ZSgnaWQnKT8uc3BsaXQoJy0nKS5wb3AoKSB8fFxuICAgICAgYXNpbkpTT04/LmFzaW5JZCB8fFxuICAgICAgJydcbiAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcignYSBzcGFuW2NsYXNzKj1cInNjLXByaWNlXCJdLCBzcGFuLmEtcHJpY2Ugc3Bhbi5hLW9mZnNjcmVlbicpXG4gICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ2EgZGl2W2NsYXNzKj1cInNjLXRydW5jYXRlLWRlc2t0b3BcIl0sIGEgc3Bhbi50aXRsZSwgYSBkaXZbY2xhc3MqPVwic2MtY3NzLWxpbmUtY2xhbXBcIl0sIGEgc3BhbltjbGFzcyo9XCJ0aXRsZVIzXCJdLCBkaXZbZGF0YS1jeT1cInRpdGxlLXJlY2lwZVwiXSwgYVtpZCo9XCJ0aXRsZVwiXSwgYS5zdy1wcm9kdWN0LXRpdGxlJ1xuICAgIClcbiAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LnRpdGxlIHx8IHRpdGxlRW0/LmlubmVyVGV4dCB8fCAnJ1xuICAgIGNvbnN0IGltZ0VtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICdpbWdbY2xhc3MqPVwicHJvZHVjdC1pbWFnZVwiXSwgaW1nLmEtZHluYW1pYy1pbWFnZSwgaW1nW2NsYXNzKj1cImNhcm91c2VsLWltYWdlXCJdIGltZy5zLWltYWdlJ1xuICAgIClcbiAgICBjb25zdCBpbWdBbHQgPSBpbWdFbT8uYWx0XG4gICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ2E6aGFzKGRpdltjbGFzcyo9XCJzYy10cnVuY2F0ZS1kZXNrdG9wXCJdKSwgYTpoYXMoc3Bhbi50aXRsZSksIGE6aGFzKHNwYW5bY2xhc3MqPVwidGl0bGVcIl0pJ1xuICAgIClcbiAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICBjb25zdCBxdWFudGl0eUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICdkaXZbbmFtZT1cImF4LXFzXCJdIGRpdltyb2xlPVwic3BpbmJ1dHRvblwiXSwgZGl2W2lkXj1cImF0Y1N0ZXBwZXJTZWN0aW9uXCJdIHNwYW4uYXRjU3RlcHBlclF1YW50aXR5J1xuICAgIClcbiAgICBjb25zdCBxdWFudGl0eSA9IHF1YW50aXR5RW0/LmlubmVyVGV4dCB8fCAnJ1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiAncHJvbW90aW9uX2l0ZW1zJyxcbiAgICAgIGRhdGE6IHsgdGl0bGU6IHRpdGxlIHx8IGltZ0FsdCB8fCAnJywgYXNpbiwgcHJpY2UsIHVybCwgcXVhbnRpdHkgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY2FydCA9IFtcbiAgbmF2LFxuICB7XG4gICAgc2VsZWN0b3I6ICcjc2MtY29sbGFwc2VkLWNhcnRzLWNvbnRhaW5lcicsXG4gICAgbmFtZTogJ2NhcnRzJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1jb2xsYXBzZWQtY2FydC1jb250YWluZXInLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5zYy1jYXJ0LWhlYWRlcicpXG4gICAgICAgICAgY29uc3QgdGl0bGUgPVxuICAgICAgICAgICAgdGl0bGVFbT8ucXVlcnlTZWxlY3RvcignaDJbYXJpYS1sYWJlbF0nKT8uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgfHxcbiAgICAgICAgICAgIHRpdGxlRW0/LmlubmVyVGV4dCB8fFxuICAgICAgICAgICAgJ2NhcnQnXG4gICAgICAgICAgcmV0dXJuIHRpdGxlXG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtY2FydC1oZWFkZXI6aGFzKGEgaDIgaW1nKScsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gZW0ucXVlcnlTZWxlY3RvcignYSBoMiBpbWcnKT8uYWx0IHx8ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltkYXRhLW5hbWU9XCJjb2xsYXBzZWRfaXRlbV9saXN0XCJdJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdpdGVtX2xpc3QnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1idXktYm94LWlubmVyLWJveCBpbnB1dFtuYW1lXj1cInByb2NlZWRUb0FMTUNoZWNrb3V0XCJdJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdjaGVja19vdXQnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWJ1eS1ib3gtaW5uZXItYm94IGEnLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLW5hbWU9J0FjdGl2ZSBJdGVtcyddXCIsXG4gICAgbmFtZTogJ2FjdGl2ZV9pdGVtX2xpc3QnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWxpc3QtaXRlbS1jb250ZW50JyxcbiAgICAgICAgdGV4dF9zZWxlY3RvcjpcbiAgICAgICAgICAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCB1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZSBzcGFuLmEtdHJ1bmNhdGUtZnVsbCcsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWl0ZW0tY2hlY2stY2hlY2tib3gtc2VsZWN0b3IgbGFiZWwnLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ2NoZWNrYm94J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtaW1hZ2Utd3JhcHBlciBhJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIHVsID4gbGkgPiBzcGFuLmEtbGlzdC1pdGVtID4gYS5zYy1wcm9kdWN0LXRpdGxlJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtdHJ1bmNhdGUtZnVsbCcsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkuc2MtZGVsaXZlcnktbWVzc2FnaW5nJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1iYWRnZS1wcmljZS10by1wYXkgc3Bhbi5zYy1wcm9kdWN0LXByaWNlIHNwYW46bm90KC5hLW9mZnNjcmVlbiknLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkuc2MtcHJvZHVjdC12YXJpYXRpb24nLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnYS5zbnMtb3B0LWluLWxpbmstZGVza3RvcCcsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Euc25zLXJlY3VycmVuY2UtcGVyaW9kLXNlbGVjdG9yJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0RlbGl2ZXJ5IGV2ZXJ5OiB7fSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCBzcGFuLnNjLXF1YW50aXR5LXN0ZXBwZXInLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgXCJidXR0b25bYXJpYS1sYWJlbD0nRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJ10sIGJ1dHRvbltkYXRhLWFjdGlvbj0nYS1zdGVwcGVyLWRlY3JlbWVudCddXCIsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdkZWNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbcm9sZT0nc3BpbmJ1dHRvbiddXCIsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdJbmNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCBpbnB1dFtkYXRhLWFjdGlvbj0nZGVsZXRlJ11cIixcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ2RlbGV0ZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgaW5wdXRbZGF0YS1hY3Rpb249J3NhdmUtZm9yLWxhdGVyJ11cIixcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ3NhdmVfZm9yX2xhdGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFzaW4gPSBlbS5wYXJlbnRFbGVtZW50Py5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnZGl2LnNjLWJhZGdlLXByaWNlLXRvLXBheSBzcGFuLnNjLXByb2R1Y3QtcHJpY2Ugc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKSdcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ2Rpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgdWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUgc3Bhbi5hLXRydW5jYXRlLWZ1bGwnXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ2Rpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgdWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUnXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdsaS5zYy1kZWxpdmVyeS1tZXNzYWdpbmcnKVxuICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5ID0gZGVsaXZlcnlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1tcXG5dL2csICcgJylcbiAgICAgICAgICBjb25zdCBxdWFudGl0eUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCBzcGFuLnNjLXF1YW50aXR5LXN0ZXBwZXIgZGl2W3JvbGU9J3NwaW5idXR0b24nXVwiXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gcXVhbnRpdHlFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5zYy1pdGVtLWNoZWNrLWNoZWNrYm94LXNlbGVjdG9yIGlucHV0JylcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHNlbGVjdGVkRW0/LmdldEF0dHJpYnV0ZSgnY2hlY2tlZCcpICE9PSBudWxsXG4gICAgICAgICAgY29uc3Qgb3B0aW9uc0VtID0gZW0ucXVlcnlTZWxlY3RvckFsbCgnbGkuc2MtcHJvZHVjdC12YXJpYXRpb24gPiBzcGFuJylcbiAgICAgICAgICBjb25zdCBvcHRpb25zID0gW11cbiAgICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbkVtIG9mIG9wdGlvbnNFbSkge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uS2V5RW0gPSBvcHRpb25FbT8ucXVlcnlTZWxlY3Rvcignc3Bhbi5hLXRleHQtYm9sZCcpXG4gICAgICAgICAgICBjb25zdCBvcHRpb25WYWx1ZUVtID0gb3B0aW9uRW0/LnF1ZXJ5U2VsZWN0b3IoJ3NwYW46bm90KC5hLXRleHQtYm9sZCknKVxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uS2V5ID0gb3B0aW9uS2V5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bOlxcbl0vZywgJycpLnRyaW0oKVxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uVmFsdWUgPSBvcHRpb25WYWx1ZUVtPy5pbm5lclRleHQucmVwbGFjZSgvWzpcXG5dL2csICcnKS50cmltKClcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IHsgW29wdGlvbktleV06IG9wdGlvblZhbHVlIH1cbiAgICAgICAgICAgIG9wdGlvbnMucHVzaChvcHRpb24pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6ICdhY3RpdmVfaXRlbXMnLFxuICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgZGVsaXZlcnksIHF1YW50aXR5LCBzZWxlY3RlZCwgb3B0aW9ucyB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcjc2MtYnV5LWJveC1wdGMtYnV0dG9uIGlucHV0JyxcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgbmFtZTogJ2NoZWNrX291dCdcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnZGl2LmEtbW9kYWwtc2Nyb2xsZXIgZGl2LmEtcG9wb3Zlci13cmFwcGVyJyxcbiAgICB1c2Vfcm9vdDogdHJ1ZSxcbiAgICBuYW1lOiAnc3Vic2NyaWJlX25fc2F2ZV9wb3BvdmVyJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2J1dHRvbi5hLWJ1dHRvbi1jbG9zZScsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIHRleHRfZm9ybWF0OiAnQ2xvc2UnLFxuICAgICAgICBhZGRfVGV4dDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdzZWxlY3QnLFxuICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2xpJyxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcG9wb3Zlci1mb290ZXIgc3Bhbi5hLWJ1dHRvbi1pbm5lcicsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLWJ1dHRvbi10ZXh0J1xuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnI3Nucy1hY2NvcmRpb24nLFxuICAgIHVzZV9yb290OiB0cnVlLFxuICAgIG5hbWU6ICdzdWJzY3JpYmVfbl9zYXZlX2ZyZXF1ZW5jeV9zZWxlY3Rvcl9wb3BvdmVyJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLWJveCcsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICB9XG4gICAgXVxuICB9XG5dXG5cbmV4cG9ydCBjb25zdCBmcmVzaF9jYXJvdXNlbF9jYXJkID0ge1xuICBzZWxlY3RvcjogJ2xpLmEtY2Fyb3VzZWwtY2FyZCwgZGl2W2lkXj1cImdyaWRFbGVtZW50XCJdJyxcbiAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtdHJ1bmNhdGUtZnVsbCcsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdhOmhhcyhkaXYuYS1pbWFnZS1jb250YWluZXIpJyxcbiAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6IFwic3BhbltpZF49J3FzLXdpZGdldC1hdGMtYnV0dG9uJ11cIixcbiAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCcsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIHRleHRfZm9ybWF0OiAnQWRkIFRvIENhcnQnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJxcy13aWRnZXQtYnV0dG9uLWNvbnRhaW5lci1hdGZjXCJdJyxcbiAgICAgIG5hbWU6ICdxdWFudGl0eV9zZWxlY3RvcicsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbYXJpYS1sYWJlbF49J1JlbW92ZSddXCIsXG4gICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgdGV4dF9mb3JtYXQ6ICdEZWNyZWFzZSBxdWFudGl0eSBieSAxJyxcbiAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvbltpZF49J3FzLXdpZGdldC1idXR0b24tYXRmYyddXCIsXG4gICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2FyaWEtbGFiZWxePSdBZGQnXVwiLFxuICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgIHRleHRfZm9ybWF0OiAnSW5jcmVhc2UgcXVhbnRpdHkgYnkgMScsXG4gICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnYSA+IHNwYW4gPiBzcGFuLmEtdHJ1bmNhdGUnLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWwnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS10cnVuY2F0ZS1mdWxsJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdkaXYgPiBzcGFuID4gc3BhbiA+IHNwYW4uYS10cnVuY2F0ZS1mdWxsJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJwcmljZVRvUGF5XCJdIHNwYW4uYS1vZmZzY3JlZW4nLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnbGkuYS1jYXJvdXNlbC1jYXJkIGEuYS1zaXplLW1pbmknLFxuICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2RpdltkYXRhLWNzYS1jLWl0ZW0taWRePVwiYW16bjEuYXNpblwiXScpXG4gICAgY29uc3QgYXNpbiA9IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdkYXRhLWNzYS1jLWl0ZW0taWQnKT8uc3BsaXQoJzonKVswXS5zcGxpdCgnLicpLnBvcCgpXG4gICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2RpdltjbGFzcyo9XCJwcmljZVRvUGF5XCJdIHNwYW4uYS1vZmZzY3JlZW4nKVxuICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3Rvcignc3Bhbi5hLXRydW5jYXRlLWZ1bGwnKVxuICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdhOmhhcyhzcGFuLmEtdHJ1bmNhdGUtZnVsbCknKVxuICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgIGNvbnN0IHF1YW50aXR5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ2RpdltpZF49XCJxcy13aWRnZXQtYnV0dG9uLWNvbnRhaW5lci1hdGZjXCJdIGJ1dHRvbltpZF49XCJxcy13aWRnZXQtYnV0dG9uLWF0ZmNcIl0nXG4gICAgKVxuICAgIGNvbnN0IHF1YW50aXR5ID0gcXVhbnRpdHlFbT8uaW5uZXJUZXh0XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6ICdwcm9tb3Rpb25faXRlbXMnLFxuICAgICAgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgcXVhbnRpdHkgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZnJlc2hfc3Vic3RpdHV0aW9uX2NhcmQgPSB7XG4gIHNlbGVjdG9yOiAnZGl2LnN1YnMtY2FydC1pdGVtJyxcbiAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gIHRleHRfc2VsZWN0b3I6ICdkaXYuYS1zcGFjaW5nLXRvcC1iYXNlIHNwYW4uYS1zaXplLWJhc2UnLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnZGl2LmEtc3BhY2luZy10b3AtYmFzZSBzcGFuLmEtc2l6ZS1iYXNlJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2Rpdi5hLXNwYWNpbmctdG9wLW1pbmkgc3Bhbi5hLWNvbG9yLXByaWNlJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfVxuICBdLFxuICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2W2RhdGEtY2FydC1pdGVtLWFzaW5dJylcbiAgICBjb25zdCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2FydC1pdGVtLWFzaW4nKVxuICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdkaXYuYS1zcGFjaW5nLXRvcC1iYXNlIHNwYW4uYS1zaXplLWJhc2UnKVxuICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5hLXNwYWNpbmctdG9wLW1pbmkgc3Bhbi5hLWNvbG9yLXByaWNlJylcbiAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dFxuICAgIHJldHVybiB7IG5hbWU6ICdhY3RpdmVfaXRlbXMnLCBkYXRhOiB7IGFzaW4sIHRpdGxlLCBwcmljZSB9IH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZnJlc2hfY2FydCA9IFtcbiAgbmF2LFxuICB7XG4gICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtbmFtZT0nQWN0aXZlIEl0ZW1zJ11cIixcbiAgICBuYW1lOiAnYWN0aXZlX2l0ZW1fbGlzdCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtbGlzdC1pdGVtLWNvbnRlbnQnLFxuICAgICAgICB0ZXh0X3NlbGVjdG9yOiAndWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUgc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1wcm9kdWN0LWltYWdlLWRlc2t0b3AgYSBpbWcnLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfaW1hZ2UnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3VsID4gbGkgPiBzcGFuLmEtbGlzdC1pdGVtID4gYS5zYy1wcm9kdWN0LXRpdGxlJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtdHJ1bmNhdGUtZnVsbCcsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWJhZGdlLXByaWNlLXRvLXBheSBzcGFuLnNjLXByaWNlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1hY3Rpb24tbGlua3MnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnFzLXdpZGdldC1jb250YWluZXInLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2FyaWEtbGFiZWxePSdSZW1vdmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVjcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucXMtd2lkZ2V0LWRyb3Bkb3duLWZsZXgtd3JhcHBlciBidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncXVhbnRpdHlfZHJvcF9kb3duX2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5xcy13aWRnZXQtZHJvcGRvd24td3JhcHBlciBzcGFuW2RhdGEtYWN0aW9uPVwicXMtd2lkZ2V0LWRyb3Bkb3duLWRlY2xcIl0nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB1c2Vfcm9vdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnRHJvcCBEb3duIE9wdGlvbiB7fSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdkaXZbaWRePVwicXMtd2lkZ2V0LXF1YW50aXR5LWNvbnRhaW5lci1hdGZjXCJdIHNwYW5bZGF0YS1hY3Rpb249XCJxcy13aWRnZXQtcXVhbnRpdHktY2hhbmdlbGluay1kZWNsXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdXNlX3Jvb3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnZGl2W2lkXj1cInFzLXdpZGdldC1zdW1tYXJ5LWNvbnRhaW5lci1hdGZjXCJdIHNwYW5baWRePVwicXMtd2lkZ2V0LXN1bW1hcnktYXRjLWF0ZmNcIl0nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB1c2Vfcm9vdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2FyaWEtbGFiZWxePSdBZGQnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2RhdGEtYWN0aW9uPSdkZWxldGUnXVwiLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnZGVsZXRlJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFzaW4gPSBlbS5wYXJlbnRFbGVtZW50Py5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5zYy1iYWRnZS1wcmljZS10by1wYXkgc3Bhbi5zYy1wcmljZScpXG4gICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ3VsID4gbGkgPiBzcGFuLmEtbGlzdC1pdGVtID4gYS5zYy1wcm9kdWN0LXRpdGxlIHNwYW4uYS10cnVuY2F0ZS1mdWxsJ1xuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dFxuICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucXVlcnlTZWxlY3RvcigndWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUnKVxuICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgIGNvbnN0IHF1YW50aXR5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ2Rpdi5zYy1hY3Rpb24tbGlua3MgZGl2LnFzLXdpZGdldC1kcm9wZG93bi1mbGV4LXdyYXBwZXIgYnV0dG9uJ1xuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCBxdWFudGl0eSA9IHF1YW50aXR5RW0/LmlubmVyVGV4dFxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiAnYWN0aXZlX2l0ZW1zJyxcbiAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIHF1YW50aXR5IH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJDYXJkSW5zdGFuY2VcIl0nLFxuICAgIHRleHRfc2VsZWN0b3I6ICdoMi5hLWNhcm91c2VsLWhlYWRpbmcnLFxuICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaDIuYS1jYXJvdXNlbC1oZWFkaW5nJyxcbiAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICBmcmVzaF9jYXJvdXNlbF9jYXJkXG4gICAgXVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICdkaXYuc2MtYnV5LWJveC1pbm5lci1ib3ggaW5wdXRbbmFtZV49XCJwcm9jZWVkVG9BTE1DaGVja291dFwiXScsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIG5hbWU6ICdjaGVja19vdXQnLFxuICAgIGFkZF90ZXh0OiB0cnVlXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJ2Rpdi5zYy1idXktYm94LWlubmVyLWJveCBhJyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgYWRkX3RleHQ6IHRydWVcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnI3NjLWNhcnQtYWJvdmUtYWN0aW9ucyBzcGFuLmEtYnV0dG9uLCAjc2MtY2FydC1hYm92ZS1hY3Rpb25zIGEnLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICBhZGRfdGV4dDogdHJ1ZVxuICB9XG5dXG5cbmV4cG9ydCBjb25zdCBsdXh1cnlfY2Fyb3VzZWxfY2FyZCA9IHtcbiAgc2VsZWN0b3I6ICdsaS5hLWNhcm91c2VsLWNhcmQsIGRpdltpZF49XCJncmlkRWxlbWVudFwiXScsXG4gIG5hbWU6ICdmcm9tX3RleHQnLFxuICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnYScsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgdGV4dF9zZWxlY3RvcjogJyNib25kV2FsbGVkQ2Fyb3VzZWxFbGVtZW50RGVzY3JpcHRpb24nXG4gICAgfVxuICBdLFxuICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcignYScpXG4gICAgY29uc3QgYXNpbiA9IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdocmVmJyk/LnNwbGl0KCcvJykuYXQoLTIpXG4gICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uYS1wcmljZSBzcGFuLmEtb2Zmc2NyZWVuJylcbiAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2EgI2JvbmRXYWxsZWRDYXJvdXNlbEVsZW1lbnREZXNjcmlwdGlvbicpXG4gICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICBjb25zdCB1cmxFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2EnKVxuICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiAncHJvbW90aW9uX2l0ZW1zJyxcbiAgICAgIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbHV4dXJ5X2NhcnQgPSBbXG4gIG5hdixcbiAge1xuICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLW5hbWU9J0FjdGl2ZSBJdGVtcyddXCIsXG4gICAgbmFtZTogJ2FjdGl2ZV9pdGVtX2xpc3QnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWxpc3QtaXRlbS1jb250ZW50JyxcbiAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3VsID4gbGkgPiBzcGFuLmEtbGlzdC1pdGVtID4gYS5zYy1wcm9kdWN0LXRpdGxlIHNwYW4uYS10cnVuY2F0ZS1mdWxsJyxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtcHJvZHVjdC1pbWFnZS1kZXNrdG9wIGEgaW1nJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZScsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5zYy1wcm9kdWN0LXRpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlsJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtYmFkZ2UtcHJpY2UtdG8tcGF5IHNwYW4uc2MtcHJpY2UnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWFjdGlvbi1saW5rcycsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLnNjLXF1YW50aXR5LXN0ZXBwZXInLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYnV0dG9uW2RhdGEtYWN0aW9uPVwiYS1zdGVwcGVyLWRlY3JlbWVudFwiXScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdltyb2xlPVwic3BpbmJ1dHRvblwiXScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncXVhbnRpdHlfZHJvcF9kb3duX2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdidXR0b25bZGF0YS1hY3Rpb249XCJhLXN0ZXBwZXItaW5jcmVtZW50XCJdJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbmNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFtkYXRhLWFjdGlvbj0nZGVsZXRlJ11cIixcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ2RlbGV0ZSdcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBhc2luID0gZW0ucGFyZW50RWxlbWVudD8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdkaXYuc2MtYmFkZ2UtcHJpY2UtdG8tcGF5IHNwYW4uc2MtcHJpY2UnKVxuICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICd1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZSBzcGFuLnNjLXByb2R1Y3QtdGl0bGUnXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCd1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZScpXG4gICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgY29uc3QgcXVhbnRpdHlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uc2MtcXVhbnRpdHktc3RlcHBlciBkaXZbcm9sZT1cInNwaW5idXR0b25cIl0nKVxuICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gcXVhbnRpdHlFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6ICdhY3RpdmVfaXRlbXMnLFxuICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgcXVhbnRpdHkgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnZGl2LnNjLWJ1eS1ib3gtaW5uZXItYm94IGlucHV0W25hbWVePVwicHJvY2VlZFRvTHV4dXJ5Q2hlY2tvdXRcIl0nLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICBuYW1lOiAnY2hlY2tfb3V0JyxcbiAgICBhZGRfdGV4dDogdHJ1ZVxuICB9XG5dXG5cbmV4cG9ydCBjb25zdCBidXlfYWdhaW4gPSBbXG4gIG5hdixcbiAgY2FydF9zaWRlX2JhcixcbiAge1xuICAgIHNlbGVjdG9yOiAnZGl2LmEtc2VjdGlvbjpoYXMoZGl2LmZpbHRlci1jb250YWluZXIpJyxcbiAgICBuYW1lOiAnZmlsdGVycycsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXYuZmlsdGVyLWNvbnRhaW5lcicsXG4gICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuI2ZpbHRlci1jb250YWluZXItaGVhZGVyJyxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuI2ZpbHRlci1jb250YWluZXItaGVhZGVyJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2xhYmVsJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0uaW5uZXJUZXh0XG4gICAgICAgICAgICAgIGNvbnN0IG5hbWVFbSA9IGVtXG4gICAgICAgICAgICAgICAgLmNsb3Nlc3QoJ2Rpdi5maWx0ZXItY29udGFpbmVyJylcbiAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXItY29udGFpbmVyLWhlYWRlcicpXG4gICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvWyBdL2csICdfJykudG9Mb3dlckNhc2UoKS50cmltKClcbiAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG4gICAgICAgICAgICAgIGlmIChpbnB1dCAmJiBpbnB1dC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdmaWx0ZXJzLicgKyBuYW1lLFxuICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZTogdGl0bGU/LnRyaW0oKSB8fCAnJywgc2VsZWN0ZWQ6IHRydWUgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdmaWx0ZXJzLicgKyBuYW1lLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IHRpdGxlPy50cmltKCkgfHwgJycsIHNlbGVjdGVkOiBmYWxzZSB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJ2Rpdi5hbG0tZ3JpZC1kZXNrdG9wLWdyaWQtY29udGFpbmVyJyxcbiAgICBuYW1lOiAncHJvZHVjdF9saXN0JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJncmlkQ2VsbFwiXScsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICB0ZXh0X3NlbGVjdG9yOiBcImRpdltpZF49J2Nsb3NlZENhcmQnXSBhW2lkXj0ndGl0bGUnXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbFwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltpZF49J2dyaWRFbGVtZW50J11cIixcbiAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2NhcmQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltpZF49J2Nsb3NlZENhcmQnXVwiLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdjbG9zZWRfcHJvZHVjdF9jYXJkJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbaWRePSdpbmZvJ11cIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ29wZW5fcHJvZHVjdF9jYXJkJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ09wZW4gUHJvZHVjdCBDYXJkJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtIHNwYW4uYS1idXR0b24taW5uZXInLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJzZWVCdXlpbmdPcHRpb25zV3JhcHBlclwiXSBhJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3NlZV9idXlpbmdfb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltuYW1lPVwiYXgtcXNcIl0nLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdEZWNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVjcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W3JvbGU9J3NwaW5idXR0b24nXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdJbmNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbaWRePSdleHBhbmRlZEltYWdlJ11cIixcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2xvc2VfcHJvZHVjdF9jYXJkJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDbG9zZSBQcm9kdWN0IENhcmQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFwiZGl2W2lkXj0nY2xvc2VkQ2FyZCddIGRpdltpZF49J2luZm8nXVwiKVxuICAgICAgICAgIGNvbnN0IGFzaW4gPSBhc2luRW0/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdkaXZbaWRePVwiY2xvc2VkQ2FyZFwiXSBkaXZbaWRePVwiaW5mb1wiXSBzcGFuW2NsYXNzKj1cInByaWNlQmxvY2tXaXRoTWFyZ2luUmlnaHRcIl0gc3Bhbi5hLXByaWNlID4gc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKSdcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCJkaXZbaWRePSdjbG9zZWRDYXJkJ10gYVtpZF49J3RpdGxlJ10gc3Bhbi5hLXRydW5jYXRlLWZ1bGxcIlxuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dFxuICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ2RpdltpZF49XCJjbG9zZWRDYXJkXCJdIGRpdltpZF49XCJpbmZvXCJdICN1ZG1EZWxpdmVyeU1lc3NhZ2VDb21wb25lbnQnXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5ID0gZGVsaXZlcnlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1tcXG5dL2csICcgJylcbiAgICAgICAgICByZXR1cm4geyBuYW1lOiAnYWN0aXZlX2l0ZW1zX2Nsb3NlZCcsIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCBkZWxpdmVyeSB9IH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwiZmVhdHVyZWRcIl0nLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgdGV4dF9zZWxlY3RvcjogXCJhW2lkXj0ndGl0bGUnXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbFwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cImRldGFpbENvbnRlbnRXcmFwcGVyXCJdIGRpdltpZF49XCJkZXRhaWxDb250ZW50XCJdJyxcbiAgICAgICAgICAgIG5hbWU6ICdkZXRhaWxlZF9jb250ZW50JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdjpoYXMoPiBpbWcpJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfaW1hZ2UnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImFbaWRePSd0aXRsZSddXCIsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3RpdGxlJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXRydW5jYXRlLWZ1bGwnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJhc2luRGV0YWlsUmV2aWV3c1Jvd1wiXSBhJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2kuYS1pY29uLXN0YXItbWluaScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfcmF0aW5nJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2NsYXNzKj0nbXVsdGlPZmZlclBpbGxDb250YWluZXInXSBhXCIsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgIFwiZGl2W2RhdGEtYnV5aW5nb3B0aW9udHlwZT0nTkVXJ10sIGRpdltjbGFzcyo9J2FzaW5EZXRhaWxJbmZvQ29sdW1ucyddOmhhcyhpbnB1dFtuYW1lPSdzdWJtaXQuYWRkVG9DYXJ0J11cIixcbiAgICAgICAgICAgICAgICBuYW1lOiAnb25lX3RpbWVfcHVyY2hhc2UnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdzcGFuW2NsYXNzKj1cInByaWNlQmxvY2tXaXRoTWFyZ2luUmlnaHRcIl0gc3Bhbi5hLXByaWNlID4gc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2UnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN1ZG1EZWxpdmVyeU1lc3NhZ2VDb21wb25lbnQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJ5J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwiYWN0aW9uQnV0dG9uc1Jvd1wiXSwgZGl2W2NsYXNzKj1cImFzaW5EZXRhaWxBY3Rpb25zUm93XCJdJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2J1dHRvbnMnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXRbbmFtZT1cInN1Ym1pdC5hZGRUb0NhcnRcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0W2lkXj1cImJ1eS1ub3dcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYnV5X25vdycsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cImZlZWRiYWNrQnV0dG9uU2VjdGlvblwiXSBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZW1vdmVfaXRlbScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W25hbWU9XCJheC1xc1wiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0RlY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbcm9sZT0nc3BpbmJ1dHRvbiddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdJbmNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0uY2xvc2VzdCgnZGl2W2RhdGEtYXNpbl0nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbiA9IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuW2NsYXNzKj1cInByaWNlQmxvY2tXaXRoTWFyZ2luUmlnaHRcIl0gc3Bhbi5hLXByaWNlID4gc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKSdcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBcImFbaWRePSd0aXRsZSddIHNwYW4uYS10cnVuY2F0ZS1mdWxsXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoXCJhW2lkXj0ndGl0bGUnXVwiKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeUVtID0gZW0ucXVlcnlTZWxlY3RvcignI3VkbURlbGl2ZXJ5TWVzc2FnZUNvbXBvbmVudCcpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeSA9IGRlbGl2ZXJ5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bXFxuXS9nLCAnICcpXG4gICAgICAgICAgICAgICAgICBjb25zdCBxdWFudGl0eUVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2W25hbWU9XCJheC1xc1wiXSBkaXZbcm9sZT1cInNwaW5idXR0b25cIl0nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBxdWFudGl0eUVtPy5pbm5lclRleHQgfHwgJzEnXG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWN0aXZlX2l0ZW1zX29wZW5lZF9wdXJjaGFzZScsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIGRlbGl2ZXJ5LCBxdWFudGl0eSB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtYnV5aW5nb3B0aW9udHlwZT0nU05TJ10sIGRpdltjbGFzcyo9J3Nuc1Vwc2VsbEJsb2NrQ29udGFpbmVyJ11cIixcbiAgICAgICAgICAgICAgICBuYW1lOiAnc3Vic2NyaWJlX2FuZF9zYXZlJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnc3BhbltjbGFzcyo9XCJwcmljZUJsb2NrV2l0aE1hcmdpblJpZ2h0XCJdIHNwYW4uYS1wcmljZSA+IHNwYW46bm90KC5hLW9mZnNjcmVlbiknLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdWRtRGVsaXZlcnlNZXNzYWdlQ29tcG9uZW50JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWxpdmVyeSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdkaXZbY2xhc3MqPVwiYWN0aW9uQnV0dG9uc1Jvd1wiXSwgZGl2W2NsYXNzKj1cImFzaW5EZXRhaWxQdXJjaGFzZUNvbHVtblwiXScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdidXR0b25zJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0W25hbWU9XCJzdWJtaXQuYWRkVG9DYXJ0XCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuW2NsYXNzKj1cInNuc0J1dHRvblwiXSBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzdWJzY3JpYmVfYW5kX3NhdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJmZWVkYmFja0J1dHRvblNlY3Rpb25cIl0gaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVtb3ZlX2l0ZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW5bY2xhc3MqPVwic3Vic2NyaXB0aW9uQnV0dG9uXCJdIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZXRfdXBfc3Vic2NyaXB0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5jbG9zZXN0KCdkaXZbZGF0YS1hc2luXScpXG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW5bY2xhc3MqPVwicHJpY2VCbG9ja1dpdGhNYXJnaW5SaWdodFwiXSBzcGFuLmEtcHJpY2UgPiBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIFwiYVtpZF49J3RpdGxlJ10gc3Bhbi5hLXRydW5jYXRlLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucXVlcnlTZWxlY3RvcihcImFbaWRePSd0aXRsZSddXCIpXG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKCcjdWRtRGVsaXZlcnlNZXNzYWdlQ29tcG9uZW50JylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5ID0gZGVsaXZlcnlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1tcXG5dL2csICcgJylcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhY3RpdmVfaXRlbXNfb3BlbmVkX3NucycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIGRlbGl2ZXJ5IH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltpZF49J2RldGFpbC12aWV3LXNpbWlsYXItaXRlbXMnXVwiLFxuICAgICAgICAgICAgbmFtZTogJ3NpbWlsYXJfaXRlbXMnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkuYS1jYXJvdXNlbC1jYXJkJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiBcImFbaWRePSd0aXRsZSddIHNwYW4uYS10cnVuY2F0ZS1mdWxsXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1pbWFnZS1jb250YWluZXI6aGFzKD4gaW1nKScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYVtpZF49J3RpdGxlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF90aXRsZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXRydW5jYXRlLWZ1bGwnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJyZXZpZXdzUm93XCJdIGEnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnaS5hLWljb24tc3Rhci1taW5pJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfcmF0aW5nJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ3NwYW5bY2xhc3MqPVwicHJpY2VCbG9ja1dpdGhNYXJnaW5SaWdodFwiXSBzcGFuLmEtcHJpY2UgPiBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3VkbURlbGl2ZXJ5TWVzc2FnZUNvbXBvbmVudCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcnknXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnaW5wdXRbbmFtZT1cInN1Ym1pdC5hZGRUb0NhcnRcIl0sIGlucHV0W25hbWVePVwiYXRmY1NoaW1cIl0sIGJ1dHRvblthcmlhLWxhYmVsPVwiQWRkIHRvIENhcnQuIENsaWNrIHRvIGNoYW5nZSBxdWFudGl0eVwiXScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cInNlZUJ1eWluZ09wdGlvbnNXcmFwcGVyXCJdIGEnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VlX2J1eWluZ19vcHRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbbmFtZT1cImF4LXFzXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPSdzcGluYnV0dG9uJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdJbmNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnFzLXdpZGdldC1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2FyaWEtbGFiZWw9J1JlbW92ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5xcy13aWRnZXQtZHJvcGRvd24tZmxleC13cmFwcGVyIGJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYucXMtd2lkZ2V0LWRyb3Bkb3duLXdyYXBwZXIgc3BhbltkYXRhLWFjdGlvbj1cInFzLXdpZGdldC1kcm9wZG93bi1kZWNsXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlX3Jvb3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnRHJvcCBEb3duIE9wdGlvbiB7fSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2W2lkXj1cInFzLXdpZGdldC1xdWFudGl0eS1jb250YWluZXItYXRmY1wiXSBzcGFuW2RhdGEtYWN0aW9uPVwicXMtd2lkZ2V0LXF1YW50aXR5LWNoYW5nZWxpbmstZGVjbFwiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZV9yb290OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2W2lkXj1cInFzLXdpZGdldC1zdW1tYXJ5LWNvbnRhaW5lci1hdGZjXCJdIHNwYW5baWRePVwicXMtd2lkZ2V0LXN1bW1hcnktYXRjLWF0ZmNcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2Vfcm9vdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsPSdBZGQnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFRpdGxlRW0gPSBlbVxuICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgnZGl2W2lkXj1cImZlYXR1cmVkXCJdJylcbiAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICdkaXZbaWRePVwiZGV0YWlsQ29udGVudFdyYXBwZXJcIl0gYVtpZF49XCJ0aXRsZVwiXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbCdcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50VGl0bGUgPSBwYXJlbnRUaXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgPy50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXlxcd10rL2csICdfJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2RpdltjbGFzcyo9XCJkZWxpZ2h0RmFjZW91dFwiXScpXG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW5bY2xhc3MqPVwicHJpY2VCbG9ja1dpdGhNYXJnaW5SaWdodFwiXSBzcGFuLmEtcHJpY2UgPiBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXCJhW2lkXj0ndGl0bGUnXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbFwiKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucXVlcnlTZWxlY3RvcihcImFbaWRePSd0aXRsZSddXCIpXG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKCcjdWRtRGVsaXZlcnlNZXNzYWdlQ29tcG9uZW50JylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5ID0gZGVsaXZlcnlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1tcXG5dL2csICcgJylcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHBhcmVudFRpdGxlICsgJy5zaW1pbGFyX2l0ZW1zJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgZGVsaXZlcnkgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnI3Nuc1Vwc2VsbE1vZGFsJyxcbiAgICBuYW1lOiAnc3Vic2NyaWJlX2FuZF9zYXZlX3BvcG92ZXInLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cIm1vZGFsSGVhZGVyXCJdJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW5bY2xhc3MqPVwibW9kYWxIZWFkZXJUZXh0XCJdJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW5bZGF0YS1hY3Rpb249XCJhLXBvcG92ZXItY2xvc2VcIl0nLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0Nsb3NlJyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJtb2RhbENvbnRlbnRcIl0nLFxuICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXY6bm90KFtjbGFzcyo9XCJidXR0b25Db250YWluZXJcIl0pOm5vdCg6aGFzKHNlbGVjdCkpJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgICAgICAgfSxcbiAgICAgICAgICAvLyB7XG4gICAgICAgICAgLy8gICBzZWxlY3RvcjogJ3NwYW4uYS1kcm9wZG93bi1wcm9tcHQnLFxuICAgICAgICAgIC8vICAgbmFtZTogJ29wZW5fZHJvcF9kb3duX2xpc3QnLFxuICAgICAgICAgIC8vICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgIC8vICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgLy8gICB0ZXh0X2Zvcm1hdDogXCJEZWxpdmVyeSBldmVyeToge31cIixcbiAgICAgICAgICAvLyB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cImJ1dHRvbkNvbnRhaW5lclwiXScsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwiY2FuY2VsQnV0dG9uQ29udGFpbmVyXCJdIGlucHV0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0NhbmNlbCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICdkaXZbY2xhc3MqPVwic3Vic2NyaXB0aW9uQnV0dG9uQ29udGFpbmVyXCJdIGlucHV0W25hbWU9XCJzdWJtaXQuYWRkVG9DYXJ0XCJdJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0FkZCBTdWJzY3JpcHRpb24gdG8gQ2FydCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdLFxuICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2RpdltjbGFzcyo9XCJtb2RhbENvbnRlbnRcIl0nKVxuICAgICAgY29uc3QgYXNpbiA9IGFzaW5FbT8uaWQ/LnNwbGl0KCctJylbMV0/LnRyaW0oKVxuICAgICAgcmV0dXJuIHsgbmFtZTogJ3BvcG92ZXJfaXRlbScsIGRhdGE6IHsgYXNpbiB9IH1cbiAgICB9XG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IHBvcHVsYXJfcHJvZHVjdHMgPSBbXG4gIHtcbiAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIG5hdixcbiAgICAgIGNhcnRfc2lkZV9iYXIsXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnI3pnX2hlYWRlcicsXG4gICAgICAgIG5hbWU6ICdjYXRlZ29yaWVzJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2xpIGEnLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwiemctYmFubmVyLWxhbmRpbmctcGFnZS1oZWFkZXJcIl0nLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwiZy1uYXYtdHJlZS1hbGxfc3R5bGVfemctYnJvd3NlLXJvb3RcIl0nLFxuICAgICAgICBuYW1lOiAnZGVwYXJ0bWVudHMnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAnZGl2W2NsYXNzKj1cInpnLW5hdi10cmVlLWFsbF9zdHlsZV96Zy1yb290LWJyb3dzZS1pdGVtXCJdID4gYSwgZGl2W2NsYXNzKj1cInpnLW5hdi10cmVlLWFsbF9zdHlsZV96Zy1icm93c2UtaXRlbVwiXSA+IGEnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICdkaXZbY2xhc3MqPVwiemctbmF2LXRyZWUtYWxsX3N0eWxlX3pnLXJvb3QtYnJvd3NlLWl0ZW1cIl0gPiBzcGFuLCBkaXZbY2xhc3MqPVwiemctbmF2LXRyZWUtYWxsX3N0eWxlX3pnLWJyb3dzZS1pdGVtXCJdID4gc3BhbicsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJDYXJkSW5zdGFuY2VcIl0nLFxuICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnaDIuYS1jYXJvdXNlbC1oZWFkaW5nLCBoMScsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnaDIuYS1jYXJvdXNlbC1oZWFkaW5nLCBoMScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1jYXJvdXNlbC1oZWFkZXItcm93IGEnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY2Fyb3VzZWxfY2FyZFxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9XG5dXG5cbmV4cG9ydCBjb25zdCByZWNpcGVzID0gW1xuICB7XG4gICAgbWF0Y2g6ICcvJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIG1hdGNoX3dpdGhfcmVmOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIG5hdixcbiAgICAgICAgICBjYXJ0X3NpZGVfYmFyLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2Lmd3LWNvbCcsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOlxuICAgICAgICAgICAgICAnaDEgc3Bhbi5hLXRydW5jYXRlLWZ1bGwsIGgyIHNwYW4uYS10cnVuY2F0ZS1mdWxsLCBoMyBzcGFuLmEtdHJ1bmNhdGUtZnVsbCwgaDE6bm90KDpoYXMoc3Bhbi5hLXRydW5jYXRlLWZ1bGwpKSwgaDI6bm90KDpoYXMoc3Bhbi5hLXRydW5jYXRlLWZ1bGwpKSwgaDM6bm90KDpoYXMoc3Bhbi5hLXRydW5jYXRlLWZ1bGwpKScsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICdoMSBzcGFuLmEtdHJ1bmNhdGUtZnVsbCwgaDIgc3Bhbi5hLXRydW5jYXRlLWZ1bGwsIGgzIHNwYW4uYS10cnVuY2F0ZS1mdWxsLCBoMTpub3QoOmhhcyhzcGFuLmEtdHJ1bmNhdGUtZnVsbCkpLCBoMjpub3QoOmhhcyhzcGFuLmEtdHJ1bmNhdGUtZnVsbCkpLCBoMzpub3QoOmhhcyhzcGFuLmEtdHJ1bmNhdGUtZnVsbCkpJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICBlbS5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fFxuICAgICAgICAgICAgICAgICAgICBlbS5xdWVyeVNlbGVjdG9yKCdpbWcnKT8uYWx0IHx8XG4gICAgICAgICAgICAgICAgICAgIGVtLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uYS10cnVuY2F0ZS1mdWxsJyk/LmlubmVyVGV4dCB8fFxuICAgICAgICAgICAgICAgICAgICBlbS5pbm5lclRleHQgfHxcbiAgICAgICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2RhdGEtY2FyZC1tZXRyaWNzLWlkKj1cInJoZlwiXScsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnaDIuYS1jYXJvdXNlbC1oZWFkaW5nJyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaDIuYS1jYXJvdXNlbC1oZWFkaW5nJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjYXJvdXNlbF9jYXJkXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltkYXRhLWNhcmQtbWV0cmljcy1pZCo9XCJydmlcIl0nLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2gyLmEtY2Fyb3VzZWwtaGVhZGluZycsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2gyLmEtY2Fyb3VzZWwtaGVhZGluZycsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYScsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGVtLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpPy5hbHQgfHwgZW0uaW5uZXJUZXh0IHx8ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvZm1jL3N0b3JlZnJvbnQnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbbmF2LCBjYXJ0X3NpZGVfYmFyXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL3MnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIGNhcnRfc2lkZV9iYXIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2YtcmliLXYxLXRvb2xiYXInLFxuICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzX3Rvb2xiYXInLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJ3NwYW5bZGF0YS1jc2EtYy1zbG90LWlkPVwibmF2LXJpYlwiXSwgZGl2W2RhdGEtY3NhLWMtc2xvdC1pZD1cIm5hdi1yaWJcIl0sIGEuc2YtY2xlYXItYWxsJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWNzYS1jLWNvbnRlbnQtaWQnKSA9PSAncy1hbGwtZmlsdGVycycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdTaG93IEFsbCBGaWx0ZXJzJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGVtLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8IGVtLmlubmVyVGV4dCB8fCAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJpYi12MS1kcm9wZG93bi1tYWluLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0cycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1zZWN0aW9uLmEtc3BhY2luZy1ub25lJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdkaXYuc2YtcmliLXYxLWRyb3Bkb3duLXBvcHVwLXRpdGxlLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1yaWItdjEtZHJvcGRvd24tcG9wdXAtdGl0bGUtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3VsIHNwYW5bcm9sZT1cImxpc3RpdGVtXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJpYi12MS1yYW5nZS1zbGlkZXItbGFiZWwtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zLXNsaWRlci1jb250YWluZXIgZGl2LnMtbG93ZXItYm91bmQgaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX21pbl92YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtlZXBfYXR0cjogWydtaW4nLCAnbWF4JywgJ3N0ZXAnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlX2F0dHI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcF92YWx1ZXM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1FbSA9IGVtLmNsb3Nlc3QoJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtRW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtRW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wcm9wcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IEpTT04ucGFyc2UocHJvcCkuc3RlcExhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfdmFsdWU6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyLnBhcnNlSW50KGVtLmdldEF0dHJpYnV0ZSgndmFsdWUnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1FbSA9IGVtLmNsb3Nlc3QoJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzW3ZhbHVlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zLXNsaWRlci1jb250YWluZXIgZGl2LnMtdXBwZXItYm91bmQgaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX21pbl92YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtlZXBfYXR0cjogWydtaW4nLCAnbWF4JywgJ3N0ZXAnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlX2F0dHI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcF92YWx1ZXM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1FbSA9IGVtLmNsb3Nlc3QoJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtRW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtRW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wcm9wcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IEpTT04ucGFyc2UocHJvcCkuc3RlcExhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfdmFsdWU6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyLnBhcnNlSW50KGVtLmdldEF0dHJpYnV0ZSgndmFsdWUnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1FbSA9IGVtLmNsb3Nlc3QoJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzW3ZhbHVlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5zZi1yaWItdjEtZHJvcGRvd24tYnV0dG9ucyBidXR0b24sIGRpdi5zZi1yaWItdjEtZHJvcGRvd24tYnV0dG9ucyBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNzLXJlZmluZW1lbnRzJyxcbiAgICAgICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cycsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdG9wUmVmaW5lbWVudHNcXFxcLzAnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICd0b3BfcmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdSZWNlbnRseSB1c2VkIGZpbHRlcnMnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGknLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICdkaXYuYS1zZWN0aW9uLmEtc3BhY2luZy1ub25lOm5vdCg6aGFzKCNuLXRpdGxlKSk6aGFzKHNwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1iYXNlLnB1aXMtYm9sZC13ZWlnaHQtdGV4dCk6aGFzKHVsIHNwYW4uYS1kZWNsYXJhdGl2ZSA+IHNwYW4gPiBsaSk6bm90KCNyZXZpZXdzUmVmaW5lbWVudHMpOm5vdCgjZGVwYXJ0bWVudHMpOm5vdCgjcHJpY2VSZWZpbmVtZW50cyk6bm90KCNmaWx0ZXJzKScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1iYXNlLnB1aXMtYm9sZC13ZWlnaHQtdGV4dCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHJlZmluZW1lbnRfb3B0aW9uXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNkZXBhcnRtZW50cycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RlcGFydG1lbnRzJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0RlcGFydG1lbnQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkgYScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBlbT8uZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dD8udHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkICYmIHNlbGVjdGVkID09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLmRlcGFydG1lbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cy5kZXBhcnRtZW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNyZXZpZXdzUmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdyZXZpZXdzX3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1c3RvbWVyIFJldmlld3MnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYS5zLW5hdmlnYXRpb24tY2xlYXItbGluaycsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2xlYXJfc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJsaSBhW2FyaWEtY3VycmVudD0ndHJ1ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0X2Zvcm1hdDogJ0NsZWFyIE9wdGlvbiB7fScsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnICcpPy50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucmV2aWV3cycsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImxpIGFbYXJpYS1jdXJyZW50PSdmYWxzZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJyAnKT8udHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnJldmlld3MnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogZmFsc2UsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3ByaWNlUmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZV9yZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIC8vIDIgY2FzZXM6IHNlbGVjdGlvbiAvIHNsaWRlclxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNwXzM2LXRpdGxlLCBkaXYuc2YtcmVmaW5lbWVudC1oZWFkaW5nIHNwYW4nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX2hlYWRpbmcnXG4gICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAvLyBjYXNlIDE6IHNlbGVjdGlvblxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbYXJpYS1sYWJlbGxlZGJ5PSdwXzM2LXRpdGxlJ10gPiBhXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2xlYXJfcHJpY2Vfc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJ1bFthcmlhLWxhYmVsbGVkYnk9J3BfMzYtdGl0bGUnXSBhW2FyaWEtY3VycmVudD0ndHJ1ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0X2Zvcm1hdDogJ0NsZWFyIE9wdGlvbiB7fScsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHQ/LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5wcmljZScsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF8zNi10aXRsZSddIGFbYXJpYS1jdXJyZW50PSdmYWxzZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0Py50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucHJpY2UnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogZmFsc2UsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgLy8gY2FzZSAyOiBzbGlkZXJcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2YtcmFuZ2Utc2xpZGVyLXJvdzpudGgtb2YtdHlwZSgxKScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXHMrL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5wcmljZScsIGRhdGE6IHsgdGl0bGU6ICdwcmljZV9yYW5nZScsIHJhbmdlIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1yYW5nZS1zbGlkZXItcm93Om50aC1vZi10eXBlKDIpIGRpdi5zLWxvd2VyLWJvdW5kIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX21pbl92YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0X2pzOiAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnN0IHRleHQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImFyaWEtdmFsdWV0ZXh0XCIpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2codGV4dClcbiAgICAgICAgICAgICAgICAgICAgLy8gICBpZiAodGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBrZWVwX2F0dHI6IFsnbWluJywgJ21heCcsICdzdGVwJ10sXG4gICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlX2F0dHI6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGVwX3ZhbHVlczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRW0gPSBlbS5jbG9zZXN0KCdmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtRW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IGZvcm1FbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLXByb3BzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IEpTT04ucGFyc2UocHJvcCkuc3RlcExhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGVwc1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfdmFsdWU6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBOdW1iZXIucGFyc2VJbnQoZW0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1FbSA9IGVtLmNsb3Nlc3QoJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IGZvcm1FbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLXByb3BzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBKU09OLnBhcnNlKHByb3ApLnN0ZXBMYWJlbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGVwc1t2YWx1ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2YtcmFuZ2Utc2xpZGVyLXJvdzpudGgtb2YtdHlwZSgyKSBkaXYucy11cHBlci1ib3VuZCBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZV9tYXhfdmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGV4dF9qczogKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zdCB0ZXh0ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVldGV4dFwiKVxuICAgICAgICAgICAgICAgICAgICAvLyAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGtlZXBfYXR0cjogWydtaW4nLCAnbWF4JywgJ3N0ZXAnXSxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVfYXR0cjoge1xuICAgICAgICAgICAgICAgICAgICAgIHN0ZXBfdmFsdWVzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1FbSA9IGVtLmNsb3Nlc3QoJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudF92YWx1ZTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IE51bWJlci5wYXJzZUludChlbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtRW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IEpTT04ucGFyc2UocHJvcCkuc3RlcExhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzW3ZhbHVlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1zdWJtaXQtcmFuZ2UtYnV0dG9uIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3N1Ym1pdF9wcmljZV9yYW5nZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0dvJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1yZXNldC1yYW5nZS1saW5rIGEnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVzZXRfcHJpY2Vfc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNwX25fZGVhbF90eXBlLXRpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWFsc19kaXNjb3VudHNfaGVhZGluZydcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdlthcmlhLWxhYmVsbGVkYnk9J3Bfbl9kZWFsX3R5cGUtdGl0bGUnXSA+IGFcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGVhcl9kZWFsc19kaXNjb3VudF9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF9uX2RlYWxfdHlwZS10aXRsZSddIGFbYXJpYS1jdXJyZW50PSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHRfZm9ybWF0OiAnQ2xlYXIgT3B0aW9uIHt9JyxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dD8udHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwX25fZGVhbF90eXBlLXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J2ZhbHNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHQ/LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5wcmljZScsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2RpdjpoYXMoPiBzcGFuW2RhdGEtY29tcG9uZW50LXR5cGU9XCJzLXNlYXJjaGdyaWQtY2Fyb3VzZWxcIl0pJyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5zZy1yb3cgaDInLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNnLXJvdyBoMicsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2Fyb3VzZWxfY2FyZFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1tYWluLXNsb3Qucy1yZXN1bHQtbGlzdC5zLXNlYXJjaC1yZXN1bHRzJyxcbiAgICAgICAgICAgIG5hbWU6ICdzZWFyY2hfcmVzdWx0cycsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuQWRIb2xkZXInLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdhZHMnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2RhdGEtYXNpbl0nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IHRpdGxlRW0/LmdldEF0dHJpYnV0ZSgnYWx0JylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dC50cmltKCkgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbiA9IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uZ2V0QXR0cmlidXRlKCdhbHQnKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucXVlcnlTZWxlY3RvcihcImFbZGF0YS10eXBlPSdwcm9kdWN0VGl0bGUnXVwiKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdhZHMnLCBkYXRhOiB7IHRpdGxlLCBhc2luLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbnNlcnRfc3BsaXRfbWFya2VyOiB0cnVlLFxuICAgICAgICAgICAgICAgIGluc2VydF9zcGxpdF9tYXJrZXJfZXZlcnk6IDQsXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbZGF0YS1jb21wb25lbnQtdHlwZT1cInMtc2VhcmNoLXJlc3VsdFwiXScsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICdzcGFuLmEtY29sb3ItYmFzZS5hLXRleHQtbm9ybWFsLCBoMi5hLWNvbG9yLWJhc2UuYS10ZXh0LW5vcm1hbCBzcGFuJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3NlYXJjaC1yZXN1bHQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2W2RhdGEtY3k9J3RpdGxlLXJlY2lwZSddIGEuYS1saW5rLW5vcm1hbC5zLWxpbmstc3R5bGUuYS10ZXh0LW5vcm1hbFwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LW5hbWUnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X25hbWUnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zLXByb2R1Y3QtaW1hZ2UtY29udGFpbmVyLCBkaXYucy1pbWFnZS1vdmVybGF5LWJsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zLWNvbG9yLXN3YXRjaC1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYXZhaWxhYmxlX2NvbG9ycycsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1jb2xvci1zd2F0Y2gtcGFkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZW0ucXVlcnlTZWxlY3RvcignYScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jc2EtYy10eXBlPSdsaW5rJ10gYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5zLXZhcmlhdGlvbnMtb3B0aW9ucy1lbGV2YXRlZCwgZGl2LnMtdmFyaWF0aW9ucy1vcHRpb25zLWp1c3RpZnktY29udGVudCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdvcHRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tfc2VsZWN0b3I6ICdhJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J3Jldmlld3MtYmxvY2snXVwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcmV2aWV3JyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1pY29uLWFsdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1yYXRpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2E6aGFzKGlbZGF0YS1jeT1cInJldmlld3MtcmF0aW5ncy1zbG90XCJdKScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9yYXRpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2Uucy11bmRlcmxpbmUtdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAne30gcmV2aWV3cycsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcmF0aW5nLWNvdW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3JhdGluZ19jb3VudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdwcmljZS1yZWNpcGUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcHJpY2UnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYS5hLWxpbmstbm9ybWFsOmhhcyg+IHNwYW4uYS1wcmljZSA+IHNwYW4uYS1vZmZzY3JlZW4pJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3ByaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2EgPiBzcGFuLmEtcHJpY2UgPiBzcGFuLmEtb2Zmc2NyZWVuJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J2RlbGl2ZXJ5LXJlY2lwZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtZGVsaXZlcnknXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdltkYXRhLWN5PSdhZGQtdG8tY2FydCddIHNwYW4uYS1idXR0b246aGFzKGJ1dHRvbiksIHNwYW5baWQqPSdhZGQtdG8tY2FydCddIGlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWNzYS1jLWNvbnRlbnQtaWQ9J3Mtc2VhcmNoLXNlZS1kZXRhaWxzLWJ1dHRvbiddIGFcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3NlZV9vcHRpb25zJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbbmFtZT1cImF4LXFzXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPSdzcGluYnV0dG9uJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdJbmNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW4gPSBlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZbZGF0YS1jeT0ncHJpY2UtcmVjaXBlJ10gYS5hLWxpbmstbm9ybWFsID4gc3Bhbi5hLXByaWNlID4gc3Bhbi5hLW9mZnNjcmVlblwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuLmEtY29sb3ItYmFzZS5hLXRleHQtbm9ybWFsLCBoMi5hLWNvbG9yLWJhc2UuYS10ZXh0LW5vcm1hbCBzcGFuJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZbZGF0YS1jeT0ndGl0bGUtcmVjaXBlJ10gYS5hLWxpbmstbm9ybWFsLnMtbGluay1zdHlsZS5hLXRleHQtbm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgZGVsaXZlcnlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXCJkaXZbZGF0YS1jeT0nZGVsaXZlcnktcmVjaXBlJ11cIilcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5ID0gZGVsaXZlcnlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1tcXG5dL2csICcgJylcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdzZWFyY2hfcmVzdWx0cycsIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIGRlbGl2ZXJ5IH0gfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLnMtcGFnaW5hdGlvbi1zdHJpcCcsXG4gICAgICAgICAgICBuYW1lOiAncGFnaW5hdGlvbicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcucy1wYWdpbmF0aW9uLWl0ZW0nLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXBvcG92ZXItd3JhcHBlcicsXG4gICAgICAgICAgICBuYW1lOiAncG9wb3ZlcicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdoZWFkZXIuYS1wb3BvdmVyLWhlYWRlciBidXR0b24nLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2xvc2UnLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ2xvc2UnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXBvcG92ZXItaW5uZXIgZGl2LnB1aXMtYXRjLXNpemUtdmFyaWF0aW9uJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXJvdzpudGgtb2YtdHlwZSgxKScsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJzcGFuW2RhdGEtY29tcG9uZW50LXR5cGU9J3MtcHJvZHVjdC1pbWFnZSddIGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1zaXplLXZhcmlhdGlvbi10aXRsZSBhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3RpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXByb2R1Y3Qtc3BlYycsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9zcGVjaWZpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tfc2VsZWN0b3I6ICdhJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1yb3c6bnRoLW9mLXR5cGUoMiknLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1zaXplLXZhcmlhdGlvbi1wcm9kdWN0LW9wdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtZHJvcGRvd24tcHJvbXB0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1zaXplLXZhcmlhdGlvbi1wcmljZSBhLmEtdGV4dC1ub3JtYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogXCJzcGFuW2FyaWEtaGlkZGVuPSd0cnVlJ11cIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1zaXplLXZhcmlhdGlvbi1kZWxpdmVyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWxpdmVyeSdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcm93Om50aC1vZi10eXBlKDMpJyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5zLW5vLWpzLWhpZGUgaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NhbmNlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ2FuY2VsJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1hdGNiLWFkZC1jb250YWluZXIgYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgYXNpbiA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2RpdltkYXRhLWFzaW5dJyk/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgJ2Rpdi5hLXBvcG92ZXItaW5uZXIgZGl2LnB1aXMtYXRjLXNpemUtdmFyaWF0aW9uIGRpdi5hLXJvdzpudGgtb2YtdHlwZSgyKSBkaXYucHVpcy1zaXplLXZhcmlhdGlvbi1wcmljZSBhLmEtdGV4dC1ub3JtYWwgc3BhblthcmlhLWhpZGRlbj1cInRydWVcIl0nXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAnZGl2LmEtcG9wb3Zlci1pbm5lciBkaXYucHVpcy1hdGMtc2l6ZS12YXJpYXRpb24gZGl2LmEtcm93Om50aC1vZi10eXBlKDEpIGRpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXRpdGxlIGEnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgY29uc3QgdXJsRW0gPSB0aXRsZUVtXG4gICAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICBjb25zdCBxdWFudGl0eUVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2W2RhdGEtYWN0aW9uPVwiYS1kcm9wZG93bi1idXR0b25cIl0nKVxuICAgICAgICAgICAgICBjb25zdCBvcHRpb25zRW0gPSBlbS5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgICAgICdkaXYuYS1wb3BvdmVyLWlubmVyIGRpdi5wdWlzLWF0Yy1zaXplLXZhcmlhdGlvbiBkaXYuYS1yb3c6bnRoLW9mLXR5cGUoMSkgZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tcHJvZHVjdC1zcGVjLCBkaXYuYS1wb3BvdmVyLWlubmVyIGRpdi5wdWlzLWF0Yy1zaXplLXZhcmlhdGlvbiBkaXYuYS1yb3c6bnRoLW9mLXR5cGUoMikgZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tcHJvZHVjdC1vcHRpb25zJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXVxuICAgICAgICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbkVtIG9mIG9wdGlvbnNFbSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbktleUVtID0gb3B0aW9uRW0/LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknKVxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvblZhbHVlRW0gPSBvcHRpb25FbT8ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZSwgc3Bhbi5hLWRyb3Bkb3duLXByb21wdCdcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uS2V5ID0gb3B0aW9uS2V5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bOlxcbl0vZywgJycpLnRyaW0oKVxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvblZhbHVlID0gb3B0aW9uVmFsdWVFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1s6XFxuXS9nLCAnJykudHJpbSgpXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0geyBbb3B0aW9uS2V5XTogb3B0aW9uVmFsdWUgfVxuICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChvcHRpb24pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncG9wb3Zlcl9pdGVtJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsLCBvcHRpb25zIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnI3Byb2R1Y3RUaXRsZSwgI3RpdGxlQmxvY2snLFxuICAgIG1hdGNoX3RleHQ6ICcnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIG5hdixcbiAgICAgICAgICBjYXJ0X3NpZGVfYmFyLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI2NlbnRlckNvbCcsXG4gICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtY2FyZCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdGl0bGUnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGtlZXBfYXR0cjogWydpZCddLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlOiBlbT8uaW5uZXJUZXh0IHx8ICcnIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNib25kQnlMaW5lX2ZlYXR1cmVfZGl2JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfYnJhbmQnLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGJyYW5kOiBlbT8uaW5uZXJUZXh0IHx8ICcnIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNib25kQnlMaW5lX2ZlYXR1cmVfZGl2JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF90aXRsZScsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IGVtPy5pbm5lclRleHQgfHwgJycgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2F2ZXJhZ2VDdXN0b21lclJldmlld3MnLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncmV2aWV3JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1pY29uLWFsdCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhY3JDdXN0b21lclJldmlld1RleHQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJyNhcGV4X2Rlc2t0b3AgPiBkaXZbZGF0YS1jc2EtYy1zbG90LWlkPVwiYXBleF9kcF9jZW50ZXJfY29sdW1uXCJdJyArXG4gICAgICAgICAgICAgICAgICAnID4gZGl2W2NsYXNzPVwib2ZmZXJzQ29uc2lzdGVuY3lFbmFibGVkXCJdID4gZGl2Om5vdChbc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCJdKTpub3QoW3N0eWxlPVwiZGlzcGxheTogbm9uZTtcIl0pICcgK1xuICAgICAgICAgICAgICAgICAgJyNjb3JlUHJpY2VEaXNwbGF5X2Rlc2t0b3BfZmVhdHVyZV9kaXY6aGFzKCNzbnMtYmFzZS1wcmljZSkgI3Nucy1iYXNlLXByaWNlIHNwYW4uYS1wcmljZS5hb2stYWxpZ24tY2VudGVyLnJlaW52ZW50UHJpY2VQcmljZVRvUGF5TWFyZ2luLnByaWNlVG9QYXksICcgK1xuICAgICAgICAgICAgICAgICAgJyNhcGV4X2Rlc2t0b3AgPiBkaXZbZGF0YS1jc2EtYy1zbG90LWlkPVwiYXBleF9kcF9jZW50ZXJfY29sdW1uXCJdJyArXG4gICAgICAgICAgICAgICAgICAnID4gZGl2W2NsYXNzPVwib2ZmZXJzQ29uc2lzdGVuY3lFbmFibGVkXCJdID4gZGl2Om5vdChbc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCJdKTpub3QoW3N0eWxlPVwiZGlzcGxheTogbm9uZTtcIl0pICcgK1xuICAgICAgICAgICAgICAgICAgJyNjb3JlUHJpY2VEaXNwbGF5X2Rlc2t0b3BfZmVhdHVyZV9kaXY6bm90KDpoYXMoI3Nucy1iYXNlLXByaWNlKSkgc3Bhbi5hLXByaWNlLmFvay1hbGlnbi1jZW50ZXIucmVpbnZlbnRQcmljZVByaWNlVG9QYXlNYXJnaW4ucHJpY2VUb1BheSwgJyArXG4gICAgICAgICAgICAgICAgICAnI2FwZXhfZGVza3RvcCA+IGRpdltkYXRhLWNzYS1jLXNsb3QtaWQ9XCJhcGV4X2RwX2NlbnRlcl9jb2x1bW5cIl0gPiBkaXZbZGF0YS1jc2EtYy1jb250ZW50LWlkPVwiYXBleF93aXRoX3Jpb19jeFwiXSAnICtcbiAgICAgICAgICAgICAgICAgICcjY29yZVByaWNlRGlzcGxheV9kZXNrdG9wX2ZlYXR1cmVfZGl2IHNwYW4uYS1wcmljZS5hb2stYWxpZ24tY2VudGVyLnJlaW52ZW50UHJpY2VQcmljZVRvUGF5TWFyZ2luLnByaWNlVG9QYXknLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJpY2U6IHt9JyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcHJpY2UnLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHByaWNlOiBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJycpIHx8ICcnIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnJykgfHwgJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYm9uZEFwZXhQcmljZSBzcGFuLmEtb2Zmc2NyZWVuJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1ByaWNlOiB7fScsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXByaWNlJyxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBwcmljZTogZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcnKSB8fCAnJyB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdHdpc3RlcicsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LW9wdGlvbnMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X29wdGlvbnMnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtc2VjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCkgPiBsYWJlbC5hLWZvcm0tbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKSBsYWJlbC5hLWZvcm0tbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5pbm5lckhUTUwucmVwbGFjZSgvWzpcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpIHNwYW4uc2VsZWN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICk/LmlubmVySFRNTFxuICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpPy5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gb3B0aW9uLmlubmVySFRNTC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsIGRhdGE6IHsgW2xhYmVsXTogdmFsdWUudHJpbSgpIH0gfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xhYmVsLmEtZm9ybS1sYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICd1bCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYnV0dG9uX2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkgYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWdDaGlsZCAmJiBpbWdDaGlsZC5hbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gaW1nQ2hpbGQuYWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0NoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1nQ2hpbGQgJiYgaW1nQ2hpbGQuYWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBpbWdDaGlsZC5hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHQudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAvLyBoYW5kbGUgbmV3IHR3aXN0ZXJzXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0d2lzdGVyLXBsdXMtaW5saW5lLXR3aXN0ZXInLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1vcHRpb25zJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9vcHRpb25zJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5pbmxpbmUtdHdpc3Rlci1yb3cnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdkaXYuaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlLWV4cGFuZGVkIHNwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYuaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlLWV4cGFuZGVkIHNwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA/LmlubmVySFRNTC5yZXBsYWNlKC9bOlxcbl0vZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYuaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlLWV4cGFuZGVkIHNwYW4uaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlJ1xuICAgICAgICAgICAgICAgICAgICAgICk/LmlubmVySFRNTFxuICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpPy5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gb3B0aW9uLmlubmVySFRNTC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsIGRhdGE6IHsgW2xhYmVsXTogdmFsdWUudHJpbSgpIH0gfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZS1leHBhbmRlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3VsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdidXR0b25fbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaTpoYXMoc3Bhbi5hLWJ1dHRvbjpub3QoLmFvay1oaWRkZW4pIGlucHV0KScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RW0gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uYS1idXR0b24tdGV4dCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGV4dEVtLmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSB0ZXh0RW0uaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdDaGlsZCA9IHRleHRFbS5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1nQ2hpbGQgJiYgaW1nQ2hpbGQuYWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSAnICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGltZ0NoaWxkLmFsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdDaGlsZCA9IHRleHRFbS5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1nQ2hpbGQgJiYgaW1nQ2hpbGQuYWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBpbWdDaGlsZC5hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHQudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5pbmxpbmUtdHdpc3Rlci1zaW5nbGV0b24taGVhZGVyJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3Rvcignc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LmlubmVySFRNTC5yZXBsYWNlKC9bOlxcbl0vZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3NwYW4uaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICk/LmlubmVySFRNTFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdwcm9kdWN0X29wdGlvbnMnLCBkYXRhOiB7IFtsYWJlbF06IHZhbHVlLnRyaW0oKSB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJyNwcm9kdWN0RmFjdHNEZXNrdG9wRXhwYW5kZXIgdWwuYS11bm9yZGVyZWQtbGlzdCwgI2ZlYXR1cmVidWxsZXRzX2ZlYXR1cmVfZGl2IHVsLmEtdW5vcmRlcmVkLWxpc3QsICNib25kLWZlYXR1cmUtYnVsbGV0cy1kZXNrdG9wIHVsLmEtdW5vcmRlcmVkLWxpc3QnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdhYm91dF90aGlzX2l0ZW0nLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQWJvdXQgdGhpcyBpdGVtOiAnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGknLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICBidWxsZXRfbGlzdDogZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcgJykgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICcjYnV5Ym94OmhhcyhkaXYuYS10YWItY29udGFpbmVyKTpub3QoOmhhcygjcGFydGlhbFN0YXRlX2J1eWJveF9kZXNrdG9wKSk6bm90KDpoYXMoI2x1eHVyeV9idXlib3hfZGVza3RvcCkpJyxcbiAgICAgICAgICAgIG5hbWU6ICdidXlib3gnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RhYl9oZWFkaW5nX2Rlc2t0b3BfYnV5Ym94X2dyb3VwXzEgYScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJfdGFiJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RhYl9oZWFkaW5nX2Rlc2t0b3BfYnV5Ym94X2dyb3VwXzIgYScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3BpY2tfdXBfdGFiJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RhYl9kZXNrdG9wX2J1eWJveF9ncm91cF8xJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcnknLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnRGVsaXZlcnknLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbYnV5X2JveF93aXRoX2FjY29yZGlvbiwgYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9kZWxpdmVyeV1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RhYl9kZXNrdG9wX2J1eWJveF9ncm91cF8yJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncGlja191cCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQaWNrIFVwJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2J1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fcGlja191cF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcignaW5wdXQjQVNJTicpXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgZGF0YTogeyBhc2luOiBhc2luRW0/LnZhbHVlIHx8ICcnIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICcjYnV5Ym94Om5vdCg6aGFzKGRpdi5hLXRhYi1jb250YWluZXIpKTpub3QoOmhhcygjcGFydGlhbFN0YXRlX2J1eWJveF9kZXNrdG9wKSk6bm90KDpoYXMoI2x1eHVyeV9idXlib3hfZGVza3RvcCkpJyxcbiAgICAgICAgICAgIG5hbWU6ICdidXlib3gnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtidXlfYm94X3dpdGhfYWNjb3JkaW9uLCBidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX2RlbGl2ZXJ5XSxcbiAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcignaW5wdXQjQVNJTicpXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgZGF0YTogeyBhc2luOiBhc2luRW0/LnZhbHVlIHx8ICcnIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjcGFydGlhbFN0YXRlX2J1eWJveF9kZXNrdG9wJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNwYXJ0aWFsU3RhdGVCdXlib3ggZGl2LmEtc2VjdGlvbi5hLXRleHQtY2VudGVyLmEtc3BhY2luZy1zbWFsbCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcignaW5wdXQjQVNJTicpXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgZGF0YTogeyBhc2luOiBhc2luRW0/LnZhbHVlIHx8ICcnIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjYnV5Ym94OmhhcygjbHV4dXJ5X2J1eWJveF9kZXNrdG9wKScsXG4gICAgICAgICAgICBuYW1lOiAnYnV5Ym94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNib25kQXBleFByaWNlX2ZlYXR1cmVfZGl2JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZGVsaXZlcnlCbG9ja01lc3NhZ2UnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1kcm9wZG93bi1jb250YWluZXIgc2VsZWN0JyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNib25kLWF0Yy1idXR0b24gaW5wdXQnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQWRkIFRvIENhcnQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCNBU0lOJylcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGFzaW46IGFzaW5FbT8udmFsdWUgfHwgJycgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNvdXRPZlN0b2NrJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50bHkgVW5hdmFpbGFibGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5jYXJkUm9vdC5idWNrZXQnLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnaDIjc2ltaWxhcml0aWVzLXByb2R1Y3QtYnVuZGxlLXdpZGdldC10aXRsZSwgaDIuYS1jYXJvdXNlbC1oZWFkaW5nJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2gyI3NpbWlsYXJpdGllcy1wcm9kdWN0LWJ1bmRsZS13aWRnZXQtdGl0bGUsIGgyLmEtY2Fyb3VzZWwtaGVhZGluZycsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cIm5ldy1kZXRhaWwtZmFjZW91dC1ib3hcIl0nLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdkaXZbaWRePVwiUHJvZHVjdFRpdGxlXCJdLCBkaXZbY2xhc3MqPVwidGl0bGUtY29tcG9uZW50XCJdJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0W2lkXj1cImZidENoZWNrXCJdLCBkaXZbY2xhc3MqPVwidGhlbWF0aWNCdW5kbGUtY2hlY2tib3hcIl0nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0NoZWNrYm94JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdhW2NsYXNzKj1cImRlc2t0b3Atc2ltcy1mYnRfZmJ0LWRlc2t0b3BfaW1hZ2UtbGlua1wiXSwgZGl2W2NsYXNzKj1cImltYWdlLWJhY2tncm91bmRcIl0gYScsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnZGl2W2lkXj1cIlByb2R1Y3RUaXRsZVwiXTpoYXMoYSksIGE6aGFzKGRpdltjbGFzcyo9XCJ0aXRsZS1jb21wb25lbnRcIl0pJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfdGl0bGUnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnZGl2W2lkXj1cIlByb2R1Y3RUaXRsZVwiXTpub3QoOmhhcyhhKSkgZGl2ID4gZGl2W2NsYXNzKj1cInRpdGxlLWNvbXBvbmVudFwiXScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJyZXZpZXdzLXNlY3Rpb25cIl0gYScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUmV2aWV3ZWQgYnkge30nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9yYXRpbmdfY291bnQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnZGl2W2NsYXNzKj1cImRlc2t0b3Atc2ltcy1mYnRfcHJpY2VfcDEzblwiXSBzcGFuLmEtcHJpY2Ugc3Bhbi5hLW9mZnNjcmVlbicsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmFkZC10by1jYXJ0LWJ1dHRvbicsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2I2RwOm5vdCguZ3JvY2VyeSk6bm90KC5sdXh1cnkpICNzaW1pbGFyaXRpZXNfZmVhdHVyZV9kaXYnLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2gyLmEtY2Fyb3VzZWwtaGVhZGluZywgaDFbY2xhc3MqPVwiY2Fyb3VzZWwtaGVhZGluZ1wiXScsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2gyLmEtY2Fyb3VzZWwtaGVhZGluZywgaDFbY2xhc3MqPVwiY2Fyb3VzZWwtaGVhZGluZ1wiXScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2Fyb3VzZWxfY2FyZFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuZ3JvY2VyeSAjc2ltaWxhcml0aWVzX2ZlYXR1cmVfZGl2JyxcbiAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdoMi5hLWNhcm91c2VsLWhlYWRpbmcsIGgxW2NsYXNzKj1cImNhcm91c2VsLWhlYWRpbmdcIl0nLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdoMi5hLWNhcm91c2VsLWhlYWRpbmcsIGgxW2NsYXNzKj1cImNhcm91c2VsLWhlYWRpbmdcIl0nLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZyZXNoX2Nhcm91c2VsX2NhcmRcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2Lmx1eHVyeSAjc2ltaWxhcml0aWVzX2ZlYXR1cmVfZGl2JyxcbiAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdoMi5hLWNhcm91c2VsLWhlYWRpbmcsIGgxW2NsYXNzKj1cImNhcm91c2VsLWhlYWRpbmdcIl0nLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdoMi5hLWNhcm91c2VsLWhlYWRpbmcsIGgxW2NsYXNzKj1cImNhcm91c2VsLWhlYWRpbmdcIl0nLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGx1eHVyeV9jYXJvdXNlbF9jYXJkXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNwcm9kdWN0LWNvbXBhcmlzb25fZmVhdHVyZV9kaXYnLFxuICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfY29tcGFyaXNvbicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdoMicsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndHI6aGFzKGRpdltjbGFzc149XCJfcHJvZHVjdC1jb21wYXJpc29uLWRlc2t0b3BfdGl0bGVTdHlsZVwiXSknLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndGRbY2xhc3MqPVwiYXNpblwiXScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnZGl2W2NsYXNzXj1cIl9wcm9kdWN0LWNvbXBhcmlzb24tZGVza3RvcF90aXRsZVN0eWxlXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2EgPiBkaXZbaWRePVwiaW1hZ2VDb250YWluZXJcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdiA+IGRpdltpZF49XCJpbWFnZUNvbnRhaW5lclwiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYSA+IGRpdltjbGFzc149XCJfcHJvZHVjdC1jb21wYXJpc29uLWRlc2t0b3BfdGl0bGVTdHlsZVwiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3RpdGxlJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYgPiBkaXZbY2xhc3NePVwiX3Byb2R1Y3QtY29tcGFyaXNvbi1kZXNrdG9wX3RpdGxlU3R5bGVcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF90aXRsZSdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3RyOmhhcyhpbnB1dFtuYW1lPVwic3VibWl0LmFkZFRvQ2FydFwiXSknLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndGRbY2xhc3MqPVwiYXNpblwiXScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGFzc2VzID0gZW0uY2xhc3NMaXN0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBjbGFzc2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoY2xzKSA9PiBgLiR7Y2xzfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAuam9pbignLCAnKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRFbSA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgndGJvZHknKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAndHI6aGFzKGRpdltjbGFzc149XCJfcHJvZHVjdC1jb21wYXJpc29uLWRlc2t0b3BfdGl0bGVTdHlsZVwiXSknXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoJ2RpdltjbGFzc149XCJfcHJvZHVjdC1jb21wYXJpc29uLWRlc2t0b3BfdGl0bGVTdHlsZVwiXScpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHRFbT8uaW5uZXJUZXh0IHx8ICcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dFtuYW1lPVwic3VibWl0LmFkZFRvQ2FydFwiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGFzc2VzID0gZW0uY2xhc3NMaXN0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBjbGFzc2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoY2xzKSA9PiBgLiR7Y2xzfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAuam9pbignLCAnKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJ3Rib2R5JylcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RyOmhhcyhkaXZbY2xhc3NePVwiX3Byb2R1Y3QtY29tcGFyaXNvbi1kZXNrdG9wX3RpdGxlU3R5bGVcIl0pJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKCdkaXZbY2xhc3NePVwiX3Byb2R1Y3QtY29tcGFyaXNvbi1kZXNrdG9wX3RpdGxlU3R5bGVcIl0nKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0IHx8ICcnXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbiA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInN1Ym1pdC5hZGRUb0NhcnRcIl0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbnMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXBsYWNlKC9bXFxbXFxdXCJdL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJ3Rib2R5JylcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcigndHI6aGFzKHNwYW4uYS1wcmljZSknKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKCdzcGFuLmEtcHJpY2Ugc3Bhbi5hLW9mZnNjcmVlbicpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgndGJvZHknKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAndHI6aGFzKGRpdltjbGFzc149XCJfcHJvZHVjdC1jb21wYXJpc29uLWRlc2t0b3BfdGl0bGVTdHlsZVwiXSknXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdhOmhhcyhkaXZbY2xhc3NePVwiX3Byb2R1Y3QtY29tcGFyaXNvbi1kZXNrdG9wX3RpdGxlU3R5bGVcIl0pJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5ocmVmIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ2NvbXBhcmlzb25faXRlbXMnLCBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICd0cjpoYXMoc3Bhbi5hLXByaWNlKScsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICd0ZFtjbGFzcyo9XCJhc2luXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSBlbS5jbGFzc0xpc3QudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IGNsYXNzZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKChjbHMpID0+IGAuJHtjbHN9YClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCcsICcpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dEVtID0gZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCd0Ym9keScpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RyJylbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcignZGl2W2NsYXNzXj1cIl9wcm9kdWN0LWNvbXBhcmlzb24tZGVza3RvcF90aXRsZVN0eWxlXCJdJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dEVtPy5pbm5lclRleHQgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1wcmljZSBzcGFuLmEtb2Zmc2NyZWVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3ByaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICd0cjpoYXMoZGl2W2NsYXNzKj1cImRlbGl2ZXJ5XCJdKScsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICd0ZFtjbGFzcyo9XCJhc2luXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSBlbS5jbGFzc0xpc3QudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IGNsYXNzZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKChjbHMpID0+IGAuJHtjbHN9YClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCcsICcpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dEVtID0gZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCd0Ym9keScpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RyJylbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcignZGl2W2NsYXNzXj1cIl9wcm9kdWN0LWNvbXBhcmlzb24tZGVza3RvcF90aXRsZVN0eWxlXCJdJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dEVtPy5pbm5lclRleHQgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJkZWxpdmVyeVwiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZWxpdmVyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndHI6aGFzKGRpdltjbGFzcyo9XCJyZXZpZXdzLXJhdGluZ1wiXSknLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndGRbY2xhc3MqPVwiYXNpblwiXScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGFzc2VzID0gZW0uY2xhc3NMaXN0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBjbGFzc2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoY2xzKSA9PiBgLiR7Y2xzfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAuam9pbignLCAnKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRFbSA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgndGJvZHknKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yQWxsKCd0cicpWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoJ2RpdltjbGFzc149XCJfcHJvZHVjdC1jb21wYXJpc29uLWRlc2t0b3BfdGl0bGVTdHlsZVwiXScpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHRFbT8uaW5uZXJUZXh0IHx8ICcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwicmV2aWV3cy1yYXRpbmdcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfcmF0aW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGljb24gPSBlbS5xdWVyeVNlbGVjdG9yKCdpJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1saW5rJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGljb24/LmlubmVyVGV4dCArICcgUmV2aWV3ZWQgYnkgJyArIHNwYW4/LmlubmVyVGV4dCB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjYXR0YWNoLXdhcnJhbnR5LXBhbmUgI2F0dGFjaC13YXJyYW50eS1kaXNwbGF5JyxcbiAgICAgICAgICAgIG5hbWU6ICd3YXJyYW50eS1ib3gnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmF0dGFjaC13YXJyYW50eS1ib3gnLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICcjYXR0YWNoLXdhcnJhbnR5LWNhcmQtZGlzcGxheS10aXRsZScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpLmEtaWNvbi1jaGVja2JveCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2F0dGFjaC13YXJyYW50eS1jYXJkLWRpc3BsYXktdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYXR0YWNoLXdhcnJhbnR5LWNhcmQtcHJpY2UnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtc2VjdGlvbi5hdHRhY2gtd2FycmFudHktYnV0dG9uLXJvdycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbYXJpYS1sYWJlbGxlZGJ5PSdhdHRhY2hTaUFkZENvdmVyYWdlLWFubm91bmNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF9wcm90ZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdBZGQgUHJvdGVjdGlvbidcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2FyaWEtbGFiZWxsZWRieT0nYXR0YWNoU2lOb0NvdmVyYWdlLWFubm91bmNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ25vX3Byb3RlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ05vIFRoYW5rcydcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9oei9tb2JpbGUvbWlzc2lvbicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAgY2FydF9zaWRlX2JhcixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltkYXRhLWludGVudD1cImludGVudC1mZWVkLW1pc3Npb24tc3dpdGNoZXJcIl0nLFxuICAgICAgICAgICAgbmFtZTogJ2NhdGVnb3J5X3N3aXRjaGVyJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2g0JyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkuYS1jYXJvdXNlbC1jYXJkJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBpbWdFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gaW1nRW0/LmFsdCB8fCAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwic2luZ2xlUHJvZHVjdENvbnRhaW5lclwiXScsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuW2NsYXNzKj1cInRpdGxlUjJcIl0nLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYTpoYXMoaW1nKScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cInNpbmdsZVN3YXRjaGVzQ29udGFpbmVyXCJdJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBhJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbS5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fCBlbS5pbm5lclRleHQgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhW2NsYXNzKj1cIl9saW5rX1wiXScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwidmFyaWF0aW9uTGlua1wiXSBhJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYTpub3QoOmhhcyhpbWcpKScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBEZXRhaWwnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwic2luZ2xlUHJvZHVjdERldGFpbHNcIl0gYScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBEZXRhaWwnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtYnV0dG9uOmhhcyhpbnB1dCknLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICdzcGFuLmEtYnV0dG9uIGEsIGRpdltkYXRhLWNvbXBvbmVudC1pZD1cInNlZUFsbEJ1eWluZ09wdGlvbnNCdXR0b25cIl0gc3Bhbi5hLWJ1dHRvbicsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2RpdltkYXRhLWFzaW5dJylcbiAgICAgICAgICAgICAgY29uc3QgYXNpbiA9IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3Rvcignc3Bhbi5hLXByaWNlIHNwYW4uYS1vZmZzY3JlZW4nKVxuICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdzcGFuW2NsYXNzKj1cInRpdGxlUjJcIl0nKVxuICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dC5yZXBsYWNlKCdcIicsICcnKVxuICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2E6bm90KDpoYXMoaW1nKSknKVxuICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvbW90aW9uX2l0ZW1zJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjaW50ZW50LXRhYnMnLFxuICAgICAgICAgICAgbmFtZTogJ2ludGVudF90YWJzJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICBlbVxuICAgICAgICAgICAgICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW50ZW50JylcbiAgICAgICAgICAgICAgICAgICAgICA/LnJlcGxhY2UoJ2ludGVudC1mZWVkLScsICcnKVxuICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlQWxsKCctJywgJ18nKSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwiQ2FyZEluc3RhbmNlXCJdOmhhcyhkaXZbY2xhc3MqPVwicHJvZHVjdENvbnRhaW5lclwiXSknLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2g0JyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaDQnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNhcm91c2VsX2NhcmRcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cIkNhcmRJbnN0YW5jZVwiXTpoYXMoZGl2W2NsYXNzKj1cInR3b0FzaW5zUHJvZHVjdERldGFpbHNcIl0pJyxcbiAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdoNCcsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2g0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjYXJvdXNlbF9jYXJkLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwidHdvQXNpbnNQcm9kdWN0Q29udGFpbmVyXCJdJyxcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2RpdltjbGFzcyo9XCJ0d29Bc2luc1Byb2R1Y3REZXRhaWxzXCJdIGFbYXJpYS1sYWJlbF0nKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGFFbS5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fCAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwiaW1hZ2VCbG9ja0NvbnRhaW5lclwiXSBhJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cInR3b0FzaW5zUHJvZHVjdERldGFpbHNcIl0gYScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBEZXRhaWxzJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3BhbltjbGFzcyo9XCJhY3Rpb25CdXR0b25cIl06aGFzKGkuYS1pY29uLWNhcnQpJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0J1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcignaW5wdXRbZGF0YS1hc2luXScpXG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpIHx8ICcnXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3Rvcignc3Bhbi5hLXByaWNlIHNwYW4uYS1vZmZzY3JlZW4nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2RpdltjbGFzcyo9XCJ0d29Bc2luc1Byb2R1Y3REZXRhaWxzXCJdIGEnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdkaXZbY2xhc3MqPVwidHdvQXNpbnNQcm9kdWN0RGV0YWlsc1wiXSBhJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb21vdGlvbl9pdGVtcycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwiaW50dWl0aW9uLXN0aWNreS1jb250YWluZXJcIl0nLFxuICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpW2NsYXNzKj1cImludHVpdGlvbi1hdHRyaWJ1dGUtYmFyXCJdJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2EtY2FyZHVpLWhlYWRlcicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBhcmlhRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdidXR0b25bYXJpYS1sYWJlbF0nKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyaWFFbT8uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgfHwgdGV4dEVtPy5pbm5lclRleHQgfHwgJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdkaXZbY2xhc3MqPVwiaW50dWl0aW9uLWF0dHJpYnV0ZS13aXRoLWNoZXZyb25fX2F0dHJpYnV0ZVdpdGhDaGV2cm9uQ29udGFpbmVyXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYXBwbHlfZmlsdGVycycsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdzcGFuLmEtdHJ1bmNhdGUtZnVsbCcpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJpYUVtID0gZW0ucXVlcnlTZWxlY3RvcignYnV0dG9uW2FyaWEtbGFiZWxdJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJpYUVtPy5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fCB0ZXh0RW0/LmlubmVyVGV4dCB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnZGl2W2NsYXNzKj1cImludHVpdGlvbi1hdHRyaWJ1dGUtd2l0aC1jaGV2cm9uX19jaGV2cm9uT3V0ZXJDb250YWluZXJcIl0nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdPcGVuIEZpbHRlcnMnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJjbG9zZU1vZGFsSWNvbkNvbnRhaW5lclwiXScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ2xvc2UgRmlsdGVycycsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLWNhcmR1aS1jb250ZW50ID4gZGl2ID4gZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbj8uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgfHwgYnV0dG9uPy5pbm5lclRleHQgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwiYWN0aW9uQ29udGFpbmVyXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI2ludGVudC1jb250ZW50LWRlZmF1bHQnLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW50ZW50Jyk/LnJlcGxhY2UoJ2ludGVudC1mZWVkLScsICcnKS5yZXBsYWNlQWxsKCctJywgJ18nKSB8fFxuICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaVtjbGFzcyo9XCJwcm9kdWN0Q29udGFpbmVyXCJdJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3BhbltjbGFzcyo9XCJ0aXRsZVIzXCJdLCBzcGFuW2NsYXNzKj1cInRpdGxlUjRcIl0nLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYTpoYXMoaW1nKScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJzd2F0Y2hlc1wiXSwgZGl2W2NsYXNzKj1cInZhcmlhdGlvbkNvbnRhaW5lclwiXScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdvcHRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpIGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW0uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgfHwgZW0uaW5uZXJUZXh0IHx8ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2FbY2xhc3MqPVwiX2xpbmtfXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cInZhcmlhdGlvbkxpbmtcIl0gYScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2FbY2xhc3MqPVwicHJvZHVjdExpbmtcIl0nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF90aXRsZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLWJ1dHRvbjpoYXMoaW5wdXQpJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ3NwYW4uYS1idXR0b24gYSwgZGl2W2RhdGEtY29tcG9uZW50LWlkPVwic2VlQWxsQnV5aW5nT3B0aW9uc0J1dHRvblwiXSBzcGFuLmEtYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2RpdltkYXRhLWFzaW5dJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW4gPSBhc2luRW0/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdzcGFuLmEtcHJpY2Ugc3Bhbi5hLW9mZnNjcmVlbicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3Rvcignc3BhbltjbGFzcyo9XCJ0aXRsZVIzXCJdJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0LnJlcGxhY2UoJ1wiJywgJycpXG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2E6bm90KDpoYXMoaW1nKSknKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBuYW1lRW0gPSBlbS5jbG9zZXN0KCcjaW50ZW50LWNvbnRlbnQtZGVmYXVsdCcpXG4gICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID1cbiAgICAgICAgICAgICAgICAgICAgbmFtZUVtXG4gICAgICAgICAgICAgICAgICAgICAgPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW50ZW50JylcbiAgICAgICAgICAgICAgICAgICAgICA/LnJlcGxhY2UoJ2ludGVudC1mZWVkLScsICcnKVxuICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlQWxsKCctJywgJ18nKSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaVtjbGFzcyo9XCJpbnR1aXRpb24tcHJvZHVjdC1ncmlkX19mYWNlb3V0XCJdJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3BhbltjbGFzcyo9XCJ0aXRsZVIzXCJdLCBzcGFuW2NsYXNzKj1cInRpdGxlUjRcIl0nLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYTpoYXMoaW1nKScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJzd2F0Y2hlc1wiXSwgZGl2W2NsYXNzKj1cInZhcmlhdGlvbkNvbnRhaW5lclwiXScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdvcHRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpIGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW0uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgfHwgZW0uaW5uZXJUZXh0IHx8ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2FbY2xhc3MqPVwiX2xpbmtfXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cInZhcmlhdGlvbkxpbmtcIl0gYScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2FbY2xhc3MqPVwicHJvZHVjdExpbmtcIl0nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IERldGFpbCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLWJ1dHRvbjpoYXMoaW5wdXQpJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ3NwYW4uYS1idXR0b24gYSwgZGl2W2RhdGEtY29tcG9uZW50LWlkPVwic2VlQWxsQnV5aW5nT3B0aW9uc0J1dHRvblwiXSBzcGFuLmEtYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW4gPSBhc2luRW0/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdzcGFuLmEtcHJpY2Ugc3Bhbi5hLW9mZnNjcmVlbicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3Rvcignc3BhbltjbGFzcyo9XCJ0aXRsZVIzXCJdJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0LnJlcGxhY2UoJ1wiJywgJycpXG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2E6bm90KDpoYXMoaW1nKSknKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBuYW1lRW0gPSBlbS5jbG9zZXN0KCcjaW50ZW50LWNvbnRlbnQtZGVmYXVsdCcpXG4gICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID1cbiAgICAgICAgICAgICAgICAgICAgbmFtZUVtXG4gICAgICAgICAgICAgICAgICAgICAgPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW50ZW50JylcbiAgICAgICAgICAgICAgICAgICAgICA/LnJlcGxhY2UoJ2ludGVudC1mZWVkLScsICcnKVxuICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlQWxsKCctJywgJ18nKSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvY2FydC9hZGQtdG8tY2FydCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIG1hdGNoX3dpdGhfcmVmOiB0cnVlLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAgY2FydF9zaWRlX2JhcixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1hdGMtYnV5LWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctc3VidG90YWwnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LXN1YnRvdGFsLWl0ZW0tY291bnQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwic3BhblthcmlhLWhpZGRlbj0ndHJ1ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc2MtYnV5LWJveC1wdGMtYnV0dG9uIHNwYW4uYS1idXR0b24taW5uZXIgaW5wdXQnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdkaXYuc2Mtd2l0aG91dC1tdWx0aWNhcnQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2hlY2tfb3V0JyxcbiAgICAgICAgICAgICAgICBmZXRjaF91cmw6ICcvY2FydCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LWd0YyBhJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2dvX3RvX2NhcnQnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICdkaXYuc3ctYXRmLXJlY29tbWVuZGF0aW9ucy1jb250YWluZXIgZGl2W2lkXj1cIkNhcmRJbnN0YW5jZVwiXSwgZGl2I3NtYXJ0LXdhZ29uLXJlY29tbWVuZGF0aW9ucy1idGYgZGl2W2lkXj1cIkNhcmRJbnN0YW5jZVwiXScsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2gxLmEtY2Fyb3VzZWwtaGVhZGluZycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdoMS5hLWNhcm91c2VsLWhlYWRpbmcnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGNhcm91c2VsX2NhcmRcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9jYXJ0L3NtYXJ0LXdhZ29uJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIG5hdixcbiAgICAgICAgICBjYXJ0X3NpZGVfYmFyLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LWF0Yy1idXktYm94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1zdWJ0b3RhbCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctc3VidG90YWwtaXRlbS1jb3VudCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJzcGFuW2FyaWEtaGlkZGVuPSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzYy1idXktYm94LXB0Yy1idXR0b24gc3Bhbi5hLWJ1dHRvbi1pbm5lciBpbnB1dCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5zYy13aXRob3V0LW11bHRpY2FydCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdjaGVja19vdXQnLFxuICAgICAgICAgICAgICAgIGZldGNoX3VybDogJy9jYXJ0J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctZ3RjIGEnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZ29fdG9fY2FydCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICdkaXYuc3ctYXRmLXJlY29tbWVuZGF0aW9ucy1jb250YWluZXIgZGl2W2lkXj1cIkNhcmRJbnN0YW5jZVwiXSwgZGl2I3NtYXJ0LXdhZ29uLXJlY29tbWVuZGF0aW9ucy1idGYgZGl2W2lkXj1cIkNhcmRJbnN0YW5jZVwiXScsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnaDEuYS1jYXJvdXNlbC1oZWFkaW5nJyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaDEuYS1jYXJvdXNlbC1oZWFkaW5nJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjYXJvdXNlbF9jYXJkXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvZ3AvY2FydC92aWV3Lmh0bWwnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBjYXJ0XG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvY2FydCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IGNhcnRcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9jYXJ0L2x1eHVyeScsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IGx1eHVyeV9jYXJ0XG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvY2FydC9sb2NhbG1hcmtldCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IGZyZXNoX2NhcnRcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9hbG0vYnlnJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnYVtuYW1lPVwicHJvY2VlZFRvQ2hlY2tvdXRcIl0nLFxuICAgICAgICAgICAgbmFtZTogJ2NoZWNrX291dCcsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwiQ2FyZEluc3RhbmNlXCJdJyxcbiAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdoMi5hLWNhcm91c2VsLWhlYWRpbmcnLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdoMi5hLWNhcm91c2VsLWhlYWRpbmcnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZyZXNoX2Nhcm91c2VsX2NhcmRcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9hbG0vc3Vic3RpdHV0aW9uJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N1YnNDb250aW51ZUJ1dHRvbiBpbnB1dCcsXG4gICAgICAgICAgICBuYW1lOiAnY2hlY2tfb3V0JyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDb250aW51ZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZyZXNoX3N1YnN0aXR1dGlvbl9jYXJkXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9jYXJ0L2J5YycsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIG1hdGNoX3dpdGhfcmVmOiB0cnVlLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2FbbmFtZT1cInNjLWJ5Yy1wdGMtYnV0dG9uXCJdJyxcbiAgICAgICAgICAgIG5hbWU6ICdjaGVja19vdXQnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnc3BhbltjZWxfd2lkZ2V0X2lkXj1cImJ5Yy1iYWNrLWJ1dHRvblwiXSBhJyxcbiAgICAgICAgICAgIG5hbWU6ICdiYWNrX3RvX2NhcnQnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cIkNhcmRJbnN0YW5jZVwiXScsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnaDIuYS1jYXJvdXNlbC1oZWFkaW5nJyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaDIuYS1jYXJvdXNlbC1oZWFkaW5nJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjYXJvdXNlbF9jYXJkXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvZm1jL3NzZC1zdG9yZWZyb250JyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIG5hdixcbiAgICAgICAgICBjYXJ0X3NpZGVfYmFyLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cInN0b3JlLXN1Ym5hdi1kZXNrdG9wX3N0eWxlX3N1Ym5hdi1jb250ZW50LWNvbnRhaW5lclwiXScsXG4gICAgICAgICAgICBuYW1lOiAnc3ViX3N0b3JlcycsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAnYVtjbGFzcyo9XCJzdG9yZS1zdWJuYXYtZGVza3RvcF9zdHlsZVwiXSwgYVtjbGFzcyo9XCJzdG9yZS1zdWJuYXYtZGVza3RvcC1mbHlvdXRfc3R5bGVcIl0nLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBlbS5pbm5lclRleHQgfHwgJ1NhbWUgRGF5IFN0b3JlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwiQ2FyZEluc3RhbmNlXCJdJyxcbiAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdoMi5zZWVNb3JlVGl0bGVIZWFkZXInLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdoMi5hLWNhcm91c2VsLWhlYWRpbmcnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNhcm91c2VsX2NhcmRcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9mbWMvc3NkLWNhdGVnb3J5JyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIG5hdixcbiAgICAgICAgICBjYXJ0X3NpZGVfYmFyLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cInN0b3JlLXN1Ym5hdi1kZXNrdG9wX3N0eWxlX3N1Ym5hdi1jb250ZW50LWNvbnRhaW5lclwiXScsXG4gICAgICAgICAgICBuYW1lOiAnc3ViX3N0b3JlcycsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhW2NsYXNzKj1cInN0b3JlLXN1Ym5hdi1kZXNrdG9wX3N0eWxlXCJdJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZW0uaW5uZXJUZXh0IHx8ICdTYW1lIERheSBTdG9yZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmRjbC1jb250YWluZXInLFxuICAgICAgICAgICAgbmFtZTogJ2NhdGVnb3JpZXMnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaDIuZGNsLWhlYWRlci10aXRsZScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkuYS1jYXJvdXNlbC1jYXJkLmRjbC1jYXJvdXNlbC1lbGVtZW50IGEnLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdkaXYuZGNsLWNhcmQtZm9vdGVyJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwiQ2FyZEluc3RhbmNlXCJdJyxcbiAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdoMi5zZWVNb3JlVGl0bGVIZWFkZXInLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdoMi5hLWNhcm91c2VsLWhlYWRpbmcnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNhcm91c2VsX2NhcmRcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9ncC9iZXN0c2VsbGVycycsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIG1hdGNoX3dpdGhfcmVmOiB0cnVlLFxuICAgIGNoaWxkcmVuOiBwb3B1bGFyX3Byb2R1Y3RzXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9ncC9uZXctcmVsZWFzZXMvKicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIG1hdGNoX3dpdGhfcmVmOiB0cnVlLFxuICAgIG1hdGNoX3dpdGhfd2lsZGNhcmQ6IHRydWUsXG4gICAgY2hpbGRyZW46IHBvcHVsYXJfcHJvZHVjdHNcbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2dwL21vdmVycy1hbmQtc2hha2Vycy8qJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgbWF0Y2hfd2l0aF93aWxkY2FyZDogdHJ1ZSxcbiAgICBjaGlsZHJlbjogcG9wdWxhcl9wcm9kdWN0c1xuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvZ3AvbW9zdC13aXNoZWQtZm9yLyonLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBtYXRjaF93aXRoX3dpbGRjYXJkOiB0cnVlLFxuICAgIGNoaWxkcmVuOiBwb3B1bGFyX3Byb2R1Y3RzXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9ncC9tb3N0LWdpZnRlZC8qJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgbWF0Y2hfd2l0aF93aWxkY2FyZDogdHJ1ZSxcbiAgICBjaGlsZHJlbjogcG9wdWxhcl9wcm9kdWN0c1xuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvQmVzdC1TZWxsZXJzKi96Z2JzLyonLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBtYXRjaF93aXRoX3dpbGRjYXJkOiB0cnVlLFxuICAgIGNoaWxkcmVuOiBwb3B1bGFyX3Byb2R1Y3RzXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9CZXN0LVNlbGxlcnMqL3pnYnMvKi8qJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgbWF0Y2hfd2l0aF93aWxkY2FyZDogdHJ1ZSxcbiAgICBjaGlsZHJlbjogcG9wdWxhcl9wcm9kdWN0c1xuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvKi9iJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgbWF0Y2hfd2l0aF93aWxkY2FyZDogdHJ1ZSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIGNhcnRfc2lkZV9iYXIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjbmF2LXN1Ym5hdicsXG4gICAgICAgICAgICBuYW1lOiAnc3ViX3N0b3JlcycsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhJyxcbiAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpLmdlbmVyaWMtc3VibmF2LWZseW91dC1pdGVtJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgdXNlX3Jvb3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3NePVwiRGVza3RvcFJlZmluZW1lbnRzLW1vZHVsZV9fcm9vdFwiXScsXG4gICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2JyxcbiAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1iYXNlLmEtdGV4dC1ib2xkJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1iYXNlLmEtdGV4dC1ib2xkJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndWxbY2xhc3NePVwiQnJlYWRjcnVtYnMtbW9kdWxlXCJdIGxpOmhhcyhhKScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3VsW2NsYXNzXj1cIkJyZWFkY3J1bWJzLW1vZHVsZVwiXSBsaTpub3QoOmhhcyhhKSknLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbcm9sZT1cInJhZGlvZ3JvdXBcIl0gPiBzcGFuLCBkaXZbcm9sZT1cImdyb3VwXCJdID4gc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgZW0ucXVlcnlTZWxlY3RvcignZGl2W2FyaWEtbGFiZWxdJyk/LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBlbS5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lRW0gPSBlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5maXJzdEVsZW1lbnRDaGlsZFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgPy50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bIF0vZywgJ18nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eXyt8XyskL2csICcnKVxuXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbS5xdWVyeVNlbGVjdG9yKCdkaXZbYXJpYS1sYWJlbF0nKT8uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtLmlubmVyVGV4dFxuXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0RW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2lucHV0W3R5cGU9XCJyYWRpb1wiXSwgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJ1xuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHNlbGVjdEVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvY2Vzc2VkLWlucHV0LWNoZWNrZWQnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMuJyArIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlOiB0ZXh0Py50cmltKCkgfHwgJycsIHNlbGVjdGVkOiBmYWxzZSB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2J1dHRvbltjbGFzcyo9XCJTZWVNb3JlQnV0dG9uLW1vZHVsZVwiXScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzc149XCJQcm9kdWN0Q2FyZC1tb2R1bGVfX2NhcmRcIl0nLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAncFtpZF49XCJ0aXRsZVwiXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwiaW1hZ2VXcmFwcGVyXCJdIGEnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2FbY2xhc3MqPVwiY2FyZENvbnRhaW5pbmdMaW5rXCJdJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlsJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbZGF0YS10ZXN0aWQ9XCJjb2xvci1zd2F0Y2hcIl0gdWwnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdjb2xvcnMnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGknLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVtLnF1ZXJ5U2VsZWN0b3IoJ2EnKT8uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgYXNpbiA9IGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbS5xdWVyeVNlbGVjdG9yKCdwW2lkXj1cInRpdGxlXCJdIHNwYW4uYS10cnVuY2F0ZS1mdWxsJyk/LmlubmVyVGV4dFxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9tb3Rpb25faXRlbXMnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgYXNpbiwgdGl0bGUgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvYXAvc2lnbmluJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHRlcm1pbmF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICEhYXJndW1lbnRzWzBdXG4gICAgfSxcbiAgICB0ZXJtaW5hdGVfY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHNbMF1cbiAgICB9LFxuICAgIHNlbGVjdG9yOiAnaHRtbCdcbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2dwL2J1eS9zcGMvaGFuZGxlcnMvZGlzcGxheS5odG1sJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHRlcm1pbmF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICEhYXJndW1lbnRzWzBdXG4gICAgfSxcbiAgICB0ZXJtaW5hdGVfY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHNbMF1cbiAgICB9LFxuICAgIHNlbGVjdG9yOiAnaHRtbCdcbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2dwL2J1eWFnYWluJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIG1hdGNoX3dpdGhfcmVmOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogYnV5X2FnYWluXG4gICAgICB9XG4gICAgXVxuICB9XG5dXG4iLCJkZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIGNsaWNrYWJsZV9yZWNpcGVzOiBhbnlcbiAgICBpbnB1dF9yZWNpcGVzOiBhbnlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0VsZW1lbnQoXG4gIGVsZW1lbnQ6IGFueSxcbiAgcmVjaXBlOiBhbnksXG4gIHBhcmVudE5hbWUgPSAnJyxcbiAgbnRoQ2hpbGQgPSAwLFxuICBkb2N1bWVudCA9IGdsb2JhbFRoaXMuZG9jdW1lbnQsXG4gIHdpbmRvdyA9IGdsb2JhbFRoaXMud2luZG93XG4pIHtcbiAgLy8gY29uc29sZS5sb2coXCJwcm9jZXNzaW5nIGVsZW1lbnQ6IFwiLCBlbGVtZW50LCByZWNpcGUpO1xuICAvLyBDcmVhdGUgYSBuZXcgZWxlbWVudCB1c2luZyB0aGUgRE9NIEFQSVxuICBsZXQgdGFnTmFtZSA9IHJlY2lwZS50YWdfbmFtZSB8fCBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKVxuICAvLyBIYW5kbGUgdW5kZXJzY29yZWQgdGFnc1xuICBpZiAodGFnTmFtZS5lbmRzV2l0aCgnXycpKSB7XG4gICAgdGFnTmFtZSA9IHRhZ05hbWUuc2xpY2UoMCwgLTEpXG4gIH1cbiAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSlcblxuICAvLyBFeHRyYWN0IHRleHQgY29udGVudCBiYXNlZCBvbiB0aGUgcmVjaXBlXG4gIGxldCBlbGVtZW50VGV4dCA9ICcnXG4gIGlmIChyZWNpcGUudGV4dF9zZWxlY3Rvcikge1xuICAgIGNvbnN0IHRleHRFbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKHJlY2lwZS50ZXh0X3NlbGVjdG9yKVxuICAgIGlmICh0ZXh0RWxlbWVudCkge1xuICAgICAgZWxlbWVudFRleHQgPSB0ZXh0RWxlbWVudC5pbm5lclRleHQgfHwgdGV4dEVsZW1lbnQudGV4dENvbnRlbnQgfHwgJydcbiAgICB9XG4gIH0gZWxzZSBpZiAocmVjaXBlLnRleHRfanMpIHtcbiAgICBlbGVtZW50VGV4dCA9IHJlY2lwZS50ZXh0X2pzKGVsZW1lbnQpXG4gICAgaWYgKGVsZW1lbnRUZXh0ID09PSAnJyB8fCBlbGVtZW50VGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygndGV4dCBqcyBkb2VzIG5vdCBkZXRlY3QgdGV4dCBmb3IgZWxlbWVudCAnLCBlbGVtZW50KVxuICAgIH1cbiAgfSBlbHNlIGlmIChyZWNpcGUuYWRkX3RleHQpIHtcbiAgICBlbGVtZW50VGV4dCA9IGVsZW1lbnQuaW5uZXJUZXh0IHx8IGVsZW1lbnQudGV4dENvbnRlbnQgfHwgJydcbiAgfVxuICBpZiAoZWxlbWVudFRleHQgPT0gbnVsbCkge1xuICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpXG4gICAgY29uc29sZS5sb2coZWxlbWVudFRleHQpXG4gIH1cbiAgZWxlbWVudFRleHQgPSBlbGVtZW50VGV4dC5yZXBsYWNlKC9cXHMrL2csICcgJykudHJpbSgpXG4gIGlmIChyZWNpcGUudGV4dF9mb3JtYXQpIHtcbiAgICBlbGVtZW50VGV4dCA9IHJlY2lwZS50ZXh0X2Zvcm1hdC5yZXBsYWNlKCd7fScsIGVsZW1lbnRUZXh0KVxuICB9IGVsc2UgaWYgKHJlY2lwZS50ZXh0X2Zvcm1hdCkge1xuICAgIGVsZW1lbnRUZXh0ID0gcmVjaXBlLnRleHRfZm9ybWF0XG4gIH1cblxuICBpZiAoZWxlbWVudFRleHQgJiYgcmVjaXBlLmFkZF90ZXh0KSB7XG4gICAgbmV3RWxlbWVudC50ZXh0Q29udGVudCA9IGVsZW1lbnRUZXh0XG4gIH1cblxuICAvLyBCdWlsZCB0aGUgbm9kZSBhdHRyaWJ1dGVzXG4gIGxldCBlbGVtZW50TmFtZSA9ICcnXG4gIGlmIChyZWNpcGUubmFtZSkge1xuICAgIGlmIChyZWNpcGUubmFtZSA9PT0gJ2Zyb21fdGV4dCcpIHtcbiAgICAgIGlmICghZWxlbWVudFRleHQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2VsZW1lbnRUZXh0IGlzIGVtcHR5JywgcmVjaXBlLCBlbGVtZW50KVxuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgfVxuICAgICAgZWxlbWVudE5hbWUgPSBwYXJlbnROYW1lID8gcGFyZW50TmFtZSArICcuJyA6ICcnXG4gICAgICBpZiAoIWVsZW1lbnRUZXh0KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZWxlbWVudCB0ZXh0IG5vdCBmb3VuZFwiKTtcbiAgICAgICAgZWxlbWVudE5hbWUgPSAnJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudE5hbWUgKz0gZWxlbWVudFRleHRcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIC5yZXBsYWNlKC9bXlxcd10rL2csICdfJylcbiAgICAgICAgICAucmVwbGFjZSgvXl8rfF8rJC9nLCAnJylcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJlY2lwZS5uYW1lID09PSAnZnJvbV9udGhfY2hpbGQnKSB7XG4gICAgICBlbGVtZW50TmFtZSA9IHBhcmVudE5hbWUgPyBwYXJlbnROYW1lICsgJy4nIDogJydcbiAgICAgIGVsZW1lbnROYW1lICs9IG50aENoaWxkLnRvU3RyaW5nKClcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudE5hbWUgPSBwYXJlbnROYW1lID8gcGFyZW50TmFtZSArICcuJyA6ICcnXG4gICAgICBlbGVtZW50TmFtZSArPSByZWNpcGUubmFtZVxuICAgIH1cbiAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnbmFtZScsIGVsZW1lbnROYW1lKVxuICAgIHBhcmVudE5hbWUgPSBlbGVtZW50TmFtZVxuICB9XG5cbiAgaWYgKHJlY2lwZS5nZW5lcmF0ZV9tZXRhZGF0YSkge1xuICAgIGNvbnN0IG1ldGFvYmogPSByZWNpcGUuZ2VuZXJhdGVfbWV0YWRhdGEoZWxlbWVudClcbiAgICBjb25zdCBtZXRhZGF0YSA9IEpTT04uc3RyaW5naWZ5KG1ldGFvYmouZGF0YSlcbiAgICBjb25zdCBtZXRhbmFtZSA9IG1ldGFvYmoubmFtZVxuXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnLCBtZXRhbmFtZSlcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtZGF0YScsIG1ldGFkYXRhKVxuICAgIC8vIGNvbnNvbGUubG9nKCdtZXRhZGF0YSBnZW5lcmF0ZWQ6ICcsIG1ldGFkYXRhLCAnIHdpdGggbmFtZTogJywgbWV0YW5hbWUpXG4gIH1cblxuICAvLyBIYW5kbGUgY2xpY2thYmxlcyBhbmQgaW5wdXRzXG4gIGlmIChyZWNpcGUuY2xpY2thYmxlKSB7XG4gICAgaWYgKCFyZWNpcGUubmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjbGlja2FibGUgZWxlbWVudCBtdXN0IGhhdmUgYSBuYW1lJylcbiAgICB9XG4gICAgLy8gaGFuZGxlIGNsaWNrX3NlbGVjdG9yXG4gICAgbGV0IGNsaWNrX2VsZW1lbnQ6IEVsZW1lbnQgfCBudWxsXG4gICAgaWYgKHJlY2lwZS5jbGlja19zZWxlY3Rvcikge1xuICAgICAgY2xpY2tfZWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihyZWNpcGUuY2xpY2tfc2VsZWN0b3IpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNsaWNrX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgfVxuICAgIGlmIChjbGlja19lbGVtZW50KSB7XG4gICAgICBjbGlja19lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnLCBlbGVtZW50TmFtZSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2NsaWNrLWVsZW1lbnQgbm90IGZvdW5kJywgZWxlbWVudCwgcmVjaXBlKVxuICAgIH1cbiAgICBpZiAoIXdpbmRvdy5jbGlja2FibGVfcmVjaXBlcykge1xuICAgICAgd2luZG93LmNsaWNrYWJsZV9yZWNpcGVzID0ge31cbiAgICB9XG4gICAgd2luZG93LmNsaWNrYWJsZV9yZWNpcGVzW2VsZW1lbnROYW1lXSA9IHJlY2lwZVxuICB9XG5cbiAgaWYgKHJlY2lwZS5mZXRjaF91cmwpIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1mZXRjaC11cmwnLCByZWNpcGUuZmV0Y2hfdXJsKVxuICB9XG5cbiAgaWYgKHRhZ05hbWUgPT09ICdpbnB1dCcpIHtcbiAgICBjb25zdCBpbnB1dFR5cGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgndHlwZScpXG4gICAgaWYgKFsndGV4dCcsICdudW1iZXInXS5pbmNsdWRlcyhpbnB1dFR5cGUpKSB7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBlbGVtZW50LnZhbHVlKVxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5wdXQtaWQnLCBlbGVtZW50TmFtZSlcbiAgICB9IGVsc2UgaWYgKGlucHV0VHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCBlbGVtZW50LmNoZWNrZWQudG9TdHJpbmcoKSlcbiAgICB9IGVsc2UgaWYgKGlucHV0VHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCBlbGVtZW50LmNoZWNrZWQudG9TdHJpbmcoKSlcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcsIGVsZW1lbnROYW1lKVxuICAgIH1cbiAgICBpZiAoIXdpbmRvdy5pbnB1dF9yZWNpcGVzKSB7XG4gICAgICB3aW5kb3cuaW5wdXRfcmVjaXBlcyA9IHt9XG4gICAgfVxuICAgIHdpbmRvdy5pbnB1dF9yZWNpcGVzW2VsZW1lbnROYW1lXSA9IHJlY2lwZVxuICB9XG4gIC8vICoqSGFuZGxlIHNlbGVjdCBlbGVtZW50cyoqXG4gIGlmICh0YWdOYW1lID09PSAnc2VsZWN0Jykge1xuICAgIC8vIFRhZyB0aGUgc2VsZWN0IGVsZW1lbnQgd2l0aCBkYXRhLXNlbGVjdC1pZFxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXNlbGVjdC1pZCcsIGVsZW1lbnROYW1lKVxuXG4gICAgY29uc3Qgc2VsZWN0SWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKVxuXG4gICAgY29uc3QgbmFtZUlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25hbWUnKVxuXG4gICAgY29uc3QgdGFnID0gZWxlbWVudC5wYXJlbnRFbGVtZW50Py5xdWVyeVNlbGVjdG9yKCdzcGFuLmEtYnV0dG9uLWRyb3Bkb3duIHNwYW4uYS1idXR0b24tdGV4dCcpXG4gICAgY29uc3QgbmV3VGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbmV3VGFnLnRleHRDb250ZW50ID0gdGFnLnRleHRDb250ZW50XG4gICAgY29uc3QgdGFnTmFtZSA9IGVsZW1lbnROYW1lICsgJy5vcGVuX2Ryb3BfZG93bl9saXN0J1xuICAgIG5ld1RhZy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0YWdOYW1lKVxuICAgIHRhZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2thYmxlLWlkJywgdGFnTmFtZSkgLy8gVGFnIGFjdHVhbCBET00gb3B0aW9uIGVsZW1lbnRcblxuICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQobmV3VGFnKVxuXG4gICAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaWRePVwiJyArIHNlbGVjdElkICsgJ1wiXScpXG4gICAgb3B0aW9ucy5mb3JFYWNoKGFzeW5jIChvcHRpb24pID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvblZhbHVlID0gb3B0aW9uLnRleHRDb250ZW50LnRyaW0oKSB8fCBvcHRpb24ucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZVxuICAgICAgY29uc3Qgb3B0aW9uTmFtZSA9IGVsZW1lbnROYW1lICsgJy4nICsgb3B0aW9uVmFsdWVcbiAgICAgIGNvbnN0IG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgICAgbmV3T3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uLnRleHRDb250ZW50XG4gICAgICBuZXdPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIG9wdGlvblZhbHVlKVxuICAgICAgbmV3T3B0aW9uLnNldEF0dHJpYnV0ZSgnbmFtZScsIG9wdGlvbk5hbWUpXG4gICAgICBuZXdPcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsIG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnKSlcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2thYmxlLWlkJywgb3B0aW9uTmFtZSkgLy8gVGFnIGFjdHVhbCBET00gb3B0aW9uIGVsZW1lbnRcbiAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQobmV3T3B0aW9uKVxuICAgIH0pXG4gIH1cbiAgLy8gQ29weSBzcGVjaWZpZWQgYXR0cmlidXRlc1xuICBjb25zdCBhdHRyc1RvQ29weSA9IFtcbiAgICAnYWx0JyxcbiAgICAndGl0bGUnLFxuICAgICd0eXBlJyxcbiAgICAndmFsdWUnLFxuICAgICdyb2xlJyxcbiAgICAnYXJpYS1sYWJlbCcsXG4gICAgJ2FyaWEtaGlkZGVuJyxcbiAgICAnYXJpYS1zZWxlY3RlZCdcbiAgXVxuICBhdHRyc1RvQ29weS5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpXG4gICAgfVxuICB9KVxuICBpZiAocmVjaXBlLmtlZXBfYXR0cikge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiYXR0cmlidXRlcyB0byBrZWVwOiBcIiwgcmVjaXBlLmtlZXBfYXR0cik7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcmVjaXBlLmtlZXBfYXR0cikge1xuICAgICAgY29uc3QgdmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpXG4gICAgICAvLyBjb25zb2xlLmxvZyhrZXksIHZhbHVlKVxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChyZWNpcGVbJ2NsYXNzJ10pIHtcbiAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCByZWNpcGVbJ2NsYXNzJ10pXG4gIH1cbiAgaWYgKHJlY2lwZVsnaWQnXSkge1xuICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIHJlY2lwZVsnaWQnXSlcbiAgfVxuXG4gIC8vIE92ZXJyaWRlIGF0dHJpYnV0ZXMgaWYgc3BlY2lmaWVkXG4gIGlmIChyZWNpcGUub3ZlcnJpZGVfYXR0cikge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHJlY2lwZS5vdmVycmlkZV9hdHRyKSB7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHJlY2lwZS5vdmVycmlkZV9hdHRyW2tleV0oZWxlbWVudCkpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJvY2VzcyBjaGlsZHJlblxuICBpZiAocmVjaXBlLmNoaWxkcmVuICYmIHJlY2lwZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgZm9yIChjb25zdCBjaGlsZFJlY2lwZSBvZiByZWNpcGUuY2hpbGRyZW4pIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gY2hpbGRSZWNpcGUuZGlyZWN0X2NoaWxkXG4gICAgICAgID8gYDpzY29wZSA+ICR7Y2hpbGRSZWNpcGUuc2VsZWN0b3J9YFxuICAgICAgICA6IGNoaWxkUmVjaXBlLnNlbGVjdG9yXG4gICAgICBsZXQgY2hpbGRFbGVtZW50c1xuICAgICAgaWYgKGNoaWxkUmVjaXBlLnVzZV9yb290KSB7XG4gICAgICAgIGNoaWxkRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICAgICAgICAvLyBjb25zb2xlLmxvZygndXNlIHJvb3QgZm9yICcsIGNoaWxkRWxlbWVudHMpXG4gICAgICB9IGVsc2UgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50OiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgbGV0IG1hdGNoZWQgPSB0cnVlXG4gICAgICAgIGlmIChjaGlsZFJlY2lwZS5tYXRjaF9pZF93aXRoX3BhcmVudCkge1xuICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gLyhbYS1mMC05LV0rLVxcZCspJC9cblxuICAgICAgICAgIGNvbnN0IG1hdGNoMSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpPy5tYXRjaChyZWdleClcbiAgICAgICAgICBjb25zdCBtYXRjaDIgPSBjaGlsZEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpPy5tYXRjaChyZWdleClcbiAgICAgICAgICBpZiAoIW1hdGNoMSB8fCAhbWF0Y2gyIHx8IG1hdGNoMVsxXSAhPT0gbWF0Y2gyWzFdKSB7XG4gICAgICAgICAgICBtYXRjaGVkID0gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGUgPSBwcm9jZXNzRWxlbWVudChcbiAgICAgICAgICAgIGNoaWxkRWxlbWVudCxcbiAgICAgICAgICAgIGNoaWxkUmVjaXBlLFxuICAgICAgICAgICAgcGFyZW50TmFtZSxcbiAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgZG9jdW1lbnQsXG4gICAgICAgICAgICB3aW5kb3dcbiAgICAgICAgICApXG4gICAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZE5vZGUpXG4gICAgICAgICAgaWYgKGNoaWxkUmVjaXBlLmluc2VydF9zcGxpdF9tYXJrZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZXJ5ID0gY2hpbGRSZWNpcGUuaW5zZXJ0X3NwbGl0X21hcmtlcl9ldmVyeSB8fCAxXG4gICAgICAgICAgICBpZiAoaW5kZXggJSBldmVyeSA9PSAwKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHNwbGl0TWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BsaXQtbWFya2VyJylcbiAgICAgICAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChzcGxpdE1hcmtlcilcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbnNlcnRpbmcgc3BsaXQgbWFya2VyIDFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjaGlsZFJlY2lwZS5pbnNlcnRfc3BsaXRfbWFya2VyKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluc2VydGluZyBzcGxpdCBtYXJrZXIgMlwiKTtcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0TWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BsaXQtbWFya2VyJylcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoc3BsaXRNYXJrZXIpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdubyBzcGxpdCBtYXJrZXInKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvLyBIYW5kbGUgZW1wdHkgbWVzc2FnZXNcbiAgaWYgKHJlY2lwZS5lbXB0eV9tZXNzYWdlICYmIG5ld0VsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgY29uc3QgZW1wdHlUZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHJlY2lwZS5lbXB0eV9tZXNzYWdlKVxuICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoZW1wdHlUZXh0Tm9kZSlcbiAgfVxuXG4gIHJldHVybiBuZXdFbGVtZW50XG59XG4iLCJpbXBvcnQgeyBzdGFydHNXaXRoIH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgZmlsdGVyX3VybCwgdXJsX2luY2x1ZGVzLCBjaGVja191c2VyX2lkX3VybCB9IGZyb20gJy4uL2NvbmZpZydcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnJvbVBvcHVwKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gIC8vIHJldHVybiBlbGVtZW50LmNsb3Nlc3QoJyNyZWFzb24tbW9kYWwnKSAhPT0gbnVsbFxuICBjb25zdCBzZWxlY3RvcnMgPSBbJyN1c2VyLWludGVyYWN0aW9uLXRyYWNrZXItYXBwJywgJy5uLW1vZGFsLWNvbnRhaW5lciddXG4gIHJldHVybiBzZWxlY3RvcnMuc29tZSgoc2VsZWN0b3IpID0+IGVsZW1lbnQuY2xvc2VzdChzZWxlY3RvcikgIT09IG51bGwpXG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlX2ljb24odXJsKSB7XG4gIGNvbnNvbGUubG9nKCd1cGRhdGVfaWNvbicsIHVybClcbiAgaWYgKCEoYXdhaXQgc2hvdWxkRXhjbHVkZSh1cmwpKSkge1xuICAgIGNvbnNvbGUubG9nKCdhY3RpdmUgaWNvbicpXG4gICAgY2hyb21lLmFjdGlvbi5zZXRJY29uKHtcbiAgICAgIHBhdGg6ICcuLi9pY29uLnBuZydcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdpbmFjdGl2ZSBpY29uJylcbiAgICBjaHJvbWUuYWN0aW9uLnNldEljb24oe1xuICAgICAgcGF0aDogJy4uL2luYWN0aXZlX2ljb24ucG5nJ1xuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQYWdlTWV0YShyb290ID0gbnVsbCwgZG9jdW1lbnQgPSBnbG9iYWxUaGlzLmRvY3VtZW50KSB7XG4gIGxldCBhbGxfZWxlbWVudF93aXRoX21ldGFfZGF0YVxuICBpZiAocm9vdCkge1xuICAgIGFsbF9lbGVtZW50X3dpdGhfbWV0YV9kYXRhID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1lbGVtZW50LW1ldGEtbmFtZV0nKVxuICB9IGVsc2Uge1xuICAgIGFsbF9lbGVtZW50X3dpdGhfbWV0YV9kYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZWxlbWVudC1tZXRhLW5hbWVdJylcbiAgfVxuXG4gIGNvbnN0IGdyb3VwZWRSZXN1bHQgPSB7fVxuXG4gIGFsbF9lbGVtZW50X3dpdGhfbWV0YV9kYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBtZXRhTmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJylcbiAgICBjb25zdCBtZXRhRGF0YSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1kYXRhJylcblxuICAgIGlmICghZ3JvdXBlZFJlc3VsdFttZXRhTmFtZV0pIHtcbiAgICAgIGdyb3VwZWRSZXN1bHRbbWV0YU5hbWVdID0gW11cbiAgICB9XG4gICAgZ3JvdXBlZFJlc3VsdFttZXRhTmFtZV0ucHVzaChKU09OLnBhcnNlKG1ldGFEYXRhKSlcbiAgfSlcblxuICByZXR1cm4gZ3JvdXBlZFJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0KCkge1xuICAvLyBTZWxlY3QgYWxsIHBvdGVudGlhbCBjbGlja2FibGUgZWxlbWVudHNcbiAgY29uc3QgZG9jdW1lbnRDb3B5ID0gZG9jdW1lbnQuY2xvbmVOb2RlKHRydWUpIGFzIERvY3VtZW50XG4gIGNvbnN0IGFsbEVsZW1lbnRzID0gZG9jdW1lbnRDb3B5LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJ2EsIGJ1dHRvbiwgW29uY2xpY2tdLCBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdJ1xuICApXG5cbiAgLy8gQ2hlY2sgaWYgZWFjaCBlbGVtZW50IGlzIGluIHRoZSB2aWV3cG9ydCBhbmQgYWRkIG1hcmtlclxuICBhbGxFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBpZiAoXG4gICAgICByZWN0LnRvcCA+PSAwICYmXG4gICAgICByZWN0LmxlZnQgPj0gMCAmJlxuICAgICAgcmVjdC5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAmJlxuICAgICAgcmVjdC5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKVxuICAgICkge1xuICAgICAgLy8gQWRkIG1hcmtlciBhdHRyaWJ1dGUgdG8gdGhlIGVsZW1lbnRcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd2aXNpYmxlLWNsaWNrYWJsZS1lbGVtZW50LW1hcmtlcicsICd0cnVlJylcbiAgICB9XG4gIH0pXG4gIHJldHVybiBkb2N1bWVudENvcHlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1hcmtWaWV3YWJsZUVsZW1lbnRzKCkge1xuICBNYXJrSW5wdXRTdGF0dXMoKVxuXG4gIC8vIFNlbGVjdCBhbGwgZWxlbWVudHNcbiAgY29uc3QgYWxsRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICdhLCBidXR0b24sIHNlbGVjdCwgW29uY2xpY2tdLCBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdJ1xuICApXG4gIC8vIENoZWNrIGlmIGVhY2ggZWxlbWVudCBpcyBpbiB0aGUgdmlld3BvcnQgYW5kIGFkZCBtYXJrZXJcbiAgYWxsRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgaW5WaWV3cG9ydCA9XG4gICAgICByZWN0LnRvcCA+PSAwICYmXG4gICAgICByZWN0LmxlZnQgPj0gMCAmJlxuICAgICAgcmVjdC5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAmJlxuICAgICAgcmVjdC5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKVxuICAgIC8vIEFkZCBtYXJrZXIgYXR0cmlidXRlIHRvIHRoZSBlbGVtZW50XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvY2Vzc2VkLXZpc2libGUtY2xpY2thYmxlLW1hcmtlcicsIGluVmlld3BvcnQgPyAndHJ1ZScgOiAnZmFsc2UnKVxuICB9KVxufVxuZXhwb3J0IGZ1bmN0aW9uIE1hcmtJbnB1dFN0YXR1cygpIHtcbiAgLy8gRXhjbHVkZSBoaWRkZW4gaW5wdXRzIGJ5IHVzaW5nICc6bm90KFt0eXBlPVwiaGlkZGVuXCJdKSdcbiAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQ6bm90KFt0eXBlPVwiaGlkZGVuXCJdKSwgc2VsZWN0LCB0ZXh0YXJlYScpXG4gIGlucHV0cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBlbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnRcblxuICAgIGlmIChpbnB1dC52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdkYXRhLXByb2Nlc3NlZC1pbnB1dC12YWx1ZScsIGlucHV0LnZhbHVlKVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGlucHV0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJlxuICAgICAgKGlucHV0LnR5cGUgPT09ICdjaGVja2JveCcgfHwgaW5wdXQudHlwZSA9PT0gJ3JhZGlvJylcbiAgICApIHtcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9jZXNzZWQtaW5wdXQtY2hlY2tlZCcsIFN0cmluZyhpbnB1dC5jaGVja2VkKSlcbiAgICB9XG5cbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRUZXh0cyA9IEFycmF5LmZyb20oaW5wdXQuc2VsZWN0ZWRPcHRpb25zKVxuICAgICAgICAubWFwKChvcHQpID0+IG9wdC50ZXh0Q29udGVudD8udHJpbSgpID8/ICcnKVxuICAgICAgICAuam9pbignfHwnKVxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdkYXRhLXByb2Nlc3NlZC1pbnB1dC1zZWxlY3RlZC10ZXh0Jywgc2VsZWN0ZWRUZXh0cylcbiAgICB9XG4gIH0pXG59XG4vLyBBZGQgY2xlYW51cCBmdW5jdGlvbiB0byByZW1vdmUgbWFya2VycyB3aGVuIG5lZWRlZFxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsaWNrYWJsZU1hcmtlcnMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1t2aXNpYmxlLWNsaWNrYWJsZS1lbGVtZW50LW1hcmtlcl0nKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3Zpc2libGUtY2xpY2thYmxlLWVsZW1lbnQtbWFya2VyJylcbiAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNob3VsZEV4Y2x1ZGUodXJsOiBzdHJpbmcsIGlnbm9yZVVzZXJJZDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gIGlmICghaWdub3JlVXNlcklkKSB7XG4gICAgaWYgKGNocm9tZS5zdG9yYWdlKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoJ3VzZXJJZCcpXG4gICAgICBpZiAoIXJlc3VsdC51c2VySWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ25vIHVzZXIgaWQnKVxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyB1c2VyIGlkLCB3ZSBzaG91bGQgbm90IGJlIHJlY29yZGluZyBhbnl0aGluZ1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB1c2VySWQgPSBhd2FpdCBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZU1lc3NhZ2UgPSAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5kYXRhLnR5cGUgPT09ICdHRVRfVVNFUl9JRF9SRVNQT05TRScpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgICAgIHJlc29sdmUoZXZlbnQuZGF0YS51c2VySWQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ0dFVF9VU0VSX0lEJyB9LCAnKicpXG4gICAgICB9KVxuICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gdXNlciBpZCwgd2Ugc2hvdWxkIG5vdCBiZSByZWNvcmRpbmcgYW55dGhpbmdcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiAoXG4gICAgIXVybF9pbmNsdWRlcy5zb21lKChpbmNsdWRlVXJsKSA9PiB1cmwuaW5jbHVkZXMoaW5jbHVkZVVybCkpIHx8XG4gICAgZmlsdGVyX3VybC5zb21lKChleGNsdWRlVXJsKSA9PiB1cmwuaW5jbHVkZXMoZXhjbHVkZVVybCkpXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlSHRtbFNuYXBzaG90SWQodGltZXN0YW1wOiBzdHJpbmcsIHV1aWQ6IHN0cmluZykge1xuICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZlxuICByZXR1cm4gYGh0bWxfJHtoYXNoQ29kZSh1cmwpfV8ke3RpbWVzdGFtcH1fJHt1dWlkfWBcbn1cbmV4cG9ydCBmdW5jdGlvbiBoYXNoQ29kZShzdHI6IHN0cmluZykge1xuICBsZXQgaGFzaCA9IDBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBoYXNoID0gKGhhc2ggPDwgNSkgLSBoYXNoICsgc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoYXNoIHw9IDBcbiAgfVxuICBjb25zb2xlLmxvZygnSGFzaCB2YWx1ZSBiZWZvcmUgcmV0dXJuOicsIGhhc2gpXG4gIHJldHVybiBoYXNoLnRvU3RyaW5nKClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrX3VzZXJfaWQodXNlcl9pZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjaGVja191c2VyX2lkX3VybH0/dXNlcl9pZD0ke3VzZXJfaWR9YCwge1xuICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgIH0pXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICByZXR1cm4gJ3N1Y2Nlc3MnXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhIHx8ICdVbmtub3duIGVycm9yJ1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICR7KGVycm9yIGFzIEVycm9yKS5tZXNzYWdlfWApXG4gIH1cbiAgcmV0dXJuICdVbmtub3duIGVycm9yJ1xufVxuXG5pbXBvcnQgeyBjYXJ0LCByZWNpcGVzIH0gZnJvbSAnLi4vcmVjaXBlX25ldydcbmltcG9ydCB7IHByb2Nlc3NFbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50LXByb2Nlc3NvcidcbmZ1bmN0aW9uIHNlbGVjdFJlY2lwZSh1cmwgPSBudWxsLCBkb2N1bWVudCA9IGdsb2JhbFRoaXMuZG9jdW1lbnQsIHdpbmRvdyA9IGdsb2JhbFRoaXMud2luZG93KSB7XG4gIGxldCBwYXJzZWRVcmxcbiAgaWYgKHVybCkge1xuICAgIHBhcnNlZFVybCA9IG5ldyBVUkwodXJsKVxuICB9IGVsc2Uge1xuICAgIHBhcnNlZFVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpXG4gIH1cbiAgbGV0IHBhdGggPSBwYXJzZWRVcmwucGF0aG5hbWVcbiAgcGF0aCA9IHBhdGggIT09ICcvJyA/IHBhdGgucmVwbGFjZSgvXFwvKy9nLCAnLycpLnJlcGxhY2UoL1xcLyQvLCAnJykgOiBwYXRoXG5cbiAgZm9yIChjb25zdCByZWNpcGUgb2YgcmVjaXBlcykge1xuICAgIGNvbnN0IG1hdGNoTWV0aG9kID0gcmVjaXBlLm1hdGNoX21ldGhvZCB8fCAndGV4dCdcbiAgICBpZiAobWF0Y2hNZXRob2QgPT09ICd0ZXh0Jykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gRXhlY3V0ZSBzY3JpcHQgaW4gdGFiIHRvIGNoZWNrIGZvciBtYXRjaGluZyBlbGVtZW50XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlY2lwZS5tYXRjaClcblxuICAgICAgICBjb25zdCBoYXNNYXRjaCA9XG4gICAgICAgICAgZWxlbWVudCAmJlxuICAgICAgICAgICghcmVjaXBlLm1hdGNoX3RleHQgfHxcbiAgICAgICAgICAgIChlbGVtZW50LnRleHRDb250ZW50Py50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHJlY2lwZS5tYXRjaF90ZXh0LnRvTG93ZXJDYXNlKCkpID8/IGZhbHNlKSlcblxuICAgICAgICBpZiAoaGFzTWF0Y2gpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnbWF0Y2hlZCB3aXRoIHJlY2lwZSAnLCByZWNpcGUubWF0Y2gpXG4gICAgICAgICAgcmV0dXJuIHJlY2lwZVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyB0ZXh0IG1hdGNoOicsIGVycm9yKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobWF0Y2hNZXRob2QgPT09ICd1cmwnKSB7XG4gICAgICBjb25zdCBtYXRjaCA9XG4gICAgICAgIHJlY2lwZS5tYXRjaCA9PSAnLydcbiAgICAgICAgICA/IHJlY2lwZS5tYXRjaFxuICAgICAgICAgIDogcmVjaXBlLm1hdGNoLnJlcGxhY2UoL1xcKi9nLCAnJykucmVwbGFjZSgvXFwvKy9nLCAnLycpLnJlcGxhY2UoL1xcLyQvLCAnJylcbiAgICAgIGNvbnN0IHdpbGRjYXJkX21hdGNoID0gJ14nICsgcmVjaXBlLm1hdGNoLnJlcGxhY2UoL1xcKi9nLCAnW14vXSonKSArICckJ1xuICAgICAgY29uc3Qgd2lsZGNhcmRfbWF0Y2hfd2l0aF9yZWYgPSAnXicgKyByZWNpcGUubWF0Y2gucmVwbGFjZSgvXFwqL2csICdbXi9dKycpICsgJygvcmVmPS4rKSQnXG4gICAgICBpZiAobWF0Y2ggPT09IHBhdGgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21hdGNoZWQgd2l0aCByZWNpcGUgJywgcmVjaXBlLm1hdGNoKVxuICAgICAgICByZXR1cm4gcmVjaXBlXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICByZWNpcGUubWF0Y2hfd2l0aF9yZWYgJiZcbiAgICAgICAgKHBhdGguc3RhcnRzV2l0aChtYXRjaCArICcvcmVmPScpIHx8IHBhdGguc3RhcnRzV2l0aChtYXRjaCArICdyZWY9JykpXG4gICAgICApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21hdGNoZWQgd2l0aCByZWNpcGUgJywgcmVjaXBlLm1hdGNoKVxuICAgICAgICByZXR1cm4gcmVjaXBlXG4gICAgICB9IGVsc2UgaWYgKHJlY2lwZS5tYXRjaF93aXRoX3dpbGRjYXJkKSB7XG4gICAgICAgIGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAod2lsZGNhcmRfbWF0Y2gpXG4gICAgICAgIGNvbnN0IHJlZ0V4cFdpdGhSZWYgPSBuZXcgUmVnRXhwKHdpbGRjYXJkX21hdGNoX3dpdGhfcmVmKVxuICAgICAgICBpZiAocmVnRXhwLnRlc3QocGF0aCkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnbWF0Y2hlZCB3aXRoIHJlY2lwZSAnLCByZWNpcGUubWF0Y2gpXG4gICAgICAgICAgcmV0dXJuIHJlY2lwZVxuICAgICAgICB9IGVsc2UgaWYgKHJlY2lwZS5tYXRjaF93aXRoX3JlZiAmJiByZWdFeHBXaXRoUmVmLnRlc3QocGF0aCkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnbWF0Y2hlZCB3aXRoIHJlY2lwZSAnLCByZWNpcGUubWF0Y2gpXG4gICAgICAgICAgcmV0dXJuIHJlY2lwZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKGBObyBtYXRjaGluZyByZWNpcGUgZm91bmQgZm9yIHBhdGg6ICR7cGF0aH1gKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc1JlY2lwZShcbiAgcm9vdCA9IG51bGwsXG4gIHVybCA9IG51bGwsXG4gIGRvY3VtZW50ID0gZ2xvYmFsVGhpcy5kb2N1bWVudCxcbiAgd2luZG93ID0gZ2xvYmFsVGhpcy53aW5kb3dcbikge1xuICBjb25zb2xlLmxvZygnc3RhcnQgcHJvY2VzcyByZWNpcGUnKVxuICB0cnkge1xuICAgIGNvbnN0IHJlY2lwZSA9IHNlbGVjdFJlY2lwZSh1cmwsIGRvY3VtZW50LCB3aW5kb3cpXG4gICAgbGV0IHJvb3RFbGVtZW50XG4gICAgaWYgKHJvb3QpIHtcbiAgICAgIHJvb3RFbGVtZW50ID0gcm9vdFxuICAgIH0gZWxzZSB7XG4gICAgICByb290RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVjaXBlLnNlbGVjdG9yKVxuICAgIH1cbiAgICBpZiAocm9vdEVsZW1lbnQpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRvY3VtZW50KVxuICAgICAgY29uc3QgbmV3Um9vdCA9IHByb2Nlc3NFbGVtZW50KHJvb3RFbGVtZW50LCByZWNpcGUsICcnLCAwLCBkb2N1bWVudCwgd2luZG93KVxuICAgICAgY29uc3Qgc2ltcGxpZmllZEhUTUwgPSBuZXdSb290Lm91dGVySFRNTFxuICAgICAgcmV0dXJuIHNpbXBsaWZpZWRIVE1MXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHByb2Nlc3NpbmcgcmVjaXBlOicsIGVycm9yKVxuICB9XG59XG5cbi8vIFJlcGxhY2UgdGhlIHNpbXBsZSBxdWVzdGlvbiB3aXRoIGEgbW9yZSBkZXRhaWxlZCBvbmUgYmFzZWQgb24gZXZlbnQgdHlwZVxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1c3RvbVF1ZXN0aW9uKFxuICBldmVudFR5cGU6IHN0cmluZyxcbiAgZGF0YTogYW55XG4pOiB7IHF1ZXN0aW9uOiBzdHJpbmc7IHBsYWNlaG9sZGVyOiBzdHJpbmcgfSB7XG4gIGxldCBxdWVzdGlvbiA9ICcnXG4gIGxldCBwbGFjZWhvbGRlciA9ICdFbnRlciB5b3VyIHJlYXNvbiBoZXJlLi4uJ1xuICBzd2l0Y2ggKGV2ZW50VHlwZSkge1xuICAgIGNhc2UgJ2NsaWNrX2EnOlxuICAgIGNhc2UgJ2NsaWNrX2InOlxuICAgIGNhc2UgJ2NsaWNrX2MnOlxuICAgICAgLy8gQ2hlY2sgaWYgaXQncyBhIHNwZWNpZmljIHR5cGUgb2YgY2xpY2tcbiAgICAgIGlmIChcbiAgICAgICAgZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddID09PSAnYnV5Ym94LmRlbGl2ZXJ5LnN1YnNjcmliZV9zYXZlXy5wdXJjaGFzZV9mb3JtLnNldF91cF9ub3cnIHx8XG4gICAgICAgIGRhdGE/LnRhcmdldD8uaW5uZXJUZXh0ID09PSAnU2V0IFVwIE5vdydcbiAgICAgICkge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1lvdSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPmNsaWNrZWQ8L3NwYW4+IG9uIHRoZSBzZXQgdXAgbm93IGJ1dHRvbi4gV2hhdCBtYWRlIHlvdSBkZWNpZGUgdG8gc3Vic2NyaWJlIHRvIHRoaXMgcHJvZHVjdD8nXG4gICAgICAgIHBsYWNlaG9sZGVyID1cbiAgICAgICAgICAnSSBzdWJzY3JpYmVkIHRvIHRoaXMgcHJvZHVjdCBiZWNhdXNlIChlLmcuIHByb2R1Y3QgZmVhdHVyZS9hZHZhbnRhZ2Ugb3ZlciBvbmUtdGltZSBwdXJjaGFzZSkuLi4nXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10gPT09ICdidXlib3guZGVsaXZlcnkub25lX3RpbWVfcHVyY2hhc2VfLnB1cmNoYXNlX2Zvcm0uYnV5X25vdycgfHxcbiAgICAgICAgZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddID09PSAnYnV5Ym94LmRlbGl2ZXJ5LnB1cmNoYXNlX2Zvcm0uYnV5JyB8fFxuICAgICAgICBkYXRhLnRhcmdldC5pZCA9PT0gJ2J1eS1ub3ctYnV0dG9uJ1xuICAgICAgKSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnWW91IDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uXCI+Y2xpY2tlZDwvc3Bhbj4gb24gdGhlIGJ1eSBub3cgYnV0dG9uLiBXaGF0IGRvIHlvdSBsaWtlIGFib3V0IHRoaXMgcGFydGljdWxhciBwcm9kdWN0PydcbiAgICAgICAgcGxhY2Vob2xkZXIgPSAnSSBhbSBidXlpbmcgdGhpcyBwcm9kdWN0IGJlY2F1c2UuLi4nXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LmVuZHNXaXRoKCdhZGRfdG9fY2FydCcpIHx8XG4gICAgICAgIGRhdGEudGFyZ2V0LmlkID09PSAnYWRkLXRvLWNhcnQtYnV0dG9uJyB8fFxuICAgICAgICBkYXRhLnRhcmdldC5uYW1lID09PSAnc3VibWl0LmFkZFRvQ2FydCcgfHxcbiAgICAgICAgZGF0YS50YXJnZXQuaW5uZXJUZXh0ID09PSAnQWRkIHRvIENhcnQnXG4gICAgICApIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdZb3UgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb25cIj5jbGlja2VkPC9zcGFuPiBvbiB0aGUgYWRkIHRvIGNhcnQgYnV0dG9uLiBXaGF0IG1hZGUgeW91IGRlY2lkZSB0byBhZGQgdGhpcyBpdGVtIHRvIHlvdXIgY2FydD8nXG4gICAgICAgIHBsYWNlaG9sZGVyID1cbiAgICAgICAgICAnSSBhZGRlZCB0aGlzIGl0ZW0gdG8gbXkgY2FydCBiZWNhdXNlIChlLmcuIHdhbnQgdG8gYnV5L2NvbXBhcmUvc2F2ZSBmb3IgZnV0dXJlKS4uLidcbiAgICAgIH0gZWxzZSBpZiAoZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddID09PSAnbmF2X2Jhci5zZWFyY2hfYnV0dG9uJykge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1lvdSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPmNsaWNrZWQ8L3NwYW4+IG9uIHRoZSBzZWFyY2ggYnV0dG9uLiBXaHkvaG93IGRpZCB5b3UgZGVjaWRlIHRvIG1ha2UgdGhpcyBzZWFyY2g/J1xuICAgICAgICBwbGFjZWhvbGRlciA9XG4gICAgICAgICAgJ0kgZGVjaWRlZCB0byBzZWFyY2ggdGhpcyBiZWNhdXNlIChlLmcuIGFkanVzdGluZyBwcmV2aW91cyBzZWFyY2gvbG9va2luZyBmb3Igc29tZXRoaW5nKSdcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uc3RhcnRzV2l0aCgncmVmaW5lbWVudHMuJykgfHxcbiAgICAgICAgZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddPy5zdGFydHNXaXRoKCdmaWx0ZXJzLicpXG4gICAgICApIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdZb3UgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb25cIj5jbGlja2VkPC9zcGFuPiBvbiB0aGlzIGZpbHRlci4gV2h5IGRpZCB5b3UgdXNlIHRoaXMgZmlsdGVyPydcbiAgICAgICAgcGxhY2Vob2xkZXIgPSAnSSB1c2VkIHRoaXMgZmlsdGVyIGJlY2F1c2UgKGUuZy4gcHJpY2UvcHJvZHVjdCBmZWF0dXJlcykuLi4nXG4gICAgICB9IGVsc2UgaWYgKGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uc3RhcnRzV2l0aCgncHJvZHVjdF9vcHRpb25zLicpKSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnWW91IDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uXCI+Y2xpY2tlZDwvc3Bhbj4gb24gdGhpcyBwcm9kdWN0IG9wdGlvbi4gV2h5IGRpZCB5b3UgY2xpY2sgdGhpcyBwcm9kdWN0IG9wdGlvbj8nXG4gICAgICAgIHBsYWNlaG9sZGVyID0gJ0kgY2xpY2tlZCB0aGlzIHByb2R1Y3Qgb3B0aW9uIGJlY2F1c2UuLi4nXG4gICAgICB9IGVsc2UgaWYgKGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uZW5kc1dpdGgoJ2NoZWNrX291dCcpKSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnWW91IDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uXCI+Y2xpY2tlZDwvc3Bhbj4gb24gdGhlIGNoZWNrb3V0IGJ1dHRvbi4gV2hhdCBtYWRlIHlvdSBkZWNpZGUgdG8gY2hlY2tvdXQ/J1xuICAgICAgICBwbGFjZWhvbGRlciA9ICdJIGRlY2lkZWQgdG8gY2hlY2tvdXQgYmVjYXVzZS4uLidcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uc3RhcnRzV2l0aCgnc2VhcmNoX3Jlc3VsdHMuJykgfHxcbiAgICAgICAgZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddPy5zdGFydHNXaXRoKCdwcm9kdWN0X2xpc3QuJykgfHxcbiAgICAgICAgKGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uc3RhcnRzV2l0aCgnYWN0aXZlX2l0ZW1fbGlzdC4nKSAmJlxuICAgICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uZW5kc1dpdGgoJy5wcm9kdWN0X2RldGFpbCcpKSB8fFxuICAgICAgICBkYXRhLnRhcmdldC5jbGFzc05hbWU/LmluY2x1ZGVzKCdzYy1wcm9kdWN0LWxpbmsnKVxuICAgICAgKSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnWW91IDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uXCI+Y2xpY2tlZDwvc3Bhbj4gb24gdGhpcyBwcm9kdWN0LiBXaHkgZGlkIHlvdSBjbGljayBvbiB0aGlzIHByb2R1Y3Q/J1xuICAgICAgICBwbGFjZWhvbGRlciA9XG4gICAgICAgICAgJ0kgY2xpY2tlZCBvbiB0aGlzIHByb2R1Y3QgYmVjYXVzZSAoZS5nLiBjYXVnaHQgbXkgYXR0ZW50aW9uL2NvbXBhcmluZyB3aXRoIG90aGVyIG9wdGlvbnMpLi4uJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdZb3UgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb25cIj5jbGlja2VkPC9zcGFuPiBvbiB0aGlzIGVsZW1lbnQuIENvdWxkIHlvdSBzaGFyZSB3aGF0IHlvdSB3ZXJlIHRyeWluZyB0byBkbyBvciBmaW5kPydcbiAgICAgICAgcGxhY2Vob2xkZXIgPSAnRW50ZXIgeW91ciByZWFzb24gaGVyZS4uLidcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnc2Nyb2xsJzpcbiAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgJ1lvdSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPnNjcm9sbGVkPC9zcGFuPiBvbiB0aGlzIHBhZ2UuIFdoYXQgYXJlIHlvdSBsb29raW5nIGZvcj8nXG4gICAgICBwbGFjZWhvbGRlciA9ICdJIGFtIGxvb2tpbmcgZm9yIChlLmcuIHNwZWNpZmljIHByb2R1Y3RzL3Jldmlld3MvaW5mb3JtYXRpb24pLi4uJ1xuXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgJ1lvdSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPnR5cGVkPC9zcGFuPiBpbiB0aGlzIGlucHV0IGZpZWxkLiBXaGF0IGFyZSB5b3Ugc2VhcmNoaW5nIGZvcj8nXG4gICAgICBwbGFjZWhvbGRlciA9ICdJIHdhbnQgdG8gZmluZCAuLi4nXG4gICAgICBicmVha1xuICAgIGNhc2UgJ25hdmlnYXRpb24nOlxuICAgICAgaWYgKGRhdGEubmF2aWdhdGlvblR5cGUgPT09ICdiYWNrJykge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1doeSBkaWQgeW91IGRlY2lkZSB0byA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPmdvIGJhY2s8L3NwYW4+IHRvIHRoZSBwcmV2aW91cyBwYWdlPydcbiAgICAgICAgcGxhY2Vob2xkZXIgPSAnSSB3ZW50IGJhY2sgdG8gdGhlIHByZXZpb3VzIHBhZ2UgYmVjYXVzZS4uLidcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5uYXZpZ2F0aW9uVHlwZSA9PT0gJ2ZvcndhcmQnKSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnV2h5IGRpZCB5b3UgZGVjaWRlIHRvIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uXCI+cmV0dXJuPC9zcGFuPiB0byB0aGlzIHBhZ2U/J1xuICAgICAgICBwbGFjZWhvbGRlciA9ICdJIHJldHVybmVkIHRvIHRoaXMgcGFnZSBiZWNhdXNlLi4uJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcXVlc3Rpb24gPSBgV2hhdCBpcyB0aGUgcmVhc29uIGZvciB0aGlzIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uXCI+JHtkYXRhLm5hdmlnYXRpb25UeXBlfSBuYXZpZ2F0aW9uPC9zcGFuPj9gXG4gICAgICAgIHBsYWNlaG9sZGVyID0gJ0VudGVyIHlvdXIgcmVhc29uIGhlcmUuLi4nXG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGNhc2UgJ3RhYkFjdGl2YXRlJzpcbiAgICAgIHF1ZXN0aW9uID0gYFdoeSBkaWQgeW91IDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uXCI+c3dpdGNoIHRvIHRoaXMgdGFiPC9zcGFuPj9gXG4gICAgICBwbGFjZWhvbGRlciA9ICdJIHN3aXRjaGVkIHRvIHRoaXMgdGFiIGJlY2F1c2UuLi4nXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBxdWVzdGlvbiA9IGBXaGF0IGlzIHRoZSByZWFzb24gZm9yIHRoZSAke2V2ZW50VHlwZX0gYWN0aW9uP2BcbiAgICAgIHBsYWNlaG9sZGVyID0gJ0VudGVyIHlvdXIgcmVhc29uIGhlcmUuLi4nXG4gICAgICBicmVha1xuICB9XG4gIHJldHVybiB7IHF1ZXN0aW9uLCBwbGFjZWhvbGRlciB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkUmVhc29uKHJlYXNvbjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICghcmVhc29uIHx8IHJlYXNvbi50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlIC8vIEVtcHR5IGlucHV0XG4gIH1cbiAgaWYgKHJlYXNvbi50cmltKCkubGVuZ3RoIDwgMiB8fCByZWFzb24ubGVuZ3RoIDwgNSkge1xuICAgIHJldHVybiBmYWxzZSAvLyBUb28gc2hvcnQgdG8gYmUgbWVhbmluZ2Z1bCwgYXQgbGVhc3QgNSBjaGFyYWN0ZXJzIGFuZCAyIHdvcmRzXG4gIH1cbiAgLy8gQ2hlY2sgZm9yIHJlcGV0aXRpdmUgb3IgbWVhbmluZ2xlc3MgaW5wdXQgKGUuZy4sIFwiYWFhXCIsXCIhISFcIilcbiAgY29uc3QgbWVhbmluZ2xlc3NQYXR0ZXJucyA9IFsvXiguKVxcMXszLH0kLywgL15bXmEtekEtWjAtOV0rJC9dXG4gIGZvciAoY29uc3QgcGF0dGVybiBvZiBtZWFuaW5nbGVzc1BhdHRlcm5zKSB7XG4gICAgaWYgKHBhdHRlcm4udGVzdChyZWFzb24udG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICcnKSkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuIiwiLy8gTGljZW5zZTogTUlUXG4vLyBBdXRob3I6IEFudG9uIE1lZHZlZGV2IDxhbnRvbkBtZWR2LmlvPlxuLy8gU291cmNlOiBodHRwczovL2dpdGh1Yi5jb20vYW50b25tZWR2L2ZpbmRlclxuY29uc3QgYWNjZXB0ZWRBdHRyTmFtZXMgPSBuZXcgU2V0KFsncm9sZScsICduYW1lJywgJ2FyaWEtbGFiZWwnLCAncmVsJywgJ2hyZWYnXSk7XG4vKiogQ2hlY2sgaWYgYXR0cmlidXRlIG5hbWUgYW5kIHZhbHVlIGFyZSB3b3JkLWxpa2UuICovXG5leHBvcnQgZnVuY3Rpb24gYXR0cihuYW1lLCB2YWx1ZSkge1xuICAgIGxldCBuYW1lSXNPayA9IGFjY2VwdGVkQXR0ck5hbWVzLmhhcyhuYW1lKTtcbiAgICBuYW1lSXNPayB8fD0gbmFtZS5zdGFydHNXaXRoKCdkYXRhLScpICYmIHdvcmRMaWtlKG5hbWUpO1xuICAgIGxldCB2YWx1ZUlzT2sgPSB3b3JkTGlrZSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoIDwgMTAwO1xuICAgIHZhbHVlSXNPayB8fD0gdmFsdWUuc3RhcnRzV2l0aCgnIycpICYmIHdvcmRMaWtlKHZhbHVlLnNsaWNlKDEpKTtcbiAgICByZXR1cm4gbmFtZUlzT2sgJiYgdmFsdWVJc09rO1xufVxuLyoqIENoZWNrIGlmIGlkIG5hbWUgaXMgd29yZC1saWtlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkTmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIHdvcmRMaWtlKG5hbWUpO1xufVxuLyoqIENoZWNrIGlmIGNsYXNzIG5hbWUgaXMgd29yZC1saWtlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzTmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIHdvcmRMaWtlKG5hbWUpO1xufVxuLyoqIENoZWNrIGlmIHRhZyBuYW1lIGlzIHdvcmQtbGlrZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0YWdOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbi8qKiBGaW5kcyB1bmlxdWUgQ1NTIHNlbGVjdG9ycyBmb3IgdGhlIGdpdmVuIGVsZW1lbnQuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZGVyKGlucHV0LCBvcHRpb25zKSB7XG4gICAgaWYgKGlucHV0Lm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IGdlbmVyYXRlIENTUyBzZWxlY3RvciBmb3Igbm9uLWVsZW1lbnQgbm9kZSB0eXBlLmApO1xuICAgIH1cbiAgICBpZiAoaW5wdXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaHRtbCcpIHtcbiAgICAgICAgcmV0dXJuICdodG1sJztcbiAgICB9XG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgIHJvb3Q6IGRvY3VtZW50LmJvZHksXG4gICAgICAgIGlkTmFtZTogaWROYW1lLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgdGFnTmFtZTogdGFnTmFtZSxcbiAgICAgICAgYXR0cjogYXR0cixcbiAgICAgICAgdGltZW91dE1zOiAxMDAwLFxuICAgICAgICBzZWVkTWluTGVuZ3RoOiAzLFxuICAgICAgICBvcHRpbWl6ZWRNaW5MZW5ndGg6IDIsXG4gICAgICAgIG1heE51bWJlck9mUGF0aENoZWNrczogSW5maW5pdHksXG4gICAgfTtcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGNvbmZpZyA9IHsgLi4uZGVmYXVsdHMsIC4uLm9wdGlvbnMgfTtcbiAgICBjb25zdCByb290RG9jdW1lbnQgPSBmaW5kUm9vdERvY3VtZW50KGNvbmZpZy5yb290LCBkZWZhdWx0cyk7XG4gICAgbGV0IGZvdW5kUGF0aDtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGZvciAoY29uc3QgY2FuZGlkYXRlIG9mIHNlYXJjaChpbnB1dCwgY29uZmlnLCByb290RG9jdW1lbnQpKSB7XG4gICAgICAgIGNvbnN0IGVsYXBzZWRUaW1lTXMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0VGltZS5nZXRUaW1lKCk7XG4gICAgICAgIGlmIChlbGFwc2VkVGltZU1zID4gY29uZmlnLnRpbWVvdXRNcyB8fFxuICAgICAgICAgICAgY291bnQgPj0gY29uZmlnLm1heE51bWJlck9mUGF0aENoZWNrcykge1xuICAgICAgICAgICAgY29uc3QgZlBhdGggPSBmYWxsYmFjayhpbnB1dCwgcm9vdERvY3VtZW50KTtcbiAgICAgICAgICAgIGlmICghZlBhdGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRpbWVvdXQ6IENhbid0IGZpbmQgYSB1bmlxdWUgc2VsZWN0b3IgYWZ0ZXIgJHtjb25maWcudGltZW91dE1zfW1zYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0b3IoZlBhdGgpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIGlmICh1bmlxdWUoY2FuZGlkYXRlLCByb290RG9jdW1lbnQpKSB7XG4gICAgICAgICAgICBmb3VuZFBhdGggPSBjYW5kaWRhdGU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWZvdW5kUGF0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFNlbGVjdG9yIHdhcyBub3QgZm91bmQuYCk7XG4gICAgfVxuICAgIGNvbnN0IG9wdGltaXplZCA9IFtcbiAgICAgICAgLi4ub3B0aW1pemUoZm91bmRQYXRoLCBpbnB1dCwgY29uZmlnLCByb290RG9jdW1lbnQsIHN0YXJ0VGltZSksXG4gICAgXTtcbiAgICBvcHRpbWl6ZWQuc29ydChieVBlbmFsdHkpO1xuICAgIGlmIChvcHRpbWl6ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gc2VsZWN0b3Iob3B0aW1pemVkWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdG9yKGZvdW5kUGF0aCk7XG59XG5mdW5jdGlvbiogc2VhcmNoKGlucHV0LCBjb25maWcsIHJvb3REb2N1bWVudCkge1xuICAgIGNvbnN0IHN0YWNrID0gW107XG4gICAgbGV0IHBhdGhzID0gW107XG4gICAgbGV0IGN1cnJlbnQgPSBpbnB1dDtcbiAgICBsZXQgaSA9IDA7XG4gICAgd2hpbGUgKGN1cnJlbnQgJiYgY3VycmVudCAhPT0gcm9vdERvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IGxldmVsID0gdGllKGN1cnJlbnQsIGNvbmZpZyk7XG4gICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBsZXZlbCkge1xuICAgICAgICAgICAgbm9kZS5sZXZlbCA9IGk7XG4gICAgICAgIH1cbiAgICAgICAgc3RhY2sucHVzaChsZXZlbCk7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGkrKztcbiAgICAgICAgcGF0aHMucHVzaCguLi5jb21iaW5hdGlvbnMoc3RhY2spKTtcbiAgICAgICAgaWYgKGkgPj0gY29uZmlnLnNlZWRNaW5MZW5ndGgpIHtcbiAgICAgICAgICAgIHBhdGhzLnNvcnQoYnlQZW5hbHR5KTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2FuZGlkYXRlIG9mIHBhdGhzKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgY2FuZGlkYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGF0aHMgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXRocy5zb3J0KGJ5UGVuYWx0eSk7XG4gICAgZm9yIChjb25zdCBjYW5kaWRhdGUgb2YgcGF0aHMpIHtcbiAgICAgICAgeWllbGQgY2FuZGlkYXRlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHdvcmRMaWtlKG5hbWUpIHtcbiAgICBpZiAoL15bYS16XFwtXXszLH0kL2kudGVzdChuYW1lKSkge1xuICAgICAgICBjb25zdCB3b3JkcyA9IG5hbWUuc3BsaXQoLy18W0EtWl0vKTtcbiAgICAgICAgZm9yIChjb25zdCB3b3JkIG9mIHdvcmRzKSB7XG4gICAgICAgICAgICBpZiAod29yZC5sZW5ndGggPD0gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgvW15hZWlvdV17NCx9L2kudGVzdCh3b3JkKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gdGllKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIGNvbnN0IGxldmVsID0gW107XG4gICAgY29uc3QgZWxlbWVudElkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgaWYgKGVsZW1lbnRJZCAmJiBjb25maWcuaWROYW1lKGVsZW1lbnRJZCkpIHtcbiAgICAgICAgbGV2ZWwucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiAnIycgKyBDU1MuZXNjYXBlKGVsZW1lbnRJZCksXG4gICAgICAgICAgICBwZW5hbHR5OiAwLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNsYXNzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBuYW1lID0gZWxlbWVudC5jbGFzc0xpc3RbaV07XG4gICAgICAgIGlmIChjb25maWcuY2xhc3NOYW1lKG5hbWUpKSB7XG4gICAgICAgICAgICBsZXZlbC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnLicgKyBDU1MuZXNjYXBlKG5hbWUpLFxuICAgICAgICAgICAgICAgIHBlbmFsdHk6IDEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBhdHRyID0gZWxlbWVudC5hdHRyaWJ1dGVzW2ldO1xuICAgICAgICBpZiAoY29uZmlnLmF0dHIoYXR0ci5uYW1lLCBhdHRyLnZhbHVlKSkge1xuICAgICAgICAgICAgbGV2ZWwucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogYFske0NTUy5lc2NhcGUoYXR0ci5uYW1lKX09XCIke0NTUy5lc2NhcGUoYXR0ci52YWx1ZSl9XCJdYCxcbiAgICAgICAgICAgICAgICBwZW5hbHR5OiAyLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgdGFnTmFtZSA9IGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChjb25maWcudGFnTmFtZSh0YWdOYW1lKSkge1xuICAgICAgICBsZXZlbC5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IHRhZ05hbWUsXG4gICAgICAgICAgICBwZW5hbHR5OiA1LFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBpbmRleE9mKGVsZW1lbnQsIHRhZ05hbWUpO1xuICAgICAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV2ZWwucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbnRoT2ZUeXBlKHRhZ05hbWUsIGluZGV4KSxcbiAgICAgICAgICAgICAgICBwZW5hbHR5OiAxMCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG50aCA9IGluZGV4T2YoZWxlbWVudCk7XG4gICAgaWYgKG50aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxldmVsLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogbnRoQ2hpbGQodGFnTmFtZSwgbnRoKSxcbiAgICAgICAgICAgIHBlbmFsdHk6IDUwLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxldmVsO1xufVxuZnVuY3Rpb24gc2VsZWN0b3IocGF0aCkge1xuICAgIGxldCBub2RlID0gcGF0aFswXTtcbiAgICBsZXQgcXVlcnkgPSBub2RlLm5hbWU7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxldmVsID0gcGF0aFtpXS5sZXZlbCB8fCAwO1xuICAgICAgICBpZiAobm9kZS5sZXZlbCA9PT0gbGV2ZWwgLSAxKSB7XG4gICAgICAgICAgICBxdWVyeSA9IGAke3BhdGhbaV0ubmFtZX0gPiAke3F1ZXJ5fWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBxdWVyeSA9IGAke3BhdGhbaV0ubmFtZX0gJHtxdWVyeX1gO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUgPSBwYXRoW2ldO1xuICAgIH1cbiAgICByZXR1cm4gcXVlcnk7XG59XG5mdW5jdGlvbiBwZW5hbHR5KHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5tYXAoKG5vZGUpID0+IG5vZGUucGVuYWx0eSkucmVkdWNlKChhY2MsIGkpID0+IGFjYyArIGksIDApO1xufVxuZnVuY3Rpb24gYnlQZW5hbHR5KGEsIGIpIHtcbiAgICByZXR1cm4gcGVuYWx0eShhKSAtIHBlbmFsdHkoYik7XG59XG5mdW5jdGlvbiBpbmRleE9mKGlucHV0LCB0YWdOYW1lKSB7XG4gICAgY29uc3QgcGFyZW50ID0gaW5wdXQucGFyZW50Tm9kZTtcbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBsZXQgY2hpbGQgPSBwYXJlbnQuZmlyc3RDaGlsZDtcbiAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGxldCBpID0gMDtcbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSAmJlxuICAgICAgICAgICAgKHRhZ05hbWUgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgICAgIGNoaWxkLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gdGFnTmFtZSkpIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGQgPT09IGlucHV0KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgIH1cbiAgICByZXR1cm4gaTtcbn1cbmZ1bmN0aW9uIGZhbGxiYWNrKGlucHV0LCByb290RG9jdW1lbnQpIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGN1cnJlbnQgPSBpbnB1dDtcbiAgICBjb25zdCBwYXRoID0gW107XG4gICAgd2hpbGUgKGN1cnJlbnQgJiYgY3VycmVudCAhPT0gcm9vdERvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHRhZ05hbWUgPSBjdXJyZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBpbmRleE9mKGN1cnJlbnQsIHRhZ05hbWUpO1xuICAgICAgICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBudGhPZlR5cGUodGFnTmFtZSwgaW5kZXgpLFxuICAgICAgICAgICAgcGVuYWx0eTogTmFOLFxuICAgICAgICAgICAgbGV2ZWw6IGksXG4gICAgICAgIH0pO1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBpKys7XG4gICAgfVxuICAgIGlmICh1bmlxdWUocGF0aCwgcm9vdERvY3VtZW50KSkge1xuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9XG59XG5mdW5jdGlvbiBudGhDaGlsZCh0YWdOYW1lLCBpbmRleCkge1xuICAgIGlmICh0YWdOYW1lID09PSAnaHRtbCcpIHtcbiAgICAgICAgcmV0dXJuICdodG1sJztcbiAgICB9XG4gICAgcmV0dXJuIGAke3RhZ05hbWV9Om50aC1jaGlsZCgke2luZGV4fSlgO1xufVxuZnVuY3Rpb24gbnRoT2ZUeXBlKHRhZ05hbWUsIGluZGV4KSB7XG4gICAgaWYgKHRhZ05hbWUgPT09ICdodG1sJykge1xuICAgICAgICByZXR1cm4gJ2h0bWwnO1xuICAgIH1cbiAgICByZXR1cm4gYCR7dGFnTmFtZX06bnRoLW9mLXR5cGUoJHtpbmRleH0pYDtcbn1cbmZ1bmN0aW9uKiBjb21iaW5hdGlvbnMoc3RhY2ssIHBhdGggPSBbXSkge1xuICAgIGlmIChzdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IG5vZGUgb2Ygc3RhY2tbMF0pIHtcbiAgICAgICAgICAgIHlpZWxkKiBjb21iaW5hdGlvbnMoc3RhY2suc2xpY2UoMSwgc3RhY2subGVuZ3RoKSwgcGF0aC5jb25jYXQobm9kZSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB5aWVsZCBwYXRoO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGZpbmRSb290RG9jdW1lbnQocm9vdE5vZGUsIGRlZmF1bHRzKSB7XG4gICAgaWYgKHJvb3ROb2RlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX05PREUpIHtcbiAgICAgICAgcmV0dXJuIHJvb3ROb2RlO1xuICAgIH1cbiAgICBpZiAocm9vdE5vZGUgPT09IGRlZmF1bHRzLnJvb3QpIHtcbiAgICAgICAgcmV0dXJuIHJvb3ROb2RlLm93bmVyRG9jdW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiByb290Tm9kZTtcbn1cbmZ1bmN0aW9uIHVuaXF1ZShwYXRoLCByb290RG9jdW1lbnQpIHtcbiAgICBjb25zdCBjc3MgPSBzZWxlY3RvcihwYXRoKTtcbiAgICBzd2l0Y2ggKHJvb3REb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNzcykubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FuJ3Qgc2VsZWN0IGFueSBub2RlIHdpdGggdGhpcyBzZWxlY3RvcjogJHtjc3N9YCk7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uKiBvcHRpbWl6ZShwYXRoLCBpbnB1dCwgY29uZmlnLCByb290RG9jdW1lbnQsIHN0YXJ0VGltZSkge1xuICAgIGlmIChwYXRoLmxlbmd0aCA+IDIgJiYgcGF0aC5sZW5ndGggPiBjb25maWcub3B0aW1pemVkTWluTGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcGF0aC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsYXBzZWRUaW1lTXMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0VGltZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBpZiAoZWxhcHNlZFRpbWVNcyA+IGNvbmZpZy50aW1lb3V0TXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXdQYXRoID0gWy4uLnBhdGhdO1xuICAgICAgICAgICAgbmV3UGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBpZiAodW5pcXVlKG5ld1BhdGgsIHJvb3REb2N1bWVudCkgJiZcbiAgICAgICAgICAgICAgICByb290RG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcihuZXdQYXRoKSkgPT09IGlucHV0KSB7XG4gICAgICAgICAgICAgICAgeWllbGQgbmV3UGF0aDtcbiAgICAgICAgICAgICAgICB5aWVsZCogb3B0aW1pemUobmV3UGF0aCwgaW5wdXQsIGNvbmZpZywgcm9vdERvY3VtZW50LCBzdGFydFRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHsgcmFuZG9tVVVJRCB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS04XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDB8ZmZmZmZmZmYtZmZmZi1mZmZmLWZmZmYtZmZmZmZmZmZmZmZmKSQvaTtcbiIsImxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICBpZiAodHlwZW9mIGNyeXB0byA9PT0gJ3VuZGVmaW5lZCcgfHwgIWNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBnZXRSYW5kb21WYWx1ZXMgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59XG4iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG5jb25zdCBieXRlVG9IZXggPSBbXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAgIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpO1xuICAgIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHV1aWQ7XG59XG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7XG4iLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgICB9XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG4gICAgcm5kc1s2XSA9IChybmRzWzZdICYgMHgwZikgfCAweDQwO1xuICAgIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcbiAgICBpZiAoYnVmKSB7XG4gICAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgICAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG4gICAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHY0O1xuIiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICAgIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xuICBmaW5kUGFnZU1ldGEsXG4gIGdldENsaWNrYWJsZUVsZW1lbnRzSW5WaWV3cG9ydCxcbiAgaXNGcm9tUG9wdXAsXG4gIHNob3VsZEV4Y2x1ZGUsXG4gIGdlbmVyYXRlSHRtbFNuYXBzaG90SWQsXG4gIHByb2Nlc3NSZWNpcGUsXG4gIE1hcmtWaWV3YWJsZUVsZW1lbnRzXG59IGZyb20gJy4vdXRpbHMvdXRpbCdcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnXG5pbXBvcnQgeyBmaW5kZXIgfSBmcm9tICdAbWVkdi9maW5kZXInXG4vLyBleHRlbmQgd2luZG93XG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIG1vbmtleVBhdGNoZWQ6IGJvb2xlYW5cbiAgICBzaG91bGRFeGNsdWRlOiBib29sZWFuXG4gIH1cbn1cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIE1vdXNlRXZlbnQge1xuICAgIGp1c3RfZm9yX2RlZmF1bHQ6IGJvb2xlYW5cbiAgICBibG9ja19zaWduYWw6IEFib3J0Q29udHJvbGxlclxuICAgIGZpbmlzaF9zaWduYWxzOiBBYm9ydENvbnRyb2xsZXJbXVxuICAgIG15X2RlZmF1bHRfcHJldmVudGVkOiBib29sZWFuXG4gIH1cbn1cblxuY29uc3Qgd29yayA9ICgpID0+IHtcbiAgY29uc3QgbW9ua2V5UGF0Y2ggPSAoKSA9PiB7XG4gICAgd2luZG93Lm1vbmtleVBhdGNoZWQgPSB0cnVlXG4gICAgY29uc3Qgb3JpZ2luYWxBZGRFdmVudExpc3RlbmVyID0gRXZlbnRUYXJnZXQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXJcblxuICAgIC8vIEFkZCB0aGlzIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbiAgICBjb25zdCBUaW1lT3V0ID0gMzAwMDBcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGNhcHR1cmVJbnRlcmFjdGlvbihcbiAgICAgIGV2ZW50VHlwZTogc3RyaW5nLFxuICAgICAgdGFyZ2V0OiBhbnksXG4gICAgICB0aW1lc3RhbXA6IHN0cmluZyxcbiAgICAgIHNlbGVjdG9yOiBzdHJpbmcsXG4gICAgICB1cmw6IHN0cmluZyxcbiAgICAgIHV1aWQ6IHN0cmluZ1xuICAgICkge1xuICAgICAgZnVuY3Rpb24gZmluZENsaWNrYWJsZVBhcmVudChcbiAgICAgICAgZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsLFxuICAgICAgICBkZXB0aDogbnVtYmVyID0gMCxcbiAgICAgICAgYWxsQXR0cmlidXRlczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9XG4gICAgICApOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICAgICAgLy8gQmFzZSBjYXNlOiBpZiBlbGVtZW50IGlzIG51bGwgb3Igd2UndmUgcmVhY2hlZCBtYXggZGVwdGhcbiAgICAgICAgaWYgKCFlbGVtZW50IHx8IGRlcHRoID49IDIwKSByZXR1cm4gYWxsQXR0cmlidXRlc1xuXG4gICAgICAgIC8vIENoZWNrIGFuZCBjb2xsZWN0IGFsbCByZWxldmFudCBhdHRyaWJ1dGVzIGF0IGN1cnJlbnQgbGV2ZWxcbiAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcpKSB7XG4gICAgICAgICAgYWxsQXR0cmlidXRlc1snZGF0YS1jbGlja2FibGUtaWQnXSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcpIHx8ICcnXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJykpIHtcbiAgICAgICAgICBhbGxBdHRyaWJ1dGVzWydkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJ10gPVxuICAgICAgICAgICAgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnKSB8fCAnJ1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtZGF0YScpKSB7XG4gICAgICAgICAgYWxsQXR0cmlidXRlc1snZGF0YS1lbGVtZW50LW1ldGEtZGF0YSddID1cbiAgICAgICAgICAgIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1kYXRhJykgfHwgJydcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1mZXRjaC11cmwnKSkge1xuICAgICAgICAgIGFsbEF0dHJpYnV0ZXNbJ2RhdGEtZmV0Y2gtdXJsJ10gPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1mZXRjaC11cmwnKSB8fCAnJ1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29udGludWUgc2VhcmNoaW5nIHVwIHRoZSB0cmVlLCBwYXNzaW5nIGFsb25nIGNvbGxlY3RlZCBhdHRyaWJ1dGVzXG4gICAgICAgIHJldHVybiBmaW5kQ2xpY2thYmxlUGFyZW50KGVsZW1lbnQucGFyZW50RWxlbWVudCwgZGVwdGggKyAxLCBhbGxBdHRyaWJ1dGVzKVxuICAgICAgfVxuICAgICAgY29uc3Qgc2ltcGxpZmllZEhUTUwgPSBwcm9jZXNzUmVjaXBlKClcbiAgICAgIGNvbnN0IHBhZ2VNZXRhID0gZmluZFBhZ2VNZXRhKClcbiAgICAgIGNvbnN0IGFsbEF0dHJpYnV0ZXMgPSBmaW5kQ2xpY2thYmxlUGFyZW50KHRhcmdldCBhcyBIVE1MRWxlbWVudClcbiAgICAgIC8vIEdlbmVyYXRlIG5ldyBIVE1MIHNuYXBzaG90IElEXG4gICAgICBjb25zdCBjdXJyZW50U25hcHNob3RJZCA9IGdlbmVyYXRlSHRtbFNuYXBzaG90SWQodGltZXN0YW1wLCB1dWlkKVxuXG4gICAgICAvLyBDcmVhdGUgYSBzZXJpYWxpemFibGUgdmVyc2lvbiBvZiB0aGUgdGFyZ2V0XG4gICAgICBjb25zdCBzZXJpYWxpemVkVGFyZ2V0ID0ge1xuICAgICAgICB0YWdOYW1lOiB0YXJnZXQudGFnTmFtZSxcbiAgICAgICAgY2xhc3NOYW1lOiB0YXJnZXQuY2xhc3NOYW1lLFxuICAgICAgICBpZDogdGFyZ2V0LmlkLFxuICAgICAgICBpbm5lclRleHQ6IHRhcmdldC5pbm5lclRleHQgfHwgdGFyZ2V0LnZhbHVlIHx8ICcnLFxuICAgICAgICBvdXRlckhUTUw6IHRhcmdldC5vdXRlckhUTUxcbiAgICAgIH1cblxuICAgICAgbGV0IGZldGNoVXJsXG4gICAgICBpZiAoYWxsQXR0cmlidXRlcy5oYXNPd25Qcm9wZXJ0eSgnZGF0YS1mZXRjaC11cmwnKSkge1xuICAgICAgICAvLyBjYXJ0SW5mbyA9IGF3YWl0IGZldGNoQ2FydEluZm8oYWxsQXR0cmlidXRlc1snZGF0YS1mZXRjaC11cmwnXSlcbiAgICAgICAgZmV0Y2hVcmwgPSBhbGxBdHRyaWJ1dGVzWydkYXRhLWZldGNoLXVybCddXG4gICAgICB9XG5cbiAgICAgIE1hcmtWaWV3YWJsZUVsZW1lbnRzKClcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGV2ZW50VHlwZSxcbiAgICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXAsXG4gICAgICAgIHV1aWQ6IHV1aWQsXG4gICAgICAgIHRhcmdldDogc2VyaWFsaXplZFRhcmdldCwgLy8gUmVwbGFjZSBkaXJlY3QgRE9NIGVsZW1lbnQgd2l0aCBzZXJpYWxpemFibGUgb2JqZWN0XG4gICAgICAgIGh0bWxTbmFwc2hvdElkOiBjdXJyZW50U25hcHNob3RJZCxcbiAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yIHx8ICcnLFxuICAgICAgICAnZGF0YS1zZW1hbnRpYy1pZCc6IGFsbEF0dHJpYnV0ZXNbJ2RhdGEtY2xpY2thYmxlLWlkJ10gfHwgJycsXG4gICAgICAgICdlbGVtZW50LW1ldGEtbmFtZSc6IGFsbEF0dHJpYnV0ZXNbJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnXSB8fCAnJyxcbiAgICAgICAgJ2VsZW1lbnQtbWV0YS1kYXRhJzogYWxsQXR0cmlidXRlc1snZGF0YS1lbGVtZW50LW1ldGEtZGF0YSddIHx8ICcnLFxuICAgICAgICBwYWdlTWV0YTogcGFnZU1ldGEgfHwgJycsXG4gICAgICAgIGZldGNoVXJsOiBmZXRjaFVybCB8fCAnJyxcbiAgICAgICAgdXJsOiB1cmwgfHwgJycsXG4gICAgICAgIHdpbmRvd1NpemU6IHtcbiAgICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICAgICAgfSxcbiAgICAgICAgaHRtbENvbnRlbnQ6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vdXRlckhUTUwsXG4gICAgICAgIHNpbXBsaWZpZWRIVE1MOiBzaW1wbGlmaWVkSFRNTFxuICAgICAgfVxuICAgICAgaWYgKHRhcmdldC50YWdOYW1lID09PSAnSU5QVVQnICYmIHRhcmdldC50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgZGF0YVsnaW5wdXQtdGVybXMnXSA9IHRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgICAgaWYgKHRhcmdldC5pZCA9PT0gJ25hdi1zZWFyY2gtc3VibWl0LWJ1dHRvbicgJiYgdGFyZ2V0LnR5cGUgPT09ICdzdWJtaXQnKSB7XG4gICAgICAgIGRhdGFbJ2lucHV0LXRlcm1zJ10gPSAoXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJ0d290YWJzZWFyY2h0ZXh0Ym94XCJdJykgYXMgSFRNTElucHV0RWxlbWVudFxuICAgICAgICApPy52YWx1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG4gICAgLy8gdG9kbzogcGF0Y2ggcmVtb3ZlRXZlbnRMaXN0ZW5lciBzdXBwb3J0IHdyYXBcbiAgICAvLyBjb25zdCBibG9ja1NpZ25hbHMgPSB7fVxuICAgIC8vIGNvbnN0IGZpbmlzaFNpZ25hbHMgPSB7fVxuICAgIGNvbnN0IHdhaXRfZm9yX2Fib3J0ID0gKHNpZ25hbCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgaWYgKHNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAgICAgLy8gSWYgYWxyZWFkeSBhYm9ydGVkLCByZXNvbHZlIGltbWVkaWF0ZWx5XG4gICAgICAgICAgcmVzb2x2ZSh2b2lkIDApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlLCBsaXN0ZW4gZm9yIHRoZSBhYm9ydCBldmVudFxuICAgICAgICAgIHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsICgpID0+IHJlc29sdmUodm9pZCAwKSwgeyBvbmNlOiB0cnVlIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgaGFzRGVmYXVsdEFjdGlvbiA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnRcbiAgICAgIGNvbnN0IGFuY2hvciA9IGVsZW1lbnQuY2xvc2VzdCgnYScpXG4gICAgICBpZiAoYW5jaG9yKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICAvLyBpZiBpZCBpcyBuYXYtc2VhcmNoLXN1Ym1pdC1idXR0b25cbiAgICAgIC8vIGlmIChlbGVtZW50LmlkID09PSAnbmF2LXNlYXJjaC1zdWJtaXQtYnV0dG9uJykge1xuICAgICAgLy8gICByZXR1cm4gdHJ1ZVxuICAgICAgLy8gfVxuXG4gICAgICBpZiAoZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgaWYgKChlbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnR5cGUgPT09ICdzdWJtaXQnKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gaW5zaWRlIGEgYnV0dG9uIGluc2lkZSBmb3JtXG4gICAgICBpZiAoZWxlbWVudC5jbG9zZXN0KCdidXR0b24nKSAmJiBlbGVtZW50LmNsb3Nlc3QoJ2J1dHRvbicpLmNsb3Nlc3QoJ2Zvcm0nKSkge1xuICAgICAgICAvLyBpZiB0aGUgYnV0dG9uIGhhcyBhIHR5cGUgYW5kIGl0J3MgYnV0dG9uLCByZXR1cm4gZmFsc2VcbiAgICAgICAgaWYgKChlbGVtZW50LmNsb3Nlc3QoJ2J1dHRvbicpIGFzIEhUTUxCdXR0b25FbGVtZW50KS50eXBlID09PSAnYnV0dG9uJykge1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgLy8gTW9ua2V5IHBhdGNoIGFkZEV2ZW50TGlzdGVuZXJcbiAgICBFdmVudFRhcmdldC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGFzeW5jIGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lciwgb3B0aW9uczogYW55ID0ge30pIHtcbiAgICAgIGlmIChvcHRpb25zICYmIChvcHRpb25zIGFzIGFueSkuc2tpcF9tb25rZXlfcGF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsQWRkRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKVxuICAgICAgfVxuICAgICAgY29uc3QgY2FsbE9yaWdpbmFsTGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXIgJiYgdHlwZW9mIGxpc3RlbmVyLmhhbmRsZUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbGlzdGVuZXIuaGFuZGxlRXZlbnQuY2FsbChsaXN0ZW5lciwgZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGUgPT09ICdjbGljaycgJiYgbGlzdGVuZXIpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlZExpc3RlbmVyID0gYXN5bmMgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5zaG91bGRFeGNsdWRlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2hvdWxkIGV4Y2x1ZGUnKVxuICAgICAgICAgICAgY2FsbE9yaWdpbmFsTGlzdGVuZXIoZXZlbnQpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgaWYgKGlzRnJvbVBvcHVwKHRhcmdldCkpIHtcbiAgICAgICAgICAgIGNhbGxPcmlnaW5hbExpc3RlbmVyKGV2ZW50KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChldmVudC5qdXN0X2Zvcl9kZWZhdWx0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2tpcCBtb25rZXkgcGF0Y2gnKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEFkZCBkZWJvdW5jaW5nIGxvZ2ljXG4gICAgICAgICAgaWYgKGV2ZW50LmJsb2NrX3NpZ25hbCkge1xuICAgICAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxuICAgICAgICAgICAgZXZlbnQuZmluaXNoX3NpZ25hbHMucHVzaChjb250cm9sbGVyKVxuICAgICAgICAgICAgaWYgKGV2ZW50LmJsb2NrX3NpZ25hbCkge1xuICAgICAgICAgICAgICBjb25zdCBzaWduYWwgPSBldmVudC5ibG9ja19zaWduYWwuc2lnbmFsXG4gICAgICAgICAgICAgIGF3YWl0IHdhaXRfZm9yX2Fib3J0KHNpZ25hbClcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIERlYm91bmNpbmcgY2xpY2sgZXZlbnQsIHVuYmxvY2tpbmcnKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIERlYm91bmNpbmcgY2xpY2sgZXZlbnQsIG5vIGJsb2NrIHNpZ25hbCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxpc3RlbmVyICYmIHR5cGVvZiBsaXN0ZW5lci5oYW5kbGVFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVFdmVudC5jYWxsKGxpc3RlbmVyLCBldmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRyb2xsZXIuYWJvcnQoKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGV2ZW50LmJsb2NrX3NpZ25hbCA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxuICAgICAgICAgIGV2ZW50LmZpbmlzaF9zaWduYWxzID0gW11cblxuICAgICAgICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBDbGljayBkZXRlY3RlZCBvbjonLCBldmVudC50YXJnZXQpXG4gICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpXG4gICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gICAgICAgICAgLy8gY29uc3QgYW5jaG9yID0gdGFyZ2V0LmNsb3Nlc3QoJ2EnKVxuICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldClcbiAgICAgICAgICBpZiAoaGFzRGVmYXVsdEFjdGlvbihldmVudCkpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBDbGljayBvbiA8YT4gdGFnOicsIGFuY2hvci5ocmVmKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIENsaWNrIG9uIGNhbmNlbGFibGUnKVxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgIGV2ZW50Lm15X2RlZmF1bHRfcHJldmVudGVkID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnQubXlfZGVmYXVsdF9wcmV2ZW50ZWQgPSBmYWxzZVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FmdGVyIHBhdGNoIGV2ZW50JywgZXZlbnQpXG4gICAgICAgICAgICAvLyBjb25zdCB0YXJnZXRIcmVmID0gYW5jaG9yLmhyZWZcbiAgICAgICAgICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgY29uc3Qgc2NyZWVuc2hvdENvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQ6IE1lc3NhZ2VFdmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnR5cGUgPT09ICdTQ1JFRU5TSE9UX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnRpbWVzdGFtcCA9PT0gdGltZXN0YW1wXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdTY3JlZW5zaG90IGZhaWxlZCcpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcblxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aW1lb3V0XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdTY3JlZW5zaG90IHRpbWVvdXQnKSlcbiAgICAgICAgICAgICAgICB9LCBUaW1lT3V0KVxuICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgIGNvbnN0IGludGVyYWN0aW9uQ29tcGxldGUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZTEoZXZlbnQ6IE1lc3NhZ2VFdmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnR5cGUgPT09ICdJTlRFUkFDVElPTl9DT01QTEVURScgJiZcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcFxuICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZvaWQgMClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV2ZW50LmRhdGEuZXJyb3IgfHwgJ0ludGVyYWN0aW9uIGZhaWxlZCcpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgdGltZW91dFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSlcbiAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0ludGVyYWN0aW9uIHRpbWVvdXQnKSlcbiAgICAgICAgICAgICAgICB9LCBUaW1lT3V0KVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAvLyBsb2cgYmVmb3JlIGFuZCBhZnRlciB0aW1lXG4gICAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gZmluZGVyKGV2ZW50LnRhcmdldCwge1xuICAgICAgICAgICAgICAgIG1heE51bWJlck9mUGF0aENoZWNrczogMFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgY2FwdHVyZUludGVyYWN0aW9uKFxuICAgICAgICAgICAgICAgICdjbGlja19hJyxcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wLFxuICAgICAgICAgICAgICAgIHNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgICAgIHV1aWRcbiAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgICAgICAgICAgICB7IHR5cGU6ICdDQVBUVVJFX1NDUkVFTlNIT1QnLCB0aW1lc3RhbXA6IHRpbWVzdGFtcCwgdXVpZDogdXVpZCB9LFxuICAgICAgICAgICAgICAgICcqJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6ICdTQVZFX0lOVEVSQUNUSU9OX0RBVEEnLCBkYXRhOiBkYXRhLCB1dWlkOiB1dWlkIH0sICcqJylcbiAgICAgICAgICAgICAgLy8gYWxlcnQoXCIzXCIpXG4gICAgICAgICAgICAgIC8vIFdhaXQgZm9yIHNjcmVlbnNob3QgdG8gY29tcGxldGVcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3dhaXRpbmcgZm9yIHNjcmVlbnNob3QgYW5kIGludGVyYWN0aW9uJylcbiAgICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW3NjcmVlbnNob3RDb21wbGV0ZSwgaW50ZXJhY3Rpb25Db21wbGV0ZV0pXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzY3JlZW5zaG90IGFuZCBpbnRlcmFjdGlvbiBjb21wbGV0ZScpXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29tcGxldGVkXCIpXG4gICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICAgIC8vIGFsZXJ0KFwiMlwiKVxuICAgICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRhcmdldEhyZWZcbiAgICAgICAgICAgICAgLy8gcmUtZGlzcGF0Y2ggdGhlIGV2ZW50XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcilcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdydW5uaW5nIG9yaWdpbmFsIGxpc3RlbmVyJylcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cobGlzdGVuZXIpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgICAgICAgICAgICBldmVudC5ibG9ja19zaWduYWwuYWJvcnQoKVxuICAgICAgICAgICAgICAvLyBhYm9ydCBhbGwgZmluaXNoU2lnbmFsc1xuICAgICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICAgICAgICBldmVudC5maW5pc2hfc2lnbmFscy5tYXAoKGNvbnRyb2xsZXIpID0+IHdhaXRfZm9yX2Fib3J0KGNvbnRyb2xsZXIuc2lnbmFsKSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjYWxsT3JpZ2luYWxMaXN0ZW5lcihldmVudClcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2V2ZW50JywgZXZlbnQpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZS1kaXNwYXRjaCB0aGUgZXZlbnQgaWYgaXRzIG5vdCBwcmV2ZW50ZWQsIDInKVxuICAgICAgICAgICAgICBpZiAoIWV2ZW50Lm15X2RlZmF1bHRfcHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgICAgICAvLyBDbG9uZSB0aGUgb3JpZ2luYWwgZXZlbnRcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdFdmVudCA9IG5ldyBNb3VzZUV2ZW50KGV2ZW50LnR5cGUsIHtcbiAgICAgICAgICAgICAgICAgIGJ1YmJsZXM6IGV2ZW50LmJ1YmJsZXMsXG4gICAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZSwgLy8gRW5zdXJlcyB0aGUgZGVmYXVsdCBiZWhhdmlvciBvY2N1cnNcbiAgICAgICAgICAgICAgICAgIGNvbXBvc2VkOiBldmVudC5jb21wb3NlZCxcbiAgICAgICAgICAgICAgICAgIHZpZXc6IGV2ZW50LnZpZXcsXG4gICAgICAgICAgICAgICAgICBkZXRhaWw6IGV2ZW50LmRldGFpbCxcbiAgICAgICAgICAgICAgICAgIHNjcmVlblg6IGV2ZW50LnNjcmVlblgsXG4gICAgICAgICAgICAgICAgICBzY3JlZW5ZOiBldmVudC5zY3JlZW5ZLFxuICAgICAgICAgICAgICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgICAgICAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXG4gICAgICAgICAgICAgICAgICBjdHJsS2V5OiBldmVudC5jdHJsS2V5LFxuICAgICAgICAgICAgICAgICAgYWx0S2V5OiBldmVudC5hbHRLZXksXG4gICAgICAgICAgICAgICAgICBzaGlmdEtleTogZXZlbnQuc2hpZnRLZXksXG4gICAgICAgICAgICAgICAgICBtZXRhS2V5OiBldmVudC5tZXRhS2V5LFxuICAgICAgICAgICAgICAgICAgYnV0dG9uOiBldmVudC5idXR0b24sXG4gICAgICAgICAgICAgICAgICBidXR0b25zOiBldmVudC5idXR0b25zLFxuICAgICAgICAgICAgICAgICAgcmVsYXRlZFRhcmdldDogZXZlbnQucmVsYXRlZFRhcmdldFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgbmV3RXZlbnQuanVzdF9mb3JfZGVmYXVsdCA9IHRydWVcblxuICAgICAgICAgICAgICAgIC8vIFJlLWRpc3BhdGNoIHRoZSBuZXcgZXZlbnRcbiAgICAgICAgICAgICAgICB0YXJnZXQuZGlzcGF0Y2hFdmVudChuZXdFdmVudClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKVxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBwcm9taXNlIHRvIHdhaXQgZm9yIHNjcmVlbnNob3QgY29tcGxldGlvblxuICAgICAgICAgICAgY29uc3Qgc2NyZWVuc2hvdENvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnR5cGUgPT09ICdTQ1JFRU5TSE9UX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZvaWQgMClcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXZlbnQuZGF0YS5lcnJvciB8fCAnU2NyZWVuc2hvdCBmYWlsZWQnKSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuXG4gICAgICAgICAgICAgIC8vIEFkZCB0aW1lb3V0XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdTY3JlZW5zaG90IHRpbWVvdXQnKSlcbiAgICAgICAgICAgICAgfSwgVGltZU91dClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgY2FwdHVyZUludGVyYWN0aW9uKFxuICAgICAgICAgICAgICAnY2xpY2tfYicsXG4gICAgICAgICAgICAgIGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgdGltZXN0YW1wLFxuICAgICAgICAgICAgICBmaW5kZXIoZXZlbnQudGFyZ2V0LCB7XG4gICAgICAgICAgICAgICAgbWF4TnVtYmVyT2ZQYXRoQ2hlY2tzOiAwXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgICAgdXVpZFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLy8gUmVxdWVzdCBzY3JlZW5zaG90XG4gICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoXG4gICAgICAgICAgICAgIHsgdHlwZTogJ0NBUFRVUkVfU0NSRUVOU0hPVCcsIHRpbWVzdGFtcDogdGltZXN0YW1wLCB1dWlkOiB1dWlkIH0sXG4gICAgICAgICAgICAgICcqJ1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ1NBVkVfSU5URVJBQ1RJT05fREFUQScsIGRhdGE6IGRhdGEsIHV1aWQ6IHV1aWQgfSwgJyonKVxuICAgICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25Db21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZTEoZXZlbnQ6IE1lc3NhZ2VFdmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudHlwZSA9PT0gJ0lOVEVSQUNUSU9OX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSlcbiAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV2ZW50LmRhdGEuZXJyb3IgfHwgJ0ludGVyYWN0aW9uIGZhaWxlZCcpKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuXG4gICAgICAgICAgICAgIC8vIEFkZCB0aW1lb3V0XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignSW50ZXJhY3Rpb24gdGltZW91dCcpKVxuICAgICAgICAgICAgICB9LCBUaW1lT3V0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIFdhaXQgZm9yIHNjcmVlbnNob3QgdG8gY29tcGxldGVcbiAgICAgICAgICAgIC8vIGF3YWl0IEFTc2NyZWVuc2hvdENvbXBsZXRlXG4gICAgICAgICAgICAvLyBhd2FpdCBpbnRlcmFjdGlvbkNvbXBsZXRlXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnd2FpdGluZyBmb3Igc2NyZWVuc2hvdCBhbmQgaW50ZXJhY3Rpb24nKVxuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW3NjcmVlbnNob3RDb21wbGV0ZSwgaW50ZXJhY3Rpb25Db21wbGV0ZV0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2NyZWVuc2hvdCBhbmQgaW50ZXJhY3Rpb24gY29tcGxldGUnKVxuICAgICAgICAgICAgLy8gRXhlY3V0ZSBvcmlnaW5hbCBsaXN0ZW5lciBhZnRlciBzY3JlZW5zaG90IGlzIGNhcHR1cmVkXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhcHR1cmluZyBzY3JlZW5zaG90OicsIGVycm9yKVxuICAgICAgICAgICAgLy8gRXhlY3V0ZSBvcmlnaW5hbCBsaXN0ZW5lciBldmVuIGlmIHNjcmVlbnNob3QgZmFpbHNcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3J1bm5pbmcgb3JpZ2luYWwgbGlzdGVuZXInKVxuICAgICAgICAgICAgZXZlbnQuYmxvY2tfc2lnbmFsLmFib3J0KClcbiAgICAgICAgICAgIC8vIGFib3J0IGFsbCBmaW5pc2hTaWduYWxzXG4gICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICAgICAgZXZlbnQuZmluaXNoX3NpZ25hbHMubWFwKChjb250cm9sbGVyKSA9PiB3YWl0X2Zvcl9hYm9ydChjb250cm9sbGVyLnNpZ25hbCkpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjYWxsT3JpZ2luYWxMaXN0ZW5lcihldmVudClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWxsIHRoZSBvcmlnaW5hbCBhZGRFdmVudExpc3RlbmVyIHdpdGggdGhlIHdyYXBwZWQgbGlzdGVuZXJcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAvLyBpZiBib29sZWFuLCBzZXQgcGFzc2l2ZSB0byB0cnVlXG4gICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIHVzZUNhcHR1cmU6IGZhbHNlLFxuICAgICAgICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBvcHRpb25zLnBhc3NpdmUgPSBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxBZGRFdmVudExpc3RlbmVyLmNhbGwodGhpcywgdHlwZSwgd3JhcHBlZExpc3RlbmVyLCBvcHRpb25zKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQ2FsbCB0aGUgb3JpZ2luYWwgYWRkRXZlbnRMaXN0ZW5lciBmb3Igbm9uLWNsaWNrIGV2ZW50c1xuICAgICAgICByZXR1cm4gb3JpZ2luYWxBZGRFdmVudExpc3RlbmVyLmNhbGwodGhpcywgdHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIGFkZEV2ZW50TGlzdGVuZXIgc3VjY2Vzc2Z1bGx5IHBhdGNoZWQuJylcblxuICAgIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBjbGlja3Mgb24gPGE+IHRhZ3NcbiAgICBmdW5jdGlvbiBoYW5kbGVBbmNob3JDbGlja3MoKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnY2xpY2snLFxuICAgICAgICBhc3luYyBmdW5jdGlvbiAoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgICBpZiAod2luZG93LnNob3VsZEV4Y2x1ZGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaG91bGQgZXhjbHVkZScpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGlzRnJvbVBvcHVwKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZXZlbnQuanVzdF9mb3JfZGVmYXVsdCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NraXAgbW9ua2V5IHBhdGNoIGInKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEZpbmQgdGhlIGNsb3Nlc3QgPGE+IHRhZyBpbiBjYXNlIG9mIG5lc3RlZCBlbGVtZW50cyBpbnNpZGUgdGhlIDxhPlxuICAgICAgICAgIC8vIGNvbnN0IGFuY2hvciA9IHRhcmdldC5jbG9zZXN0KCdhJylcblxuICAgICAgICAgIGlmIChoYXNEZWZhdWx0QWN0aW9uKGV2ZW50KSkge1xuICAgICAgICAgICAgLy8gQWRkIGRlYm91bmNpbmcgbG9naWNcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICAgICAgICAgIGlmIChldmVudC5ibG9ja19zaWduYWwpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIEFuY2hvciBjbGljayBldmVudCBoYW5kZXIgZnJvbSBvdXIgb3duIGxpc3RlbmVyJylcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Nob3VsZCBhbHJlYWR5IGJlIGxvZ2dlZCBpbiBvdGhlciBldmVudCBsaXN0ZW5lcnMnKVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50LmJsb2NrX3NpZ25hbCA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxuICAgICAgICAgICAgZXZlbnQuZmluaXNoX3NpZ25hbHMgPSBbXVxuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdbSW50ZXJjZXB0ZWRdIENsaWNrIG9uIDxhPiB0YWc6JywgYW5jaG9yLmhyZWYpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW0ludGVyY2VwdGVkXSBDbGljayBvbiBjYW5jZWxhYmxlJylcbiAgICAgICAgICAgIC8vIGlmICghYW5jaG9yLmhyZWYuc3RhcnRzV2l0aCgnamF2YXNjcmlwdDonKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICAgICAgICAgICAgLy8gY29uc3QgdGFyZ2V0SHJlZiA9IGFuY2hvci5ocnN0YXJ0UGVyaW9kaWNVcGxvYWRlZlxuICAgICAgICAgICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAvLyDnm5HlkKzmiKrlm77lrozmiJDnmoTmtojmga9cbiAgICAgICAgICAgICAgY29uc3Qgc2NyZWVuc2hvdENvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQ6IE1lc3NhZ2VFdmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnR5cGUgPT09ICdTQ1JFRU5TSE9UX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnRpbWVzdGFtcCA9PT0gdGltZXN0YW1wXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdTY3JlZW5zaG90IGZhaWxlZCcpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSwge1xuICAgICAgICAgICAgICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAvLyDmt7vliqDotoXml7blpITnkIZcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1NjcmVlbnNob3QgdGltZW91dCcpKVxuICAgICAgICAgICAgICAgIH0sIFRpbWVPdXQpIC8vIDPnp5LotoXml7ZcbiAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAvLyDlj5HpgIHmiKrlm77or7fmsYJcbiAgICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKFxuICAgICAgICAgICAgICAgIHsgdHlwZTogJ0NBUFRVUkVfU0NSRUVOU0hPVCcsIHRpbWVzdGFtcDogdGltZXN0YW1wLCB1dWlkOiB1dWlkIH0sXG4gICAgICAgICAgICAgICAgJyonXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGNhcHR1cmVJbnRlcmFjdGlvbihcbiAgICAgICAgICAgICAgICAnY2xpY2tfYycsXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICBmaW5kZXIodGFyZ2V0LCB7XG4gICAgICAgICAgICAgICAgICBtYXhOdW1iZXJPZlBhdGhDaGVja3M6IDBcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgICAgICB1dWlkXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ1NBVkVfSU5URVJBQ1RJT05fREFUQScsIGRhdGE6IGRhdGEsIHV1aWQ6IHV1aWQgfSwgJyonKVxuICAgICAgICAgICAgICBjb25zdCBpbnRlcmFjdGlvbkNvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UxKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50eXBlID09PSAnSU5URVJBQ1RJT05fQ09NUExFVEUnICYmXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudGltZXN0YW1wID09PSB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdJbnRlcmFjdGlvbiBmYWlsZWQnKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRpbWVvdXRcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG4gICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdJbnRlcmFjdGlvbiB0aW1lb3V0JykpXG4gICAgICAgICAgICAgICAgfSwgVGltZU91dClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLy8g562J5b6F5oiq5Zu+5a6M5oiQXG4gICAgICAgICAgICAgIGF3YWl0IHNjcmVlbnNob3RDb21wbGV0ZVxuICAgICAgICAgICAgICBhd2FpdCBpbnRlcmFjdGlvbkNvbXBsZXRlXG5cbiAgICAgICAgICAgICAgLy8g5oiq5Zu+56Gu6K6k5a6M5oiQ5ZCO5YaN6Lez6L2sXG4gICAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGFyZ2V0SHJlZlxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2FwdHVyaW5nIHNjcmVlbnNob3Q6JywgZXJyb3IpXG4gICAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGFyZ2V0SHJlZlxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgZXZlbnQuYmxvY2tfc2lnbmFsLmFib3J0KClcbiAgICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICAgICAgZXZlbnQuZmluaXNoX3NpZ25hbHMubWFwKChjb250cm9sbGVyKSA9PiB3YWl0X2Zvcl9hYm9ydChjb250cm9sbGVyLnNpZ25hbCkpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlLWRpc3BhdGNoIHRoZSBldmVudCBpZiBpdHMgbm90IHByZXZlbnRlZCwgMScpXG4gICAgICAgICAgICAgIGlmICghZXZlbnQubXlfZGVmYXVsdF9wcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBDbG9uZSB0aGUgb3JpZ2luYWwgZXZlbnRcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdFdmVudCA9IG5ldyBNb3VzZUV2ZW50KGV2ZW50LnR5cGUsIHtcbiAgICAgICAgICAgICAgICAgIGJ1YmJsZXM6IGV2ZW50LmJ1YmJsZXMsXG4gICAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZSwgLy8gRW5zdXJlcyB0aGUgZGVmYXVsdCBiZWhhdmlvciBvY2N1cnNcbiAgICAgICAgICAgICAgICAgIGNvbXBvc2VkOiBldmVudC5jb21wb3NlZCxcbiAgICAgICAgICAgICAgICAgIHZpZXc6IGV2ZW50LnZpZXcsXG4gICAgICAgICAgICAgICAgICBkZXRhaWw6IGV2ZW50LmRldGFpbCxcbiAgICAgICAgICAgICAgICAgIHNjcmVlblg6IGV2ZW50LnNjcmVlblgsXG4gICAgICAgICAgICAgICAgICBzY3JlZW5ZOiBldmVudC5zY3JlZW5ZLFxuICAgICAgICAgICAgICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgICAgICAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXG4gICAgICAgICAgICAgICAgICBjdHJsS2V5OiBldmVudC5jdHJsS2V5LFxuICAgICAgICAgICAgICAgICAgYWx0S2V5OiBldmVudC5hbHRLZXksXG4gICAgICAgICAgICAgICAgICBzaGlmdEtleTogZXZlbnQuc2hpZnRLZXksXG4gICAgICAgICAgICAgICAgICBtZXRhS2V5OiBldmVudC5tZXRhS2V5LFxuICAgICAgICAgICAgICAgICAgYnV0dG9uOiBldmVudC5idXR0b24sXG4gICAgICAgICAgICAgICAgICBidXR0b25zOiBldmVudC5idXR0b25zLFxuICAgICAgICAgICAgICAgICAgcmVsYXRlZFRhcmdldDogZXZlbnQucmVsYXRlZFRhcmdldFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgbmV3RXZlbnQuanVzdF9mb3JfZGVmYXVsdCA9IHRydWVcblxuICAgICAgICAgICAgICAgIC8vIFJlLWRpc3BhdGNoIHRoZSBuZXcgZXZlbnRcbiAgICAgICAgICAgICAgICB0YXJnZXQuZGlzcGF0Y2hFdmVudChuZXdFdmVudClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICAgICAgc2tpcF9tb25rZXlfcGF0Y2g6IHRydWUsXG4gICAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgICAgfSBhcyBhbnlcbiAgICAgICkgLy8gVXNlIGNhcHR1cmUgcGhhc2UgdG8gaW50ZXJjZXB0IHRoZSBldmVudCBlYXJsaWVyXG4gICAgfVxuXG4gICAgLy8gQ2FsbCB0aGUgZnVuY3Rpb24gdG8gaGFuZGxlIDxhPiB0YWcgY2xpY2tzXG4gICAgaGFuZGxlQW5jaG9yQ2xpY2tzKClcbiAgfVxuICBpZiAoIXdpbmRvdy5tb25rZXlQYXRjaGVkKSB7XG4gICAgbW9ua2V5UGF0Y2goKVxuICB9XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ0RPTUNvbnRlbnRMb2FkZWQnLFxuICAgICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdET01Db250ZW50TG9hZGVkJylcbiAgICAgIHNob3VsZEV4Y2x1ZGUod2luZG93LmxvY2F0aW9uLmhyZWYpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnc2hvdWxkRXhjbHVkZScsIHJlc3VsdClcbiAgICAgICAgd2luZG93LnNob3VsZEV4Y2x1ZGUgPSByZXN1bHRcbiAgICAgIH0pXG4gICAgfSxcbiAgICB7XG4gICAgICBvbmNlOiB0cnVlXG4gICAgfVxuICApXG59XG5cbi8vIGlnbm9yZSB1c2VyIGlkIGZvciBub3csIGJlY2F1c2UgZnVsbCBjaGVjayB3b3VsZCBiZSBhc3luYy5cbnNob3VsZEV4Y2x1ZGUod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICBpZiAoIXJlc3VsdCkge1xuICAgIHdvcmsoKVxuICB9XG59KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9