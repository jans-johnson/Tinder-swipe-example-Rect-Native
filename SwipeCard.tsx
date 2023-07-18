import Swiper from "react-native-deck-swiper";
import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const SwipeCard = () => {
  return (
        <Swiper
            cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
            verticalSwipe={false}
            renderCard={(card) => {
                return (
                    <View style={styles.card}>
                        <Text style={styles.text}>{card}</Text>
                    </View>
                )
            }}
            onSwiped={(cardIndex) => {console.log(cardIndex)}}
            onSwipedAll={() => {console.log('onSwipedAll')}}
            onSwiping={(prop)=>{
                
            }}
            cardIndex={0}
            backgroundColor={'#4FD0E9'}
            stackSize= {3}
            stackSeparation={10}
            overlayLabels={{
                left: {
                  title: 'NOPE',
                  style: {
                    label: {
                      backgroundColor: 'red',
                      borderColor: 'black',
                      color: 'white',
                      borderWidth: 1
                    },
                    wrapper: {
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      justifyContent: 'flex-start',
                      marginTop: 30,
                      marginLeft: -30
                    }
                  }
                },
                right: {
                  title: 'LIKE',
                  style: {
                    label: {
                      backgroundColor: 'green',
                      borderColor: 'black',
                      color: 'white',
                      borderWidth: 1
                    },
                    wrapper: {
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      marginTop: 30,
                      marginLeft: 30
                    }
                  }
                },
              }}
              animateOverlayLabelsOpacity
              animateCardOpacity
              swipeBackCard
            />
  );
};

export default SwipeCard;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    card: {
      borderRadius: 10,
      borderWidth: 2,
      justifyContent: 'center',
      backgroundColor: 'white',
      elevation:10,
      height:'80%'
    },
    text: {
      textAlign: 'center',
      fontSize: 50,
      backgroundColor: 'transparent'
    },
    done: {
      textAlign: 'center',
      fontSize: 30,
      color: 'white',
      backgroundColor: 'transparent'
    },
    negative:{
        color:'red',
        position:'absolute',
        top:10,
        right:10,
    },
    positive:{
        color:'green',
        position:'absolute',
        top:10,
        left:10
    }
  })
