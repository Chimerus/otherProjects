class AddLabelRefToBans < ActiveRecord::Migration
  def change
    add_reference :bands, :label, index: true, foreign_key: true
  end
end
