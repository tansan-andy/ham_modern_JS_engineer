const profile = { nickname: `Ham`, age: 45 };
const { nickname, ...rest } = profile;
console.log(nickname);
console.log(rest);

const printObject = () => {
  console.log(`nickname: ${profile.nickname}`);
};

printObject(profile);
