import React from 'react';
import { Provider } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import devToolsEnhancer from 'remote-redux-devtools';
import reducers from '../../reducers';
import MenuHome from '../MenuHome';

const store = createStore(reducers, devToolsEnhancer(), applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.wrapper}>
        <MenuHome />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
});

export default App;