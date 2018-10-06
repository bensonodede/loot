import React from "react";
import { View, Text, StatusBar } from "react-native";
import DatepickerRange from "react-native-range-datepicker";
import Moment from "moment";
import { extendMoment } from "moment-range";

const moment = extendMoment(Moment);

//TODO: Add available dates function

export default class CalendarScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabledBtn: true,
      selectedDays: "",
      startDate: "",
      untilDate: ""
    };
  }
  static navigationOptions = {
    header: null
  };

  render() {
    const today_date = Moment().format("YYYYMMDD");

    const last_date = Moment()
      .add(2, "months")
      .endOf("month")
      .format("YYYYMMDD");

    return (
      <View style={{ paddingTop: StatusBar.currentHeight }}>
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor={"#FFFFFF"}
          animated
        />
        <DatepickerRange
          // placeHolderStart={"First Day"}
          // placeHolderUntil={"Last Day"}
          minDate={today_date}
          maxDate={last_date}
          maxMonth={3}
          todayColor={"#00A699"}
          selectedBackgroundColor={"#00A699"}
          disabledBtn={this.state.disabledBtn}
          selectedDays={this.state.selectedDays}
          //availableDates={["20181120", "20181121", "20181122"]}
          onClose={() => {
            this.props.navigation.goBack();
          }}
          onConfirm={(startDate, untilDate) => {
            const begin = startDate._d;
            const end = untilDate._d;
            this.setState({ startDate: begin, untilDate: end }, () => {
              //Pass in selected datesto next page
              this.props.navigation.navigate("Map");
              console.log(this.state);
            });
          }}
          onSelect={(startDate, untilDate) => {
            if (untilDate) {
              const days = untilDate.diff(startDate, "days");
              const daysNum = days + 1;
              if (daysNum >= 3) {
                console.log(daysNum);
                this.setState({
                  disabledBtn: false,
                  selectedDays: String(daysNum)
                });
              }
            } else {
              this.setState({
                disabledBtn: true,
                selectedDays: String(0)
              });
            }
          }}
        />
      </View>
    );
  }
}
