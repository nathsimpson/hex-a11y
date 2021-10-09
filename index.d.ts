/** A color in hexadecimal notation. e.g. #009aef */
type hexcolor = string;

export default function hexAlly(
  input: hexcolor,
  config?: { dark: hexcolor; light: hexcolor }
): hexcolor;
