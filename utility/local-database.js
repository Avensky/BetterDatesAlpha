import * as SQLite from 'expo-sqlite';
import { Date } from '../models/date';

const database = SQLite.openDatabase('dates.db');

export function init() {
    const promise = new Promise((resolve, reject)=> {
        database.transaction((tx) => {
            tx.executeSql( 
                `CREATE TABLE IF NOT EXISTS dates (
                    game TEXT PRIMARY KEY,
                    selection INTEGER NOT NULL
                )`,
                [],
                ()=>{
                    resolve();
                },
                (_, error)=>{
                    reject(error);
                }
            );
        });
    })

    return promise;
}

export function insertDate(date) {
    const promise = new Promise((resolve, reject)=>{
        database.transaction((tx)=>{
            tx.executeSql(
                `INSERT INTO dates (game, selection) VALUES (?,?)`, 
                [
                    date.game, 
                    date.selection
                ],
                (_, result) => {
                    const date = [];
                    for (const dp of result.rows._array) {
                        date.push(
                            new Date(
                                dp.game,
                                dp.selection,
                                // dp.id
                            )
                        )
                    }
                    console.log('insertDate ',date);
                    resolve();
                },
                (_,error)=>{
                    reject(error);
                }
            )
        })
    });
    return promise
}

export function upsertDate(date) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                `INSERT INTO dates (game, selection)
                    VALUES (?,?)
                    ON CONFLICT(game) DO UPDATE
                    SET selection = ?
                `,
                [
                    date.game,
                    date.selection,
                ],
                (_, result) => {
                    const res = result[0]
                    //console.log('res = ', res);
                    resolve(res);
                },
                (_, error) => {
                    reject(error);
                }
            )
        })
    })
    return promise
}

export function updateDate(date) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                `UPDATE dates SET selection = ?
                    WHERE game = ?`,
                [
                    date.selection,
                    date.game,
                ],
                (_, ) => {
                    console.log('sql updateDate ', date)
                    resolve();
                },
                (_, error) => {
                    reject(error);
                }
            )
        })
    })
    return promise
}

export function getDate() {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM dates', 
                [], 
                (_, result) => {
                    const date = [];
                    console.log('sql getDate = ',result.rows._array[0])
                    for (const dp of result.rows._array) {
                        date.push(
                            new Date(
                                dp.game,
                                dp.selection,
                            )
                        )
                    }

                    resolve(date)
                },
                (_, error) => {
                    reject(error);
                }
            
            )
        })
    })
    return promise
}

export function resetDate() {
    const promise = new Promise((resolve, reject)=>{
        database.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM dates',
                [],
                (_, result) => {
                    console.log('reset date', result)
                    resolve(result)
                },
                (_, error) => {
                    reject(error);
                }
            )
        })
    })
    return promise
}