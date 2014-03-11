class HeadlinesController < ApplicationController
  
  respond_to :json, :html

  def index
    @headlines = Headline.all.page(params[:page]).per(10)
    @headline = Headline.new
  end

    # GET /headlines/new
  def new
    @headline = Headline.new
  end

  # POST /headlines
  def create
    @headline = Headline.new(headline_params)
    @headline.save
    respond_with(@headline, :location => root_url )
  end


  private

    # Only allow a trusted parameter "white list" through.
    def headline_params
      params.require(:headline).permit(:content, :company)
    end
end
