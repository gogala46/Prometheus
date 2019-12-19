import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';







@Component({
  selector: 'app-primary-document',
  templateUrl: './primary-document.component.html',
  styleUrls: ['./primary-document.component.css']
})
export class PrimaryDocumentComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns1 = ['date', 'number', 'payer', 'payerbank', 'receiver', 'receiverbank', 'amount', 'reason', 'payeridcode', 'payeraccount', 'payerbankcode', 'receiveridcode', 'receiveraccount', 'receiverbankcode'
    , 'budgetincomecode', 'destination', 'aditionalinfo', 'bankconfirmdate', 'obligationnumber'];
  displayedColumns2 = ['date', 'number', 'payer', 'receiver', 'amount', 'currency', 'destination', 'payeridNumber', 'payerBank', 'receiverAccount', 'receiverBank', 'receiverBankSWIFT'
    , 'receiverBankaccount', 'middlemanBank', 'middlemanBankSWIFT', 'mustPayOurAccount', 'expenseOurAccount', 'displaydate'];
  displayedColumns3 = ['date', 'number', 'provider', 'payer', 'amount', 'reason'];
  displayedColumns4 = ['date', 'number', 'provider', 'provided', 'amount'];
  displayedColumns5 = ['date', 'number', 'payer', 'receiver', 'amount', 'currency', 'reason', 'subaccount', 'accountcode', 'reasoncode', 'addendum'];
  displayedColumns6 = ['date', 'number', 'payer', 'receiver', 'amount', 'currency', 'reason', 'subaccount', 'accountcode', 'reasoncode', 'addendum', 'document', 'numberissueplace'];
  displayedColumns7 = ['date', 'number', 'seller', 'buyer', 'amount']

  dataSource1 = DATA1;
  dataSource2 = DATA2;
  dataSource3 = DATA3;
  dataSource4 = DATA4;
  dataSource5 = DATA5;
  dataSource6 = DATA6;
  dataSource7 = DATA7;



  constructor() { }

  ngOnInit() {

  }

}


export interface tab1 {
  date: string;
  number: number;
  payer: string;
  payerbank: string;
  receiver: string;
  receiverbank: string;
  amount: number;
  reason: string;
  payeridcode: string;
  payeraccount: string;
  payerbankcode: string;
  receiveridcode: string;
  receiveraccount: string;
  receiverbankcode: string;
  budgetincomecode: string;
  destination: string;
  aditionalinfo: string;
  bankconfirmdate: string;
  obligationnumber: string;
}

const DATA1: tab1[] = [
  {
    date: '02 05 2019', number: 12321, payer: 'მავანი', payerbank: 'მავანი', receiver: 'მავანი', receiverbank: 'რაცხა', amount: 1000, reason: 'მავანიმავანი', payeridcode: '2546', payeraccount: '8794', payerbankcode: '3215',
    receiveridcode: '6575', receiveraccount: '9845', receiverbankcode: '6554', obligationnumber: '315421', bankconfirmdate: '02 05 2018', aditionalinfo: 'sdasda', destination: 'kajsda', budgetincomecode: '123'
  },
  {
    date: '02 05 2019', number: 12321, payer: 'მავანი', payerbank: 'მავანი', receiver: 'მავანი', receiverbank: 'რაცხა', amount: 1000, reason: 'მავანიმავანი', payeridcode: '2546', payeraccount: '8794', payerbankcode: '3215',
    receiveridcode: '6575', receiveraccount: '9845', receiverbankcode: '6554', obligationnumber: '315421', bankconfirmdate: '02 05 2018', aditionalinfo: 'sdasda', destination: 'kajsda', budgetincomecode: '123'
  },
  {
    date: '02 05 2019', number: 12321, payer: 'მავანი', payerbank: 'მავანი', receiver: 'მავანი', receiverbank: 'რაცხა', amount: 1000, reason: 'მავანიმავანი', payeridcode: '2546', payeraccount: '8794', payerbankcode: '3215',
    receiveridcode: '6575', receiveraccount: '9845', receiverbankcode: '6554', obligationnumber: '315421', bankconfirmdate: '02 05 2018', aditionalinfo: 'sdasda', destination: 'kajsda', budgetincomecode: '123'
  },
  {
    date: '02 05 2019', number: 12321, payer: 'მავანი', payerbank: 'მავანი', receiver: 'მავანი', receiverbank: 'რაცხა', amount: 1000, reason: 'მავანიმავანი', payeridcode: '2546', payeraccount: '8794', payerbankcode: '3215',
    receiveridcode: '6575', receiveraccount: '9845', receiverbankcode: '6554', obligationnumber: '315421', bankconfirmdate: '02 05 2018', aditionalinfo: 'sdasda', destination: 'kajsda', budgetincomecode: '123'
  },


];

export interface tab2 {
  date: string;
  number: number;
  payer: string;
  receiver: string;
  amount: number;
  currency: string;
  destination: string;
  payeridNumber: string;
  payerBank: string;
  receiverAccount: string;
  receiverBank: string;
  receiverBankSWIFT: string;
  receiverBankaccount: string;
  middlemanBank: string;
  middlemanBankSWIFT: string;
  mustPayOurAccount: boolean;
  expenseOurAccount: boolean;
  displaydate: string;


}

