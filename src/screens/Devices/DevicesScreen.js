import { useState } from 'react';
import {
    Alert,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Sidebar from '../../components/Sidebar/Sidebar';
import DevicesDataTable from './DevicesDataTable';
import DevicesToolbar from './DevicesToolbar';

export default function DevicesScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [deviceTypeFilter, setDeviceTypeFilter] = useState('');

  const handleRegisterDevice = () => {
    Alert.alert(
      'Register Device',
      'Device registration will be implemented next.'
    );
  };

  const handleViewDetails = (device) => {
    Alert.alert(
      'View Device',
      `Viewing details for ${device.id}`
    );
  };

  const handleBlock = (device) => {
    Alert.alert(
      'Block Device',
      `Block ${device.id}?`
    );
  };

  const handleUnblock = (device) => {
    Alert.alert(
      'Unblock Device',
      `Unblock ${device.id}?`
    );
  };

  const handleAssignUser = (device) => {
    Alert.alert(
      'Assign User',
      `Assign a user to ${device.id}`
    );
  };

  const handleRegisterFromTable = (device) => {
    Alert.alert(
      'Register Device',
      `Register ${device.id}?`
    );
  };

  return (
    <View style={styles.screen}>
      {/* Sidebar */}
      <Sidebar
        activeItem="Devices"
        navigation={navigation}
      />

      {/* Main Content */}
      <View style={styles.mainContent}>
        <ScrollView
          showsVerticalScrollIndicator={true}
          style={styles.pageScroll}
        >
          {/* Page Header */}
          <View style={styles.pageHeader}>
            <Text style={styles.pageTitle}>
              Devices
            </Text>

            <Text style={styles.pageSubtitle}>
              Manage and monitor registered devices
            </Text>
          </View>

          {/* Toolbar */}
          <DevicesToolbar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            deviceTypeFilter={deviceTypeFilter}
            setDeviceTypeFilter={setDeviceTypeFilter}
            onRegisterDevice={handleRegisterDevice}
          />

          {/* Data Table */}
          <DevicesDataTable
            onViewDetails={handleViewDetails}
            onBlock={handleBlock}
            onUnblock={handleUnblock}
            onAssignUser={handleAssignUser}
            onRegisterDevice={handleRegisterFromTable}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F7F7F7',
  },

  mainContent: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 28,
    paddingBottom: 24,
    overflow: 'hidden',
  },

  pageScroll: {
    flex: 1,
    minHeight: 0,
    ...Platform.select({
      web: {
        scrollbarWidth: 'thin',
      },
      default: {},
    }),
  },

  pageHeader: {
    marginBottom: 24,
  },

  pageTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111111',
    marginBottom: 6,
  },

  pageSubtitle: {
    fontSize: 14,
    color: '#666666',
  },
});
