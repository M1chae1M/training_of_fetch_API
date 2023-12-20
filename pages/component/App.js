import React from 'react';
import Menu from './Menu';
import PokemonCardRender from './PokemonCardRender';
import RightMenu from './RightMenu';

export default class App extends React.Component{
    state={
        resultsOf:[],
        searchInputValue:'',
        pickedTypeToDisplay:'all',
    }
    render(){
        const {displayedPokemonsOnPage,debounce,allFetches}=this.props
        const {searchInputValue,allTypes,pickedTypeToDisplay}=this.state
        const styles={
            App:{
                display:'grid',
                width:'100%',
                height:'100%',
                position:'relative',
                justifyItems:'center',
                paddingBottom:'5px',
            },
            PokemonList:{
                padding:'5px',
                borderRadius:'5px',
                display:'grid',
                gridTemplateColumns:'repeat(4, 1fr)',
                backgroundColor:'grey',
                marginTop:'var(--heightOfMenu)',
                gap:'5px',
                gridTemplateRows:'auto',
                boxShadow:'var(--shadow) 3px 3px',
                gridAutoRows:'1fr',
            },
            noResults:{
                color:'var(--shadow)',
                fontSize:'1.5rem',
            },
        }
        const onchangeinput=(e)=>this.setState({searchInputValue:e.target.value})
        const changeSelect=(e)=>this.setState({pickedTypeToDisplay:e.target.value})
        const clearFilters=()=>this.setState({searchInputValue:'',pickedTypeToDisplay:'all'})

        var checkAllFilters=
       allFetches?.filter?.(pokemonName=>(searchInputValue!=='')?
            pokemonName.name.slice(0,searchInputValue.length).toUpperCase()===searchInputValue.toUpperCase():
                true)
        .filter(y=>pickedTypeToDisplay!=='all'?
            (Array.from(y.type).length>1?
                (y.type[0].type.name===pickedTypeToDisplay || y.type[1].type.name===pickedTypeToDisplay):
                    y.type[0].type.name===pickedTypeToDisplay)
        :true)

        return(
            <div id='App' style={styles.App}>
                <Menu
                    searchInputValue={searchInputValue}
                    allTypes={allTypes}
                    pickedTypeToDisplay={pickedTypeToDisplay}
                    onchangeinput={onchangeinput}
                    changeSelect={changeSelect}
                    clearFilters={clearFilters}
                />
                <RightMenu displayedPokemonsOnPage={displayedPokemonsOnPage} debounce={debounce}/>
                <div id='PokemonList' style={styles.PokemonList}>
                    {
                        allFetches?
                                checkAllFilters?.map(({name,type,weight,ID})=>
                                    <PokemonCardRender
                                        key={name}
                                        fullScreen={false}
                                        name={name}
                                        type={type}
                                        ID={ID}
                                        weight={weight}
                                        allFetches={allFetches}
                                    />
                                ):
                        <div style={styles.noResults}>No results!</div>
                    }
                </div>
            </div>
        );
    }
}