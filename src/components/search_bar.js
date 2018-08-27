import React, {Component} from 'react';

//@dev: declare a new component Search Bar with an Input
/*const SearchBar = () => {
  return <input />;                     //return JSX component
};
*/

//@dev: Class user event using React.Component funcinality
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: 'Starting Value'};                                                        //initial input value is EMPTY
    }


    render() {
    return (
        <div>
            <input 
            value = {this.state.term}                                                   //controled input component set up by State
            onChange = {event => this.setState({term: event.target.value})} />
        </div>
      );
    }
}

//@dev: What STATE is ?, plain javaScript object, exist ONLY on each 'class ' component have their own state,
// record and react user event, whenever component is change it is imidiatly rendered


//@dev: export the component
export default SearchBar;

