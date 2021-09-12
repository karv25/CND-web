import {writable, readable} from 'svelte/store'

// data
export const cost:any = writable(0)

// blockchain
export const isConnect:any = writable(false)
export const provider:any = writable(null)
export const signer:any = writable(null)
export const myAddress:any = writable(null)
export const myAddressShort:any = writable(null)
export const myBalance:any = writable(0)

// CNDV2 contract
export const CNDV2Contract = readable('0x5A6364E9CE2a60964b4015EBD412479Ae90e36Ba')
export const CNDV2TotalSupply:any = writable(0)
export const myCNDV2Balance:any = writable(0)
export const myCNDV2List:any = writable([])

// Nectar contract
export const NectarContract = readable('0x77E483104609d357E6EC8bDdcaAD6C8c63691960')
export const myNectarBalance:any = writable(0)

// CNDV2Sale contract
export const CNDV2SaleContract = readable('0xD2D9a58EC82489322beF54363C797a219B59C71B')


// LotusStaking contract
export const LotusContract = readable('0x5f01CaD80F668b832D5C12e227B78fA2A9c7c866')
