import React from 'react';
class Header extends React.Component {

    render() {
              return (<h1 style={styles.header}>Beautiful Recipes To Do in 10 Days</h1>);
    }
}


const styles = {
    header : {
        color: "#EA172A",
        textAlign: 'center',
        fontSize: '60px'
        
    }
};

export default Header;