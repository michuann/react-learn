import React from "react";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import BodyChild from "./bodychild";

import ReactMixin from 'react-mixin';
import MixinLog from "./mixins";

const defaultProps = {
    username: '这是一个默认的用户名'
}

export default class BodyIndex extends React.Component{
    // 构造函数
    constructor() {
        super();  //调用基类的所有初始化方法
        this.state = {
            username : "Parry",
            age : 20
        }; // 初始化赋值
    };

    changeUserInfo(age) {
        this.setState({age : age});
        // 第一种方式
        // var mySubmitButton = document.getElementById("submitButton");
        // console.log(mySubmitButton);
        // ReactDOM.findDOMNode(mySubmitButton).style.color = 'red';

        // 第二种方式
        console.log(this.refs.submitButton);
        ReactDOM.findDOMNode(this.refs.submitButton).style.color = 'red';
        MixinLog.log()
    };

    handleChildValueChange(event) {
        this.setState({age : event.target.value});
    };

    render() {
        // setTimeout(()=>{
        //     //更改 state 的时候
        //     this.setState({username : "IMOOC", age : 30});
        // },4000);
        //component
        return (
            <div>
                <h2>页面的主体内容</h2>
                <p>接收父页面的属性：userid: {this.props.userid} username: {this.props.username}</p>
                <p>age: {this.state.age}</p>
                <input id='submitButton' ref='submitButton' type='button' value='提交' onClick={this.changeUserInfo.bind(this, 99)}/>
                <BodyChild {...this.props} id={4} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
            </div>
        )
    }
}



BodyIndex.propTypes = {
    userid: PropTypes.number.isRequired //必须的参数，且必须为数字
};
BodyIndex.defaultProps = defaultProps

ReactMixin(BodyIndex.propTypes, MixinLog)
