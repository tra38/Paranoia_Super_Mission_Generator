require 'calyx'

class LowClearanceGenerator
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
      start "R", "O", "Y"
    end
  end
end