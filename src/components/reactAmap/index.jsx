import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from 'components/loading';
import { Map, Marker } from 'react-amap';
class ReactAmap extends Component {
  render() {
    const { zoomEnable, zoom, plugins, width, height } = this.props
    return (
      <div style={{ width, height }}>
        <Map
          loading={<Loading />}
          plugins={plugins}
          zoomEnable={zoomEnable}
          zoom={zoom}
        />
      </div>
    );
  }
}
ReactAmap.defaultProps = {
  zoomEnable: true,
  zoom: 5,
  plugins: ['ToolBar'],
  width: '100%',
  height: '600px'
}
ReactAmap.propTypes = {
  zoomEnable: PropTypes.bool,
  zoom: PropTypes.number,
  plugins: PropTypes.array,
  width: PropTypes.string,
  height: PropTypes.string
}
export default ReactAmap;