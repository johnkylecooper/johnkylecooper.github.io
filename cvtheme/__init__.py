from typing import Literal

import pydantic_extra_types.color as pydantic_color
import rendercv.themes.options as o


class Page(o.Page):
    show_page_numbering: bool = False
    top_margin: o.TypstDimension = "1.6cm"
    bottom_margin: o.TypstDimension = "1.7cm"
    left_margin: o.TypstDimension = "1.75cm"
    right_margin: o.TypstDimension = "1.75cm"


class Colors(o.Colors):
    text: pydantic_color.Color = pydantic_color.Color("#172235")
    name: pydantic_color.Color = pydantic_color.Color("#2e5f93")
    connections: pydantic_color.Color = pydantic_color.Color("#2e5f93")
    section_titles: pydantic_color.Color = pydantic_color.Color("#2e5f93")
    links: pydantic_color.Color = pydantic_color.Color("#2e5f93")
    last_updated_date_and_page_numbering: pydantic_color.Color = pydantic_color.Color("#5d6978")


class Header(o.Header):
    name_font_family: o.FontFamily = "Raleway"
    name_font_size: o.TypstDimension = "29pt"
    name_bold: bool = True
    alignment: o.Alignment = "left"
    connections_font_family: o.FontFamily = "Raleway"
    vertical_space_between_name_and_connections: o.TypstDimension = "0.42cm"
    vertical_space_between_connections_and_first_section: o.TypstDimension = "0.55cm"
    horizontal_space_between_connections: o.TypstDimension = "0.42cm"


class Links(o.Links):
    use_external_link_icon: bool = False


class Text(o.Text):
    font_family: o.FontFamily = "Raleway"
    font_size: o.TypstDimension = "9.6pt"
    leading: o.TypstDimension = "0.64em"


class SectionTitles(o.SectionTitles):
    font_family: o.FontFamily = "Raleway"
    font_size: o.TypstDimension = "1.28em"
    bold: bool = True
    line_thickness: o.TypstDimension = "0.45pt"
    vertical_space_above: o.TypstDimension = "0.46cm"
    vertical_space_below: o.TypstDimension = "0.24cm"


class Entries(o.Entries):
    vertical_space_between_entries: o.TypstDimension = "1.05em"
    date_and_location_width: o.TypstDimension = "3.85cm"


class Highlights(o.Highlights):
    left_margin: o.TypstDimension = "0cm"
    top_margin: o.TypstDimension = "0.18cm"
    vertical_space_between_highlights: o.TypstDimension = "0.18cm"


class EducationEntryOptions(o.EducationEntryOptions):
    main_column_first_row_template: str = "**INSTITUTION**, AREA -- LOCATION"
    date_and_location_column_template: str = "DATE"


class NormalEntryOptions(o.NormalEntryOptions):
    main_column_first_row_template: str = "**NAME** -- **LOCATION**"
    date_and_location_column_template: str = "DATE"


class ExperienceEntryOptions(o.ExperienceEntryOptions):
    main_column_first_row_template: str = "**POSITION**, COMPANY -- LOCATION"
    date_and_location_column_template: str = "DATE"


class EntryOptionsTypes(o.EntryTypes):
    education_entry: EducationEntryOptions = EducationEntryOptions()
    normal_entry: NormalEntryOptions = NormalEntryOptions()
    experience_entry: ExperienceEntryOptions = ExperienceEntryOptions()


class CvthemeThemeOptions(o.ThemeOptions):
    theme: Literal["cvtheme"] = "cvtheme"
    page: Page = Page()
    colors: Colors = Colors()
    header: Header = Header()
    highlights: Highlights = Highlights()
    text: Text = Text()
    links: Links = Links()
    entries: Entries = Entries()
    entry_types: EntryOptionsTypes = EntryOptionsTypes()
    section_titles: SectionTitles = SectionTitles()
