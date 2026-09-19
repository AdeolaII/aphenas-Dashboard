import { useState } from 'react';

import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import Sidebar from '../../components/Sidebar/Sidebar';

export default function UsersManagementScreen({ navigation }) {
  const [showFilter, setShowFilter] = useState(false);
  const [showRoles, setShowRoles] = useState(false);
  const [showStatus, setShowStatus] = useState(false);

  const users = [
    {
      id: 'NPF-001-023',
      name: 'John Mark',
      rank: 'Inspector',
      unit: 'Lagos Command',
      role: 'Officer',
      status: 'Active',
    },

    {
      id: 'NPF-001-021',
      name: 'Sarah Ali',
      rank: 'Sergeant',
      unit: 'Abuja Command',
      role: 'Administrator',
      status: 'Active',
    },

    {
      id: 'NPF-001-032',
      name: 'Michael Dan',
      rank: 'Corporal',
      unit: 'Kano Command',
      role: 'Officer',
      status: 'Inactive',
    },

    {
      id: 'NPF-001-028',
      name: 'David Joseph',
      rank: 'Inspector',
      unit: 'PH Command',
      role: 'Manager',
      status: 'Active',
    },

    {
      id: 'NPF-001-035',
      name: 'Chris Bob',
      rank: 'Sergeant',
      unit: 'Kaduna Command',
      role: 'Officer',
      status: 'Pending',
    },

    {
      id: 'NPF-001-016',
      name: 'Mary Kelvin',
      rank: 'Inspector',
      unit: 'Ibadan Command',
      role: 'Administrator',
      status: 'Active',
    },

    {
      id: 'NPF-001-023',
      name: 'D aniel Peter',
      rank: 'Corporal',
      unit: 'Enugu Command',
      role: 'Officer',
      status: 'Suspended',
    },
  ];

  const statusAppearance = {
    Active: {
      backgroundColor: '#E8F0E3',
      color: '#05B330',
    },

    Inactive: {
      backgroundColor: '#F0F0F0',
      color: '#777777',
    },

    Pending: {
      backgroundColor: '#FFF4E5',
      color: '#DA8A00',
    },

    Suspended: {
      backgroundColor: '#FDECEC',
      color: '#F51606',
    },
  };

  /*
   * ---------------------------------------------------------
   * NAVIGATION HANDLERS
   * ---------------------------------------------------------
   *
   * These use the existing React Navigation setup.
   * We are NOT creating a new navigator here.
   */

  const goToDashboard = () => {
    navigation.navigate('DashboardOverview');
  };

  const goToUsersManagement = () => {
    navigation.navigate('UsersManagement');
  };

  const goToCreateNewUser = () => {
    navigation.navigate('CreateNewUser');
  };

  const goToRolesPermissions = () => {
    navigation.navigate('RolesPermissions');
  };

  const goToUnitsCommands = () => {
    navigation.navigate('UnitsCommands');
  };

  return (
    <View style={styles.container}>
      {/* EXISTING SIDEBAR */}
      <Sidebar
        activeItem="Users Management"
        navigation={navigation}
      />

      {/* MAIN CONTENT */}
      <View style={styles.content}>

        {/* HEADER */}
        <View style={styles.header}>

          <View>
            <Text style={styles.pageTitle}>
              USER MANAGEMENT
            </Text>

            <Text style={styles.subtitle}>
              View, Search and Manage all Personal Accounts
            </Text>
          </View>

          <View style={styles.headerActions}>
            <Ionicons
              name="notifications-outline"
              size={24}
              color="#000000"
            />

            <Ionicons
              name="checkmark-circle-outline"
              size={24}
              color="#4B5320"
            />

            <Ionicons
              name="person-circle-outline"
              size={30}
              color="#000000"
            />
          </View>
        </View>

        {/* TOOLBAR */}
        <View style={styles.dataCard}>

          <View style={styles.toolbar}>

            {/* SEARCH + FILTER GROUP */}
            <View style={styles.searchFilterGroup}>

              <Pressable style={styles.searchBox}>
                <Ionicons
                  name="search-outline"
                  size={18}
                  color="#555555"
                />

                <Text style={styles.searchText}>
                  Search by Name, ID, Rank, Unit...
                </Text>
              </Pressable>

              {/* FILTER */}
              <View style={styles.filterContainer}>

                <Pressable
                  style={styles.filterBox}
                  onPress={() => {
                    setShowFilter(!showFilter);
                    setShowRoles(false);
                    setShowStatus(false);
                  }}
                >
                  <Ionicons
                    name="filter-outline"
                    size={18}
                    color="#000000"
                  />

                  <Text style={styles.toolText}>
                    Filter
                  </Text>

                  <Ionicons
                    name="chevron-down-outline"
                    size={15}
                    color="#000000"
                  />
                </Pressable>

                {showFilter && (
                  <View style={styles.dropdown}>

                    <Text style={styles.dropdownItem}>
                      Name
                    </Text>

                    <Text style={styles.dropdownItem}>
                      Service ID
                    </Text>

                    <Text style={styles.dropdownItem}>
                      Rank
                    </Text>

                    <Text style={styles.dropdownItem}>
                      Unit
                    </Text>

                    <Text style={styles.dropdownItem}>
                      Date Created
                    </Text>

                  </View>
                )}

              </View>
            </View>

            {/* ROLES */}
            <View style={styles.dropdownContainer}>

              <Pressable
                style={styles.toolBox}
                onPress={() => {
                  setShowRoles(!showRoles);
                  setShowFilter(false);
                  setShowStatus(false);
                }}
              >
                <Ionicons
                  name="shield-checkmark-outline"
                  size={18}
                  color="#000000"
                />

                <Text style={styles.toolText}>
                  Roles
                </Text>

                <Ionicons
                  name="chevron-down-outline"
                  size={15}
                  color="#000000"
                />
              </Pressable>

              {showRoles && (
                <View style={styles.dropdown}>

                  {/* Existing dropdown option */}
                  <Text style={styles.dropdownItem}>
                    Administrator
                  </Text>

                  <Text style={styles.dropdownItem}>
                    Manager
                  </Text>

                  <Text style={styles.dropdownItem}>
                    Officer
                  </Text>

                  <Text style={styles.dropdownItem}>
                    Supervisor
                  </Text>

                  {/* Navigate to Roles & Permissions */}
                  <Pressable
                    onPress={goToRolesPermissions}
                  >
                    <Text style={styles.dropdownItem}>
                      Manage Roles & Permissions
                    </Text>
                  </Pressable>

                </View>
              )}

            </View>

            {/* STATUS */}
            <View style={styles.dropdownContainer}>

              <Pressable
                style={styles.toolBox}
                onPress={() => {
                  setShowStatus(!showStatus);
                  setShowFilter(false);
                  setShowRoles(false);
                }}
              >
                <Ionicons
                  name="checkmark-circle-outline"
                  size={18}
                  color="#000000"
                />

                <Text style={styles.toolText}>
                  All Status
                </Text>

                <Ionicons
                  name="chevron-down-outline"
                  size={15}
                  color="#000000"
                />
              </Pressable>

              {showStatus && (
                <View style={styles.dropdown}>

                  <Text style={styles.dropdownItem}>
                    Active
                  </Text>

                  <Text style={styles.dropdownItem}>
                    Inactive
                  </Text>

                  <Text style={styles.dropdownItem}>
                    Pending
                  </Text>

                  <Text style={styles.dropdownItem}>
                    Suspended
                  </Text>

                </View>
              )}

            </View>

            {/* CREATE NEW USER */}
            <Pressable
              style={styles.createUserBox}
              onPress={goToCreateNewUser}
            >
              <Ionicons
                name="person-add-outline"
                size={18}
                color="#FFFFFF"
              />

              <Text style={styles.createUserText}>
                Create New User
              </Text>
            </Pressable>

          </View>

          {/* TABLE */}
          <ScrollView
            horizontal
            style={styles.tableScroll}
            contentContainerStyle={styles.tableScrollContent}
            showsHorizontalScrollIndicator={false}
          >

            <View style={styles.tableCard}>

              {/* TABLE HEADER */}
              <View style={styles.tableHeader}>

                <View
                  style={[
                    styles.tableHeaderCell,
                    styles.serialColumn,
                  ]}
                >
                  <Text style={styles.column}>
                    S/N
                  </Text>
                </View>

                <View
                  style={[
                    styles.tableHeaderCell,
                    styles.serviceColumn,
                  ]}
                >
                  <Text style={styles.column}>
                    SERVICE NO.
                  </Text>
                </View>

                <View
                  style={[
                    styles.tableHeaderCell,
                    styles.nameColumn,
                  ]}
                >
                  <Text style={styles.column}>
                    NAME
                  </Text>
                </View>

                <View
                  style={[
                    styles.tableHeaderCell,
                    styles.rankColumn,
                  ]}
                >
                  <Text style={styles.column}>
                    RANK
                  </Text>
                </View>

                <View
                  style={[
                    styles.tableHeaderCell,
                    styles.unitColumn,
                  ]}
                >
                  <Text style={styles.column}>
                    UNIT/DIVISION
                  </Text>
                </View>

                <View
                  style={[
                    styles.tableHeaderCell,
                    styles.roleColumn,
                  ]}
                >
                  <Text style={styles.column}>
                    ROLE
                  </Text>
                </View>

                <View
                  style={[
                    styles.tableHeaderCell,
                    styles.statusColumn,
                  ]}
                >
                  <Text style={styles.column}>
                    STATUS
                  </Text>
                </View>

                <View
                  style={[
                    styles.tableHeaderCell,
                    styles.actionColumn,
                    styles.lastColumn,
                  ]}
                >
                  <Text style={styles.column}>
                    ACTION
                  </Text>
                </View>

              </View>

              {/* TABLE ROWS */}
              {users.map((user, index) => (
                <View
                  key={`${user.id}-${index}`}
                  style={styles.row}
                >

                  <View
                    style={[
                      styles.tableDataCell,
                      styles.serialColumn,
                    ]}
                  >
                    <Text style={styles.cell}>
                      {index + 1}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.tableDataCell,
                      styles.serviceColumn,
                    ]}
                  >
                    <Text style={styles.cell}>
                      {user.id}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.tableDataCell,
                      styles.nameColumn,
                    ]}
                  >
                    <Text style={styles.cell}>
                      {user.name}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.tableDataCell,
                      styles.rankColumn,
                    ]}
                  >
                    <Text style={styles.cell}>
                      {user.rank}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.tableDataCell,
                      styles.unitColumn,
                    ]}
                  >
                    <Text style={styles.cell}>
                      {user.unit}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.tableDataCell,
                      styles.roleColumn,
                    ]}
                  >
                    <Text style={styles.cell}>
                      {user.role}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.tableDataCell,
                      styles.statusContainer,
                      styles.statusColumn,
                    ]}
                  >

                    <View
                      style={[
                        styles.statusBadge,
                        {
                          backgroundColor:
                            statusAppearance[user.status]
                              .backgroundColor,
                        },
                      ]}
                    >

                      <Ionicons
                        name="ellipse"
                        size={7}
                        color={
                          statusAppearance[user.status].color
                        }
                      />

                      <Text
                        style={[
                          styles.statusText,
                          {
                            color:
                              statusAppearance[user.status]
                                .color,
                          },
                        ]}
                      >
                        {user.status}
                      </Text>

                    </View>

                  </View>

                  {/* ACTIONS */}
                  <View
                    style={[
                      styles.tableDataCell,
                      styles.actionRow,
                      styles.actionColumn,
                      styles.lastColumn,
                    ]}
                  >

                    {/* VIEW */}
                    <Pressable
                      onPress={() => {
                        // User details screen can be connected here later.
                      }}
                    >
                      <Ionicons
                        name="eye-outline"
                        size={20}
                        color="#000000"
                      />
                    </Pressable>

                    {/* EDIT */}
                    <Pressable
                      onPress={() => {
                        // Edit user screen can be connected here later.
                      }}
                    >
                      <Ionicons
                        name="create-outline"
                        size={20}
                        color="#000000"
                      />
                    </Pressable>

                    {/* MORE */}
                    <Pressable>
                      <Ionicons
                        name="ellipsis-vertical"
                        size={20}
                        color="#000000"
                      />
                    </Pressable>

                  </View>

                </View>
              ))}

            </View>

          </ScrollView>

          {/* PAGINATION */}
          <View style={styles.pagination}>

            <View style={styles.pageButtons}>

              <Pressable style={styles.pageButton}>
                <Text style={styles.pageText}>
                  1
                </Text>
              </Pressable>

              <Pressable style={styles.pageButton}>
                <Text style={styles.pageText}>
                  2
                </Text>
              </Pressable>

            </View>

            <Text style={styles.showingText}>
              Showing 1 of 6 to 160 users
            </Text>

          </View>

        </View>

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

  content: {
    flex: 1,
    padding: 30,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },

  pageTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#000000',
    letterSpacing: 0.3,
  },

  subtitle: {
    marginTop: 4,
    fontSize: 12,
    color: '#777777',
    fontWeight: '500',
  },

  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },

  dataCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 16,
    overflow: 'visible',
  },

  toolbar: {
    width: '100%',
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    overflow: 'visible',
    marginBottom: 0,
    zIndex: 10,
  },

  searchBox: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    gap: 10,
  },

  searchText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#888888',
  },

  searchFilterGroup: {
    flex: 1,
    minWidth: 0,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    overflow: 'visible',
    zIndex: 3,
  },

  filterContainer: {
    position: 'relative',
    height: '100%',
    borderLeftWidth: 1,
    borderLeftColor: '#DDDDDD',
    zIndex: 3,
  },

  filterBox: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: 14,
  },

  toolBox: {
    height: 55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 14,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
  },

  toolText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#000000',
  },

  dropdownContainer: {
    position: 'relative',
    height: 55,
    zIndex: 2,
  },

  createUserBox: {
    height: 55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 14,
    backgroundColor: '#4B5320',
    borderWidth: 1,
    borderColor: '#4B5320',
    borderRadius: 10,
  },

  createUserText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  dropdown: {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: 200,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    paddingVertical: 10,
    zIndex: 1000,
    elevation: 5,
  },

  dropdownItem: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 11,
    fontWeight: '600',
    color: '#000000',
  },

  tableCard: {
    flex: 1,
    width: '100%',
  },

  tableScroll: {
    width: '100%',
    marginTop: 12,
  },

  tableScrollContent: {
    flexGrow: 1,
    width: '100%',
  },

  tableHeader: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: '#F5F5F5',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },

  column: {
    fontSize: 10,
    fontWeight: '700',
    color: '#000000',
  },

  cell: {
    fontSize: 11,
    fontWeight: '700',
    color: '#111111',
  },

  statusContainer: {
    alignItems: 'flex-start',
  },

  statusBadge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  statusText: {
    fontSize: 10,
    fontWeight: '700',
  },

  actionRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 12,
  },

  tableHeaderCell: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRightWidth: 1,
    borderRightColor: '#D1D5DB',
    borderBottomWidth: 1,
    borderBottomColor: '#D1D5DB',
  },

  tableDataCell: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRightWidth: 1,
    borderRightColor: '#D1D5DB',
    borderBottomWidth: 1,
    borderBottomColor: '#D1D5DB',
  },

  serialColumn: {
    width: 60,
  },

  serviceColumn: {
    flex: 0.7,
    minWidth: 85,
  },

  nameColumn: {
    flex: 1.15,
    minWidth: 125,
  },

  rankColumn: {
    flex: 0.85,
    minWidth: 95,
  },

  unitColumn: {
    flex: 1.35,
    minWidth: 145,
  },

  roleColumn: {
    flex: 0.85,
    minWidth: 100,
  },

  statusColumn: {
    flex: 0.95,
    minWidth: 110,
  },

  actionColumn: {
    flex: 0.85,
    minWidth: 100,
  },

  lastColumn: {
    borderRightWidth: 0,
  },

  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    marginTop: 0,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },

  pageButtons: {
    flexDirection: 'row',
    gap: 8,
  },

  pageButton: {
    width: 35,
    height: 35,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  pageText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#000000',
  },

  showingText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#777777',
  },
});