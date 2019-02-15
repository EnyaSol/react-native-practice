import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Font} from "expo";

export default class Clock extends Component {
    constructor(props){
        super(props);
        this.state = { time : new Date()}
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
        this.props.updateTime((new Date()))
    }

    renderMilliseconds(){
        let milliseconds = new Date().getMilliseconds();
        return(
            <Text style={styles.clockText}>
                {milliseconds}
            </Text>
        )

    }


    renderHourMinuteSec(){
        let splitDateArr = this.state.time.toLocaleString().split(' ');
        let hour = 0, minutes = 0, seconds = 0;

        if(splitDateArr != null){
            let hourMinSec = splitDateArr[3].split(':');

            hour = +hourMinSec[0];
            if(hour == 0)
                hour = 12;
            if(hour > 12)
                hour = hour - 12;

            minutes = hourMinSec[1];
            seconds =  hourMinSec[2];

        }
        
        return(
            <Text style={styles.clockText}>
                {hour} : {minutes} : {seconds}
            </Text>
        )
    }

    renderMonthDayYear(){
        let splitDateArr = this.state.time.toLocaleString().split(' ');
        let day = 0, month = 0, date = 0, year = 0;
        if(splitDateArr != null) {

            day = splitDateArr[0];
            month = splitDateArr[1];
            date = splitDateArr[2];
            year = splitDateArr[4];

        }
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