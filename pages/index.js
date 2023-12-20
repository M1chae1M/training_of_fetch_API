import {Component} from 'react';
import App from './component/App';
import Pokemon from '@/classes/Pokemon';

export default class RenderAndApiURL extends Component{
    state={
        allPokemons:[],
        pageID:0,
        PageLimit:100,
        testState:false,
    }
    fetchFunction=(targ)=>{
        const {pageID}=this.state
        if(targ>0){
            const allPokemons=[];
            for(let i=pageID*targ+1;i<pageID*targ+targ+1;i++){
                const url=`https://pokeapi.co/api/v2/pokemon/${i}`;
                fetch(url)
                .then((res)=>res.json())
                .then(({id,name,types,weight})=>allPokemons.push(new Pokemon(id,name,types,weight)))
                .then((res)=>this.setState({allPokemons}))
            }
        }else{
            this.setState({allPokemons:[]})
        }
    }
    componentDidMount=()=>this.fetchFunction(this.state.PageLimit);
    render(){
        const {PageLimit,allPokemons}=this.state
        let timeoutID;
        const debounce=(e)=>{
            const {value}=e.target;
            timeoutID && clearTimeout(timeoutID);
            timeoutID=setTimeout(()=>{
                this.fetchFunction(parseInt(value));
                this.setState({PageLimit:parseInt(value)});
            },1000);
        }
        return <App PageLimit={PageLimit} allFetches={allPokemons} debounce={debounce}/>
    }
}