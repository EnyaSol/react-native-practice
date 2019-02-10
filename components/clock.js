import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Font} from "expo";

export default class Clock extends Component {
    constructor(props){
        super(props);
        this.state = { time : new Date().toLocaleString()}
    }

    componentDidMount() {

        this.intervalID = setInterval(
            () => this.tick(), 10
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick(){
        this.setState({
            time: new Date()
        })
    }

    renderMilliseconds(){
        let milliseconds = new Date(this.state.time).getMilliseconds()
        return(
            <Text style={styles.clockText}>
                {milliseconds}
            </Text>
        )

    }


    renderHourMinuteSec(){
        let splitDateArr = this.state.time.toLocaleString().split(' ');
        let hourMinSec = splitDateArr[3].split(':');

        let hour = +hourMinSec[0];
        let minutes = hourMinSec[1];
        let seconds =  hourMinSec[2];
        
        return(
            <Text style={styles.clockText}>
                {hour} : {minutes} : {seconds}
            </Text>
        )
    }

    renderMonthDayYear(){
        let splitDateArr = this.state.time.toLocaleString().split(' ');
        let day = splitDateArr[0];
        let month = splitDateArr[1];
        let date = splitDateArr[2];
        let year = splitDateArr[4];

        return(
            <Text style={styles.clockText}>
                {month} - {date} - {year}
            </Text>)
    }



    render(){
        return(
            <View style={styles.container}>
                {this.renderMonthDayYear()}
                {this.renderHourMinuteSec()}
                {this.renderMilliseconds()}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 200,
        borderRadius: 200 / 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#485263'
    },
    clockText: {
        fontSize: 25,
        fontFamily: 'Roboto',
        color: 'white'
    }
});