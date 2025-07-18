//Comedy-joke-Cat Video-Videos, what is cat-dog-banana-vegetable-vegetables-fruit-fruits, fruit-fruits-vegetable-vegetables name-names



const fruit = [
  {
    keywords: [["what is"], ["banana"]],
    action: () => answerShow("🍌 Banana is a Fruit")
  },
  {
    keywords: [["what is"], ["fruit", "fruits"]],
    action: () => answerShow("Fruit is a Fruit")
  },

  {
    keywords: [["fruit", "fruits"], ["name", "names"],],
    action: (count = 5) => printTable("fruit", Fruits, count)
  }


];


const vegetable = [
  {
    keywords: [["what is"], ["banana"]],
    action: () => answerShow("🥦 Banana is a Vegetable")
  },
  {
    keywords: [["what is"], ["vegetable", "vegetables"]],
    action: () => answerShow("Vegetable is a Vegetable")
  },
  {
    keywords: [["vegetable", "vegetables"], ["name", "names"],],
    action: (count = 5) => printTable("Vegetables", Vegetables, count)
  }
];

const animal = [
  {
    keywords: [["what is"], ["dog"]],
    action: () => answerShow("🐶 Dog is an Animal, वफ़ादार कुत्ता एक गाँव में राजू नाम का एक लड़का रहता था। उसके पास एक प्यारा सा कुत्ता था, जिसका नाम था शेरू।")
  },
];
const cat = [
  {
    keywords: [["what is", "tell", "till"], ["story"]],
    action: () => answerShow("वफ़ादार कुत्ता.  एक गाँव में राजू नाम का एक लड़का रहता था। उसके पास एक प्यारा सा कुत्ता था, जिसका नाम था शेरू।")
  },
  {
    keywords: [["what is"], ["cat"]],
    action: () => imageShow("🥭 Mango Image", "https://i.ibb.co/zh7rm1m/mango.jpg")
  },
  {
    keywords: [["video", "videos"], ["cat"]],
    action: () =>
      showYoutubeVideo("Cat Video", "PAORQoMvSdY")
  },
  {
    keywords: [["play", "show", "give"], ["video", "videos"], ["joke", "comedy"]],
    action: () =>
      showYoutubeVideo("Comedy Video", "GAWyCkvv1Hw")
  },

];

const ask = [
  {
    keywords: [["माफ करना", "maaf karna", "maf karna", "इसके बारे", "iske bare",  "पता नहीं ", "pata nahi","pata nahin", "pata nhi"]],
    action: () => nextQue("अगला question बोलो ना")
  },
]