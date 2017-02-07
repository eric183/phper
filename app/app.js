import React from 'react';
import ReactDom from 'react-dom';


/*const john = (
    <div>
        <h1> 你好， 我是新人 </h1>
        <h2>现在的时间是{new Date().toLocaleTimeString()}</h2>
    </div>
);*/

/*class John extends React.Component {
    render() {
        return (
            <div>
                <h1>新人我来！</h1>
            </div>
        )
    }
};*/

// function John(props) {
//     return <h1>我是{props.name}</h1>
// };

/*class Home extends React.Component {
    render() {
        return (<div><p>你好啊</p></div>)
    }
};

class John extends React.Component {
    render() {
        return (
            <div>
                <h1>i am your {this.props.name}</h1>
                <Home />
            </div>
        )
    }
};*/

var John = React.createClass({
    render() {
        return <h1>你好啊</h1>
    }
})

ReactDom.render(
    <John name="daddy" />,
    document.querySelector('#container')
);

