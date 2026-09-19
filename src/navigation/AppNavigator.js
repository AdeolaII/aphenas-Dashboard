import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AdminLoginScreen from '../screens/AdminLoginScreen/AdminLoginScreen';
import SplashScreen from '../screens/SplashScreen/SplashScreen';

import CreateNewUserScreen from '../screens/CreateNewUserScreen/CreateNewUserScreen';
import DashboardOverviewScreen from '../screens/DashboardOverview/DashboardOverviewScreen';
import RolesPermissionsScreen from '../screens/RolesPermissions/RolesPermissionsScreen';
import UnitsCommandsScreen from '../screens/UnitCommand/UnitsCommandsScreen';
import UsersManagementScreen from '../screens/UsersManagement/UsersManagementScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* SPLASH */}
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
        />

        {/* ADMIN LOGIN */}
        <Stack.Screen
          name="AdminLogin"
          component={AdminLoginScreen}
        />

        {/* DASHBOARD */}
        <Stack.Screen
          name="DashboardOverview"
          component={DashboardOverviewScreen}
        />

        {/* USERS MANAGEMENT */}
        <Stack.Screen
          name="UsersManagement"
          component={UsersManagementScreen}
        />

        {/* CREATE NEW USER */}
        <Stack.Screen
          name="CreateNewUser"
          component={CreateNewUserScreen}
        />

        {/* ROLES & PERMISSIONS */}
        <Stack.Screen
          name="RolesPermissions"
          component={RolesPermissionsScreen}
        />

        {/* UNITS / COMMANDS */}
        <Stack.Screen
          name="UnitsCommands"
          component={UnitsCommandsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
