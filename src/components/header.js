import React from "react";
import '../css/style.css';


export default class ComponentHeader extends React.Component{

    constructor() {
        super();
        this.state = {
            miniHeader: false  //默认加载高的头部(非mini头部)
        }
    };

    switchHeader(){
        this.setState({
            miniHeader: !this.state.miniHeader
            });
        console.log(this.state.miniHeader)
    };

    render() {
        // 内联样式。  设置头部css样式
        const styleComponentHeader = {
            header: {
                backgroundColor: "#333333",
                color: "#FFFFFF",
                "padding-top": (this.state.miniHeader) ? "3px" : "15px",
                paddingBottom: (this.state.miniHeader) ? "3px" : "15px",
            },
            // 还可以定义其他的样式
        };

        return (
            <header style={styleComponentHeader.header} className="smallFontSize"
            onClick={this.switchHeader.bind(this)}>
                <h1>这里是头部</h1>
            </header>
        );
    }
}

