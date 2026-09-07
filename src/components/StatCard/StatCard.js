
import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
  onPress,
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      style={({ pressed }) => [
        styles.card,
        pressed && onPress && styles.pressed,
      ]}
    >
      <View style={styles.topRow}>
        <Text style={styles.title}>
          {title}
        </Text>

        <View style={styles.iconBox}>
          {icon}
        </View>
      </View>

      <Text style={styles.value}>
        {value}
      </Text>

      {subtitle ? (
        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: 180,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 17,
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    color: '#686868',
    fontSize: 11,
    fontWeight: '600',
  },

  iconBox: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  value: {
    marginTop: 13,
    color: '#000000',
    fontSize: 25,
    fontWeight: '800',
  },

  subtitle: {
    marginTop: 6,
    color: '#8A8A8A',
    fontSize: 10,
    fontWeight: '500',
  },

  pressed: {
    opacity: 0.7,
  },
});