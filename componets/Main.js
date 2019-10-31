
import React from 'react';
import {
  
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Note from './Note';
export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.state={
            noteArray: [],
            noteText: '',
        }
    }
    render() {
        let notes = this.state.noteArray.map((val,key)=>{
            return <Note key={key} keyval={key} val={val}
            
            deleteMethod={()=>this.deleteNote(key) }>  </Note>
        });
      return (
        <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.headerText}>
            -Noter-
          </Text>
        </View>
        <ScrollView style={styles.scrollContainer}>
            {notes}
        </ScrollView>
    
      <View style={styles.footer}>
        <TextInput
            style={styles.textInput}
            onChangeText={ (noteText)=>this.setState({noteText})}
            value={this.state.noteText}
            placeholder='>note'
            placeholderTextColor='#A9A9A9'
            underlineColorAndroid='transparent'
        ></TextInput>
       
      </View>
      
      <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
        <Text style={styles.addButtonText}>
          +
        </Text>
      </TouchableOpacity>
      </View>
      );
}

deleteNote(key){
    this.state.noteArray.splice(key,1);
    this.setState({noteArray:this.state.noteArray})
}
addNote(){
    if(this.state.noteText){
        var d = new Date();
        this.state.noteArray.push({
            'date':d.getFullYear()+
            "/"+(d.getMonth()+1)+
            "/"+d.getDate(),
            'note':this.state.noteText,
        })

        this.setState({noteArray :this.state.noteArray})
        this.setState({noteText:''})


    }
}

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        
      },
      addButtonText:{
        color:'#fff',
        fontSize: 24,
      },
      addButton:{
        position:'absolute',
        zIndex: 11,
        right :20,
        bottom: 90,
        backgroundColor: '#E91E63',
        width:60,
        height:60,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        elevation:8,
      },
       textInput:{
         
         alignSelf:'stretch',
         color:'#fff',
         padding:20,
         backgroundColor:'#252525',
         borderTopWidth:2,
         borderTopColor:'#ededed',
       },
       header:{
         backgroundColor:'#E91E63',
         alignItems:'center',
         justifyContent:'center',
         borderBottomWidth:10,
         borderBottomColor:'#ddd',
       },
       headerText:{
         color:'white',
         fontSize:18,
         padding:26,
       },
       scrollContainer:{
         flex:1,
         marginBottom:100,
       },
    
      engine: {
        position: 'absolute',
        right: 0,
      },
    
      sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
      },
    
    
      highlight: {
        fontWeight: '700',
      },
      footer: {
        opacity:1,
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        zIndex:10,
      },
});

