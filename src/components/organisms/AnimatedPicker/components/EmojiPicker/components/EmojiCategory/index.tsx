import type {PropsWithChildren, ReactElement} from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import {emojiCategoryStyles} from './EmojiCategory.styles';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import {emojisByCategory} from 'src/components/icons/emoji';
import shortnameToUnicode from 'src/helpers/shortnameToUnicode';

export function EmojiCategory(
  props: PropsWithChildren<EmojiCategoryProps>,
): ReactElement {
  const {category} = props;

  return (
    <>
      <FlatList
        data={emojisByCategory[category]}
        renderItem={({item}) => (
          <TouchableOpacity style={emojiCategoryStyles.emojiContainer}>
            <Text style={emojiCategoryStyles.emoji}>
              {shortnameToUnicode[`:${item}:`]}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
        numColumns={8}
      />
    </>
  );
}

export interface EmojiCategoryProps {
  category: any;
}

EmojiCategory.defaultProps = {
  //
};

EmojiCategory.displayName = nameof(EmojiCategory);

export default EmojiCategory;
