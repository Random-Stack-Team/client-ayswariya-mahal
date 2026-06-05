# Graph Report - Client-Ayswariya-Mahal  (2026-06-06)

## Corpus Check
- 29 files · ~437,500 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 110 nodes · 105 edges · 19 communities (18 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8badb579`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 18|Community 18]]

## God Nodes (most connected - your core abstractions)
1. `scripts` - 5 edges
2. `useEnquiry()` - 5 edges
3. `Project Architecture - Ayswariya Mahal` - 5 edges
4. `Ayswariya Mahal - Royal Union Web Application 🏰✨` - 5 edges
5. `🚀 Tech Stack` - 4 edges
6. `📂 Branching Strategy` - 4 edges
7. `🛠️ Getting Started` - 4 edges
8. `Installation` - 4 edges
9. `React + Vite` - 3 edges
10. `FloatingEnvelope()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `FloatingEnvelope()` --calls--> `useEnquiry()`  [EXTRACTED]
  src/components/common/FloatingEnvelope.jsx → src/context/EnquiryContext.jsx
- `Navbar()` --calls--> `useEnquiry()`  [EXTRACTED]
  src/components/common/Navbar.jsx → src/context/EnquiryContext.jsx

## Communities (19 total, 1 thin omitted)

### Community 1 - "Community 1"
Cohesion: 0.12
Nodes (5): Facilities, categories, galleryImages, Reviews, pageTransition

### Community 2 - "Community 2"
Cohesion: 0.17
Nodes (12): devDependencies, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, tailwindcss, @tailwindcss/vite (+4 more)

### Community 3 - "Community 3"
Cohesion: 0.20
Nodes (9): name, private, scripts, build, dev, lint, preview, type (+1 more)

### Community 4 - "Community 4"
Cohesion: 0.25
Nodes (7): 🗺️ Codebase Navigation Guide, code:text (src/), code:mermaid (graph TD), 🕸️ Dependency Graph, 📁 Directory Structure, 🔗 Key Relationships & Rules, Project Architecture - Ayswariya Mahal

### Community 5 - "Community 5"
Cohesion: 0.25
Nodes (8): dependencies, clsx, framer-motion, gsap, lucide-react, react, react-dom, react-router-dom

### Community 6 - "Community 6"
Cohesion: 0.14
Nodes (13): Animation Engines, Ayswariya Mahal - Royal Union Web Application 🏰✨, 📂 Branching Strategy, Core Architecture, 🎨 Design Guidelines, `develop` Branch 🟡, Expanding the ESLint configuration, Feature Branches 🔵 (+5 more)

### Community 7 - "Community 7"
Cohesion: 0.31
Nodes (6): FloatingEnvelope(), QUOTES, Navbar(), EnquiryContext, EnquiryProvider(), useEnquiry()

### Community 18 - "Community 18"
Cohesion: 0.25
Nodes (8): code:bash (git clone [your-repo-url]), code:bash (cd Client-Ayswariya-Mahal), code:bash (npm install), code:bash (npm run dev), 🛠️ Getting Started, Installation, Prerequisites, Running the Development Server

## Knowledge Gaps
- **52 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+47 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Community 2` to `Community 3`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Community 5` to `Community 3`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **Why does `Ayswariya Mahal - Royal Union Web Application 🏰✨` connect `Community 6` to `Community 18`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _52 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `Community 6` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._