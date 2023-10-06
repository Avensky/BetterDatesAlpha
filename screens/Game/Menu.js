import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Button from '../../components/ui/Button';
import Date from "./Date";

export default function Menu(props) {
    const [game, setGame] = useState(false)

    let dates
    
    const setGameHandler = (game) => {
      setGame(game)
    }
    
    if (game === 'dates') {
      dates = <Date onPress={()=> setGameHandler('dates')} />
    } 

    
    return (      
        <View style={styles.container}>
            <Button onPress={()=> props.navigation.navigate('Date')}>
                Better Dates
            </Button>
            {dates} 
        </View>
    );
;}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
  });
  