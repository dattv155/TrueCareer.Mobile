import React from 'react';
import './LoadingLayout.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import {atomicStyles, Colors} from 'src/styles';
import Modal from 'react-native-modal';
import Loading from 'react-native-spinkit';

export function LoadingLayout(
  props: PropsWithChildren<LoadingLayoutProps>,
): ReactElement {
  const {loading} = props;

  return (
    <Modal
      isVisible={loading}
      style={[
        atomicStyles.alignItemsCenter,
        atomicStyles.justifyContentCenter,
      ]}>
      <Loading
        isVisible={true}
        size={80}
        color={Colors.White}
        type={'ThreeBounce'}
        style={atomicStyles.mr4}
      />
    </Modal>
  );
}

export interface LoadingLayoutProps {
  //
  loading: boolean;
}

LoadingLayout.defaultProps = {
  //
};

LoadingLayout.displayName = nameof(LoadingLayout);

export default LoadingLayout;
