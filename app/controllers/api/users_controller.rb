class Api::UsersController < ApplicationController
  before_action :require_logged_in


  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.all.where(user_id: current_user.id)
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors.full_messages, status: 422
    end 
  end

  def show
    render json: User.find(params[:id])
  end


  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
