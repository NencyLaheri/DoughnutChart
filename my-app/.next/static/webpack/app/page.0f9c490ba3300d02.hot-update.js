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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"(app-client)/./node_modules/next/dist/shared/lib/app-dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n\n\nconst ApexCharts = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/*! import() */ \"_app-client_node_modules_react-apexcharts_dist_react-apexcharts_min_js\").then(__webpack_require__.bind(__webpack_require__, /*! react-apexcharts */ \"(app-client)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\")), {\n    loadableGenerated: {\n        modules: [\n            \"/home/hp/Documents/nency/DoughnutChart/my-app/src/app/Chart.js -> \" + \"react-apexcharts\"\n        ]\n    },\n    ssr: false\n});\n_c = ApexCharts;\nconst Chart = ()=>{\n    _s();\n    //   const options = { labels: [\"Comedy\", \"Action\", \"Romance\", \"Drama\", \"SciFi\"] };\n    //   const series = [4, 5, 6, 1, 5];\n    const data = [\n        {\n            name: \"Apple\",\n            value: 25\n        },\n        {\n            name: \"Google\",\n            value: 30\n        },\n        {\n            name: \"Microsoft\",\n            value: 20\n        },\n        {\n            name: \"Amazon\",\n            value: 25\n        }\n    ];\n    const options = {\n        chart: {\n            type: \"doughnut\",\n            height: 300\n        },\n        series: [\n            {\n                data: data\n            }\n        ],\n        labels: data.map((datum)=>datum.name)\n    };\n    const [IsLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTimeout(()=>{\n            setIsLoading(false);\n        }, 1200);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: !IsLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ApexCharts, {\n            options: options,\n            series: series,\n            type: \"donut\",\n            height: 350\n        }, void 0, false, {\n            fileName: \"/home/hp/Documents/nency/DoughnutChart/my-app/src/app/Chart.js\",\n            lineNumber: 55,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(Chart, \"aIklI07OlCVqo+ZIafKkDELlKu4=\");\n_c1 = Chart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chart);\nvar _c, _c1;\n$RefreshReg$(_c, \"ApexCharts\");\n$RefreshReg$(_c1, \"Chart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9DaGFydC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNtRDtBQUNoQjtBQUNuQyxNQUFNSSxhQUFhRCxtREFBT0EsQ0FBQyxJQUFNLHdRQUEwQjs7Ozs7O0lBQUlFLEtBQUssS0FBSzs7S0FBbkVEO0FBRU4sTUFBTUUsUUFBUSxJQUFNOztJQUVwQixtRkFBbUY7SUFDbkYsb0NBQW9DO0lBSXBDLE1BQU1DLE9BQU87UUFDVDtZQUNFQyxNQUFNO1lBQ05DLE9BQU87UUFDVDtRQUNBO1lBQ0VELE1BQU07WUFDTkMsT0FBTztRQUNUO1FBQ0E7WUFDRUQsTUFBTTtZQUNOQyxPQUFPO1FBQ1Q7UUFDQTtZQUNFRCxNQUFNO1lBQ05DLE9BQU87UUFDVDtLQUNEO0lBRUQsTUFBTUMsVUFBVTtRQUNkQyxPQUFPO1lBQ0xDLE1BQU07WUFDTkMsUUFBUTtRQUNWO1FBQ0FDLFFBQVE7WUFDTjtnQkFDRVAsTUFBTUE7WUFDUjtTQUNEO1FBQ0RRLFFBQVFSLEtBQUtTLEdBQUcsQ0FBQyxDQUFDQyxRQUFVQSxNQUFNVCxJQUFJO0lBQ3hDO0lBQ0EsTUFBTSxDQUFDVSxXQUFXQyxhQUFhLEdBQUdqQiwrQ0FBUUEsQ0FBQyxJQUFJO0lBRS9DRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RtQixXQUFXLElBQU07WUFDZkQsYUFBYSxLQUFLO1FBQ3BCLEdBQUc7SUFDTCxHQUFHLEVBQUU7SUFFTCxxQkFDRTtrQkFDRyxDQUFDRCwyQkFDQSw4REFBQ2Q7WUFBV00sU0FBU0E7WUFBU0ksUUFBUUE7WUFBUUYsTUFBSztZQUFRQyxRQUFROzs7Ozs7O0FBSTNFO0dBckRNUDtNQUFBQTtBQXVETiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0NoYXJ0LmpzP2Y3NDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5jb25zdCBBcGV4Q2hhcnRzID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJyZWFjdC1hcGV4Y2hhcnRzXCIpLCB7IHNzcjogZmFsc2UgfSk7XG5cbmNvbnN0IENoYXJ0ID0gKCkgPT4ge1xuXG4vLyAgIGNvbnN0IG9wdGlvbnMgPSB7IGxhYmVsczogW1wiQ29tZWR5XCIsIFwiQWN0aW9uXCIsIFwiUm9tYW5jZVwiLCBcIkRyYW1hXCIsIFwiU2NpRmlcIl0gfTtcbi8vICAgY29uc3Qgc2VyaWVzID0gWzQsIDUsIDYsIDEsIDVdO1xuXG5cblxuY29uc3QgZGF0YSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIkFwcGxlXCIsXG4gICAgICB2YWx1ZTogMjUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkdvb2dsZVwiLFxuICAgICAgdmFsdWU6IDMwLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJNaWNyb3NvZnRcIixcbiAgICAgIHZhbHVlOiAyMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiQW1hem9uXCIsXG4gICAgICB2YWx1ZTogMjUsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIGNoYXJ0OiB7XG4gICAgICB0eXBlOiBcImRvdWdobnV0XCIsXG4gICAgICBoZWlnaHQ6IDMwMCxcbiAgICB9LFxuICAgIHNlcmllczogW1xuICAgICAge1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGxhYmVsczogZGF0YS5tYXAoKGRhdHVtKSA9PiBkYXR1bS5uYW1lKSxcbiAgfTtcbiAgY29uc3QgW0lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH0sIDEyMDApO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgeyFJc0xvYWRpbmcgJiYgKFxuICAgICAgICA8QXBleENoYXJ0cyBvcHRpb25zPXtvcHRpb25zfSBzZXJpZXM9e3Nlcmllc30gdHlwZT1cImRvbnV0XCIgaGVpZ2h0PXszNTB9Lz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGFydDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZHluYW1pYyIsIkFwZXhDaGFydHMiLCJzc3IiLCJDaGFydCIsImRhdGEiLCJuYW1lIiwidmFsdWUiLCJvcHRpb25zIiwiY2hhcnQiLCJ0eXBlIiwiaGVpZ2h0Iiwic2VyaWVzIiwibGFiZWxzIiwibWFwIiwiZGF0dW0iLCJJc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/Chart.js\n"));

/***/ })

});