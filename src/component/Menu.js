import React from "react";
import SearchInputComponent from "./SearchInput";

//https://pokeapi.co/api/v2/generation/1/
//https://pokeapi.co/api/v2/pokemon/1

class Menu extends React.Component{
    state={
        coloredMode:'list',
        allTypes:[],
    }
    componentDidMount(){
        fetch('https://pokeapi.co/api/v2/generation/1/')
        .then((respond)=>respond.json())
        .then((respond)=>this.setState({allTypes:respond.types}))

        if(localStorage.getItem('displayMode')){

            this.setState({coloredMode:(localStorage.getItem('displayMode'))})

                if(this.state.coloredMode === 'list'){
                    document.querySelector('#PokemonList').style="display:var(--displayModeBlock);"
                }
                else if(this.state.coloredMode === 'grid'){
                    document.querySelector('#PokemonList').style="display:var(--displayModeGrid);"
                }
                else{
                    document.querySelector('#PokemonList').style="display:var(--displayModeBlock);"
                }
        }
    }
render(){
const style={
    Menu:{
        position:'fixed',
        zIndex:'1309',
        display:'grid',
        width:'70%',
        height:'40px',
        maxHeight:'40px',
        gridTemplateColumns:'3fr 1.25fr 2fr 2fr',
        textAlign:'center',
        verticalAlign:'middle',
        lineHeight:'40px',
        boxShadow:'3px 3px rgb(98,98,98)',
        margin:'5px',
    }
}
const{searchInputValue,onchangeinput,pickedTypeToDisplay,changeSelect}=this.props;
    const changeDisplayModeToGrid=(e)=>{
        document.querySelector('#PokemonList').style="display:var(--displayModeGrid);";
        uploadToLocal('grid');
        this.setState({coloredMode:(localStorage.getItem('displayMode'))})
    }
    const changeDisplayModeToBlock=(e)=>{
        document.querySelector('#PokemonList').style="display:var(--displayModeBlock);";
        uploadToLocal('list');
        this.setState({coloredMode:(localStorage.getItem('displayMode'))})
    }
    const uploadToLocal=(displayMode)=>{
        localStorage.setItem('displayMode', displayMode)
    }
    const changeDisplayMode=()=>{
        this.setState({coloredMode:(localStorage.getItem('displayMode'))});
        if(this.state.coloredMode === 'list'){
            document.querySelector('#PokemonList').style="display:var(--displayModeBlock);";
        }
        if(this.state.coloredMode === 'grid'){
            document.querySelector('#PokemonList').style="display:var(--displayModeGrid);";
        }
    }
window.onload=changeDisplayMode;
return(
    <div id="Menu" style={style.Menu}>
        <SearchInputComponent searchInputValue={searchInputValue} onchangeinput={onchangeinput}/>
        <select onChange={changeSelect} value={pickedTypeToDisplay}>
            <option value="all" key="0">all</option>
            {Array.from(this.state.allTypes).map((y,i)=><option value={y.name} key={i}>{y.name}</option>)}
        </select>
        <input type="button" value="Kafelki" onClick={changeDisplayModeToGrid} Style={this.state.coloredMode === 'grid'?'background-color:red':''}/>
        <input type="button" value="Lista" onClick={changeDisplayModeToBlock} Style={this.state.coloredMode === 'list'?'background-color:red':''}/>
    </div>
)}}

export default Menu;