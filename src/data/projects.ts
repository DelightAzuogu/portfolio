import { githubRepo } from './profile'
import type { Link } from './types'

export type Project = {
  name: string
  /** Main stack, shown at the right of the row */
  kind: string
  summary: string
  description: string
  /** Headline outcome, shown large at the top of the README */
  result?: { value: string; label: string }
  tags?: string[]
  links?: Link[]
}

const repo = (name: string): Link => ({ label: 'source', href: githubRepo(name) })

// Facts come from the CV, stacks from each repo's dependencies.
export const projects: Project[] = [
  {
    name: 'phishing-url-detector',
    kind: 'python, llm',
    summary: 'LLMs that flag phishing URLs',
    description:
      'Fine-tuned open-source models such as Gemma 3 and Qwen 3 to flag phishing URLs, then compared them with commercial LLMs. Part of my MSc thesis.',
    result: { value: '88%', label: 'accuracy detecting phishing URLs' },
    tags: ['Transformers', 'PEFT', 'Gemma 3', 'Qwen 3', 'Ollama'],
    links: [repo('llm-testing-for-thesis')],
  },
  {
    name: 'ocr-model',
    kind: 'tensorflow',
    summary: 'Reads characters from images',
    description:
      'Trained a character recognition model on English character datasets. Presented at the Digital Global Future Conference.',
    result: { value: '96.8%', label: 'accuracy on text datasets' },
    tags: ['TensorFlow', 'Keras', 'scikit-learn', 'pandas'],
    links: [repo('OCR-project')],
  },
  {
    name: 'campus-voting',
    kind: 'react, express',
    summary: 'Secure elections, results in seconds',
    description: 'A secure voting system for campus elections, with JWT sign-in and real-time updates over Socket.IO.',
    result: { value: 'seconds', label: 'to process results, down from hours' },
    tags: ['React', 'Express', 'MongoDB', 'Socket.IO', 'JWT'],
    links: [repo('voting-system')],
  },
  {
    name: 'live-auction',
    kind: 'react, socket.io',
    summary: 'Real-time bidding for many users at once',
    description:
      'An auction platform with live bidding over WebSockets. Many users can bid on the same item at once and see each new bid instantly.',
    tags: ['React', 'MUI', 'Express', 'Socket.IO', 'MySQL'],
    links: [repo('auction_system_with_websockets')],
  },
  {
    name: 'pantry-organiser',
    kind: 'flutter, asp.net',
    summary: "Recipe ideas from what's in your pantry",
    description:
      'A cross-platform app that recommends recipes with AI, so food already in the pantry gets used instead of wasted.',
    tags: ['Flutter', 'Riverpod', 'ASP.NET', 'C#'],
    links: [repo('pantry-organiser')],
  },
]
