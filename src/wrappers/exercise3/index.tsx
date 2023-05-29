import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { getSynonyms } from './service';

type TSynonim = {
  word: string,
  score: number,
}

export const Exercise3 = () => {
    const [synonyms,setSynonims] = useState<TSynonim[]>();
    const [word, setWord] = useState<string>('')
    const [errorMessage,setErrorMessage] = useState<string>();
    const wordInputRef = useRef<HTMLInputElement>(null);
    const rootClassName = 'exercise3';

    const handleGetSynonyms = async (e: FormEvent) => {
      if(!wordInputRef.current) return;
      else setWord(wordInputRef.current?.value);

      const synonyms = await getSynonyms(word);
      setSynonims(synonyms); 
    }
    
    
  return (
    <section className={rootClassName}>
      <form action="GET" onSubmit={(e) => handleGetSynonyms}>
        <label htmlFor="word-input">Word</label>
        <input value={word} type="text" ref={wordInputRef} onChange={(e)=> setWord(e.currentTarget.value)} id="word-input" name="word"/>
        <button onClick={(e)=> handleGetSynonyms}>Get Synonims</button>
      </form>
        <ul className="synonyms-list">
          { synonyms  && synonyms.length >= 0 && synonyms.map(synonym => {
            return (
              <li className="synonyms-list__item" key={JSON.stringify(synonym)} onClick={()=> setWord(synonym.word)}>{synonym.word}</li>
            )})
          }
          {
            synonyms && synonyms.length === 0 && (<div>no synonyms for this word</div>)
          }
        </ul>
        { errorMessage && (<div className='errorMessage'></div>)}
    </section>
  )
}
