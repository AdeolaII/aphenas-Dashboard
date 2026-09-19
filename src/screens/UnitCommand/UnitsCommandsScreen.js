import { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import Sidebar from '../../components/Sidebar/Sidebar';

import OrganizationalHierarchy from './OrganizationalHierarchy';
import UnitDetails from './UnitDetails';

const UnitsCommandsScreen = ({ navigation }) => {
  const [selectedUnit, setSelectedUnit] = useState({
    id: 'alpha',
    name: 'Alpha Division',
    type: 'division',
  });

  const handleUnitSelect = (unit) => {
    setSelectedUnit(unit);
  };

  return (
    <View style={styles.container}>
      <Sidebar
        activeItem="Units/Commands"
        navigation={navigation}
      />

      <View style={styles.contentArea}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
        {/* Page Header */}
        <View style={styles.pageHeader}>
          <View>
            <Text style={styles.pageTitle}>
              Units / Commands
            </Text>

            <Text style={styles.pageSubtitle}>
              Manage organizational units and command structure
            </Text>
          </View>

          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonIcon}>+</Text>

            <Text style={styles.addButtonText}>
              Add Unit
            </Text>
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>⌕</Text>

          <TextInput
            style={styles.searchInput}
            placeholder="Search units/commands"
            placeholderTextColor="#8A8A8A"
          />
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>

          {/* Organizational Hierarchy */}
          <View style={styles.hierarchyPanel}>
            <Text style={styles.panelTitle}>
              Organizational Hierarchy
            </Text>

            <OrganizationalHierarchy
              onSelect={handleUnitSelect}
            />
          </View>

          {/* Unit Details */}
          <View style={styles.detailsPanel}>
            <Text style={styles.panelTitle}>
              Unit Details
            </Text>

            <UnitDetails
              unit={selectedUnit}
            />
          </View>

        </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
  },

  contentArea: {
    flex: 1,
    backgroundColor: '#F6F7F9',
  },

  content: {
    padding: 28,
    paddingBottom: 40,
  },

  pageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 22,
  },

  pageTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111111',
  },

  pageSubtitle: {
    marginTop: 6,
    fontSize: 14,
    color: '#777777',
  },

  addButton: {
    height: 42,
    paddingHorizontal: 18,
    borderRadius: 7,
    backgroundColor: '#111111',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  addButtonIcon: {
    fontSize: 20,
    color: '#FFFFFF',
    marginRight: 8,
  },

  addButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  searchContainer: {
    height: 44,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E1E3E6',
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    marginBottom: 20,
  },

  searchIcon: {
    fontSize: 21,
    color: '#777777',
    marginRight: 9,
  },

  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 14,
    color: '#111111',
  },

  mainContent: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: 20,
  },

  hierarchyPanel: {
    flex: 2,
    minHeight: 560,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E1E3E6',
    borderRadius: 9,
    padding: 22,
  },

  detailsPanel: {
    flex: 1,
    minHeight: 560,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E1E3E6',
    borderRadius: 9,
    padding: 22,
  },

  panelTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111111',
    marginBottom: 20,
  },
});

export default UnitsCommandsScreen;
