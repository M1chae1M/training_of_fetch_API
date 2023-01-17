import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/App';
import Pokemon from './component/object/Pokemon';
import './index.css';

const fetchFunction=(numberOfPage,targ, changeState)=>{
    const allFetchesInTable=[];
    if(targ>0){
        for(let i=numberOfPage*targ+1;i<=targ;i++){
            let url='https://pokeapi.co/api/v2/pokemon/'+i;
            fetch(url)
            .then((res)=>res.json())
            .then((res)=>allFetchesInTable.push(new Pokemon(res.id,res.name,res.types,res.weight)))
            .then((res)=>changeState(allFetchesInTable))
        }
    }
    else{
        changeState([]);
    }
}

class RenderAndApiURL extends React.Component{
    state={
        allFetchesInTableState:[],
        numberOfPage:0,
        displayedPokemonsOnPage:100,
        testState:false,
    }
    componentDidMount(e){
        fetchFunction(this.state.numberOfPage,this.state.displayedPokemonsOnPage,(newState)=>{this.setState({allFetchesInTableState:newState})});
    }
    render(){
        const changeFetchesState=(tab)=>{
            this.setState({allFetchesInTableState:tab});
        }

        let timeoutID;
        const debounce=(e)=>{
            if(timeoutID){clearTimeout(timeoutID)}
            timeoutID=setTimeout(()=>{
                fetchFunction(this.state.numberOfPage,parseInt(e.target.value),changeFetchesState);
                this.setState({displayedPokemonsOnPage:parseInt(e.target.value)});
            },1000);
        }
        return(
            <App
                displayedPokemonsOnPage={this.state.displayedPokemonsOnPage}
                allFetches={this.state.allFetchesInTableState}
                debounce={debounce}
            />
        );
    }
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RenderAndApiURL/>);
export default RenderAndApiURL;