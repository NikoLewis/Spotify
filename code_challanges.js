const sortByStrings = (s,t) => {
  let result= [];
  let hash={};

  for (let i = 0; i < t.length; i++){
    hash[t[i]] = 0; 
  }

  for(let i = 0; i < s.length; i++){
    if(t.includes(s[i]) === true ) {
      hash[s[i]] += 1;
    } 
  } 

  for (x in hash) {
    result.push(x.repeat(hash[x]))
  }
  
  return result.join('');
}

sortByStrings('good','odg');