class HeadlineMailer < ActionMailer::Base
  default from: "headline@midnightoil.com"
  
  def post_email(headline)
    mail(:to => "ENV['LAYLAS_EMAIL']", 
         :subject => 'New Headline', 
         :body => "#{headline.content} - #{headline.company}"
         )
  end
end
