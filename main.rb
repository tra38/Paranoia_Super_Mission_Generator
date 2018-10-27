require 'calyx'
require 'base64'
require 'lzma'
require 'redcarpet'
require_relative 'lib/clone_generator'
require_relative 'lib/mission_generator'

# 1. Get the word prompt and turn it into a seed
puts "Give me a prompt."
word = gets.chomp

integer_array = word.split("").map do |character|
  character.ord
end

sum = integer_array.inject { |sum, integer| sum += integer }

# 2. Generate the mission using the seed that we got from Step 2.
clone_generator = CloneGenerator.new(sum)

overdog_name = clone_generator.generate(is_underdog: false)
underdog_name = clone_generator.generate(is_underdog: true)

mission_generator = MissionGenerator.new(sum)

generated_mission = mission_generator.generate(mission_name: word, overdog_name: overdog_name, underdog_name: underdog_name)

puts generated_mission

# 3. Now, convert the generated mission into HTML
corrected_generated_mission = generated_mission.gsub("\n", "<br />")

renderer = Redcarpet::Render::HTML.new(render_options = {})

markdown = Redcarpet::Markdown.new(renderer, extensions = {})

markdown_rendered_mission = markdown.render(corrected_generated_mission)

# 4. Generate a static web page using the HTML from Step 3
compressed = LZMA.compress(markdown_rendered_mission)

base64page = Base64.encode64(compressed).gsub("\n","")

generated_url = "https://itty.bitty.site/#/?#{base64page}"

# 5. Display the URL to the static web page to the user
puts "The mission is also avaliable online for you to view, edit, and share. The URL is below:"

puts "\n"

puts generated_url