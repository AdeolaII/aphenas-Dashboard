import Ionicons from '@expo/vector-icons/Ionicons';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';



export default function RecentSecurityEvents() {


  const events = [

    {
      id: '1',
      title: 'Unsuccessful login attempt',
      description: 'Multiple failed login attempts detected',
      time: '12 mins ago',
      status: 'High',
      icon: 'warning-outline',
    },


    {
      id: '2',
      title: 'Untrusted device detected',
      description: 'Unknown device attempted authentication',
      time: '38 mins ago',
      status: 'Medium',
      icon: 'phone-portrait-outline',
    },


    {
      id: '3',
      title: 'Multiple failed login attempts',
      description: 'Multiple authentication failures detected',
      time: '1 hr ago',
      status: 'High',
      icon: 'alert-circle-outline',
    },


    {
      id: '4',
      title: 'Password reset request',
      description: 'User requested password assistance',
      time: '1 hr ago',
      status: 'Normal',
      icon: 'key-outline',
    },


    {
      id: '5',
      title: 'New device registered',
      description: 'A new verified device was added',
      time: '2 hrs ago',
      status: 'Normal',
      icon: 'phone-portrait-outline',
    },

  ];



  const getStatusStyle = (status) => {

    if (status === 'High') {

      return {

        backgroundColor: '#FDECEC',

        color: '#B42318',

      };

    }


    if (status === 'Medium') {

      return {

        backgroundColor: '#FFF4E5',

        color: '#C28A00',

      };

    }


    return {

      backgroundColor: '#EEF1E6',

      color: '#4B5320',

    };

  };



  return (

    <View style={styles.card}>


      <View style={styles.header}>


        <View>


          <Text style={styles.title}>
            Security Events (Recent)
          </Text>


          <Text style={styles.subtitle}>
            Latest security-related activity
          </Text>


        </View>



        <Text style={styles.viewAll}>
          View All
        </Text>



      </View>





      <View style={styles.list}>


        {events.map((event,index)=>(


          <View

            key={event.id}

            style={[

              styles.eventRow,

              index !== events.length - 1 &&
              styles.eventBorder

            ]}

          >



            <View style={styles.eventIconBox}>


              <Ionicons

                name={event.icon}

                size={16}

                color="#000000"

              />


            </View>





            <View style={styles.eventContent}>


              <Text style={styles.eventTitle}>
                {event.title}
              </Text>



              <Text style={styles.eventDescription}>
                {event.description}
              </Text>



              <Text style={styles.eventTime}>
                {event.time}
              </Text>



            </View>





            <View

              style={[

                styles.statusBadge,

                {

                  backgroundColor:
                  getStatusStyle(event.status)
                  .backgroundColor

                }

              ]}

            >


              <Text

                style={[

                  styles.statusText,

                  {

                    color:
                    getStatusStyle(event.status)
                    .color

                  }

                ]}

              >

                {event.status}

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

    flex:1,

    minHeight:290,

    backgroundColor:'#FFFFFF',

    borderWidth:1,

    borderColor:'#E5E7EB',

    borderRadius:12,

    padding:20,

  },



  header:{


    flexDirection:'row',

    justifyContent:'space-between',

    alignItems:'flex-start',

  },



  title:{


    color:'#111111',

    fontSize:15,

    fontWeight:'700',

  },



  subtitle:{


    marginTop:4,

    color:'#777777',

    fontSize:10,

  },



  viewAll:{


    color:'#000000',

    fontSize:10,

    fontWeight:'700',

  },



  list:{


    marginTop:18,

  },



  eventRow:{


    minHeight:65,

    flexDirection:'row',

    alignItems:'flex-start',

    paddingVertical:12,

  },



  eventBorder:{


    borderBottomWidth:1,

    borderBottomColor:'#E5E7EB',

  },



  eventIconBox:{


    width:28,

    height:28,

    borderRadius:7,

    backgroundColor:'#F2F2F2',

    alignItems:'center',

    justifyContent:'center',

    marginRight:12,

    marginTop:2,

  },



  eventContent:{


    flex:1,

    paddingTop:1,

  },



  eventTitle:{


    color:'#111111',

    fontSize:11,

    fontWeight:'700',

  },



  eventDescription:{


    marginTop:3,

    color:'#777777',

    fontSize:9,

  },



  eventTime:{


    marginTop:3,

    color:'#999999',

    fontSize:8,

  },



  statusBadge:{


    paddingHorizontal:10,

    paddingVertical:5,

    borderRadius:12,

    marginLeft:8,

    marginTop:3,

  },



  statusText:{


    fontSize:9,

    fontWeight:'700',

  },


});