import { insertDate, getDate, updateDate, resetDate } from '../../utility/local-database';
import * as actionTypes from './actionTypes';

import barCocktails from '../../assets/dates/twoRedCocktails.jpg';
import bowling          from '../../assets/dates/bowling2.jpg';
import mountainBiking   from '../../assets/dates/bike_riding_in_autumn.jpg';
import dinnerDate       from '../../assets/dates/coupleEatingOut.jpg';
import orderTogo        from '../../assets/dates/orderForPickup.jpg';
import hiking           from '../../assets/dates/Woman_and_Man_on_Mountain.jpg';
import sunset           from '../../assets/dates/heart_shape_sunset.jpg';
import karaoke          from '../../assets/dates/microphone.jpg';
import winePaint        from '../../assets/dates/coffee_and_art.jpg';
import cooking          from '../../assets/dates/cook_dinner.jpg';
import walk             from '../../assets/dates/couple_walking.jpg';
import homeMovie        from '../../assets/dates/home-movie.jpg';
import movieDate        from '../../assets/dates/Empty_Movie_Theatre.jpg';

/*******************************************
 * Get Game
*******************************************/
const dateIdeasSpanish = [
    //{id: 0,  name: '????',                  imageUrl:questionMark}, 
    {id: 0,  name: 'Ver el Atardecer',      imageUrl:sunset}, 
    {id: 1,  name: 'Ir a Cenar a un Lugar', imageUrl:dinnerDate}, 
    {id: 2,  name: 'Ordenar para llevar',   imageUrl:orderTogo},        
    {id: 3,  name: 'Subir una montana',     imageUrl:hiking}, 
    {id: 4,  name: 'Andar en bici',         imageUrl:mountainBiking}, 
    {id: 5,  name: 'Ir a la playa',         imageUrl:sunset}, 
    {id: 6,  name: 'Boliche',               imageUrl:bowling}, 
    {id: 7,  name: 'Karaoke',               imageUrl:karaoke}, 
    {id: 8,  name: 'Pintar y vino',         imageUrl:winePaint}, 
    {id: 9,  name: 'Cocinar juntos',        imageUrl:cooking}, 
    {id: 10, name: 'Caminar',               imageUrl:walk},
    {id: 11, name: 'Ver una pelicula',      imageUrl:homeMovie},                           
    {id: 12, name: 'Ir al cine',            imageUrl:movieDate}, 
    {id: 13, name: 'Salir por una bebida',  imageUrl:barCocktails}
]
const dateIdeas = [
    //{id: 0,  name: '????',                  imageUrl:questionMark}, 
    {id: 0,  name: 'Watch the sunset',          imageUrl:sunset}, 
    {id: 1,  name: 'Eat at a restaurant',       imageUrl:dinnerDate}, 
    {id: 2,  name: 'Order takeout',             imageUrl:orderTogo},        
    {id: 3,  name: 'Go on a hike',              imageUrl:hiking}, 
    {id: 4,  name: 'Ride bicycles',             imageUrl:mountainBiking}, 
    {id: 5,  name: 'Go to the beach',           imageUrl:sunset}, 
    {id: 6,  name: 'Go Bowling',                imageUrl:bowling}, 
    {id: 7,  name: 'Sing Karaoke',              imageUrl:karaoke}, 
    {id: 8,  name: 'Paint and wine',            imageUrl:winePaint}, 
    {id: 9,  name: 'Cook together',             imageUrl:cooking}, 
    {id: 10, name: 'Go on a walk',              imageUrl:walk},
    {id: 11, name: 'Watch a show',              imageUrl:homeMovie},                           
    {id: 12, name: 'Go to the movies',          imageUrl:movieDate}, 
    {id: 13, name: 'Go out for drinks',         imageUrl:barCocktails}
]

const getRandomInt = (max) => { return Math.floor(Math.random() * max);}

// export const rollHandlerStart = () => {
//     return{
//         type: actionTypes.ROLL_HANDLER_START
//     }
// }
// 
// export const rollHandlerFail = () => {
//     return{
//         type: actionTypes.ROLL_HANDLER_FAIL
//     }
// }
// 
// export const rollHandlerSuccess = () => {
//     console.log('rollHandlerSuccess actions')
//     return{
//         type: actionTypes.ROLL_HANDLER_SUCCESS
//     }
// }
// 
// export const rollHandler = () => {
//     console.log('rollHandler actions')
//     //const randomInt = getRandomInt(game.length)
//     return rollHandlerSuccess()
//     
// }

