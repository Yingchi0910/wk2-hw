import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const AlbumDetail = (props) => {
  const { thumbnail_image, title, artist, image } = props.album;
  return (
    <View style={styles.cardContainerStyle}>

      <View style={styles.cardSectionStyle}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: image
          }}
        />
      </View>
      <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
      <View style={styles.headerContentStyle}>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text style={styles.artistStyle}>{artist}</Text>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 3,
    paddingTop:0,
    marginBottom:30,
    borderBottomWidth:1,
  },
  titleStyle:{
    paddingTop:0,
    fontWeight:"bold",
    fontSize:25,
    color:"#121738",
    
  },
  artistStyle:{
    fontWeight:"normal",
    paddingTop:10,
    paddingBottom:30,
    fontSize:15,
    color:"#121738",
  },
  cardContainerStyle: {
    borderWidth: 0,
    borderColor: "#374342",
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0
  },
  cardSectionStyle: {
    padding: 30,
    paddingBottom:0,
    backgroundColor: "#E0E0E0",
    borderColor: "#000",
    borderBottomWidth: 0
  },
  imageStyle: {
    height: 300,
    width: null
  }
});

export default AlbumDetail;