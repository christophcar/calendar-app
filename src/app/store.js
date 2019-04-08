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
  },
  submitEvent(eventDetails) {
    const activeDay = this.getActiveDay()
    activeDay.events.push({ details: eventDetails, edit: false })
  },
  editEvent(dayId, eventDetails) {
    this.resetEditOfAllEvents() // reset thruthy edit events to false
    const dayObj = this.state.seedData.find(day => day.id === dayId)
    const eventObj = dayObj.events.find(event => event.details === eventDetails)
    eventObj.edit = true // set clicked edit event to true
  },
  // helper function that runs through all data and sets edit prop to false
  resetEditOfAllEvents() {
    this.state.seedData.map(dayObj => {
      dayObj.events.map(event => {
        event.edit = false
      })
    })
  }
}
