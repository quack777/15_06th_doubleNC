import { waringTitle } from '../constants/waringTitle';

export function regExp(str: string): undefined | string[][] {
  var reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
  if (reg.test(str)) {
    const regularStr = str.replace(reg, '').split('\n');
    const targetStr = regularStr
      .map((word) => {
        return word.trim();
      })
      .filter((word) => word !== '');

    let newParseStr = [];
    let tmpArr: string[] = [];
    let prevWaringTitle: string = '';
    console.log(targetStr);

    let pt = 0;

    for (let x of targetStr) {
      if (waringTitle.includes(x)) {
        if (prevWaringTitle !== x) {
          prevWaringTitle = x;
          if (tmpArr.length !== 0) {
            newParseStr.push(tmpArr);
            tmpArr = [];
          }
        }
      }
      tmpArr.push(x);
      pt++;
      if (pt === targetStr.length - 1) newParseStr.push(tmpArr);
    }
    return newParseStr;
  }
}
