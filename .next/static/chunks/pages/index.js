/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fcristiano%2FDocumentos%2Fgithub%2Ftabuleiro%2Fpages%2Findex.js!":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fcristiano%2FDocumentos%2Fgithub%2Ftabuleiro%2Fpages%2Findex.js! ***!
  \**************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.js */ \"./pages/index.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/cGFnZT0lMkYmYWJzb2x1dGVQYWdlUGF0aD0lMkZob21lJTJGY3Jpc3RpYW5vJTJGRG9jdW1lbnRvcyUyRmdpdGh1YiUyRnRhYnVsZWlybyUyRnBhZ2VzJTJGaW5kZXguanMhLmpzIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsMENBQWtCO0FBQ3pDO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz9iOWUxIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fcristiano%2FDocumentos%2Fgithub%2Ftabuleiro%2Fpages%2Findex.js!\n");

/***/ }),

/***/ "./components/board.jsx":
/*!******************************!*\
  !*** ./components/board.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Board; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _boardColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boardColor */ \"./components/boardColor.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\nfunction Board(param) {\n    var color1 = param.color1, color2 = param.color2;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: _.times(4, function(index) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_boardColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                color1: color1,\n                color2: color2\n            }, index, false, {\n                fileName: \"/home/cristiano/Documentos/github/tabuleiro/components/board.jsx\",\n                lineNumber: 10,\n                columnNumber: 25\n            }, _this));\n        })\n    }, void 0, false));\n};\n_c = Board;\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JvYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBcUM7QUFFckMsR0FBSyxDQUFDQyxDQUFDLEdBQUdDLG1CQUFPLENBQUMsK0NBQVE7QUFDWCxRQUFRLENBQUNDLEtBQUssQ0FBQyxLQUFlLEVBQUMsQ0FBQztRQUFoQkMsTUFBTSxHQUFQLEtBQWUsQ0FBZEEsTUFBTSxFQUFDQyxNQUFNLEdBQWQsS0FBZSxDQUFQQSxNQUFNOztJQUN4QyxNQUFNLDZFQUFDO2tCQUdLSixDQUFDLENBQUNLLEtBQUssQ0FBQyxDQUFDLEVBQUNDLFFBQVEsQ0FBUkEsS0FBSyxFQUFFLENBQUM7WUFDZCxNQUFNLDZFQUNEUCxtREFBVTtnQkFBYUksTUFBTSxFQUFFQSxNQUFNO2dCQUFFQyxNQUFNLEVBQUVBLE1BQU07ZUFBckNFLEtBQUs7Ozs7O1FBRTlCLENBQUM7O0FBSWpCLENBQUM7S0FadUJKLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ib2FyZC5qc3g/MTJkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm9hcmRDb2xvciBmcm9tICcuL2JvYXJkQ29sb3InXG5cbmNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9hcmQoe2NvbG9yMSxjb2xvcjJ9KXtcbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXy50aW1lcyg0LGluZGV4PT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb2FyZENvbG9yIGtleT17aW5kZXh9IGNvbG9yMT17Y29sb3IxfSBjb2xvcjI9e2NvbG9yMn0vPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJCb2FyZENvbG9yIiwiXyIsInJlcXVpcmUiLCJCb2FyZCIsImNvbG9yMSIsImNvbG9yMiIsInRpbWVzIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/board.jsx\n");

/***/ }),

