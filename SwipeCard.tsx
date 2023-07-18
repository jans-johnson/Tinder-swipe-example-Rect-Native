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
                        <Text style={[styles.positive]}>yes</Text>
                        <Text style={[styles.negative]}>No</Text>
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
      flex: 1,
      borderRadius: 10,
      borderWidth: 2,
      justifyContent: 'center',
      backgroundColor: 'white',
      elevation:3
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
