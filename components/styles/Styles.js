import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  innerWrapper: {
    flex: 1,
  },
  headingWrapper: {
    paddingHorizontal: 30,
    // paddingTop: 20,
    paddingBottom: 5,
  },
  heading: {
    fontSize: 26,
    fontFamily: 'bebas-neue',
    color: '#C1126B',
  },
  boldHeading: {
    fontSize: 27,
    fontFamily: 'bebas-neue-bold',
    color: '#A80058',
  },
  centeredHeading: {
    fontSize: 26,
    fontFamily: 'bebas-neue',
    color: '#C1126B',
    textAlign: 'center',
  },
  textWrapper: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 5,
  },
  txt: {
    fontSize: 15,
    fontFamily: 'poppins-light',
    textAlign: 'justify',
    color: '#000000',
  },
  boldTxt: {
    fontSize: 25,
    fontFamily: 'bebas-neue',
    // fontFamily: 'bebas-neue',
    // color: '#C1126B',
    color: 'grey',
    marginBottom: 15,
    // textTransform: 'uppercase',
  },
  assessmentTxt: {
    fontSize: 17,
    fontFamily: 'poppins-semibold',
    textAlign: 'center',
    color: '#000000',
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    fontFamily: 'poppins',
  },
  altButtonText: {
    color: '#C1126B',
  },
  modalWrapper: {
    flex: 1,
  },
  modalHeader: {
    height: 75,
    paddingHorizontal: 30,
    paddingTop: 25,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalHeadingWrapper: {
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 5,
  },
  modalFooterWrapper: {
    height: 75,
  },
  modalFooter: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  modalFooterTxt: {
    fontFamily: 'poppins-semibold',
    fontSize: 15,
    color: '#C1126B',
  },
  boldHeadingText: {
    color: '#C1126B',
    fontFamily: 'bebas-neue-bold',
    fontSize: 19,
  },

  //LISTS

  listItem: {
    flexDirection: 'row',
    paddingBottom: 5,
  },
  listText: {
    flex: 1,
    paddingLeft: 15,
    fontFamily: 'poppins-light',
    fontSize: 15,
    color: '#000000',
    textAlign: 'justify',
  },
  listWrapper: {
    marginBottom: 10,
    paddingHorizontal: 30,
  },

  //FOOTER
  footerWrapper: {
    flexDirection: 'row',
  },
  footerTab: {
    flex: 3,
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: '#EFEFEF',
  },
  footerTab2: {
    flex: 3,
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: '#EFEFEF',
  },
  footerTab3: {
    flex: 3,
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: '#EFEFEF',
  },
  footerTabExit: {
    flex: 2,
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: '#C1126B',
  },
  footerText: {
    fontFamily: 'bebas-neue',
    textAlign: 'center',
    color: '#C1126B',
  },
  footerTextExit: {
    fontFamily: 'bebas-neue',
    textAlign: 'center',
    color: '#ffffff',
  },
  //QUIZ STYLES
  questionWrapper: {
    flex: 4,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  question: {
    fontFamily: 'poppins-semibold',
    fontSize: 18,
    textAlign: 'center',
  },
  answerWrapper: {
    flex: 3,
    justifyContent: 'center',
    paddingTop: 50,
  },
  answerHeadingWrapper: {
    paddingHorizontal: 30,
    borderBottomWidth: 4,
    borderBottomColor: '#C1126B',
    marginBottom: 20,
    flex: 0,
  },
  answerHeading: {
    paddingHorizontal: 30,
    fontFamily: 'poppins-semibold',
    fontSize: 21,
    color: '#C1126B',
    textAlign: 'center',
    borderEndWidth: 4,
  },
  answer: {
    paddingHorizontal: 30,
    fontFamily: 'poppins-semibold',
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
  },
  quizTextWrapper: {
    paddingHorizontal: 30,
  },
  quizButtonWrapper: {
    flex: 2,
    paddingHorizontal: 30,
  },
  continueButtonWrapper: {
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 45,
  },
  assessmentTextWrapper: {
    flex: 1,
    paddingHorizontal: 30,
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  assessmentButtonWrapper: {
    flex: 1,
    paddingHorizontal: 40,
  },

  assessmentQuestion: {
    textAlign: 'center',
    fontFamily: 'poppins-bold',
    color: '#C1126B',
    fontSize: 17,
    marginBottom: 10,
  },
});
