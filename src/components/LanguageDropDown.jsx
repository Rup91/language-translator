import React from 'react';

/**
 * 
 * @param {*} languages = List of pre-defined languages 
 * @returns Language dropdown
 */
function LanguageDropDown({languages, selected, changeLanguage}) {

    const handleChange = (event) => {
        changeLanguage(event.target.value)
    }
    return (
        <select value={selected} onChange={handleChange}>
            {
                languages.map(({id, name}) => (
                    <option key={id} value={id}>
                        {name}
                    </option>
                ))
            }
        </select>
    )
}

export default LanguageDropDown;