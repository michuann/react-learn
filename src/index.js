import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ComponentHeader from "./components/header";
import ComponentFooter from "./components/footer";
import BodyIndex from "./components/bodyindex";
import 'antd/dist/antd.css';

class Index extends React.Component{

    componentWillMount() {
        //定义你的逻辑即可
        console.log("Index - componentWillMount");
    }

    componentDidMount() {
        console.log("Index - componentDidMount");
    }

    render() {
        var isLogin = 1;
        var component;
        if (isLogin == 0) {
            component = <ComponentHeader/>
        }
        else {
            component = <BodyIndex userid={123456} username={'nick'}/>
        }
        return (
            <div>
                <ComponentHeader/>
                {component}
                <ComponentFooter/>
            </div>
        );
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('example')
);

