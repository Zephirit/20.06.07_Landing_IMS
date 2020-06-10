/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var before_after__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var before_after__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(before_after__WEBPACK_IMPORTED_MODULE_0__);


window.onload = () => {
  function _sendEmail() {
    const forms = document.querySelectorAll('.form__input');
    forms.forEach(frm => {
      frm.onsubmit = e => {
        e.preventDefault();
        let frmData = new FormData(frm);
        fetch('send.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: frm.name.value,
            phone: frm.phone.value
          })
        }).then(response => alert('Сообщение отправлено')).then(() => {
          frm.reset();
        });
      };
    });
  }

  function _sectionsPosition() {
    let sections = {};
    document.querySelectorAll('.section').forEach(section => {
      let topPos = section.getBoundingClientRect().top + pageYOffset;
      sections[section.id] = {};
      sections[section.id].top = topPos;
    });

    let _getTop = id => {
      return sections[id].top;
    };

    return {
      getTop: _getTop
    };
  }

  function _scrollSection(target) {
    const element = document.querySelector('#' + target);

    const targetPos = _sectionsPosition().getTop(target);

    if (target === 'description') {
      const menu = document.querySelector('.descriptionMenu');
      const menuHeight = menu.clientHeight;
      window.scroll({
        top: targetPos - menuHeight,
        behavior: 'smooth'
      });
    } else {
      window.scroll({
        top: targetPos,
        behavior: 'smooth'
      });
    }
  }

  function _getLinks() {
    document.querySelectorAll('.link').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = link.getAttribute('data-target');

        _scrollSection(target);
      });
    });
  }

  function _tabs(links, tabs, isBaSlider) {
    let beforaAfterItem;
    tabs[0].classList.add('active');

    if (isBaSlider) {
      beforaAfterItem = new before_after__WEBPACK_IMPORTED_MODULE_0___default.a({
        element: tabs[0]
      });
      beforaAfterItem.create();
      beforaAfterItem.create();
      const contWidth = document.querySelector('.beforeAfterBody__list').clientWidth / 2;
      beforaAfterItem.cursor.style.transform = `translate(${contWidth}px, 0px) translateZ(0px)`;
      tabs[0].querySelector('.beforeafter-itemActive').style.width = contWidth + 'px';
    }

    links.forEach((link, index) => {
      link.addEventListener('click', e => {
        e.preventDefault();

        if (isBaSlider) {
          beforaAfterItem.destroy();
          beforaAfterItem = new before_after__WEBPACK_IMPORTED_MODULE_0___default.a({
            element: tabs[index]
          });
          beforaAfterItem.create();
          const contWidth = document.querySelector('.beforeAfterBody__list').clientWidth / 2;
          beforaAfterItem.cursor.style.transform = `translate(${contWidth}px, 0px) translateZ(0px)`;
          tabs[index].querySelector('.beforeafter-itemActive').style.width = contWidth + 'px';
        }

        tabs.forEach(tab => {
          tab.classList.remove('active');
          tabs[index].classList.add('active');
        });
      });
    });
  }

  function _accordion(links, accs) {
    links.forEach((link, index) => {
      link.addEventListener('click', e => {
        e.preventDefault();

        if (accs[index].classList.contains('active')) {
          accs[index].classList.remove('active');
        } else {
          accs[index].classList.add('active');
        }
      });
    });
  }

  function _initGallery() {
    console.log(1);
    lightGallery(document.getElementById('lightgallery'));
  }

  function _checkBurger() {
    const burger = document.querySelector('.navigation__burger');
    const list = document.querySelector('.navigation__list');
    burger.addEventListener('click', e => {
      e.preventDefault();
      list.classList.toggle('active');
    });
  }

  const linksAdv = document.querySelectorAll('.descriptionMenu__item');
  const tabsAdv = document.querySelectorAll('.descriptionBody__item');
  const linksBA = document.querySelectorAll('.beforeAfterMenu__item');
  const tabBA = document.querySelectorAll('.beforeAfterBody__img');
  const linksQuestion = document.querySelectorAll('.questionsBody__item');
  const accsQuestion = document.querySelectorAll('.questionsBody__desc');

  function init() {
    _sendEmail();

    _getLinks();

    _tabs(linksAdv, tabsAdv);

    _tabs(linksBA, tabBA, true);

    _accordion(linksQuestion, accsQuestion);

    _checkBurger();

    _initGallery();
  }

  init();
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var BeforeAfter=function(){function t(e){_classCallCheck(this,t);var i=e||{};this.options=Object.assign({element:null,cursor:!0,direction:"ltr",selectors:{item:".beforeafter-item",itemActive:".beforeafter-itemActive",cursor:".beforeafter-cursor",imageWrapper:".beforeafter-wrapperImage"}},i),this.hasTouch="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,this.hasMSPointer=window.navigator.msPointerEnabled,null===this.options.element&&console.warn("BeforeAfter::Option element is missing"),this.itemActive=this.options.element.querySelector(this.options.selectors.itemActive),this.orientation="",this.attrToAnimate="",this.widthHeight="",this.heightElement=null,this.widthElement=null,this.timerGoTo=null,this.timerGoToAfter=null,this.timerCleaned=!1,this.cursor=null}return _createClass(t,[{key:"create",value:function(t){var e=this;null===this.itemActive?console.warn("BeforeAfter::Item active is missing"):(this.detectOrientation(),this.itemActive.style.zIndex=1,this.options.cursor&&this.updateCursor(),this.checkImagesLoaded(function(){e.heightElement=parseInt(e.options.element.offsetHeight),e.widthElement=parseInt(e.options.element.offsetWidth),e.addImageWrapper()}),this.addEvents(),"function"==typeof t&&t())}},{key:"detectOrientation",value:function(){"ltr"===this.options.direction||"rtl"===this.options.direction?(this.orientation="horizontal",this.widthHeight="width",this.attrToAnimate="ltr"===this.options.direction?"left":"right"):"ttb"!==this.options.direction&&"btt"!==this.options.direction||(this.orientation="vertical",this.attrToAnimate="ttb"===this.options.direction?"top":"bottom",this.widthHeight="height")}},{key:"buildCursor",value:function(){var t="<div class='".concat(this.options.selectors.cursor.substr(1),"'></div>");this.options.element.insertAdjacentHTML("beforeend",t)}},{key:"updateCursor",value:function(){null===this.cursor&&this.buildCursor(),this.cursor=this.options.element.parentNode.querySelector(this.options.selectors.cursor),this.cursor.style.position="absolute",this.cursor.style.zIndex=10,this.cursor.style.backgroundColor="#000",this.cursor.style.overflow="hidden",this.cursor.style.display="block","horizontal"===this.orientation?(this.cursor.style.width="2px",this.cursor.style.height="100%",this.cursor.style.top="0px"):"vertical"===this.orientation&&(this.cursor.style.width="100%",this.cursor.style.height="2px",this.cursor.style.left="0px"),"ltr"===this.options.direction&&(this.cursor.style.left="0px"),"rtl"===this.options.direction&&(this.cursor.style.left="auto",this.cursor.style.right="0px"),"ttb"===this.options.direction&&(this.cursor.style.top="0px"),"btt"===this.options.direction&&(this.cursor.style.top="auto",this.cursor.style.bottom="0px")}},{key:"checkImagesLoaded",value:function(t){var e=_toConsumableArray(this.options.element.querySelectorAll("img")),i=0;e.forEach(function(o){var s=new Image;s.src=o.getAttribute("src"),s.onload=function(){++i===e.length-1&&t()}})}},{key:"addImageWrapper",value:function(){var t=this;_toConsumableArray(this.options.element.querySelectorAll("img")).forEach(function(e){var i=document.createElement("div");i.classList.add(t.options.selectors.imageWrapper.substr(1)),e.parentNode.insertBefore(i,e),i.appendChild(e),"horizontal"===t.orientation?(i.style.position="absolute",i.style.top="0px",i.style.width="".concat(t.widthElement,"px"),t.itemActive.style.top="0px","ltr"===t.options.direction&&(t.itemActive.style.left="auto",t.itemActive.style.right="0",i.style.right="0px"),"rtl"===t.options.direction&&(t.itemActive.style.left="0",t.itemActive.style.right="auto",i.style.left="0px")):"vertical"===t.orientation&&(i.style.position="absolute",i.style.left="0px",i.style.width="100%","ttb"===t.options.direction&&(t.itemActive.style.bottom="0",t.itemActive.style.top="auto",i.style.bottom="0px"),"btt"===t.options.direction&&(t.itemActive.style.bottom="auto",t.itemActive.style.top="0",i.style.top="0px"))})}},{key:"removeImageWrappers",value:function(){var t=this;_toConsumableArray(this.options.element.querySelectorAll(this.options.selectors.item)).forEach(function(e){e.appendChild(e.querySelector("img")),e.querySelector(t.options.selectors.imageWrapper).remove(),e.removeAttribute("style")})}},{key:"addEvents",value:function(){var t=this;this.onMove=function(e){t.move(e)},this.getUserEventsToTrack().forEach(function(e){t.options.element.addEventListener(e,t.onMove,!1)}),this.onResize=function(){t.resize()},window.addEventListener("resize",this.onResize,!1)}},{key:"removeEvents",value:function(){var t=this;this.getUserEventsToTrack().forEach(function(e){t.options.element.removeEventListener(e,t.onMove)}),window.removeEventListener("resize",this.onResize)}},{key:"getUserEventsToTrack",value:function(){return this.hasTouch?this.hasMSPointer?["pointerstart","MSPointerMove"]:["touchstart","touchmove"]:["mousemove"]}},{key:"resize",value:function(){var t=this,e=0,i=null;(this.heightElement=parseInt(this.options.element.offsetHeight),this.widthElement=parseInt(this.options.element.offsetWidth),"horizontal"===this.orientation)?(_toConsumableArray(this.options.element.querySelectorAll(this.options.selectors.itemActive)).forEach(function(e){e.style.position="absolute",e.style.top="0px",e.style.width=t.widthElement}),"ltr"===this.options.direction?(e=this.itemActive.offsetLeft,i="".concat(e,"px, 0")):"rtl"===this.options.direction&&(e=-1*(this.widthElement-this.itemActive.offsetWidth),i="".concat(e,"px, 0"))):"vertical"===this.orientation&&("ttb"===this.options.direction?(e=this.itemActive.offsetTop,i="0, ".concat(e,"px")):"btt"===this.options.direction&&(e=-1*(this.heightElement-this.itemActive.offsetHeight),i="0 , ".concat(e,"px")));this.options.cursor&&(this.cursor.style.transform="translate(".concat(i,") translateZ(0)"))}},{key:"move",value:function(t){t.preventDefault(),null===this.timerGoTo||this.timerCleaned||(clearTimeout(this.timerGoTo),clearTimeout(this.timerGoToAfter),this.options.cursor&&this.updateCursor(),this.timerCleaned=!0);var e,i,o=0,s=0,r=0;e=this.hasTouch?t.touches[0].pageX:(this.hasMSPointer,t.pageX),i=this.hasTouch?t.touches[0].pageY:(this.hasMSPointer,t.pageY);var n=this.options.element.getBoundingClientRect();"ltr"===this.options.direction||"rtl"===this.options.direction?"ltr"===this.options.direction?(o=(s=parseInt(e-n.x))+"px, 0px",r=this.widthElement-s):(o=-(s=parseInt(this.widthElement-(e-n.x)))+"px, 0px",r=this.widthElement-s):"ttb"!==this.options.direction&&"btt"!==this.options.direction||("ttb"===this.options.direction?(o="0px, "+(s=parseInt(i-n.y))+"px",r=this.heightElement-s):(o="0px, "+-(s=parseInt(this.heightElement-(i-n.y)))+"px",r=this.heightElement-s)),this.options.cursor&&(this.cursor.style.transform="translate(".concat(o,") translateZ(0)")),this.itemActive.style[this.widthHeight]="".concat(r,"px"),this.position=s}},{key:"goTo",value:function(t){var e=this;this.timerGoTo=setTimeout(function(){var i=0,o=0,s=0;"ltr"===e.options.direction||"rtl"===e.options.direction?(i=e.widthElement-e.widthElement*t/100,o=e.widthElement*t/100):"ttb"!==e.options.direction&&"btt"!==e.options.direction||(i=e.heightElement-e.heightElement*t/100,o=e.heightElement*t/100),e.itemActive.style[e.widthHeight]="".concat(i,"px"),e.options.cursor&&(e.cursor.style[e.attrToAnimate]=o,"ltr"===e.options.direction?(s=i+"px, 0",e.cursor.style[e.attrToAnimate]="auto"):"rtl"===e.options.direction?(s=i+"px, 0",e.cursor.style[e.attrToAnimate]="auto"):"ttb"===e.options.direction?(s="0, "+i+"px",e.cursor.style[e.attrToAnimate]=0):"btt"===e.options.direction&&(e.cursor.style[e.attrToAnimate]="auto",s="0, "+i+"px"),e.cursor.style.transform="translate(".concat(s,") translateZ(0)")),e.position=i},100)}},{key:"reset",value:function(){this.cursor.style.transform="none","horizontal"===this.orientation?(this.itemActive.style.width="100%",this.cursor.style.left="0px"):(this.itemActive.style.height="100%",this.cursor.style.top="0px")}},{key:"destroy",value:function(){this.reset(),this.cursor.remove(),this.removeEvents(),this.removeImageWrappers()}}]),t}(),_default=BeforeAfter;exports.default=_default,module.exports=BeforeAfter;

/***/ })
/******/ ]);