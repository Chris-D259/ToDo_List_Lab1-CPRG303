// pass data props to the tabs

//create component named wallahi
import { View, Text, Button, Modal,Image } from 'react-native'
import React from 'react'

const props = () => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const eventhandler1 = () => {
        setModalVisible(true);
    }
    const rizz= "Hello World!";
    let a=10;
  return (
    <View>
      <Text style={{fontSize:40}}>{rizz}</Text>
      <Children rizz={rizz}/>
        <Children2 onPress={eventhandler1}/>
        <Modal animationType='slide'transparent={true} visible={modalVisible} onRequestClose={() => {
            setModalVisible(!modalVisible);
        }}>
           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Hello!</Text>
          <Image
            source={{ uri: 'https://www.usatoday.com/gcdn/-mm-/db15718a34770d460f6d7366a393cfcfd5343d1a/c=85-0-1415-1000/local/-/media/2018/06/21/USATODAY/USATODAY/636652141935608122-GettyImages-482658895.jpg' }}
            style={{ width: 200, height: 200 }}
          />
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const Children = (x:any) => {
  return (
    <View>
      <Text>Good Morning! {x.rizz}</Text>
    </View>
  );
};

const Children2 = (x:any) => {
  return (
    <View>
      <Button title="Press Me!" onPress={x.onPress}/>
    </View>
  );
}

export default props