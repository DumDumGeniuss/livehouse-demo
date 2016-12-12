Rails.application.routes.draw do
  match '*any' => 'application#options', :via => [:options]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'hello#index'
  resources :files
end
