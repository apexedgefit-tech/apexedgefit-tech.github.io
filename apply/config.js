// Everything you might want to edit lives in this file.
// Save the file, then refresh index.html in your browser.

window.FORM_CONFIG = {
  // Welcome screen
  eyebrow: "Apply for coaching",
  title: "Let's get started",
  intro: "Four quick questions so I can see where you want to go. Then you pick a time for a 45-minute call with me.",
  meta: ["4 quick questions", "Takes 60 seconds", "Then book your call"],
  startLabel: "Let's go",
  finishLabel: "See call times",
  // Line under "Pick a time". {name} becomes their first name.
  bookingLead: "Thanks, {name}. Pick a time that suits you and I'll see you on the call.",

  // QUESTIONS
  // id:          short name, no spaces. Becomes the column name in your Sheet.
  // type:        text | name | email | tel | longtext | choice
  //              "name" asks for a full name: it needs a first and last name,
  //              and both get filled in on Calendly.
  // label:       the question people see
  // help:        optional small line under the question
  // placeholder: optional greyed hint inside the box
  // required:    true or false
  // options:     only for choice questions. Each is { label, value }.
  //              Add disqualify: true to an option that should NOT get the booking page.
  //              Add flag: "a short note" to an option that should still book,
  //              but be marked in the "flagged" column of your Sheet.
  // Keep the "name" question and the "email" id if you want Calendly pre-filled.
  // The Sheet gets full_name, first_name and last_name columns from the name question.
  questions: [
    {
      id: "full_name",
      type: "name",
      label: "What's your full name?",
      placeholder: "First and last name",
      required: true
    },
    {
      id: "email",
      type: "email",
      label: "What's your email?",
      help: "This is where your booking confirmation goes. I may also send you occasional emails, and you can unsubscribe anytime.",
      placeholder: "name@example.com",
      required: true
    },
    {
      id: "goal",
      type: "longtext",
      label: "What is your main goal for 1:1 coaching with me?",
      help: "Tell me what you want to achieve and what you're looking for help with.",
      required: true
    },
    {
      id: "start",
      type: "choice",
      label: "If we decide we're a strong fit on our call, how soon would you want to get started?",
      required: true,
      // tag: goes into the lead_tag column of your Sheet
      options: [
        { label: "As soon as possible (within the next week)", value: "asap", tag: "Hot / Ready Now" },
        { label: "Within the next month", value: "next_month", tag: "Warm / Planning Ahead" },
        { label: "I'm still exploring my options and have a few questions first", value: "exploring", tag: "Exploring" }
      ]
    }
  ],

  // CALENDLY
  calendlyUrl: "https://calendly.com/alex-maywood/45min",
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
