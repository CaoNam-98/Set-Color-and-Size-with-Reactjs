import React, { Component } from 'react';


class Result extends Component {
    onTextColor(){
        return {
            color: this.props.textColor,
            fontSize: this.props.fontsize,
        };
    }

    render(){ 
        return (
            <div>
                <div className="row meomeo">
                    <div className="col-md-12">
                        <span>Color : {this.props.color} - Fontsize : {this.props.fontsize}px</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-body style-text">
                                <span style={ this.onTextColor() }>Nội dung setting</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ); 
    } 
}

export default Result;
