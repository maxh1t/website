'use client'

import { Button } from '@/components/ui'

export function Header() {
  // eslint-disable-next-line no-console
  const handleClick = () => console.log('click')

  return (
    <div className='flex flex-1 justify-center'>
      <Button onClick={handleClick}>Home</Button>
    </div>
  )
}
