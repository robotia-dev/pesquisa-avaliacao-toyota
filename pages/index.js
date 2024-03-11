'use client'
import React from 'react';
import { useSearchParams } from 'next/navigation'
import { useState } from 'react';
import { useEffect } from 'react';
import Image from 'next/image'
import Form from '../components/Form'



const IndexPage = () => {
  const searchParams = useSearchParams();

  const [params, setParams] = useState({ empresa: 0, revenda: 0, caixa: 0 });
 if(typeof window !== undefined) {
  useEffect(() => {
    const empresa = searchParams.get('empresa');
    const revenda = searchParams.get('revenda');
    const caixa = searchParams.get('caixa');
    if (caixa !== params.caixa ||
      revenda !== params.revenda ||
      empresa !== params.empresa) {

      setParams({
        empresa,
        revenda,
        caixa
      })
    }
    return;
  }, [params])
 } 
  

  if (params.caixa) {
    return <Form {...params} />
  } else {
    return (
      <div className='h-screen w-full content-center'>
        <div className="border border-blue-300 shadow shadow-xl rounded-md p-4 max-w-sm w-full mx-auto text-center">
          <div className='flex flex-col items-center'>
            <Image className='' src='/nissey-logo.png' width={150} height={150} alt="logo nissey" />
            <h2 className='text-xl font-medium mt-2 animate-pulse'>Carregando <span className="animate-bounce w- h-">...</span></h2>
          </div>
        </div>

      </div>
    )
  }

};

export default IndexPage;
