import React from "react";

export default class RightMenu extends React.Component{
    state={
        showInput:false,
    }
    render(){
        const {displayedPokemonsOnPage,debounce}=this.props
        const {showInput}=this.state
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
        const onMouseEnter=()=>this.setState({showInput:true})
        const onMouseLeave=()=>this.setState({showInput:false})
        return(
            <div style={styles.rightMenu.main} id="RightMenu" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                {
                    showInput &&
                    <div style={styles.rightMenu.header} id="rightMenuHeader">Number of displayed pokemons: </div>
                }
                <input
                    type="number"
                    style={styles.rightMenu.input}
                    defaultValue={displayedPokemonsOnPage}
                    placeholder='Number of displayed pokemons'
                    onChange={debounce}
                />
            </div>
        )
    }
}