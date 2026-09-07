import Ionicons from '@expo/vector-icons/Ionicons';

import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function Header({
  title = 'DASHBOARD',
  subtitle = 'Overview',
  adminName = 'Super Administrator',
  adminRole = 'System Administrator',
  notificationCount = 0,
  onNotificationsPress,
  onProfilePress,
}) {
  return (
    <View style={styles.header}>
      
      {/* PAGE TITLE */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
      </View>

      {/* RIGHT SIDE */}
      <View style={styles.rightSection}>
        
        {/* SECURE STATUS */}
        <View style={styles.secureStatus}>
          <View style={styles.secureDot} />

          <Text style={styles.secureText}>
            Secure
          </Text>
        </View>

        {/* NOTIFICATION */}
        <Pressable
          onPress={onNotificationsPress}
          style={({ pressed }) => [
            styles.notificationButton,
            pressed && styles.pressed,
          ]}
        >
          <Ionicons
            name="notifications-outline"
            size={20}
            color="#000000"
          />

          {notificationCount > 0 && (
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationBadgeText}>
                {notificationCount > 9
                  ? '9+'
                  : notificationCount}
              </Text>
            </View>
          )}
        </Pressable>

        {/* DIVIDER */}
        <View style={styles.divider} />

        {/* ADMIN PROFILE */}
        <Pressable
          onPress={onProfilePress}
          style={({ pressed }) => [
            styles.profileContainer,
            pressed && styles.pressed,
          ]}
        >
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {adminName
                ? adminName.charAt(0).toUpperCase()
                : 'A'}
            </Text>
          </View>

          <View style={styles.profileText}>
            <Text style={styles.adminName}>
              {adminName}
            </Text>

            <Text style={styles.adminRole}>
              {adminRole}
            </Text>
          </View>
        </Pressable>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    minHeight: 86,
    backgroundColor: '#FFFFFF',

    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',

    paddingHorizontal: 28,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  titleContainer: {
    justifyContent: 'center',
  },

  title: {
    color: '#000000',
    fontSize: 19,
    fontWeight: '800',
    letterSpacing: 0.3,
  },

  subtitle: {
    marginTop: 4,
    color: '#777777',
    fontSize: 12,
    fontWeight: '500',
  },

  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  secureStatus: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 12,
    paddingVertical: 7,

    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 20,

    marginRight: 14,
  },

  secureDot: {
    width: 7,
    height: 7,
    borderRadius: 4,

    backgroundColor: '#000000',

    marginRight: 7,
  },

  secureText: {
    color: '#000000',
    fontSize: 11,
    fontWeight: '600',
  },

  notificationButton: {
    width: 40,
    height: 40,

    borderRadius: 20,

    borderWidth: 1,
    borderColor: '#E0E0E0',

    alignItems: 'center',
    justifyContent: 'center',

    position: 'relative',
  },

    notificationBadge: {
    position: 'absolute',

    top: -4,
    right: -4,

    minWidth: 17,
    height: 17,

    borderRadius: 9,

    backgroundColor: '#000000',

    paddingHorizontal: 4,

    alignItems: 'center',
    justifyContent: 'center',
  },

  notificationBadgeText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '700',
  },

  divider: {
    width: 1,
    height: 36,

    backgroundColor: '#E5E5E5',

    marginHorizontal: 16,
  },

  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 40,
    height: 40,

    borderRadius: 20,

    backgroundColor: '#000000',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 10,
  },

  avatarText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },

  profileText: {
    justifyContent: 'center',
  },

  adminName: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '700',
  },

  adminRole: {
    color: '#777777',
    fontSize: 10,
    marginTop: 2,
  },

  pressed: {
    opacity: 0.6,
  },
});