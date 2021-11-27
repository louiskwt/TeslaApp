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
				renderItem={({ item, index }) => <CarItem car={item} />}
				keyExtractor={(item) => item.name}
				snapToAlignment={'start'}
				decelerationRate={'fast'}
				snapToInterval={Dimensions.get('window').height}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
}

export default CarsList;
