import { useState } from 'react';
import {StyleSheet, View, TextInput, Button, Modal, Image} from 'react-native'

function GoalInput(props){
   const[enteredGoalText, setEnteredGoalText] = useState('');

   function goalInputHandler(enteredText){
      setEnteredGoalText(enteredText)
    };

    function addGoalHandler () {
         props.onAddGoal(enteredGoalText)
         setEnteredGoalText('');
    }

   return(
      <Modal visible={props.visible} animationType="slide"> 
         <View style={styles.inputContainer}>
            <Image 
            source={require('../assets/images/target-arrow.png')} 
            style={styles.image}/>
            <TextInput 
            style={styles.textInput} 
            placeholder="Enter a goal!" 
            onChangeText={goalInputHandler}
            value={enteredGoalText}
            />
    
            <View style={styles.buttonContainer}> 
               <View style={styles.button}>    
                  <Button title="Add Goal" onPress={addGoalHandler} color={'#196527' }/>
               </View>
               <View style={styles.button}>
                  <Button title="Cancel" onPress={props.onCancel} color={'#dd9f6f'}/>
               </View> 
            </View> 
         </View>
      </Modal>
      )
};

const styles = StyleSheet.create(
   {
      inputContainer: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         marginBottom: 24,
         padding: 16,
         borderBottomWidth: 1,
         backgroundColor: '#e0d09b'   
      },
      textInput: {
         borderWidth: 1,
         borderColor: '#c9b163',
         width: '90%',
         padding: 16,
         borderRadius: 6,
         backgroundColor: '#f0e9d1'
   },
      buttonContainer: {
         // flexDirection: 'row',

         marginTop: 16,
      },
      button:{
         width: 240,
         marginHorizontal: 8,
         margin: 14,
      },
      image: {
         width: 100,
         height: 100,
         marginBottom: 60,
      }
     
});

export default GoalInput;