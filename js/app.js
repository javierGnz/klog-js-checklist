// Arrow function
function regularFunction(firstName, lastName) {
  console.log('Regular Function ' + firstName + ' ' + lastName)
}

regularFunction('Javier', 'Gonzalez')

const arrowFunction = (firstName, lastName) => {
  console.log('Arrow Function ' + firstName + ' ' + lastName)
}

arrowFunction('Javier', 'Gonzalez')

// Destructuring
const buildings = [
  { name: 'titanium', floors: [{ floor: 1, office: 'Transbank' }] },
  {
    name: 'apo4499',
    floors: [
      { floor: 14, office: 'AgendaPro' },
      { floor: 13, office: 'KLog' }
    ]
  }
]

const [
  ,
  {
    floors: [, { office }]
  }
] = buildings
console.log(office)

buildings.map(({ floors }) => {
  floors.map(({ office }) => {
    return (klog = office)
  })
})

console.log(klog)

// Default parameters
function initial(final, step = 1) {
  console.log(
    'El order de las etapas parte por el ' + step + ' y acaba con el ' + final
  )
}

// Sin declarar el step
initial(4)
// Declarando el step
initial(2, 5)

function greet(name, greeting, message = greeting + ' ' + name) {
  return [name, greeting, message]
}

console.log(greet('David', 'Hi'))
console.log(greet('David', 'Hi', 'Happy Birthday!'))

// Iterators
function myIterator(start, finish) {
  let index = start
  let count = 0

  return {
    next() {
      let result
      if (index < finish) {
        result = { value: index, done: false }
        index += 1
        count++
        return result
      }
      return {
        value: count,
        done: true
      }
    }
  }
}

const it = myIterator(0, 10)
let res = it.next()
while (!res.done) {
  console.log(res.value)
  res = it.next()
}

const arr = [1, 0, 4, 6]
const et = arr[Symbol.iterator]()

console.log(et.next())
console.log(et.next())
console.log(et.next())
console.log(et.next())
console.log(et.next())

const map = new Map()
map.set('key1', 'value1')
map.set('key2', 'value2')

const mapIterator = map[Symbol.iterator]()

console.log(mapIterator.next().value)
console.log(mapIterator.next().value)

for (const [key, value] of map) {
  console.log(`${key} and ${value}`)
}

const mySet = new Set()
mySet.add('uno')
mySet.add('dos')

const setIterator = mySet[Symbol.iterator]()
console.log(setIterator.next())
console.log(setIterator.next())

for (const value of mySet) {
  console.log(value)
}

console.clear()

const nested = [
  {
    isbn: '123-456-222',
    author: {
      lastname: 'Doe',
      firstname: 'Jane',
      job: [
        {
          address: 'Apoquindo 22',
          floor: 14
        }
      ]
    },
    editor: {
      lastname: 'Smith',
      firstname: 'Jane'
    },
    title: 'The Ultimate Database Study Guide',
    category: ['Non-Fiction', 'Technology']
  },
  {
    isbn: '721-716-222',
    author: {
      lastname: 'Red',
      firstname: 'Alfred',
      job: [
        { address: 'Apoquindo 22', floor: 18 },
        { address: 'Carmencita 25', floor: 6 }
      ]
    },
    editor: {
      lastname: 'Smith',
      firstname: 'Jane'
    },
    title: 'The Ultimate Database Study Guide',
    category: ['Suspense', 'Technology']
  }
]

const [
  {
    category: [red]
  }
] = nested
const [
  ,
  {
    author: {
      job: [, { floor: dir }]
    }
  }
] = nested

console.log('Red name, fisrt elemento of array' + red)
console.log(dir)

// Default parameters
const [a = 5, b = 7] = [1]
console.log(a, b)

// Change and create default parameteres
const user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe'
  }
}

const { id: index = 1, displayName } = user

console.log(index, displayName)

