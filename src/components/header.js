import React from "react";
import '../css/style.css';


export default class ComponentHeader extends React.Component{

    render() {
        // 内联样式。  设置头部css样式
        const styleComponentHeader = {
            header: {
                backgroundColor: "#333333",
                color: "#FFFFFF",
                "padding-top": "15px",
                paddingBottom: "15px",
            },
            // 还可以定义其他的样式
        };

        return (
            <header style={styleComponentHeader.header} className="smallFontSize">
                <h1>这里是头部</h1>
            </header>
        );
    }
}

