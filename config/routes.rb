Rails.application.routes.draw do
  root to: "static_pages#home"
  get '/sharks', to: 'static_pages#sharks'
  get '/funder', to: 'static_pages#funder'
end
