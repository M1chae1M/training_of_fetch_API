import React from 'react';
import App from './component/App';
import Pokemon from '@/classes/Pokemon';

export default class RenderAndApiURL extends React.Component{
    state={
        allFetchesInTableState:[],
        numberOfPage:0,
        displayedPokemonsOnPage:100,
        testState:false,
    }
    fetchFunction=(targ)=>{
        const {numberOfPage}=this.state
        if(targ>0){
            const allFetchesInTable=[];
            for(let i=numberOfPage*targ+1;i<numberOfPage*targ+targ+1;i++){
                const url=`https://pokeapi.co/api/v2/pokemon/${i}`;
                fetch(url)
                .then((res)=>res.json())
                .then(({id,name,types,weight})=>allFetchesInTable.push(new Pokemon(id,name,types,weight)))
                .then((res)=>this.setState({allFetchesInTableState:allFetchesInTable}))
            }
        }else{
            this.setState({allFetchesInTableState:[]})
        }
    }
    componentDidMount(){
        this.fetchFunction(this.state.displayedPokemonsOnPage);
    }
    render(){
        const {displayedPokemonsOnPage,allFetchesInTableState,numberOfPage}=this.state
        let timeoutID;
        const debounce=(e)=>{
            const {value}=e.target;
            timeoutID && clearTimeout(timeoutID);
            timeoutID=setTimeout(()=>{
                this.fetchFunction(parseInt(value));
                this.setState({displayedPokemonsOnPage:parseInt(value)});
            },1000);
        }
        return(
            <App displayedPokemonsOnPage={displayedPokemonsOnPage} allFetches={allFetchesInTableState} debounce={debounce}/>
        )
    }
}