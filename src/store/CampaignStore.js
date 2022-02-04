import React, {useState} from "react";

const CampaignContext = React.createContext({
    overlay: false,
    openModal: () => {},
    closeModal: () => {},
    openModalWithData: () => {},
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

    const openModalWithDataHandler = (e) => {
       
        setOverlay(true);
        setValue(
            {
                name: e.data.name,
                code: e.data.code,
                country: e.data.country,
                image: e.data.image

            }
        )
        console.log(e.data.name)

        setValidator(true);
        
    }


    return (
        <CampaignContext.Provider value={{
            overlay: overlay,
            openModal: openModalHandler,
            closeModal: closeModalHandler,
            openModalWithData: openModalWithDataHandler,
            value: value,
            validator: validator,
            FWD: formWithData,
        }}>
            {props.children}
        </CampaignContext.Provider>
    )
}

export default CampaignContext;