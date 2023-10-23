export function shuffleArray(array) {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }
  

  export function removeItemsWithMatchingLink(data,url) {
    // // console.log("Item link "+ item.link);
    // data.forEach((element) => console.log(element.link));
    // console.log("Current url " + url);  
    return data.filter(item => url.indexOf(item.link) === -1);
  }