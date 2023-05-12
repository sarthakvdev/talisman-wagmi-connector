import { InjectedConnector } from '@wagmi/core';

class TalismanConnector extends InjectedConnector {
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

export { TalismanConnector };
