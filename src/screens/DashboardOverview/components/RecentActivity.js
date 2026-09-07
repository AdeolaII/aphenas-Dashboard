
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function RecentActivity() {
  const activities = [
    {
      id: '1',
      title: 'New user created',
      description: 'Officer account added to the system',
      time: '5 mins ago',
    },
    {
      id: '2',
      title: 'Signal broadcasted',
      description: 'Operation Safe Tower - All Units',
      time: '27 mins ago',
    },

    {
      id: '3',
      title: 'Device registered',
      description: 'A new verified device was added',
      time: '18 mins ago',
    },
    {
      id: '4',
      title: 'Password reset request',
      description: 'A user requested password assistance',
      time: '42 mins ago',
    },
    {
      id: '5',
      title: 'Failed login attempt',
      description: 'Multiple failed login attempts detected',
      time: '1 hr ago',
    },
  ];

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>
            Recent Activity
          </Text>

          <Text style={styles.subtitle}>
            Latest administrative and system activity
          </Text>
        </View>

        <Text style={styles.viewAll}>
          View All
        </Text>
      </View>

      <View style={styles.list}>
        {activities.map((activity, index) => (
          <View
            key={activity.id}
            style={[
              styles.activityRow,
              index !== activities.length - 1 &&
                styles.activityBorder,
            ]}
          >
            <View style={styles.activityIndicator} />

            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>
                {activity.title}
              </Text>

              <Text style={styles.activityDescription}>
                {activity.description}
              </Text>
            </View>

            <Text style={styles.activityTime}>
              {activity.time}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minHeight: 290,

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

  activityRow: {
    minHeight: 58,

    flexDirection: 'row',
    alignItems: 'center',

    paddingVertical: 11,
  },

  activityBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },

  activityIndicator: {
    width: 9,
    height: 9,

    borderRadius: 5,

    backgroundColor: '#000000',

    marginRight: 12,
  },

  activityContent: {
    flex: 1,
    paddingRight: 15,
  },

  activityTitle: {
    color: '#000000',

    fontSize: 11,
    fontWeight: '700',
  },

  activityDescription: {
    marginTop: 3,

    color: '#777777',

    fontSize: 9,
  },

  activityTime: {
    color: '#999999',
    fontSize: 9,
  },
});