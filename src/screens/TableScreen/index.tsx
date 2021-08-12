import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Alert} from 'react-native';
import Config from 'react-native-config';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';
import Axios from 'axios';

interface Statistic {
  ID: string;
  Country: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
}

const TableScreen = () => {
  const defaultData: Statistic[] = [];
  const [data, setData] = useState(defaultData);
  useEffect(() => {
    console.log('OK');
    getCoconaVirusData();
    console.log('Data is ',data);
    
  }, [data]);

  const getCoconaVirusData = async () => {
    const result = await Axios.get('https://api.covid19api.com/summary');
    setData(result.data.Countries);
  };

  const render_country_header = () => {
    return (
      <View style={styles.headerView}>
        <View style={[styles.itemStyle, {width: 120}]}>
          <Text>Country</Text>
        </View>
        <View style={[styles.itemStyle, {width: 80}]}>
          <Text>Total</Text>
        </View>
        <View style={[styles.itemStyle, {width: 80}]}>
          <Text>New Cases</Text>
        </View>
        <View style={[styles.itemStyle, {width: 80}]}>
          <Text>Deaths</Text>
        </View>
        <View style={[styles.itemStyle, {width: 80}]}>
          <Text>New Deaths</Text>
        </View>
        <View style={[styles.itemStyle, {width: 80}]}>
          <Text>Recovers</Text>
        </View>
        <View style={[styles.itemStyle, {width: 80}]}>
          <Text>New Recovers</Text>
        </View>
      </View>
    );
  };

  const render_country_item = (item: Statistic) => {
    return (
      <View style={styles.itemView}>
        <View style={[styles.itemStyle, {width: 120}]}>
          <Text>{item.Country}</Text>
        </View>
        <View style={[styles.itemStyle, {width: 80}]}>
          <Text>{item.TotalConfirmed}</Text>
        </View>
        <View
          style={[styles.itemStyle, {width: 80, backgroundColor: item.NewConfirmed!=0 ? '#feecb1':'transparent'}]}>
          <Text>{item.NewConfirmed == 0 ? null : '+'+item.NewConfirmed}</Text>
        </View>
        <View style={[styles.itemStyle, {width: 80}]}>
          <Text>{item.TotalDeaths}</Text>
        </View>
        <View style={[styles.itemStyle, {width: 80, backgroundColor: item.NewDeaths!=0 ? 'red':'transparent'}]}>
          <Text>{item.NewDeaths == 0 ? null : '+'+item.NewDeaths}</Text>
        </View>
        <View style={[styles.itemStyle, {width: 80}]}>
          <Text>{item.TotalRecovered}</Text>
        </View>
        <View
          style={[styles.itemStyle, {width: 80, backgroundColor: item.NewRecovered!=0 ? '#99edc3':'transparent'}]}>
          <Text>{item.NewRecovered == 0 ? null : '+'+item.NewRecovered}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{flexDirection: 'column'}}>
        {render_country_header()}
        <FlatList
          data={data}
          renderItem={({item}) => render_country_item(item)}
          keyExtractor={item => item.ID}
        />
      </ScrollView>
    </View>
  );
};

export default TableScreen;
