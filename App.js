
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import DashboardOverviewScreen from './src/screens/DashboardOverview/DashboardOverviewScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <DashboardOverviewScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});