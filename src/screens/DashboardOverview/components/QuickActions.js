import Ionicons from '@expo/vector-icons/Ionicons';

import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default function QuickActions({
  onActionPress,
}) {


  const quickActions = [

    {
      title: 'Create New User',
      icon: 'person-add-outline',
    },

    {
      title: 'Register Device',
      icon: 'phone-portrait-outline',
    },

    {
      title: 'Create Channel',
      icon: 'layers-outline',
    },

    {
      title: 'Send Signal',
      icon: 'radio-outline',
    },

    {
      title: 'Broadcast Message',
      icon: 'megaphone-outline',
    },

    {
      title: 'View Audit Logs',
      icon: 'document-text-outline',
    },

    {
      title: 'System Settings',
      icon: 'settings-outline',
    },

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


        {quickActions.map((action) => (


          <Pressable

            key={action.title}

            onPress={() => handlePress(action)}

            style={({pressed}) => [

              styles.actionButton,

              pressed && styles.pressed,

            ]}

          >


            <View style={styles.iconBox}>


              <Ionicons

                name={action.icon}

                size={18}

                color="#4B5320"

              />


            </View>



            <Text style={styles.actionText}>
              {action.title}
            </Text>



          </Pressable>


        ))}



      </View>


    </View>

  );

}




const styles = StyleSheet.create({


  card: {

    width:'100%',

    backgroundColor:'#FFFFFF',

    borderWidth:1,

    borderColor:'#E5E7EB',

    borderRadius:12,

    padding:20,

  },



  header:{

    marginBottom:18,

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



  actionsContainer:{

    flexDirection:'row',

    flexWrap:'wrap',

    gap:12,

  },



  actionButton:{

    minWidth:160,

    flexGrow:1,

    minHeight:58,

    borderWidth:1,

    borderColor:'#E5E7EB',

    borderRadius:10,

    flexDirection:'row',

    alignItems:'center',

    paddingHorizontal:14,

    backgroundColor:'#FFFFFF',

  },



  iconBox:{

    width:34,

    height:34,

    borderRadius:8,

    backgroundColor:'#EEF1E6',

    justifyContent:'center',

    alignItems:'center',

    marginRight:10,

  },



  actionText:{

    color:'#111111',

    fontSize:10,

    fontWeight:'700',

  },



  pressed:{

    opacity:0.6,

  },


});