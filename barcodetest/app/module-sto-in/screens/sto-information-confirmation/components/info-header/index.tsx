import React from 'react';
import {View, Text} from 'react-native';
import * as styles from './styles';

export const InfoHeader = () => {
  return (
    <View style={styles.INFORMATIONHEADER}>
      <View style={styles.INFORMATIONBOX}>
        <View>
          <Text style={styles.TEXTTITLE}>Supplying Plant:</Text>
          <Text style={styles.TEXTDATA}>1400 1600</Text>
        </View>
        <View style={styles.DRIVERTEL}>
          <Text style={styles.TEXTTITLE}>Driver Tel:</Text>
          <Text style={styles.TEXTDATA}>12345678900</Text>
        </View>
      </View>
      <View style={styles.SHIPTO}>
        <Text style={styles.TEXTTITLE}>Ship to:</Text>
        <Text style={styles.TEXTDATA}>
          Milpitas Warehouse 625 Vista Way Milpitas CA 95035 USA.
        </Text>
      </View>
    </View>
  );
};
