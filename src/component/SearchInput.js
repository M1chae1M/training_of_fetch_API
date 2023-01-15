import React from "react";

class SearchInputComponent extends React.Component{
    render(){
        const styles={
            SearchInputComponent:{
                opacity:this.props.scrolled>0?0.4:1,
                height:'100%',
                borderBottomLeftRadius:'5px',
                borderTopLeftRadius:'5px',
                backgroundColor:'var(--pokemonCardBorderBackground)',
                color:'black',
                border:'solid 2px var(--pokemonCardBorderColor)',
                // width:'fit-content',
                width:'200px',
            },
        }
        return(
            <input
                type="text"
                onChange={this.props.onchangeinput}
                value={this.props.searchInputValue}
                placeholder="Search pokemon by his name..."
                id="SearchInputComponent"
                style={styles.SearchInputComponent}
            />
        );
    }
}

export default SearchInputComponent;