import { Injectable } from '@angular/core';

interface IPosTerminalFields {
  TerminalBrand: string;
  TerminalType: string;
  TerminalModel: string;
  NumberOfTerminalsRequested: string;
  TelcoProvider: string;
  SimType: string;
  TipAdjust: string;
  HotelSetupFacility: string;
  ManualKeyInFacility: string;
}

@Injectable()
export class PosTerminalBrandListService {

  constructor() { }

  getTableFields() {
    return ['TerminalBrand', 'TerminalType', 'TerminalModel', 'NumberOfTerminalsRequested', 'TelcoProvider', 'SimType', 'TipAdjust',
      'HotelSetupFacility', 'ManualKeyInFacility', 'Action'];
  }

  get(): IPosTerminalFields[] {
    return [
      {
        TerminalBrand: 'VERIFONE',
        TerminalType: 'IP-DIAL UP',
        TerminalModel: 'VX520 COMBO',
        NumberOfTerminalsRequested: '5',
        TelcoProvider: 'PLDT',
        SimType: 'GLOBE',
        TipAdjust: 'NO',
        HotelSetupFacility: 'NO',
        ManualKeyInFacility: 'NO'
      },
      {
        TerminalBrand: 'CASTLES',
        TerminalType: 'TRI-MODE COUNTERTOP',
        TerminalModel: 'V5000S',
        NumberOfTerminalsRequested: '3',
        TelcoProvider: 'PLDT',
        SimType: 'GLOBE',
        TipAdjust: 'NO',
        HotelSetupFacility: 'NO',
        ManualKeyInFacility: 'NO'
      },
      {
        TerminalBrand: 'INGENICO',
        TerminalType: 'WIRED GPRS',
        TerminalModel: 'ICT250 GEM CL',
        NumberOfTerminalsRequested: '1',
        TelcoProvider: 'PLDT',
        SimType: 'GLOBE',
        TipAdjust: 'NO',
        HotelSetupFacility: 'NO',
        ManualKeyInFacility: 'NO'
      }
    ];
  }
}
