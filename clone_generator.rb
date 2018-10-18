require 'calyx'
require_relative 'high_clearance_generator'
require_relative 'low_clearance_generator'
require_relative 'name_generator'
require_relative 'sector_generator'
require_relative 'clone_number_generator'

class CloneGenerator
  attr_reader :generator

  def initialize(seed)
    @name_generator = NameGenerator.new(seed)
    @sector_generator = SectorGenerator.new(seed)
    @high_clearance_generator = HighClearanceGenerator.new(seed)
    @low_clearance_generator = LowClearanceGenerator.new(seed)
    @number_generator = CloneNumberGenerator.new(seed)
  end

  def generate(is_underdog:)
    sector = @sector_generator.generate
    name = @name_generator.generate
    number = @number_generator.generate
    if is_underdog
      clearance = @low_clearance_generator.generate
    else
      clearance = @high_clearance_generator.generate
    end
    "#{name}-#{clearance}-#{sector}-#{number}"
  end
end