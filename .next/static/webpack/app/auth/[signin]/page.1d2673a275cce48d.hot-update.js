"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/[signin]/page",{

/***/ "(app-client)/./app/auth/[signin]/page.js":
/*!***********************************!*\
  !*** ./app/auth/[signin]/page.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignIn; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _component_app_firebase_FirebaseApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*!  @component/app/firebase/FirebaseApp */ \"(app-client)/./app/firebase/FirebaseApp.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"(app-client)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"(app-client)/./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page.module.css */ \"(app-client)/./app/auth/[signin]/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction SignIn() {\n    _s();\n    const app = (0,_component_app_firebase_FirebaseApp__WEBPACK_IMPORTED_MODULE_1__.initFirebase)();\n    const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider();\n    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();\n    const [user, loading] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthstate)(auth);\n    const signIn = async ()=>{\n        const result = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(auth, provider);\n        console.log(result);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().login_container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().login_title),\n                children: \"Sign In\"\n            }, void 0, false, {\n                fileName: \"/Users/uliasemenuk/projects/AppClicks/prompts-portal/app/auth/[signin]/page.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().login_btn),\n                onClick: signIn,\n                children: \"Sign In with Google\"\n            }, void 0, false, {\n                fileName: \"/Users/uliasemenuk/projects/AppClicks/prompts-portal/app/auth/[signin]/page.js\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/uliasemenuk/projects/AppClicks/prompts-portal/app/auth/[signin]/page.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(SignIn, \"7Jf2/Cp6+9Zdh/aNLME6oQEpJlQ=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthstate\n    ];\n});\n_c = SignIn;\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2F1dGgvW3NpZ25pbl0vcGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDb0U7QUFDUztBQUN0QjtBQUNoQjtBQUd4QixTQUFTTSxTQUFTOztJQUM3QixNQUFNQyxNQUFNUCxpRkFBWUE7SUFDeEIsTUFBTVEsV0FBVyxJQUFJUCw2REFBa0JBO0lBQ3ZDLE1BQU1RLE9BQU9QLHNEQUFPQTtJQUNwQixNQUFNLENBQUNRLE1BQU1DLFFBQVEsR0FBR1AsdUVBQVlBLENBQUNLO0lBRXJDLE1BQU1HLFNBQVMsVUFBWTtRQUN4QixNQUFNQyxTQUFTLE1BQU1WLDhEQUFlQSxDQUFDTSxNQUFNRDtRQUMzQ00sUUFBUUMsR0FBRyxDQUFDRjtJQUNmO0lBR0YscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVdaLHlFQUFzQjs7MEJBQ2xDLDhEQUFDYztnQkFBR0YsV0FBV1oscUVBQWtCOzBCQUFFOzs7Ozs7MEJBQ25DLDhEQUFDZ0I7Z0JBQU9KLFdBQVdaLG1FQUFnQjtnQkFDbkNrQixTQUFTWDswQkFBUTs7Ozs7Ozs7Ozs7O0FBSXpCLENBQUM7R0FwQnVCTjs7UUFJSUYsbUVBQVlBOzs7S0FKaEJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9hdXRoL1tzaWduaW5dL3BhZ2UuanM/N2ViOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IGluaXRGaXJlYmFzZSB9IGZyb20gXCIgQGNvbXBvbmVudC9hcHAvZmlyZWJhc2UvRmlyZWJhc2VBcHBcIjtcbmltcG9ydCB7IEdvb2dsZUF1dGhQcm92aWRlciwgZ2V0QXV0aCwgc2lnbkluV2l0aFBvcHVwIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7dXNlQXV0aHN0YXRlfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wYWdlLm1vZHVsZS5jc3NcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW4oKSB7XG4gICAgY29uc3QgYXBwID0gaW5pdEZpcmViYXNlKCk7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgR29vZ2xlQXV0aFByb3ZpZGVyKCk7XG4gICAgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcbiAgICBjb25zdCBbdXNlciwgbG9hZGluZ10gPSB1c2VBdXRoc3RhdGUoYXV0aCk7XG4gICAgXG4gICAgY29uc3Qgc2lnbkluID0gYXN5bmMgKCkgPT4ge1xuICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNpZ25JbldpdGhQb3B1cChhdXRoLCBwcm92aWRlcik7XG4gICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICB9XG4gICBcbiAgICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luX2NvbnRhaW5lcn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbl90aXRsZX0+U2lnbiBJbjwvaDE+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubG9naW5fYnRufVxuICAgICAgICBvbkNsaWNrPXtzaWduSW59PlNpZ24gSW4gd2l0aCBHb29nbGVcbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJpbml0RmlyZWJhc2UiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJnZXRBdXRoIiwic2lnbkluV2l0aFBvcHVwIiwidXNlQXV0aHN0YXRlIiwic3R5bGVzIiwiU2lnbkluIiwiYXBwIiwicHJvdmlkZXIiLCJhdXRoIiwidXNlciIsImxvYWRpbmciLCJzaWduSW4iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwibG9naW5fY29udGFpbmVyIiwiaDEiLCJsb2dpbl90aXRsZSIsImJ1dHRvbiIsImxvZ2luX2J0biIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/auth/[signin]/page.js\n"));

/***/ })

});