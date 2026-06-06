((* if cv.photo *))
#two-col(
  left-column-width: design-header-photo-width * 1.1,
  right-column-width: 1fr,
  left-content: [
    #align(
      left + horizon,
      image("profile_picture.jpg", width: design-header-photo-width),
    )
  ],
  column-gutter: 0cm,
  right-content: [
((* endif *))
((* if cv.name *))
= <<cv.name|escape_typst_characters>>
((* endif *))

// Print connections:
#let connections-list = (
((* for connection in cv.connections *))
  [((*- if connection["url"] and design.header.make_connections_links -*))
  #box(original-link("<<connection["url"]>>")[
  ((*- endif -*))
  ((*- if design.header.use_icons_for_connections -*))
    ((*- if connection["typst_icon"] == "linkedin" -*))
      #text(font: "Font Awesome 7 Brands", "\u{f08c}") #h(0.05cm)
    ((*- elif connection["typst_icon"] == "github" -*))
      #text(font: "Font Awesome 7 Brands", "\u{f09b}") #h(0.05cm)
    ((*- elif connection["typst_icon"] == "link" -*))
      #text(font: "Font Awesome 7 Free", weight: 900, "\u{f0ac}") #h(0.05cm)
    ((*- elif connection["typst_icon"] == "location-dot" -*))
      #text(font: "Font Awesome 7 Free", weight: 900, "\u{f3c5}") #h(0.05cm)
    ((*- else -*))
      #text(font: "Font Awesome 7 Free", weight: 900, "\u{f0c1}") #h(0.05cm)
    ((*- endif -*))
  ((*- endif -*))
  ((*- if not design.header.use_urls_as_placeholders_for_connections or not connection["url"] -*))
    ((*- if design.header.use_icons_for_connections and connection["typst_icon"] == "link" -*))
      Website
    ((*- elif design.header.use_icons_for_connections and connection["typst_icon"] == "linkedin" -*))
      LinkedIn
    ((*- elif design.header.use_icons_for_connections and connection["typst_icon"] == "github" -*))
      GitHub
    ((*- else -*))
      <<connection["placeholder"]|escape_typst_characters>>
    ((*- endif -*))
  ((*- else -*))
    ((*- if design.header.use_icons_for_connections and connection["typst_icon"] == "link" -*))
      Website
    ((*- elif design.header.use_icons_for_connections and connection["typst_icon"] == "linkedin" -*))
      LinkedIn
    ((*- elif design.header.use_icons_for_connections and connection["typst_icon"] == "github" -*))
      GitHub
    ((*- else -*))
      <<connection["clean_url"]|escape_typst_characters>>
    ((*- endif -*))
  ((*- endif -*))
  ((*- if connection["url"] and design.header.make_connections_links -*))
  ])
  ((*- endif -*))],
((* endfor *))
)
#connections(connections-list)

((* if cv.photo *))
  ],
)
((* endif *))
