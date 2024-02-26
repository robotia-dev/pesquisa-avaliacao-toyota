import React, { useState } from 'react';
import Image from 'next/image'
const IndexPage = () => {
  const [stepVisibility, setStepVisibility] = useState({
    step1: true,
    step2: false,
    step3: false
  });
  const [selectedValue, setSelectedValue] = useState(null);
  const [formData, setFormData] = useState({});

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
    setFormData({ ...formData, nps: event.target.value })

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

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!selectedValue) {
      alert('Por favor selecione um valor antes de enviar.');
      return;
    }

    const additionalData = {
      sugestao: event.target.sugestao.value,
    }

    setStepVisibility({
      step2: false,
      step3: true,
    });

    console.log('FormData:', {
      ...formData,
      ...additionalData
    })

  }

  return (
    <div className='w-4/5'>

      <form onSubmit={handleSubmit} className=''>
        <input type="hidden" name="access_key" value="SECRET_KEY_ACCESS " />

        {stepVisibility.step1 && (

          <div className='flex flex-col items-center justify-center p-9'>

            <h2 className="font-medium text-center p-9">
              O quando o(a) senhor(a) recomendaria os nossos servicos ?
            </h2>



            <div className=''>
              <div className="flex bg-white shadow-xl border border-gray-300 rounded-xl bg-gray-50">
                <div className="flex flex-col">
                  <span className='bg-red-500 p-2 text-center text-white rounded-tl-lg'>  Destratores</span>
                  <div className='flex justify-between'>

                   
                    <div>

                      <input
                        type="radio"
                        id="um"
                        name="nps"
                        value="1"
                        className="navigate peer hidden"
                        data-step="2"
                        onChange={handleRadioChange}
                      />
                      <label
                        htmlFor="um"
                        className="flex flex-col p-3 cursor-pointer items-center justify-center text-lg font-medium "
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
                        className="flex flex-col p-3 cursor-pointer items-center justify-center text-lg font-medium "
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
                        className="flex flex-col p-3 cursor-pointer items-center justify-center text-lg font-medium "
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
                        className="flex flex-col p-3 cursor-pointer items-center justify-center text-lg font-medium "
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
                        className="flex flex-col p-3 cursor-pointer items-center justify-center text-lg font-medium "
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
                        className="flex flex-col p-3 cursor-pointer items-center justify-center text-lg font-medium "
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
                  <div className='bg-yellow-500 p-2 text-center text-white '>  Neutros </div>
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
                        className="flex flex-col p-3 cursor-pointer items-center justify-center text-lg font-medium "
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
                        className="flex flex-col p-3 cursor-pointer items-center justify-center text-lg font-medium  "
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
                  <div className='bg-green-500 p-2 text-center text-white rounded-tr-lg'>  Promotores </div>
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
                        className="flex flex-col p-3 cursor-pointer items-center justify-center text-lg font-medium "
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
                        className="flex flex-col p-3 cursor-pointer items-center justify-center text-lg font-medium "
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
          <div className='flex flex-col items-center p-9'>
            <h2 className="font-medium text-center p-9">
              Gostaria de deixar uma sugestão?
            </h2>
            <div className='w-96'>
              <textarea
                name="sugestao"
                rows="4"
                className="w-full rounded-md border bg-white shadow-xl border-gray-400 focus:border-indigo-500 p-2"
                placeholder="escreva sua Sugestão..."
              />
            <div className="relative"> <a href="#!" onClick={handleBack} className="absolute top-0 right-0 navigate underline text-gray-500 text-sm" data-step="1">  Voltar</a> </div>
            </div>

            <div className="flex justify-center pt-9">
              <button
                type="submit"
                className="px-10 py-2 rounded-md border bg-white text-lg font-medium shadow border-gray-400"
              >
                Enviar
              </button>
            </div>
          </div>
        )}

      </form>


      {stepVisibility.step3 && (
        <div className="flex flex-col items-center p-9">
          <h2 className="mx-auto text-center text-xl font-bold p-9">
            Obrigado por participar de nossa pesquisa!
          </h2>
          <div className="mt-4 ">
            <Image src='/checkmark.svg' width={300} height={300} alt='check mark' />
          </div>

        </div>
      )}

      <div className="flex justify-center">
        <Image src='/logo.png' width={200} height={200} />
      </div>

    </div>
  );
};

export default IndexPage;
