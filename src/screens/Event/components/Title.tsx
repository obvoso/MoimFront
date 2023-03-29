import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wpSize,
  heightPercentageToDP as hpSize,
} from "react-native-responsive-screen";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/RootReducer";
import { useFocusEffect } from "@react-navigation/native";
import { Spacer } from "../../../components/Spacer";
import { AxiosError } from "axios";
import instance from "../../../utils/axios";
import { key } from "../../../../config";
import { useAppDispatch } from "../../../redux/RootStore";
import { EventSlice } from "../../../redux/Slices/Event";

const wp = wpSize("100%");
const hp = hpSize("100%");

export const EventTitle: React.FC = () => {
  const event = useSelector((state: RootState) => state.event);
  const [isFinished, setIsFinished] = useState(false);
  const IsLoading = useSelector((state: RootState) => state.event.IsLoading);
  const globalState = useSelector((state: RootState) => state.global);
  const dispatch = useAppDispatch();

  const TransFerDate = (data: string): string => {
    const date = new Date(data);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const min = date.getMinutes();
    return `${year}년 ${month}월 ${day}일 ${hours}:${min}`;
  };
  useFocusEffect(
    React.useCallback(() => {
      const tmpDate = new Date(event.event.eventDate);
      const newDate = new Date();
      if (tmpDate <= newDate) setIsFinished(true);
      if (
        event.event.eventMaxParticipant === event.event.eventCurrParticipant
      ) {
        setIsFinished(true);
        //TODO: data도 비교해서 지난 파티일경우 피니시드를 true로 켜주면 됨
      }

      return () => {};
    }, [])
  );

  const handleCheckOnPress = () => {
    if (event.eventUserRoll === "guest") {
      Alert.alert("", "이벤트 참여를 취소하시겠습니까?", [
        {
          text: "NO",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "YES",
          onPress: async () => {
            // TODO: DELETE 요청 이벤트 참여 취소
            // TODO: 요청 후에 Participant 업데이트
            try {
              const req = { eventId: event.eventId };
              const res = await instance.delete(
                `${key.URL}user/${
                  globalState.userId === 0 ? 1 : globalState.userId
                }/event`,
                { data: req }
              );
              if (res.data === 200)
                dispatch(
                  EventSlice.actions.setEventParticipant(
                    event.event.eventCurrParticipant + 1
                  )
                );
            } catch (e) {
              const error = e as AxiosError;
              Alert.alert("", `${error.message}`);
            }
          },
        },
      ]);
    } else {
      Alert.alert("", "이벤트에 참여하시겠습니까?", [
        {
          text: "NO",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "YES",
          onPress: async () => {
            try {
              const req = { eventId: event.eventId };
              const res = await instance.post(
                `${key.URL}user/${
                  globalState.userId === 0 ? 1 : globalState.userId
                }/event`,
                req
              );
              if (res.data === 201)
                dispatch(
                  EventSlice.actions.setEventParticipant(
                    event.event.eventCurrParticipant + 1
                  )
                );
            } catch (e) {
              const error = e as AxiosError;
              Alert.alert("", `${error.message}`);
            }
            // TODO: POST 요청 이벤트 참여
            // TODO: 요청 후에 Participant 업데이트
          },
        },
      ]);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          width: wp * 0.9,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 14,
              color: "rgba(0,0,0,0.4)",
              fontWeight: "500",
            }}
          >
            {`View ${event.event.eventViewCount}`}
          </Text>
        </View>
        <View style={{}}>
          <Text
            style={{
              fontSize: 14,
              color: "rgba(0,0,0,0.4)",
              fontWeight: "500",
            }}
          >
            {event.event.eventCreateAt?.length <= 0
              ? "2023-1-23 13:22"
              : TransFerDate(event.event.eventCreateAt)}
          </Text>
        </View>
      </View>
      <Spacer size={hp * 0.03} />
      <View style={{}}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {event.event.eventTitle
              ? event.event.eventTitle
              : "이벤트 메인 주제"}
          </Text>
          <Spacer size={10} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <MaterialIcons name="location-pin" size={22} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "500" }}>
              {event.event.eventMap.address.length <= 0
                ? `TradeName  서울특별시 강남구 xx동`
                : `${event.event.eventMap.tradeName}  ${event.event.eventMap.address}`}
            </Text>
          </View>
          <Spacer size={5} />
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "300",
              }}
            >
              {event.event.eventDate.length <= 0
                ? "2042년 02월 04일 24:42"
                : TransFerDate(event.event.eventDate)}
            </Text>
          </View>
        </View>
        <Spacer size={5} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {event.eventUserRoll !== "host" ? ( // TODO : dispatch(action.isUpdate (true)); 그래야 Post 페이지에서 분기처리할 수 있음
            <TouchableOpacity>
              <View
                style={{
                  width: wp * 0.25,
                  backgroundColor: "#e0321f",
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  height: hp * 0.05,
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 16, fontWeight: "800" }}
                >
                  수정하기
                </Text>
              </View>
            </TouchableOpacity>
          ) : isFinished ? (
            <View
              style={{
                width: wp * 0.25,
                backgroundColor: "#727272",
                borderRadius: 5,
                paddingHorizontal: 10,
                justifyContent: "center",
                alignItems: "center",
                height: hp * 0.05,
              }}
            >
              <Text>참여불가</Text>
            </View>
          ) : (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity onPress={handleCheckOnPress}>
                {event.eventUserRoll !== "guest" ? (
                  <MaterialCommunityIcons
                    name="checkbox-blank-outline"
                    size={30}
                    color="black"
                  />
                ) : (
                  <MaterialIcons name="check-box" size={30} color="black" />
                )}
              </TouchableOpacity>
              <Text
                style={{ marginLeft: 8 }}
              >{`${event.event.eventCurrParticipant} / ${event.event.eventMaxParticipant} 명 참여중`}</Text>
            </View>
          )}
        </View>
      </View>
      <Spacer />
    </View>
  );
};
