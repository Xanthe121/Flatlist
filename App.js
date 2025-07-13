import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Button ,FlatList,TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons, Ionicons, AntDesign } from '@expo/vector-icons';
import HomeScreen from './src/Screens/HomeScreen.js';
import PortfolioScreen from './src/Screens/PortfolioScreen.js';
import HelloScreen from './src/Screens/HelloScreen.js';
import AppleScreen from './src/Screens/AppleScreen.js';
import SwapLineIcon from './src/icons/swap-line.svg';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: 'tomato' },
          headerBackTitle: 'Back',
          headerTintColor: 'white',
          headerRight: () => {
            let iconName;
            
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Settings') {
              iconName = 'settings';
            } else if (route.name === 'Portfolio') {
              iconName = 'briefcase';
            } else if (route.name === 'Apple') {
              iconName = 'nutrition';
            } else if (route.name === 'HelloScreen') {
              iconName = 'information-circle';
            }
            
            return (
              <TouchableOpacity onPress={() => console.log('Header icon pressed')}>
                <Ionicons name={iconName} size={24} color="black" style={{ marginRight: 15 }} />
              </TouchableOpacity>
            );
          },
        })}
      >
        <Stack.Screen 
          name="Home" 
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Settings" component={HelloScreen} />
        <Stack.Screen name="Portfolio" component={PortfolioScreen} />
        <Stack.Screen name="Apple" component={AppleScreen} />
        <Stack.Screen 
          name="HelloScreen" 
          component={HelloScreen}
          options={{ title: 'Pet Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ route }) => ({
        headerLeft: () => (
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <Ionicons name="arrow-back" size={24} color="white" style={{ marginLeft: 15 }} />
  </TouchableOpacity>
),
        headerStyle: { backgroundColor: 'tomato' },
        headerBackTitle: 'Back',
        headerTintColor: 'white',
        headerRight: () => {
          let iconName;
          
          if (route.name === 'HomeScreen') {
            iconName = 'home';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          } else if (route.name === 'Portfolio') {
            iconName = 'briefcase';
          } else if (route.name === 'Apple') {
            iconName = 'nutrition';
          }
          
          return (
            <TouchableOpacity onPress={() => console.log('Header icon pressed')}>
              <Ionicons name={iconName} size={24} color="black" style={{ marginRight: 15 }} />
            </TouchableOpacity>
          );
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          
          if (route.name === 'HomeScreen') {
            return <SwapLineIcon width={size} height={size} fill={color} />;
          } else if (route.name === 'Settings') {
            return <Image source={{uri: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"}} 
                         style={{width:24, height:24}} />;
          } else if (route.name === 'Portfolio') {
            iconName = focused ? 'medical-outline' : 'medical';
          } else if (route.name === 'Apple') {
            iconName = focused ? 'nutrition-outline' : 'nutrition';
          }
          
          return <Ionicons name={iconName} size={25} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Settings" component={HelloScreen} />
      <Tab.Screen name="Portfolio" component={PortfolioScreen} />
      <Tab.Screen name="Apple" component={AppleScreen} />
    </Tab.Navigator>
  );
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});