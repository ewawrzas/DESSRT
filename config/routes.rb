Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :desserts, only: [:create, :index, :show]
  end

  root "static_pages#root"
end
