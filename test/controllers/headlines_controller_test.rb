require 'test_helper'

class HeadlinesControllerTest < ActionController::TestCase
  setup do
    @headline = headlines(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:headlines)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create headline" do
    assert_difference('Headline.count') do
      post :create, headline: { company: @headline.company, content: @headline.content }
    end

    assert_redirected_to headline_path(assigns(:headline))
  end

 end
