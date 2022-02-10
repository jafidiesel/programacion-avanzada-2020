import React, { Fragment, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { hashExist } from 'utils/apiCalls';

import NavigationBar from 'components/navbar/NavigationBar';
import Router from './Router';
import JoinModal from 'components/joinModal/JoinModal';

const App = () => {
	const [campaignHash, setCampaignHash] = useState("");
	const [showModal, setShowModal] = useState(false);
	const history = useHistory();

	const toggleShowModal = () => {
		setShowModal(!showModal);
	}
	const openModal = async () => {
		try {
			const response = await hashExist(campaignHash);
			if (response.status === 200) {
				setShowModal(true);
			} else {
				console.error(`${campaignHash} doesn't exist!`)
			}
		} catch (error) {
			console.error(`${campaignHash} doesn't exist!`)
		}
	}
	const handleCampaignHash = (event: any): void => {
		setCampaignHash(event.target ? event.target.value : campaignHash);
	}
	return (
		<Fragment>
			<BrowserRouter>
				<NavigationBar
					openModal={openModal}
					handleCampaignHash={handleCampaignHash}
					campaignHash={campaignHash}
				/>
				<Router />
				<JoinModal
					campaignHash={campaignHash}
					showModal={showModal}
					toggleShowModal={toggleShowModal}
					history={history}
				/>
			</BrowserRouter>
		</Fragment>
	);
}

export default App;
