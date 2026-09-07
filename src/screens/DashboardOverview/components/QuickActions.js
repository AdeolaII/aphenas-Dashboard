
import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function QuickActions({
  onActionPress,
}) {
  const actions = [
    'Create New User',
    'Register Device',
    'Create Channel',
    'Send Signal',
    'Broadcast Message',
    'View Audit Logs',
    'System Settings',
  ];

  const handlePress = (action) => {
    if (onActionPress) {
      onActionPress(action);
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Quick Actions
        </Text>

        <Text style={styles.subtitle}>
          Common administrative actions
        </Text>
      </View>

      <View style={styles.actionsContainer}>
        {actions.map((action) => (
          <Pressable
            key={action}
            onPress={() => handlePress(action)}
            style={({ pressed }) => [
              styles.actionButton,
              pressed && styles.pressed,
            ]}
          >
            <View style={styles.iconBox}>
              <Text style={styles.iconText}>
                +
              </Text>
            </View>

            <Text style={styles.actionText}>
              {action}
            </Text>
          </Pressable>
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
    marginBottom: 18,
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

  actionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },

  actionButton: {
    minWidth: 160,
    flexGrow: 1,

    minHeight: 58,

    borderWidth: 1,
    borderColor: '#DADADA',

    borderRadius: 10,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 14,

    backgroundColor: '#FFFFFF',
  },

  iconBox: {
    width: 32,
    height: 32,

    borderRadius: 8,

    backgroundColor: '#000000',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 10,
  },

  iconText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },

  actionText: {
    color: '#000000',
    fontSize: 10,
    fontWeight: '700',
  },

  pressed: {
    opacity: 0.6,
  },
});