import type {PropsWithChildren, ReactElement} from 'react';
import React from 'react';
import styles from './ImagePicker.scss';
import nameof from 'ts-nameof.macro';
import type {ListRenderItem, ListRenderItemInfo} from 'react-native';
import {
  Dimensions,
  FlatList,
  Pressable,
  TouchableOpacity,
  View,
} from 'react-native';
import type {ImagePickerResponse} from 'react-native-truesight-chat';
import {useThemeValue} from 'react-native-redux-theming';
import {atomicStyles} from 'src/styles';
import TextLib from 'src/components/atoms/TextLib';
import ImageItem from 'src/components/atoms/ImageItem';
import SvgIcon from 'src/components/atoms/SvgIcon';

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

export function ImagePicker(
  props: PropsWithChildren<ImagePickerProps>,
): ReactElement {
  const {
    onCancel,
    endingPickImageHandle,
    images,
    onSelectHandle,
    selectItemsObject,
    reset,
    loadMoreImages,
    numberSelectedItem,
    onCapture,
    takePhotoLabel,
    sendImageLabel,
  } = props;
  const primaryColor = useThemeValue('primaryColor');

  const handlePressSendImage = React.useCallback(() => {
    const images = Object.keys(selectItemsObject!).map(
      (item: string) => selectItemsObject![item].image,
    );
    endingPickImageHandle(images);
    if (reset) {
      reset();
    }
    onCancel!();
  }, [endingPickImageHandle, onCancel, reset, selectItemsObject]);

  const renderItem: ListRenderItem<any> = React.useCallback(
    ({item, index}: ListRenderItemInfo<any>) => {
      return (
        <>
          {index === 0 && (
            <TouchableOpacity
              style={[
                atomicStyles.justifyContentCenter,
                atomicStyles.alignItemsCenter,
                {height: SCREEN_WIDTH / 3, width: SCREEN_WIDTH / 3 + 2},
              ]}
              onPress={onCapture}>
              {takePhotoLabel && (
                <TextLib style={atomicStyles.mb2}>{takePhotoLabel}</TextLib>
              )}

              <SvgIcon component={require('assets/icons/camera.svg')} />
            </TouchableOpacity>
          )}
          <ImageItem
            image={item}
            key={index}
            selected={!!selectItemsObject![item.uri]}
            onSelect={onSelectHandle!}
            order={
              selectItemsObject![item.uri]
                ? selectItemsObject![item.uri].order
                : null
            }
          />
        </>
      );
    },
    [onCapture, onSelectHandle, selectItemsObject, takePhotoLabel],
  );

  return (
    <View>
      <View style={[atomicStyles.alignItemsCenter, atomicStyles.mt2]}>
        <View style={[styles.topLine, atomicStyles.bgPrimary]} />
      </View>

      {images!.length > 0 && (
        <FlatList
          data={images}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item?.uri + index.toString}
          numColumns={3}
          onEndReachedThreshold={0.5}
          onEndReached={loadMoreImages}
          contentContainerStyle={atomicStyles.mt3}
        />
      )}
      {numberSelectedItem! > 0 && (
        <Pressable
          onPress={handlePressSendImage}
          style={[
            styles.sentButton,
            {backgroundColor: primaryColor},
            //{ bottom: bottom + 16 },
          ]}>
          {sendImageLabel && (
            <TextLib style={[atomicStyles.textBold, {color: '#FFF'}]}>
              {sendImageLabel +
                (numberSelectedItem! > 1 ? numberSelectedItem : '')}
            </TextLib>
          )}
        </Pressable>
      )}
    </View>
  );
}

export interface ImagePickerProps {
  onCancel?: () => void;

  limitImageNumber?: number;

  overLimitedImageNumberHandle?: () => void;

  endingPickImageHandle: (images: ImagePickerResponse[]) => void;

  header?: ReactElement;

  fullScreen?: boolean;

  images?: ImagePickerResponse[];

  onSelectHandle?: (image: ImagePickerResponse) => void;

  selectItemsObject?: {
    [p: string]: {image: ImagePickerResponse; order: number};
  };

  reset?: () => void;

  loadMoreImages?: () => Promise<void>;

  numberSelectedItem?: number;

  onCapture?: () => void;

  takePhotoLabel?: string;

  sendImageLabel?: string;
}

ImagePicker.defaultProps = {
  //
};

ImagePicker.displayName = nameof(ImagePicker);

export default ImagePicker;
