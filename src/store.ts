import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const mainStore = defineStore('mainStore', {
  state: () => ({
    cgpa: useStorage('cgpa', 0),
    gpaScale: useStorage('gpaScale', [
      {
        grade: 'A+',
        weight: 4.0
      },
      {
        grade: 'A',
        weight: 4.0
      },
      {
        grade: 'A-',
        weight: 3.67
      },
      {
        grade: 'B+',
        weight: 3.33
      },
      {
        grade: 'B',
        weight: 3.0
      },
      {
        grade: 'B-',
        weight: 2.67
      },
      {
        grade: 'C+',
        weight: 2.33
      },
      {
        grade: 'C',
        weight: 2.0
      },
      {
        grade: 'F',
        weight: 0.0
      }
    ]),
    gradingScale: useStorage('gradingScale', [
      {
        grade: "A+",
        range: [90, 100]
      },
      {
        grade: "A",
        range: [80, 89]
      },
      {
        grade: "A-",
        range: [75, 79]
      },
      {
        grade: "B+",
        range: [70, 74]
      },
      {
        grade: "B",
        range: [65, 69]
      },
      {
        grade: "B-",
        range: [60, 64]
      },
      {
        grade: "C+",
        range: [55, 59]
      },
      {
        grade: "C",
        range: [50, 54]
      },
      {
        grade: "F",
        range: [0, 49]
      }
    ]),
  })
})