# AGENTIC WEBSITE REBUILD — PHASE 1

You are redesigning an existing GitHub portfolio website into a cinematic layered scrolling experience.

THIS IS NOT A NORMAL PORTFOLIO WEBSITE.

The site should feel like:
- an interactive visual story
- a hand-painted animated scene
- an artistic archive
- a cinematic portfolio

The current implementation failed because:
- it behaves like a normal section website
- the artwork is cropped incorrectly
- the scrolling has no layered interaction
- there is no overlap between sections
- there is no cinematic transition feeling

Your task is to FULLY REBUILD the homepage architecture.

--------------------------------------------------
PROJECT CONTEXT
--------------------------------------------------

Existing site:
- HTML/CSS based GitHub Pages website
- already has some project structure
- should remain lightweight
- do NOT use React
- do NOT use heavy frameworks

Use:
- HTML
- CSS
- minimal vanilla JavaScript only if needed

Main focus:
- CSS positioning
- layered composition
- sticky scroll sections
- z-index orchestration
- cinematic transitions

--------------------------------------------------
CORE VISUAL CONCEPT
--------------------------------------------------

The homepage is built from THREE VISUAL LAYERS:

1. SKY LAYER
2. CLOUD LAYER
3. GRASS / MOUNTAIN LAYER

The user scrolls downward.

As they scroll:
- cloud layer slides upward and covers the sky
- grass layer slides upward and covers the cloud
- project mountains emerge from the grass

The sections should visually OVERLAP.

DO NOT build separated sections.

The page should feel like:
- moving through paintings
- layered scenery
- animated artwork

--------------------------------------------------
VERY IMPORTANT
--------------------------------------------------

DO NOT:
- crop artwork randomly
- create boxed website sections
- create generic cards everywhere
- separate scenes with hard edges
- use corporate UI
- use bootstrap-looking layouts

DO:
- preserve artwork composition
- allow image layers to overlap
- use transparent blending
- use soft gradients
- use sticky transitions
- use large cinematic spacing

--------------------------------------------------
AVAILABLE IMAGE ASSETS
--------------------------------------------------

Use these files exactly as layers.

assets/sky.png
- pure blue textured sky
- top layer opening scene

assets/cloud.png
- cloud illustration
- must slide upward over hero

assets/grass.png
- grassy hills
- must slide upward over cloud section

DO NOT CROP THESE RANDOMLY.

Use:
background-size: cover;
background-position: center;

but preserve composition carefully.

--------------------------------------------------
SITE FLOW
--------------------------------------------------

==================================================
SCENE 1 — HERO SKY SCENE
==================================================

Background:
assets/sky.png

Viewport:
100vh minimum

Content:
- portrait image
- name
- short bio
- tagline

Mood:
minimal
dreamy
elegant
floating

Typography:
clean geometric sans serif

Suggested:
- Poppins
- Outfit
- Montserrat

Content placement:
centered vertically
slightly floating

Portrait:
large circular portrait
soft shadow
not corporate

Add subtle floating animation.

--------------------------------------------------
HERO TEXT
--------------------------------------------------

Generate placeholder text from resume context.

Use:

Name:
Joyce Li

Tagline:
Engineering × Art × Storytelling

Short Bio:
Joyce Li is a creative technologist and multidisciplinary artist pursuing Computer Science and Studio Art. Her work combines engineering, storytelling, material exploration, and interaction design across robotics, ceramics, and jewelry.

--------------------------------------------------
SCROLL BEHAVIOR
--------------------------------------------------

IMPORTANT:

The hero should remain visually visible as the user starts scrolling.

The cloud layer should move upward OVER the hero.

The cloud scene should partially obscure the hero scene.

Use:
- z-index layering
- sticky sections
- translateY transitions
- overlapping margins

--------------------------------------------------
SCENE 2 — EXPERIENCE CLOUD SCENE
--------------------------------------------------

Background:
assets/cloud.png

The cloud layer should:
- overlap the hero scene
- visually cover the sky
- feel like fog/cloud moving in

Main title:
"My Experience"

Typography:
large white elegant text

Below title:
4 floating translucent experience panels.

NOT corporate cards.

Use:
- glassmorphism
- backdrop blur
- semi-transparent white
- soft shadow

Experience entries:

1.
TA & Grader
Assisted undergraduate computer science courses and supported students through grading and mentorship.

2.
Matrix Robotics
Worked on robotics engineering and autonomous systems in collaborative team environments.

3.
T&T Supermarket
Developed communication and customer support skills in fast-paced retail settings.

4.
Maxrocky
Contributed to creative and technical interdisciplinary projects.

Layout:
floating horizontally
airy spacing
soft movement

--------------------------------------------------
SCENE 3 — ACTIVITIES GRASS SCENE
--------------------------------------------------

Background:
assets/grass.png

This layer should:
- slide upward over clouds
- visually replace cloud layer
- feel grounded and organic

Main title:
Activities & Achievements

NO rigid grids.

Activities should feel embedded into the hills.

Activities:
- Eagle Scout
- Robotics
- Art Club President
- Karate Black Belt
- Community Leadership

Use:
floating labels
organic positioning
soft typography

--------------------------------------------------
SCENE 4 — PROJECT MOUNTAINS
--------------------------------------------------

At the bottom of the grass scene:
THREE LARGE PROJECT BLOCKS EMERGE.

These are NOT normal project cards.

They should behave like:
mini mountain worlds.

Each block:
- large square visual
- soft rounded edges
- integrated into landscape
- slightly floating

Use these exact images:

assets/engineering.jpg
assets/ceramic.jpg
assets/jewelry.jpg

These images are already square cropped.

DO NOT recrop them.

--------------------------------------------------
PROJECTS
--------------------------------------------------

1.
Engineering Projects
Showcasing robotics, coding, hardware, and interaction systems.

2.
Ceramic Art
Exploring clay, texture, and sculptural form.

3.
Jewelry & Metal
Combining metalwork, organic forms, and wearable storytelling.

--------------------------------------------------
LAYOUT REQUIREMENTS
--------------------------------------------------

Desktop-first design.

Use:
- full viewport sections
- overlapping layers
- cinematic spacing
- sticky compositions

Use CSS heavily.

Recommended techniques:
- position: sticky
- transform: translateY()
- z-index
- overflow hidden
- backdrop-filter
- opacity transitions

--------------------------------------------------
ANIMATION REQUIREMENTS
--------------------------------------------------

Subtle only.

Examples:
- floating portrait
- slow parallax movement
- fade-in on scroll
- gentle cloud motion

DO NOT:
- overanimate
- use flashy effects
- use particle systems

--------------------------------------------------
TECHNICAL TASKS
--------------------------------------------------

1.
Rebuild homepage structure completely.

2.
Create layered scroll architecture.

3.
Refactor CSS into organized sections.

4.
Preserve existing project routing if possible.

5.
Create responsive behavior for desktop first.

6.
Maintain GitHub Pages compatibility.

--------------------------------------------------
IMPORTANT FINAL REQUIREMENT
--------------------------------------------------

This site must feel like:
“scrolling through layered paintings”

NOT:
“scrolling through webpage sections”

The artwork itself IS the interface.

Begin implementation immediately.