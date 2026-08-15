// A0 - Absolute Beginner / Pre-A1
// The very basics: alphabet, numbers, pronouns, be-verb, basic actions

export const A0_LESSONS = [
  {
    id: 1, level: 'A0',
    title: 'English Alphabet',
    subtitle: 'אלף-בית אנגלי',
    keys: ['A-B-C-D-E-F-G', 'H-I-J-K-L-M-N', 'O-P-Q-R-S-T', 'U-V-W-X-Y-Z'],
    vocab: [
      { en: 'A', he: 'אֵיי' },
      { en: 'B', he: 'בִּי' },
      { en: 'C', he: 'סִי' },
      { en: 'D', he: 'דִּי' },
      { en: 'E', he: 'אִי' },
      { en: 'F', he: 'אֶף' },
      { en: 'G', he: 'גִ' },
      { en: 'H', he: 'אֵייצ\'ל' },
      { en: 'I', he: 'אַיי' },
      { en: 'J', he: 'גֵ' }
    ],
    dialogue: `Teacher: Let's say the ABC!\nClass: A-B-C-D-E-F-G... H-I-J-K-L-M-N...\nO-P-Q... R-S-T... U-V-W... X-Y-Z!`,
    practice: `You are my English teacher for absolute beginner (A0). Teach me the English alphabet slowly. Say one letter, I repeat it. Start from A. If I'm wrong, correct me gently.`
  },
  {
    id: 2, level: 'A0',
    title: 'Numbers 0-10',
    subtitle: 'מספרים 0 עד 10',
    keys: ['One, two, three', 'Four, five, six', 'Seven, eight, nine', 'Ten and zero'],
    vocab: [
      { en: 'Zero', he: 'אפס' },
      { en: 'One', he: 'אחת' },
      { en: 'Two', he: 'שתיים' },
      { en: 'Three', he: 'שלוש' },
      { en: 'Four', he: 'ארבע' },
      { en: 'Five', he: 'חמש' },
      { en: 'Six', he: 'שש' },
      { en: 'Seven', he: 'שבע' },
      { en: 'Eight', he: 'שמונה' },
      { en: 'Nine', he: 'תשע' }
    ],
    dialogue: `Teacher: Count from one to five!\nStudent: One, two, three, four, five!\nTeacher: Now from six to ten!\nStudent: Six, seven, eight, nine, ten!`,
    practice: `You are my English teacher for absolute beginner (A0). Teach me numbers 0-10. Say a number, I repeat it. Then ask me random numbers and I answer. Start slow.`
  },
  {
    id: 3, level: 'A0',
    title: 'Pronouns - I, You, He, She',
    subtitle: 'כינויי גוף בסיסיים',
    keys: ['I = אני', 'You = את/ה', 'He = הוא', 'She = היא', 'We = אנחנו'],
    vocab: [
      { en: 'I', he: 'אני' },
      { en: 'You', he: 'את/ה' },
      { en: 'He', he: 'הוא' },
      { en: 'She', he: 'היא' },
      { en: 'We', he: 'אנחנו' },
      { en: 'They', he: 'הם/הן' },
      { en: 'It', he: 'זה (לא אדם)' },
      { en: 'This', he: 'זה (קרוב)' },
      { en: 'That', he: 'זה (רחוק)' },
      { en: 'My', he: 'שלי' }
    ],
    dialogue: `Teacher: I am the teacher. You are the student.\nStudent: I am the student.\nTeacher: She is a girl. He is a boy.\nStudent: She is a girl. He is a boy.`,
    practice: `You are my English teacher for A0. Teach me pronouns: I, You, He, She, We, They, It. Say one, I repeat. Then point at things and say 'This is...' I will repeat. Keep it very simple.`
  },
  {
    id: 4, level: 'A0',
    title: 'Be Verb - am/is/are',
    subtitle: 'פועל to be — אני, הוא, היא',
    keys: ['I am here', 'You are here', 'He is here', 'She is here', 'We are here'],
    vocab: [
      { en: 'am', he: '"אני" (I + am)' },
      { en: 'is', he: '"הוא/היא" (he/she/it + is)' },
      { en: 'are', he: '"אתה/אנחנו" (you/we/they + are)' },
      { en: 'not', he: 'לא (שלילה)' },
      { en: 'here', he: 'כאן' },
      { en: 'there', he: 'שם' },
      { en: 'yes', he: 'כן' },
      { en: 'no', he: 'לא' },
      { en: 'happy', he: 'שמח/ה' },
      { en: 'sad', he: 'עצוב/ה' }
    ],
    dialogue: `Teacher: I am happy. Are you happy?\nStudent: Yes, I am happy!\nTeacher: Is he here?\nStudent: No, he is not here. He is there.`,
    practice: `You are my English teacher for A0. Teach me the verb "to be": I am, You are, He is, She is, We are, They are. Say one sentence, I repeat. Then ask me: Are you happy? Is she here? I answer with Yes/No + correct form.`
  },
  {
    id: 5, level: 'A0',
    title: 'Yes/No Questions',
    subtitle: 'שאלות כן/לא',
    keys: ['Are you a student?', 'Is this a book?', 'Am I right?', 'No, it is not', 'Yes, I am'],
    vocab: [
      { en: 'Are you...?', he: 'האם את/ה...?' },
      { en: 'Is he...?', he: 'האם הוא...?' },
      { en: 'Is she...?', he: 'האם היא...?' },
      { en: 'Is it...?', he: 'האם זה...?' },
      { en: 'Yes, I am', he: 'כן, אני' },
      { en: 'No, I am not', he: 'לא, אני לא' },
      { en: 'book', he: 'ספר' },
      { en: 'student', he: 'תלמיד/ה' },
      { en: 'teacher', he: 'מורה/ה' },
      { en: 'right', he: 'צודק/ת' }
    ],
    dialogue: `Teacher: Are you a student?\nStudent: Yes, I am a student.\nTeacher: Is this a book?\nStudent: Yes, it is a book.\nTeacher: Am I right?\nStudent: Yes, you are right!`,
    practice: `You are my English teacher for A0. Ask me Yes/No questions using: Are you...? Is this...? Is he/she...? I answer with: Yes, I am / No, I am not / Yes, it is / No, it is not. Keep it very slow and simple.`
  },
  {
    id: 6, level: 'A0',
    title: 'What is this?',
    subtitle: 'מה זה? — שאלות WHAT',
    keys: ['What is this?', 'This is a pen', 'What is your name?', 'My name is...'],
    vocab: [
      { en: 'What', he: 'מה' },
      { en: 'This', he: 'זה (קרוב)' },
      { en: 'pen', he: 'עט' },
      { en: 'book', he: 'ספר' },
      { en: 'table', he: 'שולחן' },
      { en: 'chair', he: 'כיסא' },
      { en: 'door', he: 'דלת' },
      { en: 'window', he: 'חלון' },
      { en: 'name', he: 'שם' },
      { en: 'phone', he: 'טלפון' }
    ],
    dialogue: `Teacher: What is this?\nStudent: This is a pen.\nTeacher: What is your name?\nStudent: My name is Ruben.\nTeacher: What is that?\nStudent: That is a book.`,
    practice: `You are my English teacher for A0. Point at things and ask me: What is this? I answer: This is a... Then ask: What is your name? Where are you from? Keep it A0, very slow.`
  },
  {
    id: 7, level: 'A0',
    title: 'Colors & Shapes',
    subtitle: 'צבעים וצורות',
    keys: ['Red, blue, green', 'Yellow, black, white', 'Big and small', 'A big red ball'],
    vocab: [
      { en: 'Red', he: 'אדום' },
      { en: 'Blue', he: 'כחול' },
      { en: 'Green', he: 'ירוק' },
      { en: 'Yellow', he: 'צהוב' },
      { en: 'Black', he: 'שחור' },
      { en: 'White', he: 'לבן' },
      { en: 'Big', he: 'גדול' },
      { en: 'Small', he: 'קטן' },
      { en: 'Circle', he: 'עיגול' },
      { en: 'Square', he: 'ריבוע' }
    ],
    dialogue: `Teacher: What color is this?\nStudent: It is red.\nTeacher: Is this big or small?\nStudent: It is big.\nTeacher: What is it?\nStudent: It is a big red ball!`,
    practice: `You are my English teacher for A0. Show me things and ask: What color is this? Is it big or small? I answer: It is red/blue/green. It is big/small. Then combine: It is a big red ball. Keep it A0.`
  },
  {
    id: 8, level: 'A0',
    title: 'Basic Actions',
    subtitle: 'פעלים בסיסיים — come, go, sit, stand',
    keys: ['Stand up', 'Sit down', 'Come here', 'Go there', 'Look at me'],
    vocab: [
      { en: 'Stand up', he: 'לקום' },
      { en: 'Sit down', he: 'לשבת' },
      { en: 'Come', he: 'לבוא' },
      { en: 'Go', he: 'ללכת' },
      { en: 'Look', he: 'להסתכל' },
      { en: 'Listen', he: 'להקשיב' },
      { en: 'Open', he: 'לפתוח' },
      { en: 'Close', he: 'לסגור' },
      { en: 'Read', he: 'לקרוא' },
      { en: 'Write', he: 'לכתוב' }
    ],
    dialogue: `Teacher: Stand up! (Student stands)\nTeacher: Sit down! (Student sits)\nTeacher: Come here! (Student comes)\nTeacher: Look at the board.\nStudent: I am looking!`,
    practice: `You are my English teacher for A0. Give me simple commands: Stand up, Sit down, Come here, Go there, Look at me, Listen. I will do the action and say it back. Then switch: I give commands, you do them.`
  },
  {
    id: 9, level: 'A0',
    title: 'Have & Has',
    subtitle: 'יש לי / יש לו — have/has',
    keys: ['I have a book', 'You have a pen', 'He has a car', 'She has a phone', 'We have time'],
    vocab: [
      { en: 'have', he: 'יש (לי/לך/לנו)' },
      { en: 'has', he: 'יש (לו/לה)' },
      { en: 'car', he: 'מכונית' },
      { en: 'house', he: 'בית' },
      { en: 'dog', he: 'כלב' },
      { en: 'cat', he: 'חתול' },
      { en: 'time', he: 'זמן' },
      { en: 'money', he: 'כסף' },
      { en: 'food', he: 'אוכל' },
      { en: 'water', he: 'מים' }
    ],
    dialogue: `Teacher: What do you have?\nStudent: I have a book and a pen.\nTeacher: Does she have a car?\nStudent: Yes, she has a car.\nTeacher: Do you have a dog?\nStudent: No, I have a cat!`,
    practice: `You are my English teacher for A0. Teach me "have" and "has". I have a... He/She has a... Ask me: What do you have? Does he have a car? I answer: I have a... Yes, he has... No, he doesn't have... Keep it A0.`
  },
  {
    id: 10, level: 'A0',
    title: 'Can & Cannot',
    subtitle: 'יכול / לא יכול — can/can\'t',
    keys: ['I can speak English', 'You can do it', 'I cannot swim', 'Can you help me?', 'Yes, I can!'],
    vocab: [
      { en: 'can', he: 'יכול/מסוגל' },
      { en: "can't / cannot", he: 'לא יכול' },
      { en: 'speak', he: 'לדבר' },
      { en: 'swim', he: 'לשחות' },
      { en: 'drive', he: 'לנהוג' },
      { en: 'cook', he: 'לבשל' },
      { en: 'run', he: 'לרוץ' },
      { en: 'sing', he: 'לשיר' },
      { en: 'help', he: 'לעזור' },
      { en: 'see', he: 'לראות' }
    ],
    dialogue: `Teacher: Can you speak English?\nStudent: Yes, I can speak English!\nTeacher: Can you swim?\nStudent: No, I cannot swim.\nTeacher: Can you help me?\nStudent: Yes, I can help you!`,
    practice: `You are my English teacher for A0. Teach me "can" and "can't". Ask me: Can you swim? Can you drive? Can you cook? I answer: Yes, I can / No, I can't. Then I ask you questions. Keep it A0.`
  }
]
