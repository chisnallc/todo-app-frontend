import React from 'react';
class Header extends React.Component {

    render() {
              return (<h1 style={styles.header}> Recipe List For This Week</h1>);
    }
}


const styles = {
    header : {
        color: 'red',
        textAlign: 'center',
        fontSize: '60px',
        fontFamily: 'Quicksand'


    }
};

export default Header;