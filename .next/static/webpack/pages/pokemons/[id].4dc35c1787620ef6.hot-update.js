"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/pokemons/[id]",{

/***/ "./pages/pokemons/[id].js":
/*!********************************!*\
  !*** ./pages/pokemons/[id].js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Pokemon; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _component_PokemonCardRenderComponents_DataLine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/PokemonCardRenderComponents/DataLine */ \"./pages/component/PokemonCardRenderComponents/DataLine.js\");\n/* harmony import */ var _component_PokemonCardRender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/PokemonCardRender */ \"./pages/component/PokemonCardRender.js\");\n\n\n\n\n\n\n\nvar __N_SSG = true;\nclass Pokemon extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n    componentDidMount() {\n        let newURL = \"https://pokeapi.co/api/v2/pokemon/\".concat(this.props.params.id);\n        axios__WEBPACK_IMPORTED_MODULE_2___default().get(newURL).then((res)=>{\n            return res.data;\n        }).then((res)=>this.setState({\n                newObject: res\n            }));\n    }\n    render() {\n        const styles = {\n            App: {\n                width: \"100vw\",\n                height: \"100vh\",\n                position: \"relative\",\n                display: \"grid\",\n                justifyItems: \"center\",\n                alignItems: \"center\",\n                alignContent: \"center\"\n            },\n            PokemonCardRender: {\n                border: \"solid 1px var(--pokemonCardBorderColor)\",\n                fontSize: \"0.9rem\",\n                // width:'auto',\n                width: \"fit-content\",\n                height: \"200px\",\n                textAlign: \"center\",\n                padding: \"7px\",\n                borderRadius: \"5px\",\n                display: \"grid\",\n                boxShadow: \"var(--shadow) 2px 2px\",\n                justifyItems: \"center\",\n                backgroundColor: \"var(--pokemonCardBorderColor)\",\n                overflow: \"hidden\",\n                background: \"linear-gradient(348deg,var(--pokemonCardBorderColor) 0%,var(--pokemonCardBorderBackground) 20%)\"\n            },\n            imgDiv: {\n                height: \"100px\",\n                margin: \"3px\",\n                border: \"solid var(--pokemonCardBorderColor) 3px\",\n                borderRadius: \"20px\",\n                display: \"grid\",\n                alignItems: \"center\"\n            },\n            img: {\n                display: this.state.loadingState === true ? \"none\" : \"\"\n            },\n            backButton: {\n                position: \"absolute\",\n                top: \"0%\",\n                right: \"0%\"\n            }\n        };\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"App\",\n                style: styles.App,\n                children: [\n                    console.log(this.state.newObject),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_PokemonCardRender__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        name: this.state.newObject.name,\n                        type: this.state.newObject.types,\n                        ID: this.state.newObject.id,\n                        weight: this.state.newObject.weight,\n                        cardHeight: \"400px\",\n                        abilities: this.state.newObject.abilities,\n                        height: this.state.newObject.height,\n                        stats: this.state.newObject.stats\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react nauka\\\\folder-for-react-apps\\\\prawie gotowe\\\\pokemonyNextWithRouting2\\\\pages\\\\pokemons\\\\[id].js\",\n                        lineNumber: 85,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: styles.backButton,\n                            children: \"↩️\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\react nauka\\\\folder-for-react-apps\\\\prawie gotowe\\\\pokemonyNextWithRouting2\\\\pages\\\\pokemons\\\\[id].js\",\n                            lineNumber: 98,\n                            columnNumber: 38\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react nauka\\\\folder-for-react-apps\\\\prawie gotowe\\\\pokemonyNextWithRouting2\\\\pages\\\\pokemons\\\\[id].js\",\n                        lineNumber: 98,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react nauka\\\\folder-for-react-apps\\\\prawie gotowe\\\\pokemonyNextWithRouting2\\\\pages\\\\pokemons\\\\[id].js\",\n                lineNumber: 83,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\react nauka\\\\folder-for-react-apps\\\\prawie gotowe\\\\pokemonyNextWithRouting2\\\\pages\\\\pokemons\\\\[id].js\",\n            lineNumber: 82,\n            columnNumber: 13\n        }, this);\n    }\n    constructor(...args){\n        super(...args);\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, \"state\", {\n            newObject: [],\n            loadingState: false\n        });\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb2tlbW9ucy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNBO0FBQ0c7QUFDNEM7QUFDVjs7QUFxQmhELE1BQU1LLGdCQUFnQkwsd0RBQWU7SUFLaERPLG9CQUFtQjtRQUNmLElBQUlDLFNBQU8scUNBQTBELE9BQXJCLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLENBQUNDLEVBQUU7UUFDcEVWLGdEQUFTLENBQUNPLFFBQ1RLLElBQUksQ0FBQ0MsQ0FBQUEsTUFBSztZQUFDLE9BQU9BLElBQUlDLElBQUk7UUFBQSxHQUMxQkYsSUFBSSxDQUFDQyxDQUFBQSxNQUFLLElBQUksQ0FBQ0UsUUFBUSxDQUFDO2dCQUFDQyxXQUFVSDtZQUFHO0lBQzNDO0lBQ0FJLFNBQVE7UUFDSixNQUFNQyxTQUFPO1lBQ1RDLEtBQUk7Z0JBQ0FDLE9BQU07Z0JBQ05DLFFBQU87Z0JBQ1BDLFVBQVM7Z0JBQ1RDLFNBQVE7Z0JBQ1JDLGNBQWE7Z0JBQ2JDLFlBQVc7Z0JBQ1hDLGNBQWE7WUFDakI7WUFDQXZCLG1CQUFrQjtnQkFDZHdCLFFBQU87Z0JBQ1BDLFVBQVM7Z0JBQ1QsZ0JBQWdCO2dCQUNoQlIsT0FBTTtnQkFDTkMsUUFBTztnQkFDUFEsV0FBVTtnQkFDVkMsU0FBUTtnQkFDUkMsY0FBYTtnQkFDYlIsU0FBUTtnQkFDUlMsV0FBVTtnQkFDVlIsY0FBYTtnQkFDYlMsaUJBQWdCO2dCQUNoQkMsVUFBUztnQkFDVEMsWUFBVztZQUNmO1lBQ0FDLFFBQU87Z0JBQ0hmLFFBQU87Z0JBQ1BnQixRQUFPO2dCQUNQVixRQUFPO2dCQUNQSSxjQUFhO2dCQUNiUixTQUFRO2dCQUNSRSxZQUFXO1lBQ2Y7WUFDQWEsS0FBSTtnQkFDQWYsU0FBUSxJQUFJLENBQUNnQixLQUFLLENBQUNDLFlBQVksS0FBRyxJQUFJLEdBQUMsU0FBTyxFQUFFO1lBQ3BEO1lBQ0FDLFlBQVc7Z0JBQ1BuQixVQUFTO2dCQUNUb0IsS0FBSTtnQkFDSkMsT0FBTTtZQUNWO1FBQ0o7UUFDQSxxQkFDSSw4REFBQzVDLHVEQUFjO3NCQUNYLDRFQUFDOEM7Z0JBQUluQyxJQUFHO2dCQUFNb0MsT0FBTzVCLE9BQU9DLEdBQUc7O29CQUMxQjRCLFFBQVFDLEdBQUcsQ0FBQyxJQUFJLENBQUNULEtBQUssQ0FBQ3ZCLFNBQVM7a0NBQ2pDLDhEQUFDYixvRUFBaUJBO3dCQUNkOEMsTUFBTSxJQUFJLENBQUNWLEtBQUssQ0FBQ3ZCLFNBQVMsQ0FBQ2lDLElBQUk7d0JBQy9CQyxNQUFNLElBQUksQ0FBQ1gsS0FBSyxDQUFDdkIsU0FBUyxDQUFDbUMsS0FBSzt3QkFDaENDLElBQUksSUFBSSxDQUFDYixLQUFLLENBQUN2QixTQUFTLENBQUNOLEVBQUU7d0JBQzNCMkMsUUFBUSxJQUFJLENBQUNkLEtBQUssQ0FBQ3ZCLFNBQVMsQ0FBQ3FDLE1BQU07d0JBQ25DQyxZQUFXO3dCQUVYQyxXQUFXLElBQUksQ0FBQ2hCLEtBQUssQ0FBQ3ZCLFNBQVMsQ0FBQ3VDLFNBQVM7d0JBR3pDbEMsUUFBUSxJQUFJLENBQUNrQixLQUFLLENBQUN2QixTQUFTLENBQUNLLE1BQU07d0JBQ25DbUMsT0FBTyxJQUFJLENBQUNqQixLQUFLLENBQUN2QixTQUFTLENBQUN3QyxLQUFLOzs7Ozs7a0NBRXJDLDhEQUFDdkQsa0RBQUlBO3dCQUFDd0QsTUFBTTtrQ0FBSyw0RUFBQ1o7NEJBQUlDLE9BQU81QixPQUFPdUIsVUFBVTtzQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUloRTs7O1FBM0VBRixnRkFBQUEsT0FBQUEsU0FBTTtZQUNGdkIsV0FBVSxFQUFFO1lBQ1p3QixjQUFhLEtBQUs7UUFDdEI7O0FBeUVKO0FBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9rZW1vbnMvW2lkXS5qcz9kOWFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBEYXRhTGluZSBmcm9tIFwiLi4vY29tcG9uZW50L1Bva2Vtb25DYXJkUmVuZGVyQ29tcG9uZW50cy9EYXRhTGluZVwiO1xyXG5pbXBvcnQgUG9rZW1vbkNhcmRSZW5kZXIgZnJvbSBcIi4uL2NvbXBvbmVudC9Qb2tlbW9uQ2FyZFJlbmRlclwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCl7XHJcbiAgICBjb25zdCB7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vP29mZnNldD0wJmxpbWl0PTEwMDgnKVxyXG4gICAgLy8gY29uc3Qge2RhdGF9PWF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLz9vZmZzZXQ9MCZsaW1pdD0xMDAnKVxyXG4gICAgLy8gY29uc3Qge2RhdGF9PWF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLz9vZmZzZXQ9MCZsaW1pdD0xMCcpXHJcbiAgICBjb25zdCB7cmVzdWx0c309IGRhdGE7XHJcbiAgICBjb25zdCBuYW1lPSByZXN1bHRzLm1hcCgoe25hbWV9KT0+KHtuYW1lfSkpO1xyXG4gICAgY29uc3QgcGF0aHMgPSBuYW1lLm1hcCgoe25hbWV9KSA9PiAoe3BhcmFtczoge2lkOiBuYW1lfX0pKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHMsXHJcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gICAgfVxyXG59XHJcbiAgXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7cGFyYW1zfSl7XHJcbnJldHVybiB7XHJcbiAgICBwcm9wczp7cGFyYW1zfSxcclxufVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2tlbW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgc3RhdGU9e1xyXG4gICAgICAgIG5ld09iamVjdDpbXSxcclxuICAgICAgICBsb2FkaW5nU3RhdGU6ZmFsc2UsXHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIGxldCBuZXdVUkw9YGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke3RoaXMucHJvcHMucGFyYW1zLmlkfWBcclxuICAgICAgICBheGlvcy5nZXQobmV3VVJMKVxyXG4gICAgICAgIC50aGVuKHJlcz0+e3JldHVybiByZXMuZGF0YX0pXHJcbiAgICAgICAgLnRoZW4ocmVzPT50aGlzLnNldFN0YXRlKHtuZXdPYmplY3Q6cmVzfSkpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCBzdHlsZXM9e1xyXG4gICAgICAgICAgICBBcHA6e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6JzEwMHZ3JyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDonMTAwdmgnLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246J3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6J2dyaWQnLFxyXG4gICAgICAgICAgICAgICAganVzdGlmeUl0ZW1zOidjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczonY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGFsaWduQ29udGVudDonY2VudGVyJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgUG9rZW1vbkNhcmRSZW5kZXI6e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOidzb2xpZCAxcHggdmFyKC0tcG9rZW1vbkNhcmRCb3JkZXJDb2xvciknLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6JzAuOXJlbScsXHJcbiAgICAgICAgICAgICAgICAvLyB3aWR0aDonYXV0bycsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDonZml0LWNvbnRlbnQnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OicyMDBweCcsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246J2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOic3cHgnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOic1cHgnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTonZ3JpZCcsXHJcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c6J3ZhcigtLXNoYWRvdykgMnB4IDJweCcsXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5SXRlbXM6J2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6J3ZhcigtLXBva2Vtb25DYXJkQm9yZGVyQ29sb3IpJyxcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OidoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDonbGluZWFyLWdyYWRpZW50KDM0OGRlZyx2YXIoLS1wb2tlbW9uQ2FyZEJvcmRlckNvbG9yKSAwJSx2YXIoLS1wb2tlbW9uQ2FyZEJvcmRlckJhY2tncm91bmQpIDIwJSknLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbWdEaXY6e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OicxMDBweCcsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46JzNweCcsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6J3NvbGlkIHZhcigtLXBva2Vtb25DYXJkQm9yZGVyQ29sb3IpIDNweCcsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6JzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTonZ3JpZCcsXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOidjZW50ZXInLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbWc6e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTp0aGlzLnN0YXRlLmxvYWRpbmdTdGF0ZT09PXRydWU/J25vbmUnOicnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiYWNrQnV0dG9uOntcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOidhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICB0b3A6JzAlJyxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OicwJScsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiQXBwXCIgc3R5bGU9e3N0eWxlcy5BcHB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm5ld09iamVjdCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPFBva2Vtb25DYXJkUmVuZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMuc3RhdGUubmV3T2JqZWN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3RoaXMuc3RhdGUubmV3T2JqZWN0LnR5cGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJRD17dGhpcy5zdGF0ZS5uZXdPYmplY3QuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlaWdodD17dGhpcy5zdGF0ZS5uZXdPYmplY3Qud2VpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkSGVpZ2h0PVwiNDAwcHhcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWJpbGl0aWVzPXt0aGlzLnN0YXRlLm5ld09iamVjdC5hYmlsaXRpZXN9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXt0aGlzLnN0YXRlLm5ld09iamVjdC5oZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzPXt0aGlzLnN0YXRlLm5ld09iamVjdC5zdGF0c31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvJ30+PGRpdiBzdHlsZT17c3R5bGVzLmJhY2tCdXR0b259PuKGqe+4jzwvZGl2PjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJheGlvcyIsIkxpbmsiLCJEYXRhTGluZSIsIlBva2Vtb25DYXJkUmVuZGVyIiwiUG9rZW1vbiIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZE1vdW50IiwibmV3VVJMIiwicHJvcHMiLCJwYXJhbXMiLCJpZCIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwic2V0U3RhdGUiLCJuZXdPYmplY3QiLCJyZW5kZXIiLCJzdHlsZXMiLCJBcHAiLCJ3aWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwiZGlzcGxheSIsImp1c3RpZnlJdGVtcyIsImFsaWduSXRlbXMiLCJhbGlnbkNvbnRlbnQiLCJib3JkZXIiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJvdmVyZmxvdyIsImJhY2tncm91bmQiLCJpbWdEaXYiLCJtYXJnaW4iLCJpbWciLCJzdGF0ZSIsImxvYWRpbmdTdGF0ZSIsImJhY2tCdXR0b24iLCJ0b3AiLCJyaWdodCIsIkZyYWdtZW50IiwiZGl2Iiwic3R5bGUiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsInR5cGUiLCJ0eXBlcyIsIklEIiwid2VpZ2h0IiwiY2FyZEhlaWdodCIsImFiaWxpdGllcyIsInN0YXRzIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/pokemons/[id].js\n"));

/***/ })

});