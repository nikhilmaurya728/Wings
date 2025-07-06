// यह कार्ड्स डेटा एक बुनियादी सामान्य ज्ञान क्विज़ के लिए है।
// इसमें प्रश्न, विकल्प, सही उत्तर और अतिरिक्त गुण शामिल हैं।

const cardsData = [
  {
    id: 'Que 1',
    question: 'भारत के वर्तमान प्रधान मंत्री कौन हैं?',
    options: ['अमित शाह', 'नरेंद्र मोदी', 'राहुल गांधी', 'योगी आदित्यनाथ'],
    rightAnswer: 'B', // नरेंद्र मोदी
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 2',
    question: 'हमारे देश का नाम क्या है?',
    options: ['उत्तर प्रदेश', 'भारत', 'दिल्ली', 'पाकिस्तान'],
    rightAnswer: 'B', // भारत
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 3',
    question: 'भारत का राष्ट्रीय पशु कौन सा है?',
    options: ['मोर', 'हाथी', 'बाघ', 'शेर'],
    rightAnswer: 'C', // बाघ
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 4',
    question: 'भारत का राष्ट्रीय पक्षी कौन सा है?',
    options: ['गौरैया', 'मोर', 'कौवा', 'तोता'],
    rightAnswer: 'B', // मोर
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 5',
    question: 'भारत का राष्ट्रीय फूल कौन सा है?',
    options: ['गुलाब', 'कमल', 'सूरजमुखी', 'गेंदा'],
    rightAnswer: 'B', // कमल
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 6',
    question: 'भारत का राष्ट्रीय गान कौन सा है?',
    options: ['वंदे मातरम', 'जन गण मन', 'सारे जहाँ से अच्छा', 'जय हे'],
    rightAnswer: 'B', // जन गण मन
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 7',
    question: 'भारत का राष्ट्रीय फल कौन सा है?',
    options: ['सेब', 'केला', 'आम', 'अंगूर'],
    rightAnswer: 'C', // आम
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 8',
    question: 'भारत की राष्ट्रीय नदी कौन सी है?',
    options: ['यमुना', 'ब्रह्मपुत्र', 'गंगा', 'सिंधु'],
    rightAnswer: 'C', // गंगा
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 9',
    question: 'भारत का राष्ट्रीय खेल कौन सा है?',
    options: ['क्रिकेट', 'फुटबॉल', 'हॉकी', 'कबड्डी'],
    rightAnswer: 'C', // हॉकी
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 10',
    question: 'भारत का राष्ट्रीय वृक्ष कौन सा है?',
    options: ['नीम', 'पीपल', 'बरगद', 'आम'],
    rightAnswer: 'C', // बरगद
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 11',
    question: 'हमें किस अंग से सुनते हैं?',
    options: ['आँख', 'कान', 'नाक', 'हाथ'],
    rightAnswer: 'B', // कान
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 12',
    question: 'हम किससे खाना खाते हैं?',
    options: ['पैर', 'मुंह', 'कान', 'आँख'],
    rightAnswer: 'B', // मुंह
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 13',
    question: 'कौन सा जानवर भौंकता है?',
    options: ['बिल्ली', 'कुत्ता', 'गाय', 'शेर'],
    rightAnswer: 'B', // कुत्ता
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 14',
    question: 'कौन सा जानवर म्याऊँ करता है?',
    options: ['कुत्ता', 'बिल्ली', 'घोड़ा', 'भेड़'],
    rightAnswer: 'B', // बिल्ली
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 15',
    question: 'कौन सा जानवर हमें दूध देता है?',
    options: ['बकरी', 'कुत्ता', 'बिल्ली', 'गाय'],
    rightAnswer: 'D', // गाय
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 16',
    question: 'जंगल का राजा कौन है?',
    options: ['बाघ', 'शेर', 'हाथी', 'भालू'],
    rightAnswer: 'B', // शेर
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 17',
    question: 'लाल रंग के फल का नाम बताइए।',
    options: ['केला', 'सेब', 'आम', 'अंगूर'],
    rightAnswer: 'B', // सेब
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 18',
    question: 'पीले रंग के फल का नाम बताइए।',
    options: ['सेब', 'संतरा', 'केला', 'अमरूद'],
    rightAnswer: 'C', // केला
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 19',
    question: 'हरे रंग की सब्जी का नाम बताइए।',
    options: ['आलू', 'टमाटर', 'पालक', 'प्याज'],
    rightAnswer: 'C', // पालक
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 20',
    question: 'आकाश का रंग क्या है?',
    options: ['हरा', 'लाल', 'नीला', 'पीला'],
    rightAnswer: 'C', // नीला
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 21',
    question: 'घास का रंग क्या है?',
    options: ['नीला', 'हरा', 'पीला', 'लाल'],
    rightAnswer: 'B', // हरा
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 22',
    question: 'दूध का रंग क्या है?',
    options: ['काला', 'सफेद', 'भूरा', 'गुलाबी'],
    rightAnswer: 'B', // सफेद
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 23',
    question: 'एक सप्ताह में कितने दिन होते हैं?',
    options: ['पांच', 'छह', 'सात', 'आठ'],
    rightAnswer: 'C', // सात
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 24',
    question: 'एक त्रिभुज में कितनी भुजाएँ होती हैं?',
    options: ['दो', 'तीन', 'चार', 'पांच'],
    rightAnswer: 'B', // तीन
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 25',
    question: 'प्यास लगने पर हम क्या पीते हैं?',
    options: ['दूध', 'पानी', 'जूस', 'चाय'],
    rightAnswer: 'B', // पानी
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 26',
    question: 'भूख लगने पर हम क्या खाते हैं?',
    options: ['पानी', 'फल', 'भोजन', 'मिठाई'],
    rightAnswer: 'C', // भोजन
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 27',
    question: 'हम कब सोते हैं?',
    options: ['सुबह', 'दोपहर', 'शाम', 'रात'],
    rightAnswer: 'D', // रात
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 28',
    question: 'हमें रोशनी और गर्मी कौन देता है?',
    options: ['चंद्रमा', 'तारे', 'सूर्य', 'बिजली'],
    rightAnswer: 'C', // सूर्य
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 29',
    question: 'रंगों का त्योहार कौन सा है?',
    options: ['दीपावली', 'होली', 'क्रिसमस', 'ईद'],
    rightAnswer: 'B', // होली
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 30',
    question: 'रोशनी का त्योहार कौन सा है?',
    options: ['होली', 'दीपावली', 'रक्षाबंधन', 'दशहरा'],
    rightAnswer: 'B', // दीपावली
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 31',
    question: 'हमें कौन पढ़ाता है?',
    options: ['डॉक्टर', 'पुलिस', 'शिक्षक', 'किसान'],
    rightAnswer: 'C', // शिक्षक
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 32',
    question: 'हमारे कपड़े कौन सिलता है?',
    options: ['बढ़ई', 'दर्जी', 'मोची', 'नाविक'],
    rightAnswer: 'B', // दर्जी
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 33',
    question: 'भारत की राजधानी क्या है?',
    options: ['मुंबई', 'कोलकाता', 'चेन्नई', 'दिल्ली'],
    rightAnswer: 'D', // दिल्ली
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 34',
    question: 'भारत की मुद्रा क्या है?',
    options: ['डॉलर', 'यूरो', 'रुपया', 'येन'],
    rightAnswer: 'C', // रुपया
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 35',
    question: 'एक साल में कितने महीने होते हैं?',
    options: ['दस', 'ग्यारह', 'बारह', 'तेरह'],
    rightAnswer: 'C', // बारह
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 36',
    question: 'साल का पहला महीना कौन सा है?',
    options: ['दिसंबर', 'जनवरी', 'फरवरी', 'मार्च'],
    rightAnswer: 'B', // जनवरी
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 37',
    question: 'किस मौसम में हम गर्म कपड़े पहनते हैं?',
    options: ['गर्मी', 'सर्दी', 'बारिश', 'वसंत'],
    rightAnswer: 'B', // सर्दी
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 38',
    question: 'किस मौसम में बारिश होती है?',
    options: ['गर्मी', 'सर्दी', 'बारिश', 'वसंत'],
    rightAnswer: 'C', // बारिश
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 39',
    question: 'हमें सुबह कब उठना चाहिए?',
    options: ['देर से', 'जल्दी', 'दोपहर में', 'कभी भी'],
    rightAnswer: 'B', // जल्दी
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 40',
    question: 'हमें अपने नाखून कब काटने चाहिए?',
    options: ['कभी नहीं', 'कभी-कभी', 'नियमित रूप से', 'जब मन करे'],
    rightAnswer: 'C', // नियमित रूप से
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 41',
    question: 'भारत का सबसे ऊँचा पर्वत कौन सा है?',
    options: ['कंचनजंगा', 'माउंट एवरेस्ट', 'नंदा देवी', 'के2'],
    rightAnswer: 'A', // कंचनजंगा (भारत में सबसे ऊँचा, एवरेस्ट नेपाल में है)
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 42',
    question: 'भारत का सबसे बड़ा राज्य (क्षेत्रफल के अनुसार) कौन सा है?',
    options: ['उत्तर प्रदेश', 'मध्य प्रदेश', 'महाराष्ट्र', 'राजस्थान'],
    rightAnswer: 'D', // राजस्थान
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 43',
    question: 'भारत का सबसे छोटा राज्य (क्षेत्रफल के अनुसार) कौन सा है?',
    options: ['सिक्किम', 'गोवा', 'त्रिपुरा', 'नागालैंड'],
    rightAnswer: 'B', // गोवा
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 44',
    question: 'भारत में कितने राज्य हैं?',
    options: ['27', '28', '29', '30'],
    rightAnswer: 'B', // 28 (वर्तमान)
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 45',
    question: 'भारत में कितने केंद्र शासित प्रदेश हैं?',
    options: ['7', '8', '9', '10'],
    rightAnswer: 'B', // 8 (वर्तमान)
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 46',
    question: 'भारत के पहले प्रधान मंत्री कौन थे?',
    options: ['महात्मा गांधी', 'सरदार पटेल', 'जवाहरलाल नेहरू', 'इंदिरा गांधी'],
    rightAnswer: 'C', // जवाहरलाल नेहरू
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 47',
    question: 'भारत की पहली महिला प्रधान मंत्री कौन थीं?',
    options: ['सरोजिनी नायडू', 'इंदिरा गांधी', 'प्रतिभा पाटिल', 'सुषमा स्वराज'],
    rightAnswer: 'B', // इंदिरा गांधी
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 48',
    question: 'भारत का स्वतंत्रता दिवस कब मनाया जाता है?',
    options: ['26 जनवरी', '15 अगस्त', '2 अक्टूबर', '14 नवंबर'],
    rightAnswer: 'B', // 15 अगस्त
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 49',
    question: 'भारत का गणतंत्र दिवस कब मनाया जाता है?',
    options: ['15 अगस्त', '2 अक्टूबर', '26 जनवरी', '14 नवंबर'],
    rightAnswer: 'C', // 26 जनवरी
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 50',
    question: 'महात्मा गांधी का जन्मदिन कब मनाया जाता है?',
    options: ['15 अगस्त', '26 जनवरी', '2 अक्टूबर', '14 नवंबर'],
    rightAnswer: 'C', // 2 अक्टूबर
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 51',
    question: 'दिल्ली में इंडिया गेट किसने बनवाया था?',
    options: ['अकबर', 'शाहजहाँ', 'अंग्रेज', 'मुगल'],
    rightAnswer: 'C', // अंग्रेज
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 52',
    question: 'आगरा में ताजमहल किसने बनवाया था?',
    options: ['अकबर', 'शाहजहाँ', 'हुमायूं', 'बाबर'],
    rightAnswer: 'B', // शाहजहाँ
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 53',
    question: 'भारत का सबसे बड़ा महासागर कौन सा है?',
    options: ['अटलांटिक महासागर', 'प्रशांत महासागर', 'हिंद महासागर', 'आर्कटिक महासागर'],
    rightAnswer: 'C', // हिंद महासागर (भारत के पास)
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 54',
    question: 'दुनिया का सबसे बड़ा महाद्वीप कौन सा है?',
    options: ['अफ्रीका', 'यूरोप', 'एशिया', 'उत्तरी अमेरिका'],
    rightAnswer: 'C', // एशिया
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 55',
    question: 'हमारे सौर मंडल में कितने ग्रह हैं?',
    options: ['सात', 'आठ', 'नौ', 'दस'],
    rightAnswer: 'B', // आठ
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 56',
    question: 'सूर्य के सबसे करीब कौन सा ग्रह है?',
    options: ['पृथ्वी', 'मंगल', 'बुध', 'शुक्र'],
    rightAnswer: 'C', // बुध
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 57',
    question: 'पृथ्वी को नीला ग्रह क्यों कहते हैं?',
    options: ['क्योंकि इसमें बहुत सारी चट्टानें हैं', 'क्योंकि इसमें बहुत सारा पानी है', 'क्योंकि इसमें बहुत सारे पेड़ हैं', 'क्योंकि इसमें बहुत सारी रेत है'],
    rightAnswer: 'B', // क्योंकि इसमें बहुत सारा पानी है
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 58',
    question: 'कौन सा जानवर रेगिस्तान का जहाज कहलाता है?',
    options: ['घोड़ा', 'ऊंट', 'हाथी', 'जेबरा'],
    rightAnswer: 'B', // ऊंट
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 59',
    question: 'कौन सा पक्षी उड़ नहीं सकता?',
    options: ['कौवा', 'तोता', 'पेंग्विन', 'गौरैया'],
    rightAnswer: 'C', // पेंग्विन
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 60',
    question: 'कौन सा जानवर सबसे तेज दौड़ता है?',
    options: ['शेर', 'बाघ', 'चीता', 'हिरण'],
    rightAnswer: 'C', // चीता
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 61',
    question: 'कौन सा जानवर सबसे बड़ा होता है?',
    options: ['हाथी', 'नीली व्हेल', 'जिराफ', 'गेंडा'],
    rightAnswer: 'B', // नीली व्हेल
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 62',
    question: 'एक दिन में कितने घंटे होते हैं?',
    options: ['12', '18', '24', '30'],
    rightAnswer: 'C', // 24
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 63',
    question: 'एक घंटे में कितने मिनट होते हैं?',
    options: ['30', '45', '60', '90'],
    rightAnswer: 'C', // 60
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 64',
    question: 'एक मिनट में कितने सेकंड होते हैं?',
    options: ['30', '45', '60', '90'],
    rightAnswer: 'C', // 60
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 65',
    question: 'हमें सांस लेने के लिए क्या चाहिए?',
    options: ['पानी', 'भोजन', 'हवा', 'मिट्टी'],
    rightAnswer: 'C', // हवा
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 66',
    question: 'पौधे हमें क्या देते हैं?',
    options: ['पानी', 'भोजन', 'पत्थर', 'रेत'],
    rightAnswer: 'B', // भोजन (फल, सब्जियां, अनाज)
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 67',
    question: 'हमारा राष्ट्रीय ध्वज क्या कहलाता है?',
    options: ['तिरंगा', 'झंडा', 'पताका', 'ध्रुव'],
    rightAnswer: 'A', // तिरंगा
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 68',
    question: 'तिरंगे में कितने रंग होते हैं?',
    options: ['दो', 'तीन', 'चार', 'पांच'],
    rightAnswer: 'B', // तीन
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 69',
    question: 'तिरंगे के बीच में कौन सा चक्र होता है?',
    options: ['सूर्य चक्र', 'चंद्र चक्र', 'अशोक चक्र', 'धर्म चक्र'],
    rightAnswer: 'C', // अशोक चक्र
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 70',
    question: 'अशोक चक्र में कितनी तीलियाँ होती हैं?',
    options: ['12', '18', '24', '32'],
    rightAnswer: 'C', // 24
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 71',
    question: 'भारत का राष्ट्रपिता कौन है?',
    options: ['जवाहरलाल नेहरू', 'सरदार पटेल', 'महात्मा गांधी', 'सुभाष चंद्र बोस'],
    rightAnswer: 'C', // महात्मा गांधी
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 72',
    question: 'महात्मा गांधी को और किस नाम से जाना जाता है?',
    options: ['नेताजी', 'बापू', 'चाचा', 'गुरुदेव'],
    rightAnswer: 'B', // बापू
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 73',
    question: 'बच्चों का दिन कब मनाया जाता है?',
    options: ['5 सितंबर', '14 नवंबर', '25 दिसंबर', '2 अक्टूबर'],
    rightAnswer: 'B', // 14 नवंबर (जवाहरलाल नेहरू के जन्मदिन पर)
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 74',
    question: 'शिक्षक दिवस कब मनाया जाता है?',
    options: ['14 नवंबर', '5 सितंबर', '2 अक्टूबर', '26 जनवरी'],
    rightAnswer: 'B', // 5 सितंबर (डॉ. सर्वपल्ली राधाकृष्णन के जन्मदिन पर)
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 75',
    question: 'कौन सा पक्षी अंडे देता है?',
    options: ['कुत्ता', 'बिल्ली', 'मुर्गी', 'गाय'],
    rightAnswer: 'C', // मुर्गी
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 76',
    question: 'कौन सा जानवर हमें ऊन देता है?',
    options: ['गाय', 'भेड़', 'घोड़ा', 'बकरी'],
    rightAnswer: 'B', // भेड़
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 77',
    question: 'कौन सा जानवर अपने बच्चे को दूध पिलाता है?',
    options: ['मछली', 'साँप', 'गाय', 'छिपकली'],
    rightAnswer: 'C', // गाय
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 78',
    question: 'किस जानवर की लंबी गर्दन होती है?',
    options: ['हाथी', 'जिराफ', 'शेर', 'बाघ'],
    rightAnswer: 'B', // जिराफ
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 79',
    question: 'कौन सा जानवर पानी में और जमीन पर दोनों जगह रह सकता है?',
    options: ['बिल्ली', 'कुत्ता', 'मगरमच्छ', 'घोड़ा'],
    rightAnswer: 'C', // मगरमच्छ
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 80',
    question: 'किस पक्षी की आवाज़ बहुत मीठी होती है?',
    options: ['कौवा', 'कोयल', 'उल्लू', 'चील'],
    rightAnswer: 'B', // कोयल
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 81',
    question: 'कौन सा पक्षी रात में जागता है?',
    options: ['कौवा', 'गौरैया', 'उल्लू', 'तोता'],
    rightAnswer: 'C', // उल्लू
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 82',
    question: 'कौन सा फल खट्टा होता है?',
    options: ['केला', 'आम', 'नींबू', 'सेब'],
    rightAnswer: 'C', // नींबू
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 83',
    question: 'कौन सी सब्जी जमीन के नीचे उगती है?',
    options: ['टमाटर', 'बैंगन', 'आलू', 'पत्तागोभी'],
    rightAnswer: 'C', // आलू
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 84',
    question: 'कौन सा फल बाहर से हरा और अंदर से लाल होता है?',
    options: ['सेब', 'तरबूज', 'आम', 'अंगूर'],
    rightAnswer: 'B', // तरबूज
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 85',
    question: 'किस मौसम में हम स्वेटर पहनते हैं?',
    options: ['गर्मी', 'सर्दी', 'बारिश', 'वसंत'],
    rightAnswer: 'B', // सर्दी
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 86',
    question: 'किस मौसम में हम पतंग उड़ाते हैं?',
    options: ['गर्मी', 'सर्दी', 'बारिश', 'वसंत'],
    rightAnswer: 'D', // वसंत (बसंत पंचमी)
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 87',
    question: 'हमें कौन ठीक करता है जब हम बीमार होते हैं?',
    options: ['शिक्षक', 'पुलिस', 'डॉक्टर', 'किसान'],
    rightAnswer: 'C', // डॉक्टर
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 88',
    question: 'हमें कौन बचाता है चोरों से?',
    options: ['डॉक्टर', 'पुलिस', 'शिक्षक', 'किसान'],
    rightAnswer: 'B', // पुलिस
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 89',
    question: 'कौन हमारे लिए अनाज उगाता है?',
    options: ['बढ़ई', 'दर्जी', 'किसान', 'मोची'],
    rightAnswer: 'C', // किसान
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 90',
    question: 'हमें लकड़ी का सामान कौन बनाकर देता है?',
    options: ['दर्जी', 'मोची', 'बढ़ई', 'किसान'],
    rightAnswer: 'C', // बढ़ई
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 91',
    question: 'हमें जूते कौन बनाकर देता है?',
    options: ['दर्जी', 'मोची', 'बढ़ई', 'किसान'],
    rightAnswer: 'B', // मोची
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 92',
    question: 'सुबह के समय आसमान में क्या दिखता है?',
    options: ['चंद्रमा', 'तारे', 'सूर्य', 'बादल'],
    rightAnswer: 'C', // सूर्य
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 93',
    question: 'रात के समय आसमान में क्या दिखता है?',
    options: ['सूर्य', 'बादल', 'चंद्रमा और तारे', 'इंद्रधनुष'],
    rightAnswer: 'C', // चंद्रमा और तारे
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 94',
    question: 'इंद्रधनुष में कितने रंग होते हैं?',
    options: ['पांच', 'छह', 'सात', 'आठ'],
    rightAnswer: 'C', // सात
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 95',
    question: 'ट्रैफिक लाइट में हरे रंग का क्या मतलब है?',
    options: ['रुको', 'चलो', 'धीरे चलो', 'तैयार हो जाओ'],
    rightAnswer: 'B', // चलो
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 96',
    question: 'ट्रैफिक लाइट में लाल रंग का क्या मतलब है?',
    options: ['चलो', 'रुको', 'धीरे चलो', 'तैयार हो जाओ'],
    rightAnswer: 'B', // रुको
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 97',
    question: 'हमें सड़क पर कहाँ चलना चाहिए?',
    options: ['बीच में', 'फुटपाथ पर', 'कहीं भी', 'तेज दौड़ते हुए'],
    rightAnswer: 'B', // फुटपाथ पर
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 98',
    question: 'हमें कूड़ा कहाँ फेंकना चाहिए?',
    options: ['सड़क पर', 'घर में', 'कूड़ेदान में', 'कहीं भी'],
    rightAnswer: 'C', // कूड़ेदान में
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 99',
    question: 'हमें अपने बड़ों का क्या करना चाहिए?',
    options: ['बात नहीं माननी चाहिए', 'सम्मान करना चाहिए', 'परेशान करना चाहिए', 'मजाक उड़ाना चाहिए'],
    rightAnswer: 'B', // सम्मान करना चाहिए
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  },
  {
    id: 'Que 100',
    question: 'हमें सुबह उठकर सबसे पहले क्या करना चाहिए?',
    options: ['खेलना', 'सोना', 'दांत साफ करना', 'खाना खाना'],
    rightAnswer: 'C', // दांत साफ करना
    image: '',
    optionBig: 'n',
    istrueFalse: 'n'
  }
];

// आप इस 'cardsData' सरणी का उपयोग अपने क्विज़ एप्लिकेशन में कर सकते हैं।
