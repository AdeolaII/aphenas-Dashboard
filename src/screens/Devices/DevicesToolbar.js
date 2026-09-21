import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function DevicesToolbar({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  deviceTypeFilter,
  setDeviceTypeFilter,
  onRegisterDevice,
}) {
  return (
    <View style={styles.toolbar}>
      {/* Search */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search devices..."
          placeholderTextColor="#8A8A8A"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Status Filter */}
      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.filterText}>
          {statusFilter || 'Status'}
        </Text>
        <Text style={styles.arrow}>▼</Text>
      </TouchableOpacity>

      {/* Device Type Filter */}
      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.filterText}>
          {deviceTypeFilter || 'Device Type'}
        </Text>
        <Text style={styles.arrow}>▼</Text>
      </TouchableOpacity>

      {/* Register Device */}
      <TouchableOpacity
        style={styles.registerButton}
        onPress={onRegisterDevice}
      >
        <Text style={styles.registerButtonText}>
          Register Device
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  toolbar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },

  searchContainer: {
    flex: 1,
    minWidth: 260,
  },

  searchInput: {
    height: 44,
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 6,
    paddingHorizontal: 14,
    fontSize: 14,
    color: '#111111',
  },

  filterButton: {
    height: 44,
    minWidth: 145,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  filterText: {
    fontSize: 14,
    color: '#222222',
  },

  arrow: {
    fontSize: 10,
    color: '#555555',
    marginLeft: 10,
  },

  registerButton: {
    height: 44,
    paddingHorizontal: 18,
    borderRadius: 6,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
  },

  registerButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
