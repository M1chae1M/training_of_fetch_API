import React from "react";

export default class DataLine extends React.Component{
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
                <a style={styles.bolded}>{this.props.header}</a> {this.props.content}
            </div>
        );
    }
}