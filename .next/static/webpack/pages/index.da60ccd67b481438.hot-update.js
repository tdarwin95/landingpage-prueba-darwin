"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ListArticles.jsx":
/*!*************************************!*\
  !*** ./components/ListArticles.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction ListArticles(param) {\n    var articles = param.articles;\n    var _this = this;\n    console.log(articles);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"cards-acticulos\",\n        children: articles.map(function(article) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-articulo\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: article.image,\n                        width: 270,\n                        height: 204\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\usuario\\\\Desktop\\\\landindgpage-darwin\\\\landingpage-prueba-darwin\\\\components\\\\ListArticles.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"descriccion\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: article.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\usuario\\\\Desktop\\\\landindgpage-darwin\\\\landingpage-prueba-darwin\\\\components\\\\ListArticles.jsx\",\n                                lineNumber: 17,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: article.content\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\usuario\\\\Desktop\\\\landindgpage-darwin\\\\landingpage-prueba-darwin\\\\components\\\\ListArticles.jsx\",\n                                lineNumber: 18,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\usuario\\\\Desktop\\\\landindgpage-darwin\\\\landingpage-prueba-darwin\\\\components\\\\ListArticles.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: {\n                            pathname: \"/article/[id]\",\n                            query: {\n                                id: article.id,\n                                img: article.image,\n                                category: article.category,\n                                title: article.title,\n                                content: article.content\n                            }\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: article.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\usuario\\\\Desktop\\\\landindgpage-darwin\\\\landingpage-prueba-darwin\\\\components\\\\ListArticles.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\usuario\\\\Desktop\\\\landindgpage-darwin\\\\landingpage-prueba-darwin\\\\components\\\\ListArticles.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, article.id, true, {\n                fileName: \"C:\\\\Users\\\\usuario\\\\Desktop\\\\landindgpage-darwin\\\\landingpage-prueba-darwin\\\\components\\\\ListArticles.jsx\",\n                lineNumber: 10,\n                columnNumber: 17\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\usuario\\\\Desktop\\\\landindgpage-darwin\\\\landingpage-prueba-darwin\\\\components\\\\ListArticles.jsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n}\n_c = ListArticles;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListArticles);\nvar _c;\n$RefreshReg$(_c, \"ListArticles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpc3RBcnRpY2xlcy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDSztBQUNGO0FBRTVCLFNBQVVHLFlBQVksQ0FBRSxLQUFVLEVBQUM7UUFBWCxRQUFTLEdBQVQsS0FBVSxDQUFUQyxRQUFROztJQUM3QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFFBQVEsQ0FBQztJQUNyQixxQkFDSSw4REFBQ0csS0FBRztRQUFDQyxTQUFTLEVBQUMsaUJBQWlCO2tCQUMzQkosUUFBUSxDQUFDSyxHQUFHLENBQUNDLFNBQUFBLE9BQU87aUNBQ2pCLDhEQUFDSCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsZUFBZTs7a0NBQzFCLDhEQUFDUCxtREFBSzt3QkFDRlUsR0FBRyxFQUFFRCxPQUFPLENBQUNFLEtBQUs7d0JBQ2xCQyxLQUFLLEVBQUUsR0FBRzt3QkFDVkMsTUFBTSxFQUFFLEdBQUc7Ozs7OzZCQUNiO2tDQUNGLDhEQUFDUCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsYUFBYTs7MENBQ3hCLDhEQUFDTyxJQUFFOzBDQUFFTCxPQUFPLENBQUNNLEtBQUs7Ozs7O3FDQUFNOzBDQUN4Qiw4REFBQ0MsR0FBQzswQ0FBRVAsT0FBTyxDQUFDUSxPQUFPOzs7OztxQ0FBSzs7Ozs7OzZCQUN0QjtrQ0FFTiw4REFBQ2hCLGtEQUFJO3dCQUNEaUIsSUFBSSxFQUFFOzRCQUNOQyxRQUFRLEVBQUUsZUFBZTs0QkFDekJDLEtBQUssRUFBRTtnQ0FBRUMsRUFBRSxFQUFFWixPQUFPLENBQUNZLEVBQUU7Z0NBQ2RDLEdBQUcsRUFBRWIsT0FBTyxDQUFDRSxLQUFLO2dDQUNsQlksUUFBUSxFQUFFZCxPQUFPLENBQUNjLFFBQVE7Z0NBQzFCUixLQUFLLEVBQUVOLE9BQU8sQ0FBQ00sS0FBSztnQ0FDcEJFLE9BQU8sRUFBRVIsT0FBTyxDQUFDUSxPQUFPOzZCQUN4Qjt5QkFDUjtrQ0FFRCw0RUFBQ08sR0FBQztzQ0FBRWYsT0FBTyxDQUFDTSxLQUFLOzs7OztpQ0FBSzs7Ozs7NkJBQ25COztlQXZCeUJOLE9BQU8sQ0FBQ1ksRUFBRTs7OztxQkF3QnhDO1NBQ1QsQ0FBQzs7Ozs7WUFDQSxDQUNUO0NBQ0o7QUFqQ1NuQixLQUFBQSxZQUFZO0FBbUN0QiwrREFBZUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xpc3RBcnRpY2xlcy5qc3g/ZjZiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5mdW5jdGlvbiAgTGlzdEFydGljbGVzICh7YXJ0aWNsZXN9KXtcclxuICAgIGNvbnNvbGUubG9nKGFydGljbGVzKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRzLWFjdGljdWxvc1wiID5cclxuICAgICAgICAgICAge2FydGljbGVzLm1hcChhcnRpY2xlID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hcnRpY3Vsb1wiIGtleT17YXJ0aWNsZS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YXJ0aWNsZS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezI3MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMDR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaWNjaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57YXJ0aWNsZS50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57YXJ0aWNsZS5jb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9hcnRpY2xlL1tpZF0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogeyBpZDogYXJ0aWNsZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nOiBhcnRpY2xlLmltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogYXJ0aWNsZS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGFydGljbGUudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGFydGljbGUuY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+e2FydGljbGUudGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdEFydGljbGVzIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJMaW5rIiwiTGlzdEFydGljbGVzIiwiYXJ0aWNsZXMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiYXJ0aWNsZSIsInNyYyIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJoMSIsInRpdGxlIiwicCIsImNvbnRlbnQiLCJocmVmIiwicGF0aG5hbWUiLCJxdWVyeSIsImlkIiwiaW1nIiwiY2F0ZWdvcnkiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ListArticles.jsx\n"));

/***/ })

});