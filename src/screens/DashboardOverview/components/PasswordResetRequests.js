
import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function PasswordResetRequests() {
  const requests = [
    {
      id: '1',
      name: 'Officer Ibrahim',
      serviceId: 'APH-1028',
      time: '10 mins ago',
    },
    {
      id: '2',
      name: 'Officer Daniel',
      serviceId: 'APH-1142',
      time: '32 mins ago',
    },
    {
      id: '3',
      name: 'Officer Grace',
      serviceId: 'APH-1265',
      time: '1 hr ago',
    },
  ];

  const handleApprove = (request) => {
    console.log('Approve reset request:', request.id);
  };

  const handleView = (request) => {
    console.log('View reset request:', request.id);
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>
            Password Reset Requests
          </Text>

          <Text style={styles.subtitle}>
            Requests awaiting administrator action
          </Text>
        </View>

        <View style={styles.countBadge}>
          <Text style={styles.countText}>
            {requests.length}
          </Text>
        </View>
      </View>

      <View style={styles.list}>
        {requests.map((request, index) => (
          <View
            key={request.id}
            style={[
              styles.requestRow,
              index !== requests.length - 1 &&
                styles.requestBorder,
            ]}
          >
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {request.name.charAt(0)}
              </Text>
            </View>

            <View style={styles.requestInfo}>
              <Text style={styles.name}>
                {request.name}
              </Text>

              <Text style={styles.serviceId}>
                {request.serviceId}
              </Text>

              <Text style={styles.time}>
                {request.time}
              </Text>
            </View>

            <View style={styles.actions}>
              <Pressable
                onPress={() => handleView(request)}
                style={({ pressed }) => [
                  styles.secondaryButton,
                  pressed && styles.pressed,
                ]}
              >
                <Text style={styles.secondaryButtonText}>
                  View
                </Text>
              </Pressable>

              <Pressable
                onPress={() => handleApprove(request)}
                style={({ pressed }) => [
                  styles.primaryButton,
                  pressed && styles.pressed,
                ]}
              >
                <Text style={styles.primaryButtonText}>
                  Approve
                </Text>
              </Pressable>
            </View>
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

  countBadge: {
    minWidth: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },

  countText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },

  list: {
    marginTop: 18,
  },

  requestRow: {
    minHeight: 72,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },

  requestBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },

  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  avatarText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },

  requestInfo: {
    flex: 1,
  },

  name: {
    color: '#000000',
    fontSize: 11,
    fontWeight: '700',
  },

  serviceId: {
    marginTop: 3,
    color: '#666666',
    fontSize: 9,
  },

  time: {
    marginTop: 3,
    color: '#999999',
    fontSize: 8,
  },

  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  secondaryButton: {
    minWidth: 55,
    height: 30,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  secondaryButtonText: {
    color: '#000000',
    fontSize: 9,
    fontWeight: '600',
  },

  primaryButton: {
    minWidth: 65,
    height: 30,
    borderRadius: 7,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '700',
  },

  pressed: {
    opacity: 0.6,
  },
});