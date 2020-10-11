import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            color: 'red',
            fontsize: 14,
        };
        this.onSetColor = this.onSetColor.bind(this); 
        this.onSetFontSize = this.onSetFontSize.bind(this);       
    }

    onSetColor(params) {
        this.setState({
            color : params
        });
    }

    onSetFontSize(params) {
        if(params >= 8 && params <= 36){
            this.setState({
                fontsize: params
            })
        }
    }

    onChangeReset = (color, fontsize) => {
        this.setState({
            color: color,
            fontsize: fontsize,
        })
    }

    render(){ 
        return (
            <div>
                <div className="container">
                    <div className="row description">
                        <ColorPicker color={this.state.color} onReceiveColor={ this.onSetColor }/>

                        <div className="col-md-6">
                            <SizeSetting fontsize={this.state.fontsize} onChangeReduceSize={ this.onSetFontSize } onChangeIncreaseSize={ this.onSetFontSize }/>
                            <Reset onReceiveReset={ this.onChangeReset }/>
                        </div>
                    </div>
                    <Result textColor={this.state.color} fontsize={this.state.fontsize} color={this.state.color}/>
                </div>
            </div>
        ); 
    } 
}

export default App;
