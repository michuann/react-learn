import React from "react";

export default class BodyIndex extends React.Component{

    componentWillMount() {
        //定义你的逻辑即可
        console.log("BodyIndex - componentWillMount");
    }

    componentDidMount() {
        console.log("BodyIndex - componentDidMount");
    }

    render() {
        var userName = 'Parry';
        var boolInput = false;

        var html = 'IMOOC&nbsp;LESSON';

        //有用户名显示用户名，没用户提示未登录

        return (
            <div>
                <h2>页面的主体内容</h2>
                <p>{userName=='' ? '用户还未登录' : '用户名：' + userName}</p>
                <p><input type='button' value='默认按钮' disabled={boolInput}/></p>
                {/*// //*/}
                <p>{html}</p>{/*需要进行 Unicode 的转码*/}
                <p dangerouslySetInnerHTML={{__html: html}}></p>
            </div>
        );
    }
}

