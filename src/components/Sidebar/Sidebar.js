import Ionicons from '@expo/vector-icons/Ionicons';


import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const menuSections = [
  {
    title: null,
    items: [
      {
        name: 'Dashboard',
        icon: 'grid-outline',
      },
    ],
  },

  {
    title: 'ADMINISTRATION',
    items: [
      {
        name: 'User Management',
        icon: 'people-outline',
      },
      {
        name: 'Create New User',
        icon: 'person-add-outline',
      },
      {
        name: 'Roles & Permissions',
        icon: 'shield-checkmark-outline',
      },
      {
        name: 'Units/Commands',
        icon: 'business-outline',
      },
      {
        name: 'Devices',
        icon: 'phone-portrait-outline',
      },
    ],
  },

  {
    title: 'COMMUNICATION',
    items: [
      {
        name: 'Messages',
        icon: 'chatbubble-ellipses-outline',
      },
      {
        name: 'Signals',
        icon: 'radio-outline',
      },
      {
        name: 'Broadcast',
        icon: 'megaphone-outline',
      },
      {
        name: 'Channels',
        icon: 'layers-outline',
      },
    ],
  },

  {
    title: 'MONITORING',
    items: [
      {
        name: 'Activity Monitor',
        icon: 'pulse-outline',
      },
      {
        name: 'Security Events',
        icon: 'warning-outline',
      },
      {
        name: 'Analytics',
        icon: 'bar-chart-outline',
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
        name: 'System Settings',
        icon: 'settings-outline',
      },
    ],
  },
];

export default function Sidebar({
  activeItem = 'Dashboard',
  onNavigate,
}) {
  const handleNavigation = (itemName) => {
    if (onNavigate) {
      onNavigate(itemName);
    }
  };

  return (
    <View style={styles.sidebar}>
      {/* APHENAS LOGO */}
      <View style={styles.brandContainer}>
        <Image
          source={require('../../../assets/images/aphenas-logo.png')}
          style={styles.aphenasLogo}
          resizeMode="contain"
        />
      </View>

      {/* SIDEBAR MENU */}
      <ScrollView
        style={styles.menuScroll}
        contentContainerStyle={styles.menuContent}
        showsVerticalScrollIndicator={false}
      >
        {menuSections.map((section, sectionIndex) => (
          <View
            key={`${section.title || 'main'}-${sectionIndex}`}
            style={styles.section}
          >
            {section.title && (
              <Text style={styles.sectionTitle}>
                {section.title}
              </Text>
            )}

            {section.items.map((item) => {
              const isActive = activeItem === item.name;

              return (
                <Pressable
                  key={item.name}
                  onPress={() => handleNavigation(item.name)}
                  style={({ pressed }) => [
                    styles.menuItem,

                    isActive &&
                      styles.activeMenuItem,

                    pressed &&
                      styles.pressedMenuItem,
                  ]}
                >
                  <View
                    style={[
                      styles.menuIndicator,

                      isActive &&
                        styles.activeIndicator,
                    ]}
                  />

                  <Ionicons
                    name={item.icon}
                    size={18}
                    color={isActive ? '#000000' : '#B5B5B5'}
                    style={styles.menuIcon}
                  />

                  <Text
                    style={[
                      styles.menuText,

                      isActive &&
                        styles.activeMenuText,
                    ]}
                  >
                    {item.name}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        ))}
      </ScrollView>

      {/* SECURITY STATUS */}
      <View style={styles.bottomSection}>
        <View style={styles.securityDot} />

        <View>
          <Text style={styles.connectionTitle}>
            Secure Connection
          </Text>

          <Text style={styles.connectionText}>
            System protected
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
    backgroundColor: '#FFFFFF',
  },

  pressedMenuItem: {
    opacity: 0.7,
  },

  menuIndicator: {
    width: 3,
    height: 21,
    borderRadius: 4,
    marginRight: 10,
    backgroundColor: 'transparent',
  },

  activeIndicator: {
    backgroundColor: '#000000',
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
    color: '#000000',
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
    backgroundColor: '#FFFFFF',
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