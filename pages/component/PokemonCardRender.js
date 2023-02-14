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
                width:this.props.cardWidth?this.props.cardWidth:'auto',
                height:this.props.cardHeight?this.props.cardHeight:'200px',
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
                margin:'3px',
                border:'solid var(--pokemonCardBorderColor) 3px',
                borderRadius:'20px',
                display:'grid',
                alignItems:'center',
                width:'100px',
                height:'100px',
            },
            img:{
                display:this.state.loadingState===true?'none':'',
                width:'100px',
                height:'100px',
            },
            bolded:{
                fontWeight:'bold',
            },
            Stats:{
                display:'grid',
                justifyItems:'start',
                width:'100%',
            },
            Data:{
                display:'grid',
                justifyItems:this.props.fullScreen===false?'center':null,
                width:this.props.fullScreen===true?'50%':null,
                padding:this.props.fullScreen===true?'15px':null,
                border:this.props.fullScreen===true?'solid var(--pokemonCardBorderColor) 3px':null,
                borderRadius:this.props.fullScreen===true?'20px':null,
                height:this.props.cardHeight?`calc(${this.props.cardHeight}*70/100)`:'auto',
            },
            ul:{
                listStyle:'none',
            },
            li:{
                marginLeft:'10px',
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
                                    <div id="Data" style={styles.Data}>
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
                                    </div>
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
                                        <div id="Data" style={styles.Data}>
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
                                                        <div id="Stats" style={styles.Stats}>
                                                            <a href style={styles.bolded}>Stats:</a>
                                                            <ul style={styles.ul}>
                                                                {
                                                                    this.props.stats.map((x,i)=>
                                                                        <li style={styles.li}>
                                                                        <DataLine header={x.stat.name+":"} content={x.base_stat}/>
                                                                        </li>
                                                                    )
                                                                }
                                                            </ul>
                                                        </div>
                                                    :
                                                        null
                                            }
                                        </div>
                                    </React.Fragment>
                        }
                    </div>
            </React.Fragment>
        );
    }
}