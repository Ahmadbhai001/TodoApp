import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import Task from './components/Task';

const Main = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (task) {
      setTaskItems([...taskItems, task]);
      setTask(null);
    }
  };

  const deleteall = () => {
    let itemsCopy = [];
    setTaskItems(itemsCopy);
  };

  const completeTask = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        {/*Main Headin*/}
        <Text style={styles.mainHeading}>MY TO-DO LIST</Text>
        {/*Delete function*/}
        <TouchableOpacity style={styles.removeAll} onPress={() => deleteall()}>
          <Text style={styles.removeAllTex}>Remove ALL</Text>
        </TouchableOpacity>
        <View>
          {/*Showing Card*/}
          <View style={styles.items}>
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} style={styles.todocard}>
                  <TouchableOpacity
                    key={index}
                    onPress={() => completeTask(index)}>
                    <Image
                      source={require('./images/trash.png')}
                      style={{width: 25, height: 25}}
                    />
                  </TouchableOpacity>
                  <Task text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView style={styles.keyBoard}>
        {/*Text Input*/}
        <TextInput
          placeholderTextColor={'black'}
          placeholder="Enter Your Task"
          style={styles.inputBox}
          value={task}
          onChangeText={text => {
            setTask(text);
          }}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <Image source={require('./images/add.png')} style={styles.addIcon} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  mainHeading: {
    backgroundColor: '#51abcb',
    marginTop: 25,
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    fontWeight: '700',
  },
  removeAll: {
    flex: 0,
    justifyContent: 'flex-end',
    width: '100%',
    flexDirection: 'row',
    margin: 10,
  },
  removeAllTex: {
    color: 'white',
    fontSize: 17,
    fontWeight: '700',
    backgroundColor: '#51abcb',
    width: 110,
    textAlign: 'center',
    padding: 5,
    borderRadius: 10,
    marginRight: 15,
  },
  todocard: {
    marginBottom: 10,
    backgroundColor: '#51abcb',
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  addIcon: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#51abcb',
    borderRadius: 8,
  },
  items: {
    marginTop: 20,
    marginBottom: 60,
  },
  keyBoard: {
    position: 'absolute',
    bottom: 10,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#51abcb',
    borderRadius: 50,
    padding: 5,
    marginLeft: 20,
  },

  inputBox: {
    fontSize: 20,
    color: 'black',
    // backgroundColor:'#7cc0d8',
    //  height: 20,
    // width:50,
    // borderRadius:8,
    // marginLeft:20,
  },
});
