"use strict";
exports.id = 955;
exports.ids = [955];
exports.modules = {

/***/ 866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8896);
/* harmony import */ var _PokemonCardRender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7796);




class App extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    state = {
        resultsOf: [],
        searchInputValue: "",
        pickedTypeToDisplay: "all"
    };
    render() {
        const styles = {
            App: {
                display: "grid",
                width: "100%",
                height: "100%",
                position: "relative",
                justifyItems: "center",
                paddingBottom: "5px"
            },
            PokemonList: {
                padding: "5px",
                borderRadius: "5px",
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                backgroundColor: "grey",
                marginTop: "var(--heightOfMenu)",
                gap: "5px",
                gridTemplateRows: "auto",
                boxShadow: "var(--shadow) 3px 3px",
                gridAutoRows: "1fr"
            },
            noResults: {
                color: "var(--shadow)",
                fontSize: "1.5rem"
            },
            rightMenu: {
                main: {
                    position: "fixed",
                    right: "0%",
                    top: "0%",
                    width: "fit-content",
                    border: "solid var(--pokemonCardBorderColor) 3px",
                    borderBottomLeftRadius: "10px",
                    paddingLeft: "10px",
                    paddingBottom: "3px",
                    backgroundColor: "var(--pokemonCardBorderBackground)",
                    color: "var(--shadow)",
                    borderTop: "none",
                    borderRight: "none",
                    display: "flex"
                },
                header: {
                    width: "fit-content",
                    paddingRight: "5px",
                    fontSize: "0.9rem"
                },
                input: {
                    width: "45px",
                    border: "none",
                    backgroundColor: "var(--pokemonCardBorderBackground)",
                    borderRight: "none",
                    borderTop: "none",
                    color: "var(--shadow)"
                }
            }
        };
        const onchangeinput = (e)=>{
            this.setState({
                searchInputValue: e.target.value
            });
        };
        const changeSelect = (e)=>{
            this.setState({
                pickedTypeToDisplay: e.target.value
            });
        };
        const clearFilters = ()=>{
            console.log("clear all filters");
            this.setState({
                searchInputValue: "",
                pickedTypeToDisplay: "all"
            });
        };
        var checkAllFilters = this.props.allFetches ? this.props.allFetches.filter((pokemonName)=>this.state.searchInputValue !== "" ? pokemonName.name.slice(0, this.state.searchInputValue.length).toUpperCase() === this.state.searchInputValue.toUpperCase() : true).filter((y)=>this.state.pickedTypeToDisplay !== "all" ? Array.from(y.type).length > 1 ? y.type[0].type.name === this.state.pickedTypeToDisplay || y.type[1].type.name === this.state.pickedTypeToDisplay : y.type[0].type.name === this.state.pickedTypeToDisplay : true) : null;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            id: "App",
            style: styles.App,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    searchInputValue: this.state.searchInputValue,
                    allTypes: this.state.allTypes,
                    pickedTypeToDisplay: this.state.pickedTypeToDisplay,
                    onchangeinput: onchangeinput,
                    changeSelect: changeSelect,
                    clearFilters: clearFilters
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: styles.rightMenu.main,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: styles.rightMenu.header,
                            children: "Number of displayed pokemons: "
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "number",
                            style: styles.rightMenu.input,
                            defaultValue: this.props.displayedPokemonsOnPage,
                            placeholder: "Number of displayed pokemons",
                            onChange: this.props.debounce
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    id: "PokemonList",
                    style: styles.PokemonList,
                    children: this.props.allFetches !== undefined ? checkAllFilters.length > 0 ? checkAllFilters.map((x, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PokemonCardRender__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            name: x.name,
                            type: x.type,
                            ID: x.ID,
                            weight: x.weight,
                            allFetches: this.props.allFetches
                        }, i)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: styles.noResults,
                        children: "No results..."
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: styles.noResults,
                        children: "No results"
                    })
                })
            ]
        });
    }
}


/***/ })

};
;