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
/* harmony export */   scroll_threshold: () => (/* binding */ scroll_threshold),
/* harmony export */   upload_url: () => (/* binding */ upload_url),
/* harmony export */   url_includes: () => (/* binding */ url_includes),
/* harmony export */   zip: () => (/* binding */ zip)
/* harmony export */ });
var popup_probability = 0.15;
var popup_scroll_probability = 0.1;
var popup_click_probability = 0.2;
var popup_navigation_probability = 0.15;
var popup_tabActivate_probability = 0.15;
var folder_name = "user_interaction_data";
var zip = true;
var upload_url = 'http://userdatacollect.hailab.io/upload';
var base_url = 'http://userdatacollect.hailab.io';
var data_collector_secret_id = 'hailab';
var url_includes = ['www.amazon.com'];
var interaction_status_url = "".concat(base_url, "/interactions_record_status");
var check_user_id_url = "".concat(base_url, "/check_user_id");
var filter_url = ['https://www.amazon.com/checkout/', 'https://www.amazon.com/gp/buy/', 'https://www.amazon.com/a/addresses', 'https://www.amazon.com/cpe/yourpayments/', 'https://www.amazon.com/ap/signin', 'https://www.amazon.com/ap/cvf/', 'https://www.amazon.com/ap/profile/', 'https://www.amazon.com/ax/account/', 'https://www.amazon.com/gp/product/handle-buy-box/', 'https://www.amazon.com/gp/checkoutportal/', 'https://www.amazon.com/gp/cart/desktop/'];
var scroll_threshold = 300;

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
/* harmony export */   cart: () => (/* binding */ cart),
/* harmony export */   delivery_frequency_selector: () => (/* binding */ delivery_frequency_selector),
/* harmony export */   fresh_cart: () => (/* binding */ fresh_cart),
/* harmony export */   nav: () => (/* binding */ nav),
/* harmony export */   product_delivery: () => (/* binding */ product_delivery),
/* harmony export */   product_facts: () => (/* binding */ product_facts),
/* harmony export */   quantity_selector: () => (/* binding */ quantity_selector),
/* harmony export */   recipes: () => (/* binding */ recipes),
/* harmony export */   refinement_option: () => (/* binding */ refinement_option),
/* harmony export */   set_up_now_button: () => (/* binding */ set_up_now_button)
/* harmony export */ });
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var nav = {
  selector: '#navbar-main',
  name: 'nav_bar',
  children: [{
    selector: '#nav-search-bar-form',
    children: [{
      selector: 'input#twotabsearchtextbox',
      name: 'search_input',
      clickable: true,
      generate_metadata: function generate_metadata(em) {
        var term = em === null || em === void 0 ? void 0 : em.value;
        return {
          name: 'search_term',
          data: {
            term: term
          }
        };
      }
    }, {
      selector: '#nav-search-submit-button',
      clickable: true,
      name: 'search_button'
    }]
  }, {
    selector: '#nav-link-accountList',
    text_selector: '#nav-link-accountList span.nav-line-2',
    add_text: true,
    clickable: true,
    name: 'account_and_list_button'
  }, {
    selector: '#nav-orders',
    add_text: true,
    clickable: true,
    name: 'order_button'
  }, {
    selector: '#nav-cart',
    text_selector: '#nav-cart .nav-line-2',
    add_text: true,
    clickable: true,
    name: 'cart_button'
  }, {
    selector: '#nav-flyout-searchAjax',
    name: 'suggested_terms',
    children: [{
      selector: 'div.s-suggestion-ellipsis-direction',
      name: 'from_text',
      add_text: true,
      clickable: true
    }]
  }]
};
var refinement_option = [{
  selector: 'span.a-size-base.a-color-base.puis-bold-weight-text',
  add_text: true,
  "class": 'refinement-title'
}, {
  selector: 'a.s-navigation-clear-link',
  add_text: true,
  name: 'clear_selection',
  clickable: true
}, {
  selector: 'ul > span.a-declarative > span > li:has(a.a-link-normal.s-navigation-item)',
  add_text: true,
  name: 'from_text',
  clickable: true,
  // click_selector: "a",
  direct_child: true,
  text_js: function text_js(element) {
    try {
      var text = '';
      if (!element) {
        return text;
      }
      var aChild = element.querySelector('a.a-link-normal.s-navigation-item');
      if (element.innerText && element.innerText.trim()) {
        text += element.innerText.trim();
        if (aChild && aChild.hasAttribute('title')) {
          text += ' ';
          text += aChild.getAttribute('title');
        }
      } else {
        var _aChild = element.querySelector('a.a-link-normal.s-navigation-item');
        if (_aChild && _aChild.hasAttribute('title')) {
          text += _aChild.getAttribute('title');
        }
      }
      if (aChild && aChild.getAttribute('aria-current') === 'true') {
        // text = 'Clear Option ' + text
      }
      return text;
    } catch (e) {
      console.log(e);
      return '';
    }
  },
  generate_metadata: function generate_metadata(element) {
    var _element$closest, _nameEm$innerText, _text2;
    var text = '';
    var aChild = element.querySelector('a.a-link-normal.s-navigation-item');
    if (element.innerText && element.innerText.trim()) {
      text += element.innerText.trim();
      if (aChild && aChild.hasAttribute('title')) {
        text += '_';
        text += aChild.getAttribute('title');
      }
    } else {
      var _aChild2 = element.querySelector('a.a-link-normal.s-navigation-item');
      if (_aChild2 && _aChild2.hasAttribute('title')) {
        text += _aChild2.getAttribute('title');
      }
    }
    var nameEm = (_element$closest = element.closest('ul')) === null || _element$closest === void 0 || (_element$closest = _element$closest.parentElement) === null || _element$closest === void 0 ? void 0 : _element$closest.firstElementChild;
    var name = nameEm === null || nameEm === void 0 || (_nameEm$innerText = nameEm.innerText) === null || _nameEm$innerText === void 0 ? void 0 : _nameEm$innerText.replace(/[ ]/g, '_').toLowerCase().trim();
    var url = '';
    if (aChild && aChild.hasAttribute('href')) {
      url = aChild.getAttribute('href');
    }
    if (aChild && aChild.getAttribute('aria-current') === 'true') {
      var _text;
      return {
        name: 'refinements.' + name,
        data: {
          title: ((_text = text) === null || _text === void 0 ? void 0 : _text.trim()) || '',
          selected: true,
          url: url
        }
      };
    }
    return {
      name: 'refinements.' + name,
      data: {
        title: ((_text2 = text) === null || _text2 === void 0 ? void 0 : _text2.trim()) || '',
        selected: false,
        url: url
      }
    };
  },
  children: [{
    selector: "input[type='checkbox']"
  }]
}, {
  selector: "ul > span.a-declarative > li > span > div[data-a-expander-name='filter-content-expander']",
  name: 'more_options',
  children: [{
    selector: "a[data-csa-c-func-deps='aui-da-a-expander-toggle']",
    name: 'toggle_expansion',
    add_text: true
  }, {
    selector: 'li',
    add_text: true,
    name: 'from_text',
    clickable: true,
    // click_selector: "a",
    text_js: function text_js(element) {
      try {
        var text = '';
        if (!element) {
          return text;
        }
        var aChild = element.querySelector('a.a-link-normal.s-navigation-item');
        if (element.innerText && element.innerText.trim()) {
          text += element.innerText.trim();
          if (aChild && aChild.hasAttribute('title')) {
            text += ' ';
            text += aChild.getAttribute('title');
          }
        } else {
          var _aChild3 = element.querySelector('a.a-link-normal.s-navigation-item');
          if (_aChild3 && _aChild3.hasAttribute('title')) {
            text += _aChild3.getAttribute('title');
          }
        }
        if (aChild && aChild.getAttribute('aria-current') === 'true') {
          // text = 'Clear Option ' + text
        }
        return text;
      } catch (e) {
        console.log(e);
        return '';
      }
    },
    generate_metadata: function generate_metadata(element) {
      var _element$closest2, _nameEm$innerText2, _text4;
      var text = '';
      var aChild = element.querySelector('a.a-link-normal.s-navigation-item');
      if (element.innerText && element.innerText.trim()) {
        text += element.innerText.trim();
        if (aChild && aChild.hasAttribute('title')) {
          text += '_';
          text += aChild.getAttribute('title');
        }
      } else {
        var _aChild4 = element.querySelector('a.a-link-normal.s-navigation-item');
        if (_aChild4 && _aChild4.hasAttribute('title')) {
          text += _aChild4.getAttribute('title');
        }
      }
      var nameEm = (_element$closest2 = element.closest('ul')) === null || _element$closest2 === void 0 || (_element$closest2 = _element$closest2.parentElement) === null || _element$closest2 === void 0 || (_element$closest2 = _element$closest2.closest('ul')) === null || _element$closest2 === void 0 || (_element$closest2 = _element$closest2.parentElement) === null || _element$closest2 === void 0 ? void 0 : _element$closest2.firstElementChild;
      var name = nameEm === null || nameEm === void 0 || (_nameEm$innerText2 = nameEm.innerText) === null || _nameEm$innerText2 === void 0 ? void 0 : _nameEm$innerText2.replace(/[ ]/g, '_').toLowerCase().trim();
      var url = '';
      if (aChild && aChild.hasAttribute('href')) {
        url = aChild.getAttribute('href');
      }
      if (aChild && aChild.getAttribute('aria-current') === 'true') {
        var _text3;
        return {
          name: 'refinements.' + name,
          data: {
            title: ((_text3 = text) === null || _text3 === void 0 ? void 0 : _text3.trim()) || '',
            selected: true,
            url: url
          }
        };
      }
      return {
        name: 'refinements.' + name,
        data: {
          title: ((_text4 = text) === null || _text4 === void 0 ? void 0 : _text4.trim()) || '',
          selected: false,
          url: url
        }
      };
    },
    children: [{
      selector: "input[type='checkbox']"
    }]
  }]
}];
var product_facts = {
  selector: '#productFactsDesktopExpander',
  add_text: true,
  "class": 'product-facts'
};
var product_delivery = {
  selector: 'div.mir-layout-DELIVERY_BLOCK-slot-PRIMARY_DELIVERY_MESSAGE_LARGE',
  add_text: true,
  "class": 'product-delivery'
};
var quantity_selector = {
  selector: '#selectQuantity, div[id^="qs-widget-button-container-atfc"]',
  name: 'quantity_selector',
  children: [{
    selector: 'label',
    add_text: true
  }, {
    selector: 'span.a-dropdown-prompt',
    add_text: true
  }, {
    selector: 'select',
    // clickable: true,
    name: 'drop_down_list'
  }, {
    selector: 'button',
    name: 'drop_down_list',
    clickable: true,
    add_text: true
  }, {
    selector: 'div.qs-widget-dropdown-wrapper span[data-action="qs-widget-dropdown-decl"]',
    add_text: true,
    clickable: true,
    use_root: true,
    name: 'from_text',
    text_format: 'Drop Down Option {}'
  }]
};
var delivery_frequency_selector = {
  selector: '#replenishmentFrequency_feature_div',
  name: 'delivery_frequency_selector',
  text_selector: 'div.a-section.a-spacing-micro > span',
  add_text: true,
  children: [{
    selector: '#rcxOrdFreqOnmlWrapper span.a-dropdown-prompt',
    add_text: true
  }, {
    selector: '#rcxOrdFreqOnmlWrapper select',
    // clickable: true,
    name: 'drop_down_list'
  }]
};
var set_up_now_button = {
  selector: '#rcx-subscribe-submit-button-announce',
  add_text: true,
  clickable: true,
  name: 'set_up_now',
  "class": 'product-set-up-now'
};
var add_to_cart_button = {
  selector: "input[name='submit.add-to-cart'], input[name='submit.add-to-cart-ubb'], #freshAddToCartButton input",
  add_text: true,
  clickable: true,
  name: 'add_to_cart',
  "class": 'product-add-to-cart'
};
var buy_now_button = {
  selector: "input[name='submit.buy-now']",
  add_text: true,
  clickable: true,
  name: 'buy_now',
  "class": 'product-buy-now'
};
var buy_box_with_accordion = {
  selector: '#buyBoxAccordion > div.a-box.celwidget',
  name: 'from_text',
  text_selector: 'div.accordion-caption > span',
  children: [{
    selector: "div[data-csa-c-content-id='offer_display_desktop_accordion_header'], div[data-csa-c-content-id='offer_display_mobile_accordion_header']",
    name: 'accordion_selector',
    add_text: true,
    clickable: true,
    text_selector: 'h5 span.a-text-bold'
  }, {
    selector: 'div.a-accordion-inner.accordion-row-content',
    name: 'purchase_form',
    children: [product_facts, product_delivery, quantity_selector, delivery_frequency_selector, set_up_now_button, add_to_cart_button, buy_now_button]
  }]
};
var buy_box_without_accordion_delivery = {
  selector: '#gsod_singleOfferDisplay_Desktop',
  children: [{
    selector: '#addToCart',
    name: 'purchase_form',
    children: [product_facts, product_delivery, quantity_selector, add_to_cart_button, buy_now_button]
  }]
};
var buy_box_without_accordion_pick_up = {
  selector: '#gsod_singleOfferDisplay_group_2_Desktop',
  children: [{
    selector: '#pickUpOfferDisplay',
    name: 'purchase_form',
    children: [product_facts, product_delivery, quantity_selector, add_to_cart_button, buy_now_button]
  }]
};
var cart = [nav, {
  selector: '#sc-collapsed-carts-container',
  name: 'amazon_fresh_cart',
  children: [{
    selector: 'div.sc-localmarket-text-logo',
    add_text: true
  }, {
    selector: 'div[data-name="collapsed_item_list"]',
    clickable: true,
    name: 'item_list'
  }, {
    selector: 'div.sc-buy-box-inner-box input[name^="proceedToALMCheckout"]',
    clickable: true,
    name: 'check_out',
    add_text: true
  }, {
    selector: 'div.sc-buy-box-inner-box a',
    clickable: true,
    name: 'from_text',
    add_text: true
  }]
}, {
  selector: "div[data-name='Active Items']",
  name: 'active_item_list',
  children: [{
    selector: 'div.sc-list-item-content',
    text_selector: 'div.sc-item-content-group ul > li > span.a-list-item > a.sc-product-title span.a-truncate-full',
    name: 'from_text',
    children: [{
      selector: 'div.sc-item-check-checkbox-selector label',
      clickable: true,
      name: 'checkbox'
    }, {
      selector: 'div.sc-image-wrapper a',
      clickable: true,
      name: 'product_image',
      add_text: true,
      text_format: 'Product Image'
    }, {
      selector: 'div.sc-item-content-group ul > li > span.a-list-item > a.sc-product-title',
      clickable: true,
      text_selector: 'span.a-truncate-full',
      add_text: true,
      name: 'product_detail'
    }, {
      selector: 'li.sc-delivery-messaging',
      add_text: true
    }, {
      selector: 'div.sc-badge-price-to-pay span.sc-product-price span:not(.a-offscreen)',
      add_text: true
    }, {
      selector: 'div.sc-item-content-group span.sc-quantity-stepper',
      children: [{
        selector: "button[aria-label='Decrease quantity by one']",
        add_text: true,
        text_js: function text_js(element) {
          if (element.hasAttribute('aria-label')) {
            return element.getAttribute('aria-label');
          }
          return '';
        },
        clickable: true,
        name: 'decrease_quantity_by_one'
      }, {
        selector: "div[role='spinbutton']",
        add_text: true,
        text_format: 'Current Quantity: {}'
      }, {
        selector: "button[aria-label='Increase quantity by one']",
        add_text: true,
        text_js: function text_js(element) {
          if (element.hasAttribute('aria-label')) {
            return element.getAttribute('aria-label');
          }
          return '';
        },
        clickable: true,
        name: 'increase_quantity_by_one'
      }]
    }, {
      selector: "div.sc-item-content-group input[data-action='delete']",
      add_text: true,
      clickable: true,
      name: 'delete'
    }, {
      selector: "div.sc-item-content-group input[data-action='save-for-later']",
      add_text: true,
      clickable: true,
      name: 'save_for_later'
    }],
    generate_metadata: function generate_metadata(em) {
      var _em$parentElement, _priceEm$innerText;
      var asin = (_em$parentElement = em.parentElement) === null || _em$parentElement === void 0 ? void 0 : _em$parentElement.getAttribute('data-asin');
      var priceEm = em.querySelector('div.sc-badge-price-to-pay span.sc-product-price span:not(.a-offscreen)');
      var price = priceEm === null || priceEm === void 0 || (_priceEm$innerText = priceEm.innerText) === null || _priceEm$innerText === void 0 ? void 0 : _priceEm$innerText.replace(/[\n]/g, '');
      var titleEm = em.querySelector('div.sc-item-content-group ul > li > span.a-list-item > a.sc-product-title span.a-truncate-full');
      var title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
      var urlEm = em.querySelector('div.sc-item-content-group ul > li > span.a-list-item > a.sc-product-title');
      var url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
      var deliveryEm = em.querySelector('li.sc-delivery-messaging');
      var delivery = deliveryEm === null || deliveryEm === void 0 ? void 0 : deliveryEm.innerText.replace(/[\n]/g, ' ');
      var quantityEm = em.querySelector("div.sc-item-content-group span.sc-quantity-stepper div[role='spinbutton']");
      var quantity = quantityEm === null || quantityEm === void 0 ? void 0 : quantityEm.innerText;
      var selectedEm = em.querySelector('div.sc-item-check-checkbox-selector input');
      var selected = (selectedEm === null || selectedEm === void 0 ? void 0 : selectedEm.getAttribute('checked')) !== null;
      return {
        name: 'active_items',
        data: {
          title: title,
          asin: asin,
          price: price,
          url: url,
          delivery: delivery,
          quantity: quantity,
          selected: selected
        }
      };
    }
  }]
}, {
  selector: '#sc-buy-box-ptc-button input',
  add_text: true,
  clickable: true,
  name: 'check_out'
}];
var fresh_cart = [nav, {
  selector: "div[data-name='Active Items']",
  name: 'active_item_list',
  children: [{
    selector: 'div.sc-list-item-content',
    text_selector: 'ul > li > span.a-list-item > a.sc-product-title span.a-truncate-full',
    name: 'from_text',
    children: [{
      selector: 'div.sc-product-image-desktop a img',
      clickable: true,
      name: 'product_image',
      add_text: true,
      text_format: 'Product Image'
    }, {
      selector: 'ul > li > span.a-list-item > a.sc-product-title',
      clickable: true,
      text_selector: 'span.a-truncate-full',
      add_text: true,
      name: 'product_detail'
    }, {
      selector: 'div.sc-badge-price-to-pay span.sc-price',
      add_text: true
    }, {
      selector: 'div.sc-action-links',
      children: [{
        selector: 'div.qs-widget-container',
        children: [{
          selector: "input[aria-label='Remove']",
          add_text: true,
          text_js: function text_js(element) {
            if (element.hasAttribute('aria-label')) {
              return element.getAttribute('aria-label');
            }
            return '';
          },
          clickable: true,
          name: 'decrease_quantity_by_one'
        }, {
          selector: 'div.qs-widget-dropdown-flex-wrapper button',
          add_text: true,
          clickable: true,
          name: 'quantity_drop_down_list',
          text_format: 'Current Quantity: {}'
        }, {
          selector: 'div.qs-widget-dropdown-wrapper span[data-action="qs-widget-dropdown-decl"]',
          add_text: true,
          clickable: true,
          use_root: true,
          name: 'from_text',
          text_format: 'Drop Down Option {}'
        }, {
          selector: 'div[id^="qs-widget-quantity-container-atfc"] span[data-action="qs-widget-quantity-changelink-decl"]',
          add_text: true,
          clickable: true,
          use_root: true,
          name: 'from_text'
        }, {
          selector: 'div[id^="qs-widget-summary-container-atfc"] span[id^="qs-widget-summary-atc-atfc"]',
          add_text: true,
          clickable: true,
          use_root: true,
          name: 'from_text'
        }, {
          selector: "input[aria-label='Add']",
          add_text: true,
          text_js: function text_js(element) {
            if (element.hasAttribute('aria-label')) {
              return element.getAttribute('aria-label');
            }
            return '';
          },
          clickable: true,
          name: 'increase_quantity_by_one'
        }]
      }]
    }, {
      selector: "input[data-action='delete']",
      add_text: true,
      clickable: true,
      name: 'delete'
    }],
    generate_metadata: function generate_metadata(em) {
      var _em$parentElement2, _priceEm$innerText2;
      var asin = (_em$parentElement2 = em.parentElement) === null || _em$parentElement2 === void 0 ? void 0 : _em$parentElement2.getAttribute('data-asin');
      var priceEm = em.querySelector('div.sc-badge-price-to-pay span.sc-price');
      var price = priceEm === null || priceEm === void 0 || (_priceEm$innerText2 = priceEm.innerText) === null || _priceEm$innerText2 === void 0 ? void 0 : _priceEm$innerText2.replace(/[\n]/g, '');
      var titleEm = em.querySelector('ul > li > span.a-list-item > a.sc-product-title span.a-truncate-full');
      var title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
      var urlEm = em.querySelector('ul > li > span.a-list-item > a.sc-product-title');
      var url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
      var quantityEm = em.querySelector('div.sc-action-links div.qs-widget-dropdown-flex-wrapper button');
      var quantity = quantityEm === null || quantityEm === void 0 ? void 0 : quantityEm.innerText;
      return {
        name: 'active_items',
        data: {
          title: title,
          asin: asin,
          price: price,
          url: url,
          quantity: quantity
        }
      };
    }
  }]
}, {
  selector: 'div.sc-buy-box-inner-box input[name^="proceedToALMCheckout"]',
  clickable: true,
  name: 'check_out',
  add_text: true
}, {
  selector: 'div.sc-buy-box-inner-box a',
  clickable: true,
  name: 'from_text',
  add_text: true
}, {
  selector: '#sc-cart-above-actions button, #sc-cart-above-actions a',
  clickable: true,
  name: 'from_text',
  add_text: true
}];
var buy_again = [nav, {
  selector: 'div.a-section:has(div.filter-container)',
  name: 'filters',
  children: [{
    selector: 'div.filter-container',
    text_selector: 'span#filter-container-header',
    name: 'from_text',
    children: [{
      selector: 'span#filter-container-header',
      add_text: true
    }, {
      selector: 'label',
      add_text: true,
      clickable: true,
      name: 'from_text',
      generate_metadata: function generate_metadata(em) {
        var _em$closest, _nameEm$innerText3;
        var title = em.innerText;
        var nameEm = (_em$closest = em.closest('div.filter-container')) === null || _em$closest === void 0 ? void 0 : _em$closest.querySelector('#filter-container-header');
        var name = nameEm === null || nameEm === void 0 || (_nameEm$innerText3 = nameEm.innerText) === null || _nameEm$innerText3 === void 0 ? void 0 : _nameEm$innerText3.replace(/[ ]/g, '_').toLowerCase().trim();
        var input = em.querySelector('input');
        if (input && input.checked) {
          return {
            name: 'filters.' + name,
            data: {
              title: (title === null || title === void 0 ? void 0 : title.trim()) || '',
              selected: true
            }
          };
        }
        return {
          name: 'filters.' + name,
          data: {
            title: (title === null || title === void 0 ? void 0 : title.trim()) || '',
            selected: false
          }
        };
      }
    }]
  }]
}, {
  selector: 'div.alm-grid-desktop-grid-container',
  name: 'product_list',
  children: [{
    selector: 'div[id^="gridCell"]',
    name: 'from_text',
    text_selector: "div[id^='closedCard'] a[id^='title'] span.a-truncate-full",
    children: [{
      selector: "div[id^='gridElement']",
      name: 'product_card',
      children: [{
        selector: "div[id^='closedCard']",
        name: 'closed_product_card',
        children: [{
          selector: "div[id^='info']",
          name: 'open_product_card',
          clickable: true,
          text_format: 'Open Product Card'
        }, {
          selector: 'form span.a-button-inner',
          name: 'add_to_cart',
          clickable: true,
          add_text: true
        }, {
          selector: 'div[id^="seeBuyingOptionsWrapper"] a',
          name: 'see_buying_options',
          clickable: true,
          add_text: true
        }]
      }, {
        selector: 'div[name="ax-qs"]',
        children: [{
          selector: "button[aria-label='Decrease quantity by one']",
          add_text: true,
          text_js: function text_js(element) {
            if (element.hasAttribute('aria-label')) {
              return element.getAttribute('aria-label');
            }
            return '';
          },
          clickable: true,
          name: 'decrease_quantity_by_one'
        }, {
          selector: "div[role='spinbutton']",
          add_text: true,
          text_format: 'Current Quantity: {}'
        }, {
          selector: "button[aria-label='Increase quantity by one']",
          add_text: true,
          text_js: function text_js(element) {
            if (element.hasAttribute('aria-label')) {
              return element.getAttribute('aria-label');
            }
            return '';
          },
          clickable: true,
          name: 'increase_quantity_by_one'
        }]
      }, {
        selector: "div[id^='expandedImage']",
        name: 'close_product_card',
        clickable: true,
        add_text: true,
        text_format: 'Close Product Card'
      }]
    }],
    generate_metadata: function generate_metadata(em) {
      var _priceEm$innerText3;
      var asinEm = em.querySelector("div[id^='closedCard'] div[id^='info']");
      var asin = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin');
      var priceEm = em.querySelector('div[id^="closedCard"] div[id^="info"] span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)');
      var price = priceEm === null || priceEm === void 0 || (_priceEm$innerText3 = priceEm.innerText) === null || _priceEm$innerText3 === void 0 ? void 0 : _priceEm$innerText3.replace(/[\n]/g, '');
      var titleEm = em.querySelector("div[id^='closedCard'] a[id^='title'] span.a-truncate-full");
      var title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
      var deliveryEm = em.querySelector('div[id^="closedCard"] div[id^="info"] #udmDeliveryMessageComponent');
      var delivery = deliveryEm === null || deliveryEm === void 0 ? void 0 : deliveryEm.innerText.replace(/[\n]/g, ' ');
      return {
        name: 'active_items',
        data: {
          title: title,
          asin: asin,
          price: price,
          delivery: delivery
        }
      };
    }
  }, {
    selector: 'div[id^="featured"]',
    name: 'from_text',
    text_selector: "a[id^='title'] span.a-truncate-full",
    children: [{
      selector: 'div[id^="detailContentWrapper"] div[id^="detailContent"]',
      name: 'detailed_content',
      children: [{
        selector: 'div:has(> img)',
        clickable: true,
        name: 'product_image',
        add_text: true,
        text_format: 'Product Image'
      }, {
        selector: "a[id^='title']",
        clickable: true,
        name: 'product_title',
        add_text: true,
        text_selector: 'span.a-truncate-full'
      }, {
        selector: "div[class*='multiOfferPillContainer'] a",
        clickable: true,
        name: 'from_text',
        add_text: true
      }, {
        selector: "div[data-buyingoptiontype='NEW'], div[class*='asinDetailInfoColumns']:has(input[name='submit.addToCart']",
        name: 'one_time_purchase',
        children: [{
          selector: 'span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)',
          add_text: true,
          name: 'price'
        }, {
          selector: '#udmDeliveryMessageComponent',
          add_text: true,
          name: 'delivery'
        }, {
          selector: 'div[class*="actionButtonsRow"], div[class*="asinDetailActionsRow"]',
          name: 'buttons',
          children: [{
            selector: 'input[name="submit.addToCart"]',
            add_text: true,
            name: 'add_to_cart',
            clickable: true
          }, {
            selector: 'input[id^="buy-now"]',
            add_text: true,
            name: 'buy_now',
            clickable: true
          }, {
            selector: 'div[id^="feedbackButtonSection"] input',
            add_text: true,
            name: 'remove_item',
            clickable: true
          }, {
            selector: 'div[name="ax-qs"]',
            children: [{
              selector: "button[aria-label='Decrease quantity by one']",
              add_text: true,
              text_js: function text_js(element) {
                if (element.hasAttribute('aria-label')) {
                  return element.getAttribute('aria-label');
                }
                return '';
              },
              clickable: true,
              name: 'decrease_quantity_by_one'
            }, {
              selector: "div[role='spinbutton']",
              add_text: true,
              text_format: 'Current Quantity: {}'
            }, {
              selector: "button[aria-label='Increase quantity by one']",
              add_text: true,
              text_js: function text_js(element) {
                if (element.hasAttribute('aria-label')) {
                  return element.getAttribute('aria-label');
                }
                return '';
              },
              clickable: true,
              name: 'increase_quantity_by_one'
            }]
          }]
        }],
        generate_metadata: function generate_metadata(em) {
          var _em$parentElement3, _priceEm$innerText4, _em$parentElement4, _em$parentElement5;
          var asinEm = (_em$parentElement3 = em.parentElement) === null || _em$parentElement3 === void 0 ? void 0 : _em$parentElement3.parentElement;
          var asin = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin');
          if (asin === null) {
            var _asinEm = em.parentElement;
            var _asin = _asinEm === null || _asinEm === void 0 ? void 0 : _asinEm.getAttribute('data-asin');
          }
          var priceEm = em.querySelector('span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)');
          var price = priceEm === null || priceEm === void 0 || (_priceEm$innerText4 = priceEm.innerText) === null || _priceEm$innerText4 === void 0 ? void 0 : _priceEm$innerText4.replace(/[\n]/g, '');
          var titleEm = (_em$parentElement4 = em.parentElement) === null || _em$parentElement4 === void 0 || (_em$parentElement4 = _em$parentElement4.parentElement) === null || _em$parentElement4 === void 0 ? void 0 : _em$parentElement4.querySelector("a[id^='title'] span.a-truncate-full");
          var title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
          var urlEm = (_em$parentElement5 = em.parentElement) === null || _em$parentElement5 === void 0 || (_em$parentElement5 = _em$parentElement5.parentElement) === null || _em$parentElement5 === void 0 ? void 0 : _em$parentElement5.querySelector("a[id^='title']");
          var url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
          var deliveryEm = em.querySelector('#udmDeliveryMessageComponent');
          var delivery = deliveryEm === null || deliveryEm === void 0 ? void 0 : deliveryEm.innerText.replace(/[\n]/g, ' ');
          return {
            name: 'active_items',
            data: {
              title: title,
              asin: asin,
              price: price,
              url: url,
              delivery: delivery
            }
          };
        }
      }, {
        selector: "div[data-buyingoptiontype='SNS'], div[class*='snsUpsellBlockContainer']",
        name: 'subscribe_and_save',
        children: [{
          selector: 'span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)',
          add_text: true,
          name: 'price'
        }, {
          selector: '#udmDeliveryMessageComponent',
          add_text: true,
          name: 'delivery'
        }, {
          selector: 'div[class*="actionButtonsRow"]',
          name: 'buttons',
          children: [{
            selector: 'input[name="submit.addToCart"]',
            add_text: true,
            name: 'add_to_cart',
            clickable: true
          }, {
            selector: 'span[class*="snsButton"] input',
            add_text: true,
            name: 'subscribe_and_save',
            clickable: true
          }, {
            selector: 'div[id^="feedbackButtonSection"] input',
            add_text: true,
            name: 'remove_item',
            clickable: true
          }]
        }, {
          selector: 'span[class*="subscriptionButton"]',
          add_text: true,
          name: 'set_up_subscription',
          clickable: true
        }],
        generate_metadata: function generate_metadata(em) {
          var _em$parentElement6, _asinEm2, _priceEm$innerText5, _em$parentElement7, _em$parentElement8;
          var asinEm = (_em$parentElement6 = em.parentElement) === null || _em$parentElement6 === void 0 ? void 0 : _em$parentElement6.parentElement;
          var asin = (_asinEm2 = asinEm) === null || _asinEm2 === void 0 ? void 0 : _asinEm2.getAttribute('data-asin');
          if (asin === null) {
            var _asinEm3;
            asinEm = em.querySelector('input[data-mix-operations="snsModalHandler"]');
            asin = (_asinEm3 = asinEm) === null || _asinEm3 === void 0 ? void 0 : _asinEm3.getAttribute('data-asin');
          }
          var priceEm = em.querySelector('span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)');
          var price = priceEm === null || priceEm === void 0 || (_priceEm$innerText5 = priceEm.innerText) === null || _priceEm$innerText5 === void 0 ? void 0 : _priceEm$innerText5.replace(/[\n]/g, '');
          var titleEm = (_em$parentElement7 = em.parentElement) === null || _em$parentElement7 === void 0 || (_em$parentElement7 = _em$parentElement7.parentElement) === null || _em$parentElement7 === void 0 ? void 0 : _em$parentElement7.querySelector("a[id^='title'] span.a-truncate-full");
          var title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
          var urlEm = (_em$parentElement8 = em.parentElement) === null || _em$parentElement8 === void 0 || (_em$parentElement8 = _em$parentElement8.parentElement) === null || _em$parentElement8 === void 0 ? void 0 : _em$parentElement8.querySelector("a[id^='title']");
          var url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
          var deliveryEm = em.querySelector('#udmDeliveryMessageComponent');
          var delivery = deliveryEm === null || deliveryEm === void 0 ? void 0 : deliveryEm.innerText.replace(/[\n]/g, ' ');
          return {
            name: 'active_items',
            data: {
              title: title,
              asin: asin,
              price: price,
              url: url,
              delivery: delivery
            }
          };
        }
      }]
    }, {
      selector: "div[id^='detail-view-similar-items']",
      name: 'similar_items',
      children: [{
        selector: 'li.a-carousel-card',
        name: 'from_text',
        text_selector: "a[id^='title'] span.a-truncate-full",
        children: [{
          selector: 'div.a-image-container:has(> img)',
          clickable: true,
          name: 'product_image',
          add_text: true,
          text_format: 'Product Image'
        }, {
          selector: "a[id^='title']",
          clickable: true,
          name: 'product_title',
          add_text: true,
          text_selector: 'span.a-truncate-full'
        }, {
          selector: 'span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)',
          add_text: true,
          name: 'price'
        }, {
          selector: '#udmDeliveryMessageComponent',
          add_text: true,
          name: 'delivery'
        }, {
          selector: 'input[name="submit.addToCart"], input[name^="atfcShim"], button[aria-label="Add to Cart. Click to change quantity"]',
          add_text: true,
          name: 'add_to_cart',
          clickable: true
        }, {
          selector: 'div[id^="seeBuyingOptionsWrapper"] a',
          name: 'see_buying_options',
          clickable: true,
          add_text: true
        }, {
          selector: 'div[name="ax-qs"]',
          children: [{
            selector: "button[aria-label='Decrease quantity by one']",
            add_text: true,
            text_js: function text_js(element) {
              if (element.hasAttribute('aria-label')) {
                return element.getAttribute('aria-label');
              }
              return '';
            },
            clickable: true,
            name: 'decrease_quantity_by_one'
          }, {
            selector: "div[role='spinbutton']",
            add_text: true,
            text_format: 'Current Quantity: {}'
          }, {
            selector: "button[aria-label='Increase quantity by one']",
            add_text: true,
            text_js: function text_js(element) {
              if (element.hasAttribute('aria-label')) {
                return element.getAttribute('aria-label');
              }
              return '';
            },
            clickable: true,
            name: 'increase_quantity_by_one'
          }]
        }, {
          selector: 'div.qs-widget-container',
          children: [{
            selector: "input[aria-label='Remove']",
            add_text: true,
            text_js: function text_js(element) {
              if (element.hasAttribute('aria-label')) {
                return element.getAttribute('aria-label');
              }
              return '';
            },
            clickable: true,
            name: 'decrease_quantity_by_one'
          }, {
            selector: 'div.qs-widget-dropdown-flex-wrapper button',
            add_text: true,
            clickable: true,
            name: 'drop_down_list',
            text_format: 'Current Quantity: {}'
          }, {
            selector: 'div.qs-widget-dropdown-wrapper span[data-action="qs-widget-dropdown-decl"]',
            add_text: true,
            clickable: true,
            use_root: true,
            name: 'from_text',
            text_format: 'Drop Down Option {}'
          }, {
            selector: 'div[id^="qs-widget-quantity-container-atfc"] span[data-action="qs-widget-quantity-changelink-decl"]',
            add_text: true,
            clickable: true,
            use_root: true,
            name: 'from_text'
          }, {
            selector: 'div[id^="qs-widget-summary-container-atfc"] span[id^="qs-widget-summary-atc-atfc"]',
            add_text: true,
            clickable: true,
            use_root: true,
            name: 'from_text'
          }, {
            selector: "input[aria-label='Add']",
            add_text: true,
            text_js: function text_js(element) {
              if (element.hasAttribute('aria-label')) {
                return element.getAttribute('aria-label');
              }
              return '';
            },
            clickable: true,
            name: 'increase_quantity_by_one'
          }]
        }],
        generate_metadata: function generate_metadata(em) {
          var _em$closest2, _parentTitleEm$innerT, _priceEm$innerText6;
          var parentTitleEm = (_em$closest2 = em.closest('div[id^="featured"]')) === null || _em$closest2 === void 0 ? void 0 : _em$closest2.querySelector('div[id^="detailContentWrapper"] a[id^="title"] span.a-truncate-full');
          var parentTitle = parentTitleEm === null || parentTitleEm === void 0 || (_parentTitleEm$innerT = parentTitleEm.innerText) === null || _parentTitleEm$innerT === void 0 ? void 0 : _parentTitleEm$innerT.toLowerCase().replace(/[^\w]+/g, '_');
          var asinEm = em.querySelector('div[class*="delightFaceout"]');
          var asin = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin');
          var priceEm = em.querySelector('span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)');
          var price = priceEm === null || priceEm === void 0 || (_priceEm$innerText6 = priceEm.innerText) === null || _priceEm$innerText6 === void 0 ? void 0 : _priceEm$innerText6.replace(/[\n]/g, '');
          var titleEm = em.querySelector("a[id^='title'] span.a-truncate-full");
          var title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
          var urlEm = em.querySelector("a[id^='title']");
          var url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
          var deliveryEm = em.querySelector('#udmDeliveryMessageComponent');
          var delivery = deliveryEm === null || deliveryEm === void 0 ? void 0 : deliveryEm.innerText.replace(/[\n]/g, ' ');
          return {
            name: parentTitle + '.similar_items',
            data: {
              title: title,
              asin: asin,
              price: price,
              url: url,
              delivery: delivery
            }
          };
        }
      }]
    }]
  }]
}];
var recipes = [{
  match: '/',
  match_method: 'url',
  match_with_ref: true,
  selector: 'html',
  children: [{
    selector: 'head',
    children: [{
      selector: 'title',
      add_text: true
    }]
  }, {
    selector: 'body',
    children: [nav]
  }]
}, {
  match: '/s',
  match_method: 'url',
  selector: 'html',
  children: [{
    selector: 'head',
    children: [{
      selector: 'title',
      add_text: true
    }]
  }, {
    selector: 'body',
    children: [nav, {
      selector: '#s-refinements',
      name: 'refinements',
      children: [{
        selector: '#topRefinements\\/0',
        name: 'top_refinements',
        add_text: 'true',
        text_format: 'Recently used filters',
        children: [{
          selector: 'li',
          add_text: true,
          name: 'from_text',
          clickable: true,
          text_js: function text_js(element) {
            try {
              var text = '';
              if (!element) {
                return text;
              }
              var aChild = element.querySelector('a.a-link-normal.s-navigation-item');
              if (element.innerText && element.innerText.trim()) {
                text += element.innerText.trim();
                if (aChild && aChild.hasAttribute('title')) {
                  text += ' ';
                  text += aChild.getAttribute('title');
                }
              } else {
                var _aChild5 = element.querySelector('a.a-link-normal.s-navigation-item');
                if (_aChild5 && _aChild5.hasAttribute('title')) {
                  text += _aChild5.getAttribute('title');
                }
              }
              return text;
            } catch (e) {
              console.log(e);
              return '';
            }
          },
          children: [{
            selector: "input[type='checkbox']"
          }]
        }]
      }, {
        selector: 'div.a-section.a-spacing-none:not(:has(#n-title)):has(span.a-size-base.a-color-base.puis-bold-weight-text):has(ul span.a-declarative > span > li):not(#reviewsRefinements):not(#departments):not(#priceRefinements):not(#filters)',
        name: 'from_text',
        text_selector: 'span.a-size-base.a-color-base.puis-bold-weight-text',
        children: refinement_option
      }, {
        selector: '#departments',
        name: 'departments',
        add_text: true,
        text_format: 'Department',
        children: [{
          selector: 'li a',
          add_text: true,
          name: 'from_text',
          clickable: true,
          generate_metadata: function generate_metadata(em) {
            var selected = em === null || em === void 0 ? void 0 : em.getAttribute('aria-current');
            var title = em === null || em === void 0 ? void 0 : em.innerText;
            var url = em === null || em === void 0 ? void 0 : em.getAttribute('href');
            if (selected && selected == 'true') {
              return {
                name: 'refinements.departments',
                data: {
                  title: title,
                  selected: true,
                  url: url
                }
              };
            } else {
              return {
                name: 'refinements.departments',
                data: {
                  title: title,
                  selected: false,
                  url: url
                }
              };
            }
          }
        }]
      }, {
        selector: '#reviewsRefinements',
        name: 'reviews_refinements',
        add_text: true,
        text_format: 'Customer Reviews',
        children: [{
          selector: 'a.s-navigation-clear-link',
          add_text: true,
          name: 'clear_selection',
          clickable: true
        }, {
          selector: "li a[aria-current='true']",
          add_text: true,
          name: 'from_text',
          clickable: true,
          // text_format: 'Clear Option {}',
          generate_metadata: function generate_metadata(em) {
            var _em$innerText;
            var title = em === null || em === void 0 || (_em$innerText = em.innerText) === null || _em$innerText === void 0 ? void 0 : _em$innerText.replace(/\n/g, ' ');
            var url = em === null || em === void 0 ? void 0 : em.getAttribute('href');
            return {
              name: 'refinements.reviews',
              data: {
                title: title,
                selected: true,
                url: url
              }
            };
          }
        }, {
          selector: "li a[aria-current='false']",
          add_text: true,
          name: 'from_text',
          clickable: true,
          generate_metadata: function generate_metadata(em) {
            var _em$innerText2;
            var title = em === null || em === void 0 || (_em$innerText2 = em.innerText) === null || _em$innerText2 === void 0 ? void 0 : _em$innerText2.replace(/\n/g, ' ');
            var url = em === null || em === void 0 ? void 0 : em.getAttribute('href');
            return {
              name: 'refinements.reviews',
              data: {
                title: title,
                selected: false,
                url: url
              }
            };
          }
        }]
      }, {
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
        }, {
          selector: "ul[aria-labelledby='p_36-title'] a[aria-current='true']",
          add_text: true,
          name: 'from_text',
          clickable: true,
          // text_format: 'Clear Option {}',
          generate_metadata: function generate_metadata(em) {
            var title = em === null || em === void 0 ? void 0 : em.innerText;
            var url = em === null || em === void 0 ? void 0 : em.getAttribute('href');
            return {
              name: 'refinements.price',
              data: {
                title: title,
                selected: true,
                url: url
              }
            };
          }
        }, {
          selector: "ul[aria-labelledby='p_36-title'] a[aria-current='false']",
          add_text: true,
          name: 'from_text',
          clickable: true,
          generate_metadata: function generate_metadata(em) {
            var title = em === null || em === void 0 ? void 0 : em.innerText;
            var url = em === null || em === void 0 ? void 0 : em.getAttribute('href');
            return {
              name: 'refinements.price',
              data: {
                title: title,
                selected: false,
                url: url
              }
            };
          }
        },
        // case 2: slider
        {
          selector: 'div.sf-range-slider-row:nth-of-type(1)',
          add_text: true,
          generate_metadata: function generate_metadata(em) {
            var _em$innerText3;
            var range = em === null || em === void 0 || (_em$innerText3 = em.innerText) === null || _em$innerText3 === void 0 ? void 0 : _em$innerText3.replace(/\n/g, '');
            return {
              name: 'refinements.price',
              data: {
                title: 'price_range',
                range: range
              }
            };
          }
        }, {
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
            step_values: function step_values(em) {
              var formEm = em.closest('form');
              if (formEm) {
                var prop = formEm.getAttribute('data-slider-props');
                if (prop) {
                  var steps = JSON.parse(prop).stepLabels;
                  return steps;
                }
              }
              return '';
            },
            current_value: function current_value(em) {
              var value = Number.parseInt(em.getAttribute('value'));
              if (value !== null) {
                var formEm = em.closest('form');
                if (formEm) {
                  var prop = formEm.getAttribute('data-slider-props');
                  if (prop) {
                    var steps = JSON.parse(prop).stepLabels;
                    return steps[value];
                  }
                }
              }
              return '';
            }
          }
        }, {
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
            step_values: function step_values(em) {
              var formEm = em.closest('form');
              if (formEm) {
                var prop = formEm.getAttribute('data-slider-props');
                if (prop) {
                  var steps = JSON.parse(prop).stepLabels;
                  return steps;
                }
              }
              return '';
            },
            current_value: function current_value(em) {
              var value = Number.parseInt(em.getAttribute('value'));
              if (value !== null) {
                var formEm = em.closest('form');
                if (formEm) {
                  var prop = formEm.getAttribute('data-slider-props');
                  if (prop) {
                    var steps = JSON.parse(prop).stepLabels;
                    return steps[value];
                  }
                }
              }
              return '';
            }
          }
        }, {
          selector: 'div.sf-submit-range-button input',
          name: 'submit_price_range',
          add_text: true,
          text_format: 'Go',
          clickable: true
        }, {
          selector: 'div.sf-reset-range-link a',
          name: 'reset_price_selection',
          add_text: true,
          clickable: true
        }, {
          selector: '#p_n_deal_type-title',
          add_text: true,
          name: 'deals_discounts_heading'
        }, {
          selector: "div[aria-labelledby='p_n_deal_type-title'] > a",
          add_text: true,
          name: 'clear_deals_discount_selection',
          clickable: true
        }, {
          selector: "ul[aria-labelledby='p_n_deal_type-title'] a[aria-current='true']",
          add_text: true,
          name: 'from_text',
          clickable: true,
          // text_format: 'Clear Option {}',
          generate_metadata: function generate_metadata(em) {
            var title = em === null || em === void 0 ? void 0 : em.innerText;
            var url = em === null || em === void 0 ? void 0 : em.getAttribute('href');
            return {
              name: 'refinements.price',
              data: {
                title: title,
                selected: true,
                url: url
              }
            };
          }
        }, {
          selector: "ul[aria-labelledby='p_n_deal_type-title'] a[aria-current='false']",
          add_text: true,
          name: 'from_text',
          clickable: true,
          generate_metadata: function generate_metadata(em) {
            var title = em === null || em === void 0 ? void 0 : em.innerText;
            var url = em === null || em === void 0 ? void 0 : em.getAttribute('href');
            return {
              name: 'refinements.price',
              data: {
                title: title,
                selected: false,
                url: url
              }
            };
          }
        }]
      }]
    }, {
      selector: 'div.s-main-slot.s-result-list.s-search-results',
      name: 'search_results',
      children: [{
        selector: 'div.AdHolder',
        name: 'ads',
        children: [{
          selector: 'div[data-asin]',
          name: 'from_text',
          add_text: true,
          clickable: true,
          text_js: function text_js(em) {
            var titleEm = em.querySelector('img');
            var text = titleEm === null || titleEm === void 0 ? void 0 : titleEm.getAttribute('alt');
            return text.trim() || '';
          },
          generate_metadata: function generate_metadata(em) {
            var asinEm = em;
            var asin = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin');
            var titleEm = em.querySelector('img');
            var title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.getAttribute('alt');
            var urlEm = em.querySelector("a[data-type='productTitle']");
            var url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
            return {
              name: 'ads',
              data: {
                title: title,
                asin: asin,
                url: url
              }
            };
          }
        }]
      }, {
        insert_split_marker: true,
        insert_split_marker_every: 4,
        selector: 'div[data-component-type="s-search-result"]',
        text_selector: 'span.a-color-base.a-text-normal, h2.a-color-base.a-text-normal span',
        name: 'from_text',
        "class": 'search-result',
        children: [{
          selector: "div[data-cy='title-recipe'] a.a-link-normal.s-link-style.a-text-normal",
          add_text: true,
          "class": 'product-name',
          clickable: true,
          name: 'product_name'
        }, {
          selector: 'div.s-product-image-container',
          add_text: true,
          name: 'product_image',
          clickable: true,
          text_format: 'Product Image'
        }, {
          selector: 'div.s-color-swatch-container',
          name: 'available_colors',
          children: [{
            selector: 'div.s-color-swatch-pad',
            name: 'from_text',
            clickable: true,
            add_text: true,
            text_js: function text_js(em) {
              var aChild = em.querySelector('a');
              if (aChild) {
                return aChild.getAttribute('aria-label') || '';
              }
              return '';
            }
          }, {
            selector: "div[data-csa-c-type='link'] a",
            direct_child: true,
            name: 'from_text',
            clickable: true,
            add_text: true
          }]
        }, {
          selector: 'div.s-variations-options-elevated',
          name: 'options',
          add_text: true,
          clickable: true,
          click_selector: 'a'
        }, {
          selector: "div[data-cy='reviews-block']",
          "class": 'product-review',
          children: [{
            selector: 'span.a-icon-alt',
            add_text: true,
            "class": 'product-rating'
          }, {
            selector: 'span.a-size-base.s-underline-text',
            add_text: true,
            text_format: '{} reviews',
            "class": 'product-rating-count',
            name: 'product_rating_count',
            clickable: true
          }]
        }, {
          selector: "div[data-cy='price-recipe']",
          "class": 'product-price',
          children: [{
            selector: 'a.a-link-normal > span.a-price > span.a-offscreen',
            add_text: true
          }]
        }, {
          selector: "div[data-cy='delivery-recipe']",
          add_text: true,
          "class": 'product-delivery'
        }, {
          selector: "div[data-cy='add-to-cart'] button",
          add_text: true,
          clickable: true,
          name: 'add_to_cart'
        }, {
          selector: "div[data-csa-c-content-id='s-search-see-details-button'] a",
          add_text: true,
          clickable: true,
          name: 'see_options'
        }, {
          selector: 'div[name="ax-qs"]',
          children: [{
            selector: "button[aria-label='Decrease quantity by one']",
            add_text: true,
            text_js: function text_js(element) {
              if (element.hasAttribute('aria-label')) {
                return element.getAttribute('aria-label');
              }
              return '';
            },
            clickable: true,
            name: 'decrease_quantity_by_one'
          }, {
            selector: "div[role='spinbutton']",
            add_text: true,
            text_format: 'Current Quantity: {}'
          }, {
            selector: "button[aria-label='Increase quantity by one']",
            add_text: true,
            text_js: function text_js(element) {
              if (element.hasAttribute('aria-label')) {
                return element.getAttribute('aria-label');
              }
              return '';
            },
            clickable: true,
            name: 'increase_quantity_by_one'
          }]
        }],
        generate_metadata: function generate_metadata(em) {
          var asin = em.getAttribute('data-asin');
          var priceEm = em.querySelector("div[data-cy='price-recipe'] a.a-link-normal > span.a-price > span.a-offscreen");
          var price = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText;
          var titleEm = em.querySelector('span.a-color-base.a-text-normal, h2.a-color-base.a-text-normal span');
          var title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
          var urlEm = em.querySelector("div[data-cy='title-recipe'] a.a-link-normal.s-link-style.a-text-normal");
          var url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
          var deliveryEm = em.querySelector("div[data-cy='delivery-recipe']");
          var delivery = deliveryEm === null || deliveryEm === void 0 ? void 0 : deliveryEm.innerText.replace(/[\n]/g, ' ');
          return {
            name: 'search_results',
            data: {
              title: title,
              asin: asin,
              price: price,
              url: url,
              delivery: delivery
            }
          };
        }
      }]
    }, {
      selector: 'span.s-pagination-strip',
      name: 'pagination',
      children: [{
        selector: '.s-pagination-item',
        add_text: true,
        name: 'from_text',
        clickable: true
      }]
    }, {
      selector: 'div.a-popover-wrapper',
      name: 'popover',
      children: [{
        selector: 'header.a-popover-header button',
        add_text: true,
        clickable: true,
        name: 'close',
        text_format: 'Close'
      }, {
        selector: 'div.a-popover-inner div.puis-atc-size-variation',
        children: [{
          selector: 'div.a-row:nth-of-type(1)',
          direct_child: true,
          children: [{
            selector: "span[data-component-type='s-product-image'] a",
            name: 'product_image',
            add_text: true,
            clickable: true,
            text_format: 'Product Image'
          }, {
            selector: 'div.puis-size-variation-title a',
            name: 'product_title',
            add_text: true,
            clickable: true
          }, {
            selector: 'div.puis-size-variation-product-spec',
            name: 'product_specification',
            add_text: true,
            clickable: true,
            click_selector: 'a'
          }]
        }, {
          selector: 'div.a-row:nth-of-type(2)',
          direct_child: true,
          children: [{
            selector: 'div.puis-size-variation-product-options',
            name: 'from_text',
            text_selector: 'span.a-size-base.a-color-secondary',
            children: [{
              selector: 'span.a-size-base.a-color-secondary',
              add_text: true
            }, {
              selector: 'span.a-dropdown-prompt',
              add_text: true
            }, {
              selector: 'select',
              name: 'drop_down_list'
            }]
          }, {
            selector: 'div.puis-size-variation-price a.a-text-normal',
            name: 'price',
            clickable: true,
            add_text: true,
            text_selector: "span[aria-hidden='true']"
          }, {
            selector: 'div.puis-size-variation-delivery',
            add_text: true,
            name: 'delivery'
          }]
        }, {
          selector: 'div.a-row:nth-of-type(3)',
          direct_child: true,
          children: [{
            selector: 'span.s-no-js-hide input',
            name: 'cancel',
            clickable: true,
            add_text: true,
            text_format: 'Cancel'
          }, {
            selector: 'div.puis-atcb-add-container button',
            name: 'add_to_cart',
            clickable: true,
            add_text: true
          }]
        }]
      }]
    }]
  }]
}, {
  match: '#productTitle',
  match_text: '',
  selector: 'html',
  children: [{
    selector: 'head',
    children: [{
      selector: 'title',
      add_text: true
    }]
  }, {
    selector: 'body',
    children: [nav, {
      selector: '#centerCol',
      "class": 'product-card',
      children: [{
        selector: '#title',
        add_text: true,
        keep_attr: ['id'],
        generate_metadata: function generate_metadata(em) {
          return {
            name: 'product_details',
            data: {
              title: (em === null || em === void 0 ? void 0 : em.innerText) || ''
            }
          };
        }
      }, {
        selector: '#averageCustomerReviews',
        "class": 'review',
        children: [{
          selector: 'span.a-icon-alt',
          add_text: true
        }, {
          selector: '#acrCustomerReviewText',
          add_text: true
        }]
      }, {
        selector: '#apex_desktop > div[data-csa-c-slot-id="apex_dp_center_column"]' + ' > div[class="offersConsistencyEnabled"] > div:not([style="display:none;"]):not([style="display: none;"]) ' + '#corePriceDisplay_desktop_feature_div:has(#sns-base-price) #sns-base-price span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay, ' + '#apex_desktop > div[data-csa-c-slot-id="apex_dp_center_column"]' + ' > div[class="offersConsistencyEnabled"] > div:not([style="display:none;"]):not([style="display: none;"]) ' + '#corePriceDisplay_desktop_feature_div:not(:has(#sns-base-price)) span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay, ' + '#apex_desktop > div[data-csa-c-slot-id="apex_dp_center_column"] > div[data-csa-c-content-id="apex_with_rio_cx"] ' + '#corePriceDisplay_desktop_feature_div span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay',
        add_text: true,
        text_format: 'Price: {}',
        "class": 'product-price',
        generate_metadata: function generate_metadata(em) {
          var _em$innerText4;
          return {
            name: 'product_details',
            data: {
              price: (em === null || em === void 0 || (_em$innerText4 = em.innerText) === null || _em$innerText4 === void 0 ? void 0 : _em$innerText4.replace(/\n/g, '')) || ''
            }
          };
        },
        text_js: function text_js(em) {
          var _em$innerText5;
          return (em === null || em === void 0 || (_em$innerText5 = em.innerText) === null || _em$innerText5 === void 0 ? void 0 : _em$innerText5.replace(/\n/g, '')) || '';
        }
      }, {
        selector: '#twister',
        "class": 'product-options',
        name: 'product_options',
        children: [{
          selector: 'div.a-section',
          text_selector: 'div.a-row:has(label.a-form-label) > label.a-form-label',
          name: 'from_text',
          direct_child: true,
          generate_metadata: function generate_metadata(em) {
            var _em$querySelector, _em$querySelector2;
            var label = (_em$querySelector = em.querySelector('div.a-row:has(label.a-form-label) label.a-form-label')) === null || _em$querySelector === void 0 ? void 0 : _em$querySelector.innerHTML.replace(/[:\n]/g, '').trim();
            var value = (_em$querySelector2 = em.querySelector('div.a-row:has(label.a-form-label) span.selection')) === null || _em$querySelector2 === void 0 ? void 0 : _em$querySelector2.innerHTML;
            if (value === undefined || value === '') {
              var _em$querySelector3;
              var options = (_em$querySelector3 = em.querySelector('select')) === null || _em$querySelector3 === void 0 ? void 0 : _em$querySelector3.querySelectorAll('option');
              // console.log(options);
              if (options) {
                var _iterator = _createForOfIteratorHelper(options),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var option = _step.value;
                    // console.log(option);
                    if (option && option.getAttribute('selected') !== null) {
                      value = option.innerHTML.trim();
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }
              // console.log(value);
            }
            return {
              name: 'product_options',
              data: {
                label: label,
                value: value.trim()
              }
            };
          },
          children: [{
            selector: 'div.a-row:has(label.a-form-label)',
            children: [{
              selector: 'label.a-form-label',
              add_text: true
            }, {
              selector: 'span.selection',
              add_text: true
            }]
          }, {
            selector: 'select',
            add_text: true,
            // clickable: true,
            name: 'drop_down_list'
          }, {
            selector: 'ul',
            name: 'button_list',
            children: [{
              selector: 'li button',
              add_text: true,
              clickable: true,
              name: 'from_text',
              text_js: function text_js(element) {
                var text = '';
                if (element.innerText.trim()) {
                  text += element.innerText.trim();
                  var imgChild = element.querySelector('img');
                  if (imgChild && imgChild.alt) {
                    text += ' ';
                    text += imgChild.alt;
                  }
                } else {
                  var _imgChild = element.querySelector('img');
                  if (_imgChild && _imgChild.alt) {
                    text += _imgChild.alt;
                  }
                }
                return text.trim();
              }
            }]
          }]
        }]
      },
      // handle new twisters
      {
        selector: '#twister-plus-inline-twister',
        "class": 'product-options',
        name: 'product_options',
        children: [{
          selector: 'div.inline-twister-row',
          text_selector: 'div.inline-twister-dim-title-value-truncate-expanded span.a-size-base.a-color-secondary',
          name: 'from_text',
          direct_child: true,
          generate_metadata: function generate_metadata(em) {
            var _em$querySelector4, _em$querySelector5;
            var label = (_em$querySelector4 = em.querySelector('div.inline-twister-dim-title-value-truncate-expanded span.a-size-base.a-color-secondary')) === null || _em$querySelector4 === void 0 ? void 0 : _em$querySelector4.innerHTML.replace(/[:\n]/g, '').trim();
            var value = (_em$querySelector5 = em.querySelector('div.inline-twister-dim-title-value-truncate-expanded span.inline-twister-dim-title-value')) === null || _em$querySelector5 === void 0 ? void 0 : _em$querySelector5.innerHTML;
            if (value === undefined || value === '') {
              var _em$querySelector6;
              var options = (_em$querySelector6 = em.querySelector('select')) === null || _em$querySelector6 === void 0 ? void 0 : _em$querySelector6.querySelectorAll('option');
              // console.log(options);
              if (options) {
                var _iterator2 = _createForOfIteratorHelper(options),
                  _step2;
                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var option = _step2.value;
                    // console.log(option);
                    if (option && option.getAttribute('selected') !== null) {
                      value = option.innerHTML.trim();
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }
              // console.log(value);
            }
            return {
              name: 'product_options',
              data: {
                label: label,
                value: value.trim()
              }
            };
          },
          children: [{
            selector: 'div.inline-twister-dim-title-value-truncate-expanded',
            children: [{
              selector: 'span.a-size-base.a-color-secondary',
              add_text: true
            }, {
              selector: 'span.inline-twister-dim-title-value',
              add_text: true
            }]
          }, {
            selector: 'select',
            add_text: true,
            // clickable: true,
            name: 'drop_down_list'
          }, {
            selector: 'ul',
            name: 'button_list',
            children: [{
              selector: 'li span:not(.aok-hidden) input',
              add_text: true,
              clickable: true,
              name: 'from_text',
              text_js: function text_js(element) {
                var textEm = element.nextElementSibling;
                var text = '';
                if (textEm.innerText.trim()) {
                  text += textEm.innerText.trim();
                  var imgChild = textEm.querySelector('img');
                  if (imgChild && imgChild.alt) {
                    text += ' ';
                    text += imgChild.alt;
                  }
                } else {
                  var _imgChild2 = textEm.querySelector('img');
                  if (_imgChild2 && _imgChild2.alt) {
                    text += _imgChild2.alt;
                  }
                }
                return text.trim();
              }
            }]
          }]
        }, {
          selector: 'div.inline-twister-singleton-header',
          text_selector: 'span.a-size-base.a-color-secondary',
          name: 'from_text',
          children: [{
            selector: 'span.a-size-base.a-color-secondary',
            add_text: true
          }, {
            selector: 'span.inline-twister-dim-title-value-truncate',
            add_text: true
          }],
          generate_metadata: function generate_metadata(em) {
            var _em$querySelector7, _em$querySelector8;
            var label = (_em$querySelector7 = em.querySelector('span.a-size-base.a-color-secondary')) === null || _em$querySelector7 === void 0 ? void 0 : _em$querySelector7.innerHTML.replace(/[:\n]/g, '').trim();
            var value = (_em$querySelector8 = em.querySelector('span.inline-twister-dim-title-value-truncate')) === null || _em$querySelector8 === void 0 ? void 0 : _em$querySelector8.innerHTML;
            return {
              name: 'product_options',
              data: {
                label: label,
                value: value.trim()
              }
            };
          }
        }]
      }, {
        selector: '#productFactsDesktopExpander ul.a-unordered-list, #featurebullets_feature_div ul.a-unordered-list',
        add_text: true,
        name: 'about_this_item',
        text_format: 'About this item: ',
        children: [{
          selector: 'li',
          add_text: true
        }],
        generate_metadata: function generate_metadata(em) {
          var _em$innerText6;
          return {
            name: 'product_details',
            data: {
              bullet_list: (em === null || em === void 0 || (_em$innerText6 = em.innerText) === null || _em$innerText6 === void 0 ? void 0 : _em$innerText6.replace(/\n/g, ' ')) || ''
            }
          };
        }
      }]
    }, {
      selector: '#buybox:has(div.a-tab-container):not(:has(#partialState_buybox_desktop))',
      name: 'buybox',
      children: [{
        selector: '#tab_heading_desktop_buybox_group_1 a',
        name: 'deliver_tab',
        clickable: true,
        add_text: true
      }, {
        selector: '#tab_heading_desktop_buybox_group_2 a',
        name: 'pick_up_tab',
        clickable: true,
        add_text: true
      }, {
        selector: '#tab_desktop_buybox_group_1',
        name: 'delivery',
        add_text: true,
        text_format: 'Delivery',
        children: [buy_box_with_accordion, buy_box_without_accordion_delivery]
      }, {
        selector: '#tab_desktop_buybox_group_2',
        name: 'pick_up',
        add_text: true,
        text_format: 'Pick Up',
        children: [buy_box_without_accordion_pick_up]
      }],
      generate_metadata: function generate_metadata(em) {
        var asinEm = em.querySelector('input#ASIN');
        return {
          name: 'product_details',
          data: {
            asin: (asinEm === null || asinEm === void 0 ? void 0 : asinEm.value) || ''
          }
        };
      }
    }, {
      selector: '#buybox:not(:has(div.a-tab-container)):not(:has(#partialState_buybox_desktop))',
      name: 'buybox',
      children: [buy_box_with_accordion, buy_box_without_accordion_delivery],
      generate_metadata: function generate_metadata(em) {
        var asinEm = em.querySelector('input#ASIN');
        return {
          name: 'product_details',
          data: {
            asin: (asinEm === null || asinEm === void 0 ? void 0 : asinEm.value) || ''
          }
        };
      }
    }, {
      selector: '#partialState_buybox_desktop',
      children: [{
        selector: '#partialStateBuybox div.a-section.a-text-center.a-spacing-small',
        add_text: true
      }],
      generate_metadata: function generate_metadata(em) {
        var asinEm = em.querySelector('input#ASIN');
        return {
          name: 'product_details',
          data: {
            asin: (asinEm === null || asinEm === void 0 ? void 0 : asinEm.value) || ''
          }
        };
      }
    }, {
      selector: '#attach-warranty-pane #attach-warranty-display',
      name: 'warranty-box',
      children: [{
        selector: 'div.attach-warranty-box',
        text_selector: '#attach-warranty-card-display-title',
        name: 'from_text',
        children: [{
          selector: 'i.a-icon-checkbox',
          name: 'select',
          clickable: true
        }, {
          selector: '#attach-warranty-card-display-title',
          add_text: true
        }, {
          selector: '#attach-warranty-card-price',
          add_text: true
        }]
      }, {
        selector: 'div.a-section.attach-warranty-button-row',
        children: [{
          selector: "input[aria-labelledby='attachSiAddCoverage-announce']",
          name: 'add_protection',
          clickable: true,
          add_text: true,
          text_format: 'Add Protection'
        }, {
          selector: "input[aria-labelledby='attachSiNoCoverage-announce']",
          name: 'no_protection',
          clickable: true,
          add_text: true,
          text_format: 'No Thanks'
        }]
      }]
    }]
  }]
}, {
  match: '/cart/add-to-cart',
  match_method: 'url',
  selector: 'html',
  match_with_ref: true,
  children: [{
    selector: 'head',
    children: [{
      selector: 'title',
      add_text: true
    }]
  }, {
    selector: 'body',
    children: [nav, {
      selector: '#sw-atc-buy-box',
      children: [{
        selector: '#sw-subtotal',
        children: [{
          selector: '#sw-subtotal-item-count',
          add_text: true
        }, {
          selector: "span[aria-hidden='true']",
          add_text: true
        }]
      }, {
        selector: '#sc-buy-box-ptc-button span.a-button-inner input',
        add_text: true,
        text_selector: 'div.sc-without-multicart',
        clickable: true,
        name: 'check_out'
      }, {
        selector: '#sw-gtc a',
        add_text: true,
        clickable: true,
        name: 'go_to_cart'
      }]
    }]
  }]
}, {
  match: '/cart/smart-wagon',
  match_method: 'url',
  selector: 'html',
  children: [{
    selector: 'head',
    children: [{
      selector: 'title',
      add_text: true
    }]
  }, {
    selector: 'body',
    children: [nav, {
      selector: '#sw-atc-buy-box',
      children: [{
        selector: '#sw-subtotal',
        children: [{
          selector: '#sw-subtotal-item-count',
          add_text: true
        }, {
          selector: "span[aria-hidden='true']",
          add_text: true
        }]
      }, {
        selector: '#sc-buy-box-ptc-button span.a-button-inner input',
        add_text: true,
        text_selector: 'div.sc-without-multicart',
        clickable: true,
        name: 'check_out'
      }, {
        selector: '#sw-gtc a',
        add_text: true,
        clickable: true,
        name: 'go_to_cart'
      }]
    }]
  }]
}, {
  match: '/gp/cart/view.html',
  match_method: 'url',
  selector: 'html',
  children: [{
    selector: 'head',
    children: [{
      selector: 'title',
      add_text: true
    }]
  }, {
    selector: 'body',
    children: cart
  }]
}, {
  match: '/cart',
  match_method: 'url',
  match_with_ref: true,
  selector: 'html',
  children: [{
    selector: 'head',
    children: [{
      selector: 'title',
      add_text: true
    }]
  }, {
    selector: 'body',
    children: cart
  }]
}, {
  match: '/cart/localmarket',
  match_method: 'url',
  match_with_ref: true,
  selector: 'html',
  children: [{
    selector: 'head',
    children: [{
      selector: 'title',
      add_text: true
    }]
  }, {
    selector: 'body',
    children: fresh_cart
  }]
}, {
  match: '/ap/signin',
  match_method: 'url',
  terminate: function terminate() {
    return !!arguments[0];
  },
  terminate_callback: function terminate_callback() {
    return arguments[0];
  },
  selector: 'html'
}, {
  match: '/gp/buy/spc/handlers/display.html',
  match_method: 'url',
  terminate: function terminate() {
    return !!arguments[0];
  },
  terminate_callback: function terminate_callback() {
    return arguments[0];
  },
  selector: 'html'
}, {
  match: '/gp/buyagain',
  match_method: 'url',
  match_with_ref: true,
  selector: 'html',
  children: [{
    selector: 'head',
    children: [{
      selector: 'title',
      add_text: true
    }]
  }, {
    selector: 'body',
    children: buy_again
  }]
}];

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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function processElement(element, recipe) {
  var parentName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var nthChild = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  // console.log("processing element: ", element, recipe);
  // Create a new element using the DOM API
  var tagName = recipe.tag_name || element.tagName.toLowerCase();
  // Handle underscored tags
  if (tagName.endsWith('_')) {
    tagName = tagName.slice(0, -1);
  }
  var newElement = document.createElement(tagName);

  // Extract text content based on the recipe
  var elementText = '';
  if (recipe.text_selector) {
    var textElement = element.querySelector(recipe.text_selector);
    if (textElement) {
      elementText = textElement.innerText || textElement.textContent || '';
    }
  } else if (recipe.text_js) {
    elementText = recipe.text_js(element);
    if (elementText === '' || elementText === undefined) {
      // console.log('text js does not detect text for element ', element)
    }
  } else if (recipe.add_text) {
    elementText = element.innerText || element.textContent || '';
  }
  elementText = elementText.replace(/\s+/g, ' ').trim();
  if (recipe.text_format) {
    elementText = recipe.text_format.replace('{}', elementText);
  } else if (recipe.text_format) {
    elementText = recipe.text_format;
  }
  if (elementText && recipe.add_text) {
    newElement.textContent = elementText;
  }

  // Build the node attributes
  var elementName = '';
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
      } else {
        elementName += elementText.toLowerCase().replace(/[^\w]+/g, '_');
      }
    } else if (recipe.name === 'from_nth_child') {
      elementName = parentName ? parentName + '.' : '';
      elementName += nthChild.toString();
    } else {
      elementName = parentName ? parentName + '.' : '';
      elementName += recipe.name;
    }
    newElement.setAttribute('name', elementName);
    parentName = elementName;
  }
  if (recipe.generate_metadata) {
    var metaobj = recipe.generate_metadata(element);
    var metadata = JSON.stringify(metaobj.data);
    var metaname = metaobj.name;
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
    var click_element;
    if (recipe.click_selector) {
      click_element = element.querySelector(recipe.click_selector);
    } else {
      click_element = element;
    }
    if (click_element) {
      click_element.setAttribute('data-clickable-id', elementName);
    } else {
      // console.log('click-element not found', element, recipe)
    }
    if (!window.clickable_recipes) {
      window.clickable_recipes = {};
    }
    window.clickable_recipes[elementName] = recipe;
  }
  if (tagName === 'input') {
    var inputType = element.getAttribute('type');
    if (['text', 'number'].includes(inputType)) {
      newElement.setAttribute('value', element.value);
      element.setAttribute('data-input-id', elementName);
    } else if (inputType === 'checkbox') {
      newElement.setAttribute('checked', element.checked.toString());
    } else if (inputType === 'radio') {
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
    var _element$parentElemen;
    // Tag the select element with data-select-id
    element.setAttribute('data-select-id', elementName);
    var selectId = element.getAttribute('id');
    var nameId = element.getAttribute('name');
    var tag = (_element$parentElemen = element.parentElement) === null || _element$parentElemen === void 0 ? void 0 : _element$parentElemen.querySelector('span.a-button-dropdown span.a-button-text');
    var newTag = document.createElement('span');
    newTag.textContent = tag.textContent;
    var _tagName = elementName + '.open_drop_down_list';
    newTag.setAttribute('name', _tagName);
    tag.setAttribute('data-clickable-id', _tagName); // Tag actual DOM option element

    newElement.appendChild(newTag);
    var options = document.querySelectorAll('a[id^="' + selectId + '"]');
    options.forEach(/*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(option) {
        var optionValue, optionName, newOption;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              optionValue = option.textContent.trim();
              optionName = elementName + '.' + optionValue;
              newOption = document.createElement('a');
              newOption.textContent = option.textContent;
              newOption.setAttribute('value', optionValue);
              newOption.setAttribute('name', optionName);
              newOption.setAttribute('selected', option.getAttribute('aria-selected'));
              option.setAttribute('data-clickable-id', optionName); // Tag actual DOM option element
              newElement.appendChild(newOption);
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  // Copy specified attributes
  var attrsToCopy = ['alt', 'title', 'type', 'value', 'role', 'aria-label', 'aria-hidden', 'aria-selected'];
  attrsToCopy.forEach(function (attr) {
    var value = element.getAttribute(attr);
    if (value) {
      newElement.setAttribute(attr, value);
    }
  });
  if (recipe.keep_attr) {
    // console.log("attributes to keep: ", recipe.keep_attr);
    var _iterator = _createForOfIteratorHelper(recipe.keep_attr),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var key = _step.value;
        var value = element.getAttribute(key);
        // console.log(key, value)
        if (value) {
          newElement.setAttribute(key, value);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
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
    for (var _key in recipe.override_attr) {
      newElement.setAttribute(_key, recipe.override_attr[_key](element));
    }
  }

  // Process children
  if (recipe.children && recipe.children.length > 0) {
    var _iterator2 = _createForOfIteratorHelper(recipe.children),
      _step2;
    try {
      var _loop = function _loop() {
        var childRecipe = _step2.value;
        var selector = childRecipe.direct_child ? ":scope > ".concat(childRecipe.selector) : childRecipe.selector;
        var childElements;
        if (childRecipe.use_root) {
          childElements = document.querySelectorAll(selector);
          console.log('use root for ', childElements);
        } else childElements = element.querySelectorAll(selector);
        childElements.forEach(function (childElement, index) {
          var childNode = processElement(childElement, childRecipe, parentName, index);
          newElement.appendChild(childNode);
          if (childRecipe.insert_split_marker) {
            var every = childRecipe.insert_split_marker_every || 1;
            if (index % every == 0) {
              var splitMarker = document.createElement('split-marker');
              newElement.appendChild(splitMarker);
              // console.log("inserting split marker 1");
            }
          }
          if (childRecipe.insert_split_marker) {
            // console.log("inserting split marker 2");
            var _splitMarker = document.createElement('split-marker');
            newElement.appendChild(_splitMarker);
          } else {
            // console.log('no split marker')
          }
        });
      };
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  // Handle empty messages
  if (recipe.empty_message && newElement.children.length === 0) {
    var emptyTextNode = document.createTextNode(recipe.empty_message);
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

function isFromPopup(element) {
  return element.closest('#reason-modal') !== null;
}
function update_icon(_x) {
  return _update_icon.apply(this, arguments);
}
function _update_icon() {
  _update_icon = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          console.log('update_icon', url);
          _context.next = 3;
          return shouldExclude(url);
        case 3:
          if (_context.sent) {
            _context.next = 8;
            break;
          }
          console.log('active icon');
          chrome.action.setIcon({
            path: '../icon.png'
          });
          _context.next = 10;
          break;
        case 8:
          console.log('inactive icon');
          chrome.action.setIcon({
            path: '../inactive_icon.png'
          });
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _update_icon.apply(this, arguments);
}
function findPageMeta() {
  var all_element_with_meta_data = document.querySelectorAll('[data-element-meta-name]');
  var groupedResult = {};
  all_element_with_meta_data.forEach(function (element) {
    var metaName = element.getAttribute('data-element-meta-name');
    var metaData = element.getAttribute('data-element-meta-data');
    if (!groupedResult[metaName]) {
      groupedResult[metaName] = [];
    }
    groupedResult[metaName].push(JSON.parse(metaData));
  });
  return groupedResult;
}
function getClickableElementsInViewport() {
  // Select all potential clickable elements
  var documentCopy = document.cloneNode(true);
  var allElements = documentCopy.querySelectorAll('a, button, [onclick], input[type="button"], input[type="submit"]');

  // Check if each element is in the viewport and add marker
  allElements.forEach(function (element) {
    var rect = element.getBoundingClientRect();
    if (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)) {
      // Add marker attribute to the element
      element.setAttribute('visible-clickable-element-marker', 'true');
    }
  });
  return documentCopy;
}

// Add cleanup function to remove markers when needed
function removeClickableMarkers() {
  document.querySelectorAll('[visible-clickable-element-marker]').forEach(function (element) {
    element.removeAttribute('visible-clickable-element-marker');
  });
}
function shouldExclude(_x2) {
  return _shouldExclude.apply(this, arguments);
}
function _shouldExclude() {
  _shouldExclude = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url) {
    var ignoreUserId,
      result,
      userId,
      _args2 = arguments;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          ignoreUserId = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : false;
          if (ignoreUserId) {
            _context2.next = 16;
            break;
          }
          if (!chrome.storage) {
            _context2.next = 11;
            break;
          }
          _context2.next = 5;
          return chrome.storage.local.get('userId');
        case 5:
          result = _context2.sent;
          if (result.userId) {
            _context2.next = 9;
            break;
          }
          console.log('no user id');
          // if there is no user id, we should not be recording anything
          return _context2.abrupt("return", true);
        case 9:
          _context2.next = 16;
          break;
        case 11:
          _context2.next = 13;
          return new Promise(function (resolve) {
            var _handleMessage = function handleMessage(event) {
              if (event.data.type === 'GET_USER_ID_RESPONSE') {
                window.removeEventListener('message', _handleMessage);
                resolve(event.data.userId);
              }
            };
            window.addEventListener('message', _handleMessage);
            window.postMessage({
              type: 'GET_USER_ID'
            }, '*');
          });
        case 13:
          userId = _context2.sent;
          if (userId) {
            _context2.next = 16;
            break;
          }
          return _context2.abrupt("return", true);
        case 16:
          if (url) {
            _context2.next = 18;
            break;
          }
          return _context2.abrupt("return", true);
        case 18:
          return _context2.abrupt("return", !_config__WEBPACK_IMPORTED_MODULE_0__.url_includes.some(function (includeUrl) {
            return url.includes(includeUrl);
          }) || _config__WEBPACK_IMPORTED_MODULE_0__.filter_url.some(function (excludeUrl) {
            return url.includes(excludeUrl);
          }));
        case 19:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _shouldExclude.apply(this, arguments);
}
function generateHtmlSnapshotId(timestamp, uuid) {
  var url = window.location.href;
  return "html_".concat(hashCode(url), "_").concat(timestamp, "_").concat(uuid);
}
function hashCode(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  console.log('Hash value before return:', hash);
  return hash.toString();
}
function check_user_id(_x3) {
  return _check_user_id.apply(this, arguments);
}
function _check_user_id() {
  _check_user_id = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(user_id) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_0__.check_user_id_url, "?user_id=").concat(user_id), {
            method: 'GET'
          });
        case 3:
          response = _context3.sent;
          _context3.next = 6;
          return response.json();
        case 6:
          data = _context3.sent;
          if (!response.ok) {
            _context3.next = 11;
            break;
          }
          return _context3.abrupt("return", 'success');
        case 11:
          return _context3.abrupt("return", data || 'Unknown error');
        case 12:
          _context3.next = 17;
          break;
        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](0);
          console.log("Error: ".concat(_context3.t0.message));
        case 17:
          return _context3.abrupt("return", 'Unknown error');
        case 18:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 14]]);
  }));
  return _check_user_id.apply(this, arguments);
}


function selectRecipe() {
  var parsedUrl = new URL(window.location.href);
  var path = parsedUrl.pathname;
  path = path !== '/' ? path.replace(/\/+$/, '') : path;
  var _iterator = _createForOfIteratorHelper(_recipe_new__WEBPACK_IMPORTED_MODULE_1__.recipes),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var recipe = _step.value;
      var matchMethod = recipe.match_method || 'text';
      if (matchMethod === 'text') {
        try {
          var _element$textContent$, _element$textContent;
          // Execute script in tab to check for matching element
          var element = document.querySelector(recipe.match);
          var hasMatch = element && (!recipe.match_text || ((_element$textContent$ = (_element$textContent = element.textContent) === null || _element$textContent === void 0 ? void 0 : _element$textContent.toLowerCase().includes(recipe.match_text.toLowerCase())) !== null && _element$textContent$ !== void 0 ? _element$textContent$ : false));
          if (hasMatch) {
            console.log('matched with recipe ', recipe.match);
            return recipe;
          }
        } catch (error) {
          console.error('Error checking text match:', error);
        }
      } else if (matchMethod === 'url') {
        if (recipe.match === path) {
          console.log('matched with recipe ', recipe.match);
          return recipe;
        } else if (recipe.match_with_ref && (path.startsWith(recipe.match + '/ref=') || path.startsWith(recipe.match + 'ref='))) {
          console.log('matched with recipe ', recipe.match);
          return recipe;
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  throw new Error("No matching recipe found for path: ".concat(path));
}
function processRecipe() {
  console.log('start process recipe');
  try {
    var recipe = selectRecipe();
    var rootElement = document.querySelector(recipe.selector);
    if (rootElement) {
      var newRoot = (0,_element_processor__WEBPACK_IMPORTED_MODULE_2__.processElement)(rootElement, recipe);
      var simplifiedHTML = newRoot.outerHTML;
      return simplifiedHTML;
    }
  } catch (error) {
    console.error('Error processing recipe:', error);
  }
}

// Replace the simple question with a more detailed one based on event type
function getCustomQuestion(eventType, data) {
  var _data$dataSemanticI, _data$dataSemanticI2, _data$dataSemanticI3, _data$dataSemanticI4, _data$target$classNam, _data$dataSemanticI5, _data$dataSemanticI6, _data$dataSemanticI7, _data$dataSemanticI8, _data$dataSemanticI9;
  var question = '';
  var placeholder = 'Enter your reason here...';
  switch (eventType) {
    case 'click_a':
    case 'click_b':
    case 'click_c':
      // Check if it's a specific type of click
      if (data['data-semantic-id'] === 'buybox.delivery.subscribe_save_.purchase_form.set_up_now' || data.target.innerText === 'Set Up Now') {
        question = 'You <span style="background-color: yellow;">clicked</span> on the set up now button. What makes you choose to subscribe to this product?';
        placeholder = 'I choose to subscribe because...';
      } else if (data['data-semantic-id'] === 'buybox.delivery.one_time_purchase_.purchase_form.buy_now' || data['data-semantic-id'] === 'buybox.delivery.purchase_form.buy' || data.target.id === 'buy-now-button') {
        question = 'You <span style="background-color: yellow;">clicked</span> on the buy now button. What do you like about this particular product?';
        placeholder = 'I am buying this product because...';
      } else if ((_data$dataSemanticI = data['data-semantic-id']) !== null && _data$dataSemanticI !== void 0 && _data$dataSemanticI.startsWith('search_results.') || (_data$dataSemanticI2 = data['data-semantic-id']) !== null && _data$dataSemanticI2 !== void 0 && _data$dataSemanticI2.startsWith('product_list.') || (_data$dataSemanticI3 = data['data-semantic-id']) !== null && _data$dataSemanticI3 !== void 0 && _data$dataSemanticI3.startsWith('active_item_list.') && (_data$dataSemanticI4 = data['data-semantic-id']) !== null && _data$dataSemanticI4 !== void 0 && _data$dataSemanticI4.endsWith('.product_detail') || (_data$target$classNam = data.target.className) !== null && _data$target$classNam !== void 0 && _data$target$classNam.includes('sc-product-link')) {
        question = 'You <span style="background-color: yellow;">clicked</span> on this product. What caught your attention compared to the other options you saw?';
        placeholder = 'I like this product becauseß...';
      } else if ((_data$dataSemanticI5 = data['data-semantic-id']) !== null && _data$dataSemanticI5 !== void 0 && _data$dataSemanticI5.endsWith('add_to_cart') || data.target.id === 'add-to-cart-button' || data.target.name === 'submit.addToCart' || data.target.innerText === 'Add to Cart') {
        question = 'You <span style="background-color: yellow;">clicked</span> on the add to cart button. What makes you decide to add this item to your cart?';
        placeholder = 'I add this item to my cart because...';
      } else if (data['data-semantic-id'] === 'nav_bar.search_button') {
        question = 'You <span style="background-color: yellow;">clicked</span> on the search button. What are you searching for?';
        placeholder = 'I want to find ...';
      } else if ((_data$dataSemanticI6 = data['data-semantic-id']) !== null && _data$dataSemanticI6 !== void 0 && _data$dataSemanticI6.startsWith('refinements.') || (_data$dataSemanticI7 = data['data-semantic-id']) !== null && _data$dataSemanticI7 !== void 0 && _data$dataSemanticI7.startsWith('filters.')) {
        question = 'You <span style="background-color: yellow;">clicked</span> on this filter. What are you hoping to find with this filter?';
        placeholder = 'I want to find ...';
      } else if ((_data$dataSemanticI8 = data['data-semantic-id']) !== null && _data$dataSemanticI8 !== void 0 && _data$dataSemanticI8.startsWith('product_options.')) {
        question = 'You <span style="background-color: yellow;">clicked</span> on this product option. What do you like about this product option?';
        if (data['element-meta-name'] === 'product_options' && data['element-meta-data'] !== '') {
          question = "You <span style=\"background-color: yellow;\">clicked</span> on ".concat(data['element-meta-data']['value'], ". What do you like about this product option?");
        }
        placeholder = 'I like this product option because...ß';
      } else if ((_data$dataSemanticI9 = data['data-semantic-id']) !== null && _data$dataSemanticI9 !== void 0 && _data$dataSemanticI9.endsWith('check_out')) {
        question = 'You <span style="background-color: yellow;">clicked</span> checkout button. What makes you choose to checkout?';
        placeholder = 'I choose to checkout because...';
      } else {
        question = 'You <span style="background-color: yellow;">clicked</span> on this element. Could you share what you were trying to do or find?';
        placeholder = 'Enter your reason here...';
      }
      break;
    case 'scroll':
      question = 'You <span style="background-color: yellow;">scrolled</span> on this page. What information are you looking for?';
      placeholder = 'I want to find ...';
      break;
    case 'input':
      question = 'You <span style="background-color: yellow;">typed</span> in this input field. What are you searching for?';
      placeholder = 'I want to find ...';
      break;
    case 'navigation':
      if (data.navigationType === 'back') {
        question = 'Why did you decide to <span style="background-color: yellow;">go back</span> to the previous page?';
        placeholder = "I'm back because...";
      } else if (data.navigationType === 'forward') {
        question = 'Why did you decide to <span style="background-color: yellow;">return</span> to this page ?';
        placeholder = 'I want to find ...';
      }
      question = "What is the reason for this <span style=\"background-color: yellow;\">".concat(data.navigationType, " navigation</span>?");
      placeholder = 'Enter your reason here...';
      break;
    case 'tabActivate':
      question = "Why did you <span style=\"background-color: yellow;\">switch to this tab</span>?";
      placeholder = 'I switched to this tab because...';
      break;
    default:
      question = "What is the reason for the ".concat(eventType, " action?");
      placeholder = 'Enter your reason here...';
      break;
  }
  return {
    question: question,
    placeholder: placeholder
  };
}
function isValidReason(reason) {
  if (!reason || reason.trim().length === 0) {
    return false; // Empty input
  }
  if (reason.trim().length < 2 || reason.length < 5) {
    return false; // Too short to be meaningful, at least 5 characters and 2 words
  }
  // Check for repetitive or meaningless input (e.g., "aaa","!!!")
  var meaninglessPatterns = [/^(.)\1{3,}$/, /^[^a-zA-Z0-9]+$/];
  for (var _i = 0, _meaninglessPatterns = meaninglessPatterns; _i < _meaninglessPatterns.length; _i++) {
    var pattern = _meaninglessPatterns[_i];
    if (pattern.test(reason.toLowerCase().replace(/\s+/g, ''))) {
      return false;
    }
  }
  return true;
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
/*!*******************************!*\
  !*** ./src/content_script.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/util */ "./src/utils/util.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/config.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



function captureScreenshot(_x, _x2) {
  return _captureScreenshot.apply(this, arguments);
}
function _captureScreenshot() {
  _captureScreenshot = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(timestamp, uuid) {
    var response;
    return _regeneratorRuntime().wrap(function _callee8$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return chrome.runtime.sendMessage({
            action: 'captureScreenshot',
            timestamp: timestamp,
            uuid: uuid
          });
        case 3:
          response = _context9.sent;
          if (response.success) {
            _context9.next = 6;
            break;
          }
          throw new Error(response.message || 'Screenshot capture failed');
        case 6:
          window.postMessage({
            type: 'SCREENSHOT_COMPLETE',
            timestamp: timestamp,
            success: true
          }, '*');
          _context9.next = 13;
          break;
        case 9:
          _context9.prev = 9;
          _context9.t0 = _context9["catch"](0);
          console.error('Error capturing screenshot in content script:', _context9.t0);
          window.postMessage({
            type: 'SCREENSHOT_COMPLETE',
            timestamp: timestamp,
            success: false,
            error: _context9.t0.message
          }, '*');
        case 13:
        case "end":
          return _context9.stop();
      }
    }, _callee8, null, [[0, 9]]);
  }));
  return _captureScreenshot.apply(this, arguments);
}
window.addEventListener('message', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
    var result, userId, dataForBackground, response2;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(event.source !== window)) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return");
        case 2:
          if (!(event.data.type && event.data.type === 'GET_USER_ID')) {
            _context.next = 8;
            break;
          }
          _context.next = 5;
          return chrome.storage.local.get('userId');
        case 5:
          result = _context.sent;
          userId = result.userId;
          window.postMessage({
            type: 'GET_USER_ID_RESPONSE',
            userId: userId
          }, '*');
        case 8:
          if (!(event.data.type && event.data.type === 'CAPTURE_SCREENSHOT')) {
            _context.next = 11;
            break;
          }
          _context.next = 11;
          return captureScreenshot(event.data.timestamp, event.data.uuid);
        case 11:
          if (!(event.data.type && event.data.type === 'SAVE_INTERACTION_DATA')) {
            _context.next = 26;
            break;
          }
          _context.prev = 12;
          dataForBackground = _objectSpread({}, event.data.data);
          _context.next = 16;
          return chrome.runtime.sendMessage({
            action: 'saveData',
            data: dataForBackground
          });
        case 16:
          response2 = _context.sent;
          if (response2.success) {
            _context.next = 19;
            break;
          }
          throw new Error(response2.message || 'interaction capture failed');
        case 19:
          window.postMessage({
            type: 'INTERACTION_COMPLETE',
            timestamp: event.data.data.timestamp,
            success: true
          }, '*');
          _context.next = 26;
          break;
        case 22:
          _context.prev = 22;
          _context.t0 = _context["catch"](12);
          console.error('Error saving interaction data:', _context.t0);
          window.postMessage({
            type: 'INTERACTION_COMPLETE',
            success: false,
            error: _context.t0.message,
            timestamp: event.data.data.timestamp
          }, '*');
        case 26:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[12, 22]]);
  }));
  return function (_x3) {
    return _ref.apply(this, arguments);
  };
}());
var work = function work() {
  // Define interfaces for Recipe and OrderDetail

  // Extend the Window interface to include custom properties

  document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded event triggered');
    (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.processRecipe)();
  });

  // Function to capture interactions
  function captureInteraction(_x4, _x5, _x6, _x7, _x8) {
    return _captureInteraction.apply(this, arguments);
  } // Variables to track scroll events
  function _captureInteraction() {
    _captureInteraction = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(eventType, target, timestamp, uuid, scrollDistance) {
      var currentSnapshotId, simplifiedHTML, markedDoc, pageMeta, data;
      return _regeneratorRuntime().wrap(function _callee5$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            // Generate new HTML snapshot ID
            currentSnapshotId = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.generateHtmlSnapshotId)(timestamp, uuid);
            simplifiedHTML = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.processRecipe)();
            markedDoc = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.getClickableElementsInViewport)();
            pageMeta = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.findPageMeta)();
            data = {
              uuid: uuid,
              eventType: eventType,
              timestamp: timestamp,
              htmlSnapshotId: currentSnapshotId,
              // Use the new snapshot ID
              pageMeta: pageMeta || '',
              htmlContent: markedDoc.documentElement.outerHTML,
              simplifiedHTML: simplifiedHTML
            };
            if (eventType === 'scroll') {
              data['scrollDistance'] = scrollDistance;
              data['target'] = target;
            }
            if (eventType === 'input') {
              data['input-values'] = (target === null || target === void 0 ? void 0 : target.value) || '';
              data['input-id'] = (target === null || target === void 0 ? void 0 : target.id) || '';
              data['data-element-meta-name'] = target.getAttribute('data-element-meta-name') || '';
              data['data-element-meta-data'] = target.getAttribute('data-element-meta-data') || '';
            }
            _context6.next = 10;
            return chrome.runtime.sendMessage({
              action: 'saveData',
              data: data
            });
          case 10:
            _context6.next = 15;
            break;
          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](0);
            console.error("Error during ".concat(eventType, " event handling:"), _context6.t0);
          case 15:
          case "end":
            return _context6.stop();
        }
      }, _callee5, null, [[0, 12]]);
    }));
    return _captureInteraction.apply(this, arguments);
  }
  var isScrolling = false;
  var scrollTimeout;
  var scrollStartTop = window.scrollY || document.documentElement.scrollTop;
  var accumulatedScrollDistance = 0;

  // Function to handle the first scroll event in a scroll sequence
  function handleFirstScroll(_x9, _x10) {
    return _handleFirstScroll.apply(this, arguments);
  } // Function to handle when scrolling stops (no scroll events within the threshold)
  function _handleFirstScroll() {
    _handleFirstScroll = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(scrollUuid, scrollTimestamp) {
      return _regeneratorRuntime().wrap(function _callee6$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            try {
              console.log('First scroll event');
              captureScreenshot(scrollTimestamp, scrollUuid);
              (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.processRecipe)();
            } catch (error) {
              console.error('Error during first scroll handling:', error);
            }
          case 1:
          case "end":
            return _context7.stop();
        }
      }, _callee6);
    }));
    return _handleFirstScroll.apply(this, arguments);
  }
  function handleScrollStop(_x11, _x12) {
    return _handleScrollStop.apply(this, arguments);
  }
  function _handleScrollStop() {
    _handleScrollStop = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(scrollUuid, scrollTimestamp) {
      var currentScrollTop;
      return _regeneratorRuntime().wrap(function _callee7$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            console.log('scroll stop uuid', scrollUuid);
            currentScrollTop = window.scrollY || document.documentElement.scrollTop;
            accumulatedScrollDistance += currentScrollTop - scrollStartTop;
            if (!(accumulatedScrollDistance !== 0)) {
              _context8.next = 9;
              break;
            }
            _context8.next = 7;
            return captureInteraction('scroll', window.location.href, scrollTimestamp, scrollUuid, accumulatedScrollDistance);
          case 7:
            // Reset accumulated scroll distance
            accumulatedScrollDistance = 0;
            scrollStartTop = currentScrollTop;
          case 9:
            isScrolling = false;
            _context8.next = 15;
            break;
          case 12:
            _context8.prev = 12;
            _context8.t0 = _context8["catch"](0);
            console.error('Error during scroll stop handling:', _context8.t0);
          case 15:
          case "end":
            return _context8.stop();
        }
      }, _callee7, null, [[0, 12]]);
    }));
    return _handleScrollStop.apply(this, arguments);
  }
  var scrollUuid = '';
  var scrollTimestamp = '';
  // Event listener for scroll events
  document.addEventListener('scroll', /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            console.log('scroll event');
            if (!document.getElementById('reason-modal')) {
              _context2.next = 3;
              break;
            }
            return _context2.abrupt("return");
          case 3:
            if (!(event.target !== window && event.target !== document && event.target !== document.documentElement)) {
              _context2.next = 6;
              break;
            }
            console.log('Scroll event ignored from a nested scrollable container');
            return _context2.abrupt("return");
          case 6:
            if (isScrolling) {
              _context2.next = 13;
              break;
            }
            isScrolling = true;
            scrollStartTop = window.scrollY || document.documentElement.scrollTop;
            scrollUuid = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
            scrollTimestamp = new Date().toISOString();
            _context2.next = 13;
            return handleFirstScroll(scrollUuid, scrollTimestamp);
          case 13:
            // Clear the existing timeout and set a new one
            window.clearTimeout(scrollTimeout);
            scrollTimeout = window.setTimeout(function () {
              return handleScrollStop(scrollUuid, scrollTimestamp);
            }, _config__WEBPACK_IMPORTED_MODULE_1__.scroll_threshold); // Threshold of 300ms
          case 15:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x13) {
      return _ref2.apply(this, arguments);
    };
  }());

  // document.addEventListener(
  //   'blur',
  //   async (event) => {
  //     const target = event.target as HTMLElement
  //     if (isFromPopup(target)) return
  //     if (
  //       target &&
  //       ((target.tagName === 'INPUT' && (target as HTMLInputElement).type === 'text') ||
  //         target.tagName === 'TEXTAREA')
  //     ) {
  //       const timestamp = new Date().toISOString()
  //       const uuid = uuidv4()
  //       await captureScreenshot(timestamp, uuid)
  //       await captureInteraction('input', target, timestamp, uuid)
  //     }
  //   },
  //   true
  // )

  document.addEventListener('DOMContentLoaded', function () {
    // Handle all types of order buttons
    var placeOrderButtons = document.querySelectorAll('input[id="placeOrder"], input[id="turbo-checkout-pyo-button"]');
    var buyNowButton = document.querySelector('input[id="buy-now-button"]');
    var setupNowButton = document.querySelector('button[id="rcx-subscribe-submit-button-announce"]');
    var proceedToCheckoutButton = document.querySelector('input[name="proceedToRetailCheckout"]')

    // Handle Buy Now and Set Up Now buttons if present
    ;
    [buyNowButton, setupNowButton].forEach(function (button) {
      if (button) {
        button.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
          var _document$querySelect, _document$querySelect2, _document$querySelect3, productInfo, optionRows;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                productInfo = {
                  title: ((_document$querySelect = document.querySelector('#title')) === null || _document$querySelect === void 0 || (_document$querySelect = _document$querySelect.innerText) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.trim()) || '',
                  price: ((_document$querySelect2 = document.querySelector('span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay')) === null || _document$querySelect2 === void 0 || (_document$querySelect2 = _document$querySelect2.innerText) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.trim()) || '',
                  asin: ((_document$querySelect3 = document.querySelector('input#ASIN')) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.value) || '',
                  options: {}
                }; // Get all option selections
                optionRows = Array.from(document.querySelectorAll('#twister div.a-row:has(label.a-form-label):has(span.selection)'));
                optionRows.forEach(function (row) {
                  var _row$querySelector, _row$querySelector2;
                  var label = ((_row$querySelector = row.querySelector('label.a-form-label')) === null || _row$querySelector === void 0 || (_row$querySelector = _row$querySelector.innerText) === null || _row$querySelector === void 0 ? void 0 : _row$querySelector.replace(': ', '')) || '';
                  var value = ((_row$querySelector2 = row.querySelector('span.selection')) === null || _row$querySelector2 === void 0 ? void 0 : _row$querySelector2.innerText) || '';
                  if (label && value) {
                    ;
                    productInfo.options[label] = value;
                  }
                });
                console.log("".concat(button.id, " clicked - Product Info:"), productInfo);
                _context3.next = 7;
                return chrome.runtime.sendMessage({
                  action: 'saveOrder',
                  data: {
                    timestamp: new Date().toISOString(),
                    name: productInfo.title,
                    price: parseFloat(productInfo.price.replace(/[^0-9.]/g, '')),
                    asin: productInfo.asin,
                    options: productInfo.options
                  }
                });
              case 7:
                _context3.next = 12;
                break;
              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                console.error("Error capturing ".concat(button.id, " product info:"), _context3.t0);
              case 12:
              case "end":
                return _context3.stop();
            }
          }, _callee3, null, [[0, 9]]);
        })));
      }
    });
    if (proceedToCheckoutButton) {
      proceedToCheckoutButton.addEventListener('click', /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(event) {
          var selectedItems, cartItems, _iterator, _step, _loop;
          return _regeneratorRuntime().wrap(function _callee4$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                selectedItems = [];
                cartItems = Array.from(document.querySelectorAll('[id^="sc-active-"]')).filter(function (item) {
                  return item.id !== 'sc-active-cart';
                });
                _iterator = _createForOfIteratorHelper(cartItems);
                _context5.prev = 4;
                _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                  var item, checkbox, productLink, _fullNameElement$text, _href$match, _priceElement$textCon, fullNameElement, name, href, asin, priceElement, price, options, variationElements;
                  return _regeneratorRuntime().wrap(function _loop$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        item = _step.value;
                        checkbox = item.querySelector('input[type="checkbox"]');
                        if (checkbox && checkbox.checked) {
                          productLink = item.querySelector('.sc-item-product-title-cont .sc-product-link');
                          if (productLink) {
                            fullNameElement = productLink.querySelector('.a-truncate-full');
                            name = (fullNameElement === null || fullNameElement === void 0 || (_fullNameElement$text = fullNameElement.textContent) === null || _fullNameElement$text === void 0 ? void 0 : _fullNameElement$text.trim()) || '';
                            href = productLink.getAttribute('href') || '';
                            asin = ((_href$match = href.match(/product\/([A-Z0-9]{10})/)) === null || _href$match === void 0 ? void 0 : _href$match[1]) || '';
                            priceElement = item.querySelector('.sc-item-price-block .a-offscreen');
                            price = priceElement ? parseFloat(((_priceElement$textCon = priceElement.textContent) === null || _priceElement$textCon === void 0 ? void 0 : _priceElement$textCon.replace(/[^0-9.]/g, '')) || '0') : 0;
                            options = {};
                            variationElements = item.querySelectorAll('.sc-product-variation');
                            variationElements.forEach(function (variation) {
                              var _variation$querySelec, _variation$querySelec2;
                              var label = ((_variation$querySelec = variation.querySelector('.a-text-bold')) === null || _variation$querySelec === void 0 || (_variation$querySelec = _variation$querySelec.textContent) === null || _variation$querySelec === void 0 ? void 0 : _variation$querySelec.trim().replace(':', '')) || '';
                              var value = ((_variation$querySelec2 = variation.querySelector('.a-size-small:not(.a-text-bold)')) === null || _variation$querySelec2 === void 0 || (_variation$querySelec2 = _variation$querySelec2.textContent) === null || _variation$querySelec2 === void 0 ? void 0 : _variation$querySelec2.trim()) || '';
                              if (label && value) {
                                options[label] = value;
                              }
                            });
                            selectedItems.push({
                              timestamp: new Date().toISOString(),
                              name: name,
                              asin: asin,
                              price: price,
                              options: options
                            });
                          }
                        }
                      case 3:
                      case "end":
                        return _context4.stop();
                    }
                  }, _loop);
                });
                _iterator.s();
              case 7:
                if ((_step = _iterator.n()).done) {
                  _context5.next = 11;
                  break;
                }
                return _context5.delegateYield(_loop(), "t0", 9);
              case 9:
                _context5.next = 7;
                break;
              case 11:
                _context5.next = 16;
                break;
              case 13:
                _context5.prev = 13;
                _context5.t1 = _context5["catch"](4);
                _iterator.e(_context5.t1);
              case 16:
                _context5.prev = 16;
                _iterator.f();
                return _context5.finish(16);
              case 19:
                if (!(selectedItems.length > 0)) {
                  _context5.next = 22;
                  break;
                }
                _context5.next = 22;
                return chrome.runtime.sendMessage({
                  action: 'saveOrder',
                  data: selectedItems
                });
              case 22:
                _context5.next = 27;
                break;
              case 24:
                _context5.prev = 24;
                _context5.t2 = _context5["catch"](0);
                console.error('Error capturing selected cart items:', _context5.t2);
              case 27:
              case "end":
                return _context5.stop();
            }
          }, _callee4, null, [[0, 24], [4, 13, 16, 19]]);
        }));
        return function (_x14) {
          return _ref4.apply(this, arguments);
        };
      }());
    }
  });
  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log('message', message);
    if (message.action === 'getHTML') {
      var simplifiedHTML = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.processRecipe)();
      var markedDoc = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.getClickableElementsInViewport)();
      var htmlContent = markedDoc.documentElement.outerHTML;
      var pageMeta = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.findPageMeta)();
      sendResponse({
        html: htmlContent,
        pageMeta: pageMeta,
        simplifiedHTML: simplifiedHTML
      });
    }
    if (message.action === 'show_popup') {
      console.log('show_popup', message);
      // assert there isn't already a popup
      if (document.getElementById('reason-modal')) {
        sendResponse({
          success: false,
          message: 'popup already exists'
        });
        return;
      }
      createModal(message.question, message.placeholder, sendResponse);
      return true; // Will respond asynchronously
    }
  });
  function createModal(question, placeholder, sendResponse) {
    var modalHtml = "\n        <div id=\"reason-modal\" style=\"\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: rgba(0, 0, 0, 0.5);\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            z-index: 10000;\n        \">\n            <div style=\"\n                background: white;\n                padding: 20px;\n                border-radius: 8px;\n                width: 400px;\n            \">\n                <h3>".concat(question, "</h3>\n                <textarea id=\"reason-input\" placeholder=\"").concat(placeholder, "\" style=\"\n                    width: 100%;\n                    height: 100px;\n                    margin: 10px 0;\n                \"></textarea>\n                <div id=\"error-message\" style=\"\n                    color: red;\n                    display: none;\n                    font-size: 12px;\n                    margin-top: 5px;\n                \">\n                    Please enter a valid reason.\n                </div>\n                <div style=\"\n                    text-align: right;\n                    display: flex;\n                    justify-content: flex-end;\n                    gap: 10px;\n                \">\n                    <button id=\"reason-skip\">Skip</button>\n                    <button id=\"reason-submit\">Submit</button>\n                </div>\n            </div>\n        </div>\n    ");
    var modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHtml;
    // if attach-desktop-sideSheet exists
    if (document.querySelector('.attach-desktop-sideSheet:not(.aok-hidden)')) {
      document.querySelector('.attach-desktop-sideSheet:not(.aok-hidden)').appendChild(modalContainer);
    } else {
      document.body.appendChild(modalContainer);
    }

    // Add event listeners
    document.getElementById('reason-submit').addEventListener('click', function () {
      var input = document.getElementById('reason-input');
      var errorMessage = document.getElementById('error-message');
      var value = input.value;
      if (!(0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.isValidReason)(value)) {
        errorMessage.style.display = 'block'; // Show the error message
        return; // Prevent submission if the reason is invalid
      } else {
        errorMessage.style.display = 'none'; // Hide the error message
      }
      modalContainer.remove();
      sendResponse({
        input: value
      });
    });
    document.getElementById('reason-skip').addEventListener('click', function () {
      var input = document.getElementById('reason-input');
      modalContainer.remove();
      sendResponse({
        input: null
      });
    });
  }
};
(0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.shouldExclude)(window.location.href).then(function (result) {
  console.log('content script, shouldExclude', result);
  if (!result) {
    work();
  }
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O01BQ1QsQ0FBQyxNQUFNO1FBQ0xGLFlBQVksQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTSxFQUFDO01BQ3RDO01BRUFKLGNBQWMsQ0FBQ0ssTUFBTSxDQUFDLENBQUM7TUFDdkJULFlBQVksQ0FBQztRQUFFaGQsS0FBSyxFQUFFbEU7TUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDO0lBQ0Y2UCxRQUFRLENBQUN1TyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUNwSSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtNQUNyRSxJQUFNOVIsS0FBSyxHQUFHMkwsUUFBUSxDQUFDdU8sY0FBYyxDQUFDLGNBQWMsQ0FBd0I7TUFDNUVrRCxjQUFjLENBQUNLLE1BQU0sQ0FBQyxDQUFDO01BQ3ZCVCxZQUFZLENBQUM7UUFBRWhkLEtBQUssRUFBRTtNQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUM7RUFDSjtBQUNGLENBQUM7QUFDRG9QLDBEQUFhLENBQUM1QyxNQUFNLENBQUM4RixRQUFRLENBQUNDLElBQUksQ0FBQyxDQUFDekssSUFBSSxDQUFDLFVBQUNxSixNQUFNLEVBQUs7RUFDbkRyVSxPQUFPLENBQUNDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRW9VLE1BQU0sQ0FBQztFQUNwRCxJQUFJLENBQUNBLE1BQU0sRUFBRTtJQUNYc0csSUFBSSxDQUFDLENBQUM7RUFDUjtBQUNGLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL3JlY2lwZV9uZXcudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvdXRpbHMvZWxlbWVudC1wcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvdXRpbHMvdXRpbC50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL2NvbnRlbnRfc2NyaXB0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwb3B1cF9wcm9iYWJpbGl0eSA9IDAuMTVcbmV4cG9ydCBjb25zdCBwb3B1cF9zY3JvbGxfcHJvYmFiaWxpdHkgPSAwLjFcbmV4cG9ydCBjb25zdCBwb3B1cF9jbGlja19wcm9iYWJpbGl0eSA9IDAuMlxuZXhwb3J0IGNvbnN0IHBvcHVwX25hdmlnYXRpb25fcHJvYmFiaWxpdHkgPSAwLjE1XG5leHBvcnQgY29uc3QgcG9wdXBfdGFiQWN0aXZhdGVfcHJvYmFiaWxpdHkgPSAwLjE1XG5leHBvcnQgY29uc3QgZm9sZGVyX25hbWUgPSBgdXNlcl9pbnRlcmFjdGlvbl9kYXRhYFxuZXhwb3J0IGNvbnN0IHppcCA9IHRydWVcbmV4cG9ydCBjb25zdCB1cGxvYWRfdXJsID0gJ2h0dHA6Ly91c2VyZGF0YWNvbGxlY3QuaGFpbGFiLmlvL3VwbG9hZCdcbmV4cG9ydCBjb25zdCBiYXNlX3VybCA9ICdodHRwOi8vdXNlcmRhdGFjb2xsZWN0LmhhaWxhYi5pbydcbmV4cG9ydCBjb25zdCBkYXRhX2NvbGxlY3Rvcl9zZWNyZXRfaWQgPSAnaGFpbGFiJ1xuZXhwb3J0IGNvbnN0IHVybF9pbmNsdWRlcyA9IFsnd3d3LmFtYXpvbi5jb20nXVxuZXhwb3J0IGNvbnN0IGludGVyYWN0aW9uX3N0YXR1c191cmwgPSBgJHtiYXNlX3VybH0vaW50ZXJhY3Rpb25zX3JlY29yZF9zdGF0dXNgXG5leHBvcnQgY29uc3QgY2hlY2tfdXNlcl9pZF91cmwgPSBgJHtiYXNlX3VybH0vY2hlY2tfdXNlcl9pZGBcbmV4cG9ydCBjb25zdCBmaWx0ZXJfdXJsID0gW1xuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9jaGVja291dC8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9idXkvJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vYS9hZGRyZXNzZXMnLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9jcGUveW91cnBheW1lbnRzLycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2FwL3NpZ25pbicsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2FwL2N2Zi8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9hcC9wcm9maWxlLycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2F4L2FjY291bnQvJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vZ3AvcHJvZHVjdC9oYW5kbGUtYnV5LWJveC8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9jaGVja291dHBvcnRhbC8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9jYXJ0L2Rlc2t0b3AvJ1xuXVxuZXhwb3J0IGNvbnN0IHNjcm9sbF90aHJlc2hvbGQgPSAzMDBcbiIsImV4cG9ydCBjb25zdCBuYXYgPSB7XG4gIHNlbGVjdG9yOiAnI25hdmJhci1tYWluJyxcbiAgbmFtZTogJ25hdl9iYXInLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI25hdi1zZWFyY2gtYmFyLWZvcm0nLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXQjdHdvdGFic2VhcmNodGV4dGJveCcsXG4gICAgICAgICAgbmFtZTogJ3NlYXJjaF9pbnB1dCcsXG4gICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm0gPSBlbT8udmFsdWVcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdzZWFyY2hfdGVybScsIGRhdGE6IHsgdGVybSB9IH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogJyNuYXYtc2VhcmNoLXN1Ym1pdC1idXR0b24nLFxuICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICBuYW1lOiAnc2VhcmNoX2J1dHRvbidcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LWxpbmstYWNjb3VudExpc3QnLFxuICAgICAgdGV4dF9zZWxlY3RvcjogJyNuYXYtbGluay1hY2NvdW50TGlzdCBzcGFuLm5hdi1saW5lLTInLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnYWNjb3VudF9hbmRfbGlzdF9idXR0b24nXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYtb3JkZXJzJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ29yZGVyX2J1dHRvbidcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI25hdi1jYXJ0JyxcbiAgICAgIHRleHRfc2VsZWN0b3I6ICcjbmF2LWNhcnQgLm5hdi1saW5lLTInLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnY2FydF9idXR0b24nXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYtZmx5b3V0LXNlYXJjaEFqYXgnLFxuICAgICAgbmFtZTogJ3N1Z2dlc3RlZF90ZXJtcycsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1zdWdnZXN0aW9uLWVsbGlwc2lzLWRpcmVjdGlvbicsXG4gICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IHJlZmluZW1lbnRfb3B0aW9uID0gW1xuICB7XG4gICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5wdWlzLWJvbGQtd2VpZ2h0LXRleHQnLFxuICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgIGNsYXNzOiAncmVmaW5lbWVudC10aXRsZSdcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnYS5zLW5hdmlnYXRpb24tY2xlYXItbGluaycsXG4gICAgYWRkX3RleHQ6IHRydWUsXG4gICAgbmFtZTogJ2NsZWFyX3NlbGVjdGlvbicsXG4gICAgY2xpY2thYmxlOiB0cnVlXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJ3VsID4gc3Bhbi5hLWRlY2xhcmF0aXZlID4gc3BhbiA+IGxpOmhhcyhhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0pJyxcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgLy8gY2xpY2tfc2VsZWN0b3I6IFwiYVwiLFxuICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAvLyB0ZXh0ID0gJ0NsZWFyIE9wdGlvbiAnICsgdGV4dFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXh0XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgIHRleHQgKz0gJ18nXG4gICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IG5hbWVFbSA9IGVsZW1lbnQuY2xvc2VzdCgndWwnKT8ucGFyZW50RWxlbWVudD8uZmlyc3RFbGVtZW50Q2hpbGRcbiAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvWyBdL2csICdfJykudG9Mb3dlckNhc2UoKS50cmltKClcblxuICAgICAgbGV0IHVybCA9ICcnXG5cbiAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgnaHJlZicpKSB7XG4gICAgICAgIHVybCA9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgfVxuXG4gICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMuJyArIG5hbWUsXG4gICAgICAgICAgZGF0YTogeyB0aXRsZTogdGV4dD8udHJpbSgpIHx8ICcnLCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLFxuICAgICAgICBkYXRhOiB7IHRpdGxlOiB0ZXh0Py50cmltKCkgfHwgJycsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOlxuICAgICAgXCJ1bCA+IHNwYW4uYS1kZWNsYXJhdGl2ZSA+IGxpID4gc3BhbiA+IGRpdltkYXRhLWEtZXhwYW5kZXItbmFtZT0nZmlsdGVyLWNvbnRlbnQtZXhwYW5kZXInXVwiLFxuICAgIG5hbWU6ICdtb3JlX29wdGlvbnMnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiBcImFbZGF0YS1jc2EtYy1mdW5jLWRlcHM9J2F1aS1kYS1hLWV4cGFuZGVyLXRvZ2dsZSddXCIsXG4gICAgICAgIG5hbWU6ICd0b2dnbGVfZXhwYW5zaW9uJyxcbiAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnbGknLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgLy8gY2xpY2tfc2VsZWN0b3I6IFwiYVwiLFxuICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgdGV4dCArPSAnICdcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgIC8vIHRleHQgPSAnQ2xlYXIgT3B0aW9uICcgKyB0ZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICB0ZXh0ICs9ICdfJ1xuICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBuYW1lRW0gPSBlbGVtZW50LmNsb3Nlc3QoJ3VsJyk/LnBhcmVudEVsZW1lbnQ/LmNsb3Nlc3QoJ3VsJylcbiAgICAgICAgICAgID8ucGFyZW50RWxlbWVudD8uZmlyc3RFbGVtZW50Q2hpbGRcbiAgICAgICAgICBjb25zdCBuYW1lID0gbmFtZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1sgXS9nLCAnXycpLnRvTG93ZXJDYXNlKCkudHJpbSgpXG5cbiAgICAgICAgICBsZXQgdXJsID0gJydcblxuICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgnaHJlZicpKSB7XG4gICAgICAgICAgICB1cmwgPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSxcbiAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZTogdGV4dD8udHJpbSgpIHx8ICcnLCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSxcbiAgICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IHRleHQ/LnRyaW0oKSB8fCAnJywgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RfZmFjdHMgPSB7XG4gIHNlbGVjdG9yOiAnI3Byb2R1Y3RGYWN0c0Rlc2t0b3BFeHBhbmRlcicsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGFzczogJ3Byb2R1Y3QtZmFjdHMnXG59XG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0X2RlbGl2ZXJ5ID0ge1xuICBzZWxlY3RvcjogJ2Rpdi5taXItbGF5b3V0LURFTElWRVJZX0JMT0NLLXNsb3QtUFJJTUFSWV9ERUxJVkVSWV9NRVNTQUdFX0xBUkdFJyxcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsYXNzOiAncHJvZHVjdC1kZWxpdmVyeSdcbn1cblxuZXhwb3J0IGNvbnN0IHF1YW50aXR5X3NlbGVjdG9yID0ge1xuICBzZWxlY3RvcjogJyNzZWxlY3RRdWFudGl0eSwgZGl2W2lkXj1cInFzLXdpZGdldC1idXR0b24tY29udGFpbmVyLWF0ZmNcIl0nLFxuICBuYW1lOiAncXVhbnRpdHlfc2VsZWN0b3InLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnbGFiZWwnLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLWRyb3Bkb3duLXByb21wdCcsXG4gICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdzZWxlY3QnLFxuICAgICAgLy8gY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdidXR0b24nLFxuICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0JyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2Rpdi5xcy13aWRnZXQtZHJvcGRvd24td3JhcHBlciBzcGFuW2RhdGEtYWN0aW9uPVwicXMtd2lkZ2V0LWRyb3Bkb3duLWRlY2xcIl0nLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICB1c2Vfcm9vdDogdHJ1ZSxcbiAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgdGV4dF9mb3JtYXQ6ICdEcm9wIERvd24gT3B0aW9uIHt9J1xuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgZGVsaXZlcnlfZnJlcXVlbmN5X3NlbGVjdG9yID0ge1xuICBzZWxlY3RvcjogJyNyZXBsZW5pc2htZW50RnJlcXVlbmN5X2ZlYXR1cmVfZGl2JyxcbiAgbmFtZTogJ2RlbGl2ZXJ5X2ZyZXF1ZW5jeV9zZWxlY3RvcicsXG4gIHRleHRfc2VsZWN0b3I6ICdkaXYuYS1zZWN0aW9uLmEtc3BhY2luZy1taWNybyA+IHNwYW4nLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNyY3hPcmRGcmVxT25tbFdyYXBwZXIgc3Bhbi5hLWRyb3Bkb3duLXByb21wdCcsXG4gICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjcmN4T3JkRnJlcU9ubWxXcmFwcGVyIHNlbGVjdCcsXG4gICAgICAvLyBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBzZXRfdXBfbm93X2J1dHRvbiA9IHtcbiAgc2VsZWN0b3I6ICcjcmN4LXN1YnNjcmliZS1zdWJtaXQtYnV0dG9uLWFubm91bmNlJyxcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsaWNrYWJsZTogdHJ1ZSxcbiAgbmFtZTogJ3NldF91cF9ub3cnLFxuICBjbGFzczogJ3Byb2R1Y3Qtc2V0LXVwLW5vdydcbn1cblxuZXhwb3J0IGNvbnN0IGFkZF90b19jYXJ0X2J1dHRvbiA9IHtcbiAgc2VsZWN0b3I6XG4gICAgXCJpbnB1dFtuYW1lPSdzdWJtaXQuYWRkLXRvLWNhcnQnXSwgaW5wdXRbbmFtZT0nc3VibWl0LmFkZC10by1jYXJ0LXViYiddLCAjZnJlc2hBZGRUb0NhcnRCdXR0b24gaW5wdXRcIixcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsaWNrYWJsZTogdHJ1ZSxcbiAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgY2xhc3M6ICdwcm9kdWN0LWFkZC10by1jYXJ0J1xufVxuXG5leHBvcnQgY29uc3QgYnV5X25vd19idXR0b24gPSB7XG4gIHNlbGVjdG9yOiBcImlucHV0W25hbWU9J3N1Ym1pdC5idXktbm93J11cIixcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsaWNrYWJsZTogdHJ1ZSxcbiAgbmFtZTogJ2J1eV9ub3cnLFxuICBjbGFzczogJ3Byb2R1Y3QtYnV5LW5vdydcbn1cblxuZXhwb3J0IGNvbnN0IGJ1eV9ib3hfd2l0aF9hY2NvcmRpb24gPSB7XG4gIHNlbGVjdG9yOiAnI2J1eUJveEFjY29yZGlvbiA+IGRpdi5hLWJveC5jZWx3aWRnZXQnLFxuICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5hY2NvcmRpb24tY2FwdGlvbiA+IHNwYW4nLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOlxuICAgICAgICBcImRpdltkYXRhLWNzYS1jLWNvbnRlbnQtaWQ9J29mZmVyX2Rpc3BsYXlfZGVza3RvcF9hY2NvcmRpb25faGVhZGVyJ10sIGRpdltkYXRhLWNzYS1jLWNvbnRlbnQtaWQ9J29mZmVyX2Rpc3BsYXlfbW9iaWxlX2FjY29yZGlvbl9oZWFkZXInXVwiLFxuICAgICAgbmFtZTogJ2FjY29yZGlvbl9zZWxlY3RvcicsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIHRleHRfc2VsZWN0b3I6ICdoNSBzcGFuLmEtdGV4dC1ib2xkJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdkaXYuYS1hY2NvcmRpb24taW5uZXIuYWNjb3JkaW9uLXJvdy1jb250ZW50JyxcbiAgICAgIG5hbWU6ICdwdXJjaGFzZV9mb3JtJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHByb2R1Y3RfZmFjdHMsXG4gICAgICAgIHByb2R1Y3RfZGVsaXZlcnksXG4gICAgICAgIHF1YW50aXR5X3NlbGVjdG9yLFxuICAgICAgICBkZWxpdmVyeV9mcmVxdWVuY3lfc2VsZWN0b3IsXG4gICAgICAgIHNldF91cF9ub3dfYnV0dG9uLFxuICAgICAgICBhZGRfdG9fY2FydF9idXR0b24sXG4gICAgICAgIGJ1eV9ub3dfYnV0dG9uXG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX2RlbGl2ZXJ5ID0ge1xuICBzZWxlY3RvcjogJyNnc29kX3NpbmdsZU9mZmVyRGlzcGxheV9EZXNrdG9wJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNhZGRUb0NhcnQnLFxuICAgICAgbmFtZTogJ3B1cmNoYXNlX2Zvcm0nLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgcHJvZHVjdF9mYWN0cyxcbiAgICAgICAgcHJvZHVjdF9kZWxpdmVyeSxcbiAgICAgICAgcXVhbnRpdHlfc2VsZWN0b3IsXG4gICAgICAgIGFkZF90b19jYXJ0X2J1dHRvbixcbiAgICAgICAgYnV5X25vd19idXR0b25cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fcGlja191cCA9IHtcbiAgc2VsZWN0b3I6ICcjZ3NvZF9zaW5nbGVPZmZlckRpc3BsYXlfZ3JvdXBfMl9EZXNrdG9wJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNwaWNrVXBPZmZlckRpc3BsYXknLFxuICAgICAgbmFtZTogJ3B1cmNoYXNlX2Zvcm0nLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgcHJvZHVjdF9mYWN0cyxcbiAgICAgICAgcHJvZHVjdF9kZWxpdmVyeSxcbiAgICAgICAgcXVhbnRpdHlfc2VsZWN0b3IsXG4gICAgICAgIGFkZF90b19jYXJ0X2J1dHRvbixcbiAgICAgICAgYnV5X25vd19idXR0b25cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGNhcnQgPSBbXG4gIG5hdixcbiAge1xuICAgIHNlbGVjdG9yOiAnI3NjLWNvbGxhcHNlZC1jYXJ0cy1jb250YWluZXInLFxuICAgIG5hbWU6ICdhbWF6b25fZnJlc2hfY2FydCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtbG9jYWxtYXJrZXQtdGV4dC1sb2dvJyxcbiAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2W2RhdGEtbmFtZT1cImNvbGxhcHNlZF9pdGVtX2xpc3RcIl0nLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIG5hbWU6ICdpdGVtX2xpc3QnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1idXktYm94LWlubmVyLWJveCBpbnB1dFtuYW1lXj1cInByb2NlZWRUb0FMTUNoZWNrb3V0XCJdJyxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICBuYW1lOiAnY2hlY2tfb3V0JyxcbiAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWJ1eS1ib3gtaW5uZXItYm94IGEnLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLW5hbWU9J0FjdGl2ZSBJdGVtcyddXCIsXG4gICAgbmFtZTogJ2FjdGl2ZV9pdGVtX2xpc3QnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWxpc3QtaXRlbS1jb250ZW50JyxcbiAgICAgICAgdGV4dF9zZWxlY3RvcjpcbiAgICAgICAgICAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCB1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZSBzcGFuLmEtdHJ1bmNhdGUtZnVsbCcsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWl0ZW0tY2hlY2stY2hlY2tib3gtc2VsZWN0b3IgbGFiZWwnLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ2NoZWNrYm94J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtaW1hZ2Utd3JhcHBlciBhJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIHVsID4gbGkgPiBzcGFuLmEtbGlzdC1pdGVtID4gYS5zYy1wcm9kdWN0LXRpdGxlJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtdHJ1bmNhdGUtZnVsbCcsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkuc2MtZGVsaXZlcnktbWVzc2FnaW5nJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1iYWRnZS1wcmljZS10by1wYXkgc3Bhbi5zYy1wcm9kdWN0LXByaWNlIHNwYW46bm90KC5hLW9mZnNjcmVlbiknLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCBzcGFuLnNjLXF1YW50aXR5LXN0ZXBwZXInLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdEZWNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGVjcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W3JvbGU9J3NwaW5idXR0b24nXVwiLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VycmVudCBRdWFudGl0eToge30nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nSW5jcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdpbmNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgaW5wdXRbZGF0YS1hY3Rpb249J2RlbGV0ZSddXCIsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdkZWxldGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIGlucHV0W2RhdGEtYWN0aW9uPSdzYXZlLWZvci1sYXRlciddXCIsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdzYXZlX2Zvcl9sYXRlcidcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBhc2luID0gZW0ucGFyZW50RWxlbWVudD8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ2Rpdi5zYy1iYWRnZS1wcmljZS10by1wYXkgc3Bhbi5zYy1wcm9kdWN0LXByaWNlIHNwYW46bm90KC5hLW9mZnNjcmVlbiknXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIHVsID4gbGkgPiBzcGFuLmEtbGlzdC1pdGVtID4gYS5zYy1wcm9kdWN0LXRpdGxlIHNwYW4uYS10cnVuY2F0ZS1mdWxsJ1xuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dFxuICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIHVsID4gbGkgPiBzcGFuLmEtbGlzdC1pdGVtID4gYS5zYy1wcm9kdWN0LXRpdGxlJ1xuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICBjb25zdCBkZWxpdmVyeUVtID0gZW0ucXVlcnlTZWxlY3RvcignbGkuc2MtZGVsaXZlcnktbWVzc2FnaW5nJylcbiAgICAgICAgICBjb25zdCBkZWxpdmVyeSA9IGRlbGl2ZXJ5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bXFxuXS9nLCAnICcpXG4gICAgICAgICAgY29uc3QgcXVhbnRpdHlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcImRpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgc3Bhbi5zYy1xdWFudGl0eS1zdGVwcGVyIGRpdltyb2xlPSdzcGluYnV0dG9uJ11cIlxuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCBxdWFudGl0eSA9IHF1YW50aXR5RW0/LmlubmVyVGV4dFxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdkaXYuc2MtaXRlbS1jaGVjay1jaGVja2JveC1zZWxlY3RvciBpbnB1dCcpXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBzZWxlY3RlZEVtPy5nZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnKSAhPT0gbnVsbFxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6ICdhY3RpdmVfaXRlbXMnLFxuICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgZGVsaXZlcnksIHF1YW50aXR5LCBzZWxlY3RlZCB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcjc2MtYnV5LWJveC1wdGMtYnV0dG9uIGlucHV0JyxcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgbmFtZTogJ2NoZWNrX291dCdcbiAgfVxuXVxuXG5leHBvcnQgY29uc3QgZnJlc2hfY2FydCA9IFtcbiAgbmF2LFxuICB7XG4gICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtbmFtZT0nQWN0aXZlIEl0ZW1zJ11cIixcbiAgICBuYW1lOiAnYWN0aXZlX2l0ZW1fbGlzdCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtbGlzdC1pdGVtLWNvbnRlbnQnLFxuICAgICAgICB0ZXh0X3NlbGVjdG9yOiAndWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUgc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1wcm9kdWN0LWltYWdlLWRlc2t0b3AgYSBpbWcnLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfaW1hZ2UnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3VsID4gbGkgPiBzcGFuLmEtbGlzdC1pdGVtID4gYS5zYy1wcm9kdWN0LXRpdGxlJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtdHJ1bmNhdGUtZnVsbCcsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWJhZGdlLXByaWNlLXRvLXBheSBzcGFuLnNjLXByaWNlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1hY3Rpb24tbGlua3MnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnFzLXdpZGdldC1jb250YWluZXInLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2FyaWEtbGFiZWw9J1JlbW92ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5xcy13aWRnZXQtZHJvcGRvd24tZmxleC13cmFwcGVyIGJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdxdWFudGl0eV9kcm9wX2Rvd25fbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VycmVudCBRdWFudGl0eToge30nXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnZGl2LnFzLXdpZGdldC1kcm9wZG93bi13cmFwcGVyIHNwYW5bZGF0YS1hY3Rpb249XCJxcy13aWRnZXQtZHJvcGRvd24tZGVjbFwiXScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHVzZV9yb290OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdEcm9wIERvd24gT3B0aW9uIHt9J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ2RpdltpZF49XCJxcy13aWRnZXQtcXVhbnRpdHktY29udGFpbmVyLWF0ZmNcIl0gc3BhbltkYXRhLWFjdGlvbj1cInFzLXdpZGdldC1xdWFudGl0eS1jaGFuZ2VsaW5rLWRlY2xcIl0nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB1c2Vfcm9vdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdkaXZbaWRePVwicXMtd2lkZ2V0LXN1bW1hcnktY29udGFpbmVyLWF0ZmNcIl0gc3BhbltpZF49XCJxcy13aWRnZXQtc3VtbWFyeS1hdGMtYXRmY1wiXScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHVzZV9yb290OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbYXJpYS1sYWJlbD0nQWRkJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbmNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFtkYXRhLWFjdGlvbj0nZGVsZXRlJ11cIixcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ2RlbGV0ZSdcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBhc2luID0gZW0ucGFyZW50RWxlbWVudD8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdkaXYuc2MtYmFkZ2UtcHJpY2UtdG8tcGF5IHNwYW4uc2MtcHJpY2UnKVxuICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICd1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZSBzcGFuLmEtdHJ1bmNhdGUtZnVsbCdcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3VsID4gbGkgPiBzcGFuLmEtbGlzdC1pdGVtID4gYS5zYy1wcm9kdWN0LXRpdGxlJylcbiAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICBjb25zdCBxdWFudGl0eUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdkaXYuc2MtYWN0aW9uLWxpbmtzIGRpdi5xcy13aWRnZXQtZHJvcGRvd24tZmxleC13cmFwcGVyIGJ1dHRvbidcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBxdWFudGl0eUVtPy5pbm5lclRleHRcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogJ2FjdGl2ZV9pdGVtcycsXG4gICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsLCBxdWFudGl0eSB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICdkaXYuc2MtYnV5LWJveC1pbm5lci1ib3ggaW5wdXRbbmFtZV49XCJwcm9jZWVkVG9BTE1DaGVja291dFwiXScsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIG5hbWU6ICdjaGVja19vdXQnLFxuICAgIGFkZF90ZXh0OiB0cnVlXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJ2Rpdi5zYy1idXktYm94LWlubmVyLWJveCBhJyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgYWRkX3RleHQ6IHRydWVcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnI3NjLWNhcnQtYWJvdmUtYWN0aW9ucyBidXR0b24sICNzYy1jYXJ0LWFib3ZlLWFjdGlvbnMgYScsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgIGFkZF90ZXh0OiB0cnVlXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IGJ1eV9hZ2FpbiA9IFtcbiAgbmF2LFxuICB7XG4gICAgc2VsZWN0b3I6ICdkaXYuYS1zZWN0aW9uOmhhcyhkaXYuZmlsdGVyLWNvbnRhaW5lciknLFxuICAgIG5hbWU6ICdmaWx0ZXJzJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2Rpdi5maWx0ZXItY29udGFpbmVyJyxcbiAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4jZmlsdGVyLWNvbnRhaW5lci1oZWFkZXInLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4jZmlsdGVyLWNvbnRhaW5lci1oZWFkZXInLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnbGFiZWwnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbS5pbm5lclRleHRcbiAgICAgICAgICAgICAgY29uc3QgbmFtZUVtID0gZW1cbiAgICAgICAgICAgICAgICAuY2xvc2VzdCgnZGl2LmZpbHRlci1jb250YWluZXInKVxuICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcignI2ZpbHRlci1jb250YWluZXItaGVhZGVyJylcbiAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IG5hbWVFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bIF0vZywgJ18nKS50b0xvd2VyQ2FzZSgpLnRyaW0oKVxuICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcbiAgICAgICAgICAgICAgaWYgKGlucHV0ICYmIGlucHV0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ2ZpbHRlcnMuJyArIG5hbWUsXG4gICAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlOiB0aXRsZT8udHJpbSgpIHx8ICcnLCBzZWxlY3RlZDogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2ZpbHRlcnMuJyArIG5hbWUsXG4gICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZTogdGl0bGU/LnRyaW0oKSB8fCAnJywgc2VsZWN0ZWQ6IGZhbHNlIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnZGl2LmFsbS1ncmlkLWRlc2t0b3AtZ3JpZC1jb250YWluZXInLFxuICAgIG5hbWU6ICdwcm9kdWN0X2xpc3QnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cImdyaWRDZWxsXCJdJyxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIHRleHRfc2VsZWN0b3I6IFwiZGl2W2lkXj0nY2xvc2VkQ2FyZCddIGFbaWRePSd0aXRsZSddIHNwYW4uYS10cnVuY2F0ZS1mdWxsXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2lkXj0nZ3JpZEVsZW1lbnQnXVwiLFxuICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfY2FyZCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2lkXj0nY2xvc2VkQ2FyZCddXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Nsb3NlZF9wcm9kdWN0X2NhcmQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltpZF49J2luZm8nXVwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnb3Blbl9wcm9kdWN0X2NhcmQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnT3BlbiBQcm9kdWN0IENhcmQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Zvcm0gc3Bhbi5hLWJ1dHRvbi1pbm5lcicsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cInNlZUJ1eWluZ09wdGlvbnNXcmFwcGVyXCJdIGEnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VlX2J1eWluZ19vcHRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W25hbWU9XCJheC1xc1wiXScsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0RlY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbcm9sZT0nc3BpbmJ1dHRvbiddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0luY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltpZF49J2V4cGFuZGVkSW1hZ2UnXVwiLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdjbG9zZV9wcm9kdWN0X2NhcmQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0Nsb3NlIFByb2R1Y3QgQ2FyZCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXCJkaXZbaWRePSdjbG9zZWRDYXJkJ10gZGl2W2lkXj0naW5mbyddXCIpXG4gICAgICAgICAgY29uc3QgYXNpbiA9IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ2RpdltpZF49XCJjbG9zZWRDYXJkXCJdIGRpdltpZF49XCJpbmZvXCJdIHNwYW5bY2xhc3MqPVwicHJpY2VCbG9ja1dpdGhNYXJnaW5SaWdodFwiXSBzcGFuLmEtcHJpY2UgPiBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJ1xuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcImRpdltpZF49J2Nsb3NlZENhcmQnXSBhW2lkXj0ndGl0bGUnXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbFwiXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgY29uc3QgZGVsaXZlcnlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnZGl2W2lkXj1cImNsb3NlZENhcmRcIl0gZGl2W2lkXj1cImluZm9cIl0gI3VkbURlbGl2ZXJ5TWVzc2FnZUNvbXBvbmVudCdcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgZGVsaXZlcnkgPSBkZWxpdmVyeUVtPy5pbm5lclRleHQucmVwbGFjZSgvW1xcbl0vZywgJyAnKVxuICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdhY3RpdmVfaXRlbXMnLCBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgZGVsaXZlcnkgfSB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cImZlYXR1cmVkXCJdJyxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIHRleHRfc2VsZWN0b3I6IFwiYVtpZF49J3RpdGxlJ10gc3Bhbi5hLXRydW5jYXRlLWZ1bGxcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJkZXRhaWxDb250ZW50V3JhcHBlclwiXSBkaXZbaWRePVwiZGV0YWlsQ29udGVudFwiXScsXG4gICAgICAgICAgICBuYW1lOiAnZGV0YWlsZWRfY29udGVudCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXY6aGFzKD4gaW1nKScsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJhW2lkXj0ndGl0bGUnXVwiLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF90aXRsZScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS10cnVuY2F0ZS1mdWxsJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2NsYXNzKj0nbXVsdGlPZmZlclBpbGxDb250YWluZXInXSBhXCIsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgIFwiZGl2W2RhdGEtYnV5aW5nb3B0aW9udHlwZT0nTkVXJ10sIGRpdltjbGFzcyo9J2FzaW5EZXRhaWxJbmZvQ29sdW1ucyddOmhhcyhpbnB1dFtuYW1lPSdzdWJtaXQuYWRkVG9DYXJ0J11cIixcbiAgICAgICAgICAgICAgICBuYW1lOiAnb25lX3RpbWVfcHVyY2hhc2UnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdzcGFuW2NsYXNzKj1cInByaWNlQmxvY2tXaXRoTWFyZ2luUmlnaHRcIl0gc3Bhbi5hLXByaWNlID4gc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2UnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN1ZG1EZWxpdmVyeU1lc3NhZ2VDb21wb25lbnQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJ5J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwiYWN0aW9uQnV0dG9uc1Jvd1wiXSwgZGl2W2NsYXNzKj1cImFzaW5EZXRhaWxBY3Rpb25zUm93XCJdJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2J1dHRvbnMnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXRbbmFtZT1cInN1Ym1pdC5hZGRUb0NhcnRcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0W2lkXj1cImJ1eS1ub3dcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYnV5X25vdycsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cImZlZWRiYWNrQnV0dG9uU2VjdGlvblwiXSBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZW1vdmVfaXRlbScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W25hbWU9XCJheC1xc1wiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0RlY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbcm9sZT0nc3BpbmJ1dHRvbiddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdJbmNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgbGV0IGFzaW5FbSA9IGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgIGxldCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICBpZiAoYXNpbiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXNpbkVtID0gZW0ucGFyZW50RWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBsZXQgYXNpbiA9IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuW2NsYXNzKj1cInByaWNlQmxvY2tXaXRoTWFyZ2luUmlnaHRcIl0gc3Bhbi5hLXByaWNlID4gc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKSdcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBcImFbaWRePSd0aXRsZSddIHNwYW4uYS10cnVuY2F0ZS1mdWxsXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoXCJhW2lkXj0ndGl0bGUnXVwiKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeUVtID0gZW0ucXVlcnlTZWxlY3RvcignI3VkbURlbGl2ZXJ5TWVzc2FnZUNvbXBvbmVudCcpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeSA9IGRlbGl2ZXJ5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bXFxuXS9nLCAnICcpXG4gICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAnYWN0aXZlX2l0ZW1zJywgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgZGVsaXZlcnkgfSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtYnV5aW5nb3B0aW9udHlwZT0nU05TJ10sIGRpdltjbGFzcyo9J3Nuc1Vwc2VsbEJsb2NrQ29udGFpbmVyJ11cIixcbiAgICAgICAgICAgICAgICBuYW1lOiAnc3Vic2NyaWJlX2FuZF9zYXZlJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnc3BhbltjbGFzcyo9XCJwcmljZUJsb2NrV2l0aE1hcmdpblJpZ2h0XCJdIHNwYW4uYS1wcmljZSA+IHNwYW46bm90KC5hLW9mZnNjcmVlbiknLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdWRtRGVsaXZlcnlNZXNzYWdlQ29tcG9uZW50JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWxpdmVyeSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cImFjdGlvbkJ1dHRvbnNSb3dcIl0nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYnV0dG9ucycsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dFtuYW1lPVwic3VibWl0LmFkZFRvQ2FydFwiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3BhbltjbGFzcyo9XCJzbnNCdXR0b25cIl0gaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc3Vic2NyaWJlX2FuZF9zYXZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwiZmVlZGJhY2tCdXR0b25TZWN0aW9uXCJdIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlbW92ZV9pdGVtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuW2NsYXNzKj1cInN1YnNjcmlwdGlvbkJ1dHRvblwiXScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2V0X3VwX3N1YnNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgbGV0IGFzaW5FbSA9IGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgIGxldCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICBpZiAoYXNpbiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtkYXRhLW1peC1vcGVyYXRpb25zPVwic25zTW9kYWxIYW5kbGVyXCJdJylcbiAgICAgICAgICAgICAgICAgICAgYXNpbiA9IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuW2NsYXNzKj1cInByaWNlQmxvY2tXaXRoTWFyZ2luUmlnaHRcIl0gc3Bhbi5hLXByaWNlID4gc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKSdcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBcImFbaWRePSd0aXRsZSddIHNwYW4uYS10cnVuY2F0ZS1mdWxsXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoXCJhW2lkXj0ndGl0bGUnXVwiKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeUVtID0gZW0ucXVlcnlTZWxlY3RvcignI3VkbURlbGl2ZXJ5TWVzc2FnZUNvbXBvbmVudCcpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeSA9IGRlbGl2ZXJ5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bXFxuXS9nLCAnICcpXG4gICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAnYWN0aXZlX2l0ZW1zJywgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgZGVsaXZlcnkgfSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbaWRePSdkZXRhaWwtdmlldy1zaW1pbGFyLWl0ZW1zJ11cIixcbiAgICAgICAgICAgIG5hbWU6ICdzaW1pbGFyX2l0ZW1zJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpLmEtY2Fyb3VzZWwtY2FyZCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogXCJhW2lkXj0ndGl0bGUnXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbFwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtaW1hZ2UtY29udGFpbmVyOmhhcyg+IGltZyknLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImFbaWRePSd0aXRsZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS10cnVuY2F0ZS1mdWxsJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ3NwYW5bY2xhc3MqPVwicHJpY2VCbG9ja1dpdGhNYXJnaW5SaWdodFwiXSBzcGFuLmEtcHJpY2UgPiBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3VkbURlbGl2ZXJ5TWVzc2FnZUNvbXBvbmVudCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcnknXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnaW5wdXRbbmFtZT1cInN1Ym1pdC5hZGRUb0NhcnRcIl0sIGlucHV0W25hbWVePVwiYXRmY1NoaW1cIl0sIGJ1dHRvblthcmlhLWxhYmVsPVwiQWRkIHRvIENhcnQuIENsaWNrIHRvIGNoYW5nZSBxdWFudGl0eVwiXScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cInNlZUJ1eWluZ09wdGlvbnNXcmFwcGVyXCJdIGEnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VlX2J1eWluZ19vcHRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbbmFtZT1cImF4LXFzXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPSdzcGluYnV0dG9uJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdJbmNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnFzLXdpZGdldC1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2FyaWEtbGFiZWw9J1JlbW92ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5xcy13aWRnZXQtZHJvcGRvd24tZmxleC13cmFwcGVyIGJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYucXMtd2lkZ2V0LWRyb3Bkb3duLXdyYXBwZXIgc3BhbltkYXRhLWFjdGlvbj1cInFzLXdpZGdldC1kcm9wZG93bi1kZWNsXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlX3Jvb3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnRHJvcCBEb3duIE9wdGlvbiB7fSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2W2lkXj1cInFzLXdpZGdldC1xdWFudGl0eS1jb250YWluZXItYXRmY1wiXSBzcGFuW2RhdGEtYWN0aW9uPVwicXMtd2lkZ2V0LXF1YW50aXR5LWNoYW5nZWxpbmstZGVjbFwiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZV9yb290OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2W2lkXj1cInFzLXdpZGdldC1zdW1tYXJ5LWNvbnRhaW5lci1hdGZjXCJdIHNwYW5baWRePVwicXMtd2lkZ2V0LXN1bW1hcnktYXRjLWF0ZmNcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2Vfcm9vdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsPSdBZGQnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFRpdGxlRW0gPSBlbVxuICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgnZGl2W2lkXj1cImZlYXR1cmVkXCJdJylcbiAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICdkaXZbaWRePVwiZGV0YWlsQ29udGVudFdyYXBwZXJcIl0gYVtpZF49XCJ0aXRsZVwiXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbCdcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50VGl0bGUgPSBwYXJlbnRUaXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgPy50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXlxcd10rL2csICdfJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2RpdltjbGFzcyo9XCJkZWxpZ2h0RmFjZW91dFwiXScpXG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW5bY2xhc3MqPVwicHJpY2VCbG9ja1dpdGhNYXJnaW5SaWdodFwiXSBzcGFuLmEtcHJpY2UgPiBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXCJhW2lkXj0ndGl0bGUnXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbFwiKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucXVlcnlTZWxlY3RvcihcImFbaWRePSd0aXRsZSddXCIpXG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKCcjdWRtRGVsaXZlcnlNZXNzYWdlQ29tcG9uZW50JylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5ID0gZGVsaXZlcnlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1tcXG5dL2csICcgJylcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHBhcmVudFRpdGxlICsgJy5zaW1pbGFyX2l0ZW1zJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgZGVsaXZlcnkgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfVxuXVxuXG5leHBvcnQgY29uc3QgcmVjaXBlcyA9IFtcbiAge1xuICAgIG1hdGNoOiAnLycsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtuYXZdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvcycsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjcy1yZWZpbmVtZW50cycsXG4gICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RvcFJlZmluZW1lbnRzXFxcXC8wJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAndG9wX3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogJ3RydWUnLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUmVjZW50bHkgdXNlZCBmaWx0ZXJzJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAnZGl2LmEtc2VjdGlvbi5hLXNwYWNpbmctbm9uZTpub3QoOmhhcygjbi10aXRsZSkpOmhhcyhzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5wdWlzLWJvbGQtd2VpZ2h0LXRleHQpOmhhcyh1bCBzcGFuLmEtZGVjbGFyYXRpdmUgPiBzcGFuID4gbGkpOm5vdCgjcmV2aWV3c1JlZmluZW1lbnRzKTpub3QoI2RlcGFydG1lbnRzKTpub3QoI3ByaWNlUmVmaW5lbWVudHMpOm5vdCgjZmlsdGVycyknLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5wdWlzLWJvbGQtd2VpZ2h0LXRleHQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiByZWZpbmVtZW50X29wdGlvblxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZGVwYXJ0bWVudHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdkZXBhcnRtZW50cycsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdEZXBhcnRtZW50JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpIGEnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gZW0/LmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQgJiYgc2VsZWN0ZWQgPT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMuZGVwYXJ0bWVudHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLmRlcGFydG1lbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3Jldmlld3NSZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Jldmlld3NfcmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VzdG9tZXIgUmV2aWV3cycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhLnMtbmF2aWdhdGlvbi1jbGVhci1saW5rJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGVhcl9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImxpIGFbYXJpYS1jdXJyZW50PSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHRfZm9ybWF0OiAnQ2xlYXIgT3B0aW9uIHt9JyxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcgJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucmV2aWV3cycsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImxpIGFbYXJpYS1jdXJyZW50PSdmYWxzZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJyAnKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5yZXZpZXdzJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNwcmljZVJlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2VfcmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAvLyAyIGNhc2VzOiBzZWxlY3Rpb24gLyBzbGlkZXJcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjcF8zNi10aXRsZSwgZGl2LnNmLXJlZmluZW1lbnQtaGVhZGluZyBzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZV9oZWFkaW5nJ1xuICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgLy8gY2FzZSAxOiBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2FyaWEtbGFiZWxsZWRieT0ncF8zNi10aXRsZSddID4gYVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NsZWFyX3ByaWNlX3NlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwXzM2LXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGV4dF9mb3JtYXQ6ICdDbGVhciBPcHRpb24ge30nLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwXzM2LXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J2ZhbHNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucHJpY2UnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogZmFsc2UsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgLy8gY2FzZSAyOiBzbGlkZXJcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2YtcmFuZ2Utc2xpZGVyLXJvdzpudGgtb2YtdHlwZSgxKScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZTogJ3ByaWNlX3JhbmdlJywgcmFuZ2UgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJhbmdlLXNsaWRlci1yb3c6bnRoLW9mLXR5cGUoMikgZGl2LnMtbG93ZXItYm91bmQgaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2VfbWluX3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHRfanM6IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgY29uc3QgdGV4dCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZXRleHRcIilcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyh0ZXh0KVxuICAgICAgICAgICAgICAgICAgICAvLyAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGtlZXBfYXR0cjogWydtaW4nLCAnbWF4JywgJ3N0ZXAnXSxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVfYXR0cjoge1xuICAgICAgICAgICAgICAgICAgICAgIHN0ZXBfdmFsdWVzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1FbSA9IGVtLmNsb3Nlc3QoJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudF92YWx1ZTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IE51bWJlci5wYXJzZUludChlbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtRW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IEpTT04ucGFyc2UocHJvcCkuc3RlcExhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzW3ZhbHVlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1yYW5nZS1zbGlkZXItcm93Om50aC1vZi10eXBlKDIpIGRpdi5zLXVwcGVyLWJvdW5kIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX21heF92YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0X2pzOiAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnN0IHRleHQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImFyaWEtdmFsdWV0ZXh0XCIpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiB0ZXh0O1xuICAgICAgICAgICAgICAgICAgICAvLyAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAga2VlcF9hdHRyOiBbJ21pbicsICdtYXgnLCAnc3RlcCddLFxuICAgICAgICAgICAgICAgICAgICBvdmVycmlkZV9hdHRyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RlcF92YWx1ZXM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtRW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wcm9wcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBKU09OLnBhcnNlKHByb3ApLnN0ZXBMYWJlbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3ZhbHVlOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyLnBhcnNlSW50KGVtLmdldEF0dHJpYnV0ZSgndmFsdWUnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRW0gPSBlbS5jbG9zZXN0KCdmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtRW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wcm9wcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcHNbdmFsdWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXN1Ym1pdC1yYW5nZS1idXR0b24gaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc3VibWl0X3ByaWNlX3JhbmdlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnR28nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJlc2V0LXJhbmdlLWxpbmsgYScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZXNldF9wcmljZV9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3Bfbl9kZWFsX3R5cGUtdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlYWxzX2Rpc2NvdW50c19oZWFkaW5nJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2FyaWEtbGFiZWxsZWRieT0ncF9uX2RlYWxfdHlwZS10aXRsZSddID4gYVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NsZWFyX2RlYWxzX2Rpc2NvdW50X3NlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwX25fZGVhbF90eXBlLXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGV4dF9mb3JtYXQ6ICdDbGVhciBPcHRpb24ge30nLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwX25fZGVhbF90eXBlLXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J2ZhbHNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucHJpY2UnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogZmFsc2UsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1tYWluLXNsb3Qucy1yZXN1bHQtbGlzdC5zLXNlYXJjaC1yZXN1bHRzJyxcbiAgICAgICAgICAgIG5hbWU6ICdzZWFyY2hfcmVzdWx0cycsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuQWRIb2xkZXInLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdhZHMnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2RhdGEtYXNpbl0nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IHRpdGxlRW0/LmdldEF0dHJpYnV0ZSgnYWx0JylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dC50cmltKCkgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbiA9IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uZ2V0QXR0cmlidXRlKCdhbHQnKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucXVlcnlTZWxlY3RvcihcImFbZGF0YS10eXBlPSdwcm9kdWN0VGl0bGUnXVwiKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdhZHMnLCBkYXRhOiB7IHRpdGxlLCBhc2luLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbnNlcnRfc3BsaXRfbWFya2VyOiB0cnVlLFxuICAgICAgICAgICAgICAgIGluc2VydF9zcGxpdF9tYXJrZXJfZXZlcnk6IDQsXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbZGF0YS1jb21wb25lbnQtdHlwZT1cInMtc2VhcmNoLXJlc3VsdFwiXScsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICdzcGFuLmEtY29sb3ItYmFzZS5hLXRleHQtbm9ybWFsLCBoMi5hLWNvbG9yLWJhc2UuYS10ZXh0LW5vcm1hbCBzcGFuJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3NlYXJjaC1yZXN1bHQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2W2RhdGEtY3k9J3RpdGxlLXJlY2lwZSddIGEuYS1saW5rLW5vcm1hbC5zLWxpbmstc3R5bGUuYS10ZXh0LW5vcm1hbFwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LW5hbWUnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X25hbWUnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zLXByb2R1Y3QtaW1hZ2UtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zLWNvbG9yLXN3YXRjaC1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYXZhaWxhYmxlX2NvbG9ycycsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1jb2xvci1zd2F0Y2gtcGFkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZW0ucXVlcnlTZWxlY3RvcignYScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jc2EtYy10eXBlPSdsaW5rJ10gYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy12YXJpYXRpb25zLW9wdGlvbnMtZWxldmF0ZWQnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrX3NlbGVjdG9yOiAnYSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdyZXZpZXdzLWJsb2NrJ11cIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXJldmlldycsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtaWNvbi1hbHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcmF0aW5nJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLnMtdW5kZXJsaW5lLXRleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ3t9IHJldmlld3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXJhdGluZy1jb3VudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9yYXRpbmdfY291bnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jeT0ncHJpY2UtcmVjaXBlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXByaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2EuYS1saW5rLW5vcm1hbCA+IHNwYW4uYS1wcmljZSA+IHNwYW4uYS1vZmZzY3JlZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdkZWxpdmVyeS1yZWNpcGUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LWRlbGl2ZXJ5J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J2FkZC10by1jYXJ0J10gYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWNzYS1jLWNvbnRlbnQtaWQ9J3Mtc2VhcmNoLXNlZS1kZXRhaWxzLWJ1dHRvbiddIGFcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3NlZV9vcHRpb25zJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbbmFtZT1cImF4LXFzXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPSdzcGluYnV0dG9uJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdJbmNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW4gPSBlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZbZGF0YS1jeT0ncHJpY2UtcmVjaXBlJ10gYS5hLWxpbmstbm9ybWFsID4gc3Bhbi5hLXByaWNlID4gc3Bhbi5hLW9mZnNjcmVlblwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuLmEtY29sb3ItYmFzZS5hLXRleHQtbm9ybWFsLCBoMi5hLWNvbG9yLWJhc2UuYS10ZXh0LW5vcm1hbCBzcGFuJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZbZGF0YS1jeT0ndGl0bGUtcmVjaXBlJ10gYS5hLWxpbmstbm9ybWFsLnMtbGluay1zdHlsZS5hLXRleHQtbm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgZGVsaXZlcnlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXCJkaXZbZGF0YS1jeT0nZGVsaXZlcnktcmVjaXBlJ11cIilcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5ID0gZGVsaXZlcnlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1tcXG5dL2csICcgJylcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdzZWFyY2hfcmVzdWx0cycsIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIGRlbGl2ZXJ5IH0gfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLnMtcGFnaW5hdGlvbi1zdHJpcCcsXG4gICAgICAgICAgICBuYW1lOiAncGFnaW5hdGlvbicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcucy1wYWdpbmF0aW9uLWl0ZW0nLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXBvcG92ZXItd3JhcHBlcicsXG4gICAgICAgICAgICBuYW1lOiAncG9wb3ZlcicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdoZWFkZXIuYS1wb3BvdmVyLWhlYWRlciBidXR0b24nLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2xvc2UnLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ2xvc2UnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXBvcG92ZXItaW5uZXIgZGl2LnB1aXMtYXRjLXNpemUtdmFyaWF0aW9uJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXJvdzpudGgtb2YtdHlwZSgxKScsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJzcGFuW2RhdGEtY29tcG9uZW50LXR5cGU9J3MtcHJvZHVjdC1pbWFnZSddIGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1zaXplLXZhcmlhdGlvbi10aXRsZSBhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3RpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXByb2R1Y3Qtc3BlYycsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9zcGVjaWZpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tfc2VsZWN0b3I6ICdhJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1yb3c6bnRoLW9mLXR5cGUoMiknLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1zaXplLXZhcmlhdGlvbi1wcm9kdWN0LW9wdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtZHJvcGRvd24tcHJvbXB0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1zaXplLXZhcmlhdGlvbi1wcmljZSBhLmEtdGV4dC1ub3JtYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogXCJzcGFuW2FyaWEtaGlkZGVuPSd0cnVlJ11cIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1zaXplLXZhcmlhdGlvbi1kZWxpdmVyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWxpdmVyeSdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcm93Om50aC1vZi10eXBlKDMpJyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5zLW5vLWpzLWhpZGUgaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NhbmNlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ2FuY2VsJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1hdGNiLWFkZC1jb250YWluZXIgYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnI3Byb2R1Y3RUaXRsZScsXG4gICAgbWF0Y2hfdGV4dDogJycsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI2NlbnRlckNvbCcsXG4gICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtY2FyZCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdGl0bGUnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGtlZXBfYXR0cjogWydpZCddLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlOiBlbT8uaW5uZXJUZXh0IHx8ICcnIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhdmVyYWdlQ3VzdG9tZXJSZXZpZXdzJyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3JldmlldycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtaWNvbi1hbHQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYWNyQ3VzdG9tZXJSZXZpZXdUZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICcjYXBleF9kZXNrdG9wID4gZGl2W2RhdGEtY3NhLWMtc2xvdC1pZD1cImFwZXhfZHBfY2VudGVyX2NvbHVtblwiXScgK1xuICAgICAgICAgICAgICAgICAgJyA+IGRpdltjbGFzcz1cIm9mZmVyc0NvbnNpc3RlbmN5RW5hYmxlZFwiXSA+IGRpdjpub3QoW3N0eWxlPVwiZGlzcGxheTpub25lO1wiXSk6bm90KFtzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCJdKSAnICtcbiAgICAgICAgICAgICAgICAgICcjY29yZVByaWNlRGlzcGxheV9kZXNrdG9wX2ZlYXR1cmVfZGl2Omhhcygjc25zLWJhc2UtcHJpY2UpICNzbnMtYmFzZS1wcmljZSBzcGFuLmEtcHJpY2UuYW9rLWFsaWduLWNlbnRlci5yZWludmVudFByaWNlUHJpY2VUb1BheU1hcmdpbi5wcmljZVRvUGF5LCAnICtcbiAgICAgICAgICAgICAgICAgICcjYXBleF9kZXNrdG9wID4gZGl2W2RhdGEtY3NhLWMtc2xvdC1pZD1cImFwZXhfZHBfY2VudGVyX2NvbHVtblwiXScgK1xuICAgICAgICAgICAgICAgICAgJyA+IGRpdltjbGFzcz1cIm9mZmVyc0NvbnNpc3RlbmN5RW5hYmxlZFwiXSA+IGRpdjpub3QoW3N0eWxlPVwiZGlzcGxheTpub25lO1wiXSk6bm90KFtzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCJdKSAnICtcbiAgICAgICAgICAgICAgICAgICcjY29yZVByaWNlRGlzcGxheV9kZXNrdG9wX2ZlYXR1cmVfZGl2Om5vdCg6aGFzKCNzbnMtYmFzZS1wcmljZSkpIHNwYW4uYS1wcmljZS5hb2stYWxpZ24tY2VudGVyLnJlaW52ZW50UHJpY2VQcmljZVRvUGF5TWFyZ2luLnByaWNlVG9QYXksICcgK1xuICAgICAgICAgICAgICAgICAgJyNhcGV4X2Rlc2t0b3AgPiBkaXZbZGF0YS1jc2EtYy1zbG90LWlkPVwiYXBleF9kcF9jZW50ZXJfY29sdW1uXCJdID4gZGl2W2RhdGEtY3NhLWMtY29udGVudC1pZD1cImFwZXhfd2l0aF9yaW9fY3hcIl0gJyArXG4gICAgICAgICAgICAgICAgICAnI2NvcmVQcmljZURpc3BsYXlfZGVza3RvcF9mZWF0dXJlX2RpdiBzcGFuLmEtcHJpY2UuYW9rLWFsaWduLWNlbnRlci5yZWludmVudFByaWNlUHJpY2VUb1BheU1hcmdpbi5wcmljZVRvUGF5JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1ByaWNlOiB7fScsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXByaWNlJyxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBwcmljZTogZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcnKSB8fCAnJyB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJycpIHx8ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdHdpc3RlcicsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LW9wdGlvbnMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X29wdGlvbnMnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtc2VjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCkgPiBsYWJlbC5hLWZvcm0tbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKSBsYWJlbC5hLWZvcm0tbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5pbm5lckhUTUwucmVwbGFjZSgvWzpcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpIHNwYW4uc2VsZWN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICk/LmlubmVySFRNTFxuICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpPy5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gb3B0aW9uLmlubmVySFRNTC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsIGRhdGE6IHsgbGFiZWwsIHZhbHVlOiB2YWx1ZS50cmltKCkgfSB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGFiZWwuYS1mb3JtLWxhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLnNlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3VsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdidXR0b25fbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZ0NoaWxkICYmIGltZ0NoaWxkLmFsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBpbWdDaGlsZC5hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWdDaGlsZCAmJiBpbWdDaGlsZC5hbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGltZ0NoaWxkLmFsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIC8vIGhhbmRsZSBuZXcgdHdpc3RlcnNcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3R3aXN0ZXItcGx1cy1pbmxpbmUtdHdpc3RlcicsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LW9wdGlvbnMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X29wdGlvbnMnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmlubGluZS10d2lzdGVyLXJvdycsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUtZXhwYW5kZWQgc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUtZXhwYW5kZWQgc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgID8uaW5uZXJIVE1MLnJlcGxhY2UoL1s6XFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUtZXhwYW5kZWQgc3Bhbi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUnXG4gICAgICAgICAgICAgICAgICAgICAgKT8uaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gZW0ucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk/LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmdldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBvcHRpb24uaW5uZXJIVE1MLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncHJvZHVjdF9vcHRpb25zJywgZGF0YTogeyBsYWJlbCwgdmFsdWU6IHZhbHVlLnRyaW0oKSB9IH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUtZXhwYW5kZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICd1bCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYnV0dG9uX2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkgc3Bhbjpub3QoLmFvay1oaWRkZW4pIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRFbSA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGV4dEVtLmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSB0ZXh0RW0uaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdDaGlsZCA9IHRleHRFbS5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1nQ2hpbGQgJiYgaW1nQ2hpbGQuYWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSAnICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGltZ0NoaWxkLmFsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdDaGlsZCA9IHRleHRFbS5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1nQ2hpbGQgJiYgaW1nQ2hpbGQuYWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBpbWdDaGlsZC5hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHQudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5pbmxpbmUtdHdpc3Rlci1zaW5nbGV0b24taGVhZGVyJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3Rvcignc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LmlubmVySFRNTC5yZXBsYWNlKC9bOlxcbl0vZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3NwYW4uaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICk/LmlubmVySFRNTFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdwcm9kdWN0X29wdGlvbnMnLCBkYXRhOiB7IGxhYmVsLCB2YWx1ZTogdmFsdWUudHJpbSgpIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAnI3Byb2R1Y3RGYWN0c0Rlc2t0b3BFeHBhbmRlciB1bC5hLXVub3JkZXJlZC1saXN0LCAjZmVhdHVyZWJ1bGxldHNfZmVhdHVyZV9kaXYgdWwuYS11bm9yZGVyZWQtbGlzdCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Fib3V0X3RoaXNfaXRlbScsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdBYm91dCB0aGlzIGl0ZW06ICcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldF9saXN0OiBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJyAnKSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNidXlib3g6aGFzKGRpdi5hLXRhYi1jb250YWluZXIpOm5vdCg6aGFzKCNwYXJ0aWFsU3RhdGVfYnV5Ym94X2Rlc2t0b3ApKScsXG4gICAgICAgICAgICBuYW1lOiAnYnV5Ym94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0YWJfaGVhZGluZ19kZXNrdG9wX2J1eWJveF9ncm91cF8xIGEnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdkZWxpdmVyX3RhYicsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0YWJfaGVhZGluZ19kZXNrdG9wX2J1eWJveF9ncm91cF8yIGEnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwaWNrX3VwX3RhYicsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0YWJfZGVza3RvcF9idXlib3hfZ3JvdXBfMScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJ5JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0RlbGl2ZXJ5JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2J1eV9ib3hfd2l0aF9hY2NvcmRpb24sIGJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fZGVsaXZlcnldXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0YWJfZGVza3RvcF9idXlib3hfZ3JvdXBfMicsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3BpY2tfdXAnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUGljayBVcCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX3BpY2tfdXBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I0FTSU4nKVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgYXNpbjogYXNpbkVtPy52YWx1ZSB8fCAnJyB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAnI2J1eWJveDpub3QoOmhhcyhkaXYuYS10YWItY29udGFpbmVyKSk6bm90KDpoYXMoI3BhcnRpYWxTdGF0ZV9idXlib3hfZGVza3RvcCkpJyxcbiAgICAgICAgICAgIG5hbWU6ICdidXlib3gnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtidXlfYm94X3dpdGhfYWNjb3JkaW9uLCBidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX2RlbGl2ZXJ5XSxcbiAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcignaW5wdXQjQVNJTicpXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgZGF0YTogeyBhc2luOiBhc2luRW0/LnZhbHVlIHx8ICcnIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjcGFydGlhbFN0YXRlX2J1eWJveF9kZXNrdG9wJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNwYXJ0aWFsU3RhdGVCdXlib3ggZGl2LmEtc2VjdGlvbi5hLXRleHQtY2VudGVyLmEtc3BhY2luZy1zbWFsbCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcignaW5wdXQjQVNJTicpXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgZGF0YTogeyBhc2luOiBhc2luRW0/LnZhbHVlIHx8ICcnIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjYXR0YWNoLXdhcnJhbnR5LXBhbmUgI2F0dGFjaC13YXJyYW50eS1kaXNwbGF5JyxcbiAgICAgICAgICAgIG5hbWU6ICd3YXJyYW50eS1ib3gnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmF0dGFjaC13YXJyYW50eS1ib3gnLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICcjYXR0YWNoLXdhcnJhbnR5LWNhcmQtZGlzcGxheS10aXRsZScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpLmEtaWNvbi1jaGVja2JveCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2F0dGFjaC13YXJyYW50eS1jYXJkLWRpc3BsYXktdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYXR0YWNoLXdhcnJhbnR5LWNhcmQtcHJpY2UnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtc2VjdGlvbi5hdHRhY2gtd2FycmFudHktYnV0dG9uLXJvdycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbYXJpYS1sYWJlbGxlZGJ5PSdhdHRhY2hTaUFkZENvdmVyYWdlLWFubm91bmNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF9wcm90ZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdBZGQgUHJvdGVjdGlvbidcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2FyaWEtbGFiZWxsZWRieT0nYXR0YWNoU2lOb0NvdmVyYWdlLWFubm91bmNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ25vX3Byb3RlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ05vIFRoYW5rcydcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9jYXJ0L2FkZC10by1jYXJ0JyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIG5hdixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1hdGMtYnV5LWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctc3VidG90YWwnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LXN1YnRvdGFsLWl0ZW0tY291bnQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwic3BhblthcmlhLWhpZGRlbj0ndHJ1ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc2MtYnV5LWJveC1wdGMtYnV0dG9uIHNwYW4uYS1idXR0b24taW5uZXIgaW5wdXQnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdkaXYuc2Mtd2l0aG91dC1tdWx0aWNhcnQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2hlY2tfb3V0J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctZ3RjIGEnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZ29fdG9fY2FydCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2NhcnQvc21hcnQtd2Fnb24nLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LWF0Yy1idXktYm94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1zdWJ0b3RhbCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctc3VidG90YWwtaXRlbS1jb3VudCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJzcGFuW2FyaWEtaGlkZGVuPSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzYy1idXktYm94LXB0Yy1idXR0b24gc3Bhbi5hLWJ1dHRvbi1pbm5lciBpbnB1dCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5zYy13aXRob3V0LW11bHRpY2FydCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdjaGVja19vdXQnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1ndGMgYScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdnb190b19jYXJ0J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvZ3AvY2FydC92aWV3Lmh0bWwnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBjYXJ0XG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvY2FydCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IGNhcnRcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9jYXJ0L2xvY2FsbWFya2V0JyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIG1hdGNoX3dpdGhfcmVmOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogZnJlc2hfY2FydFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2FwL3NpZ25pbicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICB0ZXJtaW5hdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhIWFyZ3VtZW50c1swXVxuICAgIH0sXG4gICAgdGVybWluYXRlX2NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzWzBdXG4gICAgfSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9ncC9idXkvc3BjL2hhbmRsZXJzL2Rpc3BsYXkuaHRtbCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICB0ZXJtaW5hdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhIWFyZ3VtZW50c1swXVxuICAgIH0sXG4gICAgdGVybWluYXRlX2NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzWzBdXG4gICAgfSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9ncC9idXlhZ2FpbicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IGJ1eV9hZ2FpblxuICAgICAgfVxuICAgIF1cbiAgfVxuXVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NFbGVtZW50KGVsZW1lbnQ6IGFueSwgcmVjaXBlOiBhbnksIHBhcmVudE5hbWUgPSAnJywgbnRoQ2hpbGQgPSAwKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwicHJvY2Vzc2luZyBlbGVtZW50OiBcIiwgZWxlbWVudCwgcmVjaXBlKTtcbiAgLy8gQ3JlYXRlIGEgbmV3IGVsZW1lbnQgdXNpbmcgdGhlIERPTSBBUElcbiAgbGV0IHRhZ05hbWUgPSByZWNpcGUudGFnX25hbWUgfHwgZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKClcbiAgLy8gSGFuZGxlIHVuZGVyc2NvcmVkIHRhZ3NcbiAgaWYgKHRhZ05hbWUuZW5kc1dpdGgoJ18nKSkge1xuICAgIHRhZ05hbWUgPSB0YWdOYW1lLnNsaWNlKDAsIC0xKVxuICB9XG4gIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpXG5cbiAgLy8gRXh0cmFjdCB0ZXh0IGNvbnRlbnQgYmFzZWQgb24gdGhlIHJlY2lwZVxuICBsZXQgZWxlbWVudFRleHQgPSAnJ1xuICBpZiAocmVjaXBlLnRleHRfc2VsZWN0b3IpIHtcbiAgICBjb25zdCB0ZXh0RWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihyZWNpcGUudGV4dF9zZWxlY3RvcilcbiAgICBpZiAodGV4dEVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnRUZXh0ID0gdGV4dEVsZW1lbnQuaW5uZXJUZXh0IHx8IHRleHRFbGVtZW50LnRleHRDb250ZW50IHx8ICcnXG4gICAgfVxuICB9IGVsc2UgaWYgKHJlY2lwZS50ZXh0X2pzKSB7XG4gICAgZWxlbWVudFRleHQgPSByZWNpcGUudGV4dF9qcyhlbGVtZW50KVxuICAgIGlmIChlbGVtZW50VGV4dCA9PT0gJycgfHwgZWxlbWVudFRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3RleHQganMgZG9lcyBub3QgZGV0ZWN0IHRleHQgZm9yIGVsZW1lbnQgJywgZWxlbWVudClcbiAgICB9XG4gIH0gZWxzZSBpZiAocmVjaXBlLmFkZF90ZXh0KSB7XG4gICAgZWxlbWVudFRleHQgPSBlbGVtZW50LmlubmVyVGV4dCB8fCBlbGVtZW50LnRleHRDb250ZW50IHx8ICcnXG4gIH1cbiAgZWxlbWVudFRleHQgPSBlbGVtZW50VGV4dC5yZXBsYWNlKC9cXHMrL2csICcgJykudHJpbSgpXG4gIGlmIChyZWNpcGUudGV4dF9mb3JtYXQpIHtcbiAgICBlbGVtZW50VGV4dCA9IHJlY2lwZS50ZXh0X2Zvcm1hdC5yZXBsYWNlKCd7fScsIGVsZW1lbnRUZXh0KVxuICB9IGVsc2UgaWYgKHJlY2lwZS50ZXh0X2Zvcm1hdCkge1xuICAgIGVsZW1lbnRUZXh0ID0gcmVjaXBlLnRleHRfZm9ybWF0XG4gIH1cblxuICBpZiAoZWxlbWVudFRleHQgJiYgcmVjaXBlLmFkZF90ZXh0KSB7XG4gICAgbmV3RWxlbWVudC50ZXh0Q29udGVudCA9IGVsZW1lbnRUZXh0XG4gIH1cblxuICAvLyBCdWlsZCB0aGUgbm9kZSBhdHRyaWJ1dGVzXG4gIGxldCBlbGVtZW50TmFtZSA9ICcnXG4gIGlmIChyZWNpcGUubmFtZSkge1xuICAgIGlmIChyZWNpcGUubmFtZSA9PT0gJ2Zyb21fdGV4dCcpIHtcbiAgICAgIGlmICghZWxlbWVudFRleHQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2VsZW1lbnRUZXh0IGlzIGVtcHR5JywgcmVjaXBlLCBlbGVtZW50KVxuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgfVxuICAgICAgZWxlbWVudE5hbWUgPSBwYXJlbnROYW1lID8gcGFyZW50TmFtZSArICcuJyA6ICcnXG4gICAgICBpZiAoIWVsZW1lbnRUZXh0KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZWxlbWVudCB0ZXh0IG5vdCBmb3VuZFwiKTtcbiAgICAgICAgZWxlbWVudE5hbWUgPSAnJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudE5hbWUgKz0gZWxlbWVudFRleHQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXlxcd10rL2csICdfJylcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJlY2lwZS5uYW1lID09PSAnZnJvbV9udGhfY2hpbGQnKSB7XG4gICAgICBlbGVtZW50TmFtZSA9IHBhcmVudE5hbWUgPyBwYXJlbnROYW1lICsgJy4nIDogJydcbiAgICAgIGVsZW1lbnROYW1lICs9IG50aENoaWxkLnRvU3RyaW5nKClcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudE5hbWUgPSBwYXJlbnROYW1lID8gcGFyZW50TmFtZSArICcuJyA6ICcnXG4gICAgICBlbGVtZW50TmFtZSArPSByZWNpcGUubmFtZVxuICAgIH1cbiAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnbmFtZScsIGVsZW1lbnROYW1lKVxuICAgIHBhcmVudE5hbWUgPSBlbGVtZW50TmFtZVxuICB9XG5cbiAgaWYgKHJlY2lwZS5nZW5lcmF0ZV9tZXRhZGF0YSkge1xuICAgIGNvbnN0IG1ldGFvYmogPSByZWNpcGUuZ2VuZXJhdGVfbWV0YWRhdGEoZWxlbWVudClcbiAgICBjb25zdCBtZXRhZGF0YSA9IEpTT04uc3RyaW5naWZ5KG1ldGFvYmouZGF0YSlcbiAgICBjb25zdCBtZXRhbmFtZSA9IG1ldGFvYmoubmFtZVxuXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnLCBtZXRhbmFtZSlcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtZGF0YScsIG1ldGFkYXRhKVxuICAgIC8vIGNvbnNvbGUubG9nKCdtZXRhZGF0YSBnZW5lcmF0ZWQ6ICcsIG1ldGFkYXRhLCAnIHdpdGggbmFtZTogJywgbWV0YW5hbWUpXG4gIH1cblxuICAvLyBIYW5kbGUgY2xpY2thYmxlcyBhbmQgaW5wdXRzXG4gIGlmIChyZWNpcGUuY2xpY2thYmxlKSB7XG4gICAgaWYgKCFyZWNpcGUubmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjbGlja2FibGUgZWxlbWVudCBtdXN0IGhhdmUgYSBuYW1lJylcbiAgICB9XG4gICAgLy8gaGFuZGxlIGNsaWNrX3NlbGVjdG9yXG4gICAgbGV0IGNsaWNrX2VsZW1lbnQ6IEVsZW1lbnQgfCBudWxsXG4gICAgaWYgKHJlY2lwZS5jbGlja19zZWxlY3Rvcikge1xuICAgICAgY2xpY2tfZWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihyZWNpcGUuY2xpY2tfc2VsZWN0b3IpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNsaWNrX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgfVxuICAgIGlmIChjbGlja19lbGVtZW50KSB7XG4gICAgICBjbGlja19lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnLCBlbGVtZW50TmFtZSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2NsaWNrLWVsZW1lbnQgbm90IGZvdW5kJywgZWxlbWVudCwgcmVjaXBlKVxuICAgIH1cbiAgICBpZiAoIXdpbmRvdy5jbGlja2FibGVfcmVjaXBlcykge1xuICAgICAgd2luZG93LmNsaWNrYWJsZV9yZWNpcGVzID0ge31cbiAgICB9XG4gICAgd2luZG93LmNsaWNrYWJsZV9yZWNpcGVzW2VsZW1lbnROYW1lXSA9IHJlY2lwZVxuICB9XG4gIGlmICh0YWdOYW1lID09PSAnaW5wdXQnKSB7XG4gICAgY29uc3QgaW5wdXRUeXBlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKVxuICAgIGlmIChbJ3RleHQnLCAnbnVtYmVyJ10uaW5jbHVkZXMoaW5wdXRUeXBlKSkge1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZWxlbWVudC52YWx1ZSlcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWlucHV0LWlkJywgZWxlbWVudE5hbWUpXG4gICAgfSBlbHNlIGlmIChpbnB1dFR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgZWxlbWVudC5jaGVja2VkLnRvU3RyaW5nKCkpXG4gICAgfSBlbHNlIGlmIChpbnB1dFR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgZWxlbWVudC5jaGVja2VkLnRvU3RyaW5nKCkpXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnLCBlbGVtZW50TmFtZSlcbiAgICB9XG4gICAgaWYgKCF3aW5kb3cuaW5wdXRfcmVjaXBlcykge1xuICAgICAgd2luZG93LmlucHV0X3JlY2lwZXMgPSB7fVxuICAgIH1cbiAgICB3aW5kb3cuaW5wdXRfcmVjaXBlc1tlbGVtZW50TmFtZV0gPSByZWNpcGVcbiAgfVxuICAvLyAqKkhhbmRsZSBzZWxlY3QgZWxlbWVudHMqKlxuICBpZiAodGFnTmFtZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAvLyBUYWcgdGhlIHNlbGVjdCBlbGVtZW50IHdpdGggZGF0YS1zZWxlY3QtaWRcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1zZWxlY3QtaWQnLCBlbGVtZW50TmFtZSlcblxuICAgIGNvbnN0IHNlbGVjdElkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJylcblxuICAgIGNvbnN0IG5hbWVJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJylcblxuICAgIGNvbnN0IHRhZyA9IGVsZW1lbnQucGFyZW50RWxlbWVudD8ucXVlcnlTZWxlY3Rvcignc3Bhbi5hLWJ1dHRvbi1kcm9wZG93biBzcGFuLmEtYnV0dG9uLXRleHQnKVxuICAgIGNvbnN0IG5ld1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIG5ld1RhZy50ZXh0Q29udGVudCA9IHRhZy50ZXh0Q29udGVudFxuICAgIGNvbnN0IHRhZ05hbWUgPSBlbGVtZW50TmFtZSArICcub3Blbl9kcm9wX2Rvd25fbGlzdCdcbiAgICBuZXdUYWcuc2V0QXR0cmlidXRlKCduYW1lJywgdGFnTmFtZSlcbiAgICB0YWcuc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcsIHRhZ05hbWUpIC8vIFRhZyBhY3R1YWwgRE9NIG9wdGlvbiBlbGVtZW50XG5cbiAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKG5ld1RhZylcblxuICAgIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2lkXj1cIicgKyBzZWxlY3RJZCArICdcIl0nKVxuICAgIG9wdGlvbnMuZm9yRWFjaChhc3luYyAob3B0aW9uKSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25WYWx1ZSA9IG9wdGlvbi50ZXh0Q29udGVudC50cmltKClcbiAgICAgIGNvbnN0IG9wdGlvbk5hbWUgPSBlbGVtZW50TmFtZSArICcuJyArIG9wdGlvblZhbHVlXG4gICAgICBjb25zdCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgIG5ld09wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvbi50ZXh0Q29udGVudFxuICAgICAgbmV3T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBvcHRpb25WYWx1ZSlcbiAgICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBvcHRpb25OYW1lKVxuICAgICAgbmV3T3B0aW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCBvcHRpb24uZ2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJykpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcsIG9wdGlvbk5hbWUpIC8vIFRhZyBhY3R1YWwgRE9NIG9wdGlvbiBlbGVtZW50XG4gICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKG5ld09wdGlvbilcbiAgICB9KVxuICB9XG4gIC8vIENvcHkgc3BlY2lmaWVkIGF0dHJpYnV0ZXNcbiAgY29uc3QgYXR0cnNUb0NvcHkgPSBbXG4gICAgJ2FsdCcsXG4gICAgJ3RpdGxlJyxcbiAgICAndHlwZScsXG4gICAgJ3ZhbHVlJyxcbiAgICAncm9sZScsXG4gICAgJ2FyaWEtbGFiZWwnLFxuICAgICdhcmlhLWhpZGRlbicsXG4gICAgJ2FyaWEtc2VsZWN0ZWQnXG4gIF1cbiAgYXR0cnNUb0NvcHkuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cilcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKVxuICAgIH1cbiAgfSlcbiAgaWYgKHJlY2lwZS5rZWVwX2F0dHIpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImF0dHJpYnV0ZXMgdG8ga2VlcDogXCIsIHJlY2lwZS5rZWVwX2F0dHIpO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHJlY2lwZS5rZWVwX2F0dHIpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KVxuICAgICAgLy8gY29uc29sZS5sb2coa2V5LCB2YWx1ZSlcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAocmVjaXBlWydjbGFzcyddKSB7XG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgcmVjaXBlWydjbGFzcyddKVxuICB9XG4gIGlmIChyZWNpcGVbJ2lkJ10pIHtcbiAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCByZWNpcGVbJ2lkJ10pXG4gIH1cblxuICAvLyBPdmVycmlkZSBhdHRyaWJ1dGVzIGlmIHNwZWNpZmllZFxuICBpZiAocmVjaXBlLm92ZXJyaWRlX2F0dHIpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiByZWNpcGUub3ZlcnJpZGVfYXR0cikge1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCByZWNpcGUub3ZlcnJpZGVfYXR0cltrZXldKGVsZW1lbnQpKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByb2Nlc3MgY2hpbGRyZW5cbiAgaWYgKHJlY2lwZS5jaGlsZHJlbiAmJiByZWNpcGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgIGZvciAoY29uc3QgY2hpbGRSZWNpcGUgb2YgcmVjaXBlLmNoaWxkcmVuKSB7XG4gICAgICBjb25zdCBzZWxlY3RvciA9IGNoaWxkUmVjaXBlLmRpcmVjdF9jaGlsZFxuICAgICAgICA/IGA6c2NvcGUgPiAke2NoaWxkUmVjaXBlLnNlbGVjdG9yfWBcbiAgICAgICAgOiBjaGlsZFJlY2lwZS5zZWxlY3RvclxuICAgICAgbGV0IGNoaWxkRWxlbWVudHNcbiAgICAgIGlmIChjaGlsZFJlY2lwZS51c2Vfcm9vdCkge1xuICAgICAgICBjaGlsZEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgICAgICAgY29uc29sZS5sb2coJ3VzZSByb290IGZvciAnLCBjaGlsZEVsZW1lbnRzKVxuICAgICAgfSBlbHNlIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudDogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IHByb2Nlc3NFbGVtZW50KGNoaWxkRWxlbWVudCwgY2hpbGRSZWNpcGUsIHBhcmVudE5hbWUsIGluZGV4KVxuICAgICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkTm9kZSlcbiAgICAgICAgaWYgKGNoaWxkUmVjaXBlLmluc2VydF9zcGxpdF9tYXJrZXIpIHtcbiAgICAgICAgICBjb25zdCBldmVyeSA9IGNoaWxkUmVjaXBlLmluc2VydF9zcGxpdF9tYXJrZXJfZXZlcnkgfHwgMVxuICAgICAgICAgIGlmIChpbmRleCAlIGV2ZXJ5ID09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0TWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BsaXQtbWFya2VyJylcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoc3BsaXRNYXJrZXIpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluc2VydGluZyBzcGxpdCBtYXJrZXIgMVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkUmVjaXBlLmluc2VydF9zcGxpdF9tYXJrZXIpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluc2VydGluZyBzcGxpdCBtYXJrZXIgMlwiKTtcbiAgICAgICAgICBjb25zdCBzcGxpdE1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwbGl0LW1hcmtlcicpXG4gICAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChzcGxpdE1hcmtlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbm8gc3BsaXQgbWFya2VyJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvLyBIYW5kbGUgZW1wdHkgbWVzc2FnZXNcbiAgaWYgKHJlY2lwZS5lbXB0eV9tZXNzYWdlICYmIG5ld0VsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgY29uc3QgZW1wdHlUZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHJlY2lwZS5lbXB0eV9tZXNzYWdlKVxuICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoZW1wdHlUZXh0Tm9kZSlcbiAgfVxuXG4gIHJldHVybiBuZXdFbGVtZW50XG59XG4iLCJpbXBvcnQgeyBzdGFydHNXaXRoIH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgZmlsdGVyX3VybCwgdXJsX2luY2x1ZGVzLCBjaGVja191c2VyX2lkX3VybCB9IGZyb20gJy4uL2NvbmZpZydcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnJvbVBvcHVwKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gIHJldHVybiBlbGVtZW50LmNsb3Nlc3QoJyNyZWFzb24tbW9kYWwnKSAhPT0gbnVsbFxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZV9pY29uKHVybCkge1xuICBjb25zb2xlLmxvZygndXBkYXRlX2ljb24nLCB1cmwpXG4gIGlmICghKGF3YWl0IHNob3VsZEV4Y2x1ZGUodXJsKSkpIHtcbiAgICBjb25zb2xlLmxvZygnYWN0aXZlIGljb24nKVxuICAgIGNocm9tZS5hY3Rpb24uc2V0SWNvbih7XG4gICAgICBwYXRoOiAnLi4vaWNvbi5wbmcnXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnaW5hY3RpdmUgaWNvbicpXG4gICAgY2hyb21lLmFjdGlvbi5zZXRJY29uKHtcbiAgICAgIHBhdGg6ICcuLi9pbmFjdGl2ZV9pY29uLnBuZydcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUGFnZU1ldGEoKSB7XG4gIGNvbnN0IGFsbF9lbGVtZW50X3dpdGhfbWV0YV9kYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZWxlbWVudC1tZXRhLW5hbWVdJylcblxuICBjb25zdCBncm91cGVkUmVzdWx0ID0ge31cblxuICBhbGxfZWxlbWVudF93aXRoX21ldGFfZGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgbWV0YU5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtbmFtZScpXG4gICAgY29uc3QgbWV0YURhdGEgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtZGF0YScpXG5cbiAgICBpZiAoIWdyb3VwZWRSZXN1bHRbbWV0YU5hbWVdKSB7XG4gICAgICBncm91cGVkUmVzdWx0W21ldGFOYW1lXSA9IFtdXG4gICAgfVxuICAgIGdyb3VwZWRSZXN1bHRbbWV0YU5hbWVdLnB1c2goSlNPTi5wYXJzZShtZXRhRGF0YSkpXG4gIH0pXG5cbiAgcmV0dXJuIGdyb3VwZWRSZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWNrYWJsZUVsZW1lbnRzSW5WaWV3cG9ydCgpIHtcbiAgLy8gU2VsZWN0IGFsbCBwb3RlbnRpYWwgY2xpY2thYmxlIGVsZW1lbnRzXG4gIGNvbnN0IGRvY3VtZW50Q29weSA9IGRvY3VtZW50LmNsb25lTm9kZSh0cnVlKSBhcyBEb2N1bWVudFxuICBjb25zdCBhbGxFbGVtZW50cyA9IGRvY3VtZW50Q29weS5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICdhLCBidXR0b24sIFtvbmNsaWNrXSwgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSdcbiAgKVxuXG4gIC8vIENoZWNrIGlmIGVhY2ggZWxlbWVudCBpcyBpbiB0aGUgdmlld3BvcnQgYW5kIGFkZCBtYXJrZXJcbiAgYWxsRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgaWYgKFxuICAgICAgcmVjdC50b3AgPj0gMCAmJlxuICAgICAgcmVjdC5sZWZ0ID49IDAgJiZcbiAgICAgIHJlY3QuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgJiZcbiAgICAgIHJlY3QucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aClcbiAgICApIHtcbiAgICAgIC8vIEFkZCBtYXJrZXIgYXR0cmlidXRlIHRvIHRoZSBlbGVtZW50XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndmlzaWJsZS1jbGlja2FibGUtZWxlbWVudC1tYXJrZXInLCAndHJ1ZScpXG4gICAgfVxuICB9KVxuICByZXR1cm4gZG9jdW1lbnRDb3B5XG59XG5cbi8vIEFkZCBjbGVhbnVwIGZ1bmN0aW9uIHRvIHJlbW92ZSBtYXJrZXJzIHdoZW4gbmVlZGVkXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xpY2thYmxlTWFya2VycygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW3Zpc2libGUtY2xpY2thYmxlLWVsZW1lbnQtbWFya2VyXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndmlzaWJsZS1jbGlja2FibGUtZWxlbWVudC1tYXJrZXInKVxuICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2hvdWxkRXhjbHVkZSh1cmw6IHN0cmluZywgaWdub3JlVXNlcklkOiBib29sZWFuID0gZmFsc2UpIHtcbiAgaWYgKCFpZ25vcmVVc2VySWQpIHtcbiAgICBpZiAoY2hyb21lLnN0b3JhZ2UpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgndXNlcklkJylcbiAgICAgIGlmICghcmVzdWx0LnVzZXJJZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbm8gdXNlciBpZCcpXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIHVzZXIgaWQsIHdlIHNob3VsZCBub3QgYmUgcmVjb3JkaW5nIGFueXRoaW5nXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlTWVzc2FnZSA9IChldmVudDogTWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmRhdGEudHlwZSA9PT0gJ0dFVF9VU0VSX0lEX1JFU1BPTlNFJykge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgcmVzb2x2ZShldmVudC5kYXRhLnVzZXJJZClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiAnR0VUX1VTRVJfSUQnIH0sICcqJylcbiAgICAgIH0pXG4gICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyB1c2VyIGlkLCB3ZSBzaG91bGQgbm90IGJlIHJlY29yZGluZyBhbnl0aGluZ1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuIChcbiAgICAhdXJsX2luY2x1ZGVzLnNvbWUoKGluY2x1ZGVVcmwpID0+IHVybC5pbmNsdWRlcyhpbmNsdWRlVXJsKSkgfHxcbiAgICBmaWx0ZXJfdXJsLnNvbWUoKGV4Y2x1ZGVVcmwpID0+IHVybC5pbmNsdWRlcyhleGNsdWRlVXJsKSlcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVIdG1sU25hcHNob3RJZCh0aW1lc3RhbXA6IHN0cmluZywgdXVpZDogc3RyaW5nKSB7XG4gIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gIHJldHVybiBgaHRtbF8ke2hhc2hDb2RlKHVybCl9XyR7dGltZXN0YW1wfV8ke3V1aWR9YFxufVxuZXhwb3J0IGZ1bmN0aW9uIGhhc2hDb2RlKHN0cjogc3RyaW5nKSB7XG4gIGxldCBoYXNoID0gMFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGhhc2ggPSAoaGFzaCA8PCA1KSAtIGhhc2ggKyBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhhc2ggfD0gMFxuICB9XG4gIGNvbnNvbGUubG9nKCdIYXNoIHZhbHVlIGJlZm9yZSByZXR1cm46JywgaGFzaClcbiAgcmV0dXJuIGhhc2gudG9TdHJpbmcoKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tfdXNlcl9pZCh1c2VyX2lkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2NoZWNrX3VzZXJfaWRfdXJsfT91c2VyX2lkPSR7dXNlcl9pZH1gLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnXG4gICAgfSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIHJldHVybiAnc3VjY2VzcydcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGEgfHwgJ1Vua25vd24gZXJyb3InXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHsoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2V9YClcbiAgfVxuICByZXR1cm4gJ1Vua25vd24gZXJyb3InXG59XG5cbmltcG9ydCB7IHJlY2lwZXMgfSBmcm9tICcuLi9yZWNpcGVfbmV3J1xuaW1wb3J0IHsgcHJvY2Vzc0VsZW1lbnQgfSBmcm9tICcuL2VsZW1lbnQtcHJvY2Vzc29yJ1xuZnVuY3Rpb24gc2VsZWN0UmVjaXBlKCkge1xuICBjb25zdCBwYXJzZWRVcmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICBsZXQgcGF0aCA9IHBhcnNlZFVybC5wYXRobmFtZVxuICBwYXRoID0gcGF0aCAhPT0gJy8nID8gcGF0aC5yZXBsYWNlKC9cXC8rJC8sICcnKSA6IHBhdGhcblxuICBmb3IgKGNvbnN0IHJlY2lwZSBvZiByZWNpcGVzKSB7XG4gICAgY29uc3QgbWF0Y2hNZXRob2QgPSByZWNpcGUubWF0Y2hfbWV0aG9kIHx8ICd0ZXh0J1xuICAgIGlmIChtYXRjaE1ldGhvZCA9PT0gJ3RleHQnKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBFeGVjdXRlIHNjcmlwdCBpbiB0YWIgdG8gY2hlY2sgZm9yIG1hdGNoaW5nIGVsZW1lbnRcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVjaXBlLm1hdGNoKVxuXG4gICAgICAgIGNvbnN0IGhhc01hdGNoID1cbiAgICAgICAgICBlbGVtZW50ICYmXG4gICAgICAgICAgKCFyZWNpcGUubWF0Y2hfdGV4dCB8fFxuICAgICAgICAgICAgKGVsZW1lbnQudGV4dENvbnRlbnQ/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocmVjaXBlLm1hdGNoX3RleHQudG9Mb3dlckNhc2UoKSkgPz8gZmFsc2UpKVxuXG4gICAgICAgIGlmIChoYXNNYXRjaCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdtYXRjaGVkIHdpdGggcmVjaXBlICcsIHJlY2lwZS5tYXRjaClcbiAgICAgICAgICByZXR1cm4gcmVjaXBlXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNoZWNraW5nIHRleHQgbWF0Y2g6JywgZXJyb3IpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtYXRjaE1ldGhvZCA9PT0gJ3VybCcpIHtcbiAgICAgIGlmIChyZWNpcGUubWF0Y2ggPT09IHBhdGgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21hdGNoZWQgd2l0aCByZWNpcGUgJywgcmVjaXBlLm1hdGNoKVxuICAgICAgICByZXR1cm4gcmVjaXBlXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICByZWNpcGUubWF0Y2hfd2l0aF9yZWYgJiZcbiAgICAgICAgKHBhdGguc3RhcnRzV2l0aChyZWNpcGUubWF0Y2ggKyAnL3JlZj0nKSB8fCBwYXRoLnN0YXJ0c1dpdGgocmVjaXBlLm1hdGNoICsgJ3JlZj0nKSlcbiAgICAgICkge1xuICAgICAgICBjb25zb2xlLmxvZygnbWF0Y2hlZCB3aXRoIHJlY2lwZSAnLCByZWNpcGUubWF0Y2gpXG4gICAgICAgIHJldHVybiByZWNpcGVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoYE5vIG1hdGNoaW5nIHJlY2lwZSBmb3VuZCBmb3IgcGF0aDogJHtwYXRofWApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzUmVjaXBlKCkge1xuICBjb25zb2xlLmxvZygnc3RhcnQgcHJvY2VzcyByZWNpcGUnKVxuICB0cnkge1xuICAgIGNvbnN0IHJlY2lwZSA9IHNlbGVjdFJlY2lwZSgpXG4gICAgY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlY2lwZS5zZWxlY3RvcilcbiAgICBpZiAocm9vdEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IG5ld1Jvb3QgPSBwcm9jZXNzRWxlbWVudChyb290RWxlbWVudCwgcmVjaXBlKVxuICAgICAgY29uc3Qgc2ltcGxpZmllZEhUTUwgPSBuZXdSb290Lm91dGVySFRNTFxuICAgICAgcmV0dXJuIHNpbXBsaWZpZWRIVE1MXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHByb2Nlc3NpbmcgcmVjaXBlOicsIGVycm9yKVxuICB9XG59XG5cbi8vIFJlcGxhY2UgdGhlIHNpbXBsZSBxdWVzdGlvbiB3aXRoIGEgbW9yZSBkZXRhaWxlZCBvbmUgYmFzZWQgb24gZXZlbnQgdHlwZVxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1c3RvbVF1ZXN0aW9uKFxuICBldmVudFR5cGU6IHN0cmluZyxcbiAgZGF0YTogYW55XG4pOiB7IHF1ZXN0aW9uOiBzdHJpbmc7IHBsYWNlaG9sZGVyOiBzdHJpbmcgfSB7XG4gIGxldCBxdWVzdGlvbiA9ICcnXG4gIGxldCBwbGFjZWhvbGRlciA9ICdFbnRlciB5b3VyIHJlYXNvbiBoZXJlLi4uJ1xuICBzd2l0Y2ggKGV2ZW50VHlwZSkge1xuICAgIGNhc2UgJ2NsaWNrX2EnOlxuICAgIGNhc2UgJ2NsaWNrX2InOlxuICAgIGNhc2UgJ2NsaWNrX2MnOlxuICAgICAgLy8gQ2hlY2sgaWYgaXQncyBhIHNwZWNpZmljIHR5cGUgb2YgY2xpY2tcbiAgICAgIGlmIChcbiAgICAgICAgZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddID09PSAnYnV5Ym94LmRlbGl2ZXJ5LnN1YnNjcmliZV9zYXZlXy5wdXJjaGFzZV9mb3JtLnNldF91cF9ub3cnIHx8XG4gICAgICAgIGRhdGEudGFyZ2V0LmlubmVyVGV4dCA9PT0gJ1NldCBVcCBOb3cnXG4gICAgICApIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdZb3UgPHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XCI+Y2xpY2tlZDwvc3Bhbj4gb24gdGhlIHNldCB1cCBub3cgYnV0dG9uLiBXaGF0IG1ha2VzIHlvdSBjaG9vc2UgdG8gc3Vic2NyaWJlIHRvIHRoaXMgcHJvZHVjdD8nXG4gICAgICAgIHBsYWNlaG9sZGVyID0gJ0kgY2hvb3NlIHRvIHN1YnNjcmliZSBiZWNhdXNlLi4uJ1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddID09PSAnYnV5Ym94LmRlbGl2ZXJ5Lm9uZV90aW1lX3B1cmNoYXNlXy5wdXJjaGFzZV9mb3JtLmJ1eV9ub3cnIHx8XG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXSA9PT0gJ2J1eWJveC5kZWxpdmVyeS5wdXJjaGFzZV9mb3JtLmJ1eScgfHxcbiAgICAgICAgZGF0YS50YXJnZXQuaWQgPT09ICdidXktbm93LWJ1dHRvbidcbiAgICAgICkge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1lvdSA8c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHllbGxvdztcIj5jbGlja2VkPC9zcGFuPiBvbiB0aGUgYnV5IG5vdyBidXR0b24uIFdoYXQgZG8geW91IGxpa2UgYWJvdXQgdGhpcyBwYXJ0aWN1bGFyIHByb2R1Y3Q/J1xuICAgICAgICBwbGFjZWhvbGRlciA9ICdJIGFtIGJ1eWluZyB0aGlzIHByb2R1Y3QgYmVjYXVzZS4uLidcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uc3RhcnRzV2l0aCgnc2VhcmNoX3Jlc3VsdHMuJykgfHxcbiAgICAgICAgZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddPy5zdGFydHNXaXRoKCdwcm9kdWN0X2xpc3QuJykgfHxcbiAgICAgICAgKGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uc3RhcnRzV2l0aCgnYWN0aXZlX2l0ZW1fbGlzdC4nKSAmJlxuICAgICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uZW5kc1dpdGgoJy5wcm9kdWN0X2RldGFpbCcpKSB8fFxuICAgICAgICBkYXRhLnRhcmdldC5jbGFzc05hbWU/LmluY2x1ZGVzKCdzYy1wcm9kdWN0LWxpbmsnKVxuICAgICAgKSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnWW91IDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1wiPmNsaWNrZWQ8L3NwYW4+IG9uIHRoaXMgcHJvZHVjdC4gV2hhdCBjYXVnaHQgeW91ciBhdHRlbnRpb24gY29tcGFyZWQgdG8gdGhlIG90aGVyIG9wdGlvbnMgeW91IHNhdz8nXG4gICAgICAgIHBsYWNlaG9sZGVyID0gJ0kgbGlrZSB0aGlzIHByb2R1Y3QgYmVjYXVzZcOfLi4uJ1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddPy5lbmRzV2l0aCgnYWRkX3RvX2NhcnQnKSB8fFxuICAgICAgICBkYXRhLnRhcmdldC5pZCA9PT0gJ2FkZC10by1jYXJ0LWJ1dHRvbicgfHxcbiAgICAgICAgZGF0YS50YXJnZXQubmFtZSA9PT0gJ3N1Ym1pdC5hZGRUb0NhcnQnIHx8XG4gICAgICAgIGRhdGEudGFyZ2V0LmlubmVyVGV4dCA9PT0gJ0FkZCB0byBDYXJ0J1xuICAgICAgKSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnWW91IDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1wiPmNsaWNrZWQ8L3NwYW4+IG9uIHRoZSBhZGQgdG8gY2FydCBidXR0b24uIFdoYXQgbWFrZXMgeW91IGRlY2lkZSB0byBhZGQgdGhpcyBpdGVtIHRvIHlvdXIgY2FydD8nXG4gICAgICAgIHBsYWNlaG9sZGVyID0gJ0kgYWRkIHRoaXMgaXRlbSB0byBteSBjYXJ0IGJlY2F1c2UuLi4nXG4gICAgICB9IGVsc2UgaWYgKGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXSA9PT0gJ25hdl9iYXIuc2VhcmNoX2J1dHRvbicpIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdZb3UgPHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XCI+Y2xpY2tlZDwvc3Bhbj4gb24gdGhlIHNlYXJjaCBidXR0b24uIFdoYXQgYXJlIHlvdSBzZWFyY2hpbmcgZm9yPydcbiAgICAgICAgcGxhY2Vob2xkZXIgPSAnSSB3YW50IHRvIGZpbmQgLi4uJ1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddPy5zdGFydHNXaXRoKCdyZWZpbmVtZW50cy4nKSB8fFxuICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LnN0YXJ0c1dpdGgoJ2ZpbHRlcnMuJylcbiAgICAgICkge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1lvdSA8c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHllbGxvdztcIj5jbGlja2VkPC9zcGFuPiBvbiB0aGlzIGZpbHRlci4gV2hhdCBhcmUgeW91IGhvcGluZyB0byBmaW5kIHdpdGggdGhpcyBmaWx0ZXI/J1xuICAgICAgICBwbGFjZWhvbGRlciA9ICdJIHdhbnQgdG8gZmluZCAuLi4nXG4gICAgICB9IGVsc2UgaWYgKGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uc3RhcnRzV2l0aCgncHJvZHVjdF9vcHRpb25zLicpKSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnWW91IDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1wiPmNsaWNrZWQ8L3NwYW4+IG9uIHRoaXMgcHJvZHVjdCBvcHRpb24uIFdoYXQgZG8geW91IGxpa2UgYWJvdXQgdGhpcyBwcm9kdWN0IG9wdGlvbj8nXG4gICAgICAgIGlmIChkYXRhWydlbGVtZW50LW1ldGEtbmFtZSddID09PSAncHJvZHVjdF9vcHRpb25zJyAmJiBkYXRhWydlbGVtZW50LW1ldGEtZGF0YSddICE9PSAnJykge1xuICAgICAgICAgIHF1ZXN0aW9uID0gYFlvdSA8c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHllbGxvdztcIj5jbGlja2VkPC9zcGFuPiBvbiAke2RhdGFbJ2VsZW1lbnQtbWV0YS1kYXRhJ11bJ3ZhbHVlJ119LiBXaGF0IGRvIHlvdSBsaWtlIGFib3V0IHRoaXMgcHJvZHVjdCBvcHRpb24/YFxuICAgICAgICB9XG4gICAgICAgIHBsYWNlaG9sZGVyID0gJ0kgbGlrZSB0aGlzIHByb2R1Y3Qgb3B0aW9uIGJlY2F1c2UuLi7DnydcbiAgICAgIH0gZWxzZSBpZiAoZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddPy5lbmRzV2l0aCgnY2hlY2tfb3V0JykpIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdZb3UgPHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XCI+Y2xpY2tlZDwvc3Bhbj4gY2hlY2tvdXQgYnV0dG9uLiBXaGF0IG1ha2VzIHlvdSBjaG9vc2UgdG8gY2hlY2tvdXQ/J1xuICAgICAgICBwbGFjZWhvbGRlciA9ICdJIGNob29zZSB0byBjaGVja291dCBiZWNhdXNlLi4uJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdZb3UgPHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XCI+Y2xpY2tlZDwvc3Bhbj4gb24gdGhpcyBlbGVtZW50LiBDb3VsZCB5b3Ugc2hhcmUgd2hhdCB5b3Ugd2VyZSB0cnlpbmcgdG8gZG8gb3IgZmluZD8nXG4gICAgICAgIHBsYWNlaG9sZGVyID0gJ0VudGVyIHlvdXIgcmVhc29uIGhlcmUuLi4nXG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGNhc2UgJ3Njcm9sbCc6XG4gICAgICBxdWVzdGlvbiA9XG4gICAgICAgICdZb3UgPHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XCI+c2Nyb2xsZWQ8L3NwYW4+IG9uIHRoaXMgcGFnZS4gV2hhdCBpbmZvcm1hdGlvbiBhcmUgeW91IGxvb2tpbmcgZm9yPydcbiAgICAgIHBsYWNlaG9sZGVyID0gJ0kgd2FudCB0byBmaW5kIC4uLidcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnaW5wdXQnOlxuICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAnWW91IDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1wiPnR5cGVkPC9zcGFuPiBpbiB0aGlzIGlucHV0IGZpZWxkLiBXaGF0IGFyZSB5b3Ugc2VhcmNoaW5nIGZvcj8nXG4gICAgICBwbGFjZWhvbGRlciA9ICdJIHdhbnQgdG8gZmluZCAuLi4nXG4gICAgICBicmVha1xuICAgIGNhc2UgJ25hdmlnYXRpb24nOlxuICAgICAgaWYgKGRhdGEubmF2aWdhdGlvblR5cGUgPT09ICdiYWNrJykge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1doeSBkaWQgeW91IGRlY2lkZSB0byA8c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHllbGxvdztcIj5nbyBiYWNrPC9zcGFuPiB0byB0aGUgcHJldmlvdXMgcGFnZT8nXG4gICAgICAgIHBsYWNlaG9sZGVyID0gXCJJJ20gYmFjayBiZWNhdXNlLi4uXCJcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5uYXZpZ2F0aW9uVHlwZSA9PT0gJ2ZvcndhcmQnKSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnV2h5IGRpZCB5b3UgZGVjaWRlIHRvIDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1wiPnJldHVybjwvc3Bhbj4gdG8gdGhpcyBwYWdlID8nXG4gICAgICAgIHBsYWNlaG9sZGVyID0gJ0kgd2FudCB0byBmaW5kIC4uLidcbiAgICAgIH1cbiAgICAgIHF1ZXN0aW9uID0gYFdoYXQgaXMgdGhlIHJlYXNvbiBmb3IgdGhpcyA8c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHllbGxvdztcIj4ke2RhdGEubmF2aWdhdGlvblR5cGV9IG5hdmlnYXRpb248L3NwYW4+P2BcbiAgICAgIHBsYWNlaG9sZGVyID0gJ0VudGVyIHlvdXIgcmVhc29uIGhlcmUuLi4nXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3RhYkFjdGl2YXRlJzpcbiAgICAgIHF1ZXN0aW9uID0gYFdoeSBkaWQgeW91IDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1wiPnN3aXRjaCB0byB0aGlzIHRhYjwvc3Bhbj4/YFxuICAgICAgcGxhY2Vob2xkZXIgPSAnSSBzd2l0Y2hlZCB0byB0aGlzIHRhYiBiZWNhdXNlLi4uJ1xuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgcXVlc3Rpb24gPSBgV2hhdCBpcyB0aGUgcmVhc29uIGZvciB0aGUgJHtldmVudFR5cGV9IGFjdGlvbj9gXG4gICAgICBwbGFjZWhvbGRlciA9ICdFbnRlciB5b3VyIHJlYXNvbiBoZXJlLi4uJ1xuICAgICAgYnJlYWtcbiAgfVxuICByZXR1cm4geyBxdWVzdGlvbiwgcGxhY2Vob2xkZXIgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZFJlYXNvbihyZWFzb246IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAoIXJlYXNvbiB8fCByZWFzb24udHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZSAvLyBFbXB0eSBpbnB1dFxuICB9XG4gIGlmIChyZWFzb24udHJpbSgpLmxlbmd0aCA8IDIgfHwgcmVhc29uLmxlbmd0aCA8IDUpIHtcbiAgICByZXR1cm4gZmFsc2UgLy8gVG9vIHNob3J0IHRvIGJlIG1lYW5pbmdmdWwsIGF0IGxlYXN0IDUgY2hhcmFjdGVycyBhbmQgMiB3b3Jkc1xuICB9XG4gIC8vIENoZWNrIGZvciByZXBldGl0aXZlIG9yIG1lYW5pbmdsZXNzIGlucHV0IChlLmcuLCBcImFhYVwiLFwiISEhXCIpXG4gIGNvbnN0IG1lYW5pbmdsZXNzUGF0dGVybnMgPSBbL14oLilcXDF7Myx9JC8sIC9eW15hLXpBLVowLTldKyQvXVxuICBmb3IgKGNvbnN0IHBhdHRlcm4gb2YgbWVhbmluZ2xlc3NQYXR0ZXJucykge1xuICAgIGlmIChwYXR0ZXJuLnRlc3QocmVhc29uLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCAnJykpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cbiIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7IHJhbmRvbVVVSUQgfTtcbiIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtOF1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwfGZmZmZmZmZmLWZmZmYtZmZmZi1mZmZmLWZmZmZmZmZmZmZmZikkL2k7XG4iLCJsZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8gPT09ICd1bmRlZmluZWQnIHx8ICFjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0UmFuZG9tVmFsdWVzID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufVxuIiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gICAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gICAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTtcbiAgICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICAgIHJldHVybiB1dWlkO1xufVxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5O1xuIiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gICAgfVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpO1xuICAgIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgICBybmRzWzhdID0gKHJuZHNbOF0gJiAweDNmKSB8IDB4ODA7XG4gICAgaWYgKGJ1Zikge1xuICAgICAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWY7XG4gICAgfVxuICAgIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5leHBvcnQgZGVmYXVsdCB2NDtcbiIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcbiAgZmluZFBhZ2VNZXRhLFxuICBpc0Zyb21Qb3B1cCxcbiAgZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0LFxuICBzaG91bGRFeGNsdWRlLFxuICBnZW5lcmF0ZUh0bWxTbmFwc2hvdElkLFxuICBwcm9jZXNzUmVjaXBlLFxuICBpc1ZhbGlkUmVhc29uXG59IGZyb20gJy4vdXRpbHMvdXRpbCdcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnXG5pbXBvcnQgeyBzY3JvbGxfdGhyZXNob2xkIH0gZnJvbSAnLi9jb25maWcnXG5cbmFzeW5jIGZ1bmN0aW9uIGNhcHR1cmVTY3JlZW5zaG90KHRpbWVzdGFtcDogc3RyaW5nLCB1dWlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICAvLyBjb25zdCBzY3JlZW5zaG90SWQgPSBgc2NyZWVuc2hvdF8ke3RpbWVzdGFtcH1fJHt1dWlkfWBcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIGFjdGlvbjogJ2NhcHR1cmVTY3JlZW5zaG90JyxcbiAgICAgIHRpbWVzdGFtcCxcbiAgICAgIHV1aWRcbiAgICB9KVxuXG4gICAgaWYgKCFyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2UubWVzc2FnZSB8fCAnU2NyZWVuc2hvdCBjYXB0dXJlIGZhaWxlZCcpXG4gICAgfVxuXG4gICAgd2luZG93LnBvc3RNZXNzYWdlKFxuICAgICAge1xuICAgICAgICB0eXBlOiAnU0NSRUVOU0hPVF9DT01QTEVURScsXG4gICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuICAgICAgICBzdWNjZXNzOiB0cnVlXG4gICAgICB9LFxuICAgICAgJyonXG4gICAgKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhcHR1cmluZyBzY3JlZW5zaG90IGluIGNvbnRlbnQgc2NyaXB0OicsIGVycm9yKVxuXG4gICAgd2luZG93LnBvc3RNZXNzYWdlKFxuICAgICAge1xuICAgICAgICB0eXBlOiAnU0NSRUVOU0hPVF9DT01QTEVURScsXG4gICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2VcbiAgICAgIH0sXG4gICAgICAnKidcbiAgICApXG4gIH1cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnNvdXJjZSAhPT0gd2luZG93KSByZXR1cm5cbiAgaWYgKGV2ZW50LmRhdGEudHlwZSAmJiBldmVudC5kYXRhLnR5cGUgPT09ICdHRVRfVVNFUl9JRCcpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoJ3VzZXJJZCcpXG4gICAgY29uc3QgdXNlcklkID0gcmVzdWx0LnVzZXJJZFxuICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6ICdHRVRfVVNFUl9JRF9SRVNQT05TRScsIHVzZXJJZDogdXNlcklkIH0sICcqJylcbiAgfVxuICBpZiAoZXZlbnQuZGF0YS50eXBlICYmIGV2ZW50LmRhdGEudHlwZSA9PT0gJ0NBUFRVUkVfU0NSRUVOU0hPVCcpIHtcbiAgICBhd2FpdCBjYXB0dXJlU2NyZWVuc2hvdChldmVudC5kYXRhLnRpbWVzdGFtcCwgZXZlbnQuZGF0YS51dWlkKVxuICB9XG4gIGlmIChldmVudC5kYXRhLnR5cGUgJiYgZXZlbnQuZGF0YS50eXBlID09PSAnU0FWRV9JTlRFUkFDVElPTl9EQVRBJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhRm9yQmFja2dyb3VuZCA9IHsgLi4uZXZlbnQuZGF0YS5kYXRhIH1cblxuICAgICAgY29uc3QgcmVzcG9uc2UyID0gYXdhaXQgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICBhY3Rpb246ICdzYXZlRGF0YScsXG4gICAgICAgIGRhdGE6IGRhdGFGb3JCYWNrZ3JvdW5kXG4gICAgICB9KVxuICAgICAgaWYgKCFyZXNwb25zZTIuc3VjY2Vzcykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2UyLm1lc3NhZ2UgfHwgJ2ludGVyYWN0aW9uIGNhcHR1cmUgZmFpbGVkJylcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdJTlRFUkFDVElPTl9DT01QTEVURScsXG4gICAgICAgICAgdGltZXN0YW1wOiBldmVudC5kYXRhLmRhdGEudGltZXN0YW1wLFxuICAgICAgICAgIHN1Y2Nlc3M6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgJyonXG4gICAgICApXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNhdmluZyBpbnRlcmFjdGlvbiBkYXRhOicsIGVycm9yKVxuICAgICAgd2luZG93LnBvc3RNZXNzYWdlKFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ0lOVEVSQUNUSU9OX0NPTVBMRVRFJyxcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICB0aW1lc3RhbXA6IGV2ZW50LmRhdGEuZGF0YS50aW1lc3RhbXBcbiAgICAgICAgfSxcbiAgICAgICAgJyonXG4gICAgICApXG4gICAgfVxuICB9XG59KVxuXG5jb25zdCB3b3JrID0gKCkgPT4ge1xuICAvLyBEZWZpbmUgaW50ZXJmYWNlcyBmb3IgUmVjaXBlIGFuZCBPcmRlckRldGFpbFxuICBpbnRlcmZhY2UgUmVjaXBlIHtcbiAgICB0YWdfbmFtZT86IHN0cmluZ1xuICAgIHRleHRfc2VsZWN0b3I/OiBzdHJpbmdcbiAgICB0ZXh0X2pzPzogc3RyaW5nXG4gICAgYWRkX3RleHQ/OiBib29sZWFuXG4gICAgdGV4dF9mb3JtYXQ/OiBzdHJpbmdcbiAgICBuYW1lPzogc3RyaW5nXG4gICAgY2xpY2thYmxlPzogYm9vbGVhblxuICAgIGNsaWNrX3NlbGVjdG9yPzogc3RyaW5nXG4gICAga2VlcF9hdHRyPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVxuICAgIG92ZXJyaWRlX2F0dHI/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9XG4gICAgY2hpbGRyZW4/OiBSZWNpcGVbXVxuICAgIGluc2VydF9zcGxpdF9tYXJrZXI/OiBib29sZWFuXG4gICAgaW5zZXJ0X3NwbGl0X21hcmtlcl9ldmVyeT86IG51bWJlclxuICAgIGRpcmVjdF9jaGlsZD86IGJvb2xlYW5cbiAgICBlbXB0eV9tZXNzYWdlPzogc3RyaW5nXG4gICAgW2tleTogc3RyaW5nXTogYW55IC8vIEFsbG93IGFkZGl0aW9uYWwgcHJvcGVydGllc1xuICB9XG5cbiAgaW50ZXJmYWNlIE9yZGVyRGV0YWlsIHtcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBwcmljZTogbnVtYmVyXG4gIH1cblxuICAvLyBFeHRlbmQgdGhlIFdpbmRvdyBpbnRlcmZhY2UgdG8gaW5jbHVkZSBjdXN0b20gcHJvcGVydGllc1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0RPTUNvbnRlbnRMb2FkZWQgZXZlbnQgdHJpZ2dlcmVkJylcbiAgICBwcm9jZXNzUmVjaXBlKClcbiAgfSlcblxuICAvLyBGdW5jdGlvbiB0byBjYXB0dXJlIGludGVyYWN0aW9uc1xuICBhc3luYyBmdW5jdGlvbiBjYXB0dXJlSW50ZXJhY3Rpb24oXG4gICAgZXZlbnRUeXBlOiBzdHJpbmcsXG4gICAgdGFyZ2V0OiBhbnksXG4gICAgdGltZXN0YW1wOiBzdHJpbmcsXG4gICAgdXVpZDogc3RyaW5nLFxuICAgIHNjcm9sbERpc3RhbmNlPzogbnVtYmVyXG4gICkge1xuICAgIHRyeSB7XG4gICAgICAvLyBHZW5lcmF0ZSBuZXcgSFRNTCBzbmFwc2hvdCBJRFxuICAgICAgY29uc3QgY3VycmVudFNuYXBzaG90SWQgPSBnZW5lcmF0ZUh0bWxTbmFwc2hvdElkKHRpbWVzdGFtcCwgdXVpZClcblxuICAgICAgY29uc3Qgc2ltcGxpZmllZEhUTUwgPSBwcm9jZXNzUmVjaXBlKClcbiAgICAgIGNvbnN0IG1hcmtlZERvYyA9IGdldENsaWNrYWJsZUVsZW1lbnRzSW5WaWV3cG9ydCgpXG5cbiAgICAgIGNvbnN0IHBhZ2VNZXRhID0gZmluZFBhZ2VNZXRhKClcblxuICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgIHV1aWQ6IHV1aWQsXG4gICAgICAgIGV2ZW50VHlwZSxcbiAgICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXAsXG5cbiAgICAgICAgaHRtbFNuYXBzaG90SWQ6IGN1cnJlbnRTbmFwc2hvdElkLCAvLyBVc2UgdGhlIG5ldyBzbmFwc2hvdCBJRFxuICAgICAgICBwYWdlTWV0YTogcGFnZU1ldGEgfHwgJycsXG4gICAgICAgIGh0bWxDb250ZW50OiBtYXJrZWREb2MuZG9jdW1lbnRFbGVtZW50Lm91dGVySFRNTCxcbiAgICAgICAgc2ltcGxpZmllZEhUTUw6IHNpbXBsaWZpZWRIVE1MXG4gICAgICB9XG4gICAgICBpZiAoZXZlbnRUeXBlID09PSAnc2Nyb2xsJykge1xuICAgICAgICBkYXRhWydzY3JvbGxEaXN0YW5jZSddID0gc2Nyb2xsRGlzdGFuY2VcbiAgICAgICAgZGF0YVsndGFyZ2V0J10gPSB0YXJnZXRcbiAgICAgIH1cbiAgICAgIGlmIChldmVudFR5cGUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgZGF0YVsnaW5wdXQtdmFsdWVzJ10gPSB0YXJnZXQ/LnZhbHVlIHx8ICcnXG4gICAgICAgIGRhdGFbJ2lucHV0LWlkJ10gPSB0YXJnZXQ/LmlkIHx8ICcnXG4gICAgICAgIGRhdGFbJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnXSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnKSB8fCAnJ1xuICAgICAgICBkYXRhWydkYXRhLWVsZW1lbnQtbWV0YS1kYXRhJ10gPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1kYXRhJykgfHwgJydcbiAgICAgIH1cbiAgICAgIGF3YWl0IGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgYWN0aW9uOiAnc2F2ZURhdGEnLCBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGR1cmluZyAke2V2ZW50VHlwZX0gZXZlbnQgaGFuZGxpbmc6YCwgZXJyb3IpXG4gICAgfVxuICB9XG4gIC8vIFZhcmlhYmxlcyB0byB0cmFjayBzY3JvbGwgZXZlbnRzXG4gIGxldCBpc1Njcm9sbGluZyA9IGZhbHNlXG4gIGxldCBzY3JvbGxUaW1lb3V0OiBudW1iZXIgfCB1bmRlZmluZWRcbiAgbGV0IHNjcm9sbFN0YXJ0VG9wID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICBsZXQgYWNjdW11bGF0ZWRTY3JvbGxEaXN0YW5jZSA9IDBcblxuICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgdGhlIGZpcnN0IHNjcm9sbCBldmVudCBpbiBhIHNjcm9sbCBzZXF1ZW5jZVxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVGaXJzdFNjcm9sbChzY3JvbGxVdWlkOiBzdHJpbmcsIHNjcm9sbFRpbWVzdGFtcDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnNvbGUubG9nKCdGaXJzdCBzY3JvbGwgZXZlbnQnKVxuICAgICAgY2FwdHVyZVNjcmVlbnNob3Qoc2Nyb2xsVGltZXN0YW1wLCBzY3JvbGxVdWlkKVxuICAgICAgcHJvY2Vzc1JlY2lwZSgpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBmaXJzdCBzY3JvbGwgaGFuZGxpbmc6JywgZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIHdoZW4gc2Nyb2xsaW5nIHN0b3BzIChubyBzY3JvbGwgZXZlbnRzIHdpdGhpbiB0aGUgdGhyZXNob2xkKVxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTY3JvbGxTdG9wKHNjcm9sbFV1aWQ6IHN0cmluZywgc2Nyb2xsVGltZXN0YW1wOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coJ3Njcm9sbCBzdG9wIHV1aWQnLCBzY3JvbGxVdWlkKVxuICAgICAgY29uc3QgY3VycmVudFNjcm9sbFRvcCA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcbiAgICAgIGFjY3VtdWxhdGVkU2Nyb2xsRGlzdGFuY2UgKz0gY3VycmVudFNjcm9sbFRvcCAtIHNjcm9sbFN0YXJ0VG9wXG5cbiAgICAgIGlmIChhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlICE9PSAwKSB7XG4gICAgICAgIC8vIFJlY29yZCB0aGUgc2Nyb2xsIGludGVyYWN0aW9uIHdpdGggdGhlIGFjY3VtdWxhdGVkIHNjcm9sbCBkaXN0YW5jZVxuICAgICAgICBhd2FpdCBjYXB0dXJlSW50ZXJhY3Rpb24oXG4gICAgICAgICAgJ3Njcm9sbCcsXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgc2Nyb2xsVGltZXN0YW1wLFxuICAgICAgICAgIHNjcm9sbFV1aWQsXG4gICAgICAgICAgYWNjdW11bGF0ZWRTY3JvbGxEaXN0YW5jZVxuICAgICAgICApXG4gICAgICAgIC8vIFJlc2V0IGFjY3VtdWxhdGVkIHNjcm9sbCBkaXN0YW5jZVxuICAgICAgICBhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlID0gMFxuICAgICAgICBzY3JvbGxTdGFydFRvcCA9IGN1cnJlbnRTY3JvbGxUb3BcbiAgICAgIH1cbiAgICAgIGlzU2Nyb2xsaW5nID0gZmFsc2VcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIHNjcm9sbCBzdG9wIGhhbmRsaW5nOicsIGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIGxldCBzY3JvbGxVdWlkID0gJydcbiAgbGV0IHNjcm9sbFRpbWVzdGFtcCA9ICcnXG4gIC8vIEV2ZW50IGxpc3RlbmVyIGZvciBzY3JvbGwgZXZlbnRzXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGFzeW5jIChldmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdzY3JvbGwgZXZlbnQnKVxuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFzb24tbW9kYWwnKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChcbiAgICAgIGV2ZW50LnRhcmdldCAhPT0gd2luZG93ICYmXG4gICAgICBldmVudC50YXJnZXQgIT09IGRvY3VtZW50ICYmXG4gICAgICBldmVudC50YXJnZXQgIT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuICAgICkge1xuICAgICAgY29uc29sZS5sb2coJ1Njcm9sbCBldmVudCBpZ25vcmVkIGZyb20gYSBuZXN0ZWQgc2Nyb2xsYWJsZSBjb250YWluZXInKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFpc1Njcm9sbGluZykge1xuICAgICAgaXNTY3JvbGxpbmcgPSB0cnVlXG4gICAgICBzY3JvbGxTdGFydFRvcCA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcbiAgICAgIHNjcm9sbFV1aWQgPSB1dWlkdjQoKVxuICAgICAgc2Nyb2xsVGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gICAgICBhd2FpdCBoYW5kbGVGaXJzdFNjcm9sbChzY3JvbGxVdWlkLCBzY3JvbGxUaW1lc3RhbXApXG4gICAgfVxuXG4gICAgLy8gQ2xlYXIgdGhlIGV4aXN0aW5nIHRpbWVvdXQgYW5kIHNldCBhIG5ldyBvbmVcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHNjcm9sbFRpbWVvdXQpXG4gICAgc2Nyb2xsVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KFxuICAgICAgKCkgPT4gaGFuZGxlU2Nyb2xsU3RvcChzY3JvbGxVdWlkLCBzY3JvbGxUaW1lc3RhbXApLFxuICAgICAgc2Nyb2xsX3RocmVzaG9sZFxuICAgICkgLy8gVGhyZXNob2xkIG9mIDMwMG1zXG4gIH0pXG5cbiAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgLy8gICAnYmx1cicsXG4gIC8vICAgYXN5bmMgKGV2ZW50KSA9PiB7XG4gIC8vICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnRcbiAgLy8gICAgIGlmIChpc0Zyb21Qb3B1cCh0YXJnZXQpKSByZXR1cm5cbiAgLy8gICAgIGlmIChcbiAgLy8gICAgICAgdGFyZ2V0ICYmXG4gIC8vICAgICAgICgodGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCcgJiYgKHRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS50eXBlID09PSAndGV4dCcpIHx8XG4gIC8vICAgICAgICAgdGFyZ2V0LnRhZ05hbWUgPT09ICdURVhUQVJFQScpXG4gIC8vICAgICApIHtcbiAgLy8gICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gIC8vICAgICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKVxuICAvLyAgICAgICBhd2FpdCBjYXB0dXJlU2NyZWVuc2hvdCh0aW1lc3RhbXAsIHV1aWQpXG4gIC8vICAgICAgIGF3YWl0IGNhcHR1cmVJbnRlcmFjdGlvbignaW5wdXQnLCB0YXJnZXQsIHRpbWVzdGFtcCwgdXVpZClcbiAgLy8gICAgIH1cbiAgLy8gICB9LFxuICAvLyAgIHRydWVcbiAgLy8gKVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgLy8gSGFuZGxlIGFsbCB0eXBlcyBvZiBvcmRlciBidXR0b25zXG4gICAgY29uc3QgcGxhY2VPcmRlckJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJ2lucHV0W2lkPVwicGxhY2VPcmRlclwiXSwgaW5wdXRbaWQ9XCJ0dXJiby1jaGVja291dC1weW8tYnV0dG9uXCJdJ1xuICAgIClcbiAgICBjb25zdCBidXlOb3dCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cImJ1eS1ub3ctYnV0dG9uXCJdJylcbiAgICBjb25zdCBzZXR1cE5vd0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnYnV0dG9uW2lkPVwicmN4LXN1YnNjcmliZS1zdWJtaXQtYnV0dG9uLWFubm91bmNlXCJdJ1xuICAgIClcbiAgICBjb25zdCBwcm9jZWVkVG9DaGVja291dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcm9jZWVkVG9SZXRhaWxDaGVja291dFwiXScpXG5cbiAgICAvLyBIYW5kbGUgQnV5IE5vdyBhbmQgU2V0IFVwIE5vdyBidXR0b25zIGlmIHByZXNlbnRcbiAgICA7W2J1eU5vd0J1dHRvbiwgc2V0dXBOb3dCdXR0b25dLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgaWYgKGJ1dHRvbikge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJbmZvID0ge1xuICAgICAgICAgICAgICB0aXRsZTogKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpIGFzIEhUTUxFbGVtZW50KT8uaW5uZXJUZXh0Py50cmltKCkgfHwgJycsXG4gICAgICAgICAgICAgIHByaWNlOlxuICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuLmEtcHJpY2UuYW9rLWFsaWduLWNlbnRlci5yZWludmVudFByaWNlUHJpY2VUb1BheU1hcmdpbi5wcmljZVRvUGF5J1xuICAgICAgICAgICAgICAgICAgKSBhcyBIVE1MRWxlbWVudFxuICAgICAgICAgICAgICAgICk/LmlubmVyVGV4dD8udHJpbSgpIHx8ICcnLFxuICAgICAgICAgICAgICBhc2luOiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQjQVNJTicpIGFzIEhUTUxJbnB1dEVsZW1lbnQpPy52YWx1ZSB8fCAnJyxcbiAgICAgICAgICAgICAgb3B0aW9uczoge31cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gR2V0IGFsbCBvcHRpb24gc2VsZWN0aW9uc1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uUm93cyA9IEFycmF5LmZyb20oXG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICAgJyN0d2lzdGVyIGRpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKTpoYXMoc3Bhbi5zZWxlY3Rpb24pJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBvcHRpb25Sb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9XG4gICAgICAgICAgICAgICAgKHJvdy5xdWVyeVNlbGVjdG9yKCdsYWJlbC5hLWZvcm0tbGFiZWwnKSBhcyBIVE1MRWxlbWVudCk/LmlubmVyVGV4dD8ucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICc6ICcsXG4gICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICkgfHwgJydcbiAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAocm93LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uc2VsZWN0aW9uJykgYXMgSFRNTEVsZW1lbnQpPy5pbm5lclRleHQgfHwgJydcbiAgICAgICAgICAgICAgaWYgKGxhYmVsICYmIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgOyhwcm9kdWN0SW5mby5vcHRpb25zIGFzIGFueSlbbGFiZWxdID0gdmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7YnV0dG9uLmlkfSBjbGlja2VkIC0gUHJvZHVjdCBJbmZvOmAsIHByb2R1Y3RJbmZvKVxuXG4gICAgICAgICAgICBhd2FpdCBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgICAgICAgIGFjdGlvbjogJ3NhdmVPcmRlcicsXG4gICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICBuYW1lOiBwcm9kdWN0SW5mby50aXRsZSxcbiAgICAgICAgICAgICAgICBwcmljZTogcGFyc2VGbG9hdChwcm9kdWN0SW5mby5wcmljZS5yZXBsYWNlKC9bXjAtOS5dL2csICcnKSksXG4gICAgICAgICAgICAgICAgYXNpbjogcHJvZHVjdEluZm8uYXNpbixcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBwcm9kdWN0SW5mby5vcHRpb25zXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGNhcHR1cmluZyAke2J1dHRvbi5pZH0gcHJvZHVjdCBpbmZvOmAsIGVycm9yKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIGlmIChwcm9jZWVkVG9DaGVja291dEJ1dHRvbikge1xuICAgICAgcHJvY2VlZFRvQ2hlY2tvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZEl0ZW1zID0gW11cbiAgICAgICAgICBjb25zdCBjYXJ0SXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF49XCJzYy1hY3RpdmUtXCJdJykpLmZpbHRlcihcbiAgICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmlkICE9PSAnc2MtYWN0aXZlLWNhcnQnXG4gICAgICAgICAgKVxuICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBjYXJ0SXRlbXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKSBhcyBIVE1MSW5wdXRFbGVtZW50XG4gICAgICAgICAgICBpZiAoY2hlY2tib3ggJiYgY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0TGluayA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLnNjLWl0ZW0tcHJvZHVjdC10aXRsZS1jb250IC5zYy1wcm9kdWN0LWxpbmsnKVxuICAgICAgICAgICAgICBpZiAocHJvZHVjdExpbmspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmdWxsTmFtZUVsZW1lbnQgPSBwcm9kdWN0TGluay5xdWVyeVNlbGVjdG9yKCcuYS10cnVuY2F0ZS1mdWxsJylcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gZnVsbE5hbWVFbGVtZW50Py50ZXh0Q29udGVudD8udHJpbSgpIHx8ICcnXG5cbiAgICAgICAgICAgICAgICBjb25zdCBocmVmID0gcHJvZHVjdExpbmsuZ2V0QXR0cmlidXRlKCdocmVmJykgfHwgJydcbiAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gaHJlZi5tYXRjaCgvcHJvZHVjdFxcLyhbQS1aMC05XXsxMH0pLyk/LlsxXSB8fCAnJ1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbGVtZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuc2MtaXRlbS1wcmljZS1ibG9jayAuYS1vZmZzY3JlZW4nKVxuICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbGVtZW50XG4gICAgICAgICAgICAgICAgICA/IHBhcnNlRmxvYXQocHJpY2VFbGVtZW50LnRleHRDb250ZW50Py5yZXBsYWNlKC9bXjAtOS5dL2csICcnKSB8fCAnMCcpXG4gICAgICAgICAgICAgICAgICA6IDBcblxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhdGlvbkVsZW1lbnRzID0gaXRlbS5xdWVyeVNlbGVjdG9yQWxsKCcuc2MtcHJvZHVjdC12YXJpYXRpb24nKVxuICAgICAgICAgICAgICAgIHZhcmlhdGlvbkVsZW1lbnRzLmZvckVhY2goKHZhcmlhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPVxuICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb24ucXVlcnlTZWxlY3RvcignLmEtdGV4dC1ib2xkJyk/LnRleHRDb250ZW50Py50cmltKCkucmVwbGFjZSgnOicsICcnKSB8fFxuICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPVxuICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmEtc2l6ZS1zbWFsbDpub3QoLmEtdGV4dC1ib2xkKScpXG4gICAgICAgICAgICAgICAgICAgICAgPy50ZXh0Q29udGVudD8udHJpbSgpIHx8ICcnXG4gICAgICAgICAgICAgICAgICBpZiAobGFiZWwgJiYgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1tsYWJlbF0gPSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgYXNpbixcbiAgICAgICAgICAgICAgICAgIHByaWNlLFxuICAgICAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYXdhaXQgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBhY3Rpb246ICdzYXZlT3JkZXInLCBkYXRhOiBzZWxlY3RlZEl0ZW1zIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhcHR1cmluZyBzZWxlY3RlZCBjYXJ0IGl0ZW1zOicsIGVycm9yKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSlcblxuICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoXG4gICAgKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlOiAocmVzcG9uc2U/OiBhbnkpID0+IHZvaWQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdtZXNzYWdlJywgbWVzc2FnZSlcbiAgICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ2dldEhUTUwnKSB7XG4gICAgICAgIGNvbnN0IHNpbXBsaWZpZWRIVE1MID0gcHJvY2Vzc1JlY2lwZSgpXG4gICAgICAgIGNvbnN0IG1hcmtlZERvYyA9IGdldENsaWNrYWJsZUVsZW1lbnRzSW5WaWV3cG9ydCgpXG4gICAgICAgIGNvbnN0IGh0bWxDb250ZW50ID0gbWFya2VkRG9jLmRvY3VtZW50RWxlbWVudC5vdXRlckhUTUxcbiAgICAgICAgY29uc3QgcGFnZU1ldGEgPSBmaW5kUGFnZU1ldGEoKVxuICAgICAgICBzZW5kUmVzcG9uc2UoeyBodG1sOiBodG1sQ29udGVudCwgcGFnZU1ldGE6IHBhZ2VNZXRhLCBzaW1wbGlmaWVkSFRNTDogc2ltcGxpZmllZEhUTUwgfSlcbiAgICAgIH1cbiAgICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ3Nob3dfcG9wdXAnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzaG93X3BvcHVwJywgbWVzc2FnZSlcbiAgICAgICAgLy8gYXNzZXJ0IHRoZXJlIGlzbid0IGFscmVhZHkgYSBwb3B1cFxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYXNvbi1tb2RhbCcpKSB7XG4gICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdwb3B1cCBhbHJlYWR5IGV4aXN0cycgfSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVNb2RhbChtZXNzYWdlLnF1ZXN0aW9uLCBtZXNzYWdlLnBsYWNlaG9sZGVyLCBzZW5kUmVzcG9uc2UpXG4gICAgICAgIHJldHVybiB0cnVlIC8vIFdpbGwgcmVzcG9uZCBhc3luY2hyb25vdXNseVxuICAgICAgfVxuICAgIH1cbiAgKVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU1vZGFsKFxuICAgIHF1ZXN0aW9uOiBzdHJpbmcsXG4gICAgcGxhY2Vob2xkZXI6IHN0cmluZyxcbiAgICBzZW5kUmVzcG9uc2U6IChyZXNwb25zZT86IGFueSkgPT4gdm9pZFxuICApIHtcbiAgICBjb25zdCBtb2RhbEh0bWwgPSBgXG4gICAgICAgIDxkaXYgaWQ9XCJyZWFzb24tbW9kYWxcIiBzdHlsZT1cIlxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xuICAgICAgICBcIj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgICBcIj5cbiAgICAgICAgICAgICAgICA8aDM+JHtxdWVzdGlvbn08L2gzPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cInJlYXNvbi1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiJHtwbGFjZWhvbGRlcn1cIiBzdHlsZT1cIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICAgICAgXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZXJyb3ItbWVzc2FnZVwiIHN0eWxlPVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgIFwiPlxuICAgICAgICAgICAgICAgICAgICBQbGVhc2UgZW50ZXIgYSB2YWxpZCByZWFzb24uXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiAxMHB4O1xuICAgICAgICAgICAgICAgIFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicmVhc29uLXNraXBcIj5Ta2lwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJyZWFzb24tc3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxuXG4gICAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1vZGFsQ29udGFpbmVyLmlubmVySFRNTCA9IG1vZGFsSHRtbFxuICAgIC8vIGlmIGF0dGFjaC1kZXNrdG9wLXNpZGVTaGVldCBleGlzdHNcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF0dGFjaC1kZXNrdG9wLXNpZGVTaGVldDpub3QoLmFvay1oaWRkZW4pJykpIHtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuYXR0YWNoLWRlc2t0b3Atc2lkZVNoZWV0Om5vdCguYW9rLWhpZGRlbiknKVxuICAgICAgICAuYXBwZW5kQ2hpbGQobW9kYWxDb250YWluZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWxDb250YWluZXIpXG4gICAgfVxuXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyc1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFzb24tc3VibWl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFzb24taW5wdXQnKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50XG4gICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3ItbWVzc2FnZScpIGFzIEhUTUxFbGVtZW50XG4gICAgICBjb25zdCB2YWx1ZSA9IGlucHV0LnZhbHVlXG5cbiAgICAgIGlmICghaXNWYWxpZFJlYXNvbih2YWx1ZSkpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snIC8vIFNob3cgdGhlIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgcmV0dXJuIC8vIFByZXZlbnQgc3VibWlzc2lvbiBpZiB0aGUgcmVhc29uIGlzIGludmFsaWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnIC8vIEhpZGUgdGhlIGVycm9yIG1lc3NhZ2VcbiAgICAgIH1cblxuICAgICAgbW9kYWxDb250YWluZXIucmVtb3ZlKClcbiAgICAgIHNlbmRSZXNwb25zZSh7IGlucHV0OiB2YWx1ZSB9KVxuICAgIH0pXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYXNvbi1za2lwJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFzb24taW5wdXQnKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50XG4gICAgICBtb2RhbENvbnRhaW5lci5yZW1vdmUoKVxuICAgICAgc2VuZFJlc3BvbnNlKHsgaW5wdXQ6IG51bGwgfSlcbiAgICB9KVxuICB9XG59XG5zaG91bGRFeGNsdWRlKHdpbmRvdy5sb2NhdGlvbi5ocmVmKS50aGVuKChyZXN1bHQpID0+IHtcbiAgY29uc29sZS5sb2coJ2NvbnRlbnQgc2NyaXB0LCBzaG91bGRFeGNsdWRlJywgcmVzdWx0KVxuICBpZiAoIXJlc3VsdCkge1xuICAgIHdvcmsoKVxuICB9XG59KVxuIl0sIm5hbWVzIjpbInBvcHVwX3Byb2JhYmlsaXR5IiwicG9wdXBfc2Nyb2xsX3Byb2JhYmlsaXR5IiwicG9wdXBfY2xpY2tfcHJvYmFiaWxpdHkiLCJwb3B1cF9uYXZpZ2F0aW9uX3Byb2JhYmlsaXR5IiwicG9wdXBfdGFiQWN0aXZhdGVfcHJvYmFiaWxpdHkiLCJmb2xkZXJfbmFtZSIsInppcCIsInVwbG9hZF91cmwiLCJiYXNlX3VybCIsImRhdGFfY29sbGVjdG9yX3NlY3JldF9pZCIsInVybF9pbmNsdWRlcyIsImludGVyYWN0aW9uX3N0YXR1c191cmwiLCJjb25jYXQiLCJjaGVja191c2VyX2lkX3VybCIsImZpbHRlcl91cmwiLCJzY3JvbGxfdGhyZXNob2xkIiwibmF2Iiwic2VsZWN0b3IiLCJuYW1lIiwiY2hpbGRyZW4iLCJjbGlja2FibGUiLCJnZW5lcmF0ZV9tZXRhZGF0YSIsImVtIiwidGVybSIsInZhbHVlIiwiZGF0YSIsInRleHRfc2VsZWN0b3IiLCJhZGRfdGV4dCIsInJlZmluZW1lbnRfb3B0aW9uIiwiZGlyZWN0X2NoaWxkIiwidGV4dF9qcyIsImVsZW1lbnQiLCJ0ZXh0IiwiYUNoaWxkIiwicXVlcnlTZWxlY3RvciIsImlubmVyVGV4dCIsInRyaW0iLCJoYXNBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJlIiwiY29uc29sZSIsImxvZyIsIl9lbGVtZW50JGNsb3Nlc3QiLCJfbmFtZUVtJGlubmVyVGV4dCIsIl90ZXh0MiIsIm5hbWVFbSIsImNsb3Nlc3QiLCJwYXJlbnRFbGVtZW50IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJ1cmwiLCJfdGV4dCIsInRpdGxlIiwic2VsZWN0ZWQiLCJfZWxlbWVudCRjbG9zZXN0MiIsIl9uYW1lRW0kaW5uZXJUZXh0MiIsIl90ZXh0NCIsIl90ZXh0MyIsInByb2R1Y3RfZmFjdHMiLCJwcm9kdWN0X2RlbGl2ZXJ5IiwicXVhbnRpdHlfc2VsZWN0b3IiLCJ1c2Vfcm9vdCIsInRleHRfZm9ybWF0IiwiZGVsaXZlcnlfZnJlcXVlbmN5X3NlbGVjdG9yIiwic2V0X3VwX25vd19idXR0b24iLCJhZGRfdG9fY2FydF9idXR0b24iLCJidXlfbm93X2J1dHRvbiIsImJ1eV9ib3hfd2l0aF9hY2NvcmRpb24iLCJidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX2RlbGl2ZXJ5IiwiYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9waWNrX3VwIiwiY2FydCIsIl9lbSRwYXJlbnRFbGVtZW50IiwiX3ByaWNlRW0kaW5uZXJUZXh0IiwiYXNpbiIsInByaWNlRW0iLCJwcmljZSIsInRpdGxlRW0iLCJ1cmxFbSIsImRlbGl2ZXJ5RW0iLCJkZWxpdmVyeSIsInF1YW50aXR5RW0iLCJxdWFudGl0eSIsInNlbGVjdGVkRW0iLCJmcmVzaF9jYXJ0IiwiX2VtJHBhcmVudEVsZW1lbnQyIiwiX3ByaWNlRW0kaW5uZXJUZXh0MiIsImJ1eV9hZ2FpbiIsIl9lbSRjbG9zZXN0IiwiX25hbWVFbSRpbm5lclRleHQzIiwiaW5wdXQiLCJjaGVja2VkIiwiX3ByaWNlRW0kaW5uZXJUZXh0MyIsImFzaW5FbSIsIl9lbSRwYXJlbnRFbGVtZW50MyIsIl9wcmljZUVtJGlubmVyVGV4dDQiLCJfZW0kcGFyZW50RWxlbWVudDQiLCJfZW0kcGFyZW50RWxlbWVudDUiLCJfZW0kcGFyZW50RWxlbWVudDYiLCJfYXNpbkVtMiIsIl9wcmljZUVtJGlubmVyVGV4dDUiLCJfZW0kcGFyZW50RWxlbWVudDciLCJfZW0kcGFyZW50RWxlbWVudDgiLCJfYXNpbkVtMyIsIl9lbSRjbG9zZXN0MiIsIl9wYXJlbnRUaXRsZUVtJGlubmVyVCIsIl9wcmljZUVtJGlubmVyVGV4dDYiLCJwYXJlbnRUaXRsZUVtIiwicGFyZW50VGl0bGUiLCJyZWNpcGVzIiwibWF0Y2giLCJtYXRjaF9tZXRob2QiLCJtYXRjaF93aXRoX3JlZiIsIl9lbSRpbm5lclRleHQiLCJfZW0kaW5uZXJUZXh0MiIsIl9lbSRpbm5lclRleHQzIiwicmFuZ2UiLCJrZWVwX2F0dHIiLCJvdmVycmlkZV9hdHRyIiwic3RlcF92YWx1ZXMiLCJmb3JtRW0iLCJwcm9wIiwic3RlcHMiLCJKU09OIiwicGFyc2UiLCJzdGVwTGFiZWxzIiwiY3VycmVudF92YWx1ZSIsIk51bWJlciIsInBhcnNlSW50IiwiaW5zZXJ0X3NwbGl0X21hcmtlciIsImluc2VydF9zcGxpdF9tYXJrZXJfZXZlcnkiLCJjbGlja19zZWxlY3RvciIsIm1hdGNoX3RleHQiLCJfZW0kaW5uZXJUZXh0NCIsIl9lbSRpbm5lclRleHQ1IiwiX2VtJHF1ZXJ5U2VsZWN0b3IiLCJfZW0kcXVlcnlTZWxlY3RvcjIiLCJsYWJlbCIsImlubmVySFRNTCIsInVuZGVmaW5lZCIsIl9lbSRxdWVyeVNlbGVjdG9yMyIsIm9wdGlvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsIm9wdGlvbiIsImVyciIsImYiLCJpbWdDaGlsZCIsImFsdCIsIl9lbSRxdWVyeVNlbGVjdG9yNCIsIl9lbSRxdWVyeVNlbGVjdG9yNSIsIl9lbSRxdWVyeVNlbGVjdG9yNiIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJ0ZXh0RW0iLCJuZXh0RWxlbWVudFNpYmxpbmciLCJfZW0kcXVlcnlTZWxlY3RvcjciLCJfZW0kcXVlcnlTZWxlY3RvcjgiLCJfZW0kaW5uZXJUZXh0NiIsImJ1bGxldF9saXN0IiwidGVybWluYXRlIiwiYXJndW1lbnRzIiwidGVybWluYXRlX2NhbGxiYWNrIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJwcm9jZXNzRWxlbWVudCIsInJlY2lwZSIsInBhcmVudE5hbWUiLCJudGhDaGlsZCIsInRhZ05hbWUiLCJ0YWdfbmFtZSIsImVuZHNXaXRoIiwibmV3RWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImVsZW1lbnRUZXh0IiwidGV4dEVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImVsZW1lbnROYW1lIiwidG9TdHJpbmciLCJzZXRBdHRyaWJ1dGUiLCJtZXRhb2JqIiwibWV0YWRhdGEiLCJzdHJpbmdpZnkiLCJtZXRhbmFtZSIsImNsaWNrX2VsZW1lbnQiLCJ3aW5kb3ciLCJjbGlja2FibGVfcmVjaXBlcyIsImlucHV0VHlwZSIsImluY2x1ZGVzIiwiaW5wdXRfcmVjaXBlcyIsIl9lbGVtZW50JHBhcmVudEVsZW1lbiIsInNlbGVjdElkIiwibmFtZUlkIiwidGFnIiwibmV3VGFnIiwiYXBwZW5kQ2hpbGQiLCJfcmVmIiwiX2NhbGxlZSIsIm9wdGlvblZhbHVlIiwib3B0aW9uTmFtZSIsIm5ld09wdGlvbiIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJfeCIsImF0dHJzVG9Db3B5IiwiYXR0ciIsImtleSIsIl9sb29wIiwiY2hpbGRSZWNpcGUiLCJjaGlsZEVsZW1lbnRzIiwiY2hpbGRFbGVtZW50IiwiaW5kZXgiLCJjaGlsZE5vZGUiLCJldmVyeSIsInNwbGl0TWFya2VyIiwiZW1wdHlfbWVzc2FnZSIsImVtcHR5VGV4dE5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsIkFycmF5IiwiaXNBcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9uIiwiRiIsIl9hcnJheUxpa2VUb0FycmF5IiwiZnJvbSIsInRlc3QiLCJpc0Zyb21Qb3B1cCIsInVwZGF0ZV9pY29uIiwiX3VwZGF0ZV9pY29uIiwic2hvdWxkRXhjbHVkZSIsImNocm9tZSIsImFjdGlvbiIsInNldEljb24iLCJwYXRoIiwiZmluZFBhZ2VNZXRhIiwiYWxsX2VsZW1lbnRfd2l0aF9tZXRhX2RhdGEiLCJncm91cGVkUmVzdWx0IiwibWV0YU5hbWUiLCJtZXRhRGF0YSIsImdldENsaWNrYWJsZUVsZW1lbnRzSW5WaWV3cG9ydCIsImRvY3VtZW50Q29weSIsImNsb25lTm9kZSIsImFsbEVsZW1lbnRzIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJpbm5lckhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInJpZ2h0IiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwicmVtb3ZlQ2xpY2thYmxlTWFya2VycyIsInJlbW92ZUF0dHJpYnV0ZSIsIl94MiIsIl9zaG91bGRFeGNsdWRlIiwiX2NhbGxlZTIiLCJpZ25vcmVVc2VySWQiLCJyZXN1bHQiLCJ1c2VySWQiLCJfYXJnczIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJzdG9yYWdlIiwibG9jYWwiLCJnZXQiLCJoYW5kbGVNZXNzYWdlIiwiZXZlbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBvc3RNZXNzYWdlIiwic29tZSIsImluY2x1ZGVVcmwiLCJleGNsdWRlVXJsIiwiZ2VuZXJhdGVIdG1sU25hcHNob3RJZCIsInRpbWVzdGFtcCIsInV1aWQiLCJsb2NhdGlvbiIsImhyZWYiLCJoYXNoQ29kZSIsInN0ciIsImhhc2giLCJjaGFyQ29kZUF0IiwiY2hlY2tfdXNlcl9pZCIsIl94MyIsIl9jaGVja191c2VyX2lkIiwiX2NhbGxlZTMiLCJ1c2VyX2lkIiwicmVzcG9uc2UiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJmZXRjaCIsImpzb24iLCJvayIsInQwIiwibWVzc2FnZSIsInNlbGVjdFJlY2lwZSIsInBhcnNlZFVybCIsIlVSTCIsInBhdGhuYW1lIiwibWF0Y2hNZXRob2QiLCJfZWxlbWVudCR0ZXh0Q29udGVudCQiLCJfZWxlbWVudCR0ZXh0Q29udGVudCIsImhhc01hdGNoIiwiZXJyb3IiLCJzdGFydHNXaXRoIiwicHJvY2Vzc1JlY2lwZSIsInJvb3RFbGVtZW50IiwibmV3Um9vdCIsInNpbXBsaWZpZWRIVE1MIiwib3V0ZXJIVE1MIiwiZ2V0Q3VzdG9tUXVlc3Rpb24iLCJldmVudFR5cGUiLCJfZGF0YSRkYXRhU2VtYW50aWNJIiwiX2RhdGEkZGF0YVNlbWFudGljSTIiLCJfZGF0YSRkYXRhU2VtYW50aWNJMyIsIl9kYXRhJGRhdGFTZW1hbnRpY0k0IiwiX2RhdGEkdGFyZ2V0JGNsYXNzTmFtIiwiX2RhdGEkZGF0YVNlbWFudGljSTUiLCJfZGF0YSRkYXRhU2VtYW50aWNJNiIsIl9kYXRhJGRhdGFTZW1hbnRpY0k3IiwiX2RhdGEkZGF0YVNlbWFudGljSTgiLCJfZGF0YSRkYXRhU2VtYW50aWNJOSIsInF1ZXN0aW9uIiwicGxhY2Vob2xkZXIiLCJ0YXJnZXQiLCJpZCIsImNsYXNzTmFtZSIsIm5hdmlnYXRpb25UeXBlIiwiaXNWYWxpZFJlYXNvbiIsInJlYXNvbiIsIm1lYW5pbmdsZXNzUGF0dGVybnMiLCJfaSIsIl9tZWFuaW5nbGVzc1BhdHRlcm5zIiwicGF0dGVybiIsIm93bktleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJfdG9Qcm9wZXJ0eUtleSIsIl90b1ByaW1pdGl2ZSIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwidjQiLCJ1dWlkdjQiLCJjYXB0dXJlU2NyZWVuc2hvdCIsIl9jYXB0dXJlU2NyZWVuc2hvdCIsIl9jYWxsZWU4IiwiX2NhbGxlZTgkIiwiX2NvbnRleHQ5IiwicnVudGltZSIsInNlbmRNZXNzYWdlIiwic3VjY2VzcyIsImRhdGFGb3JCYWNrZ3JvdW5kIiwicmVzcG9uc2UyIiwic291cmNlIiwid29yayIsImNhcHR1cmVJbnRlcmFjdGlvbiIsIl94NCIsIl94NSIsIl94NiIsIl94NyIsIl94OCIsIl9jYXB0dXJlSW50ZXJhY3Rpb24iLCJfY2FsbGVlNSIsInNjcm9sbERpc3RhbmNlIiwiY3VycmVudFNuYXBzaG90SWQiLCJtYXJrZWREb2MiLCJwYWdlTWV0YSIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NiIsImh0bWxTbmFwc2hvdElkIiwiaHRtbENvbnRlbnQiLCJpc1Njcm9sbGluZyIsInNjcm9sbFRpbWVvdXQiLCJzY3JvbGxTdGFydFRvcCIsInNjcm9sbFkiLCJzY3JvbGxUb3AiLCJhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlIiwiaGFuZGxlRmlyc3RTY3JvbGwiLCJfeDkiLCJfeDEwIiwiX2hhbmRsZUZpcnN0U2Nyb2xsIiwiX2NhbGxlZTYiLCJzY3JvbGxVdWlkIiwic2Nyb2xsVGltZXN0YW1wIiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ3IiwiaGFuZGxlU2Nyb2xsU3RvcCIsIl94MTEiLCJfeDEyIiwiX2hhbmRsZVNjcm9sbFN0b3AiLCJfY2FsbGVlNyIsImN1cnJlbnRTY3JvbGxUb3AiLCJfY2FsbGVlNyQiLCJfY29udGV4dDgiLCJfcmVmMiIsImdldEVsZW1lbnRCeUlkIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIl94MTMiLCJwbGFjZU9yZGVyQnV0dG9ucyIsImJ1eU5vd0J1dHRvbiIsInNldHVwTm93QnV0dG9uIiwicHJvY2VlZFRvQ2hlY2tvdXRCdXR0b24iLCJidXR0b24iLCJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCJfZG9jdW1lbnQkcXVlcnlTZWxlY3QyIiwiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MyIsInByb2R1Y3RJbmZvIiwib3B0aW9uUm93cyIsInJvdyIsIl9yb3ckcXVlcnlTZWxlY3RvciIsIl9yb3ckcXVlcnlTZWxlY3RvcjIiLCJwYXJzZUZsb2F0IiwiX3JlZjQiLCJfY2FsbGVlNCIsInNlbGVjdGVkSXRlbXMiLCJjYXJ0SXRlbXMiLCJfY2FsbGVlNCQiLCJfY29udGV4dDUiLCJpdGVtIiwiY2hlY2tib3giLCJwcm9kdWN0TGluayIsIl9mdWxsTmFtZUVsZW1lbnQkdGV4dCIsIl9ocmVmJG1hdGNoIiwiX3ByaWNlRWxlbWVudCR0ZXh0Q29uIiwiZnVsbE5hbWVFbGVtZW50IiwicHJpY2VFbGVtZW50IiwidmFyaWF0aW9uRWxlbWVudHMiLCJfbG9vcCQiLCJfY29udGV4dDQiLCJ2YXJpYXRpb24iLCJfdmFyaWF0aW9uJHF1ZXJ5U2VsZWMiLCJfdmFyaWF0aW9uJHF1ZXJ5U2VsZWMyIiwidDEiLCJ0MiIsIl94MTQiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImh0bWwiLCJjcmVhdGVNb2RhbCIsIm1vZGFsSHRtbCIsIm1vZGFsQ29udGFpbmVyIiwiYm9keSIsImVycm9yTWVzc2FnZSIsInN0eWxlIiwiZGlzcGxheSIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=
