import React from 'react'
import { useSpeech } from 'react-use'

const text = ''

const voices = window.speechSynthesis.getVoices()

const Demo = () => {
  const state = useSpeech(text, {
    rate: 0.8,
    pitch: 0.5,
    voice: voices[0],
  })

  return <pre>{JSON.stringify(state, null, 2)}</pre>
}

export default Demo
