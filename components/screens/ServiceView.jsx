import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native'

const ServiceView = ({ item}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
    onPress={()=>{navigation.navigate('ServiceDetails')}}
    >
      <View style={styles.serviceView}>
        <Image style={styles.serviceImg} source={item.img} />

        <View style={styles.serviceInfo}>
          <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 8 }}>
            {item.serviceName}
          </Text>
          <Text style={styles.text}>Takes {item.time} hours to </Text>
          <Text style={styles.text}>{item.warranty} Months warranty </Text>
          <Text style={styles.text}>After wash care</Text>
          <Text style={styles.text}>
            {item.offForMember}% off on Membership
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              marginTop: 12,
            }}
          >
            <Text
              style={{
                marginRight: 8,
                fontSize: 13,
                fontWeight: "500",
                textDecorationStyle: "dashed",
                textDecorationLine: "line-through",
                color: "#000000",
                opacity: 0.4,
              }}
            >
              &#8377;{item.oldPrice}.00
            </Text>

            <Text
              style={{
                fontSize: 15,
                color: "#000",
                fontWeight: "700",
              }}
            >
              &#8377;{item.price}.00
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ServiceView;

const styles = StyleSheet.create({
  serviceView: {
    width: 360,
    height: 197,
    color: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  serviceImg: {
    width: "45%",
    aspectRatio: 1,
    borderRadius: 4,
    marginRight: 19,
  },
  serviceInfo: {
    display: "flex",
    flexDirection: "column",
  },
  text: {
    marginBottom: 4,
    color: "#4F4F4F",
    fontSize: 13,
    fontWeight: "500",
  },
});
