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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"(app-client)/./node_modules/next/dist/shared/lib/app-dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n\n\nconst ApexCharts = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = ()=>__webpack_require__.e(/*! import() */ \"_app-client_node_modules_react-apexcharts_dist_react-apexcharts_min_js\").then(__webpack_require__.bind(__webpack_require__, /*! react-apexcharts */ \"(app-client)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\")), {\n    loadableGenerated: {\n        modules: [\n            \"/home/hp/Documents/nency/DoughnutChart/my-app/src/app/Chart.js -> \" + \"react-apexcharts\"\n        ]\n    },\n    ssr: false\n});\n_c1 = ApexCharts;\nconst Chart = ()=>{\n    _s();\n    //   const options = { labels: [\"Comedy\", \"Action\", \"Romance\", \"Drama\", \"SciFi\"] };\n    //   const series = [4, 5, 6, 1, 5];\n    const data = [\n        {\n            name: \"Apple\",\n            value: 25\n        },\n        {\n            name: \"Google\",\n            value: 30\n        },\n        {\n            name: \"Microsoft\",\n            value: 20\n        },\n        {\n            name: \"Amazon\",\n            value: 25\n        }\n    ];\n    const options = {\n        chart: {\n            type: \"doughnut\",\n            height: 300\n        },\n        series: [\n            {\n                data: data\n            }\n        ],\n        labels: data.map((datum)=>datum.name)\n    };\n    const [IsLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTimeout(()=>{\n            setIsLoading(false);\n        }, 1200);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: !IsLoading && // <ApexCharts options={options} series={series} type=\"donut\" height={350}/>\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ApexChart, {\n            options: options,\n            seriesNames: data.map((datum)=>datum.name)\n        }, void 0, false, {\n            fileName: \"/home/hp/Documents/nency/DoughnutChart/my-app/src/app/Chart.js\",\n            lineNumber: 56,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(Chart, \"aIklI07OlCVqo+ZIafKkDELlKu4=\");\n_c2 = Chart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chart);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ApexCharts$dynamic\");\n$RefreshReg$(_c1, \"ApexCharts\");\n$RefreshReg$(_c2, \"Chart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9DaGFydC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNtRDtBQUNoQjtBQUNuQyxNQUFNSSxhQUFhRCxtREFBT0EsTUFBQyxJQUFNLHdRQUEwQjs7Ozs7O0lBQUlFLEtBQUssS0FBSzs7O0FBRXpFLE1BQU1DLFFBQVEsSUFBTTs7SUFFcEIsbUZBQW1GO0lBQ25GLG9DQUFvQztJQUlwQyxNQUFNQyxPQUFPO1FBQ1Q7WUFDRUMsTUFBTTtZQUNOQyxPQUFPO1FBQ1Q7UUFDQTtZQUNFRCxNQUFNO1lBQ05DLE9BQU87UUFDVDtRQUNBO1lBQ0VELE1BQU07WUFDTkMsT0FBTztRQUNUO1FBQ0E7WUFDRUQsTUFBTTtZQUNOQyxPQUFPO1FBQ1Q7S0FDRDtJQUVELE1BQU1DLFVBQVU7UUFDZEMsT0FBTztZQUNMQyxNQUFNO1lBQ05DLFFBQVE7UUFDVjtRQUNBQyxRQUFRO1lBQ047Z0JBQ0VQLE1BQU1BO1lBQ1I7U0FDRDtRQUNEUSxRQUFRUixLQUFLUyxHQUFHLENBQUMsQ0FBQ0MsUUFBVUEsTUFBTVQsSUFBSTtJQUN4QztJQUNBLE1BQU0sQ0FBQ1UsV0FBV0MsYUFBYSxHQUFHakIsK0NBQVFBLENBQUMsSUFBSTtJQUUvQ0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkbUIsV0FBVyxJQUFNO1lBQ2ZELGFBQWEsS0FBSztRQUNwQixHQUFHO0lBQ0wsR0FBRyxFQUFFO0lBRUwscUJBQ0U7a0JBQ0csQ0FBQ0QsYUFDQSw0RUFBNEU7c0JBQzVFLDhEQUFDRztZQUFVWCxTQUFTQTtZQUN0QlksYUFBYWYsS0FBS1MsR0FBRyxDQUFDLENBQUNDLFFBQVVBLE1BQU1ULElBQUk7Ozs7Ozs7QUFLakQ7R0F4RE1GO01BQUFBO0FBMEROLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvQ2hhcnQuanM/Zjc0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmNvbnN0IEFwZXhDaGFydHMgPSBkeW5hbWljKCgpID0+IGltcG9ydChcInJlYWN0LWFwZXhjaGFydHNcIiksIHsgc3NyOiBmYWxzZSB9KTtcblxuY29uc3QgQ2hhcnQgPSAoKSA9PiB7XG5cbi8vICAgY29uc3Qgb3B0aW9ucyA9IHsgbGFiZWxzOiBbXCJDb21lZHlcIiwgXCJBY3Rpb25cIiwgXCJSb21hbmNlXCIsIFwiRHJhbWFcIiwgXCJTY2lGaVwiXSB9O1xuLy8gICBjb25zdCBzZXJpZXMgPSBbNCwgNSwgNiwgMSwgNV07XG5cblxuXG5jb25zdCBkYXRhID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiQXBwbGVcIixcbiAgICAgIHZhbHVlOiAyNSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiR29vZ2xlXCIsXG4gICAgICB2YWx1ZTogMzAsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIk1pY3Jvc29mdFwiLFxuICAgICAgdmFsdWU6IDIwLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJBbWF6b25cIixcbiAgICAgIHZhbHVlOiAyNSxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgY2hhcnQ6IHtcbiAgICAgIHR5cGU6IFwiZG91Z2hudXRcIixcbiAgICAgIGhlaWdodDogMzAwLFxuICAgIH0sXG4gICAgc2VyaWVzOiBbXG4gICAgICB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICB9LFxuICAgIF0sXG4gICAgbGFiZWxzOiBkYXRhLm1hcCgoZGF0dW0pID0+IGRhdHVtLm5hbWUpLFxuICB9O1xuICBjb25zdCBbSXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfSwgMTIwMCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7IUlzTG9hZGluZyAmJiAoXG4gICAgICAgIC8vIDxBcGV4Q2hhcnRzIG9wdGlvbnM9e29wdGlvbnN9IHNlcmllcz17c2VyaWVzfSB0eXBlPVwiZG9udXRcIiBoZWlnaHQ9ezM1MH0vPlxuICAgICAgICA8QXBleENoYXJ0IG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICBzZXJpZXNOYW1lcz17ZGF0YS5tYXAoKGRhdHVtKSA9PiBkYXR1bS5uYW1lKX1cbiAgICAvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJ0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJkeW5hbWljIiwiQXBleENoYXJ0cyIsInNzciIsIkNoYXJ0IiwiZGF0YSIsIm5hbWUiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJjaGFydCIsInR5cGUiLCJoZWlnaHQiLCJzZXJpZXMiLCJsYWJlbHMiLCJtYXAiLCJkYXR1bSIsIklzTG9hZGluZyIsInNldElzTG9hZGluZyIsInNldFRpbWVvdXQiLCJBcGV4Q2hhcnQiLCJzZXJpZXNOYW1lcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/Chart.js\n"));

/***/ })

});