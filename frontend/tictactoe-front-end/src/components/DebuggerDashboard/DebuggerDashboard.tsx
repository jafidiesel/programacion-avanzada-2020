import React from "react";
import { Card } from "react-bootstrap";
import { JsonFormatter } from 'react-json-formatter';

interface IDebuggerDashboard {
    campaignResponse: any;
}

const DebuggerDashboard = (props: IDebuggerDashboard) => {
    const JsonStyle = {
        propertyStyle: { color: 'red' },
        stringStyle: { color: 'green' },
        numberStyle: { color: 'darkorange' }
    }

    return (
        <div className="container mt-4">
            <Card className="main-card">
                <h2 className="card-title">Debugger Dashboard</h2>

                <code>
                    {/* {JSON.stringify(props.campaignResponse)} */}
                    {<JsonFormatter json={JSON.stringify(props.campaignResponse)} tabWith='4' JsonStyle={JsonStyle} />}
                </code>

            </Card>
        </div>
    )
}

export default DebuggerDashboard;