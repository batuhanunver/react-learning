import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Logic } from './logic';
import q1 from '../questions/q1.json';
import { ButtonsParent } from './buttonsParent.js';
import { NextButton } from './nextButton.js';

export class OtherView extends Component {
  constructor(props) {
    super(props);
    this.yesAnswers = 0;
    this.noAnswers = 0;
    this.noOfQuestions = 0;
    this.result = '';
    this.answers = {};
    this.isQuestionsOk = '';
    // console.log(Questions.questions[0].id)
    // console.log(Questions.questions[0].text)
    //  console.log(Questions.questions[0].yesno)
    this.first = q1.questions.filter(q => q.id == q1.firstQuestion)[0];

    if (this.first.yesno) {
      this.state = { question: 'yesno', id: this.first.id };
    } else if (this.first.group) {
      this.state = { question: 'group', id: this.first.id };
    }

    this.nextQuestionYes = '';
    this.nextQuestionNo = '';
    if (this.first.yesno) {
      if (this.first.yesno.yes.result === 'ASK_ANOTHER') {
        this.nextQuestionYes = this.first.yesno.yes.nextQuestion;
      }
      if (this.first.yesno.no.result === 'ASK_ANOTHER') {
        this.nextQuestionNo = this.first.yesno.no.nextQuestion;
      }
    }
    // else if a group question
  }

  /**
   * @param {string} qNum
   * @memberOf OtherView
   */
  nextPart(qNum) {
    if (qNum === 'yes') {
      qNum = this.nextQuestionYes;
    } else {
      qNum = this.nextQuestionNo;
    }
    this.first = q1.questions.filter(q => q.id === qNum)[0];

    if (this.first.yesno) {
      if (this.first.yesno.yes.result === 'ASK_ANOTHER') {
        this.nextQuestionYes = this.first.yesno.yes.nextQuestion;
      }
      if (this.first.yesno.no.result === 'ASK_ANOTHER') {
        this.nextQuestionNo = this.first.yesno.no.nextQuestion;
      }
    }

    if (this.first.yesno) {
      this.setState({ question: 'yesno', id: qNum });
    } else if (this.first.group) {
      this.setState({ question: 'group', id: qNum });
    }
  }


  /**
   * @returns {Logic}
   * @memberOf OtherView
   */
  delegate() {
    return this.props.delegate;
  }


  /**
   * @param {string} answer
   * @param {string} id
   * @memberOf OtherView
   */
  getAnswer(answer, id) {
    this.answers[id] = answer;
    console.log(this.answers);
    this.isQuestionsOk = 'yes';
  }

  executeGroup() {
    this.yesAnswers = 0;
    this.noAnswers = 0;
    for (const i in this.answers) {
      if (this.answers[i] === 'yes') {
        this.yesAnswers++;
      } else if (this.answers[i] === 'no') {
        this.noAnswers++;
      }
    }
    if (this.yesAnswers > this.noAnswers) {
      this.result = 'MOST_OFTEN_YES';
    } else if (this.noAnswers > this.yesAnswers) {
      this.result = 'MOST_OFTEN_NO';
    }
    console.log('yes', this.yesAnswers);
    console.log('no', this.noAnswers);
  }

  renderYesNo() {
    return (
      <View>
        <Text>
          {this.first.text}
        </Text>
        <ButtonsParent onclick={answer => this.nextPart(answer)} selectionChanged={(newSelection) => { console.log('selection changed to ', newSelection); }} />
      </View>
    );
  }

  renderGroup() {
    const keys = Object.keys(this.first.group.questions);
    this.noOfQuestions = keys.length;
    return (
      <ScrollView>
        {
          keys.map(v => (
            <View
              key={v} style={{
                margin: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text> {(q1.questions.filter(q => q.id === v)[0]).text} </Text>

              <View
                style={{
                  flexDirection: 'row',
                  margin: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <ButtonsParent onclick={answer => this.getAnswer(answer, (q1.questions.filter(q => q.id === v)[0]).id)} selectionChanged={(newSelection) => { console.log('selection changed to ', newSelection); }} />
              </View>
            </View>
          ),
          )
        }
        <NextButton onClick={() => this.executeGroup()} />
      </ScrollView>
    );
  }

  renderEmpty() {
    return (
      <View>
        <Text>
          Empty
        </Text>
      </View>
    );
  }

  render() {
    if (this.state.question === 'yesno') {
      return this.renderYesNo();
    } else if (this.state.question === 'group') {
      return this.renderGroup();
    }
    return this.renderEmpty();
  }
}
