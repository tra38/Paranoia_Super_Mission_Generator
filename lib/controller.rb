require_relative 'clone_generator'
require_relative 'mission_generator'

module Controller
  def self.generate(word)
    integer_array = word.split("").map do |character|
      character.ord
    end

    seed = integer_array.inject { |sum, integer| sum += integer }

    clone_generator = CloneGenerator.new(seed)

    overdog_name = clone_generator.generate(is_underdog: false)
    underdog_name = clone_generator.generate(is_underdog: true)

    mission_generator = MissionGenerator.new(seed)

    generated_mission = mission_generator.generate(mission_name: word, overdog_name: overdog_name, underdog_name: underdog_name)

    generated_mission
  end
end