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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



// extend window

var work = function work() {
  var monkeyPatch = function monkeyPatch() {
    window.monkeyPatched = true;
    var originalAddEventListener = EventTarget.prototype.addEventListener;

    // Add this at the top of the file
    var TimeOut = 30000;
    function captureInteraction(eventType, target, timestamp, selector, url, uuid) {
      function findClickableParent(element) {
        var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var allAttributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        // Base case: if element is null or we've reached max depth
        if (!element || depth >= 15) return allAttributes;

        // Check and collect all relevant attributes at current level
        if (element.hasAttribute('data-clickable-id')) {
          allAttributes['data-clickable-id'] = element.getAttribute('data-clickable-id') || '';
        }
        if (element.hasAttribute('data-element-meta-name')) {
          allAttributes['data-element-meta-name'] = element.getAttribute('data-element-meta-name') || '';
        }
        if (element.hasAttribute('data-element-meta-data')) {
          allAttributes['data-element-meta-data'] = element.getAttribute('data-element-meta-data') || '';
        }

        // Continue searching up the tree, passing along collected attributes
        return findClickableParent(element.parentElement, depth + 1, allAttributes);
      }
      var simplifiedHTML = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.processRecipe)();
      var pageMeta = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.findPageMeta)();
      var allAttributes = findClickableParent(target);
      // Generate new HTML snapshot ID
      var currentSnapshotId = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.generateHtmlSnapshotId)(timestamp, uuid);

      // Create a serializable version of the target
      var serializedTarget = {
        tagName: target.tagName,
        className: target.className,
        id: target.id,
        innerText: target.innerText || target.value || '',
        outerHTML: target.outerHTML
      };
      var markedDoc = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.getClickableElementsInViewport)();
      var data = {
        eventType: eventType,
        timestamp: timestamp,
        uuid: uuid,
        target: serializedTarget,
        // Replace direct DOM element with serializable object
        htmlSnapshotId: currentSnapshotId,
        selector: selector || '',
        'data-semantic-id': allAttributes['data-clickable-id'] || '',
        'element-meta-name': allAttributes['data-element-meta-name'] || '',
        'element-meta-data': allAttributes['data-element-meta-data'] || '',
        'page-meta': pageMeta || '',
        url: url || '',
        htmlContent: markedDoc.documentElement.outerHTML,
        simplifiedHTML: simplifiedHTML
      };
      if (target.tagName === 'INPUT' && target.type === 'text') {
        data['input-terms'] = target.value;
      }
      if (target.id === 'nav-search-submit-button' && target.type === 'submit') {
        var _document$querySelect;
        data['input-terms'] = (_document$querySelect = document.querySelector('input[id="twotabsearchtextbox"]')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.value;
      }
      return data;
    }
    // todo: patch removeEventListener support wrap
    // const blockSignals = {}
    // const finishSignals = {}
    var wait_for_abort = function wait_for_abort(signal) {
      return new Promise(function (resolve, reject) {
        if (signal.aborted) {
          // If already aborted, resolve immediately
          resolve(void 0);
        } else {
          // Otherwise, listen for the abort event
          signal.addEventListener('abort', function () {
            return resolve(void 0);
          }, {
            once: true
          });
        }
      });
    };
    var hasDefaultAction = function hasDefaultAction(event) {
      var element = event.target;
      var anchor = element.closest('a');
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
      return false;
    };
    // Monkey patch addEventListener
    EventTarget.prototype.addEventListener = function (type, listener) {
      var _this = this;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (options && options.skip_monkey_patch) {
        return originalAddEventListener.call(this, type, listener, options);
      }
      var callOriginalListener = function callOriginalListener(event) {
        if (typeof listener === 'function') {
          listener.call(_this, event);
        } else if (listener && typeof listener.handleEvent === 'function') {
          listener.handleEvent.call(listener, event);
        }
      };
      if (type === 'click' && listener) {
        var wrappedListener = /*#__PURE__*/function () {
          var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
            var target, controller, signal, timestamp, _uuid, screenshotComplete, interactionComplete, selector, data, newEvent, uuid, _screenshotComplete, _data, _interactionComplete;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!window.shouldExclude) {
                    _context.next = 4;
                    break;
                  }
                  console.log('should exclude');
                  callOriginalListener(event);
                  return _context.abrupt("return");
                case 4:
                  target = event.target;
                  if (!(0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.isFromPopup)(target)) {
                    _context.next = 8;
                    break;
                  }
                  callOriginalListener(event);
                  return _context.abrupt("return");
                case 8:
                  if (!event.just_for_default) {
                    _context.next = 11;
                    break;
                  }
                  console.log('skip monkey patch');
                  return _context.abrupt("return");
                case 11:
                  if (!event.block_signal) {
                    _context.next = 25;
                    break;
                  }
                  controller = new AbortController();
                  event.finish_signals.push(controller);
                  if (!event.block_signal) {
                    _context.next = 21;
                    break;
                  }
                  signal = event.block_signal.signal;
                  _context.next = 18;
                  return wait_for_abort(signal);
                case 18:
                  console.log('[Monkey Patch] Debouncing click event, unblocking');
                  _context.next = 22;
                  break;
                case 21:
                  console.log('[Monkey Patch] Debouncing click event, no block signal');
                case 22:
                  if (typeof listener === 'function') {
                    listener.call(this, event);
                  } else if (listener && typeof listener.handleEvent === 'function') {
                    listener.handleEvent.call(listener, event);
                  }
                  controller.abort();
                  return _context.abrupt("return");
                case 25:
                  event.block_signal = new AbortController();
                  event.finish_signals = [];
                  console.log('[Monkey Patch] Click detected on:', event.target);
                  console.log(event);
                  timestamp = new Date().toISOString(); // const anchor = target.closest('a')
                  console.log(event.target);
                  if (!hasDefaultAction(event)) {
                    _context.next = 67;
                    break;
                  }
                  // console.log('[Monkey Patch] Click on <a> tag:', anchor.href)
                  console.log('[Monkey Patch] Click on cancelable');
                  event.preventDefault();
                  event.preventDefault = function () {
                    event.my_default_prevented = true;
                  };
                  event.my_default_prevented = false;
                  console.log('after patch event', event);
                  // const targetHref = anchor.href
                  _uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
                  _context.prev = 38;
                  screenshotComplete = new Promise(function (resolve, reject) {
                    function handleMessage(event) {
                      if (event.data.type === 'SCREENSHOT_COMPLETE' && event.data.timestamp === timestamp) {
                        window.removeEventListener('message', handleMessage);
                        if (event.data.success) {
                          resolve(void 0);
                        } else {
                          reject(new Error(event.data.error || 'Screenshot failed'));
                        }
                      }
                    }
                    window.addEventListener('message', handleMessage);

                    // Add timeout
                    setTimeout(function () {
                      window.removeEventListener('message', handleMessage);
                      reject(new Error('Screenshot timeout'));
                    }, TimeOut);
                  });
                  interactionComplete = new Promise(function (resolve, reject) {
                    function handleMessage1(event) {
                      if (event.data.type === 'INTERACTION_COMPLETE' && event.data.timestamp === timestamp) {
                        window.removeEventListener('message', handleMessage1);
                        if (event.data.success) {
                          resolve(void 0);
                        } else {
                          reject(new Error(event.data.error || 'Interaction failed'));
                        }
                      }
                    }
                    window.addEventListener('message', handleMessage1);

                    // Add timeout
                    setTimeout(function () {
                      window.removeEventListener('message', handleMessage1);
                      reject(new Error('Interaction timeout'));
                    }, TimeOut);
                  }); // log before and after time
                  selector = (0,_medv_finder__WEBPACK_IMPORTED_MODULE_1__.finder)(event.target, {
                    maxNumberOfPathChecks: 0
                  });
                  data = captureInteraction('click_a', event.target, timestamp, selector, window.location.href, _uuid);
                  window.postMessage({
                    type: 'CAPTURE_SCREENSHOT',
                    timestamp: timestamp,
                    uuid: _uuid
                  }, '*');
                  window.postMessage({
                    type: 'SAVE_INTERACTION_DATA',
                    data: data,
                    uuid: _uuid
                  }, '*');
                  // alert("3")
                  // Wait for screenshot to complete
                  console.log('waiting for screenshot and interaction');
                  _context.next = 48;
                  return Promise.all([screenshotComplete, interactionComplete]);
                case 48:
                  console.log('screenshot and interaction complete');
                  // console.log("completed")
                  // debugger
                  // alert("2")
                  // window.location.href = targetHref
                  // re-dispatch the event
                  _context.next = 54;
                  break;
                case 51:
                  _context.prev = 51;
                  _context.t0 = _context["catch"](38);
                  console.error('Error:', _context.t0);
                case 54:
                  _context.prev = 54;
                  console.log('running original listener');
                  console.log(listener);
                  console.log(event);
                  event.block_signal.abort();
                  // abort all finishSignals
                  _context.next = 61;
                  return Promise.all(event.finish_signals.map(function (controller) {
                    return wait_for_abort(controller.signal);
                  }));
                case 61:
                  callOriginalListener(event);
                  console.log('event', event);
                  console.log('re-dispatch the event if its not prevented, 2');
                  if (!event.my_default_prevented) {
                    // debugger
                    // Clone the original event
                    newEvent = new MouseEvent(event.type, {
                      bubbles: event.bubbles,
                      cancelable: false,
                      // Ensures the default behavior occurs
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
                  return _context.finish(54);
                case 66:
                  return _context.abrupt("return");
                case 67:
                  uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
                  _context.prev = 68;
                  // Create a promise to wait for screenshot completion
                  _screenshotComplete = new Promise(function (resolve, reject) {
                    function handleMessage(event) {
                      if (event.data.type === 'SCREENSHOT_COMPLETE' && event.data.timestamp === timestamp) {
                        window.removeEventListener('message', handleMessage);
                        if (event.data.success) {
                          resolve(void 0);
                        } else {
                          reject(new Error(event.data.error || 'Screenshot failed'));
                        }
                      }
                    }
                    window.addEventListener('message', handleMessage);

                    // Add timeout
                    setTimeout(function () {
                      window.removeEventListener('message', handleMessage);
                      reject(new Error('Screenshot timeout'));
                    }, TimeOut);
                  });
                  _data = captureInteraction('click_b', event.target, timestamp, (0,_medv_finder__WEBPACK_IMPORTED_MODULE_1__.finder)(event.target, {
                    maxNumberOfPathChecks: 0
                  }), window.location.href, uuid); // Request screenshot
                  window.postMessage({
                    type: 'CAPTURE_SCREENSHOT',
                    timestamp: timestamp,
                    uuid: uuid
                  }, '*');
                  window.postMessage({
                    type: 'SAVE_INTERACTION_DATA',
                    data: _data,
                    uuid: uuid
                  }, '*');
                  _interactionComplete = new Promise(function (resolve, reject) {
                    function handleMessage1(event) {
                      if (event.data.type === 'INTERACTION_COMPLETE' && event.data.timestamp === timestamp) {
                        window.removeEventListener('message', handleMessage1);
                        if (event.data.success) {
                          resolve(void 0);
                        } else {
                          reject(new Error(event.data.error || 'Interaction failed'));
                        }
                      }
                    }
                    window.addEventListener('message', handleMessage1);

                    // Add timeout
                    setTimeout(function () {
                      window.removeEventListener('message', handleMessage1);
                      reject(new Error('Interaction timeout'));
                    }, TimeOut);
                  }); // Wait for screenshot to complete
                  // await ASscreenshotComplete
                  // await interactionComplete
                  console.log('waiting for screenshot and interaction');
                  _context.next = 77;
                  return Promise.all([_screenshotComplete, _interactionComplete]);
                case 77:
                  console.log('screenshot and interaction complete');
                  // Execute original listener after screenshot is captured
                  _context.next = 83;
                  break;
                case 80:
                  _context.prev = 80;
                  _context.t1 = _context["catch"](68);
                  console.error('Error capturing screenshot:', _context.t1);
                  // Execute original listener even if screenshot fails
                case 83:
                  _context.prev = 83;
                  console.log('running original listener');
                  event.block_signal.abort();
                  // abort all finishSignals
                  _context.next = 88;
                  return Promise.all(event.finish_signals.map(function (controller) {
                    return wait_for_abort(controller.signal);
                  }));
                case 88:
                  callOriginalListener(event);
                  return _context.finish(83);
                case 90:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[38, 51, 54, 66], [68, 80, 83, 90]]);
          }));
          return function wrappedListener(_x) {
            return _ref.apply(this, arguments);
          };
        }();

        // Call the original addEventListener with the wrapped listener
        if (options) {
          // if boolean, set passive to true
          if (typeof options === 'boolean') {
            options = {
              useCapture: false,
              passive: false
            };
          } else if (_typeof(options) === 'object') {
            options.passive = false;
          }
        }
        return originalAddEventListener.call(this, type, wrappedListener, options);
      } else {
        // Call the original addEventListener for non-click events
        return originalAddEventListener.call(this, type, listener, options);
      }
    };
    console.log('[Monkey Patch] addEventListener successfully patched.');

    // Function to handle clicks on <a> tags
    function handleAnchorClicks() {
      document.addEventListener('click', /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event) {
          var now, target, timestamp, uuid, screenshotComplete, data, interactionComplete, newEvent;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (!window.shouldExclude) {
                  _context2.next = 3;
                  break;
                }
                console.log('should exclude');
                return _context2.abrupt("return");
              case 3:
                if (!(0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.isFromPopup)(event.target)) {
                  _context2.next = 5;
                  break;
                }
                return _context2.abrupt("return");
              case 5:
                if (!event.just_for_default) {
                  _context2.next = 8;
                  break;
                }
                console.log('skip monkey patch b');
                return _context2.abrupt("return");
              case 8:
                if (!hasDefaultAction(event)) {
                  _context2.next = 44;
                  break;
                }
                // Add debouncing logic
                now = Date.now();
                if (!event.block_signal) {
                  _context2.next = 14;
                  break;
                }
                console.log('[Monkey Patch] Anchor click event hander from our own listener');
                console.log('should already be logged in other event listeners');
                return _context2.abrupt("return");
              case 14:
                event.block_signal = new AbortController();
                event.finish_signals = [];
                target = event.target; // console.log('[Intercepted] Click on <a> tag:', anchor.href)
                console.log('[Intercepted] Click on cancelable');
                // if (!anchor.href.startsWith('javascript:')) {
                event.preventDefault();
                event.stopPropagation();
                timestamp = new Date().toISOString(); // const targetHref = anchor.hrstartPeriodicUploadef
                uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
                _context2.prev = 22;
                // 监听截图完成的消息
                screenshotComplete = new Promise(function (resolve, reject) {
                  function handleMessage(event) {
                    if (event.data.type === 'SCREENSHOT_COMPLETE' && event.data.timestamp === timestamp) {
                      window.removeEventListener('message', handleMessage);
                      if (event.data.success) {
                        resolve(void 0);
                      } else {
                        reject(new Error(event.data.error || 'Screenshot failed'));
                      }
                    }
                  }
                  window.addEventListener('message', handleMessage, {
                    capture: true
                  });

                  // 添加超时处理
                  setTimeout(function () {
                    window.removeEventListener('message', handleMessage);
                    reject(new Error('Screenshot timeout'));
                  }, TimeOut); // 3秒超时
                }); // 发送截图请求

                window.postMessage({
                  type: 'CAPTURE_SCREENSHOT',
                  timestamp: timestamp,
                  uuid: uuid
                }, '*');
                data = captureInteraction('click_c', event.target, timestamp, (0,_medv_finder__WEBPACK_IMPORTED_MODULE_1__.finder)(target, {
                  maxNumberOfPathChecks: 0
                }), window.location.href, uuid);
                window.postMessage({
                  type: 'SAVE_INTERACTION_DATA',
                  data: data,
                  uuid: uuid
                }, '*');
                interactionComplete = new Promise(function (resolve, reject) {
                  function handleMessage1(event) {
                    if (event.data.type === 'INTERACTION_COMPLETE' && event.data.timestamp === timestamp) {
                      window.removeEventListener('message', handleMessage1);
                      if (event.data.success) {
                        resolve(void 0);
                      } else {
                        reject(new Error(event.data.error || 'Interaction failed'));
                      }
                    }
                  }
                  window.addEventListener('message', handleMessage1);

                  // Add timeout
                  setTimeout(function () {
                    window.removeEventListener('message', handleMessage1);
                    reject(new Error('Interaction timeout'));
                  }, TimeOut);
                }); // 等待截图完成
                _context2.next = 30;
                return screenshotComplete;
              case 30:
                _context2.next = 32;
                return interactionComplete;
              case 32:
                _context2.next = 37;
                break;
              case 34:
                _context2.prev = 34;
                _context2.t0 = _context2["catch"](22);
                console.error('Error capturing screenshot:', _context2.t0);
                // window.location.href = targetHref
              case 37:
                _context2.prev = 37;
                event.block_signal.abort();
                _context2.next = 41;
                return Promise.all(event.finish_signals.map(function (controller) {
                  return wait_for_abort(controller.signal);
                }));
              case 41:
                console.log('re-dispatch the event if its not prevented, 1');
                if (!event.my_default_prevented) {
                  // Clone the original event
                  newEvent = new MouseEvent(event.type, {
                    bubbles: event.bubbles,
                    cancelable: false,
                    // Ensures the default behavior occurs
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
                return _context2.finish(37);
              case 44:
              case "end":
                return _context2.stop();
            }
          }, _callee2, null, [[22, 34, 37, 44]]);
        }));
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }(), {
        useCapture: true,
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
  document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded');
    (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.shouldExclude)(window.location.href).then(function (result) {
      console.log('shouldExclude', result);
      window.shouldExclude = result;
    });
  }, {
    once: true
  });
};

