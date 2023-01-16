import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/App';
import Pokemon from './component/object/Pokemon';
import './index.css';

class RenderAndApiURL extends React.Component{
    state={
        numberOfPage:0,
        allFetchesInTableState:[],
        displayedPokemonsOnPage:100,
    }
    componentDidMount(){
        const allFetchesInTable=[];
        for(let i=this.state.numberOfPage*this.state.displayedPokemonsOnPage+1;i<=this.state.displayedPokemonsOnPage;i++){
            let url='https://pokeapi.co/api/v2/pokemon/'+i
            fetch(url)
            .then((res)=>res.json())
            .then((res)=>allFetchesInTable.push(new Pokemon(res.id,res.name,res.types,res.weight)))
            .then((res)=>this.setState({allFetchesInTableState:allFetchesInTable}))
        }
    }
    render(){
        const fetchFunction=(targ)=>{
            const allFetchesInTable=[];
            if(targ>0){
                for(let i=this.state.numberOfPage*targ+1;i<=targ;i++){
                    let url='https://pokeapi.co/api/v2/pokemon/'+i
                    fetch(url)
                    .then((res)=>res.json())
                    .then((res)=>allFetchesInTable.push(new Pokemon(res.id,res.name,res.types,res.weight)))
                    .then((res)=>this.setState({allFetchesInTableState:allFetchesInTable}))
                }
            }
            else{
                this.setState({allFetchesInTableState:[]});
            }
        }

        let timeoutID;
        const debounce=(e)=>{
            if(timeoutID){clearTimeout(timeoutID)}
            timeoutID=setTimeout(()=>{
                fetchFunction(parseInt(e.target.value));
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