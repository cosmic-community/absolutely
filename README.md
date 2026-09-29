# Absolutely — Creative Video Portfolio
![App Preview](https://imgix.cosmicjs.com/5c028f80-bb9c-11f1-b244-b7ec9c1d049e-autopilot-photo-1448375240586-882707db888b-1790641565803.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A public showcase site for a niche short-form video creator, built with Next.js 16 and Cosmic. Browse every vertical video project, drill into voiceover scripts and visual style, and follow along scene-by-scene with reference images, timings, motion and sound design notes.

## Features

- 🏠 Hero homepage with a live grid of the latest video projects
- 🎞️ Filterable projects index (production status + aspect ratio)
- 📋 Rich project detail pages (visual style, voiceover script, SRT subtitles)
- 🎬 Ordered scene-by-scene breakdown sorted by scene number
- 🖼️ Imgix-optimized cover and reference images
- 📱 Fully responsive, fast, and accessible

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6abb056a11130669816b711b&clone_repository=6abb074b11130669816b7169)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> Create content models for: Absolutely. Here is a ready-to-produce 60-second vertical video package for "Kraven Catches Spider-Man." I've synchronized the voiceover, SRT, Flow scenes, CapCut cuts, and sound design.
>
> 1. 🎙️ Exact 60-Second Voiceover
>
> Target delivery: ~150 words/minute. Read naturally, with short dramatic pauses.
>
> Kraven the Hunter finally caught Spider-Man.
>
> But this wasn't about killing him.
>
> Kraven wanted to prove that he was the superior hunter.
>
> So he ambushed Peter, firing a tranquilizer dart before Spider-Man could react.
>
> Within seconds, Peter collapsed.
>
> Kraven dragged him into the wilderness and buried him alive.
>
> Then came the craziest part.
>
> Kraven put on Spider-Man's suit and began hunting criminals, making everyone believe Spider-Man had returned.
>
> But Peter Parker wasn't dead.
>
> He woke up underground and fought his way out of the grave.
>
> Weak, exhausted, and furious, Peter tracked Kraven down.
>
> And when they finally faced each other, Spider-Man realized something.
>
> Kraven hadn't defeated him.
>
> He had only buried him.
>
> Peter survived the hunt, escaped the grave, and returned to prove that no hunter could truly break Spider-Man.
>
> ---
>
> 2. 🎥 8 Google Flow Prompts
>
> Use these settings for every scene:
> 9:16 vertical • 2D cinematic comic animation • same characters • no text • no watermark
>
> FLOW 01 — Kraven's Hunt | 0:00–0:07
>
> Vertical 9:16 cinematic 2D comic-book animation. Nighttime forest, Spider-Man in his classic red-and-blue suit walking cautiously between dark trees, unaware that Kraven the Hunter is secretly watching from the shadows. Kraven is a massive muscular hunter wearing a rugged animal-fur vest, tactical hunting gear, necklace of animal teeth, long brown hair, intense expression. Spider-Man has a slim athletic build, expressive white eye lenses. Thick ink outlines, dramatic cel shading, atmospheric moonlight, cinematic depth, slow camera push toward Spider-Man, suspenseful mood, consistent character design, no text, no watermark.
>
> Motion: Slow push-in + subtle tree movement.
>
> ---
>
> FLOW 02 — The Tranquilizer | 0:07–0:14
>
> Same Spider-Man and Kraven designs, same nighttime forest. Kraven suddenly raises a hunting rifle and fires a tranquilizer dart toward Spider-Man. Spider-Man turns sharply in surprise as the dart flies toward his shoulder. Dynamic action composition, dramatic comic motion lines, cinematic 2D animation, strong sense of movement, moonlight, detailed ink outlines, cel shading, camera quickly tracking the dart, no blood, no gore, no text, no watermark.
>
> Motion: Fast camera whip toward dart.
>
> ---
>
> FLOW 03 — Spider-Man Falls | 0:14–0:21
>
> Same characters and visual style. Spider-Man has been hit by the tranquilizer and slowly loses strength, falling to his knees before collapsing onto the forest floor. Kraven walks toward him confidently in the background. Low-angle cinematic shot, dark forest, moonlight through branches, dramatic shadows, 2D comic animation, subtle camera shake as Spider-Man hits the ground, no gore, no text, no watermark.
>
> Motion: Slow-motion collapse → impact shake.
>
> ---
>
> FLOW 04 — Buried Alive | 0:21–0:29
>
> Same Kraven and Spider-Man designs. Kraven lowers unconscious Spider-Man into a shallow grave in the wilderness and begins covering the grave with soil. Spider-Man remains fully clothed in his red-and-blue suit. Ominous moonlit forest, wide cinematic shot, shovel and falling dirt, dramatic shadows, dark comic-book atmosphere, 2D cel animation, slow camera pullback, suspenseful tone, no gore, no text, no watermark.
>
> Motion: Falling dirt → camera slowly pulls away.
>
> ---
>
> FLOW 05 — Kraven Becomes Spider-Man | 0:29–0:37
>
> Same Kraven character design. Kraven now wears Spider-Man's classic red-and-blue suit over his muscular body, standing dramatically on a New York City rooftop at night. He looks down over the city as his cape-like jacket moves in the wind. Mysterious silhouette, dramatic moonlight, cinematic skyline, 2D comic-book animation, thick ink outlines, cel shading, slow orbiting camera, unsettling atmosphere, no text, no watermark.
>
> Motion: Slow 180-degree camera orbit.
>
> ---
>
> FLOW 06 — Peter Escapes | 0:37–0:45
>
> Same Spider-Man design. Underground in a shallow grave, Spider-Man suddenly wakes and desperately pushes upward through the soil, breaking through the surface into moonlight. His suit is dirty and damaged but there is no blood or gore. He takes a deep breath and looks toward the sky. Emotional cinematic 2D comic animation, dramatic upward camera movement, dirt particles, strong moonlight, detailed ink outlines, no text, no watermark.
>
> Motion: Camera follows Peter upward as he breaks through.
>
> ---
>
> FLOW 07 — Final Confrontation | 0:45–0:53
>
> Same Peter Parker Spider-Man and Kraven designs. Dark New York rooftop at night. Spider-Man stands face-to-face with Kraven wearing the Spider-Man suit. Both characters are tense and ready to fight, several feet apart. City lights behind them, strong wind, dramatic moonlight, cinematic

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "Absolutely". The content is managed in Cosmic CMS with the following object types: video-projects, scenes. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: A public showcase site for a niche hobby video creator who publishes short-form videos regularly. Uses the existing Cosmic content model: "video-projects" (project title, aspect ratio, duration, visual style, voiceover script, target pace, SRT subtitles, production status, cover image) and "scenes" (scene number, start/end time, flow prompt, motion, voiceover line, CapCut notes, sound design, reference image, linked project). Pages: a home page with a hero and grid of video projects using cover images; a project detail page showing project metadata, visual style, voiceover script, and an ordered scene-by-scene breakdown (sorted by scene number) with reference images, timings, motion and sound design notes; a projects index filterable by production status and aspect ratio. Clean, modern, creator-focused design, responsive, fast.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- TypeScript (strict mode)
- Tailwind CSS
- [Cosmic](https://www.cosmicjs.com) via [`@cosmicjs/sdk`](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites
- [Bun](https://bun.sh) installed
- A Cosmic account with the `video-projects` and `scenes` object types

### Installation

```bash
bun install
bun run dev
```

Set the following environment variables (see the Environment Variables panel in your dashboard):

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## Cosmic SDK Examples

```typescript
// Fetch all video projects, newest first
const { objects: projects } = await cosmic.objects
  .find({ type: 'video-projects' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)

// Fetch scenes for a project, sorted by scene number
const { objects: scenes } = await cosmic.objects
  .find({ type: 'scenes', 'metadata.project': projectId })
  .depth(1)
```

## Cosmic CMS Integration

This app reads directly from your `video-projects` and `scenes` object types using the [Cosmic SDK](https://www.cosmicjs.com/docs). Scenes reference their parent project via an object metafield and are sorted client-side by `scene_number` to build the scene-by-scene breakdown.

## Deployment Options

### Vercel
1. Push this repo to GitHub
2. Import into [Vercel](https://vercel.com)
3. Add the `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, and `COSMIC_WRITE_KEY` environment variables
4. Deploy

### Netlify
1. Push this repo to GitHub
2. Import into [Netlify](https://netlify.com), framework preset "Next.js"
3. Add the same environment variables
4. Deploy
<!-- README_END -->