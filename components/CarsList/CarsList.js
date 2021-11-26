import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
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
				snapToAlignment={'start'}
				decelerationRate={'fast'}
				snapToInterval={Dimensions.get('window').height}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
}

export default CarsList;
