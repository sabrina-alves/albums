// import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

/* make a component
as a rule of thumb when we create that component. We will always 
name it a function that is the same as the file that it's placed in.
*/
 const Header = (props) => {
    const {textStyle, viewStyle} = styles;

    return (
        <View style={viewStyle}> 
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
 }
// para dar style ao componente, deve-se criar um objeto
 const styles = {
     viewStyle: {
         backgroundColor: '#F8F8F8',
         justifyContent: 'center',
         alignItems: 'center',
         height: 60,
         paddingTop: 15,
         shadowColor: '#000',
         shadowOffset: { width: 0, height: 2},
         shadowOpacity: 0.2,
         elevation: 2,
         position: 'relative'
     },
     textStyle: {
         fontSize: 20
     }
 }


/* make the component available to other parts of the app.
Where as in the index file I said rendered on the screen in the device this 
time around I'm saying well I don't really want to like immediately rendered 
to the screen the device. I just want other parts of the application 
tool to use this component and reference it.
SOMENTE A TELA PRINCIPAL (APP) PODE POSSUIR O APPREGISTRY*/
 export default Header;