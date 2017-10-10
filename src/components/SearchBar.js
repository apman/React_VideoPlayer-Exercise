import React, { Component } from 'react';  
import {TextField} from '@shopify/Polaris';
//  REMEMBER:  the addition of { Component } is equivalent to having another line: 
//    const Component = React.Component
// (allows us to reference Component directly everywhere (similar technique works with props))


// "class-based Component" allows us to keep track of state
class SearchBar extends Component {
    constructor(props) {   // props is a generic argument that can take anything that is passed to it
                            // (cp index.js render function: VideoList )
        super(props);

        // initialize the object that tracks state
        this.state = { userInput: ''};
    }

    render() {
        return (
            <div>

                <TextField
                    label="Search"
                    placeholder="Hit 'Enter' when you're done ...  (and yes, I know that's not exactly best UX practice)"
                    value = {this.state.userInput}
                    onChange={event => this.onInputChange(event)}  
                    onKeyPress={event => this.onKeyPressed(event)}
                />

                {/* <input 
                    value = {this.state.userInput}
                    onChange={event => this.onInputChange(event)}  
                    onKeyPress={event => this.onKeyPressed(event)}
                /> */}
                { /*  REMEMBER: 
                    - you can drop the parenthesis of an arrow function if there is only one argument, 
                        i.e. event 
                
                    - The whole component gets rerendered every time the state changes (inherited
                      behaviour from React.Component)
                
                    - Setting the value of the input field to it's state (which in turn is set to the 
                      value) makes it a "controled component" and allows us to potentially add other 
                      stuff than just what the user types (like auto-complete suggestions) */ 
                }
            </div>
        );
    }

    onInputChange(input) {
        const userInput = input;
        this.setState({userInput});
    } 
    
    onKeyPressed(event) {
        if (event.key == 'Enter') {
            this.props.onSearchTermChange(event.target.value);
        }
    }
    
}

export default SearchBar;  // make it available for import by other parts of the app 
                    