const DATA2: tab2[] = [
  {
    date: '1991:06:17', number: 4557, payer: 'მავანი', receiver: 'მავანი', amount: 7896, currency: 'GEL', destination: 'nowhere', payeridNumber: 'a557b', payerBank: 'მავანი', receiverAccount: 'მავანი', receiverBank: 'მავანი', receiverBankSWIFT: '4657BB',
    receiverBankaccount: 'ADB123', middlemanBank: 'მავანი', middlemanBankSWIFT: 'ebd123', mustPayOurAccount: true, expenseOurAccount: true, displaydate: '1991:06:18'
  },
  {
    date: '1991:06:17', number: 4557, payer: 'მავანი', receiver: 'მავანი', amount: 7896, currency: 'GEL', destination: 'nowhere', payeridNumber: 'a557b', payerBank: 'მავანი', receiverAccount: 'მავანი', receiverBank: 'მავანი', receiverBankSWIFT: '4657BB',
    receiverBankaccount: 'ADB123', middlemanBank: 'მავანი', middlemanBankSWIFT: 'ebd123', mustPayOurAccount: true, expenseOurAccount: true, displaydate: '1991:06:18'
  }
];

export interface tab3 {
  date: string;
  number: number;
  provider: string;
  payer: string;
  amount: number;
  reason: string;

}

const DATA3: tab3[] = [
  { date: '2003:10:22', number: 7755, provider: 'მავანი', payer: 'მავანი', amount: 1686, reason: 'მავანიმავანი' },
  { date: '2003:10:23', number: 7756, provider: 'მავანი', payer: 'მავანი', amount: 1687, reason: 'მავანიმავანი' },
  { date: '2003:10:24', number: 7757, provider: 'მავანი', payer: 'მავანი', amount: 1688, reason: 'მავანიმავანი' }
];

export interface tab4 {
  date: string;
  number: number;
  provider: string;
  provided: string;
  amount: number;
}

const DATA4: tab4[] = [
  { date: '2004:01:05', number: 4567, provider: 'მავანი', provided: '67', amount: 268 },
  { date: '2004:01:06', number: 4568, provider: 'მავანი', provided: '13', amount: 13 },
  { date: '2004:01:07', number: 4569, provider: 'მავანი', provided: '45', amount: 54 },
];

export interface tab5 {
  date: string;
  number: number;
  payer: string;
  receiver: string;
  amount: number;
  currency: string;
  reason: string;
  subaccount: string;
  accountcode: string;
  reasoncode: string;
  addendum: string;
}

const DATA5: tab5[] = [
  { date: '2007:10:02', number: 2233, payer: 'მავანი', receiver: 'მავანი', amount: 16464, currency: 'GEL', reason: 'მავანიმავანი', subaccount: '657625', accountcode: '6845', reasoncode: '82564', addendum: 'მავანიმავანი' },
  { date: '2007:10:03', number: 2234, payer: 'მავანი', receiver: 'მავანი', amount: 16465, currency: 'GEL', reason: 'მავანიმავანი', subaccount: '657626', accountcode: '6846', reasoncode: '82565', addendum: 'მავანიმავანი' },
  { date: '2007:10:04', number: 2235, payer: 'მავანი', receiver: 'მავანი', amount: 16466, currency: 'GEL', reason: 'მავანიმავანი', subaccount: '657627', accountcode: '6847', reasoncode: '82566', addendum: 'მავანიმავანი' },
];

export interface tab6 {
  date: string;
  number: number;
  payer: string;
  receiver: string;
  amount: number;
  currency: string;
  reason: string;
  subaccount: string;
  accountcode: string;
  reasoncode: string;
  addendum: string;
  document: string;
  numberissueplace: string;
}

const DATA6: tab6[] = [
  { date: '2007:10:02', number: 2233, payer: 'მავანი', receiver: 'მავანი', amount: 16464, currency: 'GEL', reason: 'მავანიმავანი', subaccount: '657625', accountcode: '6845', reasoncode: '82564', addendum: 'მავანიმავანი', document: 'რაღაცა', numberissueplace: '1545 2017:08:18' },
  { date: '2007:10:03', number: 2234, payer: 'მავანი', receiver: 'მავანი', amount: 16465, currency: 'GEL', reason: 'მავანიმავანი', subaccount: '657626', accountcode: '6846', reasoncode: '82565', addendum: 'მავანიმავანი', document: 'რაღაცა', numberissueplace: '1545 2017:08:18' },
  { date: '2007:10:04', number: 2235, payer: 'მავანი', receiver: 'მავანი', amount: 16466, currency: 'GEL', reason: 'მავანიმავანი', subaccount: '657627', accountcode: '6847', reasoncode: '82566', addendum: 'მავანიმავანი', document: 'რაღაცა', numberissueplace: '1545 2017:08:18' },
];

export interface tab7 {
  date: string;
  number: number;
  seller: string;
  buyer: string;
  amount: number;
}

const DATA7: tab7[] = [
  { date: '2016:09:03', number: 25, seller: 'მავანი', buyer: 'მავანი', amount: 741 },
  { date: '2016:09:03', number: 26, seller: 'მავანი', buyer: 'მავანი', amount: 72 },
  { date: '2016:09:03', number: 27, seller: 'მავანი', buyer: 'მავანი', amount: 241 }
];
