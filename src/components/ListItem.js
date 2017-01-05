import React, {Component} from 'react';
import { Text, View } from 'react-native'
import { CardSection } from './common'

class ListItem extends Component {
  render() {
    return (
      <CardSection>
        <Text>{this.props.library.title}</Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
  }
}
export default ListItem;