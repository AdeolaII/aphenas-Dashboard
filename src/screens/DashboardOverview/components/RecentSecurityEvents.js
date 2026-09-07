
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function RecentSecurityEvents() {
  const events = [
    {
      id: '1',
      title: 'Failed login attempts',
      description: 'Multiple failed login attempts detected',
      time: '12 mins ago',
      status: 'High',
    },
    {
      id: '2',
      title: 'New device detected',
      description: 'Unrecognized device attempted authentication',
      time: '38 mins ago',
      status: 'Medium',
    },
    {
      id: '3',
      title: 'Session terminated',
      description: 'Administrator ended an active user session',
      time: '1 hr ago',
      status: 'Normal',
    },
  ];

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>
            Recent Security Events
          </Text>

          <Text style={styles.subtitle}>
            Latest security-related activity
          </Text>
        </View>

        <Text style={styles.viewAll}>
          View All
        </Text>
      </View>

      <View style={styles.list}>
        {events.map((event, index) => (
          <View
            key={event.id}
            style={[
              styles.eventRow,
              index !== events.length - 1 &&
                styles.eventBorder,
            ]}
          >
            <View style={styles.eventIcon}>
              <Text style={styles.eventIconText}>
                !
              </Text>
            </View>

            <View style={styles.eventContent}>
              <Text style={styles.eventTitle}>
                {event.title}
              </Text>

              <Text style={styles.eventDescription}>
                {event.description}
              </Text>

              <Text style={styles.eventTime}>
                {event.time}
              </Text>
            </View>

            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>
                {event.status}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 12,
    padding: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  title: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '700',
  },

  subtitle: {
    marginTop: 4,
    color: '#8A8A8A',
    fontSize: 10,
  },

  viewAll: {
    color: '#000000',
    fontSize: 10,
    fontWeight: '700',
  },

  list: {
    marginTop: 18,
  },

  eventRow: {
    minHeight: 76,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },

  eventBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },

  eventIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  eventIconText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },

  eventContent: {
    flex: 1,
    paddingRight: 15,
  },

  eventTitle: {
    color: '#000000',
    fontSize: 11,
    fontWeight: '700',
  },

  eventDescription: {
    marginTop: 3,
    color: '#777777',
    fontSize: 9,
  },

  eventTime: {
    marginTop: 4,
    color: '#999999',
    fontSize: 8,
  },

  statusBadge: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  statusText: {
    color: '#000000',
    fontSize: 8,
    fontWeight: '700',
  },
});