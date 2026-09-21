import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const devices = [
  {
    id: 'DEV-001',
    assignedUser: 'John Okafor',
    deviceType: 'Mobile',
    serialNumber: 'SN-APH-00124',
    status: 'Active',
    lastSeen: '18 Sep 2026, 11:42 PM',
    registrationDate: '05 Sep 2026',
  },
  {
    id: 'DEV-002',
    assignedUser: 'Sarah Adeyemi',
    deviceType: 'Mobile',
    serialNumber: 'SN-APH-00125',
    status: 'Active',
    lastSeen: '18 Sep 2026, 11:35 PM',
    registrationDate: '05 Sep 2026',
  },
  {
    id: 'DEV-003',
    assignedUser: 'Michael Bello',
    deviceType: 'Tablet',
    serialNumber: 'SN-APH-00126',
    status: 'Active',
    lastSeen: '18 Sep 2026, 11:21 PM',
    registrationDate: '06 Sep 2026',
  },
  {
    id: 'DEV-004',
    assignedUser: 'David Ibrahim',
    deviceType: 'Mobile',
    serialNumber: 'SN-APH-00127',
    status: 'Blocked',
    lastSeen: '17 Sep 2026, 04:18 PM',
    registrationDate: '06 Sep 2026',
  },
  {
    id: 'DEV-005',
    assignedUser: 'Grace Okoro',
    deviceType: 'Mobile',
    serialNumber: 'SN-APH-00128',
    status: 'Active',
    lastSeen: '18 Sep 2026, 10:56 PM',
    registrationDate: '07 Sep 2026',
  },
  {
    id: 'DEV-006',
    assignedUser: 'Daniel Musa',
    deviceType: 'Tablet',
    serialNumber: 'SN-APH-00129',
    status: 'Blocked',
    lastSeen: '16 Sep 2026, 08:32 AM',
    registrationDate: '07 Sep 2026',
  },
  {
    id: 'DEV-007',
    assignedUser: '—',
    deviceType: 'Mobile',
    serialNumber: 'SN-APH-00130',
    status: 'Unassigned',
    lastSeen: '—',
    registrationDate: '—',
  },
  {
    id: 'DEV-008',
    assignedUser: 'Emmanuel James',
    deviceType: 'Mobile',
    serialNumber: 'SN-APH-00131',
    status: 'Active',
    lastSeen: '18 Sep 2026, 09:47 PM',
    registrationDate: '09 Sep 2026',
  },
  {
    id: 'DEV-009',
    assignedUser: 'Mary Joseph',
    deviceType: 'Tablet',
    serialNumber: 'SN-APH-00132',
    status: 'Active',
    lastSeen: '18 Sep 2026, 09:15 PM',
    registrationDate: '10 Sep 2026',
  },
  {
    id: 'DEV-010',
    assignedUser: '—',
    deviceType: 'Mobile',
    serialNumber: 'SN-APH-00133',
    status: 'Unassigned',
    lastSeen: '—',
    registrationDate: '—',
  },
  {
    id: 'DEV-011',
    assignedUser: 'Samuel Eze',
    deviceType: 'Mobile',
    serialNumber: 'SN-APH-00134',
    status: 'Blocked',
    lastSeen: '15 Sep 2026, 02:41 PM',
    registrationDate: '11 Sep 2026',
  },
  {
    id: 'DEV-012',
    assignedUser: 'Blessing Williams',
    deviceType: 'Tablet',
    serialNumber: 'SN-APH-00135',
    status: 'Active',
    lastSeen: '18 Sep 2026, 08:52 PM',
    registrationDate: '12 Sep 2026',
  },
  {
    id: 'DEV-013',
    assignedUser: 'Peter Ahmed',
    deviceType: 'Mobile',
    serialNumber: 'SN-APH-00136',
    status: 'Active',
    lastSeen: '18 Sep 2026, 08:26 PM',
    registrationDate: '12 Sep 2026',
  },
  {
    id: 'DEV-014',
    assignedUser: '—',
    deviceType: 'Tablet',
    serialNumber: 'SN-APH-00137',
    status: 'Unassigned',
    lastSeen: '—',
    registrationDate: '—',
  },
  {
    id: 'DEV-015',
    assignedUser: 'Linda Ojo',
    deviceType: 'Mobile',
    serialNumber: 'SN-APH-00138',
    status: 'Blocked',
    lastSeen: '17 Sep 2026, 06:05 PM',
    registrationDate: '14 Sep 2026',
  },
];

const ITEMS_PER_PAGE = 15;

