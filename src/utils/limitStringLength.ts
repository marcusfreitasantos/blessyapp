export const limitStringLength = (contentStr: string, limitLength: number) => {
  let formatedString: string[] = [];
  let strCount = 0;

  contentStr.split("").map((str) => {
    strCount++;
    if (strCount <= limitLength) {
      formatedString.push(str);
    }
  });
  return formatedString.join("");
};
