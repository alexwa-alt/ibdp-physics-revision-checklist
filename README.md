# IB Physics SL Revision Checklist

A revision portal for IB DP Physics **SL** students. It has 165 checklist items taken from the department Topic Sequence sheet, with the HL-only rows removed.

For each checklist item, students can:

- **Tick it off** once they've revised it. Progress is saved in their browser.
- Do a **Quick check**: 2–4 multiple-choice comprehension questions with instant feedback. Full marks ticks the item off automatically. A lower score marks it as "Needs work".
- Click **Revise more** to see either
  - **Revision links**: 4–6 resources per subtopic (notes, videos, simulations, flashcards and question banks), or
  - **Exam-style questions**: 5 Paper 1A-style multiple-choice questions and 2 structured Paper 1B/2-style questions per subtopic. Students reveal the markscheme one part at a time and tick off the marking points they got.

It's a "static site", meaning plain HTML, CSS and JavaScript files with no server or database. That's why it can be hosted free on GitHub Pages and works on iPads, laptops and phones.

## Files

| File | What it does |
|---|---|
| `index.html` | The page itself |
| `css/style.css` | Layout and colours (includes dark mode and phone layout) |
| `js/app.js` | All the behaviour: checklist, quick checks, exam questions, saving progress |
| `data/topics.js` | The checklist items, in the same order as the department sheet |
| `data/content/theme1.js` … `theme5.js` | Questions and links for each theme (1 Mechanics … 5 Modern Physics) |

## Putting it on GitHub Pages (all in the browser)

1. On github.com, click **New repository**. Give it a name, e.g. `ib-physics-revision`, set it to **Public** and click **Create repository**.
2. On the new repository's page, click **uploading an existing file**. Unzip the download on your computer, then drag in **the contents** of the folder: `index.html`, `README.md`, and the `css`, `js` and `data` folders. Dragging folders keeps their structure. Click **Commit changes**.
3. Go to **Settings → Pages**. Under *Build and deployment*, set Source to **Deploy from a branch**, Branch to **main** and folder to **/ (root)**, then click **Save**.
4. After a minute or two, the site will be live at `https://<your-username>.github.io/ib-physics-revision/`.

**Adding it to Moodle:** add a **URL** resource that opens the link above in a new window. You can also embed it in a Page or Label with an `<iframe>`.

## Editing content

Every file in `data/` is plain text, so you can edit it on GitHub (open the file, click the ✏️ pencil icon, then click **Commit changes**). The site updates within a minute or two.

- **Change a checklist item:** edit its `"text"` in `data/topics.js`. Keep the `"id"` the same, because that's what students' saved ticks are linked to.
- **Add a quick-check question:** in the right theme file, copy an existing `{ item: "...", q: ..., options: [...], answer: ..., explain: ... }` block. `answer` counts from 0, so 0 is the first option. The site shuffles word-based options each time, but keeps numerical options in order.
- **Add or replace a link:** edit the `resources` list for that subtopic.

## Saving progress (please tell students)

Progress is stored in the browser on that device. It isn't linked to a login. If a student switches device, or clears their browser data, they lose it. The **Save / move progress** button gives them a code to copy, for example into an email to themselves, and paste in on another device.

## Notes

- All exam-style questions are original IB-style practice, not official IB past-paper questions.
- A few links were not confirmed when the site was built, so they're worth clicking once before launch. They include some PhET simulation pages (especially *Alpha Decay* and *Nuclear Fission* in 5.4 and 5.5, which may be older versions that won't run on iPads) and some Physics Classroom pages.
- Checklist item 4.3.4 (distance of closest approach) uses electric potential energy, which may be AHL in the 2025 guide. It's included because it's on the department sheet.
