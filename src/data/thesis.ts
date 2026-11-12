import { githubRepo, profile } from './profile'
import type { Link } from './types'

const source = githubRepo('llm-testing-for-thesis')

export const thesis: {
  title: string
  year: string
  /** Man page sections, in order: [heading, text] */
  sections: [string, string][]
  seeAlso: Link[]
} = {
  title: 'An Evaluation of Fine-Tuned Open-Source and Commercial LLMs for URL-Based Phishing Detection',
  year: '2026',
  sections: [
    ['AUTHOR', profile.name],
    ['DEGREE', 'MSc Information Technology, Cyprus International University'],
    [
      'ABSTRACT',
      'Phishing attacks often hide behind deceptive URLs, so checking the URL text alone makes a fast, cheap first line of defence. I tested commercial LLMs (Gemini 2.5 Flash, GPT-5 Mini) against open-source models (Gemma 3, Qwen 3) on balanced datasets of 20,000 and 100,000 URLs, first zero-shot, then with the open-source models fine-tuned using LoRA. The commercial models were the most precise, with Gemini 2.5 Flash above 92%, but they missed more phishing URLs and were slower because every check is an API call. The fine-tuned open-source models caught far more, with Qwen 3 above 95% recall, and ran faster, which makes them the more scalable choice for large-scale phishing detection.',
    ],
    ['KEYWORDS', 'LLMs, fine-tuning, phishing detection, URL classification'],
  ],
  seeAlso: [{ label: 'source code', href: source }],
}

/** education/ tree: [branch drawing, text, optional link] */
export const educationTree: [string, string, string?][] = [
  ['├── ', 'msc/ Cyprus International University'],
  ['│   └── ', 'thesis source', source],
  ['├── ', 'bsc/ European University of Lefke'],
  ['│   └── ', 'Best graduating student, Computer Engineering'],
  ['└── ', 'certs/'],
  ['    ├── ', 'Backend web development, Udemy'],
  ['    └── ', 'Play It Safe: Manage Security Risks, Google'],
]
