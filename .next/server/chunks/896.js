"use strict";
exports.id = 896;
exports.ids = [896];
exports.modules = {

/***/ 8896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class Menu extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    state = {
        allTypes: []
    };
    componentDidMount() {
        fetch("https://pokeapi.co/api/v2/generation/1/").then((respond)=>respond.json()).then((respond)=>this.setState({
                allTypes: respond.types
            }));
    }
    render() {
        const styles = {
            Menu: {
                position: "fixed",
                height: "var(--heightOfMenu)",
                display: "grid",
                borderRadius: "5px",
                overflow: "hidden",
                backgroundColor: "var(--pokemonCardBorderBackground)",
                width: "fit-content",
                gridAutoFlow: "column"
            },
            SearchInputComponent: {
                // opacity:this.props.scrolled>0?0.4:1,
                height: "100%",
                borderBottomLeftRadius: "5px",
                borderTopLeftRadius: "5px",
                backgroundColor: "var(--pokemonCardBorderBackground)",
                color: "black",
                border: "solid 2px var(--pokemonCardBorderColor)",
                width: "200px"
            },
            inputs: {
                // opacity:this.state.scrolled>0?0.4:1,
                height: "100%",
                width: "fit-content",
                border: "solid 2px var(--pokemonCardBorderColor)",
                backgroundColor: "var(--pokemonCardBorderBackground)",
                borderBottomRightRadius: "5px",
                borderTopRightRadius: "5px",
                color: "var(--shadow)"
            },
            X: {
                color: "var(--shadow)",
                // opacity:this.state.scrolled>0?0.4:1,
                height: "100%",
                paddingLeft: "5px",
                paddingRight: "5px",
                fontWeight: "bold",
                width: "fit-content",
                border: "solid 2px var(--pokemonCardBorderColor)",
                backgroundColor: "var(--pokemonCardBorderBackground)"
            }
        };
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            id: "Menu",
            style: styles.Menu,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "text",
                    onChange: this.props.onchangeinput,
                    value: this.props.searchInputValue,
                    placeholder: "Search pokemon by his name...",
                    id: "SearchInputComponent",
                    style: styles.SearchInputComponent
                }),
                this.props.searchInputValue !== "" || this.props.pickedTypeToDisplay !== "all" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "button",
                    value: "\uD83D\uDFAE",
                    style: styles.X,
                    onClick: this.props.clearFilters
                }) : null,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                    style: styles.inputs,
                    onChange: this.props.changeSelect,
                    value: this.props.pickedTypeToDisplay,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: "all",
                            children: "all"
                        }, "0"),
                        Array.from(this.state.allTypes).map((y, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: y.name,
                                children: y.name
                            }, i))
                    ]
                })
            ]
        });
    }
}


/***/ })

};
;