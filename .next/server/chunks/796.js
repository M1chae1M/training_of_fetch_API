"use strict";
exports.id = 796;
exports.ids = [796];
exports.modules = {

/***/ 7796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PokemonCardRender)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PokemonCardRenderComponents_DataLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6321);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




class PokemonCardRender extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    state = {
        loadingState: true
    };
    render() {
        const styles = {
            PokemonCardRender: {
                border: "solid 1px var(--pokemonCardBorderColor)",
                fontSize: "0.9rem",
                width: "auto",
                height: "200px",
                textAlign: "center",
                padding: "7px",
                borderRadius: "5px",
                display: "grid",
                boxShadow: "var(--shadow) 2px 2px",
                justifyItems: "center",
                backgroundColor: "var(--pokemonCardBorderColor)",
                overflow: "hidden",
                background: "linear-gradient(348deg,var(--pokemonCardBorderColor) 0%,var(--pokemonCardBorderBackground) 20%)"
            },
            imgDiv: {
                height: "100px",
                margin: "3px",
                border: "solid var(--pokemonCardBorderColor) 3px",
                borderRadius: "20px",
                display: "grid",
                alignItems: "center"
            },
            img: {
                display: this.state.loadingState === true ? "none" : ""
            }
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "PokemonCard",
                style: styles.PokemonCardRender,
                children: this.state.loadingState === true ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            id: "imgDiv",
                            style: styles.imgDiv,
                            children: [
                                this.state.loadingState === true ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: "loading..."
                                }) : null,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.props.ID + ".png",
                                    onLoad: ()=>{
                                        this.setState({
                                            loadingState: false
                                        });
                                    },
                                    style: styles.img,
                                    alt: ""
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PokemonCardRenderComponents_DataLine__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            header: "ID:",
                            content: "loading..."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PokemonCardRenderComponents_DataLine__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            header: "Name:",
                            content: "loading..."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PokemonCardRenderComponents_DataLine__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            header: "Type:",
                            content: "loading..."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PokemonCardRenderComponents_DataLine__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            header: "Weight:",
                            content: "loading..."
                        })
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: `/pokemons/${this.props.name}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                id: "imgDiv",
                                style: styles.imgDiv,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.props.ID + ".png",
                                    style: styles.img,
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PokemonCardRenderComponents_DataLine__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            header: "ID:",
                            content: this.props.ID
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PokemonCardRenderComponents_DataLine__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            header: "Name:",
                            content: this.props.name
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PokemonCardRenderComponents_DataLine__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            header: "Type:",
                            content: this.props.type ? Array.from(this.props.type).map((x, i)=>(i !== 0 ? ", " : " ") + x.type.name) : null
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PokemonCardRenderComponents_DataLine__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            header: "Weight:",
                            content: this.props.weight + " kg"
                        })
                    ]
                })
            })
        });
    }
}


/***/ }),

/***/ 6321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataLine)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class DataLine extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    render() {
        const styles = {
            DataLine: {
                width: "fit-content"
            },
            bolded: {
                fontWeight: "bold"
            }
        };
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "DataLine",
            style: styles.DataLine,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: true,
                    style: styles.bolded,
                    children: this.props.header
                }),
                " ",
                this.props.content
            ]
        });
    }
}


/***/ })

};
;