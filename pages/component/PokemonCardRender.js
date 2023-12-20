import React from "react";
import DataLine from "./PokemonCardRenderComponents/DataLine";
import Link from "next/link";
import LOAD_img from "./PokemonCardRenderComponents/LoadIMG";
import PokemonCardRenderLOADING from "./PokemonCardRenderComponents/PokemonCardRenderLOADING";

export default class PokemonCardRender extends React.Component{
    state={
        loadingState:true,
    }
    render(){
        const {loadingState}=this.state
        const {cardWidth,cardHeight,fullScreen,height,base_experience,abilities,stats,ID,name,type,weight}=this.props
        const styles={
            PokemonCardRender:{
                border:'solid 1px var(--PCBorderColor)',
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
                backgroundColor:'var(--PCBorderColor)',
                overflow:'hidden',
                background:'linear-gradient(348deg,var(--PCBorderColor) 0%,var(--PCBorderBackground) 20%)',
            },
            imgDiv:{
                margin:'3px',
                border:'solid var(--PCBorderColor) 3px',
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
                border:fullScreen && 'solid var(--PCBorderColor) 3px',
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
        const imgSRC=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ID}.png`
        const imgOnLoad=()=>this.setState({loadingState:false})
        return(
            <div className="PokemonCard" style={styles.PokemonCardRender}>
                {
                    loadingState?
                        <PokemonCardRenderLOADING fullScreen={fullScreen} cardHeight={cardHeight}>
                            <LOAD_img loadingState={loadingState} imgSRC={imgSRC} imgOnLoad={imgOnLoad}/>
                        </PokemonCardRenderLOADING>:
                    <>
                        <Link href={`/pokemons/${this.props.name}`}>
                            <div id="imgDiv" style={styles.imgDiv}>
                                <img src={imgSRC} style={styles.img} alt=""/>
                            </div>
                        </Link>
                        <div id="Data" style={styles.Data}>
                            <DataLine header="ID:" content={ID}/>
                            <DataLine header="Name:" content={name}/>
                            <DataLine header="Type:" content={type?.map((x,i)=>(i!==0?', ':' ')+ x.type.name)}/>
                            <DataLine header="Weight:" content={weight+' kg'}/>
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
                                    <a style={styles.bolded}>Stats:</a>
                                    <ul style={styles.ul}>
                                        {
                                            stats.map(({stat,base_stat},i)=>
                                                <li style={styles.li} key={i}>
                                                    <DataLine header={stat.name+":"} content={base_stat}/>
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
        )
    }
}