/*******************************************
 * Get Game
*******************************************/

export const getDateStart = () => {
    return {
        type: actionTypes.GET_DATE_START
    }
}

export const getDateFail = (error) => {
    return {
        type: actionTypes.GET_DATE_FAIL,
        error: error
    }
}

export const getDateSuccess = (payload) => {
    //console.log('getDateSuccess payload = ', payload)
    const selection = payload[0].selection
    //console.log('getDateSuccess selection', selection)
    const date = dateIdeas[selection]
    //console.log('getDateSuccess date', date)
    return {
        type: actionTypes.GET_DATE_SUCCESS,
        payload: date
    }
}

export const getDateGame = () => {
    return dispatch => {
        dispatch(getDateStart())
        getDate()
            .then(res => dispatch(getDateSuccess(res)))
            .catch(err => dispatch(getDateFail(err)))
    }
}

/*******************************************
 * Select Game
*******************************************/

export const selectDateStart = () => {
    return {
        type: actionTypes.SELECT_DATE_START
    }
}

export const selectDateFail = (error) => {
    return {
        type: actionTypes.SELECT_DATE_FAIL,
        error: error
    }
}

export const selectDateSuccess = (payload) => {
    console.log('selectDateSuccess = ', payload.selection)
    const selection = payload.selection
    console.log('selectDateSuccess', selection)
    const date = dateIdeas[selection]
    return {
        type: actionTypes.SELECT_DATE_SUCCESS,
        payload: date
    }
}

export const selectDate = (dateObj) => {
    let randomInt = getRandomInt(dateIdeas.length)
    //const date = dateIdeas[randomInt+1]
    const selectedDate = {selection: randomInt, game: 'dating'}
    console.log('selectDate = ', selectedDate)

    return dispatch => {
        dispatch(selectDateStart())
        insertDate(selectedDate)
            .then(res => dispatch(selectDateSuccess(selectedDate)))
            .catch(err => dispatch(selectDateFail(err)))
    }
}

/*******************************************
 * Update Game
*******************************************/

export const updateDateStart = () => {
    console.log('updateDateStart')
    return {
        type: actionTypes.UPDATE_DATE_START
    }
}

export const updateDateFail = (error) => {
    console.log('updateDateFail = ', error)
    return {
        type: actionTypes.UPDATE_DATE_FAIL,
        error: error
    }
}

export const updateDateSuccess = (payload) => {
    
    const selection = payload.selection
    //console.log('updateDateSuccess', selection)
    const date = dateIdeas[selection]
    console.log('updateDateSuccess = ', date)
    updateDate(date)

    return {
        type: actionTypes.UPDATE_DATE_SUCCESS,
        payload: date
    }
}

export const updateDateGame = () => {
    //console.log('dateObj updateDateGame', dateObj )

    let randomInt = getRandomInt(dateIdeas.length)
    //const date = dateIdeas[randomInt+1]
    const selectedDate = {selection: randomInt, game: 'dating'}
    console.log('updateDateGame selectedDate = ', selectedDate)
    return async dispatch => {
        await dispatch(updateDateStart());
        updateDate(selectedDate)
            .then(res => dispatch(updateDateSuccess(selectedDate)))
            .catch(err => dispatch(updateDateFail(err)))
    }
}

/*******************************************
 * Reset Game
*******************************************/

export const resetDateStart = () => {
    return {
        type: actionTypes.RESET_DATE_START
    }
}

export const resetDateFail = (error) => {
    return {
        type: actionTypes.RESET_DATE_FAIL,
        error: error
    }
}

export const resetDateSuccess = (payload) => {
//    const date = dateIdeas[0]
    return {
        type: actionTypes.RESET_DATE_SUCCESS,
//        payload: date
    }
}

export const resetDateGame = () => {
    return dispatch => {
        dispatch(resetDateStart())
        resetDate()
            .then(res => dispatch(resetDateSuccess(res)))
            .catch(err => dispatch(resetDateFail(err)))
    };
};