import React from 'react';
import {WebView} from 'react-native-webview';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Profile: {userId: string};
  Feed: {sort: 'latest' | 'top'} | undefined;
  WebContainer: {url: string};
};

type Props = NativeStackScreenProps<RootStackParamList, 'WebContainer'>;

export default function WebContainerScreen({route}: Props) {
  const {url} = route.params;
  // eslint-disable-next-line react-native/no-inline-styles
  return <WebView source={{uri: url}} style={{flex: 1}} />;
}
