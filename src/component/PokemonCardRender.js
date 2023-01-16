import React from "react";

class PokemonCardRender extends React.Component{
    state={
        loadingState:true,
    }
    render(){
        const styles={
            PokemonCardRender:{
                border:'solid 1px var(--pokemonCardBorderColor)',
                fontSize:'0.9rem',
                width:'auto',
                height:'200px',
                textAlign:'center',
                padding:'7px',
                borderRadius:'5px',
                display:'grid',
                boxShadow:'var(--shadow) 2px 2px',
                justifyItems:'center',
                backgroundColor:'var(--pokemonCardBorderColor)',
                overflow:'hidden',
                background:'linear-gradient(348deg,var(--pokemonCardBorderColor) 0%,var(--pokemonCardBorderBackground) 20%)',
            },
            imgDiv:{
                height:'100px',
                margin:'3px',
                border:'solid var(--pokemonCardBorderColor) 3px',
                borderRadius:'20px',
            },
            bolded:{
                fontWeight:'bold',
            },
            img:{
                display:this.state.loadingState===true?'none':'',
            },
            fitDivWithHoverUnderline:{
                width:'fit-content',
            },
        }
        return(
            <div className="PokemonCard" style={styles.PokemonCardRender}>
                {
                    this.state.loadingState===true?
                        <React.Fragment>
                            <div id="imgDiv" style={styles.imgDiv}>
                                {
                                    this.state.loadingState === true?
                                        <div style={styles.divs}>loading...</div>:
                                            null
                                }
                                <img
                                    src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+this.props.ID+".png"}
                                    onLoad={()=>{this.setState({loadingState:false})}}
                                    style={styles.img}
                                    alt=""
                                />
                            </div>
                            <div style={styles.divs}><a href style={styles.bolded}>ID:</a> loading...</div>
                            <div style={styles.divs}><a href style={styles.bolded}>Name:</a> loading...</div>
                            <div style={styles.divs}><a href style={styles.bolded}>Type:</a> loading...</div>
                            <div style={styles.divs}><a href style={styles.bolded}>Weight:</a> loading...</div>
                            <div style={styles.divs}><a href style={styles.bolded}>Region:</a> loading...</div>
                        </React.Fragment>:
                            <React.Fragment>
                                <div id="imgDiv" style={styles.imgDiv}>
                                    <img
                                        src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+this.props.ID+".png"}
                                        style={styles.img}
                                        alt=""
                                    />
                                </div>
                                <div className="PokemonCardRenderUnderline" style={styles.fitDivWithHoverUnderline}><a href style={styles.bolded}>ID:</a> {this.props.ID}</div>
                                <div className="PokemonCardRenderUnderline" style={styles.fitDivWithHoverUnderline}><a href style={styles.bolded}>Name:</a> {this.props.name}</div>
                                <div className="PokemonCardRenderUnderline" style={styles.fitDivWithHoverUnderline}><a href style={styles.bolded}>Type:</a> 
                                    {
                                        Array.from(this.props.type).map((x,i)=>(i!==0?', ':' ')+ x.type.name)
                                    }
                                </div>
                                <div className="PokemonCardRenderUnderline" style={styles.fitDivWithHoverUnderline}><a href style={styles.bolded}>Weight:</a> {this.props.weight} kg</div>
                            </React.Fragment>
                }
            </div>
        );
    }
}

export default PokemonCardRender;