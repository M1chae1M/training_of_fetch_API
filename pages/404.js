import React from "react";
import Router from "next/router";
import Countdown from "react-countdown";

export default class Error404 extends React.Component{
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
        const onComplete=()=>Router.push('/')
        const renderer=({seconds})=><span>{seconds}</span>
        const date=Date.now()+4000
        const Timer=<Countdown date={date} onComplete={onComplete} renderer={renderer}/>
        return(
            <div id="App" style={styles.App}>
                <p>Przepraszamy, ale taka strona nie istnieje!</p>
                <p>Zwróć uwagę, czy nie zrobiłeś literówki.</p>
                <p>Za {Timer} sekundy zostaniesz przekierowany na stronę główną.</p>
            </div>
        );
    }
}