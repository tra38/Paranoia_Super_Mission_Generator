require 'lzma'
require 'redcarpet'
require 'base64'

module Exporter
  def self.export(generated_mission)
    # 1. Convert the generated mission into HTML
    corrected_generated_mission = generated_mission.gsub("\n", "<br />")

    renderer = Redcarpet::Render::HTML.new(render_options = {})

    markdown = Redcarpet::Markdown.new(renderer, extensions = {})

    markdown_rendered_mission = markdown.render(corrected_generated_mission)

    # 2. Generate a static web page using the HTML from Step 1
    compressed = LZMA.compress(markdown_rendered_mission)

    base64page = Base64.encode64(compressed).gsub("\n","")

    generated_url = "https://itty.bitty.site/#/?#{base64page}"

    # 3. Display the URL to the static web page to the user
    export_phrase = "The mission is also avaliable online for you to view, edit, and share. The URL is below:\n\n#{generated_url}"

    export_phrase
  end
end