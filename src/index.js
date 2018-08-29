import React, {Component} from 'react' ;
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from "./components/video_detail";

//@dev: path reference to the file
import SearchBar from './components/search_bar';

//@dev: Youtube API key
const API_KEY = 'AIzaSyDTHd_qouKYwgJQ4Xkzy1VSg9IYbLE2nL0';



//@dev: Create a new HTML component of the page. Functional Component
class _App extends Component {                                          //class based component
    constructor(props){                                                 //constructor function
        super(props);

        this.state = {videos:[] };                                      //list of videos starts as an empty array

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {      //rendered function, and update the videos
            this.setState({ videos });                                  //the same as ' this.setState({ videos: videos}); '
        });
    }

    render() {
         return (
        <div>
            <SearchBar />               
            <VideoDetail video={this.state.videos[0]}/>     
            <VideoList videos={this.state.videos} />
        </div>
        ); 
    }
   
}

//@dev: Take the HTML component's and put it on the page (DocumentObjectModel interface)
ReactDOM.render(<_App />, document.querySelector('.container'));