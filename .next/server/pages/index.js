(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/ProductItem.tsx":
/*!****************************************!*\
  !*** ./src/components/ProductItem.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductItem": function() { return /* binding */ ProductItem; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\amigo\\Documents\\github\\nextjs-blog\\src\\components\\ProductItem.tsx";
function ProductItem({
  product
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [product.title, " - ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
      children: product.price
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 25
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/SearchResults.tsx":
/*!******************************************!*\
  !*** ./src/components/SearchResults.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchResults": function() { return /* binding */ SearchResults; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductItem */ "./src/components/ProductItem.tsx");

var _jsxFileName = "C:\\Users\\amigo\\Documents\\github\\nextjs-blog\\src\\components\\SearchResults.tsx";

function SearchResults({
  results
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: results === null || results === void 0 ? void 0 : results.map(produtc => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductItem__WEBPACK_IMPORTED_MODULE_1__.ProductItem, {
        product: produtc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 16
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SearchResults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SearchResults */ "./src/components/SearchResults.tsx");

var _jsxFileName = "C:\\Users\\amigo\\Documents\\github\\nextjs-blog\\src\\pages\\index.tsx";



function Home() {
  const {
    0: search,
    1: setSearch
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: results,
    1: setResults
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();

  const handleSearch = async event => {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3334/products?q=${search}`);
    console.log(response);
    const data = await response.json();
    setResults(data);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "stes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Search"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: handleSearch,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          value: search,
          onChange: e => setSearch(e.target.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          children: "Buscas"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchResults__WEBPACK_IMPORTED_MODULE_3__.SearchResults, {
        results: results
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0SXRlbS50c3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy50c3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlByb2R1Y3RJdGVtIiwicHJvZHVjdCIsInRpdGxlIiwicHJpY2UiLCJTZWFyY2hSZXN1bHRzIiwicmVzdWx0cyIsIm1hcCIsInByb2R1dGMiLCJIb21lIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlU3RhdGUiLCJzZXRSZXN1bHRzIiwiaGFuZGxlU2VhcmNoIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJyZXNwb25zZSIsImZldGNoIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJqc29uIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRTyxTQUFTQSxXQUFULENBQXFCO0FBQUVDO0FBQUYsQ0FBckIsRUFBb0Q7QUFDekQsc0JBQ0U7QUFBQSxlQUNHQSxPQUFPLENBQUNDLEtBRFgsc0JBQ29CO0FBQUEsZ0JBQVNELE9BQU8sQ0FBQ0U7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEQ7QUFVTyxTQUFTQyxhQUFULENBQXVCO0FBQUVDO0FBQUYsQ0FBdkIsRUFBd0Q7QUFDN0Qsc0JBQ0U7QUFBQSxjQUNHQSxPQURILGFBQ0dBLE9BREgsdUJBQ0dBLE9BQU8sQ0FBRUMsR0FBVCxDQUFjQyxPQUFELElBQWE7QUFDekIsMEJBQU8sOERBQUMscURBQUQ7QUFBYSxlQUFPLEVBQUVBO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUDtBQUNELEtBRkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkQ7QUFDQTtBQUNBO0FBUWUsU0FBU0MsSUFBVCxHQUFnQjtBQUM3QixRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JDLCtDQUFRLENBQUMsRUFBRCxDQUFwQztBQUNBLFFBQU07QUFBQSxPQUFDTixPQUFEO0FBQUEsT0FBVU87QUFBVixNQUF3QkQsK0NBQVEsRUFBdEM7O0FBRUEsUUFBTUUsWUFBWSxHQUFHLE1BQU9DLEtBQVAsSUFBNEI7QUFDL0NBLFNBQUssQ0FBQ0MsY0FBTjs7QUFFQSxRQUFJLENBQUNOLE1BQU0sQ0FBQ08sSUFBUCxFQUFMLEVBQW9CO0FBQ2xCO0FBQ0Q7O0FBRUQsVUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBRSxvQ0FBbUNULE1BQU8sRUFBNUMsQ0FBNUI7QUFDQVUsV0FBTyxDQUFDQyxHQUFSLENBQVlILFFBQVo7QUFDQSxVQUFNSSxJQUFJLEdBQUcsTUFBTUosUUFBUSxDQUFDSyxJQUFULEVBQW5CO0FBQ0FWLGNBQVUsQ0FBQ1MsSUFBRCxDQUFWO0FBQ0QsR0FYRDs7QUFhQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLGdCQUFRLEVBQUVSLFlBQWhCO0FBQUEsZ0NBQ0U7QUFDRSxjQUFJLEVBQUMsTUFEUDtBQUVFLGVBQUssRUFBRUosTUFGVDtBQUdFLGtCQUFRLEVBQUdjLENBQUQsSUFBT2IsU0FBUyxDQUFDYSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVjtBQUg1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBTUU7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQVdFLDhEQUFDLG9FQUFEO0FBQWUsZUFBTyxFQUFFcEI7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0JELEM7Ozs7Ozs7Ozs7O0FDL0NELHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFByb2R1Y3RJdGVtUHJvcHMge1xyXG4gIHByb2R1Y3Q6IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBwcmljZTogbnVtYmVyO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJvZHVjdEl0ZW0oeyBwcm9kdWN0IH06IFByb2R1Y3RJdGVtUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3Byb2R1Y3QudGl0bGV9IC0gPHN0cm9uZz57cHJvZHVjdC5wcmljZX08L3N0cm9uZz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgUHJvZHVjdEl0ZW0gfSBmcm9tIFwiLi9Qcm9kdWN0SXRlbVwiO1xyXG5cclxuaW50ZXJmYWNlIFNlYXJjaFJlc3VsdHNQcm9wcyB7XHJcbiAgcmVzdWx0czogQXJyYXk8e1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIHByaWNlOiBudW1iZXI7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gIH0+O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2VhcmNoUmVzdWx0cyh7IHJlc3VsdHMgfTogU2VhcmNoUmVzdWx0c1Byb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtyZXN1bHRzPy5tYXAoKHByb2R1dGMpID0+IHtcclxuICAgICAgICByZXR1cm4gPFByb2R1Y3RJdGVtIHByb2R1Y3Q9e3Byb2R1dGN9IC8+O1xyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgRm9ybUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2VhcmNoUmVzdWx0cyB9IGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHNcIjtcblxuaW50ZXJmYWNlIFByb2R1Y3RQcm9wcyB7XG4gIGlkOiBudW1iZXI7XG4gIHByaWNlOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGU8UHJvZHVjdFByb3BzW10+KCk7XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gYXN5bmMgKGV2ZW50OiBGb3JtRXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKCFzZWFyY2gudHJpbSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMzM0L3Byb2R1Y3RzP3E9JHtzZWFyY2h9YCk7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgc2V0UmVzdWx0cyhkYXRhKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnN0ZXM8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+U2VhcmNoPC9wPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU2VhcmNofT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5CdXNjYXM8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIDxTZWFyY2hSZXN1bHRzIHJlc3VsdHM9e3Jlc3VsdHN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==