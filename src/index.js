import _Lodash from 'lodash';
import React, {Component} from 'react' ;
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from "./components/video_detail";

//@dev: path reference to the file
import SearchBar from './components/search_bar';

//@dev: Youtube API key
const API_KEY = 'AIzaSyDTHd_qouKYwgJQ4Xkzy1VSg9IYbLE2nL0';



//@dev: Create a new HTML component of the page. Functional Component. Class if only used
// when we want to have concept of state component
class _App extends Component {                       //class based component
    constructor(props){                              //constructor function
        super(props);

        this.state = {
            videos:[],
            selectedVideo: null
        };                                      //list of videos starts as an empty array

        this.videoSearch('surfboards');
        
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {      //rendered function, and update the videos
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
             });                                  
        });
    }

    render() {
        //@dev: debounce function which will be call only in 300 mil sec, pass it to the SearchBar
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)


         return (
        <div>
            <SearchBar onSearchTermChange={videoSearch}/>               
            <VideoDetail video={this.state.selectedVideo} />     
            <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                videos={this.state.videos} />
        </div>
        ); 
    }   
}

//@dev: Take the HTML component's and put it on the page (DocumentObjectModel interface)
ReactDOM.render(<_App />, document.querySelector('.container'));

/*Notes:
* -State component : 
*   -- class based component 
*   -- set initial state in constructor (this.state), 
* - whenever we change the state component it atomaticaly render with any children of the class component as well
* - Import statments : relative path or library
* - callback are for parent child comunication
*/