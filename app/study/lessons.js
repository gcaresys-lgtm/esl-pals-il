// ESL Pals Lesson Data - A0, A1 & A2
// A0: Absolute Beginner (alphabet, numbers, pronouns, be-verb)
// Based on https://eslpals.com/general-english/A1
// For personal study use

export const A1_LESSONS = [
  {
    id: 1, level: 'A1',
    title: 'Alphabet & Greetings',
    subtitle: 'אלף-בית וברכות',
    keys: ['Hello, my name is...', 'Nice to meet you', 'How are you?', 'I am fine, thank you'],
    vocab: [
      { en: 'Hello', he: 'שלום' },
      { en: 'Goodbye', he: 'להתראות' },
      { en: 'Name', he: 'שם' },
      { en: 'Nice to meet you', he: 'נעים להכיר' },
      { en: 'How are you?', he: 'מה שלומך?' }
    ],
    dialogue: `A: Hello! My name is David. Nice to meet you.\nB: Hi David! I'm Sarah. How are you?\nA: I'm fine, thank you. And you?\nB: I'm great, thanks!`,
    practice: `You are my English speaking partner for A1 level. Let's practice: Greetings and introductions. Ask me: What is your name? How are you? Nice to meet you. Correct my mistakes gently.`
  },
  {
    id: 2, level: 'A1',
    title: 'Numbers & Age',
    subtitle: 'מספרים וגיל',
    keys: ['I am 30 years old', 'How old are you?', 'My phone number is...'],
    vocab: [
      { en: 'Number', he: 'מספר' },
      { en: 'Age', he: 'גיל' },
      { en: 'Phone number', he: 'מספר טלפון' },
      { en: 'Old', he: 'מבוגר/ה' },
      { en: 'Young', he: 'צעיר/ה' }
    ],
    dialogue: `A: How old are you?\nB: I'm 35 years old. And you?\nA: I'm 30. What's your phone number?\nB: It's 052-1234567.`,
    practice: `You are my A1 English partner. Practice numbers and age. Ask: How old are you? What is your phone number? Count 1-20. Correct gently.`
  },
  {
    id: 3, level: 'A1',
    title: 'Colors & Clothes',
    subtitle: 'צבעים ובגדים',
    keys: ['I like the blue shirt', 'What color is it?', 'I am wearing a jacket'],
    vocab: [
      { en: 'Red', he: 'אדום' },
      { en: 'Blue', he: 'כחול' },
      { en: 'Green', he: 'ירוק' },
      { en: 'Shirt', he: 'חולצה' },
      { en: 'Shoes', he: 'נעליים' }
    ],
    dialogue: `A: I like your blue shirt!\nB: Thank you! I like your shoes too.\nA: What color are they?\nB: They're black.`,
    practice: `You are my A1 English partner. Practice colors and clothes. Point at things and ask: What color is it? What are you wearing? Correct gently.`
  },
  {
    id: 4, level: 'A1',
    title: 'Family & Friends',
    subtitle: 'משפחה וחברים',
    keys: ['This is my sister', 'I have two brothers', 'She is my mother'],
    vocab: [
      { en: 'Mother', he: 'אמא' },
      { en: 'Father', he: 'אבא' },
      { en: 'Sister', he: 'אחות' },
      { en: 'Brother', he: 'אח' },
      { en: 'Friend', he: 'חבר/ה' }
    ],
    dialogue: `A: Do you have any siblings?\nB: Yes, I have one sister and two brothers.\nA: This is my mother, Sarah.\nB: Nice to meet you, Sarah!`,
    practice: `You are my A1 English partner. Practice family vocabulary. Ask: Do you have brothers or sisters? Tell me about your family. Correct gently.`
  },
  {
    id: 5, level: 'A1',
    title: 'Food & Drink',
    subtitle: 'אוכל ושתייה',
    keys: ['I like pizza', 'I want water, please', 'What do you eat?'],
    vocab: [
      { en: 'Water', he: 'מים' },
      { en: 'Bread', he: 'לחם' },
      { en: 'Coffee', he: 'קפה' },
      { en: 'Apple', he: 'תפוח' },
      { en: 'Chicken', he: 'עוף' }
    ],
    dialogue: `A: What do you want to eat?\nB: I want a sandwich, please. And a coffee.\nA: Do you like pizza?\nB: Yes, I love pizza!`,
    practice: `You are my A1 English partner. Practice food and drink vocabulary. Ask: What do you like to eat? What do you want to drink? Correct gently.`
  },
  {
    id: 6, level: 'A1',
    title: 'Days, Months & Time',
    subtitle: 'ימים, חודשים וזמן',
    keys: ['Today is Monday', 'My birthday is in March', 'What time is it?'],
    vocab: [
      { en: 'Monday', he: 'יום שני' },
      { en: 'Weekend', he: 'סוף שבוע' },
      { en: 'Today', he: 'היום' },
      { en: 'Morning', he: 'בוקר' },
      { en: 'Evening', he: 'ערב' }
    ],
    dialogue: `A: What day is it today?\nB: Today is Monday.\nA: What time is it?\nB: It's half past three.`,
    practice: `You are my A1 English partner. Practice days, months, and time. Ask: What day is today? What time is it? When is your birthday? Correct gently.`
  },
  {
    id: 7, level: 'A1',
    title: 'Daily Routine',
    subtitle: 'שגרה יומית',
    keys: ['I wake up at 7', 'I go to work by bus', 'I eat dinner at 8'],
    vocab: [
      { en: 'Wake up', he: 'להתעורר' },
      { en: 'Breakfast', he: 'ארוחת בוקר' },
      { en: 'Work', he: 'עבודה' },
      { en: 'Dinner', he: 'ארוחת ערב' },
      { en: 'Sleep', he: 'שינה' }
    ],
    dialogue: `A: What time do you wake up?\nB: I wake up at 7 o'clock. And you?\nA: I wake up at 6. I go to work by bus.\nB: I drive to work.`,
    practice: `You are my A1 English partner. Practice daily routine. Ask: What time do you wake up? What do you do in the morning? How do you go to work? Correct gently.`
  },
  {
    id: 8, level: 'A1',
    title: 'House & Furniture',
    subtitle: 'בית וריהוט',
    keys: ['The book is on the table', 'I sit on the sofa', 'Where is the kitchen?'],
    vocab: [
      { en: 'Kitchen', he: 'מטבח' },
      { en: 'Bedroom', he: 'חדר שינה' },
      { en: 'Table', he: 'שולחן' },
      { en: 'Chair', he: 'כיסא' },
      { en: 'Door', he: 'דלת' }
    ],
    dialogue: `A: Where is the kitchen?\nB: It's next to the living room.\nA: Is the book on the table?\nB: No, it's on the chair.`,
    practice: `You are my A1 English partner. Practice house vocabulary and prepositions. Ask: Where is the...? Is the ... on/in/under the...? Correct gently.`
  },
  {
    id: 9, level: 'A1',
    title: 'Weather & Seasons',
    subtitle: 'מזג אוויר ועונות',
    keys: ['It is sunny today', 'I like summer', 'Is it raining?'],
    vocab: [
      { en: 'Sun', he: 'שמש' },
      { en: 'Rain', he: 'גשם' },
      { en: 'Hot', he: 'חם' },
      { en: 'Cold', he: 'קור' },
      { en: 'Summer', he: 'קיץ' }
    ],
    dialogue: `A: How's the weather today?\nB: It's sunny and hot.\nA: Do you like summer?\nB: Yes, but I also like winter. I like rain.`,
    practice: `You are my A1 English partner. Practice weather and seasons. Ask: How's the weather? Do you like summer or winter? Is it hot or cold? Correct gently.`
  },
  {
    id: 10, level: 'A1',
    title: 'Hobbies & Free Time',
    subtitle: 'תחביבים וזמן פנוי',
    keys: ['I like reading books', 'My hobby is cooking', 'What do you do on weekends?'],
    vocab: [
      { en: 'Reading', he: 'קריאה' },
      { en: 'Cooking', he: 'בישול' },
      { en: 'Sport', he: 'ספורט' },
      { en: 'Music', he: 'מוזיקה' },
      { en: 'Movie', he: 'סרט' }
    ],
    dialogue: `A: What do you do in your free time?\nB: I like reading books and watching movies.\nA: Do you play any sport?\nB: Yes, I play football on weekends.`,
    practice: `You are my A1 English partner. Practice hobbies and free time. Ask: What do you like to do? What is your hobby? What do you do on weekends? Correct gently.`
  }
]

