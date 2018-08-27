import React, { Component} from 'react';

//@dev: declare a new component Search Bar with an Input
/*const SearchBar = () => {
  return <input />;                     //return JSX component
};
*/

//@dev: Class using React.Component funcinality
class SearchBar extends Component {
    render() {
        return <input onChange = {event => console.log(event.target.value)} /> ;
    }
}

//@dev: export the component
export default SearchBar;