
import { useEffect, useState } from 'react';
import './App.css';
import LanguageDropDown from './components/LanguageDropDown.jsx';
import languages from './data/Language.json';
import TextInput from './components/TextInput.jsx';
import TextOutput from './components/TextOutput.jsx';



function App() {

  const swapUnicode = '\uE609'; 
  const [languagePair, setLanguagePair] = useState({
    from: 'en',
    to: 'fr'
  });
  const [inputText, setInputText] = useState('');

  const handleChangeLanguage = (key, value) => {
    setLanguagePair((prev) => ({
      ...prev,
      [key]: value
    }));
  }

  const handleSwap = () => {
    setLanguagePair((prev) => ({
      from: prev.to,
      to: prev.from
    }))
  }

  useEffect(() => {
    console.log(inputText)
  }, [inputText])

  return (
    <>
      <div className='container'>
        <div className='left-container'>
            <div className='left-dropDownPanel'>
                <LanguageDropDown 
                  languages={languages.lists}
                  selected={languagePair.from}
                  changeLanguage={(value) => handleChangeLanguage('from', value)}
                />
            </div>
            <div className='left-textArea'>
                <TextInput
                  text={inputText}
                  setInputText={setInputText}
                />
               
            </div>
        </div>
        <div className='middle-container'>
            <button onClick={handleSwap}>{swapUnicode}</button>
        </div>
        <div className='right-container'>
          <div className='right-dropDownPanel'>
              <LanguageDropDown 
                languages={languages.lists}
                selected={languagePair.to}
                changeLanguage={(value) => handleChangeLanguage('from', value)}
              />
          </div>
          <div className='right-textArea'>
              <TextOutput />
          </div>

        </div>
      </div>
    </>
  )
}

export default App