/***/ "./components/boardColor.jsx":
/*!***********************************!*\
  !*** ./components/boardColor.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BoardColor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _boardRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boardRow */ \"./components/boardRow.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\nfunction BoardColor(param) {\n    var color1 = param.color1, color2 = param.color2;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_boardRow__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                color1: color1,\n                color2: color2\n            }, void 0, false, {\n                fileName: \"/home/cristiano/Documentos/github/tabuleiro/components/boardColor.jsx\",\n                lineNumber: 7,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_boardRow__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                color1: color2,\n                color2: color1\n            }, void 0, false, {\n                fileName: \"/home/cristiano/Documentos/github/tabuleiro/components/boardColor.jsx\",\n                lineNumber: 8,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true));\n};\n_c = BoardColor;\nvar _c;\n$RefreshReg$(_c, \"BoardColor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JvYXJkQ29sb3IuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpQztBQUNqQyxHQUFLLENBQUNDLENBQUMsR0FBR0MsbUJBQU8sQ0FBQywrQ0FBUTtBQUVYLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLEtBQWUsRUFBQyxDQUFDO1FBQWhCQyxNQUFNLEdBQVAsS0FBZSxDQUFkQSxNQUFNLEVBQUNDLE1BQU0sR0FBZCxLQUFlLENBQVBBLE1BQU07SUFDN0MsTUFBTSw2RUFBQzs7d0ZBRUFMLGlEQUFRO2dCQUFDSSxNQUFNLEVBQUVBLE1BQU07Z0JBQUVDLE1BQU0sRUFBRUEsTUFBTTs7Ozs7O3dGQUN2Q0wsaURBQVE7Z0JBQUNJLE1BQU0sRUFBRUMsTUFBTTtnQkFBRUEsTUFBTSxFQUFFRCxNQUFNOzs7Ozs7OztBQUVqRCxDQUFDO0tBTnNCRCxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYm9hcmRDb2xvci5qc3g/YTA5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm9hcmRSb3cgZnJvbSBcIi4vYm9hcmRSb3dcIlxuY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkQ29sb3Ioe2NvbG9yMSxjb2xvcjJ9KXsgIFxuICAgIHJldHVybihcbiAgICAgIDw+XG4gICAgICAgICAgPEJvYXJkUm93IGNvbG9yMT17Y29sb3IxfSBjb2xvcjI9e2NvbG9yMn0vPlxuICAgICAgICAgIDxCb2FyZFJvdyBjb2xvcjE9e2NvbG9yMn0gY29sb3IyPXtjb2xvcjF9Lz5cbiAgICAgIDwvPlxuKX1cbiJdLCJuYW1lcyI6WyJCb2FyZFJvdyIsIl8iLCJyZXF1aXJlIiwiQm9hcmRDb2xvciIsImNvbG9yMSIsImNvbG9yMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/boardColor.jsx\n");

/***/ }),

/***/ "./components/boardPiece.jsx":
/*!***********************************!*\
  !*** ./components/boardPiece.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BoardPiece; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction BoardPiece(props) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            height: 100,\n            width: 100,\n            backgroundColor: props.color,\n            display: 'inline-flex',\n            marginBottom: -4\n        }\n    }, void 0, false, {\n        fileName: \"/home/cristiano/Documentos/github/tabuleiro/components/boardPiece.jsx\",\n        lineNumber: 3,\n        columnNumber: 9\n    }, this));\n};\n_c = BoardPiece;\nvar _c;\n$RefreshReg$(_c, \"BoardPiece\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JvYXJkUGllY2UuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWUsUUFBUSxDQUFDQSxVQUFVLENBQUNDLEtBQUssRUFBQyxDQUFDO0lBQ3RDLE1BQU0sNkVBQ0RDLENBQUc7UUFBQ0MsS0FBSyxFQUFFLENBQUM7WUFDVEMsTUFBTSxFQUFFLEdBQUc7WUFDWEMsS0FBSyxFQUFHLEdBQUc7WUFDWEMsZUFBZSxFQUFFTCxLQUFLLENBQUNNLEtBQUs7WUFDNUJDLE9BQU8sRUFBQyxDQUFhO1lBQ3JCQyxZQUFZLEdBQUUsQ0FBQztRQUNuQixDQUFDOzs7Ozs7QUFFVCxDQUFDO0tBVnVCVCxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYm9hcmRQaWVjZS5qc3g/MmM5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2FyZFBpZWNlKHByb3BzKXtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgIGhlaWdodDogMTAwLFxuICAgICAgICAgICAgd2lkdGg6ICAxMDAsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICAgICAgZGlzcGxheTonaW5saW5lLWZsZXgnLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOi00LFxuICAgICAgICB9fT48L2Rpdj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiQm9hcmRQaWVjZSIsInByb3BzIiwiZGl2Iiwic3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiZGlzcGxheSIsIm1hcmdpbkJvdHRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/boardPiece.jsx\n");

/***/ }),

