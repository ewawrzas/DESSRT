class Api::CheckinsController < ApplicationController

  def create
    @checkin = current_user.chechins.new(checkin_params)

    if @checkin.save
      render "api/checkins/show"
    else
      render json: @checkin.errors.full_messages, status: 422
    end
  end

  def index
    @checkins = Checkin.all.order(updated_at: "DESC").includes(:user)
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



  private

  def checkin_params
    params.require(:checkin).permit(:comment, :image_url, :rating, :dessert_id)
  end

end
