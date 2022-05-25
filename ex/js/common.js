(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    
    var _gsap = require("gsap/dist/gsap");
    
    function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
    
    function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
    
    function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
    
    function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
    
    function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
    
    function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    var getMousePos = function getMousePos(e, prop) {
      var posx = 0;
      var posy = 0;
      posx = e.clientX;
      posy = prop ? e.clientY + atlProperty : e.clientY;
      return {
        x: posx,
        y: posy
      };
    };
    
    window.mousePosX = 0;
    window.mousePosY = 0;
    
    var Cursor = /*#__PURE__*/function () {
      function Cursor() {
        var _this = this;
    
        _classCallCheck(this, Cursor);
    
        this.windowWidth = window.innerWidth; // *** CURSOR STATE *** //
    
        this.defaultMouseFn = function () {
          _gsap.gsap.killTweensOf(_this.cursor);
    
          _gsap.gsap.to(_this.cursor, {
            duration: .15,
            ease: 'liner',
            width: 30,
            height: 30,
            border: '1px solid #ff2558',
            backgroundColor: 'transparent',
            backgroundImage: 'none',
            opacity: 1
          });
        };
    
        this.hoverMouseFn = function () {
          _gsap.gsap.killTweensOf(_this.cursor);
    
          _gsap.gsap.to(_this.cursor, {
            duration: .15,
            ease: 'liner',
            width: 80,
            height: 80
          });
        };
    
        this.hoverDarkMouseFn = function () {
          _gsap.gsap.killTweensOf(_this.cursor);
    
          var opacity, backgroundColor, borderColor;
    
          if (jQuery('body').hasClass('atl-block-white')) {
            opacity = 0.15;
            backgroundColor = 'rgba(36, 36, 36, 0.15)';
            borderColor = 'rgba(36, 36, 36, 0)';
          } else {
            opacity = 1;
            backgroundColor = '#242424';
            borderColor = '#242424';
          }
    
          _gsap.gsap.to(_this.cursor, {
            duration: .2,
            ease: 'liner',
            width: 80,
            height: 80,
            borderColor: borderColor,
            backgroundColor: backgroundColor,
            opacity: 1
          });
        };
    
        this.destroyMouseFn = function () {
          _gsap.gsap.killTweensOf(_this.cursor);
    
          _gsap.gsap.to(_this.cursor, {
            duration: 0,
            ease: 'liner',
            width: 0,
            height: 0,
            border: '0px solid transparent',
            backgroundColor: 'transparent'
          });
        }; // *** END CURSOR STATE *** //
    
      }
    
      _createClass(Cursor, [{
        key: "init",
        value: function init() {
          var _this2 = this;
    
          // Cursors
          this.cursor = document.querySelector('.atl-cursor');
          this.servicesSectionCursor = document.querySelector('.atl-services-section-cursor'); // Hover Elements
    
          this.links = _toConsumableArray(document.querySelectorAll('a'));
          this.openMenu = document.querySelector('.js-open-menu');
          this.servicesSectionItem = _toConsumableArray(document.querySelectorAll('.js-services-section-item'));
          this.expertsLi = _toConsumableArray(document.querySelectorAll('.js-experts-li, .js-slide-image-link'));
          this.dragSliderLink = _toConsumableArray(document.querySelectorAll('.js-drag-slider-link'));
          this.dragSliderContainer = _toConsumableArray(document.querySelectorAll('.js-drag-slider-container'));
          this.footerMarquee = _toConsumableArray(document.querySelectorAll('.js-footer-marquee'));
          this.heroBannerHeader = _toConsumableArray(document.querySelectorAll('.js-hero-banner-header'));
          this.btn = _toConsumableArray(document.querySelectorAll('.atl-btn'));
          this.btnLite = _toConsumableArray(document.querySelectorAll('.atl-btn-lite'));
          this.projectsPageItemLink = _toConsumableArray(document.querySelectorAll('.js-projects-page-item-link'));
          this.slidePrev = _toConsumableArray(document.querySelectorAll('.js-slide-prev'));
          this.slideNext = _toConsumableArray(document.querySelectorAll('.js-slide-next'));
          this.slideImageLink = _toConsumableArray(document.querySelectorAll('.js-slide-image-link'));
          this.hoverLink();
          this.hoverOpenMenu();
          this.hoverExpertsList();
          this.hoverDragSliderContainer();
          this.hoverDragSliderLink();
          this.hoverFooterMarquee();
          this.hoverHeroBannerHeader();
          this.hoverBtn();
          this.hoverBtnLite();
          this.hoverProjectsPageItemLink();
          this.hoverServicesSectionItem();
          this.hoverSlidePrev();
          this.hoverSlideNext();
          var text = this.cursor.querySelector('.atl-cursor-text');
          text.innerText = '';
    
          _gsap.gsap.set(this.cursor, {
            xPercent: -50,
            yPercent: -50,
            top: 0,
            left: 0,
            border: '1px solid #ff2558',
            width: 30,
            height: 30
          });
    
          this.mousemoveFn = function (ev) {
            return requestAnimationFrame(function () {
              var mousePos = getMousePos(ev, false);
    
              _gsap.gsap.to(_this2.cursor, {
                duration: .2,
                ease: 'liner',
                y: mousePos.y,
                x: mousePos.x
              });
            });
          };
    
          addEventListener('mousemove', this.mousemoveFn);
          return this;
        }
      }, {
        key: "destroy",
        value: function destroy() {
          var text = this.cursor.querySelector('.atl-cursor-text');
          text.innerText = '';
    
          _gsap.gsap.to(text, {
            duration: .15,
            ease: 'liner',
            opacity: 0,
            visibility: 'hidden',
            color: ''
          });
    
          this.defaultMouseFn();
        } // Fn
    
      }, {
        key: "hoverLink",
        value: function hoverLink() {
          var _this3 = this;
    
          this.links.forEach(function (el) {
            el.addEventListener('mouseenter', _this3.hoverMouseFn);
            el.addEventListener('mouseleave', _this3.defaultMouseFn);
          });
        }
      }, {
        key: "hoverOpenMenu",
        value: function hoverOpenMenu() {
          this.openMenu.addEventListener('mouseenter', this.hoverDarkMouseFn);
          this.openMenu.addEventListener('mouseleave', this.defaultMouseFn);
        }
      }, {
        key: "hoverExpertsList",
        value: function hoverExpertsList() {
          var _this4 = this;
    
          this.mouseEnterExpertsListFn = function (el) {
            var text = _this4.cursor.querySelector('.atl-cursor-text');
    
            _gsap.gsap.killTweensOf(_this4.cursor);
    
            _gsap.gsap.to(_this4.cursor, {
              duration: .15,
              ease: 'liner',
              width: 125,
              height: 125,
              border: '1px solid #ffffff',
              backgroundColor: '#ffffff',
              backgroundImage: 'none',
              opacity: 1
            });
    
            text.innerText = el.target.getAttribute('data-text') || 'Découvrir';
    
            _gsap.gsap.to(text, {
              duration: .15,
              ease: 'liner',
              opacity: 1,
              visibility: 'visible',
              fontSize: '14px',
              color: '#181818'
            });
          };
    
          this.mouseLeaveExpertsListFn = function (el) {
            _gsap.gsap.killTweensOf(_this4.cursor);
    
            var text = _this4.cursor.querySelector('.atl-cursor-text');
    
            text.innerText = '';
    
            _gsap.gsap.to(text, {
              duration: .15,
              ease: 'liner',
              opacity: 0,
              visibility: 'hidden',
              color: ''
            });
    
            _gsap.gsap.to(_this4.cursor, {
              duration: .15,
              ease: 'liner',
              width: 30,
              height: 30,
              border: '1px solid #ff2558',
              backgroundColor: 'transparent',
              backgroundImage: 'none',
              opacity: 1
            });
          };
    
          this.expertsLi.forEach(function (el) {
            el.addEventListener('mouseenter', _this4.mouseEnterExpertsListFn);
            el.addEventListener('mouseleave', _this4.mouseLeaveExpertsListFn);
          });
        }
      }, {
        key: "hoverDragSliderContainer",
        value: function hoverDragSliderContainer() {
          var _this5 = this;
    
          this.mouseEnterDragSliderFn = function (el) {
            var text = _this5.cursor.querySelector('.atl-cursor-text');
    
            _gsap.gsap.killTweensOf(_this5.cursor);
    
            _gsap.gsap.to(_this5.cursor, {
              duration: .15,
              ease: 'liner',
              width: 125,
              height: 125,
              border: '1px solid #ffffff',
              backgroundColor: '#ffffff',
              backgroundImage: 'none',
              opacity: 1
            });
    
            text.innerText = el.target.getAttribute('data-drag-text') ? el.target.getAttribute('data-drag-text') : 'Drag';
    
            _gsap.gsap.to(text, {
              duration: .15,
              ease: 'liner',
              opacity: 1,
              visibility: 'visible',
              fontSize: '14px',
              color: '#181818'
            });
          };
    
          this.mouseLeaveDragSliderFn = function (el) {
            _gsap.gsap.killTweensOf(_this5.cursor);
    
            var text = _this5.cursor.querySelector('.atl-cursor-text');
    
            text.innerText = '';
    
            _gsap.gsap.to(text, {
              duration: .15,
              ease: 'liner',
              opacity: 0,
              visibility: 'hidden'
            });
    
            _gsap.gsap.to(_this5.cursor, {
              duration: .15,
              ease: 'liner',
              width: 30,
              height: 30,
              border: '1px solid #ff2558',
              backgroundColor: 'transparent',
              backgroundImage: 'none',
              opacity: 1
            });
          };
    
          this.dragSliderContainer.forEach(function (el) {
            el.addEventListener('mouseenter', _this5.mouseEnterDragSliderFn);
            el.addEventListener('mouseleave', _this5.mouseLeaveDragSliderFn);
          });
        }
      }, {
        key: "hoverDragSliderLink",
        value: function hoverDragSliderLink() {
          var _this6 = this;
    
          this.mouseEnterDragSliderLinkFn = function (el) {
            var text = _this6.cursor.querySelector('.atl-cursor-text');
    
            _gsap.gsap.killTweensOf(_this6.cursor);
    
            _gsap.gsap.to(_this6.cursor, {
              duration: .15,
              ease: 'liner',
              width: 125,
              height: 125,
              border: '1px solid #282828',
              backgroundColor: '#282828',
              backgroundImage: 'none',
              opacity: 1
            });
    
            text.innerText = el.target.getAttribute('data-link-text') ? el.target.getAttribute('data-link-text') : 'Oui!';
    
            _gsap.gsap.to(text, {
              duration: .15,
              ease: 'liner',
              opacity: 1,
              visibility: 'visible',
              fontSize: '16px',
              color: '#FFFFFF'
            });
          };
    
          this.mouseLeaveDragSliderLinkFn = function (el) {
            _gsap.gsap.killTweensOf(_this6.cursor);
    
            var text = _this6.cursor.querySelector('.atl-cursor-text');
    
            text.innerText = '';
    
            _gsap.gsap.to(text, {
              duration: .15,
              ease: 'liner',
              opacity: 0,
              visibility: 'hidden'
            });
    
            _gsap.gsap.to(_this6.cursor, {
              duration: .15,
              ease: 'liner',
              width: 30,
              height: 30,
              border: '1px solid #ff2558',
              backgroundColor: 'transparent',
              backgroundImage: 'none',
              opacity: 1
            });
          };
    
          this.dragSliderLink.forEach(function (el) {
            el.addEventListener('mouseenter', _this6.mouseEnterDragSliderLinkFn);
            el.addEventListener('mouseleave', _this6.mouseLeaveDragSliderLinkFn);
          });
        }
      }, {
        key: "hoverFooterMarquee",
        value: function hoverFooterMarquee() {
          var _this7 = this;
    
          this.mouseEnterFooterMarqueeFn = function (el) {
            _gsap.gsap.killTweensOf(_this7.cursor);
    
            _this7.cursor.classList.add('atl-cursor_link');
    
            _gsap.gsap.to(_this7.cursor, {
              duration: .15,
              ease: 'liner',
              width: 125,
              height: 125,
              border: '1px solid #ffffff',
              backgroundColor: '#ffffff',
              backgroundImage: 'none',
              opacity: 1
            });
          };
    
          this.mouseLeaveFooterMarqueeFn = function (el) {
            _gsap.gsap.killTweensOf(_this7.cursor);
    
            _this7.cursor.classList.remove('atl-cursor_link');
    
            _gsap.gsap.to(_this7.cursor, {
              duration: .15,
              ease: 'liner',
              width: 30,
              height: 30,
              border: '1px solid #ff2558',
              backgroundColor: 'transparent',
              backgroundImage: 'none',
              opacity: 1
            });
          };
    
          this.footerMarquee.forEach(function (el) {
            el.addEventListener('mouseenter', _this7.mouseEnterFooterMarqueeFn);
            el.addEventListener('mouseleave', _this7.mouseLeaveFooterMarqueeFn);
          });
        }
      }, {
        key: "hoverHeroBannerHeader",
        value: function hoverHeroBannerHeader() {
          var _this8 = this;
    
          if (this.windowWidth >= 992) {
            this.mouseEnterHeroBannerHeaderFn = function (el) {
              var text = _this8.cursor.querySelector('.atl-cursor-text');
    
              _gsap.gsap.killTweensOf(_this8.cursor);
    
              _this8.cursor.classList.add('atl-cursor_play');
    
              _gsap.gsap.to(_this8.cursor, {
                duration: .15,
                ease: 'liner',
                width: 125,
                height: 125,
                border: '1px solid transparent',
                backgroundColor: 'transparent',
                backgroundImage: 'none' //opacity: 1
    
              });
    
              _gsap.gsap.to(_this8.cursor, {
                duration: .6,
                delay: .6,
                opacity: 1,
                display: ''
              });
    
              text.innerText = el.target.getAttribute('data-play-link') || 'Click to Play';
    
              _gsap.gsap.to(text, {
                duration: .15,
                ease: 'liner',
                opacity: 1,
                visibility: 'visible',
                color: '#FFF7EB',
                backgroundColor: 'transparent'
              });
            };
    
            this.mouseLeaveHeroBannerHeaderFn = function () {
              _gsap.gsap.killTweensOf(_this8.cursor);
    
              _this8.cursor.classList.remove('atl-cursor_play');
    
              _this8.cursor.classList.remove('atl-cursor_close');
    
              var text = _this8.cursor.querySelector('.atl-cursor-text');
    
              text.innerText = '';
    
              _gsap.gsap.to(text, {
                duration: .15,
                ease: 'liner',
                opacity: 0,
                visibility: 'hidden',
                color: ''
              });
    
              _gsap.gsap.to(_this8.cursor, {
                duration: .15,
                ease: 'liner',
                width: 30,
                height: 30,
                border: '1px solid #ff2558',
                backgroundColor: 'transparent',
                backgroundImage: 'none',
                opacity: 1
              });
            };
    
            this.destroyMouseHeroBannerHeaderFn = function () {
              _gsap.gsap.killTweensOf(_this8.cursor);
    
              _this8.cursor.classList.remove('atl-cursor_play');
    
              _this8.cursor.classList.remove('atl-cursor_close');
    
              var text = _this8.cursor.querySelector('.atl-cursor-text');
    
              text.innerText = '';
    
              _gsap.gsap.to(_this8.cursor, {
                duration: 0,
                opacity: 0,
                display: 'none'
              });
            };
    
            this.mouseActiveVideo = function (el) {
              _gsap.gsap.killTweensOf(_this8.cursor);
    
              _this8.cursor.classList.remove('atl-cursor_play');
    
              _this8.cursor.classList.add('atl-cursor_close');
    
              var text = _this8.cursor.querySelector('.atl-cursor-text');
    
              _gsap.gsap.to(_this8.cursor, {
                duration: .15,
                ease: 'liner',
                width: 80,
                height: 80,
                border: '1px solid transparent',
                backgroundColor: 'transparent',
                backgroundImage: 'none',
                opacity: 1
              });
    
              text.innerText = el !== undefined ? el.target.getAttribute('data-close') : 'Close';
    
              _gsap.gsap.to(text, {
                duration: .15,
                ease: 'liner',
                opacity: 1,
                visibility: 'visible',
                color: '#FFF7EB'
              });
            };
    
            this.heroBannerHeader.forEach(function (el, index) {
              el.addEventListener('mouseenter', _this8.mouseEnterHeroBannerHeaderFn);
              el.addEventListener('mouseleave', _this8.mouseLeaveHeroBannerHeaderFn);
              var closeLink = el.getAttribute('data-close-link') || 'Close'; // VIDEO
    
              if (document.querySelector('.js-hero-banner-video-' + index) === null) {
                var htmlHeroBannerVideo = '<div class="atl-hero-banner-video js-hero-banner-video-' + index + '" data-close="' + closeLink + '">';
                htmlHeroBannerVideo += '<video playsinline>';
                htmlHeroBannerVideo += '<source src="' + el.dataset.video + '" type="video/mp4">';
                htmlHeroBannerVideo += '</video>';
                htmlHeroBannerVideo += '</div>';
                jQuery(_this8.cursor).after(htmlHeroBannerVideo);
              }
    
              var heroBannerVideo = document.querySelector('.js-hero-banner-video-' + index),
                  videoElem = heroBannerVideo.querySelector('video'),
                  mouseActive = true,
                  mousePosAcX = 0,
                  mousePosAcY = 0;
    
              _gsap.gsap.set(heroBannerVideo, {
                xPercent: -50,
                yPercent: -50,
                pointerEvents: 'none',
                width: '130vw',
                height: '130vw',
                clipPath: 'circle(0% at 50% 50%)'
              });
    
              _this8.mousemoveHeroBannerVideoFn = function (ev) {
                return requestAnimationFrame(function () {
                  var mousePos = getMousePos(ev, false);
                  mousePosAcX = mousePos.x;
                  mousePosAcY = mousePos.y;
    
                  if (mouseActive) {
                    _gsap.gsap.to(heroBannerVideo, {
                      duration: .2,
                      ease: Power2.easeOut,
                      top: mousePos.y,
                      left: mousePos.x
                    });
                  }
                });
              };
    
              addEventListener('mousemove', _this8.mousemoveHeroBannerVideoFn); // END VIDEO
    
              el.addEventListener('click', function () {
                _gsap.gsap.to(document.querySelector('.js-header'), {
                  duration: 0,
                  zIndex: 997
                });
    
                _gsap.gsap.to(document.querySelector('body'), {
                  duration: 0,
                  overflow: 'hidden'
                });
    
                _gsap.gsap.to(heroBannerVideo, {
                  duration: .6,
                  ease: Power2.easeOut,
                  top: '50%',
                  left: '50%',
                  pointerEvents: 'auto',
                  clipPath: 'circle(50% at 50% 50%)'
                });
    
                _gsap.gsap.to(videoElem, {
                  delay: .5,
                  duration: .1,
                  opacity: 1
                });
    
                videoElem.currentTime = 1;
                videoElem.play();
                mouseActive = false;
    
                _this8.mouseLeaveHeroBannerHeaderFn();
    
                _this8.mouseActiveVideo();
              });
              heroBannerVideo.addEventListener('click', function () {
                _gsap.gsap.to(document.querySelector('.js-header'), {
                  duration: 0,
                  delay: .4,
                  zIndex: 9999
                });
    
                _gsap.gsap.to(document.querySelector('body'), {
                  duration: 0,
                  delay: .4,
                  overflow: ''
                });
    
                _gsap.gsap.to(heroBannerVideo, {
                  duration: 0,
                  top: mousePosAcY,
                  left: mousePosAcX
                });
    
                _gsap.gsap.to(heroBannerVideo, {
                  duration: .6,
                  ease: Power2.easeOut,
                  pointerEvents: 'none',
                  clipPath: 'circle(0% at 50% 50%)'
                });
    
                _gsap.gsap.to(videoElem, {
                  delay: 0,
                  duration: .1,
                  opacity: 0
                });
    
                videoElem.pause();
                videoElem.currentTime = 1; //this.destroyMouseFn()
    
                _this8.destroyMouseHeroBannerHeaderFn();
    
                mouseActive = true;
              });
              heroBannerVideo.addEventListener('mouseenter', _this8.mouseActiveVideo);
              heroBannerVideo.addEventListener('mouseleave', _this8.mouseLeaveHeroBannerHeaderFn);
            });
          }
        }
      }, {
        key: "hoverBtn",
        value: function hoverBtn() {
          var _this9 = this;
    
          this.btn.forEach(function (el, index) {
            el.addEventListener('mouseenter', _this9.hoverDarkMouseFn);
            el.addEventListener('mouseleave', _this9.defaultMouseFn);
          });
        }
      }, {
        key: "hoverBtnLite",
        value: function hoverBtnLite() {
          var _this10 = this;
    
          this.btnLite.forEach(function (el, index) {
            el.addEventListener('mouseenter', _this10.hoverDarkMouseFn);
            el.addEventListener('mouseleave', _this10.defaultMouseFn);
          });
        }
      }, {
        key: "hoverProjectsPageItemLink",
        value: function hoverProjectsPageItemLink() {
          var _this11 = this;
    
          this.mouseEnterProjectsPageItemLinkFn = function (el) {
            var text = _this11.cursor.querySelector('.atl-cursor-text');
    
            _gsap.gsap.killTweensOf(_this11.cursor);
    
            _gsap.gsap.to(_this11.cursor, {
              duration: .15,
              ease: 'liner',
              width: 125,
              height: 125,
              border: '1px solid #ffffff',
              backgroundColor: '#ffffff',
              backgroundImage: 'none',
              opacity: 1
            });
    
            text.innerText = el.target.getAttribute('data-text') || 'Découvrir';
    
            _gsap.gsap.to(text, {
              duration: .15,
              ease: 'liner',
              opacity: 1,
              visibility: 'visible',
              fontSize: '14px',
              color: '#181818'
            });
          };
    
          this.mouseLeaveProjectsPageItemLinkFn = function (el) {
            _gsap.gsap.killTweensOf(_this11.cursor);
    
            var text = _this11.cursor.querySelector('.atl-cursor-text');
    
            text.innerText = '';
    
            _gsap.gsap.to(text, {
              duration: .15,
              ease: 'liner',
              opacity: 0,
              visibility: 'hidden',
              color: ''
            });
    
            _gsap.gsap.to(_this11.cursor, {
              duration: .15,
              ease: 'liner',
              width: 30,
              height: 30,
              border: '1px solid #ff2558',
              backgroundColor: 'transparent',
              backgroundImage: 'none',
              opacity: 1
            });
          };
    
          this.projectsPageItemLink.forEach(function (el) {
            el.addEventListener('mouseenter', _this11.mouseEnterProjectsPageItemLinkFn);
            el.addEventListener('mouseleave', _this11.mouseLeaveProjectsPageItemLinkFn);
          });
        } // Services Section
    
      }, {
        key: "hoverServicesSectionItem",
        value: function hoverServicesSectionItem() {
          var _this12 = this;
    
          if (this.servicesSectionCursor !== null) {
            this.mouseEnterServicesSectionItemFn = function (el) {
              _this12.destroyMouseFn();
    
              if (typeof el.target.dataset.id !== 'undefined') {
                _gsap.gsap.to(_this12.servicesSectionCursor, {
                  duration: .2,
                  ease: 'liner',
                  opacity: 1,
                  visibility: 'visible'
                });
    
                _gsap.gsap.to('#' + el.target.dataset.id, {
                  duration: .3,
                  delay: .1,
                  ease: 'liner',
                  clipPath: 'circle(50% at 50% 50%)'
                });
    
                _gsap.gsap.to('#' + el.target.dataset.id, {
                  duration: 0,
                  zIndex: 5
                });
              }
            };
    
            this.mouseLeaveServicesSectionItemFn = function (el) {
              if (typeof el.target.dataset.id !== 'undefined') {
                _gsap.gsap.to(_this12.servicesSectionCursor, {
                  duration: .1,
                  ease: 'liner',
                  opacity: 0
                });
    
                _gsap.gsap.to(_this12.servicesSectionCursor, {
                  duration: 0,
                  delay: .1,
                  ease: 'liner',
                  visibility: 'hidden'
                });
    
                _gsap.gsap.to('#' + el.target.dataset.id, {
                  duration: .3,
                  delay: .2,
                  ease: 'liner',
                  clipPath: 'circle(0 at 50% 50%)'
                });
    
                _gsap.gsap.to('#' + el.target.dataset.id, {
                  duration: 0,
                  zIndex: 1
                });
              }
            };
    
            this.servicesSectionItem.forEach(function (el) {
              el.addEventListener('mouseenter', _this12.mouseEnterServicesSectionItemFn);
              el.addEventListener('mouseleave', _this12.mouseLeaveServicesSectionItemFn);
            }); // SET CURSOR
    
            this.mousemoveServicesSectionFn = function (ev) {
              return requestAnimationFrame(function () {
                var mousePos = getMousePos(ev, true);
                var globalMousePos = getMousePos(ev, false);
                window.mousePosX = globalMousePos.x;
                window.mousePosY = globalMousePos.y;
    
                if (_this12.servicesSectionCursor !== null) {
                  _gsap.gsap.to(_this12.servicesSectionCursor, {
                    duration: .2,
                    ease: Power2.easeOut,
                    top: mousePos.y,
                    left: mousePos.x
                  });
                }
              });
            };
    
            addEventListener('mousemove', this.mousemoveServicesSectionFn);
          } // END SET CURSOR
    
        } // Slides Images
    
      }, {
        key: "hoverSlidePrev",
        value: function hoverSlidePrev() {
          var _this13 = this;
    
          this.mouseEnterSlidePrevFn = function (el) {
            var text = _this13.cursor.querySelector('.atl-cursor-text');
    
            _gsap.gsap.killTweensOf(_this13.cursor);
    
            _gsap.gsap.to(_this13.cursor, {
              duration: .15,
              ease: 'liner',
              width: 125,
              height: 125,
              border: '1px solid #282828',
              backgroundColor: '#282828',
              backgroundImage: 'none',
              opacity: 1
            });
    
            text.innerText = el.target.getAttribute('data-text') || 'Previous';
    
            _gsap.gsap.to(text, {
              duration: .15,
              ease: 'liner',
              opacity: 1,
              visibility: 'visible',
              fontSize: '16px',
              color: '#FFFFFF'
            });
          };
    
          this.mouseLeaveSlidePrevFn = function (el) {
            _gsap.gsap.killTweensOf(_this13.cursor);
    
            var text = _this13.cursor.querySelector('.atl-cursor-text');
    
            text.innerText = '';
    
            _gsap.gsap.to(text, {
              duration: .15,
              ease: 'liner',
              opacity: 0,
              visibility: 'hidden'
            });
    
            _gsap.gsap.to(_this13.cursor, {
              duration: .15,
              ease: 'liner',
              width: 30,
              height: 30,
              border: '1px solid #ff2558',
              backgroundColor: 'transparent',
              backgroundImage: 'none',
              opacity: 1
            });
    
            _this13.defaultMouseFn();
          };
    
          this.slidePrev.forEach(function (el) {
            el.addEventListener('mouseenter', _this13.mouseEnterSlidePrevFn);
            el.addEventListener('mouseleave', _this13.mouseLeaveSlidePrevFn);
          });
        }
      }, {
        key: "hoverSlideNext",
        value: function hoverSlideNext() {
          var _this14 = this;
    
          this.mouseEnterSlideNextFn = function (el) {
            var text = _this14.cursor.querySelector('.atl-cursor-text');
    
            _gsap.gsap.killTweensOf(_this14.cursor);
    
            _gsap.gsap.to(_this14.cursor, {
              duration: .15,
              ease: 'liner',
              width: 125,
              height: 125,
              border: '1px solid #282828',
              backgroundColor: '#282828',
              backgroundImage: 'none',
              opacity: 1
            });
    
            text.innerText = el.target.getAttribute('data-text') || 'Next';
    
            _gsap.gsap.to(text, {
              duration: .15,
              ease: 'liner',
              opacity: 1,
              visibility: 'visible',
              fontSize: '16px',
              color: '#FFFFFF'
            });
          };
    
          this.mouseLeaveSlideNextFn = function (el) {
            _gsap.gsap.killTweensOf(_this14.cursor);
    
            var text = _this14.cursor.querySelector('.atl-cursor-text');
    
            text.innerText = '';
    
            _gsap.gsap.to(text, {
              duration: .15,
              ease: 'liner',
              opacity: 0,
              visibility: 'hidden'
            });
    
            _gsap.gsap.to(_this14.cursor, {
              duration: .15,
              ease: 'liner',
              width: 30,
              height: 30,
              border: '1px solid #ff2558',
              backgroundColor: 'transparent',
              backgroundImage: 'none',
              opacity: 1
            });
    
            _this14.defaultMouseFn();
          };
    
          this.slideNext.forEach(function (el) {
            el.addEventListener('mouseenter', _this14.mouseEnterSlideNextFn);
            el.addEventListener('mouseleave', _this14.mouseLeaveSlideNextFn);
          });
        } // .js-slide-image-link - the cursor control is in a function hoverExpertsList()
    
      }]);
    
      return Cursor;
    }();
    
    var _default = Cursor = new Cursor();
    
    exports.default = _default;
    
    },{"gsap/dist/gsap":9}],2:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    var ProjectsArchive = /*#__PURE__*/function () {
      function ProjectsArchive() {
        var _this = this;
    
        _classCallCheck(this, ProjectsArchive);
    
        this.initialized = false;
        this.curtains = false;
    
        this.listener = function (status) {
          _this.curtains.updateScrollValues(status.offset.x, status.offset.y);
    
          if (_this.curtainProjectsCanvas !== null && _this.curtainProjectsCanvas !== undefined) {
            _this.curtainProjectsCanvas.style.top = bodyScrollBar.offset.y + 'px';
          }
        };
    
        this.destroyFn = function () {
          if (_this.initialized) {
            _this.curtains.dispose();
          }
        };
      }
    
      _createClass(ProjectsArchive, [{
        key: "run",
        value: function run(first_time, data) {
          this.curtainProjectsCanvas = data.querySelector('#curtain-projects-canvas');
          this.planeElements = data.getElementsByClassName("js-projects-page-thumb");
    
          if (this.planeElements.length && window.innerWidth >= 1200) {
            this.initialized = true;
    
            if (first_time) {
              var pa = this;
              pa.init(data);
              window.addEventListener("load", function () {});
            } else {
              var _pa = this;
    
              setTimeout(function () {
                _pa.init(data);
              }, 500);
            }
          }
    
          return this;
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.destroyFn();
        }
      }, {
        key: "init",
        value: function init(data) {
          var _this2 = this;
    
          // set up our WebGL context and append the canvas to our wrapper
          this.curtains = new Curtains({
            container: "curtain-projects-canvas",
            pixelRatio: Math.min(1.5, window.devicePixelRatio) // limit pixel ratio for performance
    
          });
          this.curtains.onRender(function () {
            // update our planes deformation
            // increase/decrease the effect
            planesDeformations = _this2.curtains.lerp(planesDeformations, 0, 0.1);
          }).onScroll(function () {
            // get scroll deltas to apply the effect on scroll
            var delta = _this2.curtains.getScrollDeltas(); // invert value for the effect
    
    
            delta.y = -delta.y; // threshold
    
            if (delta.y > 20) {
              delta.y = 20;
            } else if (delta.y < -20) {
              delta.y = -20;
            }
    
            if (Math.abs(delta.y) > Math.abs(planesDeformations)) {
              planesDeformations = _this2.curtains.lerp(planesDeformations, delta.y, 0.06);
            }
          }).onContextLost(function () {
            // on context lost, try to restore the context
            _this2.curtains.restoreContext();
          }); // we will keep track of all our planes in an array
    
          var planes = [];
          var planesDeformations = 0;
          var vs = "\n            precision mediump float;\n\n            // default mandatory variables\n            attribute vec3 aVertexPosition;\n            attribute vec2 aTextureCoord;\n\n            uniform mat4 uMVMatrix;\n            uniform mat4 uPMatrix;\n\n            uniform mat4 planeTextureMatrix;\n\n            // custom variables\n            varying vec3 vVertexPosition;\n            varying vec2 vTextureCoord;\n\n            uniform float uPlaneDeformation;\n\n            void main() {\n                vec3 vertexPosition = aVertexPosition;\n\n                // cool effect on scroll\n                vertexPosition.y += sin(((vertexPosition.x + 1.0) / 2.0) * 3.141592) * (sin(uPlaneDeformation / 90.0));\n\n                gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);\n\n                // varyings\n                vVertexPosition = vertexPosition;\n                vTextureCoord = (planeTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;\n            }\n        ";
          var fs = "\n            precision mediump float;\n\n            varying vec3 vVertexPosition;\n            varying vec2 vTextureCoord;\n\n            uniform sampler2D planeTexture;\n\n            void main() {\n                // just display our texture\n                gl_FragColor = texture2D(planeTexture, vTextureCoord);\n            }\n        "; // all planes will have the same parameters
    
          var params = {
            vertexShader: vs,
            fragmentShader: fs,
            widthSegments: 10,
            heightSegments: 10,
            fov: 45,
            drawCheckMargins: {
              top: 50,
              right: 0,
              bottom: 50,
              left: 0
            },
            uniforms: {
              planeDeformation: {
                name: "uPlaneDeformation",
                type: "1f",
                value: 0
              }
            }
          }; // add our planes and handle them
    
          for (var i = 0; i < this.planeElements.length; i++) {
            planes.push(new Plane(this.curtains, this.planeElements[i], params));
            handlePlanes(i);
          } // handle all the planes
    
    
          function handlePlanes(index) {
            var plane = planes[index]; // check if our plane is defined and use it
    
            plane.onRender(function () {
              // update the uniform
              plane.uniforms.planeDeformation.value = planesDeformations;
            });
          }
    
          if (window.innerWidth >= 1200) {
            bodyScrollBar.addListener(this.listener);
          }
        }
      }]);
    
      return ProjectsArchive;
    }();
    
    var _default = ProjectsArchive = new ProjectsArchive();
    
    exports.default = _default;
    
    },{}],3:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    
    var _gsap = require("gsap/dist/gsap");
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    var ProjectsSingle = /*#__PURE__*/function () {
      function ProjectsSingle() {
        _classCallCheck(this, ProjectsSingle);
    
        this.heroProjectsSingle = null;
      }
    
      _createClass(ProjectsSingle, [{
        key: "run",
        value: function run(trigger, doc) {
          this.heroProjectsSingle = doc.querySelector('.js-hero-projects-single');
    
          if (typeof this.heroProjectsSingle !== 'undefined' && this.heroProjectsSingle !== null) {
            var heroProjectsSingleTitle = this.heroProjectsSingle.querySelector('.js-hero-projects-single-title'),
                heroProjectsSingleThumbnail = this.heroProjectsSingle.querySelector('.js-hero-projects-single-thumbnail'),
                heroProjectsSingleActivity = this.heroProjectsSingle.querySelectorAll('.js-hero-projects-single-activity div'),
                heroProjectsSingleCategory = this.heroProjectsSingle.querySelector('.js-hero-projects-single-category'),
                heroProjectsSingleYear = this.heroProjectsSingle.querySelectorAll('.js-hero-projects-single-year div'),
                content = heroProjectsSingleTitle.textContent.split(''),
                htmlTitle = '',
                spanTitleElem;
            content.forEach(function (el) {
              htmlTitle += '<span>' + el + '</span>';
            });
            heroProjectsSingleTitle.innerHTML = htmlTitle;
            spanTitleElem = heroProjectsSingleTitle.querySelectorAll('span');
    
            _gsap.gsap.timeline().from(spanTitleElem, {
              yPercent: -100,
              stagger: 0.04,
              delay: .9,
              duration: .5,
              ease: Power3.easeOut
            });
    
            jQuery('.js-hero-projects-single-category p').wrapInner('<span></span>');
    
            _gsap.gsap.timeline().from(heroProjectsSingleCategory.querySelectorAll('span'), {
              yPercent: 100,
              stagger: 0.1,
              delay: 1,
              duration: .5,
              opacity: 0,
              ease: Power3.easeOut
            });
    
            _gsap.gsap.from(heroProjectsSingleActivity, {
              yPercent: 100,
              delay: 1,
              duration: .5,
              ease: Power3.easeOut
            });
    
            _gsap.gsap.from(heroProjectsSingleYear, {
              yPercent: 100,
              delay: 1,
              duration: .5,
              ease: Power3.easeOut
            });
    
            _gsap.gsap.from(heroProjectsSingleThumbnail, {
              opacity: 0,
              yPercent: 40,
              delay: 1.2,
              duration: .5,
              ease: Power3.easeOut
            });
          }
    
          return this;
        }
      }]);
    
      return ProjectsSingle;
    }();
    
    var _default = ProjectsSingle = new ProjectsSingle();
    
    exports.default = _default;
    
    },{"gsap/dist/gsap":9}],4:[function(require,module,exports){
    "use strict";
    
    var _gsap = require("gsap/dist/gsap");
    
    var _ScrollTrigger = require("gsap/dist/ScrollTrigger");
    
    var _smoothScrollbar = _interopRequireDefault(require("smooth-scrollbar"));
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    _gsap.gsap.registerPlugin(_ScrollTrigger.ScrollTrigger);
    
    var windowWidth = window.innerWidth;
    window.atlProperty = 0;
    
    if (windowWidth >= 1200) {
      var content = document.querySelector('#content');
      window.bodyScrollBar = _smoothScrollbar.default.init(content, {
        damping: 0.08,
        delegateTo: document,
        alwaysShowTracks: false
      });
      var servicesSectionCursor = document.querySelector('.atl-services-section-cursor');
    
      var mousemoveServicesSectionFn = function mousemoveServicesSectionFn(y) {
        return requestAnimationFrame(function () {
          _gsap.gsap.to(servicesSectionCursor, {
            duration: .6,
            ease: Power2.easeOut,
            top: window.mousePosY + y,
            left: window.mousePosX
          });
        });
      };
    
      _ScrollTrigger.ScrollTrigger.scrollerProxy("#content", {
        scrollTop: function scrollTop(value) {
          window.atlProperty = Math.abs(bodyScrollBar.scrollTop);
    
          if (arguments.length) {
            bodyScrollBar.scrollTop = value;
          }
    
          if (servicesSectionCursor !== null) {
            mousemoveServicesSectionFn(bodyScrollBar.scrollTop);
          }
    
          return bodyScrollBar.scrollTop;
        }
      });
    
      bodyScrollBar.addListener(_ScrollTrigger.ScrollTrigger.update);
    
      _ScrollTrigger.ScrollTrigger.defaults({
        scroller: content
      });
    }
    
    },{"gsap/dist/ScrollTrigger":8,"gsap/dist/gsap":9,"smooth-scrollbar":12}],5:[function(require,module,exports){
    "use strict";
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    
    var _gsap = require("gsap/dist/gsap");
    
    var _ScrollTrigger = require("gsap/dist/ScrollTrigger");
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    _gsap.gsap.registerPlugin(_ScrollTrigger.ScrollTrigger);
    
    var HomeSlider = /*#__PURE__*/function () {
      function HomeSlider(first_time) {
        _classCallCheck(this, HomeSlider);
    
        return this;
      }
    
      _createClass(HomeSlider, [{
        key: "run",
        value: function run(first_time, data) {
          var _this = this;
    
          this.container = data.querySelector('.sl_wv_container');
          this.initialized = false;
    
          if (this.container !== null && !this.initialized) {
            this.initialized = true;
            this.timerForSlide = 0;
            this.planeElement = this.container.querySelector(".slides_images .plane");
            this.textureElements = this.container.querySelectorAll(".slides_images .plane .planeImage");
            this.link = this.container.querySelector('.sl_wv_image_link');
            this.current_slide = this.container.querySelector('.count_current');
            this.slidesState = {
              activeTextureIndex: 0,
              nextTextureIndex: 1,
              maxTextures: this.textureElements.length - 1,
              isChanging: false,
              transitionTimer: 0
            };
            this.vs = "\n                #ifdef GL_ES\n                    precision mediump float;\n                #endif\n\n                // default mandatory variables\n                attribute vec3 aVertexPosition;\n                attribute vec2 aTextureCoord;\n                uniform mat4 uMVMatrix;\n                uniform mat4 uPMatrix;\n\n                // textures matrices\n                uniform mat4 activeTextureMatrix;\n                uniform mat4 nextTextureMatrix;\n\n                // varyings : notice we've got 2 texture coords varyings\n                // visible texture / upcoming texture\n                varying vec3 vVertexPosition;\n                varying vec2 vActiveTextureCoord;\n                varying vec2 vNextTextureCoord;\n\n                // custom variables\n                uniform float uWave;\n\n                void main() {\n\n                    const float PI = 3.141592;\n                    vec3 vertexPosition = aVertexPosition;\n                    vec2 activeTextureCoord = vActiveTextureCoord;\n\n                    vertexPosition.z += sin(vertexPosition.x * 3.141592 + uWave * 0.03) * 0.02;\n                    vertexPosition.x += sin(vertexPosition.y * 3.141592 + uWave * 0.03) * 0.01;\n\n                    gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);\n                    vActiveTextureCoord = (activeTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;\n                    vNextTextureCoord = (nextTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;\n                    vVertexPosition = vertexPosition;\n                }";
            this.fs = "\n\t\t\t\t#ifdef GL_ES\n\t\t\t\t\tprecision mediump float;\n\t\t\t\t#endif\n\n\t\t\t\tvarying vec3 vVertexPosition;\n\t\t\t\tvarying vec2 vActiveTextureCoord;\n\t\t\t\tvarying vec2 vNextTextureCoord;\n\n\t\t\t\tuniform sampler2D activeTexture;\n\t\t\t\tuniform sampler2D nextTexture;\n\n\t\t\t\t// custom variables\n\t\t\t\tuniform float uWave;\n\t\t\t\tuniform float uTransitionTimer;\n\n            \tvoid main( void ) {\n\n\t\t\t\t\tvec2 textureCoord = vActiveTextureCoord;\n\t\t\t\t\tvec2 activeTextureCoord = vActiveTextureCoord;\n\t\t\t\t\tvec2 nextTextureCoord = vNextTextureCoord;\n\n\t\t\t\t\tconst float PI = 3.141592;\n\t\t\t\t\ttextureCoord.y = (1.5 - uTransitionTimer) + sin(textureCoord.x*4.0 * PI - uTransitionTimer * 0.3) * 0.02;\n\n\n\t\t\t\t\t// just display our texture\n\t\t\t\t\tif( activeTextureCoord .y > textureCoord.y){\n\t\t\t\t\t\tgl_FragColor = texture2D(nextTexture, nextTextureCoord);\n\t\t\t\t\t}else{\n\t\t\t\t\t\tgl_FragColor = texture2D(activeTexture, activeTextureCoord);\n\t\t\t\t\t}\n\t\t        }";
            this.params = {
              autoloadSources: false,
              vertexShader: this.vs,
              fragmentShader: this.fs,
              // vertexShaderID: this.vs,
              // fragmentShaderID: this.fs,
              widthSegments: 100,
              heightSegments: 100,
              uniforms: {
                transitionTimer: {
                  name: "uTransitionTimer",
                  type: "1f",
                  value: 0.0
                },
                wave: {
                  name: "uWave",
                  type: "1f",
                  value: 0.0
                }
              }
            };
            this.curtains = new Curtains({
              container: "sl_wv_canvas",
              watchScroll: false,
              autoResize: false,
              pixelRatio: 2.5
            }).onSuccess(function () {// let ios = /iphone|ipod|ipad/.test( window.navigator.userAgent.toLowerCase() );
              // let isAppleDevice = navigator.userAgent.includes('Macintosh');
              // if(ios || isAppleDevice ){
              //     curtains.updateScrollValues(0, 0);
              // }
            }).onError(function () {
              document.body.classList.add("no-curtains", "planes-loaded");
              console.log("planes-error");
            }).onContextLost(function () {
              _this.curtains.restoreContext();
            });
            this.loader = new TextureLoader(this.curtains);
            this.plane = new Plane(this.curtains, this.planeElement, this.params);
            this.mainTlslider = _gsap.gsap.timeline();
            this.timeTlslider = this.container.getAttribute("data-anim_duration");
            this.timeDelayProgressTlslider = this.container.getAttribute("data-delay_duration");
            this.progressTlslider = "";
            this.timerForSlide = 0;
            this.autoTextWrite();
            this.addImageTexture(this.textureElements, 0);
          }
    
          return this;
        }
      }, {
        key: "addImageTexture",
        value: function addImageTexture(arr, index) {
          var _this2 = this;
    
          var image = new Image();
          image.crossOrigin = "anonymous";
          image.src = arr[index].getAttribute("data-src");
          this.loader.loadImage(image, {
            sampler: "uTexture"
          }, function (texture) {
            _this2.plane.addTexture(texture);
    
            if (arr[index + 1]) {
              _this2.addImageTexture(_this2.textureElements, index + 1);
    
              if (index === 0) {
                _this2.afterLoadTexture();
              }
            } else {// afterLoadTexture()
            }
          }, function (image, error) {
            console.log(image, error);
          });
        }
      }, {
        key: "afterLoadTexture",
        value: function afterLoadTexture() {
          var _this3 = this;
    
          var activeTexture = this.plane.createTexture({
            sampler: "activeTexture",
            fromTexture: this.plane.textures[this.slidesState.activeTextureIndex]
          });
          var nextTexture = this.plane.createTexture({
            sampler: "nextTexture",
            fromTexture: this.plane.textures[this.slidesState.nextTextureIndex]
          });
          this.plane.onRender(function () {
            _this3.curtains.needRender();
    
            _this3.plane.uniforms.transitionTimer.value = _this3.slidesState.transitionTimer;
            _this3.plane.uniforms.wave.value++;
          });
          this.onClickSlNav(activeTexture, nextTexture);
          this.timerForSlideFun(activeTexture, nextTexture);
          this.slider_Counter(this.slidesState.activeTextureIndex + 1); // this.mouseHoverSlider();
    
          this.firstLoadAnim();
          this.scroll_navigation(this.activeTexture, this.nextTexture);
          document.body.classList.add("planes-loaded"); // console.log("planes-loaded");
        }
      }, {
        key: "scroll_navigation",
        value: function scroll_navigation(activeTexture, nextTexture) {
          var total_slides = this.slidesState.maxTextures + 1;
          var sector = (1 / total_slides).toFixed(2);
          var temDirection = '';
    
          _ScrollTrigger.ScrollTrigger.create({
            trigger: '.to-fix',
            pin: true,
            start: "top top",
            end: "+=" + (jQuery('.to-fix-parent').height() - jQuery('.to-fix').height())
          });
        }
      }, {
        key: "destroy",
        value: function destroy() {
          if (this.initialized) {
            this.initialized = false;
            this.progressTlslider.kill();
            this.curtains.dispose();
            clearTimeout(this.timerForSlide);
            this.timerForSlide = 0;
          }
    
          return true;
        }
      }, {
        key: "autoTextWrite",
        value: function autoTextWrite() {
          this.container.querySelectorAll(".text .text_wrap").forEach(function (elem) {
            var tempSpeedKoff = elem.getBoundingClientRect().width / 1000 * 1920 / window.innerWidth;
    
            if (elem.classList.contains("line1")) {
              _gsap.gsap.to(elem, {
                duration: 5 * tempSpeedKoff,
                repeat: -1,
                x: "-50%",
                ease: "none"
              });
            }
    
            if (elem.classList.contains("line2")) {
              _gsap.gsap.from(elem, {
                duration: 5 * tempSpeedKoff,
                repeat: -1,
                x: "-50%",
                ease: "none"
              });
            }
          });
        }
      }, {
        key: "slider_Counter",
        value: function slider_Counter(new_index) {
          this.current_slide.innerHTML = new_index;
        }
      }, {
        key: "onClickSlNav",
        value: function onClickSlNav(activeTexture, nextTexture) {
          var _this4 = this;
    
          this.container.querySelectorAll(".prev,.next").forEach(function (elem) {
            elem.addEventListener('mousedown', function () {
              var temDirection = '';
    
              if (elem.classList.contains("prev")) {
                temDirection = "up";
              }
    
              if (elem.classList.contains("next")) {
                temDirection = "down";
              }
    
              clearTimeout(_this4.timerForSlide);
    
              _this4.nextSlide(temDirection, activeTexture, nextTexture);
            });
          });
        }
      }, {
        key: "timerForSlideFun",
        value: function timerForSlideFun(activeTexture, nextTexture) {
          var _this5 = this;
    
          if (this.initialized) {
            this.progressTlslider = _gsap.gsap.to(".sl_wv_container .sl_progress_value", {
              duration: this.timeDelayProgressTlslider,
              scaleX: 1,
              transformOrigin: "0% 50%",
              ease: 'none'
            });
            this.timerForSlide = setTimeout(function () {
              _this5.nextSlide("down", activeTexture, nextTexture);
            }, this.timeDelayProgressTlslider * 1000);
          }
        }
      }, {
        key: "nextSlide",
        value: function nextSlide(direction, activeTexture, nextTexture) {
          var _this6 = this;
    
          if (!this.slidesState.isChanging && this.initialized) {
            this.progressTlslider.progress(1);
            this.curtains.enableDrawing();
    
            if (direction == "up") {
              if (this.slidesState.activeTextureIndex - 1 >= 0) {
                this.slidesState.nextTextureIndex = this.slidesState.activeTextureIndex - 1;
              } else {
                this.slidesState.nextTextureIndex = this.slidesState.maxTextures;
              }
    
              this.slidesState.isChanging = true;
              nextTexture.setSource(this.plane.images[this.slidesState.nextTextureIndex]);
            }
    
            if (direction == "down") {
              if (this.slidesState.activeTextureIndex < this.slidesState.maxTextures) {
                this.slidesState.nextTextureIndex = this.slidesState.activeTextureIndex + 1;
              } else {
                this.slidesState.nextTextureIndex = 0;
              }
    
              this.slidesState.isChanging = true;
              nextTexture.setSource(this.plane.images[this.slidesState.nextTextureIndex]);
            } ////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////
    
    
            var slDataAtt = {
              activeBg: this.container.querySelector(".slides_text .slide:nth-child(" + (this.slidesState.activeTextureIndex + 1) + ")").getAttribute("data-bg_color"),
              nextBg: this.container.querySelector(".slides_text .slide:nth-child(" + (this.slidesState.nextTextureIndex + 1) + ")").getAttribute("data-bg_color"),
              activeLink: this.container.querySelector(".slides_text .slide:nth-child(" + (this.slidesState.nextTextureIndex + 1) + ")").getAttribute("data-slide_link")
            };
            this.link.setAttribute("href", slDataAtt.activeLink);
            var this_slider = this;
            this.mainTlslider = _gsap.gsap.timeline({
              onComplete: function onComplete() {
                this_slider.curtains.disableDrawing();
                this_slider.slidesState.isChanging = false;
                this_slider.slidesState.activeTextureIndex = this_slider.slidesState.nextTextureIndex;
                activeTexture.setSource(this_slider.plane.images[this_slider.slidesState.activeTextureIndex]);
                this_slider.slidesState.transitionTimer = 0;
                this_slider.timerForSlideFun(activeTexture, nextTexture);
                this_slider.progressTlslider.restart();
              }
            }).set(".sl_wv_container .slides_text .slide .text_for_anim", {
              y: "-110%"
            }, "qq").set(".sl_wv_container .slides_text .slide:nth-child(" + (this.slidesState.activeTextureIndex + 1) + ") .text_for_anim", {
              y: "0%"
            }, "qq").to(".sl_wv_container .slides_text .slide:nth-child(" + (this.slidesState.activeTextureIndex + 1) + ") .text_for_anim", {
              duration: 1.25,
              y: "110%",
              ease: "sine.in",
              stagger: {
                each: 0.1,
                from: "end"
              },
              onComplete: function onComplete() {
                _this6.slider_Counter(_this6.slidesState.nextTextureIndex + 1);
              }
            }, "qq").to(".sl_wv_container .slides_text .slide:nth-child(" + (this.slidesState.nextTextureIndex + 1) + ") .text_for_anim", {
              duration: 1.25,
              y: "0%",
              ease: "sine.out",
              stagger: {
                each: 0.1,
                from: "start"
              }
            }, '>-0.75').to(this.slidesState, {
              duration: 2,
              transitionTimer: 2,
              ease: 'none'
            }, 'qq').set(".sl_wv_container", {
              background: "linear-gradient(0deg, " + slDataAtt.activeBg + " 0%, " + slDataAtt.activeBg + " 100%)"
            }, 'qq').to(".sl_wv_container", {
              duration: 0.8,
              background: "linear-gradient(0deg, " + slDataAtt.activeBg + " 0%, " + slDataAtt.nextBg + " 100%)",
              ease: "none"
            }, '>').to(".sl_wv_container", {
              duration: 0.8,
              background: "linear-gradient(0deg, " + slDataAtt.nextBg + " 0%, " + slDataAtt.nextBg + " 100%)",
              ease: "none"
            }, '>') // .to(".sl_wv_container .sl_progress_value",{duration:1,scaleX:1,transformOrigin:"0% 50%",ease:'sine.in'},"qq")
            .to(".sl_wv_container .sl_progress_value", {
              duration: 2,
              scaleX: 0,
              transformOrigin: "100% 50%",
              ease: 'none'
            }, 0);
            this.mainTlslider.duration(this.timeTlslider);
          }
        }
      }, {
        key: "firstLoadAnim",
        value: function firstLoadAnim() {
          var slDataAtt = {
            activeBg: this.container.querySelector(".slides_text .slide:nth-child(" + (this.slidesState.activeTextureIndex + 1) + ")").getAttribute("data-bg_color"),
            activeLink: this.container.querySelector(".slides_text .slide:nth-child(1)").getAttribute("data-slide_link")
          };
          this.link.setAttribute("href", slDataAtt.activeLink);
    
          _gsap.gsap.timeline().set(".sl_wv_container .slides_text .slide .text_for_anim", {
            y: "-120%"
          }).set(".sl_wv_container", {
            background: "linear-gradient(0deg, " + slDataAtt.activeBg + " 0%, " + slDataAtt.activeBg + " 100%)"
          }, 0).to(".sl_wv_container .slides_container", {
            duration: 0.5,
            opacity: 1
          }).to(".sl_wv_container .slides_text .slide:nth-child(" + (this.slidesState.activeTextureIndex + 1) + ") .text_for_anim", {
            duration: 1,
            y: "0%",
            ease: "sine.out",
            stagger: {
              each: 0.1,
              from: "end"
            }
          }, "<").to(".sl_wv_container .sl_progress_value", {
            duration: this.timeDelayProgressTlslider,
            scaleX: 0,
            transformOrigin: "100% 50%",
            ease: 'none'
          }, '>-' + this.timeDelayProgressTlslider);
    
          _gsap.gsap.to(".sl_wv_container .sl_progress_value", {
            duration: this.timeDelayProgressTlslider,
            scaleX: 1,
            transformOrigin: "0% 50%",
            ease: 'none'
          });
        }
      }, {
        key: "mouseHoverSlider",
        value: function mouseHoverSlider() {
          var _this7 = this;
    
          var timerForScale = 0;
          var mouseDeltaPos = {
            x: 0,
            y: 0
          };
          this.container.addEventListener("mousemove", function (e) {
            if (Math.abs(mouseDeltaPos.x - e.clientX) > 10 || Math.abs(mouseDeltaPos.y - e.clientY) > 10) {
              mouseDeltaPos.x = e.clientX;
              mouseDeltaPos.y = e.clientY;
              clearTimeout(timerForScale);
    
              _gsap.gsap.to(".sl_sw_mouse_hover", {
                duration: 0.2,
                x: mouseDeltaPos.x,
                y: mouseDeltaPos.y,
                ease: "none"
              });
    
              _gsap.gsap.to(".sl_sw_mouse_hover", {
                duration: 0.3,
                scale: 1,
                ease: "none"
              });
    
              timerForScale = setTimeout(function () {
                _gsap.gsap.to(".sl_sw_mouse_hover", {
                  duration: 0.3,
                  scale: 0.8,
                  ease: "none",
                  transformOrigin: "0% 0%"
                });
              }, 300);
            }
          });
          this.container.querySelector(".sl_wv_container").addEventListener("mouseleave", function (elem) {
            clearTimeout(timerForScale);
    
            _gsap.gsap.to(".sl_sw_mouse_hover", {
              duration: 0.3,
              x: window.innerWidth / 2,
              y: window.innerHeight / 2,
              scale: 0,
              ease: "none"
            });
          }); /////
    
          this.container.querySelector(".sl_wv_container .prev").addEventListener("mouseenter", function () {
            _this7.container.querySelector(".sl_sw_mouse_hover .text").innerHTML = _this7.container.querySelector(".sl_sw_mouse_hover").getAttribute("data-prev_text");
          });
          this.container.querySelector(".sl_wv_container .next").addEventListener("mouseenter", function () {
            _this7.container.querySelector(".sl_sw_mouse_hover .text").innerHTML = _this7.container.querySelector(".sl_sw_mouse_hover").getAttribute("data-next_text");
          });
          this.container.querySelector(".sl_wv_container a").addEventListener("mouseenter", function () {
            _this7.container.querySelector(".sl_sw_mouse_hover .text").innerHTML = _this7.container.querySelector(".sl_sw_mouse_hover").getAttribute("data-link_text");
          });
          this.container.querySelector(".sl_wv_container .sl_wv_image_link").addEventListener("mouseenter", function () {
            _this7.container.querySelector(".sl_sw_mouse_hover .text").innerHTML = _this7.container.querySelector(".sl_sw_mouse_hover").getAttribute("data-link_text");
          });
        }
      }]);
    
      return HomeSlider;
    }();
    
    var _default = HomeSlider = new HomeSlider();
    
    exports.default = _default;
    
    },{"gsap/dist/ScrollTrigger":8,"gsap/dist/gsap":9}],6:[function(require,module,exports){
    "use strict";
    
    var _core = _interopRequireDefault(require("@barba/core"));
    
    var _gsap = require("gsap/dist/gsap");
    
    var _ScrollTrigger = require("gsap/dist/ScrollTrigger");
    
    var _scroll = _interopRequireDefault(require("./app/scroll"));
    
    var _swiperBundle = _interopRequireDefault(require("swiper/swiper-bundle.js"));
    
    var _slidesImages = _interopRequireDefault(require("./app/slides-images"));
    
    var _cursor = _interopRequireDefault(require("./app/cursor"));
    
    var _projectsSingle = _interopRequireDefault(require("./app/projects-single"));
    
    var _projectImages = _interopRequireDefault(require("./app/project-images"));
    
    var _jquery = _interopRequireDefault(require("selectboxit/src/javascripts/jquery.selectBoxIt"));
    
    var _sharer = _interopRequireDefault(require("sharer.js/sharer"));
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
    
    function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
    
    function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
    
    function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
    
    function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
    
    function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
    
    _gsap.gsap.registerPlugin(_ScrollTrigger.ScrollTrigger); // Functions
    
    
    function scrollbarWidth() {
      var documentWidth = parseInt(document.documentElement.clientWidth),
          windowsWidth = parseInt(window.innerWidth);
      return windowsWidth - documentWidth;
    }
    
    var $ = jQuery;
    var $body = $('body');
    
    function atollInit(namespace, container) {
      // VAR
      var widthScrollBarRec = window.innerWidth - document.documentElement.clientWidth,
          windowWidth = window.innerWidth || $(window).width();
    
      if (typeof bodyScrollBar !== 'undefined') {
        bodyScrollBar.scrollTop = 0;
      }
    
      setTimeout(function () {
        window.scrollTo(0, 0);
      }, 10);
    
      var atlHasClass = function atlHasClass(el, hasClass) {
        var element = document.querySelector(el);
    
        if (element !== null && element.classList.contains(hasClass)) {
          return 1;
        } else {
          return 0;
        }
      };
    
      if (atlHasClass('body', 'home') || atlHasClass('.js-hero-projects-single', 'atl-hero-projects-single_dark')) {
        $body.removeClass('atl-block-white').addClass('atl-block-dark');
        setTimeout(function () {
          $body.removeClass('atl-block-white').addClass('atl-block-dark');
        }, 70);
      } else {
        $body.removeClass('atl-block-dark').addClass('atl-block-white');
        setTimeout(function () {
          $body.removeClass('atl-block-dark').addClass('atl-block-white');
        }, 70);
      } // Trigger Color Blocks
    
    
      _gsap.gsap.utils.toArray('.atl-wrapper [data-color]').forEach(function (elem) {
        var dataColor = elem.getAttribute('data-color'),
            dataStart = elem.getAttribute('data-start'),
            dataStartMobile = elem.getAttribute('data-start-mobile'),
            dataEnd = elem.getAttribute('data-end');
        dataStart = dataStart || '30%';
        dataEnd = dataEnd || 'bottom';
    
        if (dataStartMobile) {
          if (windowWidth < 992) {
            dataStart = dataStartMobile;
          }
        }
    
        _ScrollTrigger.ScrollTrigger.create({
          trigger: elem,
          start: dataStart + ' top',
          end: dataEnd + ' top',
          onUpdate: function onUpdate(self) {
            console.log('progress: ' + self.progress);
            console.log('direction: ' + self.direction);
    
            if (self.progress > 0 && self.progress <= 0.99 && self.direction === 1) {
              if (dataColor === 'dark') {
                $body.removeClass('atl-block-dark').addClass('atl-block-white');
              } else if (dataColor === 'white') {
                $body.removeClass('atl-block-white').addClass('atl-block-dark');
              }
            } else if (self.progress < 0.2 && self.direction === -1) {
              if (dataColor === 'dark') {
                $body.removeClass('atl-block-white').addClass('atl-block-dark');
              } else if (dataColor === 'white') {
                $body.removeClass('atl-block-dark').addClass('atl-block-white');
              }
            } else if (self.progress < 0.2 && self.direction === 1) {
              if (dataEnd !== 'bottom') {
                if (dataColor === 'dark') {
                  $body.removeClass('atl-block-white').addClass('atl-block-dark');
                } else if (dataColor === 'white') {
                  $body.removeClass('atl-block-dark').addClass('atl-block-white');
                }
              }
            }
          } //markers: true
    
        });
      }); // BTN
    
    
      $('.atl-btn').each(function () {
        var $this = $(this),
            atl_text = $this.data('atl-text'),
            arrayOfStrings = atl_text.split(' '),
            html = '',
            addHTML = '',
            ind = 50;
        arrayOfStrings.forEach(function (item, i, arr) {
          addHTML += "<span style='transition-delay:" + ind + "ms'>" + item + "</span>\n";
          ind = ind + 35;
        });
        html += '<span class="atl-btn__line">' + addHTML + '</span>';
        html += '<span class="atl-btn__line-hover">' + addHTML + '</span>';
        $this.append(html);
      });
      $('.atl-btn-lite').each(function () {
        var $this = $(this),
            atl_text = $this.data('atl-text'),
            arrayOfStrings = atl_text.split(' '),
            html = '<span class="atl-btn-lite__container">',
            addHTML = '',
            ind = 50;
        arrayOfStrings.forEach(function (item, i, arr) {
          addHTML += "<span style='transition-delay:" + ind + "ms'>" + item + "</span>\n";
          ind = ind + 35;
        });
        html += '<span class="atl-btn-lite__line">' + addHTML + '</span>';
        html += '<span class="atl-btn-lite__line-hover">' + addHTML + '</span>';
        html += '</span>';
        $this.append(html);
      }); // HEADER
    
      var header = $('.js-header'),
          open_menu = header.find('.js-open-menu'),
          nav_overlay = $('.js-nav-overlay'),
          $path = nav_overlay.find('.js-nav-overlay-path'),
          start2 = "M 0 50 V 0 H 100 V 50 C 100 50 50 100 0 50 z",
          start3 = "M 0 100 V 0 H 100 V 100 C 100 100 50 50 0 100 z",
          end2 = "M 0 100 V 0 H 100 V 100 C 100 100 50 100 0 100 z",
          end3 = "M 0 0 V 0 H 100 V 0 C 100 0 50 0 0 0 z";
      open_menu.on('click', function () {
        if (open_menu.hasClass('disabled')) {
          return '';
        }
    
        open_menu.addClass('disabled');
        open_menu.toggleClass('open-menu-active');
    
        if (open_menu.hasClass('open-menu-active')) {
          header.addClass('header-menu-active');
    
          _gsap.gsap.to('.js-nav', {
            opacity: 1,
            visibility: 'visible',
            duration: 0.1,
            ease: Power4.easeInOut
          });
    
          _gsap.gsap.timeline().to('.atl-header-nav li', {
            y: 0,
            opacity: 1,
            delay: .7,
            stagger: 0.05,
            duration: .5,
            ease: Power1.inOut
          });
    
          _gsap.gsap.to(nav_overlay[0], {
            duration: 0,
            delay: 0,
            visibility: 'visible'
          });
    
          _gsap.gsap.timeline({
            paused: false
          }).to($path[0], {
            duration: .4,
            attr: {
              d: start2
            },
            ease: Power2.easeIn
          });
    
          _gsap.gsap.timeline({
            paused: false
          }).to($path[0], {
            duration: .6,
            delay: .3,
            attr: {
              d: end2
            },
            ease: Power2.easeOut
          });
    
          _gsap.gsap.set(open_menu, {
            delay: 1.3,
            onComplete: function onComplete() {
              open_menu.removeClass('disabled');
            }
          });
        } else {
          setTimeout(function () {
            header.removeClass('header-menu-active');
          }, 800);
    
          var tlEnd = _gsap.gsap.timeline({
            paused: false
          });
    
          tlEnd.to('.atl-header-nav li', {
            opacity: 0,
            stagger: -0.06,
            duration: .18,
            ease: Power1.easeInOut
          });
    
          _gsap.gsap.to('.js-nav', {
            delay: 0.4,
            opacity: 0,
            visibility: 'hidden',
            duration: 0.1,
            ease: Power4.easeInOut
          });
    
          tlEnd.to('.atl-header-nav li', {
            y: 40,
            stagger: 0.02,
            duration: .1,
            ease: Power1.easeInOut
          });
    
          _gsap.gsap.to(nav_overlay[0], {
            duration: 0,
            delay: 1.6,
            visibility: 'hidden'
          });
    
          _gsap.gsap.timeline({
            paused: false
          }).to($path[0], {
            duration: .5,
            attr: {
              d: start3
            },
            ease: Power2.easeIn
          });
    
          _gsap.gsap.timeline({
            paused: false
          }).to($path[0], {
            duration: .4,
            delay: .3,
            attr: {
              d: end3
            },
            ease: Power2.easeOut
          });
    
          _gsap.gsap.set(open_menu, {
            delay: 1.6,
            onComplete: function onComplete() {
              open_menu.removeClass('disabled');
            }
          });
        }
      });
    
      _core.default.hooks.after(function () {
        open_menu.removeClass('open-menu-active');
        setTimeout(function () {
          header.removeClass('header-menu-active');
        }, 800);
    
        var tlEndE = _gsap.gsap.timeline({
          paused: false
        });
    
        tlEndE.to('.atl-header-nav li', {
          opacity: 0,
          stagger: -0.06,
          duration: .18,
          ease: Power1.easeInOut
        });
    
        _gsap.gsap.to('.js-nav', {
          delay: 0.4,
          opacity: 0,
          visibility: 'hidden',
          duration: 0.1,
          ease: Power4.easeInOut
        });
    
        tlEndE.to('.atl-header-nav li', {
          y: 40,
          stagger: 0.02,
          duration: .1,
          ease: Power1.easeInOut
        });
    
        _gsap.gsap.to(nav_overlay[0], {
          duration: 0,
          delay: 1.6,
          visibility: 'hidden'
        });
    
        _gsap.gsap.timeline({
          paused: false
        }).to($path[0], {
          duration: .7,
          attr: {
            d: start3
          },
          ease: Power2.easeIn
        });
    
        _gsap.gsap.timeline({
          paused: false
        }).to($path[0], {
          duration: .6,
          delay: .4,
          attr: {
            d: end3
          },
          ease: Power2.easeOut
        });
    
        _gsap.gsap.set(open_menu, {
          delay: 1.6,
          onComplete: function onComplete() {
            open_menu.removeClass('disabled');
          }
        });
      }); // ----------------------------------------------------------------------------
      // ----------------------------------------------------------------------------
      // HERO BANNER
    
    
      $('.js-hero-banner').each(function () {
        var $this = $(this),
            banner_header = $this.find('.js-hero-banner-header'),
            banner_title = $this.find('.js-hero-banner-title'),
            banner_trigger = $this.find('.js-banner-trigger'),
            animation_text = $this.find('.js-animation-text'),
            video_mobil_open = $this.find('.js-hero-banner-video-mobil-open'),
            video_mobil = $this.find('.js-hero-banner-video-mobile'),
            videoElem = video_mobil.find('video');
    
        if (windowWidth >= 768) {
          animation_text.each(function () {
            var $anim = $(this),
                p = (window.innerWidth - 1350) / 2 + widthScrollBarRec;
    
            if (!$anim.hasClass('animation-text-right')) {
              if (p >= 20) {
                $anim.css('left', p);
              } else {
                $anim.css('left', 20);
              }
    
              var x = '20%',
                  xEnd = ($anim[0].scrollWidth - $this[0].offsetWidth / 2) / 1.2 * -1;
    
              _gsap.gsap.fromTo($anim[0], {
                x: x
              }, {
                x: xEnd,
                scrollTrigger: {
                  trigger: $this[0],
                  scrub: 2
                }
              });
            } else {
              p = p + 100;
    
              if (p >= 20) {
                $anim.css('right', p);
              } else {
                $anim.css('right', 20);
              }
    
              var _x = ($anim[0].scrollWidth - $this[0].offsetWidth / 2) / 1.2 * -1,
                  _xEnd = '50%';
    
              _gsap.gsap.fromTo($anim[0], {
                x: _x
              }, {
                x: _xEnd,
                scrollTrigger: {
                  trigger: $this[0],
                  scrub: 2
                }
              });
            }
          });
        }
    
        if (windowWidth >= 992) {
          _gsap.gsap.fromTo(banner_title[0], {
            y: 0
          }, {
            y: banner_header[0].offsetHeight / 1.2,
            scrollTrigger: {
              trigger: banner_trigger[0],
              scrub: true
            }
          });
        }
    
        var header = document.querySelector('.js-header'),
            heroBannerHeaderSite = document.querySelector('.atl-hero-banner__header-site'),
            heroBannerHeaderScroll = document.querySelector('.atl-hero-banner__header-scroll');
    
        if (atlHasClass('body', 'home')) {
          _gsap.gsap.set(header, {
            opacity: 0
          });
        }
    
        _gsap.gsap.set(heroBannerHeaderSite, {
          opacity: 0,
          x: -150
        });
    
        _gsap.gsap.set(heroBannerHeaderScroll, {
          opacity: 0,
          x: 150
        });
    
        if (atlHasClass('body', 'home')) {
          _gsap.gsap.to(header, {
            duration: .6,
            delay: 1,
            opacity: 1
          });
        }
    
        _gsap.gsap.to(heroBannerHeaderSite, {
          duration: .6,
          delay: 1.4,
          opacity: 1,
          x: 0
        });
    
        _gsap.gsap.to(heroBannerHeaderScroll, {
          duration: .6,
          delay: 1.4,
          opacity: 1,
          x: 0
        }); // Mobile Video
    
    
        _gsap.gsap.set(video_mobil, {
          pointerEvents: 'none',
          width: '230vw',
          height: '230vw',
          clipPath: 'circle(0% at 50% 50%)'
        });
    
        video_mobil_open.on('click', function () {
          _gsap.gsap.to(document.querySelector('.js-header'), {
            duration: 0,
            opacity: 0,
            visibility: 'hidden'
          });
    
          _gsap.gsap.to(document.querySelector('body'), {
            duration: 0,
            overflow: 'hidden'
          });
    
          _gsap.gsap.to(video_mobil, {
            duration: .6,
            ease: Power2.easeOut,
            xPercent: -50,
            yPercent: -50,
            top: '50%',
            left: '50%',
            pointerEvents: 'auto',
            clipPath: 'circle(50% at 50% 50%)'
          });
    
          _gsap.gsap.to(videoElem, {
            delay: .5,
            duration: .1,
            opacity: 1
          });
    
          setTimeout(function () {
            videoElem[0].play();
          }, 550);
        });
        $(window).on('scroll', function () {
          if (pageYOffset > 30) {
            _gsap.gsap.to(video_mobil_open[0], {
              duration: .5,
              opacity: 0,
              visibility: 'hidden'
            });
          } else {
            _gsap.gsap.to(video_mobil_open[0], {
              duration: .5,
              opacity: 1,
              visibility: 'visible'
            });
          }
        });
        video_mobil.on('click', function () {
          _gsap.gsap.to(document.querySelector('.js-header'), {
            duration: 0,
            delay: .4,
            zIndex: 9999,
            opacity: '',
            visibility: ''
          });
    
          _gsap.gsap.to(document.querySelector('body'), {
            duration: 0,
            delay: .4,
            overflow: ''
          });
    
          _gsap.gsap.to(video_mobil, {
            duration: .6,
            top: 'calc(100vh - 50%)',
            yPercent: 0
          });
    
          _gsap.gsap.to(video_mobil, {
            duration: 1,
            ease: Power2.easeOut,
            pointerEvents: 'none',
            clipPath: 'circle(0% at 50% 50%)'
          });
    
          _gsap.gsap.to(videoElem, {
            delay: 0,
            duration: .1,
            opacity: 0
          });
    
          videoElem[0].pause();
          videoElem[0].currentTime = 0;
        });
      }); // Experts
    
      function appendNCopies(n, original, appendTo) {
        for (var i = 0; i < n; i++) {
          var clone = original.cloneNode(true);
          appendTo.appendChild(clone);
        }
      }
    
      $('.js-experts').each(function () {
        var $this = $(this),
            experts_li = $this.find('.js-experts-li');
        experts_li.each(function () {
          var liHeight = this.offsetHeight,
              span = this.querySelector('span');
          appendNCopies(2, this.querySelector('span'), this);
    
          var experts_li_span = _toConsumableArray(this.querySelectorAll('span')),
              spanWidth = 0;
    
          experts_li_span.forEach(function (el, index) {
            spanWidth = spanWidth + el.offsetWidth;
          });
    
          if (windowWidth >= 768) {
            _gsap.gsap.set(this, {
              width: spanWidth
            });
    
            var x = this.scrollWidth * -1 + windowWidth,
                xEnd = this.scrollWidth * -1 / 1.25 + windowWidth;
    
            _gsap.gsap.fromTo(this, {
              x: x
            }, {
              x: xEnd,
              scrollTrigger: {
                trigger: $this.find('ul')[0],
                scrub: 2
              }
            });
          } else {
            var marquee = function marquee(which, time, direction) {
              var action;
    
              _gsap.gsap.set(which, {
                x: function x(i) {
                  return i * boxWidth;
                }
              });
    
              action = _gsap.gsap.timeline().to(which, {
                x: direction,
                modifiers: {
                  x: function x(_x2) {
                    return mod(parseFloat(_x2)) + "px";
                  }
                },
                duration: time,
                ease: 'none',
                repeat: -1
              });
              return action;
            };
    
            var boxWidth = span.offsetWidth,
                totalWidth = spanWidth,
                dirFromLeft = "+=" + totalWidth,
                dirFromRight = "-=" + totalWidth,
                mod = _gsap.gsap.utils.wrap(0, totalWidth);
    
            experts_li_span.forEach(function (el, index) {
              _gsap.gsap.set(el, {
                position: 'absolute',
                width: span.offsetWidth,
                height: span.offsetHeight
              });
            });
    
            _gsap.gsap.set(this, {
              position: 'relative',
              left: '50%',
              xPercent: -50,
              width: spanWidth,
              height: liHeight
            });
    
            var tl = _gsap.gsap.timeline().add(marquee(this.querySelectorAll('span'), 35, dirFromRight), 0);
          }
        });
      }); // Drag Slider
    
      $('.js-drag-slider').each(function () {
        var $this = $(this),
            wrap = $this.find('.js-drag-slider-wrap'),
            swiper_container = wrap.find('.swiper-container'),
            p = (window.innerWidth - 1286) / 2 + widthScrollBarRec;
    
        if (p >= 20) {
          wrap.css('padding-left', p);
        } else {
          wrap.css('padding-left', 20);
        }
    
        new _swiperBundle.default(swiper_container[0], {
          slidesPerView: 'auto',
          spaceBetween: 40,
          speed: 800,
          breakpoints: {
            576: {
              spaceBetween: 50
            },
            768: {
              spaceBetween: 65
            },
            992: {
              spaceBetween: 80
            },
            1200: {
              spaceBetween: 95
            }
          }
        });
      }); // Testimonial Section
    
      function magic(el, item_position) {
        var tmp = document.createElement('p');
        tmp = el.cloneNode(true);
        tmp.style.width = el.offsetWidth + 'px';
        tmp.style.position = 'absolute';
        tmp.style.left = '-2000px';
        tmp.innerHTML = 'foo';
        document.body.appendChild(tmp);
        var content = el.textContent.split(''),
            oneLineHeight = tmp.scrollHeight,
            lines = [],
            i = 0;
    
        while (i < content.length) {
          var line = tmp.innerHTML = '';
    
          while (i < content.length && tmp.scrollHeight <= oneLineHeight) {
            tmp.innerHTML = line += content[i++];
          }
    
          var lineEndIndex = i === content.length ? i : line.lastIndexOf(' ') + 1;
          lines.push(content.splice(0, lineEndIndex).join(''));
          i = 0;
        }
    
        tmp.remove();
    
        if (!item_position) {
          el.innerHTML = lines.map(function (line) {
            return '<div class="atl-testimonial-section__item-line"><div class="js-item-line">' + line + '</div></div>';
          }).join('');
        } else {
          el.innerHTML = lines.map(function (line) {
            return '<p><span>' + line + '</span></p>';
          }).join('');
        } //console.log(lines)
    
      }
    
      $('.js-testimonial-section').each(function () {
        var $this = $(this),
            swiper_container = $this.find('.swiper-container'),
            item_text = $this.find('.js-item-text'),
            prev = $this.find('.js-slider-prev'),
            next = $this.find('.js-slider-next'),
            delay_autoplay = $this.data('delay-autoplay') || 3000,
            prevIndex = 0,
            nextIndex = 0,
            swiper,
            autoplayStop = false;
        item_text.each(function () {
          magic(this, false);
        });
    
        if (windowWidth >= 768) {
          var pas = jQuery('.js-item-position p');
          pas.wrapInner('<span></span>');
        } else {
          jQuery('.js-item-position').each(function () {
            magic(this, true);
          });
        }
    
        _gsap.gsap.utils.toArray('.js-item-line').forEach(function (elem) {
          _gsap.gsap.set(elem, {
            y: '100%'
          });
        });
    
        _gsap.gsap.utils.toArray('.js-item-autor').forEach(function (elem) {
          _gsap.gsap.set(elem, {
            y: '100%'
          });
        });
    
        _gsap.gsap.utils.toArray('.js-item-position p span').forEach(function (elem) {
          _gsap.gsap.set(elem, {
            y: '100%'
          });
        });
    
        swiper = new _swiperBundle.default(swiper_container[0], {
          slidesPerView: 1,
          spaceBetween: 0,
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          },
    
          /*autoplay: {
              delay: 5000,
              disableOnInteraction: false,
              stopOnLastSlide: false
          },*/
          on: {
            init: function init(sw) {
              prevIndex = sw.previousIndex === undefined ? sw.slides.length - 1 : sw.previousIndex;
              nextIndex = sw.realIndex === sw.slides.length - 1 ? 0 : sw.realIndex + 1;
    
              _gsap.gsap.timeline().to(sw.slides[sw.realIndex].querySelectorAll('.js-item-line'), {
                y: 0,
                stagger: 0.1,
                duration: .5,
                ease: Power1.inOut
              });
    
              _gsap.gsap.timeline().to(sw.slides[sw.realIndex].querySelectorAll('.js-item-autor'), {
                y: 0,
                stagger: 0.1,
                duration: .5,
                ease: Power1.inOut
              });
    
              _gsap.gsap.timeline().to(sw.slides[sw.realIndex].querySelectorAll('.js-item-position p span'), {
                y: 0,
                stagger: 0.1,
                duration: .5,
                ease: Power1.inOut
              });
            },
            slideChange: function slideChange(sw) {
              prevIndex = sw.previousIndex === undefined ? sw.slides.length - 1 : sw.previousIndex;
              nextIndex = sw.realIndex === sw.slides.length - 1 ? 0 : sw.realIndex + 1;
    
              _gsap.gsap.timeline().to(sw.slides[sw.previousIndex].querySelectorAll('.js-item-line'), {
                y: '-100%',
                stagger: 0.05,
                duration: .4
              }).to(sw.slides[sw.realIndex].querySelectorAll('.js-item-line'), {
                y: 0,
                stagger: 0.05,
                duration: .4
              }).to(sw.slides[sw.previousIndex].querySelectorAll('.js-item-line'), {
                y: '100%',
                stagger: 0,
                duration: 0,
                ease: 'none'
              });
    
              _gsap.gsap.timeline().to(sw.slides[sw.previousIndex].querySelectorAll('.js-item-autor'), {
                y: '-100%',
                stagger: 0.06,
                duration: .4,
                delay: .3
              }).to(sw.slides[sw.realIndex].querySelectorAll('.js-item-autor'), {
                y: 0,
                stagger: 0.06,
                duration: .4
              }).to(sw.slides[sw.previousIndex].querySelectorAll('.js-item-autor'), {
                y: '100%',
                stagger: 0,
                duration: 0,
                ease: 'none'
              });
    
              _gsap.gsap.timeline().to(sw.slides[sw.previousIndex].querySelectorAll('.js-item-position p span'), {
                y: '-100%',
                stagger: 0.06,
                duration: .4,
                delay: .4
              }).to(sw.slides[sw.realIndex].querySelectorAll('.js-item-position p span'), {
                y: 0,
                stagger: 0.06,
                duration: .4
              }).to(sw.slides[sw.previousIndex].querySelectorAll('.js-item-position p span'), {
                y: '100%',
                stagger: 0,
                duration: 0,
                ease: 'none'
              });
            }
          }
        });
        prev.on('click', function () {
          autoplayStop = true;
          swiper.slideTo(prevIndex);
        });
        next.on('click', function () {
          autoplayStop = true;
          swiper.slideTo(nextIndex);
        });
        setInterval(function () {
          if (!autoplayStop) {
            swiper.slideTo(nextIndex);
          }
        }, delay_autoplay);
      }); // js-propos-hero-banner-new-title
    
      $('.js-propos-hero-banner-new-title').each(function () {
        var $this = $(this);
    
        if (windowWidth >= 768) {
          var pas = $this.find('p');
          pas.wrapInner('<span></span>');
        } else {
          /*$this.each(function () {
              magic(this, true)
          })*/
        }
    
        if (windowWidth >= 768) {
          _gsap.gsap.timeline().to('.js-propos-hero-banner-new-title p span', {
            y: 0,
            opacity: 1,
            delay: .2,
            stagger: 0.15,
            duration: .6,
            ease: Power3.easeOut
          });
        }
      }); // Projects Page Item
    
      if (windowWidth >= 992) {
        $('.js-projects-page-item').each(function () {
          var $this = $(this),
              line_title = $this.find('.js-item-line-title');
    
          if ($this.hasClass('atl-projects-page__item_1') || $this.hasClass('atl-projects-page__item_3') || $this.hasClass('atl-projects-page__item_5')) {
            var x = this.scrollWidth * -1 + windowWidth,
                xEnd = this.scrollWidth * -1 / 1.25 + windowWidth;
    
            _gsap.gsap.fromTo(line_title[0], {
              x: x
            }, {
              x: xEnd,
              scrollTrigger: {
                trigger: $this[0],
                scrub: 1.5
              }
            });
          } else if ($this.hasClass('atl-projects-page__item_2') || $this.hasClass('atl-projects-page__item_4')) {
            var _x3 = this.scrollWidth * -1 / 1.25 + windowWidth,
                _xEnd2 = this.scrollWidth * -1 + windowWidth;
    
            _gsap.gsap.fromTo(line_title[0], {
              x: _x3
            }, {
              x: _xEnd2,
              scrollTrigger: {
                trigger: $this[0],
                scrub: 1.5
              }
            });
          }
        });
      }
      /* ------------ Deleting placeholder focus ------------ */
    
    
      var inputPlaceholder = $('input, textarea');
      inputPlaceholder.on('focus', function () {
        $(this).data('placeholder', $(this).attr('placeholder'));
        $(this).attr('placeholder', '');
      });
      inputPlaceholder.on('blur', function () {
        $(this).attr('placeholder', $(this).data('placeholder'));
      });
      /* ---------- End Deleting placeholder focus ---------- */
    
      $("select").selectBoxIt({
        autoWidth: false //showFirstOption: false
    
      });
      var vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
    
      _gsap.gsap.utils.toArray('.atl-global-title').forEach(function (elem) {
        var content = elem.textContent.split(''),
            htmlTitle = '';
        content.forEach(function (el) {
          if (el !== " " && el !== "\n") {
            htmlTitle += '<span class="atl-global-title__wrap"><span class="atl-global-title__item">' + el + '</span></span>';
          } else {
            htmlTitle += el;
          }
        });
        elem.innerHTML = htmlTitle;
    
        var spanTitleElem = elem.querySelectorAll('.atl-global-title__item'),
            spanTitleWrap = elem.querySelectorAll('.atl-global-title__wrap'),
            tl = _gsap.gsap.timeline();
    
        _gsap.gsap.set(spanTitleElem, {
          yPercent: -150
        });
    
        _ScrollTrigger.ScrollTrigger.create({
          trigger: elem,
          start: 'top 80%',
          end: 'bottom',
          onToggle: function onToggle(self) {
            if (self.isActive) {
              tl.to(spanTitleElem, {
                yPercent: 0,
                stagger: 0.04,
                duration: .5,
                ease: Power3.easeOut
              }).to(spanTitleWrap, {
                // overflow: 'visible'
                overflow: 'auto'
              });
            } else if (!self.isActive && self.direction === -1) {
              /*tl.to(spanTitleElem, {
                  yPercent: -100,
                  stagger: 0.04,
                  duration: .5,
                  ease: Power3.easeOut
              })*/
            }
          } //markers: true
    
        });
      });
    
      _gsap.gsap.utils.toArray('.atl-global-title-line').forEach(function (elem) {
        var tmp = document.createElement('p');
        tmp = elem.cloneNode(true);
        tmp.style.width = elem.offsetWidth + 'px';
        tmp.style.position = 'absolute';
        tmp.style.left = '-2000px';
        tmp.innerHTML = 'foo';
        document.body.appendChild(tmp);
        var content = elem.textContent.split(''),
            oneLineHeight = tmp.scrollHeight,
            lines = [],
            i = 0;
    
        while (i < content.length) {
          var line = tmp.innerHTML = '';
    
          while (i < content.length && tmp.scrollHeight <= oneLineHeight) {
            tmp.innerHTML = line += content[i++];
          }
    
          var lineEndIndex = i === content.length ? i : line.lastIndexOf(' ') + 1;
          lines.push(content.splice(0, lineEndIndex).join(''));
          i = 0;
        }
    
        // tmp.remove();
        // elem.innerHTML = lines.map(function (line) {
        //   return '<div class="atl-global-title-line__item"><div class="js-title-line-item">' + line + '</div></div>';
        // }).join('');
    
        // var title_line_item = elem.querySelectorAll('.js-title-line-item'),
        //     tl = _gsap.gsap.timeline();
    
        var delayGl = 0;
    
        if ($(elem).hasClass('js-hero-banner-title') || $(elem).hasClass('atl-propos-hero-banner__title') || $(elem).hasClass('atl-propos-hero-banner__subtitle')) {
          delayGl = 0.5;
        }
    
        _ScrollTrigger.ScrollTrigger.create({
          trigger: elem,
          start: 'top 80%',
          end: 'bottom',
          onToggle: function onToggle(self) {
            if (self.isActive) {
              tl.to(title_line_item, {
                y: 0,
                opacity: 1,
                delay: delayGl,
                stagger: 0.15,
                duration: .6,
                ease: Power3.easeOut
              });
            } else if (!self.isActive && self.direction === -1) {
              /*tl.to(title_line_item, {
                  y: '100%',
                  opacity: 0,
                  stagger: 0.15,
                  duration: .6,
                  ease: Power3.easeOut
              })*/
            }
          } //markers: true
    
        });
      }); // Contact
    
    
      _gsap.gsap.utils.toArray('.atl-container .atl-contact__form-label-min').forEach(function (elem) {
        _gsap.gsap.set(elem, {
          x: -50,
          opacity: 0
        });
    
        _ScrollTrigger.ScrollTrigger.create({
          trigger: elem,
          start: 'top 80%',
          end: 'bottom',
          onToggle: function onToggle(self) {
            if (self.isActive) {
              _gsap.gsap.to(elem, {
                duration: .5,
                x: 0,
                opacity: 1
              });
            } else if (!self.isActive && self.direction === -1) {
              /*gsap.to(elem, {
                  duration: .5,
                  x: -50,
                  opacity: 0
              })*/
            }
          }
        });
      });
    
      _gsap.gsap.utils.toArray('.atl-container .atl-contact__form-label').forEach(function (elem) {
        _gsap.gsap.set(elem, {
          x: -50,
          opacity: 0
        });
    
        _ScrollTrigger.ScrollTrigger.create({
          trigger: elem,
          start: 'top 80%',
          end: 'bottom',
          onToggle: function onToggle(self) {
            if (self.isActive) {
              _gsap.gsap.to(elem, {
                duration: .5,
                x: 0,
                opacity: 1
              });
            } else if (!self.isActive && self.direction === -1) {
              /*gsap.to(elem, {
                  duration: .5,
                  x: -50,
                  opacity: 0
              })*/
            }
          }
        });
      });
    
      _gsap.gsap.utils.toArray('.atl-container .wpcf7-form-control.wpcf7-submit.atl-btn.atl-btn_submit').forEach(function (elem) {
        _gsap.gsap.set(elem, {
          x: 80,
          opacity: 0
        });
    
        _ScrollTrigger.ScrollTrigger.create({
          trigger: elem,
          start: 'top 80%',
          end: 'bottom',
          onToggle: function onToggle(self) {
            if (self.isActive) {
              _gsap.gsap.to(elem, {
                duration: .5,
                x: 0,
                opacity: 1
              });
            } else if (!self.isActive && self.direction === -1) {
              /*gsap.to(elem, {
                  duration: .5,
                  x: -50,
                  opacity: 0
              })*/
            }
          }
        });
      }); // js-projects-block-item
    
    
      _gsap.gsap.utils.toArray('.js-projects-block-item').forEach(function (elem) {
        var dataDelay = elem.getAttribute('data-delay');
    
        _gsap.gsap.set(elem, {
          opacity: 0
        });
    
        _ScrollTrigger.ScrollTrigger.create({
          trigger: elem,
          start: 'top 80%',
          end: 'bottom',
          onToggle: function onToggle(self) {
            if (self.isActive) {
              _gsap.gsap.to(elem, {
                duration: .6,
                delay: dataDelay,
                opacity: 1
              });
            }
          }
        });
      });
    
      if (window.innerWidth >= 1200) {
        _gsap.gsap.utils.toArray('.atl-image-parallax').forEach(function (elem) {
          elem.style.backgroundPosition = "50% ".concat(-innerHeight / 2, "px");
    
          _gsap.gsap.to(elem, {
            backgroundPosition: "50% ".concat(innerHeight / 2, "px"),
            ease: 'linear',
            scrollTrigger: {
              trigger: elem,
              scrub: true
            }
          });
        });
      }
    
      var contact = _toConsumableArray(document.querySelectorAll('.js-contact'));
    
      if (contact) {
        contact.forEach(function (el) {
          var wpcf7Elm = el.querySelector('.wpcf7'),
              thanksPage = el.getAttribute('data-thanks-page');
          wpcf7Elm.addEventListener('wpcf7mailsent', function (event) {
            _core.default.go(thanksPage);
          }, false);
        });
      }
    
      var postSocialCopyFn = function postSocialCopyFn(el) {
        setTimeout(function () {
          $(el).removeClass('add-copy');
        }, 2000);
      };
    
      $('.js-blog-post-social-copy').on('click', function () {
        var dataLink = $(this).data('copy-link');
        var $temp = $("<input>");
        $body.append($temp);
        $temp.val(dataLink).select();
        document.execCommand("copy");
        $temp.remove();
        $(this).addClass('add-copy');
        postSocialCopyFn(this);
      }); // Blog pagination
    
      var blogPostArchive = container.querySelector('.js-blog-post-archive');
    
      if (blogPostArchive !== null) {
        var ajaxBlog = function ajaxBlog() {
          $.ajax({
            type: 'POST',
            url: wpcfajax.url,
            data: data_form,
            success: function success(data) {
              pagedF++;
    
              if (Number(pagedF) <= Number(wpcfajax.max_pages)) {
                $(container).find('.js-blog-archive-container').append(data);
    
                _ScrollTrigger.ScrollTrigger.refresh(true);
    
                _ScrollTrigger.ScrollTrigger.update();
    
                loading_progress = false;
                $body.removeClass('atl-block-dark').addClass('atl-block-white');
              }
            }
          });
        };
    
        var loading_progress = false;
        var pagedF = 2,
            data_form = {
          action: 'blogajax',
          nonce: wpcfajax.nonce,
          paged: pagedF
        };
    
        _ScrollTrigger.ScrollTrigger.create({
          trigger: blogPostArchive,
          start: "top top",
          end: "bottom bottom",
          onUpdate: function onUpdate(self) {
            if (self.progress > 0.7 && self.direction === 1 && !loading_progress) {
              ajaxBlog();
              loading_progress = true;
            }
          }
        });
      } // end blog pagination
    
    
      (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
          (i[r].q = i[r].q || []).push(arguments);
        }, i[r].l = 1 * new Date();
        a = s.createElement(o), m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
      })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
    
      ga('create', 'UA-121926166-1', 'auto');
      ga('send', 'pageview');
    }
    
    atollInit('', document); // PRELOADER
    
    function atlPreloader(boolean) {
      var preloader = document.querySelector('.js-preloader'),
          $path = preloader.querySelector('.js-preloader-path'),
          start2 = "M 0 50 V 0 H 100 V 50 C 100 50 50 100 0 50 z",
          start3 = "M 0 100 V 0 H 100 V 100 C 100 100 50 50 0 100 z",
          end2 = "M 0 100 V 0 H 100 V 100 C 100 100 50 100 0 100 z",
          end3 = "M 0 0 V 0 H 100 V 0 C 100 0 50 0 0 0 z",
          gsapArr;
    
      if (!boolean) {
        _gsap.gsap.to(preloader, {
          duration: 0,
          delay: 1.6,
          visibility: 'hidden'
        });
    
        _gsap.gsap.timeline({
          paused: false
        }).to($path, {
          duration: .5,
          attr: {
            d: start3
          },
          ease: Power2.easeIn
        });
    
        _gsap.gsap.timeline({
          paused: false
        }).to($path, {
          duration: .4,
          delay: .3,
          attr: {
            d: end3
          },
          ease: Power2.easeOut
        });
      } else {
        gsapArr = _gsap.gsap.to(preloader, {
          duration: 0,
          delay: 0,
          visibility: 'visible'
        });
        gsapArr = _gsap.gsap.timeline({
          paused: false
        }).to($path, {
          duration: .4,
          attr: {
            d: start2
          },
          ease: Power2.easeIn
        });
        gsapArr = _gsap.gsap.timeline({
          paused: false
        }).to($path, {
          duration: .6,
          delay: .3,
          attr: {
            d: end2
          },
          ease: Power2.easeOut
        });
        activePreloader = true;
        return gsapArr;
      }
    } // END PRELOADER
    
    
    function menuChangesLangs(data) {
      var dataArr = data ? $(data).data('langs') : $('.atl-wrapper').data('langs'),
          menu_langs = $('.js-menu-langs'),
          htmlLang = '',
          i = 1;
    
      if (1 < dataArr.count_languages) {
        $.each(dataArr.active_languages, function (key, value) {
          if (value.active) {
            htmlLang += '<span class="atl-header__open-menu-lang active-lang">' + key + '</span>';
          } else {
            htmlLang += '<a class="atl-header__open-menu-lang js-open-menu-lang" href="' + value.url + '">' + key + '</a>';
          }
    
          if (i < dataArr.count_languages) {
            htmlLang += '<span class="atl-header__open-menu-sep">/</span>';
          }
    
          i++;
        });
      }
    
      menu_langs.html(htmlLang);
    }
    
    menuChangesLangs(false);
    
    function nav_menu(data) {
      var dataArr = data ? $(data).data('menu-html') : $('.atl-wrapper').data('menu-html'),
          nav = $('.js-nav');
      nav.html(dataArr.html_menu);
    }
    
    nav_menu(false); // FOOTER
    
    var footer = document.querySelector('.js-footer');
    var footer_marquee = footer.querySelector('.js-footer .js-footer-marquee');
    var isWhite = false;
    
    if (window.innerWidth >= 1200) {
      _gsap.gsap.fromTo(footer, {
        y: footer.offsetHeight * -1
      }, {
        y: "0%",
        ease: "none",
        scrollTrigger: {
          trigger: footer,
          scrub: true,
          onUpdate: function onUpdate(self) {
            if (self.progress > 0.95) {
              if ($body.hasClass('atl-block-white')) {
                isWhite = true;
              }
    
              if (isWhite) {
                $body.removeClass('atl-block-white').addClass('atl-block-dark');
              }
            }
    
            if (self.progress <= 1) {
              if (isWhite) {
                $body.removeClass('atl-block-dark').addClass('atl-block-white');
                isWhite = false;
              }
            }
          }
        }
      });
    } else {
      _ScrollTrigger.ScrollTrigger.create({
        trigger: footer,
        start: '2px top',
        end: 'bottom top',
        onUpdate: function onUpdate(self) {
          if (self.progress > 0 && self.progress < 1 && self.direction === 1) {
            $body.removeClass('atl-block-dark').addClass('atl-block-white');
          } else if (self.progress < 0.1 && self.direction === -1) {
            $body.removeClass('atl-block-white').addClass('atl-block-dark');
          }
        }
      });
    }
    
    function animateMarquee(el, duration) {
      var innerEl = el.querySelector('.atl-footer__marquee-inner');
      var innerWidth = innerEl.offsetWidth;
      var cloneEl = innerEl.cloneNode(true);
      el.appendChild(cloneEl);
      var start = performance.now();
      var progress;
      var translateX;
    
      if (window.innerWidth < 992) {
        duration = duration * 2;
      }
    
      requestAnimationFrame(function step(now) {
        progress = (now - start) / duration;
    
        if (progress > 1) {
          progress %= 1;
          start = now;
        }
    
        translateX = innerWidth * progress;
        innerEl.style.transform = "translate3d(-".concat(translateX, "px, 0 , 0)");
        cloneEl.style.transform = "translate3d(-".concat(translateX, "px, 0 , 0)");
        requestAnimationFrame(step);
      });
    }
    
    function footerLangs(data) {
      var wrapper = $('.atl-wrapper'),
          description = $('.js-footer-description'),
          formTitle = $('.js-footer-form-title'),
          footerForm = $('.js-footer-form'),
          footerMarquee = $('.js-footer-marquee'),
          footerDescription,
          footerTitleFooterForm,
          footerNewsletterForm,
          footerLineText,
          footerLineLink;
    
      if (data) {
        footerDescription = $(data).data('footer-description');
        footerTitleFooterForm = $(data).data('footer-title-footer-form');
        footerNewsletterForm = $(data).data('footer-newsletter-form');
        footerLineText = $(data).data('footer-line-text');
        footerLineLink = $(data).data('footer-line-link');
      } else {
        footerDescription = wrapper.data('footer-description');
        footerTitleFooterForm = wrapper.data('footer-title-footer-form');
        footerNewsletterForm = wrapper.data('footer-newsletter-form');
        footerLineText = wrapper.data('footer-line-text');
        footerLineLink = wrapper.data('footer-line-link');
      }
    
      description.html(footerDescription);
      formTitle.html(footerTitleFooterForm);
      footerForm.html(JSON.parse(footerNewsletterForm));
      footerMarquee.attr('href', footerLineLink.url);
      var htmlLinkText = '<div class="atl-footer__marquee-inner">';
    
      for (var i = 1; i < 15; i++) {
        htmlLinkText += footerLineText + ' ';
      }
    
      htmlLinkText += '</div>';
      footerMarquee.html(htmlLinkText);
      animateMarquee(footer_marquee, footer_marquee.querySelector('.atl-footer__marquee-inner').offsetWidth * 10);
    }
    
    footerLangs(false); // END FOOTER
    
    var cursor = _cursor.default.init();
    
    var home_slider = _slidesImages.default.run(true, document);
    
    var projects_archive;
    
    if (window.innerWidth >= 1200) {
      projects_archive = _projectImages.default.run(true, document);
    }
    
    var projects_single = _projectsSingle.default.run(true, document);
    
    var activePreloader = false;
    
    var animationLeave = function animationLeave(data) {
      var element = data.next.container.querySelector('.js-hero-projects-single');
    
      if (element !== null && element.classList.contains('atl-hero-projects-single_dark')) {
        $body.removeClass('atl-block-white').addClass('atl-block-dark');
      } else {
        $body.removeClass('atl-block-dark').addClass('atl-block-white');
      }
    
      return atlPreloader(true);
    };
    
    var animationEnter = function animationEnter(data) {
      /*let footer = document.querySelector('.js-footer')
        footer.style.display = 'none'*/
    };
    
    var beforeFn = function beforeFn(data) {
      if (data.next.url.path !== '/' && data.next.url.path !== '/fr/') {
        document.body.classList.remove('home');
      } else {
        document.body.classList.add('home');
      }
    
      window.scrollTo(0, 0);
      $('.atl-hero-banner-video').remove();
      cursor.destroy();
      home_slider.destroy();
    
      if (window.innerWidth >= 1200) {
        projects_archive.destroy();
      }
    };
    
    var beforeLeaveFn = function beforeLeaveFn(data) {
      return _gsap.gsap.to(data.current.container, {
        opacity: 0,
        duration: 1
      });
    };
    
    var afterFn = function afterFn(data) {
      var footer = document.querySelector('.js-footer');
      menuChangesLangs(data.next.container);
      nav_menu(data.next.container);
      footerLangs(data.next.container);
    
      if (data.next.namespace === 'singular-project') {
        // footer.classList.add('atl-footer_remove')
        document.body.classList.add('single-post');
      } else {
        // footer.classList.remove("atl-footer_remove")
        document.body.classList.remove('single-post');
      }
    
      window.Sharer.init();
      cursor.init();
      atollInit(data.next.namespace, data.next.container);
      home_slider.run(false, data.next.container);
    
      if (window.innerWidth >= 1200) {
        projects_archive.run(false, data.next.container);
      }
    
      projects_single.run(false, data.next.container);
      var cf_forms = $(data.next.container).find('div.wpcf7 > form');
    
      if (cf_forms.length > 0) {
        cf_forms.each(function () {
          var $form = $(this);
          wpcf7.init($form[0]);
        });
      }
    
      var footerFormEl = $('.js-footer-form').find('div.wpcf7 > form');
      wpcf7.init(footerFormEl[0]);
    
      if (activePreloader) {
        setTimeout(function () {
          atlPreloader(false);
        }, 300);
      }
    
      _ScrollTrigger.ScrollTrigger.refresh(true);
    
      _ScrollTrigger.ScrollTrigger.update();
    };
    
    _core.default.hooks.beforeEnter(function () {
      setTimeout(function () {
        window.scrollTo(0, 0);
    
        if (typeof bodyScrollBar !== 'undefined') {
          bodyScrollBar.scrollTop = 0;
        }
      }, 500);
    });
    
    _core.default.init({
      logLevel: 'on',
      debug: true,
      timeout: 5000,
      prevent: function prevent(_ref) {
        var el = _ref.el;
        el.classList && el.classList.contains('ab-item');
      },
      transitions: [{
        before: function before(data) {
          return beforeFn(data);
        },
        leave: function leave(data) {//if (data.trigger.classList.contains('sl_wv_image_link')) {
          //$body.find('.atl-wrapper').attr('style', '');
          //$body.find('.sl_wv_container').fadeOut(600);
          //$body.removeClass('atl-block-dark').addClass('atl-block-white');
          //}
        },
        after: function after(data) {
          return afterFn(data);
        }
      }, {
        name: 'singular-project',
        from: {
          namespace: ['home']
        },
        to: {
          namespace: ['singular-project']
        },
        leave: function leave(data) {
          return animationLeave(data);
        },
        afterLeave: function afterLeave(data) {
          return beforeFn(data);
        },
        enter: function enter(data) {
          return animationEnter(data);
        },
        after: function after(data) {
          return afterFn(data);
        }
      }, {
        name: 'page-projets',
        from: {
          namespace: ['page-projets']
        },
        to: {
          namespace: ['singular-project']
        },
        leave: function leave(data) {
          return beforeLeaveFn(data);
        },
        afterLeave: function afterLeave(data) {
          return beforeFn(data);
        },
        enter: function enter(data) {
          return animationEnter(data);
        },
        after: function after(data) {
          return afterFn(data);
        }
      }]
    });
    
    },{"./app/cursor":1,"./app/project-images":2,"./app/projects-single":3,"./app/scroll":4,"./app/slides-images":5,"@barba/core":7,"gsap/dist/ScrollTrigger":8,"gsap/dist/gsap":9,"selectboxit/src/javascripts/jquery.selectBoxIt":10,"sharer.js/sharer":11,"swiper/swiper-bundle.js":13}],7:[function(require,module,exports){
    !function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).barba=n()}(this,(function(){function t(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function n(n,r,e){return r&&t(n.prototype,r),e&&t(n,e),n}function r(){return(r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t}).apply(this,arguments)}function e(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t,n){return(o=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function u(t,n,r){return(u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,r){var e=[null];e.push.apply(e,n);var i=new(Function.bind.apply(t,e));return r&&o(i,r.prototype),i}).apply(null,arguments)}function f(t){var n="function"==typeof Map?new Map:void 0;return(f=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return u(t,arguments,i(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),o(r,t)})(t)}function s(t,n){try{var r=t()}catch(t){return n(t)}return r&&r.then?r.then(void 0,n):r}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var c,a="2.9.7",h=function(){};!function(t){t[t.off=0]="off",t[t.error=1]="error",t[t.warning=2]="warning",t[t.info=3]="info",t[t.debug=4]="debug"}(c||(c={}));var v=c.off,l=function(){function t(t){this.t=t}t.getLevel=function(){return v},t.setLevel=function(t){return v=c[t]};var n=t.prototype;return n.error=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.error,c.error,n)},n.warn=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.warn,c.warning,n)},n.info=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.info,c.info,n)},n.debug=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.log,c.debug,n)},n.i=function(n,r,e){r<=t.getLevel()&&n.apply(console,["["+this.t+"] "].concat(e))},t}(),d=O,m=E,p=g,w=x,b=T,y="/",P=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function g(t,n){for(var r,e=[],i=0,o=0,u="",f=n&&n.delimiter||y,s=n&&n.whitelist||void 0,c=!1;null!==(r=P.exec(t));){var a=r[0],h=r[1],v=r.index;if(u+=t.slice(o,v),o=v+a.length,h)u+=h[1],c=!0;else{var l="",d=r[2],m=r[3],p=r[4],w=r[5];if(!c&&u.length){var b=u.length-1,g=u[b];(!s||s.indexOf(g)>-1)&&(l=g,u=u.slice(0,b))}u&&(e.push(u),u="",c=!1);var E=m||p,x=l||f;e.push({name:d||i++,prefix:l,delimiter:x,optional:"?"===w||"*"===w,repeat:"+"===w||"*"===w,pattern:E?A(E):"[^"+k(x===f?x:x+f)+"]+?"})}}return(u||o<t.length)&&e.push(u+t.substr(o)),e}function E(t,n){return function(r,e){var i=t.exec(r);if(!i)return!1;for(var o=i[0],u=i.index,f={},s=e&&e.decode||decodeURIComponent,c=1;c<i.length;c++)if(void 0!==i[c]){var a=n[c-1];f[a.name]=a.repeat?i[c].split(a.delimiter).map((function(t){return s(t,a)})):s(i[c],a)}return{path:o,index:u,params:f}}}function x(t,n){for(var r=new Array(t.length),e=0;e<t.length;e++)"object"==typeof t[e]&&(r[e]=new RegExp("^(?:"+t[e].pattern+")$",R(n)));return function(n,e){for(var i="",o=e&&e.encode||encodeURIComponent,u=!e||!1!==e.validate,f=0;f<t.length;f++){var s=t[f];if("string"!=typeof s){var c,a=n?n[s.name]:void 0;if(Array.isArray(a)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but got array');if(0===a.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<a.length;h++){if(c=o(a[h],s),u&&!r[f].test(c))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'"');i+=(0===h?s.prefix:s.delimiter)+c}}else if("string"!=typeof a&&"number"!=typeof a&&"boolean"!=typeof a){if(!s.optional)throw new TypeError('Expected "'+s.name+'" to be '+(s.repeat?"an array":"a string"))}else{if(c=o(String(a),s),u&&!r[f].test(c))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but got "'+c+'"');i+=s.prefix+c}}else i+=s}return i}}function k(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function A(t){return t.replace(/([=!:$/()])/g,"\\$1")}function R(t){return t&&t.sensitive?"":"i"}function T(t,n,r){for(var e=(r=r||{}).strict,i=!1!==r.start,o=!1!==r.end,u=r.delimiter||y,f=[].concat(r.endsWith||[]).map(k).concat("$").join("|"),s=i?"^":"",c=0;c<t.length;c++){var a=t[c];if("string"==typeof a)s+=k(a);else{var h=a.repeat?"(?:"+a.pattern+")(?:"+k(a.delimiter)+"(?:"+a.pattern+"))*":a.pattern;n&&n.push(a),s+=a.optional?a.prefix?"(?:"+k(a.prefix)+"("+h+"))?":"("+h+")?":k(a.prefix)+"("+h+")"}}if(o)e||(s+="(?:"+k(u)+")?"),s+="$"===f?"$":"(?="+f+")";else{var v=t[t.length-1],l="string"==typeof v?v[v.length-1]===u:void 0===v;e||(s+="(?:"+k(u)+"(?="+f+"))?"),l||(s+="(?="+k(u)+"|"+f+")")}return new RegExp(s,R(r))}function O(t,n,r){return t instanceof RegExp?function(t,n){if(!n)return t;var r=t.source.match(/\((?!\?)/g);if(r)for(var e=0;e<r.length;e++)n.push({name:e,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return t}(t,n):Array.isArray(t)?function(t,n,r){for(var e=[],i=0;i<t.length;i++)e.push(O(t[i],n,r).source);return new RegExp("(?:"+e.join("|")+")",R(r))}(t,n,r):function(t,n,r){return T(g(t,r),n,r)}(t,n,r)}d.match=function(t,n){var r=[];return E(O(t,r,n),r)},d.regexpToFunction=m,d.parse=p,d.compile=function(t,n){return x(g(t,n),n)},d.tokensToFunction=w,d.tokensToRegExp=b;var S={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},j=new(function(){function t(){this.o=S,this.u=new DOMParser}var n=t.prototype;return n.toString=function(t){return t.outerHTML},n.toDocument=function(t){return this.u.parseFromString(t,"text/html")},n.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},n.getHtml=function(t){return void 0===t&&(t=document),this.toString(t.documentElement)},n.getWrapper=function(t){return void 0===t&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},n.getContainer=function(t){return void 0===t&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},n.removeContainer=function(t){document.body.contains(t)&&t.parentNode.removeChild(t)},n.addContainer=function(t,n){var r=this.getContainer();r?this.s(t,r):n.appendChild(t)},n.getNamespace=function(t){void 0===t&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},n.getHref=function(t){if(t.tagName&&"a"===t.tagName.toLowerCase()){if("string"==typeof t.href)return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},n.resolveUrl=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var e=n.length;if(0===e)throw new Error("resolveUrl requires at least one argument; got none.");var i=document.createElement("base");if(i.href=arguments[0],1===e)return i.href;var o=document.getElementsByTagName("head")[0];o.insertBefore(i,o.firstChild);for(var u,f=document.createElement("a"),s=1;s<e;s++)f.href=arguments[s],i.href=u=f.href;return o.removeChild(i),u},n.s=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},t}()),M=new(function(){function t(){this.h=[],this.v=-1}var e=t.prototype;return e.init=function(t,n){this.l="barba";var r={ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(r),this.v=0;var e={from:this.l,index:0,states:[].concat(this.h)};window.history&&window.history.replaceState(e,"",t)},e.change=function(t,n,r){if(r&&r.state){var e=r.state,i=e.index;n=this.m(this.v-i),this.replace(e.states),this.v=i}else this.add(t,n);return n},e.add=function(t,n){var r=this.size,e=this.p(n),i={ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(i),this.v=r;var o={from:this.l,index:r,states:[].concat(this.h)};switch(e){case"push":window.history&&window.history.pushState(o,"",t);break;case"replace":window.history&&window.history.replaceState(o,"",t)}},e.update=function(t,n){var e=n||this.v,i=r({},this.get(e),{},t);this.set(e,i)},e.remove=function(t){t?this.h.splice(t,1):this.h.pop(),this.v--},e.clear=function(){this.h=[],this.v=-1},e.replace=function(t){this.h=t},e.get=function(t){return this.h[t]},e.set=function(t,n){return this.h[t]=n},e.p=function(t){var n="push",r=t,e=S.prefix+"-"+S.history;return r.hasAttribute&&r.hasAttribute(e)&&(n=r.getAttribute(e)),n},e.m=function(t){return Math.abs(t)>1?t>0?"forward":"back":0===t?"popstate":t>0?"back":"forward"},n(t,[{key:"current",get:function(){return this.h[this.v]}},{key:"state",get:function(){return this.h[this.h.length-1]}},{key:"previous",get:function(){return this.v<1?null:this.h[this.v-1]}},{key:"size",get:function(){return this.h.length}}]),t}()),L=function(t,n){try{var r=function(){if(!n.next.html)return Promise.resolve(t).then((function(t){var r=n.next;if(t){var e=j.toElement(t);r.namespace=j.getNamespace(e),r.container=j.getContainer(e),r.html=t,M.update({ns:r.namespace});var i=j.toDocument(t);document.title=i.title}}))}();return Promise.resolve(r&&r.then?r.then((function(){})):void 0)}catch(t){return Promise.reject(t)}},$=d,_={__proto__:null,update:L,nextTick:function(){return new Promise((function(t){window.requestAnimationFrame(t)}))},pathToRegexp:$},q=function(){return window.location.origin},B=function(t){return void 0===t&&(t=window.location.href),U(t).port},U=function(t){var n,r=t.match(/:\d+/);if(null===r)/^http/.test(t)&&(n=80),/^https/.test(t)&&(n=443);else{var e=r[0].substring(1);n=parseInt(e,10)}var i,o=t.replace(q(),""),u={},f=o.indexOf("#");f>=0&&(i=o.slice(f+1),o=o.slice(0,f));var s=o.indexOf("?");return s>=0&&(u=D(o.slice(s+1)),o=o.slice(0,s)),{hash:i,path:o,port:n,query:u}},D=function(t){return t.split("&").reduce((function(t,n){var r=n.split("=");return t[r[0]]=r[1],t}),{})},F=function(t){return void 0===t&&(t=window.location.href),t.replace(/(\/#.*|\/|#.*)$/,"")},H={__proto__:null,getHref:function(){return window.location.href},getOrigin:q,getPort:B,getPath:function(t){return void 0===t&&(t=window.location.href),U(t).path},parse:U,parseQuery:D,clean:F};function I(t,n,r){return void 0===n&&(n=2e3),new Promise((function(e,i){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(o.readyState===XMLHttpRequest.DONE)if(200===o.status)e(o.responseText);else if(o.status){var n={status:o.status,statusText:o.statusText};r(t,n),i(n)}},o.ontimeout=function(){var e=new Error("Timeout error ["+n+"]");r(t,e),i(e)},o.onerror=function(){var n=new Error("Fetch error");r(t,n),i(n)},o.open("GET",t),o.timeout=n,o.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),o.setRequestHeader("x-barba","yes"),o.send()}))}var C=function(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then};function N(t,n){return void 0===n&&(n={}),function(){for(var r=arguments.length,e=new Array(r),i=0;i<r;i++)e[i]=arguments[i];var o=!1,u=new Promise((function(r,i){n.async=function(){return o=!0,function(t,n){t?i(t):r(n)}};var u=t.apply(n,e);o||(C(u)?u.then(r,i):r(u))}));return u}}var X=new(function(t){function n(){var n;return(n=t.call(this)||this).logger=new l("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}e(n,t);var r=n.prototype;return r.init=function(){var t=this;this.registered.clear(),this.all.forEach((function(n){t[n]||(t[n]=function(r,e){t.registered.has(n)||t.registered.set(n,new Set),t.registered.get(n).add({ctx:e||{},fn:r})})}))},r.do=function(t){for(var n=this,r=arguments.length,e=new Array(r>1?r-1:0),i=1;i<r;i++)e[i-1]=arguments[i];if(this.registered.has(t)){var o=Promise.resolve();return this.registered.get(t).forEach((function(t){o=o.then((function(){return N(t.fn,t.ctx).apply(void 0,e)}))})),o.catch((function(r){n.logger.debug("Hook error ["+t+"]"),n.logger.error(r)}))}return Promise.resolve()},r.clear=function(){var t=this;this.all.forEach((function(n){delete t[n]})),this.init()},r.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var t=[];this.registered.forEach((function(n,r){return t.push(r)})),this.logger.info("Registered hooks: "+t.join(","))},n}(h)),z=function(){function t(t){if(this.P=[],"boolean"==typeof t)this.g=t;else{var n=Array.isArray(t)?t:[t];this.P=n.map((function(t){return $(t)}))}}return t.prototype.checkHref=function(t){if("boolean"==typeof this.g)return this.g;var n=U(t).path;return this.P.some((function(t){return null!==t.exec(n)}))},t}(),G=function(t){function n(n){var r;return(r=t.call(this,n)||this).k=new Map,r}e(n,t);var i=n.prototype;return i.set=function(t,n,r){return this.k.set(t,{action:r,request:n}),{action:r,request:n}},i.get=function(t){return this.k.get(t)},i.getRequest=function(t){return this.k.get(t).request},i.getAction=function(t){return this.k.get(t).action},i.has=function(t){return!this.checkHref(t)&&this.k.has(t)},i.delete=function(t){return this.k.delete(t)},i.update=function(t,n){var e=r({},this.k.get(t),{},n);return this.k.set(t,e),e},n}(z),Q=function(){return!window.history.pushState},W=function(t){return!t.el||!t.href},J=function(t){var n=t.event;return n.which>1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey},K=function(t){var n=t.el;return n.hasAttribute("target")&&"_blank"===n.target},V=function(t){var n=t.el;return void 0!==n.protocol&&window.location.protocol!==n.protocol||void 0!==n.hostname&&window.location.hostname!==n.hostname},Y=function(t){var n=t.el;return void 0!==n.port&&B()!==B(n.href)},Z=function(t){var n=t.el;return n.getAttribute&&"string"==typeof n.getAttribute("download")},tt=function(t){return t.el.hasAttribute(S.prefix+"-"+S.prevent)},nt=function(t){return Boolean(t.el.closest("["+S.prefix+"-"+S.prevent+'="all"]'))},rt=function(t){var n=t.href;return F(n)===F()&&B(n)===B()},et=function(t){function n(n){var r;return(r=t.call(this,n)||this).suite=[],r.tests=new Map,r.init(),r}e(n,t);var r=n.prototype;return r.init=function(){this.add("pushState",Q),this.add("exists",W),this.add("newTab",J),this.add("blank",K),this.add("corsDomain",V),this.add("corsPort",Y),this.add("download",Z),this.add("preventSelf",tt),this.add("preventAll",nt),this.add("sameUrl",rt,!1)},r.add=function(t,n,r){void 0===r&&(r=!0),this.tests.set(t,n),r&&this.suite.push(t)},r.run=function(t,n,r,e){return this.tests.get(t)({el:n,event:r,href:e})},r.checkLink=function(t,n,r){var e=this;return this.suite.some((function(i){return e.run(i,t,n,r)}))},n}(z),it=function(t){function n(r,e){var i;void 0===e&&(e="Barba error");for(var o=arguments.length,u=new Array(o>2?o-2:0),f=2;f<o;f++)u[f-2]=arguments[f];return(i=t.call.apply(t,[this].concat(u))||this).error=r,i.label=e,Error.captureStackTrace&&Error.captureStackTrace(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(i),n),i.name="BarbaError",i}return e(n,t),n}(f(Error)),ot=function(){function t(t){void 0===t&&(t=[]),this.logger=new l("@barba/core"),this.all=[],this.page=[],this.once=[],this.A=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var n=t.prototype;return n.add=function(t,n){switch(t){case"rule":this.A.splice(n.position||0,0,n.value);break;case"transition":default:this.all.push(n)}this.update()},n.resolve=function(t,n){var r=this;void 0===n&&(n={});var e=n.once?this.once:this.page;e=e.filter(n.self?function(t){return t.name&&"self"===t.name}:function(t){return!t.name||"self"!==t.name});var i=new Map,o=e.find((function(e){var o=!0,u={};return!(!n.self||"self"!==e.name)||(r.A.reverse().forEach((function(n){o&&(o=r.R(e,n,t,u),e.from&&e.to&&(o=r.R(e,n,t,u,"from")&&r.R(e,n,t,u,"to")),e.from&&!e.to&&(o=r.R(e,n,t,u,"from")),!e.from&&e.to&&(o=r.R(e,n,t,u,"to")))})),i.set(e,u),o)})),u=i.get(o),f=[];if(f.push(n.once?"once":"page"),n.self&&f.push("self"),u){var s,c=[o];Object.keys(u).length>0&&c.push(u),(s=this.logger).info.apply(s,["Transition found ["+f.join(",")+"]"].concat(c))}else this.logger.info("No transition found ["+f.join(",")+"]");return o},n.update=function(){var t=this;this.all=this.all.map((function(n){return t.T(n)})).sort((function(t,n){return t.priority-n.priority})).reverse().map((function(t){return delete t.priority,t})),this.page=this.all.filter((function(t){return void 0!==t.leave||void 0!==t.enter})),this.once=this.all.filter((function(t){return void 0!==t.once}))},n.R=function(t,n,r,e,i){var o=!0,u=!1,f=t,s=n.name,c=s,a=s,h=s,v=i?f[i]:f,l="to"===i?r.next:r.current;if(i?v&&v[s]:v[s]){switch(n.type){case"strings":default:var d=Array.isArray(v[c])?v[c]:[v[c]];l[c]&&-1!==d.indexOf(l[c])&&(u=!0),-1===d.indexOf(l[c])&&(o=!1);break;case"object":var m=Array.isArray(v[a])?v[a]:[v[a]];l[a]?(l[a].name&&-1!==m.indexOf(l[a].name)&&(u=!0),-1===m.indexOf(l[a].name)&&(o=!1)):o=!1;break;case"function":v[h](r)?u=!0:o=!1}u&&(i?(e[i]=e[i]||{},e[i][s]=f[i][s]):e[s]=f[s])}return o},n.O=function(t,n,r){var e=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(e+=Math.pow(10,r),t.from&&t.from[n]&&(e+=1),t.to&&t.to[n]&&(e+=2)),e},n.T=function(t){var n=this;t.priority=0;var r=0;return this.A.forEach((function(e,i){r+=n.O(t,e.name,i+1)})),t.priority=r,t},t}(),ut=function(){function t(t){void 0===t&&(t=[]),this.logger=new l("@barba/core"),this.S=!1,this.store=new ot(t)}var r=t.prototype;return r.get=function(t,n){return this.store.resolve(t,n)},r.doOnce=function(t){var n=t.data,r=t.transition;try{var e=function(){i.S=!1},i=this,o=r||{};i.S=!0;var u=s((function(){return Promise.resolve(i.j("beforeOnce",n,o)).then((function(){return Promise.resolve(i.once(n,o)).then((function(){return Promise.resolve(i.j("afterOnce",n,o)).then((function(){}))}))}))}),(function(t){i.S=!1,i.logger.debug("Transition error [before/after/once]"),i.logger.error(t)}));return Promise.resolve(u&&u.then?u.then(e):e())}catch(t){return Promise.reject(t)}},r.doPage=function(t){var n=t.data,r=t.transition,e=t.page,i=t.wrapper;try{var o=function(t){if(u)return t;f.S=!1},u=!1,f=this,c=r||{},a=!0===c.sync||!1;f.S=!0;var h=s((function(){function t(){return Promise.resolve(f.j("before",n,c)).then((function(){var t=!1;function r(r){return t?r:Promise.resolve(f.remove(n)).then((function(){return Promise.resolve(f.j("after",n,c)).then((function(){}))}))}var o=function(){if(a)return s((function(){return Promise.resolve(f.add(n,i)).then((function(){return Promise.resolve(f.j("beforeLeave",n,c)).then((function(){return Promise.resolve(f.j("beforeEnter",n,c)).then((function(){return Promise.resolve(Promise.all([f.leave(n,c),f.enter(n,c)])).then((function(){return Promise.resolve(f.j("afterLeave",n,c)).then((function(){return Promise.resolve(f.j("afterEnter",n,c)).then((function(){}))}))}))}))}))}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [sync]")}));var r=function(r){return t?r:s((function(){var t=function(){if(!1!==o)return Promise.resolve(f.add(n,i)).then((function(){return Promise.resolve(f.j("beforeEnter",n,c)).then((function(){return Promise.resolve(f.enter(n,c,o)).then((function(){return Promise.resolve(f.j("afterEnter",n,c)).then((function(){}))}))}))}))}();if(t&&t.then)return t.then((function(){}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [before/after/enter]")}))},o=!1,u=s((function(){return Promise.resolve(f.j("beforeLeave",n,c)).then((function(){return Promise.resolve(Promise.all([f.leave(n,c),L(e,n)]).then((function(t){return t[0]}))).then((function(t){return o=t,Promise.resolve(f.j("afterLeave",n,c)).then((function(){}))}))}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [before/after/leave]")}));return u&&u.then?u.then(r):r(u)}();return o&&o.then?o.then(r):r(o)}))}var r=function(){if(a)return Promise.resolve(L(e,n)).then((function(){}))}();return r&&r.then?r.then(t):t()}),(function(t){if(f.S=!1,t.name&&"BarbaError"===t.name)throw f.logger.debug(t.label),f.logger.error(t.error),t;throw f.logger.debug("Transition error [page]"),f.logger.error(t),t}));return Promise.resolve(h&&h.then?h.then(o):o(h))}catch(t){return Promise.reject(t)}},r.once=function(t,n){try{return Promise.resolve(X.do("once",t,n)).then((function(){return n.once?N(n.once,n)(t):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.leave=function(t,n){try{return Promise.resolve(X.do("leave",t,n)).then((function(){return n.leave?N(n.leave,n)(t):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.enter=function(t,n,r){try{return Promise.resolve(X.do("enter",t,n)).then((function(){return n.enter?N(n.enter,n)(t,r):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.add=function(t,n){try{return j.addContainer(t.next.container,n),X.do("nextAdded",t),Promise.resolve()}catch(t){return Promise.reject(t)}},r.remove=function(t){try{return j.removeContainer(t.current.container),X.do("currentRemoved",t),Promise.resolve()}catch(t){return Promise.reject(t)}},r.M=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},r.j=function(t,n,r){try{return Promise.resolve(X.do(t,n,r)).then((function(){return r[t]?N(r[t],r)(n):Promise.resolve()}))}catch(t){return Promise.reject(t)}},n(t,[{key:"isRunning",get:function(){return this.S},set:function(t){this.S=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some((function(t){return"self"===t.name}))}},{key:"shouldWait",get:function(){return this.store.all.some((function(t){return t.to&&!t.to.route||t.sync}))}}]),t}(),ft=function(){function t(t){var n=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,0!==t.length&&(t.forEach((function(t){n.byNamespace.set(t.namespace,t)})),this.names.forEach((function(t){X[t](n.L(t))})))}return t.prototype.L=function(t){var n=this;return function(r){var e=t.match(/enter/i)?r.next:r.current,i=n.byNamespace.get(e.namespace);return i&&i[t]?N(i[t],i)(r):Promise.resolve()}},t}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var n=this;do{if(n.matches(t))return n;n=n.parentElement||n.parentNode}while(null!==n&&1===n.nodeType);return null});var st={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}};return new(function(){function t(){this.version=a,this.schemaPage=st,this.Logger=l,this.logger=new l("@barba/core"),this.plugins=[],this.hooks=X,this.dom=j,this.helpers=_,this.history=M,this.request=I,this.url=H}var e=t.prototype;return e.use=function(t,n){var r=this.plugins;r.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):"function"==typeof t.install?(t.install(this,n),r.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var n=void 0===t?{}:t,e=n.transitions,i=void 0===e?[]:e,o=n.views,u=void 0===o?[]:o,f=n.schema,s=void 0===f?S:f,c=n.requestError,a=n.timeout,h=void 0===a?2e3:a,v=n.cacheIgnore,d=void 0!==v&&v,m=n.prefetchIgnore,p=void 0!==m&&m,w=n.preventRunning,b=void 0!==w&&w,y=n.prevent,P=void 0===y?null:y,g=n.debug,E=n.logLevel;if(l.setLevel(!0===(void 0!==g&&g)?"debug":void 0===E?"off":E),this.logger.info(this.version),Object.keys(s).forEach((function(t){S[t]&&(S[t]=s[t])})),this.$=c,this.timeout=h,this.cacheIgnore=d,this.prefetchIgnore=p,this.preventRunning=b,this._=this.dom.getWrapper(),!this._)throw new Error("[@barba/core] No Barba wrapper found");this._.setAttribute("aria-live","polite"),this.q();var x=this.data.current;if(!x.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new G(d),this.prevent=new et(p),this.transitions=new ut(i),this.views=new ft(u),null!==P){if("function"!=typeof P)throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",P)}this.history.init(x.url.href,x.namespace),this.B=this.B.bind(this),this.U=this.U.bind(this),this.D=this.D.bind(this),this.F(),this.plugins.forEach((function(t){return t.init()}));var k=this.data;k.trigger="barba",k.next=k.current,k.current=r({},this.schemaPage),this.hooks.do("ready",k),this.once(k),this.q()},e.destroy=function(){this.q(),this.H(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,n,r){var e;if(void 0===n&&(n="barba"),this.transitions.isRunning)this.force(t);else if(!(e="popstate"===n?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(t,n,r),r&&(r.stopPropagation(),r.preventDefault()),this.page(t,n,e)},e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then((function(){function r(){return Promise.resolve(n.hooks.do("afterEnter",t)).then((function(){}))}var e=function(){if(n.transitions.hasOnce){var r=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:r,data:t})).then((function(){}))}}();return e&&e.then?e.then(r):r()}))}catch(t){return Promise.reject(t)}},e.page=function(t,n,e){try{var i=function(){var t=o.data;return Promise.resolve(o.hooks.do("page",t)).then((function(){var n=s((function(){var n=o.transitions.get(t,{once:!1,self:e});return Promise.resolve(o.transitions.doPage({data:t,page:u,transition:n,wrapper:o._})).then((function(){o.q()}))}),(function(){0===l.getLevel()&&o.force(t.current.url.href)}));if(n&&n.then)return n.then((function(){}))}))},o=this;o.data.next.url=r({href:t},o.url.parse(t)),o.data.trigger=n;var u=o.cache.has(t)?o.cache.update(t,{action:"click"}).request:o.cache.set(t,o.request(t,o.timeout,o.onRequestError.bind(o,n)),"click").request,f=function(){if(o.transitions.shouldWait)return Promise.resolve(L(u,o.data)).then((function(){}))}();return Promise.resolve(f&&f.then?f.then(i):i())}catch(t){return Promise.reject(t)}},e.onRequestError=function(t){this.transitions.isRunning=!1;for(var n=arguments.length,r=new Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e];var i=r[0],o=r[1],u=this.cache.getAction(i);return this.cache.delete(i),!(this.$&&!1===this.$(t,u,i,o)||("click"===u&&this.force(i),1))},e.prefetch=function(t){var n=this;this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba")).catch((function(t){n.logger.error(t)})),"prefetch")},e.F=function(){!0!==this.prefetchIgnore&&(document.addEventListener("mouseover",this.B),document.addEventListener("touchstart",this.B)),document.addEventListener("click",this.U),window.addEventListener("popstate",this.D)},e.H=function(){!0!==this.prefetchIgnore&&(document.removeEventListener("mouseover",this.B),document.removeEventListener("touchstart",this.B)),document.removeEventListener("click",this.U),window.removeEventListener("popstate",this.D)},e.B=function(t){var n=this,r=this.I(t);if(r){var e=this.dom.getHref(r);this.prevent.checkHref(e)||this.cache.has(e)||this.cache.set(e,this.request(e,this.timeout,this.onRequestError.bind(this,r)).catch((function(t){n.logger.error(t)})),"enter")}},e.U=function(t){var n=this.I(t);if(n)return this.transitions.isRunning&&this.preventRunning?(t.preventDefault(),void t.stopPropagation()):void this.go(this.dom.getHref(n),n,t)},e.D=function(t){this.go(this.url.getHref(),"popstate",t)},e.I=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},e.q=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:r({href:t},this.url.parse(t))};this.C={current:n,next:r({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},n(t,[{key:"data",get:function(){return this.C}},{key:"wrapper",get:function(){return this._}}]),t}())}));
    
    
    },{}],8:[function(require,module,exports){
    (function (global, factory) {
        typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
        typeof define === 'function' && define.amd ? define(['exports'], factory) :
        (global = global || self, factory(global.window = global.window || {}));
    }(this, (function (exports) { 'use strict';
    
        /*!
         * ScrollTrigger 3.7.1
         * https://greensock.com
         *
         * @license Copyright 2008-2021, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
        */
        var gsap,
            _coreInitted,
            _win,
            _doc,
            _docEl,
            _body,
            _root,
            _resizeDelay,
            _raf,
            _request,
            _toArray,
            _clamp,
            _time2,
            _syncInterval,
            _refreshing,
            _pointerIsDown,
            _transformProp,
            _i,
            _prevWidth,
            _prevHeight,
            _autoRefresh,
            _sort,
            _suppressOverwrites,
            _ignoreResize,
            _limitCallbacks,
            _startup = 1,
            _proxies = [],
            _scrollers = [],
            _getTime = Date.now,
            _time1 = _getTime(),
            _lastScrollTime = 0,
            _enabled = 1,
            _passThrough = function _passThrough(v) {
          return v;
        },
            _round = function _round(value) {
          return Math.round(value * 100000) / 100000 || 0;
        },
            _windowExists = function _windowExists() {
          return typeof window !== "undefined";
        },
            _getGSAP = function _getGSAP() {
          return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
        },
            _isViewport = function _isViewport(e) {
          return !!~_root.indexOf(e);
        },
            _getProxyProp = function _getProxyProp(element, property) {
          return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
        },
            _getScrollFunc = function _getScrollFunc(element, _ref) {
          var s = _ref.s,
              sc = _ref.sc;
    
          var i = _scrollers.indexOf(element),
              offset = sc === _vertical.sc ? 1 : 2;
    
          !~i && (i = _scrollers.push(element) - 1);
          return _scrollers[i + offset] || (_scrollers[i + offset] = _getProxyProp(element, s) || (_isViewport(element) ? sc : function (value) {
            return arguments.length ? element[s] = value : element[s];
          }));
        },
            _getBoundsFunc = function _getBoundsFunc(element) {
          return _getProxyProp(element, "getBoundingClientRect") || (_isViewport(element) ? function () {
            _winOffsets.width = _win.innerWidth;
            _winOffsets.height = _win.innerHeight;
            return _winOffsets;
          } : function () {
            return _getBounds(element);
          });
        },
            _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref2) {
          var d = _ref2.d,
              d2 = _ref2.d2,
              a = _ref2.a;
          return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function () {
            return a()[d];
          } : function () {
            return (isViewport ? _win["inner" + d2] : scroller["client" + d2]) || 0;
          };
        },
            _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
          return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function () {
            return _winOffsets;
          };
        },
            _maxScroll = function _maxScroll(element, _ref3) {
          var s = _ref3.s,
              d2 = _ref3.d2,
              d = _ref3.d,
              a = _ref3.a;
          return (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport(element) ? Math.max(_docEl[s], _body[s]) - (_win["inner" + d2] || _docEl["client" + d2] || _body["client" + d2]) : element[s] - element["offset" + d2];
        },
            _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
          for (var i = 0; i < _autoRefresh.length; i += 3) {
            (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
          }
        },
            _isString = function _isString(value) {
          return typeof value === "string";
        },
            _isFunction = function _isFunction(value) {
          return typeof value === "function";
        },
            _isNumber = function _isNumber(value) {
          return typeof value === "number";
        },
            _isObject = function _isObject(value) {
          return typeof value === "object";
        },
            _callIfFunc = function _callIfFunc(value) {
          return _isFunction(value) && value();
        },
            _combineFunc = function _combineFunc(f1, f2) {
          return function () {
            var result1 = _callIfFunc(f1),
                result2 = _callIfFunc(f2);
    
            return function () {
              _callIfFunc(result1);
    
              _callIfFunc(result2);
            };
          };
        },
            _abs = Math.abs,
            _scrollLeft = "scrollLeft",
            _scrollTop = "scrollTop",
            _left = "left",
            _top = "top",
            _right = "right",
            _bottom = "bottom",
            _width = "width",
            _height = "height",
            _Right = "Right",
            _Left = "Left",
            _Top = "Top",
            _Bottom = "Bottom",
            _padding = "padding",
            _margin = "margin",
            _Width = "Width",
            _Height = "Height",
            _px = "px",
            _horizontal = {
          s: _scrollLeft,
          p: _left,
          p2: _Left,
          os: _right,
          os2: _Right,
          d: _width,
          d2: _Width,
          a: "x",
          sc: function sc(value) {
            return arguments.length ? _win.scrollTo(value, _vertical.sc()) : _win.pageXOffset || _doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
          }
        },
            _vertical = {
          s: _scrollTop,
          p: _top,
          p2: _Top,
          os: _bottom,
          os2: _Bottom,
          d: _height,
          d2: _Height,
          a: "y",
          op: _horizontal,
          sc: function sc(value) {
            return arguments.length ? _win.scrollTo(_horizontal.sc(), value) : _win.pageYOffset || _doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
          }
        },
            _getComputedStyle = function _getComputedStyle(element) {
          return _win.getComputedStyle(element);
        },
            _makePositionable = function _makePositionable(element) {
          var position = _getComputedStyle(element).position;
    
          element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
        },
            _setDefaults = function _setDefaults(obj, defaults) {
          for (var p in defaults) {
            p in obj || (obj[p] = defaults[p]);
          }
    
          return obj;
        },
            _getBounds = function _getBounds(element, withoutTransforms) {
          var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap.to(element, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
          }).progress(1),
              bounds = element.getBoundingClientRect();
          tween && tween.progress(0).kill();
          return bounds;
        },
            _getSize = function _getSize(element, _ref4) {
          var d2 = _ref4.d2;
          return element["offset" + d2] || element["client" + d2] || 0;
        },
            _getLabelRatioArray = function _getLabelRatioArray(timeline) {
          var a = [],
              labels = timeline.labels,
              duration = timeline.duration(),
              p;
    
          for (p in labels) {
            a.push(labels[p] / duration);
          }
    
          return a;
        },
            _getClosestLabel = function _getClosestLabel(animation) {
          return function (value) {
            return gsap.utils.snap(_getLabelRatioArray(animation), value);
          };
        },
            _getLabelAtDirection = function _getLabelAtDirection(timeline) {
          return function (value, st) {
            var a = _getLabelRatioArray(timeline),
                i;
    
            a.sort(function (a, b) {
              return a - b;
            });
    
            if (st.direction > 0) {
              value -= 1e-4;
    
              for (i = 0; i < a.length; i++) {
                if (a[i] >= value) {
                  return a[i];
                }
              }
    
              return a.pop();
            } else {
              i = a.length;
              value += 1e-4;
    
              while (i--) {
                if (a[i] <= value) {
                  return a[i];
                }
              }
            }
    
            return a[0];
          };
        },
            _multiListener = function _multiListener(func, element, types, callback) {
          return types.split(",").forEach(function (type) {
            return func(element, type, callback);
          });
        },
            _addListener = function _addListener(element, type, func) {
          return element.addEventListener(type, func, {
            passive: true
          });
        },
            _removeListener = function _removeListener(element, type, func) {
          return element.removeEventListener(type, func);
        },
            _markerDefaults = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal"
        },
            _defaults = {
          toggleActions: "play",
          anticipatePin: 0
        },
            _keywords = {
          top: 0,
          left: 0,
          center: 0.5,
          bottom: 1,
          right: 1
        },
            _offsetToPx = function _offsetToPx(value, size) {
          if (_isString(value)) {
            var eqIndex = value.indexOf("="),
                relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
    
            if (~eqIndex) {
              value.indexOf("%") > eqIndex && (relative *= size / 100);
              value = value.substr(0, eqIndex - 1);
            }
    
            value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
          }
    
          return value;
        },
            _createMarker = function _createMarker(type, name, container, direction, _ref5, offset, matchWidthEl) {
          var startColor = _ref5.startColor,
              endColor = _ref5.endColor,
              fontSize = _ref5.fontSize,
              indent = _ref5.indent,
              fontWeight = _ref5.fontWeight;
    
          var e = _doc.createElement("div"),
              useFixedPosition = _isViewport(container) || _getProxyProp(container, "pinType") === "fixed",
              isScroller = type.indexOf("scroller") !== -1,
              parent = useFixedPosition ? _body : container,
              isStart = type.indexOf("start") !== -1,
              color = isStart ? startColor : endColor,
              css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    
          css += "position:" + (isScroller && useFixedPosition ? "fixed;" : "absolute;");
          (isScroller || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
          matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
          e._isStart = isStart;
          e.setAttribute("class", "gsap-marker-" + type);
          e.style.cssText = css;
          e.innerText = name || name === 0 ? type + "-" + name : type;
          parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
          e._offset = e["offset" + direction.op.d2];
    
          _positionMarker(e, 0, direction, isStart);
    
          return e;
        },
            _positionMarker = function _positionMarker(marker, start, direction, flipped) {
          var vars = {
            display: "block"
          },
              side = direction[flipped ? "os2" : "p2"],
              oppositeSide = direction[flipped ? "p2" : "os2"];
          marker._isFlipped = flipped;
          vars[direction.a + "Percent"] = flipped ? -100 : 0;
          vars[direction.a] = flipped ? "1px" : 0;
          vars["border" + side + _Width] = 1;
          vars["border" + oppositeSide + _Width] = 0;
          vars[direction.p] = start + "px";
          gsap.set(marker, vars);
        },
            _triggers = [],
            _ids = {},
            _sync = function _sync() {
          return _request || (_request = _raf(_updateAll));
        },
            _onScroll = function _onScroll() {
          if (!_request) {
            _request = _raf(_updateAll);
            _lastScrollTime || _dispatch("scrollStart");
            _lastScrollTime = _getTime();
          }
        },
            _onResize = function _onResize() {
          return !_refreshing && !_ignoreResize && !_doc.fullscreenElement && _resizeDelay.restart(true);
        },
            _listeners = {},
            _emptyArray = [],
            _media = [],
            _creatingMedia,
            _lastMediaTick,
            _onMediaChange = function _onMediaChange(e) {
          var tick = gsap.ticker.frame,
              matches = [],
              i = 0,
              index;
    
          if (_lastMediaTick !== tick || _startup) {
            _revertAll();
    
            for (; i < _media.length; i += 4) {
              index = _win.matchMedia(_media[i]).matches;
    
              if (index !== _media[i + 3]) {
                _media[i + 3] = index;
                index ? matches.push(i) : _revertAll(1, _media[i]) || _isFunction(_media[i + 2]) && _media[i + 2]();
              }
            }
    
            _revertRecorded();
    
            for (i = 0; i < matches.length; i++) {
              index = matches[i];
              _creatingMedia = _media[index];
              _media[index + 2] = _media[index + 1](e);
            }
    
            _creatingMedia = 0;
            _coreInitted && _refreshAll(0, 1);
            _lastMediaTick = tick;
    
            _dispatch("matchMedia");
          }
        },
            _softRefresh = function _softRefresh() {
          return _removeListener(ScrollTrigger, "scrollEnd", _softRefresh) || _refreshAll(true);
        },
            _dispatch = function _dispatch(type) {
          return _listeners[type] && _listeners[type].map(function (f) {
            return f();
          }) || _emptyArray;
        },
            _savedStyles = [],
            _revertRecorded = function _revertRecorded(media) {
          for (var i = 0; i < _savedStyles.length; i += 5) {
            if (!media || _savedStyles[i + 4] === media) {
              _savedStyles[i].style.cssText = _savedStyles[i + 1];
              _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
              _savedStyles[i + 3].uncache = 1;
            }
          }
        },
            _revertAll = function _revertAll(kill, media) {
          var trigger;
    
          for (_i = 0; _i < _triggers.length; _i++) {
            trigger = _triggers[_i];
    
            if (!media || trigger.media === media) {
              if (kill) {
                trigger.kill(1);
              } else {
                trigger.revert();
              }
            }
          }
    
          media && _revertRecorded(media);
          media || _dispatch("revert");
        },
            _refreshingAll,
            _refreshAll = function _refreshAll(force, skipRevert) {
          if (_lastScrollTime && !force) {
            _addListener(ScrollTrigger, "scrollEnd", _softRefresh);
    
            return;
          }
    
          _refreshingAll = true;
    
          var refreshInits = _dispatch("refreshInit");
    
          _sort && ScrollTrigger.sort();
          skipRevert || _revertAll();
    
          _triggers.forEach(function (t) {
            return t.refresh();
          });
    
          refreshInits.forEach(function (result) {
            return result && result.render && result.render(-1);
          });
    
          _scrollers.forEach(function (obj) {
            return typeof obj === "function" && (obj.rec = 0);
          });
    
          _resizeDelay.pause();
    
          _refreshingAll = false;
    
          _dispatch("refresh");
        },
            _lastScroll = 0,
            _direction = 1,
            _updateAll = function _updateAll() {
          if (!_refreshingAll) {
            var l = _triggers.length,
                time = _getTime(),
                recordVelocity = time - _time1 >= 50,
                scroll = l && _triggers[0].scroll();
    
            _direction = _lastScroll > scroll ? -1 : 1;
            _lastScroll = scroll;
    
            if (recordVelocity) {
              if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
                _lastScrollTime = 0;
    
                _dispatch("scrollEnd");
              }
    
              _time2 = _time1;
              _time1 = time;
            }
    
            if (_direction < 0) {
              _i = l;
    
              while (_i-- > 0) {
                _triggers[_i] && _triggers[_i].update(0, recordVelocity);
              }
    
              _direction = 1;
            } else {
              for (_i = 0; _i < l; _i++) {
                _triggers[_i] && _triggers[_i].update(0, recordVelocity);
              }
            }
    
            _request = 0;
          }
        },
            _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "grid-column-start", "grid-column-end", "grid-row-start", "grid-row-end", "grid-area", "justify-self", "align-self", "place-self"],
            _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]),
            _swapPinOut = function _swapPinOut(pin, spacer, state) {
          _setState(state);
    
          if (pin.parentNode === spacer) {
            var parent = spacer.parentNode;
    
            if (parent) {
              parent.insertBefore(pin, spacer);
              parent.removeChild(spacer);
            }
          }
        },
            _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
          if (pin.parentNode !== spacer) {
            var i = _propNamesToCopy.length,
                spacerStyle = spacer.style,
                pinStyle = pin.style,
                p;
    
            while (i--) {
              p = _propNamesToCopy[i];
              spacerStyle[p] = cs[p];
            }
    
            spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
            cs.display === "inline" && (spacerStyle.display = "inline-block");
            pinStyle[_bottom] = pinStyle[_right] = "auto";
            spacerStyle.overflow = "visible";
            spacerStyle.boxSizing = "border-box";
            spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
            spacerStyle[_height] = _getSize(pin, _vertical) + _px;
            spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
    
            _setState(spacerState);
    
            pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
            pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
            pinStyle[_padding] = cs[_padding];
            pin.parentNode.insertBefore(spacer, pin);
            spacer.appendChild(pin);
          }
        },
            _capsExp = /([A-Z])/g,
            _setState = function _setState(state) {
          if (state) {
            var style = state.t.style,
                l = state.length,
                i = 0,
                p,
                value;
            (state.t._gsap || gsap.core.getCache(state.t)).uncache = 1;
    
            for (; i < l; i += 2) {
              value = state[i + 1];
              p = state[i];
    
              if (value) {
                style[p] = value;
              } else if (style[p]) {
                style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
              }
            }
          }
        },
            _getState = function _getState(element) {
          var l = _stateProps.length,
              style = element.style,
              state = [],
              i = 0;
    
          for (; i < l; i++) {
            state.push(_stateProps[i], style[_stateProps[i]]);
          }
    
          state.t = element;
          return state;
        },
            _copyState = function _copyState(state, override, omitOffsets) {
          var result = [],
              l = state.length,
              i = omitOffsets ? 8 : 0,
              p;
    
          for (; i < l; i += 2) {
            p = state[i];
            result.push(p, p in override ? override[p] : state[i + 1]);
          }
    
          result.t = state.t;
          return result;
        },
            _winOffsets = {
          left: 0,
          top: 0
        },
            _parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax) {
          _isFunction(value) && (value = value(self));
    
          if (_isString(value) && value.substr(0, 3) === "max") {
            value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
          }
    
          if (!_isNumber(value)) {
            _isFunction(trigger) && (trigger = trigger(self));
    
            var element = _toArray(trigger)[0] || _body,
                bounds = _getBounds(element) || {},
                offsets = value.split(" "),
                localOffset,
                globalOffset,
                display;
    
            if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
              display = element.style.display;
              element.style.display = "block";
              bounds = _getBounds(element);
              display ? element.style.display = display : element.style.removeProperty("display");
            }
    
            localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
            globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
            value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
            markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
            scrollerSize -= scrollerSize - globalOffset;
          } else if (markerScroller) {
            _positionMarker(markerScroller, scrollerSize, direction, true);
          }
    
          if (marker) {
            var position = value + scrollerSize,
                isStart = marker._isStart;
            scrollerMax = "scroll" + direction.d2;
    
            _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body[scrollerMax], _docEl[scrollerMax]) : marker.parentNode[scrollerMax]) <= position + 1);
    
            if (useFixedPosition) {
              scrollerBounds = _getBounds(markerScroller);
              useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
            }
          }
    
          return Math.round(value);
        },
            _prefixExp = /(?:webkit|moz|length|cssText|inset)/i,
            _reparent = function _reparent(element, parent, top, left) {
          if (element.parentNode !== parent) {
            var style = element.style,
                p,
                cs;
    
            if (parent === _body) {
              element._stOrig = style.cssText;
              cs = _getComputedStyle(element);
    
              for (p in cs) {
                if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
                  style[p] = cs[p];
                }
              }
    
              style.top = top;
              style.left = left;
            } else {
              style.cssText = element._stOrig;
            }
    
            gsap.core.getCache(element).uncache = 1;
            parent.appendChild(element);
          }
        },
            _getTweenCreator = function _getTweenCreator(scroller, direction) {
          var getScroll = _getScrollFunc(scroller, direction),
              prop = "_scroll" + direction.p2,
              lastScroll1,
              lastScroll2,
              getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
            var tween = getTween.tween,
                onComplete = vars.onComplete,
                modifiers = {};
            tween && tween.kill();
            lastScroll1 = Math.round(initialValue);
            vars[prop] = scrollTo;
            vars.modifiers = modifiers;
    
            modifiers[prop] = function (value) {
              value = _round(getScroll());
    
              if (value !== lastScroll1 && value !== lastScroll2 && Math.abs(value - lastScroll1) > 2) {
                tween.kill();
                getTween.tween = 0;
              } else {
                value = initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio;
              }
    
              lastScroll2 = lastScroll1;
              return lastScroll1 = _round(value);
            };
    
            vars.onComplete = function () {
              getTween.tween = 0;
              onComplete && onComplete.call(tween);
            };
    
            tween = getTween.tween = gsap.to(scroller, vars);
            return tween;
          };
    
          scroller[prop] = getScroll;
          scroller.addEventListener("wheel", function () {
            return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
          }, {
            passive: true
          });
          return getTween;
        };
    
        _horizontal.op = _vertical;
        var ScrollTrigger = function () {
          function ScrollTrigger(vars, animation) {
            _coreInitted || ScrollTrigger.register(gsap) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
            this.init(vars, animation);
          }
    
          var _proto = ScrollTrigger.prototype;
    
          _proto.init = function init(vars, animation) {
            this.progress = this.start = 0;
            this.vars && this.kill(1);
    
            if (!_enabled) {
              this.update = this.refresh = this.kill = _passThrough;
              return;
            }
    
            vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
              trigger: vars
            } : vars, _defaults);
    
            var direction = vars.horizontal ? _horizontal : _vertical,
                _vars = vars,
                onUpdate = _vars.onUpdate,
                toggleClass = _vars.toggleClass,
                id = _vars.id,
                onToggle = _vars.onToggle,
                onRefresh = _vars.onRefresh,
                scrub = _vars.scrub,
                trigger = _vars.trigger,
                pin = _vars.pin,
                pinSpacing = _vars.pinSpacing,
                invalidateOnRefresh = _vars.invalidateOnRefresh,
                anticipatePin = _vars.anticipatePin,
                onScrubComplete = _vars.onScrubComplete,
                onSnapComplete = _vars.onSnapComplete,
                once = _vars.once,
                snap = _vars.snap,
                pinReparent = _vars.pinReparent,
                isToggle = !scrub && scrub !== 0,
                scroller = _toArray(vars.scroller || _win)[0],
                scrollerCache = gsap.core.getCache(scroller),
                isViewport = _isViewport(scroller),
                useFixedPosition = "pinType" in vars ? vars.pinType === "fixed" : isViewport || _getProxyProp(scroller, "pinType") === "fixed",
                callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack],
                toggleActions = isToggle && vars.toggleActions.split(" "),
                markers = "markers" in vars ? vars.markers : _defaults.markers,
                borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0,
                self = this,
                onRefreshInit = vars.onRefreshInit && function () {
              return vars.onRefreshInit(self);
            },
                getScrollerSize = _getSizeFunc(scroller, isViewport, direction),
                getScrollerOffsets = _getOffsetsFunc(scroller, isViewport),
                lastSnap = 0,
                tweenTo,
                pinCache,
                snapFunc,
                scroll1,
                scroll2,
                start,
                end,
                markerStart,
                markerEnd,
                markerStartTrigger,
                markerEndTrigger,
                markerVars,
                change,
                pinOriginalState,
                pinActiveState,
                pinState,
                spacer,
                offset,
                pinGetter,
                pinSetter,
                pinStart,
                pinChange,
                spacingStart,
                spacerState,
                markerStartSetter,
                markerEndSetter,
                cs,
                snap1,
                snap2,
                scrubTween,
                scrubSmooth,
                snapDurClamp,
                snapDelayedCall,
                prevProgress,
                prevScroll,
                prevAnimProgress;
    
            self.media = _creatingMedia;
            anticipatePin *= 45;
            self.scroller = scroller;
            self.scroll = _getScrollFunc(scroller, direction);
            scroll1 = self.scroll();
            self.vars = vars;
            animation = animation || vars.animation;
            "refreshPriority" in vars && (_sort = 1);
            scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
              top: _getTweenCreator(scroller, _vertical),
              left: _getTweenCreator(scroller, _horizontal)
            };
            self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
    
            if (animation) {
              animation.vars.lazy = false;
              animation._initted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.render(0, true, true);
              self.animation = animation.pause();
              animation.scrollTrigger = self;
              scrubSmooth = _isNumber(scrub) && scrub;
              scrubSmooth && (scrubTween = gsap.to(animation, {
                ease: "power3",
                duration: scrubSmooth,
                onComplete: function onComplete() {
                  return onScrubComplete && onScrubComplete(self);
                }
              }));
              snap1 = 0;
              id || (id = animation.vars.id);
            }
    
            _triggers.push(self);
    
            if (snap) {
              if (!_isObject(snap) || snap.push) {
                snap = {
                  snapTo: snap
                };
              }
    
              "scrollBehavior" in _body.style && gsap.set(isViewport ? [_body, _docEl] : scroller, {
                scrollBehavior: "auto"
              });
              snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : gsap.utils.snap(snap.snapTo);
              snapDurClamp = snap.duration || {
                min: 0.1,
                max: 2
              };
              snapDurClamp = _isObject(snapDurClamp) ? _clamp(snapDurClamp.min, snapDurClamp.max) : _clamp(snapDurClamp, snapDurClamp);
              snapDelayedCall = gsap.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function () {
                if (Math.abs(self.getVelocity()) < 10 && !_pointerIsDown && lastSnap !== self.scroll()) {
                  var totalProgress = animation && !isToggle ? animation.totalProgress() : self.progress,
                      velocity = (totalProgress - snap2) / (_getTime() - _time2) * 1000 || 0,
                      change1 = gsap.utils.clamp(-self.progress, 1 - self.progress, _abs(velocity / 2) * velocity / 0.185),
                      naturalEnd = self.progress + (snap.inertia === false ? 0 : change1),
                      endValue = _clamp(0, 1, snapFunc(naturalEnd, self)),
                      scroll = self.scroll(),
                      endScroll = Math.round(start + endValue * change),
                      _snap = snap,
                      onStart = _snap.onStart,
                      _onInterrupt = _snap.onInterrupt,
                      _onComplete = _snap.onComplete,
                      tween = tweenTo.tween;
    
                  if (scroll <= end && scroll >= start && endScroll !== scroll) {
                    if (tween && !tween._initted && tween.data <= Math.abs(endScroll - scroll)) {
                      return;
                    }
    
                    if (snap.inertia === false) {
                      change1 = endValue - self.progress;
                    }
    
                    tweenTo(endScroll, {
                      duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
                      ease: snap.ease || "power3",
                      data: Math.abs(endScroll - scroll),
                      onInterrupt: function onInterrupt() {
                        return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
                      },
                      onComplete: function onComplete() {
                        lastSnap = self.scroll();
                        snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
                        onSnapComplete && onSnapComplete(self);
                        _onComplete && _onComplete(self);
                      }
                    }, scroll, change1 * change, endScroll - scroll - change1 * change);
                    onStart && onStart(self, tweenTo.tween);
                  }
                } else if (self.isActive) {
                  snapDelayedCall.restart(true);
                }
              }).pause();
            }
    
            id && (_ids[id] = self);
            trigger = self.trigger = _toArray(trigger || pin)[0];
            pin = pin === true ? trigger : _toArray(pin)[0];
            _isString(toggleClass) && (toggleClass = {
              targets: trigger,
              className: toggleClass
            });
    
            if (pin) {
              pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
              self.pin = pin;
              vars.force3D !== false && gsap.set(pin, {
                force3D: true
              });
              pinCache = gsap.core.getCache(pin);
    
              if (!pinCache.spacer) {
                pinCache.spacer = spacer = _doc.createElement("div");
                spacer.setAttribute("class", "pin-spacer" + (id ? " pin-spacer-" + id : ""));
                pinCache.pinState = pinOriginalState = _getState(pin);
              } else {
                pinOriginalState = pinCache.pinState;
              }
    
              self.spacer = spacer = pinCache.spacer;
              cs = _getComputedStyle(pin);
              spacingStart = cs[pinSpacing + direction.os2];
              pinGetter = gsap.getProperty(pin);
              pinSetter = gsap.quickSetter(pin, direction.a, _px);
    
              _swapPinIn(pin, spacer, cs);
    
              pinState = _getState(pin);
            }
    
            if (markers) {
              markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
              markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
              markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
              offset = markerStartTrigger["offset" + direction.op.d2];
              markerStart = _createMarker("start", id, scroller, direction, markerVars, offset);
              markerEnd = _createMarker("end", id, scroller, direction, markerVars, offset);
    
              if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
                _makePositionable(isViewport ? _body : scroller);
    
                gsap.set([markerStartTrigger, markerEndTrigger], {
                  force3D: true
                });
                markerStartSetter = gsap.quickSetter(markerStartTrigger, direction.a, _px);
                markerEndSetter = gsap.quickSetter(markerEndTrigger, direction.a, _px);
              }
            }
    
            self.revert = function (revert) {
              var r = revert !== false || !self.enabled,
                  prevRefreshing = _refreshing;
    
              if (r !== self.isReverted) {
                if (r) {
                  self.scroll.rec || (self.scroll.rec = self.scroll());
                  prevScroll = Math.max(self.scroll(), self.scroll.rec || 0);
                  prevProgress = self.progress;
                  prevAnimProgress = animation && animation.progress();
                }
    
                markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
                  return m.style.display = r ? "none" : "block";
                });
                r && (_refreshing = 1);
                self.update(r);
                _refreshing = prevRefreshing;
                pin && (r ? _swapPinOut(pin, spacer, pinOriginalState) : (!pinReparent || !self.isActive) && _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState));
                self.isReverted = r;
              }
            };
    
            self.refresh = function (soft, force) {
              if ((_refreshing || !self.enabled) && !force) {
                return;
              }
    
              if (pin && soft && _lastScrollTime) {
                _addListener(ScrollTrigger, "scrollEnd", _softRefresh);
    
                return;
              }
    
              _refreshing = 1;
              scrubTween && scrubTween.pause();
              invalidateOnRefresh && animation && animation.progress(0).invalidate();
              self.isReverted || self.revert();
    
              var size = getScrollerSize(),
                  scrollerBounds = getScrollerOffsets(),
                  max = _maxScroll(scroller, direction),
                  offset = 0,
                  otherPinOffset = 0,
                  parsedEnd = vars.end,
                  parsedEndTrigger = vars.endTrigger || trigger,
                  parsedStart = vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"),
                  pinnedContainer = vars.pinnedContainer && _toArray(vars.pinnedContainer)[0],
                  triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0,
                  i = triggerIndex,
                  cs,
                  bounds,
                  scroll,
                  isVertical,
                  override,
                  curTrigger,
                  curPin,
                  oppositeScroll,
                  initted,
                  revertedPins;
    
              while (i--) {
                curTrigger = _triggers[i];
                curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = 1);
                curPin = curTrigger.pin;
    
                if (curPin && (curPin === trigger || curPin === pin) && !curTrigger.isReverted) {
                  revertedPins || (revertedPins = []);
                  revertedPins.unshift(curTrigger);
                  curTrigger.revert();
                }
              }
    
              start = _parsePosition(parsedStart, trigger, size, direction, self.scroll(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max) || (pin ? -0.001 : 0);
              _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));
    
              if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
                if (~parsedEnd.indexOf(" ")) {
                  parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
                } else {
                  offset = _offsetToPx(parsedEnd.substr(2), size);
                  parsedEnd = _isString(parsedStart) ? parsedStart : start + offset;
                  parsedEndTrigger = trigger;
                }
              }
    
              end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, self.scroll() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max)) || -0.001;
              change = end - start || (start -= 0.01) && 0.001;
              offset = 0;
              i = triggerIndex;
    
              while (i--) {
                curTrigger = _triggers[i];
                curPin = curTrigger.pin;
    
                if (curPin && curTrigger.start - curTrigger._pinPush < start) {
                  cs = curTrigger.end - curTrigger.start;
                  (curPin === trigger || curPin === pinnedContainer) && (offset += cs);
                  curPin === pin && (otherPinOffset += cs);
                }
              }
    
              start += offset;
              end += offset;
              self._pinPush = otherPinOffset;
    
              if (markerStart && offset) {
                cs = {};
                cs[direction.a] = "+=" + offset;
                pinnedContainer && (cs[direction.p] = "-=" + self.scroll());
                gsap.set([markerStart, markerEnd], cs);
              }
    
              if (pin) {
                cs = _getComputedStyle(pin);
                isVertical = direction === _vertical;
                scroll = self.scroll();
                pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
                !max && end > 1 && ((isViewport ? _body : scroller).style["overflow-" + direction.a] = "scroll");
    
                _swapPinIn(pin, spacer, cs);
    
                pinState = _getState(pin);
                bounds = _getBounds(pin, true);
                oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
    
                if (pinSpacing) {
                  spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
                  spacerState.t = spacer;
                  i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
                  i && spacerState.push(direction.d, i + _px);
    
                  _setState(spacerState);
    
                  useFixedPosition && self.scroll(prevScroll);
                }
    
                if (useFixedPosition) {
                  override = {
                    top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
                    left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
                    boxSizing: "border-box",
                    position: "fixed"
                  };
                  override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
                  override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
                  override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
                  override[_padding] = cs[_padding];
                  override[_padding + _Top] = cs[_padding + _Top];
                  override[_padding + _Right] = cs[_padding + _Right];
                  override[_padding + _Bottom] = cs[_padding + _Bottom];
                  override[_padding + _Left] = cs[_padding + _Left];
                  pinActiveState = _copyState(pinOriginalState, override, pinReparent);
                }
    
                if (animation) {
                  initted = animation._initted;
    
                  _suppressOverwrites(1);
    
                  animation.render(animation.duration(), true, true);
                  pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
                  change !== pinChange && pinActiveState.splice(pinActiveState.length - 2, 2);
                  animation.render(0, true, true);
                  initted || animation.invalidate();
    
                  _suppressOverwrites(0);
                } else {
                  pinChange = change;
                }
              } else if (trigger && self.scroll()) {
                bounds = trigger.parentNode;
    
                while (bounds && bounds !== _body) {
                  if (bounds._pinOffset) {
                    start -= bounds._pinOffset;
                    end -= bounds._pinOffset;
                  }
    
                  bounds = bounds.parentNode;
                }
              }
    
              revertedPins && revertedPins.forEach(function (t) {
                return t.revert(false);
              });
              self.start = start;
              self.end = end;
              scroll1 = scroll2 = self.scroll();
              scroll1 < prevScroll && self.scroll(prevScroll);
              self.revert(false);
              _refreshing = 0;
              animation && isToggle && animation._initted && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress, true).render(animation.time(), true, true);
    
              if (prevProgress !== self.progress) {
                scrubTween && animation.totalProgress(prevProgress, true);
                self.progress = prevProgress;
                self.update();
              }
    
              pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
              onRefresh && onRefresh(self);
            };
    
            self.getVelocity = function () {
              return (self.scroll() - scroll2) / (_getTime() - _time2) * 1000 || 0;
            };
    
            self.update = function (reset, recordVelocity) {
              var scroll = self.scroll(),
                  p = reset ? 0 : (scroll - start) / change,
                  clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0,
                  prevProgress = self.progress,
                  isActive,
                  wasActive,
                  toggleState,
                  action,
                  stateChanged,
                  toggled;
    
              if (recordVelocity) {
                scroll2 = scroll1;
                scroll1 = scroll;
    
                if (snap) {
                  snap2 = snap1;
                  snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
                }
              }
    
              anticipatePin && !clipped && pin && !_refreshing && !_startup && _lastScrollTime && start < scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin && (clipped = 0.0001);
    
              if (clipped !== prevProgress && self.enabled) {
                isActive = self.isActive = !!clipped && clipped < 1;
                wasActive = !!prevProgress && prevProgress < 1;
                toggled = isActive !== wasActive;
                stateChanged = toggled || !!clipped !== !!prevProgress;
                self.direction = clipped > prevProgress ? 1 : -1;
                self.progress = clipped;
    
                if (!isToggle) {
                  if (scrubTween && !_refreshing && !_startup) {
                    scrubTween.vars.totalProgress = clipped;
                    scrubTween.invalidate().restart();
                  } else if (animation) {
                    animation.totalProgress(clipped, !!_refreshing);
                  }
                }
    
                if (pin) {
                  reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
    
                  if (!useFixedPosition) {
                    pinSetter(pinStart + pinChange * clipped);
                  } else if (stateChanged) {
                    action = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);
    
                    if (pinReparent) {
                      if (!reset && (isActive || action)) {
                        var bounds = _getBounds(pin, true),
                            _offset = scroll - start;
    
                        _reparent(pin, _body, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
                      } else {
                        _reparent(pin, spacer);
                      }
                    }
    
                    _setState(isActive || action ? pinActiveState : pinState);
    
                    pinChange !== change && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !action ? pinChange : 0));
                  }
                }
    
                snap && !tweenTo.tween && !_refreshing && !_startup && snapDelayedCall.restart(true);
                toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function (el) {
                  return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
                });
                onUpdate && !isToggle && !reset && onUpdate(self);
    
                if (stateChanged && !_refreshing) {
                  toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3;
    
                  if (isToggle) {
                    action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
    
                    if (animation && (action === "complete" || action === "reset" || action in animation)) {
                      if (action === "complete") {
                        animation.pause().totalProgress(1);
                      } else if (action === "reset") {
                        animation.restart(true).pause();
                      } else if (action === "restart") {
                        animation.restart(true);
                      } else {
                        animation[action]();
                      }
                    }
    
                    onUpdate && onUpdate(self);
                  }
    
                  if (toggled || !_limitCallbacks) {
                    onToggle && toggled && onToggle(self);
                    callbacks[toggleState] && callbacks[toggleState](self);
                    once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0);
    
                    if (!toggled) {
                      toggleState = clipped === 1 ? 1 : 3;
                      callbacks[toggleState] && callbacks[toggleState](self);
                    }
                  }
                } else if (isToggle && onUpdate && !_refreshing) {
                  onUpdate(self);
                }
              }
    
              if (markerEndSetter) {
                markerStartSetter(scroll + (markerStartTrigger._isFlipped ? 1 : 0));
                markerEndSetter(scroll);
              }
            };
    
            self.enable = function (reset, refresh) {
              if (!self.enabled) {
                self.enabled = true;
    
                _addListener(scroller, "resize", _onResize);
    
                _addListener(scroller, "scroll", _onScroll);
    
                onRefreshInit && _addListener(ScrollTrigger, "refreshInit", onRefreshInit);
    
                if (reset !== false) {
                  self.progress = prevProgress = 0;
                  scroll1 = scroll2 = lastSnap = self.scroll();
                }
    
                refresh !== false && self.refresh();
              }
            };
    
            self.getTween = function (snap) {
              return snap && tweenTo ? tweenTo.tween : scrubTween;
            };
    
            self.disable = function (reset, allowAnimation) {
              if (self.enabled) {
                reset !== false && self.revert();
                self.enabled = self.isActive = false;
                allowAnimation || scrubTween && scrubTween.pause();
                prevScroll = 0;
                pinCache && (pinCache.uncache = 1);
                onRefreshInit && _removeListener(ScrollTrigger, "refreshInit", onRefreshInit);
    
                if (snapDelayedCall) {
                  snapDelayedCall.pause();
                  tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
                }
    
                if (!isViewport) {
                  var i = _triggers.length;
    
                  while (i--) {
                    if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
                      return;
                    }
                  }
    
                  _removeListener(scroller, "resize", _onResize);
    
                  _removeListener(scroller, "scroll", _onScroll);
                }
              }
            };
    
            self.kill = function (revert, allowAnimation) {
              self.disable(revert, allowAnimation);
              id && delete _ids[id];
    
              var i = _triggers.indexOf(self);
    
              _triggers.splice(i, 1);
    
              i === _i && _direction > 0 && _i--;
              i = 0;
    
              _triggers.forEach(function (t) {
                return t.scroller === self.scroller && (i = 1);
              });
    
              i || (self.scroll.rec = 0);
    
              if (animation) {
                animation.scrollTrigger = null;
                revert && animation.render(-1);
                allowAnimation || animation.kill();
              }
    
              markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
                return m.parentNode && m.parentNode.removeChild(m);
              });
    
              if (pin) {
                pinCache && (pinCache.uncache = 1);
                i = 0;
    
                _triggers.forEach(function (t) {
                  return t.pin === pin && i++;
                });
    
                i || (pinCache.spacer = 0);
              }
            };
    
            self.enable(false, false);
            !animation || !animation.add || change ? self.refresh() : gsap.delayedCall(0.01, function () {
              return start || end || self.refresh();
            }) && (change = 0.01) && (start = end = 0);
          };
    
          ScrollTrigger.register = function register(core) {
            if (!_coreInitted) {
              gsap = core || _getGSAP();
    
              if (_windowExists() && window.document) {
                _win = window;
                _doc = document;
                _docEl = _doc.documentElement;
                _body = _doc.body;
              }
    
              if (gsap) {
                _toArray = gsap.utils.toArray;
                _clamp = gsap.utils.clamp;
                _suppressOverwrites = gsap.core.suppressOverwrites || _passThrough;
                gsap.core.globals("ScrollTrigger", ScrollTrigger);
    
                if (_body) {
                  _raf = _win.requestAnimationFrame || function (f) {
                    return setTimeout(f, 16);
                  };
    
                  _addListener(_win, "wheel", _onScroll);
    
                  _root = [_win, _doc, _docEl, _body];
    
                  _addListener(_doc, "scroll", _onScroll);
    
                  var bodyStyle = _body.style,
                      border = bodyStyle.borderTop,
                      bounds;
                  bodyStyle.borderTop = "1px solid #000";
                  bounds = _getBounds(_body);
                  _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
                  _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
                  border ? bodyStyle.borderTop = border : bodyStyle.removeProperty("border-top");
                  _syncInterval = setInterval(_sync, 200);
                  gsap.delayedCall(0.5, function () {
                    return _startup = 0;
                  });
    
                  _addListener(_doc, "touchcancel", _passThrough);
    
                  _addListener(_body, "touchstart", _passThrough);
    
                  _multiListener(_addListener, _doc, "pointerdown,touchstart,mousedown", function () {
                    return _pointerIsDown = 1;
                  });
    
                  _multiListener(_addListener, _doc, "pointerup,touchend,mouseup", function () {
                    return _pointerIsDown = 0;
                  });
    
                  _transformProp = gsap.utils.checkPrefix("transform");
    
                  _stateProps.push(_transformProp);
    
                  _coreInitted = _getTime();
                  _resizeDelay = gsap.delayedCall(0.2, _refreshAll).pause();
                  _autoRefresh = [_doc, "visibilitychange", function () {
                    var w = _win.innerWidth,
                        h = _win.innerHeight;
    
                    if (_doc.hidden) {
                      _prevWidth = w;
                      _prevHeight = h;
                    } else if (_prevWidth !== w || _prevHeight !== h) {
                      _onResize();
                    }
                  }, _doc, "DOMContentLoaded", _refreshAll, _win, "load", function () {
                    return _lastScrollTime || _refreshAll();
                  }, _win, "resize", _onResize];
    
                  _iterateAutoRefresh(_addListener);
                }
              }
            }
    
            return _coreInitted;
          };
    
          ScrollTrigger.defaults = function defaults(config) {
            for (var p in config) {
              _defaults[p] = config[p];
            }
          };
    
          ScrollTrigger.kill = function kill() {
            _enabled = 0;
    
            _triggers.slice(0).forEach(function (trigger) {
              return trigger.kill(1);
            });
          };
    
          ScrollTrigger.config = function config(vars) {
            "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
            var ms = vars.syncInterval;
            ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
    
            if ("autoRefreshEvents" in vars) {
              _iterateAutoRefresh(_removeListener) || _iterateAutoRefresh(_addListener, vars.autoRefreshEvents || "none");
              _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
            }
          };
    
          ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
            var t = _toArray(target)[0],
                i = _scrollers.indexOf(t),
                isViewport = _isViewport(t);
    
            if (~i) {
              _scrollers.splice(i, isViewport ? 6 : 2);
            }
    
            isViewport ? _proxies.unshift(_win, vars, _body, vars, _docEl, vars) : _proxies.unshift(t, vars);
          };
    
          ScrollTrigger.matchMedia = function matchMedia(vars) {
            var mq, p, i, func, result;
    
            for (p in vars) {
              i = _media.indexOf(p);
              func = vars[p];
              _creatingMedia = p;
    
              if (p === "all") {
                func();
              } else {
                mq = _win.matchMedia(p);
    
                if (mq) {
                  mq.matches && (result = func());
    
                  if (~i) {
                    _media[i + 1] = _combineFunc(_media[i + 1], func);
                    _media[i + 2] = _combineFunc(_media[i + 2], result);
                  } else {
                    i = _media.length;
    
                    _media.push(p, func, result);
    
                    mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
                  }
    
                  _media[i + 3] = mq.matches;
                }
              }
    
              _creatingMedia = 0;
            }
    
            return _media;
          };
    
          ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
            query || (_media.length = 0);
            query = _media.indexOf(query);
            query >= 0 && _media.splice(query, 4);
          };
    
          return ScrollTrigger;
        }();
        ScrollTrigger.version = "3.7.1";
    
        ScrollTrigger.saveStyles = function (targets) {
          return targets ? _toArray(targets).forEach(function (target) {
            if (target && target.style) {
              var i = _savedStyles.indexOf(target);
    
              i >= 0 && _savedStyles.splice(i, 5);
    
              _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap.core.getCache(target), _creatingMedia);
            }
          }) : _savedStyles;
        };
    
        ScrollTrigger.revert = function (soft, media) {
          return _revertAll(!soft, media);
        };
    
        ScrollTrigger.create = function (vars, animation) {
          return new ScrollTrigger(vars, animation);
        };
    
        ScrollTrigger.refresh = function (safe) {
          return safe ? _onResize() : _refreshAll(true);
        };
    
        ScrollTrigger.update = _updateAll;
    
        ScrollTrigger.maxScroll = function (element, horizontal) {
          return _maxScroll(element, horizontal ? _horizontal : _vertical);
        };
    
        ScrollTrigger.getScrollFunc = function (element, horizontal) {
          return _getScrollFunc(_toArray(element)[0], horizontal ? _horizontal : _vertical);
        };
    
        ScrollTrigger.getById = function (id) {
          return _ids[id];
        };
    
        ScrollTrigger.getAll = function () {
          return _triggers.slice(0);
        };
    
        ScrollTrigger.isScrolling = function () {
          return !!_lastScrollTime;
        };
    
        ScrollTrigger.addEventListener = function (type, callback) {
          var a = _listeners[type] || (_listeners[type] = []);
          ~a.indexOf(callback) || a.push(callback);
        };
    
        ScrollTrigger.removeEventListener = function (type, callback) {
          var a = _listeners[type],
              i = a && a.indexOf(callback);
          i >= 0 && a.splice(i, 1);
        };
    
        ScrollTrigger.batch = function (targets, vars) {
          var result = [],
              varsCopy = {},
              interval = vars.interval || 0.016,
              batchMax = vars.batchMax || 1e9,
              proxyCallback = function proxyCallback(type, callback) {
            var elements = [],
                triggers = [],
                delay = gsap.delayedCall(interval, function () {
              callback(elements, triggers);
              elements = [];
              triggers = [];
            }).pause();
            return function (self) {
              elements.length || delay.restart(true);
              elements.push(self.trigger);
              triggers.push(self);
              batchMax <= elements.length && delay.progress(1);
            };
          },
              p;
    
          for (p in vars) {
            varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
          }
    
          if (_isFunction(batchMax)) {
            batchMax = batchMax();
    
            _addListener(ScrollTrigger, "refresh", function () {
              return batchMax = vars.batchMax();
            });
          }
    
          _toArray(targets).forEach(function (target) {
            var config = {};
    
            for (p in varsCopy) {
              config[p] = varsCopy[p];
            }
    
            config.trigger = target;
            result.push(ScrollTrigger.create(config));
          });
    
          return result;
        };
    
        ScrollTrigger.sort = function (func) {
          return _triggers.sort(func || function (a, b) {
            return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
          });
        };
    
        _getGSAP() && gsap.registerPlugin(ScrollTrigger);
    
        exports.ScrollTrigger = ScrollTrigger;
        exports.default = ScrollTrigger;
    
        Object.defineProperty(exports, '__esModule', { value: true });
    
    })));
    
    },{}],9:[function(require,module,exports){
    (function (global, factory) {
      typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
      typeof define === 'function' && define.amd ? define(['exports'], factory) :
      (global = global || self, factory(global.window = global.window || {}));
    }(this, (function (exports) { 'use strict';
    
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
      }
    
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
    
        return self;
      }
    
      /*!
       * GSAP 3.7.1
       * https://greensock.com
       *
       * @license Copyright 2008-2021, GreenSock. All rights reserved.
       * Subject to the terms at https://greensock.com/standard-license or for
       * Club GreenSock members, the agreement issued with that membership.
       * @author: Jack Doyle, jack@greensock.com
      */
      var _config = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
          lineHeight: ""
        }
      },
          _defaults = {
        duration: .5,
        overwrite: false,
        delay: 0
      },
          _suppressOverwrites,
          _bigNum = 1e8,
          _tinyNum = 1 / _bigNum,
          _2PI = Math.PI * 2,
          _HALF_PI = _2PI / 4,
          _gsID = 0,
          _sqrt = Math.sqrt,
          _cos = Math.cos,
          _sin = Math.sin,
          _isString = function _isString(value) {
        return typeof value === "string";
      },
          _isFunction = function _isFunction(value) {
        return typeof value === "function";
      },
          _isNumber = function _isNumber(value) {
        return typeof value === "number";
      },
          _isUndefined = function _isUndefined(value) {
        return typeof value === "undefined";
      },
          _isObject = function _isObject(value) {
        return typeof value === "object";
      },
          _isNotFalse = function _isNotFalse(value) {
        return value !== false;
      },
          _windowExists = function _windowExists() {
        return typeof window !== "undefined";
      },
          _isFuncOrString = function _isFuncOrString(value) {
        return _isFunction(value) || _isString(value);
      },
          _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
          _isArray = Array.isArray,
          _strictNumExp = /(?:-?\.?\d|\.)+/gi,
          _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
          _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
          _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
          _relExp = /[+-]=-?[.\d]+/,
          _delimitedValueExp = /[^,'"\[\]\s]+/gi,
          _unitExp = /[\d.+\-=]+(?:e[-+]\d*)*/i,
          _globalTimeline,
          _win,
          _coreInitted,
          _doc,
          _globals = {},
          _installScope = {},
          _coreReady,
          _install = function _install(scope) {
        return (_installScope = _merge(scope, _globals)) && gsap;
      },
          _missingPlugin = function _missingPlugin(property, value) {
        return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
      },
          _warn = function _warn(message, suppress) {
        return !suppress && console.warn(message);
      },
          _addGlobal = function _addGlobal(name, obj) {
        return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
      },
          _emptyFunc = function _emptyFunc() {
        return 0;
      },
          _reservedProps = {},
          _lazyTweens = [],
          _lazyLookup = {},
          _lastRenderedFrame,
          _plugins = {},
          _effects = {},
          _nextGCFrame = 30,
          _harnessPlugins = [],
          _callbackNames = "",
          _harness = function _harness(targets) {
        var target = targets[0],
            harnessPlugin,
            i;
        _isObject(target) || _isFunction(target) || (targets = [targets]);
    
        if (!(harnessPlugin = (target._gsap || {}).harness)) {
          i = _harnessPlugins.length;
    
          while (i-- && !_harnessPlugins[i].targetTest(target)) {}
    
          harnessPlugin = _harnessPlugins[i];
        }
    
        i = targets.length;
    
        while (i--) {
          targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
        }
    
        return targets;
      },
          _getCache = function _getCache(target) {
        return target._gsap || _harness(toArray(target))[0]._gsap;
      },
          _getProperty = function _getProperty(target, property, v) {
        return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
      },
          _forEachName = function _forEachName(names, func) {
        return (names = names.split(",")).forEach(func) || names;
      },
          _round = function _round(value) {
        return Math.round(value * 100000) / 100000 || 0;
      },
          _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
        var l = toFind.length,
            i = 0;
    
        for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}
    
        return i < l;
      },
          _lazyRender = function _lazyRender() {
        var l = _lazyTweens.length,
            a = _lazyTweens.slice(0),
            i,
            tween;
    
        _lazyLookup = {};
        _lazyTweens.length = 0;
    
        for (i = 0; i < l; i++) {
          tween = a[i];
          tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
        }
      },
          _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
        _lazyTweens.length && _lazyRender();
        animation.render(time, suppressEvents, force);
        _lazyTweens.length && _lazyRender();
      },
          _numericIfPossible = function _numericIfPossible(value) {
        var n = parseFloat(value);
        return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
      },
          _passThrough = function _passThrough(p) {
        return p;
      },
          _setDefaults = function _setDefaults(obj, defaults) {
        for (var p in defaults) {
          p in obj || (obj[p] = defaults[p]);
        }
    
        return obj;
      },
          _setKeyframeDefaults = function _setKeyframeDefaults(obj, defaults) {
        for (var p in defaults) {
          p in obj || p === "duration" || p === "ease" || (obj[p] = defaults[p]);
        }
      },
          _merge = function _merge(base, toMerge) {
        for (var p in toMerge) {
          base[p] = toMerge[p];
        }
    
        return base;
      },
          _mergeDeep = function _mergeDeep(base, toMerge) {
        for (var p in toMerge) {
          p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
        }
    
        return base;
      },
          _copyExcluding = function _copyExcluding(obj, excluding) {
        var copy = {},
            p;
    
        for (p in obj) {
          p in excluding || (copy[p] = obj[p]);
        }
    
        return copy;
      },
          _inheritDefaults = function _inheritDefaults(vars) {
        var parent = vars.parent || _globalTimeline,
            func = vars.keyframes ? _setKeyframeDefaults : _setDefaults;
    
        if (_isNotFalse(vars.inherit)) {
          while (parent) {
            func(vars, parent.vars.defaults);
            parent = parent.parent || parent._dp;
          }
        }
    
        return vars;
      },
          _arraysMatch = function _arraysMatch(a1, a2) {
        var i = a1.length,
            match = i === a2.length;
    
        while (match && i-- && a1[i] === a2[i]) {}
    
        return i < 0;
      },
          _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
        if (firstProp === void 0) {
          firstProp = "_first";
        }
    
        if (lastProp === void 0) {
          lastProp = "_last";
        }
    
        var prev = parent[lastProp],
            t;
    
        if (sortBy) {
          t = child[sortBy];
    
          while (prev && prev[sortBy] > t) {
            prev = prev._prev;
          }
        }
    
        if (prev) {
          child._next = prev._next;
          prev._next = child;
        } else {
          child._next = parent[firstProp];
          parent[firstProp] = child;
        }
    
        if (child._next) {
          child._next._prev = child;
        } else {
          parent[lastProp] = child;
        }
    
        child._prev = prev;
        child.parent = child._dp = parent;
        return child;
      },
          _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
        if (firstProp === void 0) {
          firstProp = "_first";
        }
    
        if (lastProp === void 0) {
          lastProp = "_last";
        }
    
        var prev = child._prev,
            next = child._next;
    
        if (prev) {
          prev._next = next;
        } else if (parent[firstProp] === child) {
          parent[firstProp] = next;
        }
    
        if (next) {
          next._prev = prev;
        } else if (parent[lastProp] === child) {
          parent[lastProp] = prev;
        }
    
        child._next = child._prev = child.parent = null;
      },
          _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
        child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
        child._act = 0;
      },
          _uncache = function _uncache(animation, child) {
        if (animation && (!child || child._end > animation._dur || child._start < 0)) {
          var a = animation;
    
          while (a) {
            a._dirty = 1;
            a = a.parent;
          }
        }
    
        return animation;
      },
          _recacheAncestors = function _recacheAncestors(animation) {
        var parent = animation.parent;
    
        while (parent && parent.parent) {
          parent._dirty = 1;
          parent.totalDuration();
          parent = parent.parent;
        }
    
        return animation;
      },
          _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
        return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
      },
          _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
        return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
      },
          _animationCycle = function _animationCycle(tTime, cycleDuration) {
        var whole = Math.floor(tTime /= cycleDuration);
        return tTime && whole === tTime ? whole - 1 : whole;
      },
          _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
        return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
      },
          _setEnd = function _setEnd(animation) {
        return animation._end = _round(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
      },
          _alignPlayhead = function _alignPlayhead(animation, totalTime) {
        var parent = animation._dp;
    
        if (parent && parent.smoothChildTiming && animation._ts) {
          animation._start = _round(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
    
          _setEnd(animation);
    
          parent._dirty || _uncache(parent, animation);
        }
    
        return animation;
      },
          _postAddChecks = function _postAddChecks(timeline, child) {
        var t;
    
        if (child._time || child._initted && !child._dur) {
          t = _parentToChildTotalTime(timeline.rawTime(), child);
    
          if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
            child.render(t, true);
          }
        }
    
        if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
          if (timeline._dur < timeline.duration()) {
            t = timeline;
    
            while (t._dp) {
              t.rawTime() >= 0 && t.totalTime(t._tTime);
              t = t._dp;
            }
          }
    
          timeline._zTime = -_tinyNum;
        }
      },
          _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
        child.parent && _removeFromParent(child);
        child._start = _round((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
        child._end = _round(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    
        _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
    
        _isFromOrFromStart(child) || (timeline._recent = child);
        skipChecks || _postAddChecks(timeline, child);
        return timeline;
      },
          _scrollTrigger = function _scrollTrigger(animation, trigger) {
        return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
      },
          _attemptInitTween = function _attemptInitTween(tween, totalTime, force, suppressEvents) {
        _initTween(tween, totalTime);
    
        if (!tween._initted) {
          return 1;
        }
    
        if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
          _lazyTweens.push(tween);
    
          tween._lazy = [totalTime, suppressEvents];
          return 1;
        }
      },
          _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
        var parent = _ref.parent;
        return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
      },
          _isFromOrFromStart = function _isFromOrFromStart(_ref2) {
        var data = _ref2.data;
        return data === "isFromStart" || data === "isStart";
      },
          _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
        var prevRatio = tween.ratio,
            ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1,
            repeatDelay = tween._rDelay,
            tTime = 0,
            pt,
            iteration,
            prevIteration;
    
        if (repeatDelay && tween._repeat) {
          tTime = _clamp(0, tween._tDur, totalTime);
          iteration = _animationCycle(tTime, repeatDelay);
          prevIteration = _animationCycle(tween._tTime, repeatDelay);
          tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
    
          if (iteration !== prevIteration) {
            prevRatio = 1 - ratio;
            tween.vars.repeatRefresh && tween._initted && tween.invalidate();
          }
        }
    
        if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
          if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) {
            return;
          }
    
          prevIteration = tween._zTime;
          tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
          suppressEvents || (suppressEvents = totalTime && !prevIteration);
          tween.ratio = ratio;
          tween._from && (ratio = 1 - ratio);
          tween._time = 0;
          tween._tTime = tTime;
          pt = tween._pt;
    
          while (pt) {
            pt.r(ratio, pt.d);
            pt = pt._next;
          }
    
          tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
          tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
          tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
    
          if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
            ratio && _removeFromParent(tween, 1);
    
            if (!suppressEvents) {
              _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
    
              tween._prom && tween._prom();
            }
          }
        } else if (!tween._zTime) {
          tween._zTime = totalTime;
        }
      },
          _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
        var child;
    
        if (time > prevTime) {
          child = animation._first;
    
          while (child && child._start <= time) {
            if (!child._dur && child.data === "isPause" && child._start > prevTime) {
              return child;
            }
    
            child = child._next;
          }
        } else {
          child = animation._last;
    
          while (child && child._start >= time) {
            if (!child._dur && child.data === "isPause" && child._start < prevTime) {
              return child;
            }
    
            child = child._prev;
          }
        }
      },
          _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
        var repeat = animation._repeat,
            dur = _round(duration) || 0,
            totalProgress = animation._tTime / animation._tDur;
        totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
        animation._dur = dur;
        animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _round(dur * (repeat + 1) + animation._rDelay * repeat);
        totalProgress && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
        skipUncache || _uncache(animation.parent, animation);
        return animation;
      },
          _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
        return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
      },
          _zeroPosition = {
        _start: 0,
        endTime: _emptyFunc,
        totalDuration: _emptyFunc
      },
          _parsePosition = function _parsePosition(animation, position, percentAnimation) {
        var labels = animation.labels,
            recent = animation._recent || _zeroPosition,
            clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
            i,
            offset,
            isPercent;
    
        if (_isString(position) && (isNaN(position) || position in labels)) {
          offset = position.charAt(0);
          isPercent = position.substr(-1) === "%";
          i = position.indexOf("=");
    
          if (offset === "<" || offset === ">") {
            i >= 0 && (position = position.replace(/=/, ""));
            return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
          }
    
          if (i < 0) {
            position in labels || (labels[position] = clippedDuration);
            return labels[position];
          }
    
          offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
    
          if (isPercent && percentAnimation) {
            offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
          }
    
          return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
        }
    
        return position == null ? clippedDuration : +position;
      },
          _createTweenType = function _createTweenType(type, params, timeline) {
        var isLegacy = _isNumber(params[1]),
            varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
            vars = params[varsIndex],
            irVars,
            parent;
    
        isLegacy && (vars.duration = params[1]);
        vars.parent = timeline;
    
        if (type) {
          irVars = vars;
          parent = timeline;
    
          while (parent && !("immediateRender" in irVars)) {
            irVars = parent.vars.defaults || {};
            parent = _isNotFalse(parent.vars.inherit) && parent.parent;
          }
    
          vars.immediateRender = _isNotFalse(irVars.immediateRender);
          type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
        }
    
        return new Tween(params[0], vars, params[varsIndex + 1]);
      },
          _conditionalReturn = function _conditionalReturn(value, func) {
        return value || value === 0 ? func(value) : func;
      },
          _clamp = function _clamp(min, max, value) {
        return value < min ? min : value > max ? max : value;
      },
          getUnit = function getUnit(value) {
        if (typeof value !== "string") {
          return "";
        }
    
        var v = _unitExp.exec(value);
    
        return v ? value.substr(v.index + v[0].length) : "";
      },
          clamp = function clamp(min, max, value) {
        return _conditionalReturn(value, function (v) {
          return _clamp(min, max, v);
        });
      },
          _slice = [].slice,
          _isArrayLike = function _isArrayLike(value, nonEmpty) {
        return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
      },
          _flatten = function _flatten(ar, leaveStrings, accumulator) {
        if (accumulator === void 0) {
          accumulator = [];
        }
    
        return ar.forEach(function (value) {
          var _accumulator;
    
          return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
        }) || accumulator;
      },
          toArray = function toArray(value, scope, leaveStrings) {
        return _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
      },
          selector = function selector(value) {
        value = toArray(value)[0] || _warn("Invalid scope") || {};
        return function (v) {
          var el = value.current || value.nativeElement || value;
          return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
        };
      },
          shuffle = function shuffle(a) {
        return a.sort(function () {
          return .5 - Math.random();
        });
      },
          distribute = function distribute(v) {
        if (_isFunction(v)) {
          return v;
        }
    
        var vars = _isObject(v) ? v : {
          each: v
        },
            ease = _parseEase(vars.ease),
            from = vars.from || 0,
            base = parseFloat(vars.base) || 0,
            cache = {},
            isDecimal = from > 0 && from < 1,
            ratios = isNaN(from) || isDecimal,
            axis = vars.axis,
            ratioX = from,
            ratioY = from;
    
        if (_isString(from)) {
          ratioX = ratioY = {
            center: .5,
            edges: .5,
            end: 1
          }[from] || 0;
        } else if (!isDecimal && ratios) {
          ratioX = from[0];
          ratioY = from[1];
        }
    
        return function (i, target, a) {
          var l = (a || vars).length,
              distances = cache[l],
              originX,
              originY,
              x,
              y,
              d,
              j,
              max,
              min,
              wrapAt;
    
          if (!distances) {
            wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
    
            if (!wrapAt) {
              max = -_bigNum;
    
              while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}
    
              wrapAt--;
            }
    
            distances = cache[l] = [];
            originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
            originY = ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
            max = 0;
            min = _bigNum;
    
            for (j = 0; j < l; j++) {
              x = j % wrapAt - originX;
              y = originY - (j / wrapAt | 0);
              distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
              d > max && (max = d);
              d < min && (min = d);
            }
    
            from === "random" && shuffle(distances);
            distances.max = max - min;
            distances.min = min;
            distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
            distances.b = l < 0 ? base - l : base;
            distances.u = getUnit(vars.amount || vars.each) || 0;
            ease = ease && l < 0 ? _invertEase(ease) : ease;
          }
    
          l = (distances[i] - distances.min) / distances.max || 0;
          return _round(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
        };
      },
          _roundModifier = function _roundModifier(v) {
        var p = v < 1 ? Math.pow(10, (v + "").length - 2) : 1;
        return function (raw) {
          var n = Math.round(parseFloat(raw) / v) * v * p;
          return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
        };
      },
          snap = function snap(snapTo, value) {
        var isArray = _isArray(snapTo),
            radius,
            is2D;
    
        if (!isArray && _isObject(snapTo)) {
          radius = isArray = snapTo.radius || _bigNum;
    
          if (snapTo.values) {
            snapTo = toArray(snapTo.values);
    
            if (is2D = !_isNumber(snapTo[0])) {
              radius *= radius;
            }
          } else {
            snapTo = _roundModifier(snapTo.increment);
          }
        }
    
        return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
          is2D = snapTo(raw);
          return Math.abs(is2D - raw) <= radius ? is2D : raw;
        } : function (raw) {
          var x = parseFloat(is2D ? raw.x : raw),
              y = parseFloat(is2D ? raw.y : 0),
              min = _bigNum,
              closest = 0,
              i = snapTo.length,
              dx,
              dy;
    
          while (i--) {
            if (is2D) {
              dx = snapTo[i].x - x;
              dy = snapTo[i].y - y;
              dx = dx * dx + dy * dy;
            } else {
              dx = Math.abs(snapTo[i] - x);
            }
    
            if (dx < min) {
              min = dx;
              closest = i;
            }
          }
    
          closest = !radius || min <= radius ? snapTo[closest] : raw;
          return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
        });
      },
          random = function random(min, max, roundingIncrement, returnFunction) {
        return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
          return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
        });
      },
          pipe = function pipe() {
        for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
          functions[_key] = arguments[_key];
        }
    
        return function (value) {
          return functions.reduce(function (v, f) {
            return f(v);
          }, value);
        };
      },
          unitize = function unitize(func, unit) {
        return function (value) {
          return func(parseFloat(value)) + (unit || getUnit(value));
        };
      },
          normalize = function normalize(min, max, value) {
        return mapRange(min, max, 0, 1, value);
      },
          _wrapArray = function _wrapArray(a, wrapper, value) {
        return _conditionalReturn(value, function (index) {
          return a[~~wrapper(index)];
        });
      },
          wrap = function wrap(min, max, value) {
        var range = max - min;
        return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
          return (range + (value - min) % range) % range + min;
        });
      },
          wrapYoyo = function wrapYoyo(min, max, value) {
        var range = max - min,
            total = range * 2;
        return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
          value = (total + (value - min) % total) % total || 0;
          return min + (value > range ? total - value : value);
        });
      },
          _replaceRandom = function _replaceRandom(value) {
        var prev = 0,
            s = "",
            i,
            nums,
            end,
            isArray;
    
        while (~(i = value.indexOf("random(", prev))) {
          end = value.indexOf(")", i);
          isArray = value.charAt(i + 7) === "[";
          nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
          s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
          prev = end + 1;
        }
    
        return s + value.substr(prev, value.length - prev);
      },
          mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
        var inRange = inMax - inMin,
            outRange = outMax - outMin;
        return _conditionalReturn(value, function (value) {
          return outMin + ((value - inMin) / inRange * outRange || 0);
        });
      },
          interpolate = function interpolate(start, end, progress, mutate) {
        var func = isNaN(start + end) ? 0 : function (p) {
          return (1 - p) * start + p * end;
        };
    
        if (!func) {
          var isString = _isString(start),
              master = {},
              p,
              i,
              interpolators,
              l,
              il;
    
          progress === true && (mutate = 1) && (progress = null);
    
          if (isString) {
            start = {
              p: start
            };
            end = {
              p: end
            };
          } else if (_isArray(start) && !_isArray(end)) {
            interpolators = [];
            l = start.length;
            il = l - 2;
    
            for (i = 1; i < l; i++) {
              interpolators.push(interpolate(start[i - 1], start[i]));
            }
    
            l--;
    
            func = function func(p) {
              p *= l;
              var i = Math.min(il, ~~p);
              return interpolators[i](p - i);
            };
    
            progress = end;
          } else if (!mutate) {
            start = _merge(_isArray(start) ? [] : {}, start);
          }
    
          if (!interpolators) {
            for (p in end) {
              _addPropTween.call(master, start, p, "get", end[p]);
            }
    
            func = function func(p) {
              return _renderPropTweens(p, master) || (isString ? start.p : start);
            };
          }
        }
    
        return _conditionalReturn(progress, func);
      },
          _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
        var labels = timeline.labels,
            min = _bigNum,
            p,
            distance,
            label;
    
        for (p in labels) {
          distance = labels[p] - fromTime;
    
          if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
            label = p;
            min = distance;
          }
        }
    
        return label;
      },
          _callback = function _callback(animation, type, executeLazyFirst) {
        var v = animation.vars,
            callback = v[type],
            params,
            scope;
    
        if (!callback) {
          return;
        }
    
        params = v[type + "Params"];
        scope = v.callbackScope || animation;
        executeLazyFirst && _lazyTweens.length && _lazyRender();
        return params ? callback.apply(scope, params) : callback.call(scope);
      },
          _interrupt = function _interrupt(animation) {
        _removeFromParent(animation);
    
        animation.scrollTrigger && animation.scrollTrigger.kill(false);
        animation.progress() < 1 && _callback(animation, "onInterrupt");
        return animation;
      },
          _quickTween,
          _createPlugin = function _createPlugin(config) {
        config = !config.name && config["default"] || config;
    
        var name = config.name,
            isFunc = _isFunction(config),
            Plugin = name && !isFunc && config.init ? function () {
          this._props = [];
        } : config,
            instanceDefaults = {
          init: _emptyFunc,
          render: _renderPropTweens,
          add: _addPropTween,
          kill: _killPropTweensOf,
          modifier: _addPluginModifier,
          rawVars: 0
        },
            statics = {
          targetTest: 0,
          get: 0,
          getSetter: _getSetter,
          aliases: {},
          register: 0
        };
    
        _wake();
    
        if (config !== Plugin) {
          if (_plugins[name]) {
            return;
          }
    
          _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics));
    
          _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics)));
    
          _plugins[Plugin.prop = name] = Plugin;
    
          if (config.targetTest) {
            _harnessPlugins.push(Plugin);
    
            _reservedProps[name] = 1;
          }
    
          name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
        }
    
        _addGlobal(name, Plugin);
    
        config.register && config.register(gsap, Plugin, PropTween);
      },
          _255 = 255,
          _colorLookup = {
        aqua: [0, _255, _255],
        lime: [0, _255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, _255],
        navy: [0, 0, 128],
        white: [_255, _255, _255],
        olive: [128, 128, 0],
        yellow: [_255, _255, 0],
        orange: [_255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [_255, 0, 0],
        pink: [_255, 192, 203],
        cyan: [0, _255, _255],
        transparent: [_255, _255, _255, 0]
      },
          _hue = function _hue(h, m1, m2) {
        h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
        return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
      },
          splitColor = function splitColor(v, toHSL, forceAlpha) {
        var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
            r,
            g,
            b,
            h,
            s,
            l,
            max,
            min,
            d,
            wasHSL;
    
        if (!a) {
          if (v.substr(-1) === ",") {
            v = v.substr(0, v.length - 1);
          }
    
          if (_colorLookup[v]) {
            a = _colorLookup[v];
          } else if (v.charAt(0) === "#") {
            if (v.length < 6) {
              r = v.charAt(1);
              g = v.charAt(2);
              b = v.charAt(3);
              v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
            }
    
            if (v.length === 9) {
              a = parseInt(v.substr(1, 6), 16);
              return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
            }
    
            v = parseInt(v.substr(1), 16);
            a = [v >> 16, v >> 8 & _255, v & _255];
          } else if (v.substr(0, 3) === "hsl") {
            a = wasHSL = v.match(_strictNumExp);
    
            if (!toHSL) {
              h = +a[0] % 360 / 360;
              s = +a[1] / 100;
              l = +a[2] / 100;
              g = l <= .5 ? l * (s + 1) : l + s - l * s;
              r = l * 2 - g;
              a.length > 3 && (a[3] *= 1);
              a[0] = _hue(h + 1 / 3, r, g);
              a[1] = _hue(h, r, g);
              a[2] = _hue(h - 1 / 3, r, g);
            } else if (~v.indexOf("=")) {
              a = v.match(_numExp);
              forceAlpha && a.length < 4 && (a[3] = 1);
              return a;
            }
          } else {
            a = v.match(_strictNumExp) || _colorLookup.transparent;
          }
    
          a = a.map(Number);
        }
    
        if (toHSL && !wasHSL) {
          r = a[0] / _255;
          g = a[1] / _255;
          b = a[2] / _255;
          max = Math.max(r, g, b);
          min = Math.min(r, g, b);
          l = (max + min) / 2;
    
          if (max === min) {
            h = s = 0;
          } else {
            d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
            h *= 60;
          }
    
          a[0] = ~~(h + .5);
          a[1] = ~~(s * 100 + .5);
          a[2] = ~~(l * 100 + .5);
        }
    
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      },
          _colorOrderData = function _colorOrderData(v) {
        var values = [],
            c = [],
            i = -1;
        v.split(_colorExp).forEach(function (v) {
          var a = v.match(_numWithUnitExp) || [];
          values.push.apply(values, a);
          c.push(i += a.length + 1);
        });
        values.c = c;
        return values;
      },
          _formatColors = function _formatColors(s, toHSL, orderMatchData) {
        var result = "",
            colors = (s + result).match(_colorExp),
            type = toHSL ? "hsla(" : "rgba(",
            i = 0,
            c,
            shell,
            d,
            l;
    
        if (!colors) {
          return s;
        }
    
        colors = colors.map(function (color) {
          return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
        });
    
        if (orderMatchData) {
          d = _colorOrderData(s);
          c = orderMatchData.c;
    
          if (c.join(result) !== d.c.join(result)) {
            shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
            l = shell.length - 1;
    
            for (; i < l; i++) {
              result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
            }
          }
        }
    
        if (!shell) {
          shell = s.split(_colorExp);
          l = shell.length - 1;
    
          for (; i < l; i++) {
            result += shell[i] + colors[i];
          }
        }
    
        return result + shell[l];
      },
          _colorExp = function () {
        var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
            p;
    
        for (p in _colorLookup) {
          s += "|" + p + "\\b";
        }
    
        return new RegExp(s + ")", "gi");
      }(),
          _hslExp = /hsl[a]?\(/,
          _colorStringFilter = function _colorStringFilter(a) {
        var combined = a.join(" "),
            toHSL;
        _colorExp.lastIndex = 0;
    
        if (_colorExp.test(combined)) {
          toHSL = _hslExp.test(combined);
          a[1] = _formatColors(a[1], toHSL);
          a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
          return true;
        }
      },
          _tickerActive,
          _ticker = function () {
        var _getTime = Date.now,
            _lagThreshold = 500,
            _adjustedLag = 33,
            _startTime = _getTime(),
            _lastUpdate = _startTime,
            _gap = 1000 / 240,
            _nextTime = _gap,
            _listeners = [],
            _id,
            _req,
            _raf,
            _self,
            _delta,
            _i,
            _tick = function _tick(v) {
          var elapsed = _getTime() - _lastUpdate,
              manual = v === true,
              overlap,
              dispatch,
              time,
              frame;
    
          elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
          _lastUpdate += elapsed;
          time = _lastUpdate - _startTime;
          overlap = time - _nextTime;
    
          if (overlap > 0 || manual) {
            frame = ++_self.frame;
            _delta = time - _self.time * 1000;
            _self.time = time = time / 1000;
            _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
            dispatch = 1;
          }
    
          manual || (_id = _req(_tick));
    
          if (dispatch) {
            for (_i = 0; _i < _listeners.length; _i++) {
              _listeners[_i](time, _delta, frame, v);
            }
          }
        };
    
        _self = {
          time: 0,
          frame: 0,
          tick: function tick() {
            _tick(true);
          },
          deltaRatio: function deltaRatio(fps) {
            return _delta / (1000 / (fps || 60));
          },
          wake: function wake() {
            if (_coreReady) {
              if (!_coreInitted && _windowExists()) {
                _win = _coreInitted = window;
                _doc = _win.document || {};
                _globals.gsap = gsap;
                (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
    
                _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
    
                _raf = _win.requestAnimationFrame;
              }
    
              _id && _self.sleep();
    
              _req = _raf || function (f) {
                return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
              };
    
              _tickerActive = 1;
    
              _tick(2);
            }
          },
          sleep: function sleep() {
            (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
            _tickerActive = 0;
            _req = _emptyFunc;
          },
          lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
            _lagThreshold = threshold || 1 / _tinyNum;
            _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
          },
          fps: function fps(_fps) {
            _gap = 1000 / (_fps || 240);
            _nextTime = _self.time * 1000 + _gap;
          },
          add: function add(callback) {
            _listeners.indexOf(callback) < 0 && _listeners.push(callback);
    
            _wake();
          },
          remove: function remove(callback) {
            var i;
            ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
          },
          _listeners: _listeners
        };
        return _self;
      }(),
          _wake = function _wake() {
        return !_tickerActive && _ticker.wake();
      },
          _easeMap = {},
          _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
          _quotesExp = /["']/g,
          _parseObjectInString = function _parseObjectInString(value) {
        var obj = {},
            split = value.substr(1, value.length - 3).split(":"),
            key = split[0],
            i = 1,
            l = split.length,
            index,
            val,
            parsedVal;
    
        for (; i < l; i++) {
          val = split[i];
          index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
          parsedVal = val.substr(0, index);
          obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
          key = val.substr(index + 1).trim();
        }
    
        return obj;
      },
          _valueInParentheses = function _valueInParentheses(value) {
        var open = value.indexOf("(") + 1,
            close = value.indexOf(")"),
            nested = value.indexOf("(", open);
        return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
      },
          _configEaseFromString = function _configEaseFromString(name) {
        var split = (name + "").split("("),
            ease = _easeMap[split[0]];
        return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
      },
          _invertEase = function _invertEase(ease) {
        return function (p) {
          return 1 - ease(1 - p);
        };
      },
          _propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
        var child = timeline._first,
            ease;
    
        while (child) {
          if (child instanceof Timeline) {
            _propagateYoyoEase(child, isYoyo);
          } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
            if (child.timeline) {
              _propagateYoyoEase(child.timeline, isYoyo);
            } else {
              ease = child._ease;
              child._ease = child._yEase;
              child._yEase = ease;
              child._yoyo = isYoyo;
            }
          }
    
          child = child._next;
        }
      },
          _parseEase = function _parseEase(ease, defaultEase) {
        return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
      },
          _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
        if (easeOut === void 0) {
          easeOut = function easeOut(p) {
            return 1 - easeIn(1 - p);
          };
        }
    
        if (easeInOut === void 0) {
          easeInOut = function easeInOut(p) {
            return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
          };
        }
    
        var ease = {
          easeIn: easeIn,
          easeOut: easeOut,
          easeInOut: easeInOut
        },
            lowercaseName;
    
        _forEachName(names, function (name) {
          _easeMap[name] = _globals[name] = ease;
          _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
    
          for (var p in ease) {
            _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
          }
        });
    
        return ease;
      },
          _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
        return function (p) {
          return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
        };
      },
          _configElastic = function _configElastic(type, amplitude, period) {
        var p1 = amplitude >= 1 ? amplitude : 1,
            p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
            p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
            easeOut = function easeOut(p) {
          return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
        },
            ease = type === "out" ? easeOut : type === "in" ? function (p) {
          return 1 - easeOut(1 - p);
        } : _easeInOutFromOut(easeOut);
    
        p2 = _2PI / p2;
    
        ease.config = function (amplitude, period) {
          return _configElastic(type, amplitude, period);
        };
    
        return ease;
      },
          _configBack = function _configBack(type, overshoot) {
        if (overshoot === void 0) {
          overshoot = 1.70158;
        }
    
        var easeOut = function easeOut(p) {
          return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
        },
            ease = type === "out" ? easeOut : type === "in" ? function (p) {
          return 1 - easeOut(1 - p);
        } : _easeInOutFromOut(easeOut);
    
        ease.config = function (overshoot) {
          return _configBack(type, overshoot);
        };
    
        return ease;
      };
    
      _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
        var power = i < 5 ? i + 1 : i;
    
        _insertEase(name + ",Power" + (power - 1), i ? function (p) {
          return Math.pow(p, power);
        } : function (p) {
          return p;
        }, function (p) {
          return 1 - Math.pow(1 - p, power);
        }, function (p) {
          return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
        });
      });
    
      _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
    
      _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
    
      (function (n, c) {
        var n1 = 1 / c,
            n2 = 2 * n1,
            n3 = 2.5 * n1,
            easeOut = function easeOut(p) {
          return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
        };
    
        _insertEase("Bounce", function (p) {
          return 1 - easeOut(1 - p);
        }, easeOut);
      })(7.5625, 2.75);
    
      _insertEase("Expo", function (p) {
        return p ? Math.pow(2, 10 * (p - 1)) : 0;
      });
    
      _insertEase("Circ", function (p) {
        return -(_sqrt(1 - p * p) - 1);
      });
    
      _insertEase("Sine", function (p) {
        return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
      });
    
      _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
    
      _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
        config: function config(steps, immediateStart) {
          if (steps === void 0) {
            steps = 1;
          }
    
          var p1 = 1 / steps,
              p2 = steps + (immediateStart ? 0 : 1),
              p3 = immediateStart ? 1 : 0,
              max = 1 - _tinyNum;
          return function (p) {
            return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
          };
        }
      };
      _defaults.ease = _easeMap["quad.out"];
    
      _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
        return _callbackNames += name + "," + name + "Params,";
      });
    
      var GSCache = function GSCache(target, harness) {
        this.id = _gsID++;
        target._gsap = this;
        this.target = target;
        this.harness = harness;
        this.get = harness ? harness.get : _getProperty;
        this.set = harness ? harness.getSetter : _getSetter;
      };
      var Animation = function () {
        function Animation(vars) {
          this.vars = vars;
          this._delay = +vars.delay || 0;
    
          if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
            this._rDelay = vars.repeatDelay || 0;
            this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
          }
    
          this._ts = 1;
    
          _setDuration(this, +vars.duration, 1, 1);
    
          this.data = vars.data;
          _tickerActive || _ticker.wake();
        }
    
        var _proto = Animation.prototype;
    
        _proto.delay = function delay(value) {
          if (value || value === 0) {
            this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
            this._delay = value;
            return this;
          }
    
          return this._delay;
        };
    
        _proto.duration = function duration(value) {
          return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
        };
    
        _proto.totalDuration = function totalDuration(value) {
          if (!arguments.length) {
            return this._tDur;
          }
    
          this._dirty = 0;
          return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
        };
    
        _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
          _wake();
    
          if (!arguments.length) {
            return this._tTime;
          }
    
          var parent = this._dp;
    
          if (parent && parent.smoothChildTiming && this._ts) {
            _alignPlayhead(this, _totalTime);
    
            !parent._dp || parent.parent || _postAddChecks(parent, this);
    
            while (parent.parent) {
              if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
                parent.totalTime(parent._tTime, true);
              }
    
              parent = parent.parent;
            }
    
            if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
              _addToTimeline(this._dp, this, this._start - this._delay);
            }
          }
    
          if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
            this._ts || (this._pTime = _totalTime);
    
            _lazySafeRender(this, _totalTime, suppressEvents);
          }
    
          return this;
        };
    
        _proto.time = function time(value, suppressEvents) {
          return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
        };
    
        _proto.totalProgress = function totalProgress(value, suppressEvents) {
          return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
        };
    
        _proto.progress = function progress(value, suppressEvents) {
          return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
        };
    
        _proto.iteration = function iteration(value, suppressEvents) {
          var cycleDuration = this.duration() + this._rDelay;
    
          return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
        };
    
        _proto.timeScale = function timeScale(value) {
          if (!arguments.length) {
            return this._rts === -_tinyNum ? 0 : this._rts;
          }
    
          if (this._rts === value) {
            return this;
          }
    
          var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
          this._rts = +value || 0;
          this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
          return _recacheAncestors(this.totalTime(_clamp(-this._delay, this._tDur, tTime), true));
        };
    
        _proto.paused = function paused(value) {
          if (!arguments.length) {
            return this._ps;
          }
    
          if (this._ps !== value) {
            this._ps = value;
    
            if (value) {
              this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
              this._ts = this._act = 0;
            } else {
              _wake();
    
              this._ts = this._rts;
              this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
            }
          }
    
          return this;
        };
    
        _proto.startTime = function startTime(value) {
          if (arguments.length) {
            this._start = value;
            var parent = this.parent || this._dp;
            parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
            return this;
          }
    
          return this._start;
        };
    
        _proto.endTime = function endTime(includeRepeats) {
          return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
        };
    
        _proto.rawTime = function rawTime(wrapRepeats) {
          var parent = this.parent || this._dp;
          return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
        };
    
        _proto.globalTime = function globalTime(rawTime) {
          var animation = this,
              time = arguments.length ? rawTime : animation.rawTime();
    
          while (animation) {
            time = animation._start + time / (animation._ts || 1);
            animation = animation._dp;
          }
    
          return time;
        };
    
        _proto.repeat = function repeat(value) {
          if (arguments.length) {
            this._repeat = value === Infinity ? -2 : value;
            return _onUpdateTotalDuration(this);
          }
    
          return this._repeat === -2 ? Infinity : this._repeat;
        };
    
        _proto.repeatDelay = function repeatDelay(value) {
          if (arguments.length) {
            var time = this._time;
            this._rDelay = value;
    
            _onUpdateTotalDuration(this);
    
            return time ? this.time(time) : this;
          }
    
          return this._rDelay;
        };
    
        _proto.yoyo = function yoyo(value) {
          if (arguments.length) {
            this._yoyo = value;
            return this;
          }
    
          return this._yoyo;
        };
    
        _proto.seek = function seek(position, suppressEvents) {
          return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
        };
    
        _proto.restart = function restart(includeDelay, suppressEvents) {
          return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
        };
    
        _proto.play = function play(from, suppressEvents) {
          from != null && this.seek(from, suppressEvents);
          return this.reversed(false).paused(false);
        };
    
        _proto.reverse = function reverse(from, suppressEvents) {
          from != null && this.seek(from || this.totalDuration(), suppressEvents);
          return this.reversed(true).paused(false);
        };
    
        _proto.pause = function pause(atTime, suppressEvents) {
          atTime != null && this.seek(atTime, suppressEvents);
          return this.paused(true);
        };
    
        _proto.resume = function resume() {
          return this.paused(false);
        };
    
        _proto.reversed = function reversed(value) {
          if (arguments.length) {
            !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
            return this;
          }
    
          return this._rts < 0;
        };
    
        _proto.invalidate = function invalidate() {
          this._initted = this._act = 0;
          this._zTime = -_tinyNum;
          return this;
        };
    
        _proto.isActive = function isActive() {
          var parent = this.parent || this._dp,
              start = this._start,
              rawTime;
          return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
        };
    
        _proto.eventCallback = function eventCallback(type, callback, params) {
          var vars = this.vars;
    
          if (arguments.length > 1) {
            if (!callback) {
              delete vars[type];
            } else {
              vars[type] = callback;
              params && (vars[type + "Params"] = params);
              type === "onUpdate" && (this._onUpdate = callback);
            }
    
            return this;
          }
    
          return vars[type];
        };
    
        _proto.then = function then(onFulfilled) {
          var self = this;
          return new Promise(function (resolve) {
            var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
                _resolve = function _resolve() {
              var _then = self.then;
              self.then = null;
              _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
              resolve(f);
              self.then = _then;
            };
    
            if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
              _resolve();
            } else {
              self._prom = _resolve;
            }
          });
        };
    
        _proto.kill = function kill() {
          _interrupt(this);
        };
    
        return Animation;
      }();
    
      _setDefaults(Animation.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: false,
        parent: null,
        _initted: false,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -_tinyNum,
        _prom: 0,
        _ps: false,
        _rts: 1
      });
    
      var Timeline = function (_Animation) {
        _inheritsLoose(Timeline, _Animation);
    
        function Timeline(vars, position) {
          var _this;
    
          if (vars === void 0) {
            vars = {};
          }
    
          _this = _Animation.call(this, vars) || this;
          _this.labels = {};
          _this.smoothChildTiming = !!vars.smoothChildTiming;
          _this.autoRemoveChildren = !!vars.autoRemoveChildren;
          _this._sort = _isNotFalse(vars.sortChildren);
          _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
          vars.reversed && _this.reverse();
          vars.paused && _this.paused(true);
          vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
          return _this;
        }
    
        var _proto2 = Timeline.prototype;
    
        _proto2.to = function to(targets, vars, position) {
          _createTweenType(0, arguments, this);
    
          return this;
        };
    
        _proto2.from = function from(targets, vars, position) {
          _createTweenType(1, arguments, this);
    
          return this;
        };
    
        _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
          _createTweenType(2, arguments, this);
    
          return this;
        };
    
        _proto2.set = function set(targets, vars, position) {
          vars.duration = 0;
          vars.parent = this;
          _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
          vars.immediateRender = !!vars.immediateRender;
          new Tween(targets, vars, _parsePosition(this, position), 1);
          return this;
        };
    
        _proto2.call = function call(callback, params, position) {
          return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
        };
    
        _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
          vars.duration = duration;
          vars.stagger = vars.stagger || stagger;
          vars.onComplete = onCompleteAll;
          vars.onCompleteParams = onCompleteAllParams;
          vars.parent = this;
          new Tween(targets, vars, _parsePosition(this, position));
          return this;
        };
    
        _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
          vars.runBackwards = 1;
          _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
          return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
        };
    
        _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
          toVars.startAt = fromVars;
          _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
          return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
        };
    
        _proto2.render = function render(totalTime, suppressEvents, force) {
          var prevTime = this._time,
              tDur = this._dirty ? this.totalDuration() : this._tDur,
              dur = this._dur,
              tTime = this !== _globalTimeline && totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime,
              crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
              time,
              child,
              next,
              iteration,
              cycleDuration,
              prevPaused,
              pauseTween,
              timeScale,
              prevStart,
              prevIteration,
              yoyo,
              isYoyo;
    
          if (tTime !== this._tTime || force || crossingStart) {
            if (prevTime !== this._time && dur) {
              tTime += this._time - prevTime;
              totalTime += this._time - prevTime;
            }
    
            time = tTime;
            prevStart = this._start;
            timeScale = this._ts;
            prevPaused = !timeScale;
    
            if (crossingStart) {
              dur || (prevTime = this._zTime);
              (totalTime || !suppressEvents) && (this._zTime = totalTime);
            }
    
            if (this._repeat) {
              yoyo = this._yoyo;
              cycleDuration = dur + this._rDelay;
    
              if (this._repeat < -1 && totalTime < 0) {
                return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
              }
    
              time = _round(tTime % cycleDuration);
    
              if (tTime === tDur) {
                iteration = this._repeat;
                time = dur;
              } else {
                iteration = ~~(tTime / cycleDuration);
    
                if (iteration && iteration === tTime / cycleDuration) {
                  time = dur;
                  iteration--;
                }
    
                time > dur && (time = dur);
              }
    
              prevIteration = _animationCycle(this._tTime, cycleDuration);
              !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration);
    
              if (yoyo && iteration & 1) {
                time = dur - time;
                isYoyo = 1;
              }
    
              if (iteration !== prevIteration && !this._lock) {
                var rewinding = yoyo && prevIteration & 1,
                    doesWrap = rewinding === (yoyo && iteration & 1);
                iteration < prevIteration && (rewinding = !rewinding);
                prevTime = rewinding ? 0 : dur;
                this._lock = 1;
                this.render(prevTime || (isYoyo ? 0 : _round(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
                this._tTime = tTime;
                !suppressEvents && this.parent && _callback(this, "onRepeat");
                this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
    
                if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
                  return this;
                }
    
                dur = this._dur;
                tDur = this._tDur;
    
                if (doesWrap) {
                  this._lock = 2;
                  prevTime = rewinding ? dur : -0.0001;
                  this.render(prevTime, true);
                  this.vars.repeatRefresh && !isYoyo && this.invalidate();
                }
    
                this._lock = 0;
    
                if (!this._ts && !prevPaused) {
                  return this;
                }
    
                _propagateYoyoEase(this, isYoyo);
              }
            }
    
            if (this._hasPause && !this._forcing && this._lock < 2) {
              pauseTween = _findNextPauseTween(this, _round(prevTime), _round(time));
    
              if (pauseTween) {
                tTime -= time - (time = pauseTween._start);
              }
            }
    
            this._tTime = tTime;
            this._time = time;
            this._act = !timeScale;
    
            if (!this._initted) {
              this._onUpdate = this.vars.onUpdate;
              this._initted = 1;
              this._zTime = totalTime;
              prevTime = 0;
            }
    
            if (!prevTime && time && !suppressEvents) {
              _callback(this, "onStart");
    
              if (this._tTime !== tTime) {
                return this;
              }
            }
    
            if (time >= prevTime && totalTime >= 0) {
              child = this._first;
    
              while (child) {
                next = child._next;
    
                if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
                  if (child.parent !== this) {
                    return this.render(totalTime, suppressEvents, force);
                  }
    
                  child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
    
                  if (time !== this._time || !this._ts && !prevPaused) {
                    pauseTween = 0;
                    next && (tTime += this._zTime = -_tinyNum);
                    break;
                  }
                }
    
                child = next;
              }
            } else {
              child = this._last;
              var adjustedTime = totalTime < 0 ? totalTime : time;
    
              while (child) {
                next = child._prev;
    
                if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                  if (child.parent !== this) {
                    return this.render(totalTime, suppressEvents, force);
                  }
    
                  child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);
    
                  if (time !== this._time || !this._ts && !prevPaused) {
                    pauseTween = 0;
                    next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                    break;
                  }
                }
    
                child = next;
              }
            }
    
            if (pauseTween && !suppressEvents) {
              this.pause();
              pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
    
              if (this._ts) {
                this._start = prevStart;
    
                _setEnd(this);
    
                return this.render(totalTime, suppressEvents, force);
              }
            }
    
            this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
            if (tTime === tDur && tDur >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
              (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
    
              if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
    
                this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
              }
            }
          }
    
          return this;
        };
    
        _proto2.add = function add(child, position) {
          var _this2 = this;
    
          _isNumber(position) || (position = _parsePosition(this, position, child));
    
          if (!(child instanceof Animation)) {
            if (_isArray(child)) {
              child.forEach(function (obj) {
                return _this2.add(obj, position);
              });
              return this;
            }
    
            if (_isString(child)) {
              return this.addLabel(child, position);
            }
    
            if (_isFunction(child)) {
              child = Tween.delayedCall(0, child);
            } else {
              return this;
            }
          }
    
          return this !== child ? _addToTimeline(this, child, position) : this;
        };
    
        _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
          if (nested === void 0) {
            nested = true;
          }
    
          if (tweens === void 0) {
            tweens = true;
          }
    
          if (timelines === void 0) {
            timelines = true;
          }
    
          if (ignoreBeforeTime === void 0) {
            ignoreBeforeTime = -_bigNum;
          }
    
          var a = [],
              child = this._first;
    
          while (child) {
            if (child._start >= ignoreBeforeTime) {
              if (child instanceof Tween) {
                tweens && a.push(child);
              } else {
                timelines && a.push(child);
                nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
              }
            }
    
            child = child._next;
          }
    
          return a;
        };
    
        _proto2.getById = function getById(id) {
          var animations = this.getChildren(1, 1, 1),
              i = animations.length;
    
          while (i--) {
            if (animations[i].vars.id === id) {
              return animations[i];
            }
          }
        };
    
        _proto2.remove = function remove(child) {
          if (_isString(child)) {
            return this.removeLabel(child);
          }
    
          if (_isFunction(child)) {
            return this.killTweensOf(child);
          }
    
          _removeLinkedListItem(this, child);
    
          if (child === this._recent) {
            this._recent = this._last;
          }
    
          return _uncache(this);
        };
    
        _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
          if (!arguments.length) {
            return this._tTime;
          }
    
          this._forcing = 1;
    
          if (!this._dp && this._ts) {
            this._start = _round(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
          }
    
          _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
    
          this._forcing = 0;
          return this;
        };
    
        _proto2.addLabel = function addLabel(label, position) {
          this.labels[label] = _parsePosition(this, position);
          return this;
        };
    
        _proto2.removeLabel = function removeLabel(label) {
          delete this.labels[label];
          return this;
        };
    
        _proto2.addPause = function addPause(position, callback, params) {
          var t = Tween.delayedCall(0, callback || _emptyFunc, params);
          t.data = "isPause";
          this._hasPause = 1;
          return _addToTimeline(this, t, _parsePosition(this, position));
        };
    
        _proto2.removePause = function removePause(position) {
          var child = this._first;
          position = _parsePosition(this, position);
    
          while (child) {
            if (child._start === position && child.data === "isPause") {
              _removeFromParent(child);
            }
    
            child = child._next;
          }
        };
    
        _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
          var tweens = this.getTweensOf(targets, onlyActive),
              i = tweens.length;
    
          while (i--) {
            _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
          }
    
          return this;
        };
    
        _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
          var a = [],
              parsedTargets = toArray(targets),
              child = this._first,
              isGlobalTime = _isNumber(onlyActive),
              children;
    
          while (child) {
            if (child instanceof Tween) {
              if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
                a.push(child);
              }
            } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
              a.push.apply(a, children);
            }
    
            child = child._next;
          }
    
          return a;
        };
    
        _proto2.tweenTo = function tweenTo(position, vars) {
          vars = vars || {};
    
          var tl = this,
              endTime = _parsePosition(tl, position),
              _vars = vars,
              startAt = _vars.startAt,
              _onStart = _vars.onStart,
              onStartParams = _vars.onStartParams,
              immediateRender = _vars.immediateRender,
              initted,
              tween = Tween.to(tl, _setDefaults({
            ease: vars.ease || "none",
            lazy: false,
            immediateRender: false,
            time: endTime,
            overwrite: "auto",
            duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
            onStart: function onStart() {
              tl.pause();
    
              if (!initted) {
                var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
                tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
                initted = 1;
              }
    
              _onStart && _onStart.apply(tween, onStartParams || []);
            }
          }, vars));
    
          return immediateRender ? tween.render(0) : tween;
        };
    
        _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
          return this.tweenTo(toPosition, _setDefaults({
            startAt: {
              time: _parsePosition(this, fromPosition)
            }
          }, vars));
        };
    
        _proto2.recent = function recent() {
          return this._recent;
        };
    
        _proto2.nextLabel = function nextLabel(afterTime) {
          if (afterTime === void 0) {
            afterTime = this._time;
          }
    
          return _getLabelInDirection(this, _parsePosition(this, afterTime));
        };
    
        _proto2.previousLabel = function previousLabel(beforeTime) {
          if (beforeTime === void 0) {
            beforeTime = this._time;
          }
    
          return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
        };
    
        _proto2.currentLabel = function currentLabel(value) {
          return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
        };
    
        _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
          if (ignoreBeforeTime === void 0) {
            ignoreBeforeTime = 0;
          }
    
          var child = this._first,
              labels = this.labels,
              p;
    
          while (child) {
            if (child._start >= ignoreBeforeTime) {
              child._start += amount;
              child._end += amount;
            }
    
            child = child._next;
          }
    
          if (adjustLabels) {
            for (p in labels) {
              if (labels[p] >= ignoreBeforeTime) {
                labels[p] += amount;
              }
            }
          }
    
          return _uncache(this);
        };
    
        _proto2.invalidate = function invalidate() {
          var child = this._first;
          this._lock = 0;
    
          while (child) {
            child.invalidate();
            child = child._next;
          }
    
          return _Animation.prototype.invalidate.call(this);
        };
    
        _proto2.clear = function clear(includeLabels) {
          if (includeLabels === void 0) {
            includeLabels = true;
          }
    
          var child = this._first,
              next;
    
          while (child) {
            next = child._next;
            this.remove(child);
            child = next;
          }
    
          this._dp && (this._time = this._tTime = this._pTime = 0);
          includeLabels && (this.labels = {});
          return _uncache(this);
        };
    
        _proto2.totalDuration = function totalDuration(value) {
          var max = 0,
              self = this,
              child = self._last,
              prevStart = _bigNum,
              prev,
              start,
              parent;
    
          if (arguments.length) {
            return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
          }
    
          if (self._dirty) {
            parent = self.parent;
    
            while (child) {
              prev = child._prev;
              child._dirty && child.totalDuration();
              start = child._start;
    
              if (start > prevStart && self._sort && child._ts && !self._lock) {
                self._lock = 1;
                _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
              } else {
                prevStart = start;
              }
    
              if (start < 0 && child._ts) {
                max -= start;
    
                if (!parent && !self._dp || parent && parent.smoothChildTiming) {
                  self._start += start / self._ts;
                  self._time -= start;
                  self._tTime -= start;
                }
    
                self.shiftChildren(-start, false, -1e999);
                prevStart = 0;
              }
    
              child._end > max && child._ts && (max = child._end);
              child = prev;
            }
    
            _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
    
            self._dirty = 0;
          }
    
          return self._tDur;
        };
    
        Timeline.updateRoot = function updateRoot(time) {
          if (_globalTimeline._ts) {
            _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
    
            _lastRenderedFrame = _ticker.frame;
          }
    
          if (_ticker.frame >= _nextGCFrame) {
            _nextGCFrame += _config.autoSleep || 120;
            var child = _globalTimeline._first;
            if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
              while (child && !child._ts) {
                child = child._next;
              }
    
              child || _ticker.sleep();
            }
          }
        };
    
        return Timeline;
      }(Animation);
    
      _setDefaults(Timeline.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
    
      var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
        var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
            index = 0,
            matchIndex = 0,
            result,
            startNums,
            color,
            endNum,
            chunk,
            startNum,
            hasRandom,
            a;
        pt.b = start;
        pt.e = end;
        start += "";
        end += "";
    
        if (hasRandom = ~end.indexOf("random(")) {
          end = _replaceRandom(end);
        }
    
        if (stringFilter) {
          a = [start, end];
          stringFilter(a, target, prop);
          start = a[0];
          end = a[1];
        }
    
        startNums = start.match(_complexStringNumExp) || [];
    
        while (result = _complexStringNumExp.exec(end)) {
          endNum = result[0];
          chunk = end.substring(index, result.index);
    
          if (color) {
            color = (color + 1) % 5;
          } else if (chunk.substr(-5) === "rgba(") {
            color = 1;
          }
    
          if (endNum !== startNums[matchIndex++]) {
            startNum = parseFloat(startNums[matchIndex - 1]) || 0;
            pt._pt = {
              _next: pt._pt,
              p: chunk || matchIndex === 1 ? chunk : ",",
              s: startNum,
              c: endNum.charAt(1) === "=" ? parseFloat(endNum.substr(2)) * (endNum.charAt(0) === "-" ? -1 : 1) : parseFloat(endNum) - startNum,
              m: color && color < 4 ? Math.round : 0
            };
            index = _complexStringNumExp.lastIndex;
          }
        }
    
        pt.c = index < end.length ? end.substring(index, end.length) : "";
        pt.fp = funcParam;
    
        if (_relExp.test(end) || hasRandom) {
          pt.e = 0;
        }
    
        this._pt = pt;
        return pt;
      },
          _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
        _isFunction(end) && (end = end(index || 0, target, targets));
        var currentValue = target[prop],
            parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
            setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
            pt;
    
        if (_isString(end)) {
          if (~end.indexOf("random(")) {
            end = _replaceRandom(end);
          }
    
          if (end.charAt(1) === "=") {
            pt = parseFloat(parsedStart) + parseFloat(end.substr(2)) * (end.charAt(0) === "-" ? -1 : 1) + (getUnit(parsedStart) || 0);
    
            if (pt || pt === 0) {
              end = pt;
            }
          }
        }
    
        if (parsedStart !== end) {
          if (!isNaN(parsedStart * end) && end !== "") {
            pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
            funcParam && (pt.fp = funcParam);
            modifier && pt.modifier(modifier, this, target);
            return this._pt = pt;
          }
    
          !currentValue && !(prop in target) && _missingPlugin(prop, end);
          return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
        }
      },
          _processVars = function _processVars(vars, index, target, targets, tween) {
        _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
    
        if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
          return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
        }
    
        var copy = {},
            p;
    
        for (p in vars) {
          copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
        }
    
        return copy;
      },
          _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
        var plugin, pt, ptLookup, i;
    
        if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
    
          if (tween !== _quickTween) {
            ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
            i = plugin._props.length;
    
            while (i--) {
              ptLookup[plugin._props[i]] = pt;
            }
          }
        }
    
        return plugin;
      },
          _overwritingTween,
          _initTween = function _initTween(tween, time) {
        var vars = tween.vars,
            ease = vars.ease,
            startAt = vars.startAt,
            immediateRender = vars.immediateRender,
            lazy = vars.lazy,
            onUpdate = vars.onUpdate,
            onUpdateParams = vars.onUpdateParams,
            callbackScope = vars.callbackScope,
            runBackwards = vars.runBackwards,
            yoyoEase = vars.yoyoEase,
            keyframes = vars.keyframes,
            autoRevert = vars.autoRevert,
            dur = tween._dur,
            prevStartAt = tween._startAt,
            targets = tween._targets,
            parent = tween.parent,
            fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets,
            autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
            tl = tween.timeline,
            cleanVars,
            i,
            p,
            pt,
            target,
            hasPriority,
            gsData,
            harness,
            plugin,
            ptLookup,
            index,
            harnessVars,
            overwritten;
        tl && (!keyframes || !ease) && (ease = "none");
        tween._ease = _parseEase(ease, _defaults.ease);
        tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
    
        if (yoyoEase && tween._yoyo && !tween._repeat) {
          yoyoEase = tween._yEase;
          tween._yEase = tween._ease;
          tween._ease = yoyoEase;
        }
    
        tween._from = !tl && !!vars.runBackwards;
    
        if (!tl) {
          harness = targets[0] ? _getCache(targets[0]).harness : 0;
          harnessVars = harness && vars[harness.prop];
          cleanVars = _copyExcluding(vars, _reservedProps);
          prevStartAt && prevStartAt.render(-1, true).kill();
    
          if (startAt) {
            _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
              data: "isStart",
              overwrite: false,
              parent: parent,
              immediateRender: true,
              lazy: _isNotFalse(lazy),
              startAt: null,
              delay: 0,
              onUpdate: onUpdate,
              onUpdateParams: onUpdateParams,
              callbackScope: callbackScope,
              stagger: 0
            }, startAt)));
    
            time < 0 && !immediateRender && !autoRevert && tween._startAt.render(-1, true);
    
            if (immediateRender) {
              time > 0 && !autoRevert && (tween._startAt = 0);
    
              if (dur && time <= 0) {
                time && (tween._zTime = time);
                return;
              }
            } else if (autoRevert === false) {
              tween._startAt = 0;
            }
          } else if (runBackwards && dur) {
            if (prevStartAt) {
              !autoRevert && (tween._startAt = 0);
            } else {
              time && (immediateRender = false);
              p = _setDefaults({
                overwrite: false,
                data: "isFromStart",
                lazy: immediateRender && _isNotFalse(lazy),
                immediateRender: immediateRender,
                stagger: 0,
                parent: parent
              }, cleanVars);
              harnessVars && (p[harness.prop] = harnessVars);
    
              _removeFromParent(tween._startAt = Tween.set(targets, p));
    
              time < 0 && tween._startAt.render(-1, true);
    
              if (!immediateRender) {
                _initTween(tween._startAt, _tinyNum);
              } else if (!time) {
                return;
              }
            }
          }
    
          tween._pt = 0;
          lazy = dur && _isNotFalse(lazy) || lazy && !dur;
    
          for (i = 0; i < targets.length; i++) {
            target = targets[i];
            gsData = target._gsap || _harness(targets)[i]._gsap;
            tween._ptLookup[i] = ptLookup = {};
            _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
            index = fullTargets === targets ? i : fullTargets.indexOf(target);
    
            if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
              tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
    
              plugin._props.forEach(function (name) {
                ptLookup[name] = pt;
              });
    
              plugin.priority && (hasPriority = 1);
            }
    
            if (!harness || harnessVars) {
              for (p in cleanVars) {
                if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
                  plugin.priority && (hasPriority = 1);
                } else {
                  ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
                }
              }
            }
    
            tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
    
            if (autoOverwrite && tween._pt) {
              _overwritingTween = tween;
    
              _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(0));
    
              overwritten = !tween.parent;
              _overwritingTween = 0;
            }
    
            tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
          }
    
          hasPriority && _sortPropTweensByPriority(tween);
          tween._onInit && tween._onInit(tween);
        }
    
        tween._onUpdate = onUpdate;
        tween._initted = (!tween._op || tween._pt) && !overwritten;
      },
          _addAliasesToVars = function _addAliasesToVars(targets, vars) {
        var harness = targets[0] ? _getCache(targets[0]).harness : 0,
            propertyAliases = harness && harness.aliases,
            copy,
            p,
            i,
            aliases;
    
        if (!propertyAliases) {
          return vars;
        }
    
        copy = _merge({}, vars);
    
        for (p in propertyAliases) {
          if (p in copy) {
            aliases = propertyAliases[p].split(",");
            i = aliases.length;
    
            while (i--) {
              copy[aliases[i]] = copy[p];
            }
          }
        }
    
        return copy;
      },
          _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
        return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
      },
          _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
          _staggerPropsToSkip = (_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger").split(",");
    
      var Tween = function (_Animation2) {
        _inheritsLoose(Tween, _Animation2);
    
        function Tween(targets, vars, position, skipInherit) {
          var _this3;
    
          if (typeof vars === "number") {
            position.duration = vars;
            vars = position;
            position = null;
          }
    
          _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
          var _this3$vars = _this3.vars,
              duration = _this3$vars.duration,
              delay = _this3$vars.delay,
              immediateRender = _this3$vars.immediateRender,
              stagger = _this3$vars.stagger,
              overwrite = _this3$vars.overwrite,
              keyframes = _this3$vars.keyframes,
              defaults = _this3$vars.defaults,
              scrollTrigger = _this3$vars.scrollTrigger,
              yoyoEase = _this3$vars.yoyoEase,
              parent = vars.parent || _globalTimeline,
              parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
              tl,
              i,
              copy,
              l,
              p,
              curTarget,
              staggerFunc,
              staggerVarsToMerge;
          _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
          _this3._ptLookup = [];
          _this3._overwrite = overwrite;
    
          if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
            vars = _this3.vars;
            tl = _this3.timeline = new Timeline({
              data: "nested",
              defaults: defaults || {}
            });
            tl.kill();
            tl.parent = tl._dp = _assertThisInitialized(_this3);
            tl._start = 0;
    
            if (keyframes) {
              _setDefaults(tl.vars.defaults, {
                ease: "none"
              });
    
              stagger ? parsedTargets.forEach(function (t, i) {
                return keyframes.forEach(function (frame, j) {
                  return tl.to(t, frame, j ? ">" : i * stagger);
                });
              }) : keyframes.forEach(function (frame) {
                return tl.to(parsedTargets, frame, ">");
              });
            } else {
              l = parsedTargets.length;
              staggerFunc = stagger ? distribute(stagger) : _emptyFunc;
    
              if (_isObject(stagger)) {
                for (p in stagger) {
                  if (~_staggerTweenProps.indexOf(p)) {
                    staggerVarsToMerge || (staggerVarsToMerge = {});
                    staggerVarsToMerge[p] = stagger[p];
                  }
                }
              }
    
              for (i = 0; i < l; i++) {
                copy = {};
    
                for (p in vars) {
                  if (_staggerPropsToSkip.indexOf(p) < 0) {
                    copy[p] = vars[p];
                  }
                }
    
                copy.stagger = 0;
                yoyoEase && (copy.yoyoEase = yoyoEase);
                staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
                curTarget = parsedTargets[i];
                copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
                copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
    
                if (!stagger && l === 1 && copy.delay) {
                  _this3._delay = delay = copy.delay;
                  _this3._start += delay;
                  copy.delay = 0;
                }
    
                tl.to(curTarget, copy, staggerFunc(i, curTarget, parsedTargets));
              }
    
              tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
            }
    
            duration || _this3.duration(duration = tl.duration());
          } else {
            _this3.timeline = 0;
          }
    
          if (overwrite === true && !_suppressOverwrites) {
            _overwritingTween = _assertThisInitialized(_this3);
    
            _globalTimeline.killTweensOf(parsedTargets);
    
            _overwritingTween = 0;
          }
    
          _addToTimeline(parent, _assertThisInitialized(_this3), position);
    
          vars.reversed && _this3.reverse();
          vars.paused && _this3.paused(true);
    
          if (immediateRender || !duration && !keyframes && _this3._start === _round(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
            _this3._tTime = -_tinyNum;
    
            _this3.render(Math.max(0, -delay));
          }
    
          scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
          return _this3;
        }
    
        var _proto3 = Tween.prototype;
    
        _proto3.render = function render(totalTime, suppressEvents, force) {
          var prevTime = this._time,
              tDur = this._tDur,
              dur = this._dur,
              tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime,
              time,
              pt,
              iteration,
              cycleDuration,
              prevIteration,
              isYoyo,
              ratio,
              timeline,
              yoyoEase;
    
          if (!dur) {
            _renderZeroDurationTween(this, totalTime, suppressEvents, force);
          } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== totalTime < 0) {
            time = tTime;
            timeline = this.timeline;
    
            if (this._repeat) {
              cycleDuration = dur + this._rDelay;
    
              if (this._repeat < -1 && totalTime < 0) {
                return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
              }
    
              time = _round(tTime % cycleDuration);
    
              if (tTime === tDur) {
                iteration = this._repeat;
                time = dur;
              } else {
                iteration = ~~(tTime / cycleDuration);
    
                if (iteration && iteration === tTime / cycleDuration) {
                  time = dur;
                  iteration--;
                }
    
                time > dur && (time = dur);
              }
    
              isYoyo = this._yoyo && iteration & 1;
    
              if (isYoyo) {
                yoyoEase = this._yEase;
                time = dur - time;
              }
    
              prevIteration = _animationCycle(this._tTime, cycleDuration);
    
              if (time === prevTime && !force && this._initted) {
                return this;
              }
    
              if (iteration !== prevIteration) {
                timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo);
    
                if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
                  this._lock = force = 1;
                  this.render(_round(cycleDuration * iteration), true).invalidate()._lock = 0;
                }
              }
            }
    
            if (!this._initted) {
              if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
                this._tTime = 0;
                return this;
              }
    
              if (dur !== this._dur) {
                return this.render(totalTime, suppressEvents, force);
              }
            }
    
            this._tTime = tTime;
            this._time = time;
    
            if (!this._act && this._ts) {
              this._act = 1;
              this._lazy = 0;
            }
    
            this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
    
            if (this._from) {
              this.ratio = ratio = 1 - ratio;
            }
    
            if (time && !prevTime && !suppressEvents) {
              _callback(this, "onStart");
    
              if (this._tTime !== tTime) {
                return this;
              }
            }
    
            pt = this._pt;
    
            while (pt) {
              pt.r(ratio, pt.d);
              pt = pt._next;
            }
    
            timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * ratio, suppressEvents, force) || this._startAt && (this._zTime = totalTime);
    
            if (this._onUpdate && !suppressEvents) {
              totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force);
    
              _callback(this, "onUpdate");
            }
    
            this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
    
            if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
              totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
              (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
    
              if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
                _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
    
                this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
              }
            }
          }
    
          return this;
        };
    
        _proto3.targets = function targets() {
          return this._targets;
        };
    
        _proto3.invalidate = function invalidate() {
          this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0;
          this._ptLookup = [];
          this.timeline && this.timeline.invalidate();
          return _Animation2.prototype.invalidate.call(this);
        };
    
        _proto3.kill = function kill(targets, vars) {
          if (vars === void 0) {
            vars = "all";
          }
    
          if (!targets && (!vars || vars === "all")) {
            this._lazy = this._pt = 0;
            return this.parent ? _interrupt(this) : this;
          }
    
          if (this.timeline) {
            var tDur = this.timeline.totalDuration();
            this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
            this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
            return this;
          }
    
          var parsedTargets = this._targets,
              killingTargets = targets ? toArray(targets) : parsedTargets,
              propTweenLookup = this._ptLookup,
              firstPT = this._pt,
              overwrittenProps,
              curLookup,
              curOverwriteProps,
              props,
              p,
              pt,
              i;
    
          if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
            vars === "all" && (this._pt = 0);
            return _interrupt(this);
          }
    
          overwrittenProps = this._op = this._op || [];
    
          if (vars !== "all") {
            if (_isString(vars)) {
              p = {};
    
              _forEachName(vars, function (name) {
                return p[name] = 1;
              });
    
              vars = p;
            }
    
            vars = _addAliasesToVars(parsedTargets, vars);
          }
    
          i = parsedTargets.length;
    
          while (i--) {
            if (~killingTargets.indexOf(parsedTargets[i])) {
              curLookup = propTweenLookup[i];
    
              if (vars === "all") {
                overwrittenProps[i] = vars;
                props = curLookup;
                curOverwriteProps = {};
              } else {
                curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
                props = vars;
              }
    
              for (p in props) {
                pt = curLookup && curLookup[p];
    
                if (pt) {
                  if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                    _removeLinkedListItem(this, pt, "_pt");
                  }
    
                  delete curLookup[p];
                }
    
                if (curOverwriteProps !== "all") {
                  curOverwriteProps[p] = 1;
                }
              }
            }
          }
    
          this._initted && !this._pt && firstPT && _interrupt(this);
          return this;
        };
    
        Tween.to = function to(targets, vars) {
          return new Tween(targets, vars, arguments[2]);
        };
    
        Tween.from = function from(targets, vars) {
          return _createTweenType(1, arguments);
        };
    
        Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
          return new Tween(callback, 0, {
            immediateRender: false,
            lazy: false,
            overwrite: false,
            delay: delay,
            onComplete: callback,
            onReverseComplete: callback,
            onCompleteParams: params,
            onReverseCompleteParams: params,
            callbackScope: scope
          });
        };
    
        Tween.fromTo = function fromTo(targets, fromVars, toVars) {
          return _createTweenType(2, arguments);
        };
    
        Tween.set = function set(targets, vars) {
          vars.duration = 0;
          vars.repeatDelay || (vars.repeat = 0);
          return new Tween(targets, vars);
        };
    
        Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
          return _globalTimeline.killTweensOf(targets, props, onlyActive);
        };
    
        return Tween;
      }(Animation);
    
      _setDefaults(Tween.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
      });
    
      _forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
        Tween[name] = function () {
          var tl = new Timeline(),
              params = _slice.call(arguments, 0);
    
          params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
          return tl[name].apply(tl, params);
        };
      });
    
      var _setterPlain = function _setterPlain(target, property, value) {
        return target[property] = value;
      },
          _setterFunc = function _setterFunc(target, property, value) {
        return target[property](value);
      },
          _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
        return target[property](data.fp, value);
      },
          _setterAttribute = function _setterAttribute(target, property, value) {
        return target.setAttribute(property, value);
      },
          _getSetter = function _getSetter(target, property) {
        return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
      },
          _renderPlain = function _renderPlain(ratio, data) {
        return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
      },
          _renderBoolean = function _renderBoolean(ratio, data) {
        return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
      },
          _renderComplexString = function _renderComplexString(ratio, data) {
        var pt = data._pt,
            s = "";
    
        if (!ratio && data.b) {
          s = data.b;
        } else if (ratio === 1 && data.e) {
          s = data.e;
        } else {
          while (pt) {
            s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s;
            pt = pt._next;
          }
    
          s += data.c;
        }
    
        data.set(data.t, data.p, s, data);
      },
          _renderPropTweens = function _renderPropTweens(ratio, data) {
        var pt = data._pt;
    
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
      },
          _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
        var pt = this._pt,
            next;
    
        while (pt) {
          next = pt._next;
          pt.p === property && pt.modifier(modifier, tween, target);
          pt = next;
        }
      },
          _killPropTweensOf = function _killPropTweensOf(property) {
        var pt = this._pt,
            hasNonDependentRemaining,
            next;
    
        while (pt) {
          next = pt._next;
    
          if (pt.p === property && !pt.op || pt.op === property) {
            _removeLinkedListItem(this, pt, "_pt");
          } else if (!pt.dep) {
            hasNonDependentRemaining = 1;
          }
    
          pt = next;
        }
    
        return !hasNonDependentRemaining;
      },
          _setterWithModifier = function _setterWithModifier(target, property, value, data) {
        data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
      },
          _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
        var pt = parent._pt,
            next,
            pt2,
            first,
            last;
    
        while (pt) {
          next = pt._next;
          pt2 = first;
    
          while (pt2 && pt2.pr > pt.pr) {
            pt2 = pt2._next;
          }
    
          if (pt._prev = pt2 ? pt2._prev : last) {
            pt._prev._next = pt;
          } else {
            first = pt;
          }
    
          if (pt._next = pt2) {
            pt2._prev = pt;
          } else {
            last = pt;
          }
    
          pt = next;
        }
    
        parent._pt = first;
      };
    
      var PropTween = function () {
        function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
          this.t = target;
          this.s = start;
          this.c = change;
          this.p = prop;
          this.r = renderer || _renderPlain;
          this.d = data || this;
          this.set = setter || _setterPlain;
          this.pr = priority || 0;
          this._next = next;
    
          if (next) {
            next._prev = this;
          }
        }
    
        var _proto4 = PropTween.prototype;
    
        _proto4.modifier = function modifier(func, tween, target) {
          this.mSet = this.mSet || this.set;
          this.set = _setterWithModifier;
          this.m = func;
          this.mt = target;
          this.tween = tween;
        };
    
        return PropTween;
      }();
    
      _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
        return _reservedProps[name] = 1;
      });
    
      _globals.TweenMax = _globals.TweenLite = Tween;
      _globals.TimelineLite = _globals.TimelineMax = Timeline;
      _globalTimeline = new Timeline({
        sortChildren: false,
        defaults: _defaults,
        autoRemoveChildren: true,
        id: "root",
        smoothChildTiming: true
      });
      _config.stringFilter = _colorStringFilter;
      var _gsap = {
        registerPlugin: function registerPlugin() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
    
          args.forEach(function (config) {
            return _createPlugin(config);
          });
        },
        timeline: function timeline(vars) {
          return new Timeline(vars);
        },
        getTweensOf: function getTweensOf(targets, onlyActive) {
          return _globalTimeline.getTweensOf(targets, onlyActive);
        },
        getProperty: function getProperty(target, property, unit, uncache) {
          _isString(target) && (target = toArray(target)[0]);
    
          var getter = _getCache(target || {}).get,
              format = unit ? _passThrough : _numericIfPossible;
    
          unit === "native" && (unit = "");
          return !target ? target : !property ? function (property, unit, uncache) {
            return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
          } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
        },
        quickSetter: function quickSetter(target, property, unit) {
          target = toArray(target);
    
          if (target.length > 1) {
            var setters = target.map(function (t) {
              return gsap.quickSetter(t, property, unit);
            }),
                l = setters.length;
            return function (value) {
              var i = l;
    
              while (i--) {
                setters[i](value);
              }
            };
          }
    
          target = target[0] || {};
    
          var Plugin = _plugins[property],
              cache = _getCache(target),
              p = cache.harness && (cache.harness.aliases || {})[property] || property,
              setter = Plugin ? function (value) {
            var p = new Plugin();
            _quickTween._pt = 0;
            p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
            p.render(1, p);
            _quickTween._pt && _renderPropTweens(1, _quickTween);
          } : cache.set(target, p);
    
          return Plugin ? setter : function (value) {
            return setter(target, p, unit ? value + unit : value, cache, 1);
          };
        },
        isTweening: function isTweening(targets) {
          return _globalTimeline.getTweensOf(targets, true).length > 0;
        },
        defaults: function defaults(value) {
          value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
          return _mergeDeep(_defaults, value || {});
        },
        config: function config(value) {
          return _mergeDeep(_config, value || {});
        },
        registerEffect: function registerEffect(_ref3) {
          var name = _ref3.name,
              effect = _ref3.effect,
              plugins = _ref3.plugins,
              defaults = _ref3.defaults,
              extendTimeline = _ref3.extendTimeline;
          (plugins || "").split(",").forEach(function (pluginName) {
            return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
          });
    
          _effects[name] = function (targets, vars, tl) {
            return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
          };
    
          if (extendTimeline) {
            Timeline.prototype[name] = function (targets, vars, position) {
              return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
            };
          }
        },
        registerEase: function registerEase(name, ease) {
          _easeMap[name] = _parseEase(ease);
        },
        parseEase: function parseEase(ease, defaultEase) {
          return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
        },
        getById: function getById(id) {
          return _globalTimeline.getById(id);
        },
        exportRoot: function exportRoot(vars, includeDelayedCalls) {
          if (vars === void 0) {
            vars = {};
          }
    
          var tl = new Timeline(vars),
              child,
              next;
          tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
    
          _globalTimeline.remove(tl);
    
          tl._dp = 0;
          tl._time = tl._tTime = _globalTimeline._time;
          child = _globalTimeline._first;
    
          while (child) {
            next = child._next;
    
            if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
              _addToTimeline(tl, child, child._start - child._delay);
            }
    
            child = next;
          }
    
          _addToTimeline(_globalTimeline, tl, 0);
    
          return tl;
        },
        utils: {
          wrap: wrap,
          wrapYoyo: wrapYoyo,
          distribute: distribute,
          random: random,
          snap: snap,
          normalize: normalize,
          getUnit: getUnit,
          clamp: clamp,
          splitColor: splitColor,
          toArray: toArray,
          selector: selector,
          mapRange: mapRange,
          pipe: pipe,
          unitize: unitize,
          interpolate: interpolate,
          shuffle: shuffle
        },
        install: _install,
        effects: _effects,
        ticker: _ticker,
        updateRoot: Timeline.updateRoot,
        plugins: _plugins,
        globalTimeline: _globalTimeline,
        core: {
          PropTween: PropTween,
          globals: _addGlobal,
          Tween: Tween,
          Timeline: Timeline,
          Animation: Animation,
          getCache: _getCache,
          _removeLinkedListItem: _removeLinkedListItem,
          suppressOverwrites: function suppressOverwrites(value) {
            return _suppressOverwrites = value;
          }
        }
      };
    
      _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
        return _gsap[name] = Tween[name];
      });
    
      _ticker.add(Timeline.updateRoot);
    
      _quickTween = _gsap.to({}, {
        duration: 0
      });
    
      var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
        var pt = plugin._pt;
    
        while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
          pt = pt._next;
        }
    
        return pt;
      },
          _addModifiers = function _addModifiers(tween, modifiers) {
        var targets = tween._targets,
            p,
            i,
            pt;
    
        for (p in modifiers) {
          i = targets.length;
    
          while (i--) {
            pt = tween._ptLookup[i][p];
    
            if (pt && (pt = pt.d)) {
              if (pt._pt) {
                pt = _getPluginPropTween(pt, p);
              }
    
              pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
            }
          }
        }
      },
          _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
        return {
          name: name,
          rawVars: 1,
          init: function init(target, vars, tween) {
            tween._onInit = function (tween) {
              var temp, p;
    
              if (_isString(vars)) {
                temp = {};
    
                _forEachName(vars, function (name) {
                  return temp[name] = 1;
                });
    
                vars = temp;
              }
    
              if (modifier) {
                temp = {};
    
                for (p in vars) {
                  temp[p] = modifier(vars[p]);
                }
    
                vars = temp;
              }
    
              _addModifiers(tween, vars);
            };
          }
        };
      };
    
      var gsap = _gsap.registerPlugin({
        name: "attr",
        init: function init(target, vars, tween, index, targets) {
          var p, pt;
    
          for (p in vars) {
            pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
            pt && (pt.op = p);
    
            this._props.push(p);
          }
        }
      }, {
        name: "endArray",
        init: function init(target, value) {
          var i = value.length;
    
          while (i--) {
            this.add(target, i, target[i] || 0, value[i]);
          }
        }
      }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
      Tween.version = Timeline.version = gsap.version = "3.7.1";
      _coreReady = 1;
      _windowExists() && _wake();
      var Power0 = _easeMap.Power0,
          Power1 = _easeMap.Power1,
          Power2 = _easeMap.Power2,
          Power3 = _easeMap.Power3,
          Power4 = _easeMap.Power4,
          Linear = _easeMap.Linear,
          Quad = _easeMap.Quad,
          Cubic = _easeMap.Cubic,
          Quart = _easeMap.Quart,
          Quint = _easeMap.Quint,
          Strong = _easeMap.Strong,
          Elastic = _easeMap.Elastic,
          Back = _easeMap.Back,
          SteppedEase = _easeMap.SteppedEase,
          Bounce = _easeMap.Bounce,
          Sine = _easeMap.Sine,
          Expo = _easeMap.Expo,
          Circ = _easeMap.Circ;
    
      var _win$1,
          _doc$1,
          _docElement,
          _pluginInitted,
          _tempDiv,
          _tempDivStyler,
          _recentSetterPlugin,
          _windowExists$1 = function _windowExists() {
        return typeof window !== "undefined";
      },
          _transformProps = {},
          _RAD2DEG = 180 / Math.PI,
          _DEG2RAD = Math.PI / 180,
          _atan2 = Math.atan2,
          _bigNum$1 = 1e8,
          _capsExp = /([A-Z])/g,
          _horizontalExp = /(?:left|right|width|margin|padding|x)/i,
          _complexExp = /[\s,\(]\S/,
          _propertyAliases = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
      },
          _renderCSSProp = function _renderCSSProp(ratio, data) {
        return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
      },
          _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
        return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
      },
          _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
        return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
      },
          _renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
        var value = data.s + data.c * ratio;
        data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
      },
          _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
        return data.set(data.t, data.p, ratio ? data.e : data.b, data);
      },
          _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
        return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
      },
          _setterCSSStyle = function _setterCSSStyle(target, property, value) {
        return target.style[property] = value;
      },
          _setterCSSProp = function _setterCSSProp(target, property, value) {
        return target.style.setProperty(property, value);
      },
          _setterTransform = function _setterTransform(target, property, value) {
        return target._gsap[property] = value;
      },
          _setterScale = function _setterScale(target, property, value) {
        return target._gsap.scaleX = target._gsap.scaleY = value;
      },
          _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
        var cache = target._gsap;
        cache.scaleX = cache.scaleY = value;
        cache.renderTransform(ratio, cache);
      },
          _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
        var cache = target._gsap;
        cache[property] = value;
        cache.renderTransform(ratio, cache);
      },
          _transformProp = "transform",
          _transformOriginProp = _transformProp + "Origin",
          _supports3D,
          _createElement = function _createElement(type, ns) {
        var e = _doc$1.createElementNS ? _doc$1.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$1.createElement(type);
        return e.style ? e : _doc$1.createElement(type);
      },
          _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
        var cs = getComputedStyle(target);
        return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || "";
      },
          _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
          _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
        var e = element || _tempDiv,
            s = e.style,
            i = 5;
    
        if (property in s && !preferPrefix) {
          return property;
        }
    
        property = property.charAt(0).toUpperCase() + property.substr(1);
    
        while (i-- && !(_prefixes[i] + property in s)) {}
    
        return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
      },
          _initCore = function _initCore() {
        if (_windowExists$1() && window.document) {
          _win$1 = window;
          _doc$1 = _win$1.document;
          _docElement = _doc$1.documentElement;
          _tempDiv = _createElement("div") || {
            style: {}
          };
          _tempDivStyler = _createElement("div");
          _transformProp = _checkPropPrefix(_transformProp);
          _transformOriginProp = _transformProp + "Origin";
          _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
          _supports3D = !!_checkPropPrefix("perspective");
          _pluginInitted = 1;
        }
      },
          _getBBoxHack = function _getBBoxHack(swapIfPossible) {
        var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            oldParent = this.parentNode,
            oldSibling = this.nextSibling,
            oldCSS = this.style.cssText,
            bbox;
    
        _docElement.appendChild(svg);
    
        svg.appendChild(this);
        this.style.display = "block";
    
        if (swapIfPossible) {
          try {
            bbox = this.getBBox();
            this._gsapBBox = this.getBBox;
            this.getBBox = _getBBoxHack;
          } catch (e) {}
        } else if (this._gsapBBox) {
          bbox = this._gsapBBox();
        }
    
        if (oldParent) {
          if (oldSibling) {
            oldParent.insertBefore(this, oldSibling);
          } else {
            oldParent.appendChild(this);
          }
        }
    
        _docElement.removeChild(svg);
    
        this.style.cssText = oldCSS;
        return bbox;
      },
          _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
        var i = attributesArray.length;
    
        while (i--) {
          if (target.hasAttribute(attributesArray[i])) {
            return target.getAttribute(attributesArray[i]);
          }
        }
      },
          _getBBox = function _getBBox(target) {
        var bounds;
    
        try {
          bounds = target.getBBox();
        } catch (error) {
          bounds = _getBBoxHack.call(target, true);
        }
    
        bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
        return bounds && !bounds.width && !bounds.x && !bounds.y ? {
          x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
          y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
          width: 0,
          height: 0
        } : bounds;
      },
          _isSVG = function _isSVG(e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
      },
          _removeProperty = function _removeProperty(target, property) {
        if (property) {
          var style = target.style;
    
          if (property in _transformProps && property !== _transformOriginProp) {
            property = _transformProp;
          }
    
          if (style.removeProperty) {
            if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
              property = "-" + property;
            }
    
            style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
          } else {
            style.removeAttribute(property);
          }
        }
      },
          _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
        var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
        plugin._pt = pt;
        pt.b = beginning;
        pt.e = end;
    
        plugin._props.push(property);
    
        return pt;
      },
          _nonConvertibleUnits = {
        deg: 1,
        rad: 1,
        turn: 1
      },
          _convertToUnit = function _convertToUnit(target, property, value, unit) {
        var curValue = parseFloat(value) || 0,
            curUnit = (value + "").trim().substr((curValue + "").length) || "px",
            style = _tempDiv.style,
            horizontal = _horizontalExp.test(property),
            isRootSVG = target.tagName.toLowerCase() === "svg",
            measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
            amount = 100,
            toPixels = unit === "px",
            toPercent = unit === "%",
            px,
            parent,
            cache,
            isSVG;
    
        if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
          return curValue;
        }
    
        curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
        isSVG = target.getCTM && _isSVG(target);
    
        if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
          px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
          return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
        }
    
        style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
        parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    
        if (isSVG) {
          parent = (target.ownerSVGElement || {}).parentNode;
        }
    
        if (!parent || parent === _doc$1 || !parent.appendChild) {
          parent = _doc$1.body;
        }
    
        cache = parent._gsap;
    
        if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time) {
          return _round(curValue / cache.width * amount);
        } else {
          (toPercent || curUnit === "%") && (style.position = _getComputedProperty(target, "position"));
          parent === target && (style.position = "static");
          parent.appendChild(_tempDiv);
          px = _tempDiv[measureProperty];
          parent.removeChild(_tempDiv);
          style.position = "absolute";
    
          if (horizontal && toPercent) {
            cache = _getCache(parent);
            cache.time = _ticker.time;
            cache.width = parent[measureProperty];
          }
        }
    
        return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
      },
          _get = function _get(target, property, unit, uncache) {
        var value;
        _pluginInitted || _initCore();
    
        if (property in _propertyAliases && property !== "transform") {
          property = _propertyAliases[property];
    
          if (~property.indexOf(",")) {
            property = property.split(",")[0];
          }
        }
    
        if (_transformProps[property] && property !== "transform") {
          value = _parseTransform(target, uncache);
          value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
        } else {
          value = target.style[property];
    
          if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
            value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
          }
        }
    
        return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
      },
          _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
        if (!start || start === "none") {
          var p = _checkPropPrefix(prop, target, 1),
              s = p && _getComputedProperty(target, p, 1);
    
          if (s && s !== start) {
            prop = p;
            start = s;
          } else if (prop === "borderColor") {
            start = _getComputedProperty(target, "borderTopColor");
          }
        }
    
        var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString),
            index = 0,
            matchIndex = 0,
            a,
            result,
            startValues,
            startNum,
            color,
            startValue,
            endValue,
            endNum,
            chunk,
            endUnit,
            startUnit,
            relative,
            endValues;
        pt.b = start;
        pt.e = end;
        start += "";
        end += "";
    
        if (end === "auto") {
          target.style[prop] = end;
          end = _getComputedProperty(target, prop) || end;
          target.style[prop] = start;
        }
    
        a = [start, end];
    
        _colorStringFilter(a);
    
        start = a[0];
        end = a[1];
        startValues = start.match(_numWithUnitExp) || [];
        endValues = end.match(_numWithUnitExp) || [];
    
        if (endValues.length) {
          while (result = _numWithUnitExp.exec(end)) {
            endValue = result[0];
            chunk = end.substring(index, result.index);
    
            if (color) {
              color = (color + 1) % 5;
            } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
              color = 1;
            }
    
            if (endValue !== (startValue = startValues[matchIndex++] || "")) {
              startNum = parseFloat(startValue) || 0;
              startUnit = startValue.substr((startNum + "").length);
              relative = endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
    
              if (relative) {
                endValue = endValue.substr(2);
              }
    
              endNum = parseFloat(endValue);
              endUnit = endValue.substr((endNum + "").length);
              index = _numWithUnitExp.lastIndex - endUnit.length;
    
              if (!endUnit) {
                endUnit = endUnit || _config.units[prop] || startUnit;
    
                if (index === end.length) {
                  end += endUnit;
                  pt.e += endUnit;
                }
              }
    
              if (startUnit !== endUnit) {
                startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
              }
    
              pt._pt = {
                _next: pt._pt,
                p: chunk || matchIndex === 1 ? chunk : ",",
                s: startNum,
                c: relative ? relative * endNum : endNum - startNum,
                m: color && color < 4 || prop === "zIndex" ? Math.round : 0
              };
            }
          }
    
          pt.c = index < end.length ? end.substring(index, end.length) : "";
        } else {
          pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
        }
    
        _relExp.test(end) && (pt.e = 0);
        this._pt = pt;
        return pt;
      },
          _keywordToPercent = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
      },
          _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
        var split = value.split(" "),
            x = split[0],
            y = split[1] || "50%";
    
        if (x === "top" || x === "bottom" || y === "left" || y === "right") {
          value = x;
          x = y;
          y = value;
        }
    
        split[0] = _keywordToPercent[x] || x;
        split[1] = _keywordToPercent[y] || y;
        return split.join(" ");
      },
          _renderClearProps = function _renderClearProps(ratio, data) {
        if (data.tween && data.tween._time === data.tween._dur) {
          var target = data.t,
              style = target.style,
              props = data.u,
              cache = target._gsap,
              prop,
              clearTransforms,
              i;
    
          if (props === "all" || props === true) {
            style.cssText = "";
            clearTransforms = 1;
          } else {
            props = props.split(",");
            i = props.length;
    
            while (--i > -1) {
              prop = props[i];
    
              if (_transformProps[prop]) {
                clearTransforms = 1;
                prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
              }
    
              _removeProperty(target, prop);
            }
          }
    
          if (clearTransforms) {
            _removeProperty(target, _transformProp);
    
            if (cache) {
              cache.svg && target.removeAttribute("transform");
    
              _parseTransform(target, 1);
    
              cache.uncache = 1;
            }
          }
        }
      },
          _specialProps = {
        clearProps: function clearProps(plugin, target, property, endValue, tween) {
          if (tween.data !== "isFromStart") {
            var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
            pt.u = endValue;
            pt.pr = -10;
            pt.tween = tween;
    
            plugin._props.push(property);
    
            return 1;
          }
        }
      },
          _identity2DMatrix = [1, 0, 0, 1, 0, 0],
          _rotationalProperties = {},
          _isNullTransform = function _isNullTransform(value) {
        return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
      },
          _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
        var matrixString = _getComputedProperty(target, _transformProp);
    
        return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
      },
          _getMatrix = function _getMatrix(target, force2D) {
        var cache = target._gsap || _getCache(target),
            style = target.style,
            matrix = _getComputedTransformMatrixAsArray(target),
            parent,
            nextSibling,
            temp,
            addedToDOM;
    
        if (cache.svg && target.getAttribute("transform")) {
          temp = target.transform.baseVal.consolidate().matrix;
          matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
          return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
        } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
          temp = style.display;
          style.display = "block";
          parent = target.parentNode;
    
          if (!parent || !target.offsetParent) {
            addedToDOM = 1;
            nextSibling = target.nextSibling;
    
            _docElement.appendChild(target);
          }
    
          matrix = _getComputedTransformMatrixAsArray(target);
          temp ? style.display = temp : _removeProperty(target, "display");
    
          if (addedToDOM) {
            nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
          }
        }
    
        return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
      },
          _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
        var cache = target._gsap,
            matrix = matrixArray || _getMatrix(target, true),
            xOriginOld = cache.xOrigin || 0,
            yOriginOld = cache.yOrigin || 0,
            xOffsetOld = cache.xOffset || 0,
            yOffsetOld = cache.yOffset || 0,
            a = matrix[0],
            b = matrix[1],
            c = matrix[2],
            d = matrix[3],
            tx = matrix[4],
            ty = matrix[5],
            originSplit = origin.split(" "),
            xOrigin = parseFloat(originSplit[0]) || 0,
            yOrigin = parseFloat(originSplit[1]) || 0,
            bounds,
            determinant,
            x,
            y;
    
        if (!originIsAbsolute) {
          bounds = _getBBox(target);
          xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
          yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
        } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
          x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
          y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
          xOrigin = x;
          yOrigin = y;
        }
    
        if (smooth || smooth !== false && cache.smooth) {
          tx = xOrigin - xOriginOld;
          ty = yOrigin - yOriginOld;
          cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
          cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
        } else {
          cache.xOffset = cache.yOffset = 0;
        }
    
        cache.xOrigin = xOrigin;
        cache.yOrigin = yOrigin;
        cache.smooth = !!smooth;
        cache.origin = origin;
        cache.originIsAbsolute = !!originIsAbsolute;
        target.style[_transformOriginProp] = "0px 0px";
    
        if (pluginToAddPropTweensTo) {
          _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
    
          _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
    
          _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
    
          _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
        }
    
        target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
      },
          _parseTransform = function _parseTransform(target, uncache) {
        var cache = target._gsap || new GSCache(target);
    
        if ("x" in cache && !uncache && !cache.uncache) {
          return cache;
        }
    
        var style = target.style,
            invertedScaleX = cache.scaleX < 0,
            px = "px",
            deg = "deg",
            origin = _getComputedProperty(target, _transformOriginProp) || "0",
            x,
            y,
            z,
            scaleX,
            scaleY,
            rotation,
            rotationX,
            rotationY,
            skewX,
            skewY,
            perspective,
            xOrigin,
            yOrigin,
            matrix,
            angle,
            cos,
            sin,
            a,
            b,
            c,
            d,
            a12,
            a22,
            t1,
            t2,
            t3,
            a13,
            a23,
            a33,
            a42,
            a43,
            a32;
        x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
        scaleX = scaleY = 1;
        cache.svg = !!(target.getCTM && _isSVG(target));
        matrix = _getMatrix(target, cache.svg);
    
        if (cache.svg) {
          t1 = (!cache.uncache || origin === "0px 0px") && !uncache && target.getAttribute("data-svg-origin");
    
          _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
        }
    
        xOrigin = cache.xOrigin || 0;
        yOrigin = cache.yOrigin || 0;
    
        if (matrix !== _identity2DMatrix) {
          a = matrix[0];
          b = matrix[1];
          c = matrix[2];
          d = matrix[3];
          x = a12 = matrix[4];
          y = a22 = matrix[5];
    
          if (matrix.length === 6) {
            scaleX = Math.sqrt(a * a + b * b);
            scaleY = Math.sqrt(d * d + c * c);
            rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
            skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
            skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
    
            if (cache.svg) {
              x -= xOrigin - (xOrigin * a + yOrigin * c);
              y -= yOrigin - (xOrigin * b + yOrigin * d);
            }
          } else {
            a32 = matrix[6];
            a42 = matrix[7];
            a13 = matrix[8];
            a23 = matrix[9];
            a33 = matrix[10];
            a43 = matrix[11];
            x = matrix[12];
            y = matrix[13];
            z = matrix[14];
            angle = _atan2(a32, a33);
            rotationX = angle * _RAD2DEG;
    
            if (angle) {
              cos = Math.cos(-angle);
              sin = Math.sin(-angle);
              t1 = a12 * cos + a13 * sin;
              t2 = a22 * cos + a23 * sin;
              t3 = a32 * cos + a33 * sin;
              a13 = a12 * -sin + a13 * cos;
              a23 = a22 * -sin + a23 * cos;
              a33 = a32 * -sin + a33 * cos;
              a43 = a42 * -sin + a43 * cos;
              a12 = t1;
              a22 = t2;
              a32 = t3;
            }
    
            angle = _atan2(-c, a33);
            rotationY = angle * _RAD2DEG;
    
            if (angle) {
              cos = Math.cos(-angle);
              sin = Math.sin(-angle);
              t1 = a * cos - a13 * sin;
              t2 = b * cos - a23 * sin;
              t3 = c * cos - a33 * sin;
              a43 = d * sin + a43 * cos;
              a = t1;
              b = t2;
              c = t3;
            }
    
            angle = _atan2(b, a);
            rotation = angle * _RAD2DEG;
    
            if (angle) {
              cos = Math.cos(angle);
              sin = Math.sin(angle);
              t1 = a * cos + b * sin;
              t2 = a12 * cos + a22 * sin;
              b = b * cos - a * sin;
              a22 = a22 * cos - a12 * sin;
              a = t1;
              a12 = t2;
            }
    
            if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
              rotationX = rotation = 0;
              rotationY = 180 - rotationY;
            }
    
            scaleX = _round(Math.sqrt(a * a + b * b + c * c));
            scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
            angle = _atan2(a12, a22);
            skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
            perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
          }
    
          if (cache.svg) {
            t1 = target.getAttribute("transform");
            cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
            t1 && target.setAttribute("transform", t1);
          }
        }
    
        if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
          if (invertedScaleX) {
            scaleX *= -1;
            skewX += rotation <= 0 ? 180 : -180;
            rotation += rotation <= 0 ? 180 : -180;
          } else {
            scaleY *= -1;
            skewX += skewX <= 0 ? 180 : -180;
          }
        }
    
        cache.x = x - ((cache.xPercent = x && (cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
        cache.y = y - ((cache.yPercent = y && (cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
        cache.z = z + px;
        cache.scaleX = _round(scaleX);
        cache.scaleY = _round(scaleY);
        cache.rotation = _round(rotation) + deg;
        cache.rotationX = _round(rotationX) + deg;
        cache.rotationY = _round(rotationY) + deg;
        cache.skewX = skewX + deg;
        cache.skewY = skewY + deg;
        cache.transformPerspective = perspective + px;
    
        if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
          style[_transformOriginProp] = _firstTwoOnly(origin);
        }
    
        cache.xOffset = cache.yOffset = 0;
        cache.force3D = _config.force3D;
        cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
        cache.uncache = 0;
        return cache;
      },
          _firstTwoOnly = function _firstTwoOnly(value) {
        return (value = value.split(" "))[0] + " " + value[1];
      },
          _addPxTranslate = function _addPxTranslate(target, start, value) {
        var unit = getUnit(start);
        return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
      },
          _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
        cache.z = "0px";
        cache.rotationY = cache.rotationX = "0deg";
        cache.force3D = 0;
    
        _renderCSSTransforms(ratio, cache);
      },
          _zeroDeg = "0deg",
          _zeroPx = "0px",
          _endParenthesis = ") ",
          _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
        var _ref = cache || this,
            xPercent = _ref.xPercent,
            yPercent = _ref.yPercent,
            x = _ref.x,
            y = _ref.y,
            z = _ref.z,
            rotation = _ref.rotation,
            rotationY = _ref.rotationY,
            rotationX = _ref.rotationX,
            skewX = _ref.skewX,
            skewY = _ref.skewY,
            scaleX = _ref.scaleX,
            scaleY = _ref.scaleY,
            transformPerspective = _ref.transformPerspective,
            force3D = _ref.force3D,
            target = _ref.target,
            zOrigin = _ref.zOrigin,
            transforms = "",
            use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
    
        if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
          var angle = parseFloat(rotationY) * _DEG2RAD,
              a13 = Math.sin(angle),
              a33 = Math.cos(angle),
              cos;
    
          angle = parseFloat(rotationX) * _DEG2RAD;
          cos = Math.cos(angle);
          x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
          y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
          z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
        }
    
        if (transformPerspective !== _zeroPx) {
          transforms += "perspective(" + transformPerspective + _endParenthesis;
        }
    
        if (xPercent || yPercent) {
          transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
        }
    
        if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
          transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
        }
    
        if (rotation !== _zeroDeg) {
          transforms += "rotate(" + rotation + _endParenthesis;
        }
    
        if (rotationY !== _zeroDeg) {
          transforms += "rotateY(" + rotationY + _endParenthesis;
        }
    
        if (rotationX !== _zeroDeg) {
          transforms += "rotateX(" + rotationX + _endParenthesis;
        }
    
        if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
          transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
        }
    
        if (scaleX !== 1 || scaleY !== 1) {
          transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
        }
    
        target.style[_transformProp] = transforms || "translate(0, 0)";
      },
          _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
        var _ref2 = cache || this,
            xPercent = _ref2.xPercent,
            yPercent = _ref2.yPercent,
            x = _ref2.x,
            y = _ref2.y,
            rotation = _ref2.rotation,
            skewX = _ref2.skewX,
            skewY = _ref2.skewY,
            scaleX = _ref2.scaleX,
            scaleY = _ref2.scaleY,
            target = _ref2.target,
            xOrigin = _ref2.xOrigin,
            yOrigin = _ref2.yOrigin,
            xOffset = _ref2.xOffset,
            yOffset = _ref2.yOffset,
            forceCSS = _ref2.forceCSS,
            tx = parseFloat(x),
            ty = parseFloat(y),
            a11,
            a21,
            a12,
            a22,
            temp;
    
        rotation = parseFloat(rotation);
        skewX = parseFloat(skewX);
        skewY = parseFloat(skewY);
    
        if (skewY) {
          skewY = parseFloat(skewY);
          skewX += skewY;
          rotation += skewY;
        }
    
        if (rotation || skewX) {
          rotation *= _DEG2RAD;
          skewX *= _DEG2RAD;
          a11 = Math.cos(rotation) * scaleX;
          a21 = Math.sin(rotation) * scaleX;
          a12 = Math.sin(rotation - skewX) * -scaleY;
          a22 = Math.cos(rotation - skewX) * scaleY;
    
          if (skewX) {
            skewY *= _DEG2RAD;
            temp = Math.tan(skewX - skewY);
            temp = Math.sqrt(1 + temp * temp);
            a12 *= temp;
            a22 *= temp;
    
            if (skewY) {
              temp = Math.tan(skewY);
              temp = Math.sqrt(1 + temp * temp);
              a11 *= temp;
              a21 *= temp;
            }
          }
    
          a11 = _round(a11);
          a21 = _round(a21);
          a12 = _round(a12);
          a22 = _round(a22);
        } else {
          a11 = scaleX;
          a22 = scaleY;
          a21 = a12 = 0;
        }
    
        if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
          tx = _convertToUnit(target, "x", x, "px");
          ty = _convertToUnit(target, "y", y, "px");
        }
    
        if (xOrigin || yOrigin || xOffset || yOffset) {
          tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
          ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
        }
    
        if (xPercent || yPercent) {
          temp = target.getBBox();
          tx = _round(tx + xPercent / 100 * temp.width);
          ty = _round(ty + yPercent / 100 * temp.height);
        }
    
        temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
        target.setAttribute("transform", temp);
        forceCSS && (target.style[_transformProp] = temp);
      },
          _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue, relative) {
        var cap = 360,
            isString = _isString(endValue),
            endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
            change = relative ? endNum * relative : endNum - startNum,
            finalValue = startNum + change + "deg",
            direction,
            pt;
    
        if (isString) {
          direction = endValue.split("_")[1];
    
          if (direction === "short") {
            change %= cap;
    
            if (change !== change % (cap / 2)) {
              change += change < 0 ? cap : -cap;
            }
          }
    
          if (direction === "cw" && change < 0) {
            change = (change + cap * _bigNum$1) % cap - ~~(change / cap) * cap;
          } else if (direction === "ccw" && change > 0) {
            change = (change - cap * _bigNum$1) % cap - ~~(change / cap) * cap;
          }
        }
    
        plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
        pt.e = finalValue;
        pt.u = "deg";
    
        plugin._props.push(property);
    
        return pt;
      },
          _assign = function _assign(target, source) {
        for (var p in source) {
          target[p] = source[p];
        }
    
        return target;
      },
          _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
        var startCache = _assign({}, target._gsap),
            exclude = "perspective,force3D,transformOrigin,svgOrigin",
            style = target.style,
            endCache,
            p,
            startValue,
            endValue,
            startNum,
            endNum,
            startUnit,
            endUnit;
    
        if (startCache.svg) {
          startValue = target.getAttribute("transform");
          target.setAttribute("transform", "");
          style[_transformProp] = transforms;
          endCache = _parseTransform(target, 1);
    
          _removeProperty(target, _transformProp);
    
          target.setAttribute("transform", startValue);
        } else {
          startValue = getComputedStyle(target)[_transformProp];
          style[_transformProp] = transforms;
          endCache = _parseTransform(target, 1);
          style[_transformProp] = startValue;
        }
    
        for (p in _transformProps) {
          startValue = startCache[p];
          endValue = endCache[p];
    
          if (startValue !== endValue && exclude.indexOf(p) < 0) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
            startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
            endNum = parseFloat(endValue);
            plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
            plugin._pt.u = endUnit || 0;
    
            plugin._props.push(p);
          }
        }
    
        _assign(endCache, startCache);
      };
    
      _forEachName("padding,margin,Width,Radius", function (name, index) {
        var t = "Top",
            r = "Right",
            b = "Bottom",
            l = "Left",
            props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
          return index < 2 ? name + side : "border" + side + name;
        });
    
        _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
          var a, vars;
    
          if (arguments.length < 4) {
            a = props.map(function (prop) {
              return _get(plugin, prop, property);
            });
            vars = a.join(" ");
            return vars.split(a[0]).length === 5 ? a[0] : vars;
          }
    
          a = (endValue + "").split(" ");
          vars = {};
          props.forEach(function (prop, i) {
            return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
          });
          plugin.init(target, vars, tween);
        };
      });
    
      var CSSPlugin = {
        name: "css",
        register: _initCore,
        targetTest: function targetTest(target) {
          return target.style && target.nodeType;
        },
        init: function init(target, vars, tween, index, targets) {
          var props = this._props,
              style = target.style,
              startAt = tween.vars.startAt,
              startValue,
              endValue,
              endNum,
              startNum,
              type,
              specialProp,
              p,
              startUnit,
              endUnit,
              relative,
              isTransformRelated,
              transformPropTween,
              cache,
              smooth,
              hasPriority;
          _pluginInitted || _initCore();
    
          for (p in vars) {
            if (p === "autoRound") {
              continue;
            }
    
            endValue = vars[p];
    
            if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
              continue;
            }
    
            type = typeof endValue;
            specialProp = _specialProps[p];
    
            if (type === "function") {
              endValue = endValue.call(tween, index, target, targets);
              type = typeof endValue;
            }
    
            if (type === "string" && ~endValue.indexOf("random(")) {
              endValue = _replaceRandom(endValue);
            }
    
            if (specialProp) {
              specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
            } else if (p.substr(0, 2) === "--") {
              startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
              endValue += "";
              _colorExp.lastIndex = 0;
    
              if (!_colorExp.test(startValue)) {
                startUnit = getUnit(startValue);
                endUnit = getUnit(endValue);
              }
    
              endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
              this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
              props.push(p);
            } else if (type !== "undefined") {
              if (startAt && p in startAt) {
                startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
                p in _config.units && !getUnit(startValue) && (startValue += _config.units[p]);
                (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
              } else {
                startValue = _get(target, p);
              }
    
              startNum = parseFloat(startValue);
              relative = type === "string" && endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
              relative && (endValue = endValue.substr(2));
              endNum = parseFloat(endValue);
    
              if (p in _propertyAliases) {
                if (p === "autoAlpha") {
                  if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                    startNum = 0;
                  }
    
                  _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
                }
    
                if (p !== "scale" && p !== "transform") {
                  p = _propertyAliases[p];
                  ~p.indexOf(",") && (p = p.split(",")[0]);
                }
              }
    
              isTransformRelated = p in _transformProps;
    
              if (isTransformRelated) {
                if (!transformPropTween) {
                  cache = target._gsap;
                  cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
                  smooth = vars.smoothOrigin !== false && cache.smooth;
                  transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
                  transformPropTween.dep = 1;
                }
    
                if (p === "scale") {
                  this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? relative * endNum : endNum - cache.scaleY) || 0);
                  props.push("scaleY", p);
                  p += "X";
                } else if (p === "transformOrigin") {
                  endValue = _convertKeywordsToPercentages(endValue);
    
                  if (cache.svg) {
                    _applySVGOrigin(target, endValue, 0, smooth, 0, this);
                  } else {
                    endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                    endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
    
                    _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
                  }
    
                  continue;
                } else if (p === "svgOrigin") {
                  _applySVGOrigin(target, endValue, 1, smooth, 0, this);
    
                  continue;
                } else if (p in _rotationalProperties) {
                  _addRotationalPropTween(this, cache, p, startNum, endValue, relative);
    
                  continue;
                } else if (p === "smoothOrigin") {
                  _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
    
                  continue;
                } else if (p === "force3D") {
                  cache[p] = endValue;
                  continue;
                } else if (p === "transform") {
                  _addRawTransformPTs(this, endValue, target);
    
                  continue;
                }
              } else if (!(p in style)) {
                p = _checkPropPrefix(p) || p;
              }
    
              if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
                startUnit = (startValue + "").substr((startNum + "").length);
                endNum || (endNum = 0);
                endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
                startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
                this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, relative ? relative * endNum : endNum - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
                this._pt.u = endUnit || 0;
    
                if (startUnit !== endUnit) {
                  this._pt.b = startValue;
                  this._pt.r = _renderCSSPropWithBeginning;
                }
              } else if (!(p in style)) {
                if (p in target) {
                  this.add(target, p, startValue || target[p], endValue, index, targets);
                } else {
                  _missingPlugin(p, endValue);
    
                  continue;
                }
              } else {
                _tweenComplexCSSString.call(this, target, p, startValue, endValue);
              }
    
              props.push(p);
            }
          }
    
          hasPriority && _sortPropTweensByPriority(this);
        },
        get: _get,
        aliases: _propertyAliases,
        getSetter: function getSetter(target, property, plugin) {
          var p = _propertyAliases[property];
          p && p.indexOf(",") < 0 && (property = p);
          return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
        },
        core: {
          _removeProperty: _removeProperty,
          _getMatrix: _getMatrix
        }
      };
      gsap.utils.checkPrefix = _checkPropPrefix;
    
      (function (positionAndScale, rotation, others, aliases) {
        var all = _forEachName(positionAndScale + "," + rotation + "," + others, function (name) {
          _transformProps[name] = 1;
        });
    
        _forEachName(rotation, function (name) {
          _config.units[name] = "deg";
          _rotationalProperties[name] = 1;
        });
    
        _propertyAliases[all[13]] = positionAndScale + "," + rotation;
    
        _forEachName(aliases, function (name) {
          var split = name.split(":");
          _propertyAliases[split[1]] = all[split[0]];
        });
      })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
    
      _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
        _config.units[name] = "px";
      });
    
      gsap.registerPlugin(CSSPlugin);
    
      var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap,
          TweenMaxWithCSS = gsapWithCSS.core.Tween;
    
      exports.Back = Back;
      exports.Bounce = Bounce;
      exports.CSSPlugin = CSSPlugin;
      exports.Circ = Circ;
      exports.Cubic = Cubic;
      exports.Elastic = Elastic;
      exports.Expo = Expo;
      exports.Linear = Linear;
      exports.Power0 = Power0;
      exports.Power1 = Power1;
      exports.Power2 = Power2;
      exports.Power3 = Power3;
      exports.Power4 = Power4;
      exports.Quad = Quad;
      exports.Quart = Quart;
      exports.Quint = Quint;
      exports.Sine = Sine;
      exports.SteppedEase = SteppedEase;
      exports.Strong = Strong;
      exports.TimelineLite = Timeline;
      exports.TimelineMax = Timeline;
      exports.TweenLite = Tween;
      exports.TweenMax = TweenMaxWithCSS;
      exports.default = gsapWithCSS;
      exports.gsap = gsapWithCSS;
    
      if (typeof(window) === 'undefined' || window !== exports) {Object.defineProperty(exports, '__esModule', { value: true });} else {delete window.default;}
    
    })));
    
    },{}],10:[function(require,module,exports){
    /*! jquery.selectBoxIt - v3.8.1 - 2013-10-17
    * http://www.selectboxit.com
    * Copyright (c) 2013 Greg Franko; Licensed MIT*/
    
    // Immediately-Invoked Function Expression (IIFE) [Ben Alman Blog Post](http://benalman.com/news/2010/11/immediately-invoked-function-expression/) that calls another IIFE that contains all of the plugin logic.  I used this pattern so that anyone viewing this code would not have to scroll to the bottom of the page to view the local parameters that were passed to the main IIFE.
    
    ;(function (selectBoxIt) {
    
        //ECMAScript 5 Strict Mode: [John Resig Blog Post](http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/)
        "use strict";
    
        // Calls the second IIFE and locally passes in the global jQuery, window, and document objects
        selectBoxIt(window.jQuery, window, document);
    
    }
    
    // Locally passes in `jQuery`, the `window` object, the `document` object, and an `undefined` variable.  The `jQuery`, `window` and `document` objects are passed in locally, to improve performance, since javascript first searches for a variable match within the local variables set before searching the global variables set.  All of the global variables are also passed in locally to be minifier friendly. `undefined` can be passed in locally, because it is not a reserved word in JavaScript.
    
    (function ($, window, document, undefined) {
    
        // ECMAScript 5 Strict Mode: [John Resig Blog Post](http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/)
        "use strict";
    
        // Calling the jQueryUI Widget Factory Method
        $.widget("selectBox.selectBoxIt", {
    
            // Plugin version
            VERSION: "3.8.1",
    
            // These options will be used as defaults
            options: {
    
                // **showEffect**: Accepts String: "none", "fadeIn", "show", "slideDown", or any of the jQueryUI show effects (i.e. "bounce")
                "showEffect": "none",
    
                // **showEffectOptions**: Accepts an object literal.  All of the available properties are based on the jqueryUI effect options
                "showEffectOptions": {},
    
                // **showEffectSpeed**: Accepts Number (milliseconds) or String: "slow", "medium", or "fast"
                "showEffectSpeed": "medium",
    
                // **hideEffect**: Accepts String: "none", "fadeOut", "hide", "slideUp", or any of the jQueryUI hide effects (i.e. "explode")
                "hideEffect": "none",
    
                // **hideEffectOptions**: Accepts an object literal.  All of the available properties are based on the jqueryUI effect options
                "hideEffectOptions": {},
    
                // **hideEffectSpeed**: Accepts Number (milliseconds) or String: "slow", "medium", or "fast"
                "hideEffectSpeed": "medium",
    
                // **showFirstOption**: Shows the first dropdown list option within the dropdown list options list
                "showFirstOption": true,
    
                // **defaultText**: Overrides the text used by the dropdown list selected option to allow a user to specify custom text.  Accepts a String.
                "defaultText": "",
    
                // **defaultIcon**: Overrides the icon used by the dropdown list selected option to allow a user to specify a custom icon.  Accepts a String (CSS class name(s)).
                "defaultIcon": "",
    
                // **downArrowIcon**: Overrides the default down arrow used by the dropdown list to allow a user to specify a custom image.  Accepts a String (CSS class name(s)).
                "downArrowIcon": "",
    
                // **theme**: Provides theming support for Twitter Bootstrap and jQueryUI
                "theme": "default",
    
                // **keydownOpen**: Opens the dropdown if the up or down key is pressed when the dropdown is focused
                "keydownOpen": true,
    
                // **isMobile**: Function to determine if a user's browser is a mobile browser
                "isMobile": function() {
    
                    // Adapted from http://www.detectmobilebrowsers.com
                    var ua = navigator.userAgent || navigator.vendor || window.opera;
    
                    // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
                    return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
    
                },
    
                // **native**: Triggers the native select box when a user interacts with the drop down
                "native": false,
    
                // **aggressiveChange**: Will select a drop down item (and trigger a change event) when a user navigates to the item via the keyboard (up and down arrow or search), before a user selects an option with a click or the enter key
                "aggressiveChange": false,
    
                // **selectWhenHidden: Will allow a user to select an option using the keyboard when the drop down list is hidden and focused
                "selectWhenHidden": true,
    
                // **viewport**: Allows for a custom domnode used for the viewport. Accepts a selector.  Default is $(window).
                "viewport": $(window),
    
                // **similarSearch**: Optimizes the search for lists with many similar values (i.e. State lists) by making it easier to navigate through
                "similarSearch": false,
    
                // **copyAttributes**: HTML attributes that will be copied over to the new drop down
                "copyAttributes": [
    
                    "title",
    
                    "rel"
    
                ],
    
                // **copyClasses**: HTML classes that will be copied over to the new drop down.  The value indicates where the classes should be copied.  The default value is 'button', but you can also use 'container' (recommended) or 'none'.
                "copyClasses": "button",
    
                // **nativeMousedown**: Mimics native firefox drop down behavior by opening the drop down on mousedown and selecting the currently hovered drop down option on mouseup
                "nativeMousedown": false,
    
                // **customShowHideEvent**: Prevents the drop down from opening on click or mousedown, which allows a user to open/close the drop down with a custom event handler.
                "customShowHideEvent": false,
    
                // **autoWidth**: Makes sure the width of the drop down is wide enough to fit all of the drop down options
                "autoWidth": true,
    
                // **html**: Determines whether or not option text is rendered as html or as text
                "html": true,
    
                // **populate**: Convenience option that accepts JSON data, an array, a single object, or valid HTML string to add options to the drop down list
                "populate": "",
    
                // **dynamicPositioning**: Determines whether or not the drop down list should fit inside it's viewport
                "dynamicPositioning": true,
    
                // **hideCurrent**: Determines whether or not the currently selected drop down option is hidden in the list
                "hideCurrent": false
    
            },
    
            // Get Themes
            // ----------
            //      Retrieves the active drop down theme and returns the theme object
            "getThemes": function() {
    
                var self = this,
                    theme = $(self.element).attr("data-theme") || "c";
    
                return {
    
                    // Twitter Bootstrap Theme
                    "bootstrap": {
    
                        "focus": "active",
    
                        "hover": "",
    
                        "enabled": "enabled",
    
                        "disabled": "disabled",
    
                        "arrow": "caret",
    
                        "button": "btn",
    
                        "list": "dropdown-menu",
    
                        "container": "bootstrap",
    
                        "open": "open"
    
                    },
    
                    // jQueryUI Theme
                    "jqueryui": {
    
                        "focus": "ui-state-focus",
    
                        "hover": "ui-state-hover",
    
                        "enabled": "ui-state-enabled",
    
                        "disabled": "ui-state-disabled",
    
                        "arrow": "ui-icon ui-icon-triangle-1-s",
    
                        "button": "ui-widget ui-state-default",
    
                        "list": "ui-widget ui-widget-content",
    
                        "container": "jqueryui",
    
                        "open": "selectboxit-open"
    
                    },
    
                    // jQuery Mobile Theme
                    "jquerymobile": {
    
                        "focus": "ui-btn-down-" + theme,
    
                        "hover": "ui-btn-hover-" + theme,
    
                        "enabled": "ui-enabled",
    
                        "disabled": "ui-disabled",
    
                        "arrow": "ui-icon ui-icon-arrow-d ui-icon-shadow",
    
                        "button": "ui-btn ui-btn-icon-right ui-btn-corner-all ui-shadow ui-btn-up-" + theme,
    
                        "list": "ui-btn ui-btn-icon-right ui-btn-corner-all ui-shadow ui-btn-up-" + theme,
    
                        "container": "jquerymobile",
    
                        "open": "selectboxit-open"
    
                    },
    
                    "default": {
    
                        "focus": "selectboxit-focus",
    
                        "hover": "selectboxit-hover",
    
                        "enabled": "selectboxit-enabled",
    
                        "disabled": "selectboxit-disabled",
    
                        "arrow": "selectboxit-default-arrow",
    
                        "button": "selectboxit-btn",
    
                        "list": "selectboxit-list",
    
                        "container": "selectboxit-container",
    
                        "open": "selectboxit-open"
    
                    }
    
                };
    
            },
    
            // isDeferred
            // ----------
            //      Checks if parameter is a defered object      
            isDeferred: function(def) {
                return $.isPlainObject(def) && def.promise && def.done;
            },
    
            // _Create
            // -------
            //      Sets the Plugin Instance variables and
            //      constructs the plugin.  Only called once.
            _create: function(internal) {
    
                var self = this,
                    populateOption = self.options["populate"],
                    userTheme = self.options["theme"];
    
                // If the element calling SelectBoxIt is not a select box or is not visible
                if(!self.element.is("select")) {
    
                    // Exits the plugin
                    return;
    
                }
    
                // Stores a reference to the parent Widget class
                self.widgetProto = $.Widget.prototype;
    
                // The original select box DOM element
                self.originalElem = self.element[0];
    
                // The original select box DOM element wrapped in a jQuery object
                self.selectBox = self.element;
    
                if(self.options["populate"] && self.add && !internal) {
    
                    self.add(populateOption);
    
                }
    
                // All of the original select box options
                self.selectItems = self.element.find("option");
    
                // The first option in the original select box
                self.firstSelectItem = self.selectItems.slice(0, 1);
    
                // The html document height
                self.documentHeight = $(document).height();
    
                self.theme = $.isPlainObject(userTheme) ? $.extend({}, self.getThemes()["default"], userTheme) : self.getThemes()[userTheme] ? self.getThemes()[userTheme] : self.getThemes()["default"];
    
                // The index of the currently selected dropdown list option
                self.currentFocus = 0;
    
                // Keeps track of which blur events will hide the dropdown list options
                self.blur = true;
    
                 // Array holding all of the original select box options text
                self.textArray = [];
    
                // Maintains search order in the `search` method
                self.currentIndex = 0;
    
                // Maintains the current search text in the `search` method
                self.currentText = "";
    
                // Whether or not the dropdown list opens up or down (depending on how much room is on the page)
                self.flipped = false;
    
                // If the create method is not called internally by the plugin
                if(!internal) {
    
                    // Saves the original select box `style` attribute within the `selectBoxStyles` plugin instance property
                    self.selectBoxStyles = self.selectBox.attr("style");
    
                }
    
                // Creates the dropdown elements that will become the dropdown
                // Creates the ul element that will become the dropdown options list
                // Add's all attributes (excluding id, class names, and unselectable properties) to the drop down and drop down items list
                // Hides the original select box and adds the new plugin DOM elements to the page
                // Adds event handlers to the new dropdown list
                self._createDropdownButton()._createUnorderedList()._copyAttributes()._replaceSelectBox()._addClasses(self.theme)._eventHandlers();
    
                if(self.originalElem.disabled && self.disable) {
    
                    // Disables the dropdown list if the original dropdown list had the `disabled` attribute
                    self.disable();
    
                }
    
                // If the Aria Accessibility Module has been included
                if(self._ariaAccessibility) {
    
                    // Adds ARIA accessibillity tags to the dropdown list
                    self._ariaAccessibility();
    
                }
    
                self.isMobile = self.options["isMobile"]();
    
                if(self._mobile) {
    
                    // Adds mobile support
                    self._mobile();
    
                }
    
                // If the native option is set to true
                if(self.options["native"]) {
    
                    // Triggers the native select box when a user is interacting with the drop down
                    this._applyNativeSelect();
    
                }
    
                // Triggers a custom `create` event on the original dropdown list
                self.triggerEvent("create");
    
                // Maintains chainability
                return self;
    
            },
    
            // _Create dropdown button
            // -----------------------
            //      Creates new dropdown and dropdown elements to replace
            //      the original select box with a dropdown list
            _createDropdownButton: function() {
    
                var self = this,
                    originalElemId = self.originalElemId = self.originalElem.id || "",
                    originalElemValue = self.originalElemValue = self.originalElem.value || "",
                    originalElemName = self.originalElemName = self.originalElem.name || "",
                    copyClasses = self.options["copyClasses"],
                    selectboxClasses = self.selectBox.attr("class") || "";
    
                // Creates a dropdown element that contains the dropdown list text value
                self.dropdownText = $("<span/>", {
    
                    // Dynamically sets the dropdown `id` attribute
                    "id": originalElemId && originalElemId + "SelectBoxItText",
    
                    "class": "selectboxit-text",
    
                    // IE specific attribute to not allow the element to be selected
                    "unselectable": "on",
    
                    // Sets the dropdown `text` to equal the original select box default value
                    "text": self.firstSelectItem.text()
    
                }).
    
                // Sets the HTML5 data attribute on the dropdownText `dropdown` element
                attr("data-val", originalElemValue);
    
                self.dropdownImageContainer = $("<span/>", {
    
                    "class": "selectboxit-option-icon-container"
    
                });
    
                // Creates a dropdown element that contains the dropdown list text value
                self.dropdownImage = $("<i/>", {
    
                    // Dynamically sets the dropdown `id` attribute
                    "id": originalElemId && originalElemId + "SelectBoxItDefaultIcon",
    
                    "class": "selectboxit-default-icon",
    
                    // IE specific attribute to not allow the element to be selected
                    "unselectable": "on"
    
                });
    
                // Creates a dropdown to act as the new dropdown list
                self.dropdown = $("<span/>", {
    
                    // Dynamically sets the dropdown `id` attribute
                    "id": originalElemId && originalElemId + "SelectBoxIt",
    
                    "class": "selectboxit " + (copyClasses === "button" ? selectboxClasses: "") + " " + (self.selectBox.prop("disabled") ? self.theme["disabled"]: self.theme["enabled"]),
    
                    // Sets the dropdown `name` attribute to be the same name as the original select box
                    "name": originalElemName,
    
                    // Sets the dropdown `tabindex` attribute to 0 to allow the dropdown to be focusable
                    "tabindex": self.selectBox.attr("tabindex") || "0",
    
                    // IE specific attribute to not allow the element to be selected
                    "unselectable": "on"
    
                }).
    
                // Appends the default text to the inner dropdown list dropdown element
                append(self.dropdownImageContainer.append(self.dropdownImage)).append(self.dropdownText);
    
                // Create the dropdown container that will hold all of the dropdown list dom elements
                self.dropdownContainer = $("<span/>", {
    
                    "id": originalElemId && originalElemId + "SelectBoxItContainer",
    
                    "class": 'selectboxit-container ' + self.theme.container + ' ' + (copyClasses === "container" ? selectboxClasses: "")
    
                }).
    
                // Appends the inner dropdown list dropdown element to the dropdown list container dropdown element
                append(self.dropdown);
    
                // Maintains chainability
                return self;
    
            },
    
            // _Create Unordered List
            // ----------------------
            //      Creates an unordered list element to hold the
            //        new dropdown list options that directly match
            //        the values of the original select box options
            _createUnorderedList: function() {
    
                // Storing the context of the widget
                var self = this,
    
                    dataDisabled,
    
                    optgroupClass,
    
                    optgroupElement,
    
                    iconClass,
    
                    iconUrl,
    
                    iconUrlClass,
    
                    iconUrlStyle,
    
                    // Declaring the variable that will hold all of the dropdown list option elements
                    currentItem = "",
    
                    originalElemId = self.originalElemId || "",
    
                    // Creates an unordered list element
                    createdList = $("<ul/>", {
    
                        // Sets the unordered list `id` attribute
                        "id": originalElemId && originalElemId + "SelectBoxItOptions",
    
                        "class": "selectboxit-options",
    
                        //Sets the unordered list `tabindex` attribute to -1 to prevent the unordered list from being focusable
                        "tabindex": -1
    
                    }),
    
                    currentDataSelectedText,
    
                    currentDataText,
    
                    currentDataSearch,
    
                    currentText,
    
                    currentOption,
    
                    parent;
    
                // Checks the `showFirstOption` plugin option to determine if the first dropdown list option should be shown in the options list.
                if (!self.options["showFirstOption"]) {
    
                    // Disables the first select box option
                    self.selectItems.first().attr("disabled", "disabled");
    
                    // Excludes the first dropdown list option from the options list
                    self.selectItems = self.selectBox.find("option").slice(1);
    
                }
    
                // Loops through the original select box options list and copies the text of each
                // into new list item elements of the new dropdown list
                self.selectItems.each(function(index) {
    
                    currentOption = $(this);
    
                    optgroupClass = "";
    
                    optgroupElement = "";
    
                    dataDisabled = currentOption.prop("disabled");
    
                    iconClass = currentOption.attr("data-icon") || "";
    
                    iconUrl = currentOption.attr("data-iconurl") || "";
    
                    iconUrlClass = iconUrl ? "selectboxit-option-icon-url": "";
    
                    iconUrlStyle = iconUrl ? 'style="background-image:url(\'' + iconUrl + '\');"': "";
    
                    currentDataSelectedText = currentOption.attr("data-selectedtext");
    
                    currentDataText = currentOption.attr("data-text");
    
                    currentText = currentDataText ? currentDataText: currentOption.text();
    
                    parent = currentOption.parent();
    
                    // If the current option being traversed is within an optgroup
    
                    if(parent.is("optgroup")) {
    
                        optgroupClass = "selectboxit-optgroup-option";
    
                        if(currentOption.index() === 0) {
    
                             optgroupElement = '<span class="selectboxit-optgroup-header ' + parent.first().attr("class") + '"data-disabled="true">' + parent.first().attr("label") + '</span>';
    
                        }
    
                    }
    
                    currentOption.attr("value", this.value);
    
                    // Uses string concatenation for speed (applies HTML attribute encoding)
                    currentItem += optgroupElement + '<li data-id="' + index + '" data-val="' + this.value + '" data-disabled="' + dataDisabled + '" class="' + optgroupClass + " selectboxit-option " + ($(this).attr("class") || "") + '"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon ' + iconClass + ' ' + (iconUrlClass || self.theme["container"]) + '"' + iconUrlStyle + '></i></span>' + (self.options["html"] ? currentText: self.htmlEscape(currentText)) + '</a></li>';
    
                    currentDataSearch = currentOption.attr("data-search");
    
                    // Stores all of the original select box options text inside of an array
                    // (Used later in the `searchAlgorithm` method)
                    self.textArray[index] = dataDisabled ? "": currentDataSearch ? currentDataSearch: currentText;
    
                    // Checks the original select box option for the `selected` attribute
                    if (this.selected) {
    
                        // Replaces the default text with the selected option text
                        self._setText(self.dropdownText, currentDataSelectedText || currentText);
    
                        //Set the currently selected option
                        self.currentFocus = index;
    
                    }
    
                });
    
                // If the `defaultText` option is being used
                if ((self.options["defaultText"] || self.selectBox.attr("data-text"))) {
    
                    var defaultedText = self.options["defaultText"] || self.selectBox.attr("data-text");
    
                    // Overrides the current dropdown default text with the value the user specifies in the `defaultText` option
                    self._setText(self.dropdownText, defaultedText);
    
                    self.options["defaultText"] = defaultedText;
    
                }
    
                // Append the list item to the unordered list
                createdList.append(currentItem);
    
                // Stores the dropdown list options list inside of the `list` instance variable
                self.list = createdList;
    
                // Append the dropdown list options list to the dropdown container element
                self.dropdownContainer.append(self.list);
    
                // Stores the individual dropdown list options inside of the `listItems` instance variable
                self.listItems = self.list.children("li");
    
                self.listAnchors = self.list.find("a");
    
                // Sets the 'selectboxit-option-first' class name on the first drop down option
                self.listItems.first().addClass("selectboxit-option-first");
    
                // Sets the 'selectboxit-option-last' class name on the last drop down option
                self.listItems.last().addClass("selectboxit-option-last");
    
                // Set the disabled CSS class for select box options
                self.list.find("li[data-disabled='true']").not(".optgroupHeader").addClass(self.theme["disabled"]);
    
                self.dropdownImage.addClass(self.selectBox.attr("data-icon") || self.options["defaultIcon"] || self.listItems.eq(self.currentFocus).find("i").attr("class"));
    
                self.dropdownImage.attr("style", self.listItems.eq(self.currentFocus).find("i").attr("style"));
    
                //Maintains chainability
                return self;
    
            },
    
            // _Replace Select Box
            // -------------------
            //      Hides the original dropdown list and inserts
            //        the new DOM elements
            _replaceSelectBox: function() {
    
                var self = this,
                    height,
                    originalElemId = self.originalElem.id || "",
                    size = self.selectBox.attr("data-size"),
                    listSize = self.listSize = size === undefined ? "auto" : size === "0" || "size" === "auto" ? "auto" : +size,
                    downArrowContainerWidth,
                    dropdownImageWidth;
    
                // Hides the original select box
                self.selectBox.css("display", "none").
    
                // Adds the new dropdown list to the page directly after the hidden original select box element
                after(self.dropdownContainer);
    
                self.dropdownContainer.appendTo('body').
    
                addClass('selectboxit-rendering');
    
                // The height of the dropdown list
                height = self.dropdown.height();
    
                // The down arrow element of the dropdown list
                self.downArrow = $("<i/>", {
    
                    // Dynamically sets the dropdown `id` attribute of the dropdown list down arrow
                    "id": originalElemId && originalElemId + "SelectBoxItArrow",
    
                    "class": "selectboxit-arrow",
    
                    // IE specific attribute to not allow the dropdown list text to be selected
                    "unselectable": "on"
    
                });
    
                // The down arrow container element of the dropdown list
                self.downArrowContainer = $("<span/>", {
    
                    // Dynamically sets the dropdown `id` attribute for the down arrow container element
                    "id": originalElemId && originalElemId + "SelectBoxItArrowContainer",
    
                    "class": "selectboxit-arrow-container",
    
                    // IE specific attribute to not allow the dropdown list text to be selected
                    "unselectable": "on"
    
                }).
    
                // Inserts the down arrow element inside of the down arrow container element
                append(self.downArrow);
    
                // Appends the down arrow element to the dropdown list
                self.dropdown.append(self.downArrowContainer);
    
                // Adds the `selectboxit-selected` class name to the currently selected drop down option
                self.listItems.removeClass("selectboxit-selected").eq(self.currentFocus).addClass("selectboxit-selected");
    
                // The full outer width of the down arrow container
                downArrowContainerWidth = self.downArrowContainer.outerWidth(true);
    
                // The full outer width of the dropdown image
                dropdownImageWidth = self.dropdownImage.outerWidth(true);
    
                // If the `autoWidth` option is true
                if(self.options["autoWidth"]) {
    
                    // Sets the auto width of the drop down
                    self.dropdown.css({ "width": "auto" }).css({
    
                        "width": self.list.outerWidth(true) + downArrowContainerWidth + dropdownImageWidth
    
                    });
    
                    self.list.css({
    
                        "min-width": self.dropdown.width()
    
                    });
    
                }
    
                // Dynamically adds the `max-width` and `line-height` CSS styles of the dropdown list text element
                self.dropdownText.css({
    
                    "max-width": self.dropdownContainer.outerWidth(true) - (downArrowContainerWidth + dropdownImageWidth)
    
                });
    
                // Adds the new dropdown list to the page directly after the hidden original select box element
                self.selectBox.after(self.dropdownContainer);
    
                self.dropdownContainer.removeClass('selectboxit-rendering');
    
                if($.type(listSize) === "number") {
    
                    // Stores the new `max-height` for later
                    self.maxHeight = self.listAnchors.outerHeight(true) * listSize;
    
                }
    
                // Maintains chainability
                return self;
    
            },
    
            // _Scroll-To-View
            // ---------------
            //      Updates the dropdown list scrollTop value
            _scrollToView: function(type) {
    
                var self = this,
    
                    currentOption = self.listItems.eq(self.currentFocus),
    
                    // The current scroll positioning of the dropdown list options list
                    listScrollTop = self.list.scrollTop(),
    
                    // The height of the currently selected dropdown list option
                    currentItemHeight = currentOption.height(),
    
                    // The relative distance from the currently selected dropdown list option to the the top of the dropdown list options list
                    currentTopPosition = currentOption.position().top,
    
                    absCurrentTopPosition = Math.abs(currentTopPosition),
    
                    // The height of the dropdown list option list
                    listHeight = self.list.height(),
    
                    currentText;
    
                // Scrolling logic for a text search
                if (type === "search") {
    
                    // Increases the dropdown list options `scrollTop` if a user is searching for an option
                    // below the currently selected option that is not visible
                    if (listHeight - currentTopPosition < currentItemHeight) {
    
                        // The selected option will be shown at the very bottom of the visible options list
                        self.list.scrollTop(listScrollTop + (currentTopPosition - (listHeight - currentItemHeight)));
    
                    }
    
                    // Decreases the dropdown list options `scrollTop` if a user is searching for an option above the currently selected option that is not visible
                    else if (currentTopPosition < -1) {
    
                        self.list.scrollTop(currentTopPosition - currentItemHeight);
    
                    }
                }
    
                // Scrolling logic for the `up` keyboard navigation
                else if (type === "up") {
    
                    // Decreases the dropdown list option list `scrollTop` if a user is navigating to an element that is not visible
                    if (currentTopPosition < -1) {
    
                        self.list.scrollTop(listScrollTop - absCurrentTopPosition);
    
                    }
                }
    
                // Scrolling logic for the `down` keyboard navigation
                else if (type === "down") {
    
                    // Increases the dropdown list options `scrollTop` if a user is navigating to an element that is not fully visible
                    if (listHeight - currentTopPosition < currentItemHeight) {
    
                        // Increases the dropdown list options `scrollTop` by the height of the current option item.
                        self.list.scrollTop((listScrollTop + (absCurrentTopPosition - listHeight + currentItemHeight)));
    
                    }
                }
    
                // Maintains chainability
                return self;
    
            },
    
            // _Callback
            // ---------
            //      Call the function passed into the method
            _callbackSupport: function(callback) {
    
                var self = this;
    
                // Checks to make sure the parameter passed in is a function
                if ($.isFunction(callback)) {
    
                    // Calls the method passed in as a parameter and sets the current `SelectBoxIt` object that is stored in the jQuery data method as the context(allows for `this` to reference the SelectBoxIt API Methods in the callback function. The `dropdown` DOM element that acts as the new dropdown list is also passed as the only parameter to the callback
                    callback.call(self, self.dropdown);
    
                }
    
                // Maintains chainability
                return self;
    
            },
    
            // _setText
            // --------
            //      Set's the text or html for the drop down
            _setText: function(elem, currentText) {
    
                var self = this;
    
                if(self.options["html"]) {
    
                    elem.html(currentText);
    
                }
    
                else {
    
                    elem.text(currentText);
    
                }
    
                return self;
    
            },
    
            // Open
            // ----
            //      Opens the dropdown list options list
            open: function(callback) {
    
                var self = this,
                    showEffect = self.options["showEffect"],
                    showEffectSpeed = self.options["showEffectSpeed"],
                    showEffectOptions = self.options["showEffectOptions"],
                    isNative = self.options["native"],
                    isMobile = self.isMobile;
    
                // If there are no select box options, do not try to open the select box
                if(!self.listItems.length || self.dropdown.hasClass(self.theme["disabled"])) {
    
                    return self;
    
                }
    
                // If the new drop down is being used and is not visible
                if((!isNative && !isMobile) && !this.list.is(":visible")) {
    
                    // Triggers a custom "open" event on the original select box
                    self.triggerEvent("open");
    
                    if (self._dynamicPositioning && self.options["dynamicPositioning"]) {
    
                        // Dynamically positions the dropdown list options list
                        self._dynamicPositioning();
    
                    }
    
                    // Uses `no effect`
                    if(showEffect === "none") {
    
                        // Does not require a callback function because this animation will complete before the call to `scrollToView`
                        self.list.show();
    
                    }
    
                    // Uses the jQuery `show` special effect
                    else if(showEffect === "show" || showEffect === "slideDown" || showEffect === "fadeIn") {
    
                        // Requires a callback function to determine when the `show` animation is complete
                        self.list[showEffect](showEffectSpeed);
    
                    }
    
                    // If none of the above options were passed, then a `jqueryUI show effect` is expected
                    else {
    
                        // Allows for custom show effects via the [jQueryUI core effects](http://http://jqueryui.com/demos/show/)
                        self.list.show(showEffect, showEffectOptions, showEffectSpeed);
    
                    }
    
                    self.list.promise().done(function() {
    
                        // Updates the list `scrollTop` attribute
                        self._scrollToView("search");
    
                        // Triggers a custom "opened" event when the drop down list is done animating
                        self.triggerEvent("opened");
    
                    });
    
                }
    
                // Provide callback function support
                self._callbackSupport(callback);
    
                // Maintains chainability
                return self;
    
            },
    
            // Close
            // -----
            //      Closes the dropdown list options list
            close: function(callback) {
    
                var self = this,
                    hideEffect = self.options["hideEffect"],
                    hideEffectSpeed = self.options["hideEffectSpeed"],
                    hideEffectOptions = self.options["hideEffectOptions"],
                    isNative = self.options["native"],
                    isMobile = self.isMobile;
    
                // If the drop down is being used and is visible
                if((!isNative && !isMobile) && self.list.is(":visible")) {
    
                    // Triggers a custom "close" event on the original select box
                    self.triggerEvent("close");
    
                    // Uses `no effect`
                    if(hideEffect === "none") {
    
                        // Does not require a callback function because this animation will complete before the call to `scrollToView`
                        self.list.hide();
    
                    }
    
                    // Uses the jQuery `hide` special effect
                    else if(hideEffect === "hide" || hideEffect === "slideUp" || hideEffect === "fadeOut") {
    
                        self.list[hideEffect](hideEffectSpeed);
    
                    }
    
                    // If none of the above options were passed, then a `jqueryUI hide effect` is expected
                    else {
    
                        // Allows for custom hide effects via the [jQueryUI core effects](http://http://jqueryui.com/demos/hide/)
                        self.list.hide(hideEffect, hideEffectOptions, hideEffectSpeed);
    
                    }
    
                    // After the drop down list is done animating
                    self.list.promise().done(function() {
    
                        // Triggers a custom "closed" event when the drop down list is done animating
                        self.triggerEvent("closed");
    
                    });
    
                }
    
                // Provide callback function support
                self._callbackSupport(callback);
    
                // Maintains chainability
                return self;
    
            },
    
            toggle: function() {
    
                var self = this,
                    listIsVisible = self.list.is(":visible");
    
                if(listIsVisible) {
    
                    self.close();
    
                }
    
                else if(!listIsVisible) {
    
                    self.open();
    
                }
    
            },
    
            // _Key Mappings
            // -------------
            //      Object literal holding the string representation of each key code
            _keyMappings: {
    
                "38": "up",
    
                "40": "down",
    
                "13": "enter",
    
                "8": "backspace",
    
                "9": "tab",
    
                "32": "space",
    
                "27": "esc"
    
            },
    
            // _Key Down Methods
            // -----------------
            //      Methods to use when the keydown event is triggered
            _keydownMethods: function() {
    
                var self = this,
                    moveToOption = self.list.is(":visible") || !self.options["keydownOpen"];
    
                return {
    
                    "down": function() {
    
                        // If the plugin options allow keyboard navigation
                        if (self.moveDown && moveToOption) {
    
                            self.moveDown();
    
                        }
    
                    },
    
                    "up": function() {
    
                         // If the plugin options allow keyboard navigation
                        if (self.moveUp && moveToOption) {
    
                            self.moveUp();
    
                        }
    
                    },
    
                    "enter": function() {
    
                        var activeElem = self.listItems.eq(self.currentFocus);
    
                        // Updates the dropdown list value
                        self._update(activeElem);
    
                        if (activeElem.attr("data-preventclose") !== "true") {
    
                            // Closes the drop down list options list
                            self.close();
    
                        }
    
                        // Triggers the `enter` events on the original select box
                        self.triggerEvent("enter");
    
                    },
    
                    "tab": function() {
    
                        // Triggers the custom `tab-blur` event on the original select box
                        self.triggerEvent("tab-blur");
    
                        // Closes the drop down list
                        self.close();
    
                    },
    
                    "backspace": function() {
    
                        // Triggers the custom `backspace` event on the original select box
                        self.triggerEvent("backspace");
    
                    },
    
                    "esc": function() {
    
                        // Closes the dropdown options list
                        self.close();
    
                    }
    
                };
    
            },
    
    
            // _Event Handlers
            // ---------------
            //      Adds event handlers to the new dropdown and the original select box
            _eventHandlers: function() {
    
                // LOCAL VARIABLES
                var self = this,
                    nativeMousedown = self.options["nativeMousedown"],
                    customShowHideEvent = self.options["customShowHideEvent"],
                    currentDataText,
                    currentText,
                    focusClass = self.focusClass,
                    hoverClass = self.hoverClass,
                    openClass = self.openClass;
    
                // Select Box events
                this.dropdown.on({
    
                    // `click` event with the `selectBoxIt` namespace
                    "click.selectBoxIt": function() {
    
                        // Used to make sure the dropdown becomes focused (fixes IE issue)
                        self.dropdown.trigger("focus", true);
    
                        // The `click` handler logic will only be applied if the dropdown list is enabled
                        if (!self.originalElem.disabled) {
    
                            // Triggers the `click` event on the original select box
                            self.triggerEvent("click");
    
                            if(!nativeMousedown && !customShowHideEvent) {
    
                                self.toggle();
    
                            }
    
                        }
    
                    },
    
                    // `mousedown` event with the `selectBoxIt` namespace
                    "mousedown.selectBoxIt": function() {
    
                        // Stores data in the jQuery `data` method to help determine if the dropdown list gains focus from a click or tabstop.  The mousedown event fires before the focus event.
                        $(this).data("mdown", true);
    
                        self.triggerEvent("mousedown");
    
                        if(nativeMousedown && !customShowHideEvent) {
    
                            self.toggle();
    
                        }
    
                    },
    
                    // `mouseup` event with the `selectBoxIt` namespace
                    "mouseup.selectBoxIt": function() {
    
                        self.triggerEvent("mouseup");
    
                    },
    
                    // `blur` event with the `selectBoxIt` namespace.  Uses special blur logic to make sure the dropdown list closes correctly
                    "blur.selectBoxIt": function() {
    
                        // If `self.blur` property is true
                        if (self.blur) {
    
                            // Triggers both the `blur` and `focusout` events on the original select box.
                            // The `focusout` event is also triggered because the event bubbles
                            // This event has to be used when using event delegation (such as the jQuery `delegate` or `on` methods)
                            // Popular open source projects such as Backbone.js utilize event delegation to bind events, so if you are using Backbone.js, use the `focusout` event instead of the `blur` event
                            self.triggerEvent("blur");
    
                            // Closes the dropdown list options list
                            self.close();
    
                            $(this).removeClass(focusClass);
    
                        }
    
                    },
    
                    "focus.selectBoxIt": function(event, internal) {
    
                        // Stores the data associated with the mousedown event inside of a local variable
                        var mdown = $(this).data("mdown");
    
                        // Removes the jQuery data associated with the mousedown event
                        $(this).removeData("mdown");
    
                        // If a mousedown event did not occur and no data was passed to the focus event (this correctly triggers the focus event), then the dropdown list gained focus from a tabstop
                        if (!mdown && !internal) {
    
                            setTimeout(function() {
    
                                // Triggers the `tabFocus` custom event on the original select box
                                self.triggerEvent("tab-focus");
    
                            }, 0);
    
                        }
    
                        // Only trigger the `focus` event on the original select box if the dropdown list is hidden (this verifies that only the correct `focus` events are used to trigger the event on the original select box
                        if(!internal) {
    
                            if(!$(this).hasClass(self.theme["disabled"])) {
    
                                $(this).addClass(focusClass);
    
                            }
    
                            //Triggers the `focus` default event on the original select box
                            self.triggerEvent("focus");
    
                        }
    
                    },
    
                    // `keydown` event with the `selectBoxIt` namespace.  Catches all user keyboard navigations
                    "keydown.selectBoxIt": function(e) {
    
                        // Stores the `keycode` value in a local variable
                        var currentKey = self._keyMappings[e.keyCode],
    
                            keydownMethod = self._keydownMethods()[currentKey];
    
                        if(keydownMethod) {
    
                            keydownMethod();
    
                            if(self.options["keydownOpen"] && (currentKey === "up" || currentKey === "down")) {
    
                                self.open();
    
                            }
    
                        }
    
                        if(keydownMethod && currentKey !== "tab") {
    
                            e.preventDefault();
    
                        }
    
                    },
    
                    // `keypress` event with the `selectBoxIt` namespace.  Catches all user keyboard text searches since you can only reliably get character codes using the `keypress` event
                    "keypress.selectBoxIt": function(e) {
    
                        // Sets the current key to the `keyCode` value if `charCode` does not exist.  Used for cross
                        // browser support since IE uses `keyCode` instead of `charCode`.
                        var currentKey = e.charCode || e.keyCode,
    
                            key = self._keyMappings[e.charCode || e.keyCode],
    
                            // Converts unicode values to characters
                            alphaNumericKey = String.fromCharCode(currentKey);
    
                        // If the plugin options allow text searches
                        if (self.search && (!key || (key && key === "space"))) {
    
                            // Calls `search` and passes the character value of the user's text search
                            self.search(alphaNumericKey, true, true);
    
                        }
    
                        if(key === "space") {
    
                            e.preventDefault();
    
                        }
    
                    },
    
                    // `mousenter` event with the `selectBoxIt` namespace .The mouseenter JavaScript event is proprietary to Internet Explorer. Because of the event's general utility, jQuery simulates this event so that it can be used regardless of browser.
                    "mouseenter.selectBoxIt": function() {
    
                        // Trigger the `mouseenter` event on the original select box
                        self.triggerEvent("mouseenter");
    
                    },
    
                    // `mouseleave` event with the `selectBoxIt` namespace. The mouseleave JavaScript event is proprietary to Internet Explorer. Because of the event's general utility, jQuery simulates this event so that it can be used regardless of browser.
                    "mouseleave.selectBoxIt": function() {
    
                        // Trigger the `mouseleave` event on the original select box
                        self.triggerEvent("mouseleave");
    
                    }
    
                });
    
                // Select box options events that set the dropdown list blur logic (decides when the dropdown list gets
                // closed)
                self.list.on({
    
                    // `mouseover` event with the `selectBoxIt` namespace
                    "mouseover.selectBoxIt": function() {
    
                        // Prevents the dropdown list options list from closing
                        self.blur = false;
    
                    },
    
                    // `mouseout` event with the `selectBoxIt` namespace
                    "mouseout.selectBoxIt": function() {
    
                        // Allows the dropdown list options list to close
                        self.blur = true;
    
                    },
    
                    // `focusin` event with the `selectBoxIt` namespace
                    "focusin.selectBoxIt": function() {
    
                        // Prevents the default browser outline border to flicker, which results because of the `blur` event
                        self.dropdown.trigger("focus", true);
    
                    }
    
                });
    
                // Select box individual options events bound with the jQuery `delegate` method.  `Delegate` was used because binding indropdownidual events to each list item (since we don't know how many there will be) would decrease performance.  Instead, we bind each event to the unordered list, provide the list item context, and allow the list item events to bubble up (`event bubbling`). This greatly increases page performance because we only have to bind an event to one element instead of x number of elements. Delegates the `click` event with the `selectBoxIt` namespace to the list items
                self.list.on({
    
                    "mousedown.selectBoxIt": function() {
    
                        self._update($(this));
    
                        self.triggerEvent("option-click");
    
                        // If the current drop down option is not disabled
                        if ($(this).attr("data-disabled") === "false" && $(this).attr("data-preventclose") !== "true") {
    
                            // Closes the drop down list
                            self.close();
    
                        }
    
                        setTimeout(function() {
    
                            self.dropdown.trigger('focus', true);
    
                        }, 0);
    
                    },
    
                   // Delegates the `focusin` event with the `selectBoxIt` namespace to the list items
                   "focusin.selectBoxIt": function() {
    
                        // Removes the hover class from the previous drop down option
                        self.listItems.not($(this)).removeAttr("data-active");
    
                        $(this).attr("data-active", "");
    
                        var listIsHidden = self.list.is(":hidden");
    
                        if((self.options["searchWhenHidden"] && listIsHidden) || self.options["aggressiveChange"] || (listIsHidden && self.options["selectWhenHidden"])) {
    
                            self._update($(this));
    
                        }
    
                        // Adds the focus CSS class to the currently focused dropdown list option
                       $(this).addClass(focusClass);
    
                    },
    
                    // Delegates the `focus` event with the `selectBoxIt` namespace to the list items
                    "mouseup.selectBoxIt": function() {
    
                        if(nativeMousedown && !customShowHideEvent) {
    
                            self._update($(this));
    
                            self.triggerEvent("option-mouseup");
    
                            // If the current drop down option is not disabled
                            if ($(this).attr("data-disabled") === "false" && $(this).attr("data-preventclose") !== "true") {
    
                                // Closes the drop down list
                                self.close();
    
                            }
    
                        }
    
                    },
    
                    // Delegates the `mouseenter` event with the `selectBoxIt` namespace to the list items
                    "mouseenter.selectBoxIt": function() {
    
                        // If the currently moused over drop down option is not disabled
                        if($(this).attr("data-disabled") === "false") {
    
                            self.listItems.removeAttr("data-active");
    
                            $(this).addClass(focusClass).attr("data-active", "");
    
                            // Sets the dropdown list indropdownidual options back to the default state and sets the focus CSS class on the currently hovered option
                            self.listItems.not($(this)).removeClass(focusClass);
    
                            $(this).addClass(focusClass);
    
                            self.currentFocus = +$(this).attr("data-id");
    
                        }
    
                    },
    
                    // Delegates the `mouseleave` event with the `selectBoxIt` namespace to the list items
                    "mouseleave.selectBoxIt": function() {
    
                        // If the currently moused over drop down option is not disabled
                        if($(this).attr("data-disabled") === "false") {
    
                            // Removes the focus class from the previous drop down option
                            self.listItems.not($(this)).removeClass(focusClass).removeAttr("data-active");
    
                            $(this).addClass(focusClass);
    
                            self.currentFocus = +$(this).attr("data-id");
    
                        }
    
                    },
    
                    // Delegates the `blur` event with the `selectBoxIt` namespace to the list items
                    "blur.selectBoxIt": function() {
    
                        // Removes the focus CSS class from the previously focused dropdown list option
                        $(this).removeClass(focusClass);
    
                    }
    
                }, ".selectboxit-option");
    
                // Select box individual option anchor events bound with the jQuery `delegate` method.  `Delegate` was used because binding indropdownidual events to each list item (since we don't know how many there will be) would decrease performance.  Instead, we bind each event to the unordered list, provide the list item context, and allow the list item events to bubble up (`event bubbling`). This greatly increases page performance because we only have to bind an event to one element instead of x number of elements. Delegates the `click` event with the `selectBoxIt` namespace to the list items
                self.list.on({
    
                    "click.selectBoxIt": function(ev) {
    
                        // Prevents the internal anchor tag from doing anything funny
                        ev.preventDefault();
    
                    }
    
                }, "a");
    
                // Original dropdown list events
                self.selectBox.on({
    
                    // `change` event handler with the `selectBoxIt` namespace
                    "change.selectBoxIt, internal-change.selectBoxIt": function(event, internal) {
    
                        var currentOption,
                            currentDataSelectedText;
    
                        // If the user called the change method
                        if(!internal) {
    
                            currentOption = self.list.find('li[data-val="' + self.originalElem.value + '"]');
    
                            // If there is a dropdown option with the same value as the original select box element
                            if(currentOption.length) {
    
                                self.listItems.eq(self.currentFocus).removeClass(self.focusClass);
    
                                self.currentFocus = +currentOption.attr("data-id");
    
                            }
    
                        }
    
                        currentOption = self.listItems.eq(self.currentFocus);
    
                        currentDataSelectedText = currentOption.attr("data-selectedtext");
    
                        currentDataText = currentOption.attr("data-text");
    
                        currentText = currentDataText ?  currentDataText: currentOption.find("a").text();
    
                        // Sets the new dropdown list text to the value of the current option
                        self._setText(self.dropdownText, currentDataSelectedText || currentText);
    
                        self.dropdownText.attr("data-val", self.originalElem.value);
    
                        if(currentOption.find("i").attr("class")) {
    
                            self.dropdownImage.attr("class", currentOption.find("i").attr("class")).addClass("selectboxit-default-icon");
    
                            self.dropdownImage.attr("style", currentOption.find("i").attr("style"));
                        }
    
                        // Triggers a custom changed event on the original select box
                        self.triggerEvent("changed");
    
                    },
    
                    // `disable` event with the `selectBoxIt` namespace
                    "disable.selectBoxIt": function() {
    
                        // Adds the `disabled` CSS class to the new dropdown list to visually show that it is disabled
                        self.dropdown.addClass(self.theme["disabled"]);
    
                    },
    
                    // `enable` event with the `selectBoxIt` namespace
                    "enable.selectBoxIt": function() {
    
                        // Removes the `disabled` CSS class from the new dropdown list to visually show that it is enabled
                        self.dropdown.removeClass(self.theme["disabled"]);
    
                    },
    
                    // `open` event with the `selectBoxIt` namespace
                    "open.selectBoxIt": function() {
    
                        var currentElem = self.list.find("li[data-val='" + self.dropdownText.attr("data-val") + "']"),
                            activeElem;
    
                        // If no current element can be found, then select the first drop down option
                        if(!currentElem.length) {
    
                            // Sets the default value of the dropdown list to the first option that is not disabled
                            currentElem = self.listItems.not("[data-disabled=true]").first();
    
                        }
    
                        self.currentFocus = +currentElem.attr("data-id");
    
                        activeElem = self.listItems.eq(self.currentFocus);
    
                        self.dropdown.addClass(openClass).
    
                        // Removes the focus class from the dropdown list and adds the library focus class for both the dropdown list and the currently selected dropdown list option
                        removeClass(hoverClass).addClass(focusClass);
    
                        self.listItems.removeClass(self.selectedClass).
    
                        removeAttr("data-active").not(activeElem).removeClass(focusClass);
    
                        activeElem.addClass(self.selectedClass).addClass(focusClass);
    
                        if(self.options.hideCurrent) {
    
                            self.listItems.show();
    
                            activeElem.hide();
    
                        }
    
                    },
    
                    "close.selectBoxIt": function() {
    
                        // Removes the open class from the dropdown container
                        self.dropdown.removeClass(openClass);
    
                    },
    
                    "blur.selectBoxIt": function() {
    
                        self.dropdown.removeClass(focusClass);
    
                    },
    
                    // `mousenter` event with the `selectBoxIt` namespace
                    "mouseenter.selectBoxIt": function() {
    
                        if(!$(this).hasClass(self.theme["disabled"])) {
                            self.dropdown.addClass(hoverClass);
                        }
    
                    },
    
                    // `mouseleave` event with the `selectBoxIt` namespace
                    "mouseleave.selectBoxIt": function() {
    
                        // Removes the hover CSS class on the previously hovered dropdown list option
                        self.dropdown.removeClass(hoverClass);
    
                    },
    
                    // `destroy` event
                    "destroy": function(ev) {
    
                        // Prevents the default action from happening
                        ev.preventDefault();
    
                        // Prevents the destroy event from propagating
                        ev.stopPropagation();
    
                    }
    
                });
    
                // Maintains chainability
                return self;
    
            },
    
            // _update
            // -------
            //      Updates the drop down and select box with the current value
            _update: function(elem) {
    
                var self = this,
                    currentDataSelectedText,
                    currentDataText,
                    currentText,
                    defaultText = self.options["defaultText"] || self.selectBox.attr("data-text"),
                    currentElem = self.listItems.eq(self.currentFocus);
    
                if (elem.attr("data-disabled") === "false") {
    
                    currentDataSelectedText = self.listItems.eq(self.currentFocus).attr("data-selectedtext");
    
                    currentDataText = currentElem.attr("data-text");
    
                    currentText = currentDataText ? currentDataText: currentElem.text();
    
                    // If the default text option is set and the current drop down option is not disabled
                    if ((defaultText && self.options["html"] ? self.dropdownText.html() === defaultText: self.dropdownText.text() === defaultText) && self.selectBox.val() === elem.attr("data-val")) {
    
                        self.triggerEvent("change");
    
                    }
    
                    else {
    
                        // Sets the original dropdown list value and triggers the `change` event on the original select box
                        self.selectBox.val(elem.attr("data-val"));
    
                        // Sets `currentFocus` to the currently focused dropdown list option.
                        // The unary `+` operator casts the string to a number
                        // [James Padolsey Blog Post](http://james.padolsey.com/javascript/terse-javascript-101-part-2/)
                        self.currentFocus = +elem.attr("data-id");
    
                        // Triggers the dropdown list `change` event if a value change occurs
                        if (self.originalElem.value !== self.dropdownText.attr("data-val")) {
    
                            self.triggerEvent("change");
    
                        }
    
                    }
    
                }
    
            },
    
            // _addClasses
            // -----------
            //      Adds SelectBoxIt CSS classes
            _addClasses: function(obj) {
    
                var self = this,
    
                    focusClass = self.focusClass = obj.focus,
    
                    hoverClass = self.hoverClass = obj.hover,
    
                    buttonClass = obj.button,
    
                    listClass = obj.list,
    
                    arrowClass = obj.arrow,
    
                    containerClass = obj.container,
    
                    openClass = self.openClass = obj.open;
    
                self.selectedClass = "selectboxit-selected";
    
                self.downArrow.addClass(self.selectBox.attr("data-downarrow") || self.options["downArrowIcon"] || arrowClass);
    
                // Adds the correct container class to the dropdown list
                self.dropdownContainer.addClass(containerClass);
    
                // Adds the correct class to the dropdown list
                self.dropdown.addClass(buttonClass);
    
                // Adds the default class to the dropdown list options
                self.list.addClass(listClass);
    
                // Maintains chainability
                return self;
    
            },
    
            // Refresh
            // -------
            //    The dropdown will rebuild itself.  Useful for dynamic content.
            refresh: function(callback, internal) {
    
                var self = this;
    
                // Destroys the plugin and then recreates the plugin
                self._destroySelectBoxIt()._create(true);
    
                if(!internal) {
                    self.triggerEvent("refresh");
                }
    
                self._callbackSupport(callback);
    
                //Maintains chainability
                return self;
    
            },
    
            // HTML Escape
            // -----------
            //      HTML encodes a string
            htmlEscape: function(str) {
    
                return String(str)
                    .replace(/&/g, "&amp;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#39;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;");
    
            },
    
            // triggerEvent
            // ------------
            //      Trigger's an external event on the original select box element
            triggerEvent: function(eventName) {
    
                var self = this,
                    // Finds the currently option index
                    currentIndex = self.options["showFirstOption"] ? self.currentFocus : ((self.currentFocus - 1) >= 0 ? self.currentFocus: 0);
    
                // Triggers the custom option-click event on the original select box and passes the select box option
                self.selectBox.trigger(eventName, { "selectbox": self.selectBox, "selectboxOption": self.selectItems.eq(currentIndex), "dropdown": self.dropdown, "dropdownOption": self.listItems.eq(self.currentFocus) });
    
                // Maintains chainability
                return self;
    
            },
    
            // _copyAttributes
            // ---------------
            //      Copies HTML attributes from the original select box to the new drop down 
            _copyAttributes: function() {
    
                var self = this;
    
                if(self._addSelectBoxAttributes) {
    
                    self._addSelectBoxAttributes();
    
                }
    
                return self;
    
            },
    
            // _realOuterWidth
            // ---------------
            //      Retrieves the true outerWidth dimensions of a hidden DOM element
            _realOuterWidth: function(elem) {
    
                if(elem.is(":visible")) {
    
                    return elem.outerWidth(true);
    
                }
    
                var self = this,
                    clonedElem = elem.clone(),
                    outerWidth;
    
                clonedElem.css({
    
                    "visibility": "hidden",
    
                    "display": "block",
    
                    "position": "absolute"
    
                }).appendTo("body");
    
                outerWidth = clonedElem.outerWidth(true);
    
                clonedElem.remove();
    
                return outerWidth;
            }
    
        });
    
        // Stores the plugin prototype object in a local variable
        var selectBoxIt = $.selectBox.selectBoxIt.prototype;
    
        // Add Options Module
        // ==================
    
        // add
        // ---
        //    Adds drop down options
        //    using JSON data, an array,
        //    a single object, or valid HTML string
    
        selectBoxIt.add = function(data, callback) {
    
            this._populate(data, function(data) {
    
                var self = this,
                    dataType = $.type(data),
                    value,
                    x = 0,
                    dataLength,
                    elems = [],
                    isJSON = self._isJSON(data),
                    parsedJSON = isJSON && self._parseJSON(data);
    
                // If the passed data is a local or JSON array
                if(data && (dataType === "array" || (isJSON && parsedJSON.data && $.type(parsedJSON.data) === "array")) || (dataType === "object" && data.data && $.type(data.data) === "array")) {
    
                    // If the data is JSON
                    if(self._isJSON(data)) {
    
                        // Parses the JSON and stores it in the data local variable
                        data = parsedJSON;
    
                    }
    
                    // If there is an inner `data` property stored in the first level of the JSON array
                    if(data.data) {
    
                        // Set's the data to the inner `data` property
                        data = data.data;
    
                    }
    
                    // Loops through the array
                    for(dataLength = data.length; x <= dataLength - 1; x += 1) {
    
                        // Stores the currently traversed array item in the local `value` variable
                        value = data[x];
    
                        // If the currently traversed array item is an object literal
                        if($.isPlainObject(value)) {
    
                            // Adds an option to the elems array
                            elems.push($("<option/>", value));
    
                        }
    
                        // If the currently traversed array item is a string
                        else if($.type(value) === "string") {
    
                            // Adds an option to the elems array
                            elems.push($("<option/>", { text: value, value: value }));
    
                        }
    
                    }
    
                    // Appends all options to the drop down (with the correct object configurations)
                    self.selectBox.append(elems);
    
                }
    
                // if the passed data is an html string and not a JSON string
                else if(data && dataType === "string" && !self._isJSON(data)) {
    
                    // Appends the html string options to the original select box
                    self.selectBox.append(data);
    
                }
    
                else if(data && dataType === "object") {
    
                    // Appends an option to the original select box (with the object configurations)
                    self.selectBox.append($("<option/>", data));
    
                }
    
                else if(data && self._isJSON(data) && $.isPlainObject(self._parseJSON(data))) {
    
                    // Appends an option to the original select box (with the object configurations)
                    self.selectBox.append($("<option/>", self._parseJSON(data)));
    
                }
    
                // If the dropdown property exists
                if(self.dropdown) {
    
                    // Rebuilds the dropdown
                    self.refresh(function() {
    
                        // Provide callback function support
                        self._callbackSupport(callback);
    
                    }, true);
    
                } else {
    
                    // Provide callback function support
                    self._callbackSupport(callback);
    
                }
    
                // Maintains chainability
                return self;
    
            });
    
        };
    
        // parseJSON
        // ---------
        //      Detects JSON support and parses JSON data
        selectBoxIt._parseJSON = function(data) {
    
            return (JSON && JSON.parse && JSON.parse(data)) || $.parseJSON(data);
    
        };
    
        // isjSON
        // ------
        //    Determines if a string is valid JSON
    
        selectBoxIt._isJSON = function(data) {
    
            var self = this,
                json;
    
            try {
    
                json = self._parseJSON(data);
    
                // Valid JSON
                return true;
    
            } catch (e) {
    
                // Invalid JSON
                return false;
    
            }
    
        };
    
        // _populate
        // --------
        //    Handles asynchronous and synchronous data
        //    to populate the select box
    
        selectBoxIt._populate = function(data, callback) {
    
            var self = this;
    
            data = $.isFunction(data) ? data.call() : data;
    
            if(self.isDeferred(data)) {
    
                data.done(function(returnedData) {
    
                    callback.call(self, returnedData);
    
                });
    
            }
    
            else {
    
                callback.call(self, data);
    
            }
    
            // Maintains chainability
            return self;
    
        };
    
        // Accessibility Module
        // ====================
    
        // _ARIA Accessibility
        // ------------------
        //      Adds ARIA (Accessible Rich Internet Applications)
        //      Accessibility Tags to the Select Box
    
        selectBoxIt._ariaAccessibility = function() {
    
            var self = this,
                dropdownLabel = $("label[for='" + self.originalElem.id + "']");
    
            // Adds `ARIA attributes` to the dropdown list
            self.dropdownContainer.attr({
    
                // W3C `combobox` description: A presentation of a select; usually similar to a textbox where users can type ahead to select an option.
                "role": "combobox",
    
                //W3C `aria-autocomplete` description: Indicates whether user input completion suggestions are provided.
                "aria-autocomplete": "list",
    
                "aria-haspopup": "true",
    
                // W3C `aria-expanded` description: Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
                "aria-expanded": "false",
    
                // W3C `aria-owns` description: The value of the aria-owns attribute is a space-separated list of IDREFS that reference one or more elements in the document by ID. The reason for adding aria-owns is to expose a parent/child contextual relationship to assistive technologies that is otherwise impossible to infer from the DOM.
                "aria-owns": self.list[0].id
    
            });
    
            self.dropdownText.attr({
    
                "aria-live": "polite"
    
            });
    
            // Dynamically adds `ARIA attributes` if the new dropdown list is enabled or disabled
            self.dropdown.on({
    
                //Select box custom `disable` event with the `selectBoxIt` namespace
                "disable.selectBoxIt" : function() {
    
                    // W3C `aria-disabled` description: Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
                    self.dropdownContainer.attr("aria-disabled", "true");
    
                },
    
                // Select box custom `enable` event with the `selectBoxIt` namespace
                "enable.selectBoxIt" : function() {
    
                    // W3C `aria-disabled` description: Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
                    self.dropdownContainer.attr("aria-disabled", "false");
    
                }
    
            });
    
            if(dropdownLabel.length) {
    
                // MDN `aria-labelledby` description:  Indicates the IDs of the elements that are the labels for the object.
                self.dropdownContainer.attr("aria-labelledby", dropdownLabel[0].id);
    
            }
    
            // Adds ARIA attributes to the dropdown list options list
            self.list.attr({
    
                // W3C `listbox` description: A widget that allows the user to select one or more items from a list of choices.
                "role": "listbox",
    
                // Indicates that the dropdown list options list is currently hidden
                "aria-hidden": "true"
    
            });
    
            // Adds `ARIA attributes` to the dropdown list options
            self.listItems.attr({
    
                // This must be set for each element when the container element role is set to `listbox`
                "role": "option"
    
            });
    
            // Dynamically updates the new dropdown list `aria-label` attribute after the original dropdown list value changes
            self.selectBox.on({
    
                // Custom `open` event with the `selectBoxIt` namespace
                "open.selectBoxIt": function() {
    
                    // Indicates that the dropdown list options list is currently visible
                    self.list.attr("aria-hidden", "false");
    
                    // Indicates that the dropdown list is currently expanded
                    self.dropdownContainer.attr("aria-expanded", "true");
    
                },
    
                // Custom `close` event with the `selectBoxIt` namespace
                "close.selectBoxIt": function() {
    
                    // Indicates that the dropdown list options list is currently hidden
                    self.list.attr("aria-hidden", "true");
    
                    // Indicates that the dropdown list is currently collapsed
                    self.dropdownContainer.attr("aria-expanded", "false");
    
                }
    
            });
    
            // Maintains chainability
            return self;
    
        };
    
        // Copy Attributes Module
        // ======================
    
        // addSelectBoxAttributes
        // ----------------------
        //      Add's all attributes (excluding id, class names, and the style attribute) from the default select box to the new drop down
    
        selectBoxIt._addSelectBoxAttributes = function() {
    
            // Stores the plugin context inside of the self variable
            var self = this;
    
            // Add's all attributes to the currently traversed drop down option
            self._addAttributes(self.selectBox.prop("attributes"), self.dropdown);
    
            // Add's all attributes to the drop down items list
            self.selectItems.each(function(iterator) {
    
                // Add's all attributes to the currently traversed drop down option
                self._addAttributes($(this).prop("attributes"), self.listItems.eq(iterator));
    
            });
    
            // Maintains chainability
            return self;
    
        };
    
        // addAttributes
        // -------------
        //  Add's attributes to a DOM element
        selectBoxIt._addAttributes = function(arr, elem) {
    
            // Stores the plugin context inside of the self variable
            var self = this,
                whitelist = self.options["copyAttributes"];
    
            // If there are array properties
            if(arr.length) {
    
                // Iterates over all of array properties
                $.each(arr, function(iterator, property) {
    
                    // Get's the property name and property value of each property
                    var propName = (property.name).toLowerCase(), propValue = property.value;
    
                    // If the currently traversed property value is not "null", is on the whitelist, or is an HTML 5 data attribute
                    if(propValue !== "null" && ($.inArray(propName, whitelist) !== -1 || propName.indexOf("data") !== -1)) {
    
                        // Set's the currently traversed property on element
                        elem.attr(propName, propValue);
    
                    }
    
                });
    
            }
    
            // Maintains chainability
            return self;
    
        };
    // Destroy Module
    // ==============
    
    // Destroy
    // -------
    //    Removes the plugin from the page
    
    selectBoxIt.destroy = function(callback) {
    
        // Stores the plugin context inside of the self variable
        var self = this;
    
        self._destroySelectBoxIt();
    
        // Calls the jQueryUI Widget Factory destroy method
        self.widgetProto.destroy.call(self);
    
        // Provides callback function support
        self._callbackSupport(callback);
    
        // Maintains chainability
        return self;
    
    };
    
    // Internal Destroy Method
    // -----------------------
    //    Removes the plugin from the page
    
    selectBoxIt._destroySelectBoxIt = function() {
    
        // Stores the plugin context inside of the self variable
        var self = this;
    
        // Unbinds all of the dropdown list event handlers with the `selectBoxIt` namespace
        self.dropdown.off(".selectBoxIt");
    
        // If the original select box has been placed inside of the new drop down container
        if ($.contains(self.dropdownContainer[0], self.originalElem)) {
    
            // Moves the original select box before the drop down container
            self.dropdownContainer.before(self.selectBox);
    
        }
    
        // Remove all of the `selectBoxIt` DOM elements from the page
        self.dropdownContainer.remove();
    
        // Resets the style attributes for the original select box
        self.selectBox.removeAttr("style").attr("style", self.selectBoxStyles);
    
        // Triggers the custom `destroy` event on the original select box
        self.triggerEvent("destroy");
    
        // Maintains chainability
        return self;
    
    };
    
        // Disable Module
        // ==============
    
        // Disable
        // -------
        //      Disables the new dropdown list
    
        selectBoxIt.disable = function(callback) {
    
            var self = this;
    
            if(!self.options["disabled"]) {
    
                // Makes sure the dropdown list is closed
                self.close();
    
                // Sets the `disabled` attribute on the original select box
                self.selectBox.attr("disabled", "disabled");
    
                // Makes the dropdown list not focusable by removing the `tabindex` attribute
                self.dropdown.removeAttr("tabindex").
    
                // Disables styling for enabled state
                removeClass(self.theme["enabled"]).
    
                // Enabled styling for disabled state
                addClass(self.theme["disabled"]);
    
                self.setOption("disabled", true);
    
                // Triggers a `disable` custom event on the original select box
                self.triggerEvent("disable");
    
            }
    
            // Provides callback function support
            self._callbackSupport(callback);
    
            // Maintains chainability
            return self;
    
        };
    
        // Disable Option
        // --------------
        //      Disables a single drop down option
    
        selectBoxIt.disableOption = function(index, callback) {
    
            var self = this, currentSelectBoxOption, hasNextEnabled, hasPreviousEnabled, type = $.type(index);
    
            // If an index is passed to target an indropdownidual drop down option
            if(type === "number") {
    
                // Makes sure the dropdown list is closed
                self.close();
    
                // The select box option being targeted
                currentSelectBoxOption = self.selectBox.find("option").eq(index);
    
                // Triggers a `disable-option` custom event on the original select box and passes the disabled option
                self.triggerEvent("disable-option");
    
                // Disables the targeted select box option
                currentSelectBoxOption.attr("disabled", "disabled");
    
                // Disables the drop down option
                self.listItems.eq(index).attr("data-disabled", "true").
    
                // Applies disabled styling for the drop down option
                addClass(self.theme["disabled"]);
    
                // If the currently selected drop down option is the item being disabled
                if(self.currentFocus === index) {
    
                    hasNextEnabled = self.listItems.eq(self.currentFocus).nextAll("li").not("[data-disabled='true']").first().length;
    
                    hasPreviousEnabled = self.listItems.eq(self.currentFocus).prevAll("li").not("[data-disabled='true']").first().length;
    
                    // If there is a currently enabled option beneath the currently selected option
                    if(hasNextEnabled) {
    
                        // Selects the option beneath the currently selected option
                        self.moveDown();
    
                    }
    
                    // If there is a currently enabled option above the currently selected option
                    else if(hasPreviousEnabled) {
    
                        // Selects the option above the currently selected option
                        self.moveUp();
    
                    }
    
                    // If there is not a currently enabled option
                    else {
    
                        // Disables the entire drop down list
                        self.disable();
    
                    }
    
                }
    
            }
    
            // Provides callback function support
            self._callbackSupport(callback);
    
            // Maintains chainability
            return self;
    
        };
    
        // _Is Disabled
        // -----------
        //      Checks the original select box for the
        //    disabled attribute
    
        selectBoxIt._isDisabled = function(callback) {
    
            var self = this;
    
            // If the original select box is disabled
            if (self.originalElem.disabled) {
    
                // Disables the dropdown list
                self.disable();
    
            }
    
            // Maintains chainability
            return self;
    
        };
    
        // Dynamic Positioning Module
        // ==========================
    
        // _Dynamic positioning
        // --------------------
        //      Dynamically positions the dropdown list options list
    
        selectBoxIt._dynamicPositioning = function() {
    
            var self = this;
    
            // If the `size` option is a number
            if($.type(self.listSize) === "number") {
    
                // Set's the max-height of the drop down list
                self.list.css("max-height", self.maxHeight || "none");
    
            }
    
            // If the `size` option is not a number
            else {
    
                // Returns the x and y coordinates of the dropdown list options list relative to the document
                var listOffsetTop = self.dropdown.offset().top,
    
                    // The height of the dropdown list options list
                    listHeight = self.list.data("max-height") || self.list.outerHeight(),
    
                    // The height of the dropdown list DOM element
                    selectBoxHeight = self.dropdown.outerHeight(),
    
                    viewport = self.options["viewport"],
    
                    viewportHeight = viewport.height(),
    
                    viewportScrollTop = $.isWindow(viewport.get(0)) ? viewport.scrollTop() : viewport.offset().top,
    
                    topToBottom = (listOffsetTop + selectBoxHeight + listHeight <= viewportHeight + viewportScrollTop),
    
                    bottomReached = !topToBottom;
    
                if(!self.list.data("max-height")) {
    
                  self.list.data("max-height", self.list.outerHeight());
    
                }
    
                // If there is room on the bottom of the viewport to display the drop down options
                if (!bottomReached) {
    
                    self.list.css("max-height", listHeight);
    
                    // Sets custom CSS properties to place the dropdown list options directly below the dropdown list
                    self.list.css("top", "auto");
    
                }
    
                // If there is room on the top of the viewport
                else if((self.dropdown.offset().top - viewportScrollTop) >= listHeight) {
    
                    self.list.css("max-height", listHeight);
    
                    // Sets custom CSS properties to place the dropdown list options directly above the dropdown list
                    self.list.css("top", (self.dropdown.position().top - self.list.outerHeight()));
    
                }
    
                // If there is not enough room on the top or the bottom
                else {
    
                    var outsideBottomViewport = Math.abs((listOffsetTop + selectBoxHeight + listHeight) - (viewportHeight + viewportScrollTop)),
    
                        outsideTopViewport = Math.abs((self.dropdown.offset().top - viewportScrollTop) - listHeight);
    
                    // If there is more room on the bottom
                    if(outsideBottomViewport < outsideTopViewport) {
    
                        self.list.css("max-height", listHeight - outsideBottomViewport - (selectBoxHeight/2));
    
                        self.list.css("top", "auto");
    
                    }
    
                    // If there is more room on the top
                    else {
    
                        self.list.css("max-height", listHeight - outsideTopViewport - (selectBoxHeight/2));
    
                        // Sets custom CSS properties to place the dropdown list options directly above the dropdown list
                        self.list.css("top", (self.dropdown.position().top - self.list.outerHeight()));
    
                    }
    
                }
    
            }
    
            // Maintains chainability
            return self;
    
        };
    
        // Enable Module
        // =============
    
        // Enable
        // ------
        //      Enables the new dropdown list
    
        selectBoxIt.enable = function(callback) {
    
            var self = this;
    
            if(self.options["disabled"]) {
    
                // Triggers a `enable` custom event on the original select box
                self.triggerEvent("enable");
    
                // Removes the `disabled` attribute from the original dropdown list
                self.selectBox.removeAttr("disabled");
    
                // Make the dropdown list focusable
                self.dropdown.attr("tabindex", 0).
    
                // Disable styling for disabled state
                removeClass(self.theme["disabled"]).
    
                // Enables styling for enabled state
                addClass(self.theme["enabled"]);
    
                self.setOption("disabled", false);
    
                // Provide callback function support
                self._callbackSupport(callback);
    
            }
    
            // Maintains chainability
            return self;
    
        };
    
        // Enable Option
        // -------------
        //      Disables a single drop down option
    
        selectBoxIt.enableOption = function(index, callback) {
    
            var self = this, currentSelectBoxOption, currentIndex = 0, hasNextEnabled, hasPreviousEnabled, type = $.type(index);
    
            // If an index is passed to target an indropdownidual drop down option
            if(type === "number") {
    
                // The select box option being targeted
                currentSelectBoxOption = self.selectBox.find("option").eq(index);
    
                // Triggers a `enable-option` custom event on the original select box and passes the enabled option
                self.triggerEvent("enable-option");
    
                // Disables the targeted select box option
                currentSelectBoxOption.removeAttr("disabled");
    
                // Disables the drop down option
                self.listItems.eq(index).attr("data-disabled", "false").
    
                // Applies disabled styling for the drop down option
                removeClass(self.theme["disabled"]);
    
            }
    
            // Provides callback function support
            self._callbackSupport(callback);
    
            // Maintains chainability
            return self;
    
        };
    
        // Keyboard Navigation Module
        // ==========================
    
        // Move Down
        // ---------
        //      Handles the down keyboard navigation logic
    
        selectBoxIt.moveDown = function(callback) {
    
            var self = this;
    
            // Increments `currentFocus`, which represents the currently focused list item `id` attribute.
            self.currentFocus += 1;
    
            // Determines whether the dropdown option the user is trying to go to is currently disabled
            var disabled = self.listItems.eq(self.currentFocus).attr("data-disabled") === "true" ? true: false,
    
                hasNextEnabled = self.listItems.eq(self.currentFocus).nextAll("li").not("[data-disabled='true']").first().length;
    
            // If the user has reached the top of the list
            if (self.currentFocus === self.listItems.length) {
    
                // Does not allow the user to continue to go up the list
                self.currentFocus -= 1;
    
            }
    
            // If the option the user is trying to go to is disabled, but there is another enabled option
            else if (disabled && hasNextEnabled) {
    
                // Blur the previously selected option
                self.listItems.eq(self.currentFocus - 1).blur();
    
               // Call the `moveDown` method again
                self.moveDown();
    
                // Exit the method
                return;
    
            }
    
            // If the option the user is trying to go to is disabled, but there is not another enabled option
            else if (disabled && !hasNextEnabled) {
    
                self.currentFocus -= 1;
    
            }
    
            // If the user has not reached the bottom of the unordered list
            else {
    
                // Blurs the previously focused list item
                // The jQuery `end()` method allows you to continue chaining while also using a different selector
                self.listItems.eq(self.currentFocus - 1).blur().end().
    
                // Focuses the currently focused list item
                eq(self.currentFocus).focusin();
    
                // Calls `scrollToView` to make sure the `scrollTop` is correctly updated. The `down` user action
                self._scrollToView("down");
    
                // Triggers the custom `moveDown` event on the original select box
                self.triggerEvent("moveDown");
    
            }
    
            // Provide callback function support
            self._callbackSupport(callback);
    
            // Maintains chainability
            return self;
    
        };
    
        // Move Up
        // ------
        //      Handles the up keyboard navigation logic
        selectBoxIt.moveUp = function(callback) {
    
            var self = this;
    
            // Increments `currentFocus`, which represents the currently focused list item `id` attribute.
            self.currentFocus -= 1;
    
            // Determines whether the dropdown option the user is trying to go to is currently disabled
            var disabled = self.listItems.eq(self.currentFocus).attr("data-disabled") === "true" ? true: false,
    
                hasPreviousEnabled = self.listItems.eq(self.currentFocus).prevAll("li").not("[data-disabled='true']").first().length;
    
            // If the user has reached the top of the list
            if (self.currentFocus === -1) {
    
                // Does not allow the user to continue to go up the list
                self.currentFocus += 1;
    
            }
    
            // If the option the user is trying to go to is disabled and the user is not trying to go up after the user has reached the top of the list
            else if (disabled && hasPreviousEnabled) {
    
                // Blur the previously selected option
                self.listItems.eq(self.currentFocus + 1).blur();
    
                // Call the `moveUp` method again
                self.moveUp();
    
                // Exits the method
                return;
    
            }
    
            else if (disabled && !hasPreviousEnabled) {
    
                self.currentFocus += 1;
    
            }
    
            // If the user has not reached the top of the unordered list
            else {
    
                // Blurs the previously focused list item
                // The jQuery `end()` method allows you to continue chaining while also using a different selector
                self.listItems.eq(this.currentFocus + 1).blur().end().
    
                // Focuses the currently focused list item
                eq(self.currentFocus).focusin();
    
                // Calls `scrollToView` to make sure the `scrollTop` is correctly updated. The `down` user action
                self._scrollToView("up");
    
                // Triggers the custom `moveDown` event on the original select box
                self.triggerEvent("moveUp");
    
            }
    
            // Provide callback function support
            self._callbackSupport(callback);
    
            // Maintains chainability
            return self;
    
        };
    
        // Keyboard Search Module
        // ======================
    
        // _Set Current Search Option
        // -------------------------
        //      Sets the currently selected dropdown list search option
    
        selectBoxIt._setCurrentSearchOption = function(currentOption) {
    
            var self = this;
    
            // Does not change the current option if `showFirstOption` is false and the matched search item is the hidden first option.
            // Otherwise, the current option value is updated
            if ((self.options["aggressiveChange"] || self.options["selectWhenHidden"] || self.listItems.eq(currentOption).is(":visible")) && self.listItems.eq(currentOption).data("disabled") !== true) {
    
                // Calls the `blur` event of the currently selected dropdown list option
                self.listItems.eq(self.currentFocus).blur();
    
                // Sets `currentIndex` to the currently selected dropdown list option
                self.currentIndex = currentOption;
    
                // Sets `currentFocus` to the currently selected dropdown list option
                self.currentFocus = currentOption;
    
                // Focuses the currently selected dropdown list option
                self.listItems.eq(self.currentFocus).focusin();
    
                // Updates the scrollTop so that the currently selected dropdown list option is visible to the user
                self._scrollToView("search");
    
                // Triggers the custom `search` event on the original select box
                self.triggerEvent("search");
    
            }
    
            // Maintains chainability
            return self;
    
        };
    
        // _Search Algorithm
        // -----------------
        //      Uses regular expressions to find text matches
        selectBoxIt._searchAlgorithm = function(currentIndex, alphaNumeric) {
    
            var self = this,
    
                // Boolean to determine if a pattern match exists
                matchExists = false,
    
                // Iteration variable used in the outermost for loop
                x,
    
                // Iteration variable used in the nested for loop
                y,
    
                // Variable used to cache the length of the text array (Small enhancement to speed up traversing)
                arrayLength,
    
                // Variable storing the current search
                currentSearch,
    
                // Variable storing the textArray property
                textArray = self.textArray,
    
                // Variable storing the current text property
                currentText = self.currentText;
    
            // Loops through the text array to find a pattern match
            for (x = currentIndex, arrayLength = textArray.length; x < arrayLength; x += 1) {
    
                currentSearch = textArray[x];
    
                // Nested for loop to help search for a pattern match with the currently traversed array item
                for (y = 0; y < arrayLength; y += 1) {
    
                    // Searches for a match
                    if (textArray[y].search(alphaNumeric) !== -1) {
    
                        // `matchExists` is set to true if there is a match
                        matchExists = true;
    
                        // Exits the nested for loop
                        y = arrayLength;
    
                    }
    
                } // End nested for loop
    
                // If a match does not exist
                if (!matchExists) {
    
                    // Sets the current text to the last entered character
                    self.currentText = self.currentText.charAt(self.currentText.length - 1).
    
                    // Escapes the regular expression to make sure special characters are seen as literal characters instead of special commands
                    replace(/[|()\[{.+*?$\\]/g, "\\$0");
    
                    currentText = self.currentText;
    
                }
    
                // Resets the regular expression with the new value of `self.currentText`
                alphaNumeric = new RegExp(currentText, "gi");
    
                // Searches based on the first letter of the dropdown list options text if the currentText < 3 characters
                if (currentText.length < 3) {
    
                    alphaNumeric = new RegExp(currentText.charAt(0), "gi");
    
                    // If there is a match based on the first character
                    if ((currentSearch.charAt(0).search(alphaNumeric) !== -1)) {
    
                        // Sets properties of that dropdown list option to make it the currently selected option
                        self._setCurrentSearchOption(x);
    
                        if((currentSearch.substring(0, currentText.length).toLowerCase() !== currentText.toLowerCase()) || self.options["similarSearch"]) {
    
                            // Increments the current index by one
                            self.currentIndex += 1;
    
                        }
    
                        // Exits the search
                        return false;
    
                    }
    
                }
    
                // If `self.currentText` > 1 character
                else {
    
                    // If there is a match based on the entire string
                    if ((currentSearch.search(alphaNumeric) !== -1)) {
    
                        // Sets properties of that dropdown list option to make it the currently selected option
                        self._setCurrentSearchOption(x);
    
                        // Exits the search
                        return false;
    
                    }
    
                }
    
                // If the current text search is an exact match
                if (currentSearch.toLowerCase() === self.currentText.toLowerCase()) {
    
                    // Sets properties of that dropdown list option to make it the currently selected option
                    self._setCurrentSearchOption(x);
    
                    // Resets the current text search to a blank string to start fresh again
                    self.currentText = "";
    
                    // Exits the search
                    return false;
    
                }
    
            }
    
           // Returns true if there is not a match at all
            return true;
    
        };
    
        // Search
        // ------
        //      Calls searchAlgorithm()
        selectBoxIt.search = function(alphaNumericKey, callback, rememberPreviousSearch) {
    
            var self = this;
    
            // If the search method is being called internally by the plugin, and not externally as a method by a user
            if (rememberPreviousSearch) {
    
                // Continued search with history from past searches.  Properly escapes the regular expression
                self.currentText += alphaNumericKey.replace(/[|()\[{.+*?$\\]/g, "\\$0");
    
            }
    
            else {
    
                // Brand new search.  Properly escapes the regular expression
                self.currentText = alphaNumericKey.replace(/[|()\[{.+*?$\\]/g, "\\$0");
    
            }
    
            // Searches globally
            var searchResults = self._searchAlgorithm(self.currentIndex, new RegExp(self.currentText, "gi"));
    
            // Searches the list again if a match is not found.  This is needed, because the first search started at the array indece of the currently selected dropdown list option, and does not search the options before the current array indece.
            // If there are many similar dropdown list options, starting the search at the indece of the currently selected dropdown list option is needed to properly traverse the text array.
            if (searchResults) {
    
                // Searches the dropdown list values starting from the beginning of the text array
                self._searchAlgorithm(0, self.currentText);
    
            }
    
            // Provide callback function support
            self._callbackSupport(callback);
    
            // Maintains chainability
            return self;
    
        };
    
        // Mobile Module
        // =============
    
        // Set Mobile Text
        // ---------------
        //      Updates the text of the drop down
        selectBoxIt._updateMobileText = function() {
    
            var self = this,
                currentOption,
                currentDataText,
                currentText;
    
            currentOption = self.selectBox.find("option").filter(":selected");
    
            currentDataText = currentOption.attr("data-text");
    
            currentText = currentDataText ? currentDataText: currentOption.text();
    
            // Sets the new dropdown list text to the value of the original dropdown list
            self._setText(self.dropdownText, currentText);
    
            if(self.list.find('li[data-val="' + currentOption.val() + '"]').find("i").attr("class")) {
    
               self.dropdownImage.attr("class", self.list.find('li[data-val="' + currentOption.val() + '"]').find("i").attr("class")).addClass("selectboxit-default-icon");
    
            }
    
        };
    
        // Apply Native Select
        // -------------------
        //      Applies the original select box directly over the new drop down
    
        selectBoxIt._applyNativeSelect = function() {
    
            // Stores the plugin context inside of the self variable
            var self = this;
    
            // Appends the native select box to the drop down (allows for relative positioning using the position() method)
            self.dropdownContainer.append(self.selectBox);
    
            self.dropdown.attr("tabindex", "-1");
    
            // Positions the original select box directly over top the new dropdown list using position absolute and "hides" the original select box using an opacity of 0.  This allows the mobile browser "wheel" interface for better usability.
            self.selectBox.css({
    
                "display": "block",
    
                "visibility": "visible",
    
                "width": self._realOuterWidth(self.dropdown),
    
                "height": self.dropdown.outerHeight(),
    
                "opacity": "0",
    
                "position": "absolute",
    
                "top": "0",
    
                "left": "0",
    
                "cursor": "pointer",
    
                "z-index": "999999",
    
                "margin": self.dropdown.css("margin"),
    
                "padding": "0",
    
                "-webkit-appearance": "menulist-button"
    
            });
    
            if(self.originalElem.disabled) {
    
                self.triggerEvent("disable");
    
            }
    
            return this;
    
        };
    
        // Mobile Events
        // -------------
        //      Listens to mobile-specific events
        selectBoxIt._mobileEvents = function() {
    
            var self = this;
    
            self.selectBox.on({
    
                "changed.selectBoxIt": function() {
    
                    self.hasChanged = true;
    
                    self._updateMobileText();
    
                    // Triggers the `option-click` event on mobile
                    self.triggerEvent("option-click");
    
                },
    
                "mousedown.selectBoxIt": function() {
    
                    // If the select box has not been changed, the defaultText option is being used
                    if(!self.hasChanged && self.options.defaultText && !self.originalElem.disabled) {
    
                        self._updateMobileText();
    
                        self.triggerEvent("option-click");
    
                    }
    
                },
    
                "enable.selectBoxIt": function() {
    
                    // Moves SelectBoxIt onto the page
                    self.selectBox.removeClass('selectboxit-rendering');
    
                },
    
                "disable.selectBoxIt": function() {
    
                    // Moves SelectBoxIt off the page
                    self.selectBox.addClass('selectboxit-rendering');
    
                }
    
            });
    
        };
    
        // Mobile
        // ------
        //      Applies the native "wheel" interface when a mobile user is interacting with the dropdown
    
        selectBoxIt._mobile = function(callback) {
    
            // Stores the plugin context inside of the self variable
            var self = this;
    
                if(self.isMobile) {
    
                    self._applyNativeSelect();
    
                    self._mobileEvents();
    
                }
    
                // Maintains chainability
                return this;
    
        };
    
        // Remove Options Module
        // =====================
    
        // remove
        // ------
        //    Removes drop down list options
        //    using an index
    
        selectBoxIt.remove = function(indexes, callback) {
    
            var self = this,
                dataType = $.type(indexes),
                value,
                x = 0,
                dataLength,
                elems = "";
    
            // If an array is passed in
            if(dataType === "array") {
    
                // Loops through the array
                for(dataLength = indexes.length; x <= dataLength - 1; x += 1) {
    
                    // Stores the currently traversed array item in the local `value` variable
                    value = indexes[x];
    
                    // If the currently traversed array item is an object literal
                    if($.type(value) === "number") {
    
                        if(elems.length) {
    
                            // Adds an element to the removal string
                            elems += ", option:eq(" + value + ")";
    
                        }
    
                        else {
    
                            // Adds an element to the removal string
                            elems += "option:eq(" + value + ")";
    
                        }
    
                    }
    
                }
    
                // Removes all of the appropriate options from the select box
                self.selectBox.find(elems).remove();
    
            }
    
            // If a number is passed in
            else if(dataType === "number") {
    
                self.selectBox.find("option").eq(indexes).remove();
    
            }
    
            // If anything besides a number or array is passed in
            else {
    
                // Removes all of the options from the original select box
                self.selectBox.find("option").remove();
    
            }
    
            // If the dropdown property exists
            if(self.dropdown) {
    
                // Rebuilds the dropdown
                self.refresh(function() {
    
                    // Provide callback function support
                    self._callbackSupport(callback);
    
                }, true);
    
            } else {
    
                // Provide callback function support
                self._callbackSupport(callback);
    
            }
    
            // Maintains chainability
            return self;
    
        };
    
        // Select Option Module
        // ====================
    
        // Select Option
        // -------------
        //      Programatically selects a drop down option by either index or value
    
        selectBoxIt.selectOption = function(val, callback) {
    
            // Stores the plugin context inside of the self variable
            var self = this,
                type = $.type(val);
    
            // Makes sure the passed in position is a number
            if(type === "number") {
    
                // Set's the original select box value and triggers the change event (which SelectBoxIt listens for)
                self.selectBox.val(self.selectItems.eq(val).val()).change();
    
            }
    
            else if(type === "string") {
    
                // Set's the original select box value and triggers the change event (which SelectBoxIt listens for)
                self.selectBox.val(val).change();
    
            }
    
            // Calls the callback function
            self._callbackSupport(callback);
    
            // Maintains chainability
            return self;
    
        };
    
        // Set Option Module
        // =================
    
        // Set Option
        // ----------
        //      Accepts an string key, a value, and a callback function to replace a single
        //      property of the plugin options object
    
        selectBoxIt.setOption = function(key, value, callback) {
    
            var self = this;
    
            //Makes sure a string is passed in
            if($.type(key) === "string") {
    
                // Sets the plugin option to the new value provided by the user
                self.options[key] = value;
    
            }
    
            // Rebuilds the dropdown
            self.refresh(function() {
    
                // Provide callback function support
                self._callbackSupport(callback);
    
            }, true);
    
            // Maintains chainability
            return self;
    
        };
    
        // Set Options Module
        // ==================
    
        // Set Options
        // ----------
        //      Accepts an object to replace plugin options
        //      properties of the plugin options object
    
        selectBoxIt.setOptions = function(newOptions, callback) {
    
            var self = this;
    
            // If the passed in parameter is an object literal
            if($.isPlainObject(newOptions)) {
    
                self.options = $.extend({}, self.options, newOptions);
    
            }
    
            // Rebuilds the dropdown
            self.refresh(function() {
    
                // Provide callback function support
                self._callbackSupport(callback);
    
            }, true);
    
            // Maintains chainability
            return self;
    
        };
    
        // Wait Module
        // ===========
    
        // Wait
        // ----
        //    Delays execution by the amount of time
        //    specified by the parameter
    
        selectBoxIt.wait = function(time, callback) {
    
            var self = this;
    
            self.widgetProto._delay.call(self, callback, time);
    
            // Maintains chainability
            return self;
    
        };
    })); // End of all modules
    },{}],11:[function(require,module,exports){
    /**
     * @preserve
     * Sharer.js
     *
     * @description Create your own social share buttons
     * @version 0.4.2
     * @author Ellison Leao <ellisonleao@gmail.com>
     * @license GPLv3
     *
     */
    
    (function (window, document) {
      'use strict';
      /**
       * @constructor
       */
      var Sharer = function (elem) {
        this.elem = elem;
      };
    
      /**
       *  @function init
       *  @description bind the events for multiple sharer elements
       *  @returns {Empty}
       */
      Sharer.init = function () {
        var elems = document.querySelectorAll('[data-sharer]'),
          i,
          l = elems.length;
    
        for (i = 0; i < l; i++) {
          elems[i].addEventListener('click', Sharer.add);
        }
      };
    
      /**
       *  @function add
       *  @description bind the share event for a single dom element
       *  @returns {Empty}
       */
      Sharer.add = function (elem) {
        var target = elem.currentTarget || elem.srcElement;
        var sharer = new Sharer(target);
        sharer.share();
      };
    
      // instance methods
      Sharer.prototype = {
        constructor: Sharer,
        /**
         *  @function getValue
         *  @description Helper to get the attribute of a DOM element
         *  @param {String} attr DOM element attribute
         *  @returns {String|Empty} returns the attr value or empty string
         */
        getValue: function (attr) {
          var val = this.elem.getAttribute('data-' + attr);
          // handing facebook hashtag attribute
          if (val && attr === 'hashtag') {
            if (!val.startsWith('#')) {
              val = '#' + val;
            }
          }
          return val;
        },
    
        /**
         * @event share
         * @description Main share event. Will pop a window or redirect to a link
         * based on the data-sharer attribute.
         */
        share: function () {
          var sharer = this.getValue('sharer').toLowerCase(),
            sharers = {
              facebook: {
                shareUrl: 'https://www.facebook.com/sharer/sharer.php',
                params: {
                  u: this.getValue('url'),
                  hashtag: this.getValue('hashtag'),
                  quote: this.getValue('quote'),
                },
              },
              linkedin: {
                shareUrl: 'https://www.linkedin.com/shareArticle',
                params: {
                  url: this.getValue('url'),
                  mini: true,
                },
              },
              twitter: {
                shareUrl: 'https://twitter.com/intent/tweet/',
                params: {
                  text: this.getValue('title'),
                  url: this.getValue('url'),
                  hashtags: this.getValue('hashtags'),
                  via: this.getValue('via'),
                },
              },
              email: {
                shareUrl: 'mailto:' + this.getValue('to') || '',
                params: {
                  subject: this.getValue('subject'),
                  body: this.getValue('title') + '\n' + this.getValue('url'),
                },
                isLink: true,
              },
              whatsapp: {
                shareUrl: this.getValue('web') !== null ? 'https://api.whatsapp.com/send' : 'https://wa.me/',
                params: {
                  text: this.getValue('title') + ' ' + this.getValue('url'),
                },
                isLink: true,
              },
              telegram: {
                shareUrl: this.getValue('web') !== null ? 'https://telegram.me/share' : 'tg://msg_url',
                params: {
                  text: this.getValue('title'),
                  url: this.getValue('url'),
                },
                isLink: true,
              },
              viber: {
                shareUrl: 'viber://forward',
                params: {
                  text: this.getValue('title') + ' ' + this.getValue('url'),
                },
                isLink: true,
              },
              line: {
                shareUrl:
                  'http://line.me/R/msg/text/?' + encodeURIComponent(this.getValue('title') + ' ' + this.getValue('url')),
                isLink: true,
              },
              pinterest: {
                shareUrl: 'https://www.pinterest.com/pin/create/button/',
                params: {
                  url: this.getValue('url'),
                  media: this.getValue('image'),
                  description: this.getValue('description'),
                },
              },
              tumblr: {
                shareUrl: 'http://tumblr.com/widgets/share/tool',
                params: {
                  canonicalUrl: this.getValue('url'),
                  content: this.getValue('url'),
                  posttype: 'link',
                  title: this.getValue('title'),
                  caption: this.getValue('caption'),
                  tags: this.getValue('tags'),
                },
              },
              hackernews: {
                shareUrl: 'https://news.ycombinator.com/submitlink',
                params: {
                  u: this.getValue('url'),
                  t: this.getValue('title'),
                },
              },
              reddit: {
                shareUrl: 'https://www.reddit.com/submit',
                params: { url: this.getValue('url') },
              },
              vk: {
                shareUrl: 'http://vk.com/share.php',
                params: {
                  url: this.getValue('url'),
                  title: this.getValue('title'),
                  description: this.getValue('caption'),
                  image: this.getValue('image'),
                },
              },
              xing: {
                shareUrl: 'https://www.xing.com/social/share/spi',
                params: {
                  url: this.getValue('url'),
                },
              },
              buffer: {
                shareUrl: 'https://buffer.com/add',
                params: {
                  url: this.getValue('url'),
                  title: this.getValue('title'),
                  via: this.getValue('via'),
                  picture: this.getValue('picture'),
                },
              },
              instapaper: {
                shareUrl: 'http://www.instapaper.com/edit',
                params: {
                  url: this.getValue('url'),
                  title: this.getValue('title'),
                  description: this.getValue('description'),
                },
              },
              pocket: {
                shareUrl: 'https://getpocket.com/save',
                params: {
                  url: this.getValue('url'),
                },
              },
              stumbleupon: {
                // Usage deprecated, leaving for backwards compatibility.
                shareUrl: 'http://www.stumbleupon.com/submit',
                params: {
                  url: this.getValue('url'),
                  title: this.getValue('title'),
                },
              },
              mashable: {
                shareUrl: 'https://mashable.com/submit',
                params: {
                  url: this.getValue('url'),
                  title: this.getValue('title'),
                },
              },
              mix: {
                shareUrl: 'https://mix.com/add',
                params: {
                  url: this.getValue('url'),
                },
              },
              flipboard: {
                shareUrl: 'https://share.flipboard.com/bookmarklet/popout',
                params: {
                  v: 2,
                  title: this.getValue('title'),
                  url: this.getValue('url'),
                  t: Date.now(),
                },
              },
              weibo: {
                shareUrl: 'http://service.weibo.com/share/share.php',
                params: {
                  url: this.getValue('url'),
                  title: this.getValue('title'),
                  pic: this.getValue('image'),
                  appkey: this.getValue('appkey'),
                  ralateUid: this.getValue('ralateuid'),
                  language: 'zh_cn',
                },
              },
              renren: {
                shareUrl: 'http://share.renren.com/share/buttonshare',
                params: {
                  link: this.getValue('url'),
                },
              },
              myspace: {
                shareUrl: 'https://myspace.com/post',
                params: {
                  u: this.getValue('url'),
                  t: this.getValue('title'),
                  c: this.getValue('description'),
                },
              },
              blogger: {
                shareUrl: 'https://www.blogger.com/blog-this.g',
                params: {
                  u: this.getValue('url'),
                  n: this.getValue('title'),
                  t: this.getValue('description'),
                },
              },
              baidu: {
                shareUrl: 'http://cang.baidu.com/do/add',
                params: {
                  it: this.getValue('title'),
                  iu: this.getValue('url'),
                },
              },
              douban: {
                shareUrl: 'https://www.douban.com/share/service',
                params: {
                  name: this.getValue('name'),
                  href: this.getValue('url'),
                  image: this.getValue('image'),
                  comment: this.getValue('description'),
                },
              },
              okru: {
                shareUrl: 'https://connect.ok.ru/dk',
                params: {
                  'st.cmd': 'WidgetSharePreview',
                  'st.shareUrl': this.getValue('url'),
                  title: this.getValue('title'),
                },
              },
              mailru: {
                shareUrl: 'http://connect.mail.ru/share',
                params: {
                  share_url: this.getValue('url'),
                  linkname: this.getValue('title'),
                  linknote: this.getValue('description'),
                  type: 'page',
                },
              },
              evernote: {
                shareUrl: 'https://www.evernote.com/clip.action',
                params: {
                  url: this.getValue('url'),
                  title: this.getValue('title'),
                },
              },
              skype: {
                shareUrl: 'https://web.skype.com/share',
                params: {
                  url: this.getValue('url'),
                  title: this.getValue('title'),
                },
              },
              delicious: {
                shareUrl: 'https://del.icio.us/post',
                params: {
                  url: this.getValue('url'),
                  title: this.getValue('title'),
                },
              },
              sms: {
                shareUrl: 'sms://',
                params: {
                  body: this.getValue('body'),
                },
              },
              trello: {
                shareUrl: 'https://trello.com/add-card',
                params: {
                  url: this.getValue('url'),
                  name: this.getValue('title'),
                  desc: this.getValue('description'),
                  mode: 'popup',
                },
              },
              messenger: {
                shareUrl: 'fb-messenger://share',
                params: {
                  link: this.getValue('url'),
                },
              },
              odnoklassniki: {
                shareUrl: 'https://connect.ok.ru/dk',
                params: {
                  st: {
                    cmd: 'WidgetSharePreview',
                    deprecated: 1,
                    shareUrl: this.getValue('url'),
                  },
                },
              },
              meneame: {
                shareUrl: 'https://www.meneame.net/submit',
                params: {
                  url: this.getValue('url'),
                },
              },
              diaspora: {
                shareUrl: 'https://share.diasporafoundation.org',
                params: {
                  title: this.getValue('title'),
                  url: this.getValue('url'),
                },
              },
              googlebookmarks: {
                shareUrl: 'https://www.google.com/bookmarks/mark',
                params: {
                  op: 'edit',
                  bkmk: this.getValue('url'),
                  title: this.getValue('title'),
                },
              },
              qzone: {
                shareUrl: 'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey',
                params: {
                  url: this.getValue('url'),
                },
              },
              refind: {
                shareUrl: 'https://refind.com',
                params: {
                  url: this.getValue('url'),
                },
              },
              surfingbird: {
                shareUrl: 'https://surfingbird.ru/share',
                params: {
                  url: this.getValue('url'),
                  title: this.getValue('title'),
                  description: this.getValue('description'),
                },
              },
              yahoomail: {
                shareUrl: 'http://compose.mail.yahoo.com',
                params: {
                  to: this.getValue('to'),
                  subject: this.getValue('subject'),
                  body: this.getValue('body'),
                },
              },
              wordpress: {
                shareUrl: 'https://wordpress.com/wp-admin/press-this.php',
                params: {
                  u: this.getValue('url'),
                  t: this.getValue('title'),
                  s: this.getValue('title'),
                },
              },
              amazon: {
                shareUrl: 'https://www.amazon.com/gp/wishlist/static-add',
                params: {
                  u: this.getValue('url'),
                  t: this.getValue('title'),
                },
              },
              pinboard: {
                shareUrl: 'https://pinboard.in/add',
                params: {
                  url: this.getValue('url'),
                  title: this.getValue('title'),
                  description: this.getValue('description'),
                },
              },
              threema: {
                shareUrl: 'threema://compose',
                params: {
                  text: this.getValue('text'),
                  id: this.getValue('id'),
                },
              },
              kakaostory: {
                shareUrl: 'https://story.kakao.com/share',
                params: {
                  url: this.getValue('url'),
                },
              },
              yummly: {
                shareUrl: 'http://www.yummly.com/urb/verify',
                params: {
                  url: this.getValue('url'),
                  title: this.getValue('title'),
                  yumtype: 'button',
                },
              },
            },
            s = sharers[sharer];
    
          // custom popups sizes
          if (s) {
            s.width = this.getValue('width');
            s.height = this.getValue('height');
          }
          return s !== undefined ? this.urlSharer(s) : false;
        },
        /**
         * @event urlSharer
         * @param {Object} sharer
         */
        urlSharer: function (sharer) {
          var p = sharer.params || {},
            keys = Object.keys(p),
            i,
            str = keys.length > 0 ? '?' : '';
          for (i = 0; i < keys.length; i++) {
            if (str !== '?') {
              str += '&';
            }
            if (p[keys[i]]) {
              str += keys[i] + '=' + encodeURIComponent(p[keys[i]]);
            }
          }
          sharer.shareUrl += str;
    
          if (!sharer.isLink) {
            var popWidth = sharer.width || 600,
              popHeight = sharer.height || 480,
              left = window.innerWidth / 2 - popWidth / 2 + window.screenX,
              top = window.innerHeight / 2 - popHeight / 2 + window.screenY,
              popParams = 'scrollbars=no, width=' + popWidth + ', height=' + popHeight + ', top=' + top + ', left=' + left,
              newWindow = window.open(sharer.shareUrl, '', popParams);
    
            if (window.focus) {
              newWindow.focus();
            }
          } else {
            window.location.href = sharer.shareUrl;
          }
        },
      };
    
      // adding sharer events on domcontentload
      if (document.readyState === 'complete' || document.readyState !== 'loading') {
        Sharer.init();
      } else {
        document.addEventListener('DOMContentLoaded', Sharer.init);
      }
    
      // exporting sharer for external usage
      window.Sharer = Sharer;
    })(window, document);
    
    },{}],12:[function(require,module,exports){
    !function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Scrollbar=e():t.Scrollbar=e()}(this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=67)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(43))},function(t,e,n){var r=n(0),o=n(51),i=n(3),u=n(29),c=n(56),a=n(76),s=o("wks"),f=r.Symbol,l=a?f:f&&f.withoutSetter||u;t.exports=function(t){return i(s,t)||(c&&i(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(6),o=n(46),i=n(7),u=n(25),c=Object.defineProperty;e.f=r?c:function(t,e,n){if(i(t),e=u(e,!0),i(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(4);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,n){var r=n(2);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(6),o=n(5),i=n(14);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r,o,i,u=n(50),c=n(0),a=n(2),s=n(8),f=n(3),l=n(27),p=n(16),h=c.WeakMap;if(u){var d=new h,v=d.get,y=d.has,m=d.set;r=function(t,e){return m.call(d,t,e),e},o=function(t){return v.call(d,t)||{}},i=function(t){return y.call(d,t)}}else{var g=l("state");p[g]=!0,r=function(t,e){return s(t,g,e),e},o=function(t){return f(t,g)?t[g]:{}},i=function(t){return f(t,g)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(0);t.exports=r},function(t,e,n){var r=n(0),o=n(8),i=n(3),u=n(26),c=n(48),a=n(9),s=a.get,f=a.enforce,l=String(String).split("String");(t.exports=function(t,e,n,c){var a=!!c&&!!c.unsafe,s=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),f(n).source=l.join("string"==typeof e?e:"")),t!==r?(a?!p&&t[e]&&(s=!0):delete t[e],s?t[e]=n:o(t,e,n)):s?t[e]=n:u(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||c(this)}))},function(t,e){t.exports={}},function(t,e,n){var r=n(0),o=n(44).f,i=n(8),u=n(11),c=n(26),a=n(70),s=n(54);t.exports=function(t,e){var n,f,l,p,h,d=t.target,v=t.global,y=t.stat;if(n=v?r:y?r[d]||c(d,{}):(r[d]||{}).prototype)for(f in e){if(p=e[f],l=t.noTargetGet?(h=o(n,f))&&h.value:n[f],!s(v?f:d+(y?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(n,f,p,t)}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(22),o=n(24);t.exports=function(t){return r(o(t))}},function(t,e){t.exports={}},function(t,e,n){var r=n(31),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(16),o=n(2),i=n(3),u=n(5).f,c=n(29),a=n(75),s=c("meta"),f=0,l=Object.isExtensible||function(){return!0},p=function(t){u(t,s,{value:{objectID:"O"+ ++f,weakData:{}}})},h=t.exports={REQUIRED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,s)){if(!l(t))return"F";if(!e)return"E";p(t)}return t[s].objectID},getWeakData:function(t,e){if(!i(t,s)){if(!l(t))return!0;if(!e)return!1;p(t)}return t[s].weakData},onFreeze:function(t){return a&&h.REQUIRED&&l(t)&&!i(t,s)&&p(t),t}};r[s]=!0},function(t,e,n){var r=n(77);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(24);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";var r=n(13),o=n(0),i=n(54),u=n(11),c=n(18),a=n(33),s=n(35),f=n(2),l=n(4),p=n(60),h=n(36),d=n(78);t.exports=function(t,e,n){var v=-1!==t.indexOf("Map"),y=-1!==t.indexOf("Weak"),m=v?"set":"add",g=o[t],b=g&&g.prototype,x=g,w={},S=function(t){var e=b[t];u(b,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(y&&!f(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return y&&!f(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(y&&!f(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(i(t,"function"!=typeof g||!(y||b.forEach&&!l((function(){(new g).entries().next()})))))x=n.getConstructor(e,t,v,m),c.REQUIRED=!0;else if(i(t,!0)){var O=new x,_=O[m](y?{}:-0,1)!=O,E=l((function(){O.has(1)})),T=p((function(t){new g(t)})),A=!y&&l((function(){for(var t=new g,e=5;e--;)t[m](e,e);return!t.has(-0)}));T||((x=e((function(e,n){s(e,x,t);var r=d(new g,e,x);return null!=n&&a(n,r[m],r,v),r}))).prototype=b,b.constructor=x),(E||A)&&(S("delete"),S("has"),v&&S("get")),(A||_)&&S(m),y&&b.clear&&delete b.clear}return w[t]=x,r({global:!0,forced:x!=g},w),h(x,t),y||n.setStrong(x,t,v),x}},function(t,e,n){var r=n(4),o=n(23),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(2);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(0),o=n(8);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(51),o=n(29),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e){t.exports=!1},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(10),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var r=n(7),o=n(55),i=n(17),u=n(19),c=n(57),a=n(59),s=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,e,n,f,l){var p,h,d,v,y,m,g,b=u(e,n,f?2:1);if(l)p=t;else{if("function"!=typeof(h=c(t)))throw TypeError("Target is not iterable");if(o(h)){for(d=0,v=i(t.length);v>d;d++)if((y=f?b(r(g=t[d])[0],g[1]):b(t[d]))&&y instanceof s)return y;return new s(!1)}p=h.call(t)}for(m=p.next;!(g=m.call(p)).done;)if("object"==typeof(y=a(p,b,g.value,f))&&y&&y instanceof s)return y;return new s(!1)}).stop=function(t){return new s(!0,t)}},function(t,e,n){var r={};r[n(1)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},function(t,e,n){var r=n(5).f,o=n(3),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r,o=n(7),i=n(80),u=n(32),c=n(16),a=n(81),s=n(47),f=n(27)("IE_PROTO"),l=function(){},p=function(t){return"<script>"+t+"<\/script>"},h=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}h=r?function(t){t.write(p("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):function(){var t,e=s("iframe");return e.style.display="none",a.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F}();for(var t=u.length;t--;)delete h.prototype[u[t]];return h()};c[f]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(l.prototype=o(t),n=new l,l.prototype=null,n[f]=t):n=h(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(11);t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},function(t,e,n){"use strict";var r=n(13),o=n(82),i=n(65),u=n(61),c=n(36),a=n(8),s=n(11),f=n(1),l=n(28),p=n(12),h=n(64),d=h.IteratorPrototype,v=h.BUGGY_SAFARI_ITERATORS,y=f("iterator"),m=function(){return this};t.exports=function(t,e,n,f,h,g,b){o(n,e,f);var x,w,S,O=function(t){if(t===h&&j)return j;if(!v&&t in T)return T[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},_=e+" Iterator",E=!1,T=t.prototype,A=T[y]||T["@@iterator"]||h&&T[h],j=!v&&A||O(h),P="Array"==e&&T.entries||A;if(P&&(x=i(P.call(new t)),d!==Object.prototype&&x.next&&(l||i(x)===d||(u?u(x,d):"function"!=typeof x[y]&&a(x,y,m)),c(x,_,!0,!0),l&&(p[_]=m))),"values"==h&&A&&"values"!==A.name&&(E=!0,j=function(){return A.call(this)}),l&&!b||T[y]===j||a(T,y,j),p[e]=j,h)if(w={values:O("values"),keys:g?j:O("keys"),entries:O("entries")},b)for(S in w)!v&&!E&&S in T||s(T,S,w[S]);else r({target:e,proto:!0,forced:v||E},w);return w}},function(t,e,n){var r=n(34),o=n(11),i=n(85);r||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,e,n){"use strict";var r=n(86).charAt,o=n(9),i=n(39),u=o.set,c=o.getterFor("String Iterator");i(String,"String",(function(t){u(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,e=c(this),n=e.string,o=e.index;return o>=n.length?{value:void 0,done:!0}:(t=r(n,o),e.index+=t.length,{value:t,done:!1})}))},function(t,e,n){var r=n(0),o=n(87),i=n(88),u=n(8),c=n(1),a=c("iterator"),s=c("toStringTag"),f=i.values;for(var l in o){var p=r[l],h=p&&p.prototype;if(h){if(h[a]!==f)try{u(h,a,f)}catch(t){h[a]=f}if(h[s]||u(h,s,l),o[l])for(var d in i)if(h[d]!==i[d])try{u(h,d,i[d])}catch(t){h[d]=i[d]}}}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(6),o=n(45),i=n(14),u=n(15),c=n(25),a=n(3),s=n(46),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=u(t),e=c(e,!0),s)try{return f(t,e)}catch(t){}if(a(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(6),o=n(4),i=n(47);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(0),o=n(2),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,e,n){var r=n(49),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r=n(0),o=n(26),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r=n(0),o=n(48),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,n){var r=n(28),o=n(49);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.4",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(3),o=n(15),i=n(73).indexOf,u=n(16);t.exports=function(t,e){var n,c=o(t),a=0,s=[];for(n in c)!r(u,n)&&r(c,n)&&s.push(n);for(;e.length>a;)r(c,n=e[a++])&&(~i(s,n)||s.push(n));return s}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(4),o=/#|\.prototype\./,i=function(t,e){var n=c[u(t)];return n==s||n!=a&&("function"==typeof e?r(e):!!e)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,e,n){var r=n(1),o=n(12),i=r("iterator"),u=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||u[i]===t)}},function(t,e,n){var r=n(4);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){var r=n(58),o=n(12),i=n(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(34),o=n(23),i=n(1)("toStringTag"),u="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:u?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},function(t,e,n){var r=n(7);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(1)("iterator"),o=!1;try{var i=0,u={next:function(){return{done:!!i++}},return:function(){o=!0}};u[r]=function(){return this},Array.from(u,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(t){}return n}},function(t,e,n){var r=n(7),o=n(79);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,i){return r(n),o(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},function(t,e,n){"use strict";var r=n(5).f,o=n(37),i=n(38),u=n(19),c=n(35),a=n(33),s=n(39),f=n(84),l=n(6),p=n(18).fastKey,h=n(9),d=h.set,v=h.getterFor;t.exports={getConstructor:function(t,e,n,s){var f=t((function(t,r){c(t,f,e),d(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),l||(t.size=0),null!=r&&a(r,t[s],t,n)})),h=v(e),y=function(t,e,n){var r,o,i=h(t),u=m(t,e);return u?u.value=n:(i.last=u={index:o=p(e,!0),key:e,value:n,previous:r=i.last,next:void 0,removed:!1},i.first||(i.first=u),r&&(r.next=u),l?i.size++:t.size++,"F"!==o&&(i.index[o]=u)),t},m=function(t,e){var n,r=h(t),o=p(e);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==e)return n};return i(f.prototype,{clear:function(){for(var t=h(this),e=t.index,n=t.first;n;)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete e[n.index],n=n.next;t.first=t.last=void 0,l?t.size=0:this.size=0},delete:function(t){var e=h(this),n=m(this,t);if(n){var r=n.next,o=n.previous;delete e.index[n.index],n.removed=!0,o&&(o.next=r),r&&(r.previous=o),e.first==n&&(e.first=r),e.last==n&&(e.last=o),l?e.size--:this.size--}return!!n},forEach:function(t){for(var e,n=h(this),r=u(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:n.first;)for(r(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!m(this,t)}}),i(f.prototype,n?{get:function(t){var e=m(this,t);return e&&e.value},set:function(t,e){return y(this,0===t?0:t,e)}}:{add:function(t){return y(this,t=0===t?0:t,t)}}),l&&r(f.prototype,"size",{get:function(){return h(this).size}}),f},setStrong:function(t,e,n){var r=e+" Iterator",o=v(e),i=v(r);s(t,e,(function(t,e){d(this,{type:r,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=i(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),f(e)}}},function(t,e,n){var r=n(52),o=n(32);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){"use strict";var r,o,i,u=n(65),c=n(8),a=n(3),s=n(1),f=n(28),l=s("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=u(u(i)))!==Object.prototype&&(r=o):p=!0),null==r&&(r={}),f||a(r,l)||c(r,l,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},function(t,e,n){var r=n(3),o=n(20),i=n(27),u=n(83),c=i("IE_PROTO"),a=Object.prototype;t.exports=u?Object.getPrototypeOf:function(t){return t=o(t),r(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){"use strict";(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.a=n}).call(this,n(43))},function(t,e,n){t.exports=n(105)},function(t,e,n){n(69),n(40),n(41),n(42);var r=n(10);t.exports=r.Map},function(t,e,n){"use strict";var r=n(21),o=n(62);t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},function(t,e,n){var r=n(3),o=n(71),i=n(44),u=n(5);t.exports=function(t,e){for(var n=o(e),c=u.f,a=i.f,s=0;s<n.length;s++){var f=n[s];r(t,f)||c(t,f,a(e,f))}}},function(t,e,n){var r=n(30),o=n(72),i=n(53),u=n(7);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(u(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(52),o=n(32).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(15),o=n(17),i=n(74),u=function(t){return function(e,n,u){var c,a=r(e),s=o(a.length),f=i(u,s);if(t&&n!=n){for(;s>f;)if((c=a[f++])!=c)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,e,n){var r=n(31),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e,n){var r=n(4);t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},function(t,e,n){var r=n(56);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(2),o=n(61);t.exports=function(t,e,n){var i,u;return o&&"function"==typeof(i=e.constructor)&&i!==n&&r(u=i.prototype)&&u!==n.prototype&&o(t,u),t}},function(t,e,n){var r=n(2);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,n){var r=n(6),o=n(5),i=n(7),u=n(63);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=u(e),c=r.length,a=0;c>a;)o.f(t,n=r[a++],e[n]);return t}},function(t,e,n){var r=n(30);t.exports=r("document","documentElement")},function(t,e,n){"use strict";var r=n(64).IteratorPrototype,o=n(37),i=n(14),u=n(36),c=n(12),a=function(){return this};t.exports=function(t,e,n){var s=e+" Iterator";return t.prototype=o(r,{next:i(1,n)}),u(t,s,!1,!0),c[s]=a,t}},function(t,e,n){var r=n(4);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,e,n){"use strict";var r=n(30),o=n(5),i=n(1),u=n(6),c=i("species");t.exports=function(t){var e=r(t),n=o.f;u&&e&&!e[c]&&n(e,c,{configurable:!0,get:function(){return this}})}},function(t,e,n){"use strict";var r=n(34),o=n(58);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,e,n){var r=n(31),o=n(24),i=function(t){return function(e,n){var i,u,c=String(o(e)),a=r(n),s=c.length;return a<0||a>=s?t?"":void 0:(i=c.charCodeAt(a))<55296||i>56319||a+1===s||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){"use strict";var r=n(15),o=n(89),i=n(12),u=n(9),c=n(39),a=u.set,s=u.getterFor("Array Iterator");t.exports=c(Array,"Array",(function(t,e){a(this,{type:"Array Iterator",target:r(t),index:0,kind:e})}),(function(){var t=s(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e,n){var r=n(1),o=n(37),i=n(5),u=r("unscopables"),c=Array.prototype;null==c[u]&&i.f(c,u,{configurable:!0,value:o(null)}),t.exports=function(t){c[u][t]=!0}},function(t,e,n){n(91),n(40),n(41),n(42);var r=n(10);t.exports=r.Set},function(t,e,n){"use strict";var r=n(21),o=n(62);t.exports=r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},function(t,e,n){n(40),n(93),n(42);var r=n(10);t.exports=r.WeakMap},function(t,e,n){"use strict";var r,o=n(0),i=n(38),u=n(18),c=n(21),a=n(94),s=n(2),f=n(9).enforce,l=n(50),p=!o.ActiveXObject&&"ActiveXObject"in o,h=Object.isExtensible,d=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},v=t.exports=c("WeakMap",d,a);if(l&&p){r=a.getConstructor(d,"WeakMap",!0),u.REQUIRED=!0;var y=v.prototype,m=y.delete,g=y.has,b=y.get,x=y.set;i(y,{delete:function(t){if(s(t)&&!h(t)){var e=f(this);return e.frozen||(e.frozen=new r),m.call(this,t)||e.frozen.delete(t)}return m.call(this,t)},has:function(t){if(s(t)&&!h(t)){var e=f(this);return e.frozen||(e.frozen=new r),g.call(this,t)||e.frozen.has(t)}return g.call(this,t)},get:function(t){if(s(t)&&!h(t)){var e=f(this);return e.frozen||(e.frozen=new r),g.call(this,t)?b.call(this,t):e.frozen.get(t)}return b.call(this,t)},set:function(t,e){if(s(t)&&!h(t)){var n=f(this);n.frozen||(n.frozen=new r),g.call(this,t)?x.call(this,t,e):n.frozen.set(t,e)}else x.call(this,t,e);return this}})}},function(t,e,n){"use strict";var r=n(38),o=n(18).getWeakData,i=n(7),u=n(2),c=n(35),a=n(33),s=n(95),f=n(3),l=n(9),p=l.set,h=l.getterFor,d=s.find,v=s.findIndex,y=0,m=function(t){return t.frozen||(t.frozen=new g)},g=function(){this.entries=[]},b=function(t,e){return d(t.entries,(function(t){return t[0]===e}))};g.prototype={get:function(t){var e=b(this,t);if(e)return e[1]},has:function(t){return!!b(this,t)},set:function(t,e){var n=b(this,t);n?n[1]=e:this.entries.push([t,e])},delete:function(t){var e=v(this.entries,(function(e){return e[0]===t}));return~e&&this.entries.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,n,s){var l=t((function(t,r){c(t,l,e),p(t,{type:e,id:y++,frozen:void 0}),null!=r&&a(r,t[s],t,n)})),d=h(e),v=function(t,e,n){var r=d(t),u=o(i(e),!0);return!0===u?m(r).set(e,n):u[r.id]=n,t};return r(l.prototype,{delete:function(t){var e=d(this);if(!u(t))return!1;var n=o(t);return!0===n?m(e).delete(t):n&&f(n,e.id)&&delete n[e.id]},has:function(t){var e=d(this);if(!u(t))return!1;var n=o(t);return!0===n?m(e).has(t):n&&f(n,e.id)}}),r(l.prototype,n?{get:function(t){var e=d(this);if(u(t)){var n=o(t);return!0===n?m(e).get(t):n?n[e.id]:void 0}},set:function(t,e){return v(this,t,e)}}:{add:function(t){return v(this,t,!0)}}),l}}},function(t,e,n){var r=n(19),o=n(22),i=n(20),u=n(17),c=n(96),a=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,f=4==t,l=6==t,p=5==t||l;return function(h,d,v,y){for(var m,g,b=i(h),x=o(b),w=r(d,v,3),S=u(x.length),O=0,_=y||c,E=e?_(h,S):n?_(h,0):void 0;S>O;O++)if((p||O in x)&&(g=w(m=x[O],O,b),t))if(e)E[O]=g;else if(g)switch(t){case 3:return!0;case 5:return m;case 6:return O;case 2:a.call(E,m)}else if(f)return!1;return l?-1:s||f?f:E}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},function(t,e,n){var r=n(2),o=n(97),i=n(1)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(23);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){n(41),n(99);var r=n(10);t.exports=r.Array.from},function(t,e,n){var r=n(13),o=n(100);r({target:"Array",stat:!0,forced:!n(60)((function(t){Array.from(t)}))},{from:o})},function(t,e,n){"use strict";var r=n(19),o=n(20),i=n(59),u=n(55),c=n(17),a=n(101),s=n(57);t.exports=function(t){var e,n,f,l,p,h,d=o(t),v="function"==typeof this?this:Array,y=arguments.length,m=y>1?arguments[1]:void 0,g=void 0!==m,b=s(d),x=0;if(g&&(m=r(m,y>2?arguments[2]:void 0,2)),null==b||v==Array&&u(b))for(n=new v(e=c(d.length));e>x;x++)h=g?m(d[x],x):d[x],a(n,x,h);else for(p=(l=b.call(d)).next,n=new v;!(f=p.call(l)).done;x++)h=g?i(l,m,[f.value,x],!0):f.value,a(n,x,h);return n.length=x,n}},function(t,e,n){"use strict";var r=n(25),o=n(5),i=n(14);t.exports=function(t,e,n){var u=r(e);u in t?o.f(t,u,i(0,n)):t[u]=n}},function(t,e,n){n(103);var r=n(10);t.exports=r.Object.assign},function(t,e,n){var r=n(13),o=n(104);r({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},function(t,e,n){"use strict";var r=n(6),o=n(4),i=n(63),u=n(53),c=n(45),a=n(20),s=n(22),f=Object.assign,l=Object.defineProperty;t.exports=!f||o((function(){if(r&&1!==f({b:1},f(l({},"a",{enumerable:!0,get:function(){l(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol();return t[n]=7,"abcdefghijklmnopqrst".split("").forEach((function(t){e[t]=t})),7!=f({},t)[n]||"abcdefghijklmnopqrst"!=i(f({},e)).join("")}))?function(t,e){for(var n=a(t),o=arguments.length,f=1,l=u.f,p=c.f;o>f;)for(var h,d=s(arguments[f++]),v=l?i(d).concat(l(d)):i(d),y=v.length,m=0;y>m;)h=v[m++],r&&!p.call(d,h)||(n[h]=d[h]);return n}:f},function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"keyboardHandler",(function(){return ot})),n.d(r,"mouseHandler",(function(){return it})),n.d(r,"resizeHandler",(function(){return ut})),n.d(r,"selectHandler",(function(){return ct})),n.d(r,"touchHandler",(function(){return at})),n.d(r,"wheelHandler",(function(){return st}));
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},i=function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function u(t,e,n,r){var o,i=arguments.length,u=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(u=(i<3?o(u):i>3?o(e,n,u):o(e,n))||u);return i>3&&u&&Object.defineProperty(e,n,u),u}n(68),n(90),n(92),n(98),n(102);var c=/\s/,a=/^\s+/,s=function(t){return t?t.slice(0,function(t){for(var e=t.length;e--&&c.test(t.charAt(e)););return e}(t)+1).replace(a,""):t},f=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},l=n(66),p="object"==typeof self&&self&&self.Object===Object&&self,h=l.a||p||Function("return this")(),d=h.Symbol,v=Object.prototype,y=v.hasOwnProperty,m=v.toString,g=d?d.toStringTag:void 0,b=Object.prototype.toString,x=d?d.toStringTag:void 0,w=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":x&&x in Object(t)?function(t){var e=y.call(t,g),n=t[g];try{t[g]=void 0;var r=!0}catch(t){}var o=m.call(t);return r&&(e?t[g]=n:delete t[g]),o}(t):function(t){return b.call(t)}(t)},S=/^[-+]0x[0-9a-f]+$/i,O=/^0b[01]+$/i,_=/^0o[0-7]+$/i,E=parseInt,T=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return null!=t&&"object"==typeof t}(t)&&"[object Symbol]"==w(t)}(t))return NaN;if(f(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=f(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=s(t);var n=O.test(t);return n||_.test(t)?E(t.slice(2),n?2:8):S.test(t)?NaN:+t},A=function(t,e,n){return void 0===n&&(n=e,e=void 0),void 0!==n&&(n=(n=T(n))==n?n:0),void 0!==e&&(e=(e=T(e))==e?e:0),function(t,e,n){return t==t&&(void 0!==n&&(t=t<=n?t:n),void 0!==e&&(t=t>=e?t:e)),t}(T(t),e,n)};function j(t,e){return void 0===t&&(t=-1/0),void 0===e&&(e=1/0),function(n,r){var o="_"+r;Object.defineProperty(n,r,{get:function(){return this[o]},set:function(n){Object.defineProperty(this,o,{value:A(n,t,e),enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}}function P(t,e){var n="_"+e;Object.defineProperty(t,e,{get:function(){return this[n]},set:function(t){Object.defineProperty(this,n,{value:!!t,enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}var M=function(){return h.Date.now()},k=Math.max,z=Math.min,D=function(t,e,n){var r,o,i,u,c,a,s=0,l=!1,p=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function d(e){var n=r,i=o;return r=o=void 0,s=e,u=t.apply(i,n)}function v(t){var n=t-a;return void 0===a||n>=e||n<0||p&&t-s>=i}function y(){var t=M();if(v(t))return m(t);c=setTimeout(y,function(t){var n=e-(t-a);return p?z(n,i-(t-s)):n}(t))}function m(t){return c=void 0,h&&r?d(t):(r=o=void 0,u)}function g(){var t=M(),n=v(t);if(r=arguments,o=this,a=t,n){if(void 0===c)return function(t){return s=t,c=setTimeout(y,e),l?d(t):u}(a);if(p)return clearTimeout(c),c=setTimeout(y,e),d(a)}return void 0===c&&(c=setTimeout(y,e)),u}return e=T(e)||0,f(n)&&(l=!!n.leading,i=(p="maxWait"in n)?k(T(n.maxWait)||0,e):i,h="trailing"in n?!!n.trailing:h),g.cancel=function(){void 0!==c&&clearTimeout(c),s=0,r=a=o=c=void 0},g.flush=function(){return void 0===c?u:m(M())},g};function L(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(e,n,r){var o=r.value;return{get:function(){return this.hasOwnProperty(n)||Object.defineProperty(this,n,{value:D.apply(void 0,function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],u=0,c=i.length;u<c;u++,o++)r[o]=i[u];return r}([o],t))}),this[n]}}}}var I,C=function(){function t(t){var e=this;void 0===t&&(t={}),this.damping=.1,this.thumbMinSize=20,this.renderByPixels=!0,this.alwaysShowTracks=!1,this.continuousScrolling=!0,this.delegateTo=null,this.plugins={},Object.keys(t).forEach((function(n){e[n]=t[n]}))}return Object.defineProperty(t.prototype,"wheelEventTarget",{get:function(){return this.delegateTo},set:function(t){console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."),this.delegateTo=t},enumerable:!0,configurable:!0}),u([j(0,1)],t.prototype,"damping",void 0),u([j(0,1/0)],t.prototype,"thumbMinSize",void 0),u([P],t.prototype,"renderByPixels",void 0),u([P],t.prototype,"alwaysShowTracks",void 0),u([P],t.prototype,"continuousScrolling",void 0),t}(),N=new WeakMap;function R(){if(void 0!==I)return I;var t=!1;try{var e=function(){},n=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassive",e,n),window.removeEventListener("testPassive",e,n)}catch(t){}return I=!!t&&{passive:!1}}function F(t){var e=N.get(t)||[];return N.set(t,e),function(t,n,r){function o(t){t.defaultPrevented||r(t)}n.split(/\s+/g).forEach((function(n){e.push({elem:t,eventName:n,handler:o}),t.addEventListener(n,o,R())}))}}function H(t){var e=function(t){return t.touches?t.touches[t.touches.length-1]:t}(t);return{x:e.clientX,y:e.clientY}}function W(t,e){return void 0===e&&(e=[]),e.some((function(e){return t===e}))}var B=["webkit","moz","ms","o"],G=new RegExp("^-(?!(?:"+B.join("|")+")-)");function U(t,e){e=function(t){var e={};return Object.keys(t).forEach((function(n){if(G.test(n)){var r=t[n];n=n.replace(/^-/,""),e[n]=r,B.forEach((function(t){e["-"+t+"-"+n]=r}))}else e[n]=t[n]})),e}(e),Object.keys(e).forEach((function(n){var r=n.replace(/^-/,"").replace(/-([a-z])/g,(function(t,e){return e.toUpperCase()}));t.style[r]=e[n]}))}var X,V=function(){function t(t){this.updateTime=Date.now(),this.delta={x:0,y:0},this.velocity={x:0,y:0},this.lastPosition={x:0,y:0},this.lastPosition=H(t)}return t.prototype.update=function(t){var e=this.velocity,n=this.updateTime,r=this.lastPosition,o=Date.now(),i=H(t),u={x:-(i.x-r.x),y:-(i.y-r.y)},c=o-n||16,a=u.x/c*16,s=u.y/c*16;e.x=.9*a+.1*e.x,e.y=.9*s+.1*e.y,this.delta=u,this.updateTime=o,this.lastPosition=i},t}(),Y=function(){function t(){this._touchList={}}return Object.defineProperty(t.prototype,"_primitiveValue",{get:function(){return{x:0,y:0}},enumerable:!0,configurable:!0}),t.prototype.isActive=function(){return void 0!==this._activeTouchID},t.prototype.getDelta=function(){var t=this._getActiveTracker();return t?i({},t.delta):this._primitiveValue},t.prototype.getVelocity=function(){var t=this._getActiveTracker();return t?i({},t.velocity):this._primitiveValue},t.prototype.track=function(t){var e=this,n=t.targetTouches;return Array.from(n).forEach((function(t){e._add(t)})),this._touchList},t.prototype.update=function(t){var e=this,n=t.touches,r=t.changedTouches;return Array.from(n).forEach((function(t){e._renew(t)})),this._setActiveID(r),this._touchList},t.prototype.release=function(t){var e=this;delete this._activeTouchID,Array.from(t.changedTouches).forEach((function(t){e._delete(t)}))},t.prototype._add=function(t){if(!this._has(t)){var e=new V(t);this._touchList[t.identifier]=e}},t.prototype._renew=function(t){this._has(t)&&this._touchList[t.identifier].update(t)},t.prototype._delete=function(t){delete this._touchList[t.identifier]},t.prototype._has=function(t){return this._touchList.hasOwnProperty(t.identifier)},t.prototype._setActiveID=function(t){this._activeTouchID=t[t.length-1].identifier},t.prototype._getActiveTracker=function(){return this._touchList[this._activeTouchID]},t}();!function(t){t.X="x",t.Y="y"}(X||(X={}));var q=function(){function t(t,e){void 0===e&&(e=0),this._direction=t,this._minSize=e,this.element=document.createElement("div"),this.displaySize=0,this.realSize=0,this.offset=0,this.element.className="scrollbar-thumb scrollbar-thumb-"+t}return t.prototype.attachTo=function(t){t.appendChild(this.element)},t.prototype.update=function(t,e,n){this.realSize=Math.min(e/n,1)*e,this.displaySize=Math.max(this.realSize,this._minSize),this.offset=t/n*(e+(this.realSize-this.displaySize)),U(this.element,this._getStyle())},t.prototype._getStyle=function(){switch(this._direction){case X.X:return{width:this.displaySize+"px","-transform":"translate3d("+this.offset+"px, 0, 0)"};case X.Y:return{height:this.displaySize+"px","-transform":"translate3d(0, "+this.offset+"px, 0)"};default:return null}},t}(),K=function(){function t(t,e){void 0===e&&(e=0),this.element=document.createElement("div"),this._isShown=!1,this.element.className="scrollbar-track scrollbar-track-"+t,this.thumb=new q(t,e),this.thumb.attachTo(this.element)}return t.prototype.attachTo=function(t){t.appendChild(this.element)},t.prototype.show=function(){this._isShown||(this._isShown=!0,this.element.classList.add("show"))},t.prototype.hide=function(){this._isShown&&(this._isShown=!1,this.element.classList.remove("show"))},t.prototype.update=function(t,e,n){U(this.element,{display:n<=e?"none":"block"}),this.thumb.update(t,e,n)},t}(),Q=function(){function t(t){this._scrollbar=t;var e=t.options.thumbMinSize;this.xAxis=new K(X.X,e),this.yAxis=new K(X.Y,e),this.xAxis.attachTo(t.containerEl),this.yAxis.attachTo(t.containerEl),t.options.alwaysShowTracks&&(this.xAxis.show(),this.yAxis.show())}return t.prototype.update=function(){var t=this._scrollbar,e=t.size,n=t.offset;this.xAxis.update(n.x,e.container.width,e.content.width),this.yAxis.update(n.y,e.container.height,e.content.height)},t.prototype.autoHideOnIdle=function(){this._scrollbar.options.alwaysShowTracks||(this.xAxis.hide(),this.yAxis.hide())},u([L(300)],t.prototype,"autoHideOnIdle",null),t}(),$=new WeakMap;function J(t){return Math.pow(t-1,3)+1}var Z,tt,et,nt=function(){function t(t,e){var n=this.constructor;this.scrollbar=t,this.name=n.pluginName,this.options=i(i({},n.defaultOptions),e)}return t.prototype.onInit=function(){},t.prototype.onDestroy=function(){},t.prototype.onUpdate=function(){},t.prototype.onRender=function(t){},t.prototype.transformDelta=function(t,e){return i({},t)},t.pluginName="",t.defaultOptions={},t}(),rt={order:new Set,constructors:{}};function ot(t){var e=F(t),n=t.containerEl;e(n,"keydown",(function(e){var r=document.activeElement;if((r===n||n.contains(r))&&!function(t){return!("INPUT"!==t.tagName&&"SELECT"!==t.tagName&&"TEXTAREA"!==t.tagName&&!t.isContentEditable)&&!t.disabled}(r)){var o=function(t,e){var n=t.size,r=t.limit,o=t.offset;switch(e){case Z.TAB:return function(t){requestAnimationFrame((function(){t.scrollIntoView(document.activeElement,{offsetTop:t.size.container.height/2,onlyScrollIfNeeded:!0})}))}(t);case Z.SPACE:return[0,200];case Z.PAGE_UP:return[0,40-n.container.height];case Z.PAGE_DOWN:return[0,n.container.height-40];case Z.END:return[0,r.y-o.y];case Z.HOME:return[0,-o.y];case Z.LEFT:return[-40,0];case Z.UP:return[0,-40];case Z.RIGHT:return[40,0];case Z.DOWN:return[0,40];default:return null}}(t,e.keyCode||e.which);if(o){var i=o[0],u=o[1];t.addTransformableMomentum(i,u,e,(function(n){n?e.preventDefault():(t.containerEl.blur(),t.parent&&t.parent.containerEl.focus())}))}}}))}function it(t){var e,n,r,o,i,u=F(t),c=t.containerEl,a=t.track,s=a.xAxis,f=a.yAxis;function l(e,n){var r=t.size;return e===tt.X?n/(r.container.width+(s.thumb.realSize-s.thumb.displaySize))*r.content.width:e===tt.Y?n/(r.container.height+(f.thumb.realSize-f.thumb.displaySize))*r.content.height:0}function p(t){return W(t,[s.element,s.thumb.element])?tt.X:W(t,[f.element,f.thumb.element])?tt.Y:void 0}u(c,"click",(function(e){if(!n&&W(e.target,[s.element,f.element])){var r=e.target,o=p(r),i=r.getBoundingClientRect(),u=H(e),c=t.offset,a=t.limit;if(o===tt.X){var h=u.x-i.left-s.thumb.displaySize/2;t.setMomentum(A(l(o,h)-c.x,-c.x,a.x-c.x),0)}o===tt.Y&&(h=u.y-i.top-f.thumb.displaySize/2,t.setMomentum(0,A(l(o,h)-c.y,-c.y,a.y-c.y)))}})),u(c,"mousedown",(function(n){if(W(n.target,[s.thumb.element,f.thumb.element])){e=!0;var u=n.target,a=H(n),l=u.getBoundingClientRect();o=p(u),r={x:a.x-l.left,y:a.y-l.top},i=c.getBoundingClientRect(),U(t.containerEl,{"-user-select":"none"})}})),u(window,"mousemove",(function(u){if(e){n=!0;var c=t.offset,a=H(u);if(o===tt.X){var s=a.x-r.x-i.left;t.setPosition(l(o,s),c.y)}o===tt.Y&&(s=a.y-r.y-i.top,t.setPosition(c.x,l(o,s)))}})),u(window,"mouseup blur",(function(){e=n=!1,U(t.containerEl,{"-user-select":""})}))}function ut(t){F(t)(window,"resize",D(t.update.bind(t),300))}function ct(t){var e,n=F(t),r=t.containerEl,o=t.contentEl,i=!1;n(window,"mousemove",(function(n){i&&(cancelAnimationFrame(e),function n(r){var o=r.x,i=r.y;if(o||i){var u=t.offset,c=t.limit;t.setMomentum(A(u.x+o,0,c.x)-u.x,A(u.y+i,0,c.y)-u.y),e=requestAnimationFrame((function(){n({x:o,y:i})}))}}(function(t,e){var n=t.bounding,r=n.top,o=n.right,i=n.bottom,u=n.left,c=H(e),a=c.x,s=c.y,f={x:0,y:0};return 0===a&&0===s||(a>o-20?f.x=a-o+20:a<u+20&&(f.x=a-u-20),s>i-20?f.y=s-i+20:s<r+20&&(f.y=s-r-20),f.x*=2,f.y*=2),f}(t,n)))})),n(o,"selectstart",(function(t){t.stopPropagation(),cancelAnimationFrame(e),i=!0})),n(window,"mouseup blur",(function(){cancelAnimationFrame(e),i=!1})),n(r,"scroll",(function(t){t.preventDefault(),r.scrollTop=r.scrollLeft=0}))}function at(t){var e,n=/Android/.test(navigator.userAgent)?3:2,r=t.options.delegateTo||t.containerEl,o=new Y,i=F(t),u=0;i(r,"touchstart",(function(n){o.track(n),t.setMomentum(0,0),0===u&&(e=t.options.damping,t.options.damping=Math.max(e,.5)),u++})),i(r,"touchmove",(function(e){if(!et||et===t){o.update(e);var n=o.getDelta(),r=n.x,i=n.y;t.addTransformableMomentum(r,i,e,(function(n){n&&e.cancelable&&(e.preventDefault(),et=t)}))}})),i(r,"touchcancel touchend",(function(r){var i=o.getVelocity(),c={x:0,y:0};Object.keys(i).forEach((function(t){var r=i[t]/e;c[t]=Math.abs(r)<50?0:r*n})),t.addTransformableMomentum(c.x,c.y,r),0==--u&&(t.options.damping=e),o.release(r),et=null}))}function st(t){F(t)(t.options.delegateTo||t.containerEl,"onwheel"in window||document.implementation.hasFeature("Events.wheel","3.0")?"wheel":"mousewheel",(function(e){var n=function(t){if("deltaX"in t){var e=pt(t.deltaMode);return{x:t.deltaX/ft.STANDARD*e,y:t.deltaY/ft.STANDARD*e}}return"wheelDeltaX"in t?{x:t.wheelDeltaX/ft.OTHERS,y:t.wheelDeltaY/ft.OTHERS}:{x:0,y:t.wheelDelta/ft.OTHERS}}(e),r=n.x,o=n.y;t.addTransformableMomentum(r,o,e,(function(t){t&&e.preventDefault()}))}))}!function(t){t[t.TAB=9]="TAB",t[t.SPACE=32]="SPACE",t[t.PAGE_UP=33]="PAGE_UP",t[t.PAGE_DOWN=34]="PAGE_DOWN",t[t.END=35]="END",t[t.HOME=36]="HOME",t[t.LEFT=37]="LEFT",t[t.UP=38]="UP",t[t.RIGHT=39]="RIGHT",t[t.DOWN=40]="DOWN"}(Z||(Z={})),function(t){t[t.X=0]="X",t[t.Y=1]="Y"}(tt||(tt={}));var ft={STANDARD:1,OTHERS:-3},lt=[1,28,500],pt=function(t){return lt[t]||lt[0]},ht=new Map,dt=function(){function t(t,e){var n=this;this.offset={x:0,y:0},this.limit={x:1/0,y:1/0},this.bounding={top:0,right:0,bottom:0,left:0},this._plugins=[],this._momentum={x:0,y:0},this._listeners=new Set,this.containerEl=t;var r=this.contentEl=document.createElement("div");this.options=new C(e),t.setAttribute("data-scrollbar","true"),t.setAttribute("tabindex","-1"),U(t,{overflow:"hidden",outline:"none"}),window.navigator.msPointerEnabled&&(t.style.msTouchAction="none"),r.className="scroll-content",Array.from(t.childNodes).forEach((function(t){r.appendChild(t)})),t.appendChild(r),this.track=new Q(this),this.size=this.getSize(),this._plugins=function(t,e){return Array.from(rt.order).filter((function(t){return!1!==e[t]})).map((function(n){var r=new(0,rt.constructors[n])(t,e[n]);return e[n]=r.options,r}))}(this,this.options.plugins);var o=t.scrollLeft,i=t.scrollTop;t.scrollLeft=t.scrollTop=0,this.setPosition(o,i,{withoutCallbacks:!0});var u=window,c=u.MutationObserver||u.WebKitMutationObserver||u.MozMutationObserver;"function"==typeof c&&(this._observer=new c((function(){n.update()})),this._observer.observe(r,{subtree:!0,childList:!0})),ht.set(t,this),requestAnimationFrame((function(){n._init()}))}return Object.defineProperty(t.prototype,"parent",{get:function(){for(var t=this.containerEl.parentElement;t;){var e=ht.get(t);if(e)return e;t=t.parentElement}return null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scrollTop",{get:function(){return this.offset.y},set:function(t){this.setPosition(this.scrollLeft,t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scrollLeft",{get:function(){return this.offset.x},set:function(t){this.setPosition(t,this.scrollTop)},enumerable:!0,configurable:!0}),t.prototype.getSize=function(){return function(t){var e=t.containerEl,n=t.contentEl,r=getComputedStyle(e),o=["paddingTop","paddingBottom","paddingLeft","paddingRight"].map((function(t){return r[t]?parseFloat(r[t]):0})),i=o[0]+o[1],u=o[2]+o[3];return{container:{width:e.clientWidth,height:e.clientHeight},content:{width:n.offsetWidth-n.clientWidth+n.scrollWidth+u,height:n.offsetHeight-n.clientHeight+n.scrollHeight+i}}}(this)},t.prototype.update=function(){!function(t){var e=t.getSize(),n={x:Math.max(e.content.width-e.container.width,0),y:Math.max(e.content.height-e.container.height,0)},r=t.containerEl.getBoundingClientRect(),o={top:Math.max(r.top,0),right:Math.min(r.right,window.innerWidth),bottom:Math.min(r.bottom,window.innerHeight),left:Math.max(r.left,0)};t.size=e,t.limit=n,t.bounding=o,t.track.update(),t.setPosition()}(this),this._plugins.forEach((function(t){t.onUpdate()}))},t.prototype.isVisible=function(t){return function(t,e){var n=t.bounding,r=e.getBoundingClientRect(),o=Math.max(n.top,r.top),i=Math.max(n.left,r.left),u=Math.min(n.right,r.right);return o<Math.min(n.bottom,r.bottom)&&i<u}(this,t)},t.prototype.setPosition=function(t,e,n){var r=this;void 0===t&&(t=this.offset.x),void 0===e&&(e=this.offset.y),void 0===n&&(n={});var o=function(t,e,n){var r=t.options,o=t.offset,u=t.limit,c=t.track,a=t.contentEl;return r.renderByPixels&&(e=Math.round(e),n=Math.round(n)),e=A(e,0,u.x),n=A(n,0,u.y),e!==o.x&&c.xAxis.show(),n!==o.y&&c.yAxis.show(),r.alwaysShowTracks||c.autoHideOnIdle(),e===o.x&&n===o.y?null:(o.x=e,o.y=n,U(a,{"-transform":"translate3d("+-e+"px, "+-n+"px, 0)"}),c.update(),{offset:i({},o),limit:i({},u)})}(this,t,e);o&&!n.withoutCallbacks&&this._listeners.forEach((function(t){t.call(r,o)}))},t.prototype.scrollTo=function(t,e,n,r){void 0===t&&(t=this.offset.x),void 0===e&&(e=this.offset.y),void 0===n&&(n=0),void 0===r&&(r={}),function(t,e,n,r,o){void 0===r&&(r=0);var i=void 0===o?{}:o,u=i.easing,c=void 0===u?J:u,a=i.callback,s=t.options,f=t.offset,l=t.limit;s.renderByPixels&&(e=Math.round(e),n=Math.round(n));var p=f.x,h=f.y,d=A(e,0,l.x)-p,v=A(n,0,l.y)-h,y=Date.now();cancelAnimationFrame($.get(t)),function e(){var n=Date.now()-y,o=r?c(Math.min(n/r,1)):1;if(t.setPosition(p+d*o,h+v*o),n>=r)"function"==typeof a&&a.call(t);else{var i=requestAnimationFrame(e);$.set(t,i)}}()}(this,t,e,n,r)},t.prototype.scrollIntoView=function(t,e){void 0===e&&(e={}),function(t,e,n){var r=void 0===n?{}:n,o=r.alignToTop,i=void 0===o||o,u=r.onlyScrollIfNeeded,c=void 0!==u&&u,a=r.offsetTop,s=void 0===a?0:a,f=r.offsetLeft,l=void 0===f?0:f,p=r.offsetBottom,h=void 0===p?0:p,d=t.containerEl,v=t.bounding,y=t.offset,m=t.limit;if(e&&d.contains(e)){var g=e.getBoundingClientRect();if(!c||!t.isVisible(e)){var b=i?g.top-v.top-s:g.bottom-v.bottom+h;t.setMomentum(g.left-v.left-l,A(b,-y.y,m.y-y.y))}}}(this,t,e)},t.prototype.addListener=function(t){if("function"!=typeof t)throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");this._listeners.add(t)},t.prototype.removeListener=function(t){this._listeners.delete(t)},t.prototype.addTransformableMomentum=function(t,e,n,r){this._updateDebounced();var o=this._plugins.reduce((function(t,e){return e.transformDelta(t,n)||t}),{x:t,y:e}),i=!this._shouldPropagateMomentum(o.x,o.y);i&&this.addMomentum(o.x,o.y),r&&r.call(this,i)},t.prototype.addMomentum=function(t,e){this.setMomentum(this._momentum.x+t,this._momentum.y+e)},t.prototype.setMomentum=function(t,e){0===this.limit.x&&(t=0),0===this.limit.y&&(e=0),this.options.renderByPixels&&(t=Math.round(t),e=Math.round(e)),this._momentum.x=t,this._momentum.y=e},t.prototype.updatePluginOptions=function(t,e){this._plugins.forEach((function(n){n.name===t&&Object.assign(n.options,e)}))},t.prototype.destroy=function(){var t=this.containerEl,e=this.contentEl;!function(t){var e=N.get(t);e&&(e.forEach((function(t){var e=t.elem,n=t.eventName,r=t.handler;e.removeEventListener(n,r,R())})),N.delete(t))}(this),this._listeners.clear(),this.setMomentum(0,0),cancelAnimationFrame(this._renderID),this._observer&&this._observer.disconnect(),ht.delete(this.containerEl);for(var n=Array.from(e.childNodes);t.firstChild;)t.removeChild(t.firstChild);n.forEach((function(e){t.appendChild(e)})),U(t,{overflow:""}),t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,this._plugins.forEach((function(t){t.onDestroy()})),this._plugins.length=0},t.prototype._init=function(){var t=this;this.update(),Object.keys(r).forEach((function(e){r[e](t)})),this._plugins.forEach((function(t){t.onInit()})),this._render()},t.prototype._updateDebounced=function(){this.update()},t.prototype._shouldPropagateMomentum=function(t,e){void 0===t&&(t=0),void 0===e&&(e=0);var n=this.options,r=this.offset,o=this.limit;if(!n.continuousScrolling)return!1;0===o.x&&0===o.y&&this._updateDebounced();var i=A(t+r.x,0,o.x),u=A(e+r.y,0,o.y),c=!0;return(c=(c=c&&i===r.x)&&u===r.y)&&(r.x===o.x||0===r.x||r.y===o.y||0===r.y)},t.prototype._render=function(){var t=this._momentum;if(t.x||t.y){var e=this._nextTick("x"),n=this._nextTick("y");t.x=e.momentum,t.y=n.momentum,this.setPosition(e.position,n.position)}var r=i({},this._momentum);this._plugins.forEach((function(t){t.onRender(r)})),this._renderID=requestAnimationFrame(this._render.bind(this))},t.prototype._nextTick=function(t){var e=this.options,n=this.offset,r=this._momentum,o=n[t],i=r[t];if(Math.abs(i)<=.1)return{momentum:0,position:o+i};var u=i*(1-e.damping);return e.renderByPixels&&(u|=0),{momentum:u,position:o+i-u}},u([L(100,{leading:!0})],t.prototype,"_updateDebounced",null),t}(),vt="smooth-scrollbar-style",yt=!1;function mt(){if(!yt&&"undefined"!=typeof window){var t=document.createElement("style");t.id=vt,t.textContent="\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: rgba(222, 222, 222, .75);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: rgba(0, 0, 0, .5);\n  border-radius: 4px;\n}\n",document.head&&document.head.appendChild(t),yt=!0}}n.d(e,"ScrollbarPlugin",(function(){return nt}));
    /*!
     * cast `I.Scrollbar` to `Scrollbar` to avoid error
     *
     * `I.Scrollbar` is not assignable to `Scrollbar`:
     *     "privateProp" is missing in `I.Scrollbar`
     *
     * @see https://github.com/Microsoft/TypeScript/issues/2672
     */
    var gt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.init=function(t,e){if(!t||1!==t.nodeType)throw new TypeError("expect element to be DOM Element, but got "+t);return mt(),ht.has(t)?ht.get(t):new dt(t,e)},e.initAll=function(t){return Array.from(document.querySelectorAll("[data-scrollbar]"),(function(n){return e.init(n,t)}))},e.has=function(t){return ht.has(t)},e.get=function(t){return ht.get(t)},e.getAll=function(){return Array.from(ht.values())},e.destroy=function(t){var e=ht.get(t);e&&e.destroy()},e.destroyAll=function(){ht.forEach((function(t){t.destroy()}))},e.use=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];t.forEach((function(t){var e=t.pluginName;if(!e)throw new TypeError("plugin name is required");rt.order.add(e),rt.constructors[e]=t}))}.apply(void 0,t)},e.attachStyle=function(){return mt()},e.detachStyle=function(){return function(){if(yt&&"undefined"!=typeof window){var t=document.getElementById(vt);t&&t.parentNode&&(t.parentNode.removeChild(t),yt=!1)}}()},e.version="8.6.3",e.ScrollbarPlugin=nt,e}(dt);e.default=gt}]).default}));
    },{}],13:[function(require,module,exports){
    /**
     * Swiper 7.0.5
     * Most modern mobile touch slider and framework with hardware accelerated transitions
     * https://swiperjs.com
     *
     * Copyright 2014-2021 Vladimir Kharlampidi
     *
     * Released under the MIT License
     *
     * Released on: September 9, 2021
     */
    
    (function (global, factory) {
        typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
        (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Swiper = factory());
    }(this, (function () { 'use strict';
    
        /**
         * SSR Window 4.0.0
         * Better handling for window object in SSR environment
         * https://github.com/nolimits4web/ssr-window
         *
         * Copyright 2021, Vladimir Kharlampidi
         *
         * Licensed under MIT
         *
         * Released on: August 25, 2021
         */
    
        /* eslint-disable no-param-reassign */
        function isObject$1(obj) {
          return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
        }
    
        function extend$1(target = {}, src = {}) {
          Object.keys(src).forEach(key => {
            if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject$1(src[key]) && isObject$1(target[key]) && Object.keys(src[key]).length > 0) {
              extend$1(target[key], src[key]);
            }
          });
        }
    
        const ssrDocument = {
          body: {},
    
          addEventListener() {},
    
          removeEventListener() {},
    
          activeElement: {
            blur() {},
    
            nodeName: ''
          },
    
          querySelector() {
            return null;
          },
    
          querySelectorAll() {
            return [];
          },
    
          getElementById() {
            return null;
          },
    
          createEvent() {
            return {
              initEvent() {}
    
            };
          },
    
          createElement() {
            return {
              children: [],
              childNodes: [],
              style: {},
    
              setAttribute() {},
    
              getElementsByTagName() {
                return [];
              }
    
            };
          },
    
          createElementNS() {
            return {};
          },
    
          importNode() {
            return null;
          },
    
          location: {
            hash: '',
            host: '',
            hostname: '',
            href: '',
            origin: '',
            pathname: '',
            protocol: '',
            search: ''
          }
        };
    
        function getDocument() {
          const doc = typeof document !== 'undefined' ? document : {};
          extend$1(doc, ssrDocument);
          return doc;
        }
    
        const ssrWindow = {
          document: ssrDocument,
          navigator: {
            userAgent: ''
          },
          location: {
            hash: '',
            host: '',
            hostname: '',
            href: '',
            origin: '',
            pathname: '',
            protocol: '',
            search: ''
          },
          history: {
            replaceState() {},
    
            pushState() {},
    
            go() {},
    
            back() {}
    
          },
          CustomEvent: function CustomEvent() {
            return this;
          },
    
          addEventListener() {},
    
          removeEventListener() {},
    
          getComputedStyle() {
            return {
              getPropertyValue() {
                return '';
              }
    
            };
          },
    
          Image() {},
    
          Date() {},
    
          screen: {},
    
          setTimeout() {},
    
          clearTimeout() {},
    
          matchMedia() {
            return {};
          },
    
          requestAnimationFrame(callback) {
            if (typeof setTimeout === 'undefined') {
              callback();
              return null;
            }
    
            return setTimeout(callback, 0);
          },
    
          cancelAnimationFrame(id) {
            if (typeof setTimeout === 'undefined') {
              return;
            }
    
            clearTimeout(id);
          }
    
        };
    
        function getWindow() {
          const win = typeof window !== 'undefined' ? window : {};
          extend$1(win, ssrWindow);
          return win;
        }
    
        /**
         * Dom7 4.0.0
         * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
         * https://framework7.io/docs/dom7.html
         *
         * Copyright 2021, Vladimir Kharlampidi
         *
         * Licensed under MIT
         *
         * Released on: August 25, 2021
         */
        /* eslint-disable no-proto */
    
        function makeReactive(obj) {
          const proto = obj.__proto__;
          Object.defineProperty(obj, '__proto__', {
            get() {
              return proto;
            },
    
            set(value) {
              proto.__proto__ = value;
            }
    
          });
        }
    
        class Dom7 extends Array {
          constructor(items) {
            super(...(items || []));
            makeReactive(this);
          }
    
        }
    
        function arrayFlat(arr = []) {
          const res = [];
          arr.forEach(el => {
            if (Array.isArray(el)) {
              res.push(...arrayFlat(el));
            } else {
              res.push(el);
            }
          });
          return res;
        }
    
        function arrayFilter(arr, callback) {
          return Array.prototype.filter.call(arr, callback);
        }
    
        function arrayUnique(arr) {
          const uniqueArray = [];
    
          for (let i = 0; i < arr.length; i += 1) {
            if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
          }
    
          return uniqueArray;
        }
    
    
        function qsa(selector, context) {
          if (typeof selector !== 'string') {
            return [selector];
          }
    
          const a = [];
          const res = context.querySelectorAll(selector);
    
          for (let i = 0; i < res.length; i += 1) {
            a.push(res[i]);
          }
    
          return a;
        }
    
        function $(selector, context) {
          const window = getWindow();
          const document = getDocument();
          let arr = [];
    
          if (!context && selector instanceof Dom7) {
            return selector;
          }
    
          if (!selector) {
            return new Dom7(arr);
          }
    
          if (typeof selector === 'string') {
            const html = selector.trim();
    
            if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
              let toCreate = 'div';
              if (html.indexOf('<li') === 0) toCreate = 'ul';
              if (html.indexOf('<tr') === 0) toCreate = 'tbody';
              if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
              if (html.indexOf('<tbody') === 0) toCreate = 'table';
              if (html.indexOf('<option') === 0) toCreate = 'select';
              const tempParent = document.createElement(toCreate);
              tempParent.innerHTML = html;
    
              for (let i = 0; i < tempParent.childNodes.length; i += 1) {
                arr.push(tempParent.childNodes[i]);
              }
            } else {
              arr = qsa(selector.trim(), context || document);
            } // arr = qsa(selector, document);
    
          } else if (selector.nodeType || selector === window || selector === document) {
            arr.push(selector);
          } else if (Array.isArray(selector)) {
            if (selector instanceof Dom7) return selector;
            arr = selector;
          }
    
          return new Dom7(arrayUnique(arr));
        }
    
        $.fn = Dom7.prototype; // eslint-disable-next-line
    
        function addClass(...classes) {
          const classNames = arrayFlat(classes.map(c => c.split(' ')));
          this.forEach(el => {
            el.classList.add(...classNames);
          });
          return this;
        }
    
        function removeClass(...classes) {
          const classNames = arrayFlat(classes.map(c => c.split(' ')));
          this.forEach(el => {
            el.classList.remove(...classNames);
          });
          return this;
        }
    
        function toggleClass(...classes) {
          const classNames = arrayFlat(classes.map(c => c.split(' ')));
          this.forEach(el => {
            classNames.forEach(className => {
              el.classList.toggle(className);
            });
          });
        }
    
        function hasClass(...classes) {
          const classNames = arrayFlat(classes.map(c => c.split(' ')));
          return arrayFilter(this, el => {
            return classNames.filter(className => el.classList.contains(className)).length > 0;
          }).length > 0;
        }
    
        function attr(attrs, value) {
          if (arguments.length === 1 && typeof attrs === 'string') {
            // Get attr
            if (this[0]) return this[0].getAttribute(attrs);
            return undefined;
          } // Set attrs
    
    
          for (let i = 0; i < this.length; i += 1) {
            if (arguments.length === 2) {
              // String
              this[i].setAttribute(attrs, value);
            } else {
              // Object
              for (const attrName in attrs) {
                this[i][attrName] = attrs[attrName];
                this[i].setAttribute(attrName, attrs[attrName]);
              }
            }
          }
    
          return this;
        }
    
        function removeAttr(attr) {
          for (let i = 0; i < this.length; i += 1) {
            this[i].removeAttribute(attr);
          }
    
          return this;
        }
    
        function transform(transform) {
          for (let i = 0; i < this.length; i += 1) {
            this[i].style.transform = transform;
          }
    
          return this;
        }
    
        function transition$1(duration) {
          for (let i = 0; i < this.length; i += 1) {
            this[i].style.transitionDuration = typeof duration !== 'string' ? `${duration}ms` : duration;
          }
    
          return this;
        }
    
        function on(...args) {
          let [eventType, targetSelector, listener, capture] = args;
    
          if (typeof args[1] === 'function') {
            [eventType, listener, capture] = args;
            targetSelector = undefined;
          }
    
          if (!capture) capture = false;
    
          function handleLiveEvent(e) {
            const target = e.target;
            if (!target) return;
            const eventData = e.target.dom7EventData || [];
    
            if (eventData.indexOf(e) < 0) {
              eventData.unshift(e);
            }
    
            if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
              const parents = $(target).parents(); // eslint-disable-line
    
              for (let k = 0; k < parents.length; k += 1) {
                if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
              }
            }
          }
    
          function handleEvent(e) {
            const eventData = e && e.target ? e.target.dom7EventData || [] : [];
    
            if (eventData.indexOf(e) < 0) {
              eventData.unshift(e);
            }
    
            listener.apply(this, eventData);
          }
    
          const events = eventType.split(' ');
          let j;
    
          for (let i = 0; i < this.length; i += 1) {
            const el = this[i];
    
            if (!targetSelector) {
              for (j = 0; j < events.length; j += 1) {
                const event = events[j];
                if (!el.dom7Listeners) el.dom7Listeners = {};
                if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
                el.dom7Listeners[event].push({
                  listener,
                  proxyListener: handleEvent
                });
                el.addEventListener(event, handleEvent, capture);
              }
            } else {
              // Live events
              for (j = 0; j < events.length; j += 1) {
                const event = events[j];
                if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
                if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
                el.dom7LiveListeners[event].push({
                  listener,
                  proxyListener: handleLiveEvent
                });
                el.addEventListener(event, handleLiveEvent, capture);
              }
            }
          }
    
          return this;
        }
    
        function off(...args) {
          let [eventType, targetSelector, listener, capture] = args;
    
          if (typeof args[1] === 'function') {
            [eventType, listener, capture] = args;
            targetSelector = undefined;
          }
    
          if (!capture) capture = false;
          const events = eventType.split(' ');
    
          for (let i = 0; i < events.length; i += 1) {
            const event = events[i];
    
            for (let j = 0; j < this.length; j += 1) {
              const el = this[j];
              let handlers;
    
              if (!targetSelector && el.dom7Listeners) {
                handlers = el.dom7Listeners[event];
              } else if (targetSelector && el.dom7LiveListeners) {
                handlers = el.dom7LiveListeners[event];
              }
    
              if (handlers && handlers.length) {
                for (let k = handlers.length - 1; k >= 0; k -= 1) {
                  const handler = handlers[k];
    
                  if (listener && handler.listener === listener) {
                    el.removeEventListener(event, handler.proxyListener, capture);
                    handlers.splice(k, 1);
                  } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                    el.removeEventListener(event, handler.proxyListener, capture);
                    handlers.splice(k, 1);
                  } else if (!listener) {
                    el.removeEventListener(event, handler.proxyListener, capture);
                    handlers.splice(k, 1);
                  }
                }
              }
            }
          }
    
          return this;
        }
    
        function trigger(...args) {
          const window = getWindow();
          const events = args[0].split(' ');
          const eventData = args[1];
    
          for (let i = 0; i < events.length; i += 1) {
            const event = events[i];
    
            for (let j = 0; j < this.length; j += 1) {
              const el = this[j];
    
              if (window.CustomEvent) {
                const evt = new window.CustomEvent(event, {
                  detail: eventData,
                  bubbles: true,
                  cancelable: true
                });
                el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);
                el.dispatchEvent(evt);
                el.dom7EventData = [];
                delete el.dom7EventData;
              }
            }
          }
    
          return this;
        }
    
        function transitionEnd$1(callback) {
          const dom = this;
    
          function fireCallBack(e) {
            if (e.target !== this) return;
            callback.call(this, e);
            dom.off('transitionend', fireCallBack);
          }
    
          if (callback) {
            dom.on('transitionend', fireCallBack);
          }
    
          return this;
        }
    
        function outerWidth(includeMargins) {
          if (this.length > 0) {
            if (includeMargins) {
              const styles = this.styles();
              return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
            }
    
            return this[0].offsetWidth;
          }
    
          return null;
        }
    
        function outerHeight(includeMargins) {
          if (this.length > 0) {
            if (includeMargins) {
              const styles = this.styles();
              return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
            }
    
            return this[0].offsetHeight;
          }
    
          return null;
        }
    
        function offset() {
          if (this.length > 0) {
            const window = getWindow();
            const document = getDocument();
            const el = this[0];
            const box = el.getBoundingClientRect();
            const body = document.body;
            const clientTop = el.clientTop || body.clientTop || 0;
            const clientLeft = el.clientLeft || body.clientLeft || 0;
            const scrollTop = el === window ? window.scrollY : el.scrollTop;
            const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
            return {
              top: box.top + scrollTop - clientTop,
              left: box.left + scrollLeft - clientLeft
            };
          }
    
          return null;
        }
    
        function styles() {
          const window = getWindow();
          if (this[0]) return window.getComputedStyle(this[0], null);
          return {};
        }
    
        function css(props, value) {
          const window = getWindow();
          let i;
    
          if (arguments.length === 1) {
            if (typeof props === 'string') {
              // .css('width')
              if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
            } else {
              // .css({ width: '100px' })
              for (i = 0; i < this.length; i += 1) {
                for (const prop in props) {
                  this[i].style[prop] = props[prop];
                }
              }
    
              return this;
            }
          }
    
          if (arguments.length === 2 && typeof props === 'string') {
            // .css('width', '100px')
            for (i = 0; i < this.length; i += 1) {
              this[i].style[props] = value;
            }
    
            return this;
          }
    
          return this;
        }
    
        function each(callback) {
          if (!callback) return this;
          this.forEach((el, index) => {
            callback.apply(el, [el, index]);
          });
          return this;
        }
    
        function filter(callback) {
          const result = arrayFilter(this, callback);
          return $(result);
        }
    
        function html(html) {
          if (typeof html === 'undefined') {
            return this[0] ? this[0].innerHTML : null;
          }
    
          for (let i = 0; i < this.length; i += 1) {
            this[i].innerHTML = html;
          }
    
          return this;
        }
    
        function text(text) {
          if (typeof text === 'undefined') {
            return this[0] ? this[0].textContent.trim() : null;
          }
    
          for (let i = 0; i < this.length; i += 1) {
            this[i].textContent = text;
          }
    
          return this;
        }
    
        function is(selector) {
          const window = getWindow();
          const document = getDocument();
          const el = this[0];
          let compareWith;
          let i;
          if (!el || typeof selector === 'undefined') return false;
    
          if (typeof selector === 'string') {
            if (el.matches) return el.matches(selector);
            if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
            if (el.msMatchesSelector) return el.msMatchesSelector(selector);
            compareWith = $(selector);
    
            for (i = 0; i < compareWith.length; i += 1) {
              if (compareWith[i] === el) return true;
            }
    
            return false;
          }
    
          if (selector === document) {
            return el === document;
          }
    
          if (selector === window) {
            return el === window;
          }
    
          if (selector.nodeType || selector instanceof Dom7) {
            compareWith = selector.nodeType ? [selector] : selector;
    
            for (i = 0; i < compareWith.length; i += 1) {
              if (compareWith[i] === el) return true;
            }
    
            return false;
          }
    
          return false;
        }
    
        function index() {
          let child = this[0];
          let i;
    
          if (child) {
            i = 0; // eslint-disable-next-line
    
            while ((child = child.previousSibling) !== null) {
              if (child.nodeType === 1) i += 1;
            }
    
            return i;
          }
    
          return undefined;
        }
    
        function eq(index) {
          if (typeof index === 'undefined') return this;
          const length = this.length;
    
          if (index > length - 1) {
            return $([]);
          }
    
          if (index < 0) {
            const returnIndex = length + index;
            if (returnIndex < 0) return $([]);
            return $([this[returnIndex]]);
          }
    
          return $([this[index]]);
        }
    
        function append(...els) {
          let newChild;
          const document = getDocument();
    
          for (let k = 0; k < els.length; k += 1) {
            newChild = els[k];
    
            for (let i = 0; i < this.length; i += 1) {
              if (typeof newChild === 'string') {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = newChild;
    
                while (tempDiv.firstChild) {
                  this[i].appendChild(tempDiv.firstChild);
                }
              } else if (newChild instanceof Dom7) {
                for (let j = 0; j < newChild.length; j += 1) {
                  this[i].appendChild(newChild[j]);
                }
              } else {
                this[i].appendChild(newChild);
              }
            }
          }
    
          return this;
        }
    
        function prepend(newChild) {
          const document = getDocument();
          let i;
          let j;
    
          for (i = 0; i < this.length; i += 1) {
            if (typeof newChild === 'string') {
              const tempDiv = document.createElement('div');
              tempDiv.innerHTML = newChild;
    
              for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
                this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
              }
            } else if (newChild instanceof Dom7) {
              for (j = 0; j < newChild.length; j += 1) {
                this[i].insertBefore(newChild[j], this[i].childNodes[0]);
              }
            } else {
              this[i].insertBefore(newChild, this[i].childNodes[0]);
            }
          }
    
          return this;
        }
    
        function next(selector) {
          if (this.length > 0) {
            if (selector) {
              if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
                return $([this[0].nextElementSibling]);
              }
    
              return $([]);
            }
    
            if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
            return $([]);
          }
    
          return $([]);
        }
    
        function nextAll(selector) {
          const nextEls = [];
          let el = this[0];
          if (!el) return $([]);
    
          while (el.nextElementSibling) {
            const next = el.nextElementSibling; // eslint-disable-line
    
            if (selector) {
              if ($(next).is(selector)) nextEls.push(next);
            } else nextEls.push(next);
    
            el = next;
          }
    
          return $(nextEls);
        }
    
        function prev(selector) {
          if (this.length > 0) {
            const el = this[0];
    
            if (selector) {
              if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
                return $([el.previousElementSibling]);
              }
    
              return $([]);
            }
    
            if (el.previousElementSibling) return $([el.previousElementSibling]);
            return $([]);
          }
    
          return $([]);
        }
    
        function prevAll(selector) {
          const prevEls = [];
          let el = this[0];
          if (!el) return $([]);
    
          while (el.previousElementSibling) {
            const prev = el.previousElementSibling; // eslint-disable-line
    
            if (selector) {
              if ($(prev).is(selector)) prevEls.push(prev);
            } else prevEls.push(prev);
    
            el = prev;
          }
    
          return $(prevEls);
        }
    
        function parent(selector) {
          const parents = []; // eslint-disable-line
    
          for (let i = 0; i < this.length; i += 1) {
            if (this[i].parentNode !== null) {
              if (selector) {
                if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
              } else {
                parents.push(this[i].parentNode);
              }
            }
          }
    
          return $(parents);
        }
    
        function parents(selector) {
          const parents = []; // eslint-disable-line
    
          for (let i = 0; i < this.length; i += 1) {
            let parent = this[i].parentNode; // eslint-disable-line
    
            while (parent) {
              if (selector) {
                if ($(parent).is(selector)) parents.push(parent);
              } else {
                parents.push(parent);
              }
    
              parent = parent.parentNode;
            }
          }
    
          return $(parents);
        }
    
        function closest(selector) {
          let closest = this; // eslint-disable-line
    
          if (typeof selector === 'undefined') {
            return $([]);
          }
    
          if (!closest.is(selector)) {
            closest = closest.parents(selector).eq(0);
          }
    
          return closest;
        }
    
        function find(selector) {
          const foundElements = [];
    
          for (let i = 0; i < this.length; i += 1) {
            const found = this[i].querySelectorAll(selector);
    
            for (let j = 0; j < found.length; j += 1) {
              foundElements.push(found[j]);
            }
          }
    
          return $(foundElements);
        }
    
        function children(selector) {
          const children = []; // eslint-disable-line
    
          for (let i = 0; i < this.length; i += 1) {
            const childNodes = this[i].children;
    
            for (let j = 0; j < childNodes.length; j += 1) {
              if (!selector || $(childNodes[j]).is(selector)) {
                children.push(childNodes[j]);
              }
            }
          }
    
          return $(children);
        }
    
        function remove() {
          for (let i = 0; i < this.length; i += 1) {
            if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
          }
    
          return this;
        }
    
        const Methods = {
          addClass,
          removeClass,
          hasClass,
          toggleClass,
          attr,
          removeAttr,
          transform,
          transition: transition$1,
          on,
          off,
          trigger,
          transitionEnd: transitionEnd$1,
          outerWidth,
          outerHeight,
          styles,
          offset,
          css,
          each,
          html,
          text,
          is,
          index,
          eq,
          append,
          prepend,
          next,
          nextAll,
          prev,
          prevAll,
          parent,
          parents,
          closest,
          find,
          children,
          filter,
          remove
        };
        Object.keys(Methods).forEach(methodName => {
          Object.defineProperty($.fn, methodName, {
            value: Methods[methodName],
            writable: true
          });
        });
    
        function deleteProps(obj) {
          const object = obj;
          Object.keys(object).forEach(key => {
            try {
              object[key] = null;
            } catch (e) {// no getter for object
            }
    
            try {
              delete object[key];
            } catch (e) {// something got wrong
            }
          });
        }
    
        function nextTick(callback, delay = 0) {
          return setTimeout(callback, delay);
        }
    
        function now() {
          return Date.now();
        }
    
        function getComputedStyle$1(el) {
          const window = getWindow();
          let style;
    
          if (window.getComputedStyle) {
            style = window.getComputedStyle(el, null);
          }
    
          if (!style && el.currentStyle) {
            style = el.currentStyle;
          }
    
          if (!style) {
            style = el.style;
          }
    
          return style;
        }
    
        function getTranslate(el, axis = 'x') {
          const window = getWindow();
          let matrix;
          let curTransform;
          let transformMatrix;
          const curStyle = getComputedStyle$1(el);
    
          if (window.WebKitCSSMatrix) {
            curTransform = curStyle.transform || curStyle.webkitTransform;
    
            if (curTransform.split(',').length > 6) {
              curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
            } // Some old versions of Webkit choke when 'none' is passed; pass
            // empty string instead in this case
    
    
            transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
          } else {
            transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
            matrix = transformMatrix.toString().split(',');
          }
    
          if (axis === 'x') {
            // Latest Chrome and webkits Fix
            if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
            else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
            else curTransform = parseFloat(matrix[4]);
          }
    
          if (axis === 'y') {
            // Latest Chrome and webkits Fix
            if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
            else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
            else curTransform = parseFloat(matrix[5]);
          }
    
          return curTransform || 0;
        }
    
        function isObject(o) {
          return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
        }
    
        function isNode(node) {
          // eslint-disable-next-line
          if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
            return node instanceof HTMLElement;
          }
    
          return node && (node.nodeType === 1 || node.nodeType === 11);
        }
    
        function extend(...args) {
          const to = Object(args[0]);
          const noExtend = ['__proto__', 'constructor', 'prototype'];
    
          for (let i = 1; i < args.length; i += 1) {
            const nextSource = args[i];
    
            if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
              const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);
    
              for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                const nextKey = keysArray[nextIndex];
                const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
    
                if (desc !== undefined && desc.enumerable) {
                  if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                    if (nextSource[nextKey].__swiper__) {
                      to[nextKey] = nextSource[nextKey];
                    } else {
                      extend(to[nextKey], nextSource[nextKey]);
                    }
                  } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                    to[nextKey] = {};
    
                    if (nextSource[nextKey].__swiper__) {
                      to[nextKey] = nextSource[nextKey];
                    } else {
                      extend(to[nextKey], nextSource[nextKey]);
                    }
                  } else {
                    to[nextKey] = nextSource[nextKey];
                  }
                }
              }
            }
          }
    
          return to;
        }
    
        function setCSSProperty(el, varName, varValue) {
          el.style.setProperty(varName, varValue);
        }
    
        function animateCSSModeScroll({
          swiper,
          targetPosition,
          side
        }) {
          const window = getWindow();
          const startPosition = -swiper.translate;
          let startTime = null;
          let time;
          const duration = swiper.params.speed;
          swiper.wrapperEl.style.scrollSnapType = 'none';
          window.cancelAnimationFrame(swiper.cssModeFrameID);
          const dir = targetPosition > startPosition ? 'next' : 'prev';
    
          const isOutOfBound = (current, target) => {
            return dir === 'next' && current >= target || dir === 'prev' && current <= target;
          };
    
          const animate = () => {
            time = new Date().getTime();
    
            if (startTime === null) {
              startTime = time;
            }
    
            const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
            const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
            let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
    
            if (isOutOfBound(currentPosition, targetPosition)) {
              currentPosition = targetPosition;
            }
    
            swiper.wrapperEl.scrollTo({
              [side]: currentPosition
            });
    
            if (isOutOfBound(currentPosition, targetPosition)) {
              swiper.wrapperEl.style.overflow = 'hidden';
              swiper.wrapperEl.style.scrollSnapType = '';
              setTimeout(() => {
                swiper.wrapperEl.style.overflow = '';
                swiper.wrapperEl.scrollTo({
                  [side]: currentPosition
                });
              });
              window.cancelAnimationFrame(swiper.cssModeFrameID);
              return;
            }
    
            swiper.cssModeFrameID = window.requestAnimationFrame(animate);
          };
    
          animate();
        }
    
        let support;
    
        function calcSupport() {
          const window = getWindow();
          const document = getDocument();
          return {
            smoothScroll: document.documentElement && 'scrollBehavior' in document.documentElement.style,
            touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
            passiveListener: function checkPassiveListener() {
              let supportsPassive = false;
    
              try {
                const opts = Object.defineProperty({}, 'passive', {
                  // eslint-disable-next-line
                  get() {
                    supportsPassive = true;
                  }
    
                });
                window.addEventListener('testPassiveListener', null, opts);
              } catch (e) {// No support
              }
    
              return supportsPassive;
            }(),
            gestures: function checkGestures() {
              return 'ongesturestart' in window;
            }()
          };
        }
    
        function getSupport() {
          if (!support) {
            support = calcSupport();
          }
    
          return support;
        }
    
        let deviceCached;
    
        function calcDevice({
          userAgent
        } = {}) {
          const support = getSupport();
          const window = getWindow();
          const platform = window.navigator.platform;
          const ua = userAgent || window.navigator.userAgent;
          const device = {
            ios: false,
            android: false
          };
          const screenWidth = window.screen.width;
          const screenHeight = window.screen.height;
          const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    
          let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
          const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
          const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
          const windows = platform === 'Win32';
          let macos = platform === 'MacIntel'; // iPadOs 13 fix
    
          const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];
    
          if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
            ipad = ua.match(/(Version)\/([\d.]+)/);
            if (!ipad) ipad = [0, 1, '13_0_0'];
            macos = false;
          } // Android
    
    
          if (android && !windows) {
            device.os = 'android';
            device.android = true;
          }
    
          if (ipad || iphone || ipod) {
            device.os = 'ios';
            device.ios = true;
          } // Export object
    
    
          return device;
        }
    
        function getDevice(overrides = {}) {
          if (!deviceCached) {
            deviceCached = calcDevice(overrides);
          }
    
          return deviceCached;
        }
    
        let browser;
    
        function calcBrowser() {
          const window = getWindow();
    
          function isSafari() {
            const ua = window.navigator.userAgent.toLowerCase();
            return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
          }
    
          return {
            isSafari: isSafari(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
          };
        }
    
        function getBrowser() {
          if (!browser) {
            browser = calcBrowser();
          }
    
          return browser;
        }
    
        function Resize({
          swiper,
          on,
          emit
        }) {
          const window = getWindow();
          let observer = null;
    
          const resizeHandler = () => {
            if (!swiper || swiper.destroyed || !swiper.initialized) return;
            emit('beforeResize');
            emit('resize');
          };
    
          const createObserver = () => {
            if (!swiper || swiper.destroyed || !swiper.initialized) return;
            observer = new ResizeObserver(entries => {
              const {
                width,
                height
              } = swiper;
              let newWidth = width;
              let newHeight = height;
              entries.forEach(({
                contentBoxSize,
                contentRect,
                target
              }) => {
                if (target && target !== swiper.el) return;
                newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
              });
    
              if (newWidth !== width || newHeight !== height) {
                resizeHandler();
              }
            });
            observer.observe(swiper.el);
          };
    
          const removeObserver = () => {
            if (observer && observer.unobserve && swiper.el) {
              observer.unobserve(swiper.el);
              observer = null;
            }
          };
    
          const orientationChangeHandler = () => {
            if (!swiper || swiper.destroyed || !swiper.initialized) return;
            emit('orientationchange');
          };
    
          on('init', () => {
            if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
              createObserver();
              return;
            }
    
            window.addEventListener('resize', resizeHandler);
            window.addEventListener('orientationchange', orientationChangeHandler);
          });
          on('destroy', () => {
            removeObserver();
            window.removeEventListener('resize', resizeHandler);
            window.removeEventListener('orientationchange', orientationChangeHandler);
          });
        }
    
        function Observer({
          swiper,
          extendParams,
          on,
          emit
        }) {
          const observers = [];
          const window = getWindow();
    
          const attach = (target, options = {}) => {
            const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
            const observer = new ObserverFunc(mutations => {
              // The observerUpdate event should only be triggered
              // once despite the number of mutations.  Additional
              // triggers are redundant and are very costly
              if (mutations.length === 1) {
                emit('observerUpdate', mutations[0]);
                return;
              }
    
              const observerUpdate = function observerUpdate() {
                emit('observerUpdate', mutations[0]);
              };
    
              if (window.requestAnimationFrame) {
                window.requestAnimationFrame(observerUpdate);
              } else {
                window.setTimeout(observerUpdate, 0);
              }
            });
            observer.observe(target, {
              attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
              childList: typeof options.childList === 'undefined' ? true : options.childList,
              characterData: typeof options.characterData === 'undefined' ? true : options.characterData
            });
            observers.push(observer);
          };
    
          const init = () => {
            if (!swiper.params.observer) return;
    
            if (swiper.params.observeParents) {
              const containerParents = swiper.$el.parents();
    
              for (let i = 0; i < containerParents.length; i += 1) {
                attach(containerParents[i]);
              }
            } // Observe container
    
    
            attach(swiper.$el[0], {
              childList: swiper.params.observeSlideChildren
            }); // Observe wrapper
    
            attach(swiper.$wrapperEl[0], {
              attributes: false
            });
          };
    
          const destroy = () => {
            observers.forEach(observer => {
              observer.disconnect();
            });
            observers.splice(0, observers.length);
          };
    
          extendParams({
            observer: false,
            observeParents: false,
            observeSlideChildren: false
          });
          on('init', init);
          on('destroy', destroy);
        }
    
        /* eslint-disable no-underscore-dangle */
        var eventsEmitter = {
          on(events, handler, priority) {
            const self = this;
            if (typeof handler !== 'function') return self;
            const method = priority ? 'unshift' : 'push';
            events.split(' ').forEach(event => {
              if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
              self.eventsListeners[event][method](handler);
            });
            return self;
          },
    
          once(events, handler, priority) {
            const self = this;
            if (typeof handler !== 'function') return self;
    
            function onceHandler(...args) {
              self.off(events, onceHandler);
    
              if (onceHandler.__emitterProxy) {
                delete onceHandler.__emitterProxy;
              }
    
              handler.apply(self, args);
            }
    
            onceHandler.__emitterProxy = handler;
            return self.on(events, onceHandler, priority);
          },
    
          onAny(handler, priority) {
            const self = this;
            if (typeof handler !== 'function') return self;
            const method = priority ? 'unshift' : 'push';
    
            if (self.eventsAnyListeners.indexOf(handler) < 0) {
              self.eventsAnyListeners[method](handler);
            }
    
            return self;
          },
    
          offAny(handler) {
            const self = this;
            if (!self.eventsAnyListeners) return self;
            const index = self.eventsAnyListeners.indexOf(handler);
    
            if (index >= 0) {
              self.eventsAnyListeners.splice(index, 1);
            }
    
            return self;
          },
    
          off(events, handler) {
            const self = this;
            if (!self.eventsListeners) return self;
            events.split(' ').forEach(event => {
              if (typeof handler === 'undefined') {
                self.eventsListeners[event] = [];
              } else if (self.eventsListeners[event]) {
                self.eventsListeners[event].forEach((eventHandler, index) => {
                  if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
                    self.eventsListeners[event].splice(index, 1);
                  }
                });
              }
            });
            return self;
          },
    
          emit(...args) {
            const self = this;
            if (!self.eventsListeners) return self;
            let events;
            let data;
            let context;
    
            if (typeof args[0] === 'string' || Array.isArray(args[0])) {
              events = args[0];
              data = args.slice(1, args.length);
              context = self;
            } else {
              events = args[0].events;
              data = args[0].data;
              context = args[0].context || self;
            }
    
            data.unshift(context);
            const eventsArray = Array.isArray(events) ? events : events.split(' ');
            eventsArray.forEach(event => {
              if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
                self.eventsAnyListeners.forEach(eventHandler => {
                  eventHandler.apply(context, [event, ...data]);
                });
              }
    
              if (self.eventsListeners && self.eventsListeners[event]) {
                self.eventsListeners[event].forEach(eventHandler => {
                  eventHandler.apply(context, data);
                });
              }
            });
            return self;
          }
    
        };
    
        function updateSize() {
          const swiper = this;
          let width;
          let height;
          const $el = swiper.$el;
    
          if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
            width = swiper.params.width;
          } else {
            width = $el[0].clientWidth;
          }
    
          if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
            height = swiper.params.height;
          } else {
            height = $el[0].clientHeight;
          }
    
          if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
            return;
          } // Subtract paddings
    
    
          width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
          height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
          if (Number.isNaN(width)) width = 0;
          if (Number.isNaN(height)) height = 0;
          Object.assign(swiper, {
            width,
            height,
            size: swiper.isHorizontal() ? width : height
          });
        }
    
        function updateSlides() {
          const swiper = this;
    
          function getDirectionLabel(property) {
            if (swiper.isHorizontal()) {
              return property;
            } // prettier-ignore
    
    
            return {
              'width': 'height',
              'margin-top': 'margin-left',
              'margin-bottom ': 'margin-right',
              'margin-left': 'margin-top',
              'margin-right': 'margin-bottom',
              'padding-left': 'padding-top',
              'padding-right': 'padding-bottom',
              'marginRight': 'marginBottom'
            }[property];
          }
    
          function getDirectionPropertyValue(node, label) {
            return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
          }
    
          const params = swiper.params;
          const {
            $wrapperEl,
            size: swiperSize,
            rtlTranslate: rtl,
            wrongRTL
          } = swiper;
          const isVirtual = swiper.virtual && params.virtual.enabled;
          const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
          const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
          const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
          let snapGrid = [];
          const slidesGrid = [];
          const slidesSizesGrid = [];
          let offsetBefore = params.slidesOffsetBefore;
    
          if (typeof offsetBefore === 'function') {
            offsetBefore = params.slidesOffsetBefore.call(swiper);
          }
    
          let offsetAfter = params.slidesOffsetAfter;
    
          if (typeof offsetAfter === 'function') {
            offsetAfter = params.slidesOffsetAfter.call(swiper);
          }
    
          const previousSnapGridLength = swiper.snapGrid.length;
          const previousSlidesGridLength = swiper.slidesGrid.length;
          let spaceBetween = params.spaceBetween;
          let slidePosition = -offsetBefore;
          let prevSlideSize = 0;
          let index = 0;
    
          if (typeof swiperSize === 'undefined') {
            return;
          }
    
          if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
            spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
          }
    
          swiper.virtualSize = -spaceBetween; // reset margins
    
          if (rtl) slides.css({
            marginLeft: '',
            marginBottom: '',
            marginTop: ''
          });else slides.css({
            marginRight: '',
            marginBottom: '',
            marginTop: ''
          }); // reset cssMode offsets
    
          if (params.centeredSlides && params.cssMode) {
            setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', '');
            setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', '');
          }
    
          const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    
          if (gridEnabled) {
            swiper.grid.initSlides(slidesLength);
          } // Calc slides
    
    
          let slideSize;
          const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
            return typeof params.breakpoints[key].slidesPerView !== 'undefined';
          }).length > 0;
    
          for (let i = 0; i < slidesLength; i += 1) {
            slideSize = 0;
            const slide = slides.eq(i);
    
            if (gridEnabled) {
              swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
            }
    
            if (slide.css('display') === 'none') continue; // eslint-disable-line
    
            if (params.slidesPerView === 'auto') {
              if (shouldResetSlideSize) {
                slides[i].style[getDirectionLabel('width')] = ``;
              }
    
              const slideStyles = getComputedStyle(slide[0]);
              const currentTransform = slide[0].style.transform;
              const currentWebKitTransform = slide[0].style.webkitTransform;
    
              if (currentTransform) {
                slide[0].style.transform = 'none';
              }
    
              if (currentWebKitTransform) {
                slide[0].style.webkitTransform = 'none';
              }
    
              if (params.roundLengths) {
                slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
              } else {
                // eslint-disable-next-line
                const width = getDirectionPropertyValue(slideStyles, 'width');
                const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
                const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
                const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
                const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
                const boxSizing = slideStyles.getPropertyValue('box-sizing');
    
                if (boxSizing && boxSizing === 'border-box') {
                  slideSize = width + marginLeft + marginRight;
                } else {
                  const {
                    clientWidth,
                    offsetWidth
                  } = slide[0];
                  slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                }
              }
    
              if (currentTransform) {
                slide[0].style.transform = currentTransform;
              }
    
              if (currentWebKitTransform) {
                slide[0].style.webkitTransform = currentWebKitTransform;
              }
    
              if (params.roundLengths) slideSize = Math.floor(slideSize);
            } else {
              slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
              if (params.roundLengths) slideSize = Math.floor(slideSize);
    
              if (slides[i]) {
                slides[i].style[getDirectionLabel('width')] = `${slideSize}px`;
              }
            }
    
            if (slides[i]) {
              slides[i].swiperSlideSize = slideSize;
            }
    
            slidesSizesGrid.push(slideSize);
    
            if (params.centeredSlides) {
              slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
              if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
              if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
              if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
              if (params.roundLengths) slidePosition = Math.floor(slidePosition);
              if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
              slidesGrid.push(slidePosition);
            } else {
              if (params.roundLengths) slidePosition = Math.floor(slidePosition);
              if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
              slidesGrid.push(slidePosition);
              slidePosition = slidePosition + slideSize + spaceBetween;
            }
    
            swiper.virtualSize += slideSize + spaceBetween;
            prevSlideSize = slideSize;
            index += 1;
          }
    
          swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    
          if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
            $wrapperEl.css({
              width: `${swiper.virtualSize + params.spaceBetween}px`
            });
          }
    
          if (params.setWrapperSize) {
            $wrapperEl.css({
              [getDirectionLabel('width')]: `${swiper.virtualSize + params.spaceBetween}px`
            });
          }
    
          if (gridEnabled) {
            swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
          } // Remove last grid elements depending on width
    
    
          if (!params.centeredSlides) {
            const newSlidesGrid = [];
    
            for (let i = 0; i < snapGrid.length; i += 1) {
              let slidesGridItem = snapGrid[i];
              if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
    
              if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
                newSlidesGrid.push(slidesGridItem);
              }
            }
    
            snapGrid = newSlidesGrid;
    
            if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
              snapGrid.push(swiper.virtualSize - swiperSize);
            }
          }
    
          if (snapGrid.length === 0) snapGrid = [0];
    
          if (params.spaceBetween !== 0) {
            const key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
            slides.filter((_, slideIndex) => {
              if (!params.cssMode) return true;
    
              if (slideIndex === slides.length - 1) {
                return false;
              }
    
              return true;
            }).css({
              [key]: `${spaceBetween}px`
            });
          }
    
          if (params.centeredSlides && params.centeredSlidesBounds) {
            let allSlidesSize = 0;
            slidesSizesGrid.forEach(slideSizeValue => {
              allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
            });
            allSlidesSize -= params.spaceBetween;
            const maxSnap = allSlidesSize - swiperSize;
            snapGrid = snapGrid.map(snap => {
              if (snap < 0) return -offsetBefore;
              if (snap > maxSnap) return maxSnap + offsetAfter;
              return snap;
            });
          }
    
          if (params.centerInsufficientSlides) {
            let allSlidesSize = 0;
            slidesSizesGrid.forEach(slideSizeValue => {
              allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
            });
            allSlidesSize -= params.spaceBetween;
    
            if (allSlidesSize < swiperSize) {
              const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
              snapGrid.forEach((snap, snapIndex) => {
                snapGrid[snapIndex] = snap - allSlidesOffset;
              });
              slidesGrid.forEach((snap, snapIndex) => {
                slidesGrid[snapIndex] = snap + allSlidesOffset;
              });
            }
          }
    
          Object.assign(swiper, {
            slides,
            snapGrid,
            slidesGrid,
            slidesSizesGrid
          });
    
          if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
            setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
            setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
            const addToSnapGrid = -swiper.snapGrid[0];
            const addToSlidesGrid = -swiper.slidesGrid[0];
            swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
            swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
          }
    
          if (slidesLength !== previousSlidesLength) {
            swiper.emit('slidesLengthChange');
          }
    
          if (snapGrid.length !== previousSnapGridLength) {
            if (swiper.params.watchOverflow) swiper.checkOverflow();
            swiper.emit('snapGridLengthChange');
          }
    
          if (slidesGrid.length !== previousSlidesGridLength) {
            swiper.emit('slidesGridLengthChange');
          }
    
          if (params.watchSlidesProgress) {
            swiper.updateSlidesOffset();
          }
        }
    
        function updateAutoHeight(speed) {
          const swiper = this;
          const activeSlides = [];
          const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
          let newHeight = 0;
          let i;
    
          if (typeof speed === 'number') {
            swiper.setTransition(speed);
          } else if (speed === true) {
            swiper.setTransition(swiper.params.speed);
          }
    
          const getSlideByIndex = index => {
            if (isVirtual) {
              return swiper.slides.filter(el => parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index)[0];
            }
    
            return swiper.slides.eq(index)[0];
          }; // Find slides currently in view
    
    
          if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
            if (swiper.params.centeredSlides) {
              swiper.visibleSlides.each(slide => {
                activeSlides.push(slide);
              });
            } else {
              for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
              }
            }
          } else {
            activeSlides.push(getSlideByIndex(swiper.activeIndex));
          } // Find new height from highest slide in view
    
    
          for (i = 0; i < activeSlides.length; i += 1) {
            if (typeof activeSlides[i] !== 'undefined') {
              const height = activeSlides[i].offsetHeight;
              newHeight = height > newHeight ? height : newHeight;
            }
          } // Update Height
    
    
          if (newHeight) swiper.$wrapperEl.css('height', `${newHeight}px`);
        }
    
        function updateSlidesOffset() {
          const swiper = this;
          const slides = swiper.slides;
    
          for (let i = 0; i < slides.length; i += 1) {
            slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
          }
        }
    
        function updateSlidesProgress(translate = this && this.translate || 0) {
          const swiper = this;
          const params = swiper.params;
          const {
            slides,
            rtlTranslate: rtl
          } = swiper;
          if (slides.length === 0) return;
          if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
          let offsetCenter = -translate;
          if (rtl) offsetCenter = translate; // Visible Slides
    
          slides.removeClass(params.slideVisibleClass);
          swiper.visibleSlidesIndexes = [];
          swiper.visibleSlides = [];
    
          for (let i = 0; i < slides.length; i += 1) {
            const slide = slides[i];
            let slideOffset = slide.swiperSlideOffset;
    
            if (params.cssMode && params.centeredSlides) {
              slideOffset -= slides[0].swiperSlideOffset;
            }
    
            const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
            const slideBefore = -(offsetCenter - slideOffset);
            const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
            const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
    
            if (isVisible) {
              swiper.visibleSlides.push(slide);
              swiper.visibleSlidesIndexes.push(i);
              slides.eq(i).addClass(params.slideVisibleClass);
            }
    
            slide.progress = rtl ? -slideProgress : slideProgress;
          }
    
          swiper.visibleSlides = $(swiper.visibleSlides);
        }
    
        function updateProgress(translate) {
          const swiper = this;
    
          if (typeof translate === 'undefined') {
            const multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line
    
            translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
          }
    
          const params = swiper.params;
          const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
          let {
            progress,
            isBeginning,
            isEnd
          } = swiper;
          const wasBeginning = isBeginning;
          const wasEnd = isEnd;
    
          if (translatesDiff === 0) {
            progress = 0;
            isBeginning = true;
            isEnd = true;
          } else {
            progress = (translate - swiper.minTranslate()) / translatesDiff;
            isBeginning = progress <= 0;
            isEnd = progress >= 1;
          }
    
          Object.assign(swiper, {
            progress,
            isBeginning,
            isEnd
          });
          if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
    
          if (isBeginning && !wasBeginning) {
            swiper.emit('reachBeginning toEdge');
          }
    
          if (isEnd && !wasEnd) {
            swiper.emit('reachEnd toEdge');
          }
    
          if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
            swiper.emit('fromEdge');
          }
    
          swiper.emit('progress', progress);
        }
    
        function updateSlidesClasses() {
          const swiper = this;
          const {
            slides,
            params,
            $wrapperEl,
            activeIndex,
            realIndex
          } = swiper;
          const isVirtual = swiper.virtual && params.virtual.enabled;
          slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
          let activeSlide;
    
          if (isVirtual) {
            activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
          } else {
            activeSlide = slides.eq(activeIndex);
          } // Active classes
    
    
          activeSlide.addClass(params.slideActiveClass);
    
          if (params.loop) {
            // Duplicate to all looped slides
            if (activeSlide.hasClass(params.slideDuplicateClass)) {
              $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
            } else {
              $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
            }
          } // Next Slide
    
    
          let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
    
          if (params.loop && nextSlide.length === 0) {
            nextSlide = slides.eq(0);
            nextSlide.addClass(params.slideNextClass);
          } // Prev Slide
    
    
          let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
    
          if (params.loop && prevSlide.length === 0) {
            prevSlide = slides.eq(-1);
            prevSlide.addClass(params.slidePrevClass);
          }
    
          if (params.loop) {
            // Duplicate to all looped slides
            if (nextSlide.hasClass(params.slideDuplicateClass)) {
              $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
            } else {
              $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
            }
    
            if (prevSlide.hasClass(params.slideDuplicateClass)) {
              $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
            } else {
              $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
            }
          }
    
          swiper.emitSlidesClasses();
        }
    
        function updateActiveIndex(newActiveIndex) {
          const swiper = this;
          const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
          const {
            slidesGrid,
            snapGrid,
            params,
            activeIndex: previousIndex,
            realIndex: previousRealIndex,
            snapIndex: previousSnapIndex
          } = swiper;
          let activeIndex = newActiveIndex;
          let snapIndex;
    
          if (typeof activeIndex === 'undefined') {
            for (let i = 0; i < slidesGrid.length; i += 1) {
              if (typeof slidesGrid[i + 1] !== 'undefined') {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
                  activeIndex = i;
                } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
                  activeIndex = i + 1;
                }
              } else if (translate >= slidesGrid[i]) {
                activeIndex = i;
              }
            } // Normalize slideIndex
    
    
            if (params.normalizeSlideIndex) {
              if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
            }
          }
    
          if (snapGrid.indexOf(translate) >= 0) {
            snapIndex = snapGrid.indexOf(translate);
          } else {
            const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
            snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
          }
    
          if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    
          if (activeIndex === previousIndex) {
            if (snapIndex !== previousSnapIndex) {
              swiper.snapIndex = snapIndex;
              swiper.emit('snapIndexChange');
            }
    
            return;
          } // Get real index
    
    
          const realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
          Object.assign(swiper, {
            snapIndex,
            realIndex,
            previousIndex,
            activeIndex
          });
          swiper.emit('activeIndexChange');
          swiper.emit('snapIndexChange');
    
          if (previousRealIndex !== realIndex) {
            swiper.emit('realIndexChange');
          }
    
          if (swiper.initialized || swiper.params.runCallbacksOnInit) {
            swiper.emit('slideChange');
          }
        }
    
        function updateClickedSlide(e) {
          const swiper = this;
          const params = swiper.params;
          const slide = $(e.target).closest(`.${params.slideClass}`)[0];
          let slideFound = false;
          let slideIndex;
    
          if (slide) {
            for (let i = 0; i < swiper.slides.length; i += 1) {
              if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
              }
            }
          }
    
          if (slide && slideFound) {
            swiper.clickedSlide = slide;
    
            if (swiper.virtual && swiper.params.virtual.enabled) {
              swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
            } else {
              swiper.clickedIndex = slideIndex;
            }
          } else {
            swiper.clickedSlide = undefined;
            swiper.clickedIndex = undefined;
            return;
          }
    
          if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
            swiper.slideToClickedSlide();
          }
        }
    
        var update = {
          updateSize,
          updateSlides,
          updateAutoHeight,
          updateSlidesOffset,
          updateSlidesProgress,
          updateProgress,
          updateSlidesClasses,
          updateActiveIndex,
          updateClickedSlide
        };
    
        function getSwiperTranslate(axis = this.isHorizontal() ? 'x' : 'y') {
          const swiper = this;
          const {
            params,
            rtlTranslate: rtl,
            translate,
            $wrapperEl
          } = swiper;
    
          if (params.virtualTranslate) {
            return rtl ? -translate : translate;
          }
    
          if (params.cssMode) {
            return translate;
          }
    
          let currentTranslate = getTranslate($wrapperEl[0], axis);
          if (rtl) currentTranslate = -currentTranslate;
          return currentTranslate || 0;
        }
    
        function setTranslate(translate, byController) {
          const swiper = this;
          const {
            rtlTranslate: rtl,
            params,
            $wrapperEl,
            wrapperEl,
            progress
          } = swiper;
          let x = 0;
          let y = 0;
          const z = 0;
    
          if (swiper.isHorizontal()) {
            x = rtl ? -translate : translate;
          } else {
            y = translate;
          }
    
          if (params.roundLengths) {
            x = Math.floor(x);
            y = Math.floor(y);
          }
    
          if (params.cssMode) {
            wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
          } else if (!params.virtualTranslate) {
            $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
          }
    
          swiper.previousTranslate = swiper.translate;
          swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress
    
          let newProgress;
          const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    
          if (translatesDiff === 0) {
            newProgress = 0;
          } else {
            newProgress = (translate - swiper.minTranslate()) / translatesDiff;
          }
    
          if (newProgress !== progress) {
            swiper.updateProgress(translate);
          }
    
          swiper.emit('setTranslate', swiper.translate, byController);
        }
    
        function minTranslate() {
          return -this.snapGrid[0];
        }
    
        function maxTranslate() {
          return -this.snapGrid[this.snapGrid.length - 1];
        }
    
        function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
          const swiper = this;
          const {
            params,
            wrapperEl
          } = swiper;
    
          if (swiper.animating && params.preventInteractionOnTransition) {
            return false;
          }
    
          const minTranslate = swiper.minTranslate();
          const maxTranslate = swiper.maxTranslate();
          let newTranslate;
          if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress
    
          swiper.updateProgress(newTranslate);
    
          if (params.cssMode) {
            const isH = swiper.isHorizontal();
    
            if (speed === 0) {
              wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
            } else {
              if (!swiper.support.smoothScroll) {
                animateCSSModeScroll({
                  swiper,
                  targetPosition: -newTranslate,
                  side: isH ? 'left' : 'top'
                });
                return true;
              }
    
              wrapperEl.scrollTo({
                [isH ? 'left' : 'top']: -newTranslate,
                behavior: 'smooth'
              });
            }
    
            return true;
          }
    
          if (speed === 0) {
            swiper.setTransition(0);
            swiper.setTranslate(newTranslate);
    
            if (runCallbacks) {
              swiper.emit('beforeTransitionStart', speed, internal);
              swiper.emit('transitionEnd');
            }
          } else {
            swiper.setTransition(speed);
            swiper.setTranslate(newTranslate);
    
            if (runCallbacks) {
              swiper.emit('beforeTransitionStart', speed, internal);
              swiper.emit('transitionStart');
            }
    
            if (!swiper.animating) {
              swiper.animating = true;
    
              if (!swiper.onTranslateToWrapperTransitionEnd) {
                swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                  if (!swiper || swiper.destroyed) return;
                  if (e.target !== this) return;
                  swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
                  swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
                  swiper.onTranslateToWrapperTransitionEnd = null;
                  delete swiper.onTranslateToWrapperTransitionEnd;
    
                  if (runCallbacks) {
                    swiper.emit('transitionEnd');
                  }
                };
              }
    
              swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
              swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
            }
          }
    
          return true;
        }
    
        var translate = {
          getTranslate: getSwiperTranslate,
          setTranslate,
          minTranslate,
          maxTranslate,
          translateTo
        };
    
        function setTransition(duration, byController) {
          const swiper = this;
    
          if (!swiper.params.cssMode) {
            swiper.$wrapperEl.transition(duration);
          }
    
          swiper.emit('setTransition', duration, byController);
        }
    
        function transitionEmit({
          swiper,
          runCallbacks,
          direction,
          step
        }) {
          const {
            activeIndex,
            previousIndex
          } = swiper;
          let dir = direction;
    
          if (!dir) {
            if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
          }
    
          swiper.emit(`transition${step}`);
    
          if (runCallbacks && activeIndex !== previousIndex) {
            if (dir === 'reset') {
              swiper.emit(`slideResetTransition${step}`);
              return;
            }
    
            swiper.emit(`slideChangeTransition${step}`);
    
            if (dir === 'next') {
              swiper.emit(`slideNextTransition${step}`);
            } else {
              swiper.emit(`slidePrevTransition${step}`);
            }
          }
        }
    
        function transitionStart(runCallbacks = true, direction) {
          const swiper = this;
          const {
            params
          } = swiper;
          if (params.cssMode) return;
    
          if (params.autoHeight) {
            swiper.updateAutoHeight();
          }
    
          transitionEmit({
            swiper,
            runCallbacks,
            direction,
            step: 'Start'
          });
        }
    
        function transitionEnd(runCallbacks = true, direction) {
          const swiper = this;
          const {
            params
          } = swiper;
          swiper.animating = false;
          if (params.cssMode) return;
          swiper.setTransition(0);
          transitionEmit({
            swiper,
            runCallbacks,
            direction,
            step: 'End'
          });
        }
    
        var transition = {
          setTransition,
          transitionStart,
          transitionEnd
        };
    
        function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
          if (typeof index !== 'number' && typeof index !== 'string') {
            throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
          }
    
          if (typeof index === 'string') {
            /**
             * The `index` argument converted from `string` to `number`.
             * @type {number}
             */
            const indexAsNumber = parseInt(index, 10);
            /**
             * Determines whether the `index` argument is a valid `number`
             * after being converted from the `string` type.
             * @type {boolean}
             */
    
            const isValidNumber = isFinite(indexAsNumber);
    
            if (!isValidNumber) {
              throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
            } // Knowing that the converted `index` is a valid number,
            // we can update the original argument's value.
    
    
            index = indexAsNumber;
          }
    
          const swiper = this;
          let slideIndex = index;
          if (slideIndex < 0) slideIndex = 0;
          const {
            params,
            snapGrid,
            slidesGrid,
            previousIndex,
            activeIndex,
            rtlTranslate: rtl,
            wrapperEl,
            enabled
          } = swiper;
    
          if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
            return false;
          }
    
          const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
          let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
          if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    
          if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
            swiper.emit('beforeSlideChangeStart');
          }
    
          const translate = -snapGrid[snapIndex]; // Update progress
    
          swiper.updateProgress(translate); // Normalize slideIndex
    
          if (params.normalizeSlideIndex) {
            for (let i = 0; i < slidesGrid.length; i += 1) {
              const normalizedTranslate = -Math.floor(translate * 100);
              const normalizedGrid = Math.floor(slidesGrid[i] * 100);
              const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
    
              if (typeof slidesGrid[i + 1] !== 'undefined') {
                if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
                  slideIndex = i;
                } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
                  slideIndex = i + 1;
                }
              } else if (normalizedTranslate >= normalizedGrid) {
                slideIndex = i;
              }
            }
          } // Directions locks
    
    
          if (swiper.initialized && slideIndex !== activeIndex) {
            if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
              return false;
            }
    
            if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
              if ((activeIndex || 0) !== slideIndex) return false;
            }
          }
    
          let direction;
          if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index
    
          if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
            swiper.updateActiveIndex(slideIndex); // Update Height
    
            if (params.autoHeight) {
              swiper.updateAutoHeight();
            }
    
            swiper.updateSlidesClasses();
    
            if (params.effect !== 'slide') {
              swiper.setTranslate(translate);
            }
    
            if (direction !== 'reset') {
              swiper.transitionStart(runCallbacks, direction);
              swiper.transitionEnd(runCallbacks, direction);
            }
    
            return false;
          }
    
          if (params.cssMode) {
            const isH = swiper.isHorizontal();
            const t = rtl ? translate : -translate;
    
            if (speed === 0) {
              const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    
              if (isVirtual) {
                swiper.wrapperEl.style.scrollSnapType = 'none';
              }
    
              wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
    
              if (isVirtual) {
                requestAnimationFrame(() => {
                  swiper.wrapperEl.style.scrollSnapType = '';
                });
              }
            } else {
              if (!swiper.support.smoothScroll) {
                animateCSSModeScroll({
                  swiper,
                  targetPosition: t,
                  side: isH ? 'left' : 'top'
                });
                return true;
              }
    
              wrapperEl.scrollTo({
                [isH ? 'left' : 'top']: t,
                behavior: 'smooth'
              });
            }
    
            return true;
          }
    
          if (speed === 0) {
            swiper.setTransition(0);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            swiper.transitionEnd(runCallbacks, direction);
          } else {
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.transitionStart(runCallbacks, direction);
    
            if (!swiper.animating) {
              swiper.animating = true;
    
              if (!swiper.onSlideToWrapperTransitionEnd) {
                swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                  if (!swiper || swiper.destroyed) return;
                  if (e.target !== this) return;
                  swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
                  swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
                  swiper.onSlideToWrapperTransitionEnd = null;
                  delete swiper.onSlideToWrapperTransitionEnd;
                  swiper.transitionEnd(runCallbacks, direction);
                };
              }
    
              swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
              swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
            }
          }
    
          return true;
        }
    
        function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
          const swiper = this;
          let newIndex = index;
    
          if (swiper.params.loop) {
            newIndex += swiper.loopedSlides;
          }
    
          return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }
    
        /* eslint no-unused-vars: "off" */
        function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
          const swiper = this;
          const {
            animating,
            enabled,
            params
          } = swiper;
          if (!enabled) return swiper;
          let perGroup = params.slidesPerGroup;
    
          if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
            perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
          }
    
          const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    
          if (params.loop) {
            if (animating && params.loopPreventsSlide) return false;
            swiper.loopFix(); // eslint-disable-next-line
    
            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
          }
    
          return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
    
        /* eslint no-unused-vars: "off" */
        function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
          const swiper = this;
          const {
            params,
            animating,
            snapGrid,
            slidesGrid,
            rtlTranslate,
            enabled
          } = swiper;
          if (!enabled) return swiper;
    
          if (params.loop) {
            if (animating && params.loopPreventsSlide) return false;
            swiper.loopFix(); // eslint-disable-next-line
    
            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
          }
    
          const translate = rtlTranslate ? swiper.translate : -swiper.translate;
    
          function normalize(val) {
            if (val < 0) return -Math.floor(Math.abs(val));
            return Math.floor(val);
          }
    
          const normalizedTranslate = normalize(translate);
          const normalizedSnapGrid = snapGrid.map(val => normalize(val));
          let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    
          if (typeof prevSnap === 'undefined' && params.cssMode) {
            let prevSnapIndex;
            snapGrid.forEach((snap, snapIndex) => {
              if (normalizedTranslate >= snap) {
                // prevSnap = snap;
                prevSnapIndex = snapIndex;
              }
            });
    
            if (typeof prevSnapIndex !== 'undefined') {
              prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
          }
    
          let prevIndex = 0;
    
          if (typeof prevSnap !== 'undefined') {
            prevIndex = slidesGrid.indexOf(prevSnap);
            if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
    
            if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
              prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
              prevIndex = Math.max(prevIndex, 0);
            }
          }
    
          return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
    
        /* eslint no-unused-vars: "off" */
        function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
          const swiper = this;
          return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
    
        /* eslint no-unused-vars: "off" */
        function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = 0.5) {
          const swiper = this;
          let index = swiper.activeIndex;
          const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
          const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
          const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    
          if (translate >= swiper.snapGrid[snapIndex]) {
            // The current translate is on or after the current snap index, so the choice
            // is between the current index and the one after it.
            const currentSnap = swiper.snapGrid[snapIndex];
            const nextSnap = swiper.snapGrid[snapIndex + 1];
    
            if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
              index += swiper.params.slidesPerGroup;
            }
          } else {
            // The current translate is before the current snap index, so the choice
            // is between the current index and the one before it.
            const prevSnap = swiper.snapGrid[snapIndex - 1];
            const currentSnap = swiper.snapGrid[snapIndex];
    
            if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
              index -= swiper.params.slidesPerGroup;
            }
          }
    
          index = Math.max(index, 0);
          index = Math.min(index, swiper.slidesGrid.length - 1);
          return swiper.slideTo(index, speed, runCallbacks, internal);
        }
    
        function slideToClickedSlide() {
          const swiper = this;
          const {
            params,
            $wrapperEl
          } = swiper;
          const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
          let slideToIndex = swiper.clickedIndex;
          let realIndex;
    
          if (params.loop) {
            if (swiper.animating) return;
            realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
    
            if (params.centeredSlides) {
              if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                swiper.loopFix();
                slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                nextTick(() => {
                  swiper.slideTo(slideToIndex);
                });
              } else {
                swiper.slideTo(slideToIndex);
              }
            } else if (slideToIndex > swiper.slides.length - slidesPerView) {
              swiper.loopFix();
              slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
              nextTick(() => {
                swiper.slideTo(slideToIndex);
              });
            } else {
              swiper.slideTo(slideToIndex);
            }
          } else {
            swiper.slideTo(slideToIndex);
          }
        }
    
        var slide = {
          slideTo,
          slideToLoop,
          slideNext,
          slidePrev,
          slideReset,
          slideToClosest,
          slideToClickedSlide
        };
    
        function loopCreate() {
          const swiper = this;
          const document = getDocument();
          const {
            params,
            $wrapperEl
          } = swiper; // Remove duplicated slides
    
          $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
          let slides = $wrapperEl.children(`.${params.slideClass}`);
    
          if (params.loopFillGroupWithBlank) {
            const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
    
            if (blankSlidesNum !== params.slidesPerGroup) {
              for (let i = 0; i < blankSlidesNum; i += 1) {
                const blankNode = $(document.createElement('div')).addClass(`${params.slideClass} ${params.slideBlankClass}`);
                $wrapperEl.append(blankNode);
              }
    
              slides = $wrapperEl.children(`.${params.slideClass}`);
            }
          }
    
          if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
          swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
          swiper.loopedSlides += params.loopAdditionalSlides;
    
          if (swiper.loopedSlides > slides.length) {
            swiper.loopedSlides = slides.length;
          }
    
          const prependSlides = [];
          const appendSlides = [];
          slides.each((el, index) => {
            const slide = $(el);
    
            if (index < swiper.loopedSlides) {
              appendSlides.push(el);
            }
    
            if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
              prependSlides.push(el);
            }
    
            slide.attr('data-swiper-slide-index', index);
          });
    
          for (let i = 0; i < appendSlides.length; i += 1) {
            $wrapperEl.append($(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
          }
    
          for (let i = prependSlides.length - 1; i >= 0; i -= 1) {
            $wrapperEl.prepend($(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
          }
        }
    
        function loopFix() {
          const swiper = this;
          swiper.emit('beforeLoopFix');
          const {
            activeIndex,
            slides,
            loopedSlides,
            allowSlidePrev,
            allowSlideNext,
            snapGrid,
            rtlTranslate: rtl
          } = swiper;
          let newIndex;
          swiper.allowSlidePrev = true;
          swiper.allowSlideNext = true;
          const snapTranslate = -snapGrid[activeIndex];
          const diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding
    
          if (activeIndex < loopedSlides) {
            newIndex = slides.length - loopedSlides * 3 + activeIndex;
            newIndex += loopedSlides;
            const slideChanged = swiper.slideTo(newIndex, 0, false, true);
    
            if (slideChanged && diff !== 0) {
              swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
          } else if (activeIndex >= slides.length - loopedSlides) {
            // Fix For Positive Oversliding
            newIndex = -slides.length + activeIndex + loopedSlides;
            newIndex += loopedSlides;
            const slideChanged = swiper.slideTo(newIndex, 0, false, true);
    
            if (slideChanged && diff !== 0) {
              swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
          }
    
          swiper.allowSlidePrev = allowSlidePrev;
          swiper.allowSlideNext = allowSlideNext;
          swiper.emit('loopFix');
        }
    
        function loopDestroy() {
          const swiper = this;
          const {
            $wrapperEl,
            params,
            slides
          } = swiper;
          $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
          slides.removeAttr('data-swiper-slide-index');
        }
    
        var loop = {
          loopCreate,
          loopFix,
          loopDestroy
        };
    
        function setGrabCursor(moving) {
          const swiper = this;
          if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
          const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
          el.style.cursor = 'move';
          el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
          el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
          el.style.cursor = moving ? 'grabbing' : 'grab';
        }
    
        function unsetGrabCursor() {
          const swiper = this;
    
          if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
            return;
          }
    
          swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
        }
    
        var grabCursor = {
          setGrabCursor,
          unsetGrabCursor
        };
    
        function closestElement(selector, base = this) {
          function __closestFrom(el) {
            if (!el || el === getDocument() || el === getWindow()) return null;
            if (el.assignedSlot) el = el.assignedSlot;
            const found = el.closest(selector);
            return found || __closestFrom(el.getRootNode().host);
          }
    
          return __closestFrom(base);
        }
    
        function onTouchStart(event) {
          const swiper = this;
          const document = getDocument();
          const window = getWindow();
          const data = swiper.touchEventsData;
          const {
            params,
            touches,
            enabled
          } = swiper;
          if (!enabled) return;
    
          if (swiper.animating && params.preventInteractionOnTransition) {
            return;
          }
    
          if (!swiper.animating && params.cssMode && params.loop) {
            swiper.loopFix();
          }
    
          let e = event;
          if (e.originalEvent) e = e.originalEvent;
          let $targetEl = $(e.target);
    
          if (params.touchEventsTarget === 'wrapper') {
            if (!$targetEl.closest(swiper.wrapperEl).length) return;
          }
    
          data.isTouchEvent = e.type === 'touchstart';
          if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
          if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
          if (data.isTouched && data.isMoved) return; // change target el for shadow root component
    
          const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
    
          if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
            $targetEl = $(event.path[0]);
          }
    
          const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
          const isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element
    
          if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, e.target) : $targetEl.closest(noSwipingSelector)[0])) {
            swiper.allowClick = true;
            return;
          }
    
          if (params.swipeHandler) {
            if (!$targetEl.closest(params.swipeHandler)[0]) return;
          }
    
          touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
          touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
          const startX = touches.currentX;
          const startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore
    
          const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
          const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    
          if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
            if (edgeSwipeDetection === 'prevent') {
              event.preventDefault();
            } else {
              return;
            }
          }
    
          Object.assign(data, {
            isTouched: true,
            isMoved: false,
            allowTouchCallbacks: true,
            isScrolling: undefined,
            startMoving: undefined
          });
          touches.startX = startX;
          touches.startY = startY;
          data.touchStartTime = now();
          swiper.allowClick = true;
          swiper.updateSize();
          swiper.swipeDirection = undefined;
          if (params.threshold > 0) data.allowThresholdMove = false;
    
          if (e.type !== 'touchstart') {
            let preventDefault = true;
            if ($targetEl.is(data.focusableElements)) preventDefault = false;
    
            if (document.activeElement && $(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) {
              document.activeElement.blur();
            }
    
            const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
    
            if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
              e.preventDefault();
            }
          }
    
          swiper.emit('touchStart', e);
        }
    
        function onTouchMove(event) {
          const document = getDocument();
          const swiper = this;
          const data = swiper.touchEventsData;
          const {
            params,
            touches,
            rtlTranslate: rtl,
            enabled
          } = swiper;
          if (!enabled) return;
          let e = event;
          if (e.originalEvent) e = e.originalEvent;
    
          if (!data.isTouched) {
            if (data.startMoving && data.isScrolling) {
              swiper.emit('touchMoveOpposite', e);
            }
    
            return;
          }
    
          if (data.isTouchEvent && e.type !== 'touchmove') return;
          const targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
          const pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
          const pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;
    
          if (e.preventedByNestedSwiper) {
            touches.startX = pageX;
            touches.startY = pageY;
            return;
          }
    
          if (!swiper.allowTouchMove) {
            // isMoved = true;
            swiper.allowClick = false;
    
            if (data.isTouched) {
              Object.assign(touches, {
                startX: pageX,
                startY: pageY,
                currentX: pageX,
                currentY: pageY
              });
              data.touchStartTime = now();
            }
    
            return;
          }
    
          if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
            if (swiper.isVertical()) {
              // Vertical
              if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                data.isTouched = false;
                data.isMoved = false;
                return;
              }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
              return;
            }
          }
    
          if (data.isTouchEvent && document.activeElement) {
            if (e.target === document.activeElement && $(e.target).is(data.focusableElements)) {
              data.isMoved = true;
              swiper.allowClick = false;
              return;
            }
          }
    
          if (data.allowTouchCallbacks) {
            swiper.emit('touchMove', e);
          }
    
          if (e.targetTouches && e.targetTouches.length > 1) return;
          touches.currentX = pageX;
          touches.currentY = pageY;
          const diffX = touches.currentX - touches.startX;
          const diffY = touches.currentY - touches.startY;
          if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
    
          if (typeof data.isScrolling === 'undefined') {
            let touchAngle;
    
            if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
              data.isScrolling = false;
            } else {
              // eslint-disable-next-line
              if (diffX * diffX + diffY * diffY >= 25) {
                touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
              }
            }
          }
    
          if (data.isScrolling) {
            swiper.emit('touchMoveOpposite', e);
          }
    
          if (typeof data.startMoving === 'undefined') {
            if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
              data.startMoving = true;
            }
          }
    
          if (data.isScrolling) {
            data.isTouched = false;
            return;
          }
    
          if (!data.startMoving) {
            return;
          }
    
          swiper.allowClick = false;
    
          if (!params.cssMode && e.cancelable) {
            e.preventDefault();
          }
    
          if (params.touchMoveStopPropagation && !params.nested) {
            e.stopPropagation();
          }
    
          if (!data.isMoved) {
            if (params.loop && !params.cssMode) {
              swiper.loopFix();
            }
    
            data.startTranslate = swiper.getTranslate();
            swiper.setTransition(0);
    
            if (swiper.animating) {
              swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
            }
    
            data.allowMomentumBounce = false; // Grab Cursor
    
            if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
              swiper.setGrabCursor(true);
            }
    
            swiper.emit('sliderFirstMove', e);
          }
    
          swiper.emit('sliderMove', e);
          data.isMoved = true;
          let diff = swiper.isHorizontal() ? diffX : diffY;
          touches.diff = diff;
          diff *= params.touchRatio;
          if (rtl) diff = -diff;
          swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
          data.currentTranslate = diff + data.startTranslate;
          let disableParentSwiper = true;
          let resistanceRatio = params.resistanceRatio;
    
          if (params.touchReleaseOnEdges) {
            resistanceRatio = 0;
          }
    
          if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
            disableParentSwiper = false;
            if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
          } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
            disableParentSwiper = false;
            if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
          }
    
          if (disableParentSwiper) {
            e.preventedByNestedSwiper = true;
          } // Directions locks
    
    
          if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
            data.currentTranslate = data.startTranslate;
          }
    
          if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
            data.currentTranslate = data.startTranslate;
          }
    
          if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
            data.currentTranslate = data.startTranslate;
          } // Threshold
    
    
          if (params.threshold > 0) {
            if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
              if (!data.allowThresholdMove) {
                data.allowThresholdMove = true;
                touches.startX = touches.currentX;
                touches.startY = touches.currentY;
                data.currentTranslate = data.startTranslate;
                touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                return;
              }
            } else {
              data.currentTranslate = data.startTranslate;
              return;
            }
          }
    
          if (!params.followFinger || params.cssMode) return; // Update active index in free mode
    
          if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
          }
    
          if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) {
            swiper.freeMode.onTouchMove();
          } // Update progress
    
    
          swiper.updateProgress(data.currentTranslate); // Update translate
    
          swiper.setTranslate(data.currentTranslate);
        }
    
        function onTouchEnd(event) {
          const swiper = this;
          const data = swiper.touchEventsData;
          const {
            params,
            touches,
            rtlTranslate: rtl,
            slidesGrid,
            enabled
          } = swiper;
          if (!enabled) return;
          let e = event;
          if (e.originalEvent) e = e.originalEvent;
    
          if (data.allowTouchCallbacks) {
            swiper.emit('touchEnd', e);
          }
    
          data.allowTouchCallbacks = false;
    
          if (!data.isTouched) {
            if (data.isMoved && params.grabCursor) {
              swiper.setGrabCursor(false);
            }
    
            data.isMoved = false;
            data.startMoving = false;
            return;
          } // Return Grab Cursor
    
    
          if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
            swiper.setGrabCursor(false);
          } // Time diff
    
    
          const touchEndTime = now();
          const timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click
    
          if (swiper.allowClick) {
            swiper.updateClickedSlide(e);
            swiper.emit('tap click', e);
    
            if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
              swiper.emit('doubleTap doubleClick', e);
            }
          }
    
          data.lastClickTime = now();
          nextTick(() => {
            if (!swiper.destroyed) swiper.allowClick = true;
          });
    
          if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            return;
          }
    
          data.isTouched = false;
          data.isMoved = false;
          data.startMoving = false;
          let currentPos;
    
          if (params.followFinger) {
            currentPos = rtl ? swiper.translate : -swiper.translate;
          } else {
            currentPos = -data.currentTranslate;
          }
    
          if (params.cssMode) {
            return;
          }
    
          if (swiper.params.freeMode && params.freeMode.enabled) {
            swiper.freeMode.onTouchEnd({
              currentPos
            });
            return;
          } // Find current slide
    
    
          let stopIndex = 0;
          let groupSize = swiper.slidesSizesGrid[0];
    
          for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
            const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    
            if (typeof slidesGrid[i + increment] !== 'undefined') {
              if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                stopIndex = i;
                groupSize = slidesGrid[i + increment] - slidesGrid[i];
              }
            } else if (currentPos >= slidesGrid[i]) {
              stopIndex = i;
              groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
            }
          } // Find current slide size
    
    
          const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
          const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    
          if (timeDiff > params.longSwipesMs) {
            // Long touches
            if (!params.longSwipes) {
              swiper.slideTo(swiper.activeIndex);
              return;
            }
    
            if (swiper.swipeDirection === 'next') {
              if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
            }
    
            if (swiper.swipeDirection === 'prev') {
              if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
            }
          } else {
            // Short swipes
            if (!params.shortSwipes) {
              swiper.slideTo(swiper.activeIndex);
              return;
            }
    
            const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    
            if (!isNavButtonTarget) {
              if (swiper.swipeDirection === 'next') {
                swiper.slideTo(stopIndex + increment);
              }
    
              if (swiper.swipeDirection === 'prev') {
                swiper.slideTo(stopIndex);
              }
            } else if (e.target === swiper.navigation.nextEl) {
              swiper.slideTo(stopIndex + increment);
            } else {
              swiper.slideTo(stopIndex);
            }
          }
        }
    
        function onResize() {
          const swiper = this;
          const {
            params,
            el
          } = swiper;
          if (el && el.offsetWidth === 0) return; // Breakpoints
    
          if (params.breakpoints) {
            swiper.setBreakpoint();
          } // Save locks
    
    
          const {
            allowSlideNext,
            allowSlidePrev,
            snapGrid
          } = swiper; // Disable locks on resize
    
          swiper.allowSlideNext = true;
          swiper.allowSlidePrev = true;
          swiper.updateSize();
          swiper.updateSlides();
          swiper.updateSlidesClasses();
    
          if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
            swiper.slideTo(swiper.slides.length - 1, 0, false, true);
          } else {
            swiper.slideTo(swiper.activeIndex, 0, false, true);
          }
    
          if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
            swiper.autoplay.run();
          } // Return locks after resize
    
    
          swiper.allowSlidePrev = allowSlidePrev;
          swiper.allowSlideNext = allowSlideNext;
    
          if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
            swiper.checkOverflow();
          }
        }
    
        function onClick(e) {
          const swiper = this;
          if (!swiper.enabled) return;
    
          if (!swiper.allowClick) {
            if (swiper.params.preventClicks) e.preventDefault();
    
            if (swiper.params.preventClicksPropagation && swiper.animating) {
              e.stopPropagation();
              e.stopImmediatePropagation();
            }
          }
        }
    
        function onScroll() {
          const swiper = this;
          const {
            wrapperEl,
            rtlTranslate,
            enabled
          } = swiper;
          if (!enabled) return;
          swiper.previousTranslate = swiper.translate;
    
          if (swiper.isHorizontal()) {
            swiper.translate = -wrapperEl.scrollLeft;
          } else {
            swiper.translate = -wrapperEl.scrollTop;
          } // eslint-disable-next-line
    
    
          if (swiper.translate === -0) swiper.translate = 0;
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
          let newProgress;
          const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    
          if (translatesDiff === 0) {
            newProgress = 0;
          } else {
            newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
          }
    
          if (newProgress !== swiper.progress) {
            swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
          }
    
          swiper.emit('setTranslate', swiper.translate, false);
        }
    
        let dummyEventAttached = false;
    
        function dummyEventListener() {}
    
        const events = (swiper, method) => {
          const document = getDocument();
          const {
            params,
            touchEvents,
            el,
            wrapperEl,
            device,
            support
          } = swiper;
          const capture = !!params.nested;
          const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
          const swiperMethod = method; // Touch Events
    
          if (!support.touch) {
            el[domMethod](touchEvents.start, swiper.onTouchStart, false);
            document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
            document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
          } else {
            const passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
              passive: true,
              capture: false
            } : false;
            el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
            el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
              passive: false,
              capture
            } : capture);
            el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
    
            if (touchEvents.cancel) {
              el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
            }
          } // Prevent Links Clicks
    
    
          if (params.preventClicks || params.preventClicksPropagation) {
            el[domMethod]('click', swiper.onClick, true);
          }
    
          if (params.cssMode) {
            wrapperEl[domMethod]('scroll', swiper.onScroll);
          } // Resize handler
    
    
          if (params.updateOnWindowResize) {
            swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
          } else {
            swiper[swiperMethod]('observerUpdate', onResize, true);
          }
        };
    
        function attachEvents() {
          const swiper = this;
          const document = getDocument();
          const {
            params,
            support
          } = swiper;
          swiper.onTouchStart = onTouchStart.bind(swiper);
          swiper.onTouchMove = onTouchMove.bind(swiper);
          swiper.onTouchEnd = onTouchEnd.bind(swiper);
    
          if (params.cssMode) {
            swiper.onScroll = onScroll.bind(swiper);
          }
    
          swiper.onClick = onClick.bind(swiper);
    
          if (support.touch && !dummyEventAttached) {
            document.addEventListener('touchstart', dummyEventListener);
            dummyEventAttached = true;
          }
    
          events(swiper, 'on');
        }
    
        function detachEvents() {
          const swiper = this;
          events(swiper, 'off');
        }
    
        var events$1 = {
          attachEvents,
          detachEvents
        };
    
        const isGridEnabled = (swiper, params) => {
          return swiper.grid && params.grid && params.grid.rows > 1;
        };
    
        function setBreakpoint() {
          const swiper = this;
          const {
            activeIndex,
            initialized,
            loopedSlides = 0,
            params,
            $el
          } = swiper;
          const breakpoints = params.breakpoints;
          if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters
    
          const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
          if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
          const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
          const breakpointParams = breakpointOnlyParams || swiper.originalParams;
          const wasMultiRow = isGridEnabled(swiper, params);
          const isMultiRow = isGridEnabled(swiper, breakpointParams);
          const wasEnabled = params.enabled;
    
          if (wasMultiRow && !isMultiRow) {
            $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
            swiper.emitContainerClasses();
          } else if (!wasMultiRow && isMultiRow) {
            $el.addClass(`${params.containerModifierClass}grid`);
    
            if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
              $el.addClass(`${params.containerModifierClass}grid-column`);
            }
    
            swiper.emitContainerClasses();
          }
    
          const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
          const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    
          if (directionChanged && initialized) {
            swiper.changeDirection();
          }
    
          extend(swiper.params, breakpointParams);
          const isEnabled = swiper.params.enabled;
          Object.assign(swiper, {
            allowTouchMove: swiper.params.allowTouchMove,
            allowSlideNext: swiper.params.allowSlideNext,
            allowSlidePrev: swiper.params.allowSlidePrev
          });
    
          if (wasEnabled && !isEnabled) {
            swiper.disable();
          } else if (!wasEnabled && isEnabled) {
            swiper.enable();
          }
    
          swiper.currentBreakpoint = breakpoint;
          swiper.emit('_beforeBreakpoint', breakpointParams);
    
          if (needsReLoop && initialized) {
            swiper.loopDestroy();
            swiper.loopCreate();
            swiper.updateSlides();
            swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
          }
    
          swiper.emit('breakpoint', breakpointParams);
        }
    
        function getBreakpoint(breakpoints, base = 'window', containerEl) {
          if (!breakpoints || base === 'container' && !containerEl) return undefined;
          let breakpoint = false;
          const window = getWindow();
          const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
          const points = Object.keys(breakpoints).map(point => {
            if (typeof point === 'string' && point.indexOf('@') === 0) {
              const minRatio = parseFloat(point.substr(1));
              const value = currentHeight * minRatio;
              return {
                value,
                point
              };
            }
    
            return {
              value: point,
              point
            };
          });
          points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
    
          for (let i = 0; i < points.length; i += 1) {
            const {
              point,
              value
            } = points[i];
    
            if (base === 'window') {
              if (window.matchMedia(`(min-width: ${value}px)`).matches) {
                breakpoint = point;
              }
            } else if (value <= containerEl.clientWidth) {
              breakpoint = point;
            }
          }
    
          return breakpoint || 'max';
        }
    
        var breakpoints = {
          setBreakpoint,
          getBreakpoint
        };
    
        function prepareClasses(entries, prefix) {
          const resultClasses = [];
          entries.forEach(item => {
            if (typeof item === 'object') {
              Object.keys(item).forEach(classNames => {
                if (item[classNames]) {
                  resultClasses.push(prefix + classNames);
                }
              });
            } else if (typeof item === 'string') {
              resultClasses.push(prefix + item);
            }
          });
          return resultClasses;
        }
    
        function addClasses() {
          const swiper = this;
          const {
            classNames,
            params,
            rtl,
            $el,
            device,
            support
          } = swiper; // prettier-ignore
    
          const suffixes = prepareClasses(['initialized', params.direction, {
            'pointer-events': !support.touch
          }, {
            'free-mode': swiper.params.freeMode && params.freeMode.enabled
          }, {
            'autoheight': params.autoHeight
          }, {
            'rtl': rtl
          }, {
            'grid': params.grid && params.grid.rows > 1
          }, {
            'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
          }, {
            'android': device.android
          }, {
            'ios': device.ios
          }, {
            'css-mode': params.cssMode
          }, {
            'centered': params.cssMode && params.centeredSlides
          }], params.containerModifierClass);
          classNames.push(...suffixes);
          $el.addClass([...classNames].join(' '));
          swiper.emitContainerClasses();
        }
    
        function removeClasses() {
          const swiper = this;
          const {
            $el,
            classNames
          } = swiper;
          $el.removeClass(classNames.join(' '));
          swiper.emitContainerClasses();
        }
    
        var classes = {
          addClasses,
          removeClasses
        };
    
        function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
          const window = getWindow();
          let image;
    
          function onReady() {
            if (callback) callback();
          }
    
          const isPicture = $(imageEl).parent('picture')[0];
    
          if (!isPicture && (!imageEl.complete || !checkForComplete)) {
            if (src) {
              image = new window.Image();
              image.onload = onReady;
              image.onerror = onReady;
    
              if (sizes) {
                image.sizes = sizes;
              }
    
              if (srcset) {
                image.srcset = srcset;
              }
    
              if (src) {
                image.src = src;
              }
            } else {
              onReady();
            }
          } else {
            // image already loaded...
            onReady();
          }
        }
    
        function preloadImages() {
          const swiper = this;
          swiper.imagesToLoad = swiper.$el.find('img');
    
          function onReady() {
            if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
            if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;
    
            if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
              if (swiper.params.updateOnImagesReady) swiper.update();
              swiper.emit('imagesReady');
            }
          }
    
          for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
            const imageEl = swiper.imagesToLoad[i];
            swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
          }
        }
    
        var images = {
          loadImage,
          preloadImages
        };
    
        function checkOverflow() {
          const swiper = this;
          const {
            isLocked: wasLocked,
            params
          } = swiper;
          const {
            slidesOffsetBefore
          } = params;
    
          if (slidesOffsetBefore) {
            const lastSlideIndex = swiper.slides.length - 1;
            const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
            swiper.isLocked = swiper.size > lastSlideRightEdge;
          } else {
            swiper.isLocked = swiper.snapGrid.length === 1;
          }
    
          if (params.allowSlideNext === true) {
            swiper.allowSlideNext = !swiper.isLocked;
          }
    
          if (params.allowSlidePrev === true) {
            swiper.allowSlidePrev = !swiper.isLocked;
          }
    
          if (wasLocked && wasLocked !== swiper.isLocked) {
            swiper.isEnd = false;
          }
    
          if (wasLocked !== swiper.isLocked) {
            swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
          }
        }
    
        var checkOverflow$1 = {
          checkOverflow
        };
    
        var defaults = {
          init: true,
          direction: 'horizontal',
          touchEventsTarget: 'wrapper',
          initialSlide: 0,
          speed: 300,
          cssMode: false,
          updateOnWindowResize: true,
          resizeObserver: true,
          nested: false,
          createElements: false,
          enabled: true,
          focusableElements: 'input, select, option, textarea, button, video, label',
          // Overrides
          width: null,
          height: null,
          //
          preventInteractionOnTransition: false,
          // ssr
          userAgent: null,
          url: null,
          // To support iOS's swipe-to-go-back gesture (when being used in-app).
          edgeSwipeDetection: false,
          edgeSwipeThreshold: 20,
          // Autoheight
          autoHeight: false,
          // Set wrapper width
          setWrapperSize: false,
          // Virtual Translate
          virtualTranslate: false,
          // Effects
          effect: 'slide',
          // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
          // Breakpoints
          breakpoints: undefined,
          breakpointsBase: 'window',
          // Slides grid
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerGroup: 1,
          slidesPerGroupSkip: 0,
          slidesPerGroupAuto: false,
          centeredSlides: false,
          centeredSlidesBounds: false,
          slidesOffsetBefore: 0,
          // in px
          slidesOffsetAfter: 0,
          // in px
          normalizeSlideIndex: true,
          centerInsufficientSlides: false,
          // Disable swiper and hide navigation when container not overflow
          watchOverflow: true,
          // Round length
          roundLengths: false,
          // Touches
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: true,
          shortSwipes: true,
          longSwipes: true,
          longSwipesRatio: 0.5,
          longSwipesMs: 300,
          followFinger: true,
          allowTouchMove: true,
          threshold: 0,
          touchMoveStopPropagation: false,
          touchStartPreventDefault: true,
          touchStartForcePreventDefault: false,
          touchReleaseOnEdges: false,
          // Unique Navigation Elements
          uniqueNavElements: true,
          // Resistance
          resistance: true,
          resistanceRatio: 0.85,
          // Progress
          watchSlidesProgress: false,
          // Cursor
          grabCursor: false,
          // Clicks
          preventClicks: true,
          preventClicksPropagation: true,
          slideToClickedSlide: false,
          // Images
          preloadImages: true,
          updateOnImagesReady: true,
          // loop
          loop: false,
          loopAdditionalSlides: 0,
          loopedSlides: null,
          loopFillGroupWithBlank: false,
          loopPreventsSlide: true,
          // Swiping/no swiping
          allowSlidePrev: true,
          allowSlideNext: true,
          swipeHandler: null,
          // '.swipe-handler',
          noSwiping: true,
          noSwipingClass: 'swiper-no-swiping',
          noSwipingSelector: null,
          // Passive Listeners
          passiveListeners: true,
          // NS
          containerModifierClass: 'swiper-',
          // NEW
          slideClass: 'swiper-slide',
          slideBlankClass: 'swiper-slide-invisible-blank',
          slideActiveClass: 'swiper-slide-active',
          slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
          slideVisibleClass: 'swiper-slide-visible',
          slideDuplicateClass: 'swiper-slide-duplicate',
          slideNextClass: 'swiper-slide-next',
          slideDuplicateNextClass: 'swiper-slide-duplicate-next',
          slidePrevClass: 'swiper-slide-prev',
          slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
          wrapperClass: 'swiper-wrapper',
          // Callbacks
          runCallbacksOnInit: true,
          // Internals
          _emitClasses: false
        };
    
        function moduleExtendParams(params, allModulesParams) {
          return function extendParams(obj = {}) {
            const moduleParamName = Object.keys(obj)[0];
            const moduleParams = obj[moduleParamName];
    
            if (typeof moduleParams !== 'object' || moduleParams === null) {
              extend(allModulesParams, obj);
              return;
            }
    
            if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
              params[moduleParamName] = {
                auto: true
              };
            }
    
            if (!(moduleParamName in params && 'enabled' in moduleParams)) {
              extend(allModulesParams, obj);
              return;
            }
    
            if (params[moduleParamName] === true) {
              params[moduleParamName] = {
                enabled: true
              };
            }
    
            if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
              params[moduleParamName].enabled = true;
            }
    
            if (!params[moduleParamName]) params[moduleParamName] = {
              enabled: false
            };
            extend(allModulesParams, obj);
          };
        }
    
        /* eslint no-param-reassign: "off" */
        const prototypes = {
          eventsEmitter,
          update,
          translate,
          transition,
          slide,
          loop,
          grabCursor,
          events: events$1,
          breakpoints,
          checkOverflow: checkOverflow$1,
          classes,
          images
        };
        const extendedDefaults = {};
    
        class Swiper {
          constructor(...args) {
            let el;
            let params;
    
            if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
              params = args[0];
            } else {
              [el, params] = args;
            }
    
            if (!params) params = {};
            params = extend({}, params);
            if (el && !params.el) params.el = el;
    
            if (params.el && $(params.el).length > 1) {
              const swipers = [];
              $(params.el).each(containerEl => {
                const newParams = extend({}, params, {
                  el: containerEl
                });
                swipers.push(new Swiper(newParams));
              });
              return swipers;
            } // Swiper Instance
    
    
            const swiper = this;
            swiper.__swiper__ = true;
            swiper.support = getSupport();
            swiper.device = getDevice({
              userAgent: params.userAgent
            });
            swiper.browser = getBrowser();
            swiper.eventsListeners = {};
            swiper.eventsAnyListeners = [];
            swiper.modules = [...swiper.__modules__];
    
            if (params.modules && Array.isArray(params.modules)) {
              swiper.modules.push(...params.modules);
            }
    
            const allModulesParams = {};
            swiper.modules.forEach(mod => {
              mod({
                swiper,
                extendParams: moduleExtendParams(params, allModulesParams),
                on: swiper.on.bind(swiper),
                once: swiper.once.bind(swiper),
                off: swiper.off.bind(swiper),
                emit: swiper.emit.bind(swiper)
              });
            }); // Extend defaults with modules params
    
            const swiperParams = extend({}, defaults, allModulesParams); // Extend defaults with passed params
    
            swiper.params = extend({}, swiperParams, extendedDefaults, params);
            swiper.originalParams = extend({}, swiper.params);
            swiper.passedParams = extend({}, params); // add event listeners
    
            if (swiper.params && swiper.params.on) {
              Object.keys(swiper.params.on).forEach(eventName => {
                swiper.on(eventName, swiper.params.on[eventName]);
              });
            }
    
            if (swiper.params && swiper.params.onAny) {
              swiper.onAny(swiper.params.onAny);
            } // Save Dom lib
    
    
            swiper.$ = $; // Extend Swiper
    
            Object.assign(swiper, {
              enabled: swiper.params.enabled,
              el,
              // Classes
              classNames: [],
              // Slides
              slides: $(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
    
              // isDirection
              isHorizontal() {
                return swiper.params.direction === 'horizontal';
              },
    
              isVertical() {
                return swiper.params.direction === 'vertical';
              },
    
              // Indexes
              activeIndex: 0,
              realIndex: 0,
              //
              isBeginning: true,
              isEnd: false,
              // Props
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: false,
              // Locks
              allowSlideNext: swiper.params.allowSlideNext,
              allowSlidePrev: swiper.params.allowSlidePrev,
              // Touch Events
              touchEvents: function touchEvents() {
                const touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
                const desktop = ['pointerdown', 'pointermove', 'pointerup'];
                swiper.touchEventsTouch = {
                  start: touch[0],
                  move: touch[1],
                  end: touch[2],
                  cancel: touch[3]
                };
                swiper.touchEventsDesktop = {
                  start: desktop[0],
                  move: desktop[1],
                  end: desktop[2]
                };
                return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
              }(),
              touchEventsData: {
                isTouched: undefined,
                isMoved: undefined,
                allowTouchCallbacks: undefined,
                touchStartTime: undefined,
                isScrolling: undefined,
                currentTranslate: undefined,
                startTranslate: undefined,
                allowThresholdMove: undefined,
                // Form elements to match
                focusableElements: swiper.params.focusableElements,
                // Last click time
                lastClickTime: now(),
                clickTimeout: undefined,
                // Velocities
                velocities: [],
                allowMomentumBounce: undefined,
                isTouchEvent: undefined,
                startMoving: undefined
              },
              // Clicks
              allowClick: true,
              // Touches
              allowTouchMove: swiper.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
              },
              // Images
              imagesToLoad: [],
              imagesLoaded: 0
            });
            swiper.emit('_swiper'); // Init
    
            if (swiper.params.init) {
              swiper.init();
            } // Return app instance
    
    
            return swiper;
          }
    
          enable() {
            const swiper = this;
            if (swiper.enabled) return;
            swiper.enabled = true;
    
            if (swiper.params.grabCursor) {
              swiper.setGrabCursor();
            }
    
            swiper.emit('enable');
          }
    
          disable() {
            const swiper = this;
            if (!swiper.enabled) return;
            swiper.enabled = false;
    
            if (swiper.params.grabCursor) {
              swiper.unsetGrabCursor();
            }
    
            swiper.emit('disable');
          }
    
          setProgress(progress, speed) {
            const swiper = this;
            progress = Math.min(Math.max(progress, 0), 1);
            const min = swiper.minTranslate();
            const max = swiper.maxTranslate();
            const current = (max - min) * progress + min;
            swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
          }
    
          emitContainerClasses() {
            const swiper = this;
            if (!swiper.params._emitClasses || !swiper.el) return;
            const cls = swiper.el.className.split(' ').filter(className => {
              return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
            });
            swiper.emit('_containerClasses', cls.join(' '));
          }
    
          getSlideClasses(slideEl) {
            const swiper = this;
            return slideEl.className.split(' ').filter(className => {
              return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
            }).join(' ');
          }
    
          emitSlidesClasses() {
            const swiper = this;
            if (!swiper.params._emitClasses || !swiper.el) return;
            const updates = [];
            swiper.slides.each(slideEl => {
              const classNames = swiper.getSlideClasses(slideEl);
              updates.push({
                slideEl,
                classNames
              });
              swiper.emit('_slideClass', slideEl, classNames);
            });
            swiper.emit('_slideClasses', updates);
          }
    
          slidesPerViewDynamic(view = 'current', exact = false) {
            const swiper = this;
            const {
              params,
              slides,
              slidesGrid,
              slidesSizesGrid,
              size: swiperSize,
              activeIndex
            } = swiper;
            let spv = 1;
    
            if (params.centeredSlides) {
              let slideSize = slides[activeIndex].swiperSlideSize;
              let breakLoop;
    
              for (let i = activeIndex + 1; i < slides.length; i += 1) {
                if (slides[i] && !breakLoop) {
                  slideSize += slides[i].swiperSlideSize;
                  spv += 1;
                  if (slideSize > swiperSize) breakLoop = true;
                }
              }
    
              for (let i = activeIndex - 1; i >= 0; i -= 1) {
                if (slides[i] && !breakLoop) {
                  slideSize += slides[i].swiperSlideSize;
                  spv += 1;
                  if (slideSize > swiperSize) breakLoop = true;
                }
              }
            } else {
              // eslint-disable-next-line
              if (view === 'current') {
                for (let i = activeIndex + 1; i < slides.length; i += 1) {
                  const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
    
                  if (slideInView) {
                    spv += 1;
                  }
                }
              } else {
                // previous
                for (let i = activeIndex - 1; i >= 0; i -= 1) {
                  const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
    
                  if (slideInView) {
                    spv += 1;
                  }
                }
              }
            }
    
            return spv;
          }
    
          update() {
            const swiper = this;
            if (!swiper || swiper.destroyed) return;
            const {
              snapGrid,
              params
            } = swiper; // Breakpoints
    
            if (params.breakpoints) {
              swiper.setBreakpoint();
            }
    
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateProgress();
            swiper.updateSlidesClasses();
    
            function setTranslate() {
              const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
              const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
              swiper.setTranslate(newTranslate);
              swiper.updateActiveIndex();
              swiper.updateSlidesClasses();
            }
    
            let translated;
    
            if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
              setTranslate();
    
              if (swiper.params.autoHeight) {
                swiper.updateAutoHeight();
              }
            } else {
              if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
                translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
              } else {
                translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
              }
    
              if (!translated) {
                setTranslate();
              }
            }
    
            if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
              swiper.checkOverflow();
            }
    
            swiper.emit('update');
          }
    
          changeDirection(newDirection, needUpdate = true) {
            const swiper = this;
            const currentDirection = swiper.params.direction;
    
            if (!newDirection) {
              // eslint-disable-next-line
              newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
            }
    
            if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
              return swiper;
            }
    
            swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
            swiper.emitContainerClasses();
            swiper.params.direction = newDirection;
            swiper.slides.each(slideEl => {
              if (newDirection === 'vertical') {
                slideEl.style.width = '';
              } else {
                slideEl.style.height = '';
              }
            });
            swiper.emit('changeDirection');
            if (needUpdate) swiper.update();
            return swiper;
          }
    
          mount(el) {
            const swiper = this;
            if (swiper.mounted) return true; // Find el
    
            const $el = $(el || swiper.params.el);
            el = $el[0];
    
            if (!el) {
              return false;
            }
    
            el.swiper = swiper;
    
            const getWrapperSelector = () => {
              return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
            };
    
            const getWrapper = () => {
              if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                const res = $(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items
    
                res.children = options => $el.children(options);
    
                return res;
              }
    
              return $el.children(getWrapperSelector());
            }; // Find Wrapper
    
    
            let $wrapperEl = getWrapper();
    
            if ($wrapperEl.length === 0 && swiper.params.createElements) {
              const document = getDocument();
              const wrapper = document.createElement('div');
              $wrapperEl = $(wrapper);
              wrapper.className = swiper.params.wrapperClass;
              $el.append(wrapper);
              $el.children(`.${swiper.params.slideClass}`).each(slideEl => {
                $wrapperEl.append(slideEl);
              });
            }
    
            Object.assign(swiper, {
              $el,
              el,
              $wrapperEl,
              wrapperEl: $wrapperEl[0],
              mounted: true,
              // RTL
              rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
              rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
              wrongRTL: $wrapperEl.css('display') === '-webkit-box'
            });
            return true;
          }
    
          init(el) {
            const swiper = this;
            if (swiper.initialized) return swiper;
            const mounted = swiper.mount(el);
            if (mounted === false) return swiper;
            swiper.emit('beforeInit'); // Set breakpoint
    
            if (swiper.params.breakpoints) {
              swiper.setBreakpoint();
            } // Add Classes
    
    
            swiper.addClasses(); // Create loop
    
            if (swiper.params.loop) {
              swiper.loopCreate();
            } // Update size
    
    
            swiper.updateSize(); // Update slides
    
            swiper.updateSlides();
    
            if (swiper.params.watchOverflow) {
              swiper.checkOverflow();
            } // Set Grab Cursor
    
    
            if (swiper.params.grabCursor && swiper.enabled) {
              swiper.setGrabCursor();
            }
    
            if (swiper.params.preloadImages) {
              swiper.preloadImages();
            } // Slide To Initial Slide
    
    
            if (swiper.params.loop) {
              swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
            } else {
              swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
            } // Attach events
    
    
            swiper.attachEvents(); // Init Flag
    
            swiper.initialized = true; // Emit
    
            swiper.emit('init');
            swiper.emit('afterInit');
            return swiper;
          }
    
          destroy(deleteInstance = true, cleanStyles = true) {
            const swiper = this;
            const {
              params,
              $el,
              $wrapperEl,
              slides
            } = swiper;
    
            if (typeof swiper.params === 'undefined' || swiper.destroyed) {
              return null;
            }
    
            swiper.emit('beforeDestroy'); // Init Flag
    
            swiper.initialized = false; // Detach events
    
            swiper.detachEvents(); // Destroy loop
    
            if (params.loop) {
              swiper.loopDestroy();
            } // Cleanup styles
    
    
            if (cleanStyles) {
              swiper.removeClasses();
              $el.removeAttr('style');
              $wrapperEl.removeAttr('style');
    
              if (slides && slides.length) {
                slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
              }
            }
    
            swiper.emit('destroy'); // Detach emitter events
    
            Object.keys(swiper.eventsListeners).forEach(eventName => {
              swiper.off(eventName);
            });
    
            if (deleteInstance !== false) {
              swiper.$el[0].swiper = null;
              deleteProps(swiper);
            }
    
            swiper.destroyed = true;
            return null;
          }
    
          static extendDefaults(newDefaults) {
            extend(extendedDefaults, newDefaults);
          }
    
          static get extendedDefaults() {
            return extendedDefaults;
          }
    
          static get defaults() {
            return defaults;
          }
    
          static installModule(mod) {
            if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
            const modules = Swiper.prototype.__modules__;
    
            if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
              modules.push(mod);
            }
          }
    
          static use(module) {
            if (Array.isArray(module)) {
              module.forEach(m => Swiper.installModule(m));
              return Swiper;
            }
    
            Swiper.installModule(module);
            return Swiper;
          }
    
        }
    
        Object.keys(prototypes).forEach(prototypeGroup => {
          Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
            Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
          });
        });
        Swiper.use([Resize, Observer]);
    
        function Virtual({
          swiper,
          extendParams,
          on
        }) {
          extendParams({
            virtual: {
              enabled: false,
              slides: [],
              cache: true,
              renderSlide: null,
              renderExternal: null,
              renderExternalUpdate: true,
              addSlidesBefore: 0,
              addSlidesAfter: 0
            }
          });
          swiper.virtual = {
            cache: {},
            from: undefined,
            to: undefined,
            slides: [],
            offset: 0,
            slidesGrid: []
          };
    
          function renderSlide(slide, index) {
            const params = swiper.params.virtual;
    
            if (params.cache && swiper.virtual.cache[index]) {
              return swiper.virtual.cache[index];
            }
    
            const $slideEl = params.renderSlide ? $(params.renderSlide.call(swiper, slide, index)) : $(`<div class="${swiper.params.slideClass}" data-swiper-slide-index="${index}">${slide}</div>`);
            if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
            if (params.cache) swiper.virtual.cache[index] = $slideEl;
            return $slideEl;
          }
    
          function update(force) {
            const {
              slidesPerView,
              slidesPerGroup,
              centeredSlides
            } = swiper.params;
            const {
              addSlidesBefore,
              addSlidesAfter
            } = swiper.params.virtual;
            const {
              from: previousFrom,
              to: previousTo,
              slides,
              slidesGrid: previousSlidesGrid,
              offset: previousOffset
            } = swiper.virtual;
            swiper.updateActiveIndex();
            const activeIndex = swiper.activeIndex || 0;
            let offsetProp;
            if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
            let slidesAfter;
            let slidesBefore;
    
            if (centeredSlides) {
              slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
              slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
            } else {
              slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
              slidesBefore = slidesPerGroup + addSlidesBefore;
            }
    
            const from = Math.max((activeIndex || 0) - slidesBefore, 0);
            const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
            const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
            Object.assign(swiper.virtual, {
              from,
              to,
              offset,
              slidesGrid: swiper.slidesGrid
            });
    
            function onRendered() {
              swiper.updateSlides();
              swiper.updateProgress();
              swiper.updateSlidesClasses();
    
              if (swiper.lazy && swiper.params.lazy.enabled) {
                swiper.lazy.load();
              }
            }
    
            if (previousFrom === from && previousTo === to && !force) {
              if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
                swiper.slides.css(offsetProp, `${offset}px`);
              }
    
              swiper.updateProgress();
              return;
            }
    
            if (swiper.params.virtual.renderExternal) {
              swiper.params.virtual.renderExternal.call(swiper, {
                offset,
                from,
                to,
                slides: function getSlides() {
                  const slidesToRender = [];
    
                  for (let i = from; i <= to; i += 1) {
                    slidesToRender.push(slides[i]);
                  }
    
                  return slidesToRender;
                }()
              });
    
              if (swiper.params.virtual.renderExternalUpdate) {
                onRendered();
              }
    
              return;
            }
    
            const prependIndexes = [];
            const appendIndexes = [];
    
            if (force) {
              swiper.$wrapperEl.find(`.${swiper.params.slideClass}`).remove();
            } else {
              for (let i = previousFrom; i <= previousTo; i += 1) {
                if (i < from || i > to) {
                  swiper.$wrapperEl.find(`.${swiper.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
                }
              }
            }
    
            for (let i = 0; i < slides.length; i += 1) {
              if (i >= from && i <= to) {
                if (typeof previousTo === 'undefined' || force) {
                  appendIndexes.push(i);
                } else {
                  if (i > previousTo) appendIndexes.push(i);
                  if (i < previousFrom) prependIndexes.push(i);
                }
              }
            }
    
            appendIndexes.forEach(index => {
              swiper.$wrapperEl.append(renderSlide(slides[index], index));
            });
            prependIndexes.sort((a, b) => b - a).forEach(index => {
              swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
            });
            swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, `${offset}px`);
            onRendered();
          }
    
          function appendSlide(slides) {
            if (typeof slides === 'object' && 'length' in slides) {
              for (let i = 0; i < slides.length; i += 1) {
                if (slides[i]) swiper.virtual.slides.push(slides[i]);
              }
            } else {
              swiper.virtual.slides.push(slides);
            }
    
            update(true);
          }
    
          function prependSlide(slides) {
            const activeIndex = swiper.activeIndex;
            let newActiveIndex = activeIndex + 1;
            let numberOfNewSlides = 1;
    
            if (Array.isArray(slides)) {
              for (let i = 0; i < slides.length; i += 1) {
                if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
              }
    
              newActiveIndex = activeIndex + slides.length;
              numberOfNewSlides = slides.length;
            } else {
              swiper.virtual.slides.unshift(slides);
            }
    
            if (swiper.params.virtual.cache) {
              const cache = swiper.virtual.cache;
              const newCache = {};
              Object.keys(cache).forEach(cachedIndex => {
                const $cachedEl = cache[cachedIndex];
                const cachedElIndex = $cachedEl.attr('data-swiper-slide-index');
    
                if (cachedElIndex) {
                  $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + 1);
                }
    
                newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
              });
              swiper.virtual.cache = newCache;
            }
    
            update(true);
            swiper.slideTo(newActiveIndex, 0);
          }
    
          function removeSlide(slidesIndexes) {
            if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
            let activeIndex = swiper.activeIndex;
    
            if (Array.isArray(slidesIndexes)) {
              for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
                swiper.virtual.slides.splice(slidesIndexes[i], 1);
    
                if (swiper.params.virtual.cache) {
                  delete swiper.virtual.cache[slidesIndexes[i]];
                }
    
                if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
                activeIndex = Math.max(activeIndex, 0);
              }
            } else {
              swiper.virtual.slides.splice(slidesIndexes, 1);
    
              if (swiper.params.virtual.cache) {
                delete swiper.virtual.cache[slidesIndexes];
              }
    
              if (slidesIndexes < activeIndex) activeIndex -= 1;
              activeIndex = Math.max(activeIndex, 0);
            }
    
            update(true);
            swiper.slideTo(activeIndex, 0);
          }
    
          function removeAllSlides() {
            swiper.virtual.slides = [];
    
            if (swiper.params.virtual.cache) {
              swiper.virtual.cache = {};
            }
    
            update(true);
            swiper.slideTo(0, 0);
          }
    
          on('beforeInit', () => {
            if (!swiper.params.virtual.enabled) return;
            swiper.virtual.slides = swiper.params.virtual.slides;
            swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
            swiper.params.watchSlidesProgress = true;
            swiper.originalParams.watchSlidesProgress = true;
    
            if (!swiper.params.initialSlide) {
              update();
            }
          });
          on('setTranslate', () => {
            if (!swiper.params.virtual.enabled) return;
            update();
          });
          on('init update resize', () => {
            if (!swiper.params.virtual.enabled) return;
    
            if (swiper.params.cssMode) {
              setCSSProperty(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
            }
          });
          Object.assign(swiper.virtual, {
            appendSlide,
            prependSlide,
            removeSlide,
            removeAllSlides,
            update
          });
        }
    
        /* eslint-disable consistent-return */
        function Keyboard({
          swiper,
          extendParams,
          on,
          emit
        }) {
          const document = getDocument();
          const window = getWindow();
          swiper.keyboard = {
            enabled: false
          };
          extendParams({
            keyboard: {
              enabled: false,
              onlyInViewport: true,
              pageUpDown: true
            }
          });
    
          function handle(event) {
            if (!swiper.enabled) return;
            const {
              rtlTranslate: rtl
            } = swiper;
            let e = event;
            if (e.originalEvent) e = e.originalEvent; // jquery fix
    
            const kc = e.keyCode || e.charCode;
            const pageUpDown = swiper.params.keyboard.pageUpDown;
            const isPageUp = pageUpDown && kc === 33;
            const isPageDown = pageUpDown && kc === 34;
            const isArrowLeft = kc === 37;
            const isArrowRight = kc === 39;
            const isArrowUp = kc === 38;
            const isArrowDown = kc === 40; // Directions locks
    
            if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
              return false;
            }
    
            if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
              return false;
            }
    
            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
              return undefined;
            }
    
            if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
              return undefined;
            }
    
            if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
              let inView = false; // Check that swiper should be inside of visible area of window
    
              if (swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 && swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0) {
                return undefined;
              }
    
              const $el = swiper.$el;
              const swiperWidth = $el[0].clientWidth;
              const swiperHeight = $el[0].clientHeight;
              const windowWidth = window.innerWidth;
              const windowHeight = window.innerHeight;
              const swiperOffset = swiper.$el.offset();
              if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
              const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
    
              for (let i = 0; i < swiperCoord.length; i += 1) {
                const point = swiperCoord[i];
    
                if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                  if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
    
                  inView = true;
                }
              }
    
              if (!inView) return undefined;
            }
    
            if (swiper.isHorizontal()) {
              if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
                if (e.preventDefault) e.preventDefault();else e.returnValue = false;
              }
    
              if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
              if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
            } else {
              if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
                if (e.preventDefault) e.preventDefault();else e.returnValue = false;
              }
    
              if (isPageDown || isArrowDown) swiper.slideNext();
              if (isPageUp || isArrowUp) swiper.slidePrev();
            }
    
            emit('keyPress', kc);
            return undefined;
          }
    
          function enable() {
            if (swiper.keyboard.enabled) return;
            $(document).on('keydown', handle);
            swiper.keyboard.enabled = true;
          }
    
          function disable() {
            if (!swiper.keyboard.enabled) return;
            $(document).off('keydown', handle);
            swiper.keyboard.enabled = false;
          }
    
          on('init', () => {
            if (swiper.params.keyboard.enabled) {
              enable();
            }
          });
          on('destroy', () => {
            if (swiper.keyboard.enabled) {
              disable();
            }
          });
          Object.assign(swiper.keyboard, {
            enable,
            disable
          });
        }
    
        /* eslint-disable consistent-return */
        function Mousewheel({
          swiper,
          extendParams,
          on,
          emit
        }) {
          const window = getWindow();
          extendParams({
            mousewheel: {
              enabled: false,
              releaseOnEdges: false,
              invert: false,
              forceToAxis: false,
              sensitivity: 1,
              eventsTarget: 'container',
              thresholdDelta: null,
              thresholdTime: null
            }
          });
          swiper.mousewheel = {
            enabled: false
          };
          let timeout;
          let lastScrollTime = now();
          let lastEventBeforeSnap;
          const recentWheelEvents = [];
    
          function normalize(e) {
            // Reasonable defaults
            const PIXEL_STEP = 10;
            const LINE_HEIGHT = 40;
            const PAGE_HEIGHT = 800;
            let sX = 0;
            let sY = 0; // spinX, spinY
    
            let pX = 0;
            let pY = 0; // pixelX, pixelY
            // Legacy
    
            if ('detail' in e) {
              sY = e.detail;
            }
    
            if ('wheelDelta' in e) {
              sY = -e.wheelDelta / 120;
            }
    
            if ('wheelDeltaY' in e) {
              sY = -e.wheelDeltaY / 120;
            }
    
            if ('wheelDeltaX' in e) {
              sX = -e.wheelDeltaX / 120;
            } // side scrolling on FF with DOMMouseScroll
    
    
            if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
              sX = sY;
              sY = 0;
            }
    
            pX = sX * PIXEL_STEP;
            pY = sY * PIXEL_STEP;
    
            if ('deltaY' in e) {
              pY = e.deltaY;
            }
    
            if ('deltaX' in e) {
              pX = e.deltaX;
            }
    
            if (e.shiftKey && !pX) {
              // if user scrolls with shift he wants horizontal scroll
              pX = pY;
              pY = 0;
            }
    
            if ((pX || pY) && e.deltaMode) {
              if (e.deltaMode === 1) {
                // delta in LINE units
                pX *= LINE_HEIGHT;
                pY *= LINE_HEIGHT;
              } else {
                // delta in PAGE units
                pX *= PAGE_HEIGHT;
                pY *= PAGE_HEIGHT;
              }
            } // Fall-back if spin cannot be determined
    
    
            if (pX && !sX) {
              sX = pX < 1 ? -1 : 1;
            }
    
            if (pY && !sY) {
              sY = pY < 1 ? -1 : 1;
            }
    
            return {
              spinX: sX,
              spinY: sY,
              pixelX: pX,
              pixelY: pY
            };
          }
    
          function handleMouseEnter() {
            if (!swiper.enabled) return;
            swiper.mouseEntered = true;
          }
    
          function handleMouseLeave() {
            if (!swiper.enabled) return;
            swiper.mouseEntered = false;
          }
    
          function animateSlider(newEvent) {
            if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
              // Prevent if delta of wheel scroll delta is below configured threshold
              return false;
            }
    
            if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
              // Prevent if time between scrolls is below configured threshold
              return false;
            } // If the movement is NOT big enough and
            // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
            //   Don't go any further (avoid insignificant scroll movement).
    
    
            if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
              // Return false as a default
              return true;
            } // If user is scrolling towards the end:
            //   If the slider hasn't hit the latest slide or
            //   if the slider is a loop and
            //   if the slider isn't moving right now:
            //     Go to next slide and
            //     emit a scroll event.
            // Else (the user is scrolling towards the beginning) and
            // if the slider hasn't hit the first slide or
            // if the slider is a loop and
            // if the slider isn't moving right now:
            //   Go to prev slide and
            //   emit a scroll event.
    
    
            if (newEvent.direction < 0) {
              if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                swiper.slideNext();
                emit('scroll', newEvent.raw);
              }
            } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
              swiper.slidePrev();
              emit('scroll', newEvent.raw);
            } // If you got here is because an animation has been triggered so store the current time
    
    
            lastScrollTime = new window.Date().getTime(); // Return false as a default
    
            return false;
          }
    
          function releaseScroll(newEvent) {
            const params = swiper.params.mousewheel;
    
            if (newEvent.direction < 0) {
              if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
                // Return true to animate scroll on edges
                return true;
              }
            } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
              // Return true to animate scroll on edges
              return true;
            }
    
            return false;
          }
    
          function handle(event) {
            let e = event;
            let disableParentSwiper = true;
            if (!swiper.enabled) return;
            const params = swiper.params.mousewheel;
    
            if (swiper.params.cssMode) {
              e.preventDefault();
            }
    
            let target = swiper.$el;
    
            if (swiper.params.mousewheel.eventsTarget !== 'container') {
              target = $(swiper.params.mousewheel.eventsTarget);
            }
    
            if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
            if (e.originalEvent) e = e.originalEvent; // jquery fix
    
            let delta = 0;
            const rtlFactor = swiper.rtlTranslate ? -1 : 1;
            const data = normalize(e);
    
            if (params.forceToAxis) {
              if (swiper.isHorizontal()) {
                if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
              } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
            } else {
              delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
            }
    
            if (delta === 0) return true;
            if (params.invert) delta = -delta; // Get the scroll positions
    
            let positions = swiper.getTranslate() + delta * params.sensitivity;
            if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
            if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:
            //     the disableParentSwiper will be true.
            // When loop is false:
            //     if the scroll positions is not on edge,
            //     then the disableParentSwiper will be true.
            //     if the scroll on edge positions,
            //     then the disableParentSwiper will be false.
    
            disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
            if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
    
            if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
              // Register the new event in a variable which stores the relevant data
              const newEvent = {
                time: now(),
                delta: Math.abs(delta),
                direction: Math.sign(delta),
                raw: event
              }; // Keep the most recent events
    
              if (recentWheelEvents.length >= 2) {
                recentWheelEvents.shift(); // only store the last N events
              }
    
              const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
              recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
              //   If direction has changed or
              //   if the scroll is quicker than the previous one:
              //     Animate the slider.
              // Else (this is the first time the wheel is moved):
              //     Animate the slider.
    
              if (prevEvent) {
                if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
                  animateSlider(newEvent);
                }
              } else {
                animateSlider(newEvent);
              } // If it's time to release the scroll:
              //   Return now so you don't hit the preventDefault.
    
    
              if (releaseScroll(newEvent)) {
                return true;
              }
            } else {
              // Freemode or scrollContainer:
              // If we recently snapped after a momentum scroll, then ignore wheel events
              // to give time for the deceleration to finish. Stop ignoring after 500 msecs
              // or if it's a new scroll (larger delta or inverse sign as last event before
              // an end-of-momentum snap).
              const newEvent = {
                time: now(),
                delta: Math.abs(delta),
                direction: Math.sign(delta)
              };
              const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
    
              if (!ignoreWheelEvents) {
                lastEventBeforeSnap = undefined;
    
                if (swiper.params.loop) {
                  swiper.loopFix();
                }
    
                let position = swiper.getTranslate() + delta * params.sensitivity;
                const wasBeginning = swiper.isBeginning;
                const wasEnd = swiper.isEnd;
                if (position >= swiper.minTranslate()) position = swiper.minTranslate();
                if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
                swiper.setTransition(0);
                swiper.setTranslate(position);
                swiper.updateProgress();
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
    
                if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
                  swiper.updateSlidesClasses();
                }
    
                if (swiper.params.freeMode.sticky) {
                  // When wheel scrolling starts with sticky (aka snap) enabled, then detect
                  // the end of a momentum scroll by storing recent (N=15?) wheel events.
                  // 1. do all N events have decreasing or same (absolute value) delta?
                  // 2. did all N events arrive in the last M (M=500?) msecs?
                  // 3. does the earliest event have an (absolute value) delta that's
                  //    at least P (P=1?) larger than the most recent event's delta?
                  // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
                  // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
                  // Snap immediately and ignore remaining wheel events in this scroll.
                  // See comment above for "remaining wheel events in this scroll" determination.
                  // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
                  clearTimeout(timeout);
                  timeout = undefined;
    
                  if (recentWheelEvents.length >= 15) {
                    recentWheelEvents.shift(); // only store the last N events
                  }
    
                  const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                  const firstEvent = recentWheelEvents[0];
                  recentWheelEvents.push(newEvent);
    
                  if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
                    // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                    recentWheelEvents.splice(0);
                  } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
                    // We're at the end of the deceleration of a momentum scroll, so there's no need
                    // to wait for more events. Snap ASAP on the next tick.
                    // Also, because there's some remaining momentum we'll bias the snap in the
                    // direction of the ongoing scroll because it's better UX for the scroll to snap
                    // in the same direction as the scroll instead of reversing to snap.  Therefore,
                    // if it's already scrolled more than 20% in the current direction, keep going.
                    const snapToThreshold = delta > 0 ? 0.8 : 0.2;
                    lastEventBeforeSnap = newEvent;
                    recentWheelEvents.splice(0);
                    timeout = nextTick(() => {
                      swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                    }, 0); // no delay; move on next tick
                  }
    
                  if (!timeout) {
                    // if we get here, then we haven't detected the end of a momentum scroll, so
                    // we'll consider a scroll "complete" when there haven't been any wheel events
                    // for 500ms.
                    timeout = nextTick(() => {
                      const snapToThreshold = 0.5;
                      lastEventBeforeSnap = newEvent;
                      recentWheelEvents.splice(0);
                      swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                    }, 500);
                  }
                } // Emit event
    
    
                if (!ignoreWheelEvents) emit('scroll', e); // Stop autoplay
    
                if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions
    
                if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
              }
            }
    
            if (e.preventDefault) e.preventDefault();else e.returnValue = false;
            return false;
          }
    
          function events(method) {
            let target = swiper.$el;
    
            if (swiper.params.mousewheel.eventsTarget !== 'container') {
              target = $(swiper.params.mousewheel.eventsTarget);
            }
    
            target[method]('mouseenter', handleMouseEnter);
            target[method]('mouseleave', handleMouseLeave);
            target[method]('wheel', handle);
          }
    
          function enable() {
            if (swiper.params.cssMode) {
              swiper.wrapperEl.removeEventListener('wheel', handle);
              return true;
            }
    
            if (swiper.mousewheel.enabled) return false;
            events('on');
            swiper.mousewheel.enabled = true;
            return true;
          }
    
          function disable() {
            if (swiper.params.cssMode) {
              swiper.wrapperEl.addEventListener(event, handle);
              return true;
            }
    
            if (!swiper.mousewheel.enabled) return false;
            events('off');
            swiper.mousewheel.enabled = false;
            return true;
          }
    
          on('init', () => {
            if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
              disable();
            }
    
            if (swiper.params.mousewheel.enabled) enable();
          });
          on('destroy', () => {
            if (swiper.params.cssMode) {
              enable();
            }
    
            if (swiper.mousewheel.enabled) disable();
          });
          Object.assign(swiper.mousewheel, {
            enable,
            disable
          });
        }
    
        function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
          const document = getDocument();
    
          if (swiper.params.createElements) {
            Object.keys(checkProps).forEach(key => {
              if (!params[key] && params.auto === true) {
                let element = swiper.$el.children(`.${checkProps[key]}`)[0];
    
                if (!element) {
                  element = document.createElement('div');
                  element.className = checkProps[key];
                  swiper.$el.append(element);
                }
    
                params[key] = element;
                originalParams[key] = element;
              }
            });
          }
    
          return params;
        }
    
        function Navigation({
          swiper,
          extendParams,
          on,
          emit
        }) {
          extendParams({
            navigation: {
              nextEl: null,
              prevEl: null,
              hideOnClick: false,
              disabledClass: 'swiper-button-disabled',
              hiddenClass: 'swiper-button-hidden',
              lockClass: 'swiper-button-lock'
            }
          });
          swiper.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null
          };
    
          function getEl(el) {
            let $el;
    
            if (el) {
              $el = $(el);
    
              if (swiper.params.uniqueNavElements && typeof el === 'string' && $el.length > 1 && swiper.$el.find(el).length === 1) {
                $el = swiper.$el.find(el);
              }
            }
    
            return $el;
          }
    
          function toggleEl($el, disabled) {
            const params = swiper.params.navigation;
    
            if ($el && $el.length > 0) {
              $el[disabled ? 'addClass' : 'removeClass'](params.disabledClass);
              if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;
    
              if (swiper.params.watchOverflow && swiper.enabled) {
                $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
              }
            }
          }
    
          function update() {
            // Update Navigation Buttons
            if (swiper.params.loop) return;
            const {
              $nextEl,
              $prevEl
            } = swiper.navigation;
            toggleEl($prevEl, swiper.isBeginning);
            toggleEl($nextEl, swiper.isEnd);
          }
    
          function onPrevClick(e) {
            e.preventDefault();
            if (swiper.isBeginning && !swiper.params.loop) return;
            swiper.slidePrev();
          }
    
          function onNextClick(e) {
            e.preventDefault();
            if (swiper.isEnd && !swiper.params.loop) return;
            swiper.slideNext();
          }
    
          function init() {
            const params = swiper.params.navigation;
            swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
              nextEl: 'swiper-button-next',
              prevEl: 'swiper-button-prev'
            });
            if (!(params.nextEl || params.prevEl)) return;
            const $nextEl = getEl(params.nextEl);
            const $prevEl = getEl(params.prevEl);
    
            if ($nextEl && $nextEl.length > 0) {
              $nextEl.on('click', onNextClick);
            }
    
            if ($prevEl && $prevEl.length > 0) {
              $prevEl.on('click', onPrevClick);
            }
    
            Object.assign(swiper.navigation, {
              $nextEl,
              nextEl: $nextEl && $nextEl[0],
              $prevEl,
              prevEl: $prevEl && $prevEl[0]
            });
    
            if (!swiper.enabled) {
              if ($nextEl) $nextEl.addClass(params.lockClass);
              if ($prevEl) $prevEl.addClass(params.lockClass);
            }
          }
    
          function destroy() {
            const {
              $nextEl,
              $prevEl
            } = swiper.navigation;
    
            if ($nextEl && $nextEl.length) {
              $nextEl.off('click', onNextClick);
              $nextEl.removeClass(swiper.params.navigation.disabledClass);
            }
    
            if ($prevEl && $prevEl.length) {
              $prevEl.off('click', onPrevClick);
              $prevEl.removeClass(swiper.params.navigation.disabledClass);
            }
          }
    
          on('init', () => {
            init();
            update();
          });
          on('toEdge fromEdge lock unlock', () => {
            update();
          });
          on('destroy', () => {
            destroy();
          });
          on('enable disable', () => {
            const {
              $nextEl,
              $prevEl
            } = swiper.navigation;
    
            if ($nextEl) {
              $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
            }
    
            if ($prevEl) {
              $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
            }
          });
          on('click', (_s, e) => {
            const {
              $nextEl,
              $prevEl
            } = swiper.navigation;
            const targetEl = e.target;
    
            if (swiper.params.navigation.hideOnClick && !$(targetEl).is($prevEl) && !$(targetEl).is($nextEl)) {
              if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
              let isHidden;
    
              if ($nextEl) {
                isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
              } else if ($prevEl) {
                isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
              }
    
              if (isHidden === true) {
                emit('navigationShow');
              } else {
                emit('navigationHide');
              }
    
              if ($nextEl) {
                $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
              }
    
              if ($prevEl) {
                $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
              }
            }
          });
          Object.assign(swiper.navigation, {
            update,
            init,
            destroy
          });
        }
    
        function classesToSelector(classes = '') {
          return `.${classes.trim().replace(/([\.:!\/])/g, '\\$1') // eslint-disable-line
      .replace(/ /g, '.')}`;
        }
    
        function Pagination({
          swiper,
          extendParams,
          on,
          emit
        }) {
          const pfx = 'swiper-pagination';
          extendParams({
            pagination: {
              el: null,
              bulletElement: 'span',
              clickable: false,
              hideOnClick: false,
              renderBullet: null,
              renderProgressbar: null,
              renderFraction: null,
              renderCustom: null,
              progressbarOpposite: false,
              type: 'bullets',
              // 'bullets' or 'progressbar' or 'fraction' or 'custom'
              dynamicBullets: false,
              dynamicMainBullets: 1,
              formatFractionCurrent: number => number,
              formatFractionTotal: number => number,
              bulletClass: `${pfx}-bullet`,
              bulletActiveClass: `${pfx}-bullet-active`,
              modifierClass: `${pfx}-`,
              currentClass: `${pfx}-current`,
              totalClass: `${pfx}-total`,
              hiddenClass: `${pfx}-hidden`,
              progressbarFillClass: `${pfx}-progressbar-fill`,
              progressbarOppositeClass: `${pfx}-progressbar-opposite`,
              clickableClass: `${pfx}-clickable`,
              lockClass: `${pfx}-lock`,
              horizontalClass: `${pfx}-horizontal`,
              verticalClass: `${pfx}-vertical`
            }
          });
          swiper.pagination = {
            el: null,
            $el: null,
            bullets: []
          };
          let bulletSize;
          let dynamicBulletIndex = 0;
    
          function isPaginationDisabled() {
            return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;
          }
    
          function setSideBullets($bulletEl, position) {
            const {
              bulletActiveClass
            } = swiper.params.pagination;
            $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
          }
    
          function update() {
            // Render || Update Pagination bullets/items
            const rtl = swiper.rtl;
            const params = swiper.params.pagination;
            if (isPaginationDisabled()) return;
            const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
            const $el = swiper.pagination.$el; // Current/Total
    
            let current;
            const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    
            if (swiper.params.loop) {
              current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
    
              if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
                current -= slidesLength - swiper.loopedSlides * 2;
              }
    
              if (current > total - 1) current -= total;
              if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
            } else if (typeof swiper.snapIndex !== 'undefined') {
              current = swiper.snapIndex;
            } else {
              current = swiper.activeIndex || 0;
            } // Types
    
    
            if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
              const bullets = swiper.pagination.bullets;
              let firstIndex;
              let lastIndex;
              let midIndex;
    
              if (params.dynamicBullets) {
                bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
                $el.css(swiper.isHorizontal() ? 'width' : 'height', `${bulletSize * (params.dynamicMainBullets + 4)}px`);
    
                if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
                  dynamicBulletIndex += current - swiper.previousIndex;
    
                  if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
                    dynamicBulletIndex = params.dynamicMainBullets - 1;
                  } else if (dynamicBulletIndex < 0) {
                    dynamicBulletIndex = 0;
                  }
                }
    
                firstIndex = current - dynamicBulletIndex;
                lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                midIndex = (lastIndex + firstIndex) / 2;
              }
    
              bullets.removeClass(['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`).join(' '));
    
              if ($el.length > 1) {
                bullets.each(bullet => {
                  const $bullet = $(bullet);
                  const bulletIndex = $bullet.index();
    
                  if (bulletIndex === current) {
                    $bullet.addClass(params.bulletActiveClass);
                  }
    
                  if (params.dynamicBullets) {
                    if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                      $bullet.addClass(`${params.bulletActiveClass}-main`);
                    }
    
                    if (bulletIndex === firstIndex) {
                      setSideBullets($bullet, 'prev');
                    }
    
                    if (bulletIndex === lastIndex) {
                      setSideBullets($bullet, 'next');
                    }
                  }
                });
              } else {
                const $bullet = bullets.eq(current);
                const bulletIndex = $bullet.index();
                $bullet.addClass(params.bulletActiveClass);
    
                if (params.dynamicBullets) {
                  const $firstDisplayedBullet = bullets.eq(firstIndex);
                  const $lastDisplayedBullet = bullets.eq(lastIndex);
    
                  for (let i = firstIndex; i <= lastIndex; i += 1) {
                    bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
                  }
    
                  if (swiper.params.loop) {
                    if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
                      for (let i = params.dynamicMainBullets; i >= 0; i -= 1) {
                        bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
                      }
    
                      bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
                    } else {
                      setSideBullets($firstDisplayedBullet, 'prev');
                      setSideBullets($lastDisplayedBullet, 'next');
                    }
                  } else {
                    setSideBullets($firstDisplayedBullet, 'prev');
                    setSideBullets($lastDisplayedBullet, 'next');
                  }
                }
              }
    
              if (params.dynamicBullets) {
                const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                const offsetProp = rtl ? 'right' : 'left';
                bullets.css(swiper.isHorizontal() ? offsetProp : 'top', `${bulletsOffset}px`);
              }
            }
    
            if (params.type === 'fraction') {
              $el.find(classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
              $el.find(classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
            }
    
            if (params.type === 'progressbar') {
              let progressbarDirection;
    
              if (params.progressbarOpposite) {
                progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
              } else {
                progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
              }
    
              const scale = (current + 1) / total;
              let scaleX = 1;
              let scaleY = 1;
    
              if (progressbarDirection === 'horizontal') {
                scaleX = scale;
              } else {
                scaleY = scale;
              }
    
              $el.find(classesToSelector(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
            }
    
            if (params.type === 'custom' && params.renderCustom) {
              $el.html(params.renderCustom(swiper, current + 1, total));
              emit('paginationRender', $el[0]);
            } else {
              emit('paginationUpdate', $el[0]);
            }
    
            if (swiper.params.watchOverflow && swiper.enabled) {
              $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
            }
          }
    
          function render() {
            // Render Container
            const params = swiper.params.pagination;
            if (isPaginationDisabled()) return;
            const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
            const $el = swiper.pagination.$el;
            let paginationHTML = '';
    
            if (params.type === 'bullets') {
              let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    
              if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) {
                numberOfBullets = slidesLength;
              }
    
              for (let i = 0; i < numberOfBullets; i += 1) {
                if (params.renderBullet) {
                  paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
                } else {
                  paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
                }
              }
    
              $el.html(paginationHTML);
              swiper.pagination.bullets = $el.find(classesToSelector(params.bulletClass));
            }
    
            if (params.type === 'fraction') {
              if (params.renderFraction) {
                paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
              } else {
                paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
              }
    
              $el.html(paginationHTML);
            }
    
            if (params.type === 'progressbar') {
              if (params.renderProgressbar) {
                paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
              } else {
                paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
              }
    
              $el.html(paginationHTML);
            }
    
            if (params.type !== 'custom') {
              emit('paginationRender', swiper.pagination.$el[0]);
            }
          }
    
          function init() {
            swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
              el: 'swiper-pagination'
            });
            const params = swiper.params.pagination;
            if (!params.el) return;
            let $el = $(params.el);
            if ($el.length === 0) return;
    
            if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
              $el = swiper.$el.find(params.el); // check if it belongs to another nested Swiper
    
              if ($el.length > 1) {
                $el = $el.filter(el => {
                  if ($(el).parents('.swiper')[0] !== swiper.el) return false;
                  return true;
                });
              }
            }
    
            if (params.type === 'bullets' && params.clickable) {
              $el.addClass(params.clickableClass);
            }
    
            $el.addClass(params.modifierClass + params.type);
            $el.addClass(params.modifierClass + swiper.params.direction);
    
            if (params.type === 'bullets' && params.dynamicBullets) {
              $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
              dynamicBulletIndex = 0;
    
              if (params.dynamicMainBullets < 1) {
                params.dynamicMainBullets = 1;
              }
            }
    
            if (params.type === 'progressbar' && params.progressbarOpposite) {
              $el.addClass(params.progressbarOppositeClass);
            }
    
            if (params.clickable) {
              $el.on('click', classesToSelector(params.bulletClass), function onClick(e) {
                e.preventDefault();
                let index = $(this).index() * swiper.params.slidesPerGroup;
                if (swiper.params.loop) index += swiper.loopedSlides;
                swiper.slideTo(index);
              });
            }
    
            Object.assign(swiper.pagination, {
              $el,
              el: $el[0]
            });
    
            if (!swiper.enabled) {
              $el.addClass(params.lockClass);
            }
          }
    
          function destroy() {
            const params = swiper.params.pagination;
            if (isPaginationDisabled()) return;
            const $el = swiper.pagination.$el;
            $el.removeClass(params.hiddenClass);
            $el.removeClass(params.modifierClass + params.type);
            $el.removeClass(params.modifierClass + swiper.params.direction);
            if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
    
            if (params.clickable) {
              $el.off('click', classesToSelector(params.bulletClass));
            }
          }
    
          on('init', () => {
            init();
            render();
            update();
          });
          on('activeIndexChange', () => {
            if (swiper.params.loop) {
              update();
            } else if (typeof swiper.snapIndex === 'undefined') {
              update();
            }
          });
          on('snapIndexChange', () => {
            if (!swiper.params.loop) {
              update();
            }
          });
          on('slidesLengthChange', () => {
            if (swiper.params.loop) {
              render();
              update();
            }
          });
          on('snapGridLengthChange', () => {
            if (!swiper.params.loop) {
              render();
              update();
            }
          });
          on('destroy', () => {
            destroy();
          });
          on('enable disable', () => {
            const {
              $el
            } = swiper.pagination;
    
            if ($el) {
              $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);
            }
          });
          on('lock unlock', () => {
            update();
          });
          on('click', (_s, e) => {
            const targetEl = e.target;
            const {
              $el
            } = swiper.pagination;
    
            if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el.length > 0 && !$(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
              if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
              const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);
    
              if (isHidden === true) {
                emit('paginationShow');
              } else {
                emit('paginationHide');
              }
    
              $el.toggleClass(swiper.params.pagination.hiddenClass);
            }
          });
          Object.assign(swiper.pagination, {
            render,
            update,
            init,
            destroy
          });
        }
    
        function Scrollbar({
          swiper,
          extendParams,
          on,
          emit
        }) {
          const document = getDocument();
          let isTouched = false;
          let timeout = null;
          let dragTimeout = null;
          let dragStartPos;
          let dragSize;
          let trackSize;
          let divider;
          extendParams({
            scrollbar: {
              el: null,
              dragSize: 'auto',
              hide: false,
              draggable: false,
              snapOnRelease: true,
              lockClass: 'swiper-scrollbar-lock',
              dragClass: 'swiper-scrollbar-drag'
            }
          });
          swiper.scrollbar = {
            el: null,
            dragEl: null,
            $el: null,
            $dragEl: null
          };
    
          function setTranslate() {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            const {
              scrollbar,
              rtlTranslate: rtl,
              progress
            } = swiper;
            const {
              $dragEl,
              $el
            } = scrollbar;
            const params = swiper.params.scrollbar;
            let newSize = dragSize;
            let newPos = (trackSize - dragSize) * progress;
    
            if (rtl) {
              newPos = -newPos;
    
              if (newPos > 0) {
                newSize = dragSize - newPos;
                newPos = 0;
              } else if (-newPos + dragSize > trackSize) {
                newSize = trackSize + newPos;
              }
            } else if (newPos < 0) {
              newSize = dragSize + newPos;
              newPos = 0;
            } else if (newPos + dragSize > trackSize) {
              newSize = trackSize - newPos;
            }
    
            if (swiper.isHorizontal()) {
              $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
              $dragEl[0].style.width = `${newSize}px`;
            } else {
              $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
              $dragEl[0].style.height = `${newSize}px`;
            }
    
            if (params.hide) {
              clearTimeout(timeout);
              $el[0].style.opacity = 1;
              timeout = setTimeout(() => {
                $el[0].style.opacity = 0;
                $el.transition(400);
              }, 1000);
            }
          }
    
          function setTransition(duration) {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            swiper.scrollbar.$dragEl.transition(duration);
          }
    
          function updateSize() {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            const {
              scrollbar
            } = swiper;
            const {
              $dragEl,
              $el
            } = scrollbar;
            $dragEl[0].style.width = '';
            $dragEl[0].style.height = '';
            trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
            divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
    
            if (swiper.params.scrollbar.dragSize === 'auto') {
              dragSize = trackSize * divider;
            } else {
              dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
            }
    
            if (swiper.isHorizontal()) {
              $dragEl[0].style.width = `${dragSize}px`;
            } else {
              $dragEl[0].style.height = `${dragSize}px`;
            }
    
            if (divider >= 1) {
              $el[0].style.display = 'none';
            } else {
              $el[0].style.display = '';
            }
    
            if (swiper.params.scrollbar.hide) {
              $el[0].style.opacity = 0;
            }
    
            if (swiper.params.watchOverflow && swiper.enabled) {
              scrollbar.$el[swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
            }
          }
    
          function getPointerPosition(e) {
            if (swiper.isHorizontal()) {
              return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
            }
    
            return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
          }
    
          function setDragPosition(e) {
            const {
              scrollbar,
              rtlTranslate: rtl
            } = swiper;
            const {
              $el
            } = scrollbar;
            let positionRatio;
            positionRatio = (getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
            positionRatio = Math.max(Math.min(positionRatio, 1), 0);
    
            if (rtl) {
              positionRatio = 1 - positionRatio;
            }
    
            const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
            swiper.updateProgress(position);
            swiper.setTranslate(position);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
          }
    
          function onDragStart(e) {
            const params = swiper.params.scrollbar;
            const {
              scrollbar,
              $wrapperEl
            } = swiper;
            const {
              $el,
              $dragEl
            } = scrollbar;
            isTouched = true;
            dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
            e.preventDefault();
            e.stopPropagation();
            $wrapperEl.transition(100);
            $dragEl.transition(100);
            setDragPosition(e);
            clearTimeout(dragTimeout);
            $el.transition(0);
    
            if (params.hide) {
              $el.css('opacity', 1);
            }
    
            if (swiper.params.cssMode) {
              swiper.$wrapperEl.css('scroll-snap-type', 'none');
            }
    
            emit('scrollbarDragStart', e);
          }
    
          function onDragMove(e) {
            const {
              scrollbar,
              $wrapperEl
            } = swiper;
            const {
              $el,
              $dragEl
            } = scrollbar;
            if (!isTouched) return;
            if (e.preventDefault) e.preventDefault();else e.returnValue = false;
            setDragPosition(e);
            $wrapperEl.transition(0);
            $el.transition(0);
            $dragEl.transition(0);
            emit('scrollbarDragMove', e);
          }
    
          function onDragEnd(e) {
            const params = swiper.params.scrollbar;
            const {
              scrollbar,
              $wrapperEl
            } = swiper;
            const {
              $el
            } = scrollbar;
            if (!isTouched) return;
            isTouched = false;
    
            if (swiper.params.cssMode) {
              swiper.$wrapperEl.css('scroll-snap-type', '');
              $wrapperEl.transition('');
            }
    
            if (params.hide) {
              clearTimeout(dragTimeout);
              dragTimeout = nextTick(() => {
                $el.css('opacity', 0);
                $el.transition(400);
              }, 1000);
            }
    
            emit('scrollbarDragEnd', e);
    
            if (params.snapOnRelease) {
              swiper.slideToClosest();
            }
          }
    
          function events(method) {
            const {
              scrollbar,
              touchEventsTouch,
              touchEventsDesktop,
              params,
              support
            } = swiper;
            const $el = scrollbar.$el;
            const target = $el[0];
            const activeListener = support.passiveListener && params.passiveListeners ? {
              passive: false,
              capture: false
            } : false;
            const passiveListener = support.passiveListener && params.passiveListeners ? {
              passive: true,
              capture: false
            } : false;
            if (!target) return;
            const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
    
            if (!support.touch) {
              target[eventMethod](touchEventsDesktop.start, onDragStart, activeListener);
              document[eventMethod](touchEventsDesktop.move, onDragMove, activeListener);
              document[eventMethod](touchEventsDesktop.end, onDragEnd, passiveListener);
            } else {
              target[eventMethod](touchEventsTouch.start, onDragStart, activeListener);
              target[eventMethod](touchEventsTouch.move, onDragMove, activeListener);
              target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener);
            }
          }
    
          function enableDraggable() {
            if (!swiper.params.scrollbar.el) return;
            events('on');
          }
    
          function disableDraggable() {
            if (!swiper.params.scrollbar.el) return;
            events('off');
          }
    
          function init() {
            const {
              scrollbar,
              $el: $swiperEl
            } = swiper;
            swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
              el: 'swiper-scrollbar'
            });
            const params = swiper.params.scrollbar;
            if (!params.el) return;
            let $el = $(params.el);
    
            if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
              $el = $swiperEl.find(params.el);
            }
    
            let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);
    
            if ($dragEl.length === 0) {
              $dragEl = $(`<div class="${swiper.params.scrollbar.dragClass}"></div>`);
              $el.append($dragEl);
            }
    
            Object.assign(scrollbar, {
              $el,
              el: $el[0],
              $dragEl,
              dragEl: $dragEl[0]
            });
    
            if (params.draggable) {
              enableDraggable();
            }
    
            if ($el) {
              $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
            }
          }
    
          function destroy() {
            disableDraggable();
          }
    
          on('init', () => {
            init();
            updateSize();
            setTranslate();
          });
          on('update resize observerUpdate lock unlock', () => {
            updateSize();
          });
          on('setTranslate', () => {
            setTranslate();
          });
          on('setTransition', (_s, duration) => {
            setTransition(duration);
          });
          on('enable disable', () => {
            const {
              $el
            } = swiper.scrollbar;
    
            if ($el) {
              $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
            }
          });
          on('destroy', () => {
            destroy();
          });
          Object.assign(swiper.scrollbar, {
            updateSize,
            setTranslate,
            init,
            destroy
          });
        }
    
        function Parallax({
          swiper,
          extendParams,
          on
        }) {
          extendParams({
            parallax: {
              enabled: false
            }
          });
    
          const setTransform = (el, progress) => {
            const {
              rtl
            } = swiper;
            const $el = $(el);
            const rtlFactor = rtl ? -1 : 1;
            const p = $el.attr('data-swiper-parallax') || '0';
            let x = $el.attr('data-swiper-parallax-x');
            let y = $el.attr('data-swiper-parallax-y');
            const scale = $el.attr('data-swiper-parallax-scale');
            const opacity = $el.attr('data-swiper-parallax-opacity');
    
            if (x || y) {
              x = x || '0';
              y = y || '0';
            } else if (swiper.isHorizontal()) {
              x = p;
              y = '0';
            } else {
              y = p;
              x = '0';
            }
    
            if (x.indexOf('%') >= 0) {
              x = `${parseInt(x, 10) * progress * rtlFactor}%`;
            } else {
              x = `${x * progress * rtlFactor}px`;
            }
    
            if (y.indexOf('%') >= 0) {
              y = `${parseInt(y, 10) * progress}%`;
            } else {
              y = `${y * progress}px`;
            }
    
            if (typeof opacity !== 'undefined' && opacity !== null) {
              const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
              $el[0].style.opacity = currentOpacity;
            }
    
            if (typeof scale === 'undefined' || scale === null) {
              $el.transform(`translate3d(${x}, ${y}, 0px)`);
            } else {
              const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
              $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);
            }
          };
    
          const setTranslate = () => {
            const {
              $el,
              slides,
              progress,
              snapGrid
            } = swiper;
            $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(el => {
              setTransform(el, progress);
            });
            slides.each((slideEl, slideIndex) => {
              let slideProgress = slideEl.progress;
    
              if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
                slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
              }
    
              slideProgress = Math.min(Math.max(slideProgress, -1), 1);
              $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(el => {
                setTransform(el, slideProgress);
              });
            });
          };
    
          const setTransition = (duration = swiper.params.speed) => {
            const {
              $el
            } = swiper;
            $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(parallaxEl => {
              const $parallaxEl = $(parallaxEl);
              let parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
              if (duration === 0) parallaxDuration = 0;
              $parallaxEl.transition(parallaxDuration);
            });
          };
    
          on('beforeInit', () => {
            if (!swiper.params.parallax.enabled) return;
            swiper.params.watchSlidesProgress = true;
            swiper.originalParams.watchSlidesProgress = true;
          });
          on('init', () => {
            if (!swiper.params.parallax.enabled) return;
            setTranslate();
          });
          on('setTranslate', () => {
            if (!swiper.params.parallax.enabled) return;
            setTranslate();
          });
          on('setTransition', (_swiper, duration) => {
            if (!swiper.params.parallax.enabled) return;
            setTransition(duration);
          });
        }
    
        function Zoom({
          swiper,
          extendParams,
          on,
          emit
        }) {
          const window = getWindow();
          extendParams({
            zoom: {
              enabled: false,
              maxRatio: 3,
              minRatio: 1,
              toggle: true,
              containerClass: 'swiper-zoom-container',
              zoomedSlideClass: 'swiper-slide-zoomed'
            }
          });
          swiper.zoom = {
            enabled: false
          };
          let currentScale = 1;
          let isScaling = false;
          let gesturesEnabled;
          let fakeGestureTouched;
          let fakeGestureMoved;
          const gesture = {
            $slideEl: undefined,
            slideWidth: undefined,
            slideHeight: undefined,
            $imageEl: undefined,
            $imageWrapEl: undefined,
            maxRatio: 3
          };
          const image = {
            isTouched: undefined,
            isMoved: undefined,
            currentX: undefined,
            currentY: undefined,
            minX: undefined,
            minY: undefined,
            maxX: undefined,
            maxY: undefined,
            width: undefined,
            height: undefined,
            startX: undefined,
            startY: undefined,
            touchesStart: {},
            touchesCurrent: {}
          };
          const velocity = {
            x: undefined,
            y: undefined,
            prevPositionX: undefined,
            prevPositionY: undefined,
            prevTime: undefined
          };
          let scale = 1;
          Object.defineProperty(swiper.zoom, 'scale', {
            get() {
              return scale;
            },
    
            set(value) {
              if (scale !== value) {
                const imageEl = gesture.$imageEl ? gesture.$imageEl[0] : undefined;
                const slideEl = gesture.$slideEl ? gesture.$slideEl[0] : undefined;
                emit('zoomChange', value, imageEl, slideEl);
              }
    
              scale = value;
            }
    
          });
    
          function getDistanceBetweenTouches(e) {
            if (e.targetTouches.length < 2) return 1;
            const x1 = e.targetTouches[0].pageX;
            const y1 = e.targetTouches[0].pageY;
            const x2 = e.targetTouches[1].pageX;
            const y2 = e.targetTouches[1].pageY;
            const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
            return distance;
          } // Events
    
    
          function onGestureStart(e) {
            const support = swiper.support;
            const params = swiper.params.zoom;
            fakeGestureTouched = false;
            fakeGestureMoved = false;
    
            if (!support.gestures) {
              if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
                return;
              }
    
              fakeGestureTouched = true;
              gesture.scaleStart = getDistanceBetweenTouches(e);
            }
    
            if (!gesture.$slideEl || !gesture.$slideEl.length) {
              gesture.$slideEl = $(e.target).closest(`.${swiper.params.slideClass}`);
              if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
              gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('img, svg, canvas, picture, .swiper-zoom-target');
              gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
              gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
    
              if (gesture.$imageWrapEl.length === 0) {
                gesture.$imageEl = undefined;
                return;
              }
            }
    
            if (gesture.$imageEl) {
              gesture.$imageEl.transition(0);
            }
    
            isScaling = true;
          }
    
          function onGestureChange(e) {
            const support = swiper.support;
            const params = swiper.params.zoom;
            const zoom = swiper.zoom;
    
            if (!support.gestures) {
              if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
                return;
              }
    
              fakeGestureMoved = true;
              gesture.scaleMove = getDistanceBetweenTouches(e);
            }
    
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
              if (e.type === 'gesturechange') onGestureStart(e);
              return;
            }
    
            if (support.gestures) {
              zoom.scale = e.scale * currentScale;
            } else {
              zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
            }
    
            if (zoom.scale > gesture.maxRatio) {
              zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
            }
    
            if (zoom.scale < params.minRatio) {
              zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
            }
    
            gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);
          }
    
          function onGestureEnd(e) {
            const device = swiper.device;
            const support = swiper.support;
            const params = swiper.params.zoom;
            const zoom = swiper.zoom;
    
            if (!support.gestures) {
              if (!fakeGestureTouched || !fakeGestureMoved) {
                return;
              }
    
              if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) {
                return;
              }
    
              fakeGestureTouched = false;
              fakeGestureMoved = false;
            }
    
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
            zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
            gesture.$imageEl.transition(swiper.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
            currentScale = zoom.scale;
            isScaling = false;
            if (zoom.scale === 1) gesture.$slideEl = undefined;
          }
    
          function onTouchStart(e) {
            const device = swiper.device;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
            if (image.isTouched) return;
            if (device.android && e.cancelable) e.preventDefault();
            image.isTouched = true;
            image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
            image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
          }
    
          function onTouchMove(e) {
            const zoom = swiper.zoom;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
            swiper.allowClick = false;
            if (!image.isTouched || !gesture.$slideEl) return;
    
            if (!image.isMoved) {
              image.width = gesture.$imageEl[0].offsetWidth;
              image.height = gesture.$imageEl[0].offsetHeight;
              image.startX = getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
              image.startY = getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
              gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
              gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
              gesture.$imageWrapEl.transition(0);
            } // Define if we need image drag
    
    
            const scaledWidth = image.width * zoom.scale;
            const scaledHeight = image.height * zoom.scale;
            if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
            image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
            image.maxX = -image.minX;
            image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
            image.maxY = -image.minY;
            image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
            image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
    
            if (!image.isMoved && !isScaling) {
              if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
                image.isTouched = false;
                return;
              }
    
              if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
                image.isTouched = false;
                return;
              }
            }
    
            if (e.cancelable) {
              e.preventDefault();
            }
    
            e.stopPropagation();
            image.isMoved = true;
            image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
            image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;
    
            if (image.currentX < image.minX) {
              image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
            }
    
            if (image.currentX > image.maxX) {
              image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
            }
    
            if (image.currentY < image.minY) {
              image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
            }
    
            if (image.currentY > image.maxY) {
              image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
            } // Velocity
    
    
            if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
            if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
            if (!velocity.prevTime) velocity.prevTime = Date.now();
            velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
            velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
            if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
            if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
            velocity.prevPositionX = image.touchesCurrent.x;
            velocity.prevPositionY = image.touchesCurrent.y;
            velocity.prevTime = Date.now();
            gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
          }
    
          function onTouchEnd() {
            const zoom = swiper.zoom;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    
            if (!image.isTouched || !image.isMoved) {
              image.isTouched = false;
              image.isMoved = false;
              return;
            }
    
            image.isTouched = false;
            image.isMoved = false;
            let momentumDurationX = 300;
            let momentumDurationY = 300;
            const momentumDistanceX = velocity.x * momentumDurationX;
            const newPositionX = image.currentX + momentumDistanceX;
            const momentumDistanceY = velocity.y * momentumDurationY;
            const newPositionY = image.currentY + momentumDistanceY; // Fix duration
    
            if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
            if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
            const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
            image.currentX = newPositionX;
            image.currentY = newPositionY; // Define if we need image drag
    
            const scaledWidth = image.width * zoom.scale;
            const scaledHeight = image.height * zoom.scale;
            image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
            image.maxX = -image.minX;
            image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
            image.maxY = -image.minY;
            image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
            image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
            gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
          }
    
          function onTransitionEnd() {
            const zoom = swiper.zoom;
    
            if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
              if (gesture.$imageEl) {
                gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
              }
    
              if (gesture.$imageWrapEl) {
                gesture.$imageWrapEl.transform('translate3d(0,0,0)');
              }
    
              zoom.scale = 1;
              currentScale = 1;
              gesture.$slideEl = undefined;
              gesture.$imageEl = undefined;
              gesture.$imageWrapEl = undefined;
            }
          }
    
          function zoomIn(e) {
            const zoom = swiper.zoom;
            const params = swiper.params.zoom;
    
            if (!gesture.$slideEl) {
              if (e && e.target) {
                gesture.$slideEl = $(e.target).closest(`.${swiper.params.slideClass}`);
              }
    
              if (!gesture.$slideEl) {
                if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
                  gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
                } else {
                  gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
                }
              }
    
              gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('img, svg, canvas, picture, .swiper-zoom-target');
              gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
            }
    
            if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
    
            if (swiper.params.cssMode) {
              swiper.wrapperEl.style.overflow = 'hidden';
              swiper.wrapperEl.style.touchAction = 'none';
            }
    
            gesture.$slideEl.addClass(`${params.zoomedSlideClass}`);
            let touchX;
            let touchY;
            let offsetX;
            let offsetY;
            let diffX;
            let diffY;
            let translateX;
            let translateY;
            let imageWidth;
            let imageHeight;
            let scaledWidth;
            let scaledHeight;
            let translateMinX;
            let translateMinY;
            let translateMaxX;
            let translateMaxY;
            let slideWidth;
            let slideHeight;
    
            if (typeof image.touchesStart.x === 'undefined' && e) {
              touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
              touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
            } else {
              touchX = image.touchesStart.x;
              touchY = image.touchesStart.y;
            }
    
            zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
            currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
    
            if (e) {
              slideWidth = gesture.$slideEl[0].offsetWidth;
              slideHeight = gesture.$slideEl[0].offsetHeight;
              offsetX = gesture.$slideEl.offset().left + window.scrollX;
              offsetY = gesture.$slideEl.offset().top + window.scrollY;
              diffX = offsetX + slideWidth / 2 - touchX;
              diffY = offsetY + slideHeight / 2 - touchY;
              imageWidth = gesture.$imageEl[0].offsetWidth;
              imageHeight = gesture.$imageEl[0].offsetHeight;
              scaledWidth = imageWidth * zoom.scale;
              scaledHeight = imageHeight * zoom.scale;
              translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
              translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
              translateMaxX = -translateMinX;
              translateMaxY = -translateMinY;
              translateX = diffX * zoom.scale;
              translateY = diffY * zoom.scale;
    
              if (translateX < translateMinX) {
                translateX = translateMinX;
              }
    
              if (translateX > translateMaxX) {
                translateX = translateMaxX;
              }
    
              if (translateY < translateMinY) {
                translateY = translateMinY;
              }
    
              if (translateY > translateMaxY) {
                translateY = translateMaxY;
              }
            } else {
              translateX = 0;
              translateY = 0;
            }
    
            gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`);
            gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
          }
    
          function zoomOut() {
            const zoom = swiper.zoom;
            const params = swiper.params.zoom;
    
            if (!gesture.$slideEl) {
              if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
                gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
              } else {
                gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
              }
    
              gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('img, svg, canvas, picture, .swiper-zoom-target');
              gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
            }
    
            if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
    
            if (swiper.params.cssMode) {
              swiper.wrapperEl.style.overflow = '';
              swiper.wrapperEl.style.touchAction = '';
            }
    
            zoom.scale = 1;
            currentScale = 1;
            gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
            gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
            gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`);
            gesture.$slideEl = undefined;
          } // Toggle Zoom
    
    
          function zoomToggle(e) {
            const zoom = swiper.zoom;
    
            if (zoom.scale && zoom.scale !== 1) {
              // Zoom Out
              zoomOut();
            } else {
              // Zoom In
              zoomIn(e);
            }
          }
    
          function getListeners() {
            const support = swiper.support;
            const passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
              passive: true,
              capture: false
            } : false;
            const activeListenerWithCapture = support.passiveListener ? {
              passive: false,
              capture: true
            } : true;
            return {
              passiveListener,
              activeListenerWithCapture
            };
          }
    
          function getSlideSelector() {
            return `.${swiper.params.slideClass}`;
          }
    
          function toggleGestures(method) {
            const {
              passiveListener
            } = getListeners();
            const slideSelector = getSlideSelector();
            swiper.$wrapperEl[method]('gesturestart', slideSelector, onGestureStart, passiveListener);
            swiper.$wrapperEl[method]('gesturechange', slideSelector, onGestureChange, passiveListener);
            swiper.$wrapperEl[method]('gestureend', slideSelector, onGestureEnd, passiveListener);
          }
    
          function enableGestures() {
            if (gesturesEnabled) return;
            gesturesEnabled = true;
            toggleGestures('on');
          }
    
          function disableGestures() {
            if (!gesturesEnabled) return;
            gesturesEnabled = false;
            toggleGestures('off');
          } // Attach/Detach Events
    
    
          function enable() {
            const zoom = swiper.zoom;
            if (zoom.enabled) return;
            zoom.enabled = true;
            const support = swiper.support;
            const {
              passiveListener,
              activeListenerWithCapture
            } = getListeners();
            const slideSelector = getSlideSelector(); // Scale image
    
            if (support.gestures) {
              swiper.$wrapperEl.on(swiper.touchEvents.start, enableGestures, passiveListener);
              swiper.$wrapperEl.on(swiper.touchEvents.end, disableGestures, passiveListener);
            } else if (swiper.touchEvents.start === 'touchstart') {
              swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
              swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
              swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);
    
              if (swiper.touchEvents.cancel) {
                swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
              }
            } // Move image
    
    
            swiper.$wrapperEl.on(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
          }
    
          function disable() {
            const zoom = swiper.zoom;
            if (!zoom.enabled) return;
            const support = swiper.support;
            zoom.enabled = false;
            const {
              passiveListener,
              activeListenerWithCapture
            } = getListeners();
            const slideSelector = getSlideSelector(); // Scale image
    
            if (support.gestures) {
              swiper.$wrapperEl.off(swiper.touchEvents.start, enableGestures, passiveListener);
              swiper.$wrapperEl.off(swiper.touchEvents.end, disableGestures, passiveListener);
            } else if (swiper.touchEvents.start === 'touchstart') {
              swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
              swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
              swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);
    
              if (swiper.touchEvents.cancel) {
                swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
              }
            } // Move image
    
    
            swiper.$wrapperEl.off(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
          }
    
          on('init', () => {
            if (swiper.params.zoom.enabled) {
              enable();
            }
          });
          on('destroy', () => {
            disable();
          });
          on('touchStart', (_s, e) => {
            if (!swiper.zoom.enabled) return;
            onTouchStart(e);
          });
          on('touchEnd', (_s, e) => {
            if (!swiper.zoom.enabled) return;
            onTouchEnd();
          });
          on('doubleTap', (_s, e) => {
            if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
              zoomToggle(e);
            }
          });
          on('transitionEnd', () => {
            if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
              onTransitionEnd();
            }
          });
          on('slideChange', () => {
            if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
              onTransitionEnd();
            }
          });
          Object.assign(swiper.zoom, {
            enable,
            disable,
            in: zoomIn,
            out: zoomOut,
            toggle: zoomToggle
          });
        }
    
        function Lazy({
          swiper,
          extendParams,
          on,
          emit
        }) {
          extendParams({
            lazy: {
              checkInView: false,
              enabled: false,
              loadPrevNext: false,
              loadPrevNextAmount: 1,
              loadOnTransitionStart: false,
              scrollingElement: '',
              elementClass: 'swiper-lazy',
              loadingClass: 'swiper-lazy-loading',
              loadedClass: 'swiper-lazy-loaded',
              preloaderClass: 'swiper-lazy-preloader'
            }
          });
          swiper.lazy = {};
          let scrollHandlerAttached = false;
          let initialImageLoaded = false;
    
          function loadInSlide(index, loadInDuplicate = true) {
            const params = swiper.params.lazy;
            if (typeof index === 'undefined') return;
            if (swiper.slides.length === 0) return;
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            const $slideEl = isVirtual ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index}"]`) : swiper.slides.eq(index);
            const $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);
    
            if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
              $images.push($slideEl[0]);
            }
    
            if ($images.length === 0) return;
            $images.each(imageEl => {
              const $imageEl = $(imageEl);
              $imageEl.addClass(params.loadingClass);
              const background = $imageEl.attr('data-background');
              const src = $imageEl.attr('data-src');
              const srcset = $imageEl.attr('data-srcset');
              const sizes = $imageEl.attr('data-sizes');
              const $pictureEl = $imageEl.parent('picture');
              swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, () => {
                if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;
    
                if (background) {
                  $imageEl.css('background-image', `url("${background}")`);
                  $imageEl.removeAttr('data-background');
                } else {
                  if (srcset) {
                    $imageEl.attr('srcset', srcset);
                    $imageEl.removeAttr('data-srcset');
                  }
    
                  if (sizes) {
                    $imageEl.attr('sizes', sizes);
                    $imageEl.removeAttr('data-sizes');
                  }
    
                  if ($pictureEl.length) {
                    $pictureEl.children('source').each(sourceEl => {
                      const $source = $(sourceEl);
    
                      if ($source.attr('data-srcset')) {
                        $source.attr('srcset', $source.attr('data-srcset'));
                        $source.removeAttr('data-srcset');
                      }
                    });
                  }
    
                  if (src) {
                    $imageEl.attr('src', src);
                    $imageEl.removeAttr('data-src');
                  }
                }
    
                $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
                $slideEl.find(`.${params.preloaderClass}`).remove();
    
                if (swiper.params.loop && loadInDuplicate) {
                  const slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
    
                  if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                    const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`);
                    loadInSlide(originalSlide.index(), false);
                  } else {
                    const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`);
                    loadInSlide(duplicatedSlide.index(), false);
                  }
                }
    
                emit('lazyImageReady', $slideEl[0], $imageEl[0]);
    
                if (swiper.params.autoHeight) {
                  swiper.updateAutoHeight();
                }
              });
              emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
            });
          }
    
          function load() {
            const {
              $wrapperEl,
              params: swiperParams,
              slides,
              activeIndex
            } = swiper;
            const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
            const params = swiperParams.lazy;
            let slidesPerView = swiperParams.slidesPerView;
    
            if (slidesPerView === 'auto') {
              slidesPerView = 0;
            }
    
            function slideExist(index) {
              if (isVirtual) {
                if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index}"]`).length) {
                  return true;
                }
              } else if (slides[index]) return true;
    
              return false;
            }
    
            function slideIndex(slideEl) {
              if (isVirtual) {
                return $(slideEl).attr('data-swiper-slide-index');
              }
    
              return $(slideEl).index();
            }
    
            if (!initialImageLoaded) initialImageLoaded = true;
    
            if (swiper.params.watchSlidesProgress) {
              $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each(slideEl => {
                const index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
                loadInSlide(index);
              });
            } else if (slidesPerView > 1) {
              for (let i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
                if (slideExist(i)) loadInSlide(i);
              }
            } else {
              loadInSlide(activeIndex);
            }
    
            if (params.loadPrevNext) {
              if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
                const amount = params.loadPrevNextAmount;
                const spv = slidesPerView;
                const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
                const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides
    
                for (let i = activeIndex + slidesPerView; i < maxIndex; i += 1) {
                  if (slideExist(i)) loadInSlide(i);
                } // Prev Slides
    
    
                for (let i = minIndex; i < activeIndex; i += 1) {
                  if (slideExist(i)) loadInSlide(i);
                }
              } else {
                const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);
                if (nextSlide.length > 0) loadInSlide(slideIndex(nextSlide));
                const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);
                if (prevSlide.length > 0) loadInSlide(slideIndex(prevSlide));
              }
            }
          }
    
          function checkInViewOnLoad() {
            const window = getWindow();
            if (!swiper || swiper.destroyed) return;
            const $scrollElement = swiper.params.lazy.scrollingElement ? $(swiper.params.lazy.scrollingElement) : $(window);
            const isWindow = $scrollElement[0] === window;
            const scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
            const scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
            const swiperOffset = swiper.$el.offset();
            const {
              rtlTranslate: rtl
            } = swiper;
            let inView = false;
            if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
            const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];
    
            for (let i = 0; i < swiperCoord.length; i += 1) {
              const point = swiperCoord[i];
    
              if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
                if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
    
                inView = true;
              }
            }
    
            const passiveListener = swiper.touchEvents.start === 'touchstart' && swiper.support.passiveListener && swiper.params.passiveListeners ? {
              passive: true,
              capture: false
            } : false;
    
            if (inView) {
              load();
              $scrollElement.off('scroll', checkInViewOnLoad, passiveListener);
            } else if (!scrollHandlerAttached) {
              scrollHandlerAttached = true;
              $scrollElement.on('scroll', checkInViewOnLoad, passiveListener);
            }
          }
    
          on('beforeInit', () => {
            if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
              swiper.params.preloadImages = false;
            }
          });
          on('init', () => {
            if (swiper.params.lazy.enabled) {
              if (swiper.params.lazy.checkInView) {
                checkInViewOnLoad();
              } else {
                load();
              }
            }
          });
          on('scroll', () => {
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.freeMode.sticky) {
              load();
            }
          });
          on('scrollbarDragMove resize _freeModeNoMomentumRelease', () => {
            if (swiper.params.lazy.enabled) {
              if (swiper.params.lazy.checkInView) {
                checkInViewOnLoad();
              } else {
                load();
              }
            }
          });
          on('transitionStart', () => {
            if (swiper.params.lazy.enabled) {
              if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !initialImageLoaded) {
                if (swiper.params.lazy.checkInView) {
                  checkInViewOnLoad();
                } else {
                  load();
                }
              }
            }
          });
          on('transitionEnd', () => {
            if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
              if (swiper.params.lazy.checkInView) {
                checkInViewOnLoad();
              } else {
                load();
              }
            }
          });
          on('slideChange', () => {
            const {
              lazy,
              cssMode,
              watchSlidesProgress,
              touchReleaseOnEdges,
              resistanceRatio
            } = swiper.params;
    
            if (lazy.enabled && (cssMode || watchSlidesProgress && (touchReleaseOnEdges || resistanceRatio === 0))) {
              load();
            }
          });
          Object.assign(swiper.lazy, {
            load,
            loadInSlide
          });
        }
    
        /* eslint no-bitwise: ["error", { "allow": [">>"] }] */
        function Controller({
          swiper,
          extendParams,
          on
        }) {
          extendParams({
            controller: {
              control: undefined,
              inverse: false,
              by: 'slide' // or 'container'
    
            }
          });
          swiper.controller = {
            control: undefined
          };
    
          function LinearSpline(x, y) {
            const binarySearch = function search() {
              let maxIndex;
              let minIndex;
              let guess;
              return (array, val) => {
                minIndex = -1;
                maxIndex = array.length;
    
                while (maxIndex - minIndex > 1) {
                  guess = maxIndex + minIndex >> 1;
    
                  if (array[guess] <= val) {
                    minIndex = guess;
                  } else {
                    maxIndex = guess;
                  }
                }
    
                return maxIndex;
              };
            }();
    
            this.x = x;
            this.y = y;
            this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
            // (x1,y1) is the known point before given value,
            // (x3,y3) is the known point after given value.
    
            let i1;
            let i3;
    
            this.interpolate = function interpolate(x2) {
              if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):
    
              i3 = binarySearch(this.x, x2);
              i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
              // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
    
              return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
            };
    
            return this;
          } // xxx: for now i will just save one spline function to to
    
    
          function getInterpolateFunction(c) {
            if (!swiper.controller.spline) {
              swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
            }
          }
    
          function setTranslate(_t, byController) {
            const controlled = swiper.controller.control;
            let multiplier;
            let controlledTranslate;
            const Swiper = swiper.constructor;
    
            function setControlledTranslate(c) {
              // this will create an Interpolate function based on the snapGrids
              // x is the Grid of the scrolled scroller and y will be the controlled scroller
              // it makes sense to create this only once and recall it for the interpolation
              // the function does a lot of value caching for performance
              const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
    
              if (swiper.params.controller.by === 'slide') {
                getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                // but it did not work out
    
                controlledTranslate = -swiper.controller.spline.interpolate(-translate);
              }
    
              if (!controlledTranslate || swiper.params.controller.by === 'container') {
                multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
              }
    
              if (swiper.params.controller.inverse) {
                controlledTranslate = c.maxTranslate() - controlledTranslate;
              }
    
              c.updateProgress(controlledTranslate);
              c.setTranslate(controlledTranslate, swiper);
              c.updateActiveIndex();
              c.updateSlidesClasses();
            }
    
            if (Array.isArray(controlled)) {
              for (let i = 0; i < controlled.length; i += 1) {
                if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                  setControlledTranslate(controlled[i]);
                }
              }
            } else if (controlled instanceof Swiper && byController !== controlled) {
              setControlledTranslate(controlled);
            }
          }
    
          function setTransition(duration, byController) {
            const Swiper = swiper.constructor;
            const controlled = swiper.controller.control;
            let i;
    
            function setControlledTransition(c) {
              c.setTransition(duration, swiper);
    
              if (duration !== 0) {
                c.transitionStart();
    
                if (c.params.autoHeight) {
                  nextTick(() => {
                    c.updateAutoHeight();
                  });
                }
    
                c.$wrapperEl.transitionEnd(() => {
                  if (!controlled) return;
    
                  if (c.params.loop && swiper.params.controller.by === 'slide') {
                    c.loopFix();
                  }
    
                  c.transitionEnd();
                });
              }
            }
    
            if (Array.isArray(controlled)) {
              for (i = 0; i < controlled.length; i += 1) {
                if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                  setControlledTransition(controlled[i]);
                }
              }
            } else if (controlled instanceof Swiper && byController !== controlled) {
              setControlledTransition(controlled);
            }
          }
    
          function removeSpline() {
            if (!swiper.controller.control) return;
    
            if (swiper.controller.spline) {
              swiper.controller.spline = undefined;
              delete swiper.controller.spline;
            }
          }
    
          on('beforeInit', () => {
            swiper.controller.control = swiper.params.controller.control;
          });
          on('update', () => {
            removeSpline();
          });
          on('resize', () => {
            removeSpline();
          });
          on('observerUpdate', () => {
            removeSpline();
          });
          on('setTranslate', (_s, translate, byController) => {
            if (!swiper.controller.control) return;
            swiper.controller.setTranslate(translate, byController);
          });
          on('setTransition', (_s, duration, byController) => {
            if (!swiper.controller.control) return;
            swiper.controller.setTransition(duration, byController);
          });
          Object.assign(swiper.controller, {
            setTranslate,
            setTransition
          });
        }
    
        function A11y({
          swiper,
          extendParams,
          on
        }) {
          extendParams({
            a11y: {
              enabled: true,
              notificationClass: 'swiper-notification',
              prevSlideMessage: 'Previous slide',
              nextSlideMessage: 'Next slide',
              firstSlideMessage: 'This is the first slide',
              lastSlideMessage: 'This is the last slide',
              paginationBulletMessage: 'Go to slide {{index}}',
              slideLabelMessage: '{{index}} / {{slidesLength}}',
              containerMessage: null,
              containerRoleDescriptionMessage: null,
              itemRoleDescriptionMessage: null,
              slideRole: 'group'
            }
          });
          let liveRegion = null;
    
          function notify(message) {
            const notification = liveRegion;
            if (notification.length === 0) return;
            notification.html('');
            notification.html(message);
          }
    
          function getRandomNumber(size = 16) {
            const randomChar = () => Math.round(16 * Math.random()).toString(16);
    
            return 'x'.repeat(size).replace(/x/g, randomChar);
          }
    
          function makeElFocusable($el) {
            $el.attr('tabIndex', '0');
          }
    
          function makeElNotFocusable($el) {
            $el.attr('tabIndex', '-1');
          }
    
          function addElRole($el, role) {
            $el.attr('role', role);
          }
    
          function addElRoleDescription($el, description) {
            $el.attr('aria-roledescription', description);
          }
    
          function addElControls($el, controls) {
            $el.attr('aria-controls', controls);
          }
    
          function addElLabel($el, label) {
            $el.attr('aria-label', label);
          }
    
          function addElId($el, id) {
            $el.attr('id', id);
          }
    
          function addElLive($el, live) {
            $el.attr('aria-live', live);
          }
    
          function disableEl($el) {
            $el.attr('aria-disabled', true);
          }
    
          function enableEl($el) {
            $el.attr('aria-disabled', false);
          }
    
          function onEnterOrSpaceKey(e) {
            if (e.keyCode !== 13 && e.keyCode !== 32) return;
            const params = swiper.params.a11y;
            const $targetEl = $(e.target);
    
            if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
              if (!(swiper.isEnd && !swiper.params.loop)) {
                swiper.slideNext();
              }
    
              if (swiper.isEnd) {
                notify(params.lastSlideMessage);
              } else {
                notify(params.nextSlideMessage);
              }
            }
    
            if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
              if (!(swiper.isBeginning && !swiper.params.loop)) {
                swiper.slidePrev();
              }
    
              if (swiper.isBeginning) {
                notify(params.firstSlideMessage);
              } else {
                notify(params.prevSlideMessage);
              }
            }
    
            if (swiper.pagination && $targetEl.is(classesToSelector(swiper.params.pagination.bulletClass))) {
              $targetEl[0].click();
            }
          }
    
          function updateNavigation() {
            if (swiper.params.loop || !swiper.navigation) return;
            const {
              $nextEl,
              $prevEl
            } = swiper.navigation;
    
            if ($prevEl && $prevEl.length > 0) {
              if (swiper.isBeginning) {
                disableEl($prevEl);
                makeElNotFocusable($prevEl);
              } else {
                enableEl($prevEl);
                makeElFocusable($prevEl);
              }
            }
    
            if ($nextEl && $nextEl.length > 0) {
              if (swiper.isEnd) {
                disableEl($nextEl);
                makeElNotFocusable($nextEl);
              } else {
                enableEl($nextEl);
                makeElFocusable($nextEl);
              }
            }
          }
    
          function hasPagination() {
            return swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length;
          }
    
          function updatePagination() {
            const params = swiper.params.a11y;
    
            if (hasPagination()) {
              swiper.pagination.bullets.each(bulletEl => {
                const $bulletEl = $(bulletEl);
                makeElFocusable($bulletEl);
    
                if (!swiper.params.pagination.renderBullet) {
                  addElRole($bulletEl, 'button');
                  addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
                }
              });
            }
          }
    
          const initNavEl = ($el, wrapperId, message) => {
            makeElFocusable($el);
    
            if ($el[0].tagName !== 'BUTTON') {
              addElRole($el, 'button');
              $el.on('keydown', onEnterOrSpaceKey);
            }
    
            addElLabel($el, message);
            addElControls($el, wrapperId);
          };
    
          function init() {
            const params = swiper.params.a11y;
            swiper.$el.append(liveRegion); // Container
    
            const $containerEl = swiper.$el;
    
            if (params.containerRoleDescriptionMessage) {
              addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
            }
    
            if (params.containerMessage) {
              addElLabel($containerEl, params.containerMessage);
            } // Wrapper
    
    
            const $wrapperEl = swiper.$wrapperEl;
            const wrapperId = $wrapperEl.attr('id') || `swiper-wrapper-${getRandomNumber(16)}`;
            const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
            addElId($wrapperEl, wrapperId);
            addElLive($wrapperEl, live); // Slide
    
            if (params.itemRoleDescriptionMessage) {
              addElRoleDescription($(swiper.slides), params.itemRoleDescriptionMessage);
            }
    
            addElRole($(swiper.slides), params.slideRole);
            const slidesLength = swiper.params.loop ? swiper.slides.filter(el => !el.classList.contains(swiper.params.slideDuplicateClass)).length : swiper.slides.length;
            swiper.slides.each((slideEl, index) => {
              const $slideEl = $(slideEl);
              const slideIndex = swiper.params.loop ? parseInt($slideEl.attr('data-swiper-slide-index'), 10) : index;
              const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
              addElLabel($slideEl, ariaLabelMessage);
            }); // Navigation
    
            let $nextEl;
            let $prevEl;
    
            if (swiper.navigation && swiper.navigation.$nextEl) {
              $nextEl = swiper.navigation.$nextEl;
            }
    
            if (swiper.navigation && swiper.navigation.$prevEl) {
              $prevEl = swiper.navigation.$prevEl;
            }
    
            if ($nextEl && $nextEl.length) {
              initNavEl($nextEl, wrapperId, params.nextSlideMessage);
            }
    
            if ($prevEl && $prevEl.length) {
              initNavEl($prevEl, wrapperId, params.prevSlideMessage);
            } // Pagination
    
    
            if (hasPagination()) {
              swiper.pagination.$el.on('keydown', classesToSelector(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
            }
          }
    
          function destroy() {
            if (liveRegion && liveRegion.length > 0) liveRegion.remove();
            let $nextEl;
            let $prevEl;
    
            if (swiper.navigation && swiper.navigation.$nextEl) {
              $nextEl = swiper.navigation.$nextEl;
            }
    
            if (swiper.navigation && swiper.navigation.$prevEl) {
              $prevEl = swiper.navigation.$prevEl;
            }
    
            if ($nextEl) {
              $nextEl.off('keydown', onEnterOrSpaceKey);
            }
    
            if ($prevEl) {
              $prevEl.off('keydown', onEnterOrSpaceKey);
            } // Pagination
    
    
            if (hasPagination()) {
              swiper.pagination.$el.off('keydown', classesToSelector(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
            }
          }
    
          on('beforeInit', () => {
            liveRegion = $(`<span class="${swiper.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
          });
          on('afterInit', () => {
            if (!swiper.params.a11y.enabled) return;
            init();
            updateNavigation();
          });
          on('toEdge', () => {
            if (!swiper.params.a11y.enabled) return;
            updateNavigation();
          });
          on('fromEdge', () => {
            if (!swiper.params.a11y.enabled) return;
            updateNavigation();
          });
          on('paginationUpdate', () => {
            if (!swiper.params.a11y.enabled) return;
            updatePagination();
          });
          on('destroy', () => {
            if (!swiper.params.a11y.enabled) return;
            destroy();
          });
        }
    
        function History({
          swiper,
          extendParams,
          on
        }) {
          extendParams({
            history: {
              enabled: false,
              root: '',
              replaceState: false,
              key: 'slides'
            }
          });
          let initialized = false;
          let paths = {};
    
          const slugify = text => {
            return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
          };
    
          const getPathValues = urlOverride => {
            const window = getWindow();
            let location;
    
            if (urlOverride) {
              location = new URL(urlOverride);
            } else {
              location = window.location;
            }
    
            const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');
            const total = pathArray.length;
            const key = pathArray[total - 2];
            const value = pathArray[total - 1];
            return {
              key,
              value
            };
          };
    
          const setHistory = (key, index) => {
            const window = getWindow();
            if (!initialized || !swiper.params.history.enabled) return;
            let location;
    
            if (swiper.params.url) {
              location = new URL(swiper.params.url);
            } else {
              location = window.location;
            }
    
            const slide = swiper.slides.eq(index);
            let value = slugify(slide.attr('data-history'));
    
            if (swiper.params.history.root.length > 0) {
              let root = swiper.params.history.root;
              if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
              value = `${root}/${key}/${value}`;
            } else if (!location.pathname.includes(key)) {
              value = `${key}/${value}`;
            }
    
            const currentState = window.history.state;
    
            if (currentState && currentState.value === value) {
              return;
            }
    
            if (swiper.params.history.replaceState) {
              window.history.replaceState({
                value
              }, null, value);
            } else {
              window.history.pushState({
                value
              }, null, value);
            }
          };
    
          const scrollToSlide = (speed, value, runCallbacks) => {
            if (value) {
              for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
                const slide = swiper.slides.eq(i);
                const slideHistory = slugify(slide.attr('data-history'));
    
                if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                  const index = slide.index();
                  swiper.slideTo(index, speed, runCallbacks);
                }
              }
            } else {
              swiper.slideTo(0, speed, runCallbacks);
            }
          };
    
          const setHistoryPopState = () => {
            paths = getPathValues(swiper.params.url);
            scrollToSlide(swiper.params.speed, swiper.paths.value, false);
          };
    
          const init = () => {
            const window = getWindow();
            if (!swiper.params.history) return;
    
            if (!window.history || !window.history.pushState) {
              swiper.params.history.enabled = false;
              swiper.params.hashNavigation.enabled = true;
              return;
            }
    
            initialized = true;
            paths = getPathValues(swiper.params.url);
            if (!paths.key && !paths.value) return;
            scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
    
            if (!swiper.params.history.replaceState) {
              window.addEventListener('popstate', setHistoryPopState);
            }
          };
    
          const destroy = () => {
            const window = getWindow();
    
            if (!swiper.params.history.replaceState) {
              window.removeEventListener('popstate', setHistoryPopState);
            }
          };
    
          on('init', () => {
            if (swiper.params.history.enabled) {
              init();
            }
          });
          on('destroy', () => {
            if (swiper.params.history.enabled) {
              destroy();
            }
          });
          on('transitionEnd _freeModeNoMomentumRelease', () => {
            if (initialized) {
              setHistory(swiper.params.history.key, swiper.activeIndex);
            }
          });
          on('slideChange', () => {
            if (initialized && swiper.params.cssMode) {
              setHistory(swiper.params.history.key, swiper.activeIndex);
            }
          });
        }
    
        function HashNavigation({
          swiper,
          extendParams,
          emit,
          on
        }) {
          let initialized = false;
          const document = getDocument();
          const window = getWindow();
          extendParams({
            hashNavigation: {
              enabled: false,
              replaceState: false,
              watchState: false
            }
          });
    
          const onHashChange = () => {
            emit('hashChange');
            const newHash = document.location.hash.replace('#', '');
            const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
    
            if (newHash !== activeSlideHash) {
              const newIndex = swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-hash="${newHash}"]`).index();
              if (typeof newIndex === 'undefined') return;
              swiper.slideTo(newIndex);
            }
          };
    
          const setHash = () => {
            if (!initialized || !swiper.params.hashNavigation.enabled) return;
    
            if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
              window.history.replaceState(null, null, `#${swiper.slides.eq(swiper.activeIndex).attr('data-hash')}` || '');
              emit('hashSet');
            } else {
              const slide = swiper.slides.eq(swiper.activeIndex);
              const hash = slide.attr('data-hash') || slide.attr('data-history');
              document.location.hash = hash || '';
              emit('hashSet');
            }
          };
    
          const init = () => {
            if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
            initialized = true;
            const hash = document.location.hash.replace('#', '');
    
            if (hash) {
              const speed = 0;
    
              for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
                const slide = swiper.slides.eq(i);
                const slideHash = slide.attr('data-hash') || slide.attr('data-history');
    
                if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                  const index = slide.index();
                  swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
                }
              }
            }
    
            if (swiper.params.hashNavigation.watchState) {
              $(window).on('hashchange', onHashChange);
            }
          };
    
          const destroy = () => {
            if (swiper.params.hashNavigation.watchState) {
              $(window).off('hashchange', onHashChange);
            }
          };
    
          on('init', () => {
            if (swiper.params.hashNavigation.enabled) {
              init();
            }
          });
          on('destroy', () => {
            if (swiper.params.hashNavigation.enabled) {
              destroy();
            }
          });
          on('transitionEnd _freeModeNoMomentumRelease', () => {
            if (initialized) {
              setHash();
            }
          });
          on('slideChange', () => {
            if (initialized && swiper.params.cssMode) {
              setHash();
            }
          });
        }
    
        /* eslint no-underscore-dangle: "off" */
        function Autoplay({
          swiper,
          extendParams,
          on,
          emit
        }) {
          let timeout;
          swiper.autoplay = {
            running: false,
            paused: false
          };
          extendParams({
            autoplay: {
              enabled: false,
              delay: 3000,
              waitForTransition: true,
              disableOnInteraction: true,
              stopOnLastSlide: false,
              reverseDirection: false,
              pauseOnMouseEnter: false
            }
          });
    
          function run() {
            const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
            let delay = swiper.params.autoplay.delay;
    
            if ($activeSlideEl.attr('data-swiper-autoplay')) {
              delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
            }
    
            clearTimeout(timeout);
            timeout = nextTick(() => {
              let autoplayResult;
    
              if (swiper.params.autoplay.reverseDirection) {
                if (swiper.params.loop) {
                  swiper.loopFix();
                  autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                  emit('autoplay');
                } else if (!swiper.isBeginning) {
                  autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                  emit('autoplay');
                } else if (!swiper.params.autoplay.stopOnLastSlide) {
                  autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
                  emit('autoplay');
                } else {
                  stop();
                }
              } else if (swiper.params.loop) {
                swiper.loopFix();
                autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                emit('autoplay');
              } else if (!swiper.isEnd) {
                autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                emit('autoplay');
              } else if (!swiper.params.autoplay.stopOnLastSlide) {
                autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
                emit('autoplay');
              } else {
                stop();
              }
    
              if (swiper.params.cssMode && swiper.autoplay.running) run();else if (autoplayResult === false) {
                run();
              }
            }, delay);
          }
    
          function start() {
            if (typeof timeout !== 'undefined') return false;
            if (swiper.autoplay.running) return false;
            swiper.autoplay.running = true;
            emit('autoplayStart');
            run();
            return true;
          }
    
          function stop() {
            if (!swiper.autoplay.running) return false;
            if (typeof timeout === 'undefined') return false;
    
            if (timeout) {
              clearTimeout(timeout);
              timeout = undefined;
            }
    
            swiper.autoplay.running = false;
            emit('autoplayStop');
            return true;
          }
    
          function pause(speed) {
            if (!swiper.autoplay.running) return;
            if (swiper.autoplay.paused) return;
            if (timeout) clearTimeout(timeout);
            swiper.autoplay.paused = true;
    
            if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
              swiper.autoplay.paused = false;
              run();
            } else {
              ['transitionend', 'webkitTransitionEnd'].forEach(event => {
                swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
              });
            }
          }
    
          function onVisibilityChange() {
            const document = getDocument();
    
            if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
              pause();
            }
    
            if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
              run();
              swiper.autoplay.paused = false;
            }
          }
    
          function onTransitionEnd(e) {
            if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
            if (e.target !== swiper.$wrapperEl[0]) return;
            ['transitionend', 'webkitTransitionEnd'].forEach(event => {
              swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
            });
            swiper.autoplay.paused = false;
    
            if (!swiper.autoplay.running) {
              stop();
            } else {
              run();
            }
          }
    
          function onMouseEnter() {
            if (swiper.params.autoplay.disableOnInteraction) {
              stop();
            } else {
              pause();
            }
    
            ['transitionend', 'webkitTransitionEnd'].forEach(event => {
              swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
            });
          }
    
          function onMouseLeave() {
            if (swiper.params.autoplay.disableOnInteraction) {
              return;
            }
    
            swiper.autoplay.paused = false;
            run();
          }
    
          function attachMouseEvents() {
            if (swiper.params.autoplay.pauseOnMouseEnter) {
              swiper.$el.on('mouseenter', onMouseEnter);
              swiper.$el.on('mouseleave', onMouseLeave);
            }
          }
    
          function detachMouseEvents() {
            swiper.$el.off('mouseenter', onMouseEnter);
            swiper.$el.off('mouseleave', onMouseLeave);
          }
    
          on('init', () => {
            if (swiper.params.autoplay.enabled) {
              start();
              const document = getDocument();
              document.addEventListener('visibilitychange', onVisibilityChange);
              attachMouseEvents();
            }
          });
          on('beforeTransitionStart', (_s, speed, internal) => {
            if (swiper.autoplay.running) {
              if (internal || !swiper.params.autoplay.disableOnInteraction) {
                swiper.autoplay.pause(speed);
              } else {
                stop();
              }
            }
          });
          on('sliderFirstMove', () => {
            if (swiper.autoplay.running) {
              if (swiper.params.autoplay.disableOnInteraction) {
                stop();
              } else {
                pause();
              }
            }
          });
          on('touchEnd', () => {
            if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
              run();
            }
          });
          on('destroy', () => {
            detachMouseEvents();
    
            if (swiper.autoplay.running) {
              stop();
            }
    
            const document = getDocument();
            document.removeEventListener('visibilitychange', onVisibilityChange);
          });
          Object.assign(swiper.autoplay, {
            pause,
            run,
            start,
            stop
          });
        }
    
        function Thumb({
          swiper,
          extendParams,
          on
        }) {
          extendParams({
            thumbs: {
              swiper: null,
              multipleActiveThumbs: true,
              autoScrollOffset: 0,
              slideThumbActiveClass: 'swiper-slide-thumb-active',
              thumbsContainerClass: 'swiper-thumbs'
            }
          });
          let initialized = false;
          let swiperCreated = false;
          swiper.thumbs = {
            swiper: null
          };
    
          function onThumbClick() {
            const thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper) return;
            const clickedIndex = thumbsSwiper.clickedIndex;
            const clickedSlide = thumbsSwiper.clickedSlide;
            if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
            if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
            let slideToIndex;
    
            if (thumbsSwiper.params.loop) {
              slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
            } else {
              slideToIndex = clickedIndex;
            }
    
            if (swiper.params.loop) {
              let currentIndex = swiper.activeIndex;
    
              if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
                swiper.loopFix(); // eslint-disable-next-line
    
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
                currentIndex = swiper.activeIndex;
              }
    
              const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
              const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
              if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;
            }
    
            swiper.slideTo(slideToIndex);
          }
    
          function init() {
            const {
              thumbs: thumbsParams
            } = swiper.params;
            if (initialized) return false;
            initialized = true;
            const SwiperClass = swiper.constructor;
    
            if (thumbsParams.swiper instanceof SwiperClass) {
              swiper.thumbs.swiper = thumbsParams.swiper;
              Object.assign(swiper.thumbs.swiper.originalParams, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
              });
              Object.assign(swiper.thumbs.swiper.params, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
              });
            } else if (isObject(thumbsParams.swiper)) {
              const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
              Object.assign(thumbsSwiperParams, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
              });
              swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
              swiperCreated = true;
            }
    
            swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
            swiper.thumbs.swiper.on('tap', onThumbClick);
            return true;
          }
    
          function update(initial) {
            const thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper) return;
            const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
            const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
            const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
    
            if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
              let currentThumbsIndex = thumbsSwiper.activeIndex;
              let newThumbsIndex;
              let direction;
    
              if (thumbsSwiper.params.loop) {
                if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
                  thumbsSwiper.loopFix(); // eslint-disable-next-line
    
                  thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
                  currentThumbsIndex = thumbsSwiper.activeIndex;
                } // Find actual thumbs index to slide to
    
    
                const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
                const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
    
                if (typeof prevThumbsIndex === 'undefined') {
                  newThumbsIndex = nextThumbsIndex;
                } else if (typeof nextThumbsIndex === 'undefined') {
                  newThumbsIndex = prevThumbsIndex;
                } else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) {
                  newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;
                } else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) {
                  newThumbsIndex = nextThumbsIndex;
                } else {
                  newThumbsIndex = prevThumbsIndex;
                }
    
                direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
              } else {
                newThumbsIndex = swiper.realIndex;
                direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
              }
    
              if (useOffset) {
                newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
              }
    
              if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                if (thumbsSwiper.params.centeredSlides) {
                  if (newThumbsIndex > currentThumbsIndex) {
                    newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
                  } else {
                    newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
                  }
                } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
    
                thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
              }
            } // Activate thumbs
    
    
            let thumbsToActivate = 1;
            const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
    
            if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
              thumbsToActivate = swiper.params.slidesPerView;
            }
    
            if (!swiper.params.thumbs.multipleActiveThumbs) {
              thumbsToActivate = 1;
            }
    
            thumbsToActivate = Math.floor(thumbsToActivate);
            thumbsSwiper.slides.removeClass(thumbActiveClass);
    
            if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
              for (let i = 0; i < thumbsToActivate; i += 1) {
                thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass);
              }
            } else {
              for (let i = 0; i < thumbsToActivate; i += 1) {
                thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass);
              }
            }
          }
    
          on('beforeInit', () => {
            const {
              thumbs
            } = swiper.params;
            if (!thumbs || !thumbs.swiper) return;
            init();
            update(true);
          });
          on('slideChange update resize observerUpdate', () => {
            if (!swiper.thumbs.swiper) return;
            update();
          });
          on('setTransition', (_s, duration) => {
            const thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper) return;
            thumbsSwiper.setTransition(duration);
          });
          on('beforeDestroy', () => {
            const thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper) return;
    
            if (swiperCreated && thumbsSwiper) {
              thumbsSwiper.destroy();
            }
          });
          Object.assign(swiper.thumbs, {
            init,
            update
          });
        }
    
        function freeMode({
          swiper,
          extendParams,
          emit,
          once
        }) {
          extendParams({
            freeMode: {
              enabled: false,
              momentum: true,
              momentumRatio: 1,
              momentumBounce: true,
              momentumBounceRatio: 1,
              momentumVelocityRatio: 1,
              sticky: false,
              minimumVelocity: 0.02
            }
          });
    
          function onTouchMove() {
            const {
              touchEventsData: data,
              touches
            } = swiper; // Velocity
    
            if (data.velocities.length === 0) {
              data.velocities.push({
                position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
                time: data.touchStartTime
              });
            }
    
            data.velocities.push({
              position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
              time: now()
            });
          }
    
          function onTouchEnd({
            currentPos
          }) {
            const {
              params,
              $wrapperEl,
              rtlTranslate: rtl,
              snapGrid,
              touchEventsData: data
            } = swiper; // Time diff
    
            const touchEndTime = now();
            const timeDiff = touchEndTime - data.touchStartTime;
    
            if (currentPos < -swiper.minTranslate()) {
              swiper.slideTo(swiper.activeIndex);
              return;
            }
    
            if (currentPos > -swiper.maxTranslate()) {
              if (swiper.slides.length < snapGrid.length) {
                swiper.slideTo(snapGrid.length - 1);
              } else {
                swiper.slideTo(swiper.slides.length - 1);
              }
    
              return;
            }
    
            if (params.freeMode.momentum) {
              if (data.velocities.length > 1) {
                const lastMoveEvent = data.velocities.pop();
                const velocityEvent = data.velocities.pop();
                const distance = lastMoveEvent.position - velocityEvent.position;
                const time = lastMoveEvent.time - velocityEvent.time;
                swiper.velocity = distance / time;
                swiper.velocity /= 2;
    
                if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
                  swiper.velocity = 0;
                } // this implies that the user stopped moving a finger then released.
                // There would be no events with distance zero, so the last event is stale.
    
    
                if (time > 150 || now() - lastMoveEvent.time > 300) {
                  swiper.velocity = 0;
                }
              } else {
                swiper.velocity = 0;
              }
    
              swiper.velocity *= params.freeMode.momentumVelocityRatio;
              data.velocities.length = 0;
              let momentumDuration = 1000 * params.freeMode.momentumRatio;
              const momentumDistance = swiper.velocity * momentumDuration;
              let newPosition = swiper.translate + momentumDistance;
              if (rtl) newPosition = -newPosition;
              let doBounce = false;
              let afterBouncePosition;
              const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
              let needsLoopFix;
    
              if (newPosition < swiper.maxTranslate()) {
                if (params.freeMode.momentumBounce) {
                  if (newPosition + swiper.maxTranslate() < -bounceAmount) {
                    newPosition = swiper.maxTranslate() - bounceAmount;
                  }
    
                  afterBouncePosition = swiper.maxTranslate();
                  doBounce = true;
                  data.allowMomentumBounce = true;
                } else {
                  newPosition = swiper.maxTranslate();
                }
    
                if (params.loop && params.centeredSlides) needsLoopFix = true;
              } else if (newPosition > swiper.minTranslate()) {
                if (params.freeMode.momentumBounce) {
                  if (newPosition - swiper.minTranslate() > bounceAmount) {
                    newPosition = swiper.minTranslate() + bounceAmount;
                  }
    
                  afterBouncePosition = swiper.minTranslate();
                  doBounce = true;
                  data.allowMomentumBounce = true;
                } else {
                  newPosition = swiper.minTranslate();
                }
    
                if (params.loop && params.centeredSlides) needsLoopFix = true;
              } else if (params.freeMode.sticky) {
                let nextSlide;
    
                for (let j = 0; j < snapGrid.length; j += 1) {
                  if (snapGrid[j] > -newPosition) {
                    nextSlide = j;
                    break;
                  }
                }
    
                if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
                  newPosition = snapGrid[nextSlide];
                } else {
                  newPosition = snapGrid[nextSlide - 1];
                }
    
                newPosition = -newPosition;
              }
    
              if (needsLoopFix) {
                once('transitionEnd', () => {
                  swiper.loopFix();
                });
              } // Fix duration
    
    
              if (swiper.velocity !== 0) {
                if (rtl) {
                  momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
                } else {
                  momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                }
    
                if (params.freeMode.sticky) {
                  // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
                  // event, then durations can be 20+ seconds to slide one (or zero!) slides.
                  // It's easy to see this when simulating touch with mouse events. To fix this,
                  // limit single-slide swipes to the default slide duration. This also has the
                  // nice side effect of matching slide speed if the user stopped moving before
                  // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
                  // For faster swipes, also apply limits (albeit higher ones).
                  const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
                  const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
    
                  if (moveDistance < currentSlideSize) {
                    momentumDuration = params.speed;
                  } else if (moveDistance < 2 * currentSlideSize) {
                    momentumDuration = params.speed * 1.5;
                  } else {
                    momentumDuration = params.speed * 2.5;
                  }
                }
              } else if (params.freeMode.sticky) {
                swiper.slideToClosest();
                return;
              }
    
              if (params.freeMode.momentumBounce && doBounce) {
                swiper.updateProgress(afterBouncePosition);
                swiper.setTransition(momentumDuration);
                swiper.setTranslate(newPosition);
                swiper.transitionStart(true, swiper.swipeDirection);
                swiper.animating = true;
                $wrapperEl.transitionEnd(() => {
                  if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
                  emit('momentumBounce');
                  swiper.setTransition(params.speed);
                  setTimeout(() => {
                    swiper.setTranslate(afterBouncePosition);
                    $wrapperEl.transitionEnd(() => {
                      if (!swiper || swiper.destroyed) return;
                      swiper.transitionEnd();
                    });
                  }, 0);
                });
              } else if (swiper.velocity) {
                emit('_freeModeNoMomentumRelease');
                swiper.updateProgress(newPosition);
                swiper.setTransition(momentumDuration);
                swiper.setTranslate(newPosition);
                swiper.transitionStart(true, swiper.swipeDirection);
    
                if (!swiper.animating) {
                  swiper.animating = true;
                  $wrapperEl.transitionEnd(() => {
                    if (!swiper || swiper.destroyed) return;
                    swiper.transitionEnd();
                  });
                }
              } else {
                swiper.updateProgress(newPosition);
              }
    
              swiper.updateActiveIndex();
              swiper.updateSlidesClasses();
            } else if (params.freeMode.sticky) {
              swiper.slideToClosest();
              return;
            } else if (params.freeMode) {
              emit('_freeModeNoMomentumRelease');
            }
    
            if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
              swiper.updateProgress();
              swiper.updateActiveIndex();
              swiper.updateSlidesClasses();
            }
          }
    
          Object.assign(swiper, {
            freeMode: {
              onTouchMove,
              onTouchEnd
            }
          });
        }
    
        function Grid({
          swiper,
          extendParams
        }) {
          extendParams({
            grid: {
              rows: 1,
              fill: 'column'
            }
          });
          let slidesNumberEvenToRows;
          let slidesPerRow;
          let numFullColumns;
    
          const initSlides = slidesLength => {
            const {
              slidesPerView
            } = swiper.params;
            const {
              rows,
              fill
            } = swiper.params.grid;
            slidesPerRow = slidesNumberEvenToRows / rows;
            numFullColumns = Math.floor(slidesLength / rows);
    
            if (Math.floor(slidesLength / rows) === slidesLength / rows) {
              slidesNumberEvenToRows = slidesLength;
            } else {
              slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
            }
    
            if (slidesPerView !== 'auto' && fill === 'row') {
              slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
            }
          };
    
          const updateSlide = (i, slide, slidesLength, getDirectionLabel) => {
            const {
              slidesPerGroup,
              spaceBetween
            } = swiper.params;
            const {
              rows,
              fill
            } = swiper.params.grid; // Set slides order
    
            let newSlideOrderIndex;
            let column;
            let row;
    
            if (fill === 'row' && slidesPerGroup > 1) {
              const groupIndex = Math.floor(i / (slidesPerGroup * rows));
              const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
              const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
              row = Math.floor(slideIndexInGroup / columnsInGroup);
              column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
              newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
              slide.css({
                '-webkit-order': newSlideOrderIndex,
                order: newSlideOrderIndex
              });
            } else if (fill === 'column') {
              column = Math.floor(i / rows);
              row = i - column * rows;
    
              if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
                row += 1;
    
                if (row >= rows) {
                  row = 0;
                  column += 1;
                }
              }
            } else {
              row = Math.floor(i / slidesPerRow);
              column = i - row * slidesPerRow;
            }
    
            slide.css(getDirectionLabel('margin-top'), row !== 0 ? spaceBetween && `${spaceBetween}px` : '');
          };
    
          const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel) => {
            const {
              spaceBetween,
              centeredSlides,
              roundLengths
            } = swiper.params;
            const {
              rows
            } = swiper.params.grid;
            swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
            swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
            swiper.$wrapperEl.css({
              [getDirectionLabel('width')]: `${swiper.virtualSize + spaceBetween}px`
            });
    
            if (centeredSlides) {
              snapGrid.splice(0, snapGrid.length);
              const newSlidesGrid = [];
    
              for (let i = 0; i < snapGrid.length; i += 1) {
                let slidesGridItem = snapGrid[i];
                if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
              }
    
              snapGrid.push(...newSlidesGrid);
            }
          };
    
          swiper.grid = {
            initSlides,
            updateSlide,
            updateWrapperSize
          };
        }
    
        function appendSlide(slides) {
          const swiper = this;
          const {
            $wrapperEl,
            params
          } = swiper;
    
          if (params.loop) {
            swiper.loopDestroy();
          }
    
          if (typeof slides === 'object' && 'length' in slides) {
            for (let i = 0; i < slides.length; i += 1) {
              if (slides[i]) $wrapperEl.append(slides[i]);
            }
          } else {
            $wrapperEl.append(slides);
          }
    
          if (params.loop) {
            swiper.loopCreate();
          }
    
          if (!params.observer) {
            swiper.update();
          }
        }
    
        function prependSlide(slides) {
          const swiper = this;
          const {
            params,
            $wrapperEl,
            activeIndex
          } = swiper;
    
          if (params.loop) {
            swiper.loopDestroy();
          }
    
          let newActiveIndex = activeIndex + 1;
    
          if (typeof slides === 'object' && 'length' in slides) {
            for (let i = 0; i < slides.length; i += 1) {
              if (slides[i]) $wrapperEl.prepend(slides[i]);
            }
    
            newActiveIndex = activeIndex + slides.length;
          } else {
            $wrapperEl.prepend(slides);
          }
    
          if (params.loop) {
            swiper.loopCreate();
          }
    
          if (!params.observer) {
            swiper.update();
          }
    
          swiper.slideTo(newActiveIndex, 0, false);
        }
    
        function addSlide(index, slides) {
          const swiper = this;
          const {
            $wrapperEl,
            params,
            activeIndex
          } = swiper;
          let activeIndexBuffer = activeIndex;
    
          if (params.loop) {
            activeIndexBuffer -= swiper.loopedSlides;
            swiper.loopDestroy();
            swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
          }
    
          const baseLength = swiper.slides.length;
    
          if (index <= 0) {
            swiper.prependSlide(slides);
            return;
          }
    
          if (index >= baseLength) {
            swiper.appendSlide(slides);
            return;
          }
    
          let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
          const slidesBuffer = [];
    
          for (let i = baseLength - 1; i >= index; i -= 1) {
            const currentSlide = swiper.slides.eq(i);
            currentSlide.remove();
            slidesBuffer.unshift(currentSlide);
          }
    
          if (typeof slides === 'object' && 'length' in slides) {
            for (let i = 0; i < slides.length; i += 1) {
              if (slides[i]) $wrapperEl.append(slides[i]);
            }
    
            newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
          } else {
            $wrapperEl.append(slides);
          }
    
          for (let i = 0; i < slidesBuffer.length; i += 1) {
            $wrapperEl.append(slidesBuffer[i]);
          }
    
          if (params.loop) {
            swiper.loopCreate();
          }
    
          if (!params.observer) {
            swiper.update();
          }
    
          if (params.loop) {
            swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
          } else {
            swiper.slideTo(newActiveIndex, 0, false);
          }
        }
    
        function removeSlide(slidesIndexes) {
          const swiper = this;
          const {
            params,
            $wrapperEl,
            activeIndex
          } = swiper;
          let activeIndexBuffer = activeIndex;
    
          if (params.loop) {
            activeIndexBuffer -= swiper.loopedSlides;
            swiper.loopDestroy();
            swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
          }
    
          let newActiveIndex = activeIndexBuffer;
          let indexToRemove;
    
          if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
            for (let i = 0; i < slidesIndexes.length; i += 1) {
              indexToRemove = slidesIndexes[i];
              if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
              if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
            }
    
            newActiveIndex = Math.max(newActiveIndex, 0);
          } else {
            indexToRemove = slidesIndexes;
            if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
            if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
            newActiveIndex = Math.max(newActiveIndex, 0);
          }
    
          if (params.loop) {
            swiper.loopCreate();
          }
    
          if (!params.observer) {
            swiper.update();
          }
    
          if (params.loop) {
            swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
          } else {
            swiper.slideTo(newActiveIndex, 0, false);
          }
        }
    
        function removeAllSlides() {
          const swiper = this;
          const slidesIndexes = [];
    
          for (let i = 0; i < swiper.slides.length; i += 1) {
            slidesIndexes.push(i);
          }
    
          swiper.removeSlide(slidesIndexes);
        }
    
        function Manipulation({
          swiper
        }) {
          Object.assign(swiper, {
            appendSlide: appendSlide.bind(swiper),
            prependSlide: prependSlide.bind(swiper),
            addSlide: addSlide.bind(swiper),
            removeSlide: removeSlide.bind(swiper),
            removeAllSlides: removeAllSlides.bind(swiper)
          });
        }
    
        function effectInit(params) {
          const {
            effect,
            swiper,
            on,
            setTranslate,
            setTransition,
            overwriteParams,
            perspective
          } = params;
          on('beforeInit', () => {
            if (swiper.params.effect !== effect) return;
            swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
    
            if (perspective && perspective()) {
              swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
            }
    
            const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
            Object.assign(swiper.params, overwriteParamsResult);
            Object.assign(swiper.originalParams, overwriteParamsResult);
          });
          on('setTranslate', () => {
            if (swiper.params.effect !== effect) return;
            setTranslate();
          });
          on('setTransition', (_s, duration) => {
            if (swiper.params.effect !== effect) return;
            setTransition(duration);
          });
        }
    
        function effectTarget(effectParams, $slideEl) {
          if (effectParams.transformEl) {
            return $slideEl.find(effectParams.transformEl).css({
              'backface-visibility': 'hidden',
              '-webkit-backface-visibility': 'hidden'
            });
          }
    
          return $slideEl;
        }
    
        function effectVirtualTransitionEnd({
          swiper,
          duration,
          transformEl,
          allSlides
        }) {
          const {
            slides,
            activeIndex,
            $wrapperEl
          } = swiper;
    
          if (swiper.params.virtualTranslate && duration !== 0) {
            let eventTriggered = false;
            let $transitionEndTarget;
    
            if (allSlides) {
              $transitionEndTarget = transformEl ? slides.find(transformEl) : slides;
            } else {
              $transitionEndTarget = transformEl ? slides.eq(activeIndex).find(transformEl) : slides.eq(activeIndex);
            }
    
            $transitionEndTarget.transitionEnd(() => {
              if (eventTriggered) return;
              if (!swiper || swiper.destroyed) return;
              eventTriggered = true;
              swiper.animating = false;
              const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
    
              for (let i = 0; i < triggerEvents.length; i += 1) {
                $wrapperEl.trigger(triggerEvents[i]);
              }
            });
          }
        }
    
        function EffectFade({
          swiper,
          extendParams,
          on
        }) {
          extendParams({
            fadeEffect: {
              crossFade: false,
              transformEl: null
            }
          });
    
          const setTranslate = () => {
            const {
              slides
            } = swiper;
            const params = swiper.params.fadeEffect;
    
            for (let i = 0; i < slides.length; i += 1) {
              const $slideEl = swiper.slides.eq(i);
              const offset = $slideEl[0].swiperSlideOffset;
              let tx = -offset;
              if (!swiper.params.virtualTranslate) tx -= swiper.translate;
              let ty = 0;
    
              if (!swiper.isHorizontal()) {
                ty = tx;
                tx = 0;
              }
    
              const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
              const $targetEl = effectTarget(params, $slideEl);
              $targetEl.css({
                opacity: slideOpacity
              }).transform(`translate3d(${tx}px, ${ty}px, 0px)`);
            }
          };
    
          const setTransition = duration => {
            const {
              transformEl
            } = swiper.params.fadeEffect;
            const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
            $transitionElements.transition(duration);
            effectVirtualTransitionEnd({
              swiper,
              duration,
              transformEl,
              allSlides: true
            });
          };
    
          effectInit({
            effect: 'fade',
            swiper,
            on,
            setTranslate,
            setTransition,
            overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: true,
              spaceBetween: 0,
              virtualTranslate: !swiper.params.cssMode
            })
          });
        }
    
        function EffectCube({
          swiper,
          extendParams,
          on
        }) {
          extendParams({
            cubeEffect: {
              slideShadows: true,
              shadow: true,
              shadowOffset: 20,
              shadowScale: 0.94
            }
          });
    
          const setTranslate = () => {
            const {
              $el,
              $wrapperEl,
              slides,
              width: swiperWidth,
              height: swiperHeight,
              rtlTranslate: rtl,
              size: swiperSize,
              browser
            } = swiper;
            const params = swiper.params.cubeEffect;
            const isHorizontal = swiper.isHorizontal();
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let wrapperRotate = 0;
            let $cubeShadowEl;
    
            if (params.shadow) {
              if (isHorizontal) {
                $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
    
                if ($cubeShadowEl.length === 0) {
                  $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
                  $wrapperEl.append($cubeShadowEl);
                }
    
                $cubeShadowEl.css({
                  height: `${swiperWidth}px`
                });
              } else {
                $cubeShadowEl = $el.find('.swiper-cube-shadow');
    
                if ($cubeShadowEl.length === 0) {
                  $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
                  $el.append($cubeShadowEl);
                }
              }
            }
    
            for (let i = 0; i < slides.length; i += 1) {
              const $slideEl = slides.eq(i);
              let slideIndex = i;
    
              if (isVirtual) {
                slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
              }
    
              let slideAngle = slideIndex * 90;
              let round = Math.floor(slideAngle / 360);
    
              if (rtl) {
                slideAngle = -slideAngle;
                round = Math.floor(-slideAngle / 360);
              }
    
              const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
              let tx = 0;
              let ty = 0;
              let tz = 0;
    
              if (slideIndex % 4 === 0) {
                tx = -round * 4 * swiperSize;
                tz = 0;
              } else if ((slideIndex - 1) % 4 === 0) {
                tx = 0;
                tz = -round * 4 * swiperSize;
              } else if ((slideIndex - 2) % 4 === 0) {
                tx = swiperSize + round * 4 * swiperSize;
                tz = swiperSize;
              } else if ((slideIndex - 3) % 4 === 0) {
                tx = -swiperSize;
                tz = 3 * swiperSize + swiperSize * 4 * round;
              }
    
              if (rtl) {
                tx = -tx;
              }
    
              if (!isHorizontal) {
                ty = tx;
                tx = 0;
              }
    
              const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
    
              if (progress <= 1 && progress > -1) {
                wrapperRotate = slideIndex * 90 + progress * 90;
                if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
              }
    
              $slideEl.transform(transform);
    
              if (params.slideShadows) {
                // Set shadows
                let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
    
                if (shadowBefore.length === 0) {
                  shadowBefore = $(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
                  $slideEl.append(shadowBefore);
                }
    
                if (shadowAfter.length === 0) {
                  shadowAfter = $(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
                  $slideEl.append(shadowAfter);
                }
    
                if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
              }
            }
    
            $wrapperEl.css({
              '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
              'transform-origin': `50% 50% -${swiperSize / 2}px`
            });
    
            if (params.shadow) {
              if (isHorizontal) {
                $cubeShadowEl.transform(`translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
              } else {
                const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                const scale1 = params.shadowScale;
                const scale2 = params.shadowScale / multiplier;
                const offset = params.shadowOffset;
                $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
              }
            }
    
            const zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
            $wrapperEl.transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
          };
    
          const setTransition = duration => {
            const {
              $el,
              slides
            } = swiper;
            slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
    
            if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
              $el.find('.swiper-cube-shadow').transition(duration);
            }
          };
    
          effectInit({
            effect: 'cube',
            swiper,
            on,
            setTranslate,
            setTransition,
            perspective: () => true,
            overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: true,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: false,
              virtualTranslate: true
            })
          });
        }
    
        function createShadow(params, $slideEl, side) {
          const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}`;
          const $shadowContainer = params.transformEl ? $slideEl.find(params.transformEl) : $slideEl;
          let $shadowEl = $shadowContainer.children(`.${shadowClass}`);
    
          if (!$shadowEl.length) {
            $shadowEl = $(`<div class="swiper-slide-shadow${side ? `-${side}` : ''}"></div>`);
            $shadowContainer.append($shadowEl);
          }
    
          return $shadowEl;
        }
    
        function EffectFlip({
          swiper,
          extendParams,
          on
        }) {
          extendParams({
            flipEffect: {
              slideShadows: true,
              limitRotation: true,
              transformEl: null
            }
          });
    
          const setTranslate = () => {
            const {
              slides,
              rtlTranslate: rtl
            } = swiper;
            const params = swiper.params.flipEffect;
    
            for (let i = 0; i < slides.length; i += 1) {
              const $slideEl = slides.eq(i);
              let progress = $slideEl[0].progress;
    
              if (swiper.params.flipEffect.limitRotation) {
                progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
              }
    
              const offset = $slideEl[0].swiperSlideOffset;
              const rotate = -180 * progress;
              let rotateY = rotate;
              let rotateX = 0;
              let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
              let ty = 0;
    
              if (!swiper.isHorizontal()) {
                ty = tx;
                tx = 0;
                rotateX = -rotateY;
                rotateY = 0;
              } else if (rtl) {
                rotateY = -rotateY;
              }
    
              $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
    
              if (params.slideShadows) {
                // Set shadows
                let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
    
                if (shadowBefore.length === 0) {
                  shadowBefore = createShadow(params, $slideEl, swiper.isHorizontal() ? 'left' : 'top');
                }
    
                if (shadowAfter.length === 0) {
                  shadowAfter = createShadow(params, $slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
                }
    
                if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
              }
    
              const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
              const $targetEl = effectTarget(params, $slideEl);
              $targetEl.transform(transform);
            }
          };
    
          const setTransition = duration => {
            const {
              transformEl
            } = swiper.params.flipEffect;
            const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
            $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
            effectVirtualTransitionEnd({
              swiper,
              duration,
              transformEl
            });
          };
    
          effectInit({
            effect: 'flip',
            swiper,
            on,
            setTranslate,
            setTransition,
            perspective: () => true,
            overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: true,
              spaceBetween: 0,
              virtualTranslate: !swiper.params.cssMode
            })
          });
        }
    
        function EffectCoverflow({
          swiper,
          extendParams,
          on
        }) {
          extendParams({
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              scale: 1,
              modifier: 1,
              slideShadows: true,
              transformEl: null
            }
          });
    
          const setTranslate = () => {
            const {
              width: swiperWidth,
              height: swiperHeight,
              slides,
              slidesSizesGrid
            } = swiper;
            const params = swiper.params.coverflowEffect;
            const isHorizontal = swiper.isHorizontal();
            const transform = swiper.translate;
            const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
            const rotate = isHorizontal ? params.rotate : -params.rotate;
            const translate = params.depth; // Each slide offset from center
    
            for (let i = 0, length = slides.length; i < length; i += 1) {
              const $slideEl = slides.eq(i);
              const slideSize = slidesSizesGrid[i];
              const slideOffset = $slideEl[0].swiperSlideOffset;
              const offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
              let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
              let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0
    
              let translateZ = -translate * Math.abs(offsetMultiplier);
              let stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders
    
              if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
                stretch = parseFloat(params.stretch) / 100 * slideSize;
              }
    
              let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
              let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
              let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values
    
              if (Math.abs(translateX) < 0.001) translateX = 0;
              if (Math.abs(translateY) < 0.001) translateY = 0;
              if (Math.abs(translateZ) < 0.001) translateZ = 0;
              if (Math.abs(rotateY) < 0.001) rotateY = 0;
              if (Math.abs(rotateX) < 0.001) rotateX = 0;
              if (Math.abs(scale) < 0.001) scale = 0;
              const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
              const $targetEl = effectTarget(params, $slideEl);
              $targetEl.transform(slideTransform);
              $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
    
              if (params.slideShadows) {
                // Set shadows
                let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
    
                if ($shadowBeforeEl.length === 0) {
                  $shadowBeforeEl = createShadow(params, $slideEl, isHorizontal ? 'left' : 'top');
                }
    
                if ($shadowAfterEl.length === 0) {
                  $shadowAfterEl = createShadow(params, $slideEl, isHorizontal ? 'right' : 'bottom');
                }
    
                if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
              }
            }
          };
    
          const setTransition = duration => {
            const {
              transformEl
            } = swiper.params.coverflowEffect;
            const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
            $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
          };
    
          effectInit({
            effect: 'coverflow',
            swiper,
            on,
            setTranslate,
            setTransition,
            perspective: () => true,
            overwriteParams: () => ({
              watchSlidesProgress: true
            })
          });
        }
    
        function EffectCreative({
          swiper,
          extendParams,
          on
        }) {
          extendParams({
            creativeEffect: {
              transformEl: null,
              limitProgress: 1,
              shadowPerProgress: false,
              progressMultiplier: 1,
              perspective: true,
              prev: {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                opacity: 1,
                scale: 1
              },
              next: {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                opacity: 1,
                scale: 1
              }
            }
          });
    
          const getTranslateValue = value => {
            if (typeof value === 'string') return value;
            return `${value}px`;
          };
    
          const setTranslate = () => {
            const {
              slides
            } = swiper;
            const params = swiper.params.creativeEffect;
            const {
              progressMultiplier: multiplier
            } = params;
    
            for (let i = 0; i < slides.length; i += 1) {
              const $slideEl = slides.eq(i);
              const slideProgress = $slideEl[0].progress;
              const progress = Math.min(Math.max($slideEl[0].progress, -params.limitProgress), params.limitProgress);
              const offset = $slideEl[0].swiperSlideOffset;
              const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
              const r = [0, 0, 0];
              let custom = false;
    
              if (!swiper.isHorizontal()) {
                t[1] = t[0];
                t[0] = 0;
              }
    
              let data = {
                translate: [0, 0, 0],
                rotate: [0, 0, 0],
                scale: 1,
                opacity: 1
              };
    
              if (progress < 0) {
                data = params.next;
                custom = true;
              } else if (progress > 0) {
                data = params.prev;
                custom = true;
              } // set translate
    
    
              t.forEach((value, index) => {
                t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
              }); // set rotates
    
              r.forEach((value, index) => {
                r[index] = data.rotate[index] * Math.abs(progress * multiplier);
              });
              $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
              const translateString = t.join(', ');
              const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
              const scaleString = progress < 0 ? `scale(${1 + (1 - data.scale) * progress * multiplier})` : `scale(${1 - (1 - data.scale) * progress * multiplier})`;
              const opacityString = progress < 0 ? 1 + (1 - data.opacity) * progress * multiplier : 1 - (1 - data.opacity) * progress * multiplier;
              const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`; // Set shadows
    
              if (custom && data.shadow || !custom) {
                let $shadowEl = $slideEl.children('.swiper-slide-shadow');
    
                if ($shadowEl.length === 0 && data.shadow) {
                  $shadowEl = createShadow(params, $slideEl);
                }
    
                if ($shadowEl.length) {
                  const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
                  $shadowEl[0].style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
                }
              }
    
              const $targetEl = effectTarget(params, $slideEl);
              $targetEl.transform(transform).css({
                opacity: opacityString
              });
    
              if (data.origin) {
                $targetEl.css('transform-origin', data.origin);
              }
            }
          };
    
          const setTransition = duration => {
            const {
              transformEl
            } = swiper.params.creativeEffect;
            const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
            $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
            effectVirtualTransitionEnd({
              swiper,
              duration,
              transformEl
            });
          };
    
          effectInit({
            effect: 'creative',
            swiper,
            on,
            setTranslate,
            setTransition,
            perspective: () => swiper.params.creativeEffect.perspective,
            overwriteParams: () => ({
              watchSlidesProgress: true,
              virtualTranslate: !swiper.params.cssMode
            })
          });
        }
    
        function EffectCards({
          swiper,
          extendParams,
          on
        }) {
          extendParams({
            cardsEffect: {
              slideShadows: true,
              transformEl: null
            }
          });
    
          const setTranslate = () => {
            const {
              slides,
              activeIndex
            } = swiper;
            const params = swiper.params.cardsEffect;
            const {
              startTranslate,
              isTouched
            } = swiper.touchEventsData;
            const currentTranslate = swiper.translate;
    
            for (let i = 0; i < slides.length; i += 1) {
              const $slideEl = slides.eq(i);
              const slideProgress = $slideEl[0].progress;
              const progress = Math.min(Math.max(slideProgress, -4), 4);
              let offset = $slideEl[0].swiperSlideOffset;
    
              if (swiper.params.centeredSlides && !swiper.params.cssMode) {
                swiper.$wrapperEl.transform(`translateX(${swiper.minTranslate()}px)`);
              }
    
              if (swiper.params.centeredSlides && swiper.params.cssMode) {
                offset -= slides[0].swiperSlideOffset;
              }
    
              let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
              let tY = 0;
              const tZ = -100 * Math.abs(progress);
              let scale = 1;
              let rotate = -2 * progress;
              let tXAdd = 8 - Math.abs(progress) * 0.75;
              const isSwipeToNext = (i === activeIndex || i === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
              const isSwipeToPrev = (i === activeIndex || i === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
    
              if (isSwipeToNext || isSwipeToPrev) {
                const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
                rotate += -28 * progress * subProgress;
                scale += -0.5 * subProgress;
                tXAdd += 96 * subProgress;
                tY = `${-25 * subProgress * Math.abs(progress)}%`;
              }
    
              if (progress < 0) {
                // next
                tX = `calc(${tX}px + (${tXAdd * Math.abs(progress)}%))`;
              } else if (progress > 0) {
                // prev
                tX = `calc(${tX}px + (-${tXAdd * Math.abs(progress)}%))`;
              } else {
                tX = `${tX}px`;
              }
    
              if (!swiper.isHorizontal()) {
                const prevY = tY;
                tY = tX;
                tX = prevY;
              }
    
              const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
              const transform = `
            translate3d(${tX}, ${tY}, ${tZ}px)
            rotateZ(${rotate}deg)
            scale(${scaleString})
          `;
    
              if (params.slideShadows) {
                // Set shadows
                let $shadowEl = $slideEl.find('.swiper-slide-shadow');
    
                if ($shadowEl.length === 0) {
                  $shadowEl = createShadow(params, $slideEl);
                }
    
                if ($shadowEl.length) $shadowEl[0].style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
              }
    
              $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
              const $targetEl = effectTarget(params, $slideEl);
              $targetEl.transform(transform);
            }
          };
    
          const setTransition = duration => {
            const {
              transformEl
            } = swiper.params.cardsEffect;
            const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
            $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
            effectVirtualTransitionEnd({
              swiper,
              duration,
              transformEl
            });
          };
    
          effectInit({
            effect: 'cards',
            swiper,
            on,
            setTranslate,
            setTransition,
            perspective: () => true,
            overwriteParams: () => ({
              watchSlidesProgress: true,
              virtualTranslate: !swiper.params.cssMode
            })
          });
        }
    
        // Swiper Class
        const modules = [Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Lazy, Controller, A11y, History, HashNavigation, Autoplay, Thumb, freeMode, Grid, Manipulation, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCreative, EffectCards];
        Swiper.use(modules);
    
        return Swiper;
    
    })));
    
    
    },{}]},{},[6]);
    