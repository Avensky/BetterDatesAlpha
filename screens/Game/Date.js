import React, { useEffect } from 'react';
import { View, Pressable, Text, Image, StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';
import { Colors } from '../../constants/styles';
import Button from '../../components/ui/Button';

const Date = (props) => {
    const isFocused = useIsFocused();
    let rollHandler = props.updateDate
    if (!props.date) {
        rollHandler = props.selectDate
    }
    useEffect(()=>{
        async function loadDate() {
           await props.getDate()
        }
        if(!props.date && isFocused || isFocused) {loadDate()}
    }, [isFocused])

    console.log('props.date : ', props.date)
    return <View 
        style={styles.container}
        >
            <View style={{ width: '100%'}}>
                <Text style={styles.titleText} numberOfLines={1}>
                    {props.date ? props.date.name : null}
                </Text>
            </View>        
            <Image 
                style={ styles.image } 
                alt={ props.date 
                    ? props.date.name 
                    : null} 
                source={ props.date 
                    ? props.date.imageUrl 
                    : null} 
            />
            <Button 
                style={styles.button}
                onPress={() => rollHandler()} 
            >
                Randomize!
            </Button>
    </View>
}
const mapStateToProps = state => {
    return {
        date : state.game.payload
    }
}

const mapDispatchToProps = dispatch => {
    return {
        rollHandler : ()        => dispatch(actions.rollHandler()),
        getDate     : ()        => dispatch(actions.getDateGame()),
        selectDate  : (values)  => dispatch(actions.selectDate(values)),
        updateDate  : ()        => dispatch(actions.updateDateGame()),
        resetDate   : ()        => dispatch(actions.resetDateGame())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Date);

const styles = StyleSheet.create({
    container: {
        alignItems:'center', 
        justifyContent:'center',
        backgroundColor: 'white',
        height: '100%',
        margin:2
    }, 
    image: {
        width:360,
        height:400,
        borderWidth: 4,
        borderColor: "black",
        borderRadius: 5,

    },
    titleText: {
        fontSize: 26,
        fontWeight: '800',
        textTransform: 'uppercase',
        padding: 4,
        margin: 8,
        width: '100%',
        overflow: 'hidden',
        textAlign:'center'
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color:'white',
    }
});