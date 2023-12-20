import {Component} from "react";
import axios from "axios";
import Link from "next/link";
import PokemonCardRender from "../component/PokemonCardRender";
import URL from '@/config/API_url.json'

export async function getStaticPaths(){
    const {data}=await axios.get(`${URL}/pokemon/?offset=0&limit=1008`)
    const {results}=data;
    const paths=results.map(({name})=>({params: {id: name}}))
    return{
        paths,
        fallback:false,
    }
}

export const getStaticProps=async({params})=>({props:{id:params.id}})

export default class Pokemon extends Component{
    state={
        pokemon_data:[],
        loadingState:false,
    }
    componentDidMount(){
        const {id}=this.props
        const newURL=`${URL}/pokemon/${id}`
        axios.get(newURL).then(({data})=>this.setState({pokemon_data:data}))
    }
    render(){
        const {pokemon_data,loadingState}=this.state
        const {id}=pokemon_data
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
                border:'solid 1px var(--PCBorderColor)',
                fontSize:'0.9rem',
                width:'fit-content',
                height:'200px',
                textAlign:'center',
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
                height:'100px',
                margin:'3px',
                border:'solid var(--PCBorderColor) 3px',
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
                <PokemonCardRender fullScreen={true} pokemon_data={pokemon_data} ID={id} cardHeight="80vh" cardWidth="50vw"/>
                <Link href={'/'}><div style={styles.backButton}>↩️</div></Link>
            </div>
        )
    }
}