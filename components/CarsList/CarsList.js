import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import CarItem from '../CarItem/CarItem';

// Car data
import cars from './cars';

function CarsList() {
	return (
		<View style={styles.container}>
			<FlatList
				data={cars}
				renderItem={({ item }) => <CarItem car={item} />}
			/>
		</View>
	);
}

export default CarsList;
