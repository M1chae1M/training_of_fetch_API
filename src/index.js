import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/App';
import fetchFunction from './component/fetchFunction';
import './index.css';

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