import React from 'react';
import PokemonCardRender from './PokemonCardRender';
import NewMenu from './NewMenu';

class App extends React.Component{
    state={
        searchInputValue:'',
        resultsOf:[],
        pickedTypeToDisplay:'all',
        loading:true,
        testowatablica:'',
    }
    render(){
        const styles={
            App:{
                display:'grid',
                width:'80%',
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
        const onchangeinput=(e)=>{
            this.setState({searchInputValue:e.target.value})
        }
        const changeSelect=(e)=>{
            this.setState({pickedTypeToDisplay:e.target.value})
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
        <React.Fragment>
            <div id='App' style={styles.App}>
                <NewMenu
                    searchInputValue={this.state.searchInputValue}
                    onchangeinput={onchangeinput}
                    allTypes={this.state.allTypes}
                    pickedTypeToDisplay={this.state.pickedTypeToDisplay}
                    changeSelect={changeSelect}
                />
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
            </React.Fragment>
        );
    }
}

export default App;