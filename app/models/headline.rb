class Headline < ActiveRecord::Base
  
  default_scope order(created_at: :desc)
  
  validates_uniqueness_of :content, :scope => [:company]
  validates :content, :company, presence: true
  validates_length_of :content, :maximum => 100
  
  after_create :send_email
  
  def send_email
    HeadlineMailer.post_email(self).deliver
  end
end
