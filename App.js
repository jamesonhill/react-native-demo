/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 *
 *
 */

import React from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  DatePickerIOS,
  ProgressViewIOS,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [time, setTime] = React.useState(new Date());
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Button
              onPress={() => Alert.alert('CLICKED')}
              title="Login"
              color="#333333"
            />
          </View>
          <DatePickerIOS initialDate={time} onDateChange={(newDate) => setTime(newDate)} />
          <ProgressViewIOS progress={0.5} />
          <Text>
            {time.toString()}
          </Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  login: {
    borderColor: 'black',
    borderWidth: 10,
    borderStyle: 'solid',
  },
});

export default App;