export const A2_LESSONS = [
  {
    id: 1, level: 'A2',
    title: 'Talking About Yourself & Daily Routine',
    subtitle: 'לספר על עצמי והשגרה היומית',
    keys: ['I usually wake up at 6:30', 'I work as an engineer', 'In my free time I like to...'],
    vocab: [
      { en: 'usually', he: 'בדרך כלל' },
      { en: 'routine', he: 'שגרה' },
      { en: 'free time', he: 'זמן פנוי' },
      { en: 'job', he: 'עבודה' },
      { en: 'hobby', he: 'תחביב' }
    ],
    dialogue: `A: What time do you usually wake up?\nB: I usually wake up at 6:30, drink coffee and go for a walk.\nA: What do you do?\nB: I work as an engineer in Tel Aviv.`,
    practice: `You are my English speaking partner for A2 level. Let's practice Lesson 1: Talking about yourself & daily routine. Ask me: What time do you usually wake up? What did you do yesterday? What do you like to do in your free time? Correct my mistakes gently and give me the correct sentence in Hebrew too.`
  },
  {
    id: 2, level: 'A2',
    title: 'At the Cafe & Restaurant',
    subtitle: 'בבית קפה ומסעדה',
    keys: ['Can I have a coffee, please?', 'How much is it?', "I'd like the chicken salad, please."],
    vocab: [
      { en: 'order', he: 'הזמנה / להזמין' },
      { en: 'bill', he: 'חשבון' },
      { en: 'delicious', he: 'טעים' },
      { en: 'recommendation', he: 'המלצה' },
      { en: 'takeaway', he: 'טייק אווי' }
    ],
    dialogue: `Waiter: Hello! What would you like?\nYou: Can I have a latte and a sandwich, please?\nWaiter: For here or takeaway?\nYou: For here, please. And how much is it?`,
    practice: `You are my English speaking partner for A2 level. Role-play: You are a waiter in a cafe. I am the customer. I need to practice: Can I have..., I'd like..., How much is it? The bill, please. Start with 'Hello, what can I get for you?' Correct me gently.`
  },
  {
    id: 3, level: 'A2',
    title: 'Shopping & Directions',
    subtitle: 'קניות והכוונה',
    keys: ["I'm looking for a blue t-shirt.", 'Where is the fitting room, please?', 'How much does it cost?'],
    vocab: [
      { en: 'size', he: 'מידה' },
      { en: 'expensive', he: 'יקר' },
      { en: 'cheap', he: 'זול' },
      { en: 'next to', he: 'ליד' },
      { en: 'straight', he: 'ישר' }
    ],
    dialogue: `You: Excuse me, I'm looking for the supermarket.\nPerson: Go straight and it's next to the bank.\nYou: Is it expensive there?\nPerson: No, it's quite cheap!`,
    practice: `You are my English partner A2. Let's practice shopping & directions. You ask me for size, price, and give me directions: 'Go straight, turn left, it's next to...'. I will answer. If I make a mistake, write: ❌ + my sentence, then ✅ + correct sentence + Hebrew translation.`
  },
  {
    id: 4, level: 'A2',
    title: 'Small Talk - Making Conversation',
    subtitle: 'Small Talk - לדבר עם אנשים',
    keys: ['How are you? / How\'s it going?', 'What do you do?', "Nice weather today, isn't it?"],
    vocab: [
      { en: 'weather', he: 'מזג אוויר' },
      { en: 'weekend', he: 'סוף שבוע' },
      { en: 'plans', he: 'תוכניות' },
      { en: 'hobby', he: 'תחביב' },
      { en: 'often', he: 'לעתים קרובות' }
    ],
    dialogue: `A: Hi! Nice weather today, isn't it?\nB: Yes, beautiful! Do you have any plans for the weekend?\nA: Not really, I often just relax at home.`,
    practice: `You are my friendly English partner A2. Let's do small talk for 2 minutes. Topics: weather, job, weekend plans, hobbies. Ask one question at a time. Keep it natural and short. Correct my grammar at the end with a small list.`
  },
  {
    id: 5, level: 'A2',
    title: 'Phone & Appointments',
    subtitle: 'שיחת טלפון ולקבוע פגישה',
    keys: ['Can I speak to David, please?', "I'd like to make an appointment.", 'Are you free on Tuesday morning?'],
    vocab: [
      { en: 'appointment', he: 'פגישה / תור' },
      { en: 'available', he: 'פנוי / זמין' },
      { en: 'busy', he: 'עסוק' },
      { en: 'tomorrow', he: 'מחר' },
      { en: 'morning / afternoon', he: 'בוקר / אחה"צ' }
    ],
    dialogue: `You: Hello, I'd like to make an appointment with Dr. Cohen.\nReception: Are you free tomorrow morning?\nYou: Sorry, I'm busy tomorrow. Are you available on Wednesday afternoon?`,
    practice: `You are my A2 English partner. Role-play phone call to make an appointment. You are the receptionist. I call to make an appointment. I must use: Can I speak to..., I'd like to make an appointment, Are you free on...? Be patient, speak slowly, A2 level only.`
  },
  {
    id: 6, level: 'A2',
    title: 'My Job',
    subtitle: 'עבודה ומה אני עושה',
    keys: ['I work as a teacher.', 'My responsibilities are planning lessons and helping students.', 'I have to work on Mondays and Wednesdays.'],
    vocab: [
      { en: 'job', he: 'עבודה' },
      { en: 'colleague', he: 'עמית/ה לעבודה' },
      { en: 'meeting', he: 'פגישה' },
      { en: 'deadline', he: 'דדליין / מועד אחרון' },
      { en: 'office', he: 'משרד' }
    ],
    dialogue: `A: What do you do?\nB: I work as a designer in Tel Aviv.\nA: What are your responsibilities?\nB: I have to meet clients and finish projects before the deadline.`,
    practice: `You are my English speaking partner for A2 level. Let's practice Lesson 6: My Job. Ask me: What do you do? Where do you work? What are your responsibilities? Do you like your colleagues? Correct my mistakes gently and give me the correct sentence in Hebrew too.`
  },
  {
    id: 7, level: 'A2',
    title: 'Health & Body',
    subtitle: 'בריאות וגוף',
    keys: ["I don't feel well today.", 'I have a headache and a sore throat.', 'I need an appointment with the doctor.'],
    vocab: [
      { en: 'headache', he: 'כאב ראש' },
      { en: 'sore throat', he: 'כאב גרון' },
      { en: 'medicine', he: 'תרופה' },
      { en: 'doctor', he: 'רופא/ה' },
      { en: 'tired', he: 'עייף/ה' }
    ],
    dialogue: `You: Hi, I don't feel well. I have a headache.\nDoctor: Do you have a sore throat?\nYou: Yes, and I feel very tired.\nDoctor: You need rest and some medicine.`,
    practice: `You are my English partner A2. Role-play: You are a doctor / pharmacist. I am the patient. I need to say: I don't feel well, I have a headache / sore throat, I need medicine. Ask me about symptoms. Correct me gently with Hebrew translation.`
  },
  {
    id: 8, level: 'A2',
    title: 'Travel & Transport',
    subtitle: 'נסיעות ותחבורה',
    keys: ['How do I get to the train station?', 'What time does the bus leave?', "I'd like a ticket to Jerusalem, please."],
    vocab: [
      { en: 'ticket', he: 'כרטיס' },
      { en: 'station', he: 'תחנה' },
      { en: 'platform', he: 'רציף' },
      { en: 'delay', he: 'עיכוב' },
      { en: 'luggage', he: 'מטען / מזוודה' }
    ],
    dialogue: `You: Excuse me, how do I get to the central station?\nPerson: Take bus number 5, platform 3.\nYou: What time does it leave?\nPerson: In 10 minutes. Do you have luggage?\nYou: Just one small bag.`,
    practice: `You are my A2 English partner. Let's practice Travel & Transport. You are at the information desk. I ask: How do I get to...? What time does the train/bus leave? I'd like a ticket to... You answer with platform, delay, ticket info. Keep it A2, short sentences, correct me gently.`
  },
  {
    id: 9, level: 'A2',
    title: 'Talking About the Past',
    subtitle: 'לדבר על העבר - Past Simple',
    keys: ['Last weekend I visited my family.', 'I went to the beach and it was amazing.', 'It was really fun and relaxing.'],
    vocab: [
      { en: 'yesterday', he: 'אתמול' },
      { en: 'last week', he: 'שבוע שעבר' },
      { en: 'ago', he: 'לפני (זמן)' },
      { en: 'was / were', he: 'היה / היו' },
      { en: 'visited', he: 'ביקר/ה' }
    ],
    dialogue: `A: What did you do last weekend?\nB: I went to Haifa two days ago.\nA: How was it?\nB: It was great! I visited my friends and we went to the market.`,
    practice: `You are my A2 English partner. Let's practice Past Simple. Ask me: What did you do yesterday? Where did you go last weekend? How was it? I will answer with: Last..., I went..., It was... Correct my past tense gently, show ✅ correct + Hebrew.`
  },
  {
    id: 10, level: 'A2',
    title: 'Future Plans',
    subtitle: 'תוכניות לעתיד - will / going to',
    keys: ["I'm going to study English every day.", 'Next year I will travel to London.', 'I plan to find a better job soon.'],
    vocab: [
      { en: 'future', he: 'עתיד' },
      { en: 'plan', he: 'תוכנית / לתכנן' },
      { en: 'hope', he: 'תקווה / לקוות' },
      { en: 'maybe', he: 'אולי' },
      { en: 'soon', he: 'בקרוב' }
    ],
    dialogue: `A: What are your plans for next year?\nB: I'm going to improve my English. I hope I will travel soon.\nA: Maybe we can travel together?\nB: Yes! I plan to go in the summer.`,
    practice: `You are my A2 English partner. Let's talk about future plans. Ask me: What are you going to do next weekend? What will you do next year? What do you plan to do soon? I must use: I'm going to..., I will..., I plan to..., I hope... Correct me gently, keep it A2 and optimistic.`
  }
]

import { A0_LESSONS } from './a0-lessons'
import { B1_LESSONS } from './b1-lessons'

// Combine all levels
export const ALL_LESSONS = [...A0_LESSONS, ...A1_LESSONS, ...A2_LESSONS, ...B1_LESSONS]
