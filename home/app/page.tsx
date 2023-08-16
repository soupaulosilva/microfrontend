import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const Button = dynamic(()=> import('mf_components/button').then((m: any) => m.button), { ssr: false }) as any;

export default function Home() {
  return (
    <main>
       <Suspense fallback={<div>loading components</div>}></Suspense>
       <Button>from remote 1</Button>
       <h2>estou no projeto Home</h2>
    </main>
  )
}
