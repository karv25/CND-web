import {writable, readable} from 'svelte/store'

// data
export const cost:any = writable(0)

// blockchain
export const isConnect:any = writable(false)
export const provider:any = writable(null)
export const signer:any = writable(null)
export const myAddress:any = writable(null)
export const myBalance:any = writable(0)

// contract
export const contractAddress = readable('0x71c8f4E89BC8dA8BBd82698007B5DBf95b352A0a')
export const totalSupply:any = writable(0)