export interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: 'why-i-build-my-own-tools',
    title: 'Why I Build My Own Tools',
    date: '2026-03-15',
    content: `Every app on my phone started as a frustration. Mint shut down, so I built zBudget. No shoot planner existed for photographers, so I built Photo Pal. My home server needed monitoring, so I built Server Status.\n\nThere's a particular satisfaction in solving your own problems with code. You know the edge cases intimately because you live them. You don't need user research — you are the user. And when the tool finally works exactly the way you imagined, it feels like a small act of defiance against the idea that you have to settle for what already exists.\n\nThe downside, of course, is scope creep. What starts as "I just need a simple budget tracker" becomes a full-featured finance app with bank sync, voice input, and a premium tier. But that's also where the craft lives — in the tension between "good enough for me" and "good enough to ship."\n\nI think every designer should build something for themselves at least once. Not a portfolio piece, not a client project — something you actually use every day. It changes how you think about product design when you're accountable to yourself.`
  },
  {
    slug: 'shooting-film-in-a-digital-world',
    title: 'Shooting Film in a Digital World',
    date: '2026-02-28',
    content: `I started shooting film two years ago, mostly out of curiosity. Digital photography had become so frictionless that I stopped thinking about my shots. Point, click, chimping, delete, repeat. Film forced me to slow down.\n\nWith 36 exposures on a roll of Portra 400, every frame costs money. You meter twice. You compose deliberately. And then you wait — sometimes weeks — before you see what you captured. That delay is the whole point. It breaks the feedback loop that makes digital photography feel disposable.\n\nBuilding Grainify was my attempt to bottle that feeling. Not the aesthetic — plenty of apps can slap a grain overlay on your iPhone photos. I wanted to recreate the experience: loading a roll, shooting until it's full, developing it in a darkroom. The constraint is the feature.\n\nThe irony of building a digital app to simulate analog photography isn't lost on me. But I think the best tools are the ones that impose meaningful constraints. Instagram's original square format. Twitter's 140 characters. A 36-exposure roll of Kodak Gold. Limitations breed creativity.\n\nI still shoot real film whenever I can. But on the days I can't — when I'm traveling light or the weather is unpredictable — Grainify lets me keep that mindset.`
  },
  {
    slug: 'from-pm-to-designer-to-builder',
    title: 'From PM to Designer to Builder',
    date: '2026-01-10',
    content: `My career hasn't followed a straight line. I studied computer science, interned as a software engineer, pivoted to product management, got a master's in project management, and now I spend most of my time designing and building iOS apps.\n\nPeople ask me what I "am" — PM, designer, or developer — and I never have a clean answer. The truth is that the boundaries between these roles have blurred, especially if you're building indie products. You can't ship an app without understanding all three.\n\nProduct management taught me to ask "why" before "how." Design taught me to care about the details that users feel but can't articulate. Engineering taught me what's actually possible and what's just a pretty mockup. Each discipline sharpened the others.\n\nIf you're early in your career and feel pulled in multiple directions, I'd say: follow the curiosity. The most interesting people I know are the ones who refused to pick a lane.`
  },
  {
    slug: 'the-case-for-native-apps',
    title: 'The Case for Native Apps',
    date: '2025-11-22',
    content: `Every app I build is native Swift and SwiftUI. No React Native, no Flutter, no cross-platform frameworks. People sometimes ask why, especially when cross-platform tools have gotten so good.\n\nThe short answer: feel. Native apps feel different. The scrolling physics, the haptic feedback, the way animations sync with gestures — these things are hard to replicate in a cross-platform layer. When you're building tools that people use every day, those micro-interactions compound into an experience that either feels right or feels off.\n\nThe longer answer involves SwiftUI specifically. It's the most productive UI framework I've ever used. Declarative, reactive, and deeply integrated with the platform. When Apple ships a new API — Camera Control on iPhone 16, FoundationModels for on-device AI — you can adopt it on day one. No waiting for a bridge or a plugin.\n\nThe tradeoff is obvious: I can only ship on Apple platforms. For the apps I build — personal tools, creative utilities, productivity aids — that's fine. My users are iPhone and Mac users. If I were building a social network or a B2B SaaS product, the calculus would be different.\n\nBut for now, native is home.`
  },
  {
    slug: 'golden-hour-chase',
    title: 'Chasing Golden Hour in New York',
    date: '2025-10-05',
    content: `Golden hour in New York is different from anywhere else. The light comes in sideways between buildings, painting the streets in long shadows and warm tones. You get maybe 20 minutes of the good stuff before it's gone.\n\nI built golden hour detection into Photo Pal because I kept missing it. I'd be mid-shoot, focused on a client's headshots, and realize the light had peaked 10 minutes ago. Now the app alerts me — not just "sunset is at 6:47" but "golden hour starts in 15 minutes at your current location." It accounts for buildings, cloud cover, and the specific direction the light is coming from.\n\nThe best part of being a photographer in New York is also the hardest: the city never gives you the same shot twice. The light changes, the crowds shift, a scaffolding goes up, a mural gets painted over. You learn to work fast and let go of the ones you missed.\n\nThat impermanence is what I love about this city and this craft. Nothing is precious. Everything is fleeting. All you can do is show up, pay attention, and press the shutter at the right moment.`
  }
];
