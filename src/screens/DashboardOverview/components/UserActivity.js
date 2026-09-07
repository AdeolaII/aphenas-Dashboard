import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function UserActivity() {
  const activityData = [
    { day: 'Mon', value: 45 },
    { day: 'Tue', value: 68 },
    { day: 'Wed', value: 52 },
    { day: 'Thu', value: 76 },
    { day: 'Fri', value: 64 },
    { day: 'Sat', value: 38 },
    { day: 'Sun', value: 55 },
  ];

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.title}>
            User Activity
          </Text>

          <Text style={styles.subtitle}>
            Weekly system activity
          </Text>
        </View>

        <Text style={styles.period}>
          Last 7 Days
        </Text>
      </View>

      <View style={styles.chartContainer}>
        {activityData.map((item) => (
          <View
            key={item.day}
            style={styles.barGroup}
          >
            <View style={styles.barArea}>
              <View
                style={[
                  styles.bar,
                  {
                    height: item.value * 1.5,
                  },
                ]}
              />
            </View>

            <Text style={styles.dayText}>
              {item.day}
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

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
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

  period: {
    color: '#666666',
    fontSize: 10,
    fontWeight: '600',
  },

  chartContainer: {
    flex: 1,

    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',

    marginTop: 25,

    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',

    paddingHorizontal: 8,
  },

  barGroup: {
    flex: 1,
    alignItems: 'center',
  },

  barArea: {
    height: 140,
    width: '100%',

    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  bar: {
    width: 18,
    maxHeight: 130,

    backgroundColor: '#000000',

    borderRadius: 4,
  },

  dayText: {
    marginTop: 10,
    marginBottom: 8,

    color: '#777777',

    fontSize: 9,
    fontWeight: '500',
  },
});