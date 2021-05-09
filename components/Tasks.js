import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Tasks = ({text})=>{
          return(
                    <View style={styles.container}>
                              <View style={styles.left}>
                              <TouchableOpacity style={styles.square}></TouchableOpacity>
                              <View>
                              <Text style={styles.text}>{text}</Text>
                              </View>
                              </View>
                              <View style={styles.circle}></View>
                    </View>
          )
}

const styles = StyleSheet.create({
          container:{
                    backgroundColor:'white',
                    borderRadius:10,
                    paddingLeft:20,
                    paddingRight:20,
                    paddingTop:15,
                    paddingBottom:15,
                    marginTop:10,
                    marginBottom:10,
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'space-between',
                    shadowColor: 'black',
                    shadowOpacity: 0.06,
                    shadowOffset: { width: 0, height: 1},
                    shadowRadius: 10,
                    elevation: 2,
          },
          left:{
                    flexDirection:'row',
                    alignItems:'center',
                    
                    flex:1,
          },
          square:{
                    width:0.8,
                    height:30,
                    backgroundColor:'#C0C0C0',
                    borderRadius:4,
          },
          text:{
                    fontSize:15,
                    paddingLeft:20,
                    fontFamily:'monospace',
          },

        });

export default Tasks