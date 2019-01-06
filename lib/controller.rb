require_relative 'clone_generator'
require_relative 'mission_generator'
require 'digest'

module Controller
  def self.generate(word)
    seed = convert_word_to_seed(word)

    names_array = generate_names(seed)

    overdog_name = names_array[0]

    underdog_name = names_array[1]

    generated_mission = generate_mission(word, seed, overdog_name, underdog_name)

    generated_mission
  end

  def self.convert_word_to_seed(word)
    hexdigest = Digest::SHA256.hexdigest(word)

    seed = hexdigest.to_i(16)

    seed
  end

  def self.generate_names(seed)
    clone_generator = CloneGenerator.new(seed)

    overdog_name = clone_generator.generate(is_underdog: false)
    underdog_name = clone_generator.generate(is_underdog: true)

    [overdog_name, underdog_name]
  end

  def self.generate_mission(word, seed, overdog_name, underdog_name)
    mission_generator = MissionGenerator.new(seed)

    generated_mission = mission_generator.generate(mission_name: word, overdog_name: overdog_name, underdog_name: underdog_name)

    generated_mission
  end
end