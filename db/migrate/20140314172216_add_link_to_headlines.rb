class AddLinkToHeadlines < ActiveRecord::Migration
  def change
    add_column :headlines, :link, :string
  end
end
