class CreateHeadlines < ActiveRecord::Migration
  def change
    create_table :headlines do |t|
      t.string :content
      t.string :company

      t.timestamps
    end
  end
end
