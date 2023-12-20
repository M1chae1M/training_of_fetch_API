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
        const {changeName,searchedName,showType,clearFilters,changeType}=this.props
        const {allTypes}=this.state
        const styles={
            Menu:{
                position:'fixed',
                height:'var(--heightOfMenu)',
                display:'grid',
                borderRadius:'5px',
                overflow:'hidden',
                backgroundColor:'var(--PCBorderBackground)',
                width:'fit-content',
                gridAutoFlow:'column',
            },
            SearchInputComponent:{
                height:'100%',
                borderBottomLeftRadius:'5px',
                borderTopLeftRadius:'5px',
                backgroundColor:'var(--PCBorderBackground)',
                color:'black',
                border:'solid 2px var(--PCBorderColor)',
                width:'200px',
            },
            inputs:{
                height:'100%',
                width:'fit-content',
                border:'solid 2px var(--PCBorderColor)',
                backgroundColor:'var(--PCBorderBackground)',
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
                border:'solid 2px var(--PCBorderColor)',
                backgroundColor:'var(--PCBorderBackground)',
            },
        }
        return(
            <div id="Menu" style={styles.Menu}>
                <input
                    type="text"
                    onChange={changeName}
                    value={searchedName}
                    placeholder="Search pokemon by his name..."
                    id="SearchInputComponent"
                    style={styles.SearchInputComponent}
                />
                {
                    searchedName!==''||showType!=='all' &&
                    <input type="button" value="🞮" style={styles.X} onClick={clearFilters}/>
                }
                <select style={styles.inputs} onChange={changeType} value={showType}>
                    <option value="all" key="0">all</option>
                    {allTypes?.map(({name},i)=><option value={name} key={i}>{name}</option>)}
                </select>
            </div>
        );
    }
}