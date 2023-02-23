import AVVY from '@avvy/client'
import { ethers } from 'ethers'

const main = async () => {
  const provider = new ethers.JsonRpcProvider('https://api.avax.network/ext/bc/C/rpc')
  const avvy = AVVY(provider, {})
  const names = await avvy.batch(['0x9BC4e7C1Fa4Ca66f6B2F4B6F446Dad80Ec541983',]).reverseToNames((avvy.RECORDS as any).EVM)
  console.log(names)
}

main()