import type {PropsWithChildren, ReactElement} from 'react';
import React from 'react';
import styles from './AnimatedPicker.scss';
import nameof from 'ts-nameof.macro';
import type {ImagePickerProps} from './components/ImagePicker';
import ImagePicker from './components/ImagePicker';
import {Dimensions, View} from 'react-native';
import EmojiPicker from './components/EmojiPicker';
import {AttachmentType} from 'react-native-truesight-chat';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');

export function AnimatedPicker(
  props: PropsWithChildren<AnimatedPickerProps>,
): ReactElement {
  const {
    type,
    onCancel,
    endingPickImageHandle,
    fullScreen,
    onEmoji,
    style,
    ...resProps
  } = props;

  return (
    <>
      {type !== AttachmentType.None && (
        <View
          style={[
            styles.generalContainer,
            fullScreen && {height: SCREEN_HEIGHT},
            {width: SCREEN_WIDTH},
            style,
          ]}>
          {type === AttachmentType.Image && (
            <ImagePicker
              endingPickImageHandle={endingPickImageHandle}
              onCancel={onCancel}
              {...resProps}
            />
          )}
          {type === AttachmentType.Sticker && (
            <EmojiPicker onEmojiPress={onEmoji} />
          )}
        </View>
      )}
    </>
  );
}

export interface AnimatedPickerProps extends ImagePickerProps {
  type?: AttachmentType;

  onCancel?: () => void;

  limitImageNumber?: number;

  overLimitedImageNumberHandle?: () => void;

  endingPickImageHandle: (images: any[]) => void;

  header?: ReactElement;

  fullScreen?: boolean;

  onEmoji?: (item: any) => void;

  style?: any;
}

AnimatedPicker.defaultProps = {
  //
};

AnimatedPicker.displayName = nameof(AnimatedPicker);

export default AnimatedPicker;
