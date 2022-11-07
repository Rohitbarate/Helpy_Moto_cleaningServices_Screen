import { StyleSheet, Text, View ,TouchableOpacity, Image } from "react-native";
import React,{useState} from "react";
import Collapsible from "react-native-collapsible";

const CollapsibleView = ({data}) => {
    const [isActive, setIsActive] = useState(false);
    const [collapsed, setCollapsed] = useState(true);
  
    const toggleExpanded = () => {
        // Toggling the state of single Collapsible
        setCollapsed(!collapsed);
        setIsActive(!isActive)
      };

  return (
    <View style={styles.mainView}>
      {/*Code for Single Collapsible Start*/}
      <TouchableOpacity onPress={toggleExpanded}>
        <View style={styles.header}>
          <Text style={[styles.headerText,{fontFamily:isActive?'Jost-SemiBold':'Jost-Regular'}]}>
            {data.title}</Text>
        <Image 
        source={require('../../assets/img/down.png')}
        style={{width:20,aspectRatio:1,transform:[{rotateX:isActive?'180deg':'0deg'}] }}
        />
        </View>
      </TouchableOpacity>
      {/*Content of Single Collapsible*/}
      <Collapsible collapsed={collapsed} align='top' >
        <View style={styles.content}>
          <Text style={styles.contentText}>
           {data.content}
          </Text>
        </View>
      </Collapsible>
      {/*Code for Single Collapsible end*/}
    </View>
  );
};

export default CollapsibleView;

const styles = StyleSheet.create({
  mainView:{
    borderBottomColor:'#ADADAD',
    borderBottomWidth:1,
    paddingVertical:8,
    width:'100%'
  },
  header: {
    width:'95%',
    paddingVertical:8,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',

  },
  headerText: {
    textAlign: 'left',
    fontSize: 14,
    fontWeight: '500',
    color:' #000000',
    lineHeight:20
  },
  contentText: {
    fontSize:13,
    fontFamily:'Jost-Regular',
    lineHeight:19,
    color:'#464646'
  },
});
