import React , {Component} from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons'

/* App FLow
App Switch Navigator
 - Welcome Screen with a login button
 -App drawer Navigator ( swipe)
 -Dashboard Screen- With a Stack Navigator used for changing headers,
 -Tab Navigator with three tabs
 */


  class App extends Component {
  render() {
    return <AppContainer />;
    }
  }
  export default App;

class WelcomeScreen extends Component {
  render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Login"
        onPress={()=>this.props.navigation.navigate('Dashboard')}
          />
        </View>
        );
      }
    }

class DashboardScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>DashboardScreen</Text>
      </View>
      );
    }
  }


class Utilities extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Utilities</Text>
        </View>
      );
    }
  }


class Workout extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>WorkoutScreen</Text>
      </View>
    );
  }
}


class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>HomeScreen</Text>
      </View>
    );
  }
}


const DashboardTabNavigator = createBottomTabNavigator(
  {
    Home,
    Workout,
    Utilities
  },
    {
      navigationOptions: ({ navigation }) => {   //prop passed
        const { routeName } = navigation.state.routes[navigation.state.index]; // {routename} checks whether it is home workout or utilities
          return {
            headerTitle: routeName
          };
        }
      }
    );


const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator
  },
    {
      defaultNavigationOptions:({navigation}) => {
        return {
          headerLeft: < Icon style={{ paddingLeft: 10 }}
          onPress={() => navigation.openDrawer()}
          name="ios-menu"
          size={30} />
          };
        }
      }
    );


const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator
  }
});


const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  Dashboard: { screen: AppDrawerNavigator }
});


const AppContainer = createAppContainer(AppSwitchNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
