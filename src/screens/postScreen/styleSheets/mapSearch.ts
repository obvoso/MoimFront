import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wpSize,
  heightPercentageToDP as hpSize,
} from "react-native-responsive-screen";

const wp = wpSize("100%");
const hp = hpSize("100%");

export const MapSearchStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: wp * 0.9,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
  },
  searchBar: {
    flex: 1,
    height: hp * 0.05,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 5,
    fontSize: 18,
  },
  searchButton: {
    width: wp * 0.25,
    backgroundColor: "#e0321f",
    borderRadius: 5,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    height: hp * 0.05,
  },
  searchButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  placesContainer: {
    marginTop: hp * 0.05,
  },
  placeItem: {
    width: wp * 0.9,
    paddingVertical: hp * 0.015,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.2)",
  },
  placeName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  placeAddress: {
    fontSize: 14,
    color: "#666",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  modalView: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "50%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
});
