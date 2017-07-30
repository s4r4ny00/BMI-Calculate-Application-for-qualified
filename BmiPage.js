import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Left, Button } from 'native-base';

export default class BmiPage extends Component {

  constructor() {
    super();
    this.state = {
      height: 0,
      weight: 0,
      result: null,
      bmi: 0,
      his: [],
    };
  }

  calBmi() {
    var height = this.state.height;
    var weight = this.state.weight;
    var h = height / 100;
    var bmi = (weight / (h * h)).toFixed(3);
    var time = new Date()
    var day = time.getDate()
    var month = time.getMonth()
    var year = time.getFullYear()
    var hour = time.getHours()
    var minute = time.getMinutes()
    var seconds = time.getSeconds()
    var txtResult = '[' + day + '/' + month + '/' + year + ' ' + hour + ':' + minute + ':' + seconds + '' + ']' + '  ' + bmi
    var history = this.state.his.slice()
    history.push(txtResult)
    this.setState({
      bmi: bmi,
      his: history,
    });
  }
  render() {
    return (
      <Container >
        <Header>
          <Left>
            <Text style={styles.font}>Input New BMI:</Text>
          </Left>
        </Header>
        <Content style={styles.sessionTop}>
          <Form style={styles.form}>
            <Text style={styles.font}>Weight(KG)</Text>
            <Item regular style={styles.textbox}>
              <Input
                placeholder='Input Weight'
                keyboardType="numeric"
                onChangeText={(weight) => this.setState({ weight })}
                value={this.state.weight}
                ref="height" />
            </Item>
          </Form>
          <Form style={styles.form}>
            <Text style={styles.font}>Height(KG)</Text>
            <Item regular style={styles.textbox}>
              <Input
                placeholder='Input Height'
                keyboardType="numeric"
                onChangeText={(height) => this.setState({ height })}
                value={this.state.height}
                ref="weight" />
            </Item>
          </Form>
          <Form style={styles.formCenter}>
            <Form style={styles.form}>
              <Text style={styles.font}>BMI: {this.state.bmi}</Text>
            </Form >
            <Form style={styles.form}>
              <Button
                style={styles.button}
                onPress={this.calBmi.bind(this)}
              >
                <Text>Compute & Save</Text>
              </Button>
            </Form >
          </Form >
        </Content>
        <Content style={styles.sessionBottom}>
          <Form style={styles.form}>
            <Text style={styles.font}>History BMI: </Text>
            {this.state.his.map((data) => <Text style={styles.font}>{data}</Text>)}
          </Form >
        </Content>
      </Container >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  sessionTop: {
    flex: 1,
  },
  textbox: {
    borderColor: 'black',
  },
  sessionBottom: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  form: {
    flex: 1,
    margin: 10,
  },
  formCenter: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  font: {
    fontSize: 18,
    margin: 5
  },
  button: {
    backgroundColor: 'lightgray',
  }
});
