import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import { Header } from './components/common'
import LibraryList from './components/LibraryList'

const App = () => {
  const { textStyle } = styles
  return (
    <Provider store={createStore(reducers)}>
      <View style={{flex:1}}>
        <Header headerText='Tech Stack⌛' />
        <LibraryList/>
      </View>   
    </Provider>
  )
 }

const styles = {
  containerStyle: {
  marginTop: 12,
  marginLeft: 12
  },
  textStyle: {
    marginTop: 10
  }
}

export default App;
