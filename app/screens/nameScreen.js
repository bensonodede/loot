import React from "react";
import { TextInput, Text, View, Button } from "react-native";
import Foect from "foect";

export default class NameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: ""
    };
  }

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Foect.Form
        onValidSubmit={model => {
          console.log(model.firstName);
          this.setState(
            {
              firstName: model.firstName,
              lastName: model.lastName
            },
            () => console.log(this.state)
          );
        }}
      >
        {/* you can use form for triggering submit or checking form state(form.isSubmitted, form.isValid, ...) */}
        {form => (
          <View>
            {/* every Foect.Control must have a name and optionally validation rules */}
            <Foect.Control
              name="firstName"
              required
              minLength={2}
              maxLength={15}
            >
              {/* you can use control for getting/setting it's value, checking/updating(control.isValid, control.markAsTouched(), ...) it's state, checking it's errors(control.errors.required) */}
              {control => (
                <View>
                  <Text>FIRST NAME</Text>

                  <TextInput
                    onBlur={control.markAsTouched}
                    /* update control's value */

                    onChangeText={text => control.onChange(text)}
                    /* get control's value */

                    value={control.value}
                  />

                  {/* check control state and show error if necessary */}
                  {form.isSubmitted &&
                    control.isInvalid && (
                      <Text style={{ color: "red" }}>
                        Please enter your name.
                      </Text>
                    )}
                </View>
              )}
            </Foect.Control>

            {/* every Foect.Control must have a name and optionally validation rules */}
            <Foect.Control
              name="lastName"
              required
              minLength={2}
              maxLength={15}
            >
              {/* you can use control for getting/setting it's value, checking/updating(control.isValid, control.markAsTouched(), ...) it's state, checking it's errors(control.errors.required) */}
              {control => (
                <View>
                  <Text>LAST NAME</Text>

                  <TextInput
                    onBlur={control.markAsTouched}
                    /* update control's value */

                    onChangeText={text => control.onChange(text)}
                    /* get control's value */

                    value={control.value}
                  />

                  {/* check control state and show error if necessary */}
                  {form.isSubmitted &&
                    control.isInvalid && (
                      <Text style={{ color: "red" }}>
                        Please enter your name.
                      </Text>
                    )}
                </View>
              )}
            </Foect.Control>

            {/* submit form */}
            <Button
              // disabled={form.isInvalid}
              onPress={() => form.submit()}
              title="Register"
            />
          </View>
        )}
      </Foect.Form>
    );
  }
}
