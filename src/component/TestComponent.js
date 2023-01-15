import React from "react";
class TestComponent extends React.Component{
state={
wynik:[],
}
render(){
const fff=(url)=>{
fetch(url)
.then((res)=>res.json())
.then((res)=>this.setState({wynik:res}))
// .then((res)=>console.log('this.state.wynik'))
// .then((res)=>console.log(this.state.wynik))
// .then((res)=>res.filter(x=>fetch(x.url).then((rest)=>rest.json()).then((rest)=>rest.types === 'bug'? true:false)))
// .then((rest)=>console.log(this.state.wynik))
Array.from(this.state.wynik).filter(x=>fetch(x).then((rest)=>rest.json()).then((rest)=>Array.from(rest).map((x)=>x.types==='bug')).then((rest)=>this.setState
({wynik:rest})).then((res)=>console.log(this.state.wynik)))


}
return(
<div Style="position:absolute; top:60px;z-index:1300;" id="TestComponent">
{fff('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=49')}
{/* {this.state.wynik} */}1312

</div>
)}}
export default TestComponent;