require_relative 'lib/controller'
require_relative 'lib/exporter'
require_relative 'lib/clone_generator'

# 1 - Get the word prompt
puts "Welcome to custom_names.rb! Now you can put your own spin on the randomly-generated mission, by adding your own custom names to the mission!"
puts "First, let's name your mission. Give me a prompt."

word = gets.chomp

seed = Controller.convert_word_to_seed(word)

# 2 - Generate some sample names to help inspire the user

names_array = Controller.generate_names(seed)

@overdog_name = names_array[0]
@underdog_name = names_array[1]

# 3 - Let the user decide if they want to use those names or try different names

puts "Now, already generated two names for the mission. Let us know if you like them, or if you prefer *different* names..."

keep_looping = true

def menu
  puts "1 - Change the 'overdog' name (currently #{@overdog_name}) [The overdog is a high-clearance authority figure who the players must interact with while completing the mission]"
  puts "2 - Change the 'underdog' name (currently #{@underdog_name}) [The underdog is a low-clearance citizen rebelling against the authority figure...and players must also interact with this figure as well]"
  puts "3 - Continue mission generation..."
end

while (keep_looping)
  menu
  input = gets.to_i
  if input == 1
    puts "Let's change the overdog name then. Type in the new name."
    @overdog_name = gets.chomp
  elsif input == 2
    puts "Let's change the underdog name then. Type in the new name."
    @underdog_name = gets.chomp
  elsif input == 3
    keep_looping = false
  else
    puts "Invalid response. Please try again."
  end
end

# 4 - Generate the mission using the word prompt that we got from Step 2.

generated_mission = Controller.generate_mission(word, seed, @overdog_name, @underdog_name)

puts generated_mission

# 5 - Now, "export" the mission to an HTML document that is viewable on an  external site (itty.bitty.site)
export_phrase = Exporter.export(generated_mission)

puts export_phrase