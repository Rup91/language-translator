
import './App.css';
import LanguageDropDown from './components/LanguageDropDown.jsx';
import languages from './data/Language.json';

function App() {

 

  return (
    <>
      <div className='container'>
        <div className='dropdown-container'>
            <div className='left-dropDownPanel'>
                <LanguageDropDown languages={languages.lists}/>
            </div>
            <div className='right-dropDownPanel'>
                <LanguageDropDown languages={languages.lists}/>
            </div>
            
        </div>
      </div>
    </>
  )
}

export default App
