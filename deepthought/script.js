const task = {
  taskId: "TPM01",
  assets: [
    {
      id: 1,
      title: "Technical Project Management",
      description:
        "Story of Alignment Scope of Agility Specific Accountable Staggering Approach",
      type: "video",
      url: "https://www.youtube.com/embed/TiMRwri1xJ8"
    },
    {
      id: 2,
      title: "Threadbuild",
      description:
        "Watch the video and thread build, and jot out key threads.",
      type: "thread"
    },
    {
      id: 3,
      title: "Structure Your Pointers",
      description:
        "Write a 400–500 word article from your thread.",
      type: "article"
    },
    {
      id: 4,
      title: "4SA Method",
      description:
        "To explore more read more.",
      type: "accordion"
    }
  ]
};

// REUSABLE CARD
function assetCard(asset) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="card-header">
      <span>${asset.title}</span>
      <span>⌄</span>
    </div>

    <div class="card-body">
      <div class="desc"><b>Description:</b> ${asset.description}</div>
      ${renderInner(asset)}
    </div>
  `;

  card.querySelector(".card-header").onclick = () => {
    card.classList.toggle("collapsed");
  };

  return card;
}

// INNER CONTENT RENDERER
function renderInner(asset) {
  if (asset.type === "video") {
    return `<iframe src="${asset.url}" allowfullscreen></iframe>`;
  }

  if (asset.type === "thread") {
    return `
      <div class="thread-grid">
        <div class="thread-box"><input placeholder="Sub Thread 1" /></div>
        <div class="thread-box"><input placeholder="Sub Interpretation 1" /></div>
      </div>
      <button style="margin-top:10px; background: #1a5cff ; color: white;color: #fff;
       border: none;padding: 6px 14px;border-radius: 6px;">
        + Sub thread
      </button>
    `;
  }

  if (asset.type === "accordion") {
    return `
      <div class="accordion">
        <p><b>Introduction</b></p>
        <p>The 4SA Method: How to bring an idea into process?</p>
      </div>
    `;
  }

  return "";
}

// RENDER
const cards = document.getElementById("cards");
task.assets.forEach(a => cards.appendChild(assetCard(a)));

function toggleJourney() {
  document.getElementById("journeyBoard").classList.toggle("closed");
}
