import {StyleSheet} from 'react-native';
import {Colors} from 'src/styles';

export const conversationFlatListStyles = StyleSheet.create({
  container: {
    alignContent: 'center',
  },
  unread: {
    backgroundColor: '#1b3ede',
    borderRadius: 30,
    paddingLeft: 4,
    paddingRight: 4,
  },
  textUnread: {
    color: '#FFF',
  },
  border: {
    borderBottomWidth: 1,
    borderColor: Colors.Dash,
  },
});
