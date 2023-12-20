import React from 'react';
import Menu from './Menu';
import PokemonCardRender from './PokemonCardRender';
import RightMenu from './RightMenu';

export default class App extends React.Component{
    state={
        resultsOf:[],
        searchedName:'',
        showType:'all',
    }
    render(){
        const {pageLimit,debounce,allFetches}=this.props
        const {searchedName,allTypes,showType}=this.state
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
        const changeName=(e)=>this.setState({searchedName:e.target.value})
        const changeType=(e)=>this.setState({showType:e.target.value})
        const clearFilters=()=>this.setState({searchedName:'',showType:'all'})

        const checkAllFilters=allFetches
        ?.filter?.(pokemonName=>searchedName!=='' ? pokemonName.name.slice(0,searchedName.length).toUpperCase()===searchedName.toUpperCase() : true)
        ?.filter(({type})=>showType!=='all' ? type.some(({type})=>type.name===showType) : true)

        return(
            <div id='App' style={styles.App}>
                <Menu searchedName={searchedName} allTypes={allTypes} showType={showType} changeName={changeName} changeType={changeType} clearFilters={clearFilters}/>
                <RightMenu pageLimit={pageLimit} debounce={debounce}/>
                <div id='PokemonList' style={styles.PokemonList}>
                    {
                        allFetches?
                            checkAllFilters?.map(({name,type,weight,ID},i)=>
                                <PokemonCardRender key={i} fullScreen={false}
                                name={name} type={type} ID={ID} weight={weight}
                                newObject={{name,type,weight,ID}}
                                allFetches={allFetches}
                                />
                            ):
                        <div style={styles.noResults}>No results!</div>
                    }
                </div>
            </div>
        )
    }
}