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
        // displayedPokemonsOnPage:300,
        // displayedPokemonsOnPage:5,
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
        return(
                <App
                    displayedPokemonsOnPage={this.state.displayedPokemonsOnPage}
                    allFetches={this.state.allFetchesInTableState}
                />
        );
    }
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RenderAndApiURL/>);
export default RenderAndApiURL;