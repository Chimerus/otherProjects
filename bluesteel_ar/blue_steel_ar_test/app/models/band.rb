class Band < ActiveRecord::Base
  has_many :albums
  belongs_to :label
end
