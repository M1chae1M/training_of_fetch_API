import DataLine from "./DataLine"

const PokemonCardRenderLOADING=({children,fullScreen,cardHeight})=>{
    const styles={
        Data:{
            display:'grid',
            justifyItems:!fullScreen && 'center',
            width:fullScreen && '70%',
            minWidth:fullScreen && '230px',
            padding:fullScreen && '15px',
            border:fullScreen && 'solid var(--pokemonCardBorderColor) 3px',
            borderRadius:fullScreen && '20px',
            height:cardHeight?`calc(${cardHeight}*70/100)`:'auto',
            overflowY:'hidden',
        }
    }

    return(
        <>
            {children}
            <div id="Data" style={styles.Data}>
                <DataLine header="ID:" content="loading..."/>
                <DataLine header="Name:" content="loading..."/>
                <DataLine header="Type:" content="loading..."/>
                <DataLine header="Weight:" content="loading..."/>
                <DataLine header="Height:" content="loading..."/>
                <DataLine header="Base experience:" content="loading..."/>
                <DataLine header="Abilities:" content="loading..."/>
                <DataLine header="Stats:" content="loading..."/>
            </div>
        </>
    )
}

export default PokemonCardRenderLOADING