export default function DevicesDataTable({
  onViewDetails,
  onBlock,
  onUnblock,
  onAssignUser,
  onRegisterDevice,
}) {
  const [currentPage, setCurrentPage] = React.useState(1);

  const totalPages = Math.ceil(devices.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentDevices = devices.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const startItem =
    devices.length === 0 ? 0 : startIndex + 1;

  const endItem = Math.min(
    startIndex + ITEMS_PER_PAGE,
    devices.length
  );

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((page) => page + 1);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderStatus = (status) => {
    let badgeStyle = styles.statusUnassigned;
    let textStyle = styles.statusUnassignedText;

    if (status === 'Active') {
      badgeStyle = styles.statusActive;
      textStyle = styles.statusActiveText;
    }

    if (status === 'Blocked') {
      badgeStyle = styles.statusBlocked;
      textStyle = styles.statusBlockedText;
    }

    return (
      <View style={[styles.statusBadge, badgeStyle]}>
        <Text style={[styles.statusText, textStyle]}>
          {status}
        </Text>
      </View>
    );
  };

  const renderActions = (device) => {
    if (device.status === 'Active') {
      return (
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            onPress={() => onViewDetails?.(device)}
          >
            <Text style={styles.viewAction}>
              View Details
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onBlock?.(device)}
          >
            <Text style={styles.blockAction}>
              Block
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    if (device.status === 'Blocked') {
      return (
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            onPress={() => onViewDetails?.(device)}
          >
            <Text style={styles.viewAction}>
              View Details
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => onUnblock?.(device)}
          >
            <Text style={styles.unblockAction}>
              Unblock
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          onPress={() => onAssignUser?.(device)}
        >
          <Text style={styles.assignAction}>
            Assign User
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onRegisterDevice?.(device)}
        >
          <Text style={styles.registerAction}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Data Table */}
      <View style={styles.tableWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.tableScrollContent}
        >
          <View style={styles.table}>
            {/* Table Header */}
            <View style={styles.headerRow}>
              <View style={[styles.cell, styles.serialColumn]}>
                <Text style={styles.headerText}>S/NO</Text>
              </View>

              <View style={[styles.cell, styles.deviceIdColumn]}>
                <Text style={styles.headerText}>DEVICE ID</Text>
              </View>

              <View style={[styles.cell, styles.userColumn]}>
                <Text style={styles.headerText}>ASSIGNED USER</Text>
              </View>

              <View style={[styles.cell, styles.typeColumn]}>
                <Text style={styles.headerText}>DEVICE TYPE</Text>
              </View>

              <View style={[styles.cell, styles.serialNumberColumn]}>
                <Text style={styles.headerText}>SERIAL NUMBER</Text>
              </View>

              <View style={[styles.cell, styles.statusColumn]}>
                <Text style={styles.headerText}>STATUS</Text>
              </View>

              <View style={[styles.cell, styles.lastSeenColumn]}>
                <Text style={styles.headerText}>LAST SEEN</Text>
              </View>

              <View style={[styles.cell, styles.registrationColumn]}>
                <Text style={styles.headerText}>
                  REGISTRATION DATE
                </Text>
              </View>

              <View style={[styles.cell, styles.actionsColumn]}>
                <Text style={styles.headerText}>ACTIONS</Text>
              </View>
            </View>

            {/* Table Rows */}
            {currentDevices.map((device, index) => (
              <View
                key={device.id}
                style={[
                  styles.dataRow,
                  index === currentDevices.length - 1 &&
                    styles.lastRow,
                ]}
              >
                <View style={[styles.cell, styles.serialColumn]}>
                  <Text style={styles.dataText}>
                    {startIndex + index + 1}
                  </Text>
                </View>

                <View style={[styles.cell, styles.deviceIdColumn]}>
                  <Text style={styles.deviceIdText}>
                    {device.id}
                  </Text>
                </View>

                <View style={[styles.cell, styles.userColumn]}>
                  <Text style={styles.dataText}>
                    {device.assignedUser}
                  </Text>
                </View>

                <View style={[styles.cell, styles.typeColumn]}>
                  <Text style={styles.dataText}>
                    {device.deviceType}
                  </Text>
                </View>

                <View
                  style={[
                    styles.cell,
                    styles.serialNumberColumn,
                  ]}
                >
                  <Text style={styles.dataText}>
                    {device.serialNumber}
                  </Text>
                </View>

                <View style={[styles.cell, styles.statusColumn]}>
                  {renderStatus(device.status)}
                </View>

                <View style={[styles.cell, styles.lastSeenColumn]}>
                  <Text style={styles.dataText}>
                    {device.lastSeen}
                  </Text>
                </View>

                <View
                  style={[
                    styles.cell,
                    styles.registrationColumn,
                  ]}
                >
                  <Text style={styles.dataText}>
                    {device.registrationDate}
                  </Text>
                </View>

                <View style={[styles.cell, styles.actionsColumn]}>
                  {renderActions(device)}
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Pagination */}
      <View style={styles.paginationContainer}>
        <Text style={styles.resultsText}>
          Showing {startItem}–{endItem} of {devices.length} devices
        </Text>

        <View style={styles.paginationControls}>
          <TouchableOpacity
            style={[
              styles.navigationButton,
              currentPage === 1 && styles.disabledButton,
            ]}
            disabled={currentPage === 1}
            onPress={handlePrevious}
          >
            <Text
              style={[
                styles.navigationText,
                currentPage === 1 && styles.disabledText,
              ]}
            >
              ← Previous
            </Text>
          </TouchableOpacity>

          {Array.from(
            { length: totalPages },
            (_, index) => index + 1
          ).map((page) => (
            <TouchableOpacity
              key={page}
              style={[
                styles.pageButton,
                currentPage === page &&
                  styles.activePageButton,
              ]}
              onPress={() => handlePageChange(page)}
            >
              <Text
                style={[
                  styles.pageText,
                  currentPage === page &&
                    styles.activePageText,
                ]}
              >
                {page}
              </Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity
            style={[
              styles.navigationButton,
              currentPage === totalPages &&
                styles.disabledButton,
            ]}
            disabled={currentPage === totalPages}
            onPress={handleNext}
          >
            <Text
              style={[
                styles.navigationText,
                currentPage === totalPages &&
                  styles.disabledText,
              ]}
            >
              Next →
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  tableWrapper: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E1E1E1',
    borderRadius: 6,
    overflow: 'hidden',
  },

  tableScrollContent: {
    flexGrow: 1,
  },

  table: {
    width: '100%',
    minWidth: 1450,
  },

  headerRow: {
    minHeight: 52,
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: '#F7F7F7',
    borderBottomWidth: 1,
    borderBottomColor: '#DCDCDC',
  },

  dataRow: {
    minHeight: 64,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E9E9E9',
  },

  lastRow: {
    borderBottomWidth: 0,
  },

  cell: {
    justifyContent: 'center',
    paddingHorizontal: 14,
    borderRightWidth: 1,
    borderRightColor: '#EEEEEE',
  },

  serialColumn: {
    width: 65,
  },

  deviceIdColumn: {
    width: 105,
  },

  userColumn: {
    width: 175,
  },

  typeColumn: {
    width: 115,
  },

  serialNumberColumn: {
    width: 150,
  },

  statusColumn: {
    width: 120,
  },

  lastSeenColumn: {
    width: 205,
  },

  registrationColumn: {
    width: 155,
  },

  actionsColumn: {
    width: 240,
    flexGrow: 1,
    borderRightWidth: 0,
  },

  headerText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#222222',
  },

  dataText: {
    fontSize: 13,
    color: '#444444',
  },

  deviceIdText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#222222',
  },

  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },

  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },

  statusActive: {
    backgroundColor: '#E8E8E8',
  },

  statusActiveText: {
    color: '#222222',
  },

  statusBlocked: {
    backgroundColor: '#DCDCDC',
  },

  statusBlockedText: {
    color: '#333333',
  },

  statusUnassigned: {
    backgroundColor: '#F1F1F1',
  },

  statusUnassignedText: {
    color: '#666666',
  },

  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  viewAction: {
    fontSize: 12,
    fontWeight: '600',
    color: '#222222',
  },

  blockAction: {
    fontSize: 12,
    fontWeight: '600',
    color: '#555555',
  },

  unblockAction: {
    fontSize: 12,
    fontWeight: '600',
    color: '#222222',
  },

  assignAction: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333333',
  },

  registerAction: {
    fontSize: 12,
    fontWeight: '600',
    color: '#111111',
  },

  paginationContainer: {
    minHeight: 64,
    paddingTop: 16,
    paddingBottom: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  resultsText: {
    fontSize: 13,
    color: '#666666',
  },

  paginationControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  navigationButton: {
    minWidth: 90,
    height: 36,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pageButton: {
    width: 36,
    height: 36,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  activePageButton: {
    backgroundColor: '#111111',
    borderColor: '#111111',
  },

  pageText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333333',
  },

  activePageText: {
    color: '#FFFFFF',
  },

  navigationText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#222222',
  },

  disabledButton: {
    backgroundColor: '#F5F5F5',
    borderColor: '#E5E5E5',
  },

  disabledText: {
    color: '#AAAAAA',
  },
});
