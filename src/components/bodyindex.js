import React from "react";

export default class BodyIndex extends React.Component{
    // 构造函数
    constructor() {
        super();  //调用基类的所有初始化方法
        this.state = {username : "Parry"};
    }

    render() {

        setTimeout(()=>{
            //更改 state 的时候
            this.setState({username : "IMOOC"});
        },4000);

        //component
        return (
            <div>
                <h2>页面的主体内容</h2>
                <p>{this.state.username}</p>
            </div>
        );
    }
}
