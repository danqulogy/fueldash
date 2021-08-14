
export function EnumToArray(enumMember: any ) {
  return Object.keys(enumMember)
    .filter(StringIsNumber)
    .map((key) => enumMember[key]);
}

const StringIsNumber = (value:string|number) => isNaN(Number(value));
