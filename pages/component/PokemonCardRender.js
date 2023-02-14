import React from "react";
import DataLine from "./PokemonCardRenderComponents/DataLine";
import Link from "next/link";

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
                // height:'200px',
                height:this.props.cardHeight?this.props.cardHeight:'200px',
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
            <React.Fragment>
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
                                    {
                                        this.props.height?
                                            <DataLine header="Height:" content={"loading..."}/>
                                                :null
                                    }
                                    {
                                        this.props.base_experience?
                                            <DataLine header="Base experience:" content={"loading..."}/>
                                                :null
                                    }
                                    {
                                        this.props.abilities!==undefined?
                                            <DataLine header="Abilities:" content="loading..."/>:
                                                null
                                    }
                                    {
                                        this.props.stats!==undefined?
                                            <DataLine header="Stats:" content={"loading..."}/>:
                                                null
                                    }
                                </React.Fragment>:
                                    <React.Fragment>
                                        <Link href={`/pokemons/${this.props.name}`}>
                                            <div id="imgDiv" style={styles.imgDiv}>
                                                <img
                                                    src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+this.props.ID+".png"}
                                                    style={styles.img}
                                                    alt=""
                                                />
                                            </div>
                                        </Link>
                                        <DataLine header="ID:" content={this.props.ID}/>
                                        <DataLine header="Name:" content={this.props.name}/>
                                        <DataLine header="Type:"
                                            content={
                                                this.props.type?
                                                Array.from(this.props.type).map((x,i)=>(i!==0?', ':' ')+ x.type.name):
                                                null
                                            }
                                        />
                                        <DataLine header="Weight:" content={this.props.weight+' kg'}/>
                                        {
                                            this.props.height?
                                                <DataLine header="Height:" content={this.props.height+' m'}/>
                                                    :null
                                        }
                                        {
                                            this.props.base_experience?
                                                <DataLine header="Base experience:" content={this.props.base_experience}/>
                                                    :null
                                        }
                                        {
                                            this.props.abilities!==undefined?
                                                <DataLine header="Abilities:" content={
                                                    this.props.abilities.map((x,i)=>(i!==0?', ':' ')+ x.ability.name)
                                                }/>:
                                                    null
                                        }
                                        {
                                            this.props.stats!==undefined?
                                                <DataLine header="Stats:" content={
                                                    this.props.stats.map((x,i)=>(i!==0?', ':' ')+ x.stat.name+': '+x.base_stat)
                                                }/>:
                                                    null
                                        }
                                    </React.Fragment>
                        }
                    </div>
            </React.Fragment>
        );
    }
}