// ignore user id for now, because full check would be async.
(0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.shouldExclude)(window.location.href, true).then(function (result) {
  if (!result) {
    work();
  }
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsaUJBQUFGLEdBQUE7VUFBQSxPQUFBK0osS0FBQSxDQUFBOVAsS0FBQSxPQUFBcEcsU0FBQTtRQUFBO01BQUEsS0FDRDtRQUNFK1YsVUFBVSxFQUFFLElBQUk7UUFDaEI5QyxpQkFBaUIsRUFBRSxJQUFJO1FBQ3ZCK0MsT0FBTyxFQUFFO01BQ1gsQ0FDRixDQUFDLEVBQUM7SUFDSjs7SUFFQTtJQUNBQyxrQkFBa0IsQ0FBQyxDQUFDO0VBQ3RCLENBQUM7RUFDRCxJQUFJLENBQUNyTyxNQUFNLENBQUM2SixhQUFhLEVBQUU7SUFDekJELFdBQVcsQ0FBQyxDQUFDO0VBQ2Y7RUFDQXpLLFFBQVEsQ0FBQ21HLGdCQUFnQixDQUN2QixrQkFBa0IsRUFDbEIsWUFBTTtJQUNKaFYsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7SUFDL0JxUywwREFBYSxDQUFDNUMsTUFBTSxDQUFDOEYsUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQ3pLLElBQUksQ0FBQyxVQUFDcUosTUFBTSxFQUFLO01BQ25EclUsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxFQUFFb1UsTUFBTSxDQUFDO01BQ3BDM0UsTUFBTSxDQUFDNEMsYUFBYSxHQUFHK0IsTUFBTTtJQUMvQixDQUFDLENBQUM7RUFDSixDQUFDLEVBQ0Q7SUFDRXFHLElBQUksRUFBRTtFQUNSLENBQ0YsQ0FBQztBQUNILENBQUM7O0FBRUQ7QUFDQXBJLDBEQUFhLENBQUM1QyxNQUFNLENBQUM4RixRQUFRLENBQUNDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQ3pLLElBQUksQ0FBQyxVQUFDcUosTUFBTSxFQUFLO0VBQ3pELElBQUksQ0FBQ0EsTUFBTSxFQUFFO0lBQ1hnRixJQUFJLENBQUMsQ0FBQztFQUNSO0FBQ0YsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvcmVjaXBlX25ldy50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy91dGlscy9lbGVtZW50LXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy91dGlscy91dGlsLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0BtZWR2L2ZpbmRlci9maW5kZXIuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9pbmplY3RlZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcG9wdXBfcHJvYmFiaWxpdHkgPSAwLjE1XG5leHBvcnQgY29uc3QgcG9wdXBfc2Nyb2xsX3Byb2JhYmlsaXR5ID0gMC4xXG5leHBvcnQgY29uc3QgcG9wdXBfY2xpY2tfcHJvYmFiaWxpdHkgPSAwLjJcbmV4cG9ydCBjb25zdCBwb3B1cF9uYXZpZ2F0aW9uX3Byb2JhYmlsaXR5ID0gMC4xNVxuZXhwb3J0IGNvbnN0IHBvcHVwX3RhYkFjdGl2YXRlX3Byb2JhYmlsaXR5ID0gMC4xNVxuZXhwb3J0IGNvbnN0IGZvbGRlcl9uYW1lID0gYHVzZXJfaW50ZXJhY3Rpb25fZGF0YWBcbmV4cG9ydCBjb25zdCB6aXAgPSB0cnVlXG5leHBvcnQgY29uc3QgdXBsb2FkX3VybCA9ICdodHRwOi8vdXNlcmRhdGFjb2xsZWN0LmhhaWxhYi5pby91cGxvYWQnXG5leHBvcnQgY29uc3QgYmFzZV91cmwgPSAnaHR0cDovL3VzZXJkYXRhY29sbGVjdC5oYWlsYWIuaW8nXG5leHBvcnQgY29uc3QgZGF0YV9jb2xsZWN0b3Jfc2VjcmV0X2lkID0gJ2hhaWxhYidcbmV4cG9ydCBjb25zdCB1cmxfaW5jbHVkZXMgPSBbJ3d3dy5hbWF6b24uY29tJ11cbmV4cG9ydCBjb25zdCBpbnRlcmFjdGlvbl9zdGF0dXNfdXJsID0gYCR7YmFzZV91cmx9L2ludGVyYWN0aW9uc19yZWNvcmRfc3RhdHVzYFxuZXhwb3J0IGNvbnN0IGNoZWNrX3VzZXJfaWRfdXJsID0gYCR7YmFzZV91cmx9L2NoZWNrX3VzZXJfaWRgXG5leHBvcnQgY29uc3QgZmlsdGVyX3VybCA9IFtcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vY2hlY2tvdXQvJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vZ3AvYnV5LycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2EvYWRkcmVzc2VzJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vY3BlL3lvdXJwYXltZW50cy8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9hcC9zaWduaW4nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9hcC9jdmYvJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vYXAvcHJvZmlsZS8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9heC9hY2NvdW50LycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL3Byb2R1Y3QvaGFuZGxlLWJ1eS1ib3gvJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vZ3AvY2hlY2tvdXRwb3J0YWwvJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vZ3AvY2FydC9kZXNrdG9wLydcbl1cbmV4cG9ydCBjb25zdCBzY3JvbGxfdGhyZXNob2xkID0gMzAwXG4iLCJleHBvcnQgY29uc3QgbmF2ID0ge1xuICBzZWxlY3RvcjogJyNuYXZiYXItbWFpbicsXG4gIG5hbWU6ICduYXZfYmFyJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYtc2VhcmNoLWJhci1mb3JtJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0I3R3b3RhYnNlYXJjaHRleHRib3gnLFxuICAgICAgICAgIG5hbWU6ICdzZWFyY2hfaW5wdXQnLFxuICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtID0gZW0/LnZhbHVlXG4gICAgICAgICAgICByZXR1cm4geyBuYW1lOiAnc2VhcmNoX3Rlcm0nLCBkYXRhOiB7IHRlcm0gfSB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6ICcjbmF2LXNlYXJjaC1zdWJtaXQtYnV0dG9uJyxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgbmFtZTogJ3NlYXJjaF9idXR0b24nXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI25hdi1saW5rLWFjY291bnRMaXN0JyxcbiAgICAgIHRleHRfc2VsZWN0b3I6ICcjbmF2LWxpbmstYWNjb3VudExpc3Qgc3Bhbi5uYXYtbGluZS0yJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2FjY291bnRfYW5kX2xpc3RfYnV0dG9uJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LW9yZGVycycsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdvcmRlcl9idXR0b24nXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYtY2FydCcsXG4gICAgICB0ZXh0X3NlbGVjdG9yOiAnI25hdi1jYXJ0IC5uYXYtbGluZS0yJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2NhcnRfYnV0dG9uJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LWZseW91dC1zZWFyY2hBamF4JyxcbiAgICAgIG5hbWU6ICdzdWdnZXN0ZWRfdGVybXMnLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtc3VnZ2VzdGlvbi1lbGxpcHNpcy1kaXJlY3Rpb24nLFxuICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCByZWZpbmVtZW50X29wdGlvbiA9IFtcbiAge1xuICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0JyxcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBjbGFzczogJ3JlZmluZW1lbnQtdGl0bGUnXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJ2Eucy1uYXZpZ2F0aW9uLWNsZWFyLWxpbmsnLFxuICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgIG5hbWU6ICdjbGVhcl9zZWxlY3Rpb24nLFxuICAgIGNsaWNrYWJsZTogdHJ1ZVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICd1bCA+IHNwYW4uYS1kZWNsYXJhdGl2ZSA+IHNwYW4gPiBsaTpoYXMoYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtKScsXG4gICAgYWRkX3RleHQ6IHRydWUsXG4gICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIC8vIGNsaWNrX3NlbGVjdG9yOiBcImFcIixcbiAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgdGV4dCArPSAnICdcbiAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgLy8gdGV4dCA9ICdDbGVhciBPcHRpb24gJyArIHRleHRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICByZXR1cm4gJydcbiAgICAgIH1cbiAgICB9LFxuICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZWxlbWVudCkgPT4ge1xuICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICB0ZXh0ICs9ICdfJ1xuICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBuYW1lRW0gPSBlbGVtZW50LmNsb3Nlc3QoJ3VsJyk/LnBhcmVudEVsZW1lbnQ/LmZpcnN0RWxlbWVudENoaWxkXG4gICAgICBjb25zdCBuYW1lID0gbmFtZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1sgXS9nLCAnXycpLnRvTG93ZXJDYXNlKCkudHJpbSgpXG5cbiAgICAgIGxldCB1cmwgPSAnJ1xuXG4gICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSkge1xuICAgICAgICB1cmwgPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgIH1cblxuICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLFxuICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IHRleHQ/LnRyaW0oKSB8fCAnJywgc2VsZWN0ZWQ6IHRydWUsIHVybCB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSxcbiAgICAgICAgZGF0YTogeyB0aXRsZTogdGV4dD8udHJpbSgpIHx8ICcnLCBzZWxlY3RlZDogZmFsc2UsIHVybCB9XG4gICAgICB9XG4gICAgfSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjpcbiAgICAgIFwidWwgPiBzcGFuLmEtZGVjbGFyYXRpdmUgPiBsaSA+IHNwYW4gPiBkaXZbZGF0YS1hLWV4cGFuZGVyLW5hbWU9J2ZpbHRlci1jb250ZW50LWV4cGFuZGVyJ11cIixcbiAgICBuYW1lOiAnbW9yZV9vcHRpb25zJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogXCJhW2RhdGEtY3NhLWMtZnVuYy1kZXBzPSdhdWktZGEtYS1leHBhbmRlci10b2dnbGUnXVwiLFxuICAgICAgICBuYW1lOiAndG9nZ2xlX2V4cGFuc2lvbicsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2xpJyxcbiAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIC8vIGNsaWNrX3NlbGVjdG9yOiBcImFcIixcbiAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JykgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgICAvLyB0ZXh0ID0gJ0NsZWFyIE9wdGlvbiAnICsgdGV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgdGV4dCArPSAnXydcbiAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgbmFtZUVtID0gZWxlbWVudC5jbG9zZXN0KCd1bCcpPy5wYXJlbnRFbGVtZW50Py5jbG9zZXN0KCd1bCcpXG4gICAgICAgICAgICA/LnBhcmVudEVsZW1lbnQ/LmZpcnN0RWxlbWVudENoaWxkXG4gICAgICAgICAgY29uc3QgbmFtZSA9IG5hbWVFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bIF0vZywgJ18nKS50b0xvd2VyQ2FzZSgpLnRyaW0oKVxuXG4gICAgICAgICAgbGV0IHVybCA9ICcnXG5cbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSkge1xuICAgICAgICAgICAgdXJsID0gYUNoaWxkLmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMuJyArIG5hbWUsXG4gICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IHRleHQ/LnRyaW0oKSB8fCAnJywgc2VsZWN0ZWQ6IHRydWUsIHVybCB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMuJyArIG5hbWUsXG4gICAgICAgICAgICBkYXRhOiB7IHRpdGxlOiB0ZXh0Py50cmltKCkgfHwgJycsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9XG5dXG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0X2ZhY3RzID0ge1xuICBzZWxlY3RvcjogJyNwcm9kdWN0RmFjdHNEZXNrdG9wRXhwYW5kZXInLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2xhc3M6ICdwcm9kdWN0LWZhY3RzJ1xufVxuXG5leHBvcnQgY29uc3QgcHJvZHVjdF9kZWxpdmVyeSA9IHtcbiAgc2VsZWN0b3I6ICdkaXYubWlyLWxheW91dC1ERUxJVkVSWV9CTE9DSy1zbG90LVBSSU1BUllfREVMSVZFUllfTUVTU0FHRV9MQVJHRScsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGFzczogJ3Byb2R1Y3QtZGVsaXZlcnknXG59XG5cbmV4cG9ydCBjb25zdCBxdWFudGl0eV9zZWxlY3RvciA9IHtcbiAgc2VsZWN0b3I6ICcjc2VsZWN0UXVhbnRpdHksIGRpdltpZF49XCJxcy13aWRnZXQtYnV0dG9uLWNvbnRhaW5lci1hdGZjXCJdJyxcbiAgbmFtZTogJ3F1YW50aXR5X3NlbGVjdG9yJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2xhYmVsJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ3NwYW4uYS1kcm9wZG93bi1wcm9tcHQnLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnc2VsZWN0JyxcbiAgICAgIC8vIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnYnV0dG9uJyxcbiAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCcsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdkaXYucXMtd2lkZ2V0LWRyb3Bkb3duLXdyYXBwZXIgc3BhbltkYXRhLWFjdGlvbj1cInFzLXdpZGdldC1kcm9wZG93bi1kZWNsXCJdJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgdXNlX3Jvb3Q6IHRydWUsXG4gICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgIHRleHRfZm9ybWF0OiAnRHJvcCBEb3duIE9wdGlvbiB7fSdcbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGl2ZXJ5X2ZyZXF1ZW5jeV9zZWxlY3RvciA9IHtcbiAgc2VsZWN0b3I6ICcjcmVwbGVuaXNobWVudEZyZXF1ZW5jeV9mZWF0dXJlX2RpdicsXG4gIG5hbWU6ICdkZWxpdmVyeV9mcmVxdWVuY3lfc2VsZWN0b3InLFxuICB0ZXh0X3NlbGVjdG9yOiAnZGl2LmEtc2VjdGlvbi5hLXNwYWNpbmctbWljcm8gPiBzcGFuJyxcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjcmN4T3JkRnJlcU9ubWxXcmFwcGVyIHNwYW4uYS1kcm9wZG93bi1wcm9tcHQnLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI3JjeE9yZEZyZXFPbm1sV3JhcHBlciBzZWxlY3QnLFxuICAgICAgLy8gY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3Qgc2V0X3VwX25vd19idXR0b24gPSB7XG4gIHNlbGVjdG9yOiAnI3JjeC1zdWJzY3JpYmUtc3VibWl0LWJ1dHRvbi1hbm5vdW5jZScsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGlja2FibGU6IHRydWUsXG4gIG5hbWU6ICdzZXRfdXBfbm93JyxcbiAgY2xhc3M6ICdwcm9kdWN0LXNldC11cC1ub3cnXG59XG5cbmV4cG9ydCBjb25zdCBhZGRfdG9fY2FydF9idXR0b24gPSB7XG4gIHNlbGVjdG9yOlxuICAgIFwiaW5wdXRbbmFtZT0nc3VibWl0LmFkZC10by1jYXJ0J10sIGlucHV0W25hbWU9J3N1Ym1pdC5hZGQtdG8tY2FydC11YmInXSwgI2ZyZXNoQWRkVG9DYXJ0QnV0dG9uIGlucHV0XCIsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGlja2FibGU6IHRydWUsXG4gIG5hbWU6ICdhZGRfdG9fY2FydCcsXG4gIGNsYXNzOiAncHJvZHVjdC1hZGQtdG8tY2FydCdcbn1cblxuZXhwb3J0IGNvbnN0IGJ1eV9ub3dfYnV0dG9uID0ge1xuICBzZWxlY3RvcjogXCJpbnB1dFtuYW1lPSdzdWJtaXQuYnV5LW5vdyddXCIsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGlja2FibGU6IHRydWUsXG4gIG5hbWU6ICdidXlfbm93JyxcbiAgY2xhc3M6ICdwcm9kdWN0LWJ1eS1ub3cnXG59XG5cbmV4cG9ydCBjb25zdCBidXlfYm94X3dpdGhfYWNjb3JkaW9uID0ge1xuICBzZWxlY3RvcjogJyNidXlCb3hBY2NvcmRpb24gPiBkaXYuYS1ib3guY2Vsd2lkZ2V0JyxcbiAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gIHRleHRfc2VsZWN0b3I6ICdkaXYuYWNjb3JkaW9uLWNhcHRpb24gPiBzcGFuJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjpcbiAgICAgICAgXCJkaXZbZGF0YS1jc2EtYy1jb250ZW50LWlkPSdvZmZlcl9kaXNwbGF5X2Rlc2t0b3BfYWNjb3JkaW9uX2hlYWRlciddLCBkaXZbZGF0YS1jc2EtYy1jb250ZW50LWlkPSdvZmZlcl9kaXNwbGF5X21vYmlsZV9hY2NvcmRpb25faGVhZGVyJ11cIixcbiAgICAgIG5hbWU6ICdhY2NvcmRpb25fc2VsZWN0b3InLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICB0ZXh0X3NlbGVjdG9yOiAnaDUgc3Bhbi5hLXRleHQtYm9sZCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnZGl2LmEtYWNjb3JkaW9uLWlubmVyLmFjY29yZGlvbi1yb3ctY29udGVudCcsXG4gICAgICBuYW1lOiAncHVyY2hhc2VfZm9ybScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICBwcm9kdWN0X2ZhY3RzLFxuICAgICAgICBwcm9kdWN0X2RlbGl2ZXJ5LFxuICAgICAgICBxdWFudGl0eV9zZWxlY3RvcixcbiAgICAgICAgZGVsaXZlcnlfZnJlcXVlbmN5X3NlbGVjdG9yLFxuICAgICAgICBzZXRfdXBfbm93X2J1dHRvbixcbiAgICAgICAgYWRkX3RvX2NhcnRfYnV0dG9uLFxuICAgICAgICBidXlfbm93X2J1dHRvblxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9kZWxpdmVyeSA9IHtcbiAgc2VsZWN0b3I6ICcjZ3NvZF9zaW5nbGVPZmZlckRpc3BsYXlfRGVza3RvcCcsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjYWRkVG9DYXJ0JyxcbiAgICAgIG5hbWU6ICdwdXJjaGFzZV9mb3JtJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHByb2R1Y3RfZmFjdHMsXG4gICAgICAgIHByb2R1Y3RfZGVsaXZlcnksXG4gICAgICAgIHF1YW50aXR5X3NlbGVjdG9yLFxuICAgICAgICBhZGRfdG9fY2FydF9idXR0b24sXG4gICAgICAgIGJ1eV9ub3dfYnV0dG9uXG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX3BpY2tfdXAgPSB7XG4gIHNlbGVjdG9yOiAnI2dzb2Rfc2luZ2xlT2ZmZXJEaXNwbGF5X2dyb3VwXzJfRGVza3RvcCcsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjcGlja1VwT2ZmZXJEaXNwbGF5JyxcbiAgICAgIG5hbWU6ICdwdXJjaGFzZV9mb3JtJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHByb2R1Y3RfZmFjdHMsXG4gICAgICAgIHByb2R1Y3RfZGVsaXZlcnksXG4gICAgICAgIHF1YW50aXR5X3NlbGVjdG9yLFxuICAgICAgICBhZGRfdG9fY2FydF9idXR0b24sXG4gICAgICAgIGJ1eV9ub3dfYnV0dG9uXG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBjYXJ0ID0gW1xuICBuYXYsXG4gIHtcbiAgICBzZWxlY3RvcjogJyNzYy1jb2xsYXBzZWQtY2FydHMtY29udGFpbmVyJyxcbiAgICBuYW1lOiAnYW1hem9uX2ZyZXNoX2NhcnQnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWxvY2FsbWFya2V0LXRleHQtbG9nbycsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2RpdltkYXRhLW5hbWU9XCJjb2xsYXBzZWRfaXRlbV9saXN0XCJdJyxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICBuYW1lOiAnaXRlbV9saXN0J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtYnV5LWJveC1pbm5lci1ib3ggaW5wdXRbbmFtZV49XCJwcm9jZWVkVG9BTE1DaGVja291dFwiXScsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgbmFtZTogJ2NoZWNrX291dCcsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1idXktYm94LWlubmVyLWJveCBhJyxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1uYW1lPSdBY3RpdmUgSXRlbXMnXVwiLFxuICAgIG5hbWU6ICdhY3RpdmVfaXRlbV9saXN0JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1saXN0LWl0ZW0tY29udGVudCcsXG4gICAgICAgIHRleHRfc2VsZWN0b3I6XG4gICAgICAgICAgJ2Rpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgdWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUgc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1pdGVtLWNoZWNrLWNoZWNrYm94LXNlbGVjdG9yIGxhYmVsJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdjaGVja2JveCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWltYWdlLXdyYXBwZXIgYScsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCB1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZScsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWwnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2xpLnNjLWRlbGl2ZXJ5LW1lc3NhZ2luZycsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtYmFkZ2UtcHJpY2UtdG8tcGF5IHNwYW4uc2MtcHJvZHVjdC1wcmljZSBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgc3Bhbi5zYy1xdWFudGl0eS1zdGVwcGVyJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPSdzcGluYnV0dG9uJ11cIixcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0luY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIGlucHV0W2RhdGEtYWN0aW9uPSdkZWxldGUnXVwiLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnZGVsZXRlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCBpbnB1dFtkYXRhLWFjdGlvbj0nc2F2ZS1mb3ItbGF0ZXInXVwiLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnc2F2ZV9mb3JfbGF0ZXInXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXNpbiA9IGVtLnBhcmVudEVsZW1lbnQ/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdkaXYuc2MtYmFkZ2UtcHJpY2UtdG8tcGF5IHNwYW4uc2MtcHJvZHVjdC1wcmljZSBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJ1xuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCB1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZSBzcGFuLmEtdHJ1bmNhdGUtZnVsbCdcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCB1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZSdcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgY29uc3QgZGVsaXZlcnlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2xpLnNjLWRlbGl2ZXJ5LW1lc3NhZ2luZycpXG4gICAgICAgICAgY29uc3QgZGVsaXZlcnkgPSBkZWxpdmVyeUVtPy5pbm5lclRleHQucmVwbGFjZSgvW1xcbl0vZywgJyAnKVxuICAgICAgICAgIGNvbnN0IHF1YW50aXR5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCJkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIHNwYW4uc2MtcXVhbnRpdHktc3RlcHBlciBkaXZbcm9sZT0nc3BpbmJ1dHRvbiddXCJcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBxdWFudGl0eUVtPy5pbm5lclRleHRcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZEVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2LnNjLWl0ZW0tY2hlY2stY2hlY2tib3gtc2VsZWN0b3IgaW5wdXQnKVxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0ZWRFbT8uZ2V0QXR0cmlidXRlKCdjaGVja2VkJykgIT09IG51bGxcblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiAnYWN0aXZlX2l0ZW1zJyxcbiAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIGRlbGl2ZXJ5LCBxdWFudGl0eSwgc2VsZWN0ZWQgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnI3NjLWJ1eS1ib3gtcHRjLWJ1dHRvbiBpbnB1dCcsXG4gICAgYWRkX3RleHQ6IHRydWUsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIG5hbWU6ICdjaGVja19vdXQnXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IGZyZXNoX2NhcnQgPSBbXG4gIG5hdixcbiAge1xuICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLW5hbWU9J0FjdGl2ZSBJdGVtcyddXCIsXG4gICAgbmFtZTogJ2FjdGl2ZV9pdGVtX2xpc3QnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWxpc3QtaXRlbS1jb250ZW50JyxcbiAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3VsID4gbGkgPiBzcGFuLmEtbGlzdC1pdGVtID4gYS5zYy1wcm9kdWN0LXRpdGxlIHNwYW4uYS10cnVuY2F0ZS1mdWxsJyxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtcHJvZHVjdC1pbWFnZS1kZXNrdG9wIGEgaW1nJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZScsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWwnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1iYWRnZS1wcmljZS10by1wYXkgc3Bhbi5zYy1wcmljZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtYWN0aW9uLWxpbmtzJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5xcy13aWRnZXQtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsPSdSZW1vdmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVjcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucXMtd2lkZ2V0LWRyb3Bkb3duLWZsZXgtd3JhcHBlciBidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncXVhbnRpdHlfZHJvcF9kb3duX2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5xcy13aWRnZXQtZHJvcGRvd24td3JhcHBlciBzcGFuW2RhdGEtYWN0aW9uPVwicXMtd2lkZ2V0LWRyb3Bkb3duLWRlY2xcIl0nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB1c2Vfcm9vdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnRHJvcCBEb3duIE9wdGlvbiB7fSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdkaXZbaWRePVwicXMtd2lkZ2V0LXF1YW50aXR5LWNvbnRhaW5lci1hdGZjXCJdIHNwYW5bZGF0YS1hY3Rpb249XCJxcy13aWRnZXQtcXVhbnRpdHktY2hhbmdlbGluay1kZWNsXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdXNlX3Jvb3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnZGl2W2lkXj1cInFzLXdpZGdldC1zdW1tYXJ5LWNvbnRhaW5lci1hdGZjXCJdIHNwYW5baWRePVwicXMtd2lkZ2V0LXN1bW1hcnktYXRjLWF0ZmNcIl0nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB1c2Vfcm9vdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2FyaWEtbGFiZWw9J0FkZCddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbZGF0YS1hY3Rpb249J2RlbGV0ZSddXCIsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdkZWxldGUnXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXNpbiA9IGVtLnBhcmVudEVsZW1lbnQ/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2LnNjLWJhZGdlLXByaWNlLXRvLXBheSBzcGFuLnNjLXByaWNlJylcbiAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAndWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUgc3Bhbi5hLXRydW5jYXRlLWZ1bGwnXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCd1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZScpXG4gICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgY29uc3QgcXVhbnRpdHlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnZGl2LnNjLWFjdGlvbi1saW5rcyBkaXYucXMtd2lkZ2V0LWRyb3Bkb3duLWZsZXgtd3JhcHBlciBidXR0b24nXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gcXVhbnRpdHlFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6ICdhY3RpdmVfaXRlbXMnLFxuICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgcXVhbnRpdHkgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnZGl2LnNjLWJ1eS1ib3gtaW5uZXItYm94IGlucHV0W25hbWVePVwicHJvY2VlZFRvQUxNQ2hlY2tvdXRcIl0nLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICBuYW1lOiAnY2hlY2tfb3V0JyxcbiAgICBhZGRfdGV4dDogdHJ1ZVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICdkaXYuc2MtYnV5LWJveC1pbm5lci1ib3ggYScsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgIGFkZF90ZXh0OiB0cnVlXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJyNzYy1jYXJ0LWFib3ZlLWFjdGlvbnMgYnV0dG9uLCAjc2MtY2FydC1hYm92ZS1hY3Rpb25zIGEnLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICBhZGRfdGV4dDogdHJ1ZVxuICB9XG5dXG5cbmV4cG9ydCBjb25zdCBidXlfYWdhaW4gPSBbXG4gIG5hdixcbiAge1xuICAgIHNlbGVjdG9yOiAnZGl2LmEtc2VjdGlvbjpoYXMoZGl2LmZpbHRlci1jb250YWluZXIpJyxcbiAgICBuYW1lOiAnZmlsdGVycycsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXYuZmlsdGVyLWNvbnRhaW5lcicsXG4gICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuI2ZpbHRlci1jb250YWluZXItaGVhZGVyJyxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuI2ZpbHRlci1jb250YWluZXItaGVhZGVyJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2xhYmVsJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0uaW5uZXJUZXh0XG4gICAgICAgICAgICAgIGNvbnN0IG5hbWVFbSA9IGVtXG4gICAgICAgICAgICAgICAgLmNsb3Nlc3QoJ2Rpdi5maWx0ZXItY29udGFpbmVyJylcbiAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXItY29udGFpbmVyLWhlYWRlcicpXG4gICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvWyBdL2csICdfJykudG9Mb3dlckNhc2UoKS50cmltKClcbiAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG4gICAgICAgICAgICAgIGlmIChpbnB1dCAmJiBpbnB1dC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdmaWx0ZXJzLicgKyBuYW1lLFxuICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZTogdGl0bGU/LnRyaW0oKSB8fCAnJywgc2VsZWN0ZWQ6IHRydWUgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdmaWx0ZXJzLicgKyBuYW1lLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IHRpdGxlPy50cmltKCkgfHwgJycsIHNlbGVjdGVkOiBmYWxzZSB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJ2Rpdi5hbG0tZ3JpZC1kZXNrdG9wLWdyaWQtY29udGFpbmVyJyxcbiAgICBuYW1lOiAncHJvZHVjdF9saXN0JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJncmlkQ2VsbFwiXScsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICB0ZXh0X3NlbGVjdG9yOiBcImRpdltpZF49J2Nsb3NlZENhcmQnXSBhW2lkXj0ndGl0bGUnXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbFwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltpZF49J2dyaWRFbGVtZW50J11cIixcbiAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2NhcmQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltpZF49J2Nsb3NlZENhcmQnXVwiLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdjbG9zZWRfcHJvZHVjdF9jYXJkJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbaWRePSdpbmZvJ11cIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ29wZW5fcHJvZHVjdF9jYXJkJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ09wZW4gUHJvZHVjdCBDYXJkJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtIHNwYW4uYS1idXR0b24taW5uZXInLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJzZWVCdXlpbmdPcHRpb25zV3JhcHBlclwiXSBhJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3NlZV9idXlpbmdfb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltuYW1lPVwiYXgtcXNcIl0nLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdEZWNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVjcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W3JvbGU9J3NwaW5idXR0b24nXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdJbmNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbaWRePSdleHBhbmRlZEltYWdlJ11cIixcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2xvc2VfcHJvZHVjdF9jYXJkJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDbG9zZSBQcm9kdWN0IENhcmQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFwiZGl2W2lkXj0nY2xvc2VkQ2FyZCddIGRpdltpZF49J2luZm8nXVwiKVxuICAgICAgICAgIGNvbnN0IGFzaW4gPSBhc2luRW0/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdkaXZbaWRePVwiY2xvc2VkQ2FyZFwiXSBkaXZbaWRePVwiaW5mb1wiXSBzcGFuW2NsYXNzKj1cInByaWNlQmxvY2tXaXRoTWFyZ2luUmlnaHRcIl0gc3Bhbi5hLXByaWNlID4gc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKSdcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCJkaXZbaWRePSdjbG9zZWRDYXJkJ10gYVtpZF49J3RpdGxlJ10gc3Bhbi5hLXRydW5jYXRlLWZ1bGxcIlxuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dFxuICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ2RpdltpZF49XCJjbG9zZWRDYXJkXCJdIGRpdltpZF49XCJpbmZvXCJdICN1ZG1EZWxpdmVyeU1lc3NhZ2VDb21wb25lbnQnXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5ID0gZGVsaXZlcnlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1tcXG5dL2csICcgJylcbiAgICAgICAgICByZXR1cm4geyBuYW1lOiAnYWN0aXZlX2l0ZW1zJywgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIGRlbGl2ZXJ5IH0gfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJmZWF0dXJlZFwiXScsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICB0ZXh0X3NlbGVjdG9yOiBcImFbaWRePSd0aXRsZSddIHNwYW4uYS10cnVuY2F0ZS1mdWxsXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwiZGV0YWlsQ29udGVudFdyYXBwZXJcIl0gZGl2W2lkXj1cImRldGFpbENvbnRlbnRcIl0nLFxuICAgICAgICAgICAgbmFtZTogJ2RldGFpbGVkX2NvbnRlbnQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2Omhhcyg+IGltZyknLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYVtpZF49J3RpdGxlJ11cIixcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfdGl0bGUnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtdHJ1bmNhdGUtZnVsbCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltjbGFzcyo9J211bHRpT2ZmZXJQaWxsQ29udGFpbmVyJ10gYVwiLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICBcImRpdltkYXRhLWJ1eWluZ29wdGlvbnR5cGU9J05FVyddLCBkaXZbY2xhc3MqPSdhc2luRGV0YWlsSW5mb0NvbHVtbnMnXTpoYXMoaW5wdXRbbmFtZT0nc3VibWl0LmFkZFRvQ2FydCddXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogJ29uZV90aW1lX3B1cmNoYXNlJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnc3BhbltjbGFzcyo9XCJwcmljZUJsb2NrV2l0aE1hcmdpblJpZ2h0XCJdIHNwYW4uYS1wcmljZSA+IHNwYW46bm90KC5hLW9mZnNjcmVlbiknLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdWRtRGVsaXZlcnlNZXNzYWdlQ29tcG9uZW50JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWxpdmVyeSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cImFjdGlvbkJ1dHRvbnNSb3dcIl0sIGRpdltjbGFzcyo9XCJhc2luRGV0YWlsQWN0aW9uc1Jvd1wiXScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdidXR0b25zJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0W25hbWU9XCJzdWJtaXQuYWRkVG9DYXJ0XCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dFtpZF49XCJidXktbm93XCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2J1eV9ub3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJmZWVkYmFja0J1dHRvblNlY3Rpb25cIl0gaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVtb3ZlX2l0ZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltuYW1lPVwiYXgtcXNcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdEZWNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVjcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W3JvbGU9J3NwaW5idXR0b24nXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VycmVudCBRdWFudGl0eToge30nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nSW5jcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbmNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGxldCBhc2luRW0gPSBlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50XG4gICAgICAgICAgICAgICAgICBsZXQgYXNpbiA9IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICAgICAgaWYgKGFzaW4gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFzaW5FbSA9IGVtLnBhcmVudEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFzaW4gPSBhc2luRW0/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAnc3BhbltjbGFzcyo9XCJwcmljZUJsb2NrV2l0aE1hcmdpblJpZ2h0XCJdIHNwYW4uYS1wcmljZSA+IHNwYW46bm90KC5hLW9mZnNjcmVlbiknXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgXCJhW2lkXj0ndGl0bGUnXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsRW0gPSBlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5xdWVyeVNlbGVjdG9yKFwiYVtpZF49J3RpdGxlJ11cIilcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgZGVsaXZlcnlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJyN1ZG1EZWxpdmVyeU1lc3NhZ2VDb21wb25lbnQnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgZGVsaXZlcnkgPSBkZWxpdmVyeUVtPy5pbm5lclRleHQucmVwbGFjZSgvW1xcbl0vZywgJyAnKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ2FjdGl2ZV9pdGVtcycsIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIGRlbGl2ZXJ5IH0gfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWJ1eWluZ29wdGlvbnR5cGU9J1NOUyddLCBkaXZbY2xhc3MqPSdzbnNVcHNlbGxCbG9ja0NvbnRhaW5lciddXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3N1YnNjcmliZV9hbmRfc2F2ZScsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ3NwYW5bY2xhc3MqPVwicHJpY2VCbG9ja1dpdGhNYXJnaW5SaWdodFwiXSBzcGFuLmEtcHJpY2UgPiBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3VkbURlbGl2ZXJ5TWVzc2FnZUNvbXBvbmVudCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcnknXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJhY3Rpb25CdXR0b25zUm93XCJdJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2J1dHRvbnMnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXRbbmFtZT1cInN1Ym1pdC5hZGRUb0NhcnRcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW5bY2xhc3MqPVwic25zQnV0dG9uXCJdIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3N1YnNjcmliZV9hbmRfc2F2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cImZlZWRiYWNrQnV0dG9uU2VjdGlvblwiXSBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZW1vdmVfaXRlbScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3BhbltjbGFzcyo9XCJzdWJzY3JpcHRpb25CdXR0b25cIl0nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3NldF91cF9zdWJzY3JpcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGxldCBhc2luRW0gPSBlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50XG4gICAgICAgICAgICAgICAgICBsZXQgYXNpbiA9IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICAgICAgaWYgKGFzaW4gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcignaW5wdXRbZGF0YS1taXgtb3BlcmF0aW9ucz1cInNuc01vZGFsSGFuZGxlclwiXScpXG4gICAgICAgICAgICAgICAgICAgIGFzaW4gPSBhc2luRW0/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAnc3BhbltjbGFzcyo9XCJwcmljZUJsb2NrV2l0aE1hcmdpblJpZ2h0XCJdIHNwYW4uYS1wcmljZSA+IHNwYW46bm90KC5hLW9mZnNjcmVlbiknXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgXCJhW2lkXj0ndGl0bGUnXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsRW0gPSBlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5xdWVyeVNlbGVjdG9yKFwiYVtpZF49J3RpdGxlJ11cIilcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgZGVsaXZlcnlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJyN1ZG1EZWxpdmVyeU1lc3NhZ2VDb21wb25lbnQnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgZGVsaXZlcnkgPSBkZWxpdmVyeUVtPy5pbm5lclRleHQucmVwbGFjZSgvW1xcbl0vZywgJyAnKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ2FjdGl2ZV9pdGVtcycsIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIGRlbGl2ZXJ5IH0gfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2lkXj0nZGV0YWlsLXZpZXctc2ltaWxhci1pdGVtcyddXCIsXG4gICAgICAgICAgICBuYW1lOiAnc2ltaWxhcl9pdGVtcycsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaS5hLWNhcm91c2VsLWNhcmQnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6IFwiYVtpZF49J3RpdGxlJ10gc3Bhbi5hLXRydW5jYXRlLWZ1bGxcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLWltYWdlLWNvbnRhaW5lcjpoYXMoPiBpbWcpJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJhW2lkXj0ndGl0bGUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3RpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtdHJ1bmNhdGUtZnVsbCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdzcGFuW2NsYXNzKj1cInByaWNlQmxvY2tXaXRoTWFyZ2luUmlnaHRcIl0gc3Bhbi5hLXByaWNlID4gc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2UnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN1ZG1EZWxpdmVyeU1lc3NhZ2VDb21wb25lbnQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJ5J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ2lucHV0W25hbWU9XCJzdWJtaXQuYWRkVG9DYXJ0XCJdLCBpbnB1dFtuYW1lXj1cImF0ZmNTaGltXCJdLCBidXR0b25bYXJpYS1sYWJlbD1cIkFkZCB0byBDYXJ0LiBDbGljayB0byBjaGFuZ2UgcXVhbnRpdHlcIl0nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJzZWVCdXlpbmdPcHRpb25zV3JhcHBlclwiXSBhJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3NlZV9idXlpbmdfb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W25hbWU9XCJheC1xc1wiXScsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0RlY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbcm9sZT0nc3BpbmJ1dHRvbiddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VycmVudCBRdWFudGl0eToge30nXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nSW5jcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbmNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5xcy13aWRnZXQtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsPSdSZW1vdmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVjcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucXMtd2lkZ2V0LWRyb3Bkb3duLWZsZXgtd3JhcHBlciBidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2LnFzLXdpZGdldC1kcm9wZG93bi13cmFwcGVyIHNwYW5bZGF0YS1hY3Rpb249XCJxcy13aWRnZXQtZHJvcGRvd24tZGVjbFwiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZV9yb290OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0Ryb3AgRG93biBPcHRpb24ge30nXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdltpZF49XCJxcy13aWRnZXQtcXVhbnRpdHktY29udGFpbmVyLWF0ZmNcIl0gc3BhbltkYXRhLWFjdGlvbj1cInFzLXdpZGdldC1xdWFudGl0eS1jaGFuZ2VsaW5rLWRlY2xcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2Vfcm9vdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdltpZF49XCJxcy13aWRnZXQtc3VtbWFyeS1jb250YWluZXItYXRmY1wiXSBzcGFuW2lkXj1cInFzLXdpZGdldC1zdW1tYXJ5LWF0Yy1hdGZjXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlX3Jvb3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbYXJpYS1sYWJlbD0nQWRkJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbmNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRUaXRsZUVtID0gZW1cbiAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJ2RpdltpZF49XCJmZWF0dXJlZFwiXScpXG4gICAgICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAnZGl2W2lkXj1cImRldGFpbENvbnRlbnRXcmFwcGVyXCJdIGFbaWRePVwidGl0bGVcIl0gc3Bhbi5hLXRydW5jYXRlLWZ1bGwnXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFRpdGxlID0gcGFyZW50VGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgID8udG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvW15cXHddKy9nLCAnXycpXG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdkaXZbY2xhc3MqPVwiZGVsaWdodEZhY2VvdXRcIl0nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbiA9IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuW2NsYXNzKj1cInByaWNlQmxvY2tXaXRoTWFyZ2luUmlnaHRcIl0gc3Bhbi5hLXByaWNlID4gc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKSdcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFwiYVtpZF49J3RpdGxlJ10gc3Bhbi5hLXRydW5jYXRlLWZ1bGxcIilcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXCJhW2lkXj0ndGl0bGUnXVwiKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeUVtID0gZW0ucXVlcnlTZWxlY3RvcignI3VkbURlbGl2ZXJ5TWVzc2FnZUNvbXBvbmVudCcpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeSA9IGRlbGl2ZXJ5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bXFxuXS9nLCAnICcpXG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBwYXJlbnRUaXRsZSArICcuc2ltaWxhcl9pdGVtcycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIGRlbGl2ZXJ5IH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IHJlY2lwZXMgPSBbXG4gIHtcbiAgICBtYXRjaDogJy8nLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbbmF2XVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL3MnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI3MtcmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0b3BSZWZpbmVtZW50c1xcXFwvMCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3RvcF9yZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1JlY2VudGx5IHVzZWQgZmlsdGVycycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSAnICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJ2Rpdi5hLXNlY3Rpb24uYS1zcGFjaW5nLW5vbmU6bm90KDpoYXMoI24tdGl0bGUpKTpoYXMoc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0KTpoYXModWwgc3Bhbi5hLWRlY2xhcmF0aXZlID4gc3BhbiA+IGxpKTpub3QoI3Jldmlld3NSZWZpbmVtZW50cyk6bm90KCNkZXBhcnRtZW50cyk6bm90KCNwcmljZVJlZmluZW1lbnRzKTpub3QoI2ZpbHRlcnMpJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogcmVmaW5lbWVudF9vcHRpb25cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2RlcGFydG1lbnRzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGVwYXJ0bWVudHMnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnRGVwYXJ0bWVudCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBhJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkICYmIHNlbGVjdGVkID09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLmRlcGFydG1lbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cy5kZXBhcnRtZW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNyZXZpZXdzUmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdyZXZpZXdzX3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1c3RvbWVyIFJldmlld3MnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYS5zLW5hdmlnYXRpb24tY2xlYXItbGluaycsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2xlYXJfc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJsaSBhW2FyaWEtY3VycmVudD0ndHJ1ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0X2Zvcm1hdDogJ0NsZWFyIE9wdGlvbiB7fScsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnICcpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnJldmlld3MnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJsaSBhW2FyaWEtY3VycmVudD0nZmFsc2UnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcgJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucmV2aWV3cycsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjcHJpY2VSZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgLy8gMiBjYXNlczogc2VsZWN0aW9uIC8gc2xpZGVyXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3BfMzYtdGl0bGUsIGRpdi5zZi1yZWZpbmVtZW50LWhlYWRpbmcgc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2VfaGVhZGluZydcbiAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgIC8vIGNhc2UgMTogc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdlthcmlhLWxhYmVsbGVkYnk9J3BfMzYtdGl0bGUnXSA+IGFcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGVhcl9wcmljZV9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF8zNi10aXRsZSddIGFbYXJpYS1jdXJyZW50PSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHRfZm9ybWF0OiAnQ2xlYXIgT3B0aW9uIHt9JyxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5wcmljZScsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF8zNi10aXRsZSddIGFbYXJpYS1jdXJyZW50PSdmYWxzZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgIC8vIGNhc2UgMjogc2xpZGVyXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJhbmdlLXNsaWRlci1yb3c6bnRoLW9mLXR5cGUoMSknLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5wcmljZScsIGRhdGE6IHsgdGl0bGU6ICdwcmljZV9yYW5nZScsIHJhbmdlIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1yYW5nZS1zbGlkZXItcm93Om50aC1vZi10eXBlKDIpIGRpdi5zLWxvd2VyLWJvdW5kIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX21pbl92YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0X2pzOiAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnN0IHRleHQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImFyaWEtdmFsdWV0ZXh0XCIpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2codGV4dClcbiAgICAgICAgICAgICAgICAgICAgLy8gICBpZiAodGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBrZWVwX2F0dHI6IFsnbWluJywgJ21heCcsICdzdGVwJ10sXG4gICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlX2F0dHI6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGVwX3ZhbHVlczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRW0gPSBlbS5jbG9zZXN0KCdmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtRW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IGZvcm1FbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLXByb3BzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IEpTT04ucGFyc2UocHJvcCkuc3RlcExhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGVwc1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfdmFsdWU6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBOdW1iZXIucGFyc2VJbnQoZW0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1FbSA9IGVtLmNsb3Nlc3QoJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IGZvcm1FbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLXByb3BzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBKU09OLnBhcnNlKHByb3ApLnN0ZXBMYWJlbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGVwc1t2YWx1ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2YtcmFuZ2Utc2xpZGVyLXJvdzpudGgtb2YtdHlwZSgyKSBkaXYucy11cHBlci1ib3VuZCBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZV9tYXhfdmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGV4dF9qczogKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zdCB0ZXh0ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVldGV4dFwiKVxuICAgICAgICAgICAgICAgICAgICAvLyAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGtlZXBfYXR0cjogWydtaW4nLCAnbWF4JywgJ3N0ZXAnXSxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVfYXR0cjoge1xuICAgICAgICAgICAgICAgICAgICAgIHN0ZXBfdmFsdWVzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1FbSA9IGVtLmNsb3Nlc3QoJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudF92YWx1ZTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IE51bWJlci5wYXJzZUludChlbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtRW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IEpTT04ucGFyc2UocHJvcCkuc3RlcExhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzW3ZhbHVlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1zdWJtaXQtcmFuZ2UtYnV0dG9uIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3N1Ym1pdF9wcmljZV9yYW5nZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0dvJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1yZXNldC1yYW5nZS1saW5rIGEnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVzZXRfcHJpY2Vfc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNwX25fZGVhbF90eXBlLXRpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWFsc19kaXNjb3VudHNfaGVhZGluZydcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdlthcmlhLWxhYmVsbGVkYnk9J3Bfbl9kZWFsX3R5cGUtdGl0bGUnXSA+IGFcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGVhcl9kZWFsc19kaXNjb3VudF9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF9uX2RlYWxfdHlwZS10aXRsZSddIGFbYXJpYS1jdXJyZW50PSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHRfZm9ybWF0OiAnQ2xlYXIgT3B0aW9uIHt9JyxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5wcmljZScsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF9uX2RlYWxfdHlwZS10aXRsZSddIGFbYXJpYS1jdXJyZW50PSdmYWxzZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtbWFpbi1zbG90LnMtcmVzdWx0LWxpc3Qucy1zZWFyY2gtcmVzdWx0cycsXG4gICAgICAgICAgICBuYW1lOiAnc2VhcmNoX3Jlc3VsdHMnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LkFkSG9sZGVyJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnYWRzJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltkYXRhLWFzaW5dJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSB0aXRsZUVtPy5nZXRBdHRyaWJ1dGUoJ2FsdCcpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHQudHJpbSgpIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW4gPSBhc2luRW0/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmdldEF0dHJpYnV0ZSgnYWx0JylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXCJhW2RhdGEtdHlwZT0ncHJvZHVjdFRpdGxlJ11cIilcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAnYWRzJywgZGF0YTogeyB0aXRsZSwgYXNpbiwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0X3NwbGl0X21hcmtlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbnNlcnRfc3BsaXRfbWFya2VyX2V2ZXJ5OiA0LFxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2RhdGEtY29tcG9uZW50LXR5cGU9XCJzLXNlYXJjaC1yZXN1bHRcIl0nLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAnc3Bhbi5hLWNvbG9yLWJhc2UuYS10ZXh0LW5vcm1hbCwgaDIuYS1jb2xvci1iYXNlLmEtdGV4dC1ub3JtYWwgc3BhbicsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdzZWFyY2gtcmVzdWx0JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdltkYXRhLWN5PSd0aXRsZS1yZWNpcGUnXSBhLmEtbGluay1ub3JtYWwucy1saW5rLXN0eWxlLmEtdGV4dC1ub3JtYWxcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1uYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9uYW1lJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1wcm9kdWN0LWltYWdlLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1jb2xvci1zd2F0Y2gtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2F2YWlsYWJsZV9jb2xvcnMnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtY29sb3Itc3dhdGNoLXBhZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2EnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYUNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3NhLWMtdHlwZT0nbGluayddIGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtdmFyaWF0aW9ucy1vcHRpb25zLWVsZXZhdGVkJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ29wdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja19zZWxlY3RvcjogJ2EnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jeT0ncmV2aWV3cy1ibG9jayddXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1yZXZpZXcnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLWljb24tYWx0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXJhdGluZydcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5zLXVuZGVybGluZS10ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICd7fSByZXZpZXdzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1yYXRpbmctY291bnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfcmF0aW5nX2NvdW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J3ByaWNlLXJlY2lwZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1wcmljZScsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhLmEtbGluay1ub3JtYWwgPiBzcGFuLmEtcHJpY2UgPiBzcGFuLmEtb2Zmc2NyZWVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jeT0nZGVsaXZlcnktcmVjaXBlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1kZWxpdmVyeSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdhZGQtdG8tY2FydCddIGJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jc2EtYy1jb250ZW50LWlkPSdzLXNlYXJjaC1zZWUtZGV0YWlscy1idXR0b24nXSBhXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZWVfb3B0aW9ucydcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W25hbWU9XCJheC1xc1wiXScsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0RlY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbcm9sZT0nc3BpbmJ1dHRvbiddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VycmVudCBRdWFudGl0eToge30nXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nSW5jcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbmNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2W2RhdGEtY3k9J3ByaWNlLXJlY2lwZSddIGEuYS1saW5rLW5vcm1hbCA+IHNwYW4uYS1wcmljZSA+IHNwYW4uYS1vZmZzY3JlZW5cIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAnc3Bhbi5hLWNvbG9yLWJhc2UuYS10ZXh0LW5vcm1hbCwgaDIuYS1jb2xvci1iYXNlLmEtdGV4dC1ub3JtYWwgc3BhbidcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2W2RhdGEtY3k9J3RpdGxlLXJlY2lwZSddIGEuYS1saW5rLW5vcm1hbC5zLWxpbmstc3R5bGUuYS10ZXh0LW5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKFwiZGl2W2RhdGEtY3k9J2RlbGl2ZXJ5LXJlY2lwZSddXCIpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeSA9IGRlbGl2ZXJ5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bXFxuXS9nLCAnICcpXG4gICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAnc2VhcmNoX3Jlc3VsdHMnLCBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsLCBkZWxpdmVyeSB9IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5zLXBhZ2luYXRpb24tc3RyaXAnLFxuICAgICAgICAgICAgbmFtZTogJ3BhZ2luYXRpb24nLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLnMtcGFnaW5hdGlvbi1pdGVtJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1wb3BvdmVyLXdyYXBwZXInLFxuICAgICAgICAgICAgbmFtZTogJ3BvcG92ZXInLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaGVhZGVyLmEtcG9wb3Zlci1oZWFkZXIgYnV0dG9uJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Nsb3NlJyxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0Nsb3NlJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1wb3BvdmVyLWlubmVyIGRpdi5wdWlzLWF0Yy1zaXplLXZhcmlhdGlvbicsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1yb3c6bnRoLW9mLXR5cGUoMSknLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwic3BhbltkYXRhLWNvbXBvbmVudC10eXBlPSdzLXByb2R1Y3QtaW1hZ2UnXSBhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tdGl0bGUgYScsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF90aXRsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1zaXplLXZhcmlhdGlvbi1wcm9kdWN0LXNwZWMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3Rfc3BlY2lmaWNhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrX3NlbGVjdG9yOiAnYSdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcm93Om50aC1vZi10eXBlKDIpJyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tcHJvZHVjdC1vcHRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLWRyb3Bkb3duLXByb21wdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tcHJpY2UgYS5hLXRleHQtbm9ybWFsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6IFwic3BhblthcmlhLWhpZGRlbj0ndHJ1ZSddXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tZGVsaXZlcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcnknXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXJvdzpudGgtb2YtdHlwZSgzKScsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4ucy1uby1qcy1oaWRlIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjYW5jZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0NhbmNlbCdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtYXRjYi1hZGQtY29udGFpbmVyIGJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJyNwcm9kdWN0VGl0bGUnLFxuICAgIG1hdGNoX3RleHQ6ICcnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIG5hdixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNjZW50ZXJDb2wnLFxuICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LWNhcmQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RpdGxlJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBrZWVwX2F0dHI6IFsnaWQnXSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZTogZW0/LmlubmVyVGV4dCB8fCAnJyB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYXZlcmFnZUN1c3RvbWVyUmV2aWV3cycsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdyZXZpZXcnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLWljb24tYWx0JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2FjckN1c3RvbWVyUmV2aWV3VGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAnI2FwZXhfZGVza3RvcCA+IGRpdltkYXRhLWNzYS1jLXNsb3QtaWQ9XCJhcGV4X2RwX2NlbnRlcl9jb2x1bW5cIl0nICtcbiAgICAgICAgICAgICAgICAgICcgPiBkaXZbY2xhc3M9XCJvZmZlcnNDb25zaXN0ZW5jeUVuYWJsZWRcIl0gPiBkaXY6bm90KFtzdHlsZT1cImRpc3BsYXk6bm9uZTtcIl0pOm5vdChbc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiXSkgJyArXG4gICAgICAgICAgICAgICAgICAnI2NvcmVQcmljZURpc3BsYXlfZGVza3RvcF9mZWF0dXJlX2RpdjpoYXMoI3Nucy1iYXNlLXByaWNlKSAjc25zLWJhc2UtcHJpY2Ugc3Bhbi5hLXByaWNlLmFvay1hbGlnbi1jZW50ZXIucmVpbnZlbnRQcmljZVByaWNlVG9QYXlNYXJnaW4ucHJpY2VUb1BheSwgJyArXG4gICAgICAgICAgICAgICAgICAnI2FwZXhfZGVza3RvcCA+IGRpdltkYXRhLWNzYS1jLXNsb3QtaWQ9XCJhcGV4X2RwX2NlbnRlcl9jb2x1bW5cIl0nICtcbiAgICAgICAgICAgICAgICAgICcgPiBkaXZbY2xhc3M9XCJvZmZlcnNDb25zaXN0ZW5jeUVuYWJsZWRcIl0gPiBkaXY6bm90KFtzdHlsZT1cImRpc3BsYXk6bm9uZTtcIl0pOm5vdChbc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiXSkgJyArXG4gICAgICAgICAgICAgICAgICAnI2NvcmVQcmljZURpc3BsYXlfZGVza3RvcF9mZWF0dXJlX2Rpdjpub3QoOmhhcygjc25zLWJhc2UtcHJpY2UpKSBzcGFuLmEtcHJpY2UuYW9rLWFsaWduLWNlbnRlci5yZWludmVudFByaWNlUHJpY2VUb1BheU1hcmdpbi5wcmljZVRvUGF5LCAnICtcbiAgICAgICAgICAgICAgICAgICcjYXBleF9kZXNrdG9wID4gZGl2W2RhdGEtY3NhLWMtc2xvdC1pZD1cImFwZXhfZHBfY2VudGVyX2NvbHVtblwiXSA+IGRpdltkYXRhLWNzYS1jLWNvbnRlbnQtaWQ9XCJhcGV4X3dpdGhfcmlvX2N4XCJdICcgK1xuICAgICAgICAgICAgICAgICAgJyNjb3JlUHJpY2VEaXNwbGF5X2Rlc2t0b3BfZmVhdHVyZV9kaXYgc3Bhbi5hLXByaWNlLmFvay1hbGlnbi1jZW50ZXIucmVpbnZlbnRQcmljZVByaWNlVG9QYXlNYXJnaW4ucHJpY2VUb1BheScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcmljZToge30nLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1wcmljZScsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgcHJpY2U6IGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnJykgfHwgJycgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcnKSB8fCAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3R3aXN0ZXInLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1vcHRpb25zJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9vcHRpb25zJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXNlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpID4gbGFiZWwuYS1mb3JtLWxhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCkgbGFiZWwuYS1mb3JtLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgID8uaW5uZXJIVE1MLnJlcGxhY2UoL1s6XFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKSBzcGFuLnNlbGVjdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICApPy5pbm5lckhUTUxcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBlbS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKT8ucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uZ2V0QXR0cmlidXRlKCdzZWxlY3RlZCcpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG9wdGlvbi5pbm5lckhUTUwudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdwcm9kdWN0X29wdGlvbnMnLCBkYXRhOiB7IGxhYmVsLCB2YWx1ZTogdmFsdWUudHJpbSgpIH0gfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xhYmVsLmEtZm9ybS1sYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICd1bCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYnV0dG9uX2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkgYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWdDaGlsZCAmJiBpbWdDaGlsZC5hbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gaW1nQ2hpbGQuYWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0NoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1nQ2hpbGQgJiYgaW1nQ2hpbGQuYWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBpbWdDaGlsZC5hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHQudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAvLyBoYW5kbGUgbmV3IHR3aXN0ZXJzXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0d2lzdGVyLXBsdXMtaW5saW5lLXR3aXN0ZXInLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1vcHRpb25zJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9vcHRpb25zJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5pbmxpbmUtdHdpc3Rlci1yb3cnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdkaXYuaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlLWV4cGFuZGVkIHNwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYuaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlLWV4cGFuZGVkIHNwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA/LmlubmVySFRNTC5yZXBsYWNlKC9bOlxcbl0vZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYuaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlLWV4cGFuZGVkIHNwYW4uaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlJ1xuICAgICAgICAgICAgICAgICAgICAgICk/LmlubmVySFRNTFxuICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpPy5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gb3B0aW9uLmlubmVySFRNTC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsIGRhdGE6IHsgbGFiZWwsIHZhbHVlOiB2YWx1ZS50cmltKCkgfSB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlLWV4cGFuZGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2J1dHRvbl9saXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpIHNwYW46bm90KC5hb2staGlkZGVuKSBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RW0gPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHRFbS5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gdGV4dEVtLmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nQ2hpbGQgPSB0ZXh0RW0ucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZ0NoaWxkICYmIGltZ0NoaWxkLmFsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBpbWdDaGlsZC5hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nQ2hpbGQgPSB0ZXh0RW0ucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZ0NoaWxkICYmIGltZ0NoaWxkLmFsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gaW1nQ2hpbGQuYWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuaW5saW5lLXR3aXN0ZXItc2luZ2xldG9uLWhlYWRlcicsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5pbm5lckhUTUwucmVwbGFjZSgvWzpcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdzcGFuLmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZSdcbiAgICAgICAgICAgICAgICAgICAgICApPy5pbm5lckhUTUxcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncHJvZHVjdF9vcHRpb25zJywgZGF0YTogeyBsYWJlbCwgdmFsdWU6IHZhbHVlLnRyaW0oKSB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJyNwcm9kdWN0RmFjdHNEZXNrdG9wRXhwYW5kZXIgdWwuYS11bm9yZGVyZWQtbGlzdCwgI2ZlYXR1cmVidWxsZXRzX2ZlYXR1cmVfZGl2IHVsLmEtdW5vcmRlcmVkLWxpc3QnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdhYm91dF90aGlzX2l0ZW0nLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQWJvdXQgdGhpcyBpdGVtOiAnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGknLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICBidWxsZXRfbGlzdDogZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcgJykgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjYnV5Ym94OmhhcyhkaXYuYS10YWItY29udGFpbmVyKTpub3QoOmhhcygjcGFydGlhbFN0YXRlX2J1eWJveF9kZXNrdG9wKSknLFxuICAgICAgICAgICAgbmFtZTogJ2J1eWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdGFiX2hlYWRpbmdfZGVza3RvcF9idXlib3hfZ3JvdXBfMSBhJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcl90YWInLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdGFiX2hlYWRpbmdfZGVza3RvcF9idXlib3hfZ3JvdXBfMiBhJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncGlja191cF90YWInLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdGFiX2Rlc2t0b3BfYnV5Ym94X2dyb3VwXzEnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdkZWxpdmVyeScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdEZWxpdmVyeScsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtidXlfYm94X3dpdGhfYWNjb3JkaW9uLCBidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX2RlbGl2ZXJ5XVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdGFiX2Rlc2t0b3BfYnV5Ym94X2dyb3VwXzInLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwaWNrX3VwJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1BpY2sgVXAnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9waWNrX3VwXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCNBU0lOJylcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGFzaW46IGFzaW5FbT8udmFsdWUgfHwgJycgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgJyNidXlib3g6bm90KDpoYXMoZGl2LmEtdGFiLWNvbnRhaW5lcikpOm5vdCg6aGFzKCNwYXJ0aWFsU3RhdGVfYnV5Ym94X2Rlc2t0b3ApKScsXG4gICAgICAgICAgICBuYW1lOiAnYnV5Ym94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbYnV5X2JveF93aXRoX2FjY29yZGlvbiwgYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9kZWxpdmVyeV0sXG4gICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I0FTSU4nKVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgYXNpbjogYXNpbkVtPy52YWx1ZSB8fCAnJyB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI3BhcnRpYWxTdGF0ZV9idXlib3hfZGVza3RvcCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjcGFydGlhbFN0YXRlQnV5Ym94IGRpdi5hLXNlY3Rpb24uYS10ZXh0LWNlbnRlci5hLXNwYWNpbmctc21hbGwnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I0FTSU4nKVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgYXNpbjogYXNpbkVtPy52YWx1ZSB8fCAnJyB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI2F0dGFjaC13YXJyYW50eS1wYW5lICNhdHRhY2gtd2FycmFudHktZGlzcGxheScsXG4gICAgICAgICAgICBuYW1lOiAnd2FycmFudHktYm94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hdHRhY2gtd2FycmFudHktYm94JyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnI2F0dGFjaC13YXJyYW50eS1jYXJkLWRpc3BsYXktdGl0bGUnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaS5hLWljb24tY2hlY2tib3gnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhdHRhY2gtd2FycmFudHktY2FyZC1kaXNwbGF5LXRpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2F0dGFjaC13YXJyYW50eS1jYXJkLXByaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXNlY3Rpb24uYXR0YWNoLXdhcnJhbnR5LWJ1dHRvbi1yb3cnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2FyaWEtbGFiZWxsZWRieT0nYXR0YWNoU2lBZGRDb3ZlcmFnZS1hbm5vdW5jZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfcHJvdGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQWRkIFByb3RlY3Rpb24nXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsbGVkYnk9J2F0dGFjaFNpTm9Db3ZlcmFnZS1hbm5vdW5jZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdub19wcm90ZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdObyBUaGFua3MnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvY2FydC9hZGQtdG8tY2FydCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIG1hdGNoX3dpdGhfcmVmOiB0cnVlLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctYXRjLWJ1eS1ib3gnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LXN1YnRvdGFsJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1zdWJ0b3RhbC1pdGVtLWNvdW50JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInNwYW5bYXJpYS1oaWRkZW49J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3NjLWJ1eS1ib3gtcHRjLWJ1dHRvbiBzcGFuLmEtYnV0dG9uLWlubmVyIGlucHV0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnZGl2LnNjLXdpdGhvdXQtbXVsdGljYXJ0JyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2NoZWNrX291dCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LWd0YyBhJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2dvX3RvX2NhcnQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9jYXJ0L3NtYXJ0LXdhZ29uJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIG5hdixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1hdGMtYnV5LWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctc3VidG90YWwnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LXN1YnRvdGFsLWl0ZW0tY291bnQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwic3BhblthcmlhLWhpZGRlbj0ndHJ1ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc2MtYnV5LWJveC1wdGMtYnV0dG9uIHNwYW4uYS1idXR0b24taW5uZXIgaW5wdXQnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdkaXYuc2Mtd2l0aG91dC1tdWx0aWNhcnQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2hlY2tfb3V0J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctZ3RjIGEnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZ29fdG9fY2FydCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2dwL2NhcnQvdmlldy5odG1sJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogY2FydFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2NhcnQnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBjYXJ0XG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvY2FydC9sb2NhbG1hcmtldCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IGZyZXNoX2NhcnRcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9hcC9zaWduaW4nLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgdGVybWluYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gISFhcmd1bWVudHNbMF1cbiAgICB9LFxuICAgIHRlcm1pbmF0ZV9jYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXVxuICAgIH0sXG4gICAgc2VsZWN0b3I6ICdodG1sJ1xuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvZ3AvYnV5L3NwYy9oYW5kbGVycy9kaXNwbGF5Lmh0bWwnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgdGVybWluYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gISFhcmd1bWVudHNbMF1cbiAgICB9LFxuICAgIHRlcm1pbmF0ZV9jYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXVxuICAgIH0sXG4gICAgc2VsZWN0b3I6ICdodG1sJ1xuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvZ3AvYnV5YWdhaW4nLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBidXlfYWdhaW5cbiAgICAgIH1cbiAgICBdXG4gIH1cbl1cbiIsImV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzRWxlbWVudChlbGVtZW50OiBhbnksIHJlY2lwZTogYW55LCBwYXJlbnROYW1lID0gJycsIG50aENoaWxkID0gMCkge1xuICAvLyBjb25zb2xlLmxvZyhcInByb2Nlc3NpbmcgZWxlbWVudDogXCIsIGVsZW1lbnQsIHJlY2lwZSk7XG4gIC8vIENyZWF0ZSBhIG5ldyBlbGVtZW50IHVzaW5nIHRoZSBET00gQVBJXG4gIGxldCB0YWdOYW1lID0gcmVjaXBlLnRhZ19uYW1lIHx8IGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpXG4gIC8vIEhhbmRsZSB1bmRlcnNjb3JlZCB0YWdzXG4gIGlmICh0YWdOYW1lLmVuZHNXaXRoKCdfJykpIHtcbiAgICB0YWdOYW1lID0gdGFnTmFtZS5zbGljZSgwLCAtMSlcbiAgfVxuICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKVxuXG4gIC8vIEV4dHJhY3QgdGV4dCBjb250ZW50IGJhc2VkIG9uIHRoZSByZWNpcGVcbiAgbGV0IGVsZW1lbnRUZXh0ID0gJydcbiAgaWYgKHJlY2lwZS50ZXh0X3NlbGVjdG9yKSB7XG4gICAgY29uc3QgdGV4dEVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IocmVjaXBlLnRleHRfc2VsZWN0b3IpXG4gICAgaWYgKHRleHRFbGVtZW50KSB7XG4gICAgICBlbGVtZW50VGV4dCA9IHRleHRFbGVtZW50LmlubmVyVGV4dCB8fCB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCB8fCAnJ1xuICAgIH1cbiAgfSBlbHNlIGlmIChyZWNpcGUudGV4dF9qcykge1xuICAgIGVsZW1lbnRUZXh0ID0gcmVjaXBlLnRleHRfanMoZWxlbWVudClcbiAgICBpZiAoZWxlbWVudFRleHQgPT09ICcnIHx8IGVsZW1lbnRUZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd0ZXh0IGpzIGRvZXMgbm90IGRldGVjdCB0ZXh0IGZvciBlbGVtZW50ICcsIGVsZW1lbnQpXG4gICAgfVxuICB9IGVsc2UgaWYgKHJlY2lwZS5hZGRfdGV4dCkge1xuICAgIGVsZW1lbnRUZXh0ID0gZWxlbWVudC5pbm5lclRleHQgfHwgZWxlbWVudC50ZXh0Q29udGVudCB8fCAnJ1xuICB9XG4gIGVsZW1lbnRUZXh0ID0gZWxlbWVudFRleHQucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKVxuICBpZiAocmVjaXBlLnRleHRfZm9ybWF0KSB7XG4gICAgZWxlbWVudFRleHQgPSByZWNpcGUudGV4dF9mb3JtYXQucmVwbGFjZSgne30nLCBlbGVtZW50VGV4dClcbiAgfSBlbHNlIGlmIChyZWNpcGUudGV4dF9mb3JtYXQpIHtcbiAgICBlbGVtZW50VGV4dCA9IHJlY2lwZS50ZXh0X2Zvcm1hdFxuICB9XG5cbiAgaWYgKGVsZW1lbnRUZXh0ICYmIHJlY2lwZS5hZGRfdGV4dCkge1xuICAgIG5ld0VsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50VGV4dFxuICB9XG5cbiAgLy8gQnVpbGQgdGhlIG5vZGUgYXR0cmlidXRlc1xuICBsZXQgZWxlbWVudE5hbWUgPSAnJ1xuICBpZiAocmVjaXBlLm5hbWUpIHtcbiAgICBpZiAocmVjaXBlLm5hbWUgPT09ICdmcm9tX3RleHQnKSB7XG4gICAgICBpZiAoIWVsZW1lbnRUZXh0KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdlbGVtZW50VGV4dCBpcyBlbXB0eScsIHJlY2lwZSwgZWxlbWVudClcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgIH1cbiAgICAgIGVsZW1lbnROYW1lID0gcGFyZW50TmFtZSA/IHBhcmVudE5hbWUgKyAnLicgOiAnJ1xuICAgICAgaWYgKCFlbGVtZW50VGV4dCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVsZW1lbnQgdGV4dCBub3QgZm91bmRcIik7XG4gICAgICAgIGVsZW1lbnROYW1lID0gJydcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnROYW1lICs9IGVsZW1lbnRUZXh0LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15cXHddKy9nLCAnXycpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyZWNpcGUubmFtZSA9PT0gJ2Zyb21fbnRoX2NoaWxkJykge1xuICAgICAgZWxlbWVudE5hbWUgPSBwYXJlbnROYW1lID8gcGFyZW50TmFtZSArICcuJyA6ICcnXG4gICAgICBlbGVtZW50TmFtZSArPSBudGhDaGlsZC50b1N0cmluZygpXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnROYW1lID0gcGFyZW50TmFtZSA/IHBhcmVudE5hbWUgKyAnLicgOiAnJ1xuICAgICAgZWxlbWVudE5hbWUgKz0gcmVjaXBlLm5hbWVcbiAgICB9XG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBlbGVtZW50TmFtZSlcbiAgICBwYXJlbnROYW1lID0gZWxlbWVudE5hbWVcbiAgfVxuXG4gIGlmIChyZWNpcGUuZ2VuZXJhdGVfbWV0YWRhdGEpIHtcbiAgICBjb25zdCBtZXRhb2JqID0gcmVjaXBlLmdlbmVyYXRlX21ldGFkYXRhKGVsZW1lbnQpXG4gICAgY29uc3QgbWV0YWRhdGEgPSBKU09OLnN0cmluZ2lmeShtZXRhb2JqLmRhdGEpXG4gICAgY29uc3QgbWV0YW5hbWUgPSBtZXRhb2JqLm5hbWVcblxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJywgbWV0YW5hbWUpXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnLCBtZXRhZGF0YSlcbiAgICAvLyBjb25zb2xlLmxvZygnbWV0YWRhdGEgZ2VuZXJhdGVkOiAnLCBtZXRhZGF0YSwgJyB3aXRoIG5hbWU6ICcsIG1ldGFuYW1lKVxuICB9XG5cbiAgLy8gSGFuZGxlIGNsaWNrYWJsZXMgYW5kIGlucHV0c1xuICBpZiAocmVjaXBlLmNsaWNrYWJsZSkge1xuICAgIGlmICghcmVjaXBlLm5hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2xpY2thYmxlIGVsZW1lbnQgbXVzdCBoYXZlIGEgbmFtZScpXG4gICAgfVxuICAgIC8vIGhhbmRsZSBjbGlja19zZWxlY3RvclxuICAgIGxldCBjbGlja19lbGVtZW50OiBFbGVtZW50IHwgbnVsbFxuICAgIGlmIChyZWNpcGUuY2xpY2tfc2VsZWN0b3IpIHtcbiAgICAgIGNsaWNrX2VsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IocmVjaXBlLmNsaWNrX3NlbGVjdG9yKVxuICAgIH0gZWxzZSB7XG4gICAgICBjbGlja19lbGVtZW50ID0gZWxlbWVudFxuICAgIH1cbiAgICBpZiAoY2xpY2tfZWxlbWVudCkge1xuICAgICAgY2xpY2tfZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2thYmxlLWlkJywgZWxlbWVudE5hbWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjbGljay1lbGVtZW50IG5vdCBmb3VuZCcsIGVsZW1lbnQsIHJlY2lwZSlcbiAgICB9XG4gICAgaWYgKCF3aW5kb3cuY2xpY2thYmxlX3JlY2lwZXMpIHtcbiAgICAgIHdpbmRvdy5jbGlja2FibGVfcmVjaXBlcyA9IHt9XG4gICAgfVxuICAgIHdpbmRvdy5jbGlja2FibGVfcmVjaXBlc1tlbGVtZW50TmFtZV0gPSByZWNpcGVcbiAgfVxuICBpZiAodGFnTmFtZSA9PT0gJ2lucHV0Jykge1xuICAgIGNvbnN0IGlucHV0VHlwZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0eXBlJylcbiAgICBpZiAoWyd0ZXh0JywgJ251bWJlciddLmluY2x1ZGVzKGlucHV0VHlwZSkpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGVsZW1lbnQudmFsdWUpXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1pbnB1dC1pZCcsIGVsZW1lbnROYW1lKVxuICAgIH0gZWxzZSBpZiAoaW5wdXRUeXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsIGVsZW1lbnQuY2hlY2tlZC50b1N0cmluZygpKVxuICAgIH0gZWxzZSBpZiAoaW5wdXRUeXBlID09PSAncmFkaW8nKSB7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsIGVsZW1lbnQuY2hlY2tlZC50b1N0cmluZygpKVxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2thYmxlLWlkJywgZWxlbWVudE5hbWUpXG4gICAgfVxuICAgIGlmICghd2luZG93LmlucHV0X3JlY2lwZXMpIHtcbiAgICAgIHdpbmRvdy5pbnB1dF9yZWNpcGVzID0ge31cbiAgICB9XG4gICAgd2luZG93LmlucHV0X3JlY2lwZXNbZWxlbWVudE5hbWVdID0gcmVjaXBlXG4gIH1cbiAgLy8gKipIYW5kbGUgc2VsZWN0IGVsZW1lbnRzKipcbiAgaWYgKHRhZ05hbWUgPT09ICdzZWxlY3QnKSB7XG4gICAgLy8gVGFnIHRoZSBzZWxlY3QgZWxlbWVudCB3aXRoIGRhdGEtc2VsZWN0LWlkXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0LWlkJywgZWxlbWVudE5hbWUpXG5cbiAgICBjb25zdCBzZWxlY3RJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpXG5cbiAgICBjb25zdCBuYW1lSWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpXG5cbiAgICBjb25zdCB0YWcgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uYS1idXR0b24tZHJvcGRvd24gc3Bhbi5hLWJ1dHRvbi10ZXh0JylcbiAgICBjb25zdCBuZXdUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBuZXdUYWcudGV4dENvbnRlbnQgPSB0YWcudGV4dENvbnRlbnRcbiAgICBjb25zdCB0YWdOYW1lID0gZWxlbWVudE5hbWUgKyAnLm9wZW5fZHJvcF9kb3duX2xpc3QnXG4gICAgbmV3VGFnLnNldEF0dHJpYnV0ZSgnbmFtZScsIHRhZ05hbWUpXG4gICAgdGFnLnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnLCB0YWdOYW1lKSAvLyBUYWcgYWN0dWFsIERPTSBvcHRpb24gZWxlbWVudFxuXG4gICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChuZXdUYWcpXG5cbiAgICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtpZF49XCInICsgc2VsZWN0SWQgKyAnXCJdJylcbiAgICBvcHRpb25zLmZvckVhY2goYXN5bmMgKG9wdGlvbikgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uVmFsdWUgPSBvcHRpb24udGV4dENvbnRlbnQudHJpbSgpXG4gICAgICBjb25zdCBvcHRpb25OYW1lID0gZWxlbWVudE5hbWUgKyAnLicgKyBvcHRpb25WYWx1ZVxuICAgICAgY29uc3QgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICBuZXdPcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb24udGV4dENvbnRlbnRcbiAgICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgb3B0aW9uVmFsdWUpXG4gICAgICBuZXdPcHRpb24uc2V0QXR0cmlidXRlKCduYW1lJywgb3B0aW9uTmFtZSlcbiAgICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgb3B0aW9uLmdldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcpKVxuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnLCBvcHRpb25OYW1lKSAvLyBUYWcgYWN0dWFsIERPTSBvcHRpb24gZWxlbWVudFxuICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChuZXdPcHRpb24pXG4gICAgfSlcbiAgfVxuICAvLyBDb3B5IHNwZWNpZmllZCBhdHRyaWJ1dGVzXG4gIGNvbnN0IGF0dHJzVG9Db3B5ID0gW1xuICAgICdhbHQnLFxuICAgICd0aXRsZScsXG4gICAgJ3R5cGUnLFxuICAgICd2YWx1ZScsXG4gICAgJ3JvbGUnLFxuICAgICdhcmlhLWxhYmVsJyxcbiAgICAnYXJpYS1oaWRkZW4nLFxuICAgICdhcmlhLXNlbGVjdGVkJ1xuICBdXG4gIGF0dHJzVG9Db3B5LmZvckVhY2goKGF0dHIpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSlcbiAgICB9XG4gIH0pXG4gIGlmIChyZWNpcGUua2VlcF9hdHRyKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJhdHRyaWJ1dGVzIHRvIGtlZXA6IFwiLCByZWNpcGUua2VlcF9hdHRyKTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiByZWNpcGUua2VlcF9hdHRyKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKGtleSwgdmFsdWUpXG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKHJlY2lwZVsnY2xhc3MnXSkge1xuICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIHJlY2lwZVsnY2xhc3MnXSlcbiAgfVxuICBpZiAocmVjaXBlWydpZCddKSB7XG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgcmVjaXBlWydpZCddKVxuICB9XG5cbiAgLy8gT3ZlcnJpZGUgYXR0cmlidXRlcyBpZiBzcGVjaWZpZWRcbiAgaWYgKHJlY2lwZS5vdmVycmlkZV9hdHRyKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gcmVjaXBlLm92ZXJyaWRlX2F0dHIpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgcmVjaXBlLm92ZXJyaWRlX2F0dHJba2V5XShlbGVtZW50KSlcbiAgICB9XG4gIH1cblxuICAvLyBQcm9jZXNzIGNoaWxkcmVuXG4gIGlmIChyZWNpcGUuY2hpbGRyZW4gJiYgcmVjaXBlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICBmb3IgKGNvbnN0IGNoaWxkUmVjaXBlIG9mIHJlY2lwZS5jaGlsZHJlbikge1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBjaGlsZFJlY2lwZS5kaXJlY3RfY2hpbGRcbiAgICAgICAgPyBgOnNjb3BlID4gJHtjaGlsZFJlY2lwZS5zZWxlY3Rvcn1gXG4gICAgICAgIDogY2hpbGRSZWNpcGUuc2VsZWN0b3JcbiAgICAgIGxldCBjaGlsZEVsZW1lbnRzXG4gICAgICBpZiAoY2hpbGRSZWNpcGUudXNlX3Jvb3QpIHtcbiAgICAgICAgY2hpbGRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICAgICAgIGNvbnNvbGUubG9nKCd1c2Ugcm9vdCBmb3IgJywgY2hpbGRFbGVtZW50cylcbiAgICAgIH0gZWxzZSBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICAgICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQ6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBjaGlsZE5vZGUgPSBwcm9jZXNzRWxlbWVudChjaGlsZEVsZW1lbnQsIGNoaWxkUmVjaXBlLCBwYXJlbnROYW1lLCBpbmRleClcbiAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZE5vZGUpXG4gICAgICAgIGlmIChjaGlsZFJlY2lwZS5pbnNlcnRfc3BsaXRfbWFya2VyKSB7XG4gICAgICAgICAgY29uc3QgZXZlcnkgPSBjaGlsZFJlY2lwZS5pbnNlcnRfc3BsaXRfbWFya2VyX2V2ZXJ5IHx8IDFcbiAgICAgICAgICBpZiAoaW5kZXggJSBldmVyeSA9PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBzcGxpdE1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwbGl0LW1hcmtlcicpXG4gICAgICAgICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKHNwbGl0TWFya2VyKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbnNlcnRpbmcgc3BsaXQgbWFya2VyIDFcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZFJlY2lwZS5pbnNlcnRfc3BsaXRfbWFya2VyKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbnNlcnRpbmcgc3BsaXQgbWFya2VyIDJcIik7XG4gICAgICAgICAgY29uc3Qgc3BsaXRNYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGxpdC1tYXJrZXInKVxuICAgICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoc3BsaXRNYXJrZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ25vIHNwbGl0IG1hcmtlcicpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSGFuZGxlIGVtcHR5IG1lc3NhZ2VzXG4gIGlmIChyZWNpcGUuZW1wdHlfbWVzc2FnZSAmJiBuZXdFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbnN0IGVtcHR5VGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShyZWNpcGUuZW1wdHlfbWVzc2FnZSlcbiAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKGVtcHR5VGV4dE5vZGUpXG4gIH1cblxuICByZXR1cm4gbmV3RWxlbWVudFxufVxuIiwiaW1wb3J0IHsgc3RhcnRzV2l0aCB9IGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IGZpbHRlcl91cmwsIHVybF9pbmNsdWRlcywgY2hlY2tfdXNlcl9pZF91cmwgfSBmcm9tICcuLi9jb25maWcnXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Zyb21Qb3B1cChlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICByZXR1cm4gZWxlbWVudC5jbG9zZXN0KCcjcmVhc29uLW1vZGFsJykgIT09IG51bGxcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVfaWNvbih1cmwpIHtcbiAgY29uc29sZS5sb2coJ3VwZGF0ZV9pY29uJywgdXJsKVxuICBpZiAoIShhd2FpdCBzaG91bGRFeGNsdWRlKHVybCkpKSB7XG4gICAgY29uc29sZS5sb2coJ2FjdGl2ZSBpY29uJylcbiAgICBjaHJvbWUuYWN0aW9uLnNldEljb24oe1xuICAgICAgcGF0aDogJy4uL2ljb24ucG5nJ1xuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ2luYWN0aXZlIGljb24nKVxuICAgIGNocm9tZS5hY3Rpb24uc2V0SWNvbih7XG4gICAgICBwYXRoOiAnLi4vaW5hY3RpdmVfaWNvbi5wbmcnXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFBhZ2VNZXRhKCkge1xuICBjb25zdCBhbGxfZWxlbWVudF93aXRoX21ldGFfZGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWVsZW1lbnQtbWV0YS1uYW1lXScpXG5cbiAgY29uc3QgZ3JvdXBlZFJlc3VsdCA9IHt9XG5cbiAgYWxsX2VsZW1lbnRfd2l0aF9tZXRhX2RhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IG1ldGFOYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnKVxuICAgIGNvbnN0IG1ldGFEYXRhID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnKVxuXG4gICAgaWYgKCFncm91cGVkUmVzdWx0W21ldGFOYW1lXSkge1xuICAgICAgZ3JvdXBlZFJlc3VsdFttZXRhTmFtZV0gPSBbXVxuICAgIH1cbiAgICBncm91cGVkUmVzdWx0W21ldGFOYW1lXS5wdXNoKEpTT04ucGFyc2UobWV0YURhdGEpKVxuICB9KVxuXG4gIHJldHVybiBncm91cGVkUmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGlja2FibGVFbGVtZW50c0luVmlld3BvcnQoKSB7XG4gIC8vIFNlbGVjdCBhbGwgcG90ZW50aWFsIGNsaWNrYWJsZSBlbGVtZW50c1xuICBjb25zdCBkb2N1bWVudENvcHkgPSBkb2N1bWVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgRG9jdW1lbnRcbiAgY29uc3QgYWxsRWxlbWVudHMgPSBkb2N1bWVudENvcHkucXVlcnlTZWxlY3RvckFsbChcbiAgICAnYSwgYnV0dG9uLCBbb25jbGlja10sIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nXG4gIClcblxuICAvLyBDaGVjayBpZiBlYWNoIGVsZW1lbnQgaXMgaW4gdGhlIHZpZXdwb3J0IGFuZCBhZGQgbWFya2VyXG4gIGFsbEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGlmIChcbiAgICAgIHJlY3QudG9wID49IDAgJiZcbiAgICAgIHJlY3QubGVmdCA+PSAwICYmXG4gICAgICByZWN0LmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmXG4gICAgICByZWN0LnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXG4gICAgKSB7XG4gICAgICAvLyBBZGQgbWFya2VyIGF0dHJpYnV0ZSB0byB0aGUgZWxlbWVudFxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3Zpc2libGUtY2xpY2thYmxlLWVsZW1lbnQtbWFya2VyJywgJ3RydWUnKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGRvY3VtZW50Q29weVxufVxuXG4vLyBBZGQgY2xlYW51cCBmdW5jdGlvbiB0byByZW1vdmUgbWFya2VycyB3aGVuIG5lZWRlZFxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsaWNrYWJsZU1hcmtlcnMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1t2aXNpYmxlLWNsaWNrYWJsZS1lbGVtZW50LW1hcmtlcl0nKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3Zpc2libGUtY2xpY2thYmxlLWVsZW1lbnQtbWFya2VyJylcbiAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNob3VsZEV4Y2x1ZGUodXJsOiBzdHJpbmcsIGlnbm9yZVVzZXJJZDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gIGlmICghaWdub3JlVXNlcklkKSB7XG4gICAgaWYgKGNocm9tZS5zdG9yYWdlKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoJ3VzZXJJZCcpXG4gICAgICBpZiAoIXJlc3VsdC51c2VySWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ25vIHVzZXIgaWQnKVxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyB1c2VyIGlkLCB3ZSBzaG91bGQgbm90IGJlIHJlY29yZGluZyBhbnl0aGluZ1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB1c2VySWQgPSBhd2FpdCBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZU1lc3NhZ2UgPSAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5kYXRhLnR5cGUgPT09ICdHRVRfVVNFUl9JRF9SRVNQT05TRScpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgICAgIHJlc29sdmUoZXZlbnQuZGF0YS51c2VySWQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ0dFVF9VU0VSX0lEJyB9LCAnKicpXG4gICAgICB9KVxuICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gdXNlciBpZCwgd2Ugc2hvdWxkIG5vdCBiZSByZWNvcmRpbmcgYW55dGhpbmdcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiAoXG4gICAgIXVybF9pbmNsdWRlcy5zb21lKChpbmNsdWRlVXJsKSA9PiB1cmwuaW5jbHVkZXMoaW5jbHVkZVVybCkpIHx8XG4gICAgZmlsdGVyX3VybC5zb21lKChleGNsdWRlVXJsKSA9PiB1cmwuaW5jbHVkZXMoZXhjbHVkZVVybCkpXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlSHRtbFNuYXBzaG90SWQodGltZXN0YW1wOiBzdHJpbmcsIHV1aWQ6IHN0cmluZykge1xuICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZlxuICByZXR1cm4gYGh0bWxfJHtoYXNoQ29kZSh1cmwpfV8ke3RpbWVzdGFtcH1fJHt1dWlkfWBcbn1cbmV4cG9ydCBmdW5jdGlvbiBoYXNoQ29kZShzdHI6IHN0cmluZykge1xuICBsZXQgaGFzaCA9IDBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBoYXNoID0gKGhhc2ggPDwgNSkgLSBoYXNoICsgc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoYXNoIHw9IDBcbiAgfVxuICBjb25zb2xlLmxvZygnSGFzaCB2YWx1ZSBiZWZvcmUgcmV0dXJuOicsIGhhc2gpXG4gIHJldHVybiBoYXNoLnRvU3RyaW5nKClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrX3VzZXJfaWQodXNlcl9pZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjaGVja191c2VyX2lkX3VybH0/dXNlcl9pZD0ke3VzZXJfaWR9YCwge1xuICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgIH0pXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICByZXR1cm4gJ3N1Y2Nlc3MnXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhIHx8ICdVbmtub3duIGVycm9yJ1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICR7KGVycm9yIGFzIEVycm9yKS5tZXNzYWdlfWApXG4gIH1cbiAgcmV0dXJuICdVbmtub3duIGVycm9yJ1xufVxuXG5pbXBvcnQgeyByZWNpcGVzIH0gZnJvbSAnLi4vcmVjaXBlX25ldydcbmltcG9ydCB7IHByb2Nlc3NFbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50LXByb2Nlc3NvcidcbmZ1bmN0aW9uIHNlbGVjdFJlY2lwZSgpIHtcbiAgY29uc3QgcGFyc2VkVXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgbGV0IHBhdGggPSBwYXJzZWRVcmwucGF0aG5hbWVcbiAgcGF0aCA9IHBhdGggIT09ICcvJyA/IHBhdGgucmVwbGFjZSgvXFwvKyQvLCAnJykgOiBwYXRoXG5cbiAgZm9yIChjb25zdCByZWNpcGUgb2YgcmVjaXBlcykge1xuICAgIGNvbnN0IG1hdGNoTWV0aG9kID0gcmVjaXBlLm1hdGNoX21ldGhvZCB8fCAndGV4dCdcbiAgICBpZiAobWF0Y2hNZXRob2QgPT09ICd0ZXh0Jykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gRXhlY3V0ZSBzY3JpcHQgaW4gdGFiIHRvIGNoZWNrIGZvciBtYXRjaGluZyBlbGVtZW50XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlY2lwZS5tYXRjaClcblxuICAgICAgICBjb25zdCBoYXNNYXRjaCA9XG4gICAgICAgICAgZWxlbWVudCAmJlxuICAgICAgICAgICghcmVjaXBlLm1hdGNoX3RleHQgfHxcbiAgICAgICAgICAgIChlbGVtZW50LnRleHRDb250ZW50Py50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHJlY2lwZS5tYXRjaF90ZXh0LnRvTG93ZXJDYXNlKCkpID8/IGZhbHNlKSlcblxuICAgICAgICBpZiAoaGFzTWF0Y2gpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnbWF0Y2hlZCB3aXRoIHJlY2lwZSAnLCByZWNpcGUubWF0Y2gpXG4gICAgICAgICAgcmV0dXJuIHJlY2lwZVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyB0ZXh0IG1hdGNoOicsIGVycm9yKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobWF0Y2hNZXRob2QgPT09ICd1cmwnKSB7XG4gICAgICBpZiAocmVjaXBlLm1hdGNoID09PSBwYXRoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtYXRjaGVkIHdpdGggcmVjaXBlICcsIHJlY2lwZS5tYXRjaClcbiAgICAgICAgcmV0dXJuIHJlY2lwZVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgcmVjaXBlLm1hdGNoX3dpdGhfcmVmICYmXG4gICAgICAgIChwYXRoLnN0YXJ0c1dpdGgocmVjaXBlLm1hdGNoICsgJy9yZWY9JykgfHwgcGF0aC5zdGFydHNXaXRoKHJlY2lwZS5tYXRjaCArICdyZWY9JykpXG4gICAgICApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21hdGNoZWQgd2l0aCByZWNpcGUgJywgcmVjaXBlLm1hdGNoKVxuICAgICAgICByZXR1cm4gcmVjaXBlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKGBObyBtYXRjaGluZyByZWNpcGUgZm91bmQgZm9yIHBhdGg6ICR7cGF0aH1gKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc1JlY2lwZSgpIHtcbiAgY29uc29sZS5sb2coJ3N0YXJ0IHByb2Nlc3MgcmVjaXBlJylcbiAgdHJ5IHtcbiAgICBjb25zdCByZWNpcGUgPSBzZWxlY3RSZWNpcGUoKVxuICAgIGNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihyZWNpcGUuc2VsZWN0b3IpXG4gICAgaWYgKHJvb3RFbGVtZW50KSB7XG4gICAgICBjb25zdCBuZXdSb290ID0gcHJvY2Vzc0VsZW1lbnQocm9vdEVsZW1lbnQsIHJlY2lwZSlcbiAgICAgIGNvbnN0IHNpbXBsaWZpZWRIVE1MID0gbmV3Um9vdC5vdXRlckhUTUxcbiAgICAgIHJldHVybiBzaW1wbGlmaWVkSFRNTFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBwcm9jZXNzaW5nIHJlY2lwZTonLCBlcnJvcilcbiAgfVxufVxuXG4vLyBSZXBsYWNlIHRoZSBzaW1wbGUgcXVlc3Rpb24gd2l0aCBhIG1vcmUgZGV0YWlsZWQgb25lIGJhc2VkIG9uIGV2ZW50IHR5cGVcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXN0b21RdWVzdGlvbihcbiAgZXZlbnRUeXBlOiBzdHJpbmcsXG4gIGRhdGE6IGFueVxuKTogeyBxdWVzdGlvbjogc3RyaW5nOyBwbGFjZWhvbGRlcjogc3RyaW5nIH0ge1xuICBsZXQgcXVlc3Rpb24gPSAnJ1xuICBsZXQgcGxhY2Vob2xkZXIgPSAnRW50ZXIgeW91ciByZWFzb24gaGVyZS4uLidcbiAgc3dpdGNoIChldmVudFR5cGUpIHtcbiAgICBjYXNlICdjbGlja19hJzpcbiAgICBjYXNlICdjbGlja19iJzpcbiAgICBjYXNlICdjbGlja19jJzpcbiAgICAgIC8vIENoZWNrIGlmIGl0J3MgYSBzcGVjaWZpYyB0eXBlIG9mIGNsaWNrXG4gICAgICBpZiAoXG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXSA9PT0gJ2J1eWJveC5kZWxpdmVyeS5zdWJzY3JpYmVfc2F2ZV8ucHVyY2hhc2VfZm9ybS5zZXRfdXBfbm93JyB8fFxuICAgICAgICBkYXRhLnRhcmdldC5pbm5lclRleHQgPT09ICdTZXQgVXAgTm93J1xuICAgICAgKSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnWW91IDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1wiPmNsaWNrZWQ8L3NwYW4+IG9uIHRoZSBzZXQgdXAgbm93IGJ1dHRvbi4gV2hhdCBtYWtlcyB5b3UgY2hvb3NlIHRvIHN1YnNjcmliZSB0byB0aGlzIHByb2R1Y3Q/J1xuICAgICAgICBwbGFjZWhvbGRlciA9ICdJIGNob29zZSB0byBzdWJzY3JpYmUgYmVjYXVzZS4uLidcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXSA9PT0gJ2J1eWJveC5kZWxpdmVyeS5vbmVfdGltZV9wdXJjaGFzZV8ucHVyY2hhc2VfZm9ybS5idXlfbm93JyB8fFxuICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10gPT09ICdidXlib3guZGVsaXZlcnkucHVyY2hhc2VfZm9ybS5idXknIHx8XG4gICAgICAgIGRhdGEudGFyZ2V0LmlkID09PSAnYnV5LW5vdy1idXR0b24nXG4gICAgICApIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdZb3UgPHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XCI+Y2xpY2tlZDwvc3Bhbj4gb24gdGhlIGJ1eSBub3cgYnV0dG9uLiBXaGF0IGRvIHlvdSBsaWtlIGFib3V0IHRoaXMgcGFydGljdWxhciBwcm9kdWN0PydcbiAgICAgICAgcGxhY2Vob2xkZXIgPSAnSSBhbSBidXlpbmcgdGhpcyBwcm9kdWN0IGJlY2F1c2UuLi4nXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LnN0YXJ0c1dpdGgoJ3NlYXJjaF9yZXN1bHRzLicpIHx8XG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uc3RhcnRzV2l0aCgncHJvZHVjdF9saXN0LicpIHx8XG4gICAgICAgIChkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LnN0YXJ0c1dpdGgoJ2FjdGl2ZV9pdGVtX2xpc3QuJykgJiZcbiAgICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LmVuZHNXaXRoKCcucHJvZHVjdF9kZXRhaWwnKSkgfHxcbiAgICAgICAgZGF0YS50YXJnZXQuY2xhc3NOYW1lPy5pbmNsdWRlcygnc2MtcHJvZHVjdC1saW5rJylcbiAgICAgICkge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1lvdSA8c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHllbGxvdztcIj5jbGlja2VkPC9zcGFuPiBvbiB0aGlzIHByb2R1Y3QuIFdoYXQgY2F1Z2h0IHlvdXIgYXR0ZW50aW9uIGNvbXBhcmVkIHRvIHRoZSBvdGhlciBvcHRpb25zIHlvdSBzYXc/J1xuICAgICAgICBwbGFjZWhvbGRlciA9ICdJIGxpa2UgdGhpcyBwcm9kdWN0IGJlY2F1c2XDny4uLidcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uZW5kc1dpdGgoJ2FkZF90b19jYXJ0JykgfHxcbiAgICAgICAgZGF0YS50YXJnZXQuaWQgPT09ICdhZGQtdG8tY2FydC1idXR0b24nIHx8XG4gICAgICAgIGRhdGEudGFyZ2V0Lm5hbWUgPT09ICdzdWJtaXQuYWRkVG9DYXJ0JyB8fFxuICAgICAgICBkYXRhLnRhcmdldC5pbm5lclRleHQgPT09ICdBZGQgdG8gQ2FydCdcbiAgICAgICkge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1lvdSA8c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHllbGxvdztcIj5jbGlja2VkPC9zcGFuPiBvbiB0aGUgYWRkIHRvIGNhcnQgYnV0dG9uLiBXaGF0IG1ha2VzIHlvdSBkZWNpZGUgdG8gYWRkIHRoaXMgaXRlbSB0byB5b3VyIGNhcnQ/J1xuICAgICAgICBwbGFjZWhvbGRlciA9ICdJIGFkZCB0aGlzIGl0ZW0gdG8gbXkgY2FydCBiZWNhdXNlLi4uJ1xuICAgICAgfSBlbHNlIGlmIChkYXRhWydkYXRhLXNlbWFudGljLWlkJ10gPT09ICduYXZfYmFyLnNlYXJjaF9idXR0b24nKSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnWW91IDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1wiPmNsaWNrZWQ8L3NwYW4+IG9uIHRoZSBzZWFyY2ggYnV0dG9uLiBXaGF0IGFyZSB5b3Ugc2VhcmNoaW5nIGZvcj8nXG4gICAgICAgIHBsYWNlaG9sZGVyID0gJ0kgd2FudCB0byBmaW5kIC4uLidcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uc3RhcnRzV2l0aCgncmVmaW5lbWVudHMuJykgfHxcbiAgICAgICAgZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddPy5zdGFydHNXaXRoKCdmaWx0ZXJzLicpXG4gICAgICApIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdZb3UgPHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XCI+Y2xpY2tlZDwvc3Bhbj4gb24gdGhpcyBmaWx0ZXIuIFdoYXQgYXJlIHlvdSBob3BpbmcgdG8gZmluZCB3aXRoIHRoaXMgZmlsdGVyPydcbiAgICAgICAgcGxhY2Vob2xkZXIgPSAnSSB3YW50IHRvIGZpbmQgLi4uJ1xuICAgICAgfSBlbHNlIGlmIChkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LnN0YXJ0c1dpdGgoJ3Byb2R1Y3Rfb3B0aW9ucy4nKSkge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1lvdSA8c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHllbGxvdztcIj5jbGlja2VkPC9zcGFuPiBvbiB0aGlzIHByb2R1Y3Qgb3B0aW9uLiBXaGF0IGRvIHlvdSBsaWtlIGFib3V0IHRoaXMgcHJvZHVjdCBvcHRpb24/J1xuICAgICAgICBpZiAoZGF0YVsnZWxlbWVudC1tZXRhLW5hbWUnXSA9PT0gJ3Byb2R1Y3Rfb3B0aW9ucycgJiYgZGF0YVsnZWxlbWVudC1tZXRhLWRhdGEnXSAhPT0gJycpIHtcbiAgICAgICAgICBxdWVzdGlvbiA9IGBZb3UgPHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XCI+Y2xpY2tlZDwvc3Bhbj4gb24gJHtkYXRhWydlbGVtZW50LW1ldGEtZGF0YSddWyd2YWx1ZSddfS4gV2hhdCBkbyB5b3UgbGlrZSBhYm91dCB0aGlzIHByb2R1Y3Qgb3B0aW9uP2BcbiAgICAgICAgfVxuICAgICAgICBwbGFjZWhvbGRlciA9ICdJIGxpa2UgdGhpcyBwcm9kdWN0IG9wdGlvbiBiZWNhdXNlLi4uw58nXG4gICAgICB9IGVsc2UgaWYgKGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uZW5kc1dpdGgoJ2NoZWNrX291dCcpKSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnWW91IDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1wiPmNsaWNrZWQ8L3NwYW4+IGNoZWNrb3V0IGJ1dHRvbi4gV2hhdCBtYWtlcyB5b3UgY2hvb3NlIHRvIGNoZWNrb3V0PydcbiAgICAgICAgcGxhY2Vob2xkZXIgPSAnSSBjaG9vc2UgdG8gY2hlY2tvdXQgYmVjYXVzZS4uLidcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnWW91IDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1wiPmNsaWNrZWQ8L3NwYW4+IG9uIHRoaXMgZWxlbWVudC4gQ291bGQgeW91IHNoYXJlIHdoYXQgeW91IHdlcmUgdHJ5aW5nIHRvIGRvIG9yIGZpbmQ/J1xuICAgICAgICBwbGFjZWhvbGRlciA9ICdFbnRlciB5b3VyIHJlYXNvbiBoZXJlLi4uJ1xuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdzY3JvbGwnOlxuICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAnWW91IDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1wiPnNjcm9sbGVkPC9zcGFuPiBvbiB0aGlzIHBhZ2UuIFdoYXQgaW5mb3JtYXRpb24gYXJlIHlvdSBsb29raW5nIGZvcj8nXG4gICAgICBwbGFjZWhvbGRlciA9ICdJIHdhbnQgdG8gZmluZCAuLi4nXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgJ1lvdSA8c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHllbGxvdztcIj50eXBlZDwvc3Bhbj4gaW4gdGhpcyBpbnB1dCBmaWVsZC4gV2hhdCBhcmUgeW91IHNlYXJjaGluZyBmb3I/J1xuICAgICAgcGxhY2Vob2xkZXIgPSAnSSB3YW50IHRvIGZpbmQgLi4uJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlICduYXZpZ2F0aW9uJzpcbiAgICAgIGlmIChkYXRhLm5hdmlnYXRpb25UeXBlID09PSAnYmFjaycpIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdXaHkgZGlkIHlvdSBkZWNpZGUgdG8gPHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XCI+Z28gYmFjazwvc3Bhbj4gdG8gdGhlIHByZXZpb3VzIHBhZ2U/J1xuICAgICAgICBwbGFjZWhvbGRlciA9IFwiSSdtIGJhY2sgYmVjYXVzZS4uLlwiXG4gICAgICB9IGVsc2UgaWYgKGRhdGEubmF2aWdhdGlvblR5cGUgPT09ICdmb3J3YXJkJykge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1doeSBkaWQgeW91IGRlY2lkZSB0byA8c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHllbGxvdztcIj5yZXR1cm48L3NwYW4+IHRvIHRoaXMgcGFnZSA/J1xuICAgICAgICBwbGFjZWhvbGRlciA9ICdJIHdhbnQgdG8gZmluZCAuLi4nXG4gICAgICB9XG4gICAgICBxdWVzdGlvbiA9IGBXaGF0IGlzIHRoZSByZWFzb24gZm9yIHRoaXMgPHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XCI+JHtkYXRhLm5hdmlnYXRpb25UeXBlfSBuYXZpZ2F0aW9uPC9zcGFuPj9gXG4gICAgICBwbGFjZWhvbGRlciA9ICdFbnRlciB5b3VyIHJlYXNvbiBoZXJlLi4uJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlICd0YWJBY3RpdmF0ZSc6XG4gICAgICBxdWVzdGlvbiA9IGBXaHkgZGlkIHlvdSA8c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHllbGxvdztcIj5zd2l0Y2ggdG8gdGhpcyB0YWI8L3NwYW4+P2BcbiAgICAgIHBsYWNlaG9sZGVyID0gJ0kgc3dpdGNoZWQgdG8gdGhpcyB0YWIgYmVjYXVzZS4uLidcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHF1ZXN0aW9uID0gYFdoYXQgaXMgdGhlIHJlYXNvbiBmb3IgdGhlICR7ZXZlbnRUeXBlfSBhY3Rpb24/YFxuICAgICAgcGxhY2Vob2xkZXIgPSAnRW50ZXIgeW91ciByZWFzb24gaGVyZS4uLidcbiAgICAgIGJyZWFrXG4gIH1cbiAgcmV0dXJuIHsgcXVlc3Rpb24sIHBsYWNlaG9sZGVyIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRSZWFzb24ocmVhc29uOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKCFyZWFzb24gfHwgcmVhc29uLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2UgLy8gRW1wdHkgaW5wdXRcbiAgfVxuICBpZiAocmVhc29uLnRyaW0oKS5sZW5ndGggPCAyIHx8IHJlYXNvbi5sZW5ndGggPCA1KSB7XG4gICAgcmV0dXJuIGZhbHNlIC8vIFRvbyBzaG9ydCB0byBiZSBtZWFuaW5nZnVsLCBhdCBsZWFzdCA1IGNoYXJhY3RlcnMgYW5kIDIgd29yZHNcbiAgfVxuICAvLyBDaGVjayBmb3IgcmVwZXRpdGl2ZSBvciBtZWFuaW5nbGVzcyBpbnB1dCAoZS5nLiwgXCJhYWFcIixcIiEhIVwiKVxuICBjb25zdCBtZWFuaW5nbGVzc1BhdHRlcm5zID0gWy9eKC4pXFwxezMsfSQvLCAvXlteYS16QS1aMC05XSskL11cbiAgZm9yIChjb25zdCBwYXR0ZXJuIG9mIG1lYW5pbmdsZXNzUGF0dGVybnMpIHtcbiAgICBpZiAocGF0dGVybi50ZXN0KHJlYXNvbi50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgJycpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59XG4iLCIvLyBMaWNlbnNlOiBNSVRcbi8vIEF1dGhvcjogQW50b24gTWVkdmVkZXYgPGFudG9uQG1lZHYuaW8+XG4vLyBTb3VyY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRvbm1lZHYvZmluZGVyXG5jb25zdCBhY2NlcHRlZEF0dHJOYW1lcyA9IG5ldyBTZXQoWydyb2xlJywgJ25hbWUnLCAnYXJpYS1sYWJlbCcsICdyZWwnLCAnaHJlZiddKTtcbi8qKiBDaGVjayBpZiBhdHRyaWJ1dGUgbmFtZSBhbmQgdmFsdWUgYXJlIHdvcmQtbGlrZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdHRyKG5hbWUsIHZhbHVlKSB7XG4gICAgbGV0IG5hbWVJc09rID0gYWNjZXB0ZWRBdHRyTmFtZXMuaGFzKG5hbWUpO1xuICAgIG5hbWVJc09rIHx8PSBuYW1lLnN0YXJ0c1dpdGgoJ2RhdGEtJykgJiYgd29yZExpa2UobmFtZSk7XG4gICAgbGV0IHZhbHVlSXNPayA9IHdvcmRMaWtlKHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPCAxMDA7XG4gICAgdmFsdWVJc09rIHx8PSB2YWx1ZS5zdGFydHNXaXRoKCcjJykgJiYgd29yZExpa2UodmFsdWUuc2xpY2UoMSkpO1xuICAgIHJldHVybiBuYW1lSXNPayAmJiB2YWx1ZUlzT2s7XG59XG4vKiogQ2hlY2sgaWYgaWQgbmFtZSBpcyB3b3JkLWxpa2UuICovXG5leHBvcnQgZnVuY3Rpb24gaWROYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gd29yZExpa2UobmFtZSk7XG59XG4vKiogQ2hlY2sgaWYgY2xhc3MgbmFtZSBpcyB3b3JkLWxpa2UuICovXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gd29yZExpa2UobmFtZSk7XG59XG4vKiogQ2hlY2sgaWYgdGFnIG5hbWUgaXMgd29yZC1saWtlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRhZ05hbWUobmFtZSkge1xuICAgIHJldHVybiB0cnVlO1xufVxuLyoqIEZpbmRzIHVuaXF1ZSBDU1Mgc2VsZWN0b3JzIGZvciB0aGUgZ2l2ZW4gZWxlbWVudC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kZXIoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBpZiAoaW5wdXQubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgZ2VuZXJhdGUgQ1NTIHNlbGVjdG9yIGZvciBub24tZWxlbWVudCBub2RlIHR5cGUuYCk7XG4gICAgfVxuICAgIGlmIChpbnB1dC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdodG1sJykge1xuICAgICAgICByZXR1cm4gJ2h0bWwnO1xuICAgIH1cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgcm9vdDogZG9jdW1lbnQuYm9keSxcbiAgICAgICAgaWROYW1lOiBpZE5hbWUsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICB0YWdOYW1lOiB0YWdOYW1lLFxuICAgICAgICBhdHRyOiBhdHRyLFxuICAgICAgICB0aW1lb3V0TXM6IDEwMDAsXG4gICAgICAgIHNlZWRNaW5MZW5ndGg6IDMsXG4gICAgICAgIG9wdGltaXplZE1pbkxlbmd0aDogMixcbiAgICAgICAgbWF4TnVtYmVyT2ZQYXRoQ2hlY2tzOiBJbmZpbml0eSxcbiAgICB9O1xuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgY29uZmlnID0geyAuLi5kZWZhdWx0cywgLi4ub3B0aW9ucyB9O1xuICAgIGNvbnN0IHJvb3REb2N1bWVudCA9IGZpbmRSb290RG9jdW1lbnQoY29uZmlnLnJvb3QsIGRlZmF1bHRzKTtcbiAgICBsZXQgZm91bmRQYXRoO1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgZm9yIChjb25zdCBjYW5kaWRhdGUgb2Ygc2VhcmNoKGlucHV0LCBjb25maWcsIHJvb3REb2N1bWVudCkpIHtcbiAgICAgICAgY29uc3QgZWxhcHNlZFRpbWVNcyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnRUaW1lLmdldFRpbWUoKTtcbiAgICAgICAgaWYgKGVsYXBzZWRUaW1lTXMgPiBjb25maWcudGltZW91dE1zIHx8XG4gICAgICAgICAgICBjb3VudCA+PSBjb25maWcubWF4TnVtYmVyT2ZQYXRoQ2hlY2tzKSB7XG4gICAgICAgICAgICBjb25zdCBmUGF0aCA9IGZhbGxiYWNrKGlucHV0LCByb290RG9jdW1lbnQpO1xuICAgICAgICAgICAgaWYgKCFmUGF0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGltZW91dDogQ2FuJ3QgZmluZCBhIHVuaXF1ZSBzZWxlY3RvciBhZnRlciAke2NvbmZpZy50aW1lb3V0TXN9bXNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcihmUGF0aCk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgICAgaWYgKHVuaXF1ZShjYW5kaWRhdGUsIHJvb3REb2N1bWVudCkpIHtcbiAgICAgICAgICAgIGZvdW5kUGF0aCA9IGNhbmRpZGF0ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghZm91bmRQYXRoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgU2VsZWN0b3Igd2FzIG5vdCBmb3VuZC5gKTtcbiAgICB9XG4gICAgY29uc3Qgb3B0aW1pemVkID0gW1xuICAgICAgICAuLi5vcHRpbWl6ZShmb3VuZFBhdGgsIGlucHV0LCBjb25maWcsIHJvb3REb2N1bWVudCwgc3RhcnRUaW1lKSxcbiAgICBdO1xuICAgIG9wdGltaXplZC5zb3J0KGJ5UGVuYWx0eSk7XG4gICAgaWYgKG9wdGltaXplZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBzZWxlY3RvcihvcHRpbWl6ZWRbMF0pO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0b3IoZm91bmRQYXRoKTtcbn1cbmZ1bmN0aW9uKiBzZWFyY2goaW5wdXQsIGNvbmZpZywgcm9vdERvY3VtZW50KSB7XG4gICAgY29uc3Qgc3RhY2sgPSBbXTtcbiAgICBsZXQgcGF0aHMgPSBbXTtcbiAgICBsZXQgY3VycmVudCA9IGlucHV0O1xuICAgIGxldCBpID0gMDtcbiAgICB3aGlsZSAoY3VycmVudCAmJiBjdXJyZW50ICE9PSByb290RG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgbGV2ZWwgPSB0aWUoY3VycmVudCwgY29uZmlnKTtcbiAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIGxldmVsKSB7XG4gICAgICAgICAgICBub2RlLmxldmVsID0gaTtcbiAgICAgICAgfVxuICAgICAgICBzdGFjay5wdXNoKGxldmVsKTtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgaSsrO1xuICAgICAgICBwYXRocy5wdXNoKC4uLmNvbWJpbmF0aW9ucyhzdGFjaykpO1xuICAgICAgICBpZiAoaSA+PSBjb25maWcuc2VlZE1pbkxlbmd0aCkge1xuICAgICAgICAgICAgcGF0aHMuc29ydChieVBlbmFsdHkpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBjYW5kaWRhdGUgb2YgcGF0aHMpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBjYW5kaWRhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXRocyA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhdGhzLnNvcnQoYnlQZW5hbHR5KTtcbiAgICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBwYXRocykge1xuICAgICAgICB5aWVsZCBjYW5kaWRhdGU7XG4gICAgfVxufVxuZnVuY3Rpb24gd29yZExpa2UobmFtZSkge1xuICAgIGlmICgvXlthLXpcXC1dezMsfSQvaS50ZXN0KG5hbWUpKSB7XG4gICAgICAgIGNvbnN0IHdvcmRzID0gbmFtZS5zcGxpdCgvLXxbQS1aXS8pO1xuICAgICAgICBmb3IgKGNvbnN0IHdvcmQgb2Ygd29yZHMpIHtcbiAgICAgICAgICAgIGlmICh3b3JkLmxlbmd0aCA8PSAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKC9bXmFlaW91XXs0LH0vaS50ZXN0KHdvcmQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiB0aWUoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBbXTtcbiAgICBjb25zdCBlbGVtZW50SWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICBpZiAoZWxlbWVudElkICYmIGNvbmZpZy5pZE5hbWUoZWxlbWVudElkKSkge1xuICAgICAgICBsZXZlbC5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6ICcjJyArIENTUy5lc2NhcGUoZWxlbWVudElkKSxcbiAgICAgICAgICAgIHBlbmFsdHk6IDAsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2xhc3NMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBlbGVtZW50LmNsYXNzTGlzdFtpXTtcbiAgICAgICAgaWYgKGNvbmZpZy5jbGFzc05hbWUobmFtZSkpIHtcbiAgICAgICAgICAgIGxldmVsLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6ICcuJyArIENTUy5lc2NhcGUobmFtZSksXG4gICAgICAgICAgICAgICAgcGVuYWx0eTogMSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGF0dHIgPSBlbGVtZW50LmF0dHJpYnV0ZXNbaV07XG4gICAgICAgIGlmIChjb25maWcuYXR0cihhdHRyLm5hbWUsIGF0dHIudmFsdWUpKSB7XG4gICAgICAgICAgICBsZXZlbC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBgWyR7Q1NTLmVzY2FwZShhdHRyLm5hbWUpfT1cIiR7Q1NTLmVzY2FwZShhdHRyLnZhbHVlKX1cIl1gLFxuICAgICAgICAgICAgICAgIHBlbmFsdHk6IDIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB0YWdOYW1lID0gZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGNvbmZpZy50YWdOYW1lKHRhZ05hbWUpKSB7XG4gICAgICAgIGxldmVsLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogdGFnTmFtZSxcbiAgICAgICAgICAgIHBlbmFsdHk6IDUsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBpbmRleCA9IGluZGV4T2YoZWxlbWVudCwgdGFnTmFtZSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXZlbC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBudGhPZlR5cGUodGFnTmFtZSwgaW5kZXgpLFxuICAgICAgICAgICAgICAgIHBlbmFsdHk6IDEwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgbnRoID0gaW5kZXhPZihlbGVtZW50KTtcbiAgICBpZiAobnRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGV2ZWwucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBudGhDaGlsZCh0YWdOYW1lLCBudGgpLFxuICAgICAgICAgICAgcGVuYWx0eTogNTAsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGV2ZWw7XG59XG5mdW5jdGlvbiBzZWxlY3RvcihwYXRoKSB7XG4gICAgbGV0IG5vZGUgPSBwYXRoWzBdO1xuICAgIGxldCBxdWVyeSA9IG5vZGUubmFtZTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGV2ZWwgPSBwYXRoW2ldLmxldmVsIHx8IDA7XG4gICAgICAgIGlmIChub2RlLmxldmVsID09PSBsZXZlbCAtIDEpIHtcbiAgICAgICAgICAgIHF1ZXJ5ID0gYCR7cGF0aFtpXS5uYW1lfSA+ICR7cXVlcnl9YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHF1ZXJ5ID0gYCR7cGF0aFtpXS5uYW1lfSAke3F1ZXJ5fWA7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZSA9IHBhdGhbaV07XG4gICAgfVxuICAgIHJldHVybiBxdWVyeTtcbn1cbmZ1bmN0aW9uIHBlbmFsdHkocGF0aCkge1xuICAgIHJldHVybiBwYXRoLm1hcCgobm9kZSkgPT4gbm9kZS5wZW5hbHR5KS5yZWR1Y2UoKGFjYywgaSkgPT4gYWNjICsgaSwgMCk7XG59XG5mdW5jdGlvbiBieVBlbmFsdHkoYSwgYikge1xuICAgIHJldHVybiBwZW5hbHR5KGEpIC0gcGVuYWx0eShiKTtcbn1cbmZ1bmN0aW9uIGluZGV4T2YoaW5wdXQsIHRhZ05hbWUpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBpbnB1dC5wYXJlbnROb2RlO1xuICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGxldCBjaGlsZCA9IHBhcmVudC5maXJzdENoaWxkO1xuICAgIGlmICghY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgbGV0IGkgPSAwO1xuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFICYmXG4gICAgICAgICAgICAodGFnTmFtZSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgICAgY2hpbGQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSB0YWdOYW1lKSkge1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZCA9PT0gaW5wdXQpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgfVxuICAgIHJldHVybiBpO1xufVxuZnVuY3Rpb24gZmFsbGJhY2soaW5wdXQsIHJvb3REb2N1bWVudCkge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgY3VycmVudCA9IGlucHV0O1xuICAgIGNvbnN0IHBhdGggPSBbXTtcbiAgICB3aGlsZSAoY3VycmVudCAmJiBjdXJyZW50ICE9PSByb290RG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgdGFnTmFtZSA9IGN1cnJlbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBpbmRleCA9IGluZGV4T2YoY3VycmVudCwgdGFnTmFtZSk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IG50aE9mVHlwZSh0YWdOYW1lLCBpbmRleCksXG4gICAgICAgICAgICBwZW5hbHR5OiBOYU4sXG4gICAgICAgICAgICBsZXZlbDogaSxcbiAgICAgICAgfSk7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgaWYgKHVuaXF1ZShwYXRoLCByb290RG9jdW1lbnQpKSB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG50aENoaWxkKHRhZ05hbWUsIGluZGV4KSB7XG4gICAgaWYgKHRhZ05hbWUgPT09ICdodG1sJykge1xuICAgICAgICByZXR1cm4gJ2h0bWwnO1xuICAgIH1cbiAgICByZXR1cm4gYCR7dGFnTmFtZX06bnRoLWNoaWxkKCR7aW5kZXh9KWA7XG59XG5mdW5jdGlvbiBudGhPZlR5cGUodGFnTmFtZSwgaW5kZXgpIHtcbiAgICBpZiAodGFnTmFtZSA9PT0gJ2h0bWwnKSB7XG4gICAgICAgIHJldHVybiAnaHRtbCc7XG4gICAgfVxuICAgIHJldHVybiBgJHt0YWdOYW1lfTpudGgtb2YtdHlwZSgke2luZGV4fSlgO1xufVxuZnVuY3Rpb24qIGNvbWJpbmF0aW9ucyhzdGFjaywgcGF0aCA9IFtdKSB7XG4gICAgaWYgKHN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChsZXQgbm9kZSBvZiBzdGFja1swXSkge1xuICAgICAgICAgICAgeWllbGQqIGNvbWJpbmF0aW9ucyhzdGFjay5zbGljZSgxLCBzdGFjay5sZW5ndGgpLCBwYXRoLmNvbmNhdChub2RlKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHlpZWxkIHBhdGg7XG4gICAgfVxufVxuZnVuY3Rpb24gZmluZFJvb3REb2N1bWVudChyb290Tm9kZSwgZGVmYXVsdHMpIHtcbiAgICBpZiAocm9vdE5vZGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfTk9ERSkge1xuICAgICAgICByZXR1cm4gcm9vdE5vZGU7XG4gICAgfVxuICAgIGlmIChyb290Tm9kZSA9PT0gZGVmYXVsdHMucm9vdCkge1xuICAgICAgICByZXR1cm4gcm9vdE5vZGUub3duZXJEb2N1bWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHJvb3ROb2RlO1xufVxuZnVuY3Rpb24gdW5pcXVlKHBhdGgsIHJvb3REb2N1bWVudCkge1xuICAgIGNvbnN0IGNzcyA9IHNlbGVjdG9yKHBhdGgpO1xuICAgIHN3aXRjaCAocm9vdERvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY3NzKS5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCBzZWxlY3QgYW55IG5vZGUgd2l0aCB0aGlzIHNlbGVjdG9yOiAke2Nzc31gKTtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24qIG9wdGltaXplKHBhdGgsIGlucHV0LCBjb25maWcsIHJvb3REb2N1bWVudCwgc3RhcnRUaW1lKSB7XG4gICAgaWYgKHBhdGgubGVuZ3RoID4gMiAmJiBwYXRoLmxlbmd0aCA+IGNvbmZpZy5vcHRpbWl6ZWRNaW5MZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYXRoLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxhcHNlZFRpbWVNcyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnRUaW1lLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGlmIChlbGFwc2VkVGltZU1zID4gY29uZmlnLnRpbWVvdXRNcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5ld1BhdGggPSBbLi4ucGF0aF07XG4gICAgICAgICAgICBuZXdQYXRoLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGlmICh1bmlxdWUobmV3UGF0aCwgcm9vdERvY3VtZW50KSAmJlxuICAgICAgICAgICAgICAgIHJvb3REb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKG5ld1BhdGgpKSA9PT0gaW5wdXQpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBuZXdQYXRoO1xuICAgICAgICAgICAgICAgIHlpZWxkKiBvcHRpbWl6ZShuZXdQYXRoLCBpbnB1dCwgY29uZmlnLCByb290RG9jdW1lbnQsIHN0YXJ0VGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQgeyByYW5kb21VVUlEIH07XG4iLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLThdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMHxmZmZmZmZmZi1mZmZmLWZmZmYtZmZmZi1mZmZmZmZmZmZmZmYpJC9pO1xuIiwibGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY3J5cHRvID09PSAndW5kZWZpbmVkJyB8fCAhY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGdldFJhbmRvbVZhbHVlcyA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn1cbiIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICAgIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAgIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gICAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7XG4gICAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICAgIH1cbiAgICByZXR1cm4gdXVpZDtcbn1cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTtcbiIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICAgIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICAgIH1cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcbiAgICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gICAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuICAgIGlmIChidWYpIHtcbiAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVmO1xuICAgIH1cbiAgICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuZXhwb3J0IGRlZmF1bHQgdjQ7XG4iLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XG4gIGZpbmRQYWdlTWV0YSxcbiAgZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0LFxuICBpc0Zyb21Qb3B1cCxcbiAgc2hvdWxkRXhjbHVkZSxcbiAgZ2VuZXJhdGVIdG1sU25hcHNob3RJZCxcbiAgcHJvY2Vzc1JlY2lwZVxufSBmcm9tICcuL3V0aWxzL3V0aWwnXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJ1xuaW1wb3J0IHsgZmluZGVyIH0gZnJvbSAnQG1lZHYvZmluZGVyJ1xuLy8gZXh0ZW5kIHdpbmRvd1xuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBtb25rZXlQYXRjaGVkOiBib29sZWFuXG4gICAgc2hvdWxkRXhjbHVkZTogYm9vbGVhblxuICB9XG59XG5cbmNvbnN0IHdvcmsgPSAoKSA9PiB7XG4gIGNvbnN0IG1vbmtleVBhdGNoID0gKCkgPT4ge1xuICAgIHdpbmRvdy5tb25rZXlQYXRjaGVkID0gdHJ1ZVxuICAgIGNvbnN0IG9yaWdpbmFsQWRkRXZlbnRMaXN0ZW5lciA9IEV2ZW50VGFyZ2V0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyXG5cbiAgICAvLyBBZGQgdGhpcyBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG4gICAgY29uc3QgVGltZU91dCA9IDMwMDAwXG5cbiAgICBmdW5jdGlvbiBjYXB0dXJlSW50ZXJhY3Rpb24oXG4gICAgICBldmVudFR5cGU6IHN0cmluZyxcbiAgICAgIHRhcmdldDogYW55LFxuICAgICAgdGltZXN0YW1wOiBzdHJpbmcsXG4gICAgICBzZWxlY3Rvcjogc3RyaW5nLFxuICAgICAgdXJsOiBzdHJpbmcsXG4gICAgICB1dWlkOiBzdHJpbmdcbiAgICApIHtcbiAgICAgIGZ1bmN0aW9uIGZpbmRDbGlja2FibGVQYXJlbnQoXG4gICAgICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCxcbiAgICAgICAgZGVwdGg6IG51bWJlciA9IDAsXG4gICAgICAgIGFsbEF0dHJpYnV0ZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fVxuICAgICAgKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XG4gICAgICAgIC8vIEJhc2UgY2FzZTogaWYgZWxlbWVudCBpcyBudWxsIG9yIHdlJ3ZlIHJlYWNoZWQgbWF4IGRlcHRoXG4gICAgICAgIGlmICghZWxlbWVudCB8fCBkZXB0aCA+PSAxNSkgcmV0dXJuIGFsbEF0dHJpYnV0ZXNcblxuICAgICAgICAvLyBDaGVjayBhbmQgY29sbGVjdCBhbGwgcmVsZXZhbnQgYXR0cmlidXRlcyBhdCBjdXJyZW50IGxldmVsXG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnKSkge1xuICAgICAgICAgIGFsbEF0dHJpYnV0ZXNbJ2RhdGEtY2xpY2thYmxlLWlkJ10gPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnKSB8fCAnJ1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtbmFtZScpKSB7XG4gICAgICAgICAgYWxsQXR0cmlidXRlc1snZGF0YS1lbGVtZW50LW1ldGEtbmFtZSddID1cbiAgICAgICAgICAgIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJykgfHwgJydcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnKSkge1xuICAgICAgICAgIGFsbEF0dHJpYnV0ZXNbJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnXSA9XG4gICAgICAgICAgICBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtZGF0YScpIHx8ICcnXG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb250aW51ZSBzZWFyY2hpbmcgdXAgdGhlIHRyZWUsIHBhc3NpbmcgYWxvbmcgY29sbGVjdGVkIGF0dHJpYnV0ZXNcbiAgICAgICAgcmV0dXJuIGZpbmRDbGlja2FibGVQYXJlbnQoZWxlbWVudC5wYXJlbnRFbGVtZW50LCBkZXB0aCArIDEsIGFsbEF0dHJpYnV0ZXMpXG4gICAgICB9XG4gICAgICBjb25zdCBzaW1wbGlmaWVkSFRNTCA9IHByb2Nlc3NSZWNpcGUoKVxuICAgICAgY29uc3QgcGFnZU1ldGEgPSBmaW5kUGFnZU1ldGEoKVxuICAgICAgY29uc3QgYWxsQXR0cmlidXRlcyA9IGZpbmRDbGlja2FibGVQYXJlbnQodGFyZ2V0IGFzIEhUTUxFbGVtZW50KVxuICAgICAgLy8gR2VuZXJhdGUgbmV3IEhUTUwgc25hcHNob3QgSURcbiAgICAgIGNvbnN0IGN1cnJlbnRTbmFwc2hvdElkID0gZ2VuZXJhdGVIdG1sU25hcHNob3RJZCh0aW1lc3RhbXAsIHV1aWQpXG5cbiAgICAgIC8vIENyZWF0ZSBhIHNlcmlhbGl6YWJsZSB2ZXJzaW9uIG9mIHRoZSB0YXJnZXRcbiAgICAgIGNvbnN0IHNlcmlhbGl6ZWRUYXJnZXQgPSB7XG4gICAgICAgIHRhZ05hbWU6IHRhcmdldC50YWdOYW1lLFxuICAgICAgICBjbGFzc05hbWU6IHRhcmdldC5jbGFzc05hbWUsXG4gICAgICAgIGlkOiB0YXJnZXQuaWQsXG4gICAgICAgIGlubmVyVGV4dDogdGFyZ2V0LmlubmVyVGV4dCB8fCB0YXJnZXQudmFsdWUgfHwgJycsXG4gICAgICAgIG91dGVySFRNTDogdGFyZ2V0Lm91dGVySFRNTFxuICAgICAgfVxuXG4gICAgICBjb25zdCBtYXJrZWREb2MgPSBnZXRDbGlja2FibGVFbGVtZW50c0luVmlld3BvcnQoKVxuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgZXZlbnRUeXBlLFxuICAgICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcCxcbiAgICAgICAgdXVpZDogdXVpZCxcbiAgICAgICAgdGFyZ2V0OiBzZXJpYWxpemVkVGFyZ2V0LCAvLyBSZXBsYWNlIGRpcmVjdCBET00gZWxlbWVudCB3aXRoIHNlcmlhbGl6YWJsZSBvYmplY3RcbiAgICAgICAgaHRtbFNuYXBzaG90SWQ6IGN1cnJlbnRTbmFwc2hvdElkLFxuICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3IgfHwgJycsXG4gICAgICAgICdkYXRhLXNlbWFudGljLWlkJzogYWxsQXR0cmlidXRlc1snZGF0YS1jbGlja2FibGUtaWQnXSB8fCAnJyxcbiAgICAgICAgJ2VsZW1lbnQtbWV0YS1uYW1lJzogYWxsQXR0cmlidXRlc1snZGF0YS1lbGVtZW50LW1ldGEtbmFtZSddIHx8ICcnLFxuICAgICAgICAnZWxlbWVudC1tZXRhLWRhdGEnOiBhbGxBdHRyaWJ1dGVzWydkYXRhLWVsZW1lbnQtbWV0YS1kYXRhJ10gfHwgJycsXG4gICAgICAgICdwYWdlLW1ldGEnOiBwYWdlTWV0YSB8fCAnJyxcbiAgICAgICAgdXJsOiB1cmwgfHwgJycsXG4gICAgICAgIGh0bWxDb250ZW50OiBtYXJrZWREb2MuZG9jdW1lbnRFbGVtZW50Lm91dGVySFRNTCxcbiAgICAgICAgc2ltcGxpZmllZEhUTUw6IHNpbXBsaWZpZWRIVE1MXG4gICAgICB9XG4gICAgICBpZiAodGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCcgJiYgdGFyZ2V0LnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICBkYXRhWydpbnB1dC10ZXJtcyddID0gdGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgICBpZiAodGFyZ2V0LmlkID09PSAnbmF2LXNlYXJjaC1zdWJtaXQtYnV0dG9uJyAmJiB0YXJnZXQudHlwZSA9PT0gJ3N1Ym1pdCcpIHtcbiAgICAgICAgZGF0YVsnaW5wdXQtdGVybXMnXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwidHdvdGFic2VhcmNodGV4dGJveFwiXScpPy52YWx1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG4gICAgLy8gdG9kbzogcGF0Y2ggcmVtb3ZlRXZlbnRMaXN0ZW5lciBzdXBwb3J0IHdyYXBcbiAgICAvLyBjb25zdCBibG9ja1NpZ25hbHMgPSB7fVxuICAgIC8vIGNvbnN0IGZpbmlzaFNpZ25hbHMgPSB7fVxuICAgIGNvbnN0IHdhaXRfZm9yX2Fib3J0ID0gKHNpZ25hbCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgaWYgKHNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAgICAgLy8gSWYgYWxyZWFkeSBhYm9ydGVkLCByZXNvbHZlIGltbWVkaWF0ZWx5XG4gICAgICAgICAgcmVzb2x2ZSh2b2lkIDApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlLCBsaXN0ZW4gZm9yIHRoZSBhYm9ydCBldmVudFxuICAgICAgICAgIHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsICgpID0+IHJlc29sdmUodm9pZCAwKSwgeyBvbmNlOiB0cnVlIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgaGFzRGVmYXVsdEFjdGlvbiA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnRcbiAgICAgIGNvbnN0IGFuY2hvciA9IGVsZW1lbnQuY2xvc2VzdCgnYScpXG4gICAgICBpZiAoYW5jaG9yKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICAvLyBpZiBpZCBpcyBuYXYtc2VhcmNoLXN1Ym1pdC1idXR0b25cbiAgICAgIC8vIGlmIChlbGVtZW50LmlkID09PSAnbmF2LXNlYXJjaC1zdWJtaXQtYnV0dG9uJykge1xuICAgICAgLy8gICByZXR1cm4gdHJ1ZVxuICAgICAgLy8gfVxuXG4gICAgICBpZiAoZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ3N1Ym1pdCcpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgLy8gTW9ua2V5IHBhdGNoIGFkZEV2ZW50TGlzdGVuZXJcbiAgICBFdmVudFRhcmdldC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnNraXBfbW9ua2V5X3BhdGNoKSB7XG4gICAgICAgIHJldHVybiBvcmlnaW5hbEFkZEV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLCB0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucylcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNhbGxPcmlnaW5hbExpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KVxuICAgICAgICB9IGVsc2UgaWYgKGxpc3RlbmVyICYmIHR5cGVvZiBsaXN0ZW5lci5oYW5kbGVFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZUV2ZW50LmNhbGwobGlzdGVuZXIsIGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlID09PSAnY2xpY2snICYmIGxpc3RlbmVyKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZWRMaXN0ZW5lciA9IGFzeW5jIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGlmICh3aW5kb3cuc2hvdWxkRXhjbHVkZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Nob3VsZCBleGNsdWRlJylcbiAgICAgICAgICAgIGNhbGxPcmlnaW5hbExpc3RlbmVyKGV2ZW50KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudFxuICAgICAgICAgIGlmIChpc0Zyb21Qb3B1cCh0YXJnZXQpKSB7XG4gICAgICAgICAgICBjYWxsT3JpZ2luYWxMaXN0ZW5lcihldmVudClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZXZlbnQuanVzdF9mb3JfZGVmYXVsdCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NraXAgbW9ua2V5IHBhdGNoJylcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBBZGQgZGVib3VuY2luZyBsb2dpY1xuICAgICAgICAgIGlmIChldmVudC5ibG9ja19zaWduYWwpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgICAgICAgICAgIGV2ZW50LmZpbmlzaF9zaWduYWxzLnB1c2goY29udHJvbGxlcilcbiAgICAgICAgICAgIGlmIChldmVudC5ibG9ja19zaWduYWwpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc2lnbmFsID0gZXZlbnQuYmxvY2tfc2lnbmFsLnNpZ25hbFxuICAgICAgICAgICAgICBhd2FpdCB3YWl0X2Zvcl9hYm9ydChzaWduYWwpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBEZWJvdW5jaW5nIGNsaWNrIGV2ZW50LCB1bmJsb2NraW5nJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBEZWJvdW5jaW5nIGNsaWNrIGV2ZW50LCBubyBibG9jayBzaWduYWwnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KVxuICAgICAgICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lciAmJiB0eXBlb2YgbGlzdGVuZXIuaGFuZGxlRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgbGlzdGVuZXIuaGFuZGxlRXZlbnQuY2FsbChsaXN0ZW5lciwgZXZlbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250cm9sbGVyLmFib3J0KClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBldmVudC5ibG9ja19zaWduYWwgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgICAgICAgICBldmVudC5maW5pc2hfc2lnbmFscyA9IFtdXG5cbiAgICAgICAgICBjb25zb2xlLmxvZygnW01vbmtleSBQYXRjaF0gQ2xpY2sgZGV0ZWN0ZWQgb246JywgZXZlbnQudGFyZ2V0KVxuICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICAgICAgICAgIC8vIGNvbnN0IGFuY2hvciA9IHRhcmdldC5jbG9zZXN0KCdhJylcbiAgICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpXG4gICAgICAgICAgaWYgKGhhc0RlZmF1bHRBY3Rpb24oZXZlbnQpKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnW01vbmtleSBQYXRjaF0gQ2xpY2sgb24gPGE+IHRhZzonLCBhbmNob3IuaHJlZilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBDbGljayBvbiBjYW5jZWxhYmxlJylcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICBldmVudC5teV9kZWZhdWx0X3ByZXZlbnRlZCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50Lm15X2RlZmF1bHRfcHJldmVudGVkID0gZmFsc2VcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZnRlciBwYXRjaCBldmVudCcsIGV2ZW50KVxuICAgICAgICAgICAgLy8gY29uc3QgdGFyZ2V0SHJlZiA9IGFuY2hvci5ocmVmXG4gICAgICAgICAgICBjb25zdCB1dWlkID0gdXVpZHY0KClcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGNvbnN0IHNjcmVlbnNob3RDb21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50eXBlID09PSAnU0NSRUVOU0hPVF9DT01QTEVURScgJiZcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcFxuICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXZlbnQuZGF0YS5lcnJvciB8fCAnU2NyZWVuc2hvdCBmYWlsZWQnKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpXG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgdGltZW91dFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignU2NyZWVuc2hvdCB0aW1lb3V0JykpXG4gICAgICAgICAgICAgICAgfSwgVGltZU91dClcbiAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICBjb25zdCBpbnRlcmFjdGlvbkNvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UxKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50eXBlID09PSAnSU5URVJBQ1RJT05fQ09NUExFVEUnICYmXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudGltZXN0YW1wID09PSB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdJbnRlcmFjdGlvbiBmYWlsZWQnKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRpbWVvdXRcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG4gICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdJbnRlcmFjdGlvbiB0aW1lb3V0JykpXG4gICAgICAgICAgICAgICAgfSwgVGltZU91dClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLy8gbG9nIGJlZm9yZSBhbmQgYWZ0ZXIgdGltZVxuICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IGZpbmRlcihldmVudC50YXJnZXQsIHtcbiAgICAgICAgICAgICAgICBtYXhOdW1iZXJPZlBhdGhDaGVja3M6IDBcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGNhcHR1cmVJbnRlcmFjdGlvbihcbiAgICAgICAgICAgICAgICAnY2xpY2tfYScsXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICBzZWxlY3RvcixcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgICAgICB1dWlkXG4gICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgeyB0eXBlOiAnQ0FQVFVSRV9TQ1JFRU5TSE9UJywgdGltZXN0YW1wOiB0aW1lc3RhbXAsIHV1aWQ6IHV1aWQgfSxcbiAgICAgICAgICAgICAgICAnKidcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiAnU0FWRV9JTlRFUkFDVElPTl9EQVRBJywgZGF0YTogZGF0YSwgdXVpZDogdXVpZCB9LCAnKicpXG4gICAgICAgICAgICAgIC8vIGFsZXJ0KFwiM1wiKVxuICAgICAgICAgICAgICAvLyBXYWl0IGZvciBzY3JlZW5zaG90IHRvIGNvbXBsZXRlXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3YWl0aW5nIGZvciBzY3JlZW5zaG90IGFuZCBpbnRlcmFjdGlvbicpXG4gICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtzY3JlZW5zaG90Q29tcGxldGUsIGludGVyYWN0aW9uQ29tcGxldGVdKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2NyZWVuc2hvdCBhbmQgaW50ZXJhY3Rpb24gY29tcGxldGUnKVxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvbXBsZXRlZFwiKVxuICAgICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgICAvLyBhbGVydChcIjJcIilcbiAgICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0YXJnZXRIcmVmXG4gICAgICAgICAgICAgIC8vIHJlLWRpc3BhdGNoIHRoZSBldmVudFxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygncnVubmluZyBvcmlnaW5hbCBsaXN0ZW5lcicpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpc3RlbmVyKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudClcbiAgICAgICAgICAgICAgZXZlbnQuYmxvY2tfc2lnbmFsLmFib3J0KClcbiAgICAgICAgICAgICAgLy8gYWJvcnQgYWxsIGZpbmlzaFNpZ25hbHNcbiAgICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICAgICAgZXZlbnQuZmluaXNoX3NpZ25hbHMubWFwKChjb250cm9sbGVyKSA9PiB3YWl0X2Zvcl9hYm9ydChjb250cm9sbGVyLnNpZ25hbCkpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgY2FsbE9yaWdpbmFsTGlzdGVuZXIoZXZlbnQpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdldmVudCcsIGV2ZW50KVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmUtZGlzcGF0Y2ggdGhlIGV2ZW50IGlmIGl0cyBub3QgcHJldmVudGVkLCAyJylcbiAgICAgICAgICAgICAgaWYgKCFldmVudC5teV9kZWZhdWx0X3ByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgLy8gQ2xvbmUgdGhlIG9yaWdpbmFsIGV2ZW50XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RXZlbnQgPSBuZXcgTW91c2VFdmVudChldmVudC50eXBlLCB7XG4gICAgICAgICAgICAgICAgICBidWJibGVzOiBldmVudC5idWJibGVzLFxuICAgICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsIC8vIEVuc3VyZXMgdGhlIGRlZmF1bHQgYmVoYXZpb3Igb2NjdXJzXG4gICAgICAgICAgICAgICAgICBjb21wb3NlZDogZXZlbnQuY29tcG9zZWQsXG4gICAgICAgICAgICAgICAgICB2aWV3OiBldmVudC52aWV3LFxuICAgICAgICAgICAgICAgICAgZGV0YWlsOiBldmVudC5kZXRhaWwsXG4gICAgICAgICAgICAgICAgICBzY3JlZW5YOiBldmVudC5zY3JlZW5YLFxuICAgICAgICAgICAgICAgICAgc2NyZWVuWTogZXZlbnQuc2NyZWVuWSxcbiAgICAgICAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxuICAgICAgICAgICAgICAgICAgY3RybEtleTogZXZlbnQuY3RybEtleSxcbiAgICAgICAgICAgICAgICAgIGFsdEtleTogZXZlbnQuYWx0S2V5LFxuICAgICAgICAgICAgICAgICAgc2hpZnRLZXk6IGV2ZW50LnNoaWZ0S2V5LFxuICAgICAgICAgICAgICAgICAgbWV0YUtleTogZXZlbnQubWV0YUtleSxcbiAgICAgICAgICAgICAgICAgIGJ1dHRvbjogZXZlbnQuYnV0dG9uLFxuICAgICAgICAgICAgICAgICAgYnV0dG9uczogZXZlbnQuYnV0dG9ucyxcbiAgICAgICAgICAgICAgICAgIHJlbGF0ZWRUYXJnZXQ6IGV2ZW50LnJlbGF0ZWRUYXJnZXRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIG5ld0V2ZW50Lmp1c3RfZm9yX2RlZmF1bHQgPSB0cnVlXG5cbiAgICAgICAgICAgICAgICAvLyBSZS1kaXNwYXRjaCB0aGUgbmV3IGV2ZW50XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3RXZlbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCB1dWlkID0gdXVpZHY0KClcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgcHJvbWlzZSB0byB3YWl0IGZvciBzY3JlZW5zaG90IGNvbXBsZXRpb25cbiAgICAgICAgICAgIGNvbnN0IHNjcmVlbnNob3RDb21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudDogTWVzc2FnZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50eXBlID09PSAnU0NSRUVOU0hPVF9DT01QTEVURScgJiZcbiAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudGltZXN0YW1wID09PSB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV2ZW50LmRhdGEuZXJyb3IgfHwgJ1NjcmVlbnNob3QgZmFpbGVkJykpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcblxuICAgICAgICAgICAgICAvLyBBZGQgdGltZW91dFxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignU2NyZWVuc2hvdCB0aW1lb3V0JykpXG4gICAgICAgICAgICAgIH0sIFRpbWVPdXQpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGNhcHR1cmVJbnRlcmFjdGlvbihcbiAgICAgICAgICAgICAgJ2NsaWNrX2InLFxuICAgICAgICAgICAgICBldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgIHRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgZmluZGVyKGV2ZW50LnRhcmdldCwge1xuICAgICAgICAgICAgICAgIG1heE51bWJlck9mUGF0aENoZWNrczogMFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICAgIHV1aWRcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC8vIFJlcXVlc3Qgc2NyZWVuc2hvdFxuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKFxuICAgICAgICAgICAgICB7IHR5cGU6ICdDQVBUVVJFX1NDUkVFTlNIT1QnLCB0aW1lc3RhbXA6IHRpbWVzdGFtcCwgdXVpZDogdXVpZCB9LFxuICAgICAgICAgICAgICAnKidcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6ICdTQVZFX0lOVEVSQUNUSU9OX0RBVEEnLCBkYXRhOiBkYXRhLCB1dWlkOiB1dWlkIH0sICcqJylcbiAgICAgICAgICAgIGNvbnN0IGludGVyYWN0aW9uQ29tcGxldGUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UxKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnR5cGUgPT09ICdJTlRFUkFDVElPTl9DT01QTEVURScgJiZcbiAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudGltZXN0YW1wID09PSB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG4gICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdJbnRlcmFjdGlvbiBmYWlsZWQnKSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSlcblxuICAgICAgICAgICAgICAvLyBBZGQgdGltZW91dFxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0ludGVyYWN0aW9uIHRpbWVvdXQnKSlcbiAgICAgICAgICAgICAgfSwgVGltZU91dClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBXYWl0IGZvciBzY3JlZW5zaG90IHRvIGNvbXBsZXRlXG4gICAgICAgICAgICAvLyBhd2FpdCBBU3NjcmVlbnNob3RDb21wbGV0ZVxuICAgICAgICAgICAgLy8gYXdhaXQgaW50ZXJhY3Rpb25Db21wbGV0ZVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3dhaXRpbmcgZm9yIHNjcmVlbnNob3QgYW5kIGludGVyYWN0aW9uJylcbiAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtzY3JlZW5zaG90Q29tcGxldGUsIGludGVyYWN0aW9uQ29tcGxldGVdKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NjcmVlbnNob3QgYW5kIGludGVyYWN0aW9uIGNvbXBsZXRlJylcbiAgICAgICAgICAgIC8vIEV4ZWN1dGUgb3JpZ2luYWwgbGlzdGVuZXIgYWZ0ZXIgc2NyZWVuc2hvdCBpcyBjYXB0dXJlZFxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYXB0dXJpbmcgc2NyZWVuc2hvdDonLCBlcnJvcilcbiAgICAgICAgICAgIC8vIEV4ZWN1dGUgb3JpZ2luYWwgbGlzdGVuZXIgZXZlbiBpZiBzY3JlZW5zaG90IGZhaWxzXG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdydW5uaW5nIG9yaWdpbmFsIGxpc3RlbmVyJylcbiAgICAgICAgICAgIGV2ZW50LmJsb2NrX3NpZ25hbC5hYm9ydCgpXG4gICAgICAgICAgICAvLyBhYm9ydCBhbGwgZmluaXNoU2lnbmFsc1xuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICAgIGV2ZW50LmZpbmlzaF9zaWduYWxzLm1hcCgoY29udHJvbGxlcikgPT4gd2FpdF9mb3JfYWJvcnQoY29udHJvbGxlci5zaWduYWwpKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY2FsbE9yaWdpbmFsTGlzdGVuZXIoZXZlbnQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsbCB0aGUgb3JpZ2luYWwgYWRkRXZlbnRMaXN0ZW5lciB3aXRoIHRoZSB3cmFwcGVkIGxpc3RlbmVyXG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgLy8gaWYgYm9vbGVhbiwgc2V0IHBhc3NpdmUgdG8gdHJ1ZVxuICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgICB1c2VDYXB0dXJlOiBmYWxzZSxcbiAgICAgICAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgb3B0aW9ucy5wYXNzaXZlID0gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsQWRkRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIHR5cGUsIHdyYXBwZWRMaXN0ZW5lciwgb3B0aW9ucylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIENhbGwgdGhlIG9yaWdpbmFsIGFkZEV2ZW50TGlzdGVuZXIgZm9yIG5vbi1jbGljayBldmVudHNcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsQWRkRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBhZGRFdmVudExpc3RlbmVyIHN1Y2Nlc3NmdWxseSBwYXRjaGVkLicpXG5cbiAgICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgY2xpY2tzIG9uIDxhPiB0YWdzXG4gICAgZnVuY3Rpb24gaGFuZGxlQW5jaG9yQ2xpY2tzKCkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5zaG91bGRFeGNsdWRlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2hvdWxkIGV4Y2x1ZGUnKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpc0Zyb21Qb3B1cChldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGV2ZW50Lmp1c3RfZm9yX2RlZmF1bHQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdza2lwIG1vbmtleSBwYXRjaCBiJylcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBGaW5kIHRoZSBjbG9zZXN0IDxhPiB0YWcgaW4gY2FzZSBvZiBuZXN0ZWQgZWxlbWVudHMgaW5zaWRlIHRoZSA8YT5cbiAgICAgICAgICAvLyBjb25zdCBhbmNob3IgPSB0YXJnZXQuY2xvc2VzdCgnYScpXG5cbiAgICAgICAgICBpZiAoaGFzRGVmYXVsdEFjdGlvbihldmVudCkpIHtcbiAgICAgICAgICAgIC8vIEFkZCBkZWJvdW5jaW5nIGxvZ2ljXG4gICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgICAgICAgICBpZiAoZXZlbnQuYmxvY2tfc2lnbmFsKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBBbmNob3IgY2xpY2sgZXZlbnQgaGFuZGVyIGZyb20gb3VyIG93biBsaXN0ZW5lcicpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaG91bGQgYWxyZWFkeSBiZSBsb2dnZWQgaW4gb3RoZXIgZXZlbnQgbGlzdGVuZXJzJylcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudC5ibG9ja19zaWduYWwgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgICAgICAgICAgIGV2ZW50LmZpbmlzaF9zaWduYWxzID0gW11cblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnW0ludGVyY2VwdGVkXSBDbGljayBvbiA8YT4gdGFnOicsIGFuY2hvci5ocmVmKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tJbnRlcmNlcHRlZF0gQ2xpY2sgb24gY2FuY2VsYWJsZScpXG4gICAgICAgICAgICAvLyBpZiAoIWFuY2hvci5ocmVmLnN0YXJ0c1dpdGgoJ2phdmFzY3JpcHQ6JykpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICAgICAgICAgIC8vIGNvbnN0IHRhcmdldEhyZWYgPSBhbmNob3IuaHJzdGFydFBlcmlvZGljVXBsb2FkZWZcbiAgICAgICAgICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgLy8g55uR5ZCs5oiq5Zu+5a6M5oiQ55qE5raI5oGvXG4gICAgICAgICAgICAgIGNvbnN0IHNjcmVlbnNob3RDb21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50eXBlID09PSAnU0NSRUVOU0hPVF9DT01QTEVURScgJiZcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcFxuICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXZlbnQuZGF0YS5lcnJvciB8fCAnU2NyZWVuc2hvdCBmYWlsZWQnKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UsIHtcbiAgICAgICAgICAgICAgICAgIGNhcHR1cmU6IHRydWVcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgLy8g5re75Yqg6LaF5pe25aSE55CGXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdTY3JlZW5zaG90IHRpbWVvdXQnKSlcbiAgICAgICAgICAgICAgICB9LCBUaW1lT3V0KSAvLyAz56eS6LaF5pe2XG4gICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgLy8g5Y+R6YCB5oiq5Zu+6K+35rGCXG4gICAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgICAgICAgICAgICB7IHR5cGU6ICdDQVBUVVJFX1NDUkVFTlNIT1QnLCB0aW1lc3RhbXA6IHRpbWVzdGFtcCwgdXVpZDogdXVpZCB9LFxuICAgICAgICAgICAgICAgICcqJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBjYXB0dXJlSW50ZXJhY3Rpb24oXG4gICAgICAgICAgICAgICAgJ2NsaWNrX2MnLFxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXAsXG4gICAgICAgICAgICAgICAgZmluZGVyKHRhcmdldCwge1xuICAgICAgICAgICAgICAgICAgbWF4TnVtYmVyT2ZQYXRoQ2hlY2tzOiAwXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICAgICAgdXVpZFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6ICdTQVZFX0lOVEVSQUNUSU9OX0RBVEEnLCBkYXRhOiBkYXRhLCB1dWlkOiB1dWlkIH0sICcqJylcbiAgICAgICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25Db21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlMShldmVudDogTWVzc2FnZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudHlwZSA9PT0gJ0lOVEVSQUNUSU9OX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnRpbWVzdGFtcCA9PT0gdGltZXN0YW1wXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXZlbnQuZGF0YS5lcnJvciB8fCAnSW50ZXJhY3Rpb24gZmFpbGVkJykpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSlcblxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aW1lb3V0XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignSW50ZXJhY3Rpb24gdGltZW91dCcpKVxuICAgICAgICAgICAgICAgIH0sIFRpbWVPdXQpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC8vIOetieW+heaIquWbvuWujOaIkFxuICAgICAgICAgICAgICBhd2FpdCBzY3JlZW5zaG90Q29tcGxldGVcbiAgICAgICAgICAgICAgYXdhaXQgaW50ZXJhY3Rpb25Db21wbGV0ZVxuXG4gICAgICAgICAgICAgIC8vIOaIquWbvuehruiupOWujOaIkOWQjuWGjei3s+i9rFxuICAgICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRhcmdldEhyZWZcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhcHR1cmluZyBzY3JlZW5zaG90OicsIGVycm9yKVxuICAgICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRhcmdldEhyZWZcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIGV2ZW50LmJsb2NrX3NpZ25hbC5hYm9ydCgpXG4gICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICAgICAgICAgIGV2ZW50LmZpbmlzaF9zaWduYWxzLm1hcCgoY29udHJvbGxlcikgPT4gd2FpdF9mb3JfYWJvcnQoY29udHJvbGxlci5zaWduYWwpKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZS1kaXNwYXRjaCB0aGUgZXZlbnQgaWYgaXRzIG5vdCBwcmV2ZW50ZWQsIDEnKVxuICAgICAgICAgICAgICBpZiAoIWV2ZW50Lm15X2RlZmF1bHRfcHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2xvbmUgdGhlIG9yaWdpbmFsIGV2ZW50XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RXZlbnQgPSBuZXcgTW91c2VFdmVudChldmVudC50eXBlLCB7XG4gICAgICAgICAgICAgICAgICBidWJibGVzOiBldmVudC5idWJibGVzLFxuICAgICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsIC8vIEVuc3VyZXMgdGhlIGRlZmF1bHQgYmVoYXZpb3Igb2NjdXJzXG4gICAgICAgICAgICAgICAgICBjb21wb3NlZDogZXZlbnQuY29tcG9zZWQsXG4gICAgICAgICAgICAgICAgICB2aWV3OiBldmVudC52aWV3LFxuICAgICAgICAgICAgICAgICAgZGV0YWlsOiBldmVudC5kZXRhaWwsXG4gICAgICAgICAgICAgICAgICBzY3JlZW5YOiBldmVudC5zY3JlZW5YLFxuICAgICAgICAgICAgICAgICAgc2NyZWVuWTogZXZlbnQuc2NyZWVuWSxcbiAgICAgICAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxuICAgICAgICAgICAgICAgICAgY3RybEtleTogZXZlbnQuY3RybEtleSxcbiAgICAgICAgICAgICAgICAgIGFsdEtleTogZXZlbnQuYWx0S2V5LFxuICAgICAgICAgICAgICAgICAgc2hpZnRLZXk6IGV2ZW50LnNoaWZ0S2V5LFxuICAgICAgICAgICAgICAgICAgbWV0YUtleTogZXZlbnQubWV0YUtleSxcbiAgICAgICAgICAgICAgICAgIGJ1dHRvbjogZXZlbnQuYnV0dG9uLFxuICAgICAgICAgICAgICAgICAgYnV0dG9uczogZXZlbnQuYnV0dG9ucyxcbiAgICAgICAgICAgICAgICAgIHJlbGF0ZWRUYXJnZXQ6IGV2ZW50LnJlbGF0ZWRUYXJnZXRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIG5ld0V2ZW50Lmp1c3RfZm9yX2RlZmF1bHQgPSB0cnVlXG5cbiAgICAgICAgICAgICAgICAvLyBSZS1kaXNwYXRjaCB0aGUgbmV3IGV2ZW50XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3RXZlbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB1c2VDYXB0dXJlOiB0cnVlLFxuICAgICAgICAgIHNraXBfbW9ua2V5X3BhdGNoOiB0cnVlLFxuICAgICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICkgLy8gVXNlIGNhcHR1cmUgcGhhc2UgdG8gaW50ZXJjZXB0IHRoZSBldmVudCBlYXJsaWVyXG4gICAgfVxuXG4gICAgLy8gQ2FsbCB0aGUgZnVuY3Rpb24gdG8gaGFuZGxlIDxhPiB0YWcgY2xpY2tzXG4gICAgaGFuZGxlQW5jaG9yQ2xpY2tzKClcbiAgfVxuICBpZiAoIXdpbmRvdy5tb25rZXlQYXRjaGVkKSB7XG4gICAgbW9ua2V5UGF0Y2goKVxuICB9XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ0RPTUNvbnRlbnRMb2FkZWQnLFxuICAgICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdET01Db250ZW50TG9hZGVkJylcbiAgICAgIHNob3VsZEV4Y2x1ZGUod2luZG93LmxvY2F0aW9uLmhyZWYpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnc2hvdWxkRXhjbHVkZScsIHJlc3VsdClcbiAgICAgICAgd2luZG93LnNob3VsZEV4Y2x1ZGUgPSByZXN1bHRcbiAgICAgIH0pXG4gICAgfSxcbiAgICB7XG4gICAgICBvbmNlOiB0cnVlXG4gICAgfVxuICApXG59XG5cbi8vIGlnbm9yZSB1c2VyIGlkIGZvciBub3csIGJlY2F1c2UgZnVsbCBjaGVjayB3b3VsZCBiZSBhc3luYy5cbnNob3VsZEV4Y2x1ZGUod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICBpZiAoIXJlc3VsdCkge1xuICAgIHdvcmsoKVxuICB9XG59KVxuIl0sIm5hbWVzIjpbInBvcHVwX3Byb2JhYmlsaXR5IiwicG9wdXBfc2Nyb2xsX3Byb2JhYmlsaXR5IiwicG9wdXBfY2xpY2tfcHJvYmFiaWxpdHkiLCJwb3B1cF9uYXZpZ2F0aW9uX3Byb2JhYmlsaXR5IiwicG9wdXBfdGFiQWN0aXZhdGVfcHJvYmFiaWxpdHkiLCJmb2xkZXJfbmFtZSIsInppcCIsInVwbG9hZF91cmwiLCJiYXNlX3VybCIsImRhdGFfY29sbGVjdG9yX3NlY3JldF9pZCIsInVybF9pbmNsdWRlcyIsImludGVyYWN0aW9uX3N0YXR1c191cmwiLCJjb25jYXQiLCJjaGVja191c2VyX2lkX3VybCIsImZpbHRlcl91cmwiLCJzY3JvbGxfdGhyZXNob2xkIiwibmF2Iiwic2VsZWN0b3IiLCJuYW1lIiwiY2hpbGRyZW4iLCJjbGlja2FibGUiLCJnZW5lcmF0ZV9tZXRhZGF0YSIsImVtIiwidGVybSIsInZhbHVlIiwiZGF0YSIsInRleHRfc2VsZWN0b3IiLCJhZGRfdGV4dCIsInJlZmluZW1lbnRfb3B0aW9uIiwiZGlyZWN0X2NoaWxkIiwidGV4dF9qcyIsImVsZW1lbnQiLCJ0ZXh0IiwiYUNoaWxkIiwicXVlcnlTZWxlY3RvciIsImlubmVyVGV4dCIsInRyaW0iLCJoYXNBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJlIiwiY29uc29sZSIsImxvZyIsIl9lbGVtZW50JGNsb3Nlc3QiLCJfbmFtZUVtJGlubmVyVGV4dCIsIl90ZXh0MiIsIm5hbWVFbSIsImNsb3Nlc3QiLCJwYXJlbnRFbGVtZW50IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJ1cmwiLCJfdGV4dCIsInRpdGxlIiwic2VsZWN0ZWQiLCJfZWxlbWVudCRjbG9zZXN0MiIsIl9uYW1lRW0kaW5uZXJUZXh0MiIsIl90ZXh0NCIsIl90ZXh0MyIsInByb2R1Y3RfZmFjdHMiLCJwcm9kdWN0X2RlbGl2ZXJ5IiwicXVhbnRpdHlfc2VsZWN0b3IiLCJ1c2Vfcm9vdCIsInRleHRfZm9ybWF0IiwiZGVsaXZlcnlfZnJlcXVlbmN5X3NlbGVjdG9yIiwic2V0X3VwX25vd19idXR0b24iLCJhZGRfdG9fY2FydF9idXR0b24iLCJidXlfbm93X2J1dHRvbiIsImJ1eV9ib3hfd2l0aF9hY2NvcmRpb24iLCJidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX2RlbGl2ZXJ5IiwiYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9waWNrX3VwIiwiY2FydCIsIl9lbSRwYXJlbnRFbGVtZW50IiwiX3ByaWNlRW0kaW5uZXJUZXh0IiwiYXNpbiIsInByaWNlRW0iLCJwcmljZSIsInRpdGxlRW0iLCJ1cmxFbSIsImRlbGl2ZXJ5RW0iLCJkZWxpdmVyeSIsInF1YW50aXR5RW0iLCJxdWFudGl0eSIsInNlbGVjdGVkRW0iLCJmcmVzaF9jYXJ0IiwiX2VtJHBhcmVudEVsZW1lbnQyIiwiX3ByaWNlRW0kaW5uZXJUZXh0MiIsImJ1eV9hZ2FpbiIsIl9lbSRjbG9zZXN0IiwiX25hbWVFbSRpbm5lclRleHQzIiwiaW5wdXQiLCJjaGVja2VkIiwiX3ByaWNlRW0kaW5uZXJUZXh0MyIsImFzaW5FbSIsIl9lbSRwYXJlbnRFbGVtZW50MyIsIl9wcmljZUVtJGlubmVyVGV4dDQiLCJfZW0kcGFyZW50RWxlbWVudDQiLCJfZW0kcGFyZW50RWxlbWVudDUiLCJfZW0kcGFyZW50RWxlbWVudDYiLCJfYXNpbkVtMiIsIl9wcmljZUVtJGlubmVyVGV4dDUiLCJfZW0kcGFyZW50RWxlbWVudDciLCJfZW0kcGFyZW50RWxlbWVudDgiLCJfYXNpbkVtMyIsIl9lbSRjbG9zZXN0MiIsIl9wYXJlbnRUaXRsZUVtJGlubmVyVCIsIl9wcmljZUVtJGlubmVyVGV4dDYiLCJwYXJlbnRUaXRsZUVtIiwicGFyZW50VGl0bGUiLCJyZWNpcGVzIiwibWF0Y2giLCJtYXRjaF9tZXRob2QiLCJtYXRjaF93aXRoX3JlZiIsIl9lbSRpbm5lclRleHQiLCJfZW0kaW5uZXJUZXh0MiIsIl9lbSRpbm5lclRleHQzIiwicmFuZ2UiLCJrZWVwX2F0dHIiLCJvdmVycmlkZV9hdHRyIiwic3RlcF92YWx1ZXMiLCJmb3JtRW0iLCJwcm9wIiwic3RlcHMiLCJKU09OIiwicGFyc2UiLCJzdGVwTGFiZWxzIiwiY3VycmVudF92YWx1ZSIsIk51bWJlciIsInBhcnNlSW50IiwiaW5zZXJ0X3NwbGl0X21hcmtlciIsImluc2VydF9zcGxpdF9tYXJrZXJfZXZlcnkiLCJjbGlja19zZWxlY3RvciIsIm1hdGNoX3RleHQiLCJfZW0kaW5uZXJUZXh0NCIsIl9lbSRpbm5lclRleHQ1IiwiX2VtJHF1ZXJ5U2VsZWN0b3IiLCJfZW0kcXVlcnlTZWxlY3RvcjIiLCJsYWJlbCIsImlubmVySFRNTCIsInVuZGVmaW5lZCIsIl9lbSRxdWVyeVNlbGVjdG9yMyIsIm9wdGlvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsIm9wdGlvbiIsImVyciIsImYiLCJpbWdDaGlsZCIsImFsdCIsIl9lbSRxdWVyeVNlbGVjdG9yNCIsIl9lbSRxdWVyeVNlbGVjdG9yNSIsIl9lbSRxdWVyeVNlbGVjdG9yNiIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJ0ZXh0RW0iLCJuZXh0RWxlbWVudFNpYmxpbmciLCJfZW0kcXVlcnlTZWxlY3RvcjciLCJfZW0kcXVlcnlTZWxlY3RvcjgiLCJfZW0kaW5uZXJUZXh0NiIsImJ1bGxldF9saXN0IiwidGVybWluYXRlIiwiYXJndW1lbnRzIiwidGVybWluYXRlX2NhbGxiYWNrIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJwcm9jZXNzRWxlbWVudCIsInJlY2lwZSIsInBhcmVudE5hbWUiLCJudGhDaGlsZCIsInRhZ05hbWUiLCJ0YWdfbmFtZSIsImVuZHNXaXRoIiwibmV3RWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImVsZW1lbnRUZXh0IiwidGV4dEVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImVsZW1lbnROYW1lIiwidG9TdHJpbmciLCJzZXRBdHRyaWJ1dGUiLCJtZXRhb2JqIiwibWV0YWRhdGEiLCJzdHJpbmdpZnkiLCJtZXRhbmFtZSIsImNsaWNrX2VsZW1lbnQiLCJ3aW5kb3ciLCJjbGlja2FibGVfcmVjaXBlcyIsImlucHV0VHlwZSIsImluY2x1ZGVzIiwiaW5wdXRfcmVjaXBlcyIsIl9lbGVtZW50JHBhcmVudEVsZW1lbiIsInNlbGVjdElkIiwibmFtZUlkIiwidGFnIiwibmV3VGFnIiwiYXBwZW5kQ2hpbGQiLCJfcmVmIiwiX2NhbGxlZSIsIm9wdGlvblZhbHVlIiwib3B0aW9uTmFtZSIsIm5ld09wdGlvbiIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJfeCIsImF0dHJzVG9Db3B5IiwiYXR0ciIsImtleSIsIl9sb29wIiwiY2hpbGRSZWNpcGUiLCJjaGlsZEVsZW1lbnRzIiwiY2hpbGRFbGVtZW50IiwiaW5kZXgiLCJjaGlsZE5vZGUiLCJldmVyeSIsInNwbGl0TWFya2VyIiwiZW1wdHlfbWVzc2FnZSIsImVtcHR5VGV4dE5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsIkFycmF5IiwiaXNBcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9uIiwiRiIsIl9hcnJheUxpa2VUb0FycmF5IiwiZnJvbSIsInRlc3QiLCJpc0Zyb21Qb3B1cCIsInVwZGF0ZV9pY29uIiwiX3VwZGF0ZV9pY29uIiwic2hvdWxkRXhjbHVkZSIsImNocm9tZSIsImFjdGlvbiIsInNldEljb24iLCJwYXRoIiwiZmluZFBhZ2VNZXRhIiwiYWxsX2VsZW1lbnRfd2l0aF9tZXRhX2RhdGEiLCJncm91cGVkUmVzdWx0IiwibWV0YU5hbWUiLCJtZXRhRGF0YSIsImdldENsaWNrYWJsZUVsZW1lbnRzSW5WaWV3cG9ydCIsImRvY3VtZW50Q29weSIsImNsb25lTm9kZSIsImFsbEVsZW1lbnRzIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJpbm5lckhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInJpZ2h0IiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwicmVtb3ZlQ2xpY2thYmxlTWFya2VycyIsInJlbW92ZUF0dHJpYnV0ZSIsIl94MiIsIl9zaG91bGRFeGNsdWRlIiwiX2NhbGxlZTIiLCJpZ25vcmVVc2VySWQiLCJyZXN1bHQiLCJ1c2VySWQiLCJfYXJnczIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJzdG9yYWdlIiwibG9jYWwiLCJnZXQiLCJoYW5kbGVNZXNzYWdlIiwiZXZlbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBvc3RNZXNzYWdlIiwic29tZSIsImluY2x1ZGVVcmwiLCJleGNsdWRlVXJsIiwiZ2VuZXJhdGVIdG1sU25hcHNob3RJZCIsInRpbWVzdGFtcCIsInV1aWQiLCJsb2NhdGlvbiIsImhyZWYiLCJoYXNoQ29kZSIsInN0ciIsImhhc2giLCJjaGFyQ29kZUF0IiwiY2hlY2tfdXNlcl9pZCIsIl94MyIsIl9jaGVja191c2VyX2lkIiwiX2NhbGxlZTMiLCJ1c2VyX2lkIiwicmVzcG9uc2UiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJmZXRjaCIsImpzb24iLCJvayIsInQwIiwibWVzc2FnZSIsInNlbGVjdFJlY2lwZSIsInBhcnNlZFVybCIsIlVSTCIsInBhdGhuYW1lIiwibWF0Y2hNZXRob2QiLCJfZWxlbWVudCR0ZXh0Q29udGVudCQiLCJfZWxlbWVudCR0ZXh0Q29udGVudCIsImhhc01hdGNoIiwiZXJyb3IiLCJzdGFydHNXaXRoIiwicHJvY2Vzc1JlY2lwZSIsInJvb3RFbGVtZW50IiwibmV3Um9vdCIsInNpbXBsaWZpZWRIVE1MIiwib3V0ZXJIVE1MIiwiZ2V0Q3VzdG9tUXVlc3Rpb24iLCJldmVudFR5cGUiLCJfZGF0YSRkYXRhU2VtYW50aWNJIiwiX2RhdGEkZGF0YVNlbWFudGljSTIiLCJfZGF0YSRkYXRhU2VtYW50aWNJMyIsIl9kYXRhJGRhdGFTZW1hbnRpY0k0IiwiX2RhdGEkdGFyZ2V0JGNsYXNzTmFtIiwiX2RhdGEkZGF0YVNlbWFudGljSTUiLCJfZGF0YSRkYXRhU2VtYW50aWNJNiIsIl9kYXRhJGRhdGFTZW1hbnRpY0k3IiwiX2RhdGEkZGF0YVNlbWFudGljSTgiLCJfZGF0YSRkYXRhU2VtYW50aWNJOSIsInF1ZXN0aW9uIiwicGxhY2Vob2xkZXIiLCJ0YXJnZXQiLCJpZCIsImNsYXNzTmFtZSIsIm5hdmlnYXRpb25UeXBlIiwiaXNWYWxpZFJlYXNvbiIsInJlYXNvbiIsIm1lYW5pbmdsZXNzUGF0dGVybnMiLCJfaSIsIl9tZWFuaW5nbGVzc1BhdHRlcm5zIiwicGF0dGVybiIsInY0IiwidXVpZHY0IiwiZmluZGVyIiwid29yayIsIm1vbmtleVBhdGNoIiwibW9ua2V5UGF0Y2hlZCIsIm9yaWdpbmFsQWRkRXZlbnRMaXN0ZW5lciIsIkV2ZW50VGFyZ2V0IiwiVGltZU91dCIsImNhcHR1cmVJbnRlcmFjdGlvbiIsImZpbmRDbGlja2FibGVQYXJlbnQiLCJkZXB0aCIsImFsbEF0dHJpYnV0ZXMiLCJwYWdlTWV0YSIsImN1cnJlbnRTbmFwc2hvdElkIiwic2VyaWFsaXplZFRhcmdldCIsIm1hcmtlZERvYyIsImh0bWxTbmFwc2hvdElkIiwiaHRtbENvbnRlbnQiLCJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCJ3YWl0X2Zvcl9hYm9ydCIsInNpZ25hbCIsInJlamVjdCIsImFib3J0ZWQiLCJvbmNlIiwiaGFzRGVmYXVsdEFjdGlvbiIsImFuY2hvciIsImxpc3RlbmVyIiwiX3RoaXMiLCJza2lwX21vbmtleV9wYXRjaCIsImNhbGxPcmlnaW5hbExpc3RlbmVyIiwiaGFuZGxlRXZlbnQiLCJ3cmFwcGVkTGlzdGVuZXIiLCJjb250cm9sbGVyIiwiX3V1aWQiLCJzY3JlZW5zaG90Q29tcGxldGUiLCJpbnRlcmFjdGlvbkNvbXBsZXRlIiwibmV3RXZlbnQiLCJfc2NyZWVuc2hvdENvbXBsZXRlIiwiX2RhdGEiLCJfaW50ZXJhY3Rpb25Db21wbGV0ZSIsImp1c3RfZm9yX2RlZmF1bHQiLCJibG9ja19zaWduYWwiLCJBYm9ydENvbnRyb2xsZXIiLCJmaW5pc2hfc2lnbmFscyIsImFib3J0IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwicHJldmVudERlZmF1bHQiLCJteV9kZWZhdWx0X3ByZXZlbnRlZCIsInN1Y2Nlc3MiLCJzZXRUaW1lb3V0IiwiaGFuZGxlTWVzc2FnZTEiLCJtYXhOdW1iZXJPZlBhdGhDaGVja3MiLCJhbGwiLCJtYXAiLCJNb3VzZUV2ZW50IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJjb21wb3NlZCIsInZpZXciLCJkZXRhaWwiLCJzY3JlZW5YIiwic2NyZWVuWSIsImNsaWVudFgiLCJjbGllbnRZIiwiY3RybEtleSIsImFsdEtleSIsInNoaWZ0S2V5IiwibWV0YUtleSIsImJ1dHRvbiIsImJ1dHRvbnMiLCJyZWxhdGVkVGFyZ2V0IiwiZGlzcGF0Y2hFdmVudCIsInQxIiwidXNlQ2FwdHVyZSIsInBhc3NpdmUiLCJoYW5kbGVBbmNob3JDbGlja3MiLCJfcmVmMiIsIm5vdyIsInN0b3BQcm9wYWdhdGlvbiIsImNhcHR1cmUiXSwic291cmNlUm9vdCI6IiJ9
