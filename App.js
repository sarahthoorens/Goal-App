import { useState } from 'react';
import { StyleSheet, View, Button,  FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar'

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const[courseGoals, setCourseGoals] = useState([]);

  function startAtGoalHandler() {
    setModalIsVisible(true);
  }
  function endAtGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(
      (currentCourseGoals) => [...currentCourseGoals, 
        {text: enteredGoalText, 
          id: Math.random().toString()}
      ]);
      endAtGoalHandler();
    }
  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal)=>goal.id !== id)
      })};

  return (
    <>
    <StatusBar style="auto"/>
    <View style={styles.appContainer}>
      <Button 
      title='Add New Goal'
      color="#196527"
      onPress={startAtGoalHandler}
      />
      <GoalInput
      visible={modalIsVisible} 
      onAddGoal={addGoalHandler}
      onCancel={endAtGoalHandler}
      />
        <View style={styles.goalsContainer}>
          <FlatList 
          data={courseGoals} 
          renderItem={(itemData)=>{
              return (
              <GoalItem 
                text={itemData.item.text} 
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
                />
            );      
          }}
          keyExtractor={(item, index)=>{
            return item.id;
          }}
          alwaysBounceVertical={false}>
          </FlatList>
        </View>
      </View>
      </>
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
