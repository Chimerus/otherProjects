class Label < ActiveRecord::Base
  has_many :bands
  has_many :albums, through: :bands
end
