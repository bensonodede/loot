import React from "react";
import { View, Text, Button } from "react-native";
import DatepickerRange from "react-native-range-datepicker";
import Moment from "moment";
import { extendMoment } from "moment-range";

const moment = extendMoment(Moment);

//TODO: Add available dates function

export default class CalendarScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
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
      <View>
        <DatepickerRange
          minDate={today_date}
          maxDate={last_date}
          maxMonth={3}
          todayColor={"#00A699"}
          selectedBackgroundColor={"#00A699"}
          disabled={this.state.disabled}
          selectedDays={this.state.selectedDays}
          //availableDates={["20181120", "20181121", "20181122"]}
          onConfirm={(startDate, untilDate) => {
            const begin = startDate._d;
            const end = untilDate._d;
            this.setState({ startDate: begin, untilDate: end }, () => {
              console.log(this.state);
            });
            //console.log(startDate._d, " TO ", untilDate._d)
          }}
          onSelect={(startDate, untilDate) => {
            if (untilDate) {
              const days = untilDate.diff(startDate, "days");
              const daysNum = days + 1;
              if (daysNum >= 3) {
                this.setState({
                  disabled: false,
                  selectedDays: String(daysNum)
                });
              }
            } else {
              this.setState({
                disabled: true,
                selectedDays: String(0)
              });
            }
          }}
        />
      </View>
    );
  }
}
