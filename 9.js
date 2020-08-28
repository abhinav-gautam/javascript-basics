//Async Await

async function fetchUsers(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log(data)
}

fetchUsers()
const urls=[
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/photos',
	'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function(){
	try{
		const [user, photos, albums] = await Promise.all(urls.map(async function (url){
			const resp = await fetch(url);
			return resp.json()
		}))
		console.log("users",user)
		console.log("photos",photos)
		console.log("albums",albums)
	}catch(error){
		console.log("Oops",error)
	}finally{
		console.log("Job Done")
	}
	
}
getData()