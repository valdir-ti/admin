import Image from 'next/image'
import { MdMonetizationOn } from 'react-icons/md'

import { formatCurrency } from '@/utils/formatCurrency'

async function getExchangeRate() {
  try {
    const response = await fetch(
      'https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL'
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
    return error
  }
}

export default async function ExchangeRate() {
  const data = await getExchangeRate()

  const dolar = data.USDBRL.bid
  const euro = data.EURBRL.bid
  const btc = data.BTCBRL.bid

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
        <h3 className="font-semibold text-base">
          Dólar: {formatCurrency(dolar)}
        </h3>
        <h3 className="font-semibold text-base">
          Euro: {formatCurrency(euro)}
        </h3>
        <h3 className="font-semibold text-base">
          Bitcoin: {formatCurrency(btc)}
        </h3>
      </div>
    </>
  )
}

{
  /* https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL */
}
