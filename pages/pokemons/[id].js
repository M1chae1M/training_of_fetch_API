import React from "react";
import axios from "axios";
import Link from "next/link";
import DataLine from "../component/PokemonCardRenderComponents/DataLine";
import PokemonCardRender from "../component/PokemonCardRender";

export async function getStaticPaths(){
    const {data}=await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1008')
    // const {data}=await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100')
    // const {data}=await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10')
    const {results}= data;
    const name= results.map(({name})=>({name}));
    const paths = name.map(({name}) => ({params: {id: name}}));
    return {
        paths,
        fallback: false,
    }
}
  
export async function getStaticProps({params}){
return {
    props:{params},
}
}

export default class Pokemon extends React.Component{
    state={
        newObject:[],
        loadingState:false,
    }
    componentDidMount(){
        let newURL=`https://pokeapi.co/api/v2/pokemon/${this.props.params.id}`
        axios.get(newURL)
        .then(res=>{return res.data})
        .then(res=>this.setState({newObject:res}))
    }
    render(){
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
                // width:'auto',
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
                display:this.state.loadingState===true?'none':'',
            },
            backButton:{
                position:'absolute',
                top:'0%',
                right:'0%',
            }
        }
        return(
            <React.Fragment>
                <div id="App" style={styles.App}>
                    {console.log(this.state.newObject)}
                    <PokemonCardRender
                        name={this.state.newObject.name}
                        type={this.state.newObject.types}
                        ID={this.state.newObject.id}
                        weight={this.state.newObject.weight}
                        cardHeight="400px"

                        abilities={this.state.newObject.abilities}


                        height={this.state.newObject.height}
                        stats={this.state.newObject.stats}
                        base_experience={this.state.newObject.base_experience}
                    />
                    <Link href={'/'}><div style={styles.backButton}>↩️</div></Link>
                </div>
            </React.Fragment>
        );
    }
}