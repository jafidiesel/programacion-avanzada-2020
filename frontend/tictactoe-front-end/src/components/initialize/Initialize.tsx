import React, { Fragment, useState } from 'react';
import { hashExist } from 'utils/apiCalls'; 
import NavBar from 'components/navbar/NavBar';
import Router from 'components/router/Router';
import { useHistory } from 'react-router-dom';
import JoinMondal from 'components/joinModal/JoinModal';

function Initialize() {
    const [campaignHash, setCampaignHash] = useState("");
    const [showModal, setShowModal] = useState(false);
    const history = useHistory();

    const toggleShowModal = () => {
        setShowModal(!setShowModal);
    }
    const joinCampaign = async () =>{
        if( await hashExist(campaignHash)) {
            setShowModal(true);

        } else {
            // handle backend errors (to be implemented)
        }        
    }
    const handleCampaignHash = (event: any): void => {
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
                history={history}
            />
        </Fragment>
    );
}

export default Initialize;
