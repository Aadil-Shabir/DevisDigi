import React, {useState} from 'react';

const OperatorContext = React.createContext({
    overlay: false,
    openModal: () => {},
    closeModal: () => {},
    openModalWithData: (e) => {},
    value: {name: '', code: '', country: '', image: '', id: ''},
    validator: false,
    FWD: false
});

export const OperatorContextProvider = (props) => {
    const [overlay, setOverlay] = useState(false);
    const [value, setValue] = useState({name: '', code: '', country: '', image: '', id: ''})
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
                image: '',
                id: '',

            }
        )

        setValidator(false);
        setFormWithData(false);

    };

    const openModalWithDataHandler = (e) => {
       
        setValidator(true);
        setFormWithData(true);
        setOverlay(true);
        setValue(
            {
                name: e.data.name,
                code: e.data.code,
                country: e.data.country,
                image: e.data.image,
                id: e.data.id

            }
        )
        
    }

    return (
        <OperatorContext.Provider value={
            {
                overlay: overlay,
                openModal: openModalHandler,
                closeModal: closeModalHandler,
                openModalWithData: openModalWithDataHandler,
                value: value,
                validator: validator,
                FWD: formWithData
            }
        }
            >
            {props.children}
        </OperatorContext.Provider>
    );
};

export default OperatorContext;
