import React from "react";
import axios from "axios";
import Link from "next/link";
import PokemonCardRender from "../component/PokemonCardRender";

export async function getStaticPaths(){
    const {data}=await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1008')
    const {results}=data;
    const paths=results.map(({name})=>({params: {id: name}}))
    return{
        paths,
        fallback:false,
    }
}

export const getStaticProps=async({params})=>({props:{id:params.id}})

export default class Pokemon extends React.Component{
    state={
        newObject:[],
        loadingState:false,
    }
    componentDidMount(){
        const {id}=this.props
        const newURL=`https://pokeapi.co/api/v2/pokemon/${id}`
        axios.get(newURL).then(({data})=>this.setState({newObject:data}))
    }
    render(){
        const {newObject,loadingState}=this.state
        const {name,types,id,weight,abilities,height,stats,base_experience}=newObject
        const styles={
            App:{
                width:'100vw',
                height:'100vh',
                position:'relative',
                display:'grid',
                justifyItems:'center',
                alignItems:'center',
                alignContent:'center',
            },
            PokemonCardRender:{
                border:'solid 1px var(--pokemonCardBorderColor)',
                fontSize:'0.9rem',
                width:'fit-content',
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
                display:loadingState?'none':'',
            },
            backButton:{
                position:'absolute',
                top:'0%',
                right:'0%',
            }
        }
        return(
            <div id="App" style={styles.App}>
                <PokemonCardRender
                    fullScreen={true}
                    name={name}
                    type={types}
                    ID={id}
                    weight={weight}
                    cardHeight="80vh"
                    cardWidth="50vw"
                    abilities={abilities}
                    height={height}
                    stats={stats}
                    base_experience={base_experience}
                />
                <Link href={'/'}><div style={styles.backButton}>↩️</div></Link>
            </div>
        )
    }
}