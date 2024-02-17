import { useState } from 'react'

import { Types } from '@/enum/types'

type DialogConfirmProps = {
  onConfirm: () => void
  onClose: () => void
  message: string
  type: Types
  callOnClose?: boolean
}

export default function DialogConfirm({
  onClose,
  onConfirm,
  message,
  type,
  callOnClose = true
}: DialogConfirmProps) {
  const [loading, setLoading] = useState(false)

  const typesColorVariantsCircleBackground = {
    green: 'bg-green-100',
    red: 'bg-red-100'
  }

  const typesColorVariantsSVG = {
    green: 'text-green-600',
    red: 'text-red-600'
  }

  const typesColorVariantsConfirmButton = {
    green: 'bg-green-600 hover:bg-green-400 disabled:bg-green-200',
    red: 'bg-red-600 hover:bg-red-400 disabled:bg-red-200'
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-200 opacity-5"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="sm:flex sm:items-center">
            <div
              className={` ${typesColorVariantsCircleBackground[type]} mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10`}
            >
              <svg
                className={`${typesColorVariantsSVG[type]} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {message}
              </h3>
            </div>
          </div>
          <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <div className="w-full flex items-center justify-center">
                <button
                  type="button"
                  className={`${typesColorVariantsConfirmButton[type]} flex items-center justify-center w-full rounded-md border border-transparent px-4 py-2 text-base leading-6 font-medium text-white shadow-sm focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5 min-w-[84px] disabled:cursor-not-allowed`}
                  onClick={() => {
                    setLoading(true)
                    onConfirm()
                    callOnClose && onClose()
                  }}
                  disabled={loading}
                >
                  {loading && <span className="loading mr-2"></span>}
                  Sim
                </button>
              </div>
            </span>
            <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5 min-w-[84px]"
                onClick={onClose}
              >
                Não
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
