import React, { useState } from "react";

const ClientContext = React.createContext({
    OPCSelectCondition: false,
    conditionTruer: () => {},
    conditionFalser: () => {}
});

export const ClientContextProvider = (props) => {
    const [OPCSelectCondition, setOPCSelectCondition] = useState(false);

    const conditionTruer = () => {
        setOPCSelectCondition(true);
    };

    const conditionFalser = () => {
        setOPCSelectCondition(false);
    }

    return (
        <ClientContext.Provider value={
            {
                OPCSelectCondition,
                conditionTruer,
                conditionFalser
            }
        }>{props.children}</ClientContext.Provider>
    )
}

export default ClientContext;