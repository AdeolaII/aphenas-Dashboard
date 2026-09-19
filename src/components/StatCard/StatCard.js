import React from 'react';

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

      style={({pressed}) => [

        styles.card,

        pressed && styles.pressed,

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



      <Text style={styles.subtitle}>
        {subtitle}
      </Text>



    </Pressable>

  );

}



const styles = StyleSheet.create({


  card: {

    flex: 1,

    minWidth: 180,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,

    borderColor: '#E5E7EB',

    borderRadius: 12,

    padding: 18,

  },



  pressed: {

    opacity: 0.7,

  },



  topRow: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

  },



  title: {

    color: '#777777',

    fontSize: 11,

    fontWeight: '600',

  },



  iconBox: {

    width: 32,

    height: 32,

    borderRadius: 8,

    backgroundColor: '#EEF1E6',

    justifyContent: 'center',

    alignItems: 'center',

  },



  value: {

    marginTop: 13,

    color: '#111111',

    fontSize: 25,

    fontWeight: '800',

  },



  subtitle: {

    marginTop: 6,

    color: '#777777',

    fontSize: 10,

  },


});