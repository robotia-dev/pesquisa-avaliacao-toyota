'use client'
import React from 'react';
import { useSearchParams } from 'next/navigation'
import { useState } from 'react';

import Form from '../components/Form'
import { useEffect } from 'react';
import { useCallback } from 'react';


const IndexPage = () => {
  const searchParams = useSearchParams();

  const [params, setParams] = useState({empresa: 0, revenda:0, caixa:0 });


  const getParams = () => {
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
  }

  setTimeout(() => getParams(), 10000)

  if (params.caixa) {
    return <Form {...params} />
  } else {
    return <div>carregando...</div>
  }

};

export default IndexPage;
