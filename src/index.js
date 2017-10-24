/* Import modules (give this file access to libraries (installed into the project via the npm install 
   call (stored in node_modules))
*/
import React, {Component} from 'react';    // responsible for creating and managing components
import ReactDOM from 'react-dom' // responsible for adding components to DOM
import YTSearch from 'youtube-api-search';

// packages installed with npm don't need the full path, but file you write yourself do
import SearchBar from './components/SearchBar';  
import ItemList from './components/ItemList';
import Player from './components/Player';

import {Page, Layout, Card, Thumbnail, TextStyle} from '@shopify/Polaris';

/*  REMEMBER:  React is a libray that compiles components/views written in JS/JSX into JS that will 
   then be rendered in the Browser
*/

/*  NOTE:  To get the search to work you need to sign up for a YouTube API key:
https://console.developers.google.com/ -> YouTube Data API
and install the YouTube search api package:

        $ npm install --save youtube-api-search

(the --save bit writes the package to the dependencies in package.json, so the app knows to download 
it if it's missing from the node_modules folder) (see Udemi course: section 1, lecture 13 )
*/

const API_KEY = 'AIzaSyDQAGI54c-uQERMhWI-qTRWSRPz4_pQNG0';


//  REMEMBER:  'Downwards Data Flow' : top-most parent of all components consuming the data should be 
// the one fetching it 


// Class-based component (using state to save search results)
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            videos : [], 
            selectedVideo : null 
        };
        
        this.selectVideo = this.selectVideo.bind(this); 
        //  REMEMBER:   Binding 'this' to the method here makes sure that each time 
        // it is called, the context of the current App instance is available to it

        this.videoSearch('mountain goats');
    }
    
    videoSearch(searchTerm) {
        YTSearch({key: API_KEY, term: searchTerm}, (videos) => {
            console.log(`videoSearch with: ${searchTerm}`);   //  TEMP 
            console.log(videos);   //  TEMP 

            //const videoList = videos;

            const items = videos.map( (video, index) => ({   // map returns an array with the results! |   () => expr;  returns expr

                // 'translating' YouTube video info to generic 'item' info to feed into reusable list_item 
                
                // url: '#',     // adding a Link component as wrapper to have onClick hook ...
                media: <Thumbnail
                    source={video.snippet.thumbnails.default.url}
                    alt={video.snippet.title}
                />,
                attributeOne: video.snippet.title,
                // attributeTwo: '4 variants',
                // attributeThree: <TextStyle variation="subdued">Not listed</TextStyle>,
                // actions: [{content: 'View listing'}],     
                // badges: [{
                //     status: 'warning',
                //     content: 'Needs review',
                //     }],
                //persistActions: true,
                //index: index,
                  
             //  TODO:   figure out how to get the other video info into each item 
             //           (or rather, keep just an id or something to call the right video within here)               
               ...video    // <-- spread operator, adds all properties of the original video object to this new object 
            }));
            
                                                
            this.setState({ 
                videos : items, 
                selectedVideo : 0,  //  TODO:    items[0]
            });
        });     
    }

    // selectVideo(selectedVideo) {
    //     this.setState({selectedVideo});  //
    // }

    selectVideo(index) {
        console.log('index returned: ' + index);  //  TEMP 
        this.setState({selectedVideo : index});  
    }

    render() {
        return (
                <Page
                    title="Movie time !"
                    separator
                    icon="test"
                >
                <Layout sectioned={false}>
                    <Layout.Section>
                        <Card
                            title="YouTube Search"
                            sectioned
                        >
                            <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)} />
                        </Card>
                    </Layout.Section>
                </Layout>

                <Layout sectioned={false}>
                    <Layout.Section>
                        <Card
                            sectioned
                        >
                        <Player video={this.state.videos[this.state.selectedVideo]} />
                        </Card>
                    </Layout.Section>
                    <Layout.Section secondary>
                        <Card
                            title="Results"
                            sectioned
                        >
                            <ItemList 
                            /* onItemSelect={selectedVideo => this.setState({selectedVideo})} // <-- slow */
                            /* onItemSelect={this.selectVideo.bind(this)} // <-- still slow */
                            onItemSelect={this.selectVideo}  // binding 'this' now happens only *once* in the constructor!
                            items={this.state.videos} /> 
                        </Card>
                    </Layout.Section>
                </Layout>   
                     
                </Page>
                //   REMEMBER:  ES6 short form for single props item where key and value have the same name:
                //     {selectedVideo} instead of { selectedVideo : selectedVideo }
                                  
                // ^ ItemList: we pass in a function that can update the app's state, 
                //          and a property 'items' which can be accessed as props.items from inside 

        );
    }
}

// Take this component's genereated HTML and put it on the page (into the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));  // render an *instance* of the App class

/*   REMEMBER:   calling App() as a function works too:
    ReactDOM.render(App(), document.querySelector('.container'));  
  but I guess the goal is to have <App /> be a jsx component (and you can't just embed function calls
  inside jsx (e.g. in the return statement above you couldn't call  new SearchBar() from within the 
  div) -> "Error: Objects are not valid as a React child"
*/
