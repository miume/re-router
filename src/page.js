import React from 'react';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <p>
                BrowserRouter实现界面跳转---page
            </p>
        )
    }

    componentDidMount() {
        console.log('detail=',this.props.location)
    }
}

export default Page;
