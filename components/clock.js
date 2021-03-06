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

    tick() {
        this.setState({
            time: new Date()
        })
        this.props.updateTime((new Date()))
    }


    renderHourMinuteSec(){
        let splitDateArr = this.state.time.toLocaleString().split(' ');
        let hour = 0, minutes = 0, seconds = 0;
        if(splitDateArr != null){
            let hourMinSec = splitDateArr[4].split(':');

            hour = +hourMinSec[0];
            if(hour == 0)
                hour = 12;
            if(hour > 12)
                hour = hour - 12;

            minutes = hourMinSec[1];
            seconds =  hourMinSec[2];

        }
        
        return(
            <Text style={styles.clockHourText}>
                {hour}:{minutes}:{seconds}
            </Text>
        )
    }

    renderMonthDayYear(){
        let splitDateArr = this.state.time.toLocaleString().split(' ');
        let day = 0, month = 0, date = 0, year = 0;
        if(splitDateArr != null) {

            day = splitDateArr[0];
            month = splitDateArr[1];
            date = splitDateArr[3];
            year = splitDateArr[5];


        }
        return(
            <Text style={styles.clockMonthText}>
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
        flex: 2,
        alignSelf: 'stretch',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    clockMonthText: {
        fontSize: 35,
        fontFamily: 'Roboto',
        color: '#485263'
    },
    clockHourText: {
        fontSize: 45,
        fontFamily: 'Roboto',
        color: '#485263'
    }
});