/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Contact.js":
/*!***********************************!*\
  !*** ./src/components/Contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var _assets_map_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/map.png */ "./src/assets/map.png");

function Contact() {
  var content = document.getElementById("content");
  var contact = document.createElement("div");
  contact.classList.add("hero");
  var heading = document.createElement("h2");
  heading.textContent = "Our Address";
  var address = document.createElement("p");
  address.innerHTML = "Adress: 740 Madison Ave, <br>\n    New York, <br>\n    NY 10065 <br>\n    Phone: (212) 582-2000";
  var map = new Image();
  map.classList.add("map");
  map.src = _assets_map_png__WEBPACK_IMPORTED_MODULE_0__;
  contact.appendChild(heading);
  contact.appendChild(address);
  contact.appendChild(map);
  content.appendChild(contact);
}

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
function Footer() {
  var content = document.getElementById("content");
  var footer = document.createElement("div");
  footer.classList.add("footer");
  var text = document.createElement("p");
  text.textContent = "Made by vsilagy";
  footer.appendChild(text);
  content.appendChild(footer);
}

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
function Home() {
  var content = document.getElementById("content");
  var hero = document.createElement("div");
  hero.classList.add("hero");
  hero.classList.add("home");
  var heading = document.createElement("h2");
  heading.textContent = "Exquisite dining since 1989";
  var textOne = document.createElement("p");
  textOne.textContent = "Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.";
  var booking = document.createElement("button");
  booking.classList.add("booking");
  booking.textContent = "Book a Table";
  hero.appendChild(heading);
  hero.appendChild(textOne);
  hero.appendChild(booking);
  content.appendChild(hero);
}

/***/ }),

/***/ "./src/components/Menu.js":
/*!********************************!*\
  !*** ./src/components/Menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _assets_menu_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/menu.jpg */ "./src/assets/menu.jpg");

function Menu() {
  var content = document.getElementById("content");
  var menu = document.createElement("div");
  menu.classList.add("hero");
  var heading = document.createElement("h2");
  heading.textContent = "Our Menu";
  var textOne = document.createElement("p");
  textOne.textContent = "Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.";
  var textTwo = document.createElement("p");
  textTwo.textContent = "All our ingredients come directly from our farm or local fishery. So you can be sure that you're eating the freshest, most sustainable food.";
  var chef = new Image();
  chef.src = _assets_menu_jpg__WEBPACK_IMPORTED_MODULE_0__;
  chef.classList.add("chef");
  menu.appendChild(heading);
  menu.appendChild(textOne);
  menu.appendChild(chef);
  menu.appendChild(textTwo);
  content.appendChild(menu);
}

