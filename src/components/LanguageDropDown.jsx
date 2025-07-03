import React from 'react';

/**
 * 
 * @param {*} languages = List of pre-defined languages 
 * @returns Language dropdown
 */
function LanguageDropDown({languages}) {

    const handleChange = (event) => {
        console.log(event.target.value)
    }
    return (
        <select  onChange={handleChange}>
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