import React, { useState } from 'react';
import { Download } from 'lucide-react';

const PortugolChecklist = () => {
   const [checkedItems, setCheckedItems] = useState({});

   const topics = [
      {
         category: '1. Fundamentos Básicos',
         color: 'bg-blue-500',
         items: [
            'O que é programação?',
            'O que é algoritmo?',
            'O que é Portugol?',
            'Ambiente de desenvolvimento (IDE)',
            'Estrutura básica de um programa',
            'Comentários em código',
         ],
      },
      {
         category: '2. Variáveis e Tipos de Dados',
         color: 'bg-green-500',
         items: [
            'Conceito de variável',
            'Declaração de variáveis',
            'Tipo inteiro',
            'Tipo real',
            'Tipo caractere',
            'Tipo cadeia (string)',
            'Tipo logico (booleano)',
            'Constantes',
            'Atribuição de valores',
         ],
      },
      {
         category: '3. Entrada e Saída de Dados',
         color: 'bg-purple-500',
         items: [
            'Comando escreva()',
            'Comando leia()',
            'Formatação de saída',
            'Concatenação de texto',
            'Entrada de diferentes tipos de dados',
         ],
      },
      {
         category: '4. Operadores',
         color: 'bg-yellow-500',
         items: [
            'Operadores aritméticos (+, -, *, /, %)',
            'Operadores relacionais (>, <, >=, <=, ==, !=)',
            'Operadores lógicos (e, ou, nao)',
            'Precedência de operadores',
            'Expressões matemáticas',
         ],
      },
      {
         category: '5. Estruturas de Decisão',
         color: 'bg-red-500',
         items: [
            'Comando se (if)',
            'Comando se-senao (if-else)',
            'Se aninhado (nested if)',
            'Comando escolha-caso (switch-case)',
            'Operador ternário',
         ],
      },
      {
         category: '6. Estruturas de Repetição',
         color: 'bg-indigo-500',
         items: [
            'Conceito de laços/loops',
            'Comando para (for)',
            'Comando enquanto (while)',
            'Comando faca-enquanto (do-while)',
            'Comando pare (break)',
            'Loops aninhados',
            'Contadores e acumuladores',
         ],
      },
      {
         category: '7. Vetores (Arrays)',
         color: 'bg-pink-500',
         items: [
            'Conceito de vetor',
            'Declaração de vetores',
            'Acesso a elementos',
            'Percorrer vetores',
            'Preenchimento de vetores',
            'Busca em vetores',
            'Ordenação básica',
         ],
      },
      {
         category: '8. Matrizes',
         color: 'bg-teal-500',
         items: [
            'Conceito de matriz',
            'Declaração de matrizes',
            'Acesso a elementos',
            'Percorrer matrizes (loops aninhados)',
            'Matriz bidimensional',
            'Operações com matrizes',
         ],
      },
      {
         category: '9. Funções e Procedimentos',
         color: 'bg-orange-500',
         items: [
            'Conceito de modularização',
            'Declaração de funções',
            'Declaração de procedimentos',
            'Parâmetros',
            'Retorno de valores',
            'Escopo de variáveis',
            'Funções com vetores',
         ],
      },
      {
         category: '10. Boas Práticas',
         color: 'bg-cyan-500',
         items: [
            'Identação de código',
            'Nomes significativos',
            'Comentários úteis',
            'Organização do código',
            'Testes e depuração',
            'Resolução de problemas',
         ],
      },
   ];

   const handleCheck = (categoryIndex, itemIndex) => {
      const key = `${categoryIndex}-${itemIndex}`;
      setCheckedItems((prev) => ({
         ...prev,
         [key]: !prev[key],
      }));
   };

   const generatePDF = () => {
      const printWindow = window.open('', '_blank');
      const checkedState = checkedItems;

      printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Checklist de Ensino - Portugol</title>
          <style>
            @page {
              size: A4;
              margin: 15mm;
            }
            
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              margin: 0;
              padding: 20px;
              background: #f9fafb;
            }
            
            .header {
              text-align: center;
              margin-bottom: 30px;
              padding: 30px;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              border-radius: 15px;
              box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            }
            
            .header h1 {
              margin: 0 0 10px 0;
              font-size: 42px;
              font-weight: 800;
              text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
            }
            
            .header p {
              margin: 0;
              font-size: 18px;
              opacity: 0.95;
            }
            
            .category {
              margin-bottom: 25px;
              page-break-inside: avoid;
              background: white;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            }
            
            .category-header {
              padding: 18px 25px;
              color: white;
              font-size: 22px;
              font-weight: 700;
              letter-spacing: 0.5px;
            }
            
            .bg-blue { background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); }
            .bg-green { background: linear-gradient(135deg, #10b981 0%, #059669 100%); }
            .bg-purple { background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); }
            .bg-yellow { background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); }
            .bg-red { background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); }
            .bg-indigo { background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); }
            .bg-pink { background: linear-gradient(135deg, #ec4899 0%, #db2777 100%); }
            .bg-teal { background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%); }
            .bg-orange { background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); }
            .bg-cyan { background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); }
            
            .items {
              padding: 20px 25px;
            }
            
            .item {
              display: flex;
              align-items: center;
              padding: 12px 0;
              border-bottom: 1px solid #f0f0f0;
              font-size: 16px;
            }
            
            .item:last-child {
              border-bottom: none;
            }
            
            .checkbox {
              width: 24px;
              height: 24px;
              border: 3px solid #d1d5db;
              border-radius: 6px;
              margin-right: 15px;
              flex-shrink: 0;
              display: inline-block;
              background: white;
            }
            
            .checkbox.checked {
              background: linear-gradient(135deg, #10b981 0%, #059669 100%);
              border-color: #059669;
              position: relative;
            }
            
            .checkbox.checked::after {
              content: '✓';
              position: absolute;
              color: white;
              font-size: 18px;
              font-weight: bold;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
            
            .item-text {
              color: #374151;
              font-weight: 500;
            }
            
            .item.checked .item-text {
              color: #9ca3af;
              text-decoration: line-through;
            }
            
            .footer {
              margin-top: 40px;
              text-align: center;
              color: #6b7280;
              font-size: 14px;
              padding: 20px;
              background: white;
              border-radius: 12px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            }
            
            @media print {
              body {
                background: white;
              }
              .category {
                box-shadow: none;
                border: 1px solid #e5e7eb;
              }
              .header {
                box-shadow: none;
              }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>📚 Checklist de Ensino</h1>
            <p>Programação em Portugol - Do Zero ao Avançado</p>
          </div>
          
          ${topics
             .map(
                (topic, catIndex) => `
            <div class="category">
              <div class="category-header ${topic.color.replace('bg-', 'bg-').replace('-500', '')}"">
                ${topic.category}
              </div>
              <div class="items">
                ${topic.items
                   .map((item, itemIndex) => {
                      const key = `${catIndex}-${itemIndex}`;
                      const isChecked = checkedState[key];
                      return `
                    <div class="item ${isChecked ? 'checked' : ''}">
                      <span class="checkbox ${isChecked ? 'checked' : ''}"></span>
                      <span class="item-text">${item}</span>
                    </div>
                  `;
                   })
                   .join('')}
              </div>
            </div>
          `
             )
             .join('')}
          
          <div class="footer">
            <p><strong>Dica:</strong> Siga a ordem dos tópicos para um aprendizado progressivo e eficaz!</p>
            <p>Marque cada item conforme ensinar e pratique bastante com exercícios! 💪</p>
          </div>
        </body>
      </html>
    `);

      printWindow.document.close();
      setTimeout(() => {
         printWindow.print();
      }, 500);
   };

   const totalItems = topics.reduce((sum, topic) => sum + topic.items.length, 0);
   const checkedCount = Object.values(checkedItems).filter(Boolean).length;
   const progress = Math.round((checkedCount / totalItems) * 100);

   return (
      <div className='min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6'>
         <div className='max-w-4xl mx-auto'>
            <div className='bg-white rounded-2xl shadow-2xl overflow-hidden mb-6'>
               <div className='bg-gradient-to-r from-purple-600 to-indigo-600 p-8 text-white'>
                  <h1 className='text-4xl font-bold mb-3'>📚 Checklist de Ensino - Portugol</h1>
                  <p className='text-lg opacity-95'>Guia completo para ensinar programação do zero</p>
                  <div className='mt-4 bg-white/20 rounded-full h-3 overflow-hidden'>
                     <div
                        className='bg-white h-full transition-all duration-500 rounded-full'
                        style={{ width: `${progress}%` }}
                     ></div>
                  </div>
                  <p className='text-sm mt-2 opacity-90'>
                     {checkedCount} de {totalItems} tópicos concluídos ({progress}%)
                  </p>
               </div>

               <div className='p-8'>
                  <button
                     onClick={generatePDF}
                     className='w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 mb-6'
                  >
                     <Download size={24} />
                     <span className='text-lg'>Gerar PDF para Impressão</span>
                  </button>

                  <div className='space-y-6'>
                     {topics.map((topic, catIndex) => (
                        <div
                           key={catIndex}
                           className='bg-white rounded-xl shadow-md overflow-hidden border-2 border-gray-100 hover:border-gray-200 transition-all'
                        >
                           <div className={`${topic.color} text-white p-5`}>
                              <h2 className='text-2xl font-bold'>{topic.category}</h2>
                           </div>
                           <div className='p-5'>
                              {topic.items.map((item, itemIndex) => {
                                 const key = `${catIndex}-${itemIndex}`;
                                 const isChecked = checkedItems[key];
                                 return (
                                    <div
                                       key={itemIndex}
                                       onClick={() => handleCheck(catIndex, itemIndex)}
                                       className='flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-all group'
                                    >
                                       <div
                                          className={`w-6 h-6 rounded-md border-3 mr-4 flex items-center justify-center transition-all ${
                                             isChecked
                                                ? 'bg-green-500 border-green-500'
                                                : 'border-gray-300 group-hover:border-gray-400'
                                          }`}
                                       >
                                          {isChecked && <span className='text-white text-lg font-bold'>✓</span>}
                                       </div>
                                       <span
                                          className={`text-lg transition-all ${
                                             isChecked ? 'text-gray-400 line-through' : 'text-gray-700 font-medium'
                                          }`}
                                       >
                                          {item}
                                       </span>
                                    </div>
                                 );
                              })}
                           </div>
                        </div>
                     ))}
                  </div>

                  <div className='mt-8 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-2 border-blue-200'>
                     <p className='text-gray-700 text-center font-medium text-lg'>
                        💡 <strong>Dica:</strong> Clique nos itens para marcar conforme ensinar cada tópico!
                     </p>
                     <p className='text-gray-600 text-center mt-2'>
                        A ordem dos tópicos foi organizada pedagogicamente para facilitar o aprendizado progressivo.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default PortugolChecklist;
