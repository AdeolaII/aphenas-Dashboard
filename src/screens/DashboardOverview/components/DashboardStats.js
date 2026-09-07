import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import StatCard from '../../../components/StatCard/StatCard';

export default function DashboardStats() {
  const stats = [
    {
      title: 'Total Personnel',
      value: '248',
      subtitle: 'All Commands',
      icon: 'people-outline',
    },
    {
      title: 'Active Users',
      value: '196',
      subtitle: 'Currently active',
      icon: 'person-circle-outline',
    },
    {
      title: 'Registered Devices',
      value: '221',
      subtitle: 'Verified devices',
      icon: 'phone-portrait-outline',
    },
    {
      title: 'Active Channels',
      value: '18',
      subtitle: 'Operational channels',
      icon: 'layers-outline',
    },
    {
      title: 'Security Alerts',
      value: '3',
      subtitle: 'Requires attention',
      icon: 'warning-outline',
    },
    {
      title: 'Unread Messages',
      value: '27',
      subtitle: 'Pending messages',
      icon: 'mail-unread-outline',
    },
  ];

  return (
    <View style={styles.container}>
      {stats.map((stat) => (
        <View
          key={stat.title}
          style={styles.cardWrapper}
        >
          <StatCard
            title={stat.title}
            value={stat.value}
            subtitle={stat.subtitle}
            icon={
              <Ionicons
                name={stat.icon}
                size={19}
                color="#000000"
              />
            }
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },

  cardWrapper: {
    flexGrow: 1,
    flexBasis: 180,
    minWidth: 180,
  },
});