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

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignIn; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_app_firebase_FirebaseApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*!  @component/app/firebase/FirebaseApp */ \"(app-client)/./app/firebase/FirebaseApp.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"(app-client)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"(app-client)/./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page.module.css */ \"(app-client)/./app/auth/[signin]/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction SignIn() {\n    _s();\n    const app = (0,_component_app_firebase_FirebaseApp__WEBPACK_IMPORTED_MODULE_2__.initFirebase)();\n    const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider();\n    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();\n    const [user, loading] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState)(auth);\n    // const router = useRouter();\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/uliasemenuk/projects/AppClicks/prompts-portal/app/auth/[signin]/page.js\",\n            lineNumber: 18,\n            columnNumber: 14\n        }, this);\n    }\n    if (user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"Hi \",\n                user.displayName\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/uliasemenuk/projects/AppClicks/prompts-portal/app/auth/[signin]/page.js\",\n            lineNumber: 22,\n            columnNumber: 14\n        }, this);\n    }\n    const signIn = async ()=>{\n        const result = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithPopup)(auth, provider);\n        console.log(result);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().login_container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().login_title),\n                children: \"Sign In\"\n            }, void 0, false, {\n                fileName: \"/Users/uliasemenuk/projects/AppClicks/prompts-portal/app/auth/[signin]/page.js\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().login_btn),\n                onClick: signIn,\n                children: \"Sign In with Google\"\n            }, void 0, false, {\n                fileName: \"/Users/uliasemenuk/projects/AppClicks/prompts-portal/app/auth/[signin]/page.js\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().login_btn),\n                onClick: signIn,\n                children: \"Sign In with Facebook\"\n            }, void 0, false, {\n                fileName: \"/Users/uliasemenuk/projects/AppClicks/prompts-portal/app/auth/[signin]/page.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/uliasemenuk/projects/AppClicks/prompts-portal/app/auth/[signin]/page.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(SignIn, \"liTJYMwBp9eGkQxP/R7n+ki5K8M=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState\n    ];\n});\n_c = SignIn;\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2F1dGgvW3NpZ25pbl0vcGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUMyQztBQUN5QjtBQUNTO0FBQ3RCO0FBQ2hCO0FBR3hCLFNBQVNPLFNBQVM7O0lBQzdCLE1BQU1DLE1BQU1QLGlGQUFZQTtJQUN4QixNQUFNUSxXQUFXLElBQUlQLDZEQUFrQkE7SUFDdkMsTUFBTVEsT0FBT1Asc0RBQU9BO0lBQ3BCLE1BQU0sQ0FBQ1EsTUFBTUMsUUFBUSxHQUFHUCx1RUFBWUEsQ0FBQ0s7SUFDckMsOEJBQThCO0lBRTlCLElBQUlFLFNBQVM7UUFFWCxxQkFBTyw4REFBQ0M7c0JBQUk7Ozs7OztJQUNkLENBQUM7SUFFRCxJQUFJRixNQUFNO1FBQ1IscUJBQU8sOERBQUNFOztnQkFBSTtnQkFBSUYsS0FBS0csV0FBVzs7Ozs7OztJQUNsQyxDQUFDO0lBRUQsTUFBTUMsU0FBUyxVQUFZO1FBQ3hCLE1BQU1DLFNBQVMsTUFBTVosOERBQWVBLENBQUNNLE1BQU1EO1FBQzNDUSxRQUFRQyxHQUFHLENBQUNGO0lBQ2Y7SUFHRixxQkFDRSw4REFBQ0g7UUFBSU0sV0FBV2IseUVBQXNCOzswQkFDbEMsOERBQUNlO2dCQUFHRixXQUFXYixxRUFBa0I7MEJBQUU7Ozs7OzswQkFDbkMsOERBQUNpQjtnQkFBT0osV0FBV2IsbUVBQWdCO2dCQUNuQ21CLFNBQVNWOzBCQUFROzs7Ozs7MEJBRWpCLDhEQUFDUTtnQkFBT0osV0FBV2IsbUVBQWdCO2dCQUNuQ21CLFNBQVNWOzBCQUFROzs7Ozs7Ozs7Ozs7QUFJekIsQ0FBQztHQWpDdUJSOztRQUlJRixtRUFBWUE7OztLQUpoQkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2F1dGgvW3NpZ25pbl0vcGFnZS5qcz83ZWI5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBpbml0RmlyZWJhc2UgfSBmcm9tIFwiIEBjb21wb25lbnQvYXBwL2ZpcmViYXNlL0ZpcmViYXNlQXBwXCI7XG5pbXBvcnQgeyBHb29nbGVBdXRoUHJvdmlkZXIsIGdldEF1dGgsIHNpZ25JbldpdGhQb3B1cCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQge3VzZUF1dGhTdGF0ZX0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluKCkge1xuICAgIGNvbnN0IGFwcCA9IGluaXRGaXJlYmFzZSgpO1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xuICAgIGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XG4gICAgY29uc3QgW3VzZXIsIGxvYWRpbmddID0gdXNlQXV0aFN0YXRlKGF1dGgpO1xuICAgIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIFxuICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgICB9XG5cbiAgICBpZiAodXNlcikge1xuICAgICAgcmV0dXJuIDxkaXY+SGkge3VzZXIuZGlzcGxheU5hbWV9PC9kaXY+O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBzaWduSW4gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2lnbkluV2l0aFBvcHVwKGF1dGgsIHByb3ZpZGVyKTtcbiAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIH1cbiAgIFxuICAgIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5fY29udGFpbmVyfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luX3RpdGxlfT5TaWduIEluPC9oMT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbl9idG59XG4gICAgICAgIG9uQ2xpY2s9e3NpZ25Jbn0+U2lnbiBJbiB3aXRoIEdvb2dsZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbl9idG59XG4gICAgICAgIG9uQ2xpY2s9e3NpZ25Jbn0+U2lnbiBJbiB3aXRoIEZhY2Vib29rXG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsicmVkaXJlY3QiLCJpbml0RmlyZWJhc2UiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJnZXRBdXRoIiwic2lnbkluV2l0aFBvcHVwIiwidXNlQXV0aFN0YXRlIiwic3R5bGVzIiwiU2lnbkluIiwiYXBwIiwicHJvdmlkZXIiLCJhdXRoIiwidXNlciIsImxvYWRpbmciLCJkaXYiLCJkaXNwbGF5TmFtZSIsInNpZ25JbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc05hbWUiLCJsb2dpbl9jb250YWluZXIiLCJoMSIsImxvZ2luX3RpdGxlIiwiYnV0dG9uIiwibG9naW5fYnRuIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/auth/[signin]/page.js\n"));

/***/ }),

/***/ "(app-client)/./node_modules/next/navigation.js":
/*!*****************************************!*\
  !*** ./node_modules/next/navigation.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/client/components/navigation */ \"(app-client)/./node_modules/next/dist/client/components/navigation.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vbm9kZV9tb2R1bGVzL25leHQvbmF2aWdhdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSx3SkFBK0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbmF2aWdhdGlvbi5qcz82YjdlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9jb21wb25lbnRzL25hdmlnYXRpb24nKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./node_modules/next/navigation.js\n"));

/***/ })

});