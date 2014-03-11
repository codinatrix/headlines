class HeadlineMailer < ActionMailer::Base
  default from: "headline@midnightoil.com"
  
  def post_email(headline)
    email = ENV['LAYLAS_EMAIL']
    mail(:to => email, 
         :subject => 'New Headline', 
         :body => "#{headline.content} - #{headline.company}"
         )
  end
end
