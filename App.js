//importar uma biblioteca que ajude a criar um componente
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header'; // forma de importar um outro componente
import AlbumList from './src/components/AlbumList';

//criar o componente

const App = () => (
	<View style={{ flex: 1 }}>
		<Header headerText={'Albums'} />
		<AlbumList />
	</View>
);

//* rendenrizar o componente na tela */

AppRegistry.registerComponent('albums', () => App);

//ReactNative.AppRegistry.registerComponent = padrao suponho
//('albums', () => App); o primeiro parametro deve ser o nome do projeto
// o segundo deve ser o componente que devera ser renderizado
export default App;