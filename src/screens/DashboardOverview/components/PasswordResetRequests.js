import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';



export default function PasswordResetRequests() {


  const requests = [

    {
      id: 'MC-1042',
      name: 'Constable Bilal Ahmed',
      time: '09:32 AM',
      status: 'PENDING',
    },


    {
      id: 'MC-1187',
      name: 'Constable Faisal',
      time: '10:18 AM',
      status: 'PENDING',
    },


    {
      id: 'MC-1251',
      name: 'Inspector Kamran',
      time: '10:19 AM',
      status: 'PENDING',
    },


    {
      id: 'MC-1304',
      name: 'Sergeant Haroon',
      time: '10:23 AM',
      status: 'PENDING',
    },

  ];



  const handleApprove = (request) => {

    console.log(
      'Approve reset request:',
      request.id
    );

  };



  const handleView = (request) => {

    console.log(
      'View reset request:',
      request.id
    );

  };



  return (

    <View style={styles.card}>


      <View style={styles.header}>


        <View>

          <Text style={styles.title}>
            Password Reset Requests
          </Text>


          <Text style={styles.subtitle}>
            Requests awaiting administrator action
          </Text>


        </View>



        <View style={styles.countBadge}>

          <Text style={styles.countText}>
            {requests.length}
          </Text>

        </View>



      </View>




      <View style={styles.list}>


        {requests.map((request,index)=>(


          <View

            key={request.id}

            style={[

              styles.requestRow,

              index !== requests.length - 1 &&
              styles.requestBorder

            ]}

          >



            <View style={styles.avatar}>

              <Text style={styles.avatarText}>
                {request.name.charAt(0)}
              </Text>

            </View>




            <View style={styles.requestInfo}>


              <Text style={styles.name}>
                {request.name}
              </Text>



              <Text style={styles.serviceId}>
                {request.id}
              </Text>



              <Text style={styles.time}>
                {request.time}
              </Text>


            </View>





            <View style={styles.actions}>


              <Pressable

                onPress={() => handleView(request)}

                style={({pressed})=>[

                  styles.secondaryButton,

                  pressed && styles.pressed

                ]}

              >

                <Text style={styles.secondaryButtonText}>
                  View
                </Text>


              </Pressable>




              <Pressable

                onPress={() => handleApprove(request)}

                style={({pressed})=>[

                  styles.primaryButton,

                  pressed && styles.pressed

                ]}

              >

                <Text style={styles.primaryButtonText}>
                  Approve
                </Text>


              </Pressable>


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



  countBadge:{

    minWidth:28,

    height:28,

    borderRadius:14,

    backgroundColor:'#EEF1E6',

    alignItems:'center',

    justifyContent:'center',

  },



  countText:{

    color:'#4B5320',

    fontSize:11,

    fontWeight:'700',

  },



  list:{

    marginTop:18,

  },



  requestRow:{

    minHeight:72,

    flexDirection:'row',

    alignItems:'center',

    paddingVertical:12,

  },



  requestBorder:{

    borderBottomWidth:1,

    borderBottomColor:'#E5E7EB',

  },



  avatar:{

    width:38,

    height:38,

    borderRadius:19,

    backgroundColor:'#EEF1E6',

    alignItems:'center',

    justifyContent:'center',

    marginRight:12,

  },



  avatarText:{

    color:'#4B5320',

    fontSize:14,

    fontWeight:'700',

  },



  requestInfo:{

    flex:1,

  },



  name:{

    color:'#111111',

    fontSize:11,

    fontWeight:'700',

  },



  serviceId:{

    marginTop:3,

    color:'#777777',

    fontSize:9,

  },



  time:{

    marginTop:3,

    color:'#999999',

    fontSize:8,

  },



  actions:{

    flexDirection:'row',

    alignItems:'center',

    gap:8,

  },



  secondaryButton:{

    minWidth:55,

    height:30,

    borderRadius:7,

    borderWidth:1,

    borderColor:'#DADADA',

    alignItems:'center',

    justifyContent:'center',

    paddingHorizontal:10,

    backgroundColor:'#FFFFFF',

  },



  secondaryButtonText:{

    color:'#111111',

    fontSize:9,

    fontWeight:'600',

  },



  primaryButton:{

    minWidth:65,

    height:30,

    borderRadius:7,

    backgroundColor:'#4B5320',

    alignItems:'center',

    justifyContent:'center',

    paddingHorizontal:10,

  },



  primaryButtonText:{

    color:'#FFFFFF',

    fontSize:9,

    fontWeight:'700',

  },



  pressed:{

    opacity:0.6,

  },


});