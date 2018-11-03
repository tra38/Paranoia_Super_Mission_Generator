require_relative 'lib/controller'
require_relative 'lib/exporter'

# 1. Get the word prompt
puts "Give me a prompt."

# 2. Generate the mission using the word prompt that we got from Step 2.

generated_mission = Controller.generate(word)

puts generated_mission

# 3. Now, "export" the mission to an HTML document that is viewable on an  external site (itty.bitty.site)
export_phrase = Exporter.export(generated_mission)

puts export_phrase