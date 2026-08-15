// B1 - Intermediate
// More complex grammar, longer dialogues, opinions, conditionals, past continuous, present perfect

export const B1_LESSONS = [
  {
    id: 1, level: 'B1',
    title: 'Present Perfect — Life Experiences',
    subtitle: 'Present Perfect — חוויות חיים',
    keys: ['I have been to London', 'Have you ever tried sushi?', 'She has never traveled abroad', 'I have already finished'],
    vocab: [
      { en: 'experience', he: 'חוויה' },
      { en: 'abroad', he: 'לחו"ל' },
      { en: 'ever', he: 'אי פעם' },
      { en: 'never', he: 'אף פעם' },
      { en: 'already', he: 'כבר' },
      { en: 'yet', he: 'עדיין (לא)' },
      { en: 'since', he: 'מאז' },
      { en: 'for', he: 'במשך' },
      { en: 'achievement', he: 'הישג' },
      { en: 'challenge', he: 'אתגר' }
    ],
    dialogue: `A: Have you ever been to London?\nB: Yes, I have been there twice. Have you?\nA: No, I haven't. But I have always wanted to go.\nB: You should! I have never seen such beautiful parks.\nA: Really? I have heard that too.`,
    practice: `You are my English speaking partner for B1 level. Let's practice Present Perfect for life experiences. Ask me: Have you ever...? I answer with: Yes, I have / No, I haven't. Then follow up with past simple questions. Correct me if I mix up present perfect and past simple.`
  },
  {
    id: 2, level: 'B1',
    title: 'Past Continuous — What Were You Doing?',
    subtitle: 'Past Continuous — מה עשית באותו רגע?',
    keys: ['I was working when you called', 'What were you doing at 8 PM?', 'While I was cooking, he was watching TV', 'It was raining all day'],
    vocab: [
      { en: 'while', he: 'בזמן ש' },
      { en: 'during', he: 'במהלך' },
      { en: 'suddenly', he: 'פתאום' },
      { en: 'at that moment', he: 'באותו רגע' },
      { en: 'interrupt', he: 'להפריע' },
      { en: 'happen', he: 'לקרות' },
      { en: 'notice', he: 'לשים לב' },
      { en: 'realize', he: 'להבין/להבחין' },
      { en: 'continue', he: 'להמשיך' },
      { en: 'stop', he: 'לעצור' }
    ],
    dialogue: `A: What were you doing when I called you yesterday?\nB: I was cooking dinner. While I was making pasta, the phone rang.\nA: Sorry for interrupting! What happened next?\nB: I stopped cooking, answered the phone, and then continued.\nA: While you were cooking, I was watching a movie at home.`,
    practice: `You are my B1 English partner. Let's practice Past Continuous. Ask me: What were you doing yesterday at [time]? What happened while you were [doing something]? I should answer with: I was...ing when... While I was..., he/she was... Correct me gently.`
  },
  {
    id: 3, level: 'B1',
    title: 'Giving Opinions & Agreeing/Disagreeing',
    subtitle: 'לחוות דעה ולהסכים/לא להסכים',
    keys: ['In my opinion...', 'I strongly believe that...', 'I see your point, but...', 'I completely agree / I disagree', "That's a good point"],
    vocab: [
      { en: 'opinion', he: 'דעה' },
      { en: 'agree', he: 'להסכים' },
      { en: 'disagree', he: 'לא להסכים' },
      { en: 'point of view', he: 'נקודת מבט' },
      { en: 'argue', he: 'לטעון/להתווכח' },
      { en: 'convince', he: 'לשכנע' },
      { en: 'support', he: 'לתמוך' },
      { en: 'against', he: 'נגד' },
      { en: 'advantage', he: 'יתרון' },
      { en: 'disadvantage', he: 'חיסרון' }
    ],
    dialogue: `A: In my opinion, remote work is better than office work.\nB: I see your point, but I disagree. I think offices are more productive.\nA: Really? I strongly believe that people work better at home.\nB: That's a good point, but what about team communication?\nA: You're right. There are advantages and disadvantages.`,
    practice: `You are my B1 English partner. Let's practice giving opinions. You make a statement (e.g., "Social media is bad for society") and I respond with: In my opinion... / I agree because... / I disagree because... Then switch roles. Use: point of view, advantage, disadvantage. Correct me gently.`
  },
  {
    id: 4, level: 'B1',
    title: 'First Conditional — If + Will',
    subtitle: 'תנאי ראשון — אם... אז...',
    keys: ['If it rains, I will stay home', 'If you study hard, you will pass', "I'll call you if I'm late", 'What will you do if you get the job?'],
    vocab: [
      { en: 'if', he: 'אם' },
      { en: 'unless', he: 'אלא אם כן' },
      { en: 'condition', he: 'תנאי' },
      { en: 'result', he: 'תוצאה' },
      { en: 'probably', he: 'כנראה' },
      { en: 'likely', he: 'סביר להניח' },
      { en: 'in case', he: 'למקרה ש' },
      { en: 'as long as', he: 'כל עוד' },
      { en: 'prepare', he: 'להתכונן' },
      { en: 'decision', he: 'החלטה' }
    ],
    dialogue: `A: What will you do if you get the job?\nB: If I get it, I will move to Tel Aviv.\nA: That's great! Will you commute unless you find an apartment?\nB: Yes. As long as I don't find one, I'll take the train.\nA: If you need help, I will help you look.\nB: Thanks! I'll call you in case I find something interesting.`,
    practice: `You are my B1 English partner. Let's practice First Conditional. Ask me: What will you do if...? I answer: If [condition], I will [result]. Use: if, unless, as long as, in case. Make it realistic — jobs, weather, travel. Correct me gently.`
  },
  {
    id: 5, level: 'B1',
    title: 'Workplace Communication',
    subtitle: 'תקשורת בעבודה — אימיילים, פגישות, עדכונים',
    keys: ['Could you send me the report by Friday?', "I'd like to schedule a meeting", 'Let me follow up on that', 'I appreciate your feedback', 'Can we discuss this further?'],
    vocab: [
      { en: 'deadline', he: 'מועד אחרון' },
      { en: 'agenda', he: 'סדר יום' },
      { en: 'follow up', he: 'לעדכן / להמשיך' },
      { en: 'feedback', he: 'משוב' },
      { en: 'schedule', he: 'לקבוע / לוח זמנים' },
      { en: 'postpone', he: 'לדחות' },
      { en: 'confirm', he: 'לאשר' },
      { en: 'collaborate', he: 'לשתף פעולה' },
      { en: 'priority', he: 'עדיפות' },
      { en: 'efficient', he: 'יעיל' }
    ],
    dialogue: `A: Hi, could you send me the quarterly report by Friday?\nB: Sure. Let me check my schedule. Can we discuss it in tomorrow's meeting?\nA: Good idea. I'll add it to the agenda.\nB: I appreciate your patience. I'll follow up with the team today.\nA: Perfect. If anything changes, let me know.`,
    practice: `You are my B1 English partner. Role-play workplace communication. You are my manager. Ask me for updates, schedule meetings, give feedback. I must respond with: I'll follow up, Let me check, I appreciate..., Could we...? Keep it professional B1 level. Correct me gently.`
  },
  {
    id: 6, level: 'B1',
    title: 'Travel & Culture',
    subtitle: 'נסיעות ותרבות — חוויות מחו"ל',
    keys: ["I've always wanted to visit Japan", 'The culture is completely different', 'You should try the local food', 'It was a once-in-a-lifetime experience', 'I learned so much from traveling'],
    vocab: [
      { en: 'destination', he: 'יעד' },
      { en: 'culture', he: 'תרבות' },
      { en: 'tradition', he: 'מסורת' },
      { en: 'local', he: 'מקומי' },
      { en: 'custom', he: 'מנהג' },
      { en: 'souvenir', he: 'מזכרת' },
      { en: 'currency', he: 'מטבע' },
      { en: 'exchange', he: 'החלפה / חליפין' },
      { en: 'recommend', he: 'להמליץ' },
      { en: 'adventure', he: 'הרפתקה' }
    ],
    dialogue: `A: Have you ever been to Japan?\nB: Yes! It was a once-in-a-lifetime experience. The culture is fascinating.\nA: Really? What would you recommend?\nB: You should try the local food and visit the temples in Kyoto.\nA: I've always wanted to go. What about the currency?\nB: You need to exchange money. The local currency is the yen.`,
    practice: `You are my B1 English partner. Let's talk about travel and culture. Ask me: Have you ever been to...? What was it like? What do you recommend? I should use: I've been to..., The culture is..., You should try..., It was a once-in-a-lifetime experience. Correct me gently.`
  },
  {
    id: 7, level: 'B1',
    title: 'Describing People & Personalities',
    subtitle: 'לתאר אנשים ואישיות',
    keys: ["She's very outgoing and confident", "He's the kind of person who...", "What does she look like?", "She has dark hair and blue eyes", "He's reliable but sometimes stubborn"],
    vocab: [
      { en: 'outgoing', he: 'חברותי/ה, פתוח/ה' },
      { en: 'reliable', he: 'אמין/ה' },
      { en: 'stubborn', he: 'עקשן/ית' },
      { en: 'confident', he: 'בטוח/ה בעצמו/ה' },
      { en: 'generous', he: 'נדיב/ה' },
      { en: 'ambitious', he: 'שאפתן/ית' },
      { en: 'sensitive', he: 'רגיש/ה' },
      { en: 'sense of humor', he: 'חוש הומור' },
      { en: 'appearance', he: 'מראה חיצוני' },
      { en: 'personality', he: 'אישיות' }
    ],
    dialogue: `A: What's your new colleague like?\nB: She's very outgoing and confident. She has a great sense of humor.\nA: What does she look like?\nB: She has dark hair and blue eyes. She's tall.\nA: Is she reliable?\nB: Yes, but she can be stubborn sometimes. Overall, she's ambitious and generous.`,
    practice: `You are my B1 English partner. Let's practice describing people. Ask me: What is [person] like? What do they look like? I should use personality adjectives: outgoing, reliable, stubborn, confident, generous, ambitious, sensitive. Then you describe someone and I guess who. Correct me gently.`
  },
  {
    id: 8, level: 'B1',
    title: 'Health, Stress & Advice',
    subtitle: 'בריאות, לחץ ומתן עצה',
    keys: ["You should get more sleep", 'Have you tried meditation?', "I've been feeling stressed lately", "If I were you, I'd talk to someone", 'You ought to take a break'],
    vocab: [
      { en: 'stress', he: 'לחץ / מתח' },
      { en: 'anxious', he: 'חרדתי/ת' },
      { en: 'exhausted', he: 'מותש/ת' },
      { en: 'relax', he: 'להירגע' },
      { en: 'meditation', he: 'מדיטציה' },
      { en: 'prescription', he: 'מרשם' },
      { en: 'symptom', he: 'תסמין' },
      { en: 'recover', he: 'להחלים' },
      { en: 'balanced diet', he: 'תזונה מאוזנת' },
      { en: 'workout', he: 'אימון' }
    ],
    dialogue: `A: You look exhausted. Are you okay?\nB: I've been feeling stressed lately. I can't sleep.\nA: You should get more rest. Have you tried meditation?\nB: No, but if I were you, what would you do?\nA: I'd talk to someone and take a break. You ought to exercise too.\nB: You're right. I need a balanced diet and a workout routine.`,
    practice: `You are my B1 English partner. Role-play: I tell you about a health or stress problem. You give advice using: You should..., Have you tried...?, If I were you, I'd..., You ought to... Then switch: you have a problem, I give advice. Correct me gently.`
  },
  {
    id: 9, level: 'B1',
    title: 'Technology & Social Media',
    subtitle: 'טכנולוגיה ומדיה חברתית',
    keys: ['I spend too much time on my phone', 'Social media can be addictive', 'Technology has changed our lives', 'Do you think AI will replace jobs?', "I'm concerned about privacy"],
    vocab: [
      { en: 'addictive', he: 'ממכר' },
      { en: 'privacy', he: 'פרטיות' },
      { en: 'device', he: 'מכשיר' },
      { en: 'update', he: 'עדכון / לעדכן' },
      { en: 'replace', he: 'להחליף' },
      { en: 'artificial intelligence', he: 'בינה מלאכותית' },
      { en: 'screen time', he: 'זמן מסך' },
      { en: 'connection', he: 'חיבור / קשר' },
      { en: 'influencer', he: 'משפיען/ית' },
      { en: 'cybersecurity', he: 'אבטחת מידע' }
    ],
    dialogue: `A: Do you think AI will replace our jobs?\nB: I'm concerned about that. Technology has changed everything.\nA: I spend too much time on my phone. Social media is addictive.\nB: Same here. My screen time is crazy. What about privacy?\nA: That's a big issue. We need better cybersecurity.\nB: Agreed. But devices and connections make life easier too.`,
    practice: `You are my B1 English partner. Let's discuss technology. Ask me: Do you think AI will replace jobs? How much screen time do you have? Are you concerned about privacy? I should use: I spend too much time..., Social media is addictive, I'm concerned about..., Technology has changed... Correct me gently.`
  },
  {
    id: 10, level: 'B1',
    title: 'Telling Stories & Narratives',
    subtitle: 'לספר סיפורים — עבר מתמשך ופתאומי',
    keys: ['It all started when...', 'Suddenly, I realized that...', 'To make a long story short', 'You won\'t believe what happened', 'In the end, everything worked out'],
    vocab: [
      { en: 'narrative', he: 'סיפור / עלילה' },
      { en: 'suddenly', he: 'פתאום' },
      { en: 'eventually', he: 'בסופו של דבר' },
      { en: 'meanwhile', he: 'בינתיים' },
      { en: 'realize', he: 'להבין / להבחין' },
      { en: 'surprise', he: 'הפתעה' },
      { en: 'unexpected', he: 'בלתי צפוי' },
      { en: 'convince', he: 'לשכנע' },
      { en: 'memorable', he: 'בלתי נשכח' },
      { en: 'lesson learned', he: 'לקח שהופק' }
    ],
    dialogue: `A: You won't believe what happened to me last week!\nB: What? Tell me everything.\nA: It all started when I missed my train. Suddenly, I realized I left my phone at home.\nB: Oh no! What did you do?\nA: To make a long story short, a stranger helped me. Eventually, I got home safe.\nB: Wow. In the end, everything worked out!\nA: Yes. Lesson learned — always check your bag!`,
    practice: `You are my B1 English partner. Let's practice storytelling. Ask me to tell a story about: a memorable day, an unexpected event, a funny mistake. I should use: It all started when..., Suddenly..., Eventually..., To make a long story short..., In the end... Correct my tenses (past simple + past continuous + past perfect).`
  }
]
