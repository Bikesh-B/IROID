import React,{Component} from "react"
import {
    View,
    StyleSheet,
    ImageBackground,
   Image,
   Text,
   TextInput,
   TouchableHighlight
}from 'react-native'

export default class App extends Component {

    render(){
        return (
            <View style= {styles.container}>
                <ImageBackground source= {require('./assets/bg.jpg')}
                    style= {styles.backgroundImage}>
                    

                    
                    <Text style= {styles.textview}>Sign In</Text> 
                    <Text style= {styles.textchar}>Enter Your Details</Text>       
                    <TextInput style= {styles.inputview}
                    placeholder= 'username'
                    placeholderTextColor= 'black'
                    maxLength={10}>

                    </TextInput>
                    <TextInput style= {styles.inputview}
                    placeholder= 'password'
                    placeholderTextColor= 'black'
                    secureTextEntry= {true}>
                        

                    </TextInput>
                    <TouchableHighlight style= {styles.buttonview}>
                        <Text style= {styles.buttontext}>Sign In</Text>
                    </TouchableHighlight>
                    <Text style= {styles.textpass}>Forgot your password?</Text>
                    <Text style= {styles.textpass}>Don't have Account?</Text>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        height: '100%',
        width: '100%',
        backgroundColor: 'white'
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
     logo: {
        height: 100,
        width: 100,
        alignItems: 'center',
        marginBottom: 20
        
     },
     textview: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        bottom: 20
        
        
     },
   textchar: {
    fontSize: 15,
    color: 'black'
    

   },
   textpass: {
top:20,
color: 'black',
fontWeight: 'bold',

   },
     inputview: {
        width: '80%',
        height: 55,
        borderWidth: 1,
        borderColor: 'silver',
        marginTop: 20,
        borderRadius:40,
        paddingLeft: 30,
        backgroundColor:'silver'
        
     },
     buttonview: {
        width: '80%',
        height: 55,
        backgroundColor: 'blue',
        marginTop: 20,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'


     },
     buttontext: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor:'blue',
        
    
     }

   
})