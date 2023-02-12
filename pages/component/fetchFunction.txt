// import Pokemon from "./object/Pokemon";

// const fetchFunction=(numberOfPage,targ,changeState)=>{
//     const allFetchesInTable=[];
//     if(targ>0){
//         for(let i=numberOfPage*targ+1;i<=targ;i++){
//             let url='https://pokeapi.co/api/v2/pokemon/'+i;
//             fetch(url)
//             .then((res)=>res.json())
//             .then((res)=>allFetchesInTable.push(new Pokemon(res.id,res.name,res.types,res.weight)))
//             .then((res)=>changeState(allFetchesInTable))
//         }
//     }
//     else{
//         changeState([]);
//     }
// }

// export default fetchFunction;

import Pokemon from "./object/Pokemon";

const fetchFunction = (numberOfPage, targ, changeState) => {
  if (targ > 0) {
    let allFetchesInTable = [];
    for (let i = numberOfPage * targ + 1; i < numberOfPage * targ + targ + 1; i++) {
      let url = "https://pokeapi.co/api/v2/pokemon/" + i;
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          allFetchesInTable.push(new Pokemon(res.id, res.name, res.types, res.weight));
          return allFetchesInTable;
        })
        .then((allFetchesInTable) => changeState(allFetchesInTable));
    }
  } else {
    changeState([]);
  }
};

export default fetchFunction;
