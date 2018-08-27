import React from 'react';

//@dev: declare a new component Search Bar with an Input
/*const SearchBar = () => {
  return <input />;                     //JSX component
};
*/

//@dev: Class using React.Component funcinality
class SearchBar extends React.Component {
    render() {
        return <input /> ;
    }

}

//@dev: export the component
export default SearchBar;