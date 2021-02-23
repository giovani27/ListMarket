import {createStore,combineReducers } from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


import CalculatorReducer from './calculator/calculator.reducer'
import productsReducer from './products/products.reducer';


const rootReducer = combineReducers({
   calculator: CalculatorReducer,
   products: productsReducer

})

const persistedReducer = persistReducer({
   key: "root",
   storage
} ,rootReducer)

export const store = createStore(persistedReducer)
export const persistedStore = persistStore(store)