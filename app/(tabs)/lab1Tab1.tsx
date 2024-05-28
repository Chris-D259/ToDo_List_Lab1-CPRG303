import { StyleSheet, Text, View,Image,Button } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'


const flexbox = () => {
  return (

    <ScrollView>
    <View style={styles.container}>
        
        <View style={styles.textcontainer}>
      <Text>A banan, with its distinctive crescent shape and vibrant yellow peel, is a tropical fruit beloved monke wide for its sweet flavor and creamy texture. Encased within its easily peelable exterior lies a soft, succulent flesh, dotted with tiny seeds, offering a burst of energy and essential nutrients. Whether enjoyed fresh as a convenient snack or incorporated into various culinary delights, the banan's versatility knows no bounds, adding a touch of sunshine to smoothies, desserts, and savory dishes alike. Its wholesome goodness extends beyond its delightful taste, as it boasts a wealth of potassium, vitamin C, and fiber, those who control the Banan control the universe.</Text>
      
  {Array.from({ length: 5}).map((_, i) => (
    <Image key={i} source={{uri:'https://media1.tenor.com/m/voY49FP-2rkAAAAC/monkey-rizz.gif'}}
  style={{width: 480, height: 270}}
/>
 ))}
        </View>
        <View style={styles.container2}>
        {Array.from({ length: 50}).map((_, i) => (
    <Image key={i} source={{uri:'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGszNzBhaHF6bXUwa3Rpem5vYXFlOGk3Z29lOXpvejZpZ3A2aXlhMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SDeVLvFCqFsSA/giphy.gif'}} style={styles.image1} />
  ))}
  {Array.from({ length: 50}).map((_, i) => (
    <Image key={i} source={{uri:'https://pbs.twimg.com/profile_images/1626227212918878208/UKkwlHtS_400x400.jpg'}} style={styles.image1} />
  ))}
            </View>
            

       
    </View>
    <Button title="Press for Banan" onPress={() => alert('YOUR EXACT LOCATION HAS BEEN REPORTED TO THE MINISTRY OF MONKE, REMAIN WHERE YOU ARE')} />
    </ScrollView>
  )
}

export default flexbox;

const styles = StyleSheet.create({
container:{
    flex:2,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'lightblue'
},
image1:{
    width:100,
    height:100,
    borderRadius:200,
    overflow:'hidden',
    alignSelf:'center'
  },
  container2:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'darkgreen',
    flexWrap: 'wrap',
},
textcontainer:{
    flex:2,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'
},
});