/***/ }),

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavBar)
/* harmony export */ });
function NavBar() {
  var content = document.getElementById("content");
  var nav = document.createElement("nav");
  nav.classList.add("nav");
  var logo = document.createElement("h1");
  logo.textContent = "delish";
  logo.classList.add("logo");
  var buttons = document.createElement("div");
  buttons.classList.add("buttons");
  var home = document.createElement("button");
  home.textContent = "Home";
  home.classList.add("btn");
  home.setAttribute("id", "home");
  var menu = document.createElement("button");
  menu.textContent = "Menu";
  menu.classList.add("btn");
  menu.setAttribute("id", "menu");
  var contact = document.createElement("button");
  contact.textContent = "Contact";
  contact.classList.add("btn");
  contact.setAttribute("id", "contact");
  nav.appendChild(logo);
  nav.appendChild(buttons);
  buttons.appendChild(home);
  buttons.appendChild(menu);
  buttons.appendChild(contact);
  content.appendChild(nav);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/hero-bg.jpg */ "./src/assets/hero-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=League+Spartan:wght@300;400;500;600;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"League Spartan\", sans-serif;\n  font-weight: 400;\n}\nbody {\n  color: antiquewhite;\n  min-height: 100vh;\n}\n.hero.home {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-position: 75% 0;\n  background-size: cover;\n}\n.container {\n  max-width: 1200px;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n}\n.nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2rem 0;\n}\n.logo {\n  font-size: 4rem;\n  font-weight: 700;\n  line-height: 1.1;\n  padding: 0.75rem;\n}\n.buttons {\n  display: flex;\n  justify-content: space-between;\n}\n.btn,\n.booking {\n  font-size: 2rem;\n  font-family: inherit;\n  padding: 0.75rem 1.25rem;\n  border: none;\n  cursor: pointer;\n  text-decoration: none;\n  background-color: transparent;\n  color: antiquewhite;\n}\n.booking {\n  padding: 1.25rem 2rem;\n  font-weight: 500;\n  border: 1px solid navajowhite;\n  color: navajowhite;\n  margin-top: 2rem;\n}\n.btn:hover,\n.booking:hover {\n  background-color: antiquewhite;\n  color: black;\n}\n.link.active {\n  background-color: salmon;\n  color: black;\n}\n.hero {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-top: 4rem;\n  max-width: 500px;\n  gap: 2.5rem;\n  padding: 1rem;\n}\n.hero h2 {\n  font-size: 3rem;\n  font-weight: 600;\n}\n.hero p {\n  font-size: 1.25rem;\n  font-style: italic;\n}\n.chef {\n  max-width: 30rem;\n  border-radius: 12px;\n}\n.map {\n  border-radius: 50%;\n  max-width: 20rem;\n}\n.footer {\n  margin-top: auto;\n  padding: 1rem;\n  text-align: center;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,yCAAyC;EACzC,gBAAgB;AAClB;AACA;EACE,mBAAmB;EACnB,iBAAiB;AACnB;AACA;EACE,yDAAgD;EAChD,4BAA4B;EAC5B,0BAA0B;EAC1B,sBAAsB;AACxB;AACA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,cAAc;AAChB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,8BAA8B;AAChC;AACA;;EAEE,eAAe;EACf,oBAAoB;EACpB,wBAAwB;EACxB,YAAY;EACZ,eAAe;EACf,qBAAqB;EACrB,6BAA6B;EAC7B,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,6BAA6B;EAC7B,kBAAkB;EAClB,gBAAgB;AAClB;AACA;;EAEE,8BAA8B;EAC9B,YAAY;AACd;AACA;EACE,wBAAwB;EACxB,YAAY;AACd;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,gBAAgB;EAChB,gBAAgB;EAChB,WAAW;EACX,aAAa;AACf;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,kBAAkB;AACpB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=League+Spartan:wght@300;400;500;600;700&display=swap\");\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"League Spartan\", sans-serif;\n  font-weight: 400;\n}\nbody {\n  color: antiquewhite;\n  min-height: 100vh;\n}\n.hero.home {\n  background-image: url(../src/assets/hero-bg.jpg);\n  background-repeat: no-repeat;\n  background-position: 75% 0;\n  background-size: cover;\n}\n.container {\n  max-width: 1200px;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n}\n.nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2rem 0;\n}\n.logo {\n  font-size: 4rem;\n  font-weight: 700;\n  line-height: 1.1;\n  padding: 0.75rem;\n}\n.buttons {\n  display: flex;\n  justify-content: space-between;\n}\n.btn,\n.booking {\n  font-size: 2rem;\n  font-family: inherit;\n  padding: 0.75rem 1.25rem;\n  border: none;\n  cursor: pointer;\n  text-decoration: none;\n  background-color: transparent;\n  color: antiquewhite;\n}\n.booking {\n  padding: 1.25rem 2rem;\n  font-weight: 500;\n  border: 1px solid navajowhite;\n  color: navajowhite;\n  margin-top: 2rem;\n}\n.btn:hover,\n.booking:hover {\n  background-color: antiquewhite;\n  color: black;\n}\n.link.active {\n  background-color: salmon;\n  color: black;\n}\n.hero {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-top: 4rem;\n  max-width: 500px;\n  gap: 2.5rem;\n  padding: 1rem;\n}\n.hero h2 {\n  font-size: 3rem;\n  font-weight: 600;\n}\n.hero p {\n  font-size: 1.25rem;\n  font-style: italic;\n}\n.chef {\n  max-width: 30rem;\n  border-radius: 12px;\n}\n.map {\n  border-radius: 50%;\n  max-width: 20rem;\n}\n.footer {\n  margin-top: auto;\n  padding: 1rem;\n  text-align: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/hero-bg.jpg":
/*!********************************!*\
  !*** ./src/assets/hero-bg.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "hero-bg.jpg";

/***/ }),

/***/ "./src/assets/map.png":
/*!****************************!*\
  !*** ./src/assets/map.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "map.png";

/***/ }),

/***/ "./src/assets/menu.jpg":
/*!*****************************!*\
  !*** ./src/assets/menu.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "menu.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/NavBar */ "./src/components/NavBar.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Home */ "./src/components/Home.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Menu */ "./src/components/Menu.js");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Contact */ "./src/components/Contact.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Footer */ "./src/components/Footer.js");






var content = document.getElementById("content");
content.classList.add("container");
loadHome();
document.body.addEventListener("click", function (e) {
  if (e.target.id === "home") {
    content.innerHTML = "";
    loadHome();
  } else if (e.target.id === "menu") {
    content.innerHTML = "";
    (0,_components_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_components_Menu__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"])();
  } else if (e.target.id === "contact") {
    content.innerHTML = "";
    (0,_components_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_components_Contact__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"])();
  }
});
function loadHome() {
  (0,_components_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_components_Home__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"])();
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map