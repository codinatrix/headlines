Headlines::Application.routes.draw do
  resources :headlines, only: [:create]
  
  root to: 'headlines#index'
  
end
