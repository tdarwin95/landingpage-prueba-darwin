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

/***/ "./components/FormContact.jsx":
/*!************************************!*\
  !*** ./components/FormContact.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar propTypes = {\n    alerta: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),\n    contact: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired),\n    onRegisterContact: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),\n    onChange: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired)\n};\nfunction FormContact(param) {\n    var alerta = param.alerta, contact = param.contact, onRegisterContact = param.onRegisterContact, onChange = param.onChange;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"contenedor-contactanos\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: alerta,\n                children: \"Formulario Enviado con Exito\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\usuario\\\\Desktop\\\\landindgpage-darwin\\\\landingpage-prueba-darwin\\\\components\\\\FormContact.jsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"contactanos\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: onRegisterContact,\n                    className: \"formulario\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"form-control\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    for: \"\",\n                                    children: \"NOMBRE\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\usuario\\\\Desktop\\\\landindgpage-darwin\\\\landingpage-prueba-darwin\\\\components\\\\FormContact.jsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"name\",\n                                    id: \"\",\n                                    onChange: function(ev) {\n                                        return onChange(ev);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\usuario\\\\Desktop\\\\landindgpage-darwin\\\\landingpage-prueba-darwin\\\\components\\\\FormContact.jsx\",\n                                    lineNumber: 21,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\usuario\\\\Desktop\\\\landindgpage-darwin\\\\landingpage-prueba-darwin\\\\components\\\\FormContact.jsx\",\n                            lineNumber: 19,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"form-control\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    for: \"\",\n                                    children: \"APELLIDO\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\usuario\\\\Desktop\\\\landindgpage-darwin\\\\landingpage-prueba-darwin\\\\components\\\\FormContact.jsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"lastname\",\n                                    id: \"\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\usuario\\\\Desktop\\\\landindgpage-darwin\\\\landingpage-prueba-darwin\\\\components\\\\FormContact.jsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\usuario\\\\Desktop\\\\landindgpage-darwin\\\\landingpage-prueba-darwin\\\\components\\\\FormContact.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"form-control\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    for: \"\",\n                                    children: \"MAIL\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\usuario\\\\Desktop\\\\landindgpage-darwin\\\\landingpage-prueba-darwin\\\\components\\\\FormContact.jsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"mail\",\n                                    id: \"\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\usuario\\\\Desktop\\\\landindgpage-darwin\\\\landingpage-prueba-darwin\\\\components\\\\FormContact.jsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\usuario\\\\Desktop\\\\landindgpage-darwin\\\\landingpage-prueba-darwin\\\\components\\\\FormContact.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"form-control\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    for: \"\",\n                                    children: \"TELEFONO\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\usuario\\\\Desktop\\\\landindgpage-darwin\\\\landingpage-prueba-darwin\\\\components\\\\FormContact.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"phone\",\n                                    id: \"\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\usuario\\\\Desktop\\\\landindgpage-darwin\\\\landingpage-prueba-darwin\\\\components\\\\FormContact.jsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\usuario\\\\Desktop\\\\landindgpage-darwin\\\\landingpage-prueba-darwin\\\\components\\\\FormContact.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"boton\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                children: \"ENVIAR\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\usuario\\\\Desktop\\\\landindgpage-darwin\\\\landingpage-prueba-darwin\\\\components\\\\FormContact.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\usuario\\\\Desktop\\\\landindgpage-darwin\\\\landingpage-prueba-darwin\\\\components\\\\FormContact.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\usuario\\\\Desktop\\\\landindgpage-darwin\\\\landingpage-prueba-darwin\\\\components\\\\FormContact.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\usuario\\\\Desktop\\\\landindgpage-darwin\\\\landingpage-prueba-darwin\\\\components\\\\FormContact.jsx\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\usuario\\\\Desktop\\\\landindgpage-darwin\\\\landingpage-prueba-darwin\\\\components\\\\FormContact.jsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n_c = FormContact;\nFormContact.propTypes = propTypes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormContact);\nvar _c;\n$RefreshReg$(_c, \"FormContact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NWRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuY29uc3QgcHJvcFR5cGVzID0ge1xyXG4gICAgYWxlcnRhOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBjb250YWN0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcblx0b25SZWdpc3RlckNvbnRhY3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZnVuY3Rpb24gIEZvcm1Db250YWN0ICh7YWxlcnRhLCBjb250YWN0LCBvblJlZ2lzdGVyQ29udGFjdCwgb25DaGFuZ2V9KXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW5lZG9yLWNvbnRhY3Rhbm9zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthbGVydGF9PkZvcm11bGFyaW8gRW52aWFkbyBjb24gRXhpdG88L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0YW5vc1wiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25SZWdpc3RlckNvbnRhY3R9IGNsYXNzTmFtZT1cImZvcm11bGFyaW9cIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIlwiPk5PTUJSRTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJcIiBvbkNoYW5nZT17KGV2KT0+b25DaGFuZ2UoZXYpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJcIj5BUEVMTElETzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsYXN0bmFtZVwiIGlkPVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiXCI+TUFJTDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJtYWlsXCIgaWQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJcIj5URUxFRk9OTzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwaG9uZVwiIGlkPVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3RvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgPkVOVklBUjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuRm9ybUNvbnRhY3QucHJvcFR5cGVzID0gcHJvcFR5cGVzXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtQ29udGFjdCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInByb3BUeXBlcyIsImFsZXJ0YSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJjb250YWN0Iiwib2JqZWN0Iiwib25SZWdpc3RlckNvbnRhY3QiLCJmdW5jIiwib25DaGFuZ2UiLCJGb3JtQ29udGFjdCIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiZm9yIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImlkIiwiZXYiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FormContact.jsx\n"));

/***/ })

});