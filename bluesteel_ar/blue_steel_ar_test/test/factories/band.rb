FactoryGirl.define do 
  factory :band do
    # need to pass in block to get different names
    name {Faker::App.name}
    genre {Faker::Hacker.adjective}
    # indicates a foreign key relationship, we will overwrite later
    association :label
  end
end