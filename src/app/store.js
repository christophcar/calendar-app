import Vue from 'vue'
import { seedData } from './seed.js'

export const store = {
  state: {
    seedData
  },
  // return the day object that has active: true
  getActiveDay() {
    return this.state.seedData.find(day => day.active)
  },
  // set the selected day to active: true and all other days to active: false
  // dayObj is a single object item from the seed.js array
  setActiveDay(dayId) {
    this.state.seedData.map(dayObj => {
      dayObj.id === dayId ? (dayObj.active = true) : (dayObj.active = false)
    })
  }
}
