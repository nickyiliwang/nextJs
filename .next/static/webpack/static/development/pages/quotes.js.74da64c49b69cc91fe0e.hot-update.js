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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
var _jsxFileName = "C:\\Users\\w_yil\\OneDrive\\Desktop\\nextJs\\pages\\quotes.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function fetcher(url) {
  return fetch(url).then(function (r) {
    return r.json();
  });
}

function Quotes() {
  // http://localhost:3000/quotes?author=rauch
  // no search/filter
  // const { data, error } = useSWR("/api/randomQuote", fetcher);
  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(),
      query = _useRouter.query; // with search/filter


  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_3__["default"])("/api/randomQuote".concat(query.author ? "?author=" + query.author : ""), fetcher),
      data = _useSWR.data,
      error = _useSWR.error; // The following line has optional chaining, added in Next.js v9.1.5,
  // is the same as `data && data.author`


  var author = data === null || data === void 0 ? void 0 : data.author;
  var quote = data === null || data === void 0 ? void 0 : data.quote;
  if (!data) quote = "Loading...";
  if (error) quote = "Failed to fetch the quote.";
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("main", {
    className: "jsx-2451769421" + " " + "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2451769421" + " " + "quote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, quote), author && __jsx("span", {
    className: "jsx-2451769421" + " " + "author",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "- ", author), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2451769421",
    __self: this
  }, "main.jsx-2451769421{width:90%;max-width:900px;margin:300px auto;text-align:center;}.quote.jsx-2451769421{font-family:cursive;color:#e243de;font-size:24px;padding-bottom:10px;}.author.jsx-2451769421{font-family:sans-serif;color:#559834;font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd195aWxcXE9uZURyaXZlXFxEZXNrdG9wXFxuZXh0SnNcXHBhZ2VzXFxxdW90ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NvQixBQUd1QixBQU1VLEFBTUcsVUFYUCxVQU1GLEdBTUEsR0FYSSxRQU1ILEdBTUEsT0FYRyxLQU1FLEdBTXRCLFVBWEEsT0FNQSIsImZpbGUiOiJDOlxcVXNlcnNcXHdfeWlsXFxPbmVEcml2ZVxcRGVza3RvcFxcbmV4dEpzXFxwYWdlc1xccXVvdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL015TGF5b3V0XCI7XHJcblxyXG5mdW5jdGlvbiBmZXRjaGVyKHVybCkge1xyXG4gIHJldHVybiBmZXRjaCh1cmwpLnRoZW4ociA9PiByLmpzb24oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1b3RlcygpIHtcclxuICAvLyBodHRwOi8vbG9jYWxob3N0OjMwMDAvcXVvdGVzP2F1dGhvcj1yYXVjaFxyXG4gIC8vIG5vIHNlYXJjaC9maWx0ZXJcclxuICAvLyBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXCIvYXBpL3JhbmRvbVF1b3RlXCIsIGZldGNoZXIpO1xyXG5cclxuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy8gd2l0aCBzZWFyY2gvZmlsdGVyXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgYC9hcGkvcmFuZG9tUXVvdGUke3F1ZXJ5LmF1dGhvciA/IFwiP2F1dGhvcj1cIiArIHF1ZXJ5LmF1dGhvciA6IFwiXCJ9YCxcclxuICAgIGZldGNoZXJcclxuICApO1xyXG5cclxuICAvLyBUaGUgZm9sbG93aW5nIGxpbmUgaGFzIG9wdGlvbmFsIGNoYWluaW5nLCBhZGRlZCBpbiBOZXh0LmpzIHY5LjEuNSxcclxuICAvLyBpcyB0aGUgc2FtZSBhcyBgZGF0YSAmJiBkYXRhLmF1dGhvcmBcclxuXHJcbiAgY29uc3QgYXV0aG9yID0gZGF0YT8uYXV0aG9yO1xyXG4gIGxldCBxdW90ZSA9IGRhdGE/LnF1b3RlO1xyXG5cclxuICBpZiAoIWRhdGEpIHF1b3RlID0gXCJMb2FkaW5nLi4uXCI7XHJcbiAgaWYgKGVycm9yKSBxdW90ZSA9IFwiRmFpbGVkIHRvIGZldGNoIHRoZSBxdW90ZS5cIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVvdGVcIj57cXVvdGV9PC9kaXY+XHJcbiAgICAgICAge2F1dGhvciAmJiA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3JcIj4tIHthdXRob3J9PC9zcGFuPn1cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgbWFpbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMzAwcHggYXV0bztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnF1b3RlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZTI0M2RlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF1dGhvciB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBjb2xvcjogIzU1OTgzNDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\w_yil\\\\OneDrive\\\\Desktop\\\\nextJs\\\\pages\\\\quotes.js */")));
}

/***/ })

})
//# sourceMappingURL=quotes.js.74da64c49b69cc91fe0e.hot-update.js.map