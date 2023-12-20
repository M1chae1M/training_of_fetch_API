import React from "react";
import DataLine from "./PokemonCardRenderComponents/DataLine";
import Link from "next/link";

export default class PokemonCardRender extends React.Component{
    state={
        loadingState:true,
    }
    render(){
        const {loadingState}=this.state
        const {cardWidth,cardHeight,fullScreen,height,base_experience,abilities,stats,ID,name,type}=this.props
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
                            loadingState?
                            <>
                                    <div id="imgDiv" style={styles.imgDiv}>
                                        {
                                            loadingState &&
                                            <div>loading...</div>
                                        }
                                        <img
                                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ID}.png`}
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
                                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ID}.png`}
                                                    style={styles.img}
                                                    alt=""
                                                />
                                            </div>
                                        </Link>
                                        <div id="Data" style={styles.Data}>
                                            <DataLine header="ID:" content={ID}/>
                                            <DataLine header="Name:" content={name}/>
                                            <DataLine header="Type:" content={type?.map((x,i)=>(i!==0?', ':' ')+ x.type.name)}/>
                                            <DataLine header="Weight:" content={this.props.weight+' kg'}/>
                                            {
                                                height &&
                                                    <DataLine header="Height:" content={height+' m'}/>
                                            }
                                            {
                                                base_experience &&
                                                    <DataLine header="Base experience:" content={base_experience}/>
                                            }
                                            {
                                                abilities &&
                                                    <DataLine header="Abilities:" content={abilities?.map((x,i)=>(i!==0?', ':' ')+ x.ability.name)}/>
                                            }
                                            {
                                                stats &&
                                                        <div id="Stats" style={styles.Stats}>
                                                            <a href style={styles.bolded}>Stats:</a>
                                                            <ul style={styles.ul}>
                                                                {
                                                                    stats.map((x,i)=>
                                                                        <li style={styles.li} key={x.stat.name}>
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