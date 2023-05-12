# Wagmi connector - Talisman

- [Wagmi connector - Talisman](#wagmi-connector---talisman)
  - [Install](#install)
  - [Options](#options)
  - [Example](#example)

## Install

`yarn add @talismn/wagmi-connector`

## Options

```typescript
chains?: Chain[]
```

## Example

```javascript
import { WagmiConfig, configureChains, createClient, defaultChains } from 'wagmi'
import { TalismanConnector } from '@talismn/wagmi-connector'

const { chains, provider, webSocketProvider } = configureChains(defaultChains, [alchemyProvider({ alchemyId })])

const client = createClient({
  autoConnect: true,
  connectors: [
    new TalismanConnector({
      chains
    })
    //...other connectors
  ],
  provider,
  webSocketProvider
})
```