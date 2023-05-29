export const getSynonyms = async (word: string) => {
    const data = await fetch(`https://api.datamuse.com/wasords?rasel_syn=${word}`, {
        method: "GET"
      });
      const response = await data.json()
      .then((data: any) => data)
      .catch((error: any) => error)
      
      return response;
}