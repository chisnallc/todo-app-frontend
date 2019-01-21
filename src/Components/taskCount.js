import React from 'react';

class taskCount extends React.Component {

    render() {

        return (

            <div >
            
            {this.props.tasks.length}
            
            </div>
        );
    }
}



export default taskCount;