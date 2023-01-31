import { Plant } from "./Models/Plant.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

/** @type {import('./Models/Plant').Plant[]} */
  plants = [
    new Plant(
      {
      name: 'Monstera',
      price: 38,
      imgURL: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80'
      }
    ),
    new Plant(
      {
      name: 'Zeylanica',
      price: 20,
      imgURL: 'https://images.unsplash.com/photo-1620127252536-03bdfcf6d5c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80'
      }
    ),
    new Plant(
      {
      name: 'Zamiifolia',
      price: 15,
      imgURL: 'https://images.unsplash.com/photo-1614594895304-fe7116ac3b58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80'
      }
    ),
    new Plant(
      {
      name: 'Philodendron',
      price: 14,
      imgURL: 'https://images.unsplash.com/photo-1609142621730-db3293839541?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80'
      }
    ),new Plant(
      {
      name: 'Alocasia',
      price: 18,
      imgURL: 'https://images.unsplash.com/photo-1610630694586-2af2f4cefcf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80'
      }
    ),new Plant(
      {
      name: 'Minina',
      price: 15,
      imgURL: 'https://images.unsplash.com/photo-1612363228106-c94b0754e2c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80'
      }
    ),new Plant(
      {
      name: 'Ficus Elastica',
      price: 16,
      imgURL: 'https://images.unsplash.com/photo-1613737693507-cdb994656e26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80'
      }
    ),new Plant(
      {
      name: 'Scindapsus',
      price: 32,
      imgURL: 'https://images.unsplash.com/photo-1612363148951-15f16817648f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80'
      }
    )
  ]



}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
