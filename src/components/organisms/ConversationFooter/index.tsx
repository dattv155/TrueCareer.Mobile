import type {PropsWithChildren, ReactElement} from 'react';
import React from 'react';
import styles from './ConversationFooter.scss';
import nameof from 'ts-nameof.macro';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import FooterReply from './components/FooterReply';
import type {StyleProp, TextInputProps, ViewStyle} from 'react-native';
import {
  Dimensions,
  Platform,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import type {ConversationMessage} from 'react-native-truesight-chat';
import {useThemeValue} from 'react-native-redux-theming';
import MediaIcon from '../../icons/MediaIcon';
import FolderIcon from '../../icons/FolderIcon';
import EmojiIcon from '../../icons/EmojiIcon';
import SendIcon from '../../icons/SendIcon';
import {atomicStyles, Colors} from 'src/styles';

const {width: SCREEN_WIDTH} = Dimensions.get('screen');
const PLATFORM_IS_ANDROID: boolean = Platform.OS === 'android';
const PLATFORM_IS_IOS: boolean = Platform.OS === 'ios';

export function ConversationFooter(
  props: PropsWithChildren<ConversationFooterProps>,
): ReactElement {
  const {
    value,
    onSend,
    onImage,
    onDocument,
    onEmoticons,
    reply,
    inputStyle,
    onReply,
    style,
    footer,
    onPressIn,
    ...resProps
  } = props;
  const scrollPosition = useSharedValue(0);
  const primaryColor = useThemeValue('primaryColor');

  const springStyles = useAnimatedStyle(() => {
    return {
      width: SCREEN_WIDTH - (180 - scrollPosition.value),
      transform: [
        {
          translateX: withSpring(-scrollPosition.value, {
            damping: 50,
            stiffness: 300,
          }),
        },
      ],
    };
  });

  const springButtonStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(scrollPosition.value, {
            damping: 50,
            stiffness: 300,
          }),
        },
      ],
    };
  });

  const handleSend = React.useCallback(() => {
    if (typeof onSend === 'function' && value && value !== '') {
      onSend(value);
    }
  }, [onSend, value]);

  return (
    <>
      <View style={[styles.container, reply && styles.border, style]}>
        {reply && (
          <FooterReply conversationMessage={reply} onCancel={onReply} />
        )}
        <View style={styles.footer}>
          <Animated.View style={[styles.height, springButtonStyles]}>
            <TouchableOpacity onPress={onDocument}>
              <FolderIcon color={primaryColor} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onImage}>
              <MediaIcon color={primaryColor} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onEmoticons}>
              <EmojiIcon color={primaryColor} />
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={[styles.bg, inputStyle, springStyles]}>
            <View style={styles.input}>
              <TextInput
                style={[
                  styles.inputStyle,
                  PLATFORM_IS_IOS && atomicStyles.mb5,
                  PLATFORM_IS_ANDROID && atomicStyles.mb2,
                  atomicStyles.text,
                  atomicStyles.textDark,
                ]}
                placeholderTextColor={Colors.Black}
                placeholder={'Message...'}
                value={value}
                multiline
                onPressIn={e => {
                  if (onPressIn) {
                    onPressIn(e);
                  }
                  scrollPosition.value = 108;
                }}
                onBlur={() => {
                  scrollPosition.value = 0;
                }}
                {...resProps}
              />
            </View>
          </Animated.View>

          <Animated.View style={[springStyles]}>
            <TouchableOpacity style={[styles.button]} onPress={handleSend}>
              <SendIcon color={primaryColor} />
            </TouchableOpacity>
          </Animated.View>
        </View>
        <View>{footer}</View>
      </View>
    </>
  );
}

export interface ConversationFooterProps extends TextInputProps {
  onSend?: (value: string) => void;

  onImage?: () => void;

  onDocument?: () => void;

  onEmoticons?: () => void;

  onReply?: () => void;

  replyComponent?: ReactElement;

  reply?: ConversationMessage;

  inputStyle?: StyleProp<ViewStyle>;

  style?: StyleProp<ViewStyle>;

  footer?: ReactElement;

  onPressIn?: any;
}

ConversationFooter.defaultProps = {
  //
};

ConversationFooter.displayName = nameof(ConversationFooter);

export default ConversationFooter;
