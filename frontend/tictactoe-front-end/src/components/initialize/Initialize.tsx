import React, { Fragment, useState } from 'react';
import NavBar from 'components/navbar/NavBar';
import Router from 'components/router/Router';

function Initialize() {
    const [campaignHash, setCampaignHash] = useState("");
    function joinCampaign (){
        // use a modal to ask for player2 name
        // execute join call
        // 
        console.log("joinCampaign with hash: ", campaignHash);
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
        </Fragment>
    );
}

export default Initialize;
