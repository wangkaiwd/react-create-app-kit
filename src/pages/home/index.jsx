import React, { Component } from 'react';
import { Button, Card } from 'antd'
import Loading from 'components/loading'
import ReactAmap from 'components/reactAmap'
import styles from './index.module.scss'
class Home extends Component {
  state = {
    zoomEnable: false,  // 这个配置会被 status 中的 zoomEnable 覆盖，请不要这样同时配置两者
    tip: '启用缩放'
  }

  toggleZoom = () => {
    const nextEnable = !this.state.zoomEnable;
    const tip = nextEnable ? '禁用缩放' : '启用缩放';
    this.setState({
      zoomEnable: nextEnable,
      tip
    });
  }
  render() {
    const { zoomEnable, tip } = this.state
    return (
      <Card hoverable className={styles.home} title="地理位置">
        <ReactAmap
          height="500px"
          zoomEnable={zoomEnable}
          zoom={20}
        />
        <Button onClick={this.toggleZoom}>{tip}</Button>
      </Card >
    )
  }
}

export default Home;