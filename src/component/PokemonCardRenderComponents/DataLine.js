import React from "react";

class DataLine extends React.Component{
    render(){
        const styles={
            DataLine:{
                width:'fit-content',
            },
            bolded:{
                fontWeight:'bold',
            },
        }
        return(
            <div className="DataLine" style={styles.DataLine}>
                <a href style={styles.bolded}>{this.props.header}</a> {this.props.content}
            </div>
        );
    }
}

export default DataLine;