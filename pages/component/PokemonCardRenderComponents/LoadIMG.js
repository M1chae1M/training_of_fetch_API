const LOAD_img=({loadingState,imgSRC,imgOnLoad})=>{
    const styles={
        imgDiv:{
            margin:'3px',
            border:'solid var(--PCBorderColor) 3px',
            borderRadius:'20px',
            display:'grid',
            alignItems:'center',
            width:'100px',
            height:'100px',
            display:'grid',
            justifyContent:'center',
        },
        img:{
            display:loadingState?'none':'',
            width:'100px',
            height:'100px',
        },
    }
    return(
        <div id="imgDiv" style={styles.imgDiv}>
            {
                loadingState &&
                <div>loading...</div>
            }
            <img src={imgSRC} onLoad={imgOnLoad} style={styles.img} alt=""/>
        </div>
    )
}

export default LOAD_img