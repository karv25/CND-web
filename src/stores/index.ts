import {writable, readable} from 'svelte/store'

export const test = writable(null)

export const contractAddress = readable('0x71c8f4E89BC8dA8BBd82698007B5DBf95b352A0a')