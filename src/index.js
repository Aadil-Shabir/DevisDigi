import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { OperatorContextProvider } from './store/OperatorStore'
import { CampaignContextProvider } from './store/CampaignStore'
import { ClientContextProvider } from './store/ClientStore'
import { SubscriptionContextProvider } from './store/SubscriptionStore'

ReactDOM.render(
    <ClientContextProvider>
        <CampaignContextProvider>
            <SubscriptionContextProvider>
                <OperatorContextProvider>
                    <App />
                </OperatorContextProvider>
            </SubscriptionContextProvider>
        </CampaignContextProvider>
    </ClientContextProvider>,
    document.getElementById('root')
)
