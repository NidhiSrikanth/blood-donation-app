import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Picker,
    FlatList,
    ScrollView} from 'react-native';
import {Header,ListItem} from 'react-native-elements'

import db from '../config';
import firebase from 'firebase';

export default class BloodDonation extends Component{
constructor(){
super()
this.state= {
  allRequest: [],
  user_Id: firebase.auth().currentUser.email
}
this.requestBlood= null;
}

getRequest=()=>{
 this.requestBlood= 
  db.collection ("requested_blood").onSnapshot((snapshot)=>{
var allRequest= snapshot.docs.map((doc)=>{
doc.data()
})
this.setState({
  allRequest: allRequest,

})
  })
  console.log(this.state.allRequest)
}

keyExtractor=(item,index)=>{
index.toString()
}

renderItem=({item,i})=>{
return(
  <ListItem key= {i}
  bottomDivider></ListItem>
)
}



componentDidMount(){
  this.getRequest()
}
render(){



return (
  
    <View style= {{flex:1}}>
<Header
    centerComponent= {{ text: 'Blood Donation App' , style:{ color: "#E6E6FA"}}} 
    />
    <View style= {{flex: 1}}>
    {this.state.allRequest.length===0?
    (<Text>There Are No Blood Requests</Text>): 
    (
      <FlatList 
      keyExtractor= {this.keyExtractor}
      data= {this.state.allRequest}
      renderItem= {this.renderItem}/>
    )}
    </View>
    </View>
  )
}
}