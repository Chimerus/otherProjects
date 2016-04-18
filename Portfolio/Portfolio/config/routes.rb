Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'master#index'

  get '/projects' => 'master#projects'
  get '/projects/:id' => 'master#show'

  get 'about' => 'master#about'

  get 'contact' => 'master#contact'

  # Serve websocket cable requests in-process
  # mount ActionCable.server => '/cable'
end
