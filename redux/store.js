import { configureStore } from '@reduxjs/toolkit'
import gameReducer from './reducers/game';

export default configureStore({
    reducer : {
        game: gameReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});