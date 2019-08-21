import React, { Component } from 'react';
import { createHashHistory } from 'history';
import { Button } from 'antd';
import { observer, inject } from "mobx-react"

@inject("TestStore") @observer
class Detaile extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        // const { TestStore } = this.props;
    }
    render() {
        return (
            <div>
                <Button>Detail</Button>
                <a href="javasript:viod(0)" onClick={() => {
                    const history = createHashHistory();
                    history.push('/');
                }}>去home</a>
            </div>
        )
    }
}
export default Detaile