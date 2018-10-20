require 'calyx'
require_relative 'lib/clone_generator'
require_relative 'lib/mission_generator'

puts "Give me a prompt."
word = gets.chomp

integer_array = word.split("").map do |character|
  character.ord
end

sum = integer_array.inject { |sum, integer| sum += integer }

clone_generator = CloneGenerator.new(sum)

overdog_name = clone_generator.generate(is_underdog: false)
underdog_name = clone_generator.generate(is_underdog: true)

mission_generator = MissionGenerator.new(sum)

puts mission_generator.generate(mission_name: word, overdog_name: overdog_name, underdog_name: underdog_name)