import React, { Component } from 'react';


class ColorPicker extends Component {
    onShowColor(color){
         return {
            width: 50,
            height: 50,
            backgroundColor: color, // C viết hoa
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 7,
            paddingBottom: 10,
            marginLeft: 10,
        } 
    }
    
    onCheckSquare(color){
        this.props.onReceiveColor(color);
    }

    render(){ 
        var ArrColor = ['red', 'green', 'pink', '#ccc'];

        var elementColor = ArrColor.map((color, index) => {
            return <span key={index} style={this.onShowColor(color)} onClick={() => this.onCheckSquare(color)} className={this.props.color === color ? 'active' : ''}></span>
        });

        return (
            <div className="col-md-6">
                <div className="panel panel-primary">
                    <div className="panel-heading">Color Picker</div>
                    <div className="panel-body">
                        {elementColor}
                        <hr align="center" width="98%" />
                    </div>
                </div>
            </div>
        ); 
    } 
}

export default ColorPicker;
