import React, { useState } from 'react';

import { Download, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import './PortugolChecklist.css';

const PortugolChecklist = () => {
   const [checkedItems, setCheckedItems] = useState({});
   const [openDropdowns, setOpenDropdowns] = useState({});

   const topics = [
      {
         category: '1. Fundamentos Básicos',
         color: 'bg-blue-500',
         items: [
            { text: 'O que é programação?', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/4T_-HAokndE'] },
            { text: 'O que é algoritmo?', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/2NgIbuA6GLY'] },
            { text: 'O que é Portugol?', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/3fV3K0f7x9Y'] },
            {
               text: 'Ambiente de desenvolvimento (IDE)',
               videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/5R5e4p4X5kM'],
            },
            {
               text: 'Estrutura básica de um programa',
               videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/7yPq1oK6j9A'],
            },
            { text: 'Comentários em código', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/6t1W2b8z5vM'] },
         ],
      },
      {
         category: '2. Variáveis e Tipos de Dados',
         color: 'bg-green-500',
         items: [
            { text: 'Conceito de variável', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/1l2kR0v5r8U'] },
            {
               text: 'Declaração de variáveis',
               videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/1l2kR0v5r8U'],
            },
            { text: 'Tipo inteiro', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/1l2kR0v5r8U'] },
            { text: 'Tipo real', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/1l2kR0v5r8U'] },
            { text: 'Tipo caractere', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/1l2kR0v5r8U'] },
            { text: 'Tipo cadeia (string)', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/1l2kR0v5r8U'] },
            {
               text: 'Tipo lógico (booleano)',
               videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/1l2kR0v5r8U'],
            },
            { text: 'Constantes', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/1l2kR0v5r8U'] },
            { text: 'Atribuição de valores', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/1l2kR0v5r8U'] },
         ],
      },
      {
         category: '3. Entrada e Saída de Dados',
         color: 'bg-purple-500',
         items: [
            { text: 'Comando escreva()', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/3fV3K0f7x9Y'] },
            { text: 'Comando leia()', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/3fV3K0f7x9Y'] },
            { text: 'Formatação de saída', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/3fV3K0f7x9Y'] },
            { text: 'Concatenação de texto', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/3fV3K0f7x9Y'] },
            {
               text: 'Entrada de diferentes tipos de dados',
               videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/3fV3K0f7x9Y'],
            },
         ],
      },
      {
         category: '4. Operadores',
         color: 'bg-yellow-500',
         items: [
            {
               text: 'Operadores aritméticos (+, -, *, /, %)',
               videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/2N8cJ1z5v5M'],
            },
            {
               text: 'Operadores relacionais (>, <, >=, <=, ==, !=)',
               videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/2N8cJ1z5v5M'],
            },
            {
               text: 'Operadores lógicos (e, ou, nao)',
               videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/2N8cJ1z5v5M'],
            },
            {
               text: 'Precedência de operadores',
               videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/2N8cJ1z5v5M'],
            },
            {
               text: 'Expressões matemáticas',
               videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/2N8cJ1z5v5M'],
            },
         ],
      },
      {
         category: '5. Estruturas de Decisão',
         color: 'bg-red-500',
         items: [
            { text: 'Comando se (if)', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/4T_-HAokndE'] },
            {
               text: 'Comando se-senao (if-else)',
               videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/4T_-HAokndE'],
            },
            {
               text: 'Se aninhado (nested if)',
               videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/4T_-HAokndE'],
            },
            {
               text: 'Comando escolha-caso (switch-case)',
               videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/4T_-HAokndE'],
            },
            { text: 'Operador ternário', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/4T_-HAokndE'] },
         ],
      },
      {
         category: '6. Estruturas de Repetição',
         color: 'bg-indigo-500',
         items: [
            {
               text: 'Conceito de laços/loops',
               videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/5R5e4p4X5kM'],
            },
            { text: 'Comando para (for)', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/5R5e4p4X5kM'] },
            {
               text: 'Comando enquanto (while)',
               videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/5R5e4p4X5kM'],
            },
            {
               text: 'Comando faca-enquanto (do-while)',
               videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/5R5e4p4X5kM'],
            },
            { text: 'Comando pare (break)', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/5R5e4p4X5kM'] },
            { text: 'Loops aninhados', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/5R5e4p4X5kM'] },
            {
               text: 'Contadores e acumuladores',
               videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/5R5e4p4X5kM'],
            },
         ],
      },
      {
         category: '7. Vetores (Arrays)',
         color: 'bg-pink-500',
         items: [
            { text: 'Conceito de vetor', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/7yPq1oK6j9A'] },
            { text: 'Declaração de vetores', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/7yPq1oK6j9A'] },
            { text: 'Acesso a elementos', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/7yPq1oK6j9A'] },
            { text: 'Percorrer vetores', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/7yPq1oK6j9A'] },
            {
               text: 'Preenchimento de vetores',
               videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/7yPq1oK6j9A'],
            },
            { text: 'Busca em vetores', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/7yPq1oK6j9A'] },
            { text: 'Ordenação básica', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/7yPq1oK6j9A'] },
         ],
      },
      {
         category: '8. Matrizes',
         color: 'bg-teal-500',
         items: [
            { text: 'Conceito de matriz', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/6t1W2b8z5vM'] },
            {
               text: 'Declaração de matrizes',
               videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/6t1W2b8z5vM'],
            },
            { text: 'Acesso a elementos', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/6t1W2b8z5vM'] },
            {
               text: 'Percorrer matrizes (loops aninhados)',
               videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/6t1W2b8z5vM'],
            },
            { text: 'Matriz bidimensional', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/6t1W2b8z5vM'] },
            {
               text: 'Operações com matrizes',
               videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/6t1W2b8z5vM'],
            },
         ],
      },
      {
         category: '9. Funções e Procedimentos',
         color: 'bg-orange-500',
         items: [
            {
               text: 'Conceito de modularização',
               videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/3fV3K0f7x9Y'],
            },
            { text: 'Declaração de funções', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/3fV3K0f7x9Y'] },
            {
               text: 'Declaração de procedimentos',
               videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/3fV3K0f7x9Y'],
            },
            { text: 'Parâmetros', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/3fV3K0f7x9Y'] },
            { text: 'Retorno de valores', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/3fV3K0f7x9Y'] },
            { text: 'Escopo de variáveis', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/3fV3K0f7x9Y'] },
            { text: 'Funções com vetores', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/3fV3K0f7x9Y'] },
         ],
      },
      {
         category: '10. Boas Práticas',
         color: 'bg-cyan-500',
         items: [
            { text: 'Identação de código', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/2N8cJ1z5v5M'] },
            { text: 'Nomes significativos', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/2N8cJ1z5v5M'] },
            { text: 'Comentários úteis', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/2N8cJ1z5v5M'] },
            { text: 'Organização do código', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/2N8cJ1z5v5M'] },
            { text: 'Testes e depuração', videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/2N8cJ1z5v5M'] },
            {
               text: 'Resolução de problemas',
               videos: ['https://youtu.be/8mei6uVtads', 'https://youtu.be/2N8cJ1z5v5M'],
            },
         ],
      },
   ];

   const handleCheck = (catIndex, itemIndex) => {
      const key = `${catIndex}-${itemIndex}`;
      setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
   };

   const toggleDropdown = (catIndex, itemIndex) => {
      const key = `${catIndex}-${itemIndex}`;
      setOpenDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
   };

   const generatePDF = () => {
      const printWindow = window.open('', '_blank');
      printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Checklist Portugol</title>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
          <style>
            ${document.querySelector('style').innerHTML}
            ${document.querySelector('#pdf-styles')?.innerHTML || ''}
          </style>
        </head>
        <body>
          <div class="pdf-container">
            <h1>Checklist de Ensino - Portugol</h1>
            ${topics
               .map(
                  (topic, catIndex) => `
              <div class="pdf-category">
                <h2 class="${topic.color}">${topic.category}</h2>
                <ul>
                  ${topic.items
                     .map((item, itemIndex) => {
                        const key = `${catIndex}-${itemIndex}`;
                        const isChecked = checkedItems[key];
                        return `<li class="${isChecked ? 'checked' : ''}">${item.text}</li>`;
                     })
                     .join('')}
                </ul>
              </div>
            `
               )
               .join('')}
          </div>
        </body>
      </html>
    `);
      printWindow.document.close();
      setTimeout(() => printWindow.print(), 500);
   };

   const totalItems = topics.reduce((sum, t) => sum + t.items.length, 0);
   const checkedCount = Object.values(checkedItems).filter(Boolean).length;
   const progress = Math.round((checkedCount / totalItems) * 100);

   return (
      <>
         <div className='min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6 font-poppins'>
            <div className='max-w-5xl mx-auto'>
               <div className='bg-white rounded-3xl shadow-2xl overflow-hidden mb-8'>
                  <div className='bg-gradient-to-r from-purple-600 to-indigo-600 p-8 text-white'>
                     <h1 className='text-5xl font-bold mb-3 flex items-center gap-3'>Checklist de Ensino - Portugol</h1>
                     <p className='text-xl opacity-95'>Do zero ao avançado com vídeos e prática</p>
                     <div className='mt-6 bg-white/30 rounded-full h-4 overflow-hidden'>
                        <div
                           className='bg-white h-full transition-all duration-700 rounded-full'
                           style={{ width: `${progress}%` }}
                        ></div>
                     </div>
                     <p className='mt-2 text-sm opacity-90'>
                        {checkedCount} de {totalItems} concluídos ({progress}%)
                     </p>
                  </div>

                  <div className='p-8'>
                     <button onClick={generatePDF} className='btn-generate-pdf'>
                        <Download size={28} />
                        <span className='text-xl'>Gerar PDF para Impressão</span>
                     </button>

                     <div className='space-y-8'>
                        {topics.map((topic, catIndex) => (
                           <div
                              key={catIndex}
                              className='bg-white rounded-2xl shadow-lg border-2 border-gray-100 hover:border-gray-300 transition-all'
                           >
                              <div className={`${topic.color} text-white p-6 rounded-t-2xl`}>
                                 <h2 className='text-3xl font-bold'>{topic.category}</h2>
                              </div>
                              <div className='p-6 space-y-4'>
                                 {topic.items.map((item, itemIndex) => {
                                    const key = `${catIndex}-${itemIndex}`;
                                    const isChecked = checkedItems[key];
                                    const isOpen = openDropdowns[key];

                                    return (
                                       <div key={itemIndex} className='border-b border-gray-100 pb-4 last:border-0'>
                                          <div
                                             onClick={() => handleCheck(catIndex, itemIndex)}
                                             className='flex items-center gap-4 cursor-pointer group'
                                          >
                                             <div
                                                className={`w-8 h-8 rounded-full border-4 flex items-center justify-center transition-all ${
                                                   isChecked
                                                      ? 'bg-emerald-500 border-emerald-500'
                                                      : 'border-gray-300 group-hover:border-gray-500'
                                                }`}
                                             >
                                                {isChecked && <span className='text-white text-xl font-bold'>✓</span>}
                                             </div>
                                             <span
                                                className={`text-lg font-medium transition-all ${
                                                   isChecked ? 'text-gray-400 line-through' : 'text-gray-800'
                                                }`}
                                             >
                                                {item.text}
                                             </span>
                                             <button
                                                onClick={(e) => {
                                                   e.stopPropagation();
                                                   toggleDropdown(catIndex, itemIndex);
                                                }}
                                                className='ml-auto text-gray-500 hover:text-indigo-600 transition-colors'
                                             >
                                                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                             </button>
                                          </div>

                                          {isOpen && (
                                             <div className='mt-3 ml-12 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200'>
                                                <p className='font-semibold text-indigo-700 mb-2'>
                                                   Vídeos Recomendados:
                                                </p>
                                                <ul className='space-y-2'>
                                                   {item.videos.map((video, i) => (
                                                      <li key={i}>
                                                         <a
                                                            href={video}
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                            className='flex items-center gap-2 text-indigo-600 hover:text-indigo-800 hover:underline text-sm'
                                                         >
                                                            <ExternalLink size={16} />
                                                            {i === 0 ? 'Guanabara - Curso em Vídeo' : `Vídeo ${i + 1}`}
                                                         </a>
                                                      </li>
                                                   ))}
                                                </ul>
                                             </div>
                                          )}
                                       </div>
                                    );
                                 })}
                              </div>
                           </div>
                        ))}
                     </div>

                     <div className='mt-10 bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl border-2 border-amber-200'>
                        <p className='text-center text-amber-800 font-bold text-xl'>
                           Dica: Siga a ordem e pratique com exercícios após cada tópico!
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default PortugolChecklist;
