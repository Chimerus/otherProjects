require 'rubygems'
require 'twilio-ruby'
require 'pry'
 
account_sid = ENV['T_Test_sid']
auth_token = ENV['T_Test_auth']
binding.pry
client = Twilio::REST::Client.new account_sid, auth_token
 
from = "+15005550006"
 # Twilio magic number
 
friends = {
"+14153334444" => "Curious George",
"+14155557775" => "Boots",
"+14155551234" => "Virgil"
}
friends.each do |key, value|
  client.account.messages.create(
    :from => from,
    :to => key,
    :body => "Hey #{value}, This is a test of the emergency system!"
  )
  puts "Sent message to #{value}"
end