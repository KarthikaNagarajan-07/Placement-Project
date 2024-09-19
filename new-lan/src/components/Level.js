// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import './Level.css';

// const Level = () => {
//   const { levelId } = useParams();
//   const navigate = useNavigate();
//   const [score, setScore] = useState(0);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [showScore, setShowScore] = useState(false);
//   const [allLevelsCompleted, setAllLevelsCompleted] = useState(false);
//   const [timer, setTimer] = useState(600); // 10 minutes in seconds
//   const [timeout, setTimeout] = useState(false);

//   const levelContent = {
//     1: [
//             {
//               questionText: '1.How many keywords are there in C Language ?',
//               answerOptions: [
//                 { answerText: '30', isCorrect: false },
//                 { answerText: '32', isCorrect: true },
//                 { answerText: '22', isCorrect: false },
//                 { answerText: '36', isCorrect: false },
//               ],
//             },
//             {
//               questionText: '2.Which of the following cannot be a variable name in C?',
//               answerOptions: [
//                 { answerText: 'volatile', isCorrect: true },
//                 { answerText: 'area', isCorrect: false },
//                 { answerText: 'mega', isCorrect: false },
//                 { answerText: 'number', isCorrect: false },
//               ],
//             },
//             {
//               questionText: '3.Identify wrong C keyword below',
//               answerOptions: [
//                 { answerText: 'auto, double, int, struct', isCorrect: false},
//                 { answerText: 'break, else, long, switch', isCorrect: false},
//                 { answerText: 'case, enum, register, typedef', isCorrect: false},
//                 { answerText: 'char, extern, intern, return', isCorrect: true},
//               ]
//             },
//             {
//               questionText: '4.What is the output of this program?#include <stdio.h>int main() {int x = 10;float x = 10.0;printf("%d",x);  return 0;}',
//               answerOptions: [
//                 { answerText: '10.1', isCorrect: false},
//                 { answerText: 'Compiler Error', isCorrect: false},
//                 { answerText: '10', isCorrect: false},
//                 { answerText: '10.2', isCorrect: false},
//               ]
//             },
//             {
//               questionText: '5.enum types are processed by _________',
//               answerOptions: [
//                 { answerText: 'Compiler', isCorrect: true},
//                 { answerText: 'Preprocessor', isCorrect: false},
//                 { answerText: 'Linker', isCorrect: false},
//                 { answerText: 'Assembler', isCorrect: false},
//               ]
//             },
//             {
//               questionText: '6.Which of the following statement is false?',
//               answerOptions: [
//                 { answerText: 'Constant variables need not be defined as they are declared and can be defined later', isCorrect: true},
//                 { answerText: 'Global constant variables are initialized to zero', isCorrect: false},
//                 { answerText: 'const keyword is used to define constant values', isCorrect: false},
//                 { answerText: 'You cannot reassign a value to a constant variable', isCorrect: false},
//               ]
//             },
//             {
//               questionText: '7.The constant “Hello” is a:',
//               answerOptions: [
//                 { answerText: 'Character Constant', isCorrect: false},
//                 { answerText: 'String Constant', isCorrect: true},
//                 { answerText: 'Decimal Constant', isCorrect: false},
//                 { answerText: 'Octal Constant', isCorrect: false},
//               ]
//             },
//             {
//               questionText: '8.Which type of result will be returned after performing an arithmetic operation between an integer and an integer?',
//               answerOptions: [
//                 { answerText: 'Character', isCorrect: false},
//                 { answerText: 'Integer', isCorrect: false},
//                 { answerText: 'Real', isCorrect: false},
//                 { answerText: 'Null', isCorrect: false},
//               ]
//             },
//             {
//               questionText: '9.Variable names beginning with underscore is not encouraged. Why?',
//               answerOptions: [
//                 { answerText: ' It is not standard form', isCorrect: false},
//                 { answerText: 'To avoid conflicts since assemblers and loaders use such names', isCorrect: false},
//                 { answerText: 'To avoid conflicts since library routines use such names', isCorrect: true},
//                 { answerText: 'To avoid conflicts with environment variables of an operating system', isCorrect: false},
//               ]
//             },
//             {
//               questionText: '10.What will be result of following (5/2) in C programing language?',
//               answerOptions: [
//                 { answerText: '2.5', isCorrect: false},
//                 { answerText: '2', isCorrect: true},
//                 { answerText: '3', isCorrect: false},
//                 { answerText: '4', isCorrect: false},
//               ]
//             },
//             // Add more questions for level 1
//           ],
//           2: [
//             {
//               questionText: '1.What is the default return type of main() in C?',
//               answerOptions: [
//                 { answerText: 'int', isCorrect: true },
//                 { answerText: 'void', isCorrect: false },
//                 { answerText: 'float', isCorrect: false },
//                 { answerText: 'double', isCorrect: false },
//               ],
//             },
//             {
//               questionText: '2.Which operator is used to access a structure member?',
//               answerOptions: [
//                 { answerText: '.', isCorrect: true },
//                 { answerText: '->', isCorrect: false },
//                 { answerText: '::', isCorrect: false },
//                 { answerText: '@', isCorrect: false },
//               ],
//             },
//             {
//               questionText: '3.What is the range of signed char data type in C Programming?',
//               answerOptions: [
//                 { answerText: '0 to 255', isCorrect: false },
//                 { answerText: '-128 to +127', isCorrect: true },
//                 { answerText: '-32768 to +32767', isCorrect: false },
//                 { answerText: '0 to 65535', isCorrect: false },
//               ],
//             },
//             {
//               questionText: '4.How many byte(s) reserved by signed char in C programming?',
//               answerOptions: [
//                 { answerText: 'int', isCorrect: true },
//                 { answerText: 'void', isCorrect: false },
//                 { answerText: 'float', isCorrect: false },
//                 { answerText: 'double', isCorrect: false },
//               ],
//             },
//             {
//               questionText: '5.What is the default return type of main() in C?',
//               answerOptions: [
//                 { answerText: '1 Byte', isCorrect: true },
//                 { answerText: '2 Bytes', isCorrect: false },
//                 { answerText: '4 Bytes', isCorrect: false },
//                 { answerText: '8 Bytes', isCorrect: false },
//               ],
//             },
//             {
//               questionText: '6.Which is the format modifier used for signed char in C programming?',
//               answerOptions: [
//                 { answerText: 'int', isCorrect: true },
//                 { answerText: 'void', isCorrect: false },
//                 { answerText: 'float', isCorrect: false },
//                 { answerText: 'double', isCorrect: false },
//               ],
//             },
//             {
//               questionText: '7.Which is the format modifier used for signed char in C programming?',
//               answerOptions: [
//                 { answerText: '%d', isCorrect: false },
//                 { answerText: '%s', isCorrect: false },
//                 { answerText: '%c', isCorrect: true },
//                 { answerText: '%u', isCorrect: false },
//               ],
//             },
//             {
//               questionText: '8.How many byte(s) reserved by unsigned char in C programming?',
//               answerOptions: [
//                 { answerText: '1 Byte', isCorrect: true },
//                 { answerText: '2 Bytes', isCorrect: false },
//                 { answerText: '4 Bytes', isCorrect: false },
//                 { answerText: '8 Bytes', isCorrect: false },
//               ],
//             },
//             {
//               questionText: '9.How many byte(s) reserved by double in C programming?',
//               answerOptions: [
//                 { answerText: '2 Bytes', isCorrect: false },
//                 { answerText: '4 Bytes', isCorrect: false },
//                 { answerText: '8 Bytes', isCorrect: true },
//                 { answerText: '10 Bytes', isCorrect: false },
//               ],
//             },
//             {
//               questionText: '10.How many byte(s) reserved by long double in C programming?',
//               answerOptions: [
//                 { answerText: '2 Bytes', isCorrect: false },
//                 { answerText: '4 Bytes', isCorrect: false },
//                 { answerText: '8 Bytes', isCorrect: false },
//                 { answerText: '10 Bytes', isCorrect: true },
//               ],
//             },
      
