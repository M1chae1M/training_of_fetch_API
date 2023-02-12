import React from "react";
import Router from "next/router";

var startFrom=0;
export default class Error404 extends React.Component{
    state={
        startFrom:0,
    }
    componentDidMount(){
        startFrom=this.state.startFrom;
        const loop=()=>{
            if(startFrom<3){
                setTimeout(()=>{
                    console.log(3-startFrom);
                    startFrom++;
                    this.setState({startFrom:this.state.startFrom+1})
                    loop();
                },1000)
            }else if(startFrom>3){
                setTimeout(()=>{
                    Router.push('/')
                    startFrom++;
                    this.setState({startFrom:this.state.startFrom+1})
                },1000)
            }
        }
        loop()
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
        }
        return(
            <div id="App" style={styles.App}>
                <p>Przepraszamy, ale taka strona nie istnieje!</p>
                <p>Zwróć uwagę, czy nie zrobiłeś literówki.</p>
                <p>Za {3-this.state.startFrom} sekundy zostaniesz przekierowany na stronę główną.</p>
            </div>
        );
    }
}