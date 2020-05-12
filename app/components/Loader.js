import React, { Component } from 'react';
import {View, Modal,ActivityIndicator, Dimensions} from 'react-native'; 

const { width, height } = Dimensions.get('window');

const Loader = ({ isLoading }) => (
    
    <View style = {
        {
        flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: 'rgba(0,0,0,0.5)',
      width:width,
      height: height,
      marginBottom: height*0.3,
      position:'absolute',
      zIndex : 1,
        }
    }>
      <View style = {{height:50, width: 50, borderRadius:25, backgroundColor: "white",justifyContent:'center' ,  shadowOffset: { width: 1,  height: 1,  },
            elevation:1,
        }}>
    <ActivityIndicator animating={isLoading} size="small" color={"#111E6C"} style={{alignSelf:'center'}} />
    </View>
    </View>
)

export default Loader;