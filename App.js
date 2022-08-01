import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons} from '@expo/vector-icons';

import ManageExpenses from "./screen/MangageExpenses";
import RecentExpenses from "./screen/RecentExpenses";
import AllExpenses from "./screen/AllExpenses";
import { GlobalStyles } from "./constants/styles";
import IconButton from "./components/UI/IconButton";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator screenOptions={{
headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
headerTintColor: 'white',
tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
tabBarActiveTintColor: GlobalStyles.colors.accent500,
headerRight: ({ tintColor }) => (
  <IconButton icon="add" size={24} color={tintColor} onPress={() => {}} />
),
}}
>
      <BottomTabs.Screen name="RecentExpenses" component={RecentExpenses} options={{
        title: 'Recent expenses',
        tabBarLabel: 'Recent',
        tabBarIcon: ({ color, size }) => <Ionicons name="hourglass" size={size} color={color} />
      }} />
      <BottomTabs.Screen name="AllExpenses" component={AllExpenses} options={{
        title: 'All Expenses',
        tabBarLabel: 'All Expenses',
        tabBarIcon: ({ color, size }) => <Ionicons name="calendar" size={size} color={color} />
      }}/>
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="ManageExpenses" component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
