import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function Sidebar({
  activeItem,
  navigation,
  onNavigate,
}) {
  const menuSections = [
    {
      title: 'MAIN',
      items: [
        {
          name: 'Dashboard',
          icon: 'grid-outline',
          route: 'DashboardOverview',
        },
      ],
    },

    {
      title: 'ADMINISTRATION',
      items: [
        {
          name: 'Users Management',
          icon: 'people-outline',
          route: 'UsersManagement',
        },

        {
          name: 'Create New User',
          icon: 'person-add-outline',
          route: 'CreateNewUser',
        },

        {
          name: 'Roles & Permissions',
          icon: 'shield-checkmark-outline',
          route: 'RolesPermissions',
        },

        {
          name: 'Units/Commands',
          icon: 'business-outline',
          route: 'UnitsCommands',
        },

        {
          name: 'Devices',
          icon: 'phone-portrait-outline',
        },

        {
          name: 'Channels',
          icon: 'layers-outline',
        },
      ],
    },

    {
      title: 'COMMUNICATION',
      items: [
        {
          name: 'Messages',
          icon: 'mail-outline',
        },

        {
          name: 'Signals',
          icon: 'radio-outline',
        },

        {
          name: 'Broadcast',
          icon: 'megaphone-outline',
        },
      ],
    },

    {
      title: 'MONITORING',
      items: [
        {
          name: 'Activity Monitoring',
          icon: 'pulse-outline',
        },

        {
          name: 'Security Events',
          icon: 'shield-outline',
        },

        {
          name: 'Analytics',
          icon: 'analytics-outline',
        },
      ],
    },

    {
      title: 'SYSTEM',
      items: [
        {
          name: 'Audit Logs',
          icon: 'document-text-outline',
        },

        {
          name: 'Settings',
          icon: 'settings-outline',
        },
      ],
    },
  ];

  const handlePress = (item) => {
  console.log('Clicked:', item.name);
  console.log('Route:', item.route);
  console.log('Navigation:', navigation);

  if (!item.route) {
    return;
  }

  if (navigation) {
    navigation.navigate(item.route);
    return;
  }

  if (onNavigate) {
    onNavigate(item.name);
  }
};

  return (
    <View style={styles.sidebar}>

      <View style={styles.brandContainer}>
        <Image
          source={require('../../assets/images/aphenas-logo.png')}
          style={styles.aphenasLogo}
          resizeMode="contain"
        />
      </View>

      <ScrollView
        style={styles.menuScroll}
        contentContainerStyle={styles.menuContent}
      >
        {menuSections.map((section) => (
          <View
            key={section.title}
            style={styles.section}
          >
            <Text style={styles.sectionTitle}>
              {section.title}
            </Text>

            {section.items.map((item) => (
              <Pressable
                key={item.name}
                onPress={() => handlePress(item)}
                style={({ pressed }) => [
                  styles.menuItem,

                  activeItem === item.name &&
                    styles.activeMenuItem,

                  pressed &&
                    styles.pressedMenuItem,
                ]}
              >
                <View
                  style={[
                    styles.menuIndicator,

                    activeItem === item.name &&
                      styles.activeIndicator,
                  ]}
                />

                <Ionicons
                  name={item.icon}
                  size={18}
                  color={
                    activeItem === item.name
                      ? '#4B5320'
                      : '#B5B5B5'
                  }
                  style={styles.menuIcon}
                />

                <Text
                  style={[
                    styles.menuText,

                    activeItem === item.name &&
                      styles.activeMenuText,
                  ]}
                >
                  {item.name}
                </Text>
              </Pressable>
            ))}
          </View>
        ))}
      </ScrollView>

      <View style={styles.bottomSection}>

        <View style={styles.securityDot} />

        <View>
          <Text style={styles.connectionTitle}>
            System Connected
          </Text>

          <Text style={styles.connectionText}>
            Secure Connection
          </Text>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  sidebar: {
    width: 255,
    height: '100%',
    backgroundColor: '#000000',
    borderRightWidth: 1,
    borderRightColor: '#222222',
  },

  brandContainer: {
    minHeight: 86,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#222222',
  },

  aphenasLogo: {
    width: 190,
    height: 60,
    resizeMode: 'contain',
  },

  menuScroll: {
    flex: 1,
  },

  menuContent: {
    paddingTop: 15,
    paddingBottom: 15,
  },

  section: {
    marginBottom: 17,
  },

  sectionTitle: {
    color: '#777777',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.2,
    paddingHorizontal: 22,
    marginBottom: 7,
  },

  menuItem: {
    height: 43,
    marginHorizontal: 10,
    marginVertical: 2,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },

  activeMenuItem: {
    backgroundColor: '#EEF1E6',
  },

  pressedMenuItem: {
    opacity: 0.7,
  },

  menuIndicator: {
    width: 3,
    height: 21,
    borderRadius: 4,
    backgroundColor: 'transparent',
    marginRight: 10,
  },

  activeIndicator: {
    backgroundColor: '#4B5320',
  },

  menuIcon: {
    width: 25,
    marginRight: 8,
    textAlign: 'center',
  },

  menuText: {
    flex: 1,
    color: '#B5B5B5',
    fontSize: 13,
    fontWeight: '500',
  },

  activeMenuText: {
    color: '#4B5320',
    fontWeight: '700',
  },

  bottomSection: {
    minHeight: 70,
    borderTopWidth: 1,
    borderTopColor: '#222222',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  securityDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: '#4B5320',
    marginRight: 10,
  },

  connectionTitle: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
  },

  connectionText: {
    color: '#8A8A8A',
    fontSize: 10,
    marginTop: 2,
  },

});