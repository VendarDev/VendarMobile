import {Dimensions} from 'react-native';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

let scale;

if (window.height >= 1020) {
  scale = 1.4;
} else {
  scale = 1;
}

const half = window.width * 0.5;
const threequat = window.width * 0.75;
const quater = window.width * 0.25;
const width90per = window.width * 0.9;
const width80per = window.width * 0.8;
const width35per = window.width * 0.35;
const width5per = window.width * 0.05;
const width10per = window.width * 0.1;
const width8per = window.width * 0.08;
const width6per = window.width * 0.06;
const width2per = window.width * 0.02;
const width3per = window.width * 0.03;
const width40per = window.width * 0.4;
const width30per = window.width * 0.3;
const width28per = window.width * 0.28;

const Height10per = (window.height * 0.1) / scale;
const Height7per = (window.height * 0.07) / scale;
const Height70per = (window.height * 0.7) / scale;
const Height6per = (window.height * 0.06) / scale;
const Height5per = (window.height * 0.05) / scale;
const Height3per = (window.height * 0.03) / scale;
const width1per = (window.height * 0.01) / scale;
const Height2per = (window.height * 0.02) / scale;
const Height1per = (window.height * 0.01) / scale;
const Height40per = (window.height * 0.4) / scale;
const Height30per = (window.height * 0.3) / scale;
const Height20per = (window.height * 0.2) / scale;

const Metrics = {
  fontScale: window.fontScale,
  height: window.height,
  width: window.width,
  scale: window.scale,
  headerText: 30,
  subText: 20,
  menuText: 24,
  parText: 16,
  pageText: 14,
  mt30: 30,
  mt35: 35,
  mt25: 25,
  mt20: 20,
  mt15: 15,
  mt5: 5,
  mt10: 10,
  mb25: 25,
  mb10: 10,
  // margins pixels

  mt25per: '25%',
  mb25per: '25%',
  // margins percentega

  pt25: 25,
  pb25: 25,
  // paddings pixels

  pt25per: '25%',
  pb25per: '25%',
  //   paddings percentages
  half: half,
  threequat: threequat,
  quater: quater,
  width90per: width90per,
  width35per: width35per,
  width10per: width10per,
  width8per: width8per,
  width5per: width5per,
  width6per: width6per,
  width2per: width2per,
  width40per: width40per,
  width3per: width3per,
  width30per: width30per,
  width28per: width28per,
  width1per: width1per,
  width80per: width80per,
  //   window width

  Height10per: Height10per,
  Height7per: Height7per,
  Height6per: Height6per,
  Height5per: Height5per,
  Height40per: Height40per,
  Height3per: Height3per,
  Height30per: Height30per,
  Height2per: Height2per,
  Height1per: Height1per,
  Height20per: Height20per,
  Height70per: Height70per,
  // window height

  window: window.width,
  screen: screen.width,
};

export default Metrics;
