import React from 'react';
import App from './component/App';

class Pokemon{
    constructor(ID, name, type, weight){
       this.ID=ID
       this.name=name
       this.type=type
       this.weight=weight
   }
}

const fetchFunction=(numberOfPage, targ, changeState)=>{
    if(targ>0){
        const allFetchesInTable=[];
        for(let i=numberOfPage*targ+1;i<numberOfPage*targ+targ+1;i++){
            const url=`https://pokeapi.co/api/v2/pokemon/${i}`;
            fetch(url)
            .then((res)=>res.json())
            .then(({id,name,types,weight})=>allFetchesInTable.push(new Pokemon(id,name,types,weight)))
            .then((res)=>changeState(allFetchesInTable))
        }
    }else{changeState([])}
}

export default class RenderAndApiURL extends React.Component{
    state={
        allFetchesInTableState:[],
        numberOfPage:0,
        displayedPokemonsOnPage:100,
        testState:false,
    }
    componentDidMount(e){
        fetchFunction(this.state.numberOfPage,this.state.displayedPokemonsOnPage,(newState)=>this.setState({allFetchesInTableState:newState}));
    }
    render(){
        const {displayedPokemonsOnPage,allFetchesInTableState,numberOfPage}=this.state
        const changeFetchesState=(tab)=>this.setState({allFetchesInTableState:tab})
        let timeoutID;
        const debounce=(e)=>{
            const {value}=e.target
            if(timeoutID){clearTimeout(timeoutID)}
            timeoutID=setTimeout(()=>{
                fetchFunction(numberOfPage,parseInt(value),changeFetchesState);
                this.setState({displayedPokemonsOnPage:parseInt(value)});
            },1000);
        }
        return(
            <App
                displayedPokemonsOnPage={displayedPokemonsOnPage}
                allFetches={allFetchesInTableState}
                debounce={debounce}
            />
        )
    }
}