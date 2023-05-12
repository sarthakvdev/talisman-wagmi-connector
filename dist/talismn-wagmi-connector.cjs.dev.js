'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@wagmi/core');

class TalismanConnector extends core.InjectedConnector {
  id = 'talisman';
  ready = typeof window != 'undefined' && !!window.talismanEth;
  constructor({
    chains,
    options: options_
  } = {}) {
    super({
      chains,
      options: {
        name: 'Talisman',
        shimDisconnect: true,
        shimChainChangedDisconnect: true,
        ...options_
      }
    });
  }
  async getProvider() {
    if (typeof window === 'undefined') return;
    return window.talismanEth;
  }
}

exports.TalismanConnector = TalismanConnector;
