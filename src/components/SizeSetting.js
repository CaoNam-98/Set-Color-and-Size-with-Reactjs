import React, { Component } from 'react';

class SizeSetting extends Component {
    constructor(props){
        super(props);
        this.reduceSize = this.reduceSize.bind(this);
    }

    reduceSize(){
        this.props.onChangeReduceSize(this.props.fontsize - 2);
    }

    increaseSize = () => {
        this.props.onChangeIncreaseSize(this.props.fontsize + 2);
    }

    render(){ 
        return (
            <div className="panel panel-warning">
                <div className="panel-heading text">Size : {this.props.fontsize}px</div>
                <div className="panel-body">
                    <button type="button" className="btn btn-success reduce-color" onClick={ this.reduceSize }>Giảm</button>
                    <button type="button" className="btn btn-success reduce-color" onClick={ this.increaseSize }>Tăng</button>
                </div>
            </div>
        ); 
    } 
}

export default SizeSetting;