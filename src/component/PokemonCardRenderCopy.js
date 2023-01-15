import React from "react";

class PokemonCardRender extends React.Component{

    state={

        showFront:true,
        sprites:'',
        mirror:false,
        pokemonType:'',
        pokemonWeight:0,
        loadingPokemon:true,
        loadingPokemonIMG:false,
        testServerAskState:[],

    }

render(){
const{pokemonName,pickedTypeToDisplay,allFetches,type}=this.props;
// let newSRC=this.state.showFront===true?this.state.sprites.front_default:this.state.sprites.back_default

    // const changePositionOfPokemon=(e)=>{

    //     this.setState({showFront:!this.state.showFront})
    //     let targetValue=(e.target.value);
    //     targetValue==="<"?this.setState({mirror:false}):this.setState({mirror:true})

    // }

// const askServerAboutThisPokemon=()=>{

//     // fetch(this.props.urlOf)
//     // .then((res)=>res.json())
//     // .then((res)=>this.setState({
//     //     id:res.id,
//     //     sprites:res.sprites,
//     //     pokemonType:res.types,
//     //     pokemonWeight:res.weight,
//     // }))
//     // .then((res)=>this.setState({loadingPokemon:false}))
//     // this.setState({loadingPokemon:false})
// }

// const testServerAsk=(url)=>{
//     fetch(this.props.urlOf)
//     // fetch(url)
//     .then((rest)=>rest.json())
//     .then((rest)=>this.setState({testServerAskState:rest}))
// }



// let allStyles='-webkit-transform: scaleX('+(this.state.mirror===true?-1:1)+');'
// let isRightType=false;

// pickedTypeToDisplay==='all'?isRightType=true:
// Array.from(this.state.pokemonType).map(x=>x.type.name === pickedTypeToDisplay?isRightType=true:null)

return(<div className='PokemonCard'
// Style={isRightType===false?'display:none;':''}
>

{/* {askServerAboutThisPokemon()} */}
{/* {testServerAsk('https://pokeapi.co/api/v2/pokemon/1') */}
{/* // testServerAsk('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100')} */}
{

    // this.state.loadingPokemon===true?<div>loading...</div>:
    // <div>
    //     <input type="button" value="<" onClick={changePositionOfPokemon}/>
    //     {this.state.loadingPokemonIMG===true?'loading...':''}
    //     {/* this.setState({loadingPokemon:false}) */}
    //     <img src={newSRC} alt="" Style={this.state.loadingPokemonIMG===true?'display:none;':allStyles} onLoad={()=>{this.setState({loadingPokemonIMG:false,loadingPokemon:false})}}/>
    //     <input type="button" value=">" onClick={changePositionOfPokemon}/>
    // </div>
    
}

{
    // this.state.loadingPokemon===true?
    // <div>
    //     <div>ID: loading...</div>
    //     <div>Name: loading...</div>
    //     <div>Type: loading...</div>
    //     <div>Weight: loading...</div>
    // </div>:
    // <div>
        
    //     {/* <div>ID: {this.state.id}</div> */}
    //     <div>ID: {this.props.key}</div>
    //     {/* <div>Name: {pokemonName[0].toUpperCase()+pokemonName.slice(1)}</div> */}
    //     <div>Name: {allFetches.name[0].toUpperCase()+pokemonName.slice(1)}</div>
        

    //     <div>Type: {
    //         <ul Style="list-style:none;">
    //         {/* {Array.from(this.state.pokemonType).map(x=><li>{x.type.name}</li>)} */}
    //         {Array.from(allFetches.type).map(x=><li>{x.type.name}</li>)}
    //         </ul>}
    //     </div>
    //     {/* <div>Weight: {this.state.pokemonWeight} kg</div> */}
    //     <div>Weight: {this.props.weight} kg</div>
    // </div>
}
</div>)}}
export default PokemonCardRender;