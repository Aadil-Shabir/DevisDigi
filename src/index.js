import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { OperatorContextProvider } from './store/OperatorStore'
import { CampaignContextProvider } from './store/CampaignStore'
import { ClientContextProvider } from './store/ClientStore'

ReactDOM.render(
    <ClientContextProvider>
        <CampaignContextProvider>
            <OperatorContextProvider>
                <App />
            </OperatorContextProvider>
        </CampaignContextProvider>
    </ClientContextProvider>,
    document.getElementById('root')
)
