"use strict";
(() => {
var exports = {};
exports.id = 699;
exports.ids = [699,277,288,363];
exports.modules = {

/***/ 1773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Pokemon),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./pages/component/PokemonCardRenderComponents/DataLine.js
var DataLine = __webpack_require__(6321);
// EXTERNAL MODULE: ./pages/component/PokemonCardRender.js
var PokemonCardRender = __webpack_require__(7796);
;// CONCATENATED MODULE: ./pages/pokemons/[id].js






async function getStaticPaths() {
    // const {data}=await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1008')
    // const {data}=await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100')
    const { data  } = await external_axios_default().get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10");
    const { results  } = data;
    const name = results.map(({ name  })=>({
            name
        }));
    const paths = name.map(({ name  })=>({
            params: {
                id: name
            }
        }));
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    return {
        props: {
            params
        }
    };
}
class Pokemon extends (external_react_default()).Component {
    state = {
        newObject: [],
        loadingState: false
    };
    componentDidMount() {
        let newURL = `https://pokeapi.co/api/v2/pokemon/${this.props.params.id}`;
        external_axios_default().get(newURL).then((res)=>{
            return res.data;
        }).then((res)=>this.setState({
                newObject: res
            }));
    }
    render() {
        const styles = {
            App: {
                width: "100vw",
                height: "100vh",
                position: "relative",
                display: "grid",
                justifyItems: "center",
                alignItems: "center",
                alignContent: "center"
            },
            PokemonCardRender: {
                border: "solid 1px var(--pokemonCardBorderColor)",
                fontSize: "0.9rem",
                // width:'auto',
                width: "fit-content",
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
            },
            backButton: {
                position: "absolute",
                top: "0%",
                right: "0%"
            }
        };
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "App",
                style: styles.App,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(PokemonCardRender["default"], {
                        name: this.state.newObject.name,
                        type: this.state.newObject.types,
                        ID: this.state.newObject.id,
                        weight: this.state.newObject.weight
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: styles.backButton,
                            children: "↩️"
                        })
                    })
                ]
            })
        });
    }
} // {
 //     <div className="PokemonCard" style={styles.PokemonCardRender}>
 //         {
 //             this.state.loadingState===true?
 //                 <React.Fragment>
 //                     <div id="imgDiv" style={styles.imgDiv}>
 //                         {
 //                             this.state.loadingState === true?
 //                                 <div>loading...</div>:
 //                                     null
 //                         }
 //                         <img
 //                             src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+this.props.ID+".png"}
 //                             onLoad={()=>{this.setState({loadingState:false})}}
 //                             style={styles.img}
 //                             alt=""
 //                         />
 //                     </div>
 //                     <DataLine header="ID:" content="loading..."/>
 //                     <DataLine header="Name:" content="loading..."/>
 //                     <DataLine header="Type:" content="loading..."/>
 //                     <DataLine header="Weight:" content="loading..."/>
 //                 </React.Fragment>:
 //                     <React.Fragment>
 //                         <Link href={`./pokemons/${this.props.name}`}>
 //                             <div id="imgDiv" style={styles.imgDiv}>
 //                             {/* this.state.newObject */}
 //                                 <img
 //                                     // src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+this.props.ID+".png"}
 //                                     src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+this.state.newObject.id+".png"}
 //                                     style={styles.img}
 //                                     alt=""
 //                                 />
 //                             </div>
 //                         </Link>
 //                         {/*  */}
 //                         {/* <DataLine header="ID:" content={this.props.ID}/> */}
 //                         <DataLine header="ID:" content={this.state.newObject.id}/>
 //                         {/* <DataLine header="Name:" content={this.props.name}/> */}
 //                         <DataLine header="Name:" content={this.state.newObject.name}/>
 //                         {/* <DataLine header="Type:" content={Array.from(this.props.type).map((x,i)=>(i!==0?', ':' ')+ x.type.name)}/> */}
 //                         {
 //                                 //   let alltypes=this.state.newObject.types
 //                                 //   alltypes?
 //                                 //       alltypes.map(x=>console.log(x)):
 //                                 //           null
 //                             // console.log((this.state.newObject.types))
 //                             // (this.state.newObject.types).map(x=>console.log(x))
 //                         }
 //                         <DataLine header="Type:"
 //                             content={
 //                                 this.state.newObject.types?
 //                                 (this.state.newObject.types).map((x,i)=>(i!==0?', ':' ')+ x.type.name):
 //                                 null
 //                             }
 //                             />
 //                         {/* <DataLine header="Weight:" content={this.props.weight+' kg'}/> */}
 //                         <DataLine header="Weight:" content={this.state.newObject.weight+' kg'}/>
 //                     </React.Fragment>
 //         }
 //     </div>
 // }


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,796], () => (__webpack_exec__(1773)));
module.exports = __webpack_exports__;

})();