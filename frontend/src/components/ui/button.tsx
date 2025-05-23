import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[4px] text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 active:translate-y-[1px] font-medium tracking-wide',
        destructive:
          'bg-destructive text-white shadow-sm hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 active:translate-y-[1px]',
        outline:
          'border border-primary text-primary bg-background shadow-sm hover:bg-accent hover:text-primary dark:bg-input/30 dark:border-primary dark:hover:bg-input/50 active:translate-y-[1px]',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 active:translate-y-[1px] font-medium',
        ghost:
          'hover:bg-accent hover:text-primary dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
        // LG 스타일 추가 버튼 변형
        'lg-red': 'bg-[#A50034] text-white shadow-sm hover:bg-[#A50034]/90 active:translate-y-[1px] font-medium tracking-wide',
        'lg-gray': 'bg-[#54575A] text-white shadow-sm hover:bg-[#54575A]/90 active:translate-y-[1px] font-medium tracking-wide',
        'lg-outline': 'border-2 border-[#A50034] text-[#A50034] bg-transparent shadow-none hover:bg-[#A50034]/10 active:translate-y-[1px] font-medium tracking-wide',
      },
      size: {
        default: 'h-10 px-5 py-2 has-[>svg]:px-4',
        sm: 'h-9 rounded-[4px] gap-1.5 px-4 has-[>svg]:px-3',
        lg: 'h-12 rounded-[4px] px-6 has-[>svg]:px-5 text-base',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
