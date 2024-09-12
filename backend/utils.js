export function astro_prompt(name, age, star_sign, tob) {
  const prompt = `
  take the inputs [${name},${age},${star_sign},${tob}] into consideration and generate a quirky astrology response 
  based in the vedhic south indian astrology rules in the format qr:[the response(do not mention the place of birth just start by their name)]

  generate their coming weeks astrology prediction based on south indian astrology (default place of birth to vishakapatnam - India)
  and not mention it in the response

  generate the planet influences for the person involving different planets and their part in the life with the rules of south indian
  vedhic astrology rules
    

  return all of this as a html div and each element as its own html element 
    `;

  return prompt;
}
