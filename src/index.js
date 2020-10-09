import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ComponentHeader from "./components/header";
import ComponentFooter from "./components/footer";
import BodyIndex from "./components/indexbody";

class Index extends React.Component{
    render() {
        var isLogin = 1;
        var component;
        if (isLogin == 0) {
            component = <ComponentHeader/>
        }
        else {
            component = <BodyIndex/>
        }
        return (
            <div>
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

