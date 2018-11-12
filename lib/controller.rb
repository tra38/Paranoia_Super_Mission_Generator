require_relative 'clone_generator'
require_relative 'mission_generator'
require 'digest'

module Controller
  def self.generate(word)
    hexdigest = Digest::SHA256.hexdigest(word)

    seed = hexdigest.to_i(16)

    clone_generator = CloneGenerator.new(seed)

    overdog_name = clone_generator.generate(is_underdog: false)
    underdog_name = clone_generator.generate(is_underdog: true)

    mission_generator = MissionGenerator.new(seed)

    generated_mission = mission_generator.generate(mission_name: word, overdog_name: overdog_name, underdog_name: underdog_name)

    generated_mission
  end
end