//Promise

const promise1 = new Promise((resolve,reject) => {
  if(true){resolve('It Worked')}
  else{ reject('It Broke')} 
})
const promise2 = new Promise((resolve,reject)=>{
  setTimeout(resolve, 100, 'Abhinav')
})
const promise3 = new Promise ((resolve,reject)=>{
  setTimeout(resolve, 1000, 'Jayant')
})
const promise4 = new Promise((resolve,reject)=>{
  setTimeout(resolve, 5000, 'Ansh')
})
7
promise1.then(result=>result+"!")
.then(result2=>{
  console.log(result2)
  })
.catch(()=>console.log("Error"))

Promise.all([promise1,promise2,promise3,promise4])
.then(values=>console.log(values))

const promise5 = Promise.resolve(setTimeout(()=>console.log('success'),1000))

const promise6 = Promise.reject('Failed').catch(()=>console.log('Something Went Wrong'))

const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url=>{
  fetch(url)
  .then(people=>people.json())
  }))
  .then(arr=>{
    console.log("1",arr[0])
    console.log("2",arr[1])
    console.log("3",arr[2])
    console.log("4",arr[3])
  })
.catch(()=>console.log("Whoops somethin wrong"))