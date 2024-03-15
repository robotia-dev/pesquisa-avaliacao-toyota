
import React, { useState } from 'react';
import Image from 'next/image';
import { useEffect } from 'react';

const Form = (data) => {
  const [values, setValues] = useState();

  const [stepVisibility, setStepVisibility] = useState({
    step1: true,
    step2: false,
    step3: false
  });
  const [selectedValue, setSelectedValue] = useState(null);

  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState(false);


  useEffect(({ empresa, revenda, caixa } = data) => {
    fetch(`http://10.15.32.11:8000/search_pesquisa_satisfacao/?empresa=${empresa}&revenda=${revenda}&caixa=${caixa}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-secret-key': 'sua_chave_secreta',
      }
    })
      .then(response => response.json())
      .then(data => {

        const participante = data
          .filter(atendimento => atendimento.participacao_pesquisa_satisfacao === 1)
          .reduce((maxAtendimento, atendimento) =>
            atendimento.numero_atendimento > maxAtendimento.numero_atendimento ? atendimento : maxAtendimento,
          );
        setValues(participante);
      })
      .catch(error => console.log(error));
  }, [])

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);

    setStepVisibility({
      step1: false,
      step2: true,
    });
  }

  const handleBack = () => {
    setStepVisibility({
      step1: true,
      step2: false,
    });
  }

  const handleYes = async () => {
    setQuestion(true);
  }
  const handleNot = async () => {

    const formData = {
      ...data,
      'atendimento': values.numero_atendimento,
    }

    try {
      setLoading(true)
      await fetch(`http://10.14.152.15:8000/send_nota_atendimento`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-secret-key': 'sua_chave_secreta',
          'Accept': '*/*'
        },
        body: JSON.stringify(formData)
      })

    } catch (error) {
      console.log('Request Error:', error)
    }
    setQuestion(true);
    setStepVisibility({
      step1: false,
      step2: false,
      step3: true,
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!selectedValue) {
      alert('Por favor selecione um valor antes de enviar.');
      handleBack();
    }

    let textarea = document.querySelector('#sugestao');
    const formData = {
      ...data,
      'nota': selectedValue,
      'comentario': textarea.value,
      'cliente': values.cliente,
      'atendimento': values.numero_atendimento,
    }

    try {
      setLoading(true)
      await fetch(`http://10.14.152.15:8000/send_nota_atendimento`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-secret-key': 'sua_chave_secreta',
          'Accept': '*/*'
        },
        body: JSON.stringify(formData)
      })

    } catch (error) {
      console.log('Request Error:', error)
      setLoading(false)
    }

    setLoading(false)
    setStepVisibility({
      step2: false,
      step3: true,
    });
  }

  if (question) {

    return (
      <div className='w-4/5'>
        <form onSubmit={handleSubmit} className=''>
          <input type="hidden" name="access_key" value="SECRET_KEY_ACCESS " />

          {stepVisibility.step1 && (

            <div className='flex flex-col items-center justify-center mt-40 mb-9'>

              <h2 className="font-medium text-center mt-9 mb-9">
                O quando o(a) senhor(a) {values && values.nome_cliente} recomendaria os nossos servicos ?
              </h2>



              <div className=''>
                <div className="flex bg-white shadow-xl border border-gray-300 rounded-xl bg-gray-50">
                  <div className="flex flex-col">
                    <span className='bg-red-500 p-2 text-center text-white rounded-tl-lg'> </span>
                    <div className='flex justify-between'>


                      <div>

                        <input
                          type="radio"
                          id="0"
                          name="nps"
                          value="1"
                          className="navigate peer hidden"
                          data-step="2"
                          onChange={handleRadioChange}
                        />
                        <label
                          htmlFor="0"
                          className="flex flex-col py-2 ml-1 mr-2 cursor-pointer items-center justify-center text-lg font-medium "
                        >
                          <span className='pb-3'>

                            <Image src='Unhappy-Face.svg' width={30} height={30} alt='unHappy-Face' />
                          </span>
                          0
                        </label>

                      </div>
                      <div>

                        <input
                          type="radio"
                          id="um"
                          name="nps"
                          value="2"
                          className="navigate peer hidden"
                          data-step="2"
                          onChange={handleRadioChange}
                        />
                        <label
                          htmlFor="um"
                          className="flex flex-col py-2 mr-2 cursor-pointer items-center justify-center text-lg font-medium "
                        >
                          <span className='pb-3'>

                            <Image src='Unhappy-Face.svg' width={30} height={30} alt='unHappy-Face' />
                          </span>
                          1
                        </label>

                      </div>
                      <div>

                        <input
                          type="radio"
                          id="dois"
                          name="nps"
                          value="2"
                          className="navigate peer hidden"
                          data-step="2"
                          onChange={handleRadioChange}
                        />
                        <label
                          htmlFor="dois"
                          className="flex flex-col py-2 mr-2 cursor-pointer items-center justify-center text-lg font-medium "
                        >
                          <span className='pb-3'>

                            <Image src='Unhappy-Face.svg' width={30} height={30} alt='unHappy-Face' />
                          </span>
                          2
                        </label>

                      </div>
                      <div>

                        <input
                          type="radio"
                          id="tres"
                          name="nps"
                          value="3"
                          className="navigate peer hidden"
                          data-step="2"
                          onChange={handleRadioChange}
                        />
                        <label
                          htmlFor="tres"
                          className="flex flex-col py-2 mr-2 cursor-pointer items-center justify-center text-lg font-medium "
                        >
                          <span className='pb-3'>

                            <Image src='Unhappy-Face.svg' width={30} height={30} alt='unHappy-Face' />
                          </span>
                          3
                        </label>

                      </div>
                      <div>

                        <input
                          type="radio"
                          id="quatro"
                          name="nps"
                          value="4"
                          className="navigate peer hidden"
                          data-step="2"
                          onChange={handleRadioChange}
                        />
                        <label
                          htmlFor="quatro"
                          className="flex flex-col py-2 mr-2 cursor-pointer items-center justify-center text-lg font-medium "
                        >
                          <span className='pb-3'>

                            <Image src='Unhappy-Face.svg' width={30} height={30} alt='unHappy-Face' />
                          </span>
                          4
                        </label>

                      </div>
                      <div>

                        <input
                          type="radio"
                          id="cinco"
                          name="nps"
                          value="5"
                          className="navigate peer hidden"
                          data-step="2"
                          onChange={handleRadioChange}
                        />
                        <label
                          htmlFor="cinco"
                          className="flex flex-col py-2 mr-2 cursor-pointer items-center justify-center text-lg font-medium "
                        >
                          <span className='pb-3'>

                            <Image src='Unhappy-Face.svg' width={30} height={30} alt='unHappy-Face' />
                          </span>
                          5
                        </label>

                      </div>
                      <div>

                        <input
                          type="radio"
                          id="seis"
                          name="nps"
                          value="6"
                          className="navigate peer hidden"
                          data-step="2"
                          onChange={handleRadioChange}
                        />
                        <label
                          htmlFor="seis"
                          className="flex flex-col py-2 mr-2 cursor-pointer items-center justify-center text-lg font-medium "
                        >
                          <span className='pb-3'>

                            <Image src='Unhappy-Face.svg' width={30} height={30} alt='unHappy-Face' />
                          </span>
                          6
                        </label>

                      </div>

                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className='bg-yellow-500 p-2 text-center text-white '>   </div>
                    <div className='flex justify-between'>

                      <div>

                        <input
                          type="radio"
                          id="sete"
                          name="nps"
                          value="7"
                          className="navigate peer hidden"
                          data-step="2"
                          onChange={handleRadioChange}
                        />
                        <label
                          htmlFor="sete"
                          className="flex flex-col py-2 mr-2 cursor-pointer items-center justify-center text-lg font-medium "
                        >
                          <span className="pb-3">

                            <Image src='Neutral-Smiley-Face.svg' width={30} height={30} alt='neutral-Face' />
                          </span>
                          7
                        </label>

                      </div>
                      <div>

                        <input
                          type="radio"
                          id="oito"
                          name="nps"
                          value="8"
                          className="navigate peer hidden"
                          data-step="2"
                          onChange={handleRadioChange}
                        />
                        <label
                          htmlFor="oito"
                          className="flex flex-col py-2 mr-2 cursor-pointer items-center justify-center text-lg font-medium  "
                        >
                          <span className="pb-3">

                            <Image src='Neutral-Smiley-Face.svg' width={30} height={30} alt='neutral-Face' />
                          </span>
                          8
                        </label>

                      </div>

                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className='bg-green-500 p-2 text-center text-white rounded-tr-lg'>   </div>
                    <div className='flex justify-between'>

                      <div>

                        <input
                          type="radio"
                          id="nove"
                          name="nps"
                          value="9"
                          className="navigate peer hidden"
                          data-step="2"
                          onChange={handleRadioChange}
                        />
                        <label
                          htmlFor="nove"
                          className="flex flex-col py-2 mr-2 cursor-pointer items-center justify-center text-lg font-medium "
                        >
                          <span className='pb-3'>

                            <Image src='Excited-Smiley-Face.svg' width={30} height={30} alt='neutral-Face' />
                          </span>
                          9
                        </label>

                      </div>
                      <div>

                        <input
                          type="radio"
                          id="dez"
                          name="nps"
                          value="10"
                          className="navigate peer hidden"
                          data-step="2"
                          onChange={handleRadioChange}
                        />
                        <label
                          htmlFor="dez"
                          className="flex flex-col py-2 mr-1 cursor-pointer items-center justify-center text-lg font-medium "
                        >
                          <span className='pb-3'>

                            <Image src='Excited-Smiley-Face.svg' width={30} height={30} alt='neutral-Face' />
                          </span>
                          10
                        </label>

                      </div>


                    </div>
                  </div>
                </div>
              </div>


            </div>

          )}

          {stepVisibility.step2 && (
            <div className='flex flex-col items-center mt-40 p-9'>
              <h2 className="font-medium text-center p-9">
                Gostaria de deixar uma sugestão?
              </h2>
              <div className='w-screen sm:w-full md:w-full lg:w-3/5'>
                <div className="flex mx-4">
                  <textarea
                    name="sugestao"
                    rows="4"
                    className="w-screen rounded-md border bg-white shadow-xl border-gray-400 focus:border-indigo-500 p-2"
                    placeholder="escreva sua Sugestão..."
                    id='sugestao'
                  />
                </div>
                <div className="relative mr-5 mt-2"> <a href="#!" onClick={handleBack} className="absolute top-0 right-0 navigate underline text-gray-500 text-sm" data-step="1">  Voltar</a> </div>
              </div>

              <div className="flex justify-center pt-9">
                <button
                  type="submit"
                  className="px-10 py-2 rounded-md border bg-white text-lg font-medium shadow border-gray-400"
                  onClick={handleSubmit}
                >
                  {loading
                    ?
                    <>
                      <svg className="animate-spin mx-3 h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </>
                    :
                    'enviar'
                  }
                </button>
              </div>
            </div>
          )
          }

        </form >


        {
          stepVisibility.step3 && (
            <div className="flex flex-col items-center mt-40 p-9">
              <h2 className="mx-auto text-center text-xl font-bold p-9">
                Obrigado por participar de nossa pesquisa!
              </h2>
              <div className="mt-4 ">
                <Image src='/checkmark.svg' width={300} height={300} alt='check mark' />
              </div>

            </div>
          )
        }

        < div className="flex justify-center " >
          <Image src='/nissey-logo.png' width={150} height={150} alt='logo nissey' />
        </div >

      </div >
    )

  } else {
    return (
      <div className='h-screen w-full content-center'>
        <div className="border border-blue-300 shadow shadow-xl rounded-md p-4 max-w-sm w-full mx-auto text-center">
          <div className='flex flex-col items-center'>
            <Image className='' src='/nissey-logo.png' width={150} height={150} alt="logo nissey" />
            <h2 className='text-xl font-medium mt-2 '>Gostaria de Continuar com a pesquisa </h2>
            <div className='flex mt-2 pt-2'>
              <button onClick={() => handleNot()} type="button" className='p-2 pl-5 pr-5 rounded border-1 border-red-400 bg-red-300 hover:bg-red-400 uppercase font-semibold '>não</button>
              <button onClick={() => handleYes} type="button" className='p-2 pl-5 pr-5 ml-2 rounded border-1 border-blue-400 bg-blue-300 hover:bg-blue-400 uppercase font-semibold '>sim</button>
            </div>
          </div>
        </div>

      </div>
    )
  }


}

export default Form;