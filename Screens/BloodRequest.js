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
    ScrollView} from 'react-native';
import {Header} from 'react-native-elements'

import db from '../config';
import firebase from 'firebase';

export default class BloodRequest extends Component{
constructor(){
super()
this.state= {
choice: "",
userId: firebase.auth().currentUser.email
}
}

addRequest=()=>{
  var userId= this.state.userId
  var choice= this.state.choice
  db.collection("requested_blood").add({
user_Id: userId,
blood_type: choice
  })
}
render(){


return (
  
    <View style={{flex: 1,backgroundColor: "purple"}}>
    <Header
    centerComponent= {{ text: 'Blood Donation App' , style:{ color: "#E6E6FA"}}} 
    />
    <View style= {{flex: 1, alignItems: 'center',marginTop: 100, }}>
     <Text style= {{color: "white"}}>Choose the Blood Type </Text>
   <Picker 
   
   selectedValue= {this.state.choice} 
   style= {{width: 150, height: 50, backgroundColor: "#E6E6FA", color: "purple"}}
 
   mode= "dropDown"
   onValueChange= {(itemValue, itemIndex)=>{
   this.setState({choice: itemValue})}} >
   <Picker.Item label= "A+" value= "A+"/>
   <Picker.Item label= "B+" value= "B+"/>
   <Picker.Item label= "AB+" value= "AB+"/>
   <Picker.Item label= "O+" value= "O+"/>
   <Picker.Item label= "A-" value= "A-"/>
   <Picker.Item label= "B-" value= "B-"/>
   <Picker.Item label= "AB-" value= "AB-"/>
   <Picker.Item label= "O-" value= "O-"/>
   </Picker>
   </View>
<View style= {{alignItems: "center", justifyContent: "center", marginBottom: 100}}>
   

   <TouchableOpacity style= {{backgroundColor: "#E6E6FA", width: 60, height:20 }}
   onPress={()=>{
     this.addRequest(this.state.choice)
   }}>
   <Text> Request </Text>
   </TouchableOpacity>
   </View>
    </View>
  )
}
}