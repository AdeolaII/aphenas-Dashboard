
import {
    ScrollView,
    StyleSheet,
    View,
    useWindowDimensions,
} from 'react-native';

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';

import DashboardStats from './components/DashboardStats';
import PasswordResetRequests from './components/PasswordResetRequests';
import QuickActions from './components/QuickActions';
import RecentActivity from './components/RecentActivity';
import RecentSecurityEvents from './components/RecentSecurityEvents';
import UserActivity from './components/UserActivity';

export default function DashboardOverviewScreen() {
  const { width } = useWindowDimensions();

  const isSmallScreen = width < 1200;

  const handleSidebarNavigation = (item) => {
    console.log('Navigate to:', item);
  };

  const handleQuickAction = (action) => {
    console.log('Quick action:', action);
  };

  return (
    <View style={styles.container}>
      <Sidebar
        activeItem="Dashboard"
        onNavigate={handleSidebarNavigation}
      />

      <View style={styles.mainContent}>
        <Header
          title="DASHBOARD"
          subtitle="Overview"
          adminName="Super Administrator"
          adminRole="System Administrator"
          notificationCount={3}
        />

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <DashboardStats />

          <View
            style={[
              styles.activitySection,
              isSmallScreen &&
                styles.activitySectionSmall,
            ]}
          >
            <View style={styles.activityLarge}>
              <UserActivity />
            </View>

            <View style={styles.activityMedium}>
              <RecentActivity />
            </View>

            <View style={styles.activityMedium}>
              <PasswordResetRequests />
            </View>
          </View>

          <RecentSecurityEvents />

          <QuickActions
            onActionPress={handleQuickAction}
          />

          <View style={styles.bottomSpacing} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
  },

  mainContent: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 30,
    gap: 20,
  },

  activitySection: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: 15,
  },

  activitySectionSmall: {
    flexDirection: 'column',
  },

  activityLarge: {
    flex: 1.3,
    minWidth: 300,
  },

  activityMedium: {
    flex: 1,
    minWidth: 280,
  },

  bottomSpacing: {
    height: 20,
  },
});