import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

function CarItem() {
	return (
		<View style={styles.carContainer}>
			<ImageBackground
				source={require('../../assets/images/ModelS.jpeg')}
				style={styles.image}
			/>
			<View style={styles.titles}>
				<Text style={styles.title}>Model S</Text>
				<Text style={styles.subtitle}>Starting at $69,240</Text>
			</View>
			<View style={styles.buttonContainer}>
				<StyledButton
					type='primary'
					content={'Custom Order'}
					onPress={() => {
						console.warn('Custom Order was pressed');
					}}
				/>
				<StyledButton
					type='secondary'
					content={'Existing Inventory'}
					onPress={() => {
						console.warn('Existing Investory was pressed');
					}}
				/>
			</View>
		</View>
	);
}

export default CarItem;
