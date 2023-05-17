import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props){
return (
   <View style={styles.goalItem}>
      <Pressable android_ripple={{color:"#ea2626"}} onPress={props.onDeleteItem.bind(this, props.id)}>
      <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>   
   </View>

)
};

const styles = StyleSheet.create({
   goalItem: {
      backgroundColor: 'grey',
      borderWidth: 1,
      borderRadius: 4,
      borderColor:'grey',
      marginVertical: 8,
      
    },
    goalText: {
      color: 'white',
      fontSize: 18,
      padding: 8,
    },
})

export default GoalItem;