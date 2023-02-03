import React from "react";

export default class Menu extends React.Component{
    state={
        allTypes:[],
        scrolled:0,
    }
    componentDidMount(){
        fetch('https://pokeapi.co/api/v2/generation/1/')
        .then((respond)=>respond.json())
        .then((respond)=>this.setState({allTypes:respond.types}))
    }
    render(){
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
                opacity:this.props.scrolled>0?0.4:1,
                height:'100%',
                borderBottomLeftRadius:'5px',
                borderTopLeftRadius:'5px',
                backgroundColor:'var(--pokemonCardBorderBackground)',
                color:'black',
                border:'solid 2px var(--pokemonCardBorderColor)',
                width:'200px',
            },
            inputs:{
                opacity:this.state.scrolled>0?0.4:1,
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
                opacity:this.state.scrolled>0?0.4:1,
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
                    type="text"
                    onChange={this.props.onchangeinput}
                    value={this.props.searchInputValue}
                    placeholder="Search pokemon by his name..."
                    id="SearchInputComponent"
                    style={styles.SearchInputComponent}
                />
                {
                    this.props.searchInputValue!==''||this.props.pickedTypeToDisplay!=='all'?
                        <input type="button" value="🞮" style={styles.X} onClick={this.props.clearFilters}/>:
                            null
                }
                <select style={styles.inputs} onChange={this.props.changeSelect} value={this.props.pickedTypeToDisplay}>
                    <option value="all" key="0">all</option>
                    {document.addEventListener("scroll",(e)=>{this.setState({scrolled:window.scrollY})})}
                    {
                        Array.from(this.state.allTypes).map((y,i)=>
                            <option value={y.name} key={i}>
                                {y.name}
                            </option>
                        )
                    }
                </select>
            </div>
        );
    }
}