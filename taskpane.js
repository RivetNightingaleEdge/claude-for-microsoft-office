async function getSelectedText() {
  return Word.run(async (context) => {
    const range = context.document.getSelection();
    range.load("text");
    await context.sync();
    return range.text;
  });
}

async function insertText(text) {
  return Word.run(async (context) => {
    const range = context.document.getSelection();
    range.insertText(text, "Replace");
    await context.sync();
  });
}

async function run(type) {
  const text = await getSelectedText();
  const prompt = document.getElementById("prompt").value;

  const res = await fetch("https://localhost:3000/api", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type,
      text,
      prompt
    })
  });

  const data = await res.json();
  document.getElementById("result").textContent = data.result;
}

async function insert() {
  const text = document.getElementById("result").textContent;
  await insertText(text);
}
