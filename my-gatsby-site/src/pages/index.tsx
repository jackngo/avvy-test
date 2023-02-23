import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import AVVY from '@avvy/client'
import { ethers } from 'ethers'

const IndexPage: React.FC<PageProps> = () => {
  const [names, setName] = React.useState<string>('-')
  
  React.useEffect(() => {
    const init = async () => {
      const provider = new ethers.JsonRpcProvider('https://api.avax.network/ext/bc/C/rpc')
      const avvy = AVVY(provider, {})
      const names = await avvy.batch(['0x9BC4e7C1Fa4Ca66f6B2F4B6F446Dad80Ec541983',]).reverseToNames((avvy.RECORDS as any).EVM)
      console.log(names)
      setName(names.join(', '))
    }
    init()
  }, [])

  return (<div>AvvyDomains Lookup: {names}</div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
