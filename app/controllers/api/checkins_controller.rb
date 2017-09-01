class Api::CheckinsController < ApplicationController
  # before_action :require_logged_in

  def create
    @checkin = current_user.checkins.new(checkin_params)

    if @checkin.save
      render "api/checkins/show"
    else
      render json: @checkin.errors.full_messages, status: 422
    end
  end

  def index
    @checkins = Checkin.all.order(created_at: "ASC").includes(:user)

    render :index
  end

  def update
    @checkin = Checkin.find(params[:id])

    if @checkin.update(checkin_params)
      render "api/checkins/show"
    else
      render json: @checkin.errors.full_messages, status: 422
    end
  end

  def destroy

    @checkin = current_user.checkins.find(params[:id])
    @checkin.destroy
    render json: @checkin
  end

  def show
    @checkin = Checkin.find(params[:id])
  end

  private

  def checkin_params
    params.require(:checkin).permit(:comment, :image_url, :rating, :dessert_id)
  end

end
