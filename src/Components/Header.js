import React from 'react';
class Header extends React.Component {

    render() {
              return (<h1 style={styles.header}> Shopping List For Dinner  </h1>);
    }
}


const styles = {
    header : {
        color: 'brown',
        textAlign: 'center',
        fontSize: '60px',
        fontFamily: 'Gautami',
        textShadow: '0 0 3px #FF0000, 0 0 5px #0000FF'


    }
};

export default Header;