// tambien se puede decontrucion un objeto pasandolo por una funcion
function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} is ${name}`
}

console.log(whois(user))

// otra opcion es en un for of loop deconstruir y renombrar las variables
const people = [
  {
    name: 'Mike Smith',
    family: {
      mother: 'Jane Smith',
      father: 'Harry Smith',
      sister: 'Samantha Smith'
    },
    age: 35
  },
  {
    name: 'Tom Jones',
    family: {
      // mother: 'Norah Jones',
      father: 'Richard Jones',
      brother: 'Howard Jones'
    },
    age: 25
  }
]

for (const {
  name: n,
  family: { father: f, mother: m = 'Initial' }
} of people) {
  console.log('Name: ' + n + ', Father: ' + f + ', Mother: ' + m)
}

// spread operator
let arr1 = [2, 5, 3]
let arr2 = [4, 6]

arr1 = [...arr1, ...arr2]
console.log(arr1)

// Se puede usar para pasar una variable a un objeto que acepte un array
let dateFields = [1993, 06, 21] // 1 Jan 1970
let d = new Date(...dateFields)
console.log(d)

// Con objetos
let obj1 = { foo: 'bar', x: 42 }
let obj2 = { foo: 'baz', y: 13 }

let clonedObj = { ...obj1 }
// OUTPUT: Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 }
// OUTPUT: Object { foo: "baz", x: 42, y: 13 }

// rest parameters
function multiply(multiplier, ...nums) {
  return nums.map((item) => {
    return multiplier * item
  })
}

console.log(multiply(2, 40, 12, 90))

const combine = (...args) => {
  return args.reduce((prev, curr) => prev + ' ' + curr)
}

let message = combine('JavaScript', 'Rest', 'Parameters')
console.log(message)

// Shorthand
function formatMessage(name, id, avatar) {
  return {
    name: name,
    id: id,
    avatar: avatar,
    timestamp: Date.now(),
    save: function () {
      // save message
    }
  }
}

function anotherFormatMessage(name, id, avatar) {
  return {
    name,
    id,
    avatar,
    timestamp: Date.now(),
    save() {
      // save message
    }
  }
}

// Array methods
const arrayForEach = ['first', 'second', 'last']
const arrayMap = ['first', 'second', 'last']
const arrayFilter = [1, 3, 6, 12, 9, 4]
const arrayReduce = [4, 1, 7, 8]
const arraySome = ['jose', 'marta', 'laura']
const arrayFind = [
  { name: 'jose', age: 21 },
  { name: 'marta', age: 39 },
  { name: 'olivia', age: 14 }
]

arrayForEach.forEach((item, index) => {
  console.log('item ' + item + ' en la posicion ' + index)
})

arrayMap.map((item) => {
  console.log('item ' + item)
})

const logFilter = arrayFilter.filter((big) => big > 4)
console.log(logFilter)

// El ultimo valor de reduce es el valor inicial, si no seria cero
const logReduce = arrayReduce.reduce((item, value) => item + value, 2)
console.log(logReduce)

// Retorna true o false dependiendo si encuentra el valor que retornamos
const logSome1 = arraySome.some((item) => item === 'marta') // true
const logSome2 = arraySome.some((item) => item === 'javier') // false
console.log(logSome1)
console.log(logSome2)

const logFind = arrayFind.find((item) => item.name === 'jose')
console.log(logFind)

const logFindIndex = arrayFind.findIndex((item) => item.name === 'olivia')
console.log(logFindIndex)

// Promise
const ALL_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon?limit=50'

function getPromise(URL) {
  let request = new Promise(function (resolve, reject) {
    let req = new XMLHttpRequest()
    req.open('GET', URL)
    req.onload = function () {
      if (req.status == 200) {
        resolve(req.response)
      } else {
        reject('There is an Error!')
      }
    }
    req.send()
  })
  return request
}

let promise = getPromise(ALL_POKEMONS_URL)

const consumer = () => {
  promise.then(
    (result) => {
      console.log({ result })
    },
    (error) => {
      console.log('We have encountered an Error!')
    }
  )
}

consumer()

let promiseTwo = getPromise(ALL_POKEMONS_URL)

const pokemonsters = () => {
  let loader = true
  promiseTwo
    .then((result) => {
      console.log({ result })
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      loader = false
    })
}

// Async/Await
async function exampleAsync() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 2000)
  })
  let result = await promise // wait until the promise resolves (*)
  console.log(result)
}

exampleAsync()
