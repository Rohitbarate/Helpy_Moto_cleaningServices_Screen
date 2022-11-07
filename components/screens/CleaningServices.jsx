import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React from "react";
// import ServiceView from "./ServiceView";
import services from "../api/services";

const CleaningServices = ({ navigation }) => {
  // offers view start
  const OfferScreen = ({ item }) => {
    return (
      <View style={styles.offerScreen}>
        <Image
          source={require("../../assets/img/discount.png")}
          style={{ height: 34, aspectRatio: 1, borderRadius: 50 }}
        />
        <Text style={{ color: "#fff", fontSize: 14,fontFamily:'Jost-SemiBold', }}>
          {item}
        </Text>
      </View>
    );
  };
  // offers view end

  //  service view screen start
  const ServiceView = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ServiceDetails", {
            item: item,
          });
        }}
      >
        <View style={styles.serviceView}>
          <Image style={styles.serviceImg} source={item.img} />
          <TouchableOpacity style={styles.button}>
            <Text
              style={{
                fontSize: 14,
                fontFamily:'Jost-SemiBold',
                lineHeight: 20,
                paddingHorizontal: 24,
                paddingVertical: 4,
                color: "#fff",
              }}
            >
              Add
            </Text>
          </TouchableOpacity>
          <View style={styles.serviceInfo}>
            <Text style={{ fontSize: 15, fontFamily:'Jost-Medium', marginBottom: 4,lineHeight:21 }}>
              {item.serviceName}
            </Text>
            <Text style={styles.text}>{`\u2022 Takes ${item.time} hours to `}</Text>
            <Text style={styles.text}>{`\u2022 ${item.warranty} Months warranty`} </Text>
            <Text style={styles.text}>{`\u2022 After wash care`}</Text>
            <Text style={styles.text}>
              {`\u2022 ${item.offForMember}% off on Membership`}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  marginRight: 8,
                  fontSize: 13,
                  fontFamily:'Jost-Medium',
                  textDecorationStyle: "dashed",
                  textDecorationLine: "line-through",
                  color: "#000000",
                  opacity: 0.4,
                  lineHeight:19
                }}
              >
                &#8377;{item.price}.00
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  color: "#000",
                  fontFamily:'Jost-Bold',
                  lineHeight:22
                }}
              >
                &#8377;{item.newPrice}.00
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  //  service view screen end

  // root screen
  return (
    <View style={styles.container}>
      <View style={styles.offersCont}>
        <FlatList
          data={services.offers}
          renderItem={OfferScreen}
          keyExtractor={(item) => item}
          horizontal={true}
          pagingEnabled={false}
        />
      </View>
      <View style={styles.services}>
        <FlatList
          data={services.Services}
          renderItem={ServiceView}
          keyExtractor={(item) => item.img}
        />
      </View>
      <View style={{ marginTop: 2, paddingVertical: 16, paddingLeft: 16 }}>
        <Text style={{ fontSize: 16, fontFamily:'Jost-SemiBold', marginBottom: 16,lineHeight:23 }}>
          Trending Services
        </Text>
        {/*  trending services view */}
        <FlatList
          data={services.TrendingServices}
          keyExtractor={(item) => item.id}
          horizontal={true}
          renderItem={({ item }) => (
            <TouchableOpacity
            onPress={()=>{
              navigation.navigate('ServiceDetails',
              {
              item:item
            })}}
            >
            <View style={{ marginRight: 8,}}>
              <Image
                source={item.img}
                style={{ height: 152, aspectRatio: 1 ,borderRadius:4}}
              />
             <Text style={styles.tredServName}>{item.serviceName}</Text>
            </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};
export default CleaningServices;
const styles = StyleSheet.create({
  container: {
    fontFamily:'Jost'
  },
  offersCont: {
    height: 56,
    display: "flex",
    textAlignVertical: "center",
    marginVertical: 4,
    paddingLeft: 8,
  },
  offerScreen: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#4D2161",
    marginRight: 8,
    textAlign: "center",
    textAlignVertical: "center",
    width: 300,
    height: 56,
    borderRadius: 4,
  },
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
    borderBottomColor:'#ADADAD',
    borderBottomWidth:1,
  },
  serviceImg: {
    width: "45%",
    height:150,
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
    fontFamily:'Jost-Regular',
    lineHeight:19
  },
  tredServName: {
    backgroundColor: "#ffffff4d",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 13,
    fontFamily:'Jost-SemiBold',
    lineHeight: 18,
    color: "#ffffff",
    position: "absolute",
    height: 36,
    width: "100%",
    textAlignVertical:'center',
    bottom: 0,
    letterSpacing:0.5
  },
  button: {
    backgroundColor: "#5D5FEF",
    borderRadius: 4,
    position:'absolute',
    bottom:10,
    left:50
  },
});

//