//             // Add more questions for level 2
//           ],
//           3: [
//             {
//               questionText: '1.Which keyword is used to prevent any changes in the variable’s value?',
//               answerOptions: [
//                 { answerText: 'const', isCorrect: true },
//                 { answerText: 'volatile', isCorrect: false },
//                 { answerText: 'static', isCorrect: false },
//                 { answerText: 'register', isCorrect: false },
//               ],
//             },
//             {
//               questionText: '2.Which function is used to find the first occurrence of a character in a string?',
//               answerOptions: [
//                 { answerText: 'strchr()', isCorrect: true },
//                 { answerText: 'strstr()', isCorrect: false },
//                 { answerText: 'strcpy()', isCorrect: false },
//                 { answerText: 'strcat()', isCorrect: false },
//               ],
//             },
//             {
//               questionText: '3.Loops in C Language are implemented using?',
//               answerOptions: [
//                 { answerText: 'While', isCorrect: false },
//                 { answerText: 'For', isCorrect: false },
//                 { answerText: 'Do While', isCorrect: false },
//                 { answerText: 'All of the above', isCorrect: true },
//               ],
//             },
//             {
//               questionText: '4.Which loop is faster in C Language, for, while or Do While?',
//               answerOptions: [
//                 { answerText: 'While', isCorrect: false },
//                 { answerText: 'For', isCorrect: false },
//                 { answerText: 'Do While', isCorrect: false },
//                 { answerText: 'Depends upon the compiler and hardware', isCorrect: true },
//               ],
//             },
//             {
//               questionText: '5.Which among the following is a unconditional control structure.',
//               answerOptions: [
//                 { answerText: 'goto', isCorrect: true },
//                 { answerText: 'For', isCorrect: false },
//                 { answerText: 'Do While', isCorrect: false },
//                 { answerText: 'if-els', isCorrect: false },
//               ],
//             },
//             {
//               questionText: '6.What is the default return type if it is not specified in function definition?',
//               answerOptions: [
//                 { answerText: 'void', isCorrect: false },
//                 { answerText: 'int', isCorrect: true },
//                 { answerText: 'float', isCorrect: false },
//                 { answerText: 'None of these', isCorrect: false },
//               ],
//             },
//             {
//               questionText: '7.Which is not a correct function declaration?',
//               answerOptions: [
//                 { answerText: 'int funct(char x, char y);', isCorrect: false },
//                 { answerText: 'double funct(x)', isCorrect: true },
//                 { answerText: 'void funct();', isCorrect: false },
//                 { answerText: 'char x();', isCorrect: false },
//               ],
//             },
//             {
//               questionText: '8.What is the return type of the function with declaration:int func(char x, float v, double t);',
//               answerOptions: [
//                 { answerText: 'int', isCorrect: true },
//                 { answerText: 'float', isCorrect: false },
//                 { answerText: 'char', isCorrect: false },
//                 { answerText: 'double', isCorrect: false },
//               ],
//             },
//             {
//               questionText: '9.Arguments received by a function in C language are called ___',
//               answerOptions: [
//                 { answerText: 'Definite arguments', isCorrect: false },
//                 { answerText: 'Actual arguments', isCorrect: false },
//                 { answerText: 'Formal arguments', isCorrect: true },
//                 { answerText: 'Ideal arguments', isCorrect: false },
//               ],
//             },
//             {
//               questionText: '10.What is the default return value if it is not specified in function definition?',
//               answerOptions: [
//                 { answerText: '0', isCorrect: false },
//                 { answerText: '-1', isCorrect: false },
//                 { answerText: '1', isCorrect: true },
//                 { answerText: 'None of these', isCorrect: false },
//               ],
//             },
            
