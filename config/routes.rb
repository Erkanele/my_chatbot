Rails.application.routes.draw do
  root 'chat#index'
  post 'generate_response', to: 'chat#generate_response'
end
