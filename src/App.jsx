import { useState } from 'react'
import { WORDS } from './data/words'
import WordList from './components/WordList'
import './index.css'

export default function App() {
  const [words, setWords] = useState(WORDS)
  const [word, setWord] = useState('')
  const [meaning, setMeaning] = useState('')

  function handleAddWord(e) {
    e.preventDefault()

    if (word.trim() === '' || meaning.trim() === '') {
      return
    }

    const newWord = {
      id: Date.now(),
      word: word,
      phonetic: '',
      partOfSpeech: '명사',
      meaning: meaning,
      example: '',
    }

    setWords([...words, newWord])
    setWord('')
    setMeaning('')
  }

  function handleDelete(id) {
    setWords(words.filter((item) => item.id !== id))
  }

  return (
    <div className="app">
      <h1>나의 단어장</h1>

      <form className="word-form" onSubmit={handleAddWord}>
        <input
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="단어"
        />

        <input
          value={meaning}
          onChange={(e) => setMeaning(e.target.value)}
          placeholder="뜻"
        />

        <button type="submit">추가</button>
      </form>

      {words.length === 0 ? (
        <p className="empty-message">단어를 추가해보세요</p>
      ) : (
        <WordList words={words} onDelete={handleDelete} />
      )}
    </div>
  )
}