import React from "react";

export default class Menu extends React.Component{
    state={
        allTypes:[],
    }
    componentDidMount(){
        fetch('https://pokeapi.co/api/v2/generation/1/')
        .then((res)=>res.json())
        .then(({types})=>this.setState({allTypes:types}))
    }
    render(){
        const {onchangeinput,searchInputValue,pickedTypeToDisplay,clearFilters,changeSelect}=this.props
        const {allTypes}=this.state
        const styles={
            Menu:{
                position:'fixed',
                height:'var(--heightOfMenu)',
                display:'grid',
                borderRadius:'5px',
                overflow:'hidden',
                backgroundColor:'var(--pokemonCardBorderBackground)',
                width:'fit-content',
                gridAutoFlow:'column',
            },
            SearchInputComponent:{
                height:'100%',
                borderBottomLeftRadius:'5px',
                borderTopLeftRadius:'5px',
                backgroundColor:'var(--pokemonCardBorderBackground)',
                color:'black',
                border:'solid 2px var(--pokemonCardBorderColor)',
                width:'200px',
            },
            inputs:{
                height:'100%',
                width:'fit-content',
                border:'solid 2px var(--pokemonCardBorderColor)',
                backgroundColor:'var(--pokemonCardBorderBackground)',
                borderBottomRightRadius:'5px',
                borderTopRightRadius:'5px',
                color:'var(--shadow)',
            },
            X:{
                color:'var(--shadow)',
                height:'100%',
                paddingLeft:'5px',
                paddingRight:'5px',
                fontWeight:'bold',
                width:'fit-content',
                border:'solid 2px var(--pokemonCardBorderColor)',
                backgroundColor:'var(--pokemonCardBorderBackground)',
            },
        }
        return(
            <div id="Menu" style={styles.Menu}>
                <input
                    type="text" onChange={onchangeinput}
                    value={searchInputValue}
                    placeholder="Search pokemon by his name..."
                    id="SearchInputComponent"
                    style={styles.SearchInputComponent}
                />
                {
                    searchInputValue!==''||pickedTypeToDisplay!=='all' &&
                    <input type="button" value="🞮" style={styles.X} onClick={clearFilters}/>
                }
                <select style={styles.inputs} onChange={changeSelect} value={pickedTypeToDisplay}>
                    <option value="all" key="0">all</option>
                    {allTypes?.map(({name},i)=><option value={name}
                        key={i}
                        // key={i}
                    >{name}</option>)}
                </select>
            </div>
        );
    }
}