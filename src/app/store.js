import Vue from 'vue'
import { seedData } from './seed.js'

export const store = {
  state: {
    seedData
  },
  getActiveDay() {
    return this.state.seedData.find(day => day.active)
  },
  // Die map() (engl. abbilden) Methode wendet auf jedes Element des Arrays die
  // bereitgestellte Funktion an und gibt das Ergebnis in einem neuen Array zurück.
  setActiveDay(dayId) {
    this.state.seedData.map(dayObj => {
      dayObj.id === dayId ? (dayObj.active = true) : (dayObj.active = false)
    })
  }
}
