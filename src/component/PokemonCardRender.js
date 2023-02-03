import React from "react";
import DataLine from "./PokemonCardRenderComponents/DataLine";

export default class PokemonCardRender extends React.Component{
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
                display:'grid',
                alignItems:'center',
            },
            img:{
                display:this.state.loadingState===true?'none':'',
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
                                        <div>loading...</div>:
                                            null
                                }
                                <img
                                    src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+this.props.ID+".png"}
                                    onLoad={()=>{this.setState({loadingState:false})}}
                                    style={styles.img}
                                    alt=""
                                />
                            </div>
                            <DataLine header="ID:" content="loading..."/>
                            <DataLine header="Name:" content="loading..."/>
                            <DataLine header="Type:" content="loading..."/>
                            <DataLine header="Weight:" content="loading..."/>
                        </React.Fragment>:
                            <React.Fragment>
                                <div id="imgDiv" style={styles.imgDiv}>
                                    <img
                                        src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+this.props.ID+".png"}
                                        style={styles.img}
                                        alt=""
                                    />
                                </div>
                                <DataLine header="ID:" content={this.props.ID}/>
                                <DataLine header="Name:" content={this.props.name}/>
                                <DataLine header="Type:" content={Array.from(this.props.type).map((x,i)=>(i!==0?', ':' ')+ x.type.name)}/>
                                <DataLine header="Weight:" content={this.props.weight+' kg'}/>
                            </React.Fragment>
                }
            </div>
        );
    }
}