//             // Add more questions for level 3
//           ],
//     // ... (your level content object as before)
//   };

//   useEffect(() => {
//     const unlockedLevels = JSON.parse(localStorage.getItem('unlockedLevels'));
//     const completedLevels = JSON.parse(localStorage.getItem('completedLevels')) || {};

//     if (!unlockedLevels) {
//       localStorage.setItem('unlockedLevels', JSON.stringify({ 1: true }));
//     }

//     if (!unlockedLevels[levelId]) {
//       if (parseInt(levelId) > 1) {
//         navigate('/locked');
//       }
//     }

//     if (Object.keys(completedLevels).length === 3) {
//       setAllLevelsCompleted(true);
//     }

//     // Timer countdown
//     const timerInterval = setInterval(() => {
//       setTimer(prevTimer => {
//         if (prevTimer <= 1) {
//           clearInterval(timerInterval);
//           setTimeout(true);
//           return 0;
//         }
//         return prevTimer - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timerInterval);
//   }, [levelId, navigate]);

//   const handleAnswerOptionClick = (isCorrect) => {
//     if (isCorrect) {
//       setScore(score + 1);
//     }

//     const nextQuestion = currentQuestion + 1;
//     const currentLevelContent = levelContent[levelId];

//     if (!currentLevelContent) {
//       console.error('Level content not found for levelId:', levelId);
//       return;
//     }

