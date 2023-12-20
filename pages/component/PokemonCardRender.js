import React from "react";
import DataLine from "./PokemonCardRenderComponents/DataLine";
import Link from "next/link";

export default class PokemonCardRender extends React.Component{
    state={
        loadingState:true,
    }
    render(){
        const {loadingState}=this.state
        const {cardWidth,cardHeight,fullScreen}=this.props
        const styles={
            PokemonCardRender:{
                border:'solid 1px var(--pokemonCardBorderColor)',
                fontSize:'0.9rem',
                width:cardWidth?cardWidth:'auto',
                minWidth:cardWidth?'240px':'none',
                justifyContent:'center',
                height:cardHeight?cardHeight:'200px',
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
                display:loadingState?'none':'',
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
                justifyItems:!fullScreen && 'center',
                width:fullScreen && '70%',
                minWidth:fullScreen && '230px',
                padding:fullScreen && '15px',
                border:fullScreen && 'solid var(--pokemonCardBorderColor) 3px',
                borderRadius:fullScreen && '20px',
                height:cardHeight?`calc(${cardHeight}*70/100)`:'auto',
                overflowY:'overlay',
            },
            ul:{
                listStyle:'none',
            },
            li:{
                marginLeft:'10px',
            },
        }
        return(
            <>
                    <div className="PokemonCard" style={styles.PokemonCardRender}>
                        {
                            this.state.loadingState?
                            <>
                                    <div id="imgDiv" style={styles.imgDiv}>
                                        {
                                            this.state.loadingState &&
                                            <div>loading...</div>
                                        }
                                        <img
                                            src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+this.props.ID+".png"}
                                            onLoad={()=>this.setState({loadingState:false})}
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
                                            this.props.height &&
                                            <DataLine header="Height:" content="loading..."/>
                                        }
                                        {
                                            this.props.base_experience &&
                                            <DataLine header="Base experience:" content="loading..."/>
                                        }
                                        {
                                            this.props.abilities &&
                                            <DataLine header="Abilities:" content="loading..."/>
                                        }
                                        {
                                            this.props.stats &&
                                            <DataLine header="Stats:" content="loading..."/>
                                        }
                                    </div>
                                </>:
                                    <>
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
                                                this.props.height &&
                                                    <DataLine header="Height:" content={this.props.height+' m'}/>
                                            }
                                            {
                                                this.props.base_experience &&
                                                    <DataLine header="Base experience:" content={this.props.base_experience}/>
                                            }
                                            {
                                                this.props.abilities &&
                                                    <DataLine header="Abilities:" content={
                                                        this.props.abilities.map((x,i)=>(i!==0?', ':' ')+ x.ability.name)
                                                    }/>
                                            }
                                            {
                                                this.props.stats &&
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
                                                   
                                            }
                                        </div>
                                    </>
                        }
                    </div>
            </>
        )
    }
}