# Graph Report - Client-Ayswariya-Mahal  (2026-06-05)

## Corpus Check
- 28 files · ~436,804 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 87 nodes · 75 edges · 18 communities (16 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7e187871`
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

## God Nodes (most connected - your core abstractions)
1. `scripts` - 5 edges
2. `Project Architecture - Ayswariya Mahal` - 5 edges
3. `React + Vite` - 3 edges
4. `📁 Directory Structure` - 2 edges
5. `🕸️ Dependency Graph` - 2 edges
6. `private` - 1 edges
7. `dev` - 1 edges
8. `build` - 1 edges
9. `lint` - 1 edges
10. `preview` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities (18 total, 2 thin omitted)

### Community 1 - "Community 1"
Cohesion: 0.13
Nodes (3): Facilities, Reviews, pageTransition

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
Cohesion: 0.50
Nodes (3): Expanding the ESLint configuration, React Compiler, React + Vite

## Knowledge Gaps
- **38 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+33 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Community 2` to `Community 3`?**
  _High betweenness centrality (0.069) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Community 5` to `Community 3`?**
  _High betweenness centrality (0.048) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _38 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._