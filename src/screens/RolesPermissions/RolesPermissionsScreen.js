import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function RolesPermissionsScreen({ navigation }) {

  return (
    <View style={styles.container}>

      {/* SIDEBAR */}
      <Sidebar
        activeItem="Roles & Permissions"
        navigation={navigation}
      />

      {/* MAIN CONTENT */}
      <View style={styles.mainContent}>

        {/* HEADER */}
        <Header
          title="ROLES & PERMISSIONS"
          subtitle="Administration"
          adminName="Super Administrator"
          adminRole="System Administrator"
          notificationCount={3}
        />

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >

          {/* PAGE HEADER */}
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>
                ROLES & PERMISSIONS
              </Text>

              <Text style={styles.breadcrumb}>
                Administration / Roles & Permissions
              </Text>
            </View>

            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>
                + Add Role
              </Text>
            </TouchableOpacity>
          </View>

          {/* TABS */}
          <View style={styles.tabsContainer}>

            <TouchableOpacity
              style={[styles.tab, styles.activeTab]}
            >
              <Text
                style={[
                  styles.tabText,
                  styles.activeTabText,
                ]}
              >
                Roles
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tab}>
              <Text style={styles.tabText}>
                Permissions
              </Text>
            </TouchableOpacity>

          </View>

          {/* TABLE */}
          <View style={styles.tableContainer}>

            {/* TABLE HEADER */}
            <View
              style={[
                styles.tableRow,
                styles.tableHeader,
              ]}
            >
              <Text
                style={[
                  styles.headerCell,
                  styles.roleColumn,
                ]}
              >
                ROLE NAME
              </Text>

              <Text
                style={[
                  styles.headerCell,
                  styles.descriptionColumn,
                ]}
              >
                DESCRIPTION
              </Text>

              <Text
                style={[
                  styles.headerCell,
                  styles.levelColumn,
                ]}
              >
                LEVEL
              </Text>

              <Text
                style={[
                  styles.headerCell,
                  styles.usersColumn,
                ]}
              >
                USERS
              </Text>

              <Text
                style={[
                  styles.headerCell,
                  styles.actionColumn,
                ]}
              >
                ACTIONS
              </Text>
            </View>

            {/* SUPER ADMIN */}
            <View style={styles.tableRow}>

              <Text
                style={[
                  styles.cell,
                  styles.roleColumn,
                ]}
              >
                SUPER_ADMIN
              </Text>

              <Text
                style={[
                  styles.cell,
                  styles.descriptionColumn,
                ]}
              >
                Global system administrator
              </Text>

              <Text
                style={[
                  styles.cell,
                  styles.levelColumn,
                ]}
              >
                1
              </Text>

              <Text
                style={[
                  styles.cell,
                  styles.usersColumn,
                ]}
              >
                1
              </Text>

              <View
                style={[
                  styles.actionColumn,
                  styles.actionCell,
                ]}
              >
                <TouchableOpacity
                  style={styles.actionButton}
                >
                  <Text style={styles.actionText}>
                    View
                  </Text>
                </TouchableOpacity>
              </View>

            </View>

            {/* STATE ADMIN */}
            <View style={styles.tableRow}>

              <Text
                style={[
                  styles.cell,
                  styles.roleColumn,
                ]}
              >
                STATE_ADMIN
              </Text>

              <Text
                style={[
                  styles.cell,
                  styles.descriptionColumn,
                ]}
              >
                State-level administrator
              </Text>

              <Text
                style={[
                  styles.cell,
                  styles.levelColumn,
                ]}
              >
                2
              </Text>

              <Text
                style={[
                  styles.cell,
                  styles.usersColumn,
                ]}
              >
                5
              </Text>

              <View
                style={[
                  styles.actionColumn,
                  styles.actionCell,
                ]}
              >
                <TouchableOpacity
                  style={styles.actionButton}
                >
                  <Text style={styles.actionText}>
                    View
                  </Text>
                </TouchableOpacity>
              </View>

            </View>

            {/* AREA MANAGER */}
            <View style={styles.tableRow}>

              <Text
                style={[
                  styles.cell,
                  styles.roleColumn,
                ]}
              >
                AREA_MANAGER
              </Text>

              <Text
                style={[
                  styles.cell,
                  styles.descriptionColumn,
                ]}
              >
                Area and zone management
              </Text>

              <Text
                style={[
                  styles.cell,
                  styles.levelColumn,
                ]}
              >
                3
              </Text>

              <Text
                style={[
                  styles.cell,
                  styles.usersColumn,
                ]}
              >
                15
              </Text>

              <View
                style={[
                  styles.actionColumn,
                  styles.actionCell,
                ]}
              >
                <TouchableOpacity
                  style={styles.actionButton}
                >
                  <Text style={styles.actionText}>
                    View
                  </Text>
                </TouchableOpacity>
              </View>

            </View>

            {/* DIVISION MANAGER */}
            <View style={styles.tableRow}>

              <Text
                style={[
                  styles.cell,
                  styles.roleColumn,
                ]}
              >
                DIVISION_MANAGER
              </Text>

              <Text
                style={[
                  styles.cell,
                  styles.descriptionColumn,
                ]}
              >
                Division-level management
              </Text>

              <Text
                style={[
                  styles.cell,
                  styles.levelColumn,
                ]}
              >
                4
              </Text>

              <Text
                style={[
                  styles.cell,
                  styles.usersColumn,
                ]}
              >
                25
              </Text>

              <View
                style={[
                  styles.actionColumn,
                  styles.actionCell,
                ]}
              >
                <TouchableOpacity
                  style={styles.actionButton}
                >
                  <Text style={styles.actionText}>
                    View
                  </Text>
                </TouchableOpacity>
              </View>

            </View>

            {/* TEAM LEAD */}
            <View style={styles.tableRow}>

              <Text
                style={[
                  styles.cell,
                  styles.roleColumn,
                ]}
              >
                TEAM_LEAD
              </Text>

              <Text
                style={[
                  styles.cell,
                  styles.descriptionColumn,
                ]}
              >
                Team-level management
              </Text>

              <Text
                style={[
                  styles.cell,
                  styles.levelColumn,
                ]}
              >
                5
              </Text>

              <Text
                style={[
                  styles.cell,
                  styles.usersColumn,
                ]}
              >
                45
              </Text>

              <View
                style={[
                  styles.actionColumn,
                  styles.actionCell,
                ]}
              >
                <TouchableOpacity
                  style={styles.actionButton}
                >
                  <Text style={styles.actionText}>
                    View
                  </Text>
                </TouchableOpacity>
              </View>

            </View>

            {/* SENIOR STAFF */}
            <View style={styles.tableRow}>

              <Text
                style={[
                  styles.cell,
                  styles.roleColumn,
                ]}
              >
                SENIOR_STAFF
              </Text>

              <Text
                style={[
                  styles.cell,
                  styles.descriptionColumn,
                ]}
              >
                Senior staff access
              </Text>

              <Text
                style={[
                  styles.cell,
                  styles.levelColumn,
                ]}
              >
                6
              </Text>

              <Text
                style={[
                  styles.cell,
                  styles.usersColumn,
                ]}
              >
                120
              </Text>

              <View
                style={[
                  styles.actionColumn,
                  styles.actionCell,
                ]}
              >
                <TouchableOpacity
                  style={styles.actionButton}
                >
                  <Text style={styles.actionText}>
                    View
                  </Text>
                </TouchableOpacity>
              </View>

            </View>

            {/* STAFF */}
            <View style={styles.tableRow}>

              <Text
                style={[
                  styles.cell,
                  styles.roleColumn,
                ]}
              >
                STAFF
              </Text>

              <Text
                style={[
                  styles.cell,
                  styles.descriptionColumn,
                ]}
              >
                General staff access
              </Text>

              <Text
                style={[
                  styles.cell,
                  styles.levelColumn,
                ]}
              >
                7
              </Text>

              <Text
                style={[
                  styles.cell,
                  styles.usersColumn,
                ]}
              >
                200
              </Text>

              <View
                style={[
                  styles.actionColumn,
                  styles.actionCell,
                ]}
              >
                <TouchableOpacity
                  style={styles.actionButton}
                >
                  <Text style={styles.actionText}>
                    View
                  </Text>
                </TouchableOpacity>
              </View>

            </View>

          </View>

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
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111111',
  },

  breadcrumb: {
    marginTop: 6,
    fontSize: 13,
    color: '#777777',
  },

  addButton: {
    backgroundColor: '#111111',
    paddingHorizontal: 18,
    paddingVertical: 11,
    borderRadius: 6,
  },

  addButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },

  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
    marginBottom: 20,
  },

  tab: {
    paddingHorizontal: 24,
    paddingVertical: 14,
  },

  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#111111',
  },

  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#777777',
  },

  activeTabText: {
    color: '#111111',
    fontWeight: '700',
  },

  tableContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    overflow: 'hidden',
  },

  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 64,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingHorizontal: 16,
  },

  tableHeader: {
    backgroundColor: '#F8F8F8',
    minHeight: 52,
  },

  headerCell: {
    fontSize: 12,
    fontWeight: '700',
    color: '#333333',
  },

  cell: {
    fontSize: 13,
    color: '#444444',
  },

  roleColumn: {
    flex: 1.4,
  },

  descriptionColumn: {
    flex: 2,
  },

  levelColumn: {
    flex: 0.6,
    textAlign: 'center',
  },

  usersColumn: {
    flex: 0.6,
    textAlign: 'center',
  },

  actionColumn: {
    flex: 0.9,
    alignItems: 'center',
  },

  actionCell: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  actionButton: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 5,
  },

  actionText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#222222',
  },

  bottomSpacing: {
    height: 20,
  },

});
