//  offers array
const offers = [
  "30% Off on Cleaning Services",
  "20% less on Cleaning Services",
  "50% Off on Cleaning Services",
];

// services array
const Services = [
  {
    serviceName: "Normal Wash",
    img: require("../../assets/img/normalwash.png"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi, sed magna dictumst faucibus at morbi. Hac mattis faucibus erat ut enim.",
    price: 1000,
    newPrice: 800,
    time: 4,
    warranty: 1,
    offForMember: 10,
  },
  {
    serviceName: "Deep Cleaning",
    img: require("../../assets/img/deepwash.png"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi, sed magna dictumst faucibus at morbi. Hac mattis faucibus erat ut enim.",
    price: 1500,
    newPrice: 1200,
    time: 6,
    warranty: 1,
    offForMember: 10,
  },
];

// trending services array
const TrendingServices = [
  {
    id: 1,
    serviceName: "Normal Wash",
    img: require("../../assets/img/normalwash.png"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi, sed magna dictumst faucibus at morbi. Hac mattis faucibus erat ut enim.",
    price: 1000,
    newPrice: 800,
    time: 3,
    warranty: 1,
    offForMember: 10,
  },
  {
    id: 2,
    serviceName: "Deep Cleaning",
    img: require("../../assets/img/deepwash.png"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi, sed magna dictumst faucibus at morbi. Hac mattis faucibus erat ut enim.",
    price: 1500,
    newPrice: 1200,
    time: 5,
    warranty: 1,
    offForMember: 10,
  },
  {
    id: 3,
    serviceName: "Normal Wash",
    img: require("../../assets/img/normalwash.png"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi, sed magna dictumst faucibus at morbi. Hac mattis faucibus erat ut enim.",
    price: 1000,
    newPrice: 800,
    time: 2,
    warranty: 1,
    offForMember: 10,
  },
];

// fQA data
const FAQs = [
  {
    title: "How this service is going to affect my vehicle condition?",
    content:
      "The following terms and conditions, together with any referenced documents form a legal agreement between you and your employer, employees,agents, contractors and any other entity on whose behalf you accept these terms",
  },
  {
    title: "Why should I choose this service?",
    content:
      "A Privacy Policy agreement is the agreement where you specify if you collect personal data from your users,what kind of personal data you collect and what you do with that data.",
  },
  {
    title: "What is the payment method?",
    content:
      "Our Return & Refund Policy template lets you get started with a Return and Refund Policy agreement.This template is free to download and use. According to TrueShip study, over 60% of customers review a Return/Refund Policy before they make a purchasing decision.",
  },
  {
    title: "What if cleaning is not done properly?",
    content:
      "Our Return & Refund Policy template lets you get started with a Return and Refund Policy agreement.This template is free to download and use. According to TrueShip study, over 60% of customers review a Return/Refund Policy before they make a purchasing decision.",
  },
  {
    title: "How can Premium Members avail the discount offers?",
    content:
      "Our Return & Refund Policy template lets you get started with a Return and Refund Policy agreement.This template is free to download and use. According to TrueShip study, over 60% of customers review a Return/Refund Policy before they make a purchasing decision.",
  },
];

const CustomerRating = [
  {
    id: 1,
    name: "Vishal Chaurasiya",
    img: require("../../assets/img/customer.png"),
    rating: 4.2,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum velit sapien sed sed proin commodo. Vel, dictum consequat sed massa mauris vestibulum elementum.",
  },
  {
    id: 2,
    name: "Rohit Barate",
    img: require("../../assets/img/customer.png"),
    rating: 4.9,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum velit sapien sed sed proin commodo. Vel, dictum consequat sed massa mauris vestibulum elementum.",
  },
  {
    id: 4,
    name: "saurabh More",
    img: require("../../assets/img/customer.png"),
    rating: 3.9,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum velit sapien sed sed proin commodo. Vel, dictum consequat sed massa mauris vestibulum elementum.",
  },
  {
    id: 5,
    name: "Rajesh Shinde",
    img: require("../../assets/img/customer.png"),
    rating: 3.7,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum velit sapien sed sed proin commodo. Vel, dictum consequat sed massa mauris vestibulum elementum.",
  },
];

export default { offers, TrendingServices, Services, FAQs, CustomerRating };
