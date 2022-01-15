import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist'

import rootReducer from './rootReducers'
import rootSaga from './rootSaga'
import persisteReducers from './reduxPersist'
import { configureStore } from '@reduxjs/toolkit'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: persisteReducers(rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).prepend(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = ReturnType<typeof store.dispatch>

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default store
