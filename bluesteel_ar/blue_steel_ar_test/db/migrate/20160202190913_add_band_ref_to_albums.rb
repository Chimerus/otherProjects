class AddBandRefToAlbums < ActiveRecord::Migration
  def change
    add_reference :albums, :band, index: true, foreign_key: true
  end
end
