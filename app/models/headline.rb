class Headline < ActiveRecord::Base
  
  validates_uniqueness_of :content, :scope => [:company]
  validates :content, :company, presence: true
end
