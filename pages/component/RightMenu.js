import React from "react";

export default class RightMenu extends React.Component{
    state={
        showInput:false,
    }
    render(){
        const styles={
            rightMenu:{
                main:{
                    position:'fixed',
                    right:'0%',
                    top:'0%',
                    width:'fit-content',
                    // width:'auto',
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
        return(
            <div style={styles.rightMenu.main} id="RightMenu"
            onMouseEnter={()=>{this.setState({showInput:true})}}
            onMouseLeave={()=>{this.setState({showInput:false})}}
            >
                {
                    this.state.showInput===true?
                        <div style={styles.rightMenu.header} id="rightMenuHeader">Number of displayed pokemons: </div>
                            :null
                }
                <input
                    type="number"
                    style={styles.rightMenu.input}
                    defaultValue={this.props.displayedPokemonsOnPage}
                    placeholder='Number of displayed pokemons'
                    onChange={this.props.debounce}
                />
            </div>
        );
    }
}