print "Input s to th conversion string"
user_input = gets.chomp
user_input.downcase!
if user_input.include?"s"
  user_input.gsub!(/s/, "th")
else
  puts "No s detected"
end
puts "S modification completed: #{user_input}!"