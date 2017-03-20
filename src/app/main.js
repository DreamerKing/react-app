import React, {Component} from 'react';
import Login from './common/login';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

export class Main extends Component {
  render() {
    return (
      <div style={styles.container}>
        <main style={styles.main}>
          <Login loginName="学生登陆"/>
        </main>
      </div>
    )
  }
}
