import React,{useState} from 'react';
import { StyleSheet,ScrollView, Text,Platform, View, KeyboardAvoidingView, TouchableOpacity, TouchableWithoutFeedback,Keyboard,TextInput,Button } from 'react-native';
import Tasks from './components/Tasks.js'

export default function App() {

  const [input, setInput] = useState()
  const [tasks ,setTask] = useState([])

  const send = ()=>{
    Keyboard.dismiss()
    setTask([...tasks, input])
    setInput('')
  }

  const deleteItem = (index)=>{
      const copy = [...tasks]
      console.log(copy)
      copy.splice(index,1)
      setTask(copy)
  }

  console.log(tasks)

  return (
    <View style={styles.container}>
              <ScrollView>
              <View style={styles.top}>
              <Text style={styles.title}>Today's tasks</Text>

                    <View style={styles.taskWrapper}>
                    
                        <View style={styles.items}>
                                    {/* todo tasks */}
                                   
                                   {tasks.map((task,index)=>{
                                      return <TouchableOpacity key={index} onPress={()=>deleteItem(index)}>
                                        <Tasks text={task}/>
                                      </TouchableOpacity>
                                    })}
                                   
                        </View>
                        
                    </View>
              </View>
              </ScrollView>
              <View style={styles.bottom}>
                {/* write a task */}
              <KeyboardAvoidingView
                     behavior={Platform.OS === "ios" ? "padding" : "height"}
                     style={styles.writeTaskWrapper}
               >
                  <TextInput value={input} onChangeText={e=>setInput(e)} placeholder="write a task" style={styles.textInput} />

                  <TouchableOpacity style={styles.touchable} onPress={()=>send()}>
                              <View style={styles.addButoon__wrapper}>
                                <Text style={styles.add__button}>+</Text>
                              </View>
                  </TouchableOpacity>

                </KeyboardAvoidingView>
              </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    paddingTop:50,
    paddingLeft:20,
    paddingRight:20,
    marginTop:30,
  },
  taskWrapper:{
    marginTop:20,
  },
  title:{
    fontSize:26,
    color:'black',
    fontWeight: 'bold',
    fontFamily:'monospace',
  },
  items:{},
  writeTaskWrapper:{
    marginTop:50,
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-between',
    width:'100%',
    marginBottom:20,
  },
  textInput:{
    backgroundColor:'white',
    color:'black',
    width:'85%',
    height:40,
    borderRadius:10,
    paddingLeft:20,
    paddingRight:20,
    shadowColor: 'black',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 1},
    shadowRadius: 10,
    elevation: 2,
    fontFamily:'monospace',
    borderWidth:1,
  },
touchable:{
  width:40,
  height:40,
  borderRadius:50,
  backgroundColor:'white',
  alignItems:'center',
  justifyContent:'center',
  shadowColor: 'black',
  shadowOpacity: 0.06,
  shadowOffset: { width: 0, height: 1},
  shadowRadius: 10,
  elevation: 2,
  borderWidth:1,
},
addButoon__wrapper:{

},
add__button:{
  fontSize:20,
  fontWeight:'300',
},
top:{
  // flex:1,
  zIndex:-10,
},
bottom:{
}
});
