import Image from 'next/image'
import { MdMonetizationOn } from 'react-icons/md'

import MoneyValue from './money-value'

type ExchangeRateData = {
  bid?: string | null
  varBid?: string | null
}

type ExchangeRateResponse = {
  USDBRL?: ExchangeRateData
  EURBRL?: ExchangeRateData
  BTCBRL?: ExchangeRateData
}

async function fetchExchangeRate() {
  try {
    const response = await fetch(process.env.EXCHANGE_RATE_API_URL || '')
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
    return error
  }
}

export default async function ExchangeRate() {
  const data: ExchangeRateResponse = await fetchExchangeRate()

  const parseNumber = (
    value: string | null | undefined,
    defaultValue = 0
  ): number => parseFloat(value ?? '') || defaultValue

  const dolar = parseNumber(data.USDBRL?.bid)
  const dolarVariation = parseNumber(data.USDBRL?.varBid)
  const euro = parseNumber(data.EURBRL?.bid)
  const euroVariation = parseNumber(data.EURBRL?.varBid)
  const btc = parseNumber(data.BTCBRL?.bid)
  const btcVariation = parseNumber(data.BTCBRL?.varBid)

  return (
    <>
      <div className="absolute bottom-4 right-4 w-[50%] h-[50%]">
        <Image
          src="/money.png"
          alt="money icon"
          width={180}
          height={180}
          className="object-fill opacity-10"
        />
      </div>
      <div className="ml-2 flex flex-col gap-4 mb-2">
        <span className="font-bold">
          <div className="flex items-center">
            <MdMonetizationOn className="text-yellow-200" />{' '}
            <p className="ml-2 text-yellow-500">Exchange Rate</p>
          </div>
        </span>
        <MoneyValue name="Dólar" value={dolar} variation={dolarVariation} />
        <MoneyValue name="Euro" value={euro} variation={euroVariation} />
        <MoneyValue name="BTC" value={btc} variation={btcVariation} />
      </div>
    </>
  )
}