/***/ "./components/boardRow.jsx":
/*!*********************************!*\
  !*** ./components/boardRow.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BoardRow; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _boardPiece__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boardPiece */ \"./components/boardPiece.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\nfunction BoardRow(param) {\n    var color1 = param.color1, color2 = param.color2;\n    var _this = this;\n    return _.times(4, function(index) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: \"inline\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_boardPiece__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    color: color1\n                }, void 0, false, {\n                    fileName: \"/home/cristiano/Documentos/github/tabuleiro/components/boardRow.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 21\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_boardPiece__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    color: color2\n                }, void 0, false, {\n                    fileName: \"/home/cristiano/Documentos/github/tabuleiro/components/boardRow.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 21\n                }, _this)\n            ]\n        }, index, true, {\n            fileName: \"/home/cristiano/Documentos/github/tabuleiro/components/boardRow.jsx\",\n            lineNumber: 8,\n            columnNumber: 17\n        }, _this));\n    });\n};\n_c = BoardRow;\nvar _c;\n$RefreshReg$(_c, \"BoardRow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JvYXJkUm93LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBcUM7QUFDckMsR0FBSyxDQUFDQyxDQUFDLEdBQUdDLG1CQUFPLENBQUMsK0NBQVE7QUFFWCxRQUFRLENBQUNDLFFBQVEsQ0FBQyxLQUFlLEVBQUMsQ0FBQztRQUFoQkMsTUFBTSxHQUFQLEtBQWUsQ0FBZEEsTUFBTSxFQUFDQyxNQUFNLEdBQWQsS0FBZSxDQUFQQSxNQUFNOztJQUMzQyxNQUFNLENBQ0ZKLENBQUMsQ0FBQ0ssS0FBSyxDQUFDLENBQUMsRUFBQ0MsUUFBUSxDQUFSQSxLQUFLLEVBQUUsQ0FBQztRQUNkLE1BQU0sNkVBQ0RDLENBQUc7WUFBYUMsS0FBSyxFQUFFLENBQUNDO2dCQUFBQSxPQUFPLEVBQUMsQ0FBUTtZQUFBLENBQUM7OzRGQUNyQ1YsbURBQVU7b0JBQUNXLEtBQUssRUFBRVAsTUFBTTs7Ozs7OzRGQUN4QkosbURBQVU7b0JBQUNXLEtBQUssRUFBRU4sTUFBTTs7Ozs7OztXQUZuQkUsS0FBSzs7Ozs7SUFLdkIsQ0FBQztBQUVULENBQUM7S0FYdUJKLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ib2FyZFJvdy5qc3g/NzIxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm9hcmRQaWVjZSBmcm9tIFwiLi9ib2FyZFBpZWNlXCI7XG5jb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJylcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9hcmRSb3coe2NvbG9yMSxjb2xvcjJ9KXtcbiAgICByZXR1cm4oXG4gICAgICAgIF8udGltZXMoNCxpbmRleD0+e1xuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gc3R5bGU9e3tkaXNwbGF5OlwiaW5saW5lXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPEJvYXJkUGllY2UgY29sb3I9e2NvbG9yMX0vPlxuICAgICAgICAgICAgICAgICAgICA8Qm9hcmRQaWVjZSBjb2xvcj17Y29sb3IyfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgKVxufSJdLCJuYW1lcyI6WyJCb2FyZFBpZWNlIiwiXyIsInJlcXVpcmUiLCJCb2FyZFJvdyIsImNvbG9yMSIsImNvbG9yMiIsInRpbWVzIiwiaW5kZXgiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/boardRow.jsx\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/board */ \"./components/board.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction Home() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"containerBoard\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_board__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            color1: '#fff',\n            color2: '#000'\n        }, void 0, false, {\n            fileName: \"/home/cristiano/Documentos/github/tabuleiro/pages/index.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/cristiano/Documentos/github/tabuleiro/pages/index.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this));\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBdUM7QUFFeEIsUUFBUSxDQUFDQyxJQUFJLEdBQUcsQ0FBQztJQUM5QixNQUFNLDZFQUNIQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFnQjs4RkFDNUJILHlEQUFLO1lBQUNJLE1BQU0sRUFBRSxDQUFNO1lBQUVDLE1BQU0sRUFBRSxDQUFNOzs7Ozs7Ozs7OztBQUczQyxDQUFDO0tBTnVCSixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL2JvYXJkXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckJvYXJkXCI+XG4gICAgICA8Qm9hcmQgY29sb3IxPXsnI2ZmZid9IGNvbG9yMj17JyMwMDAnfSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuIl0sIm5hbWVzIjpbIkJvYXJkIiwiSG9tZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbG9yMSIsImNvbG9yMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fcristiano%2FDocumentos%2Fgithub%2Ftabuleiro%2Fpages%2Findex.js!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);