import { useState } from 'react';
import { StyleSheet, View, TextInput, Button,  FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const[courseGoals, setCourseGoals] = useState([]);


  function addGoalHandler(enteredGoalText) {
    setCourseGoals(
      (currentCourseGoals) => [...currentCourseGoals, 
        {text: enteredGoalText, 
          id: Math.random().toString()}
      ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput 
      onAddGoal={addGoalHandler}/>
        <View style={styles.goalsContainer}>
          <FlatList 
          data={courseGoals} 
          renderItem={(itemData)=>{
              return (
              <GoalItem text={itemData.item.text}/>
            );      
          }}
          keyExtractor={(item, index)=>{
            return item.id;
          }}
          alwaysBounceVertical={false}>
          </FlatList>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 4,
},
});
