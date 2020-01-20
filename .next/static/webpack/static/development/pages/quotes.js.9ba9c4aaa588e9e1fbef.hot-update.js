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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
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
  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])(),
      query = _useRouter.query; // with search/filter


  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__["default"])("/api/randomQuote".concat(query.author ? "?author=" + query.author : ""), fetcher),
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
      lineNumber: 31
    },
    __self: this
  }, __jsx("main", {
    className: "jsx-2451769421" + " " + "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2451769421" + " " + "quote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, quote), author && __jsx("span", {
    className: "jsx-2451769421" + " " + "author",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "- ", author), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2451769421",
    __self: this
  }, "main.jsx-2451769421{width:90%;max-width:900px;margin:300px auto;text-align:center;}.quote.jsx-2451769421{font-family:cursive;color:#e243de;font-size:24px;padding-bottom:10px;}.author.jsx-2451769421{font-family:sans-serif;color:#559834;font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd195aWxcXE9uZURyaXZlXFxEZXNrdG9wXFxuZXh0SnNcXHBhZ2VzXFxxdW90ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNvQixBQUd1QixBQU1VLEFBTUcsVUFYUCxVQU1GLEdBTUEsR0FYSSxRQU1ILEdBTUEsT0FYRyxLQU1FLEdBTXRCLFVBWEEsT0FNQSIsImZpbGUiOiJDOlxcVXNlcnNcXHdfeWlsXFxPbmVEcml2ZVxcRGVza3RvcFxcbmV4dEpzXFxwYWdlc1xccXVvdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlMYXlvdXRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5mdW5jdGlvbiBmZXRjaGVyKHVybCkge1xyXG4gIHJldHVybiBmZXRjaCh1cmwpLnRoZW4ociA9PiByLmpzb24oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1b3RlcygpIHtcclxuICAvLyBubyBzZWFyY2gvZmlsdGVyXHJcbiAgLy8gY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFwiL2FwaS9yYW5kb21RdW90ZVwiLCBmZXRjaGVyKTtcclxuXHJcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vIHdpdGggc2VhcmNoL2ZpbHRlclxyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgIGAvYXBpL3JhbmRvbVF1b3RlJHtxdWVyeS5hdXRob3IgPyBcIj9hdXRob3I9XCIgKyBxdWVyeS5hdXRob3IgOiBcIlwifWAsXHJcbiAgICBmZXRjaGVyXHJcbiAgKTtcclxuXHJcbiAgLy8gVGhlIGZvbGxvd2luZyBsaW5lIGhhcyBvcHRpb25hbCBjaGFpbmluZywgYWRkZWQgaW4gTmV4dC5qcyB2OS4xLjUsXHJcbiAgLy8gaXMgdGhlIHNhbWUgYXMgYGRhdGEgJiYgZGF0YS5hdXRob3JgXHJcblxyXG4gIGNvbnN0IGF1dGhvciA9IGRhdGE/LmF1dGhvcjtcclxuICBsZXQgcXVvdGUgPSBkYXRhPy5xdW90ZTtcclxuXHJcbiAgaWYgKCFkYXRhKSBxdW90ZSA9IFwiTG9hZGluZy4uLlwiO1xyXG4gIGlmIChlcnJvcikgcXVvdGUgPSBcIkZhaWxlZCB0byBmZXRjaCB0aGUgcXVvdGUuXCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1b3RlXCI+e3F1b3RlfTwvZGl2PlxyXG4gICAgICAgIHthdXRob3IgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yXCI+LSB7YXV0aG9yfTwvc3Bhbj59XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIG1haW4ge1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDMwMHB4IGF1dG87XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5xdW90ZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgICAgICAgICBjb2xvcjogI2UyNDNkZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hdXRob3Ige1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgY29sb3I6ICM1NTk4MzQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\w_yil\\\\OneDrive\\\\Desktop\\\\nextJs\\\\pages\\\\quotes.js */")));
}

/***/ })

})
//# sourceMappingURL=quotes.js.9ba9c4aaa588e9e1fbef.hot-update.js.map