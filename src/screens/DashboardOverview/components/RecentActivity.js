import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function RecentActivity() {


  const activities = [

    {
      id: '1',
      title: 'New user created',
      description: 'Officer account added to the system',
      time: '5 mins ago',
      icon: 'person-add-outline',
    },

    {
      id: '2',
      title: 'Signal broadcasted',
      description: 'Operation Safe Tower - All Units',
      time: '15 mins ago',
      icon: 'radio-outline',
    },

    {
      id: '3',
      title: 'Device registered',
      description: 'A new verified device was added',
      time: '32 mins ago',
      icon: 'phone-portrait-outline',
    },

    {
      id: '4',
      title: 'Password reset request',
      description: 'A user requested password assistance',
      time: '1 hr ago',
      icon: 'key-outline',
    },

    {
      id: '5',
      title: 'Failed login attempt',
      description: 'Multiple failed login attempts detected',
      time: '2 hrs ago',
      icon: 'warning-outline',
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


        {activities.map((activity,index)=>(

          <View
            key={activity.id}
            style={[
              styles.activityRow,

              index !== activities.length - 1 &&
              styles.activityBorder,

            ]}
          >


            <View style={styles.activityIconBox}>

              <Ionicons
                name={activity.icon}
                size={17}
                color="#000000"
              />

            </View>



            <View style={styles.activityContent}>


              <Text style={styles.activityTitle}>
                {activity.title}
              </Text>


              <Text style={styles.activityDescription}>
                {activity.description}
              </Text>


              <Text style={styles.activityTime}>
                {activity.time}
              </Text>


            </View>


          </View>


        ))}


      </View>


    </View>

  );

}



const styles = StyleSheet.create({

  card: {

    width: '100%',
    height: 390,
    backgroundColor:'#FFFFFF',
    borderWidth: 1,
    borderColor:'#E2E2E2',
    borderRadius:12,
    padding:20,

  },


  header: {

    flexDirection:'row',

    justifyContent:'space-between',

    alignItems:'flex-start',

  },


  title: {

    color:'#000000',

    fontSize:15,

    fontWeight:'700',

  },


  subtitle: {

    marginTop:4,

    color:'#8A8A8A',

    fontSize:10,

  },


  viewAll: {

    color:'#000000',

    fontSize:10,

    fontWeight:'700',

  },


  list: {

    marginTop:18,

  },


  activityRow: {

    minHeight:58,

    flexDirection:'row',

    alignItems:'center',

    paddingVertical:10,

  },


  activityBorder: {

    borderBottomWidth:1,

    borderBottomColor:'#EEEEEE',

  },


  activityIconBox: {

    width:32,

    height:32,

    borderRadius:8,

    backgroundColor:'#F2F2F2',

    justifyContent:'center',

    alignItems:'center',

    marginRight:12,

  },


  activityContent: {

    flex:1,

  },


  activityTitle: {

    color:'#000000',

    fontSize:11,

    fontWeight:'700',

  },


  activityDescription: {

    marginTop:3,

    color:'#777777',

    fontSize:9,

  },


  activityTime: {

    marginTop:3,

    color:'#999999',

    fontSize:8,

  },


});