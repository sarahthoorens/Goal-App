import { StyleSheet, View, Text } from "react-native";

function GoalItem(props){
return (
<View style={styles.goalItem}>
<Text style={styles.goalText}>{props.text}</Text>
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
      padding: 8,
    },
    goalText: {
      color: 'white',
      fontSize: 18,
    },
})

export default GoalItem;