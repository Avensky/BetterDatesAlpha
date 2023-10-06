import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

// import mountainBiking   from '../../assets/images/mountainbiking.jpg';
// import dinnerDate       from '../../assets/images/dinnerDate.jpg';
// import orderTogo        from '../../assets/images/orderTogo.jpg';
// import hiking           from '../../assets/images/hiking.jpg';
// import sunset           from '../../assets/images/sunset.jpg';
// import bowling          from '../../assets/images/bowling.jpg';
// import karaoke          from '../../assets/images/karaoke.jpg';
// import winePaint        from '../../assets/images/winePaint.jpg';
// import cooking          from '../../assets/images/cooking.jpg';
// import walk             from '../../assets/images/walk.jpg';
// import movieDate        from '../../assets/images/movieDate.jpg';
// import homeMovie        from '../../assets/images/homeMovie.jpg';
// import barCocktails     from '../../assets/images/barCocktails.jpg';
// import questionMark     from '../../assets/images/questionMark.png';
// import { updateDateGame } from '../actions';

const initialState = {
    payload : null,
    loading : false,
    date    : false,
    errors  : null,
}

// const dateIdeas = [
//     {id: 0,  name: '????',                  imageUrl:questionMark}, 
//     {id: 14,  name: 'Ver el Atardecer',      imageUrl:sunset}, 
//     {id: 1,  name: 'Ir a Cenar a un Lugar', imageUrl:dinnerDate}, 
//     {id: 2,  name: 'Ordenar para llevar',   imageUrl:orderTogo},        
//     {id: 3,  name: 'Subir una montana',     imageUrl:hiking}, 
//     {id: 4,  name: 'Andar en bici',         imageUrl:mountainBiking}, 
//     {id: 5,  name: 'Ir a la playa',         imageUrl:sunset}, 
//     {id: 6,  name: 'Boliche',               imageUrl:bowling}, 
//     {id: 7,  name: 'Karaoke',               imageUrl:karaoke}, 
//     {id: 8,  name: 'Pintar y vino',         imageUrl:winePaint}, 
//     {id: 9,  name: 'Cocinar juntos',        imageUrl:cooking}, 
//     {id: 10, name: 'Caminar',               imageUrl:walk},
//     {id: 11, name: 'Ver una pelicula',      imageUrl:homeMovie},                           
//     {id: 12, name: 'Ir al cine',            imageUrl:movieDate}, 
//     {id: 13, name: 'Salir por una bebida',  imageUrl:barCocktails}
// ]
/*******************************************
 * Roll Game
*******************************************/

// const getRandomInt = (max) => { 
//     return Math.floor(Math.random() * max);
// }
// 
// export const rollHandlerSuccess = (state, action) => {
//     console.log('rollHandlerSuccess reducer ')
//     let randomInt = getRandomInt(dateIdeas.length)
//     //const date = dateIdeas[randomInt+1]
//     const selectedDate = {selection: randomInt, game: 'dating'}
//     updateDateGame(selectedDate)
//     return (updateObject(state, {
//         loading: false
//     }))
// }

/*******************************************
 * Get Date
*******************************************/

export const getDateStart = (state, action) => {
    return updateObject(state, {
        loading: true
    })
}

export const getDateFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        errors: action.error
    })
}

export const getDateSuccess = (state, action) => {
    //const selection = action.payload[0].selection
    //console.log('getDateSuccess', selection)
    //const date = dateIdeas[selection]
    console.log('reducer date = ', action.payload)
    return updateObject(state, {
        loading: false,
        payload: action.payload
    })
}

/*******************************************
 * Select Game
*******************************************/

export const selectDateStart = (state, action) => {
    return updateObject(state, {
        loading: true
    })
}

export const selectDateFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        errors: action.error
    })
}

export const selectDateSuccess = (state, action) => {
    console.log('selectDateSuccess reducer = ', action.payload)
    return updateObject(state, {
        loading: false,
        payload: action.payload
    })
}

/*******************************************
 * Update Game
*******************************************/

export const updateDateStart = (state, action) => {
    return updateObject(state, {
        loading: true
    })
}

export const updateDateFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        errors: action.error
    })
}

export const updateDateSuccess = (state, action) => {
    //const selection = action.payload.selection
    //console.log('updateDateSuccess', selection)
    //const date = dateIdeas[selection]
    return updateObject(state, {
        loading: false,
        payload: action.payload
    })
}

/*******************************************
 * Reset Game
*******************************************/

export const resetDateStart = (state, action) => {
    return updateObject(state, {
        loading: true
    })
}

export const resetDateFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        errors: action.error
    })
}

export const resetDateSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        payload: null
    })
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.ROLL_HANDLER_SUCCESS   : return rollHandlerSuccess(state, action);

        case actionTypes.GET_DATE_START         : return getDateStart(state, action);
        case actionTypes.GET_DATE_FAIL          : return getDateFail(state, action);
        case actionTypes.GET_DATE_SUCCESS       : return getDateSuccess(state, action);

        case actionTypes.SELECT_DATE_START      : return selectDateStart(state, action);
        case actionTypes.SELECT_DATE_FAIL       : return selectDateFail(state, action);
        case actionTypes.SELECT_DATE_SUCCESS    : return selectDateSuccess(state, action);

        case actionTypes.UPDATE_DATE_START      : return updateDateStart(state, action);
        case actionTypes.UPDATE_DATE_FAIL       : return updateDateFail(state, action);
        case actionTypes.UPDATE_DATE_SUCCESS    : return updateDateSuccess(state, action);    

        case actionTypes.RESET_DATE_START       : return resetDateStart(state, action);
        case actionTypes.RESET_DATE_FAIL        : return resetDateFail(state, action);
        case actionTypes.RESET_DATE_SUCCESS     : return resetDateSuccess(state, action);
    
        default: return state
    }
}

export default reducer