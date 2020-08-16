import { Item, Grid } from 'react-qml';

import { Provider } from 'react-redux';
import * as React from 'react';
import { Store } from 'redux';
import { MemoryHistory } from 'history';

import Counter from './components/Counter';

type AppProps = {
  store: Store,
  history: MemoryHistory,
};

const anchorsContainer = { fill: 'parent' }
const anchorsContent = { horizontalCenter : 'parent.horizontalCenter', verticalCenter: 'parent.verticalCenter' }
class App extends React.Component<AppProps> {
  componentWillMount() {
    console.log('App', 'componentWillMount');
  }

  componentDidMount() {
    console.log('App', 'componentDidMount');
  }

  componentWillUnmount() {
    console.log('App', 'componentWillUnmount');
  }

  render() {
    return (
      <Grid horizontalItemAlignment={2} verticalItemAlignment={2}>
         <Item>
          <Provider store={this.props.store}>
            <Counter />
          </Provider>
        </Item>
      </Grid>
    )
  }
}

export default App;
