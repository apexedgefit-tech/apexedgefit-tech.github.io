// Everything you might want to edit lives in this file.
// Save the file, then refresh index.html in your browser.

window.FORM_CONFIG = {
  // Welcome screen
  title: "Let's see if we're a fit",
  intro: "Answer a few quick questions. It takes about a minute.",
  startLabel: "Start",

  // QUESTIONS
  // id:          short name, no spaces. Becomes the column name in your Sheet.
  // type:        text | email | tel | longtext | choice
  // label:       the question people see
  // help:        optional small line under the question
  // placeholder: optional greyed hint inside the box
  // required:    true or false
  // options:     only for choice questions. Each is { label, value }.
  //              Add disqualify: true to an option that should NOT get the booking page.
  //              Add flag: "a short note" to an option that should still book,
  //              but be marked in the "flagged" column of your Sheet.
  // Keep the ids "first_name" and "email" if you want Calendly pre-filled.
  questions: [
    {
      id: "first_name",
      type: "text",
      label: "What's your first name?",
      placeholder: "First name",
      required: true
    },
    {
      id: "email",
      type: "email",
      label: "What's your email?",
      help: "This is where your booking confirmation goes.",
      placeholder: "name@example.com",
      required: true
    },
    {
      id: "goal",
      type: "longtext",
      label: "What result do you want, as specifically as you can say it?",
      required: true
    },
    {
      id: "tried",
      type: "longtext",
      label: "What have you already tried, and how long did you give it?",
      required: true
    },
    {
      id: "start",
      type: "choice",
      label: "If this is the right fit, when would you want to start?",
      required: true,
      options: [
        { label: "Next week", value: "next_week" },
        { label: "Next month", value: "next_month" },
        { label: "I'm just looking around", value: "just_looking", flag: "Just looking" }
      ]
    },
    {
      id: "decision",
      type: "choice",
      label: "Is this decision yours alone, or is someone else part of it?",
      help: "If someone else is part of it, they're welcome on the call.",
      required: true,
      options: [
        { label: "Mine alone", value: "mine_alone" },
        { label: "Someone else is part of it", value: "someone_else" }
      ]
    }
  ],

  // CALENDLY
  calendlyUrl: "https://calendly.com/alex-maywood/30min",
  // "embed" shows the calendar on the page. "redirect" sends people to Calendly.
  calendlyMode: "embed",

  // GOOGLE SHEET
  // Paste your Apps Script web app URL here (see README.md).
  // While this is empty, answers are only printed to the browser console.
  sheetEndpoint: "https://script.google.com/macros/s/AKfycbwJZ5kNcq-uChWMQj_6p4fglMxQyTRZ0NdykH5_Ri3MCieyAtrDwjwYNO9C_SyNMnj46w/exec",

  // Shown instead of Calendly when someone picks a disqualifying option.
  // Their answers are still saved, with qualified = "no".
  disqualifiedScreen: {
    heading: "Thanks for your time",
    body: "This isn't the right fit right now. We have saved your answers and will be in touch if that changes."
  },

  // LOOK
  theme: {
    accent: "#2A66C8",      // buttons, progress bar, highlights
    accentText: "#ffffff",  // text on top of the accent colour
    background: "#0B0C0E",
    text: "#F3F4F2",
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif"
  }
};
