import * as React from 'react';
import injectSheet from'react-jss';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
// import './App.css';
const styles = (theme) => ({
    loaderContainer: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top: 0,
      left: 0,
      zIndex: -1,
    },
});

const loaderContainer = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    zIndex: -1,
};


class Loader extends React.Component {
 
    
  componentDidMount() {}
  render() {
    const { classes, zIndex, top } = this.props;
    return (
      <div className = { loaderContainer } style={{
        zIndex: zIndex ? zIndex : -1,
        top: top ? top : 0 }}>
        <Spin indicator={
         < LoadingOutlined />
        } />
      </div>

    );
  }

}

// export default injectSheet(styles)(Loader);

export default Loader;