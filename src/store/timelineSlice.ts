import { createSlice } from '@reduxjs/toolkit'
import { periods } from '../data/periods'

const timelineSlice = createSlice({
	name: 'timeline',
	initialState: periods,
	reducers: {},
})

export default timelineSlice.reducer
