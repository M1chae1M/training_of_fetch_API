const styles={
    DataLine:{
        width:'fit-content',
    },
    bolded:{
        fontWeight:'bold',
    },
}
const DataLine=({header,content})=>(
    <div className="DataLine" style={styles.DataLine}>
        <a style={styles.bolded}>{header}</a> {content}
    </div>
)

export default DataLine