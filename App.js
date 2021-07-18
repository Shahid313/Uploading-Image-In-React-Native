/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useState} from 'react';
 import { View, StyleSheet, Button, Image } from 'react-native';
 import * as ImagePicker from "react-native-image-picker"
 
 const App = () => {
   const[image, setImage] = useState({});
 
   const choosePhoto = () => {
     const options = {
       noData:true
     };
     ImagePicker.launchImageLibrary(options, response => {
       console.log("response", response);
       if(response.assets[0].uri){
         setImage(response.assets[0]);
       }
     });
   }
 
   return (
     <View style={styles.Photo}>
       <Button onPress={choosePhoto} title="Choose Photo"/>
       <Image style={{width:300, height:300, marginTop:20}} source={{uri: image.uri}}/>
     </View>
   )
 }
 
 const styles = StyleSheet.create({
   Photo:{
     flex:1,
     justifyContent:'center',
     alignItems:'center'
   }
 })
 
 export default App;