//     if (nextQuestion < currentLevelContent.length) {
//       setCurrentQuestion(nextQuestion);
//     } else {
//       const scores = JSON.parse(localStorage.getItem('scores')) || {};
//       scores[levelId] = score;
//       localStorage.setItem('scores', JSON.stringify(scores));

//       const nextLevel = parseInt(levelId) + 1;
//       const unlockedLevels = JSON.parse(localStorage.getItem('unlockedLevels')) || {};
//       const completedLevels = JSON.parse(localStorage.getItem('completedLevels')) || {};

//       unlockedLevels[nextLevel] = true;
//       localStorage.setItem('unlockedLevels', JSON.stringify(unlockedLevels));

//       completedLevels[levelId] = true;
//       localStorage.setItem('completedLevels', JSON.stringify(completedLevels));

//       setShowScore(true);

//       setTimeout(() => {
//         if (nextLevel <= 3) {
//           navigate(`/level/${nextLevel}`);
//         } else {
//           navigate('/completed');
//         }
//       }, 2000);
//     }
//   };

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
//   };

//   const currentLevelContent = levelContent[levelId];
//   const currentQuestionData = currentLevelContent?.[currentQuestion] || {};

//   return (
//     <div className="level-page">
//       <h1>Level {levelId}</h1>
//       <div className="timer">
//         {timeout ? (
//           <div className="timeout-message">Time's up!</div>
//         ) : (
//           <div>Time remaining: {formatTime(timer)}</div>
//         )}
//       </div>
//       {showScore ? (
//         <div className="score-section">
//           You scored {score} out of {currentLevelContent?.length || 0}
//           {/* {allLevelsCompleted && <div className="badge">🎉 Congratulations! You've completed all levels!</div>} */}
//         </div>
//       ) : (
//         !timeout && currentQuestionData.questionText && (
//           <div className="question-block">
//             <h3>{currentQuestionData.questionText}</h3>
//             <ul>
//               {currentQuestionData.answerOptions?.map((option, index) => (
//                 <li key={index}>
//                   <button onClick={() => handleAnswerOptionClick(option.isCorrect)}>
//                     {option.answerText}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )
//       )}
//     </div>
//   );
// };

// export default Level;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Level.css';

