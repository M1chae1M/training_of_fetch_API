import React from 'react';
import ReactDOM from 'react-dom/client';
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
      let allFetchesInTable=[];
      for(let i=numberOfPage*targ+1;i<numberOfPage*targ+targ+1;i++){
        let url="https://pokeapi.co/api/v2/pokemon/"+i;
        fetch(url)
          .then((res)=>res.json())
          .then((res)=>{
            allFetchesInTable.push(new Pokemon(res.id, res.name, res.types, res.weight));
            return allFetchesInTable;
          })
          .then((allFetchesInTable)=>changeState(allFetchesInTable));
      }
    } else {
      changeState([]);
    }
};

export default class RenderAndApiURL extends React.Component{
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
            <React.Fragment>
                {/* {console.log(this.props.pageProps)} */}
                {/* {console.log(this.props.data)} */}
                <App
                displayedPokemonsOnPage={this.state.displayedPokemonsOnPage}
                allFetches={this.state.allFetchesInTableState}
                debounce={debounce}
            />
            </React.Fragment>
      
        );
    }
}