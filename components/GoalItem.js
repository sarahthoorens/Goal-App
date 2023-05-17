import { StyleSheet, View, Text, Pressable, Modal } from "react-native";

function GoalItem(props){
   
return (

   <View style={styles.goalItem}>
      <Pressable 
      android_ripple={{color:"#ea2626"}} 
      onPress={props.onDeleteItem.bind(this, props.id)}
      style={({ pressed }) => pressed && styles.pressedItem}>
      <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>   
   </View>
)
};

const styles = StyleSheet.create({
   goalItem: {
      backgroundColor: 'black',
      borderRadius: 4,
      padding: 4,
      borderColor:'black',
      marginVertical: 8,
    },
    pressedItem: {
      opacity: 0.5,
    },
    goalText: {
      color: 'white',
      fontSize: 18,
      padding: 8,
    },
})

export default GoalItem;