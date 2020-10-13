import React from "react";


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
                paddingTop: (this.state.miniHeader) ? "3px" : "15px",
                paddingBottom: (this.state.miniHeader) ? "3px" : "15px",
            },
            // 还可以定义其他的样式
        };

        return (
            <header style={styleComponentHeader.header} class="smallFontSize"
            onClick={this.switchHeader.bind(this)}>
                <h1>这里是头部</h1>
            </header>
        );
    }
}

