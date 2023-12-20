import DataLine from "./DataLine"

const PokemonCardRenderLOADING=({children,fullScreen,cardHeight,abilities,height,stats,base_experience})=>{
    const styles={
        display:'grid',
        justifyItems:!fullScreen && 'center',
        width:fullScreen && '70%',
        minWidth:fullScreen && '230px',
        padding:fullScreen && '15px',
        border:fullScreen && 'solid var(--PCBorderColor) 3px',
        borderRadius:fullScreen && '20px',
        height:cardHeight?`calc(${cardHeight}*70/100)`:'auto',
        overflowY:'hidden',
    }

    return(
        <>
            {children}
            <div id="Data" style={styles}>
                <DataLine header="ID:" content="loading..."/>
                <DataLine header="Name:" content="loading..."/>
                <DataLine header="Type:" content="loading..."/>
                <DataLine header="Weight:" content="loading..."/>
                {height &&
                <DataLine header="Height:" content="loading..."/>}
                {base_experience &&
                <DataLine header="Base experience:" content="loading..."/>}
                {abilities &&
                <DataLine header="Abilities:" content="loading..."/>}
                {stats &&
                <DataLine header="Stats:" content="loading..."/>}
            </div>
        </>
    )
}

export default PokemonCardRenderLOADING