import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Svg, {
  Path,
  Circle,
  Line,
  Rect,
} from 'react-native-svg';


export default function UserActivity() {

  const data = [
    { day: 'Mon', value: 4000 },
    { day: 'Tue', value: 11000 },
    { day: 'Wed', value: 9000 },
    { day: 'Thu', value: 16000 },
    { day: 'Fri', value: 10000 },
    { day: 'Sat', value: 5000 },
    { day: 'Sun', value: 3500 },
  ];


  const chartWidth = 330;
  const chartHeight = 150;


  const maxValue = 20000;


  const points = data.map((item, index) => {

    const x =
      (index / (data.length - 1)) *
      chartWidth;


    const y =
      chartHeight -
      (item.value / maxValue) *
      chartHeight;


    return {
      x,
      y,
    };

  });



  // create curved line path

  let linePath = `M ${points[0].x} ${points[0].y}`;


  for(let i = 1; i < points.length; i++){

    const previous = points[i - 1];

    const current = points[i];


    const controlX =
      (previous.x + current.x) / 2;


    linePath +=
      ` C ${controlX} ${previous.y}, ${controlX} ${current.y}, ${current.x} ${current.y}`;

  }



  // area under curve

  const areaPath =
    linePath +
    ` L ${chartWidth} ${chartHeight}
       L 0 ${chartHeight}
       Z`;



  return (

    <View style={styles.card}>


      <View style={styles.header}>

        <View>

          <Text style={styles.title}>
            User Activity
          </Text>


          <Text style={styles.subtitle}>
            Weekly system activity
          </Text>

        </View>


      </View>



      <View style={styles.chartWrapper}>


        <View style={styles.yAxis}>

          <Text style={styles.axisText}>
            20K
          </Text>

          <Text style={styles.axisText}>
            15K
          </Text>

          <Text style={styles.axisText}>
            10K
          </Text>

          <Text style={styles.axisText}>
            5K
          </Text>

          <Text style={styles.axisText}>
            0
          </Text>

        </View>



        <Svg
          width={chartWidth}
          height={chartHeight}
        >


          {/* GRID */}

          {[0,1,2,3,4].map((item)=>(

            <Line
              key={item}
              x1="0"
              y1={item * 37}
              x2={chartWidth}
              y2={item * 37}
              stroke="#E8E8E8"
              strokeWidth="1"
            />

          ))}



          {/* AREA */}

          <Path
            d={areaPath}
            fill="#4B5320"
            opacity="0.08"
          />



          {/* CURVE */}

          <Path
            d={linePath}
            stroke="#4B5320"
            strokeWidth="3"
            fill="none"
          />



          {/* POINTS */}

          {points.map((point,index)=>(

            <Circle

              key={index}

              cx={point.x}

              cy={point.y}

              r="5"

              fill="#4B5320"

            />

          ))}



        </Svg>


      </View>



      <View style={styles.days}>

        {data.map(item=>(

          <Text
            key={item.day}
            style={styles.day}
          >
            {item.day}
          </Text>

        ))}

      </View>



      <View style={styles.tooltip}>

        <Text style={styles.tooltipTitle}>
          Thu, 22 May
        </Text>

        <Text style={styles.tooltipValue}>
          16,000 Users
        </Text>

      </View>



      <Text style={styles.footer}>
        View Analytics →
      </Text>


    </View>

  );
}



const styles = StyleSheet.create({

  card: {

    flex:1,

    minHeight:290,

    backgroundColor:'#FFFFFF',

    borderWidth:1,

    borderColor:'#E2E2E2',

    borderRadius:12,

    padding:20,

  },


  header:{
    marginBottom:15,
  },


  title:{
    color:'#000000',
    fontSize:15,
    fontWeight:'700',
  },


  subtitle:{
    marginTop:4,
    color:'#8A8A8A',
    fontSize:10,
  },


  chartWrapper:{

    flexDirection:'row',

    marginTop:10,

  },


  yAxis:{

    height:150,

    justifyContent:'space-between',

    marginRight:8,

  },


  axisText:{

    fontSize:9,

    color:'#777777',

  },


  days:{

    flexDirection:'row',

    justifyContent:'space-between',

    marginLeft:35,

    marginTop:5,

  },


  day:{

    fontSize:9,

    color:'#777777',

  },


  tooltip:{

    position:'absolute',

    top:95,

    left:190,

    backgroundColor:'#FFFFFF',

    borderWidth:1,

    borderColor:'#DDDDDD',

    borderRadius:6,

    padding:8,

  },


  tooltipTitle:{

    fontSize:9,

    color:'#555555',

  },


  tooltipValue:{

    fontSize:10,

    fontWeight:'700',

    color:'#000000',

  },


  footer:{

    marginTop:15,

    textAlign:'right',

    color:'#4B5320',

    fontSize:11,

    fontWeight:'700',

  },


});