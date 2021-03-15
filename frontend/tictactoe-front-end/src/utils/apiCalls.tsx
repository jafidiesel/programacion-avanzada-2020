// here all the apicalls
import { CampaignModel } from './static/interfaces';

export async function getStatus(hash: string) {
  return await fetch(`${process.env.REACT_APP_API_URL}campaign/${hash}/status`,{
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
		})
		.then( res => res.json())
		.then((res:any) => {
			console.log(res.data);
			console.log(res.data?.hash);
			return res.data;
		})
		.catch(error => console.log(error) )
}

export async function newCampaign(namePlayer: string): Promise<CampaignModel> {
  return await fetch(`${process.env.REACT_APP_API_URL}campaign/new`,{
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
			return res.data;
		})
		.catch(error => {
			console.log(error);
		} );
}