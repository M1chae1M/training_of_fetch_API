import React from 'react';
import Menu from './Menu';
import PokemonCardRender from './PokemonCardRender';

export default class App extends React.Component{
    state={
        resultsOf:[],
        searchInputValue:'',
        pickedTypeToDisplay:'all',
    }
    render(){
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
            rightMenu:{
                main:{
                    position:'fixed',
                    right:'0%',
                    top:'0%',
                    width:'fit-content',
                    border:'solid var(--pokemonCardBorderColor) 3px',
                    borderBottomLeftRadius:'10px',
                    paddingLeft:'10px',
                    paddingBottom:'3px',
                    backgroundColor:'var(--pokemonCardBorderBackground)',
                    color:'var(--shadow)',
                    borderTop:'none',
                    borderRight:'none',
                    display:'flex',
                },
                header:{
                    width:'fit-content',
                    paddingRight:'5px',
                    fontSize:'0.9rem',
                },
                input:{
                    width:'45px',
                    border:'none',
                    backgroundColor:'var(--pokemonCardBorderBackground)',
                    borderRight:'none',
                    borderTop:'none',
                    color:'var(--shadow)',
                },
            }
        }
        const onchangeinput=(e)=>{
            this.setState({searchInputValue:e.target.value});
        }
        const changeSelect=(e)=>{
            this.setState({pickedTypeToDisplay:e.target.value});
        }
        const clearFilters=()=>{
            console.log('clear all filters');
            this.setState({searchInputValue:'',pickedTypeToDisplay:'all'});
        }

        var checkAllFilters=
        this.props.allFetches.filter(pokemonName=>(this.state.searchInputValue!=='')?
            pokemonName.name.slice(0,this.state.searchInputValue.length).toUpperCase()===this.state.searchInputValue.toUpperCase():
                true)
        .filter(y=>this.state.pickedTypeToDisplay!=='all'?
            (Array.from(y.type).length>1?
                (y.type[0].type.name===this.state.pickedTypeToDisplay || y.type[1].type.name===this.state.pickedTypeToDisplay):
                    y.type[0].type.name===this.state.pickedTypeToDisplay)
        :true)

        return(
                <div id='App' style={styles.App}>
                    <Menu
                        searchInputValue={this.state.searchInputValue}
                        allTypes={this.state.allTypes}
                        pickedTypeToDisplay={this.state.pickedTypeToDisplay}
                        onchangeinput={onchangeinput}
                        changeSelect={changeSelect}
                        clearFilters={clearFilters}
                    />
                    <div style={styles.rightMenu.main}>
                        <div style={styles.rightMenu.header}>Number of displayed pokemons: </div>
                        <input
                            type="number"
                            style={styles.rightMenu.input}
                            defaultValue={this.props.displayedPokemonsOnPage}
                            placeholder='Number of displayed pokemons'
                            onChange={this.props.debounce}
                        />
                    </div>
                    <div id='PokemonList' style={styles.PokemonList}>
                        {
                            this.props.allFetches !== undefined?
                                checkAllFilters.length>0?
                                    checkAllFilters
                                        .map((x,i)=>
                                            <PokemonCardRender
                                                key={i}
                                                name={x.name}
                                                type={x.type}
                                                ID={x.ID}
                                                weight={x.weight}
                                                allFetches={this.props.allFetches}
                                            />
                                        ):
                                <div style={styles.noResults}>No results...</div>:
                            <div style={styles.noResults}>No results</div>
                        }
                    </div>
                </div>
        );
    }
}