"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/app/Chart.js":
/*!**************************!*\
  !*** ./src/app/Chart.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"(app-client)/./node_modules/next/dist/shared/lib/app-dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n\n\nconst ApexCharts = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/*! import() */ \"_app-client_node_modules_react-apexcharts_dist_react-apexcharts_min_js\").then(__webpack_require__.bind(__webpack_require__, /*! react-apexcharts */ \"(app-client)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\")), {\n    loadableGenerated: {\n        modules: [\n            \"/home/hp/Documents/nency/DoughnutChart/my-app/src/app/Chart.js -> \" + \"react-apexcharts\"\n        ]\n    },\n    ssr: false\n});\n_c = ApexCharts;\nconst Chart = ()=>{\n    _s();\n    const data = [\n        {\n            name: \"Apple\",\n            value: 25\n        },\n        {\n            name: \"Google\",\n            value: 30\n        },\n        {\n            name: \"Microsoft\",\n            value: 20\n        },\n        {\n            name: \"Amazon\",\n            value: 25\n        }\n    ];\n    const chartOptions = {\n        chart: {\n            type: \"doughnut\",\n            height: 300\n        },\n        series: [\n            {\n                data: data\n            }\n        ],\n        labels: data.map((datum)=>datum.name)\n    };\n    const options = {\n        labels: [\n            \"Comedy\",\n            \"Action\",\n            \"Romance\",\n            \"Drama\",\n            \"SciFi\"\n        ]\n    };\n    const series = [\n        4,\n        5,\n        6,\n        1,\n        5\n    ];\n    const [IsLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTimeout(()=>{\n            setIsLoading(false);\n        }, 1200);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: !IsLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ApexCharts, {\n            options: options,\n            series: series,\n            type: \"donut\",\n            height: 350\n        }, void 0, false, {\n            fileName: \"/home/hp/Documents/nency/DoughnutChart/my-app/src/app/Chart.js\",\n            lineNumber: 52,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(Chart, \"aIklI07OlCVqo+ZIafKkDELlKu4=\");\n_c1 = Chart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chart);\nvar _c, _c1;\n$RefreshReg$(_c, \"ApexCharts\");\n$RefreshReg$(_c1, \"Chart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9DaGFydC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNtRDtBQUNoQjtBQUNuQyxNQUFNSSxhQUFhRCxtREFBT0EsQ0FBQyxJQUFNLHdRQUEwQjs7Ozs7O0lBQUlFLEtBQUssS0FBSzs7S0FBbkVEO0FBRU4sTUFBTUUsUUFBUSxJQUFNOztJQUNsQixNQUFNQyxPQUFPO1FBQ1Q7WUFDSUMsTUFBTTtZQUNOQyxPQUFPO1FBQ1g7UUFDQTtZQUNJRCxNQUFNO1lBQ05DLE9BQU87UUFDWDtRQUNBO1lBQ0lELE1BQU07WUFDTkMsT0FBTztRQUNYO1FBQ0E7WUFDSUQsTUFBTTtZQUNOQyxPQUFPO1FBQ1g7S0FDSDtJQUNELE1BQU1DLGVBQWU7UUFDakJDLE9BQU87WUFDQ0MsTUFBTTtZQUNOQyxRQUFRO1FBQ1Y7UUFDQUMsUUFBUTtZQUNOO2dCQUNJUCxNQUFNQTtZQUNWO1NBQ0Q7UUFDRFEsUUFBUVIsS0FBS1MsR0FBRyxDQUFDLENBQUNDLFFBQVVBLE1BQU1ULElBQUk7SUFDaEQ7SUFFQSxNQUFNVSxVQUFVO1FBQUVILFFBQVE7WUFBQztZQUFVO1lBQVU7WUFBVztZQUFTO1NBQVE7SUFBQztJQUM1RSxNQUFNRCxTQUFTO1FBQUM7UUFBRztRQUFHO1FBQUc7UUFBRztLQUFFO0lBRTlCLE1BQU0sQ0FBQ0ssV0FBV0MsYUFBYSxHQUFHbEIsK0NBQVFBLENBQUMsSUFBSTtJQUUvQ0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkb0IsV0FBVyxJQUFNO1lBQ2ZELGFBQWEsS0FBSztRQUNwQixHQUFHO0lBQ0wsR0FBRyxFQUFFO0lBRUwscUJBQ0U7a0JBQ0csQ0FBQ0QsMkJBQ0EsOERBQUNmO1lBQVdjLFNBQVNBO1lBQVNKLFFBQVFBO1lBQVFGLE1BQUs7WUFBUUMsUUFBUTs7Ozs7OztBQUkzRTtHQWxETVA7TUFBQUE7QUFvRE4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9DaGFydC5qcz9mNzQzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuY29uc3QgQXBleENoYXJ0cyA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwicmVhY3QtYXBleGNoYXJ0c1wiKSwgeyBzc3I6IGZhbHNlIH0pO1xuXG5jb25zdCBDaGFydCA9ICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIkFwcGxlXCIsXG4gICAgICAgICAgdmFsdWU6IDI1LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIkdvb2dsZVwiLFxuICAgICAgICAgIHZhbHVlOiAzMCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgbmFtZTogXCJNaWNyb3NvZnRcIixcbiAgICAgICAgICB2YWx1ZTogMjAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiQW1hem9uXCIsXG4gICAgICAgICAgdmFsdWU6IDI1LFxuICAgICAgfSxcbiAgXTtcbiAgY29uc3QgY2hhcnRPcHRpb25zID0ge1xuICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgdHlwZTogXCJkb3VnaG51dFwiLFxuICAgICAgICAgICAgICBoZWlnaHQ6IDMwMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXJpZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBsYWJlbHM6IGRhdGEubWFwKChkYXR1bSkgPT4gZGF0dW0ubmFtZSksXG4gIH07XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHsgbGFiZWxzOiBbXCJDb21lZHlcIiwgXCJBY3Rpb25cIiwgXCJSb21hbmNlXCIsIFwiRHJhbWFcIiwgXCJTY2lGaVwiXSB9O1xuICBjb25zdCBzZXJpZXMgPSBbNCwgNSwgNiwgMSwgNV07XG5cbiAgY29uc3QgW0lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH0sIDEyMDApO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgeyFJc0xvYWRpbmcgJiYgKFxuICAgICAgICA8QXBleENoYXJ0cyBvcHRpb25zPXtvcHRpb25zfSBzZXJpZXM9e3Nlcmllc30gdHlwZT1cImRvbnV0XCIgaGVpZ2h0PXszNTB9Lz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGFydDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZHluYW1pYyIsIkFwZXhDaGFydHMiLCJzc3IiLCJDaGFydCIsImRhdGEiLCJuYW1lIiwidmFsdWUiLCJjaGFydE9wdGlvbnMiLCJjaGFydCIsInR5cGUiLCJoZWlnaHQiLCJzZXJpZXMiLCJsYWJlbHMiLCJtYXAiLCJkYXR1bSIsIm9wdGlvbnMiLCJJc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/Chart.js\n"));

/***/ })

});