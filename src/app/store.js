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
    const eventObj = this.getEventObject(dayId, eventDetails)
    eventObj.edit = true
  },
  updateEvent(dayId, originalEventDetails, newEventDetails) {
    const eventObj = this.getEventObject(dayId, originalEventDetails)
    eventObj.details = newEventDetails
    eventObj.edit = false
  },
  deleteEvent(dayId, eventDetails) {
    const dayObj = this.state.seedData.find(day => day.id === dayId)
    const eventIndexToRemove = dayObj.events.indexOf(event => event.details === eventDetails)
    dayObj.events.splice(eventIndexToRemove, 1)
  },

  // helper function to prevent dublicate code
  getEventObject(dayId, eventDetails) {
    const dayObj = this.state.seedData.find(day => day.id === dayId)
    return dayObj.events.find(event => event.details === eventDetails)
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
