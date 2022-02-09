import React, { createContext, useState } from 'react'

const SubscriptionContext = createContext({
    dataKeeper: (e) => {},
    operator: '',
    company: '',
    active: 0,
    inActive: 0,
})

export const SubscriptionContextProvider = (props) => {
    const [values, setValues] = useState({
        operator: '',
        company: '',
        active: 0,
        inActive: 0,
    });
    const [operator, setOperator] = useState('');
    const [company, setCompany] = useState('');
    const [active, setActive] = useState(0);
    const [inActive, setInActive] = useState(0);

    const dataKeeper = (e) => {
        setOperator(e.data.operator_name);
        setCompany(e.data.provider_name);
        setActive(e.data.optin);
        setInActive(e.data.optout);
    };

    return (
        <SubscriptionContext.Provider
            value={{
                operator,
                company,
                active,
                inActive,
                dataKeeper,
            }}
        >
            {props.children}
        </SubscriptionContext.Provider>
    )
}

export default SubscriptionContext;
