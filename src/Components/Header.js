import React from 'react';
class Header extends React.Component {

    render() {
              return (<h1 style={styles.header}> Shopping List For Dinner  </h1>);
    }
}


const styles = {
    header : {
        color: 'red',
        textAlign: 'center',
        fontSize: '60px',
        fontFamily: 'Gautami'


    }
};

export default Header;