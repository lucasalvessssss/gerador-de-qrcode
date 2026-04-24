import permittedCharacters from "./utils/permitted-characters.js";
async function handle(){
  let password = "";
  const passwordLegth = Number(process.env.PASSWORD_LENGTH);
  const characters = await permittedCharacters();
   for(let i = 0; i < passwordLegth; i++){
    const index = Math.floor(Math.random() * characters.length);
    password +=characters[index];
  }
  return password;
};

export default handle;
