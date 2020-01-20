webpackHotUpdate("static\\development\\pages\\quotes.js",{

/***/ "./pages/quotes.js":
/*!*************************!*\
  !*** ./pages/quotes.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Quotes; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
var _jsxFileName = "C:\\Users\\w_yil\\OneDrive\\Desktop\\nextJs\\pages\\quotes.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function fetcher(url) {
  return fetch(url).then(function (r) {
    return r.json();
  });
}

function Quotes() {
  // no search/filter
  // const { data, error } = useSWR("/api/randomQuote", fetcher);
  var _useRouter = useRouter(),
      query = _useRouter.query; // with search/filter


  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__["default"])("/api/randomQuote".concat(query.author ? "?author" + query.author : ""), fetcher),
      data = _useSWR.data,
      error = _useSWR.error; // The following line has optional chaining, added in Next.js v9.1.5,
  // is the same as `data && data.author`


  var author = data === null || data === void 0 ? void 0 : data.author;
  var quote = data === null || data === void 0 ? void 0 : data.quote;
  if (!data) quote = "Loading...";
  if (error) quote = "Failed to fetch the quote.";
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("main", {
    className: "jsx-2451769421" + " " + "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2451769421" + " " + "quote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, quote), author && __jsx("span", {
    className: "jsx-2451769421" + " " + "author",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "- ", author), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2451769421",
    __self: this
  }, "main.jsx-2451769421{width:90%;max-width:900px;margin:300px auto;text-align:center;}.quote.jsx-2451769421{font-family:cursive;color:#e243de;font-size:24px;padding-bottom:10px;}.author.jsx-2451769421{font-family:sans-serif;color:#559834;font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd195aWxcXE9uZURyaXZlXFxEZXNrdG9wXFxuZXh0SnNcXHBhZ2VzXFxxdW90ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NvQixBQUd1QixBQU1VLEFBTUcsVUFYUCxVQU1GLEdBTUEsR0FYSSxRQU1ILEdBTUEsT0FYRyxLQU1FLEdBTXRCLFVBWEEsT0FNQSIsImZpbGUiOiJDOlxcVXNlcnNcXHdfeWlsXFxPbmVEcml2ZVxcRGVza3RvcFxcbmV4dEpzXFxwYWdlc1xccXVvdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlMYXlvdXRcIjtcclxuXHJcbmZ1bmN0aW9uIGZldGNoZXIodXJsKSB7XHJcbiAgcmV0dXJuIGZldGNoKHVybCkudGhlbihyID0+IHIuanNvbigpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVvdGVzKCkge1xyXG4gIC8vIG5vIHNlYXJjaC9maWx0ZXJcclxuICAvLyBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXCIvYXBpL3JhbmRvbVF1b3RlXCIsIGZldGNoZXIpO1xyXG5cclxuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy8gd2l0aCBzZWFyY2gvZmlsdGVyXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgYC9hcGkvcmFuZG9tUXVvdGUke3F1ZXJ5LmF1dGhvciA/IFwiP2F1dGhvclwiICsgcXVlcnkuYXV0aG9yIDogXCJcIn1gLFxyXG4gICAgZmV0Y2hlclxyXG4gICk7XHJcblxyXG4gIC8vIFRoZSBmb2xsb3dpbmcgbGluZSBoYXMgb3B0aW9uYWwgY2hhaW5pbmcsIGFkZGVkIGluIE5leHQuanMgdjkuMS41LFxyXG4gIC8vIGlzIHRoZSBzYW1lIGFzIGBkYXRhICYmIGRhdGEuYXV0aG9yYFxyXG5cclxuICBjb25zdCBhdXRob3IgPSBkYXRhPy5hdXRob3I7XHJcbiAgbGV0IHF1b3RlID0gZGF0YT8ucXVvdGU7XHJcblxyXG4gIGlmICghZGF0YSkgcXVvdGUgPSBcIkxvYWRpbmcuLi5cIjtcclxuICBpZiAoZXJyb3IpIHF1b3RlID0gXCJGYWlsZWQgdG8gZmV0Y2ggdGhlIHF1b3RlLlwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdW90ZVwiPntxdW90ZX08L2Rpdj5cclxuICAgICAgICB7YXV0aG9yICYmIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhvclwiPi0ge2F1dGhvcn08L3NwYW4+fVxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICBtYWluIHtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA5MDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAzMDBweCBhdXRvO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucXVvdGUge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgICAgICAgICAgY29sb3I6ICNlMjQzZGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYXV0aG9yIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNTU5ODM0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\w_yil\\\\OneDrive\\\\Desktop\\\\nextJs\\\\pages\\\\quotes.js */")));
}

/***/ })

})
//# sourceMappingURL=quotes.js.cd2d12c79dfef721fa4e.hot-update.js.map