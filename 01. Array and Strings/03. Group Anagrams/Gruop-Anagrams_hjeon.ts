function groupAnagrams(strs: string[]): string[][] {
  let map: any = {}
  let result: string[][] = [];
  
  for (let str of strs) {
      let key: string = str.split('').sort().join('');
      map[key] = map[key] ? [...map[key], str] : [str]
  }  
  for (let element in map)
    result.push(map[element])  
  return (result)
};