import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const UnitDetails = ({ unit }) => {
  if (!unit) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          Select a unit to view details
        </Text>
      </View>
    );
  }

  const isAlpha = unit.id === 'alpha';

  return (
    <View style={styles.container}>
      <Text style={styles.unitName}>
        {unit.name}
      </Text>

      <Text style={styles.unitType}>
        {unit.type}
      </Text>

      <View style={styles.divider} />

      <DetailRow
        label="Unit Code"
        value={isAlpha ? 'DV-ALPHA-01' : '—'}
      />

      <DetailRow
        label="Unit Type"
        value={unit.type}
      />

      <DetailRow
        label="Parent Unit"
        value={isAlpha ? 'Area A Command' : '—'}
      />

      <DetailRow
        label="Description"
        value={
          isAlpha
            ? 'Prime operational division for Alpha Area, handling primary response.'
            : 'No description available.'
        }
      />

      <DetailRow
        label="Status"
        value="Active"
        status
      />

      <DetailRow
        label="Total Personnel"
        value={isAlpha ? '145' : '—'}
      />

      <DetailRow
        label="Created Date"
        value={isAlpha ? '12 Jan 2023' : '—'}
      />

      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>
            Edit Unit
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.subUnitButton}>
          <Text style={styles.subUnitButtonText}>
            Add Sub-Unit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DetailRow = ({
  label,
  value,
  status = false,
}) => {
  return (
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>
        {label}
      </Text>

      {status ? (
        <View style={styles.statusBadge}>
          <View style={styles.statusDot} />

          <Text style={styles.statusText}>
            {value}
          </Text>
        </View>
      ) : (
        <Text style={styles.detailValue}>
          {value}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 450,
  },

  emptyText: {
    fontSize: 14,
    color: '#999999',
  },

  unitName: {
    fontSize: 21,
    fontWeight: '700',
    color: '#111111',
  },

  unitType: {
    marginTop: 5,
    fontSize: 13,
    color: '#777777',
    textTransform: 'capitalize',
  },

  divider: {
    height: 1,
    backgroundColor: '#E8E8E8',
    marginVertical: 20,
  },

  detailRow: {
    marginBottom: 18,
  },

  detailLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#888888',
    marginBottom: 5,
  },

  detailValue: {
    fontSize: 14,
    color: '#222222',
    lineHeight: 20,
  },

  statusBadge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 7,
    backgroundColor: '#222222',
    marginRight: 6,
  },

  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#222222',
  },

  actionContainer: {
    marginTop: 15,
    gap: 10,
  },

  editButton: {
    height: 42,
    borderRadius: 7,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
  },

  editButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },

  subUnitButton: {
    height: 42,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#D5D5D5',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  subUnitButtonText: {
    color: '#222222',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default UnitDetails;