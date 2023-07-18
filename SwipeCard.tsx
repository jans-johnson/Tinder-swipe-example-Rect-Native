import React, { useRef } from "react";
import Swiper from "react-native-deck-swiper";
import { Button, StyleSheet, Text, View } from "react-native";

const SwipeCard = () => {
    const swiperRef = useRef<Swiper<string> | null>(null);

  const swipeLeft = () => {
    if (swiperRef.current) {
      swiperRef.current.swipeLeft();
    }
  };

  const swipeRight = () => {
    if (swiperRef.current) {
      swiperRef.current.swipeRight();
    }
  };

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        cards={["DO", "MORE", "OF", "WHAT", "MAKES", "YOU", "HAPPY"]}
        verticalSwipe={false}
        renderCard={(card) => {
          return (
            <View style={styles.card}>
              <Text style={styles.text}>{card}</Text>
            </View>
          );
        }}
        onSwiped={(cardIndex) => {
          console.log(cardIndex);
        }}
        onSwipedAll={() => {
          console.log("onSwipedAll");
        }}
        onSwiping={(prop) => {}}
        cardIndex={0}
        backgroundColor={"#4FD0E9"}
        stackSize={3}
        stackSeparation={10}
        overlayLabels={{
          left: {
            title: "NOPE",
            style: {
              label: {
                backgroundColor: "red",
                borderColor: "black",
                color: "white",
                borderWidth: 1,
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                marginTop: 30,
                marginLeft: -30,
              },
            },
          },
          right: {
            title: "LIKE",
            style: {
              label: {
                backgroundColor: "green",
                borderColor: "black",
                color: "white",
                borderWidth: 1,
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginTop: 30,
                marginLeft: 30,
              },
            },
          },
        }}
        animateOverlayLabelsOpacity
        animateCardOpacity
        swipeBackCard
      />
      <View style={styles.buttonContainer}>
        <Button title="Swipe Left" onPress={swipeLeft} />
        <Button title="Swipe Right" onPress={swipeRight} />
      </View>
    </View>
  );
};

export default SwipeCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  card: {
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: "center",
    backgroundColor: "white",
    elevation: 10,
    height: "80%",
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent",
  },
  buttonContainer: {
    alignSelf:'center',
    position:'absolute',
    bottom:10,
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
});
