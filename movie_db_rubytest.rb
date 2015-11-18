movies = {
    Star_Wars: 5
}

puts 'Add, update, display or delete a movie from the database!'

    choice = gets.chomp
case choice
when "add"
  puts "Input a Movie!"
  title = gets.chomp
 if movies[title.to_sym].nil?
  puts "Input a rating!"
  rating = gets.chomp
  movies[title.to_sym] = rating.to_i
  puts " #{title} was added with rating #{rating}."
 else
  puts "Movie already exists!"
 end
when "update"
  puts "Enter movie to update."
  title = gets.chomp
 if movies[title.to_sym].nil?
  puts "Error: Movie not found."
 else
  puts "Enter new rating."
  rating = gets.chomp
  movies[title.to_sym] = rating.to_i
  puts "#{title} updated rating to #{rating}"
 end
when "display"
  movies.each do |x,y|
  puts "#{x}: #{y}"
  end
when "delete"
  puts" What movie to delete?"
  title = gets.chomp
 if movies[title.to_sym].nil?
  puts "Error: Movie not found."
else
  movies.delete(title.to_sym)
  puts "#{title} has been deleted"
end
else
  puts "Error: Input not defined"
end