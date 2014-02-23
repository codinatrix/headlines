Headlines::Application.routes.draw do
  resources :headlines, only: [:create]
  
  root to: 'headlines#index'
    
  #get '/new', to: 'headlines#create', as: 'headlines_path'
  
end
