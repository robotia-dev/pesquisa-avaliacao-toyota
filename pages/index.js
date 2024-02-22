import React, { useState } from 'react'
import SEO from '../components/SEO'
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  height: 100vh;
`;
const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  position: absolute;
  top: 10;
  left: 0;
  right: 0;
  bottom: 5;
  margin: auto;
`;
const Emoticon = styled.span`
  font-size: 24px;
`;

const RatingBar = styled.div`
  position: relative;
  width: 300px; /* Ajuste a largura da régua conforme necessário */
  margin-bottom: 20px;
`;

const ColorfulBar = styled.div`
  position: absolute;
  top: -15px; /* Posiciona a barra 15px acima dos emoticons */
  left: 0;
  height: 10px;
  width: 100%;
  background: linear-gradient(to right, red 0%, yellow 50%, green 100%);
`;

const EmoticonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;


const Index = () => {
  const [rating, setRating] = useState(null);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const getEmoticon = (index) => {
    if (index === 1) {
      return '😡'; // Raiva
    } else if (index === 5) {
      return '😐'; // Neutro
    } else if (index === 10) {
      return '😊'; // Feliz
    } else {
      return '🤍'; // Coração vazio
    }
  };

  const [saveInput, setSaveInput] = useState({
    subscribe: false,
    fieldsRequiredEmpty: [],
  });

  return (
    
    <>


<SEO title='Início' />
<Container>
        <FormContainer>
          {!saveInput.subscribe && (
            <form className="flex flex-col gap-3">
              {/* name field */}
             

              {/* attendance field */}
              <section className='flex flex-col gap-2'>
                <header className='flex flex-col items-center gap-1'>
                  <h2 className='font-bold flex items-center gap-1'>
                    <span> <img src="/toyotaicon.jpg" alt="Nissey Motors" style={{ maxWidth: '2rem', height: 'auto' }} /></span>
                    <span className='font-bold'>Atendimento</span>
                    <span> <img src="/volanteicon.png" alt="Nissey Motors" style={{ maxWidth: '2rem', height: 'auto' }} /></span>
                  </h2>
                  <span className='font-bold'>Olá FULANO, tudo bem? </span>
                  <span role="img" aria-label="mão acenando">👋</span><br/>
                  <p className='text-sm max-w-sm text-center'>Nos informe uma nota para a qualidade do atendimento</p>
                </header>

                <div className="flex flex-col items-center">
                  <RatingBar>
                    <ColorfulBar />
                    <EmoticonContainer className="flex justify-between w-full">
                      {[...Array(10)].map((_, index) => (
                        <Emoticon
                          key={index}
                          onClick={() => handleRatingChange(index + 1)}
                          style={{ cursor: 'pointer' }}
                        >
                          {getEmoticon(index + 1)}
                        </Emoticon>
                      ))}
                    </EmoticonContainer>
                  </RatingBar>
                  {rating && <p>Você avaliou isso como {rating}/10!</p>}
                </div>
              </section>

              {/* message field */}
              <div className="flex flex-col">
                <label className="font-semibold">Sua Opinião</label>
                <textarea name="message" rows="3" onChange={event => change(event)} className="border rounded-sm"></textarea>
                {saveInput.fieldsRequiredEmpty && saveInput.fieldsRequiredEmpty.includes('message') && (
                  <p>Falta o nome aqui</p>
                )}
              </div>

              {/* submit button */}
              <div className='flex justify-center'>
                <button onClick={event => save(event)} className='px-4 py-1 rounded-sm bg-gray-800 text-white'>Enviar Avaliação</button>
              </div>
            </form>
          )}
          {saveInput.subscribe && data.showMessage && (
            <div className='flex flex-col p-8 bg-gray-50 rounded-sm border-b-4 border-red-800'>
              <p className='text-center text-5xl' >🥳</p>
              <h2 className='text-lx font-bold'>Parabéns!</h2>
              <p><span className='font-semibold'>{saveInput.subscribe.Nome}</span>, seu cupom para utilização na próxima compra é o <span className='font-semibold'>{saveInput.subscribe.Cupom}</span>.</p>
            </div>
          )}
          {saveInput.subscribe && (
            <div className='flex flex-col p-8 bg-gray-50 rounded-sm border-b-4 border-red-800'>
              <p className='text-center text-5xl' > <img src="/emojiicon.jpg" alt="Nissey Motors" style={{ maxWidth: '6rem', height: 'auto' }} /></p>
              <h2 className='text-lx font-bold'>Obrigado!</h2>
              <p>
                <span className='font-semibold'>{saveInput.subscribe.Nome}</span>, "Obrigado por compartilhar sua opinião valiosa conosco! Seu feedback é muito apreciado e nos ajuda a crescer juntos!"
              </p>
            </div>
          )}
        </FormContainer>
      </Container>
    </>
  );
}

export default Index