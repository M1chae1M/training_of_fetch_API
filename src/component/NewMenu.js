import React from "react";
import SearchInputComponent from "./SearchInput";

class NewMenu extends React.Component{
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
            NewMenu:{
                position:'fixed',
                height:'var(--heightOfMenu)',
                borderRadius:'5px',
                overflow:'hidden',
                backgroundColor:'var(--pokemonCardBorderBackground)',
                gridTemplateColumns:'3.65fr 1fr',
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
        }
        return(
            <div id="Menu" style={styles.NewMenu}>
                <SearchInputComponent
                    searchInputValue={this.props.searchInputValue}
                    onchangeinput={this.props.onchangeinput}
                    scrolled={this.state.scrolled}
                />
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

export default NewMenu;