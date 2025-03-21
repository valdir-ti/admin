import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-[#00ff99] text-[#1c1c22] hover:bg-[#00ff99]/90',
        primary: 'bg-[#00ff99] text-white',
        outline:
          'border bg-transparent border-[#00ff99] text-[#00ff99] hover:bg-[#00ff99]/90 hover:text-[#1c1c22]/90'
      },
      size: {
        default: 'h-[44px] px-6',
        sm: 'h-[48px] px-6',
        lg: 'h-[56] px-8 text-sm uppercase tracking-[2px]'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
