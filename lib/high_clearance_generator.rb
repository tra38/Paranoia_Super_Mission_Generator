require 'calyx'

class HighClearanceGenerator
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
      start "G", "B", "I"
    end
  end
end