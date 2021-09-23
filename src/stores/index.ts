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
export const publicPolygonRPC:any = readable('https://polygon-rpc.com/')

// CNDV2 contract
export const CNDV2Contract = readable('0x6c15030A0055D7350c89EbbD460EB4F145462Fbd')
export const CNDV2TotalSupply:any = writable(0)
export const myCNDV2Balance:any = writable(0)
export const myCNDV2List:any = writable([])

// Nectar contract
export const NectarContract = readable('0x662e0c208238Fc014429c8C4F28f82AaC6F59b9D')
export const myNectarBalance:any = writable(0)

// CNDV2Sale contract
export const CNDV2SaleContract = readable('0x841A63491027b3cffBDBC748AB98D8a7944eb197')


// LotusStaking contract
export const LotusContract = readable('0x4172DF61f6842870049FcD07b8E9FE6CEA7789EA')
export const myLotusList:any = writable([])
