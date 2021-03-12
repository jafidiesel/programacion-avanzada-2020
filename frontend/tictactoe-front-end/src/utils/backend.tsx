// here all the apicalls

export function getStatus(hash: string, namePlayer: string) {
  fetch(`${process.env.REACT_APP_API_URL}campaign/${hash}/status`,{
	method: 'POST',
	headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
	},
	body: JSON.stringify({ namePlayer: namePlayer })
  })
	.then( res => res.json())
	.then((res:any) => {
    console.log(res.data);
    console.log(res.data?.hash);
	})
	.catch(error => console.log(error) )
  return true;
}

export function getHash(namePlayer: string) {
  let response = '';
  fetch(`${process.env.REACT_APP_API_URL}campaign/new`,{
	method: 'POST',
	headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
	},
	body: JSON.stringify({ namePlayer: namePlayer })
  })
	.then(res => res.json())
	.then((res:any) => {
    console.log(res.data);
    console.log(res.data?.hash);
    if(res.data?.hash) response = res.data?.hash;
	})
	.catch(error => console.log(error) )
  return response;
}