class HeadlinesController < ApplicationController

  # GET /headlines
  def index
    @headlines = Headline.all
    @headline = Headline.new
  end

    # GET /headlines/new
  def new
    @headline = Headline.new
  end

  # POST /headlines
  def create
    @headline = Headline.new(headline_params)

    if @headline.save
      redirect_to :root, notice: 'Headline was successfully created.'
    else
      render action: 'new'
    end
  end


  private

    # Only allow a trusted parameter "white list" through.
    def headline_params
      params.require(:headline).permit(:content, :company)
    end
end
