import { CampaignModel } from "interfaces/campaign";

export async function getStatus(hash: string) {
	return await fetch(`${process.env.REACT_APP_API_URL}campaign/${hash}/status`, {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	})
		.then(res => res.json())
		.then((res: any) => {
			return res.data;
		})
		.catch(error => console.error(error))
}

export async function newCampaign(namePlayer: string): Promise<CampaignModel> {
	return await fetch(`${process.env.REACT_APP_API_URL}campaign/new`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ namePlayer: namePlayer })
	})
		.then(res => res.json())
		.then((res: any) => {
			return res.data;
		})
		.catch(error => {
			console.error(error);
		});
}

export async function joinCampaign(hash: string, namePlayer: string): Promise<CampaignModel> {
	return await fetch(`${process.env.REACT_APP_API_URL}campaign/${hash}/join`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ namePlayer: namePlayer })
	})
		.then(res => res.json())
		.then((res: any) => {
			return res.data;
		})
		.catch(error => {
			console.error(error);
		});
}

export async function hashExist(hash: string): Promise<any> {
	return await fetch(`${process.env.REACT_APP_API_URL}campaign/${hash}/status`, {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	})
		.then(res => res)
		.catch(error => error);
}

export async function setPosition(hash: string, position: number): Promise<any> {
	return await fetch(`${process.env.REACT_APP_API_URL}campaign/${hash}/cell/${position}`, {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	})
		.then(res => res)
		.catch(error => console.error(error));
}