---
layout: null
---
document.addEventListener("DOMContentLoaded", () => {
  const responseArea = document.querySelector("[data-response-area]");
  const buttons = document.querySelectorAll("[data-prompt-text]");
  const panelLinks = document.querySelectorAll("[data-panel-link]");
  const panels = document.querySelectorAll("[data-panel]");
  const root = document.querySelector("[data-tabs-root]");
  const topicButtons = document.querySelectorAll("[data-topic-trigger]");
  const topicDetailGroups = document.querySelectorAll("[data-topic-detail-group]");
  const accordionToggles = document.querySelectorAll("[data-accordion-toggle]");
  const accordionGroups = document.querySelectorAll("[data-accordion-group]");
  const topicContent = {
    {% for topic in site.data.hearing_topics %}
    "{{ topic.slug }}": {
      kicker: {{ topic.kicker | jsonify }},
      title: {{ topic.title | jsonify }},
      body: {{ topic.body | jsonify }}
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  };

  const activatePanel = (panelId, updateHash = true) => {
    if (!root || !panelId) {
      return;
    }

    panels.forEach((panel) => {
      const isActive = panel.dataset.panel === panelId;
      panel.hidden = !isActive;
      panel.classList.toggle("is-active", isActive);
    });

    panelLinks.forEach((link) => {
      const isActive = link.dataset.panelLink === panelId;

      if (link.tagName === "BUTTON") {
        link.setAttribute("aria-pressed", String(isActive));
      }

      link.classList.toggle("is-active", isActive);
    });

    if (updateHash) {
      window.history.replaceState(null, "", `#${panelId}`);
    }
  };

  if (!responseArea || buttons.length === 0) {
    const hashOnlyPanel = window.location.hash.replace("#", "");
    if (hashOnlyPanel) {
      activatePanel(hashOnlyPanel, false);
    }
    return;
  }

  const renderPrompt = (text) => {
    responseArea.innerHTML = "";

    text.split(" ").forEach((word, index) => {
      const span = document.createElement("span");
      span.className = "word";
      span.textContent = word;
      responseArea.appendChild(span);

      window.setTimeout(() => {
        span.classList.add("visible");
      }, index * 55);
    });
  };

  const renderTopic = (slug) => {
    if (!topicContent[slug]) {
      return;
    }

    const topic = topicContent[slug];
    const parentGroup = Array.from(accordionGroups).find((group) => {
      return group.querySelector(`[data-topic-trigger="${slug}"]`);
    });

    const detailTarget = parentGroup?.querySelector("[data-topic-detail-group]");

    if (detailTarget) {
      detailTarget.innerHTML = "";

      const kicker = document.createElement("p");
      kicker.className = "knowledge-detail__kicker";
      kicker.textContent = topic.kicker;
      detailTarget.appendChild(kicker);

      const title = document.createElement("h3");
      title.className = "knowledge-detail__title";
      title.textContent = topic.title;
      detailTarget.appendChild(title);

      topic.body.forEach((paragraphText) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = paragraphText;
        detailTarget.appendChild(paragraph);
      });
    }

    topicButtons.forEach((button) => {
      const isActive = button.dataset.topicTrigger === slug;
      button.classList.toggle("is-active", isActive);
      if (button.classList.contains("knowledge-card")) {
        button.setAttribute("aria-selected", String(isActive));
      }
    });
  };

  const setAccordionState = (groupId) => {
    accordionGroups.forEach((group) => {
      const isOpen = group.dataset.accordionGroup === groupId;
      group.classList.toggle("is-open", isOpen);

      const body = group.querySelector(".accordion-group__body");
      const toggle = group.querySelector("[data-accordion-toggle]");

      if (body) {
        body.hidden = !isOpen;
      }

      if (toggle) {
        toggle.setAttribute("aria-expanded", String(isOpen));
        toggle.textContent = isOpen ? "Close" : "Open";
      }
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      renderPrompt(button.dataset.promptText || "");
    });
  });

  panelLinks.forEach((link) => {
    link.addEventListener("click", () => {
      activatePanel(link.dataset.panelLink);
    });
  });

  topicButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const parentGroup = button.closest("[data-accordion-group]");
      if (parentGroup) {
        setAccordionState(parentGroup.dataset.accordionGroup);
      }
      renderTopic(button.dataset.topicTrigger);
    });
  });

  accordionToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const groupId = toggle.dataset.accordionToggle;
      const parentGroup = toggle.closest("[data-accordion-group]");
      const isOpen = parentGroup?.classList.contains("is-open");
      setAccordionState(isOpen ? "" : groupId);
    });
  });

  const initialPanel = window.location.hash.replace("#", "") || "home";
  activatePanel(initialPanel, false);

  if (accordionGroups.length > 0) {
    setAccordionState("hearing-loss");
  }

  if (topicButtons.length > 0) {
    renderTopic("why-hearing-loss-matters");
  }

  window.addEventListener("hashchange", () => {
    const hashPanel = window.location.hash.replace("#", "") || "home";
    activatePanel(hashPanel, false);
  });
});
