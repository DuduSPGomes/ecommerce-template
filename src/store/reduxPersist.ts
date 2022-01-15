import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { RootState } from 'store'
import { Reducer } from 'react'
import { Action } from 'redux'

const reduxPersist = (reducers: Reducer<RootState, Action<any>>) => {
  const persistedReducers = persistReducer(
    {
      key: 'root',
      storage
    },
    reducers
  )

  return persistedReducers
}

export default reduxPersist
