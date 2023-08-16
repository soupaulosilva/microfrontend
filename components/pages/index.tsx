import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from '@/ui-components/button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <main className="p-7">
     <Button>teste</Button>
   </main>
  )
}
