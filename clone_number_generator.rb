require 'calyx'

class CloneNumberGenerator
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
      start "1", "2", "3", "4", "5", "6"
    end
  end
end