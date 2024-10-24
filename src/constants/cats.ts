import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.bmp";
import image3 from "../assets/images/image3.bmp";

export const cats = [
  {
    id: 1,
    name: "Whiskers",
    description: "A playful tabby cat who loves chasing laser pointers and cuddling.",
    imgUrl: image1, // использовать импортированные изображения
    interests: ["playing", "sleeping", "eating", "chasing laser pointers"],
  },
  {
    id: 2,
    name: "Shadow",
    description: "A sleek black cat with a mysterious aura, always lurking in the shadows.",
    imgUrl: image2,
    interests: ["hiding", "nighttime walks", "watching birds", "being mysterious"],
  },
  {
    id: 3,
    name: "Luna",
    description: "A graceful Siamese cat who loves sunbathing and exploring high places.",
    imgUrl: image3,
    interests: ["sunbathing", "climbing", "exploring", "purring loudly"],
  }
];
