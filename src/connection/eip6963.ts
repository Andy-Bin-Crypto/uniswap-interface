/* eslint-disable import/no-unused-modules */
import { Provider } from '@web3-react/types'
import EventEmitter from 'events'

export interface EIP6963ProviderInfo {
  uuid: string
  name: string
  icon: string
  rdns?: string
}

export interface EIP6963ProviderDetail {
  info: EIP6963ProviderInfo
  provider: Provider
}

export interface EVMProviderDetected extends EIP6963ProviderDetail {
  accounts: string[]
  request?: Provider['request']
}

export interface EIP6963AnnounceProviderEvent extends Event {
  detail: EIP6963ProviderDetail
}

export class EIP6963Provider extends EventEmitter implements Provider {
  currentProvider?: EVMProviderDetected
  providerOptionMap: Map<string, EVMProviderDetected> = new Map()

  constructor() {
    super()
    window.addEventListener('eip6963:announceProvider', this.onAnnounceProvider.bind(this) as EventListener)
    window.dispatchEvent(new Event('eip6963:requestProvider'))
  }

  private onAnnounceProvider(event: EIP6963AnnounceProviderEvent) {
    console.log('cartcrom', 'onAnnounceProvider', event.detail)
    const announcedProvider = {
      ...event.detail,
      accounts: [],
    }

    for (const eventName in ['request', 'disconnect', 'chainChanged', 'accountsChanged']) {
      announcedProvider.provider.on(eventName, (event) => this.proxyEvent(eventName, event))
    }

    this.providerOptionMap.set(announcedProvider.info.uuid, announcedProvider)
    console.log('cartcrom', this)
  }

  async request(args: any): Promise<unknown> {
    console.log('cartcrom', 'request', args)
    const response = await this.currentProvider?.provider.request(args)
    console.log('cartcrom', 'response', response)
    return response
  }

  on(eventName: string | symbol, listener: (...args: any[]) => void): this {
    // TODO: make sure this is proxied
    this.currentProvider?.provider.on(eventName, listener)
    return this
  }

  removeListener(eventName: string | symbol, listener: (...args: any[]) => void): this {
    // TODO: make sure this is proxied
    this.currentProvider?.provider.removeListener(eventName, listener)
    return this
  }

  proxyEvent(eventName: string, event: unknown): void {
    console.log('cartcrom', eventName, event)
    this.emit(eventName, event)
  }

  setCurrentProvider(uuid: string) {
    this.currentProvider = this.providerOptionMap.get(uuid)
  }
}
