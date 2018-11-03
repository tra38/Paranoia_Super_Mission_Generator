require 'calyx'
require 'timeout'
require_relative 'lib/controller'
require_relative 'lib/exporter'

puts "Please type in a search term (for advanced searching, use regex syntax...you don't need to add the backslashes, we're already did that for you)."

user_regex = gets.chomp

new_regex = /#{Regexp.escape(user_regex)}/

codename_grammar  = Calyx::Grammar.new do
  syllabe 'the','ing','er','a','ly','ed','i','es','re','tion','in','e','con','y','ter','ex','al','de','com','o','di','en','an','ty','ry','u',
      'ti','ri','be','per','to','pro','ac','ad','ar','ers','ment','or','tions','ble','der','ma','na','si','un','at','dis','ca','cal','man','ap',
      'po','sion','vi','el','est','la','lar','pa','ture','for','is','mer','pe','ra','so','ta','as','col','fi','ful','get','low','ni','par','son',
      'tle','day','ny','pen','pre','tive','car','ci','mo','an','aus','pi','se','ten','tor','ver','ber','can','dy','et','it','mu','no','ple','cu',
      'fac','fer','gen','ic','land','light','ob','of','pos','tain','den','ings','mag','ments','set','some','sub','sur','ters','tu','af','au','cy','fa','im',
      'li','lo','men','min','mon','op','out','rec','ro','sen','side','tal','tic','ties','ward','age','ba','but','cit','cle','co','cov','daq','dif','ence', 'ern','eve','hap','ies','ket','lec','main','mar','mis','my','nal','ness','ning','nu','oc','pres','sup','te','ted','tem','tin','tri','tro','up'

  start "{$syllabe.capitalize}{$syllabe}{$syllabe}"
end

generated_mission = nil

begin
  Timeout.timeout(3) do
  until (new_regex.match(generated_mission))
    word_prompt = codename_grammar.generate
    generated_mission = Controller.generate(word_prompt)
  end

  puts generated_mission

  export_phrase = Exporter.export(generated_mission)

  puts export_phrase
end
rescue Timeout::Error
  puts "We're sorry; we were unable to generate a mission with your specified search term. Thank you for your cooperation."
end