const Level = () => {
  const { levelId } = useParams();
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [allLevelsCompleted, setAllLevelsCompleted] = useState(false);
  const [timer, setTimer] = useState(300); // 5 minutes in seconds
  const [isTimeOut, setIsTimeOut] = useState(false);

  const levelContent = {
    1: [
                  {
                    questionText: '1.How many keywords are there in C Language ?',
                    answerOptions: [
                      { answerText: '30', isCorrect: false },
                      { answerText: '32', isCorrect: true },
                      { answerText: '22', isCorrect: false },
                      { answerText: '36', isCorrect: false },
                    ],
                  },
                  {
                    questionText: '2.Which of the following cannot be a variable name in C?',
                    answerOptions: [
                      { answerText: 'volatile', isCorrect: true },
                      { answerText: 'area', isCorrect: false },
                      { answerText: 'mega', isCorrect: false },
                      { answerText: 'number', isCorrect: false },
                    ],
                  },
                  {
                    questionText: '3.Identify wrong C keyword below',
                    answerOptions: [
                      { answerText: 'auto, double, int, struct', isCorrect: false},
                      { answerText: 'break, else, long, switch', isCorrect: false},
                      { answerText: 'case, enum, register, typedef', isCorrect: false},
                      { answerText: 'char, extern, intern, return', isCorrect: true},
                    ]
                  },
                  {
                    questionText: '4.What is the output of this program?#include <stdio.h>int main() {int x = 10;float x = 10.0;printf("%d",x);  return 0;}',
                    answerOptions: [
                      { answerText: '10.1', isCorrect: false},
                      { answerText: 'Compiler Error', isCorrect: false},
                      { answerText: '10', isCorrect: false},
                      { answerText: '10.2', isCorrect: false},
                    ]
                  },
                  {
                    questionText: '5.enum types are processed by _________',
                    answerOptions: [
                      { answerText: 'Compiler', isCorrect: true},
                      { answerText: 'Preprocessor', isCorrect: false},
                      { answerText: 'Linker', isCorrect: false},
                      { answerText: 'Assembler', isCorrect: false},
                    ]
                  },
                  {
                    questionText: '6.Which of the following statement is false?',
                    answerOptions: [
                      { answerText: 'Constant variables need not be defined as they are declared and can be defined later', isCorrect: true},
                      { answerText: 'Global constant variables are initialized to zero', isCorrect: false},
                      { answerText: 'const keyword is used to define constant values', isCorrect: false},
                      { answerText: 'You cannot reassign a value to a constant variable', isCorrect: false},
                    ]
                  },
                  {
                    questionText: '7.The constant “Hello” is a:',
                    answerOptions: [
                      { answerText: 'Character Constant', isCorrect: false},
                      { answerText: 'String Constant', isCorrect: true},
                      { answerText: 'Decimal Constant', isCorrect: false},
                      { answerText: 'Octal Constant', isCorrect: false},
                    ]
                  },
                  {
                    questionText: '8.Which type of result will be returned after performing an arithmetic operation between an integer and an integer?',
                    answerOptions: [
                      { answerText: 'Character', isCorrect: false},
                      { answerText: 'Integer', isCorrect: false},
                      { answerText: 'Real', isCorrect: false},
                      { answerText: 'Null', isCorrect: false},
                    ]
                  },
                  {
                    questionText: '9.Variable names beginning with underscore is not encouraged. Why?',
                    answerOptions: [
                      { answerText: ' It is not standard form', isCorrect: false},
                      { answerText: 'To avoid conflicts since assemblers and loaders use such names', isCorrect: false},
                      { answerText: 'To avoid conflicts since library routines use such names', isCorrect: true},
                      { answerText: 'To avoid conflicts with environment variables of an operating system', isCorrect: false},
                    ]
                  },
                  {
                    questionText: '10.What will be result of following (5/2) in C programing language?',
                    answerOptions: [
                      { answerText: '2.5', isCorrect: false},
                      { answerText: '2', isCorrect: true},
                      { answerText: '3', isCorrect: false},
                      { answerText: '4', isCorrect: false},
                    ]
                  },
                  // Add more questions for level 1
                ],
                2: [
                  {
                    questionText: '1.What is the default return type of main() in C?',
                    answerOptions: [
                      { answerText: 'int', isCorrect: true },
                      { answerText: 'void', isCorrect: false },
                      { answerText: 'float', isCorrect: false },
                      { answerText: 'double', isCorrect: false },
                    ],
                  },
                  {
                    questionText: '2.Which operator is used to access a structure member?',
                    answerOptions: [
                      { answerText: '.', isCorrect: true },
                      { answerText: '->', isCorrect: false },
                      { answerText: '::', isCorrect: false },
                      { answerText: '@', isCorrect: false },
                    ],
                  },
                  {
                    questionText: '3.What is the range of signed char data type in C Programming?',
                    answerOptions: [
                      { answerText: '0 to 255', isCorrect: false },
                      { answerText: '-128 to +127', isCorrect: true },
                      { answerText: '-32768 to +32767', isCorrect: false },
                      { answerText: '0 to 65535', isCorrect: false },
                    ],
                  },
                  {
                    questionText: '4.How many byte(s) reserved by signed char in C programming?',
                    answerOptions: [
                      { answerText: 'int', isCorrect: true },
                      { answerText: 'void', isCorrect: false },
                      { answerText: 'float', isCorrect: false },
                      { answerText: 'double', isCorrect: false },
                    ],
                  },
                  {
                    questionText: '5.What is the default return type of main() in C?',
                    answerOptions: [
                      { answerText: '1 Byte', isCorrect: true },
                      { answerText: '2 Bytes', isCorrect: false },
                      { answerText: '4 Bytes', isCorrect: false },
                      { answerText: '8 Bytes', isCorrect: false },
                    ],
                  },
                  {
                    questionText: '6.Which is the format modifier used for signed char in C programming?',
                    answerOptions: [
                      { answerText: 'int', isCorrect: true },
                      { answerText: 'void', isCorrect: false },
                      { answerText: 'float', isCorrect: false },
                      { answerText: 'double', isCorrect: false },
                    ],
                  },
                  {
                    questionText: '7.Which is the format modifier used for signed char in C programming?',
                    answerOptions: [
                      { answerText: '%d', isCorrect: false },
                      { answerText: '%s', isCorrect: false },
                      { answerText: '%c', isCorrect: true },
                      { answerText: '%u', isCorrect: false },
                    ],
                  },
                  {
                    questionText: '8.How many byte(s) reserved by unsigned char in C programming?',
                    answerOptions: [
                      { answerText: '1 Byte', isCorrect: true },
                      { answerText: '2 Bytes', isCorrect: false },
                      { answerText: '4 Bytes', isCorrect: false },
                      { answerText: '8 Bytes', isCorrect: false },
                    ],
                  },
                  {
                    questionText: '9.How many byte(s) reserved by double in C programming?',
                    answerOptions: [
                      { answerText: '2 Bytes', isCorrect: false },
                      { answerText: '4 Bytes', isCorrect: false },
                      { answerText: '8 Bytes', isCorrect: true },
                      { answerText: '10 Bytes', isCorrect: false },
                    ],
                  },
                  {
                    questionText: '10.How many byte(s) reserved by long double in C programming?',
                    answerOptions: [
                      { answerText: '2 Bytes', isCorrect: false },
                      { answerText: '4 Bytes', isCorrect: false },
                      { answerText: '8 Bytes', isCorrect: false },
                      { answerText: '10 Bytes', isCorrect: true },
                    ],
                  },
            
                  // Add more questions for level 2
                ],
                3: [
                  {
                    questionText: '1.Which keyword is used to prevent any changes in the variable’s value?',
                    answerOptions: [
                      { answerText: 'const', isCorrect: true },
                      { answerText: 'volatile', isCorrect: false },
                      { answerText: 'static', isCorrect: false },
                      { answerText: 'register', isCorrect: false },
                    ],
                  },
                  {
                    questionText: '2.Which function is used to find the first occurrence of a character in a string?',
                    answerOptions: [
                      { answerText: 'strchr()', isCorrect: true },
                      { answerText: 'strstr()', isCorrect: false },
                      { answerText: 'strcpy()', isCorrect: false },
                      { answerText: 'strcat()', isCorrect: false },
                    ],
                  },
                  {
                    questionText: '3.Loops in C Language are implemented using?',
                    answerOptions: [
                      { answerText: 'While', isCorrect: false },
                      { answerText: 'For', isCorrect: false },
                      { answerText: 'Do While', isCorrect: false },
                      { answerText: 'All of the above', isCorrect: true },
                    ],
                  },
                  {
                    questionText: '4.Which loop is faster in C Language, for, while or Do While?',
                    answerOptions: [
                      { answerText: 'While', isCorrect: false },
                      { answerText: 'For', isCorrect: false },
                      { answerText: 'Do While', isCorrect: false },
                      { answerText: 'Depends upon the compiler and hardware', isCorrect: true },
                    ],
                  },
                  {
                    questionText: '5.Which among the following is a unconditional control structure.',
                    answerOptions: [
                      { answerText: 'goto', isCorrect: true },
                      { answerText: 'For', isCorrect: false },
                      { answerText: 'Do While', isCorrect: false },
                      { answerText: 'if-els', isCorrect: false },
                    ],
                  },
                  {
                    questionText: '6.What is the default return type if it is not specified in function definition?',
                    answerOptions: [
                      { answerText: 'void', isCorrect: false },
                      { answerText: 'int', isCorrect: true },
                      { answerText: 'float', isCorrect: false },
                      { answerText: 'None of these', isCorrect: false },
                    ],
                  },
                  {
                    questionText: '7.Which is not a correct function declaration?',
                    answerOptions: [
                      { answerText: 'int funct(char x, char y);', isCorrect: false },
                      { answerText: 'double funct(x)', isCorrect: true },
                      { answerText: 'void funct();', isCorrect: false },
                      { answerText: 'char x();', isCorrect: false },
                    ],
                  },
                  {
                    questionText: '8.What is the return type of the function with declaration:int func(char x, float v, double t);',
                    answerOptions: [
                      { answerText: 'int', isCorrect: true },
                      { answerText: 'float', isCorrect: false },
                      { answerText: 'char', isCorrect: false },
                      { answerText: 'double', isCorrect: false },
                    ],
                  },
                  {
                    questionText: '9.Arguments received by a function in C language are called ___',
                    answerOptions: [
                      { answerText: 'Definite arguments', isCorrect: false },
                      { answerText: 'Actual arguments', isCorrect: false },
                      { answerText: 'Formal arguments', isCorrect: true },
                      { answerText: 'Ideal arguments', isCorrect: false },
                    ],
                  },
                  {
                    questionText: '10.What is the default return value if it is not specified in function definition?',
                    answerOptions: [
                      { answerText: '0', isCorrect: false },
                      { answerText: '-1', isCorrect: false },
                      { answerText: '1', isCorrect: true },
                      { answerText: 'None of these', isCorrect: false },
                    ],
                  },
                  
                  // Add more questions for level 3
                ],
  };

  useEffect(() => {
    // Retrieve and initialize unlocked levels and completed levels
    const unlockedLevels = JSON.parse(localStorage.getItem('unlockedLevels')) || {};
    const completedLevels = JSON.parse(localStorage.getItem('completedLevels')) || {};

    if (!unlockedLevels[levelId]) {
      if (parseInt(levelId) > 1) {
        navigate('/locked');
      }
    }

    // Check if all levels are completed
    if (Object.keys(completedLevels).length === 3) { // Adjust if you have more levels
      setAllLevelsCompleted(true);
    }

    // Start the timer
    const timerInterval = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(timerInterval);
          setIsTimeOut(true);
          handleTimeOut();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerInterval); // Cleanup timer on unmount
  }, [levelId, navigate]);

  const handleTimeOut = () => {
    // Save score for current level in localStorage
    const scores = JSON.parse(localStorage.getItem('scores')) || {};
    scores[levelId] = score;
    localStorage.setItem('scores', JSON.stringify(scores));

    // Level completed, unlock next level and update completed levels
    const nextLevel = parseInt(levelId) + 1;
    const unlockedLevels = JSON.parse(localStorage.getItem('unlockedLevels')) || {};
    const completedLevels = JSON.parse(localStorage.getItem('completedLevels')) || {};

    unlockedLevels[nextLevel] = true;
    localStorage.setItem('unlockedLevels', JSON.stringify(unlockedLevels));

    completedLevels[levelId] = true;
    localStorage.setItem('completedLevels', JSON.stringify(completedLevels));

    setShowScore(true);

    // Navigate to the next level after showing the score
    setTimeout(() => {
      if (nextLevel <= 3) { // Adjust if you have more levels
        navigate(`/level/${nextLevel}`);
      } else {
        // All levels completed
        navigate('/completed');
      }
    }, 2000); // Adjust the delay as needed
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isTimeOut) return; // Ignore clicks if time is out

    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < (levelContent[levelId] || []).length) {
      setCurrentQuestion(nextQuestion);
    } else {
      handleTimeOut();
    }
  };

  const currentLevelQuestions = levelContent[levelId] || [];

  return (
    <div className="level-page">
      <h1>Level {levelId}</h1>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {currentLevelQuestions.length}
          {/* {allLevelsCompleted && <div className="badge">🎉 Congratulations! You've completed all levels!</div>} */}
        </div>
      ) : isTimeOut ? (
        <div className="timeout-section">
          Time's up! You scored {score} out of {currentLevelQuestions.length}
        </div>
      ) : (
        <div className="question-block">
          {currentLevelQuestions.length > 0 ? (
            <>
              <h3>{currentLevelQuestions[currentQuestion]?.questionText}</h3>
              <ul>
                {currentLevelQuestions[currentQuestion]?.answerOptions.map((option, index) => (
                  <li key={index}>
                    <button onClick={() => handleAnswerOptionClick(option.isCorrect)}>
                      {option.answerText}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="timer">
                Time Remaining: {Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}
              </div>
            </>
          ) : (
            <p>Loading questions...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Level;

