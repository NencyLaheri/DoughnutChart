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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"(app-client)/./node_modules/next/dist/shared/lib/app-dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n\n\nconst ApexCharts = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/*! import() */ \"_app-client_node_modules_react-apexcharts_dist_react-apexcharts_min_js\").then(__webpack_require__.bind(__webpack_require__, /*! react-apexcharts */ \"(app-client)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\")), {\n    loadableGenerated: {\n        modules: [\n            \"/home/hp/Documents/nency/DoughnutChart/my-app/src/app/Chart.js -> \" + \"react-apexcharts\"\n        ]\n    },\n    ssr: false\n});\n_c = ApexCharts;\nconst Chart = ()=>{\n    _s();\n    //   const data = [\n    //       {\n    //           name: \"Apple\",\n    //           value: 25,\n    //       },\n    //       {\n    //           name: \"Google\",\n    //           value: 30,\n    //       },\n    //       {\n    //           name: \"Microsoft\",\n    //           value: 20,\n    //       },\n    //       {\n    //           name: \"Amazon\",\n    //           value: 25,\n    //       },\n    //   ];\n    //   const options = {\n    //       chart: {\n    //               type: \"doughnut\",\n    //               height: 300,\n    //             },\n    //             series: [\n    //               {\n    //                   data: data,\n    //               },\n    //             ],\n    //             labels: data.map((datum) => datum.name),\n    //   };\n    const options = {\n        labels: [\n            \"Comedy\",\n            \"Action\",\n            \"Romance\",\n            \"Drama\",\n            \"SciFi\"\n        ]\n    };\n    const series = [\n        4,\n        5,\n        6,\n        1,\n        5\n    ];\n    const [IsLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTimeout(()=>{\n            setIsLoading(false);\n        }, 1200);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: !IsLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ApexCharts, {\n            options: options,\n            series: se,\n            type: \"donut\",\n            height: 350\n        }, void 0, false, {\n            fileName: \"/home/hp/Documents/nency/DoughnutChart/my-app/src/app/Chart.js\",\n            lineNumber: 52,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(Chart, \"aIklI07OlCVqo+ZIafKkDELlKu4=\");\n_c1 = Chart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chart);\nvar _c, _c1;\n$RefreshReg$(_c, \"ApexCharts\");\n$RefreshReg$(_c1, \"Chart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9DaGFydC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNtRDtBQUNoQjtBQUNuQyxNQUFNSSxhQUFhRCxtREFBT0EsQ0FBQyxJQUFNLHdRQUEwQjs7Ozs7O0lBQUlFLEtBQUssS0FBSzs7S0FBbkVEO0FBRU4sTUFBTUUsUUFBUSxJQUFNOztJQUNwQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsK0JBQStCO0lBQy9CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsVUFBVTtJQUNWLDRCQUE0QjtJQUM1Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLE9BQU87SUFDUCxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGtDQUFrQztJQUNsQyw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsdURBQXVEO0lBQ3ZELE9BQU87SUFFTCxNQUFNQyxVQUFVO1FBQUVDLFFBQVE7WUFBQztZQUFVO1lBQVU7WUFBVztZQUFTO1NBQVE7SUFBQztJQUM1RSxNQUFNQyxTQUFTO1FBQUM7UUFBRztRQUFHO1FBQUc7UUFBRztLQUFFO0lBRTlCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQyxJQUFJO0lBRS9DRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RXLFdBQVcsSUFBTTtZQUNmRCxhQUFhLEtBQUs7UUFDcEIsR0FBRztJQUNMLEdBQUcsRUFBRTtJQUVMLHFCQUNFO2tCQUNHLENBQUNELDJCQUNBLDhEQUFDTjtZQUFXRyxTQUFTQTtZQUFTRSxRQUFRSTtZQUFJQyxNQUFLO1lBQVFDLFFBQVE7Ozs7Ozs7QUFJdkU7R0FsRE1UO01BQUFBO0FBb0ROLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvQ2hhcnQuanM/Zjc0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmNvbnN0IEFwZXhDaGFydHMgPSBkeW5hbWljKCgpID0+IGltcG9ydChcInJlYWN0LWFwZXhjaGFydHNcIiksIHsgc3NyOiBmYWxzZSB9KTtcblxuY29uc3QgQ2hhcnQgPSAoKSA9PiB7XG4vLyAgIGNvbnN0IGRhdGEgPSBbXG4vLyAgICAgICB7XG4vLyAgICAgICAgICAgbmFtZTogXCJBcHBsZVwiLFxuLy8gICAgICAgICAgIHZhbHVlOiAyNSxcbi8vICAgICAgIH0sXG4vLyAgICAgICB7XG4vLyAgICAgICAgICAgbmFtZTogXCJHb29nbGVcIixcbi8vICAgICAgICAgICB2YWx1ZTogMzAsXG4vLyAgICAgICB9LFxuLy8gICAgICAge1xuLy8gICAgICAgICAgIG5hbWU6IFwiTWljcm9zb2Z0XCIsXG4vLyAgICAgICAgICAgdmFsdWU6IDIwLFxuLy8gICAgICAgfSxcbi8vICAgICAgIHtcbi8vICAgICAgICAgICBuYW1lOiBcIkFtYXpvblwiLFxuLy8gICAgICAgICAgIHZhbHVlOiAyNSxcbi8vICAgICAgIH0sXG4vLyAgIF07XG4vLyAgIGNvbnN0IG9wdGlvbnMgPSB7XG4vLyAgICAgICBjaGFydDoge1xuLy8gICAgICAgICAgICAgICB0eXBlOiBcImRvdWdobnV0XCIsXG4vLyAgICAgICAgICAgICAgIGhlaWdodDogMzAwLFxuLy8gICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgIHNlcmllczogW1xuLy8gICAgICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuLy8gICAgICAgICAgICAgICB9LFxuLy8gICAgICAgICAgICAgXSxcbi8vICAgICAgICAgICAgIGxhYmVsczogZGF0YS5tYXAoKGRhdHVtKSA9PiBkYXR1bS5uYW1lKSxcbi8vICAgfTtcblxuICBjb25zdCBvcHRpb25zID0geyBsYWJlbHM6IFtcIkNvbWVkeVwiLCBcIkFjdGlvblwiLCBcIlJvbWFuY2VcIiwgXCJEcmFtYVwiLCBcIlNjaUZpXCJdIH07XG4gIGNvbnN0IHNlcmllcyA9IFs0LCA1LCA2LCAxLCA1XTtcblxuICBjb25zdCBbSXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfSwgMTIwMCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7IUlzTG9hZGluZyAmJiAoXG4gICAgICAgIDxBcGV4Q2hhcnRzIG9wdGlvbnM9e29wdGlvbnN9IHNlcmllcz17c2V9IHR5cGU9XCJkb251dFwiIGhlaWdodD17MzUwfS8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhcnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImR5bmFtaWMiLCJBcGV4Q2hhcnRzIiwic3NyIiwiQ2hhcnQiLCJvcHRpb25zIiwibGFiZWxzIiwic2VyaWVzIiwiSXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwic2V0VGltZW91dCIsInNlIiwidHlwZSIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/Chart.js\n"));

/***/ })

});