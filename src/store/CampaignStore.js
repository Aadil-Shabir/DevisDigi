import React, {useState} from "react";

const CampaignContext = React.createContext({
    overlay: false,
    openModal: () => {},
    closeModal: () => {},
    value: {name: '', code: '', country: '', image: ''},
    validator: false,
    FWD: false,
})

export const CampaignContextProvider = (props) => {
    const [overlay, setOverlay] = useState(false);
    const [value, setValue] = useState({name: '', code: '', country: '', image: ''});
    const [validator, setValidator] = useState(false);
    const [formWithData, setFormWithData] = useState(false);

    const openModalHandler = () => {
        setOverlay(true);
    };

    const closeModalHandler = () => {
        setOverlay(false);

        setValue(
            {
                name: '',
                code: '',
                country: '',
                image: ''

            }
        )

        setValidator(false);
        setFormWithData(false);

    };

    return (
        <CampaignContext.Provider value={{
            overlay: overlay,
            openModal: openModalHandler,
            closeModal: closeModalHandler,
            value: value,
            validator: validator,
            FWD: formWithData,
        }}>
            {props.children}
        </CampaignContext.Provider>
    )
}

export default CampaignContext;