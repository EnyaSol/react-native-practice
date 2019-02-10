import React, {Component} from 'react';
import { Font } from 'expo';

export default class FontLoader extends Component {

    constructor(){
        super();
        this.state = { fontLoaded: false}
    };

    async ComponentWillMount(){
        try {
            await Font.loadAsync({
                    'Roboto': require('../assets/fonts/Roboto-Regular.ttf'),
                    'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
                });

            this.setState({ fontLoaded: true });
        } catch(error){
            console.log("Error loading icon fonts", error);
        }
    }

    render(){
        if(!this.state.fontLoaded){
            return <AppLoading/>;
        }

        return this.props.children;
    }


}