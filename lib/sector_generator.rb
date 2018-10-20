require 'calyx'

class SectorGenerator
  attr_reader :generator

  def initialize(seed)
    @generator = initialize_generator(seed)
  end

  def generate
    @generator.generate
  end

  private
  def initialize_generator(seed)
    Calyx::Grammar.new(seed: seed) do
        letter "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
        sector_name "{letter}{letter}{letter}"
        start :sector_name
    end
  end
end