class Headline < ActiveRecord::Base
  
  default_scope order(created_at: :desc)
  
  validates_uniqueness_of :content, :scope => [:company]
  validates :content, :company, presence: true
end
