require 'fileutils' 

class Photo < ActiveRecord::Base
  attr_accessor :file

  validates :format, inclusion: ['jpg','gif','png']

  before_validation do
      self.format = Rack::Mime::MIME_TYPES.invert[@file.content_type].gsub('.','')
  end


# activerecord callback
  after_save do
    # defining structure/location of path
    # copy temp file to permanent!
    path = Rails.root.join('public','photos', [id, self.format].join('.'))
    image = MiniMagick::Image.open(@file.path)
    # can use only one of these to allow it to keep the right aspect ratio
    image.resize "300x300"
    image.colorspace("Gray")
    image.write path
    # don't need this anymore since imagemagic is manipulating it?
    # FileUtils.mv(@file.path, path)
  end
end