Rails.application.routes.draw do

  apipie
  resources :bands

  namespace :api, defaults: {format: :json} do
    resources :bands
  end
end
