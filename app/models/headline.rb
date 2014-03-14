class Headline < ActiveRecord::Base
  
  default_scope order(created_at: :desc)
  
  validates_uniqueness_of :content, :scope => [:company]
  validates_uniqueness_of :link
  validates :content, :company, :link, presence: true
  validates_length_of :content, :maximum => 100
  validates_length_of :company, :maximum => 100
  validates_length_of :link, :maximum => 500
  
  after_create :send_email
  
  def send_email
    HeadlineMailer.post_email(self).deliver
  end
end
