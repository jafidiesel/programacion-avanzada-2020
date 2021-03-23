import React, { Fragment, useState } from 'react';
import { hashExist } from 'utils/apiCalls'; 
import NavBar from 'components/navbar/NavBar';
import Router from 'components/router/Router';
import { useHistory } from 'react-router-dom';
import JoinMondal from 'components/joinModal/JoinModal';

function Initialize() {
    const [campaignHash, setCampaignHash] = useState("59e3264c104e4d68378107e416a7a0c0");
    const [showModal, setShowModal] = useState(false);
    const history = useHistory();

    const toggleShowModal = () => {
        setShowModal(!setShowModal);
    }
    async function joinCampaign (){
        console.log("hashExist", await hashExist(campaignHash));
        if( await hashExist(campaignHash)) {
            setShowModal(true);

            // history.push(`/campaign/${campaignHash}`)
        } else {
            // handle backend errors (to be implemented)
        }        
    }
    function handleCampaignHash (event: any): void {
        setCampaignHash(event.target ? event.target.value : campaignHash);
    }
    return (
        <Fragment>
            <NavBar
                joinCampaign={joinCampaign}
                handleCampaignHash={handleCampaignHash}
                campaignHash={campaignHash}
            />
            <Router />
            <JoinMondal
                campaignHash={campaignHash}
                showModal={showModal}
                toggleShowModal={toggleShowModal}
            />
        </Fragment>
    );
}

export default Initialize;
