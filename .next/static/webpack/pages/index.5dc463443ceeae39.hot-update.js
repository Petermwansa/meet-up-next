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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/api-utils */ \"./node_modules/next/dist/server/api-utils/index.js\");\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction HomePage(props) {\n    // const [loaderMeetups, setLoadedMeetups] = useState([]);\n    // // useeffect hook executes after the component renders which happens on the nexrt cycle \n    // //NextJS returns the html of first rendered page which is not good for the SEO \n    // //so, we have to use other options like (Page Pre-Rendering)\n    // useEffect(() => {\n    //     // here we sent the http request to send the data \n    //     setLoadedMeetups(DUMMY_MEETUPS);\n    // }, [])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Next Meetups\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/React/React Developer Course/NextJs Food/meet-up-next/pages/index.js\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"browse a list of the meetups\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Desktop/React/React Developer Course/NextJs Food/meet-up-next/pages/index.js\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Desktop/React/React Developer Course/NextJs Food/meet-up-next/pages/index.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                meetups: props.meetups\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/React/React Developer Course/NextJs Food/meet-up-next/pages/index.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Desktop/React/React Developer Course/NextJs Food/meet-up-next/pages/index.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_c = HomePage;\nvar __N_SSP = true;\n// // by default next js generates the pages statically but if you need\n// // to wait for data you can do so by exporting a special function \n// export async function getStaticProps() {\n//     // here we fetch the data from the Api\n//     // Uo90nWzMpoicRTeG \n//     const client = await MongoClient.connect(\n//         'mongodb+srv://user_1:Uo90nWzMpoicRTeG@meetupnext0.xpkke.mongodb.net/meetups?retryWrites=true&w=majority&appName=MeetupNext0'\n//     );\n//     const db = client.db();\n//     const meetupsCollection = db.collection('meetups');\n//     const meetups = await meetupsCollection.find().toArray();\n//     client.close();\n//     // the code here never ends up on the client side because it is executed in the build \n//     //you can fetch and read data here \n//     // you always return an obj here \n//     return {\n//         props: {\n//             meetups: meetups.map(meetup => ({\n//                 title: meetup.title,\n//                 address: meetup.address,\n//                 image: meetup.image,\n//                 id: meetup._id.toString(),\n//             }))\n//         },\n//         // if the data changes frequently we add the following to revalidate the data after every specified timeframe\n//         revalidate: 10\n//     }\n// }\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUFzRDtBQUNJO0FBRTdCO0FBQ0k7QUFJakMsU0FBU0ksUUFBUSxDQUFDQyxLQUFLLEVBQUU7SUFFckIsMERBQTBEO0lBRTFELDJGQUEyRjtJQUMzRixrRkFBa0Y7SUFDbEYsK0RBQStEO0lBQy9ELG9CQUFvQjtJQUNwQix5REFBeUQ7SUFDekQsdUNBQXVDO0lBQ3ZDLFNBQVM7SUFHVCxxQkFDSSw4REFBQ0YsMkNBQVE7OzBCQUNMLDhEQUFDRCxrREFBSTs7a0NBQ0QsOERBQUNJLE9BQUs7a0NBQUMsY0FBWTs7Ozs7NEJBQVE7a0NBQzNCLDhEQUFDQyxNQUFJO3dCQUFDQyxJQUFJLEVBQUMsYUFBYTt3QkFBQ0MsT0FBTyxFQUFDLDhCQUE4Qjs7Ozs7NEJBQVE7Ozs7OztvQkFDcEU7MEJBQ1AsOERBQUNSLHNFQUFVO2dCQUFDUyxPQUFPLEVBQUVMLEtBQUssQ0FBQ0ssT0FBTzs7Ozs7b0JBQUk7Ozs7OztZQUMvQixDQUNkO0FBQ0wsQ0FBQztBQXRCUU4sS0FBQUEsUUFBUTs7QUE2RGpCLHVFQUF1RTtBQUN2RSxxRUFBcUU7QUFDckUsMkNBQTJDO0FBRTNDLDZDQUE2QztBQUM3QywyQkFBMkI7QUFDM0IsZ0RBQWdEO0FBQ2hELHdJQUF3STtBQUN4SSxTQUFTO0FBQ1QsOEJBQThCO0FBRTlCLDBEQUEwRDtBQUUxRCxnRUFBZ0U7QUFFaEUsc0JBQXNCO0FBR3RCLDZGQUE2RjtBQUM3RiwwQ0FBMEM7QUFDMUMsd0NBQXdDO0FBQ3hDLGVBQWU7QUFDZixtQkFBbUI7QUFDbkIsZ0RBQWdEO0FBQ2hELHVDQUF1QztBQUN2QywyQ0FBMkM7QUFDM0MsdUNBQXVDO0FBQ3ZDLDZDQUE2QztBQUM3QyxrQkFBa0I7QUFDbEIsYUFBYTtBQUNiLHdIQUF3SDtBQUN4SCx5QkFBeUI7QUFDekIsUUFBUTtBQUNSLElBQUk7QUFHSiwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBpRXJyb3IgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9hcGktdXRpbHNcIjtcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5cbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XG5cbiAgICAvLyBjb25zdCBbbG9hZGVyTWVldHVwcywgc2V0TG9hZGVkTWVldHVwc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICAvLyAvLyB1c2VlZmZlY3QgaG9vayBleGVjdXRlcyBhZnRlciB0aGUgY29tcG9uZW50IHJlbmRlcnMgd2hpY2ggaGFwcGVucyBvbiB0aGUgbmV4cnQgY3ljbGUgXG4gICAgLy8gLy9OZXh0SlMgcmV0dXJucyB0aGUgaHRtbCBvZiBmaXJzdCByZW5kZXJlZCBwYWdlIHdoaWNoIGlzIG5vdCBnb29kIGZvciB0aGUgU0VPIFxuICAgIC8vIC8vc28sIHdlIGhhdmUgdG8gdXNlIG90aGVyIG9wdGlvbnMgbGlrZSAoUGFnZSBQcmUtUmVuZGVyaW5nKVxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIC8vIGhlcmUgd2Ugc2VudCB0aGUgaHR0cCByZXF1ZXN0IHRvIHNlbmQgdGhlIGRhdGEgXG4gICAgLy8gICAgIHNldExvYWRlZE1lZXR1cHMoRFVNTVlfTUVFVFVQUyk7XG4gICAgLy8gfSwgW10pXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5OZXh0IE1lZXR1cHM8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJicm93c2UgYSBsaXN0IG9mIHRoZSBtZWV0dXBzXCI+PC9tZXRhPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30gLz5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICApXG59XG5cbi8vIHRoaXMgY2FuIGJlIHVzZWQgdG8gcmV2YWxpZGF0ZSB0aGUgZGF0YSBvbiB0aGUgc2VydmVyIHNpZGUgZXZlcnl0aW1lIHRoZXJlIGlzIGEgY2hhbmdlIFxuLy8gdXNlIHRoaXMgbWV0aG9kIGlmIGRhdGEgY2hhbmdlcyBtdWx0aXBsZSB0aW1lcyBldmVyeSBzZWNvbmQgXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgICBjb25zdCByZXEgPSBjb250ZXh0LnJlcTtcbiAgICBjb25zdCByZXMgPSBjb250ZXh0LnJlcztcblxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgICAgICdtb25nb2RiK3NydjovL3VzZXJfMTpVbzkwbld6TXBvaWNSVGVHQG1lZXR1cG5leHQwLnhwa2tlLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JmFwcE5hbWU9TWVldHVwTmV4dDAnXG4gICAgKTtcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XG5cbiAgICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcblxuICAgIGNsaWVudC5jbG9zZSgpO1xuXG5cblxuICAgIC8vZmV0Y2ggZGF0YSBmcm9tIHRoZSBBUElcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBtZWV0dXBzOiBtZWV0dXBzLm1hcChtZWV0dXAgPT4gKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVldHVwLnRpdGxlLFxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IG1lZXR1cC5hZGRyZXNzLFxuICAgICAgICAgICAgICAgIGltYWdlOiBtZWV0dXAuaW1hZ2UsXG4gICAgICAgICAgICAgICAgaWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9LFxuICAgIH1cbiAgICAvLyB5b3UgY2Fubm90IHNldCByZXZhbGlkYXRlIGJlY2F1c2UgdGhlcmUncyBubyBuZWVkIFxufVxuXG5cblxuXG4vLyAvLyBieSBkZWZhdWx0IG5leHQganMgZ2VuZXJhdGVzIHRoZSBwYWdlcyBzdGF0aWNhbGx5IGJ1dCBpZiB5b3UgbmVlZFxuLy8gLy8gdG8gd2FpdCBmb3IgZGF0YSB5b3UgY2FuIGRvIHNvIGJ5IGV4cG9ydGluZyBhIHNwZWNpYWwgZnVuY3Rpb24gXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG5cbi8vICAgICAvLyBoZXJlIHdlIGZldGNoIHRoZSBkYXRhIGZyb20gdGhlIEFwaVxuLy8gICAgIC8vIFVvOTBuV3pNcG9pY1JUZUcgXG4vLyAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbi8vICAgICAgICAgJ21vbmdvZGIrc3J2Oi8vdXNlcl8xOlVvOTBuV3pNcG9pY1JUZUdAbWVldHVwbmV4dDAueHBra2UubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHkmYXBwTmFtZT1NZWV0dXBOZXh0MCdcbi8vICAgICApO1xuLy8gICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbi8vICAgICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcblxuLy8gICAgIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xuXG4vLyAgICAgY2xpZW50LmNsb3NlKCk7XG5cblxuLy8gICAgIC8vIHRoZSBjb2RlIGhlcmUgbmV2ZXIgZW5kcyB1cCBvbiB0aGUgY2xpZW50IHNpZGUgYmVjYXVzZSBpdCBpcyBleGVjdXRlZCBpbiB0aGUgYnVpbGQgXG4vLyAgICAgLy95b3UgY2FuIGZldGNoIGFuZCByZWFkIGRhdGEgaGVyZSBcbi8vICAgICAvLyB5b3UgYWx3YXlzIHJldHVybiBhbiBvYmogaGVyZSBcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICBwcm9wczoge1xuLy8gICAgICAgICAgICAgbWVldHVwczogbWVldHVwcy5tYXAobWVldHVwID0+ICh7XG4vLyAgICAgICAgICAgICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcbi8vICAgICAgICAgICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcbi8vICAgICAgICAgICAgICAgICBpbWFnZTogbWVldHVwLmltYWdlLFxuLy8gICAgICAgICAgICAgICAgIGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCksXG4vLyAgICAgICAgICAgICB9KSlcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAgLy8gaWYgdGhlIGRhdGEgY2hhbmdlcyBmcmVxdWVudGx5IHdlIGFkZCB0aGUgZm9sbG93aW5nIHRvIHJldmFsaWRhdGUgdGhlIGRhdGEgYWZ0ZXIgZXZlcnkgc3BlY2lmaWVkIHRpbWVmcmFtZVxuLy8gICAgICAgICByZXZhbGlkYXRlOiAxMFxuLy8gICAgIH1cbi8vIH1cblxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiXSwibmFtZXMiOlsiQXBpRXJyb3IiLCJNZWV0dXBMaXN0IiwiSGVhZCIsIkZyYWdtZW50IiwiSG9tZVBhZ2UiLCJwcm9wcyIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibWVldHVwcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});