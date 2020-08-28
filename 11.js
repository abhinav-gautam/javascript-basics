const urls=[
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/photos',
	'https://jsonplaceholder.typicode.com/albums'
]
//Earlier
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
//For await of loop
const getData2 = async function (urls) {
	const arrayOfPromises = urls.map(url=>fetch(url))
	for await (let resp of arrayOfPromises){
		const data = await resp.json()
		console.log(data)
	}
}
getData2(urls)