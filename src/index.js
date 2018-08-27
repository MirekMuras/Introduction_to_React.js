import React from 'react' ;
import ReactDOM from 'react-dom';

//@dev: path reference to the file
import SearchBar from './components/search_bar';

//@dev: Youtube API key
const API_KEY = 'AIzaSyDTHd_qouKYwgJQ4Xkzy1VSg9IYbLE2nL0';


//@dev: Create a new HTML component of the page 
const _App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    ); 
}

//@dev: Take the HTML component's and put it on the page (DocumentObjectModel interface)
ReactDOM.render(<_App />, document.querySelector('.container'));