import {StyleSheet} from 'react-native';

export const mbtiResultScreenStyles = StyleSheet.create({
  parent: {
    height: '30%',
    width: '100%',
    transform: [{scaleX: 2}],
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
    overflow: 'hidden',
    position: 'absolute',
  },
  child: {
    flex: 1,
    transform: [{scaleX: 0.5}],

    backgroundColor: '#E3E6F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
