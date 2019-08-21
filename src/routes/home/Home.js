import React, { Component } from 'react';
import { createHashHistory } from 'history';
import { Button } from 'antd';
import { observer, inject } from "mobx-react"
import { action } from "mobx"

@inject("TestStore") @observer
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    @action
    componentDidMount() {
        console.log(this.props)
        const { TestStore } = this.props;
        TestStore.changeData([1, 2, 3])
    }
    render() {
        return (
            <div>
                <Button>Home</Button>
                <a href="javasript:viod(0)" onClick={() => {
                    const history = createHashHistory();
                    history.push('/detail');
                }}>去detail</a>
            </div>
        )
    }
}
export default Home
