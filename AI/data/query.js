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

const animalM = [
  {
    keywords: [["what is"], ["dog"]],
    action: () => answerShow("🐶 Dog is an Animal")
  },
];
const cat = [
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
    keywords: [["video", "videos"], ["joke", "comedy"]],
    action: () =>
      showYoutubeVideo("Comedy Video", "GAWyCkvv1Hw")
  },

];