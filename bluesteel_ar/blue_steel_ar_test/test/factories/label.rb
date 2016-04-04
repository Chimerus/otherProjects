FactoryGirl.define do 
  factory :label do
    # need to pass in block to get different names
    name {Faker::Address.street_name}
  end
end