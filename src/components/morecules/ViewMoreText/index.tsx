import React from 'react';
import './ViewMoreText.scss';
import type {PropsWithChildren, ReactElement} from 'react';
import nameof from 'ts-nameof.macro';
import type {TextProps} from 'react-native';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {atomicStyles} from 'src/styles';

export function ViewMoreText(
  props: PropsWithChildren<ViewMoreTextProps>,
): ReactElement {
  const {children, ...restProps} = props;

  const [translate] = useTranslation();

  const splitText = React.useMemo(() => {
    return children.split(/\n/g);
  }, [children]);

  const [showAll, setShowAll] = React.useState<boolean>(false);

  return (
    <>
      {!showAll && splitText.length > 1 && splitText[1].length > 0 ? (
        <View>
          <Text {...restProps}>{splitText[0]}</Text>
          <TouchableOpacity onPress={() => setShowAll(!showAll)}>
            <Text
              style={[
                atomicStyles.text,
                atomicStyles.h5,
                atomicStyles.textDarkBlue,
                atomicStyles.semibold,
                atomicStyles.mt1,
              ]}>
              {translate('Xem thêm')}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text {...restProps}>{children}</Text>
          <TouchableOpacity onPress={() => setShowAll(!showAll)}>
            <Text
              style={[
                atomicStyles.text,
                atomicStyles.h5,
                atomicStyles.textDarkBlue,
                atomicStyles.semibold,
                atomicStyles.mt1,
              ]}>
              {translate('Thu gọn')}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

export interface ViewMoreTextProps extends TextProps {
  children?: string;
}

ViewMoreText.defaultProps = {
  //
};

ViewMoreText.displayName = nameof(ViewMoreText);

export default ViewMoreText;
