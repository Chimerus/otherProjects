class CreateThingsToDos < ActiveRecord::Migration
  def change
    create_table :things_to_dos do |t|
      t.string :thing
      t.string :description
      t.boolean :done

      t.timestamps null: false
    end
  end
end
