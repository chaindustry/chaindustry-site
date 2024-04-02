// export const appName = "https://chainapp.vercel.app";
export const appName = "https://app.chaindustry.io";
const getTasks = [
  "EngageToEarn",
  // "PromoteToearn",
  // "ChatToEarn",
  "PredictToEarn",
  "ReferToEarn",
  // "VoteToEarn",
  "LearnToEarn",
  // "StreamToEarn",
  // "StakeToEarn",
  // "PostToEarn",
  "SleepToEarn"
].map((c) => ` <b>${c}</b>`);
console.log(getTasks);
export const faqs = [
  {
    id: 1,
    title: "How do i get started?",
    text: `To get started, visit <a href='https://www.app.chaindustry.io/signup'>app.chaindustry.io</a> and join our communities to participate in our DoToEarn activities until the app is launched where you can sign up and fully participate in chaindustry's DoToEarn.`
  },
  {
    id: 2,
    title: "How can i join chaindustry as a user?",
    text: "We have made joining our digital legion as less complicated as possible. Start with following/joining our official media communities, our and our partners community."
  },
  {
    id: 3,
    title: "How can i join chaindustry as a partner?",
    text: "To become a partner, please contact the CEO or any of the team member to discuss terms of partnership and mutual benefits for both parties."
  },
  {
    id: 4,
    title: "What is chaindustry DoToEarn?",
    text: `Our DoToEarn concept entails leveraging on simple task that can be done anywhere for free.

Chaindustry's DoToEarn has made it possible for users to start earning in different sectors varying from ${getTasks} and more to come.`
  },
  {
    id: 5,
    title: "Do i need a start up capital to join chaindustry as a user?",
    text: "No you do not need a capital to join us. Chaindustry platform is free and open to all active and intending users."
  }
];
