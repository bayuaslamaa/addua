import React from 'react';
import {List, Text} from 'react-native-paper';
import {View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// TODO: ADD THIS TO ONE EXPORTED TYPE
type RootStackParamList = {
  Root: {Main: undefined};
  Profile: {userId: string};
  Feed: {sort: 'latest' | 'top'} | undefined;
  WebContainer: {url: string};
};

type TabStackParamList = {
  Doa: undefined;
  Sunnah: undefined;
};

type Props = NativeStackScreenProps<TabStackParamList, 'Doa'>;
export default function MainScreen({route, navigation}: Props) {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  const data = [
    {
      groupTitle: 'Waktu Pagi',
      items: [
        {
          title: 'Doa Mendengar Adzan',
          url: 'https://muslim.or.id/79609-doa-setelah-adzan.html',
        },
        {
          title: 'Doa Mendengar Adzan',
          url: 'https://muslim.or.id/79609-doa-setelah-adzan.html',
        },
        {
          title: 'Doa Mendengar Adzan',
          url: 'https://muslim.or.id/79609-doa-setelah-adzan.html',
        },
      ],
      rangeTime: 'Bangun Tidur - Sebelum Zuhur',
    },
    {
      groupTitle: 'Waktu Siang',
      items: [
        {
          title: 'Doa Mendengar Adzan',
          url: 'https://muslim.or.id/79609-doa-setelah-adzan.html',
        },
        {
          title: 'Doa Mendengar Adzan',
          url: 'https://muslim.or.id/79609-doa-setelah-adzan.html',
        },
        {
          title: 'Doa Mendengar Adzan',
          url: 'https://muslim.or.id/79609-doa-setelah-adzan.html',
        },
      ],
      rangeTime: 'Setelah Zuhur - Sebelum Ashar',
    },
  ];
  return (
    <View style={{flex: 1, marginTop: 20}}>
      <List.Section title="Doa-doa Shahih ">
        {data.map(({groupTitle, items, rangeTime}, i) => (
          <List.Accordion
            key={i}
            title={groupTitle}
            right={() => (
              <Text style={{fontSize: 11, fontWeight: '300'}}>{rangeTime}</Text>
            )}
            left={props => <List.Icon {...props} icon="clock" />}>
            {items.map(({title, url}, i) => (
              <List.Item
                key={i}
                title={title}
                onPress={() => navigation.navigate('WebContainer', {url})}
              />
            ))}
          </List.Accordion>
        ))}

        {/* <List.Accordion
        title="Controlled Accordion"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion> */}
      </List.Section>
    </View>
  );
}
