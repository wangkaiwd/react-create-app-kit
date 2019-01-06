import React, { Component } from 'react';
import Loading from 'components/loading'
import { Map, Marker } from 'react-amap';
class ReactAmap extends Component {
  render() {
    return (
      <div style={{ height: "400px" }}>
        <Map
          loading={<Loading />}
          plugins={['ToolBar']}
          zoomEnable={false}
        />
      </div>
    );
  }
}

export default ReactAmap;