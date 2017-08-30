Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy, :show]
    resource :user, only: [:update]
    resources :desserts, only: [:create, :index, :show]
    resources :checkins, only: [:create, :index, :show, :destroy, :update]
  end

  root "static_pages#root"
end
